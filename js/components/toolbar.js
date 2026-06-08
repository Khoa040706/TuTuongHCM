/* ============================================================
   NOTE TOOLBAR — Floating UI for Drawing & Highlighting
   ============================================================ */

const NoteToolbar = {
  activeTool: 'cursor', // cursor, pen, highlighter, eraser
  activeColor: '#EAB308', // Default to Sun Gold
  isCollapsed: true,

  render() {
    // Check if toolbar already exists
    if (document.getElementById('note-toolbar')) return;

    // Create container
    const toolbar = document.createElement('div');
    toolbar.id = 'note-toolbar';
    toolbar.className = 'floating-toolbar floating-toolbar--collapsed';

    toolbar.innerHTML = `
      <!-- Tool Group: Navigation & Eraser -->
      <div class="floating-toolbar__group">
        <button class="floating-toolbar__btn floating-toolbar__btn--active" id="tool-cursor" title="Chế độ đọc & cuộn (Cursor)">
          🖱️
        </button>
        <button class="floating-toolbar__btn" id="tool-eraser" title="Cục tẩy (Eraser)">
          🧽
        </button>
      </div>

      <div class="floating-toolbar__divider"></div>

      <!-- Tool Group: Pen (Vẽ tự do) & Colors -->
      <div class="floating-toolbar__group">
        <button class="floating-toolbar__btn" id="tool-pen" title="Bút vẽ tự do (Pen)">
          ✏️
        </button>
        <button class="floating-toolbar__btn floating-toolbar__btn--red" data-color="#EF4444" title="Bút đỏ">🔴</button>
        <button class="floating-toolbar__btn floating-toolbar__btn--yellow" data-color="#EAB308" title="Bút vàng">🟡</button>
        <button class="floating-toolbar__btn floating-toolbar__btn--green" data-color="#22C55E" title="Bút xanh lá">🟢</button>
      </div>

      <div class="floating-toolbar__divider"></div>

      <!-- Tool Group: Highlighter (Bút dạ quang) & Colors -->
      <div class="floating-toolbar__group">
        <button class="floating-toolbar__btn" id="tool-highlighter" title="Bút dạ quang (Highlighter)">
          🖍️
        </button>
        <button class="floating-toolbar__btn floating-toolbar__btn--yellow" data-hl-color="rgba(254, 240, 138, 0.45)" title="Dạ quang vàng">🟡</button>
        <button class="floating-toolbar__btn floating-toolbar__btn--pink" data-hl-color="rgba(244, 63, 94, 0.4)" title="Dạ quang hồng">💗</button>
        <button class="floating-toolbar__btn floating-toolbar__btn--green" data-hl-color="rgba(34, 197, 94, 0.35)" title="Dạ quang xanh lá">🟢</button>
      </div>

      <div class="floating-toolbar__divider"></div>

      <!-- Tool Group: Action -->
      <div class="floating-toolbar__group">
        <button class="floating-toolbar__btn" id="tool-clear" title="Xóa sạch ghi chú (Clear All)">
          🗑️
        </button>
      </div>
    `;

    // Create Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'note-toolbar-toggle';
    toggleBtn.className = 'toolbar-toggle-btn';
    toggleBtn.title = 'Mở công cụ ghi chú';
    toggleBtn.innerHTML = '🎨';

    document.body.appendChild(toolbar);
    document.body.appendChild(toggleBtn);

    this.bindEvents();
  },

  bindEvents() {
    const toolbar = document.getElementById('note-toolbar');
    const toggleBtn = document.getElementById('note-toolbar-toggle');

    if (!toolbar || !toggleBtn) return;

    // Toggle Toolbar
    toggleBtn.addEventListener('click', () => {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        toolbar.classList.add('floating-toolbar--collapsed');
        toggleBtn.classList.remove('toolbar-toggle-btn--active');
        toggleBtn.innerHTML = '🎨';
        // Revert to cursor mode when closed
        this.selectTool('cursor');
      } else {
        toolbar.classList.remove('floating-toolbar--collapsed');
        toggleBtn.classList.add('toolbar-toggle-btn--active');
        toggleBtn.innerHTML = '❌';
      }
    });

    // Cursor click
    document.getElementById('tool-cursor').addEventListener('click', () => {
      this.selectTool('cursor');
    });

    // Eraser click
    document.getElementById('tool-eraser').addEventListener('click', () => {
      this.selectTool('eraser');
    });

    // Pen click
    const penBtn = document.getElementById('tool-pen');
    penBtn.addEventListener('click', () => {
      this.selectTool('pen');
    });

    // Pen colors
    const colorBtns = toolbar.querySelectorAll('[data-color]');
    colorBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const color = btn.getAttribute('data-color');
        this.activeColor = color;
        this.selectTool('pen');
        
        // Remove active scale from other colors
        colorBtns.forEach(b => b.style.transform = '');
        btn.style.transform = 'scale(1.25)';
      });
    });

    // Highlighter click
    const hlBtn = document.getElementById('tool-highlighter');
    hlBtn.addEventListener('click', () => {
      this.selectTool('highlighter');
    });

    // Highlighter colors
    const hlColorBtns = toolbar.querySelectorAll('[data-hl-color]');
    hlColorBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const color = btn.getAttribute('data-hl-color');
        this.activeColor = color;
        this.selectTool('highlighter');

        // Remove active scale from other colors
        hlColorBtns.forEach(b => b.style.transform = '');
        btn.style.transform = 'scale(1.25)';
      });
    });

    // Clear All click
    document.getElementById('tool-clear').addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa sạch toàn bộ hình vẽ và highlight trên trang này?')) {
        if (typeof DrawingManager !== 'undefined') {
          DrawingManager.clearAll();
        }
        if (typeof HighlightManager !== 'undefined') {
          HighlightManager.clearAll();
        }
      }
    });
  },

  selectTool(tool) {
    this.activeTool = tool;

    // Reset all buttons active class
    const btns = document.querySelectorAll('.floating-toolbar__btn');
    btns.forEach(btn => btn.classList.remove('floating-toolbar__btn--active'));

    // Set active button
    if (tool === 'cursor') {
      document.getElementById('tool-cursor').classList.add('floating-toolbar__btn--active');
    } else if (tool === 'eraser') {
      document.getElementById('tool-eraser').classList.add('floating-toolbar__btn--active');
    } else if (tool === 'pen') {
      document.getElementById('tool-pen').classList.add('floating-toolbar__btn--active');
    } else if (tool === 'highlighter') {
      document.getElementById('tool-highlighter').classList.add('floating-toolbar__btn--active');
    }

    // Set body mode class for cursor and pointer-events
    document.body.classList.remove('mode-pen', 'mode-highlighter', 'mode-eraser');
    if (tool !== 'cursor') {
      document.body.classList.add(`mode-${tool}`);
    }

    // Notify managers
    if (typeof DrawingManager !== 'undefined') {
      DrawingManager.setTool(tool, this.activeColor);
    }
    if (typeof HighlightManager !== 'undefined') {
      HighlightManager.setTool(tool, this.activeColor);
    }
  }
};
