/* ============================================================
   CONTENT RENDERER — Renders chapter data into HTML
   ============================================================ */

const ContentRenderer = {

  /** Render full chapter content */
  renderChapter(chapter) {
    const header = this.renderChapterHeader(chapter);
    const sections = chapter.sections.map(s => this.renderSection(s)).join('');

    return `
      ${header}
      ${sections}
    `;
  },

  /** Render chapter header */
  renderChapterHeader(chapter) {
    return `
      <div class="chapter-header animate-in">
        <div class="chapter-header__badge">
          <span>📚</span>
          <span>${chapter.title}</span>
        </div>
        <h1 class="chapter-header__title">Tư Tưởng Hồ Chí Minh</h1>
        <p class="chapter-header__subtitle">${chapter.subtitle}</p>
      </div>
    `;
  },

  /** Render a section (I, II, III...) */
  renderSection(section) {
    const subsections = section.subsections.map(sub => this.renderSubsection(sub)).join('');

    return `
      <div class="section" id="section-${section.id}">
        <div class="section__heading">
          <span class="section__roman">${section.roman}.</span>
          <h2 class="section__title">${section.title}</h2>
        </div>
        ${subsections}
      </div>
    `;
  },

  /** Render a subsection (1, 2, 3...) */
  renderSubsection(sub) {
    const parts = sub.parts.map(part => this.renderPart(part)).join('');

    return `
      <div class="subsection" id="content-${sub.id}">
        <div class="subsection__heading">
          <span class="subsection__number">${sub.number}</span>
          <h3 class="subsection__title">${sub.title}</h3>
        </div>
        ${parts}
      </div>
    `;
  },

  /** Render a part (a/, b/...) */
  renderPart(part) {
    const contentBlocks = part.content.map(block => this.renderContentBlock(block)).join('');

    return `
      <div class="part" id="content-${part.id}">
        <div class="part__heading">
          <span class="part__label">${part.label}/</span>
          <span>${part.title}</span>
        </div>
        ${contentBlocks}
      </div>
    `;
  },

  /** Render a single content block based on its type */
  renderContentBlock(block) {
    switch (block.type) {
      case 'label':
        return this.renderLabel(block);
      case 'paragraph':
        return this.renderParagraph(block);
      case 'bullets':
        return this.renderBullets(block);
      case 'sub-bullets':
        return this.renderSubBullets(block);
      case 'highlight':
        return this.renderHighlight(block);
      case 'quote':
        return this.renderQuote(block);
      case 'definition':
        return this.renderDefinition(block);
      case 'numbered-group':
        return this.renderNumberedGroup(block);
      case 'key-point':
        return this.renderKeyPoint(block);
      default:
        return `<p class="text-paragraph">${block.text || ''}</p>`;
    }
  },

  /** Render a label (e.g., "Tư tưởng:") */
  renderLabel(block) {
    return `<div class="content-block__label">${block.text}</div>`;
  },

  /** Render a paragraph */
  renderParagraph(block) {
    return `<p class="text-paragraph">${block.text}</p>`;
  },

  /** Render bullet list */
  renderBullets(block) {
    const items = block.items.map(item => `<li class="bullet-list__item">${item}</li>`).join('');
    return `<ul class="bullet-list">${items}</ul>`;
  },

  /** Render sub-bullet list (indented, hollow circles) */
  renderSubBullets(block) {
    const items = block.items.map(item => `<li class="bullet-list__item">${item}</li>`).join('');
    return `<ul class="bullet-list bullet-list--sub">${items}</ul>`;
  },

  /** Render highlight box */
  renderHighlight(block) {
    return `
      <div class="highlight-box">
        <div class="highlight-box__content">${block.text}</div>
      </div>
    `;
  },

  /** Render quote block */
  renderQuote(block) {
    const source = block.source ? `<div class="quote-block__source">— ${block.source}</div>` : '';
    return `
      <div class="quote-block">
        <div class="quote-block__content">${block.text}</div>
        ${source}
      </div>
    `;
  },

  /** Render definition box (red border — important) */
  renderDefinition(block) {
    return `
      <div class="definition-box">
        <div class="definition-box__content">${block.text}</div>
      </div>
    `;
  },

  /** Render numbered group with sub-bullets */
  renderNumberedGroup(block) {
    const items = block.items.map(item => {
      const bullets = item.bullets
        ? item.bullets.map(b => `<li class="bullet-list__item">${b}</li>`).join('')
        : '';
      const bulletList = bullets ? `<ul class="bullet-list bullet-list--sub">${bullets}</ul>` : '';

      return `
        <div class="content-block" style="margin-bottom: var(--sp-4);">
          <div class="content-block__label" style="display: flex; gap: var(--sp-2); align-items: baseline;">
            <span style="color: var(--color-primary); font-weight: 700; min-width: 20px;">${item.number}.</span>
            <span>${item.title}</span>
          </div>
          ${bulletList}
        </div>
      `;
    }).join('');

    return `<div class="numbered-group">${items}</div>`;
  },

  /** Render key point (with arrow) */
  renderKeyPoint(block) {
    return `
      <div class="key-point">
        <span class="key-point__arrow">→</span>
        <span class="key-point__text">${block.text}</span>
      </div>
    `;
  }
};
