"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BubbleSortVisualizer from "./BubbleSortVisualizer";
import QuickSortVisualizer from "./QuickSortVisualizer";
import QuickSortFlowchart from "./QuickSortFlowchart";
import MemoryVisualizer from "./MemoryVisualizer";
import ConceptQuiz from "./ConceptQuiz";
import JavaRunCycleVisualizer from "./JavaRunCycleVisualizer";
import CastingPlayground from "./CastingPlayground";
import PrintfFormatter from "./PrintfFormatter";
import ComplexVisualizer from "./ComplexVisualizer";
import FractionVisualizer from "./FractionVisualizer";
import HcmTimeline1945to1969 from "./HcmTimeline1945to1969";
import HcmValuesExplorer from "./HcmValuesExplorer";
import HcmWorldDevelopment from "./HcmWorldDevelopment";
import LsdHistoryTimeline from "./LsdHistoryTimeline";
import LsdObjectExplorer from "./LsdObjectExplorer";
import LsdFunctionsExplorer from "./LsdFunctionsExplorer";
import LsdTasksExplorer from "./LsdTasksExplorer";
import LsdMethodologyExplorer from "./LsdMethodologyExplorer";
import LsdSpecificMethodsExplorer from "./LsdSpecificMethodsExplorer";
import LsdRequirementsGoalsExplorer from "./LsdRequirementsGoalsExplorer";
import LsdChapter1GoalsExplorer from "./LsdChapter1GoalsExplorer";
import LsdCapitalismBelongings from "./LsdCapitalismBelongings";
import LsdOctoberRevolution from "./LsdOctoberRevolution";
import LsdColonialVietnam from "./LsdColonialVietnam";
import LsdPatrioticMovements from "./LsdPatrioticMovements";
import LsdSearchForWay from "./LsdSearchForWay";
import LsdInternationalActivities from "./LsdInternationalActivities";
import LsdRevolutionPreparations from "./LsdRevolutionPreparations";
import LsdCommunistOrganizations from "./LsdCommunistOrganizations";
import LsdPartyFoundingConference from "./LsdPartyFoundingConference";
import LsdConferenceResolutions from "./LsdConferenceResolutions";
import LsdHistorySignificance from "./LsdHistorySignificance";
import LsdMovement19301931 from "./LsdMovement19301931";
import LsdPoliticalThesis1930 from "./LsdPoliticalThesis1930";
import LsdRecoveryAndCongress1935 from "./LsdRecoveryAndCongress1935";
import LsdDemocracyContext from "./LsdDemocracyContext";
import LsdDemocracyMovement from "./LsdDemocracyMovement";
import LsdDemocracySignificance from "./LsdDemocracySignificance";
import LsdNationalLiberationStrategy from "./LsdNationalLiberationStrategy";
import LsdLiberationPreparation from "./LsdLiberationPreparation";
import LsdAntiJapaneseMovement from "./LsdAntiJapaneseMovement";
import LsdAugustRevolution from "./LsdAugustRevolution";
import LsdRevolutionSignificance from "./LsdRevolutionSignificance";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function formatMathText(text) {
  if (typeof text !== "string") return text;
  
  // Replace $...$ blocks with formatted HTML
  return text.replace(/\$(.*?)\$/g, (match, formula) => {
    // 1. Replace LaTeX-style math symbols
    let formatted = formula
      .replace(/\\le/g, "≤")
      .replace(/\\ge/g, "≥")
      .replace(/\\dots/g, "…")
      .replace(/\\Omega/g, "Ω")
      .replace(/\\theta/g, "θ")
      .replace(/\\Theta/g, "Θ")
      .replace(/\\alpha/g, "α")
      .replace(/\\beta/g, "β")
      .replace(/\\times/g, "×")
      .replace(/\\log/g, "log")
      .replace(/\\ln/g, "ln")
      .replace(/\\to/g, "→")
      .replace(/\\infty/g, "∞");

    // 2. Replace subscript notation like x_1 or x_{n-1}
    formatted = formatted.replace(/([a-zA-Z_0-9])_([0-9a-zA-Z_])/g, "$1<sub>$2</sub>");
    formatted = formatted.replace(/([a-zA-Z_0-9])_\{([^}]+)\}/g, "$1<sub>$2</sub>");

    // 2.5. Replace superscript notation like x^2 or x^{n-1} or x^(n)
    formatted = formatted.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
    formatted = formatted.replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");
    formatted = formatted.replace(/\^([a-zA-Z0-9\-+]+)/g, "<sup>$1</sup>");

    // 3. Format variables like A, a, i, j, n, lo, hi, p, key, pivot
    const variables = ["lo", "hi", "pivot", "arr", "key", "swap", "val", "max", "min", "temp", "p", "A", "a", "i", "j", "n", "k", "T", "O", "log", "x", "y"];
    variables.forEach(v => {
      const regex = new RegExp(`\\b${v}\\b`, 'g');
      formatted = formatted.replace(regex, `<span class="font-serif italic font-semibold text-stone-850">${v}</span>`);
    });

    return `<span class="inline-flex items-center gap-0.5 font-semibold text-stone-850">${formatted}</span>`;
  });
}

function ChapterHeader({ title, subtitle, chapterId }) {
  const bannerRef = useRef(null);
  const canvasRef = useRef(null);

  useGSAP(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    // GSAP ScrollTrigger Entrance Animation
    gsap.fromTo(banner,
      {
        scaleX: 0.97,
        opacity: 0,
        y: 30
      },
      {
        scaleX: 1,
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger text items inside
    const badge = banner.querySelector(".chapter-banner-badge");
    const mainTitle = banner.querySelector(".chapter-banner-title");
    const subText = banner.querySelector(".chapter-banner-subtitle");
    const bgText = banner.querySelector(".chapter-banner-bgtext");

    gsap.fromTo([badge, mainTitle, subText],
      {
        y: 25,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(bgText,
      {
        scale: 0.85,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: bannerRef });

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const accentColor = typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#d97706"
      : "#d97706";

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles system parameters
    const maxParticles = 65;
    const particles = [];
    const mouse = { x: 0, y: 0, isHovered: false };

    // Helper: generate random between min and max
    const randomRange = (min, max) => Math.random() * (max - min) + min;

    // Standard Particle Class
    class Particle {
      constructor(isBurst = false, x = 0, y = 0) {
        this.isBurst = isBurst;
        this.x = isBurst ? x : randomRange(0, canvas.width);
        this.y = isBurst ? y : randomRange(0, canvas.height);
        
        const angle = isBurst ? randomRange(0, Math.PI * 2) : 0;
        const speed = isBurst ? randomRange(1.2, 4) : 0;
        this.vx = isBurst ? Math.cos(angle) * speed : randomRange(-0.2, 0.2);
        this.vy = isBurst ? Math.sin(angle) * speed : randomRange(-0.2, 0.2);
        
        this.size = isBurst ? randomRange(1.2, 3) : randomRange(0.8, 2.2);
        this.color = Math.random() > 0.4 ? accentColor : "#ffffff";
        this.alpha = isBurst ? 1 : randomRange(0.15, 0.65);
        this.decay = isBurst ? randomRange(0.015, 0.035) : 0;
      }

      update() {
        if (!this.isBurst) {
          // Soft floating wind drift
          this.vx += randomRange(-0.02, 0.02);
          this.vy += randomRange(-0.02, 0.02);

          // Friction limit
          this.vx *= 0.97;
          this.vy *= 0.97;

          // Mouse Swirl Attraction Force
          if (mouse.isHovered) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const force = (180 - dist) / 180 * 0.12;
              const angle = Math.atan2(dy, dx);
              // Perpendicular spiral orbit + pull force
              this.vx += Math.cos(angle + Math.PI / 2) * force * 0.55 + dx * 0.0006;
              this.vy += Math.sin(angle + Math.PI / 2) * force * 0.55 + dy * 0.0006;
            }
          }
        } else {
          // Burst decay
          this.alpha -= this.decay;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries for floating particles
        if (!this.isBurst) {
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.isBurst ? 12 : 5;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize floating particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle(false));
    }

    // Event listeners
    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleClick = (e) => {
      const rect = banner.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Spawn 20 burst particles
      for (let i = 0; i < 22; i++) {
        particles.push(new Particle(true, clickX, clickY));
      }
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseleave", handleMouseLeave);
    banner.addEventListener("click", handleClick);

    // Canvas loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        // Remove dead burst particles
        if (p.isBurst && p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseleave", handleMouseLeave);
      banner.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="chapter-banner-container w-full relative mb-14 overflow-hidden select-none cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <canvas
        ref={canvasRef}
        className="chapter-banner-canvas absolute inset-0 pointer-events-none z-0"
      />

      {/* Background Huge Text Overlay */}
      <div className="chapter-banner-bgtext absolute right-10 bottom-2 text-[8rem] md:text-[11rem] font-black font-playfair text-white/[0.03] tracking-widest leading-none pointer-events-none z-0">
        CHƯƠNG {chapterId}
      </div>

      <div className="chapter-banner-content relative z-10 w-full h-[270px] md:h-[310px] bg-gradient-to-br from-[#1e1d1a] to-[#141312] border-b border-[#2a2926] flex flex-col justify-center px-8 md:px-16">
        <div className="chapter-banner-badge inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-4.5 w-fit">
          <span>📚</span>
          <span>Chương {chapterId}</span>
        </div>
        <h1 className="chapter-banner-title text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-playfair tracking-tight mb-4.5 leading-tight">
          {title}
        </h1>
        <p className="chapter-banner-subtitle text-[#eae6db] text-xs md:text-sm leading-relaxed opacity-65 max-w-3xl font-sans font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ContentRenderer({ chapters }) {
  const [activeLang, setActiveLang] = useState("java");
  return (
    <div className="content-area font-sans">
      {chapters.map((ch) => (
        <div key={ch.id} id={`chapter-${ch.id}`} className="chapter-block mb-16 scroll-mt-20">
          <ChapterHeader title={ch.title} subtitle={ch.subtitle} chapterId={ch.id} />

          {/* Sections */}
          {ch.sections.map((sec) => (
            <div key={sec.id} id={`section-${sec.id}`} className="section mb-10 scroll-mt-20">
              <div className="section__heading flex items-baseline gap-3 mb-6 pb-3 border-b-2 border-stone-200">
                {sec.roman && (
                  <span className="section__roman text-xl md:text-2xl font-extrabold text-accent font-playfair leading-none">
                    {sec.roman}.
                  </span>
                )}
                <h2 className="section__title text-lg md:text-xl font-bold text-stone-900 font-playfair leading-tight">
                  {sec.title}
                </h2>
              </div>

              {/* Subsections */}
              {sec.subsections.map((sub) => (
                <div
                  key={sub.id}
                  id={`content-${sub.id}`}
                  className="subsection mb-10 scroll-mt-20"
                >
                  {(sub.number || sub.title) && (
                    <div className="subsection__heading flex items-baseline gap-2 mb-6 pl-2">
                      {sub.number && (
                        <span className="subsection__number text-lg font-bold text-accent font-sans">
                          {sub.number}.
                        </span>
                      )}
                      <h3 className="subsection__title text-base md:text-lg font-bold text-stone-850 font-sans leading-snug">
                        {sub.title}
                      </h3>
                    </div>
                  )}

                  {/* Parts (Rendered as premium study cards with 3D animation) */}
                  {sub.parts.map((part, partIdx) => {
                    const hasHeading = part.label || part.title;
                    const basePath = `${ch.id}-${sec.id}-${sub.id}-${part.id}`;

                    return (
                      <CinematicScrollWrapper key={part.id} index={partIdx} className="mb-8">
                        <SpotlightCardWrapper id={`content-${part.id}`}>
                          {hasHeading && (
                            <div className="card-bookmark-tag">
                              {part.label && <span className="mr-1">{part.label} /</span>}
                              <span>{part.title}</span>
                            </div>
                          )}

                          {/* Content Blocks */}
                          <div className="card-content-blocks font-sans relative z-10">
                            {part.content.map((block, idx) => (
                              <ContentBlock
                                key={idx}
                                block={block}
                                path={`${basePath}-${idx}`}
                                activeLang={activeLang}
                                setActiveLang={setActiveLang}
                              />
                            ))}
                          </div>
                        </SpotlightCardWrapper>
                      </CinematicScrollWrapper>
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

function CinematicScrollWrapper({ children, className = "", index = 0 }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    // Z-axis depth (Subtle premium drift)
    const startZ = isMobile ? -25 : -35;
    const startRotX = isMobile ? 3 : 4;
    const startY = isMobile ? 15 : 20;

    // Alternating X-axis fly-in for side drift (very subtle)
    const isEven = index % 2 === 0;
    const startX = isEven 
      ? (isMobile ? -10 : -15) 
      : (isMobile ? 10 : 15);
    const startRotY = isEven ? -2 : 2;

    gsap.fromTo(el,
      {
        transformPerspective: 1200,
        rotationX: startRotX,
        rotationY: startRotY,
        z: startZ,
        x: startX,
        y: startY,
        opacity: 0,
        filter: "blur(2px)"
      },
      {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=15",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef, dependencies: [index] });

  return (
    <div
      ref={containerRef}
      className={`preserve-3d ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
    >
      {children}
    </div>
  );
}

function SpotlightCardWrapper({ children, className = "", id = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      id={id}
      className={`premium-study-card ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-spotlight-radial pointer-events-none" />
      {children}
    </div>
  );
}

function ContentBlock({ block, path, activeLang, setActiveLang }) {
  switch (block.type) {
    case "label":
      return (
        <div className="content-block__label font-bold text-stone-800 mt-5 mb-2 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );

    case "paragraph":
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );

    case "bullets":
      return (
        <ul className="bullet-list list-disc list-inside pl-2 mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ul>
      );

    case "sub-bullets":
      return (
        <ul className="bullet-list bullet-list--sub list-[circle] list-inside pl-8 mb-4 space-y-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-600 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="highlight-box mb-4" data-hl-path={path}>
          <div className="highlight-box__content text-stone-800 leading-[1.85] text-sm md:text-base font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
        </div>
      );

    case "quote":
      return (
        <div className="quote-block my-5 italic" data-hl-path={path}>
          <div className="quote-block__content text-stone-800 leading-[1.85] text-sm md:text-base font-playfair" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
          {block.source && (
            <div className="quote-block__source text-right text-xs md:text-sm font-semibold text-stone-500 mt-2 font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.source) }} />
          )}
        </div>
      );

    case "definition":
      return (
        <div className="definition-box p-5 rounded-xl bg-red-500/5 border-l-4 border-red-650 my-5" data-hl-path={path}>
          <div className="definition-box__content leading-[1.9] text-sm md:text-base font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
        </div>
      );

    case "conclusion":
      return (
        <div className="conclusion-box p-5 rounded-xl bg-stone-100 border border-stone-200 my-5" data-hl-path={path}>
          {block.title && (
            <div className="content-block__label text-base font-bold text-secondary mb-3 font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.title) }} />
          )}
          {block.text && (
            <div className="conclusion-box__content text-stone-800 leading-[1.9] text-sm md:text-base mb-3 font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
          )}
          {block.items && (
            <ul className="bullet-list list-inside space-y-2.5">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
                  data-hl-path={`${path}-${idx}`}
                  dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
                />
              ))}
            </ul>
          )}
        </div>
      );

    case "numbered-group":
      return (
        <div className="numbered-group space-y-5 my-5">
          {block.items.map((item, itemIdx) => (
            <div key={itemIdx} className="content-block pl-4 border-l-2 border-stone-200">
              <div className="content-block__label flex gap-2 items-baseline font-bold text-stone-800 mb-2.5 text-sm md:text-base font-sans" data-hl-path={`${path}-${itemIdx}-title`}>
                <span className="text-accent font-extrabold min-w-[20px]">{item.number}.</span>
                <span dangerouslySetInnerHTML={{ __html: formatMathText(item.title) }} />
              </div>
              {item.bullets && (
                <ul className="bullet-list list-[circle] list-inside pl-4 space-y-2">
                  {item.bullets.map((b, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="bullet-list__item text-stone-600 leading-[1.85] text-sm md:text-base font-sans"
                      data-hl-path={`${path}-${itemIdx}-${bulletIdx}`}
                      dangerouslySetInnerHTML={{ __html: formatMathText(b) }}
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
        <div className="key-point flex gap-2.5 items-baseline my-3.5" data-hl-path={path}>
          <span className="key-point__arrow text-accent font-extrabold text-base leading-none mt-0.5">→</span>
          <span className="key-point__text text-stone-700 leading-[1.85] text-sm md:text-base font-medium font-sans" dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
        </div>
      );

    case "code":
      return (
        <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4]" data-hl-path={path}>
          {block.language && (
            <div className="code-block__header px-4 py-2 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex justify-between items-center select-none">
              <span>{block.language}</span>
            </div>
          )}
          <pre className="code-block__pre p-4 whitespace-pre-wrap break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e]">
            <code dangerouslySetInnerHTML={{ __html: highlightCode(block.code, block.language) }} />
          </pre>
        </div>
      );

    case "table":
      return (
        <div className="table-container my-5 overflow-x-auto rounded-xl border border-stone-200" data-hl-path={path}>
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead className="bg-stone-50">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-2 md:px-4 py-2.5 md:py-3 text-left font-bold text-stone-700 uppercase tracking-wider text-[10px] md:text-xs border-b border-stone-200 whitespace-nowrap ${
                      i === 0
                        ? "sticky left-0 bg-stone-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]"
                        : ""
                    }`}
                  >
                    {formatMathText(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-stone-50/50"}>
                  {row.map((cell, cellIndex) => {
                    const cleanCellText = String(cell).replace(/<[^>]*>/g, '');
                    const isShort = cleanCellText.length < 35;
                    return (
                      <td
                        key={cellIndex}
                        className={`px-2 md:px-4 py-2.5 md:py-3 text-stone-600 font-sans text-xs md:text-sm border-b border-stone-100 ${
                          isShort ? "whitespace-nowrap" : ""
                        } ${
                          cellIndex === 0
                            ? `sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)] ${
                                rowIndex % 2 === 0 ? "bg-white" : "bg-[#fcfcfb]"
                              }`
                            : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: formatMathText(cell) }}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "numbered-list":
      return (
        <ol className="list-decimal list-inside pl-2 mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: formatMathText(item) }}
            />
          ))}
        </ol>
      );

    case "bubble-sort-visualizer":
      return (
        <BubbleSortVisualizer key={path} />
      );

    case "quick-sort-visualizer":
      return (
        <QuickSortVisualizer key={path} mode={block.mode} />
      );

    case "quick-sort-flowchart":
      return (
        <QuickSortFlowchart key={path} />
      );

    case "big-o-curve-chart":
      return (
        <BigOCurveChart key={path} />
      );

    case "big-o-simulator":
      return (
        <BigOSimulator key={path} />
      );

    case "big-o-code-tabs":
      return (
        <BigOCodeTabs 
          key={path} 
          block={block} 
          activeLang={activeLang} 
          setActiveLang={setActiveLang} 
        />
      );

    case "pass-by-value-ref-visualizer":
      return (
        <MemoryVisualizer key={path} />
      );

    case "pass-by-value-ref-code-tabs":
      return (
        <PassByRefCodeTabs key={path} />
      );

    case "pass-by-value-ref-quiz":
      return (
        <ConceptQuiz key={path} />
      );

    case "java-run-cycle-visualizer":
      return (
        <JavaRunCycleVisualizer key={path} />
      );

    case "java-casting-playground":
      return (
        <CastingPlayground key={path} />
      );

    case "java-printf-formatter":
      return (
        <PrintfFormatter key={path} />
      );

    case "dsa-complex-visualizer":
      return (
        <ComplexVisualizer key={path} />
      );

    case "dsa-fraction-visualizer":
      return (
        <FractionVisualizer key={path} />
      );

    case "hcm-timeline-1945-1969":
      return (
        <HcmTimeline1945to1969 key={path} />
      );

    case "hcm-values-explorer":
      return (
        <HcmValuesExplorer key={path} />
      );

    case "hcm-world-development":
      return (
        <HcmWorldDevelopment key={path} />
      );

    case "lsd-history-timeline":
      return (
        <LsdHistoryTimeline key={path} />
      );

    case "lsd-object-explorer":
      return (
        <LsdObjectExplorer key={path} />
      );

    case "lsd-functions-explorer":
      return (
        <LsdFunctionsExplorer key={path} />
      );

    case "lsd-tasks-explorer":
      return (
        <LsdTasksExplorer key={path} />
      );

    case "lsd-methodology-explorer":
      return (
        <LsdMethodologyExplorer key={path} />
      );

    case "lsd-specific-methods-explorer":
      return (
        <LsdSpecificMethodsExplorer key={path} />
      );

    case "lsd-requirements-goals-explorer":
      return (
        <LsdRequirementsGoalsExplorer key={path} />
      );

    case "lsd-chapter1-goals-explorer":
      return (
        <LsdChapter1GoalsExplorer key={path} />
      );

    case "lsd-capitalism-belongings":
      return (
        <LsdCapitalismBelongings key={path} />
      );

    case "lsd-october-revolution":
      return (
        <LsdOctoberRevolution key={path} />
      );

    case "lsd-colonial-vietnam":
      return (
        <LsdColonialVietnam key={path} />
      );

    case "lsd-patriotic-movements":
      return (
        <LsdPatrioticMovements key={path} />
      );

    case "lsd-search-for-way":
      return (
        <LsdSearchForWay key={path} />
      );

    case "lsd-international-activities":
      return (
        <LsdInternationalActivities key={path} />
      );

    case "lsd-revolution-preparations":
      return (
        <LsdRevolutionPreparations key={path} />
      );

    case "lsd-communist-organizations":
      return (
        <LsdCommunistOrganizations key={path} />
      );

    case "lsd-party-founding-conference":
      return (
        <LsdPartyFoundingConference key={path} />
      );

    case "lsd-conference-resolutions":
      return (
        <LsdConferenceResolutions key={path} />
      );

    case "lsd-history-significance":
      return (
        <LsdHistorySignificance key={path} />
      );

    case "lsd-movement-1930-1931":
      return (
        <LsdMovement19301931 key={path} />
      );

    case "lsd-political-thesis-1930":
      return (
        <LsdPoliticalThesis1930 key={path} />
      );

    case "lsd-recovery-congress-1935":
      return (
        <LsdRecoveryAndCongress1935 key={path} />
      );

    case "lsd-democracy-context":
      return (
        <LsdDemocracyContext key={path} />
      );

    case "lsd-democracy-movement":
      return (
        <LsdDemocracyMovement key={path} />
      );

    case "lsd-democracy-significance":
      return (
        <LsdDemocracySignificance key={path} />
      );

    case "lsd-national-liberation-strategy":
      return (
        <LsdNationalLiberationStrategy key={path} />
      );

    case "lsd-liberation-preparation":
      return (
        <LsdLiberationPreparation key={path} />
      );

    case "lsd-anti-japanese-movement":
      return (
        <LsdAntiJapaneseMovement key={path} />
      );

    case "lsd-august-revolution":
      return (
        <LsdAugustRevolution key={path} />
      );

    case "lsd-revolution-significance":
      return (
        <LsdRevolutionSignificance key={path} />
      );

    default:
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path} dangerouslySetInnerHTML={{ __html: formatMathText(block.text) }} />
      );
  }
}

function highlightCode(code, language) {
  if (!code) return "";
  
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "python") {
    const comments = [];
    const strings = [];

    // Extract comments first (# to end of line)
    escaped = escaped.replace(/#.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Extract strings
    escaped = escaped.replace(/"(.*?)"/g, (match, p1) => {
      strings.push(p1);
      return `___STRING_PLACEHOLDER_${strings.length - 1}___`;
    });

    // Keywords
    const keywords = ["def", "return", "for", "in", "if", "elif", "else", "while", "import", "from", "as", "class", "try", "except", "break", "continue"];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    // Built-ins or types
    const builtins = ["len", "enumerate", "range", "print", "arr", "target", "int", "list"];
    builtins.forEach(bi => {
      const regex = new RegExp(`\\b${bi}\\b`, 'g');
      escaped = escaped.replace(regex, `___BUILTIN_PLACEHOLDER_${bi}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace placeholders
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });
    builtins.forEach(bi => {
      escaped = escaped.replace(new RegExp(`___BUILTIN_PLACEHOLDER_${bi}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${bi}</span>`);
    });
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore strings
    escaped = escaped.replace(/___STRING_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const strVal = strings[parseInt(p1, 10)];
      return `<span class="text-[#ce9178] font-mono">"${strVal}"</span>`;
    });

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "c") {
    const comments = [];
    const strings = [];

    // Extract comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Keywords
    const keywords = ["int", "void", "for", "if", "return", "while", "else", "break", "continue"];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    // Types / identifiers
    const identifiers = ["target", "arr", "temp", "binary_search", "linear_search", "bubble_sort", "mid", "left", "right"];
    identifiers.forEach(id => {
      const regex = new RegExp(`\\b${id}\\b`, 'g');
      escaped = escaped.replace(regex, `___IDENTIFIER_PLACEHOLDER_${id}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace placeholders
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });
    identifiers.forEach(id => {
      escaped = escaped.replace(new RegExp(`___IDENTIFIER_PLACEHOLDER_${id}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${id}</span>`);
    });
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "java") {
    const comments = [];
    const strings = [];

    // Extract comments first to prevent highlighting inside comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    // Extract strings next to prevent highlighting inside strings
    escaped = escaped.replace(/"(.*?)"/g, (match, p1) => {
      strings.push(p1);
      return `___STRING_PLACEHOLDER_${strings.length - 1}___`;
    });

    // Perform regex replacements for keywords, types, numbers, literals
    const keywords = [
      "public", "class", "static", "void", "int", "boolean", "for", 
      "if", "break", "return", "new", "import", "package", "while", "continue"
    ];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    const types = ["BubbleSort", "String", "System", "Math", "temp", "QuickSortRecursive", "QuickSortIterative", "Stack", "Stack<int[]>"];
    types.forEach(t => {
      const regex = new RegExp(`\\b${t}\\b`, 'g');
      escaped = escaped.replace(regex, `___TYPE_PLACEHOLDER_${t}___`);
    });

    escaped = escaped.replace(/\b(true|false|null)\b/g, '___LITERAL_PLACEHOLDER_$1___');
    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');

    // Replace the placeholders with final HTML spans
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#569cd6] font-bold font-mono">${kw}</span>`);
    });

    types.forEach(t => {
      escaped = escaped.replace(new RegExp(`___TYPE_PLACEHOLDER_${t}___`, 'g'), `<span class="text-[#4ec9b0] font-semibold font-mono">${t}</span>`);
    });

    escaped = escaped.replace(/___LITERAL_PLACEHOLDER_(true|false|null)___/g, '<span class="text-[#569cd6] font-mono">$1</span>');
    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    // Restore strings with final HTML spans
    escaped = escaped.replace(/___STRING_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const strVal = strings[parseInt(p1, 10)];
      return `<span class="text-[#ce9178] font-mono">"${strVal}"</span>`;
    });

    // Restore comments with final HTML spans
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  if (language === "pseudocode" || language === "algo") {
    const comments = [];

    // Extract comments
    escaped = escaped.replace(/\/\/.*$/gm, (match) => {
      comments.push(match);
      return `___COMMENT_PLACEHOLDER_${comments.length - 1}___`;
    });

    const keywords = [
      "procedure", "function", "end", "for", "to", "inclusive", "do", "if", 
      "then", "repeat", "until", "not", "swap", "swapped", "length", "while", "true", "return"
    ];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      escaped = escaped.replace(regex, `___KEYWORD_PLACEHOLDER_${kw}___`);
    });

    escaped = escaped.replace(/\b\d+\b/g, '___NUMBER_PLACEHOLDER_$&___');
    
    const identifiers = ["bubbleSort", "A", "n", "i", "swapped", "quickSortLomuto", "partitionLomuto", "quickSortHoare", "partitionHoare", "lo", "hi", "p", "pivot", "j"];
    identifiers.forEach(id => {
      const regex = new RegExp(`\\b${id}\\b`, 'g');
      escaped = escaped.replace(regex, `___IDENTIFIER_PLACEHOLDER_${id}___`);
    });

    // Replace placeholders with final HTML spans
    keywords.forEach(kw => {
      escaped = escaped.replace(new RegExp(`___KEYWORD_PLACEHOLDER_${kw}___`, 'g'), `<span class="text-[#c586c0] font-bold font-mono">${kw}</span>`);
    });

    escaped = escaped.replace(/___NUMBER_PLACEHOLDER_(\d+)___/g, '<span class="text-[#b5cea8] font-mono">$1</span>');

    identifiers.forEach(id => {
      escaped = escaped.replace(new RegExp(`___IDENTIFIER_PLACEHOLDER_${id}___`, 'g'), `<span class="text-[#9cdcfe] font-mono">${id}</span>`);
    });

    // Restore comments
    escaped = escaped.replace(/___COMMENT_PLACEHOLDER_(\d+)___/g, (match, p1) => {
      const commentText = comments[parseInt(p1, 10)];
      return `<span class="text-green-600 italic font-sans">${commentText}</span>`;
    });

    return escaped;
  }

  return escaped;
}

// ============================================================
// COMPONENTS DÀNH CHO BIG O NOTATION
// ============================================================

function BigOCurveChart() {
  const [hoveredCurve, setHoveredCurve] = useState(null);

  const curves = [
    {
      id: "o1",
      name: "O(1) - Hằng số",
      color: "#22c55e",
      equation: "Y = 1",
      desc: "Thời gian chạy không đổi bất kể kích thước dữ liệu. Hiệu năng lý tưởng nhất.",
      example: "Truy xuất phần tử mảng theo chỉ số, chèn/xóa trong HashMap.",
      points: "60,310 460,310"
    },
    {
      id: "ologn",
      name: "O(log n) - Logarit",
      color: "#10b981",
      equation: "Y = log2(n)",
      desc: "Thời gian chạy tăng rất chậm khi dữ liệu tăng lớn. Rất tối ưu.",
      example: "Thuật toán tìm kiếm nhị phân (Binary Search).",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = Math.log2(x + 1);
        return `${60 + x * 40},${340 - y * 30}`;
      }).join(" ")
    },
    {
      id: "on",
      name: "O(n) - Tuyến tính",
      color: "#84cc16",
      equation: "Y = n",
      desc: "Thời gian chạy tỉ lệ thuận trực tiếp với kích thước dữ liệu.",
      example: "Tìm kiếm tuần tự (Linear Search), tìm Max/Min trong mảng.",
      points: "60,340 460,40"
    },
    {
      id: "onlogn",
      name: "O(n log n) - Tuyến tính Logarit",
      color: "#eab308",
      equation: "Y = n * log2(n)",
      desc: "Hiệu năng tốt nhất cho các thuật toán sắp xếp đa mục đích.",
      example: "Merge Sort, Quick Sort (trung bình), Heap Sort.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = x * Math.log2(x + 1) * 0.25;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "on2",
      name: "O(n²) - Bậc hai",
      color: "#f97316",
      equation: "Y = n²",
      desc: "Thời gian chạy tăng vọt nhanh chóng. Kém hiệu quả với dữ liệu lớn.",
      example: "Bubble Sort, Selection Sort, hai vòng lặp lồng nhau.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = x * x * 0.1;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "o2n",
      name: "O(2^n) - Hàm mũ",
      color: "#ef4444",
      equation: "Y = 2^n",
      desc: "Tốc độ chạy tăng cực kỳ nhanh. Thuật toán mất khả năng chạy khi N hơi lớn.",
      example: "Tìm số Fibonacci đệ quy ngây thơ, duyệt mọi tập con.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 10;
        const y = Math.pow(2, x) * 0.01;
        return `${60 + x * 40},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    },
    {
      id: "onfact",
      name: "O(n!) - Giai thừa",
      color: "#7f1d1d",
      equation: "Y = n!",
      desc: "Thời gian chạy tồi tệ nhất. Thuật toán treo máy ngay cả khi N chỉ từ 15-20.",
      example: "Bài toán người giao hàng vét cạn (TSP), tìm mọi hoán vị.",
      points: Array.from({length: 40}, (_, i) => {
        const x = (i/39) * 5;
        let f = 1;
        for(let j=2; j<=x; j++) f *= j;
        const y = f * 0.08;
        return `${60 + x * 80},${340 - Math.min(10, y) * 30}`;
      }).join(" ")
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-6 shadow-sm select-none">
      <div className="flex flex-col md:flex-row gap-6">
        {/* SVG Chart */}
        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-4 flex justify-center items-center shadow-inner relative">
          <svg viewBox="0 0 500 400" className="w-full h-auto overflow-visible font-sans text-[10px]">
            {/* Grid lines */}
            <line x1="60" y1="340" x2="460" y2="340" stroke="#a8a29e" strokeWidth="2" />
            <line x1="60" y1="40" x2="60" y2="340" stroke="#a8a29e" strokeWidth="2" />
            
            {/* Grid labels */}
            <text x="460" y="360" textAnchor="end" className="fill-stone-500 font-bold uppercase tracking-wider text-[11px]">Dữ liệu N →</text>
            <text x="25" y="190" textAnchor="middle" className="fill-stone-500 font-bold uppercase tracking-wider text-[11px]" transform="rotate(-90 25 190)">Số phép tính (Tốc độ) →</text>

            {/* Grid background markers */}
            {Array.from({length: 9}).map((_, i) => (
              <line key={i} x1={60 + (i+1)*40} y1="40" x2={60 + (i+1)*40} y2="340" stroke="#f5f5f4" strokeWidth="1" strokeDasharray="4 4" />
            ))}
            {Array.from({length: 9}).map((_, i) => (
              <line key={i} x1="60" y1={340 - (i+1)*30} x2="460" y2={340 - (i+1)*30} stroke="#f5f5f4" strokeWidth="1" strokeDasharray="4 4" />
            ))}

            {/* Render Curves */}
            {curves.map((c) => {
              const isHovered = hoveredCurve === c.id;
              const hasAnyHover = hoveredCurve !== null;
              return (
                <polyline
                  key={c.id}
                  points={c.points}
                  fill="none"
                  stroke={c.color}
                  strokeWidth={isHovered ? 5 : hasAnyHover ? 1.5 : 3.5}
                  strokeOpacity={isHovered ? 1 : hasAnyHover ? 0.35 : 0.9}
                  className="transition-all duration-200 ease-out cursor-pointer"
                  onMouseEnter={() => setHoveredCurve(c.id)}
                  onMouseLeave={() => setHoveredCurve(null)}
                />
              );
            })}

            {/* Labels overlay at ends of curves */}
            {curves.map((c) => {
              const pts = c.points.split(" ");
              const lastPt = pts[pts.length - 1].split(",");
              const lx = parseFloat(lastPt[0]);
              const ly = parseFloat(lastPt[1]);
              const isHovered = hoveredCurve === c.id;
              if (ly > 40 && ly < 335) {
                return (
                  <text
                    key={c.id}
                    x={lx + 6}
                    y={ly + 3}
                    style={{ fill: c.color, fontSize: isHovered ? "11px" : "9px", fontWeight: isHovered ? "bold" : "normal" }}
                    className="transition-all select-none pointer-events-none"
                  >
                    {c.id === "onfact" ? "O(n!)" : c.id === "o2n" ? "O(2ⁿ)" : c.id === "on2" ? "O(n²)" : c.name.split(" ")[0]}
                  </text>
                );
              }
              return null;
            })}
          </svg>
        </div>

        {/* Info Box */}
        <div className="w-full md:w-64 flex flex-col justify-between p-4 bg-white border border-stone-200 rounded-xl shadow-inner min-h-[220px]">
          {hoveredCurve ? (
            (() => {
              const current = curves.find((c) => c.id === hoveredCurve);
              return (
                <div className="space-y-3 animate-in fade-in duration-205">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: current.color }} />
                    <h4 className="font-extrabold text-sm text-stone-900">{current.name}</h4>
                  </div>
                  <div className="text-[10px] bg-stone-100 px-2.5 py-1 rounded font-mono text-stone-700 inline-block font-bold">
                    Công thức: {current.equation}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Mô tả:</strong> {current.desc}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-150 pt-2">
                    <strong>Ví dụ:</strong> {current.example}
                  </p>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-8 text-stone-400 space-y-2">
              <span className="text-3xl animate-bounce">🖱️</span>
              <p className="text-[11px] font-semibold max-w-[180px] leading-relaxed">
                Di chuột hoặc chạm vào các đường biểu diễn để xem phân tích chi tiết!
              </p>
            </div>
          )}
          <div className="mt-4 pt-2 border-t border-stone-150 text-[10px] text-stone-400 font-medium italic text-center leading-normal">
            * Các đường O(2ⁿ), O(n!) được vẽ thu nhỏ tỉ lệ để hiển thị trọn vẹn trong biểu đồ.
          </div>
        </div>
      </div>
    </div>
  );
}

function BigOSimulator() {
  const [v, setV] = useState(3); // Logarithmic slider from 1 to 6 (N from 10 to 1,000,000)

  const N = Math.round(Math.pow(10, v));

  const formatNumber = (num) => {
    return new Intl.NumberFormat("vi-VN").format(num);
  };

  const getLog2 = (num) => {
    return Math.round(Math.log2(num));
  };

  const getNLogN = (num) => {
    return Math.round(num * Math.log2(num));
  };

  const getNLabel = (val) => {
    if (val === 10) return "10 phần tử";
    if (val === 100) return "100 phần tử";
    if (val === 1000) return "1.000 (Một nghìn)";
    if (val === 10000) return "10.000 (Mười nghìn)";
    if (val === 100000) return "100.000 (Trăm nghìn)";
    if (val === 1000000) return "1.000.000 (1 Triệu)";
    return formatNumber(val);
  };

  const cards = [
    {
      label: "O(1)",
      name: "Hằng số",
      calc: () => 1,
      badge: "Mượt mà ✔",
      badgeColor: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800",
      desc: "Truy cập trực tiếp, không phụ thuộc vào N."
    },
    {
      label: "O(log n)",
      name: "Logarit",
      calc: (n) => getLog2(n),
      badge: "Mượt mà ✔",
      badgeColor: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800",
      desc: "Tìm kiếm nhị phân chia đôi mỗi bước."
    },
    {
      label: "O(n)",
      name: "Tuyến tính",
      calc: (n) => n,
      badge: N <= 10000 ? "Mượt mà ✔" : "Tốt ⚡",
      badgeColor: N <= 10000 
        ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800"
        : "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800",
      desc: "Duyệt qua danh sách 1 vòng lặp."
    },
    {
      label: "O(n log n)",
      name: "Tuyến tính Logarit",
      calc: (n) => getNLogN(n),
      badge: N <= 1000 ? "Tốt ⚡" : N <= 10000 ? "Hơi chậm ⏳" : "Quá tải ⚠️",
      badgeColor: N <= 1000
        ? "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800"
        : N <= 10000
        ? "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-450 dark:border-yellow-800"
        : "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800",
      desc: "Merge/Quick Sort chia và gộp dữ liệu."
    },
    {
      label: "O(n²)",
      name: "Bậc hai",
      calc: (n) => n * n,
      badge: N <= 100 ? "Bình thường ◓" : N <= 1000 ? "Trễ nặng ⏳" : "Treo máy/☠",
      badgeColor: N <= 100
        ? "bg-yellow-105 text-yellow-750 border-yellow-250 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800"
        : N <= 1000
        ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800"
        : "bg-red-100 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800",
      desc: "Hai vòng lặp lồng nhau (như Bubble Sort)."
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-6 shadow-sm">
      {/* Slider Dashboard */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 mb-6 shadow-inner flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full space-y-3">
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">Kích thước đầu vào (N)</span>
            <span className="text-xl font-extrabold text-accent font-mono">{getNLabel(N)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={v}
            onChange={(e) => setV(parseInt(e.target.value))}
            className="w-full accent-accent h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-bold font-mono">
            <span>10</span>
            <span>100</span>
            <span>1K</span>
            <span>10K</span>
            <span>100K</span>
            <span>1M</span>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card, idx) => {
          const ops = card.calc(N);
          return (
            <div 
              key={idx}
              className="bg-white border border-stone-200 hover:border-accent/40 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-w-[140px]"
            >
              <div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <span className="font-extrabold text-stone-900 font-mono text-sm whitespace-nowrap">{card.label}</span>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border whitespace-nowrap ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
                <div className="text-[10px] text-stone-450 font-bold uppercase tracking-wider mb-3">
                  {card.name}
                </div>
                <p className="text-[10px] text-stone-500 leading-relaxed min-h-[40px]">
                  {card.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 mt-3">
                <div className="text-[9px] text-stone-400 font-bold uppercase tracking-wide whitespace-nowrap">Số phép tính</div>
                <div className="text-sm font-black text-stone-850 font-mono mt-0.5 truncate" title={formatNumber(ops)}>
                  {formatNumber(ops)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BigOCodeTabs({ block, activeLang, setActiveLang }) {
  const codeContent = block[activeLang] || "";

  return (
    <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4] shadow-md">
      {/* Code Tab Header */}
      <div className="code-block__header px-4 py-2 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex justify-between items-center select-none">
        <div className="flex gap-2">
          {["java", "python", "c"].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold capitalize ${
                activeLang === lang
                  ? "bg-accent text-white shadow-sm"
                  : "hover:text-[#d4d4d4] text-[#858585]"
              }`}
            >
              {lang === "c" ? "C" : lang}
            </button>
          ))}
        </div>
        <span className="opacity-60 uppercase font-extrabold text-[9px] tracking-wider bg-stone-800 px-2 py-0.5 rounded text-white">
          {activeLang === "c" ? "C" : activeLang}
        </span>
      </div>
      {/* Code content */}
      <pre className="code-block__pre p-4 whitespace-pre-wrap break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e]">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(codeContent, activeLang) }} />
      </pre>
    </div>
  );
}

function PassByRefCodeTabs() {
  const [lang, setLang] = useState("java");

  const codes = {
    c: {
      title: "C (Con trỏ - Pass by Value of Pointer)",
      code: `// C KHÔNG có Pass by Reference. Muốn sửa biến gốc -> truyền CON TRỎ.
// Đây là 'Pass by Value of Pointer' - vẫn là Value về mặt kỹ thuật.
#include <stdio.h>

void tangLen_value(int x) {
    x++; // x là bản sao, biến gốc ngoài hàm không đổi
}

void tangLen_pointer(int* px) {
    (*px)++; // px là bản sao địa chỉ, nhưng *px sửa được vùng nhớ gốc
}

int main() {
    int a = 10;
    tangLen_value(a);   // a vẫn = 10
    tangLen_pointer(&a); // a tăng lên 11
}`,
      desc: "Trong C, cách duy nhất để thay đổi biến ngoài hàm là truyền con trỏ. Bản chất con trỏ khi truyền vào hàm vẫn được nhân bản (copy giá trị địa chỉ), do đó C chỉ có <b>Pass by Value</b>."
    },
    cpp: {
      title: "C++ (Pass by Reference THỰC SỰ)",
      code: `// C++ có Pass by Reference thực sự qua ký hiệu & - không truyền địa chỉ, không dùng *.
// Compiler tự lo phần địa chỉ. Lập trình viên dùng x như biến bình thường.
#include <iostream>

void tangLen_val(int x) {
    x++; // x là bản sao
}

void tangLen_ref(int& x) {
    x++; // x là ALIAS của biến truyền vào - không sao chép
}

int main() {
    int a = 10;
    tangLen_val(a); // a vẫn = 10
    tangLen_ref(a); // a tăng lên 11 (Cú pháp giống hệt gọi val)
}`,
      desc: "C++ hỗ trợ tham chiếu thực sự qua ký hiệu <code>&amp;</code>. Tham chiếu này hoạt động như một bí danh (alias) trỏ trực tiếp vào cùng vùng nhớ của biến truyền vào, không tạo ra bản sao."
    },
    java: {
      title: "Java (100% Pass by Value)",
      code: `// Java 100% Pass by Value. Với Object, bản copy được truyền là 'reference value' (địa chỉ).
public class Main {
    // Primitive: copy trị số
    static void tangLen(int x) {
        x++; // Không ảnh hưởng biến gốc
    }

    // Object: copy trị địa chỉ
    static void themPhanTu(int[] arr) {
        arr[0] = 99; // Hợp lệ - sửa vùng nhớ chung của mảng
    }

    static void resetArr(int[] arr) {
        arr = new int[]{0, 0, 0}; // Vô ích - trỏ tham chiếu bản sao đi nơi khác
    }

    public static void main(String[] args) {
        int a = 10;
        tangLen(a); // a vẫn = 10

        int[] nums = {1, 2, 3};
        themPhanTu(nums); // nums[0] trở thành 99
        resetArr(nums);   // nums vẫn là {99, 2, 3} (Không bị reset)
    }
}`,
      desc: "Java sao chép giá trị của tham chiếu (reference value) khi truyền đối tượng. Hàm có thể thay đổi nội dung bên trong đối tượng, nhưng việc gán lại đối tượng mới cho tham số cục bộ hoàn toàn không ảnh hưởng ra bên ngoài."
    },
    python: {
      title: "Python (Pass by Object Reference)",
      code: `# Python truyền tham chiếu đối tượng (Pass by Object Reference) cho TẤT CẢ kiểu dữ liệu.
# Khác biệt dựa trên kiểu Immutable (bất biến) vs Mutable (khả biến).

# int là Immutable (bất biến) -> trông như Pass by Value
def tang_len(x):
    x += 1 # Tạo một đối tượng số 11 mới và cho x trỏ vào đó
    # Biến a ngoài hàm vẫn trỏ đến đối tượng 10 cũ

# list là Mutable (khả biến) -> trông như Pass by Reference
def them_phan_tu(lst):
    lst.append(99) # Sửa trực tiếp trên đối tượng list gốc đang trỏ chung

def reset_list(lst):
    lst = [] # Vô ích - cho lst trỏ sang một list rỗng mới
    # list gốc bên ngoài vẫn nguyên vẹn

a = 10
tang_len(a) # a vẫn = 10

mang = [1, 2, 3]
them_phan_tu(mang) # mang trở thành [1, 2, 3, 99]
reset_list(mang)   # mang vẫn là [1, 2, 3, 99]`,
      desc: "Python sử dụng cơ chế gán nhãn (binding). Đối với kiểu bất biến (int, str), thay đổi giá trị sẽ tạo ra đối tượng mới (trông giống Pass by Value). Đối với kiểu khả biến (list, dict), ta sửa được nội dung đối tượng gốc (trông giống Pass by Reference)."
    }
  };

  const current = codes[lang];

  return (
    <div className="code-block my-5 rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2d2d2d] text-[#d4d4d4] shadow-md font-sans">
      {/* Tab Header */}
      <div className="code-block__header px-4 py-2.5 bg-[#252526] border-b border-[#2d2d2d] text-xs font-mono text-[#858585] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">
        <div className="flex gap-2 flex-wrap">
          {Object.keys(codes).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold text-xs uppercase ${
                lang === l
                  ? "bg-accent text-white shadow-sm"
                  : "hover:text-[#d4d4d4] text-[#858585]"
              }`}
            >
              {l === "cpp" ? "C++" : l}
            </button>
          ))}
        </div>
        <span className="opacity-70 font-extrabold text-[9px] tracking-wider bg-stone-800 px-2 py-0.5 rounded text-amber-400 uppercase">
          {current.title}
        </span>
      </div>

      {/* Code Area */}
      <pre className="code-block__pre p-4 whitespace-pre break-words text-xs md:text-sm font-mono leading-relaxed select-text bg-[#1e1e1e] overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(current.code, lang === "cpp" ? "c" : lang) }} />
      </pre>

      {/* Analysis Footer */}
      <div className="px-4 py-3 bg-[#181818] border-t border-[#2d2d2d] text-xs text-stone-400 leading-relaxed font-sans">
        <strong className="text-stone-300">Bản chất:</strong> <span dangerouslySetInnerHTML={{ __html: current.desc }} />
      </div>
    </div>
  );
}

