/* ============================================================
   CONTENT RENDERER — Renders chapter data into HTML
   ============================================================ */

const ContentRenderer = {

  /** Render full chapter content */
  renderChapter(chapter) {
    const header = this.renderChapterHeader(chapter);
    const sections = chapter.sections.map(s => this.renderSection(s, chapter.id)).join('');

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
  renderSection(section, chapterId) {
    const subsections = section.subsections.map(sub => this.renderSubsection(sub, chapterId, section.id)).join('');

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
  renderSubsection(sub, chapterId, sectionId) {
    const parts = sub.parts.map(part => this.renderPart(part, chapterId, sectionId, sub.id)).join('');

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
  renderPart(part, chapterId, sectionId, subId) {
    const contentBlocks = part.content.map((block, idx) => 
      this.renderContentBlock(block, `${chapterId}-${sectionId}-${subId}-${part.id}-${idx}`)
    ).join('');
    const hasHeading = part.label || part.title;

    return `
      <div class="part" id="content-${part.id}">
        ${hasHeading ? `
          <div class="part__heading">
            ${part.label ? `<span class="part__label">${part.label}/</span>` : ''}
            <span>${part.title || ''}</span>
          </div>
        ` : ''}
        ${contentBlocks}
      </div>
    `;
  },

  /** Render a single content block based on its type */
  renderContentBlock(block, path) {
    switch (block.type) {
      case 'label':
        return this.renderLabel(block, path);
      case 'paragraph':
        return this.renderParagraph(block, path);
      case 'bullets':
        return this.renderBullets(block, path);
      case 'sub-bullets':
        return this.renderSubBullets(block, path);
      case 'highlight':
        return this.renderHighlight(block, path);
      case 'quote':
        return this.renderQuote(block, path);
      case 'definition':
        return this.renderDefinition(block, path);
      case 'conclusion':
        return this.renderConclusion(block, path);
      case 'numbered-group':
        return this.renderNumberedGroup(block, path);
      case 'key-point':
        return this.renderKeyPoint(block, path);
      default:
        return `<p class="text-paragraph" data-hl-path="${path}">${block.text || ''}</p>`;
    }
  },

  /** Render a label (e.g., "Tư tưởng:") */
  renderLabel(block, path) {
    return `<div class="content-block__label" data-hl-path="${path}">${block.text}</div>`;
  },

  /** Render a paragraph */
  renderParagraph(block, path) {
    return `<p class="text-paragraph" data-hl-path="${path}">${block.text}</p>`;
  },

  /** Render bullet list */
  renderBullets(block, path) {
    const items = block.items.map((item, idx) => `<li class="bullet-list__item" data-hl-path="${path}-${idx}">${item}</li>`).join('');
    return `<ul class="bullet-list">${items}</ul>`;
  },

  /** Render sub-bullet list (indented, hollow circles) */
  renderSubBullets(block, path) {
    const items = block.items.map((item, idx) => `<li class="bullet-list__item" data-hl-path="${path}-${idx}">${item}</li>`).join('');
    return `<ul class="bullet-list bullet-list--sub">${items}</ul>`;
  },

  /** Render highlight box */
  renderHighlight(block, path) {
    return `
      <div class="highlight-box" data-hl-path="${path}">
        <div class="highlight-box__content">${block.text}</div>
      </div>
    `;
  },

  /** Render quote block */
  renderQuote(block, path) {
    const source = block.source ? `<div class="quote-block__source">— ${block.source}</div>` : '';
    return `
      <div class="quote-block" data-hl-path="${path}">
        <div class="quote-block__content">${block.text}</div>
        ${source}
      </div>
    `;
  },

  /** Render definition box (red border — important) */
  renderDefinition(block, path) {
    return `
      <div class="definition-box" data-hl-path="${path}">
        <div class="definition-box__content">${block.text}</div>
      </div>
    `;
  },

  /** Render conclusion box (red border) */
  renderConclusion(block, path) {
    const title = block.title ? `<div class="content-block__label" style="font-size: 16px; margin-bottom: var(--sp-3); font-weight: 700; color: var(--color-secondary);">${block.title}</div>` : '';
    const bullets = block.items
      ? block.items.map((item, idx) => `<li class="bullet-list__item" data-hl-path="${path}-${idx}">${item}</li>`).join('')
      : '';
    const bulletList = bullets ? `<ul class="bullet-list">${bullets}</ul>` : '';
    const textContent = block.text ? `<div class="conclusion-box__content">${block.text}</div>` : '';

    return `
      <div class="conclusion-box" data-hl-path="${path}">
        ${title}
        ${textContent}
        ${bulletList}
      </div>
    `;
  },

  /** Render numbered group with sub-bullets */
  renderNumberedGroup(block, path) {
    const items = block.items.map((item, itemIdx) => {
      const bullets = item.bullets
        ? item.bullets.map((b, bulletIdx) => `<li class="bullet-list__item" data-hl-path="${path}-${itemIdx}-${bulletIdx}">${b}</li>`).join('')
        : '';
      const bulletList = bullets ? `<ul class="bullet-list bullet-list--sub">${bullets}</ul>` : '';

      return `
        <div class="content-block" style="margin-bottom: var(--sp-4);">
          <div class="content-block__label" style="display: flex; gap: var(--sp-2); align-items: baseline;" data-hl-path="${path}-${itemIdx}-title">
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
  renderKeyPoint(block, path) {
    return `
      <div class="key-point" data-hl-path="${path}">
        <span class="key-point__arrow">→</span>
        <span class="key-point__text">${block.text}</span>
      </div>
    `;
  }
};
