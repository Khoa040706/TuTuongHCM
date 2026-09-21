# Decision Log — Trang chủ 3D

| ID | Trạng thái | Quyết định / vấn đề | Bằng chứng hoặc điều kiện |
|---|---|---|---|
| D01 | `DECIDED` | Cải tiến landing hiện tại tại `/`; giữ auth overlay và luồng xác thực. Overlay đóng khi vào trang, chỉ mở bằng hành động rõ ràng; CTA học/đăng nhập nhanh luôn có ở hero. | Người dùng duyệt 2026-09-13; chi tiết state/CTA ở `integration-map.md`. |
| D02 | `DECIDED` | Duyệt synthesis v1: giữ cua Cự Giải, satin gold/matte charcoal, hai vòng độc lập; bỏ chi tiết giống râu; thân cong có chiều sâu; trăng tiết chế; 8 chân đi bộ đối xứng; concept AI chỉ là reference. | Người dùng duyệt 2026-09-13 với MUST/SHOULD/LATER; chi tiết khóa tại `model-contract.md`. |
| D03 | `VERIFIED` | Không cài lại Blender; CLI dùng `D:\BLENDER\blender.exe`, không dùng launcher. | Blender 5.2.1 LTS, Python 3.13.13; smoke `bpy`, GLB export thật và đọc lại `.blend` đều thành công trong process nền/factory startup; scene GUI và PATH không bị sửa. |
| D04 | `DECIDED` | S03 dùng Bubble Sort `[3,1,2]`; S04 dùng Activity Diagram ATM. | Đối chiếu `BubbleSortLab.js`, `DiagramSimDashboard.js` và `atm_activity_diagram.png`; người dùng duyệt 2026-09-13. |
| D05 | `DECIDED` | B4 revision được duyệt trong phạm vi proof slice desktop S01→S02. B5 tách thành B5A hình học và B5B vật liệu/tối ưu/fallback/final; chỉ mở B5B sau khi duyệt hình học B5A. | Người dùng duyệt 2026-09-14; không mở S03–S06 và không coi B5A là model final. |
| D06 | `DECIDED` | Duyệt B5B hiện tại làm baseline asset cho B6; không tiếp tục chỉnh hình khối hoặc thêm hoa văn nếu không có defect cụ thể. | GLB 736.372 byte; SHA-256 `95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35`; người dùng duyệt 2026-09-15. |

## Cách trả lời mong muốn

D01–D04 đã đóng. Chỉ hỏi lại nếu phát sinh mâu thuẫn đáng kể với nhận diện, chức năng hoặc phạm vi đã duyệt.

## Những điểm đã được giải quyết, không hỏi lại

- Concept cua Cự Giải thay cho lõi tri thức trừu tượng.
- Dùng bảng màu StudyMaster thay bảng tím–cyan.
- R3F/Three.js + GSAP; desktop-first; chuẩn bị cấu trúc mobile nhưng chưa nghiệm thu mobile.
- Không thêm backend/API/collection chỉ để chạy homepage.
- B3.8 được duyệt ngày 2026-09-14 để dùng blockout v2 cho B4; không phải phê duyệt hình thức model final.
