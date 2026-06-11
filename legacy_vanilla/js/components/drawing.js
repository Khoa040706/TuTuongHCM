/* ============================================================
   DRAWING & HIGHLIGHT MANAGERS — Ghi chú & Đánh dấu bài học
   ============================================================ */

// ------------------------------------------------------------
// 1. HIGHLIGHT MANAGER (Bút dạ quang)
// ------------------------------------------------------------
const HighlightManager = {
  highlights: [], // Array of highlights: { id, path, startOffset, endOffset, color, text }
  activeTool: 'cursor',
  activeColor: 'rgba(254, 240, 138, 0.45)', // Vàng nhạt mặc định

  init() {
    this.load();
    this.bindEvents();
  },

  load() {
    const saved = localStorage.getItem('studymaster-highlights');
    if (saved) {
      try {
        this.highlights = JSON.parse(saved);
      } catch (e) {
        console.error('Lỗi khi nạp highlights:', e);
        this.highlights = [];
      }
    }
  },

  save() {
    localStorage.setItem('studymaster-highlights', JSON.stringify(this.highlights));
  },

  setTool(tool, color) {
    this.activeTool = tool;
    if (tool === 'highlighter') {
      this.activeColor = color;
    }
  },

  clearAll() {
    this.highlights = [];
    this.save();
    // Re-render app to clear highlight spans
    if (typeof App !== 'undefined') {
      App.render();
      this.applyAll();
    }
  },

  bindEvents() {
    const contentArea = document.getElementById('app'); // Lắng nghe trên app mount point
    if (!contentArea) return;

    // Lắng nghe sự kiện bôi đen văn bản
    contentArea.addEventListener('mouseup', () => this.handleTextSelection());
    contentArea.addEventListener('touchend', () => this.handleTextSelection());

    // Lắng nghe sự kiện xóa highlight khi ở chế độ Eraser
    contentArea.addEventListener('click', (e) => {
      if (this.activeTool !== 'eraser') return;

      let target = e.target;

      // Nếu click trúng canvas, tìm phần tử bên dưới nó
      if (target && target.id === 'drawing-canvas') {
        const canvas = target;
        canvas.style.pointerEvents = 'none';
        target = document.elementFromPoint(e.clientX, e.clientY);
        canvas.style.pointerEvents = 'auto';
      }

      const hlSpan = target ? target.closest('.user-highlight') : null;
      if (hlSpan) {
        const id = hlSpan.getAttribute('data-hl-id');
        this.deleteHighlight(id);
      }
    });
  },

  handleTextSelection() {
    if (this.activeTool !== 'highlighter') return;

    const selection = window.getSelection();
    if (selection.isCollapsed || !selection.toString().trim()) return;

    const range = selection.getRangeAt(0);
    
    // Tìm phần tử cha chứa data-hl-path gần nhất
    let container = range.commonAncestorContainer;
    if (container.nodeType === Node.TEXT_NODE) {
      container = container.parentNode;
    }

    const hlElement = container.closest('[data-hl-path]');
    if (!hlElement) return;

    const path = hlElement.getAttribute('data-hl-path');

    // Tính offset bắt đầu và kết thúc tương đối theo plain text của thẻ hlElement
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(hlElement);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    
    const startOffset = preSelectionRange.toString().length;
    const endOffset = startOffset + range.toString().length;

    const id = `hl-${Date.now()}`;
    const highlight = {
      id,
      path,
      startOffset,
      endOffset,
      color: this.activeColor,
      text: range.toString()
    };

    // Lưu highlight
    this.highlights.push(highlight);
    this.save();

    // Áp dụng vẽ highlight lên DOM lập tức
    this.applyHighlight(hlElement, startOffset, endOffset, this.activeColor, id);

    // Xóa bôi xanh mặc định của trình duyệt
    selection.removeAllRanges();
  },

  applyHighlight(element, start, end, color, id) {
    const textNodes = [];
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
      textNodes.push(node);
    }

    let charIndex = 0;
    textNodes.forEach(node => {
      const nodeLength = node.nodeValue.length;
      const nodeStart = charIndex;
      const nodeEnd = charIndex + nodeLength;

      if (nodeEnd > start && nodeStart < end) {
        // Có giao thoa với vùng chọn highlight
        const offsetInNodeStart = Math.max(0, start - nodeStart);
        const offsetInNodeEnd = Math.min(nodeLength, end - nodeStart);

        let targetNode = node;
        if (offsetInNodeStart > 0) {
          targetNode = node.splitText(offsetInNodeStart);
        }
        
        const remainingLength = offsetInNodeEnd - offsetInNodeStart;
        if (remainingLength > 0 && targetNode.nodeValue.length > remainingLength) {
          targetNode.splitText(remainingLength);
        }

        // Tạo thẻ span bọc
        const span = document.createElement('span');
        span.className = 'user-highlight';
        span.setAttribute('data-hl-id', id);
        span.style.backgroundColor = color;
        
        targetNode.parentNode.insertBefore(span, targetNode);
        span.appendChild(targetNode);
      }
      charIndex += nodeLength;
    });
  },

  applyAll() {
    // Duyệt qua tất cả các khối có gắn data-hl-path
    const hlElements = document.querySelectorAll('[data-hl-path]');
    hlElements.forEach(el => {
      const path = el.getAttribute('data-hl-path');
      const matches = this.highlights.filter(h => h.path === path);
      
      // Sắp xếp các highlight theo startOffset giảm dần 
      // để tránh lệch index khi cắt chuỗi văn bản (splitText)
      matches.sort((a, b) => b.startOffset - a.startOffset);
      
      matches.forEach(h => {
        this.applyHighlight(el, h.startOffset, h.endOffset, h.color, h.id);
      });
    });
  },

  deleteHighlight(id) {
    this.highlights = this.highlights.filter(h => h.id !== id);
    this.save();
    
    // Re-render lại trang để cập nhật cấu trúc DOM sạch sẽ
    if (typeof App !== 'undefined') {
      App.render();
      this.applyAll();
    }
  }
};


// ------------------------------------------------------------
// 2. DRAWING MANAGER (Bút vẽ tự do & Canvas)
// ------------------------------------------------------------
const DrawingManager = {
  paths: [], // Array of drawn paths: { color, width, points: [{x, y}] }
  activeTool: 'cursor',
  activeColor: '#EF4444', // Bút đỏ mặc định
  isDrawing: false,
  isErasing: false,
  canvas: null,
  ctx: null,
  eraserRadius: 18, // Bán kính tẩy nét

  init() {
    this.load();
    this.createCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  },

  load() {
    const saved = localStorage.getItem('studymaster-drawings');
    if (saved) {
      try {
        this.paths = JSON.parse(saved);
      } catch (e) {
        console.error('Lỗi khi nạp drawings:', e);
        this.paths = [];
      }
    }
  },

  save() {
    localStorage.setItem('studymaster-drawings', JSON.stringify(this.paths));
  },

  setTool(tool, color) {
    this.activeTool = tool;
    if (tool === 'pen') {
      this.activeColor = color;
    }
  },

  createCanvas() {
    const container = document.getElementById('content-area');
    if (!container) return;

    // Remove existing canvas if any
    const oldCanvas = document.getElementById('drawing-canvas');
    if (oldCanvas) oldCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'drawing-canvas';
    canvas.className = 'drawing-canvas';
    container.appendChild(canvas);

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.resizeCanvas();
    this.bindEvents();
  },

  resizeCanvas() {
    const container = document.getElementById('content-area');
    if (!container || !this.canvas) return;

    this.canvas.width = container.clientWidth;
    // Set canvas height to matches container's full scrollable height
    this.canvas.height = container.scrollHeight;

    this.redraw();
  },

  bindEvents() {
    if (!this.canvas) return;

    // Touch support
    const getCoords = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top + window.scrollY - (rect.top + window.scrollY - this.canvas.offsetTop)
      };
    };

    const startDraw = (e) => {
      if (this.activeTool !== 'pen' && this.activeTool !== 'eraser') return;
      
      e.preventDefault();
      const coords = getCoords(e);

      if (this.activeTool === 'pen') {
        this.isDrawing = true;
        
        // Tạo nét vẽ mới với tọa độ chuẩn hóa (theo tỷ lệ canvas)
        const newPath = {
          color: this.activeColor,
          width: 3.5,
          points: [{
            x: coords.x / this.canvas.width,
            y: coords.y / this.canvas.height
          }]
        };
        this.paths.push(newPath);
        this.redraw();
      } else if (this.activeTool === 'eraser') {
        this.isErasing = true;
        this.eraseAt(coords.x, coords.y);
      }
    };

    const draw = (e) => {
      if (!this.isDrawing && !this.isErasing) return;
      e.preventDefault();

      const coords = getCoords(e);

      if (this.isDrawing) {
        const currentPath = this.paths[this.paths.length - 1];
        currentPath.points.push({
          x: coords.x / this.canvas.width,
          y: coords.y / this.canvas.height
        });
        this.redraw();
      } else if (this.isErasing) {
        this.eraseAt(coords.x, coords.y);
      }
    };

    const stopDraw = () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.save();
      }
      if (this.isErasing) {
        this.isErasing = false;
        this.save();
      }
    };

    // Mouse listeners
    this.canvas.addEventListener('mousedown', startDraw);
    this.canvas.addEventListener('mousemove', draw);
    this.canvas.addEventListener('mouseup', stopDraw);
    this.canvas.addEventListener('mouseleave', stopDraw);

    // Touch listeners
    this.canvas.addEventListener('touchstart', startDraw, { passive: false });
    this.canvas.addEventListener('touchmove', draw, { passive: false });
    this.canvas.addEventListener('touchend', stopDraw);
  },

  eraseAt(ex, ey) {
    if (!this.canvas) return;

    let pathRemoved = false;
    
    // Quét từ cuối mảng nét vẽ (nét mới nhất)
    for (let i = this.paths.length - 1; i >= 0; i--) {
      const path = this.paths[i];
      
      // Kiểm tra xem có điểm nào của nét vẽ nằm trong bán kính tẩy không
      for (let j = 0; j < path.points.length; j++) {
        const px = path.points[j].x * this.canvas.width;
        const py = path.points[j].y * this.canvas.height;
        
        // Tính khoảng cách Euclid
        const dist = Math.sqrt((px - ex) ** 2 + (py - ey) ** 2);
        if (dist <= this.eraserRadius) {
          // Xóa nguyên cả nét vẽ (Stroke Eraser)
          this.paths.splice(i, 1);
          pathRemoved = true;
          break; // Thoát vòng lặp điểm, chuyển qua lưu trữ và vẽ lại
        }
      }
      if (pathRemoved) break; // Chỉ xóa 1 nét mỗi lần quét để mượt mà
    }

    if (pathRemoved) {
      this.redraw();
    }
  },

  redraw() {
    if (!this.ctx || !this.canvas) return;

    // Xóa canvas cũ
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Cấu hình nét vẽ
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.paths.forEach(path => {
      if (path.points.length === 0) return;

      this.ctx.beginPath();
      this.ctx.strokeStyle = path.color;
      this.ctx.lineWidth = path.width;

      // Điểm xuất phát
      const startX = path.points[0].x * this.canvas.width;
      const startY = path.points[0].y * this.canvas.height;
      this.ctx.moveTo(startX, startY);

      // Điểm nối tiếp
      for (let i = 1; i < path.points.length; i++) {
        const px = path.points[i].x * this.canvas.width;
        const py = path.points[i].y * this.canvas.height;
        this.ctx.lineTo(px, py);
      }

      this.ctx.stroke();
    });
  },

  clearAll() {
    this.paths = [];
    this.save();
    this.redraw();
  }
};
