/* ============================================================
   APP.JS — StudyMaster Main Application
   ============================================================ */

const App = {
  /** All loaded chapters */
  chapters: [],

  /** Initialize the application */
  init() {
    // Register chapters
    this.chapters = [chuongMoDau, chuong1];

    // Render the app
    this.render();

    // Initialize theme
    Theme.init();
    Theme.bindEvents();

    // Initialize sidebar
    Sidebar.bindEvents();

    // Expand first chapter by default
    if (this.chapters.length > 0) {
      const firstChapter = this.chapters[0];
      Sidebar.expandGroup(firstChapter.id);
      if (firstChapter.sections.length > 0) {
        Sidebar.expandGroup(firstChapter.sections[0].id);
      }
    }

    // Scroll to top button
    this.initScrollToTop();

    // Scroll spy for active nav
    this.initScrollSpy();

    // Initialize note-taking tools
    if (typeof HighlightManager !== 'undefined') {
      HighlightManager.init();
    }
    if (typeof DrawingManager !== 'undefined') {
      DrawingManager.init();
    }
    if (typeof NoteToolbar !== 'undefined') {
      NoteToolbar.render();
    }
    if (typeof HighlightManager !== 'undefined') {
      HighlightManager.applyAll();
    }

    // Register Service Worker for PWA & Offline support
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registered:', reg.scope))
        .catch(err => console.log('Service Worker registration failed:', err));
    }
  },

  /** Render the full app */
  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    // Build sidebar from all chapters
    const sidebarHTML = Sidebar.render(this.chapters);

    // Build content from all chapters
    const contentHTML = this.chapters.map(ch => ContentRenderer.renderChapter(ch)).join('');

    // Build breadcrumb
    const breadcrumb = this.chapters.length > 0
      ? `<span>Tư tưởng HCM</span>
         <span class="header__breadcrumb-sep">›</span>
         <span class="header__breadcrumb-current">${this.chapters[0].title}</span>`
      : '';

    appEl.innerHTML = `
      ${sidebarHTML}
      <div class="sidebar-overlay" id="sidebar-overlay"></div>
      <main class="main">
        <header class="header">
          <div class="header__left">
            <button class="header__hamburger" id="header-hamburger" aria-label="Mở menu">
              ☰
            </button>
            <div class="header__breadcrumb">
              ${breadcrumb}
            </div>
          </div>
          <div class="header__right">
            ${Theme.renderToggle()}
          </div>
        </header>
        <div class="content" id="content-area">
          ${contentHTML}
        </div>
      </main>
      <button class="scroll-top" id="scroll-top" aria-label="Về đầu trang">↑</button>
    `;

    // Re-bind drawing canvas and highlights
    if (typeof DrawingManager !== 'undefined' && DrawingManager.canvas) {
      DrawingManager.createCanvas();
    }
    if (typeof HighlightManager !== 'undefined') {
      HighlightManager.applyAll();
    }
    if (typeof NoteToolbar !== 'undefined' && NoteToolbar.activeTool !== 'cursor') {
      NoteToolbar.selectTool(NoteToolbar.activeTool);
    }
  },

  /** Scroll-to-top button logic */
  initScrollToTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('scroll-top--visible');
      } else {
        btn.classList.remove('scroll-top--visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  /** Scroll spy: update sidebar active state based on scroll position */
  initScrollSpy() {
    const subsections = document.querySelectorAll('.subsection[id^="content-"]');
    if (subsections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('content-', '');
          Sidebar.setActive(id);
        }
      });
    }, {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    });

    subsections.forEach(el => observer.observe(el));
  }
};

/* --- Start the app when DOM is ready --- */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
