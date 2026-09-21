# Hợp đồng Model Blender ↔ Frontend

## 1. Hệ tọa độ và đơn vị

- Blender metric, `Unit Scale = 1.0`; 1 Blender unit = 1 m quy ước.
- Export glTF/GLB theo chuẩn trục của exporter; pipeline phải ghi lại mapping và xác minh trong Three.js trước khi khóa model.
- `crab_root` đặt tại origin; ground/reference plane không export.
- Apply scale trước export; transform có chủ đích cho pivot animation không được apply sai làm mất trục.

## 2. Hierarchy tối thiểu

```text
crab_root
├─ crab_body
├─ claw_left
│  └─ pincer_left (optional)
├─ claw_right
│  └─ pincer_right (optional)
├─ legs_group
│  ├─ leg_left_01 ... leg_left_04
│  └─ leg_right_01 ... leg_right_04
├─ cancer_mark
├─ ring_inner
└─ ring_outer
```

Không đổi node name sau khi B4 đã tích hợp nếu không cập nhật manifest và contract test.

### Quy ước chân đã khóa

- Có đúng **8 chân đi bộ**, 4 chân mỗi bên, ngoài 2 càng; không dùng số chân suy ra từ các góc không nhất quán của ảnh AI.
- `01 → 04` chạy từ phía trước tới phía sau theo trục Blender Y; mặt cua hướng về `-Y`.
- Hai bên là mirror qua mặt phẳng X=0: attachment, segment length, độ hạ Z và nhịp Y tương ứng phải đối xứng trong sai số số học.
- Mỗi chân có root/pivot riêng tại điểm gắn với thân và tối thiểu hai segment thô ở blockout; toàn bộ nằm dưới `legs_group`.
- Chân/càng/vòng phải có khoảng hở nhìn thấy trong front/three-quarter view và không xuyên nhau ở năm pose.
- Không có antenna/râu hoặc node tương đương trong hierarchy.

### Hình khối thân đã khóa

- `crab_body` là mai cong ba chiều, có độ phồng theo trục Y và silhouette rộng theo X; không dùng đĩa/cylinder phẳng đùn dày làm thân chính.
- Biểu tượng trăng nằm trên mặt trước, kích thước phụ so với body và không phá silhouette cua.
- Concept sheet AI chỉ là reference về hướng hình ảnh; config/script và contract này mới là nguồn tỷ lệ, hierarchy, pivot và topology blockout.

## 3. Pivot và pose

- `claw_left/right`: pivot tại khớp nối thân; local rotation mở không xuyên mai/vòng.
- `ring_inner/outer`: pivot đồng tâm `crab_root`, cho phép xoay độc lập và tịnh tiến theo chiều sâu.
- `legs_group`: cố định trong v1; không rig đi bộ.
- Có đúng **5 pose bắt buộc**: `closed`, `open`, `guide_left`, `guide_right`, `compact`; lưu transform trong manifest và timeline marker, không phụ thuộc trạng thái Blender UI. Pose `compact` phải nhường vùng content/CTA ở S05–S06 (PRE02).
- Manifest từ B5A phải ghi `frame`, FPS và `timeSeconds` rõ ràng cho từng pose. Validator phải lấy mẫu animation ở đúng `timeSeconds` và đối chiếu transform kỳ vọng; runtime không được suy pose chỉ bằng vị trí phần tử trong mảng keyframe.

## 4. Material và texture

- Material slots ổn định: `MAT_GoldSatin`, `MAT_Charcoal`, `MAT_AmberGlow`, tùy chọn `MAT_Accent`.
- Ưu tiên PBR gọn; không bake chữ CTA/UI vào texture.
- Texture dùng kích thước power-of-two khi hợp lý; ghi color space; không dùng asset không rõ quyền.

## 5. Manifest bàn giao

`model-manifest.json` dự kiến chứa đúng dữ liệu asset, không phải API contract nghiệp vụ:

- phiên bản asset và SHA-256;
- node name/hierarchy;
- bounding box tổng và từng node chuyển động;
- triangle/vertex/mesh/material/texture counts;
- transform của pose;
- FPS, quy ước frame→time và thời điểm lấy mẫu rõ ràng của từng pose;
- material slots và texture paths;
- Blender/exporter version, export preset, ngày export;
- license/source attribution.

Manifest B3 dùng schema tạm `0.1-blockout-review` để phục vụ review và validator kỹ thuật, chưa phải API cho code sản phẩm. FE và 3D owner phải duyệt schema trước khi viết parser tích hợp B4; không tự thêm field vào hợp đồng đã khóa sau thời điểm đó.

## 6. Quyền sở hữu animation

- Blender chỉ cung cấp rigid hierarchy và pose/clip mẫu nếu được duyệt.
- GSAP sở hữu chuyển động chính theo scroll trên parent groups.
- `useFrame` sở hữu idle/pointer offset nhỏ trên child group riêng.
- Một transform property chỉ có một writer tại một thời điểm.

## 7. Điều kiện nhận GLB

- Node/pivot/hierarchy khớp manifest.
- Không missing texture, duplicate material vô lý, negative/unapplied scale ngoài ngoại lệ ghi rõ.
- Pose không self-intersection ở góc camera nghiệm thu.
- B3: GLB parse bằng `Three.GLTFLoader`, node/material/animation/hash khớp manifest; `.blend` mở lại được bằng Blender CLI.
- B4: GLB mở trong browser/R3F slice và xác minh trục/camera/runtime lifecycle.
- Gói final có `.blend`, script sinh/sửa, GLB, manifest, fallback và license note; blockout B3 chưa tự nhận đã hoàn thành fallback/license final.
