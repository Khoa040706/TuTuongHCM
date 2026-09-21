# Báo cáo Toàn diện về 4 Chức năng Cốt lõi Môn Điện toán Đám mây (Cloud Computing)

> **Tài liệu Khảo sát & Phân tích Kỹ thuật**  
> **Phạm vi khảo sát**: Phân hệ môn *Điện toán đám mây* (`cloud-computing`) trong dự án StudyMaster.  
> **4 Chức năng trọng tâm**:
> 1. 🔍 **Tìm kiếm Thuật ngữ Song ngữ** (*Cloud Search Panel / Ctrl + K*)
> 2. 🗂️ **Thẻ Ghi nhớ Thuật ngữ Spaced Repetition** (*Cloud Flashcard Deck / Thuật toán SuperMemo-2*)
> 3. ⚠️ **Hệ thống Cần Ôn Lại** (*Review Items & Review Queue / Dual-Trigger System*)
> 4. ✅ **Hoàn thành Bài học & Bắt đáy Nội dung** (*Subsection Completion & Sentinel Scroll*)

---

## 1. Bức tranh Tổng quan Môn Điện toán Đám mây

Môn **Điện toán đám mây** (`cloud-computing`) là phân hệ giáo trình chuyên ngành thế hệ mới trong StudyMaster, được tích hợp an toàn theo mô hình **Adapter Pattern** tại [lib/curriculum.js](file:///d:/TT%20HCM/lib/curriculum.js) mà không xâm phạm các tệp tin dữ liệu gốc trong `data/`.

### Quy mô Dữ liệu Giáo trình:
- **7 Chương học chuyên sâu**: Từ tổng quan đặc tính NIST, kiến trúc ảo hóa phần cứng/máy ảo, mô hình dịch vụ SaaS/PaaS/IaaS/IDaaS, đến bảo mật đám mây và tính toán hiệu năng cao.
- **64 Tiểu mục (Subsections)**: Phân bổ đều qua 7 chương (Chương 1: 10, Chương 2: 9, Chương 3: 9, Chương 4: 7, Chương 5: 9, Chương 6: 10, Chương 7: 10).
- **18 Thuật ngữ Từ điển Song ngữ (Glossary)** tại [data/cloud-computing-glossary.js](file:///d:/TT%20HCM/data/cloud-computing-glossary.js).
- **12 Thẻ Flashcards Chuẩn hóa** tại [data/cloud-computing-flashcards.js](file:///d:/TT%20HCM/data/cloud-computing-flashcards.js).

Bốn chức năng được nghiên cứu dưới đây tạo thành một **hệ sinh thái học tập khép kín** (Closed-loop Adaptive Learning): từ tra cứu tri thức nhanh ➔ ghi nhớ chủ động ➔ phát hiện lỗ hổng kiến thức ➔ điều hướng học lại ➔ xác nhận hoàn thành trung thực.

---

## 2. Chức năng 1: Tìm kiếm Thuật ngữ Song ngữ (Cloud Search Panel)

### 2.1. Mục tiêu & Ý nghĩa Nghiệp vụ
Điện toán đám mây chứa mật độ thuật ngữ viết tắt tiếng Anh (Acronyms) rất cao (IaaS, PaaS, SaaS, IDaaS, SSO, FIDM, NIST, Hypervisor, v.v.). Tính năng tìm kiếm được thiết kế như một **Command Palette / Spotlight Search** thu nhỏ, cho phép học viên tra cứu tức thì định nghĩa khái niệm và nhảy ngay tới bài học tương ứng mà không làm gián đoạn dòng suy nghĩ.

### 2.2. Kiến trúc Tệp tin & Thành phần Tham gia
- **Giao diện & Logic**: [components/cloud/CloudSearchPanel.js](file:///d:/TT%20HCM/components/cloud/CloudSearchPanel.js)
- **Cơ sở Tri thức**: [data/cloud-computing-glossary.js](file:///d:/TT%20HCM/data/cloud-computing-glossary.js)
- **Điểm Điều phối (Orchestrator)**: [app/page.js](file:///d:/TT%20HCM/app/page.js) (kích hoạt từ Floating Action Bar ở đáy màn hình hoặc tổ hợp phím).

### 2.3. Cách thức Hoạt động Chi tiết
1. **Khởi tạo & Phím tắt**:
   - Nhấn nút **Tra cứu (Ctrl+K)** trên Floating Toolbar hoặc nhấn tổ hợp phím `Ctrl + K` (Windows/Linux) hoặc `Cmd + K` (macOS).
   - Modal mở ra kèm hiệu ứng mờ nền (`backdrop-blur-xs`).
   - Con trỏ tự động `focus()` vào ô nhập liệu sau 50ms. Phím `Esc` được cấu hình để đóng nhanh modal.
2. **Bộ lọc Đa thuộc tính Phía Client (Multi-attribute Zero-latency Filtering)**:
   Khi học viên gõ từ khóa (ví dụ: *"iaas"*, *"ảo hóa"*, *"nist"*), hàm `filter()` kiểm tra đồng thời trên 5 trường dữ liệu:
   - `term.vi`: Tên tiếng Việt (ví dụ: *"Hạ tầng như một dịch vụ"*)
   - `term.en`: Tên tiếng Anh (ví dụ: *"Infrastructure as a Service"*)
   - `term.abbreviation`: Từ viết tắt (ví dụ: *"IaaS"*)
   - `term.definition`: Đoạn văn định nghĩa giải thích chi tiết
   - `term.aliases`: Danh sách các tên gọi tương đương khác
3. **Cơ chế Deep-linking Điều hướng Tức thì**:
   - Mỗi thuật ngữ trong kết quả hiển thị tên Việt, tên Anh, badge viết tắt nổi bật, định nghĩa tóm lược 2 dòng và mũi tên điều hướng.
   - Khi người học nhấp vào một mục, hàm `onSelectSubsection(term.subsectionId)` được kích hoạt ➔ gọi `setActiveSubsectionId(term.subsectionId)` trong [app/page.js](file:///d:/TT%20HCM/app/page.js), đóng modal tìm kiếm và tự động chuyển giao diện đọc bài đến chính xác tiểu mục đó (ví dụ: `cloud-ch5-s1-def`).

---

## 3. Chức năng 2: Flashcard Thuật ngữ & Ôn tập Spaced Repetition (SuperMemo-2)

### 3.1. Mục tiêu & Ý nghĩa Nghiệp vụ
Ghi nhớ các khái niệm kỹ thuật cốt lõi thông qua kỹ thuật **Gợi nhớ Chủ động (Active Recall)** và **Lặp lại Ngắt quãng (Spaced Repetition)**. Hệ thống loại bỏ việc học vẹt, tự động phân tích độ nhớ của người học để lên lịch ôn tập vào thời điểm tối ưu trước khi quên.

### 3.2. Kiến trúc Tệp tin & Thành phần Tham gia
- **Giao diện Người dùng**: [components/cloud/CloudFlashcardDeck.js](file:///d:/TT%20HCM/components/cloud/CloudFlashcardDeck.js)
- **Dữ liệu Thẻ**: [data/cloud-computing-flashcards.js](file:///d:/TT%20HCM/data/cloud-computing-flashcards.js) (12 thẻ bao quát 7 chương)
- **Quản lý Danh mục**: [lib/server/flashcard-catalog.js](file:///d:/TT%20HCM/lib/server/flashcard-catalog.js)
- **Thuật toán Cốt lõi**: [lib/server/flashcard-scheduler.js](file:///d:/TT%20HCM/lib/server/flashcard-scheduler.js)
- **Lưu trữ & Tiến độ Server**: [lib/server/learning-repository.js](file:///d:/TT%20HCM/lib/server/learning-repository.js)
- **HTTP Endpoints**:
  - `GET /api/learning/flashcards/due?subjectId=cloud-computing&limit=20`
  - `POST /api/learning/flashcards/[cardId]/reviews`
- **Database Collection**: Firestore `users/{uid}/flashcardProgress/{subjectId}__{cardId}`.

### 3.3. Thuật toán Toán học SuperMemo-2 (SM-2)
Triển khai tại [lib/server/flashcard-scheduler.js](file:///d:/TT%20HCM/lib/server/flashcard-scheduler.js) với 4 mức phản hồi của học viên:
1. **Hệ số Dễ (Ease Factor - EF)**:
   - Khởi tạo ban đầu: $EF_0 = 2.5$. Giới hạn sàn: $EF_{\min} = 1.3$.
   - Mức **Again** (Quên): $EF_{n+1} = \max(1.3, EF_n - 0.2)$.
   - Mức **Hard** (Khó): $EF_{n+1} = \max(1.3, EF_n - 0.15)$.
   - Mức **Good** (Nhớ chuẩn): $EF_{n+1} = EF_n$ (giữ nguyên).
   - Mức **Easy** (Dễ/Nhanh): $EF_{n+1} = EF_n + 0.15$.
2. **Khoảng cách Ngày Ôn tập Tiếp theo (Interval Days - I)**:
   - **`again`**: Reset số lần lặp $Rep = 0$, $I = 1$ ngày.
   - **`hard`**: $Rep = Rep + 1$, $I = \max(1, \text{round}(I_{\text{prev}} \times 1.2))$.
   - **`good`**: $Rep = Rep + 1$.
     * Lần 1 ($Rep = 1$): $I = 1$ ngày.
     * Lần 2 ($Rep = 2$): $I = 6$ ngày.
     * Lần 3 trở đi: $I = \text{round}(I_{\text{prev}} \times EF)$.
   - **`easy`**: $Rep = Rep + 1$.
     * Lần 1 ($Rep = 1$): $I = 4$ ngày.
     * Lần 2 trở đi: $I = \max(2, \text{round}(I_{\text{prev}} \times EF \times 1.3))$.
3. **Thời điểm Đáo hạn**: $\text{nextReviewAt} = \text{now} + I \times 86.400.000\text{ ms}$.

### 3.4. Quy trình Trải nghiệm & Phím tắt
- **Mặt trước**: Câu hỏi gợi mở tư duy (ví dụ: *"Hypervisor Type 1 khác Type 2 ở điểm nào?"*).
- **Lật thẻ**: Nhấp vào khung thẻ hoặc bấm phím `Space`.
- **Đánh giá nhanh**: Bấm phím `1` (Quên), `2` (Khó), `3` (Nhớ), `4` (Dễ).
- **Cơ chế Tự động liên hoàn sang Phân hệ Cần ôn lại**: Khi học viên chọn `again` hoặc `hard`, server tự động gắn nhãn lỗi `FLASHCARD_AGAIN` hoặc `FLASHCARD_HARD` vào tiểu mục chứa thẻ đó và bật cờ `needsReview = true` trong Firestore.

---

## 4. Chức năng 3: Hệ thống Cần Ôn Lại (Review Items & Review Queue)

### 4.1. Mục tiêu & Ý nghĩa Nghiệp vụ
Đóng vai trò là "chiếc lưới an toàn" sư phạm (Remedial Safety Net), tự động phát hiện các lỗ hổng tri thức trong quá trình học và cung cấp hàng đợi ôn tập tập trung trước các bài thi trắc nghiệm.

### 4.2. Kiến trúc Tệp tin & Thành phần Tham gia
- **Nút Chuyển trạng thái**: [components/learning/ReviewToggle.js](file:///d:/TT%20HCM/components/learning/ReviewToggle.js)
- **Modal Hàng đợi**: [components/learning/ReviewQueue.js](file:///d:/TT%20HCM/components/learning/ReviewQueue.js)
- **Vị trí Hiển thị**:
  - Gắn tại thanh tiêu đề của từng tiểu mục trong [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js#L1275-L1285).
  - Nút **Cần ôn** kèm huy hiệu đếm số lượng bài trên Floating Bar tại [app/page.js](file:///d:/TT%20HCM/app/page.js#L2447-L2459).
- **HTTP Endpoints**:
  - `PUT /api/learning/review-items/[subsectionId]`
  - `DELETE /api/learning/review-items/[subsectionId]`
- **Database Collection**: Firestore `users/{uid}/reviewItems/{subjectId}__{subsectionId}`.

### 4.3. Cơ chế Kích hoạt Kép (Dual-Trigger Mechanism)
Một tiểu mục được đưa vào danh sách cần ôn từ 2 nguồn:
1. **Chủ động (Thủ công - Manual)**: Học viên tự bấm nút *"Đánh dấu ôn"* khi cảm thấy chưa hiểu bài (`manual = true`). Nút chuyển sang màu đỏ nhạt *"Cần ôn lại"*.
2. **Tự động (Hệ thống - System)**: Khi học viên đánh giá Flashcard của bài đó là *Quên* (`again`) hoặc *Khó* (`hard`), server tự động ghi nhận `systemReasons = ["FLASHCARD_AGAIN"]`. Giao diện hiển thị badge đỏ phụ *"1 lỗi"* bên cạnh nút ôn.

### 4.4. Quy tắc Giải trừ Cờ Thông minh (Smart Resolution Logic)
- Nếu học viên bấm gỡ thủ công (`DELETE /api/learning/review-items/...`), server chỉ đặt `manual = false`. Nếu bài học vẫn còn lý do hệ thống (`systemReasons.length > 0`), bài học **vẫn được giữ lại** trong danh sách cần ôn cho đến khi học viên ôn Flashcard đạt mức `good` hoặc `easy`.
- Trong modal **Danh sách Cần Ôn Tập**, mỗi tiểu mục hiển thị nguồn gốc lỗi và nút **"Học ngay"** giúp học viên mở ngay bài học cần đọc lại.

---

## 5. Chức năng 4: Hoàn thành Bài học & Bắt đáy Nội dung (Subsection Completion)

### 5.1. Mục tiêu & Ý nghĩa Nghiệp vụ
Bảo đảm học viên học tập nghiêm túc, ngăn ngừa việc click lướt trang đối phó. Hệ thống chỉ mở khóa nút xác nhận hoàn thành khi người học đã thực sự cuộn chuột qua toàn bộ nội dung của bài học.

### 5.2. Kiến trúc Tệp tin & Thành phần Tham gia
- **Giao diện Hành động**: [components/learning/SubsectionCompletion.js](file:///d:/TT%20HCM/components/learning/SubsectionCompletion.js)
- **Custom Hook Giám sát**: [hooks/useSubsectionCompletion.js](file:///d:/TT%20HCM/hooks/useSubsectionCompletion.js)
- **Vị trí Render**: Nằm ở đáy mỗi tiểu mục trong [components/ContentRenderer.js](file:///d:/TT%20HCM/components/ContentRenderer.js#L1376-L1389).
- **HTTP Endpoint**: `PUT /api/learning/subsections/[subsectionId]/completion`
- **Quy tắc Nghiệp vụ**: [lib/server/learning-rules.js](file:///d:/TT%20HCM/lib/server/learning-rules.js) (`isChapterCompleted`)
- **Database Collections**:
  - `users/{uid}/subsectionProgress/{subjectId}__{subsectionId}`
  - `users/{uid}/chapterProgress/{subjectId}__{chapterId}`.

### 5.3. Cơ chế Kỹ thuật Sentinel Scroll (`IntersectionObserver`)
- Một phần tử vô hình `<div ref={sentinelRef} className="h-4 w-full pointer-events-none opacity-0" />` được cắm ở điểm kết thúc của bài đọc.
- Hook `useSubsectionCompletion` khởi tạo một `IntersectionObserver` theo dõi phần tử này (`rootMargin: "0px 0px 50px 0px"`, `threshold: 0.1`).
- Khi học viên cuộn trang đến sát đáy bài học, observer kích hoạt sự kiện giao cắt và bật cờ `reachedEnd = true`. Khi chuyển tiểu mục, `reachedEnd` tự động reset về `false`.

### 5.4. Ba Trạng thái Trực quan của Giao diện
1. **Chưa cuộn tới cuối**: Khung xám nhạt (`bg-stone-50`), icon `ArrowDownCircle`. Nút bấm bị vô hiệu hóa (`disabled`). Hướng dẫn: *"Vui lòng cuộn xem hết toàn bộ nội dung bài học để mở khóa nút hoàn thành."*
2. **Đã cuộn tới cuối**: Khung vàng hổ phách (`bg-amber-50/70`), icon `Sparkles` nhấp nháy chuyển động. Nút bấm sáng rực *"Hoàn Thành Bài Học"* kèm hiệu ứng sẵn sàng.
3. **Đã hoàn thành**: Khung xanh ngọc bích (`bg-emerald-50/70`), icon `CheckCircle2`. Nút đổi thành *"Đã Hoàn Thành"* và hiển thị mốc thời gian hoàn tất chính xác.

### 5.5. Bảo mật 2 Tầng & Giao dịch Firestore Transaction
- **Client Guard**: Nút bấm bị vô hiệu hóa khi `!reachedEnd`.
- **Server Guard**: Endpoint `PUT /api/learning/subsections/.../completion` và [lib/server/learning-repository.js](file:///d:/TT%20HCM/lib/server/learning-repository.js) kiểm tra nghiêm ngặt:
  ```javascript
  if (reachedEnd !== true) {
    throw new ApiError(400, "SCROLL_END_REQUIRED", "Bạn cần đọc đến cuối tiểu mục trước.");
  }
  ```
  Mọi can thiệp bằng script gọi API trực tiếp đều bị server từ chối ngay lập tức.
- **Tính toán Hoàn thành Chương (Chapter Progress)**:
  Server chạy transaction atomic cập nhật tiểu mục, đếm tổng số tiểu mục đã hoàn thành trong chương và gọi hàm `isChapterCompleted`. Do môn Cloud Computing hiện chưa yêu cầu quiz tính điểm (`chapterRequiresQuiz === false`), nên **ngay khi học viên hoàn thành tiểu mục cuối cùng của chương, chương đó được tự động công nhận là ĐÃ HOÀN THÀNH (`completed: true`)**.
- **Cập nhật Giao diện Tức thì (Optimistic UI)**:
  State trung tâm `useLearningState` cập nhật mảng `subsections` và `chapters` ngay lập tức, giúp Sidebar đổi trạng thái bài học sang màu xanh hoàn thành mà không phải tải lại trang.

---

## 6. Sơ đồ Ma trận Liên kết giữa 4 Chức năng

```mermaid
flowchart TD
    A[Bắt đầu học Môn Điện toán Đám mây] --> B[Đọc lý thuyết & Xem Visualizers]
    
    %% Tra cứu
    B -. Gặp thuật ngữ lạ (IaaS, SSO, NIST...) .-> C[1. Tra cứu Tìm kiếm: Ctrl + K]
    C -. Nhấn vào kết quả phù hợp .-> B
    
    %% Bắt đáy & Hoàn thành
    B --> D[Cuộn xuống đáy tiểu mục]
    D --> E[Sentinel kích hoạt: reachedEnd = true]
    E --> F[4. Bấm 'Hoàn Thành Bài Học']
    F --> G[Server Transaction: Ghi nhận Tiến độ Tiểu mục & Chương]
    
    %% Ôn tập Flashcard
    G --> H[2. Mở Bàn học Flashcard SM-2]
    H --> I{Tự đánh giá độ nhớ}
    
    I -- Rating: Again / Hard --> J[SM-2 giảm EF, lên lịch ôn sau 1 ngày]
    J --> K[3. Tự động gắn cờ Cần Ôn Lại: systemReasons]
    
    I -- Rating: Good / Easy --> L[SM-2 tăng khoảng cách ngày ôn]
    L --> M[Hệ thống tự động gỡ cờ Cần Ôn Lại]
    
    %% Hàng đợi Cần ôn
    K --> N[Hàng đợi Cần Ôn Tập: Review Queue]
    N --> O[Học viên bấm 'Học ngay']
    O --> B
```

### Bảng Ma trận Tương tác:
| Chức năng gốc | Tác động sang Chức năng khác | Điểm kết nối mã nguồn |
| :--- | :--- | :--- |
| **Tìm kiếm (Search)** | Điều hướng người học đến đúng **Tiểu mục** để thực hiện **Hoàn thành bài học**. | `CloudSearchPanel.js` ➔ `onSelectSubsection(term.subsectionId)` |
| **Flashcard (SM-2)** | Khi chấm `again` hoặc `hard`, tự động kích hoạt **Cần ôn lại** cho tiểu mục chứa thẻ đó. | `learning-repository.js` ➔ `reviewFlashcard` thêm `FLASHCARD_AGAIN/HARD` |
| **Cần ôn lại (Review)** | Cung cấp danh sách các bài học yếu kém kèm nút **"Học ngay"** đưa người học quay lại đọc bài. | `ReviewQueue.js` ➔ `onSelectSubsection(item.subsectionId)` |
| **Hoàn thành bài (Completion)** | Cập nhật dữ liệu vào `getLearningState`, cung cấp cơ sở cho Admin Dashboard và mở khóa tiến độ chương. | `useLearningState.js` ➔ `completeSubsection` cập nhật state tập trung |

---

## 7. Tổng kết Đánh giá Kỹ thuật

1. **Kiến trúc Vững chắc**: Phân hệ Cloud Computing được xây dựng chuẩn mực theo mô hình Adapter Pattern, bảo vệ hoàn toàn 100% dữ liệu gốc trong `data/`, phân định rõ ràng giữa Client Components (`use client`) và Server Route Handlers / Repositories.
2. **Bảo mật & Toàn vẹn**: Không tin tưởng dữ liệu client; mọi cập nhật tiến độ (hoàn thành bài, chấm thẻ flashcard, đánh dấu cần ôn) đều được bảo vệ bởi phiên làm việc HttpOnly Cookie và giao dịch Firestore Transaction.
3. **Giá trị Sư phạm Cao**: Sự liên kết khép kín giữa 4 chức năng giúp học viên chủ động nắm bắt toàn bộ 64 tiểu mục và 18 thuật ngữ phức tạp của môn Điện toán đám mây một cách khoa học, bền vững.
