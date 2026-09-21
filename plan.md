# Kế hoạch điều phối Trang chủ 3D StudyMaster — Cỗ máy tri thức Cự Giải

> **Phiên bản:** 2.1 — B8 QA/handoff review candidate
>
> **Ngày lập:** 2026-09-13
>
> **Trạng thái tổng:** `AWAITING REVIEW — B8 HANDOFF READY; RELEASE SIGN-OFF BLOCKED` ngày 2026-09-18. Người dùng đã duyệt B7 closeout để mở B8. Candidate cuối B8 `b8-I2Mm0biBhvFAn_EPavk2i-45808f541d79` build PASS; managed patch hash/apply/rollback/idempotence/tamper PASS; auth destination local QA, study/quiz local, GLB/WebGL fault, reload S04 và PWA offline hiện tại PASS. Eyebrow đã sửa tương phản 3,003→5,390:1; backend 17/17 và scoped lint PASS. Real Firebase learner/admin và nâng cấp service worker từ release cũ vẫn `NOT TESTED/BLOCKED`; root lint toàn repo chưa hoàn tất vì quét raw evidence/cache. B8 sẵn sàng review/bàn giao nhưng chưa đủ điều kiện duyệt phát hành.
>
> **Phạm vi lượt này:** giữ B5B GLB `736372` byte tại SHA-256 `95eb4b7bd2ec87480daa9e0e97366f62fe6adb605fed088c9f2a4a6b71badf35`; không sửa model/sáu cảnh. B8 khóa candidate/hash, kiểm tra AC01–AC17, sửa theo batch riêng, retest có mục tiêu và đóng gói review; không deploy/commit/push.

## 1. Mục tiêu và nguồn đầu vào

Kế hoạch điều phối BA, thiết kế 3D/Blender, Frontend, Integration và QA để xây dựng trang chủ kể chuyện bằng cua Cự Giải, R3F/Three.js và GSAP; giữ đường vào học thật, khả năng truy cập, fallback và hiệu năng đo được.

Hai tài liệu đầu vào:

1. [`taskcanlam/StudyMaster-BA-Concept-Cu-Giai-3D.md`](taskcanlam/StudyMaster-BA-Concept-Cu-Giai-3D.md) — nguồn ưu tiên về concept, model, storyboard và acceptance criteria.
2. [`taskcanlam/StudyMaster-R3F-Homepage-Brief.md`](taskcanlam/StudyMaster-R3F-Homepage-Brief.md) — baseline kiến trúc R3F/GSAP, client boundary, lifecycle, accessibility và hiệu năng.

Quyết định đã chốt: concept cua Cự Giải; màu Silk Ivory/Charcoal/Amber của StudyMaster; 3D thật bằng Three.js/R3F; GSAP storytelling theo cuộn; desktop-first và chỉ chuẩn bị khả năng mở rộng mobile ở đợt này; không thay backend, không viết lại simulator, không thêm tính năng quảng cáo không có bằng chứng.

## 2. Kết quả đối chiếu source

### Đã xác minh

- Next.js `16.2.9`, React `19.2.4`, Three.js `^0.185.1`, GSAP `^3.15.0`, `@gsap/react` `^2.1.2`, Tailwind CSS v4; package manager là npm với `package-lock.json`.
- `@react-three/fiber` `^9.7.0` đã được cài cho B4 sau kiểm tra compatibility; `@react-three/drei` không được cài vì proof slice dùng trực tiếp `GLTFLoader`.
- `app/page.js` là Client Component điều phối SPA bằng `appStep`; trạng thái đầu là `login`, sau auth đi tới `subject-select` hoặc `admin-dashboard`; không có route marketing riêng.
- Landing hiện tại đã có auth overlay, GSAP, particle canvas và dùng `/assets/cancer_mascot_transparent.png`.
- Auth hook công khai `user`, `loading`, `error`, `loginAdmin`, `loginWithGoogle`, `logout`, `refreshSession`.
- Learning state có completed subsections, chapters, bookmarks, review items và flashcards nhưng chưa có contract “last visited”; không được hứa “Tiếp tục học” khi chưa bổ sung/duyệt contract.
- Simulator thật: Bubble/Selection/Insertion/Merge Sort, Binary Search, BFS, BST, Recursion và dashboard thuật toán; diagram thật: Class, Use Case, Sequence, Activity cùng bốn ảnh ATM trong `public/assets/diagrams/`.
- Asset thương hiệu hiện có: `logo.png` 1024×1024 (line-art cua thiên văn) và `cancer_mascot_transparent.png` 1024×1024 (huy hiệu cua vàng hiện thực, 2.2 MB).
- Blockout v1 và v2 đều được giữ nguyên để đối chiếu. V2 có source `.blend`, GLB 422.696 byte, manifest, năm ảnh review; đã được duyệt cho B4 và kiểm chứng trong R3F, nhưng không phải model final. Ứng viên B5A có tên riêng và chưa thay v2 mặc định.
- Blender không có trên `PATH`, nhưng executable CLI thực đã xác minh tại `D:\BLENDER\blender.exe`: Blender 5.2.1 LTS, Python 3.13.13. Smoke test `bpy` trong process nền với factory startup đã tạo/lưu scene tạm thành công rồi dọn sạch; không chạm scene GUI đang mở và không sửa PATH.
- `next.config.mjs` bật PWA production với NetworkFirst; asset/cache mới phải được kiểm tra khi tích hợp.
- `app/layout.js` hiện đặt `maximumScale: 1` và `userScalable: false`, mâu thuẫn mục tiêu zoom 200%; đây là hạng mục accessibility cần frontend duyệt sửa ở Bước 7.

### Quyết định nhận diện đã khóa tại D02

- Giữ nhận diện cua Cự Giải, vàng satin–than mờ và hai vòng độc lập; bỏ râu; thân là mai cong ba chiều; trăng là chi tiết phụ tiết chế.
- Model contract, config và script là nguồn chính xác cho tỷ lệ/hierarchy/pivot: đúng 8 chân đi bộ đối xứng, 2 càng và 5 pose; concept AI chỉ là tham khảo hình ảnh.
- Tách Home Experience thành client island được lazy-load, không kéo R3F vào mọi state của `app/page.js`.

### Gate hiện tại cần người dùng duyệt

B7 closeout đã được người dùng duyệt để mở B8. Gate hiện tại là review gói B8 và quyết định cách xử lý ba đầu vào còn thiếu: learner thật, admin thật và cache/profile của release production cũ. Chưa có phê duyệt phát hành.

## 3. Trạng thái và quy tắc điều phối

- Trạng thái dùng thống nhất: `TODO`, `IN PROGRESS`, `BLOCKED`, `DONE`.
- Không bắt đầu bước kế tiếp nếu exit gate của bước trước chưa đạt hoặc chưa có waiver bằng văn bản.
- Vòng QA chỉ ghi lỗi; vòng sửa code/model diễn ra riêng; sau đó retest có mục tiêu.
- Mỗi bước kết thúc bằng handoff: đã làm, đã kiểm tra, chưa làm, file, bằng chứng, rủi ro còn lại, bước tiếp theo.
- Không spawn agent tự động. Lead chỉ đề xuất owner; người dùng/điều phối viên quyết định giao agent.
- Mọi thay đổi code sau này phải đọc tài liệu Next.js 16 trong `node_modules/next/dist/docs/` phù hợp trước khi sửa.
- Không sửa file `.js` đã tồn tại trong `data/`.

## 4. Lộ trình và tài liệu thực thi

| Bước | Trạng thái | Trọng tâm | Blender / Code | Kế hoạch chi tiết |
|---|---|---|---|---|
| 1 | `DONE` | Xác minh sản phẩm và vị trí tích hợp | Khảo sát source | [01-product-integration.md](plans/homepage-3d/01-product-integration.md) |
| 2 | `DONE` — D02 approved | Concept sheet và storyboard | Thiết kế + BA | [02-concept-storyboard.md](plans/homepage-3d/02-concept-storyboard.md) |
| 3 | `DONE` — duyệt cho B4, chưa phải final | Blender blockout | Blender + script `bpy` | [03-blender-blockout.md](plans/homepage-3d/03-blender-blockout.md) |
| 4 | `DONE` — proof slice desktop approved | R3F/GSAP lát cắt S01→S02 | Code + GLB blockout v2 giữ nguyên | [04-r3f-story-slice.md](plans/homepage-3d/04-r3f-story-slice.md) |
| 5A | `DONE` — technical/web pass | Revision, runtime pose theo manifest time và preview B4 đã kiểm chứng | Blender + GLB/Three.js/browser | [05-blender-final-model.md](plans/homepage-3d/05-blender-final-model.md) |
| 5B | `DONE` — approved baseline for B6 | Vật liệu, bevel/normal, tối ưu tương thích runtime, fallback/provenance; GLB/hash đã khóa | Blender + kiểm tra web | [05-blender-final-model.md](plans/homepage-3d/05-blender-final-model.md) |
| 6 | `DONE` — storyboard revision approved | Data blocks R3F S02→S03, swap S03, diagram node/edge S04, CTA pending destination, typography/navigation/fallback | Code + asset hiện có | [06-scenes-and-preview.md](plans/homepage-3d/06-scenes-and-preview.md) |
| 7 | `DONE` — closeout approved for B8 | Deterministic teardown và regression production đạt | Code + đo lường | [07-integration-performance.md](plans/homepage-3d/07-integration-performance.md) |
| 8 | `AWAITING REVIEW — HANDOFF READY / RELEASE BLOCKED` | AC matrix, fault/auth/accessibility/PWA QA, managed patch integrity, report và review ZIP | Test + docs | [08-qa-handoff.md](plans/homepage-3d/08-qa-handoff.md) |

Tài liệu ngang:

- [Hợp đồng Blender–Frontend](plans/homepage-3d/model-contract.md)
- [Ma trận yêu cầu và nghiệm thu](plans/homepage-3d/requirements-traceability.md)
- [Decision log](plans/homepage-3d/decision-log.md)
- [Integration map Bước 1](plans/homepage-3d/integration-map.md)
- [Môi trường Blender đã kiểm chứng](plans/homepage-3d/blender-environment.md)
- [Review nhận diện và concept sheet](plans/homepage-3d/concept-review.md)
- [Storyboard v1](plans/homepage-3d/storyboard-v1.md)

## 5. Thứ tự, phụ thuộc và điểm duyệt

```text
D01 vị trí tích hợp (DONE) ─┐
D02 nguồn nhận diện (DONE) ───┼─> B1/B2 ─> B3 blockout review ─> B4 lát cắt web
D03 Blender runtime (DONE) ──┘                         │
                                               ├─> B5 model final
D04 demo thuật toán/diagram (DONE) ────────────┴─> B6 cảnh final
                                                    │
                                                    v
                                          B7 tích hợp/đo ─> B8 QA/bàn giao
```

- Duyệt hình ảnh bắt buộc tại concept sheet, blockout ba góc, material/look-dev và bản tích hợp S01→S02.
- B4 là proof-of-pipeline; không polish model trước khi blockout chạy được trong web.
- Gate B5A đã được duyệt trước khi mở B5B; B6 chỉ bắt đầu sau khi B5B GLB/manifest/hash được đóng và người dùng duyệt baseline.

## 6. Phân quyền Blender–Frontend

- **Blender:** hình học cua/vòng, silhouette, bevel, UV khi cần, material slots, hierarchy, pivot, pose mẫu, render review, GLB.
- **R3F:** Canvas, loader, scene graph binding, camera, ánh sáng runtime, khối dữ liệu/node/cạnh thay đổi theo nội dung, quality preset và fallback state.
- **GSAP/ScrollTrigger:** timeline scene, chapter progress, pin/horizontal track khi đã chứng minh cần thiết, DOM reveal và chuyển pose theo scroll.
- **React/HTML:** copy, heading, CTA, auth overlay, navigation, focus order, live status và nội dung fallback.
- **Quyền sở hữu animation:** GSAP điều khiển transform chính của parent groups; R3F `useFrame` chỉ điều khiển idle/pointer offset trên child groups; không cùng ghi một thuộc tính.
- **PRE01–PRE05:** bộ phận độc lập, pose `compact`, content độc lập camera/timeline, provenance cho model/stat/preview/fallback và backlog mobile được kiểm soát qua traceability matrix.

## 7. File dự kiến và ranh giới thay đổi

Tên cuối được xác nhận ở B1/B4; dự kiến:

- Tạo `components/home/` cho `HomeExperience`, `HomeCanvas`, scene components, story controller, fallback và content/config.
- Tạo `public/assets/home/cancer-knowledge-machine/` cho GLB, fallback, manifest và license; file nguồn Blender/script nằm ở `assets-src/home/cancer-knowledge-machine/`, không đưa `.blend` vào bundle public.
- Sửa có kiểm soát `app/page.js`, `app/globals.css`, `app/layout.js`, `package.json`, `package-lock.json`, `next.config.mjs` (chỉ nếu kiểm tra PWA chứng minh cần).
- Không sửa backend/API/Firestore và không sửa file hiện có trong `data/`.

## 8. Checkpoint và commit dự kiến

Không commit trong lượt lập kế hoạch. Khi triển khai và sau khi `npm run build` pass:

1. `docs: finalize 3d homepage decisions and contracts`
2. `feat: add blender blockout pipeline for cancer knowledge machine`
3. `feat: add r3f homepage story proof of concept`
4. `feat: integrate optimized cancer knowledge model`
5. `feat: complete 3d homepage story scenes`
6. `perf: optimize 3d homepage lifecycle and rendering`
7. `test: verify 3d homepage acceptance criteria`

Không gộp commit model binary lớn với thay đổi backend không liên quan; không push nếu chưa được yêu cầu.

## 9. Bước đầu tiên có thể bắt đầu

Bước 1–7 đã hoàn thành và được duyệt; B5B là baseline khóa. B8 đã hoàn tất mọi kiểm tra có thể thực hiện và dừng ở review gate. Không mở phát hành cho đến khi learner/admin thật và SW upgrade cũ→mới được kiểm thử hoặc có waiver rõ ràng.

## 10. Điều kiện phê duyệt kế hoạch

Kế hoạch tổng thể, D02, B3.8, B4, B5B, B6 revision và B7 closeout đã được duyệt. B8 dừng tại mốc review với release manifest, AC matrix, report, JSON/ảnh và rollback; chưa có release sign-off.
