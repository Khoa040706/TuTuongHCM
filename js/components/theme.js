/* ============================================================
   THEME TOGGLE — Dark / Light Mode
   ============================================================ */

const Theme = {
  STORAGE_KEY: 'studymaster-theme',
  LIGHT: 'light',
  DARK: 'dark',

  /** Initialize theme from localStorage or system preference */
  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      this.set(saved);
    } else {
      // Default to light mode
      this.set(this.LIGHT);
    }
  },

  /** Get current theme */
  current() {
    return document.documentElement.getAttribute('data-theme') || this.LIGHT;
  },

  /** Set theme */
  set(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleIcon();
  },

  /** Toggle between light and dark */
  toggle() {
    const next = this.current() === this.LIGHT ? this.DARK : this.LIGHT;
    this.set(next);
  },

  /** Update toggle button icon */
  updateToggleIcon() {
    const thumb = document.querySelector('.theme-toggle__thumb');
    if (thumb) {
      thumb.textContent = this.current() === this.LIGHT ? '☀️' : '🌙';
    }
  },

  /** Render toggle button HTML */
  renderToggle() {
    return `
      <button class="theme-toggle" id="theme-toggle" aria-label="Chuyển chế độ sáng/tối" title="Chuyển chế độ sáng/tối">
        <span class="theme-toggle__thumb">☀️</span>
      </button>
    `;
  },

  /** Bind event listener */
  bindEvents() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};
