"use client";
import React from "react";

export default function ContentRenderer({ chapters }) {
  return (
    <div className="content-area">
      {chapters.map((ch) => (
        <div key={ch.id} className="chapter-block mb-12">
          {/* Chapter Header */}
          <div className="chapter-header animate-in p-6 md:p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 mb-8">
            <div className="chapter-header__badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>📚</span>
              <span>{ch.title}</span>
            </div>
            <h1 className="chapter-header__title text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-playfair tracking-tight mb-3">
              Tư Tưởng Hồ Chí Minh
            </h1>
            <p className="chapter-header__subtitle text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
              {ch.subtitle}
            </p>
          </div>

          {/* Sections */}
          {ch.sections.map((sec) => (
            <div key={sec.id} id={`section-${sec.id}`} className="section mb-8 scroll-mt-20">
              <div className="section__heading flex items-baseline gap-2 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">
                <span className="section__roman text-lg md:text-xl font-bold text-stone-700 dark:text-stone-300">
                  {sec.roman}.
                </span>
                <h2 className="section__title text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-200">
                  {sec.title}
                </h2>
              </div>

              {/* Subsections */}
              {sec.subsections.map((sub) => (
                <div
                  key={sub.id}
                  id={`content-${sub.id}`}
                  className="subsection mb-8 p-4 md:p-6 rounded-xl hover:bg-stone-100/50 dark:hover:bg-stone-900/50 transition-colors duration-200 scroll-mt-20"
                >
                  <div className="subsection__heading flex items-baseline gap-2 mb-4">
                    <span className="subsection__number text-base font-bold text-stone-500 dark:text-stone-400">
                      {sub.number}.
                    </span>
                    <h3 className="subsection__title text-lg md:text-xl font-semibold text-stone-850 dark:text-stone-150">
                      {sub.title}
                    </h3>
                  </div>

                  {/* Parts */}
                  {sub.parts.map((part) => {
                    const hasHeading = part.label || part.title;
                    const basePath = `${ch.id}-${sec.id}-${sub.id}-${part.id}`;

                    return (
                      <div key={part.id} id={`content-${part.id}`} className="part mb-6 pl-4 border-l border-stone-200 dark:border-stone-800">
                        {hasHeading && (
                          <div className="part__heading font-medium text-stone-700 dark:text-stone-300 mb-3 text-sm md:text-base">
                            {part.label && <span className="part__label mr-1 text-stone-600 dark:text-stone-400 font-semibold">{part.label}/</span>}
                            <span>{part.title}</span>
                          </div>
                        )}

                        {/* Content Blocks */}
                        {part.content.map((block, idx) => (
                          <ContentBlock
                            key={idx}
                            block={block}
                            path={`${basePath}-${idx}`}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ContentBlock({ block, path }) {
  switch (block.type) {
    case "label":
      return (
        <div className="scroll-reveal content-block__label font-semibold text-stone-850 dark:text-stone-150 mt-4 mb-2 text-sm md:text-base" data-hl-path={path}>
          {block.text}
        </div>
      );

    case "paragraph":
      return (
        <p className="scroll-reveal text-paragraph text-stone-600 dark:text-stone-400 leading-relaxed mb-4 text-sm md:text-base" data-hl-path={path}>
          {block.text}
        </p>
      );

    case "bullets":
      return (
        <ul className="scroll-reveal bullet-list list-disc list-inside pl-4 mb-4 space-y-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );

    case "sub-bullets":
      return (
        <ul className="scroll-reveal bullet-list bullet-list--sub list-[circle] list-inside pl-8 mb-4 space-y-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="scroll-reveal highlight-box p-4 rounded-xl bg-stone-100/50 dark:bg-stone-900/30 border-l-4 border-stone-800 dark:border-stone-400 my-4" data-hl-path={path}>
          <div className="highlight-box__content text-stone-700 dark:text-stone-350 leading-relaxed text-sm md:text-base">
            {block.text}
          </div>
        </div>
      );

    case "quote":
      return (
        <div className="scroll-reveal quote-block p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border-l-4 border-stone-400 dark:border-stone-600 my-4 italic" data-hl-path={path}>
          <div className="quote-block__content text-stone-700 dark:text-stone-300 leading-relaxed text-sm md:text-base">
            {block.text}
          </div>
          {block.source && (
            <div className="quote-block__source text-right text-xs md:text-sm font-semibold text-stone-500 dark:text-stone-500 mt-2">
              — {block.source}
            </div>
          )}
        </div>
      );

    case "definition":
      return (
        <div className="scroll-reveal definition-box p-5 rounded-xl bg-red-500/5 border-l-4 border-red-650 dark:border-red-500/70 my-5" style={{ borderColor: "var(--color-secondary, #B91C1C)" }} data-hl-path={path}>
          <div className="definition-box__content text-stone-700 dark:text-stone-350 leading-relaxed text-sm md:text-base font-medium">
            {block.text}
          </div>
        </div>
      );

    case "conclusion":
      return (
        <div className="scroll-reveal conclusion-box p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 my-5" data-hl-path={path}>
          {block.title && (
            <div className="content-block__label text-base font-bold text-red-650 dark:text-red-500 mb-3" style={{ color: "var(--color-secondary, #B91C1C)" }}>
              {block.title}
            </div>
          )}
          {block.text && (
            <div className="conclusion-box__content text-stone-700 dark:text-stone-300 leading-relaxed text-sm md:text-base mb-3 font-medium">
              {block.text}
            </div>
          )}
          {block.items && (
            <ul className="bullet-list list-disc list-inside pl-4 space-y-2">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bullet-list__item text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base"
                  data-hl-path={`${path}-${idx}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}
        </div>
      );

    case "numbered-group":
      return (
        <div className="scroll-reveal numbered-group space-y-4 my-4">
          {block.items.map((item, itemIdx) => (
            <div key={itemIdx} className="scroll-reveal content-block pl-4 border-l border-stone-200 dark:border-stone-800">
              <div className="content-block__label flex gap-2 items-baseline font-semibold text-stone-850 dark:text-stone-150 mb-2 text-sm md:text-base" data-hl-path={`${path}-${itemIdx}-title`}>
                <span className="text-stone-700 dark:text-stone-300 font-bold min-w-[20px]">{item.number}.</span>
                <span>{item.title}</span>
              </div>
              {item.bullets && (
                <ul className="bullet-list list-[circle] list-inside pl-4 space-y-2">
                  {item.bullets.map((b, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="bullet-list__item text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base"
                      data-hl-path={`${path}-${itemIdx}-${bulletIdx}`}
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );

    case "key-point":
      return (
        <div className="scroll-reveal key-point flex gap-2 items-baseline my-3" data-hl-path={path}>
          <span className="key-point__arrow text-stone-700 dark:text-stone-300 font-bold">→</span>
          <span className="key-point__text text-stone-700 dark:text-stone-300 leading-relaxed text-sm md:text-base font-medium" dangerouslySetInnerHTML={{ __html: block.text }} />
        </div>
      );

    default:
      return (
        <p className="scroll-reveal text-paragraph text-stone-600 dark:text-stone-400 leading-relaxed mb-4 text-sm md:text-base" data-hl-path={path}>
          {block.text}
        </p>
      );
  }
}
