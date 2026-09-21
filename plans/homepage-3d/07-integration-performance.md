# Bước 7 — Tối ưu, tích hợp và mobile readiness

**Trạng thái:** `AWAITING REVIEW — READY FOR REVIEW` ngày 2026-09-18; B7 chưa đóng và B8 chưa mở cho đến khi người dùng duyệt. Timeout 650 ms đã được bỏ. Patch R3F 9.7.0 gọi cleanup tại callback commit unmount, chặn configure/render tiếp tục sau unmount và phối hợp patch Three theo ownership renderer. Harness Intel UHD 630 PASS đủ bốn lifecycle case. Production 5 vòng giữ DOM 797→797, detached 561→561, WebGLBuffer/Texture/Program/Context delta 0 và `MAT_AmberGlow` callback 0→0; model/motion 5/5. Regression sáu cảnh/PWA/fallback PASS và FPS GPU thật đã đo. Learner/admin thật và nâng cấp SW từ production cũ vẫn là `NOT TESTED`.

**Owner:** Frontend performance owner + Integration/PWA reviewer + Accessibility reviewer

**Công cụ:** browser profiler, build analyzer nếu đã có/được duyệt, automated checks; Blender chỉ khi asset là bottleneck.

## Mục tiêu và kết quả nhìn thấy

Tích hợp homepage ổn định với SPA/PWA hiện hữu, đạt ngân sách đo được trên desktop, sửa accessibility và để kiến trúc không khóa đường mobile tương lai.

## Đầu vào và điều kiện bắt đầu

- Feature freeze S01–S06; thiết bị desktop tham chiếu được ghi nhận; production build chạy được.
- Không tối ưu dựa trên cảm giác; phải ghi browser/GPU/viewport/cache.

## Checklist thực hiện

- [x] **B7.1** Baseline production đã ghi resource/JS/GLB, rAF frame time, memory, draw calls/triangles/geometry/texture và môi trường SwiftShader. FPS GPU desktop = `NOT TESTED`.
- [x] **B7.2** Đã chạy 5 vòng. Canvas/controller/active DOM ổn định nhưng heap/detached node/listener tăng; kết quả `FAIL`, giữ làm residual defect thay vì che hoặc sửa rộng chưa định vị.
- [x] **B7.3** Chapter jump, hash restore, back/forward, tab pause/resume, pending destination cancel/switch và resize `PASS`.
- [x] **B7.4** 1366×768, 1440×900, 1920×1080 và zoom 200% `PASS`; viewport không còn cấm zoom.
- [x] **B7.5** Keyboard/focus, reduced motion và WebGL/model fallback `PASS`; semantic/contrast audit tự động toàn repository không thực hiện.
- [x] **B7.6** Không hạ chất lượng: FPS thấp chỉ đo trên SwiftShader, không đủ căn cứ tối ưu model đã duyệt. DPR/config vẫn tách để triển khai tier sau khi có thiết bị thật.
- [x] **B7.7** SW production/offline/API NetworkOnly/GLB cache policy `PASS`; upgrade giữa hai release production = `NOT TESTED`.
- [x] **B7.8** Mobile backlog có owner/phụ thuộc trong báo cáo; không triển khai hoặc đánh dấu mobile pass.
- [x] **B7.9** Homepage/guest algorithm/diagram `PASS`; learner study/quiz và admin `NOT TESTED` do thiếu session/quyền phù hợp.
- [x] **B7.10** Báo cáo và residual risk tại `artifacts/homepage-3d/b7/b7-verification.md`; dừng để duyệt.
- [x] **B7.11 targeted revision** Sửa plane nhãn về aspect 2:1, đo geometry + texture + projected pixels; PASS S03/S04 tại 1366×768 và 1440×900.
- [x] **B7.12 targeted revision** Lấy heap snapshots trước/sau warm-up + cleanup ổn định + hai forced GC; sửa registry controller/Canvas thực và cleanup cục bộ. Delta giảm nhưng retention còn `FAIL`; bằng chứng tại `artifacts/homepage-3d/b7/revision/`.
- [x] **B7.13 revision2 labels** Texture/plane giữ 2:1; `measureText` ghi glyph bounds riêng. Font quy đổi S03 là 15.36/15.98 px, S04 action là 14.31/14.89 px tại 1366×768 và 1440×900; không tràn/chồng dòng.
- [x] **B7.14 revision2 diagnosis** Cùng build/quy trình 5 vòng: auth tối giản không tăng DOM; Canvas tối giản plateau sau vòng đầu; DOM/GSAP trước sửa tăng +486 node/vòng do listener của ảnh responsive S04. Đổi riêng ảnh nguồn review sang `<img>` kích thước cố định; retest DOM/GSAP 309→309 node, detached +9, listener +4.
- [x] **B7.15 revision2 residual** Full homepage vẫn tăng 494 node/vòng. Strong root: Three WebGL properties/texture → WebGL2RenderingContext → detached canvas → home tree. Cleanup renderer/context cục bộ không thay đổi xu hướng; instrumentation-off cũng tương đương. Ghi `FAIL`, không xóa cache thư viện hoặc đổi kiến trúc để làm đẹp số đo.
- [x] **B7.16 revision2 smoke** Build production PASS; chapter/hash/back-forward, tab, pending destination, reduced motion và model fallback PASS trên build bàn giao. Learner/admin thật, GPU desktop thật và SW upgrade cũ→mới giữ `NOT TESTED`.
- [x] **B7.17 WebGL reproduction** QA-only modes cộng dồn thành phần. `canvas-model-loader-only` giữ DOM 390→390 và detached 277→277; `canvas-model` tăng DOM 472→877, detached 330→637 và canvas +1/vòng. Vì model đã là điểm chuyển, không chạy lighting/data/controller matrix thừa.
- [x] **B7.18 GPU environment** Chrome 153 desktop, Windows, DPR 1.25, `ANGLE (Intel UHD Graphics 630, D3D11)` xác nhận hardware renderer và vẫn tăng 472→877 node. SwiftShader không còn là điều kiện cần để tái hiện; FPS production trên GPU thật vẫn chưa đo.
- [x] **B7.19 cleanup audit** R3F source xác nhận primitive không auto-dispose. Clone geometry/material riêng rồi dispose không giảm retention; explicit renderLists/renderer/forceContextLoss trước đó cũng không giảm. Cả hai candidate đã hoàn tác, không xóa cache/global và không giữ homepage mounted.
- [x] **B7.20 residual gate** Strong root của object tăng mới: Three WebGL properties → `__webglTexture` → `WebGL2RenderingContext` → detached canvas → diagnostic/home tree. Đây là đường tham chiếu quan sát được; nguyên nhân sâu trong Three/Chrome chưa đủ bằng chứng để sửa an toàn. Giữ `FAIL` và bàn giao reproduction.
- [x] **B7.21 standalone harness** Trang QA tĩnh không Next/auth/SPA/GSAP chạy trên Intel UHD 630. R3F box và Three box plateau; GLB + MeshBasicMaterial vẫn tăng; Three thuần tái hiện nên không quy riêng cho R3F.
- [x] **B7.22 owner/fix** Heap ID delta + strong path xác định geometry được GLTF parser/cache giữ, listener `dispose` giữ WebGL attributes/buffer của renderer cũ. Public API cleanup `geometry.dispose()` trước `gl.dispose()` làm cả Three và R3F harness plateau. Production giữ fix nhỏ nhất; GLB/hash không đổi.
- [x] **B7.23 production retest** Build PASS. Trên Intel UHD 630, 5/5 remount có draw calls 71→80, controller 0→0,520076 và root/claw transform đổi. WebGLBuffer delta 1.155→0, nhưng tổng DOM 1.303→3.773, listener 394→547 và heap 17.876.788→21.691.168 B; lifecycle tổng vẫn `FAIL`. Material cleanup không giảm residual và đã hoàn tác. Final smoke sáu cảnh/hash/back-forward/pending destination/reduced motion/fallback PASS trên build cuối; FPS của smoke là SwiftShader nên không dùng làm FPS GPU production.
- [x] **B7.24 residual owner** Phân tích snapshot production xác định strong owner chung là `DFG_LUT` DataTexture singleton của Three: listener `dispose` theo renderer cũ giữ context/canvas và toàn cây homepage; SVG/label canvas chỉ là object bị giữ theo.
- [x] **B7.25 focused control** Homepage đầy đủ ở QA mode chỉ đổi PBR→Lambert trong bộ nhớ, vẫn giữ model/DOM/lighting/data/controller, chạy Intel UHD 630 năm vòng: DOM 802→802, listener 363→369 và detached +9; model render/motion 5/5. Three r186 vẫn dùng LUT singleton và không có public teardown cho listener này. Không hạ vật liệu production hoặc chạm cache/listener nội bộ; residual production giữ `FAIL`, B7 chưa đóng.

- [x] **B7.26 managed Three patch** Patch r185 có apply/check/reverse và hash khóa; harness PBR hai renderer PASS callback 2→1→0, renderer B giữ nguyên pixel hash và không context loss.
- [x] **B7.27 production final candidate** Clean build `wf_bBsHhdSqUSFelS7H2d` PASS. Intel UHD 630 warm-up PASS ownership và remount 5/5 PASS render/motion. Full retention giữ DOM ngoài homepage 1304 qua mọi vòng, listener 392 qua mọi vòng, active Canvas/controller 0 và WebGLBuffer count delta 0; heap tăng 1.065.172 B sau snapshot protocol. Cùng material/callback vẫn 1→1 giữa baseline/final, trái với warm-up riêng 0, nên delay 650 ms bị đánh giá không tất định. Dừng sửa, ghi `FAIL/BLOCKED`, không chạy regression mở rộng hay FPS sau khi gate lifecycle không đạt.
- [x] **B7.28 deterministic R3F teardown** Patch `studymaster-r3f-9.7.0-deterministic-teardown-v1` khóa đúng R3F 9.7.0 và ba bundle web bằng SHA-256, có apply/check/rollback. Cleanup chạy tại callback `updateContainer(null)` sau khi scene ngừng render; pending async renderer được dispose trước khi commit và pending render bị hủy theo lifecycle token. Harness Intel UHD 630 PASS: normal unmount, async fast unmount, immediate remount, shared material/two renderers; callback 2→1→0 và renderer còn sống giữ pixel hash/context.
- [x] **B7.29 production closeout** Timeout ứng dụng 650 ms đã bỏ; clean-build `mOFWFal3l2aB1Z91JPaGV` PASS và bundle chứa marker patch. Retention Intel UHD 630 sau warm-up/5 vòng: DOM 797→797, detached 561→561, native WebGLBuffer/Texture/Program/Context delta 0, `MAT_AmberGlow` dispose callback 0→0. Mỗi remount render 71 calls và chuyển động đạt 80 calls tại master 0,526317. Listener ngoài homepage dao động 362/364 rồi final 368 nhưng không tăng theo vòng; heap +996.312 B chủ yếu JIT/code, không có tăng detached/resource owner.
- [x] **B7.30 regression closeout** Sáu cảnh, scroll/chapter/hash/back-forward, tab resume, pending destination cancel/switch, reduced motion, model fallback, 1366×768/1440×900/1920×1080, zoom 200% và PWA offline PASS; API cache entry = 0, browser error = 0. Chrome 153/Intel UHD 630 đo 59,83 FPS, average 16,67 ms, p95 16,8 ms, worst 17,5 ms, 71 draw calls/28.388 triangles. Learner/admin thật và SW upgrade production cũ→mới giữ `NOT TESTED`.

## File dự kiến

- Sửa home components/config, `app/page.js`, `app/globals.css`, `app/layout.js`; có thể `next.config.mjs` khi test yêu cầu.
- Tạo report trong `artifacts/homepage-3d/integration/`; không thêm API/Firestore.

## Kiểm tra và bằng chứng

- `npm run lint`, `npm run test:backend`, integration test phù hợp, `npm run build`.
- Performance trace có môi trường; asset/network report; accessibility checklist; five-cycle lifecycle log; PWA report.

## Duyệt, rủi ro và rollback

- Người dùng duyệt trade-off chất lượng nếu cần hạ shadow/DPR/model detail.
- Rủi ro: PWA cache asset cũ, mobile prep thành scope creep, sửa viewport ảnh hưởng app. Xử lý: versioned asset, backlog riêng, regression zoom/layout.
- Rollback: quality preset trước thay đổi; revert từng tối ưu độc lập; giữ fallback DOM.

## Exit gate

Build pass và mọi hạng mục có PASS/FAIL/NOT TESTED cùng bằng chứng. B7 chỉ chuyển `DONE` khi người dùng chấp nhận lifecycle residual và giới hạn môi trường/tài khoản. Mobile vẫn `READY FOR FUTURE WORK`, không `DONE`.
