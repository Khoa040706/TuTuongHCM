/* ============================================================
   QUIZ.JS — StudyMaster Multiple Choice Quiz Component
   ============================================================ */

const QuizComponent = {
  container: null,
  name: '',
  mode: 'immediate', // 'immediate' (xem ngay) hoặc 'end' (xem sau nộp bài)
  questions: [],
  currentIndex: 0,
  answers: [], // Mảng lưu index đáp án người dùng chọn cho 40 câu (-1: chưa chọn)
  startTime: null,
  answeredTime: 0, // Tính bằng giây
  timerInterval: null,
  isSubmitted: false,
  currentChapterId: '',
  STORAGE_KEY: 'studymaster_quiz_rankings_chuong-1',
  STATE_STORAGE_KEY: 'studymaster_active_quiz_state',
  chapterQuestionsMap: {
    'chuong-1': 'questionsChuong1',
    'chuong-2': 'questionsChuong2',
    'chuong-3': 'questionsChuong3',
    'chuong-4': 'questionsChuong4',
    'chuong-5': 'questionsChuong5',
    'chuong-6': 'questionsChuong6'
  },

  /** Check if a global variable exists in scope (handles ES6 let/const scope issues) */
  checkQuestionsExist(qVarName) {
    if (!qVarName) return false;
    try {
      if (qVarName === 'questionsChuong1') {
        return typeof questionsChuong1 !== 'undefined';
      }
      return eval(`typeof ${qVarName} !== 'undefined'`);
    } catch (e) {
      return false;
    }
  },

  /** Retrieve the question data object from global scope safely */
  getQuestionData(qVarName) {
    if (!qVarName) return null;
    try {
      if (qVarName === 'questionsChuong1') {
        return typeof questionsChuong1 !== 'undefined' ? questionsChuong1 : null;
      }
      return eval(qVarName);
    } catch (e) {
      return null;
    }
  },

  /** Get Section and Subsection Title dynamically based on current chapter data */
  getSectionAndSubsectionTitle(sectionId, subsectionId) {
    if (!sectionId) return '';
    
    // Retrieve chapter metadata
    let currentChapter = null;
    if (typeof App !== 'undefined' && App.chapters) {
      currentChapter = App.chapters.find(ch => ch.id === this.currentChapterId);
    }
    
    if (!currentChapter) {
      // Fallback mapping if App/chapters is not loaded
      const fallback = {
        'doi-tuong-nghien-cuu': 'Đối tượng nghiên cứu',
        'phuong-phap-nghien-cuu': 'Phương pháp nghiên cứu',
        'y-nghia-hoc-tap': 'Ý nghĩa học tập đối với SV',
        'khai-niem-tu-tuong': 'Khái niệm tư tưởng và TTHCM',
        'doi-tuong-nhiem-vu': 'Đối tượng và nhiệm vụ của môn học',
        'moi-quan-he': 'Mối quan hệ với các môn học khác',
        'co-so-phuong-phap-luan': 'Cơ sở phương pháp luận',
        'cac-phuong-phap-cu-the': 'Các phương pháp nghiên cứu cụ thể',
        'nang-cao-tu-duy': 'Nâng cao tư duy lý luận và phẩm chất cách mạng',
        'boi-duong-pham-chat': 'Bồi dưỡng phẩm chất đạo đức'
      };
      const secTitle = fallback[sectionId] || sectionId;
      const subTitle = fallback[subsectionId] || '';
      return subTitle ? `${secTitle} › ${subTitle}` : secTitle;
    }

    const section = currentChapter.sections.find(s => s.id === sectionId);
    if (!section) return sectionId;

    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (subsection) {
      return `Mục ${section.roman}.${subsection.number}: ${subsection.title}`;
    }
    
    return `Phần ${section.roman}: ${section.title}`;
  },

  /** Mount the Quiz Component inside a target container */
  mount(containerEl) {
    this.container = containerEl;
    
    // Hide standard note toolbar if visible
    const noteToolbar = document.getElementById('note-toolbar');
    const noteToolbarToggle = document.getElementById('note-toolbar-toggle');
    if (noteToolbar) noteToolbar.style.display = 'none';
    if (noteToolbarToggle) noteToolbarToggle.style.display = 'none';

    // Disable drawing canvas in quiz mode
    if (typeof DrawingManager !== 'undefined' && DrawingManager.canvas) {
      DrawingManager.canvas.style.pointerEvents = 'none';
    }

    // Check for saved state (accidentally refreshed or closed)
    const savedStateStr = localStorage.getItem(this.STATE_STORAGE_KEY);
    if (savedStateStr) {
      try {
        const savedState = JSON.parse(savedStateStr);
        if (savedState && savedState.questions && savedState.questions.length > 0) {
          this.renderResumeView(savedState);
          return;
        }
      } catch (e) {
        console.error('Error parsing saved quiz state:', e);
        this.clearQuizState();
      }
    }

    this.resetState();
    this.renderChapterSelection();
  },

  /** Render Resume / Recovery screen if a suspended quiz is found */
  renderResumeView(savedState) {
    if (!this.container) return;

    // Get chapter title
    let chapterTitle = savedState.currentChapterId;
    if (typeof App !== 'undefined' && App.chapters) {
      const chObj = App.chapters.find(ch => ch.id === savedState.currentChapterId);
      if (chObj) {
        chapterTitle = `${chObj.title}: ${chObj.subtitle}`;
      }
    }

    const answeredCount = savedState.answers.filter(ans => ans !== -1).length;
    const totalCount = savedState.questions.length;

    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card quiz-resume-card">
          <h2 class="quiz-setup__title">🔄 Phát hiện bài làm chưa hoàn thành</h2>
          <p class="quiz-setup__subtitle">Hệ thống tìm thấy một bài kiểm tra đang làm dở của bạn. Bạn có muốn tiếp tục?</p>
          
          <div class="quiz-resume-info">
            <div class="quiz-resume-info__row">
              <span class="quiz-resume-info__label">Người học:</span>
              <span class="quiz-resume-info__value">${savedState.name || 'Người dùng'}</span>
            </div>
            <div class="quiz-resume-info__row">
              <span class="quiz-resume-info__label">Chương học:</span>
              <span class="quiz-resume-info__value" style="text-align: right; max-width: 280px; display: inline-block; word-break: break-word;">${chapterTitle}</span>
            </div>
            <div class="quiz-resume-info__row">
              <span class="quiz-resume-info__label">Chế độ hiển thị:</span>
              <span class="quiz-resume-info__value">${savedState.mode === 'immediate' ? 'Xem đáp án ngay' : 'Xem sau nộp bài'}</span>
            </div>
            <div class="quiz-resume-info__row">
              <span class="quiz-resume-info__label">Tiến độ:</span>
              <span class="quiz-resume-info__value">${answeredCount} / ${totalCount} câu</span>
            </div>
            <div class="quiz-resume-info__row">
              <span class="quiz-resume-info__label">Thời gian đã làm:</span>
              <span class="quiz-resume-info__value">${this.formatTime(savedState.elapsedTime)}</span>
            </div>
          </div>

          <div class="quiz-resume-actions">
            <button class="quiz-btn" id="quiz-resume-continue-btn" style="background: #22C55E;">
              ▶ Tiếp tục làm bài
            </button>
            <div class="quiz-resume-actions__row">
              <button class="quiz-btn quiz-btn--secondary" id="quiz-resume-restart-btn">
                🔄 Làm bài mới
              </button>
              <button class="quiz-btn quiz-btn--secondary" id="quiz-resume-exit-btn">
                🚪 Thoát ra
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind events
    document.getElementById('quiz-resume-continue-btn').addEventListener('click', () => {
      this.resumeQuiz(savedState);
    });

    document.getElementById('quiz-resume-restart-btn').addEventListener('click', () => {
      if (confirm('Làm bài mới sẽ xóa sạch toàn bộ tiến trình của bài cũ. Bạn có chắc chắn?')) {
        this.clearQuizState();
        this.resetState();
        this.renderChapterSelection();
      }
    });

    document.getElementById('quiz-resume-exit-btn').addEventListener('click', () => {
      if (confirm('Thoát ra sẽ xóa tiến trình bài cũ. Bạn có chắc chắn?')) {
        this.clearQuizState();
        this.unmount();
        if (typeof App !== 'undefined' && App.exitQuizMode) {
          App.exitQuizMode();
        }
      }
    });
  },

  /** Resume the quiz from a saved state */
  resumeQuiz(savedState) {
    this.name = savedState.name;
    this.mode = savedState.mode;
    this.currentChapterId = savedState.currentChapterId;
    this.questions = savedState.questions;
    this.currentIndex = savedState.currentIndex;
    this.answers = savedState.answers;
    this.answeredTime = savedState.elapsedTime;
    this.STORAGE_KEY = 'studymaster_quiz_rankings_' + this.currentChapterId;
    this.isSubmitted = false;

    // Start Timer with offset
    this.startTime = Date.now() - (this.answeredTime * 1000);
    this.timerInterval = setInterval(() => {
      this.answeredTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.updateTimerUI();
      this.saveQuizState(); // save progress periodically (every second)
    }, 1000);

    this.renderQuizLayout();
  },

  /** Save the current quiz state in localStorage */
  saveQuizState() {
    if (!this.isInProgress()) return;
    const state = {
      name: this.name,
      mode: this.mode,
      currentChapterId: this.currentChapterId,
      questions: this.questions,
      currentIndex: this.currentIndex,
      answers: this.answers,
      elapsedTime: this.answeredTime
    };
    try {
      localStorage.setItem(this.STATE_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save quiz state:', e);
    }
  },

  /** Clear the saved quiz state in localStorage */
  clearQuizState() {
    try {
      localStorage.removeItem(this.STATE_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear quiz state:', e);
    }
  },

  /** Render Chapter Selection Grid */
  renderChapterSelection() {
    if (!this.container) return;

    // Retrieve registered chapters
    let chapters = [];
    if (typeof App !== 'undefined' && App.chapters) {
      chapters = App.chapters;
    }

    const cardsHTML = chapters.map(ch => {
      const qVar = this.chapterQuestionsMap[ch.id];
      const isReady = this.checkQuestionsExist(qVar);
      
      return `
        <div class="quiz-chapter-card ${!isReady ? 'quiz-chapter-card--disabled' : ''}" data-id="${ch.id}" ${!isReady ? 'title="Chương này đang được phát triển câu hỏi trắc nghiệm"' : ''}>
          <div class="quiz-chapter-card__header">
            <h4 class="quiz-chapter-card__title">${ch.title}</h4>
            <span class="quiz-chapter-card__badge ${isReady ? 'quiz-chapter-card__badge--ready' : 'quiz-chapter-card__badge--locked'}">
              ${isReady ? 'Sẵn sàng 🟢' : 'Đang cập nhật 🔒'}
            </span>
          </div>
          <p class="quiz-chapter-card__subtitle">${ch.subtitle || ''}</p>
          <div style="text-align: right; font-size: 13px; font-weight: 700; color: ${isReady ? 'var(--primary, #CA8A04)' : 'var(--text-muted, #78716C)'}">
            ${isReady ? 'Bắt đầu ôn tập ➔' : 'Chưa khả dụng'}
          </div>
        </div>
      `;
    }).join('');

    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card" style="text-align: center;">
          <h2 class="quiz-setup__title">📝 Đánh giá Kiến thức</h2>
          <p class="quiz-setup__subtitle">Vui lòng chọn chương học dưới đây để bắt đầu làm bài trắc nghiệm (đề thi gồm 40 câu chọn lọc)</p>
          
          <div class="quiz-chapter-grid">
            ${cardsHTML}
          </div>
          
          <button class="quiz-btn quiz-btn--secondary" id="quiz-selection-exit-btn" style="margin-top: 32px; max-width: 200px;">
            📖 Quay lại đọc bài
          </button>
        </div>
      </div>
    `;

    // Bind events
    this.container.querySelectorAll('.quiz-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const chapterId = card.getAttribute('data-id');
        const qVar = this.chapterQuestionsMap[chapterId];
        const isReady = this.checkQuestionsExist(qVar);
        
        if (!isReady) return; // locked/disabled
        
        this.currentChapterId = chapterId;
        this.STORAGE_KEY = 'studymaster_quiz_rankings_' + chapterId;
        this.renderSetup();
      });
    });

    document.getElementById('quiz-selection-exit-btn').addEventListener('click', () => {
      this.unmount();
      if (typeof App !== 'undefined' && App.exitQuizMode) {
        App.exitQuizMode();
      }
    });
  },

  /** Unmount and clean up */
  unmount() {
    this.resetState();
    
    // Restore note toolbar
    const noteToolbar = document.getElementById('note-toolbar');
    const noteToolbarToggle = document.getElementById('note-toolbar-toggle');
    if (noteToolbar) noteToolbar.style.display = '';
    if (noteToolbarToggle) noteToolbarToggle.style.display = '';

    // Restore drawing canvas
    if (typeof DrawingManager !== 'undefined' && DrawingManager.canvas) {
      DrawingManager.canvas.style.pointerEvents = '';
    }
  },

  /** Reset all states and timer */
  resetState() {
    this.name = localStorage.getItem('studymaster_user_name') || '';
    this.mode = 'immediate';
    this.questions = [];
    this.currentIndex = 0;
    this.answers = [];
    this.startTime = null;
    this.answeredTime = 0;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isSubmitted = false;
  },

  /** Check if quiz is in progress */
  isInProgress() {
    return this.questions.length > 0 && !this.isSubmitted;
  },

  /** Render Quiz Setup/Configuration Screen */
  renderSetup() {
    if (!this.container) return;

    // Retrieve selected chapter title
    let chapterTitle = this.currentChapterId;
    if (typeof App !== 'undefined' && App.chapters) {
      const chObj = App.chapters.find(ch => ch.id === this.currentChapterId);
      if (chObj) {
        chapterTitle = `${chObj.title}: ${chObj.subtitle}`;
      }
    }

    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card">
          <h2 class="quiz-setup__title">📝 Đánh giá Kiến thức</h2>
          <p class="quiz-setup__subtitle">${chapterTitle}</p>
          
          <form id="quiz-setup-form">
            <div class="quiz-setup__form-group">
              <label class="quiz-setup__label" for="quiz-name">Họ và tên người học</label>
              <input type="text" id="quiz-name" class="quiz-setup__input" placeholder="Nhập tên của bạn để ghi nhận xếp hạng..." value="${this.name}" required />
            </div>

            <div class="quiz-setup__form-group">
              <label class="quiz-setup__label">Chế độ xem đáp án</label>
              <div class="quiz-setup__modes">
                <div class="quiz-setup__mode-card ${this.mode === 'immediate' ? 'quiz-setup__mode-card--active' : ''}" data-mode="immediate">
                  <div class="quiz-setup__mode-title">⚡ Xem ngay</div>
                  <div class="quiz-setup__mode-desc">Phản hồi đúng/sai và giải thích hiển thị ngay lập tức sau khi bạn chọn đáp án cho mỗi câu. Phù hợp để luyện tập.</div>
                </div>
                <div class="quiz-setup__mode-card ${this.mode === 'end' ? 'quiz-setup__mode-card--active' : ''}" data-mode="end">
                  <div class="quiz-setup__mode-title">⏱️ Xem sau nộp bài</div>
                  <div class="quiz-setup__mode-desc">Xem đáp án đúng/sai và giải thích của tất cả 40 câu sau khi đã nộp bài hoàn chỉnh. Phù hợp để thi thử nghiêm túc.</div>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
              <button type="button" class="quiz-btn quiz-btn--secondary" id="quiz-setup-back-btn" style="width: auto; padding: 14px 24px;">
                ◀ Quay lại
              </button>
              <button type="button" class="quiz-btn quiz-btn--secondary" id="quiz-view-all-btn" style="flex: 1; min-width: 200px; border-color: var(--primary); color: var(--primary); font-weight: 700;">
                📖 Xem bộ đề tổng (100 câu)
              </button>
              <button type="submit" class="quiz-btn" style="flex: 1; min-width: 200px;">
                🚀 Bắt đầu làm bài (40 câu)
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    // Bind setup events
    const form = document.getElementById('quiz-setup-form');
    const modeCards = this.container.querySelectorAll('.quiz-setup__mode-card');
    
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        modeCards.forEach(c => c.classList.remove('quiz-setup__mode-card--active'));
        card.classList.add('quiz-setup__mode-card--active');
        this.mode = card.getAttribute('data-mode');
      });
    });

    document.getElementById('quiz-setup-back-btn').addEventListener('click', () => {
      this.clearQuizState();
      this.renderChapterSelection();
    });

    document.getElementById('quiz-view-all-btn').addEventListener('click', () => {
      this.renderAllQuestionsView();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = document.getElementById('quiz-name').value.trim();
      if (!nameVal) {
        alert('Vui lòng điền họ và tên!');
        return;
      }
      this.name = nameVal;
      localStorage.setItem('studymaster_user_name', this.name);
      this.startQuiz();
    });
  },

  /** Sample 40 questions and start timing */
  startQuiz() {
    // Generate 40 questions according to the distribution rules
    this.questions = this.sampleQuestions();
    this.answers = new Array(this.questions.length).fill(-1);
    this.currentIndex = 0;
    this.answeredTime = 0;
    this.startTime = Date.now();
    this.isSubmitted = false;
    
    // Save initial state
    this.saveQuizState();

    // Start Timer
    this.timerInterval = setInterval(() => {
      this.answeredTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.updateTimerUI();
      this.saveQuizState(); // save progress periodically (every second)
    }, 1000);

    // Render Working Quiz Layout
    this.renderQuizLayout();
  },

  /** Dynamic selection logic: 37 inside questions, 3 outside questions */
  sampleQuestions() {
    const qVar = this.chapterQuestionsMap[this.currentChapterId];
    const questionData = this.getQuestionData(qVar);
    
    if (!questionData) {
      alert(`Không tìm thấy dữ liệu câu hỏi cho chương: ${this.currentChapterId}`);
      return [];
    }

    const insidePool = questionData.inside;
    const outsidePool = questionData.outside;

    // 1. Draw 3 random outside questions
    const sampledOutside = this.getRandomSample(outsidePool, 3);

    // 2. Draw 37 inside questions proportionally
    let sampledInside = [];

    if (this.currentChapterId === 'chuong-1') {
      // Part I (Đối tượng): Lấy 16 câu (4 Dễ, 8 Trung bình, 4 Khó)
      const p1Easy = insidePool.filter(q => q.sectionId === 'doi-tuong-nghien-cuu' && q.difficulty === 'easy');
      const p1Medium = insidePool.filter(q => q.sectionId === 'doi-tuong-nghien-cuu' && q.difficulty === 'medium');
      const p1Hard = insidePool.filter(q => q.sectionId === 'doi-tuong-nghien-cuu' && q.difficulty === 'hard');
      const sampledP1 = [
        ...this.getRandomSample(p1Easy, 4),
        ...this.getRandomSample(p1Medium, 8),
        ...this.getRandomSample(p1Hard, 4)
      ];

      // Part II (Phương pháp): Lấy 13 câu (3 Dễ, 6 Trung bình, 4 Khó)
      const p2Easy = insidePool.filter(q => q.sectionId === 'phuong-phap-nghien-cuu' && q.difficulty === 'easy');
      const p2Medium = insidePool.filter(q => q.sectionId === 'phuong-phap-nghien-cuu' && q.difficulty === 'medium');
      const p2Hard = insidePool.filter(q => q.sectionId === 'phuong-phap-nghien-cuu' && q.difficulty === 'hard');
      const sampledP2 = [
        ...this.getRandomSample(p2Easy, 3),
        ...this.getRandomSample(p2Medium, 6),
        ...this.getRandomSample(p2Hard, 4)
      ];

      // Part III (Ý nghĩa): Lấy 8 câu (2 Dễ, 4 Trung bình, 2 Khó)
      const p3Easy = insidePool.filter(q => q.sectionId === 'y-nghia-hoc-tap' && q.difficulty === 'easy');
      const p3Medium = insidePool.filter(q => q.sectionId === 'y-nghia-hoc-tap' && q.difficulty === 'medium');
      const p3Hard = insidePool.filter(q => q.sectionId === 'y-nghia-hoc-tap' && q.difficulty === 'hard');
      const sampledP3 = [
        ...this.getRandomSample(p3Easy, 2),
        ...this.getRandomSample(p3Medium, 4),
        ...this.getRandomSample(p3Hard, 2)
      ];

      sampledInside = [...sampledP1, ...sampledP2, ...sampledP3];
    } else {
      // Fallback for other chapters: Draw 37 random questions from inside pool
      sampledInside = this.getRandomSample(insidePool, 37);
    }

    // Combine all sampled questions
    const combined = [
      ...sampledOutside,
      ...sampledInside
    ];

    // Deep copy and shuffle options of each question to randomize choice order
    const finalPool = combined.map(q => {
      const qCopy = JSON.parse(JSON.stringify(q));
      const originalCorrectText = qCopy.options[qCopy.answer];
      
      qCopy.options = this.shuffleArray(qCopy.options);
      qCopy.answer = qCopy.options.indexOf(originalCorrectText);
      return qCopy;
    });

    // Shuffle the final list of 40 questions
    return this.shuffleArray(finalPool);
  },

  getRandomSample(arr, count) {
    const shuffled = this.shuffleArray(arr);
    return shuffled.slice(0, count);
  },

  shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  },

  /** Format seconds to MM:SS */
  formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  },

  updateTimerUI() {
    const timerEl = document.getElementById('quiz-timer-span');
    if (timerEl) {
      timerEl.textContent = this.formatTime(this.answeredTime);
    }
  },

  /** Render the Grid & Main Question Layout */
  renderQuizLayout() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-layout">
          <!-- Left: Main Quiz Box -->
          <div class="quiz-main-area">
            <div class="quiz-card" style="margin-bottom: 16px;">
              <div class="quiz-header">
                <span class="quiz-header__title">Đề trắc nghiệm tổng hợp (40 câu)</span>
                <span class="quiz-header__timer" title="Thời gian làm bài">
                  ⏱️ <span id="quiz-timer-span">00:00</span>
                </span>
              </div>
              <div class="quiz-progress">
                <div class="quiz-progress__bar" id="quiz-progress-bar"></div>
              </div>
              
              <!-- Question Area -->
              <div id="quiz-question-container"></div>
            </div>
            
            <!-- Controls -->
            <div class="quiz-nav-btns">
              <button class="quiz-btn quiz-btn--secondary" id="quiz-prev-btn">◀ Câu trước</button>
              <button class="quiz-btn" id="quiz-next-btn">Câu sau ▶</button>
            </div>
          </div>
          
          <!-- Right: Question Grid Sidebar -->
          <div class="quiz-sidebar">
            <div class="quiz-grid-card">
              <h3 class="quiz-grid__title">Danh sách câu hỏi</h3>
              <div class="quiz-grid__items" id="quiz-grid-items"></div>
              
              <button class="quiz-btn" id="quiz-submit-btn" style="margin-top: 24px; background: var(--secondary, #B91C1C);">
                📥 Nộp bài hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind Navigation events
    document.getElementById('quiz-prev-btn').addEventListener('click', () => this.navigateQuestion(-1));
    document.getElementById('quiz-next-btn').addEventListener('click', () => this.navigateQuestion(1));
    document.getElementById('quiz-submit-btn').addEventListener('click', () => this.confirmSubmit());

    // Render grid items
    this.renderGridItems();
    // Render current question
    this.renderCurrentQuestion();
  },

  renderGridItems() {
    const gridContainer = document.getElementById('quiz-grid-items');
    if (!gridContainer) return;

    gridContainer.innerHTML = this.questions.map((q, idx) => {
      let extraClass = '';
      if (idx === this.currentIndex) {
        extraClass += ' quiz-grid__item--active';
      }
      
      if (this.answers[idx] !== -1) {
        if (this.mode === 'immediate') {
          // In immediate mode, show correct/incorrect color directly on the grid
          const isCorrect = this.answers[idx] === this.questions[idx].answer;
          extraClass += isCorrect ? ' quiz-grid__item--correct' : ' quiz-grid__item--incorrect';
        } else {
          // In end mode, just show that it has been answered
          extraClass += ' quiz-grid__item--answered';
        }
      }

      return `<div class="quiz-grid__item${extraClass}" data-idx="${idx}">${idx + 1}</div>`;
    }).join('');

    // Add click events to grid items to jump
    gridContainer.querySelectorAll('.quiz-grid__item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-idx'));
        this.currentIndex = idx;
        this.saveQuizState();
        this.renderGridItems();
        this.renderCurrentQuestion();
      });
    });
  },

  renderCurrentQuestion() {
    const qContainer = document.getElementById('quiz-question-container');
    if (!qContainer) return;

    const q = this.questions[this.currentIndex];
    const userAnswer = this.answers[this.currentIndex];
    const progressPercent = ((this.currentIndex + 1) / this.questions.length) * 100;
    
    // Update progress bar
    const bar = document.getElementById('quiz-progress-bar');
    if (bar) bar.style.width = `${progressPercent}%`;

    // Update Next/Prev button labels
    const prevBtn = document.getElementById('quiz-prev-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) {
      if (this.currentIndex === this.questions.length - 1) {
        nextBtn.textContent = 'Hoàn tất 🏁';
        nextBtn.style.background = 'var(--info, #3B82F6)';
      } else {
        nextBtn.textContent = 'Câu sau ▶';
        nextBtn.style.background = '';
      }
    }

    // Build options list
    const optionsHTML = q.options.map((opt, oIdx) => {
      const prefixChar = String.fromCharCode(65 + oIdx); // A, B, C, D
      let optionClass = '';
      let attr = '';

      if (this.mode === 'immediate' && userAnswer !== -1) {
        // Option is selected and immediate mode is active
        attr = 'disabled';
        if (oIdx === q.answer) {
          optionClass = ' quiz-option--correct quiz-option--disabled';
        } else if (oIdx === userAnswer) {
          optionClass = ' quiz-option--incorrect quiz-option--disabled';
        } else {
          optionClass = ' quiz-option--disabled';
        }
      } else {
        // End mode or no option has been selected yet
        if (oIdx === userAnswer) {
          optionClass = ' quiz-option--selected';
        }
      }

      return `
        <button class="quiz-option${optionClass}" data-o-idx="${oIdx}" ${attr}>
          <span class="quiz-option__prefix">${prefixChar}</span>
          <span class="quiz-option__text">${opt}</span>
        </button>
      `;
    }).join('');

    // Explanation HTML (Only visible in immediate mode after answering)
    let explanationHTML = '';
    if (this.mode === 'immediate' && userAnswer !== -1) {
      const isCorrect = userAnswer === q.answer;
      explanationHTML = `
        <div class="quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--incorrect'}">
          <div class="quiz-explanation__status" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; align-items: center;">
            <span>${isCorrect ? '🟢 Chính xác!' : `🔴 Chưa chính xác! (Đáp án đúng là ${String.fromCharCode(65 + q.answer)})`}</span>
            <span style="font-size: 11px; font-weight: 600; color: var(--text-muted, #78716C);">
              ${q.isOutside ? 'Kiến thức ngoài giáo trình' : this.getSectionAndSubsectionTitle(q.sectionId, q.subsectionId)}
            </span>
          </div>
          <div class="quiz-explanation__text" style="margin-top: 8px;">
            <strong>Giải thích:</strong> ${q.explanation || 'Không có giải thích chi tiết.'}
          </div>
        </div>
      `;
    }

    qContainer.innerHTML = `
      <div class="quiz-body">
        <div class="quiz-question">
          Câu hỏi ${this.currentIndex + 1}: ${q.question}
        </div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        ${explanationHTML}
      </div>
    `;

    // Bind option click events
    qContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const oIdx = parseInt(btn.getAttribute('data-o-idx'));
        this.selectOption(oIdx);
      });
    });
  },

  selectOption(optionIndex) {
    this.answers[this.currentIndex] = optionIndex;
    this.saveQuizState();
    
    // Refresh question and grid list
    this.renderGridItems();
    this.renderCurrentQuestion();
  },

  navigateQuestion(direction) {
    const newIdx = this.currentIndex + direction;
    if (newIdx >= 0 && newIdx < this.questions.length) {
      this.currentIndex = newIdx;
      this.saveQuizState();
      this.renderGridItems();
      this.renderCurrentQuestion();
    } else if (newIdx === this.questions.length) {
      // Clicked Next on the last question -> confirm submit
      this.confirmSubmit();
    }
  },

  confirmSubmit() {
    const unansweredCount = this.answers.filter(ans => ans === -1).length;
    let message = 'Bạn có chắc chắn muốn nộp bài làm không?';
    if (unansweredCount > 0) {
      message = `Bạn còn ${unansweredCount} câu hỏi chưa trả lời. Bạn vẫn muốn nộp bài?`;
    }

    if (confirm(message)) {
      this.submitQuiz();
    }
  },

  submitQuiz() {
    this.isSubmitted = true;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.clearQuizState();

    // Calculate score
    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.answers[idx] === q.answer) {
        correctCount++;
      }
    });

    // Save to Local Storage rankings & Firebase (if active)
    const rankingRecord = {
      name: this.name,
      score: correctCount,
      total: this.questions.length,
      time: this.answeredTime,
      date: new Date().toISOString(),
      chapterId: this.currentChapterId
    };

    // Always save to LocalStorage as history fallback
    const existingRankings = this.getRankingsFromLocalStorage();
    existingRankings.push(rankingRecord);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingRankings));

    // Save to Firebase Cloud Firestore if active
    if (typeof enableFirebase !== 'undefined' && enableFirebase && typeof App !== 'undefined' && App.db) {
      App.db.collection('rankings').add(rankingRecord)
        .then(() => console.log('Saved ranking to Cloud Firestore successfully'))
        .catch(err => console.error('Failed to save ranking to Cloud Firestore:', err));
    }

    // Render results view
    this.renderResults(correctCount);
  },

  getRankings() {
    return this.getRankingsFromLocalStorage();
  },

  getRankingsFromLocalStorage() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  /** Renders the Results, diagnostics (imbalance), leaderboard, and review block */
  renderResults(correctCount) {
    if (!this.container) return;

    // 1. Diagnostics: calculate correct per section (Inside questions only)
    const diagnostics = {};
    
    // Read sections from App.chapters dynamically
    let currentChapter = null;
    if (typeof App !== 'undefined' && App.chapters) {
      currentChapter = App.chapters.find(ch => ch.id === this.currentChapterId);
    }
    
    if (currentChapter && currentChapter.sections) {
      currentChapter.sections.forEach(sec => {
        diagnostics[sec.id] = {
          title: `${sec.title} (Phần ${sec.roman})`,
          correct: 0,
          total: 0
        };
      });
    } else {
      // Fallback if App or sections aren't loaded
      diagnostics["doi-tuong-nghien-cuu"] = { title: "Đối tượng nghiên cứu (Phần I)", correct: 0, total: 0 };
      diagnostics["phuong-phap-nghien-cuu"] = { title: "Phương pháp nghiên cứu (Phần II)", correct: 0, total: 0 };
      diagnostics["y-nghia-hoc-tap"] = { title: "Ý nghĩa học tập đối với SV (Phần III)", correct: 0, total: 0 };
    }
    
    diagnostics["outside"] = { title: "Kiến thức mở rộng (Ngoài giáo trình)", correct: 0, total: 0 };

    this.questions.forEach((q, idx) => {
      const key = q.isOutside ? "outside" : q.sectionId;
      if (diagnostics[key]) {
        diagnostics[key].total++;
        if (this.answers[idx] === q.answer) {
          diagnostics[key].correct++;
        }
      }
    });

    // Build Diagnostics HTML
    const diagHTML = Object.keys(diagnostics).map(key => {
      const data = diagnostics[key];
      if (data.total === 0) return '';
      
      const percent = Math.round((data.correct / data.total) * 100) || 0;
      let barClass = '';
      let feedback = '';

      if (percent < 50) {
        barClass = 'quiz-diag-item__bar--danger';
        feedback = '⚠️ <strong>Yếu!</strong> Bạn đang học lệch hoặc bỏ sót kiến thức ở phần này. Hãy xem kỹ lại giáo trình.';
      } else if (percent < 80) {
        barClass = 'quiz-diag-item__bar--warning';
        feedback = '💡 <strong>Khá!</strong> Bạn đã nắm được cơ bản nhưng cần củng cố các luận điểm nâng cao.';
      } else {
        barClass = 'quiz-diag-item__bar--success';
        feedback = '🌟 <strong>Tốt!</strong> Kiến thức phần này rất vững vàng, hãy phát huy.';
      }

      return `
        <div class="quiz-diag-item">
          <div class="quiz-diag-item__header">
            <span>${data.title}</span>
            <span>${data.correct}/${data.total} câu (${percent}%)</span>
          </div>
          <div class="quiz-diag-item__progress">
            <div class="quiz-diag-item__bar ${barClass}" style="width: ${percent}%;"></div>
          </div>
          <div class="quiz-diag-item__feedback">${feedback}</div>
        </div>
      `;
    }).join('');

    // 3. Review Questions Area (only relevant for 'end' mode or user wants to review)
    let reviewSectionHTML = '';
    if (this.mode === 'end') {
      const itemsHTML = this.questions.map((q, idx) => {
        const isCorrect = this.answers[idx] === q.answer;
        const userAnswerText = this.answers[idx] !== -1 ? q.options[this.answers[idx]] : 'Chưa chọn';
        const correctAnswerText = q.options[q.answer];

        return `
          <div class="quiz-review-item">
            <div class="quiz-review-item__header">
              <span class="quiz-review-item__num">Câu ${idx + 1}</span>
              <span class="quiz-review-item__badge ${isCorrect ? 'quiz-review-item__badge--correct' : 'quiz-review-item__badge--incorrect'}">
                ${isCorrect ? 'Đúng' : 'Sai'}
              </span>
              <span class="quiz-review-item__badge" style="background: rgba(59, 130, 246, 0.1); color: var(--info, #3B82F6); text-transform: none; font-weight: 600;">
                ${q.isOutside ? 'Ngoài giáo trình' : this.getSectionAndSubsectionTitle(q.sectionId, q.subsectionId)}
              </span>
            </div>
            <div class="quiz-review-item__q">${q.question}</div>
            <div style="font-size:14px; margin-bottom: 12px; line-height: 1.5;">
              <div style="color: ${isCorrect ? '#22C55E' : '#EF4444'}; margin-bottom: 4px;">
                <strong>Câu trả lời của bạn:</strong> ${userAnswerText}
              </div>
              ${!isCorrect ? `<div style="color: #22C55E; margin-bottom: 4px;"><strong>Đáp án đúng:</strong> ${correctAnswerText}</div>` : ''}
            </div>
            <div class="quiz-explanation" style="margin-top: 8px;">
              <strong>Giải thích:</strong> ${q.explanation || 'Không có giải thích chi tiết.'}
            </div>
          </div>
        `;
      }).join('');

      reviewSectionHTML = `
        <div class="quiz-review">
          <h3 class="quiz-review__title">🔎 Xem lại chi tiết đáp án</h3>
          <div class="quiz-review__list">
            ${itemsHTML}
          </div>
        </div>
      `;
    }

    // Render results structure with Leaderboard loading placeholder
    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card quiz-result">
          <h2 class="quiz-setup__title">🏆 Kết Quả Bài Làm</h2>
          <p class="quiz-setup__subtitle">Xin chúc mừng <strong>${this.name}</strong> đã hoàn thành bài thi!</p>
          
          <div class="quiz-result__score-circle">
            <span class="quiz-result__score-val">${correctCount}/40</span>
            <span class="quiz-result__score-label">Điểm số</span>
          </div>

          <div class="quiz-result__meta">
            <div class="quiz-result__meta-item">
              <div class="quiz-result__meta-val">${this.formatTime(this.answeredTime)}</div>
              <div class="quiz-result__meta-label">Thời gian làm</div>
            </div>
            <div class="quiz-result__meta-item">
              <div class="quiz-result__meta-val">${Math.round((correctCount/40)*100)}%</div>
              <div class="quiz-result__meta-label">Tỷ lệ đúng</div>
            </div>
          </div>

          <!-- Diagnostics -->
          <div class="quiz-diagnostics">
            <h3 class="quiz-diagnostics__title">📊 Phân Tích Điểm Mạnh / Học Lệch</h3>
            ${diagHTML}
          </div>

          <!-- Leaderboard -->
          <div class="quiz-leaderboard">
            <h3 class="quiz-leaderboard__title">🏅 Bảng Xếp Hạng Lượt Học</h3>
            <table class="quiz-table">
              <thead>
                <tr>
                  <th class="quiz-table__rank">Hạng</th>
                  <th>Họ tên</th>
                  <th>Điểm số</th>
                  <th>Thời gian</th>
                  <th>Ngày làm</th>
                </tr>
              </thead>
              <tbody id="quiz-leaderboard-tbody">
                <tr>
                  <td colspan="5" style="text-align: center; color: var(--text-muted, #78716C); padding: 20px;">
                    Đang tải bảng xếp hạng...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Actions -->
          <div class="quiz-result-actions">
            <button class="quiz-btn quiz-btn--secondary" id="quiz-back-study-btn">📖 Quay lại ôn bài</button>
            <button class="quiz-btn quiz-btn--secondary" id="quiz-select-other-btn">📚 Chọn chương khác</button>
            <button class="quiz-btn" id="quiz-restart-btn">🔄 Làm lại chương này</button>
          </div>
        </div>

        <!-- Review Section -->
        ${reviewSectionHTML}
      </div>
    `;

    // Bind action events
    document.getElementById('quiz-back-study-btn').addEventListener('click', () => {
      this.unmount();
      if (typeof App !== 'undefined' && App.enterQuizMode) {
        App.exitQuizMode();
      }
    });

    document.getElementById('quiz-select-other-btn').addEventListener('click', () => {
      this.resetState();
      this.renderChapterSelection();
    });

    document.getElementById('quiz-restart-btn').addEventListener('click', () => {
      this.resetState();
      this.renderSetup();
    });

    // Trigger async leaderboard fetch and render
    this.loadAndRenderLeaderboard(correctCount);
  },

  /** Asynchronously load rankings from Cloud or Local and populate leaderboard table */
  async loadAndRenderLeaderboard(correctCount) {
    const tbody = document.getElementById('quiz-leaderboard-tbody');
    if (!tbody) return;

    let rankings = [];

    // Check if Firebase is active and initialized
    if (typeof enableFirebase !== 'undefined' && enableFirebase && typeof App !== 'undefined' && App.db) {
      try {
        const snapshot = await App.db.collection('rankings')
          .where('chapterId', '==', this.currentChapterId)
          .get();
        
        snapshot.forEach(doc => {
          rankings.push(doc.data());
        });
        
        console.log(`Loaded ${rankings.length} rankings from Firebase.`);
      } catch (err) {
        console.warn('Failed to load rankings from Firebase, falling back to LocalStorage:', err);
        rankings = this.getRankingsFromLocalStorage();
      }
    } else {
      // Offline fallback
      rankings = this.getRankingsFromLocalStorage();
    }

    // Sort rankings: Score desc, Time asc, Date desc
    rankings.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.time !== b.time) return a.time - b.time;
      return new Date(b.date) - new Date(a.date);
    });

    const top10 = rankings.slice(0, 10);
    // Find current attempt rank index in the overall list
    const currentAttemptIdx = rankings.findIndex(r => 
      r.name === this.name && 
      r.score === correctCount && 
      r.time === this.answeredTime
    );

    if (top10.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted, #78716C); padding: 20px;">
            Chưa có kết quả xếp hạng. Hãy là người đầu tiên!
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = top10.map((r, rankIdx) => {
      const isCurrent = currentAttemptIdx !== -1 && rankings[currentAttemptIdx] === r && rankIdx === currentAttemptIdx;
      return `
        <tr class="${isCurrent ? 'tr--current' : ''}">
          <td class="quiz-table__rank">#${rankIdx + 1}</td>
          <td class="quiz-table__name">${r.name}</td>
          <td class="quiz-table__score">${r.score}/${r.total}</td>
          <td>${this.formatTime(r.time)}</td>
          <td>${new Date(r.date).toLocaleDateString('vi-VN')}</td>
        </tr>
      `;
    }).join('');
  },

  /** Renders a list of all 100 questions of the chapter for reference/study */
  renderAllQuestionsView() {
    if (!this.container) return;

    const qVar = this.chapterQuestionsMap[this.currentChapterId];
    const questionData = this.getQuestionData(qVar);
    if (!questionData) {
      alert('Không tìm thấy dữ liệu câu hỏi!');
      return;
    }

    // Combine all 100 questions: 90 inside + 10 outside
    const allQuestions = [
      ...questionData.inside,
      ...questionData.outside
    ];

    // Build the list HTML
    const itemsHTML = allQuestions.map((q, idx) => {
      const isOutside = q.isOutside;
      const difficultyText = q.difficulty === 'easy' ? 'Dễ' : q.difficulty === 'medium' ? 'Trung bình' : 'Khó';
      const difficultyClass = q.difficulty === 'easy' ? 'quiz-review-item__badge--correct' : q.difficulty === 'medium' ? 'quiz-review-item__badge--warning' : 'quiz-review-item__badge--incorrect';
      
      const optionsHTML = q.options.map((opt, oIdx) => {
        const prefix = String.fromCharCode(65 + oIdx);
        const isCorrect = oIdx === q.answer;
        const optClass = isCorrect ? 'quiz-option--correct quiz-option--disabled' : 'quiz-option--disabled';
        return `
          <div class="quiz-option ${optClass}" style="margin-bottom: 6px;">
            <span class="quiz-option__prefix">${prefix}</span>
            <span class="quiz-option__text">${opt}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="quiz-review-item" style="margin-bottom: 24px;">
          <div class="quiz-review-item__header">
            <span class="quiz-review-item__num">Câu ${idx + 1}</span>
            <span class="quiz-review-item__badge ${difficultyClass}">
              ${difficultyText}
            </span>
            <span class="quiz-review-item__badge" style="background: rgba(59, 130, 246, 0.1); color: var(--info, #3B82F6); text-transform: none; font-weight: 600;">
              ${isOutside ? 'Ngoài giáo trình' : this.getSectionAndSubsectionTitle(q.sectionId, q.subsectionId)}
            </span>
          </div>
          <div class="quiz-review-item__q">${q.question}</div>
          <div class="quiz-options" style="margin-bottom: 12px;">
            ${optionsHTML}
          </div>
          <div class="quiz-explanation quiz-explanation--correct" style="margin-top: 12px;">
            <strong>Giải thích:</strong> ${q.explanation || 'Không có giải thích chi tiết.'}
          </div>
        </div>
      `;
    }).join('');

    // Get chapter title
    let chapterTitle = this.currentChapterId;
    if (typeof App !== 'undefined' && App.chapters) {
      const chObj = App.chapters.find(ch => ch.id === this.currentChapterId);
      if (chObj) {
        chapterTitle = `${chObj.title}: ${chObj.subtitle}`;
      }
    }

    this.container.innerHTML = `
      <div class="quiz-container" style="max-width: 800px;">
        <div class="quiz-card" style="margin-bottom: 24px; text-align: center;">
          <h2 class="quiz-setup__title" style="font-size: 28px;">📖 Trọn bộ 100 câu hỏi ôn tập</h2>
          <p class="quiz-setup__subtitle" style="margin-bottom: 20px;">${chapterTitle}</p>
          
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button class="quiz-btn quiz-btn--secondary" id="quiz-all-back-btn" style="width: auto; padding: 10px 24px;">
              ◀ Quay lại cấu hình
            </button>
            <button class="quiz-btn" id="quiz-all-start-btn" style="width: auto; padding: 10px 24px;">
              🚀 Bắt đầu làm bài test (40 câu)
            </button>
          </div>
        </div>

        <div class="quiz-all-list">
          ${itemsHTML}
        </div>

        <div class="quiz-card" style="text-align: center; margin-top: 24px;">
          <button class="quiz-btn" id="quiz-all-bottom-start-btn" style="max-width: 300px; margin: 0 auto;">
            🚀 Bắt đầu làm bài test (40 câu)
          </button>
        </div>
      </div>
    `;

    // Bind events
    document.getElementById('quiz-all-back-btn').addEventListener('click', () => {
      this.renderSetup();
    });

    const startQuizHandler = () => {
      this.renderSetup();
    };

    document.getElementById('quiz-all-start-btn').addEventListener('click', startQuizHandler);
    document.getElementById('quiz-all-bottom-start-btn').addEventListener('click', startQuizHandler);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
