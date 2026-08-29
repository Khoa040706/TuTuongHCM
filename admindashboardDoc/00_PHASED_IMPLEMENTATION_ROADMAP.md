# LỘ TRÌNH TRIỂN KHAI THEO GIAI ĐOẠN — ADMIN DASHBOARD REDESIGN
**Dự án:** StudyMaster Platform  
**Mục đích:** Chia nhỏ việc redesign Admin Dashboard (Hero fix + Cinematic Scroll Narrative) thành các giai đoạn độc lập, có thể release và kiểm thử riêng lẻ, tránh sửa nhiều thứ cùng lúc gây khó debug.  
**Nguyên tắc sắp xếp**: Sửa lỗi hiện có trước → Đổi kiến trúc điều hướng → Tối ưu hiệu năng → Nâng cấp tương tác sâu → Polish/QA toàn diện.

---

## TỔNG QUAN 5 GIAI ĐOẠN

| Giai đoạn | Tên | Rủi ro | Phụ thuộc |
|---|---|---|---|
| **G0** | Sửa lỗi Hero hiện tại | Thấp | Không |
| **G1** | Gộp 4 Tab thành 1 trang cuộn (chưa tối ưu) | Trung bình | G0 xong |
| **G2** | AdminDock → Scrollspy + Anchor Nav | Trung bình | G1 xong |
| **G3** | Lazy Mount hiệu năng | Cao (kỹ thuật mới) | G2 xong |
| **G4** | Preview ⇄ Focus Mode cho Users/Questions | Cao | G3 xong |
| **G5** | Parallax + Responsive Polish + QA toàn diện | Thấp–Trung bình | G4 xong |

**Không làm G2 trước G1, không làm G3 trước G2** — vì mỗi giai đoạn sau đều giả định giai đoạn trước đã có sẵn cấu trúc DOM/section để gắn vào. Làm ngược thứ tự sẽ phải viết lại code.

---

## GIAI ĐOẠN 0 — Sửa lỗi Hero hiện tại
**Trạng thái hiện tại**: UI đã dựng xong nhưng chưa fix lỗi (đúng như bạn nói) → đây là việc làm **đầu tiên**, độc lập hoàn toàn với việc đổi kiến trúc scroll.

### Việc cần làm
- [ ] Thêm lớp Gradient Scrim (`Z2`) phủ nửa dưới Hero.
- [ ] Giảm opacity chữ nền "STUDYMASTER" xuống 0.08–0.12 + `mix-blend-mode: soft-light`.
- [ ] Gộp KPI card + đồng hồ real-time vào 1 Bottom Band duy nhất (`Z3`).
- [ ] Kiểm tra lại `z-index` Nav luôn cao nhất (`Z4`).
- [ ] (Tùy chọn, có thể để sau) Parallax nhẹ — **không bắt buộc ở giai đoạn này**, để G5 làm cùng lúc với Responsive Polish.

### Tài liệu tham chiếu
`HERO_UI_FIX_PROMPT.md` — đưa thẳng cho Dev/AI Agent, không cần diễn giải thêm.

### Definition of Done
- Pass Test Case 8 (`06_QA_ACCEPTANCE_CRITERIA.md`) — tương phản WCAG AA, không còn card rời rạc.
- Hero vẫn đang ở dạng Tab tĩnh (chưa đổi cơ chế cuộn) — **chỉ sửa hình ảnh, chưa đổi hành vi điều hướng**.

---

## GIAI ĐOẠN 1 — Gộp 4 Tab thành 1 trang cuộn (cấu trúc thô, chưa tối ưu)
**Mục tiêu**: Chuyển từ "4 view ẩn/hiện bằng `adminTab === 'x' ? <TabX/> : null`" sang "4 section cùng nằm trong DOM, xếp dọc, cuộn tự nhiên". **Chưa** làm Scrollspy, **chưa** làm Lazy Mount — chỉ đổi cấu trúc layout trước để có nền tảng.

### Việc cần làm
- [ ] Bỏ điều kiện render `adminTab === 'overview' && <AdminOverviewTab/>` — thay bằng render cả 4 component liên tiếp trong 1 container cuộn dọc.
- [ ] Gắn `id="section-overview"`, `id="section-users"`, `id="section-questions"`, `id="section-leaderboard"` cho từng section (dùng cho neo cuộn ở G2).
- [ ] Áp `min-h-screen` cho mỗi section để giữ nhịp cuộn đều (theo `05_UI_UX_INTERACTION_SPEC.md` mục 1).
- [ ] AdminDock **tạm thời giữ nguyên hành vi cũ** (click đổi `adminTab` state) — chưa nối với cuộn thật, chỉ để không vỡ giao diện trong lúc chuyển đổi.

### Rủi ro cần lưu ý
- Users Tab và Questions Tab đang load **toàn bộ dữ liệu đầy đủ** (bảng phân trang, bộ lọc...) — khi 4 section cùng mount 1 lúc, có thể thấy giật/chậm rõ rệt. **Đây là hiện tượng đã dự đoán trước, sẽ được xử lý ở G3 — không cần cố tối ưu ở G1**, tránh làm 2 việc cùng lúc.

### Definition of Done
- Cuộn tay thấy đủ 4 section theo đúng thứ tự Overview → Users → Questions → Leaderboard.
- Component không bị lỗi logic (state, filter, phân trang) khi chuyển từ conditional render sang render toàn bộ.
- Có thể chấp nhận hiệu năng chưa tối ưu ở bước này.

---

## GIAI ĐOẠN 2 — AdminDock → Scrollspy + Anchor Navigation
**Mục tiêu**: Dock tự động highlight theo vị trí cuộn, và bấm Dock thì cuộn mượt tới section.

### Việc cần làm
- [ ] Cài `IntersectionObserver` quan sát 4 section (dùng `data-admin-section` attribute).
- [ ] `rootMargin: "-40% 0px -55% 0px"` để tạo vùng kích hoạt ở giữa viewport (tránh 2 section cùng active).
- [ ] Hàm `scrollToSection(id)` dùng `scrollIntoView({behavior: "smooth", block: "start"})` khi bấm Dock.
- [ ] Animation Pill Active trượt ngang mượt (`transition: all 250ms ease-out`) khi đổi mục — không tắt/bật đột ngột.

### Tài liệu tham chiếu
`03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.1 (có code mẫu đầy đủ).

### Definition of Done
- Pass Test Case 7 Scenario A & B (`06_QA_ACCEPTANCE_CRITERIA.md`).
- Cuộn qua ranh giới 2 section không bị Pill nhấp nháy qua lại (flicker).

---

## GIAI ĐOẠN 3 — Lazy Mount (Tối ưu hiệu năng)
**Mục tiêu**: Giải quyết rủi ro đã ghi nhận ở G1 — không để 4 section nặng cùng mount dữ liệu thật 1 lúc.

### Việc cần làm
- [ ] Bọc mỗi section trong component `LazySection` dùng `IntersectionObserver` riêng (`rootMargin: "200px"` để mount sớm, tránh nháy trắng).
- [ ] Viết `SectionSkeletonPlaceholder` (khung xám giữ đúng chiều cao, tránh layout shift khi nội dung thật load vào).
- [ ] Đo lại FPS khi cuộn nhanh qua cả 4 section (dùng Chrome Performance tab).

### Tài liệu tham chiếu
`03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.2 (có code mẫu đầy đủ).

### Definition of Done
- Pass edge case "Hiệu năng cuộn nhanh" trong `06_QA_ACCEPTANCE_CRITERIA.md` mục 2 (placeholder không lộ quá 500ms).
- Tại 1 thời điểm cuộn, tối đa 1–2 section thực sự mount dữ liệu nặng — kiểm tra qua React DevTools Profiler.

---

## GIAI ĐOẠN 4 — Preview ⇄ Focus Mode (Users & Questions)
**Mục tiêu**: 2 section có nghiệp vụ tương tác sâu (tìm kiếm, phân trang, sửa/xóa) không bị "cuộn lướt qua" — tách thành chế độ rút gọn khi cuộn thường, mở rộng toàn màn hình khi cần thao tác thật.

### Việc cần làm
- [ ] Thêm state `viewMode` (`preview` | `focus`) cho `AdminUsersTab.js` và `AdminQuestionsTab.js`.
- [ ] `preview`: chỉ hiện 5 dòng dữ liệu tiêu biểu + nút "Quản lý đầy đủ →".
- [ ] `focus`: mount toàn bộ UI gốc (bảng đầy đủ, filter, action) + khóa `document.body.style.overflow = 'hidden'`.
- [ ] Animation mở rộng: `scale` 0.96→1 + `opacity` 0→1, 250ms ease-out.
- [ ] Nút "✕ Thu gọn" / phím `Escape` để thoát, **giữ nguyên vị trí cuộn** khi thoát (không nhảy về đầu trang).

### Tài liệu tham chiếu
`03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 4.4, `05_UI_UX_INTERACTION_SPEC.md` mục 3.6.

### Definition của Done
- Pass Test Case 9 (`06_QA_ACCEPTANCE_CRITERIA.md`).
- Xác nhận rủi ro "Drawer/Modal không xung đột với khóa cuộn Focus Mode" (edge case mục 2) không xảy ra.

---

## GIAI ĐOẠN 5 — Parallax + Responsive Polish + QA Toàn diện
**Mục tiêu**: Hoàn thiện chi tiết thẩm mỹ và chạy toàn bộ 9 Test Case + edge cases trước khi release.

### Việc cần làm
- [ ] Thêm Parallax Hero (GSAP ScrollTrigger, 0.3–0.5x tốc độ cuộn).
- [ ] Dùng `ScrollTrigger.matchMedia()` để **tắt hoàn toàn Parallax trên `< 768px`**.
- [ ] Kiểm tra bảng Responsive Breakpoints Matrix (`05_UI_UX_INTERACTION_SPEC.md` mục 4) trên Desktop/Tablet/Mobile thật (không chỉ giả lập DevTools).
- [ ] Chạy lại toàn bộ 9 Test Case trong `06_QA_ACCEPTANCE_CRITERIA.md` — không chỉ 3 test case mới mà cả 6 test case cũ (đảm bảo không hồi quy — regression — do đổi kiến trúc).

### Definition of Done
- 100% Test Case Pass (chuẩn release theo `06_QA_ACCEPTANCE_CRITERIA.md`).
- FPS Mobile thật ≥ 50 FPS khi cuộn qua Hero.

---

## GHI CHÚ VẬN HÀNH

* Mỗi giai đoạn nên là **1 branch/PR riêng** — dễ review, dễ rollback nếu giai đoạn sau phát sinh lỗi không liên quan đến giai đoạn trước.
* Nếu thời gian gấp, có thể gộp **G0 + G1** thành 1 đợt (vì G1 không phụ thuộc kỹ thuật vào G0, chỉ cần G0 xong về mặt hình ảnh trước khi Dev nhìn vào cấu trúc mới). Nhưng **không nên gộp G2 trở đi** — vì Scrollspy, Lazy Mount, Focus Mode là 3 lớp kỹ thuật chồng lên nhau, gộp sẽ khó xác định lỗi phát sinh từ đâu.
* Câu hỏi mở còn treo từ `03_TECHNICAL_ARCHITECTURE_DESIGN.md` mục 5 (chiều cao section, deep-link URL hash, hành vi nút Back khi ở Focus Mode) nên chốt với BA **trước khi bắt đầu G4** — vì nó ảnh hưởng trực tiếp thiết kế Focus Mode.
