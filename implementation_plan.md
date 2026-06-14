# Kế hoạch Triển khai Chi tiết: Biểu ngữ Chương Điện ảnh Tràn viền & Bụi vàng Tương tác

Dựa trên lựa chọn của bạn và kinh nghiệm thiết kế giao diện cao cấp, tôi đề xuất bản kế hoạch chi tiết kết hợp tối ưu:
- **Bố cục (2B)**: Biểu ngữ Tràn viền Điện ảnh (`Cinematic Full-width`), chiếm trọn chiều rộng vùng đọc chính, tạo điểm nhấn phân tách chương hoành tráng.
- **Trang trí (3A)**: Thuần chữ nghệ thuật (`Pure Typography`) tinh tế, chìm sâu số chương lớn (`CHƯƠNG I`) ở nền, chữ chính sử dụng màu vàng gold gradient sang trọng.
- **Tương tác (1A + 1C kết hợp)**: 
  - Trạng thái tự do: Bụi vàng lững lờ trôi như tàn lửa hổ phách.
  - Rê chuột (Hover): Bụi vàng tự động xoáy tụ lại xung quanh con trỏ chuột tạo hiệu ứng dải ngân hà lấp lánh (Galaxy Swirl).
  - Nhấp chuột (Click): Phát nổ ra chùm tia bụi sáng hổ phách nhỏ từ tâm điểm click (Click Burst).

---

## Chi tiết Các Thay Đổi Mã Nguồn

### 1. Thay đổi cấu trúc trong `components/ContentRenderer.js`

#### [MODIFY] [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js)

- **Tạo component `ChapterHeader` chuyên biệt**:
  - Nhận vào props `title` (Tên chương), `subtitle` (Phụ đề), và `chapterId` (Số chương).
  - **Mẫu mã (HTML/JSX)**:
    ```javascript
    <div className="chapter-banner-container w-full relative mb-14 overflow-hidden select-none">
      <canvas className="chapter-banner-canvas absolute inset-0 pointer-events-none z-0" />
      
      {/* Background Huge Text Overlay */}
      <div className="absolute right-10 bottom-2 text-[9rem] md:text-[12rem] font-black font-playfair text-white/[0.03] tracking-widest leading-none pointer-events-none z-0">
        CHƯƠNG {chapterId}
      </div>

      <div className="chapter-banner-content relative z-10 w-full h-[280px] md:h-[320px] bg-gradient-to-br from-[#1e1d1a] to-[#141312] border-b border-[#2c2a26] flex flex-col justify-center px-8 md:px-16">
        <div className="chapter-banner-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
          <span>📚</span>
          <span>Chương {chapterId}</span>
        </div>
        <h1 className="chapter-banner-title text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 font-playfair tracking-tight mb-4 leading-tight">
          {title}
        </h1>
        <p className="chapter-banner-subtitle text-[#eae6db] text-sm md:text-base leading-relaxed opacity-70 max-w-3xl font-sans">
          {subtitle}
        </p>
      </div>
    </div>
    ```

  - **Hệ thống hạt Bụi vàng Canvas (Particle System)**:
    - Dùng `useRef` và `useEffect` khởi tạo Canvas 2D.
    - Vẽ 60 hạt bụi với kích thước ngẫu nhiên (`0.8px - 2.5px`), tốc độ trôi nhẹ.
    - Sự kiện `mousemove` thu hút bụi vàng: Gia tốc hạt hướng về tọa độ chuột với lực cản nhẹ để bụi quay quanh chuột.
    - Sự kiện `click` phát nổ: Tạo thêm 20 hạt bụi sáng bay tốc độ cao từ điểm click rồi mờ dần đi nhanh chóng.

  - **Hoạt cảnh GSAP Entrance**:
    - Khi cuộn tới, banner sẽ chạy hiệu ứng scale nhẹ từ `0.98` lên `1` kết hợp fade in để tạo chiều sâu chuyển động.
    - Các thành phần Badge, Title, Subtitle stagger trồi lên từ dưới (`y: 20 -> 0`, `opacity: 0 -> 1`).

---

### 2. Cập nhật CSS trong `app/globals.css`

#### [MODIFY] [app/globals.css](file:///d:/TT%20HCM/app/globals.css)
- Thiết lập các lớp CSS cho `.chapter-banner-container` và `.chapter-banner-canvas` để tràn viền hoàn toàn so với vùng đệm đọc (bỏ padding của cha ở phần đầu chương học).

---

## Kế hoạch Biên dịch & Xác minh

- Chạy `npm run build` kiểm tra cú pháp và biên dịch Turbopack.
- Kiểm tra thủ công hiệu ứng lướt qua tiêu đề chương mới tràn viền điện ảnh sang trọng.
- Rê chuột và Click chuột lên banner tối để kiểm chứng ma thuật bụi vàng phát nổ và xoáy tụ.
