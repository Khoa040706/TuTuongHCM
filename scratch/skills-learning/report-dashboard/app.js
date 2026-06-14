/* ==========================================================================
   AWWWARDS-GRADE INTERACTIVE LOGIC: GSAP Animation Dashboard
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. AN TOÀN KIỂM TRA TẢI THƯ VIỆN
  if (typeof gsap === "undefined") {
    console.warn("GSAP CDN chưa tải xong, đang thiết lập bộ kích hoạt dự phòng...");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 2. TEXT REVEAL & STAGGER ENTRANCE (Cinematic Reveal)
  // Tạo hiệu ứng trượt chữ mặt nạ (text mask reveal) cho tiêu đề
  gsap.set(".main-title", { y: "100%", opacity: 0 });
  gsap.set(".bento-card", { y: 60, scale: 0.95, opacity: 0 });
  gsap.set(".brand-badge", { y: -30, opacity: 0 });
  gsap.set(".subtitle", { y: 20, opacity: 0 });

  const entranceTimeline = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power4.out"
    }
  });

  entranceTimeline
    .to(".brand-badge", {
      y: 0,
      opacity: 1,
      delay: 0.3
    })
    .to(".main-title", {
      y: "0%",
      opacity: 1,
      duration: 1.4,
      ease: "power3.out"
    }, "-=0.9")
    .to(".subtitle", {
      y: 0,
      opacity: 1
    }, "-=1.1")
    .to(".bento-card", {
      y: 0,
      scale: 1,
      opacity: 1,
      stagger: {
        each: 0.08,
        grid: "auto",
        from: "start"
      },
      duration: 1.5,
      ease: "elastic.out(1, 0.75)" // Spring physics tạo độ nẩy nhẹ khi xuất hiện
    }, "-=1.0");

  // 3. FLOATING AMBIENT ORBS (Chuyển động đa chiều có chiều sâu)
  gsap.to(".orb-1", {
    x: "25vw",
    y: "12vh",
    rotation: 360,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".orb-2", {
    x: "-18vw",
    y: "-18vh",
    rotation: -360,
    duration: 30,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".orb-3", {
    x: "20vw",
    y: "-10vh",
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // 4. PARALLAX MOUSE EFFECT (Dịch chuyển 3D tinh tế theo con trỏ chuột)
  const bentoGrid = document.querySelector(".bento-grid");
  const bentoCards = document.querySelectorAll(".bento-card");

  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    bentoCards.forEach(card => {
      const speed = parseFloat(card.getAttribute("data-speed") || "0.03");
      const xOffset = dx * speed;
      const yOffset = dy * speed;

      gsap.to(card, {
        x: xOffset,
        y: yOffset,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });

  // 5. INTERACTIVE REFLECTION GLOW (Vùng sáng chạy theo chuột trong card)
  bentoCards.forEach(card => {
    const glow = card.querySelector(".card-glow");
    
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (glow) {
        gsap.to(glow, {
          background: `radial-gradient(350px circle at ${x}px ${y}px, rgba(245, 158, 11, 0.09), transparent 80%)`,
          duration: 0.3,
          overwrite: "auto"
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      if (glow) {
        gsap.to(glow, {
          background: "radial-gradient(350px circle at 50% 50%, rgba(245, 158, 11, 0), transparent 80%)",
          duration: 0.6,
          overwrite: "auto"
        });
      }
    });
  });

  // 6. CORE ENERGY INTERACTIVE PLAYGROUND
  const demoBox = document.getElementById("animate-box");
  const playBtn = document.getElementById("play-btn");
  const staggerBtn = document.getElementById("stagger-btn");
  const resetBtn = document.getElementById("reset-btn");
  const coreGlow = document.querySelector(".canvas-3d-glow");

  let activeTimeline = null;

  // A. Kích hoạt Lõi Năng Lượng Timeline
  playBtn.addEventListener("click", () => {
    if (activeTimeline && activeTimeline.isActive()) return;

    // Reset Box Properties
    gsap.set(demoBox, { clearProps: "all" });

    activeTimeline = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "elastic.out(1.1, 0.5)" // Spring physics cực nhạy
      }
    });

    // Tạo chuỗi chuyển động nẩy năng lượng
    activeTimeline
      .to(demoBox, {
        x: 180,
        rotation: 180,
        borderRadius: "50%",
        borderColor: "#10b981",
        boxShadow: "0 0 40px rgba(16, 185, 129, 0.7), inset 0 0 20px rgba(16, 185, 129, 0.3)"
      })
      .to(demoBox, {
        y: -60,
        scale: 1.4,
        rotation: 360,
        borderColor: "#3b82f6",
        boxShadow: "0 0 50px rgba(59, 130, 246, 0.8), inset 0 0 25px rgba(59, 130, 246, 0.4)"
      }, "+=0.15")
      .to(demoBox, {
        x: -180,
        y: 60,
        rotation: 540,
        borderRadius: "10px",
        borderColor: "#ec4899",
        boxShadow: "0 0 40px rgba(236, 72, 153, 0.7), inset 0 0 20px rgba(236, 72, 153, 0.3)"
      }, "+=0.15")
      // Về lại tâm với bounce nẩy mạnh mẽ
      .to(demoBox, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 720,
        borderRadius: "22px",
        borderColor: "rgba(245, 158, 11, 0.4)",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.8)",
        ease: "bounce.out",
        duration: 1.4
      }, "+=0.2");
  });

  // B. Xáo Trộn Các Card Bento Ngẫu Nhiên
  staggerBtn.addEventListener("click", () => {
    gsap.to(".bento-card", {
      y: () => gsap.utils.random(-25, 25),
      rotation: () => gsap.utils.random(-3, 3),
      scale: () => gsap.utils.random(0.98, 1.02),
      duration: 0.7,
      ease: "power3.out",
      stagger: {
        each: 0.04,
        from: "center"
      }
    });
  });

  // C. Reset Trạng Thái Ban Đầu
  resetBtn.addEventListener("click", () => {
    if (activeTimeline && activeTimeline.isActive()) {
      activeTimeline.kill();
    }

    gsap.to([demoBox, ".bento-card"], {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      borderRadius: "",
      borderColor: "",
      boxShadow: "",
      clearProps: "all",
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.03
    });
  });
});
