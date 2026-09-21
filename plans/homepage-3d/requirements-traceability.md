# Ma trận Yêu cầu → Nhiệm vụ → Kiểm tra

| Req/AC | Yêu cầu hợp nhất | Task chính | Kiểm tra / bằng chứng |
|---|---|---|---|
| AC01 | Nhận ra StudyMaster và cua Cự Giải | B2.2, B3.2 | Review đối chiếu hai asset nguồn, concept sheet và hero |
| AC02 | Màu Silk Ivory/Charcoal/Amber | B2.3, B5.3 | Token sheet, render look-dev, contrast report |
| AC03 | Cua/càng/vòng tách đúng | B3.3–B3.5, B5A | Manifest node/pivot, pose-time contract và pose test |
| AC04 | S01→S02 có ý nghĩa, chạy hai chiều | B4.5–B4.7 | Video forward/reverse + test scroll nhanh/chậm |
| AC05 | Thuật toán đúng | B6.2 | Trace từng bước đối chiếu simulator thật |
| AC06 | Diagram đúng loại/ký hiệu | B6.3 | Content review + đối chiếu DiagramSimDashboard/asset |
| AC07 | Preview không gây hiểu nhầm | B6.4 | Nhãn “Minh họa”, không có control giả |
| AC08 | CTA/auth đúng | B1.3, B6.5 | Matrix guest/auth/admin/no-history |
| AC09 | Vào học không cần xem hết | B1.3, B4.8 | CTA hero keyboard/click test |
| AC10 | Không cắt nội dung | B7.4 | 1366×768, 1440×900, 1920×1080, zoom 200% |
| AC11 | Reverse/anchor/back ổn định | B4.7, B7.3 | State snapshot theo scroll và navigation test |
| AC12 | Bàn phím/focus | B4.8, B8.3 | Tab/Shift+Tab/Enter/PageDown, focus visible |
| AC13 | Reduced motion đủ nội dung | B4.9, B7.5 | OS preference và mode fallback |
| AC14 | Asset/WebGL lỗi có fallback | B4.4, B8.4 | Chặn GLB/WebGL và chụp fallback |
| AC15 | Không rò lifecycle | B7.2 | Vào/ra 5 lần; đếm canvas/trigger/listener/render loop |
| AC16 | Không hồi quy luồng học | B8.5 | Auth, subject, study, quiz, algorithm, diagram smoke test |
| AC17 | Asset chỉnh sửa được | B5A, B5B | B5A: `.blend`, scripts/config, GLB, manifest ứng viên; B5B: fallback, license và gói final |
| PERF01 | Desktop hướng tới 60 FPS; degrade dưới 45 | B7.6 | Profile có máy/GPU/browser/viewport/cache |
| PERF02 | DPR/asset budget | B5A, B5B, B7.6 | B5A đo geometry/GLB bytes; B5B tối ưu texture/mesh; B7 đo network/DPR |
| LIFE01 | Tab ẩn/rời route dừng việc thừa | B7.2 | Performance trace và lifecycle log |
| PWA01 | Cache asset đúng phiên bản/người dùng | B7.7 | Production PWA update/offline/cache test |
| MOB01 | Chuẩn bị mobile, chưa nghiệm thu mobile | B7.8 | Layout/API design note; không ghi “mobile done” |
| PRE01 | Body/claws/legs/rings/mark là bộ phận độc lập | B2.4, B3.3, B5.7 | Exploded concept, node manifest và GLB contract test |
| PRE02 | Có pose thu gọn để nhường vùng content/CTA | B2.5, B3.4, B6.4–B6.5 | Pose manifest, S05/S06 viewport screenshots |
| PRE03 | Content tách khỏi camera/timeline | B1.6, B4.2, B6.7 | DOM/source-order audit; tắt canvas vẫn đọc và thao tác được |
| PRE04 | Model, thống kê, preview và fallback có nguồn | B1.4, B2.1, B5.6, B6.4 | Source/license/hash/manifest; nhãn “Minh họa”; không số liệu giả |
| PRE05 | Mobile được ghi backlog, không nghiệm thu trong v1 | B7.8, B8.2 | Backlog có owner/dependency; report không đánh dấu mobile pass |

## Bằng chứng Bước 3 hiện có

- AC03/PRE01: `.blend` mở lại được; manifest và GLB có đúng root/hierarchy, hai claw, hai ring độc lập, 8 leg root và không có node râu.
- PRE02: manifest v2 có đủ 5 pose; compact width giảm khoảng 22,1% so với closed bằng gập claw/leg và thu ring, trong khi root vẫn giữ scale 0,94. Ảnh front compact và contact sheet đã tạo để người dùng duyệt khả năng nhường vùng nội dung.
- AC02 mới chỉ chứng minh palette/material slot ở mức blockout; look-dev/contrast cuối vẫn thuộc B5/B7.
- AC17 mới đạt một phần gồm `.blend`, config/script, GLB, manifest và hash; fallback/license final vẫn chưa thực hiện.
- Báo cáo máy đọc và ảnh review nằm dưới `artifacts/homepage-3d/blockout/`; bằng chứng các bước sau tiếp tục lưu theo milestone, không suy diễn trạng thái pass khi chưa chạy.

## Bằng chứng Bước 4 hiện có

- AC04/AC11: Chrome production revision đo controller/master/phase và transform model tại 11 mốc; reverse trả controller/master và bốn transform đại diện về đúng giá trị đầu. Video 18 giây đi S01→S02→S01.
- AC08/AC09/AC12: CTA HTML không bị canvas che; “Bắt đầu học” mở auth, global Enter không mở ngoài ngữ cảnh, Escape đóng và trả focus đúng trigger.
- AC13: emulation `prefers-reduced-motion: reduce` đọc controller thực `active=false`; progress và transform giữ nguyên sau scroll, DOM/CTA S01/S02 vẫn đủ.
- AC14/PRE03: query QA cưỡng bức GLB 404 hiển thị fallback nhưng CTA vẫn thấy và thao tác được; canvas có `pointer-events: none`.
- AC15/LIFE01: cleanup source đã có cho GSAP context/trigger, media listener và canvas mount counter; phép đo đủ năm vòng chuyển state/route vẫn thuộc B7.
- Report revision, ảnh và video review nằm dưới `artifacts/homepage-3d/b4/revision/`; GLB v2 giữ nguyên SHA-256 theo manifest. Kiểm tra va chạm runtime web hiện là review mắt trên frame đại diện, không phải exact triangle-mesh test và không suy ra từ hash GLB.

## Bằng chứng B5A hiện có

- AC03/PRE01: ứng viên có đủ root child, 8 chân đối xứng, 2 càng, 2 vòng độc lập, không râu; `.blend` mở lại được và GLB parse bằng Three.js.
- Pose contract: manifest ghi frame/FPS/timeSeconds cho đủ 5 pose; validator lấy mẫu track tại thời gian manifest và đối chiếu transform, không dùng chỉ số keyframe.
- Chuyển tiếp: BVH pass 21 frame × 134 cặp/frame trong tập cặp khai báo; giới hạn không phải continuous collision proof đã ghi trong báo cáo.
- PERF02: B5A có 13.436 triangles, 6.830 vertices, 58 mesh và GLB 461.652 byte; so v2 giảm 120 triangles nhưng tăng 38.956 byte do animation/structure export.
- Preview B4: Chrome production layout dùng interception QA để nạp ứng viên mà không thay v2; model ready, 16 clip validated, S01/S02 nằm trong Canvas. Bằng chứng tại `artifacts/homepage-3d/b5a/`.

## Bằng chứng B5B và Bước 6 hiện có

- AC02/AC03/AC17/PRE01/PRE02/PRE04: B5B đã được duyệt làm baseline B6; GLB 736.372 byte, SHA-256 `95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35`, manifest đủ năm pose `timeSeconds`, source `.blend`, fallback và license giữ nguyên.
- AC05: browser QA đọc đúng bốn trạng thái `[3,1,2]`, `[1,3,2]`, `[1,2,3]`, `[1,2,3]`; bước cuối ghi `1 ≤ 2`, không đổi và `swapped=false`, đối chiếu `BubbleSortLab.js`.
- AC06: S04 dùng trực tiếp `atm_activity_diagram.png`; copy/notation ghi đủ ba swimlane, initial/final, guard `[Valid PIN?]`, `[Balance ≥ Amount?]` và fork/join, đối chiếu `DiagramSimDashboard.js`.
- AC07/PRE04: preview Bubble Sort cô lập có nhãn “Minh họa”, đúng ba thao tác thật và không chứa button giả; CTA nằm ngoài preview và nối luồng thật sau auth gate.
- AC08/AC09: browser production xác minh CTA tool của guest mở auth overlay; source mapping learner/admin lần lượt tới `subject-select`/`admin-dashboard`. CTA hero vẫn hoạt động ngay ở S01.
- AC11: sáu endpoint forward/reverse khớp transform đại diện trong dung sai 0,001; chapter jump, fast scroll và state sau freeze/resume đều xác định.
- AC13/AC14/PRE03: reduced motion và cưỡng bức model 404 vẫn giữ đủ sáu section/CTA; nội dung DOM không phụ thuộc canvas/timeline.
- Bộ ảnh, JSON, trace và video frame-composited từ Chrome production nằm tại `artifacts/homepage-3d/b6/`. B7 vẫn chịu trách nhiệm lifecycle 5 vòng, zoom 200%, profile hiệu năng và PWA/offline.
