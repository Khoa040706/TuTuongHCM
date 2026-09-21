# Bước 8 — QA, vòng sửa riêng và bàn giao

**Trạng thái:** `AWAITING REVIEW — HANDOFF READY / RELEASE SIGN-OFF BLOCKED`; B7 closeout đã duyệt

**Owner:** QA owner; Frontend/3D/Integration sửa ở vòng riêng

**Công cụ:** test matrix, browser/device checks, artifact validators; không vừa test vừa sửa.

## Mục tiêu và kết quả nhìn thấy

Chứng minh release candidate đạt acceptance criteria, phân loại lỗi có owner, retest đúng phạm vi và bàn giao đủ source/model/docs để bảo trì.

## Đầu vào và điều kiện bắt đầu

- Feature/performance freeze; build candidate định danh bằng commit/hash hoặc artifact hash.
- Traceability matrix đầy đủ; test environment và known limitations được ghi.

## Checklist thực hiện

- [x] **B8.1** Khóa candidate cuối bằng build ID, source/dependency/GLB hash và môi trường Chrome 153/Intel UHD 630.
- [x] **B8.2** AC01–AC17 có PASS/BLOCKED, phân biệt evidence mới/kế thừa/retest trong `artifacts/homepage-3d/b8/ac01-ac17-matrix.md`.
- [x] **B8.3** DOM reading order/label/alt/ID và contrast mới; keyboard/focus/zoom/reduced-motion kế thừa B7 không bị ảnh hưởng. Eyebrow retest cuối đạt 5,390:1.
- [x] **B8.4** GLB 404/corrupt, WebGL unavailable, slow load và reload giữa S04 PASS; tab freeze/resume kế thừa B7.
- [x] **B8.5** Auth destination, local subject/study/quiz, algorithm và diagram PASS; current PWA offline PASS. Real learner/admin và old-release PWA upgrade `NOT TESTED/BLOCKED` với đầu vào ghi rõ.
- [x] **B8.6** Bug và lỗi harness được ghi trước sửa trong `bugs-and-limitations.md`; lượt harness ngắt không dùng làm acceptance evidence.
- [x] **B8.7** Sửa batch có mục tiêu: complete managed-patch hashes, eyebrow contrast và diagnostic render purity; không sửa model/sáu cảnh.
- [x] **B8.8** Targeted retest PASS; backend 17/17, scoped lint và final build PASS. Không lặp B7 retention vì runtime Three/R3F/full-home lifecycle không đổi.
- [x] **B8.9** Release manifest, source changes, AC matrix, report, evidence và rollback đã kiểm kê. Source/model gốc không đưa bản trùng không cần thiết vào ZIP.
- [x] **B8.10** Handoff cuối đã viết; chờ user review và cung cấp/waive ba test input còn thiếu.

## File/đầu ra dự kiến

- `artifacts/homepage-3d/b8/b8-verification.md`, `ac01-ac17-matrix.md`, `bugs-and-limitations.md`, evidence index và release manifest.
- Source/model theo `model-contract.md`; tài liệu vận hành/export/rollback.
- Không commit/push nếu chưa được yêu cầu; trước mọi commit phải `npm run build` pass theo `AGENTS.md`.

## Kiểm tra, duyệt và rollback

- Người dùng duyệt release khi không còn blocker/critical và limitation còn lại được chấp nhận rõ.
- Rủi ro: test trên candidate thay đổi, evidence thiếu môi trường, sửa bug gây regression. Xử lý: hash candidate, test/fix split, targeted + final regression.
- Rollback release: tắt HomeExperience/trở lại landing cũ; giữ asset version trước; không rollback bằng thao tác phá hủy worktree.

## Exit gate

Mọi AC đã có trạng thái/bằng chứng và build pass. AC16 cùng old-release PWA upgrade còn blocked bởi đầu vào ngoài môi trường; vì chưa có waiver/sign-off nên B8 giữ `AWAITING REVIEW`, chưa đánh dấu `DONE` và chưa phát hành.
