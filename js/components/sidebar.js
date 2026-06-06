/* ============================================================
   SIDEBAR — Navigation Component
   ============================================================ */

const Sidebar = {
  isOpen: false,

  /** Render the full sidebar HTML from chapter data */
  render(chapters) {
    const navItems = chapters.map(chapter => this.renderChapter(chapter)).join('');

    return `
      <aside class="sidebar" id="sidebar">
        <div class="sidebar__header">
          <a href="#" class="sidebar__logo" id="sidebar-logo">
            <img src="assets/logo.png" class="sidebar__logo-icon" style="object-fit: cover; background: none; border-radius: var(--radius-sm);" alt="Cancer Logo" />
            <div>
              <div class="sidebar__logo-text">StudyMaster</div>
              <div class="sidebar__logo-subtitle">Tư tưởng Hồ Chí Minh</div>
            </div>
          </a>
        </div>
        <nav class="sidebar__nav" id="sidebar-nav">
          <div class="sidebar__section-label">Nội dung môn học</div>
          <ul class="nav-list">
            ${navItems}
          </ul>
        </nav>
        <div class="sidebar__footer">
          <div class="caption" style="color: var(--text-secondary)">
            Focus. Calm. Decide. Succeed.
          </div>
        </div>
      </aside>
    `;
  },

  /** Render a single chapter nav item with its sections */
  renderChapter(chapter) {
    const sectionItems = chapter.sections.map(section => this.renderSection(section, chapter.id)).join('');

    return `
      <li class="nav-item">
        <button class="nav-item__link nav-item__link--chapter" data-chapter="${chapter.id}" data-action="toggle">
          <span class="nav-item__icon">📖</span>
          <span>${chapter.title}</span>
          <span class="nav-item__toggle" data-toggle-for="${chapter.id}">▶</span>
        </button>
        <ul class="nav-item__children" id="nav-children-${chapter.id}">
          ${sectionItems}
        </ul>
      </li>
    `;
  },

  /** Render a section (I, II, III...) with subsections */
  renderSection(section, chapterId) {
    const subsectionItems = section.subsections.map(sub => this.renderSubsection(sub, chapterId, section.id)).join('');

    return `
      <li class="nav-item">
        <button class="nav-item__link" data-section="${section.id}" data-chapter="${chapterId}" data-action="toggle-section">
          <span class="nav-item__icon" style="font-size: 14px; font-weight: 700; color: var(--color-primary);">${section.roman}.</span>
          <span>${section.title}</span>
          <span class="nav-item__toggle" data-toggle-for="${section.id}">▶</span>
        </button>
        <ul class="nav-item__children" id="nav-children-${section.id}">
          ${subsectionItems}
        </ul>
      </li>
    `;
  },

  /** Render a subsection (1, 2, 3...) */
  renderSubsection(sub, chapterId, sectionId) {
    return `
      <li class="nav-item">
        <button class="nav-item__link" data-subsection="${sub.id}" data-section="${sectionId}" data-chapter="${chapterId}" data-action="navigate">
          <span class="nav-item__icon" style="font-size: 12px; color: var(--text-secondary);">${sub.number}.</span>
          <span>${sub.title}</span>
        </button>
      </li>
    `;
  },

  /** Toggle sidebar open/close (mobile) */
  toggle() {
    this.isOpen = !this.isOpen;
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (this.isOpen) {
      sidebar.classList.add('sidebar--open');
      overlay.classList.add('sidebar-overlay--visible');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('sidebar--open');
      overlay.classList.remove('sidebar-overlay--visible');
      document.body.style.overflow = '';
    }
  },

  /** Close sidebar (mobile) */
  close() {
    if (this.isOpen) {
      this.toggle();
    }
  },

  /** Toggle expand/collapse of a nav group */
  toggleGroup(groupId) {
    const children = document.getElementById(`nav-children-${groupId}`);
    const toggle = document.querySelector(`[data-toggle-for="${groupId}"]`);

    if (!children) return;

    const isExpanded = children.classList.contains('nav-item__children--expanded');

    if (isExpanded) {
      children.classList.remove('nav-item__children--expanded');
      if (toggle) toggle.classList.remove('nav-item__toggle--expanded');
    } else {
      children.classList.add('nav-item__children--expanded');
      if (toggle) toggle.classList.add('nav-item__toggle--expanded');
    }
  },

  /** Set active state on a nav link */
  setActive(subsectionId) {
    // Remove all active states
    document.querySelectorAll('.nav-item__link--active').forEach(el => {
      el.classList.remove('nav-item__link--active');
    });

    // Set active on matching link
    const activeLink = document.querySelector(`[data-subsection="${subsectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('nav-item__link--active');

      // Expand parents
      const sectionId = activeLink.getAttribute('data-section');
      const chapterId = activeLink.getAttribute('data-chapter');

      if (chapterId) this.expandGroup(chapterId);
      if (sectionId) this.expandGroup(sectionId);
    }
  },

  /** Expand a specific group */
  expandGroup(groupId) {
    const children = document.getElementById(`nav-children-${groupId}`);
    const toggle = document.querySelector(`[data-toggle-for="${groupId}"]`);

    if (children) {
      children.classList.add('nav-item__children--expanded');
    }
    if (toggle) {
      toggle.classList.add('nav-item__toggle--expanded');
    }
  },

  /** Bind event listeners */
  bindEvents() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    nav.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-item__link');
      if (!link) return;

      const action = link.getAttribute('data-action');

      if (action === 'toggle') {
        const chapterId = link.getAttribute('data-chapter');
        this.toggleGroup(chapterId);
      } else if (action === 'toggle-section') {
        const sectionId = link.getAttribute('data-section');
        this.toggleGroup(sectionId);
      } else if (action === 'navigate') {
        const subsectionId = link.getAttribute('data-subsection');
        this.setActive(subsectionId);

        // Scroll to section in content
        const target = document.getElementById(`content-${subsectionId}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Close sidebar on mobile
        this.close();
      }
    });

    // Overlay click to close
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.close());
    }

    // Hamburger
    const hamburger = document.getElementById('header-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => this.toggle());
    }

    // Logo click — scroll to top
    const logo = document.getElementById('sidebar-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
};
