"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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
        this.color = Math.random() > 0.4 ? "#fbbf24" : "#d97706"; // Gold and Amber
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
  return (
    <div className="content-area font-sans">
      {chapters.map((ch) => (
        <div key={ch.id} id={`chapter-${ch.id}`} className="chapter-block mb-16 scroll-mt-20">
          <ChapterHeader title={ch.title} subtitle={ch.subtitle} chapterId={ch.id} />

          {/* Sections */}
          {ch.sections.map((sec) => (
            <div key={sec.id} id={`section-${sec.id}`} className="section mb-10 scroll-mt-20">
              <div className="section__heading flex items-baseline gap-3 mb-6 pb-3 border-b-2 border-stone-200">
                <span className="section__roman text-xl md:text-2xl font-extrabold text-accent font-playfair leading-none">
                  {sec.roman}.
                </span>
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
                  <div className="subsection__heading flex items-baseline gap-2 mb-6 pl-2">
                    <span className="subsection__number text-lg font-bold text-accent font-sans">
                      {sub.number}.
                    </span>
                    <h3 className="subsection__title text-base md:text-lg font-bold text-stone-850 font-sans leading-snug">
                      {sub.title}
                    </h3>
                  </div>

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
    
    // Z-axis depth (1B and 2A combination)
    const startZ = isMobile ? -45 : -160;
    const startRotX = isMobile ? 6 : 12;
    const startY = isMobile ? 30 : 60;

    // Alternating X-axis fly-in for side drift
    const isEven = index % 2 === 0;
    const startX = isEven 
      ? (isMobile ? -30 : -90) 
      : (isMobile ? 30 : 90);
    const startRotY = isEven ? -10 : 10;

    gsap.fromTo(el,
      {
        transformPerspective: 1200,
        rotationX: startRotX,
        rotationY: startRotY,
        z: startZ,
        x: startX,
        y: startY,
        opacity: 0,
        filter: "blur(6px)"
      },
      {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=80",
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

function ContentBlock({ block, path }) {
  switch (block.type) {
    case "label":
      return (
        <div className="content-block__label font-bold text-stone-800 mt-5 mb-2 text-sm md:text-base font-sans" data-hl-path={path}>
          {block.text}
        </div>
      );

    case "paragraph":
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path}>
          {block.text}
        </p>
      );

    case "bullets":
      return (
        <ul className="bullet-list list-disc list-inside pl-2 mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
              data-hl-path={`${path}-${idx}`}
              dangerouslySetInnerHTML={{ __html: item }}
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
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="highlight-box mb-4" data-hl-path={path}>
          <div className="highlight-box__content text-stone-800 leading-[1.85] text-sm md:text-base font-sans">
            {block.text}
          </div>
        </div>
      );

    case "quote":
      return (
        <div className="quote-block my-5 italic" data-hl-path={path}>
          <div className="quote-block__content text-stone-800 leading-[1.85] text-sm md:text-base font-playfair">
            {block.text}
          </div>
          {block.source && (
            <div className="quote-block__source text-right text-xs md:text-sm font-semibold text-stone-500 mt-2 font-sans">
              — {block.source}
            </div>
          )}
        </div>
      );

    case "definition":
      return (
        <div className="definition-box p-5 rounded-xl bg-red-500/5 border-l-4 border-red-650 my-5" data-hl-path={path}>
          <div className="definition-box__content leading-[1.9] text-sm md:text-base font-medium font-sans">
            {block.text}
          </div>
        </div>
      );

    case "conclusion":
      return (
        <div className="conclusion-box p-5 rounded-xl bg-stone-100 border border-stone-200 my-5" data-hl-path={path}>
          {block.title && (
            <div className="content-block__label text-base font-bold text-secondary mb-3 font-sans">
              {block.title}
            </div>
          )}
          {block.text && (
            <div className="conclusion-box__content text-stone-800 leading-[1.9] text-sm md:text-base mb-3 font-medium font-sans">
              {block.text}
            </div>
          )}
          {block.items && (
            <ul className="bullet-list list-inside space-y-2.5">
              {block.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bullet-list__item text-stone-700 leading-[1.85] text-sm md:text-base font-sans"
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
        <div className="numbered-group space-y-5 my-5">
          {block.items.map((item, itemIdx) => (
            <div key={itemIdx} className="content-block pl-4 border-l-2 border-stone-200">
              <div className="content-block__label flex gap-2 items-baseline font-bold text-stone-800 mb-2.5 text-sm md:text-base font-sans" data-hl-path={`${path}-${itemIdx}-title`}>
                <span className="text-accent font-extrabold min-w-[20px]">{item.number}.</span>
                <span>{item.title}</span>
              </div>
              {item.bullets && (
                <ul className="bullet-list list-[circle] list-inside pl-4 space-y-2">
                  {item.bullets.map((b, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="bullet-list__item text-stone-600 leading-[1.85] text-sm md:text-base font-sans"
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
        <div className="key-point flex gap-2.5 items-baseline my-3.5" data-hl-path={path}>
          <span className="key-point__arrow text-accent font-extrabold text-base leading-none mt-0.5">→</span>
          <span className="key-point__text text-stone-700 leading-[1.85] text-sm md:text-base font-medium font-sans" dangerouslySetInnerHTML={{ __html: block.text }} />
        </div>
      );

    default:
      return (
        <p className="text-paragraph text-stone-700 leading-[1.9] mb-4 text-sm md:text-base font-sans" data-hl-path={path}>
          {block.text}
        </p>
      );
  }
}
