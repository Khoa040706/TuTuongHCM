# Bước 4 — Lát cắt R3F/GSAP S01 → S02

**Trạng thái:** `DONE — DESKTOP PROOF SLICE S01→S02 APPROVED`; người dùng duyệt B4 revision ngày 2026-09-14, không mở rộng thành nghiệm thu mobile hoặc S03–S06

**Owner:** Frontend agent + 3D pipeline reviewer + QA accessibility reviewer

**Công cụ:** code Next.js/R3F/GSAP + GLB blockout; không polish Blender.

## Mục tiêu và kết quả nhìn thấy

Chứng minh toàn pipeline: landing thật, Canvas lazy-loaded, cua/vòng mở từ S01 sang S02 theo scroll hai chiều, CTA thật, fallback/reduced motion và cleanup.

## Đầu vào và điều kiện bắt đầu

- D01–D03 decided; B1 integration map; B3 GLB/manifest approved.
- Trước code: kiểm tra compatibility matrix R3F/Drei với React 19/Three 0.185/Next 16 và đọc docs local liên quan.
- Người dùng đã cho phép triển khai B4 và chỉ cài dependency cần thiết sau khi kiểm tra package hiện có.

## Checklist thực hiện

- [x] **B4.R1** Fit camera/model theo kích thước Canvas; xác minh khoảng thở ở 1366×768 và 1440×900 cho S01/S02/reduced motion.
- [x] **B4.R2** Tách nhịp mở càng, mở vòng, chuyển cảnh và xuất hiện nội dung S02; forward/reverse cùng derive từ một progress.
- [x] **B4.R3** Đối chiếu frame 1/21 với key time thật trong clip GLB; normalized `0.25` được suy ra từ `0.041667s→0.875s`, xác nhận 16/16 clip.
- [x] **B4.R4** Nâng QA để đo controller, progress, model transforms và pose reduced ổn định; kiểm tra 11 mốc nội suy runtime, ghi riêng đo tự động/review mắt/giới hạn.
- [x] **B4.R5** Chụp lại S01/giữa/S02/reduced tại 1366×768, S01/S02 tại 1440×900 và tạo video xuôi/ngược 18 giây từ frame trình duyệt; dừng chờ duyệt B4.

- [x] **B4.1** Xác minh `@react-three/fiber@9.7.0` tương thích React 19.2/Three 0.185; chỉ cài R3F và cập nhật npm lockfile. Không cài Drei vì B4 dùng trực tiếp `GLTFLoader`.
- [x] **B4.2** Tạo client island `HomeExperience` và dynamic import canvas ở top-level client module; DOM content/CTA/fallback độc lập với camera/timeline (PRE03).
- [x] **B4.3** Tạo `HomeCanvas`, `CancerKnowledgeMachine`, `SceneLighting`, loader và quality config. Camera rig/story controller được giữ gọn trong hai component tương ứng vì proof slice chưa cần abstraction riêng.
- [x] **B4.4** Tạo loading/asset-error/WebGL fallback cùng footprint; cưỡng bức lỗi GLB bằng query QA và xác nhận CTA vẫn hoạt động.
- [x] **B4.5** Tạo S01/S02 và GSAP timeline scrub. Timeline dùng `gsap.context`; GSAP điều khiển pose/story transform và reveal DOM S02 trên các thuộc tính riêng, không setState mỗi frame; cleanup bằng `context.revert()`.
- [x] **B4.6** Chia `story_root` và `idle_root`; khóa ownership trong `home-config.js`. GSAP ghi story/pose transform, `useFrame` chỉ ghi idle child, `AnimationMixer` không được tạo.
- [x] **B4.7** Chrome production test pass cuộn thẳng tới S02, frame giữa, cuộn ngược và resize; trạng thái derive trực tiếp từ scroll nên không tích lũy mutation. Test sâu back/BFCache tiếp tục ở B7.
- [x] **B4.8** Nối CTA thật, focus visible, loại global Enter mở overlay; CTA mở auth không cần xem timeline, Escape đóng và trả focus đúng trigger.
- [x] **B4.9** Implement `prefers-reduced-motion`: bỏ ScrollTrigger/idle, giữ model đóng tĩnh, DOM và CTA đầy đủ.
- [x] **B4.10** Cleanup timeline/trigger/listener/loader state đã cài trong source; counter dev cho canvas mount có sẵn. Đo 5 lần chuyển state/route đầy đủ tiếp tục ở B7 cùng LIFE01.

## File dự kiến

- Đã tạo dưới `components/home/`: `HomeExperience.js`, `HomeCanvas.js`, `CancerKnowledgeMachine.js`, `SceneLighting.js`, `HomeFallback.js`, `HomeContent.js`, `home-config.js`.
- Sửa: `app/page.js`, `app/globals.css`, `package.json`, `package-lock.json`.
- Dùng asset B3; không sửa backend/data.

## Kiểm tra và bằng chứng

- `npm run lint`, test liên quan, `npm run test:backend`, `npm run build`.
- Kết quả revision: lint theo vùng B4/script QA pass; production build pass; Chrome QA pass tại `artifacts/homepage-3d/b4/revision/browser/browser-verification.json`.
- Video 18 giây S01→S02→S01 ghép từ 180 frame trình duyệt; screenshot S01/frame giữa/S02/reverse/fallback/reduced motion và hai viewport tại `artifacts/homepage-3d/b4/revision/`.
- Kiểm tra console không error/hydration warning và canvas không che DOM/focus.

## Duyệt, rủi ro và rollback

- Người dùng duyệt cảm giác chuyển cảnh, bố cục chữ/model và CTA trước khi B5/B6 mở rộng.
- Rủi ro: bundle landing lớn, hydration lỗi, ScrollTrigger vs render loop. Xử lý: client boundary sâu, lazy-load, single writer, quality preset.
- Rollback: feature switch về landing cũ; gỡ import island mà không thay auth/backend.

## Exit gate

Phần triển khai, kiểm chứng tự động và review trải nghiệm S01→S02 desktop đã đạt gate. B5A được phép bắt đầu; S03–S06 và nghiệm thu mobile vẫn chưa mở.
