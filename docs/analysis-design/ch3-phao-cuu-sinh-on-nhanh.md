# 🛟 PHAO CỨU SINH ÔN NHANH TRƯỚC GIỜ THI — CHƯƠNG III
## MÔN: PHÂN TÍCH THIẾT KẾ VÀ YÊU CẦU (REQUIREMENTS ANALYSIS & DESIGN)
### CHỦ ĐỀ: INITIATION PHASE — FROM BUSINESS EVENTS TO A SYSTEM USE CASE MODEL
*(Dành riêng cho sinh viên chưa kịp học bài — Đọc trong 10-15 phút, tự tin ẵm trọn điểm cao!)*

---

> 💡 **BÍ KÍP CỦA THỦ KHOA:**  
> Đề thi Chương 3 có 3 "hố tử thần" mà 90% sinh viên làm sai:  
> 1. **Lộn ngược chiều mũi tên** của `<<include>>` và `<<extend>>`.  
> 2. Nhầm lẫn giữa **Temporal Event** (sự kiện thời gian) và **State Event** (sự kiện trạng thái).  
> 3. Cạm bẫy **Functional Decomposition** (xé nhỏ Use Case thành các nút bấm click chuột).  
> Hãy đọc kỹ bản phao này để nắm chắc "bộ phản xạ 3 giây" hạ gục mọi câu hỏi trắc nghiệm!

---

## 🚀 TRỤ CỘT 1: PHA KHỞI ĐỘNG (INCEPTION PHASE) & BẢN CHẤT USE CASE

### 1.1 Inception Phase nằm ở đâu và kết thúc bằng cái gì?
* **Vị trí:** Là pha đầu tiên trong 4 pha của **Unified Process** (*Inception $\to$ Elaboration $\to$ Construction $\to$ Transition*).
* **Nhiệm vụ:** Trả lời câu hỏi *"Dự án này có đáng làm không?"* — Xác định tầm nhìn, phạm vi sơ bộ, ước lượng sơ lược chi phí và tính khả thi.
* **Cột mốc kết thúc:** **LCO (Lifecycle Objective Milestone)** — Chốt mục tiêu vòng đời dự án.
> ⚠️ **BẪY THI:** Cuối Inception là **LCO**; cuối Elaboration là **LCA** (chốt kiến trúc). Đừng nhầm lẫn hai cột mốc này!

---

### 1.2 Định nghĩa Use Case của Ivar Jacobson — Câu thần chú ăn điểm
* **Hỏi:** Use Case là cái gì?
* **Đáp ngay câu thần chú:** Là một chuỗi các hành động mang lại một **KẾT QUẢ CÓ GIÁ TRỊ QUAN SÁT ĐƯỢC (Observable Result of Value)** cho một Actor cụ thể.
* **Thử nghiệm EBP (Elementary Business Process):**
  - Một Use Case chuẩn mực phải thỏa mãn bài kiểm tra EBP:
    * 👤 **Một người** (One person)
    * 📍 **Tại một địa điểm** (One place)
    * ⏰ **Vào một thời điểm** (At one time)
    * 🎯 **Hoàn thành một mục tiêu kinh doanh trọn vẹn** và đưa dữ liệu về trạng thái **nhất quán**.
  - *Ví dụ ĐÚNG:* "Đăng ký môn học", "Thanh toán hóa đơn".
  - *Ví dụ SAI (vi phạm EBP):* "Nhập mã môn học", "Bấm nút Tìm kiếm" (Đây chỉ là 1 thao tác nhỏ, không mang lại giá trị độc lập!).

---

### 1.3 Bốn thành phần chuẩn mực của Use Case Diagram

```
       웃
     Actor ──────────────( Use Case )
  (Tác nhân)   Association  (Ca sử dụng)
               (Đường nối)
  ═════════════════════════════════════════
  [      System Boundary (Khung ranh giới)      ]
```

1. 👤 **Actor (Hình người stickman):** Vai trò bên ngoài tương tác với hệ thống.
2. ⭕ **Use Case (Hình elip nằm ngang):** Chứa hành động bắt đầu bằng ĐỘNG TỪ.
3. ➖ **Association (Đường thẳng liền nét):** Kênh giao tiếp giữa Actor và Use Case.
4. 🔲 **System Boundary (Khung chữ nhật bao quanh):** Phân định ranh giới — bên trong khung là phần mềm, bên ngoài là các Actor.

---

## ⚡ TRỤ CỘT 2: KỸ THUẬT PHÂN RÃ SỰ KIỆN (EVENT DECOMPOSITION)

*Để tìm ra danh sách Use Case chuẩn mực, BA không ngồi "tự tưởng tượng" mà dùng kỹ thuật **Event Decomposition** (Phân rã sự kiện).*

### 2.1 Quy tắc vàng: 1 Event : 1 Use Case
* **Mỗi sự kiện nghiệp vụ (Business Event)** xảy ra trong thực tế sẽ kích hoạt **đúng một Ca sử dụng (Use Case)** trong hệ thống!

---

### 2.2 Ba loại Business Events — Cực kỳ hay thi!

| Loại sự kiện | Tác nhân kích hoạt | Bản chất đời thường | Ví dụ chuẩn thi |
| :--- | :--- | :--- | :--- |
| **1. External Event** *(Sự kiện bên ngoài)* | Do **con người hoặc hệ thống bên ngoài** chủ động gây ra | Khách bấm chuông cửa $\to$ Chủ nhà ra mở cửa | - Khách hàng nộp đơn đặt hàng.<br>- Sinh viên gửi yêu cầu đăng ký môn.<br>- Cổng ngân hàng gửi thông báo đã nhận tiền. |
| **2. Temporal Event** *(Sự kiện thời gian)* | Do **đồng hồ thời gian** tự động kích hoạt khi đến hạn định | Hẹn giờ báo thức reo $\to$ Dậy đi học | - Đến 00:00 ngày 1 hàng tháng: Tính lãi suất tiết kiệm.<br>- Đến 17:00 thứ Sáu: Tự động in bảng chấm công.<br>- Đến ngày 15/9: Khóa cổng đăng ký học phần. |
| **3. State Event** *(Sự kiện trạng thái)* | Do **dữ liệu nội bộ bên trong hệ thống thay đổi đạt ngưỡng** | Bình nóng lạnh đủ 100°C $\to$ Tự ngắt điện | - Lượng hàng tồn kho giảm xuống dưới 10 $\to$ Hệ thống tự động tạo đề xuất nhập hàng.<br>- Số lần đăng nhập sai đạt 5 lần $\to$ Hệ thống tự động khóa tài khoản. |

> 🧠 **MẸO PHÂN BIỆT SIÊU NHANH:**  
> - Thấy *"Khách hàng gửi..."*, *"Người dùng yêu cầu..."* $\rightarrow$ **External Event**.  
> - Thấy *"Đến ngày...", "Đến 17h...", "Cuối tháng...", "Hàng tuần..."* $\rightarrow$ **Temporal Event**.  
> - Thấy *"Khi số lượng giảm xuống dưới...", "Khi tài khoản hết tiền...", "Khi nhiệt độ vượt quá..."* $\rightarrow$ **State Event**.

---

### 2.3 Bảng phân tích sự kiện (Event Table) gồm 6 cột:
1. **Event:** Sự kiện gì xảy ra? *(ví dụ: Sinh viên yêu cầu đăng ký môn học)*
2. **Trigger:** Tín hiệu nào kích hoạt? *(Bấm nút "Xác nhận đăng ký")*
3. **Source:** Ai gửi tín hiệu đó? *(Sinh viên)*
4. **Use Case:** Ca sử dụng tương ứng là gì? *(Register for Course)*
5. **Response:** Hệ thống phản hồi cái gì? *(Thông báo thành công & Thời khóa biểu)*
6. **Destination:** Phản hồi gửi tới đâu? *(Màn hình của Sinh viên)*

---

## 👥 TRỤ CỘT 3: NHẬN DIỆN TÁC NHÂN (ACTORS) & QUY TẮC ĐẶT TÊN

### 3.1 Actor là ai? — Đừng nhầm với con người cụ thể!
* **Actor là VAI TRÒ (Role)** tương tác với hệ thống từ bên ngoài.
* *Ví dụ:* Anh Nguyễn Văn A lúc vào mua sách là **Customer** (Khách hàng); nhưng khi anh A vào ca trực quét dọn kho thì anh A là **Inventory Clerk** (Nhân viên kho). Hệ thống chỉ nhận diện vai trò, không quan tâm tên cúng cơm của anh A!

---

### 3.2 Bốn loại Actor trong mô hình Use Case

| Loại Actor | Bản chất | Ví dụ thực tế |
| :--- | :--- | :--- |
| **1. Primary Actor** *(Tác nhân chính)* | Khởi xướng và sử dụng dịch vụ của hệ thống để đạt được mục tiêu cá nhân | **Sinh viên** (đăng ký môn), **Khách hàng** (mua sách), **Bệnh nhân** (đặt lịch khám) |
| **2. Supporting Actor** *(Tác nhân phụ / hỗ trợ)* | Hệ thống bên thứ ba hỗ trợ hệ thống chính hoàn thành giao dịch | **Cổng thanh toán VNPay**, **Máy chủ SMS OTP**, **Ngân hàng liên kết** |
| **3. Offstage / Stakeholder** | Quan tâm đến kết quả nhưng **không bao giờ trực tiếp bấm máy tính** | **Ban Giám hiệu**, **Cơ quan Thuế**, **Hội đồng quản trị** |
| **4. Internal / System Actor** | Bộ lập lịch tự động của hệ thống (dành cho Temporal Events) | **System Scheduler (Bộ định thời hệ thống)** |

---

### 3.3 Quy tắc đặt tên Use Case — Chuẩn ngữ pháp không sai một chữ
* **Công thức bắt buộc:** `ĐỘNG TỪ + CỤM DANH TỪ` (`Verb + Noun Phrase`)
  - ✅ **Đúng chuẩn:** `Register for Course`, `Make Payment`, `Print Grade Report`, `Generate Invoice`.
  - ❌ **Sai chuẩn (sẽ bị trừ điểm):**
    * `Registration` *(Chỉ có danh từ, không có động từ hành động!)*
    * `Student Information` *(Đây là tên bảng dữ liệu, không phải hành động!)*
    * `Click Submit Button` *(Đây là thao tác UI, vi phạm tính độc lập công nghệ!)*

---

## 🔗 TRỤ CỘT 4: TỔ CHỨC MÔ HÌNH USE CASE — INCLUDE VS EXTEND VS GENERALIZATION

*Đây là phần sinh viên sợ nhất và hay cắn bút nhất trong phòng thi. Hãy học theo cách "ăn phở" sau:*

### 4.1 Bát phở thần thánh: Phân biệt `<<include>>` và `<<extend>>`

```
   BÁT PHỞ BÒ TÁI (Base Use Case)
        │
        ├──────<<include>>─────► [Nước dùng & Bánh phở] (Included Use Case)
        │                        👉 BẮT BUỘC PHẢI CÓ! Không có nước dùng thì không thành bát phở!
        │
        ▲
        │
   [Gọi thêm quẩy] ──<<extend>>──┘ (Extension Use Case)
   👉 TÙY CHỌN! Chỉ khi nào khách thèm ăn quẩy (thỏa mãn điều kiện) thì mới bưng ra!
   👉 Điểm nhúng quẩy vào bát gọi là EXTENSION POINT!
```

---

### 4.2 Bảng so sánh "Khắc cốt ghi tâm" — Đọc 1 lần nhớ cả đời:

| Tiêu chí | Quan hệ `<<include>>` *(Bao hàm)* | Quan hệ `<<extend>>` *(Mở rộng)* |
| :--- | :--- | :--- |
| **Bản chất** | **BẮT BUỘC thực thi** trong 100% trường hợp | **TÙY CHỌN (Optional)**, chỉ chạy khi thỏa điều kiện |
| **Mục đích** | Tái sử dụng (Reuse) đoạn logic chung giữa nhiều Use Case | Bổ sung tính năng mới mà **không làm sửa đổi Base Case** |
| **Base Case có biết không?** | **CÓ BIẾT!** Base Case gọi trực tiếp Included Case | **HOÀN TOÀN KHÔNG BIẾT!** Base Case độc lập tuyệt đối |
| **Điều kiện kích hoạt** | Không cần điều kiện, cứ chạy Base là chạy Include | Phải có **Extension Condition** tại **Extension Point** |
| **CHIỀU MŨI TÊN (Cực kỳ hay bẫy!)** | Trỏ từ **Base Case $\to$ Included Case** `──> <<include>>` | Trỏ NGƯỢC từ **Extension Case $\to$ Base Case** `──> <<extend>>` |

> ⚠️ **BẪY THI TỬ THẦN VỀ MŨI TÊN:**  
> - `<<include>>`: Mũi tên trỏ **ĐI** (Base trỏ tới Include).  
> - `<<extend>>`: Mũi tên trỏ **VỀ** (Extension trỏ ngược về Base).  
> *(Cách nhớ: **Extend** là muốn "móc nối" vào Base Case nên phải chĩa mũi tên về phía Base Case).*

---

### 4.3 Quan hệ Kế thừa (Generalization)
* Dùng khi có quan hệ cha - con (`is-a`).
* **Ví dụ:** Use Case `Pay by Credit Card` và `Pay by Cash` kế thừa từ Use Case tổng quát `Make Payment`.
* **Ký hiệu:** Đường thẳng có **mũi tên hình tam giác rỗng $\blacktriangleleft$** trỏ về phía cha.

---

## 🎯 TRỤ CỘT 5: BẢNG "NHÌN TỪ KHÓA CHỌN ĐÁP ÁN" & 10 CẠM BẪY PHÒNG THI

### 5.1 Tra cứu phản xạ 3 giây (Keywords Matching Chương 3)

| Thấy cụm từ xuất hiện trong câu hỏi... | ...Đáp án đúng chắc chắn là: |
| :--- | :--- |
| "Observable result of value", "Ivar Jacobson" | ➔ **Use Case** |
| "Một người, một địa điểm, một thời điểm, đưa dữ liệu nhất quán" | ➔ **Elementary Business Process (EBP)** |
| "Khách hàng gửi yêu cầu", "Người dùng nhập liệu bên ngoài" | ➔ **External Event** |
| "Đến ngày...", "Đến giờ...", "Hàng tuần...", "Định kỳ" | ➔ **Temporal Event** |
| "Tồn kho giảm dưới mức an toàn", "Dữ liệu đạt ngưỡng nội bộ" | ➔ **State Event** |
| "Tác nhân bên thứ ba cung cấp dịch vụ", "Cổng thanh toán" | ➔ **Supporting / Secondary Actor** |
| "Quan tâm kết quả nhưng không trực tiếp sử dụng phần mềm" | ➔ **Offstage / Stakeholder** |
| "Hành vi bắt buộc dùng chung", "Mũi tên trỏ từ Base sang..." | ➔ **Quan hệ `<<include>>`** |
| "Hành vi tùy chọn có điều kiện", "Mũi tên trỏ từ Extension về Base" | ➔ **Quan hệ `<<extend>>`** |
| "Vị trí được định danh rõ trong Base Case để chèn hành vi" | ➔ **Extension Point** |
| "Xé nhỏ Use Case thành từng bước bấm nút, nhập dữ liệu" | ➔ **Cạm bẫy Functional Decomposition** |
| "Cột mốc kết thúc pha Inception trong Unified Process" | ➔ **LCO Milestone** |

---

### 5.2 Mười cạm bẫy phòng thi kinh điển của Chương 3

1. ❌ **Bẫy 1:** *Vẽ mũi tên `<<extend>>` trỏ từ Base Case sang Extension Case.*  
   👉 **Khắc phục:** SAI TO! Mũi tên `<<extend>>` phải trỏ từ **Extension Case về Base Case**.
2. ❌ **Bẫy 2:** *Biến "Login" thành Use Case trung tâm nối `<<include>>` với tất cả Use Case khác.*  
   👉 **Khắc phục:** "Login" không mang lại giá trị độc lập (Observable result of value). Chuẩn mực là đưa "User is logged in" vào **Precondition** (Điều kiện tiên quyết) của Use Case!
3. ❌ **Bẫy 3:** *Rơi vào bẫy Functional Decomposition (Phân rã chức năng con).*  
   👉 **Khắc phục:** Vẽ các Use Case như "Nhập mã", "Check hợp lệ", "Lưu cơ sở dữ liệu" là biến sơ đồ thành lưu đồ thuật toán (Flowchart). Phải gom lại thành 1 Use Case trọn vẹn theo mục tiêu người dùng!
4. ❌ **Bẫy 4:** *Nhầm lẫn giữa Temporal Event và State Event.*  
   👉 **Khắc phục:** Temporal phụ thuộc vào **thời gian trôi (đồng hồ)**; State phụ thuộc vào **sự kiện đổi trạng thái dữ liệu nội bộ (đạt ngưỡng)**.
5. ❌ **Bẫy 5:** *Nhầm Use Case Diagram với Sơ đồ luồng dữ liệu (Data Flow Diagram - DFD).*  
   👉 **Khắc phục:** Đường Association giữa Actor và Use Case chỉ là đường nối giao tiếp, **KHÔNG BAO GIỜ mang nhãn dữ liệu** (như nhãn "Mã số sinh viên", "Họ tên")!
6. ❌ **Bẫy 6:** *Đặt tên Use Case bằng cụm danh từ không có động từ.*  
   👉 **Khắc phục:** Tên Use Case bắt buộc phải có dạng `Động từ + Danh từ` (ví dụ: `Register Course`, cấm viết `Course Registration`).
7. ❌ **Bẫy 7:** *Nghĩ rằng Base Use Case phải biết về Extension Use Case.*  
   👉 **Khắc phục:** Base Case **hoàn toàn mù tịt** về Extension Case! Chính Extension Case mới biết Base Case và tự móc vào tại Extension Point.
8. ❌ **Bẫy 8:** *Để Actor nằm bên trong khung System Boundary.*  
   👉 **Khắc phục:** Actor là người hoặc hệ thống bên ngoài, bắt buộc phải nằm **BÊN NGOÀI** khung System Boundary!
9. ❌ **Bẫy 9:** *Nhầm Primary Actor với Supporting Actor.*  
   👉 **Khắc phục:** Người bấm máy để giải quyết việc của mình $\to$ Primary; Hệ thống hỗ trợ truyền tin/thanh toán $\to$ Supporting/Secondary.
10. ❌ **Bẫy 10:** *Cho rằng Brief Description chứa đầy đủ 10 trường kịch bản.*  
    👉 **Khắc phục:** Brief Description chỉ là một đoạn văn ngắn 2-3 câu! Bản mẫu 10 trường kịch bản chi tiết là **Fully Dressed Description**.

---

## 🏆 CHÚC BẠN TỰ TIN ĐẠT ĐIỂM TUYỆT ĐỐI CHƯƠNG III! 🌟
* Bình tĩnh đọc kỹ câu hỏi và các phương án.
* Chú ý các từ phủ định: **SAI**, **KHÔNG ĐÚNG**, **NGOẠI TRỪ**.
* Nhớ kỹ câu thần chú bát phở: *Include là nước dùng, Extend là gọi thêm quẩy!*
