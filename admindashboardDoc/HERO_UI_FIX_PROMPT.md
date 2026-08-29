# PROMPT SỬA LỖI GIAO DIỆN: `AdminUnifiedHero.js` (Hero Cinematic Banner)
**Dự án:** StudyMaster Admin Dashboard  
**Gửi tới:** Dev / AI Coding Agent (Claude Code, Cursor, v.v.)  
**Tài liệu tham chiếu đi kèm:** `05_UI_UX_INTERACTION_SPEC.md` (mục 0), `03_TECHNICAL_ARCHITECTURE_DESIGN.md` (mục 4.3)

---

## BỐI CẢNH

File hiện tại: `components/admin/AdminUnifiedHero.js` (có thể liên quan `AdminHero.js`, `AdminCinematicHero.js`, và `app/globals.css` cho theme variables).

Hero hiện tại đang gặp lỗi bố cục — chữ nền "STUDYMASTER" khổ lớn chèn cạnh tranh với Nav, KPI card và đồng hồ thời gian thực bị "nổi" rời rạc 2 góc màn hình do thiếu lớp phủ tối (scrim) neo nội dung. Tham khảo đối sánh: mẫu thiết kế `Winzy` (hero du lịch có chữ nền mờ hòa vào ảnh, dải số liệu + CTA nằm cùng 1 hàng dưới đáy, có lớp gradient tối để đảm bảo độ đọc).

## MỤC TIÊU

Sửa lại Hero theo đúng 5 lớp (layer) z-index sau, từ thấp đến cao:

| Lớp | Nội dung | Yêu cầu kỹ thuật |
|---|---|---|
| Z0 | Ảnh nền | `object-fit: cover`, full bleed, giữ nguyên |
| Z1 | Chữ nền trang trí ("STUDYMASTER") | `opacity: 0.08–0.12`, `mix-blend-mode: soft-light`, `pointer-events: none` |
| Z2 | Gradient Scrim | `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 80%)` — phủ toàn bộ nửa dưới Hero |
| Z3 | Bottom Band (Content Anchor) | Gom **toàn bộ** KPI card + đồng hồ real-time vào **1 khung glass-panel duy nhất**, `bg-white/10 backdrop-blur-xl`, chia cột nội bộ bằng `divide-x` hoặc gap đều — **không** để 2 card tách biệt ở 2 góc |
| Z4 | Nav / Dock | `z-index` cao nhất trong Hero, `backdrop-blur-xl` đậm hơn Z3, đảm bảo luôn là lớp rõ nét nhất |

## YÊU CẦU CỤ THỂ

1. **Giảm độ gắt của chữ nền**: hiện tại chữ "STUDYMASTER" đang dùng màu trắng đặc/opacity cao — đổi sang `opacity-10` (hoặc giá trị trong khoảng 0.08–0.12) kết hợp `mix-blend-mode: soft-light`. Đảm bảo `pointer-events: none` để không chặn click các phần tử phía trên.

2. **Thêm lớp Gradient Scrim**: chèn 1 `<div>` tuyệt đối (`absolute inset-0`) nằm giữa ảnh nền và nội dung, dùng gradient nêu trên. Đây là lớp bắt buộc để đảm bảo mọi văn bản/card phía trên đạt tương phản WCAG 2.1 AA (contrast ratio ≥ 4.5:1) bất kể ảnh nền là gì.

3. **Gộp KPI card + đồng hồ real-time vào 1 Bottom Band duy nhất**: thay vì 2 khối tách rời ở 2 góc màn hình, đặt chúng trong cùng 1 container flex/grid, cùng 1 nền glass-panel bao ngoài, cùng baseline ngang — giống cách Winzy gộp "20K+ / 2K+ / 5K+ / Book Now / mini-preview" trong 1 hàng dưới đáy hero.

4. **Đảm bảo Nav luôn là lớp rõ nét nhất**: kiểm tra lại `z-index` của thanh Nav "StudyMaster / Admin Control" — phải cao hơn cả chữ nền Z1 lẫn Bottom Band Z3. Nếu cần, tăng độ đậm `backdrop-blur` của Nav so với Bottom Band để tạo phân cấp rõ ràng giữa "điều hướng" và "nội dung trang trí".

5. **(Nếu đã setup GSAP/ScrollTrigger) Thêm Parallax nhẹ**: ảnh nền Z0 di chuyển 0.3–0.5x tốc độ cuộn so với nội dung phía trên, dùng `@gsap/react` + `ScrollTrigger`. **Bắt buộc tắt hoàn toàn hiệu ứng này trên màn hình `< 768px`** (dùng `ScrollTrigger.matchMedia()`), để tránh giật khung hình trên thiết bị yếu.

6. **Chiều cao tối thiểu**: `min-h-[90vh]`.

## TIÊU CHÍ NGHIỆM THU (copy từ `06_QA_ACCEPTANCE_CRITERIA.md` — Test Case 8)

- [ ] Tỷ lệ tương phản của chữ trong KPI card, đồng hồ, và Nav đều đạt tối thiểu 4.5:1 (WCAG 2.1 AA), kiểm tra ở cả Light/Dark mode.
- [ ] Chữ nền trang trí không che khuất hoặc làm giảm độ rõ của bất kỳ văn bản chức năng nào khi kiểm tra bằng mắt thường.
- [ ] KPI card và đồng hồ real-time nằm trong cùng 1 dải ngang (Bottom Band), không còn xuất hiện rời rạc ở 2 vị trí tách biệt.
- [ ] Trên thiết bị Mobile thật, Parallax đã tắt hoàn toàn và FPS cuộn Hero đạt tối thiểu 50 FPS.

## GHI CHÚ

Không cần đổi nghiệp vụ / dữ liệu hiển thị (vẫn là 10 Môn / 88% / 1 lượt thi / đồng hồ thời gian thực) — đây thuần là sửa lỗi **layering & bố cục thị giác**, không phát sinh field dữ liệu mới. Nếu Hero đã tích hợp sẵn animation GSAP khác (VD: text reveal chữ "STUDYMASTER"), giữ nguyên animation đó, chỉ điều chỉnh opacity/blend-mode như mục 1.
