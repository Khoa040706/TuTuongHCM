/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG IV: RÀNG BUỘC TOÀN VẸN (INTEGRITY CONSTRAINTS)
   BỘ ĐỀ SỐ 2 — 40 CÂU HỎI HỌC THUẬT CHUẨN MỰC
   MÃ BỘ ĐỀ: db-c4-d2-001 ĐẾN db-c4-d2-040
   TỶ LỆ ĐỘ KHÓ: 12 DỄ (30%) - 16 TRUNG BÌNH (40%) - 12 KHÓ/BẪY (30%)
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN 10A-10B-10C-10D
   ============================================================ */

export const questionsDbCh4Part2 = [
  {
    "id": "db-c4-d2-001",
    "question": "Mục đích tối thượng của việc thiết lập các Ràng buộc toàn vẹn (RBTV) trong cơ sở dữ liệu là gì?",
    "options": [
      "Tự động tăng tốc độ hiển thị giao diện đồ họa trên màn hình máy trạm",
      "Bảo đảm tính đúng đắn, nhất quán và độ tin cậy của dữ liệu trong CSDL",
      "Giảm thiểu tối đa dung lượng các tệp tin hình ảnh đính kèm trong bảng",
      "Ngăn chặn người dùng đăng xuất khỏi hệ điều hành máy chủ bất ngờ"
    ],
    "answer": 1,
    "explanation": "Mục đích của RBTV là đảm bảo tính đúng đắn, tính nhất quán (consistency) và độ tin cậy phản ánh đúng thực tế của dữ liệu trong CSDL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-002",
    "question": "Trong 3 yếu tố của một RBTV, yếu tố \"Điều kiện\" (Condition) KHÔNG THỂ được biểu diễn bằng hình thức nào sau đây?",
    "options": [
      "Hệ thống các biểu thức toán học của Logic vị từ bậc nhất với lượng từ",
      "Ngôn ngữ tự nhiên mô tả các quy tắc quản lý nghiệp vụ của thế giới thực",
      "Mã nhị phân máy tính thuần túy chỉ gồm các chuỗi ký tự 0 và 1 rời rạc",
      "Ngôn ngữ đại số quan hệ hoặc ngôn ngữ thao tác dữ liệu tập hợp chuẩn"
    ],
    "answer": 2,
    "explanation": "Giáo trình quy định điều kiện có thể biểu diễn bằng: Ngôn ngữ tự nhiên, Thuật giải, Đại số tập hợp / ĐSQH, Phụ thuộc hàm, hoặc Logic vị từ. Mã nhị phân 0-1 không phải là hình thức biểu diễn RBTV.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-003",
    "question": "Trong Bảng Tầm Ảnh Hưởng của một RBTV, ký hiệu dấu cộng (\"+\") thể hiện hành động nào của hệ quản trị CSDL?",
    "options": [
      "Bắt buộc người dùng phải nhập mật khẩu xác nhận cấp cao trước khi thao tác",
      "Cho phép câu lệnh thực thi ngay lập tức mà không cần bất kỳ sự kiểm tra nào",
      "Hệ thống tự động cộng thêm một đơn vị giá trị vào thuộc tính khóa của bảng",
      "Cần phải kiểm tra RBTV để kịp thời phát hiện và ngăn chặn nếu có vi phạm"
    ],
    "answer": 3,
    "explanation": "Ký hiệu \"+\" có nghĩa là cần phải kiểm tra: RDBMS sẽ kích hoạt thủ tục kiểm tra hoặc Trigger để chặn thao tác nếu dữ liệu vi phạm ràng buộc.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-004",
    "question": "Điền vào chỗ trống: \"Dấu -(+) hoặc +(*) trong Bảng Tầm Ảnh Hưởng biểu thị việc kiểm tra ...(1)..., nghĩa là chỉ kiểm tra khi thuộc tính được cập nhật có ...(2)... biểu thức của RBTV.\"",
    "options": [
      "có điều kiện / tham gia trực tiếp vào trong",
      "bắt buộc tuyệt đối / bị xóa bỏ hoàn toàn khỏi",
      "tạm thời bị hoãn / giá trị mặc định trùng với",
      "ngẫu nhiên định kỳ / kiểu dữ liệu số nguyên trong"
    ],
    "answer": 0,
    "explanation": "Ký hiệu +(*) hoặc -(*) chỉ định việc kiểm tra có điều kiện: chỉ kiểm tra khi thuộc tính bị sửa đổi có liên quan trực tiếp đến biểu thức ràng buộc.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-005",
    "question": "Khi phân loại theo Bối cảnh (Context), toàn bộ các ràng buộc toàn vẹn được chia làm hai nhánh cơ bản nào?",
    "options": [
      "RBTV lưu trên ổ đĩa cứng vật lý và RBTV xử lý tạm thời trên bộ nhớ đệm",
      "RBTV có bối cảnh là một quan hệ và RBTV có bối cảnh là nhiều quan hệ",
      "RBTV dành cho người dùng cuối và RBTV dành riêng cho quản trị viên DBA",
      "RBTV cho dữ liệu kiểu số học và RBTV cho dữ liệu kiểu chuỗi ký tự dài"
    ],
    "answer": 1,
    "explanation": "Giáo trình phân chia RBTV theo bối cảnh thành 2 nhóm lớn: 1) Bối cảnh là một quan hệ (Single-relation); 2) Bối cảnh là nhiều quan hệ (Multi-relation).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-006",
    "question": "Cho các thao tác trên cơ sở dữ liệu: Thao tác Thêm (Insert), Thao tác Xóa (Delete) và Thao tác Sửa (Update). Thao tác nào có thể coi là tổ hợp của việc Xóa dòng cũ rồi Thêm dòng mới?",
    "options": [
      "Thao tác Xóa (Delete) bản chất là thay thế dòng dữ liệu bằng một chuỗi rỗng",
      "Thao tác Thêm (Insert) bản chất là xóa bỏ dữ liệu rỗng và ghi đè dữ liệu mới",
      "Thao tác Sửa (Update) bản chất là xóa bỏ trạng thái cũ và thêm trạng thái mới",
      "Cả ba thao tác trên đều độc lập hoàn toàn và không có mối liên hệ logic nào"
    ],
    "answer": 2,
    "explanation": "Về mặt lý thuyết và trong cỗ máy RDBMS (Trigger inserted / deleted): Thao tác Sửa (Update) một dòng dữ liệu tương đương với việc Xóa dòng dữ liệu cũ và Thêm dòng dữ liệu mới.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-007",
    "question": "Cho Bảng Tầm Ảnh Hưởng của một ràng buộc toàn vẹn bất kỳ: Nếu tại một ô mang dấu trừ (\"-\"), lợi ích kỹ thuật lớn nhất đối với hệ thống là gì?",
    "options": [
      "Cho phép người dùng thực hiện cập nhật mà không cần đăng nhập tài khoản",
      "Tự động tăng dung lượng bộ nhớ RAM thực thi của máy chủ lên gấp hai lần",
      "Ngăn chặn hoàn toàn hiện tượng nghẽn mạng xảy ra trên đường truyền nội bộ",
      "Tiết kiệm tài nguyên xử lý và chi phí truy xuất đĩa (I/O) cho máy chủ CSDL"
    ],
    "answer": 3,
    "explanation": "Xác định chính xác các ô mang dấu trừ (-) giúp RDBMS bỏ qua kiểm tra, tránh các truy vấn kiểm tra dư thừa, tiết kiệm tối đa tài nguyên CPU và chi phí I/O đọc ghi đĩa.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-008",
    "question": "Xét Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác THÊM (Insert) một dòng mới vào bảng cha R1 LUÔN LUÔN mang dấu trừ (\"-\")?",
    "options": [
      "Vì thêm một dòng cha mới chỉ làm phong phú nguồn tham chiếu chứ không gây lỗi",
      "Vì hệ quản trị cơ sở dữ liệu tự động sao chép dòng cha mới sang tất cả bảng con",
      "Vì thao tác thêm vào bảng cha luôn luôn bị vô hiệu hóa nếu bảng con đang mở",
      "Vì khóa ngoại chỉ kiểm tra các thao tác xóa và không bao giờ kiểm tra thao tác thêm"
    ],
    "answer": 0,
    "explanation": "Ràng buộc khóa ngoại đòi hỏi: Giá trị khóa ngoại ở bảng con phải tồn tại ở bảng cha. Khi THÊM một dòng mới vào bảng cha (R1), tập giá trị hợp lệ ở bảng cha mở rộng thêm, hoàn toàn không thể làm bất kỳ dòng nào ở bảng con bị vi phạm (dấu -).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm thao tác Thêm ở bảng con (dấu +) với thao tác Thêm ở bảng cha (dấu -).",
      "trickWord": "Bẫy thao tác Thêm ở bảng cha trong ràng buộc Khóa ngoại (Insert on parent table in FK)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1",
      "tip": "Khóa ngoại: Bảng cha THÊM mang dấu TRỪ (-)! (Bảng con THÊM mới mang dấu CỘNG +)."
    }
  },
  {
    "id": "db-c4-d2-009",
    "question": "Trong Bảng Tầm Ảnh Hưởng của Ràng buộc khóa ngoại (R2 tham chiếu R1): Vì sao thao tác XÓA (Delete) ở bảng con R2 LUÔN LUÔN mang dấu trừ (\"-\")?",
    "options": [
      "Vì bảng con không có quyền lưu trữ khóa chính nên được phép xóa tự do tùy ý",
      "Vì xóa bớt một dòng con thì không thể làm xuất hiện khóa ngoại không tồn tại",
      "Vì khi xóa bảng con thì hệ thống tự động xóa toàn bộ các dòng ở bảng cha theo",
      "Vì thao tác xóa ở bảng con luôn luôn kích hoạt cơ chế sao lưu tự động khẩn cấp"
    ],
    "answer": 1,
    "explanation": "Khóa ngoại cấm dòng con trỏ về hư vô. Khi XÓA bớt một dòng ở bảng con (R2), dòng đó biến mất, không còn tham chiếu nào cần kiểm tra, các dòng con còn lại vẫn hợp lệ. Do đó xóa ở bảng con TUYỆT ĐỐI AN TOÀN (dấu -).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ bảng con bị ràng buộc nên khi Xóa cũng phải kiểm tra (+).",
      "trickWord": "Bẫy thao tác Xóa ở bảng con trong ràng buộc Khóa ngoại (Delete on child table in FK)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1",
      "tip": "Khóa ngoại: Bảng con XÓA mang dấu TRỪ (-)! (Bảng cha XÓA mới mang dấu CỘNG +)."
    }
  },
  {
    "id": "db-c4-d2-010",
    "question": "Tình huống: Cho ràng buộc C: \"Trong bảng KET_QUA, điểm thi Diem phải nằm trong đoạn từ 0 đến 10\". Bảng Tầm Ảnh Hưởng của ràng buộc này đối với thao tác SỬA (Update) được xác định như thế nào?",
    "options": [
      "Mang dấu trừ (-) tuyệt đối vì sửa điểm không làm thay đổi mã số của sinh viên",
      "Mang dấu cộng (+) đối với tất cả mọi thuộc tính bất kể cột nào bị sửa đổi",
      "Mang dấu +(Diem) nghĩa là chỉ kiểm tra khi giá trị cột Diem bị thay đổi",
      "Hệ thống tự động từ chối mọi thao tác sửa điểm sau khi đã nhập vào bảng"
    ],
    "answer": 2,
    "explanation": "Ràng buộc chỉ kiểm tra giá trị của cột Diem. Nếu sửa MaSV hay MaMH mà không sửa Diem thì không thể làm điểm bị sai miền giá trị. Do đó thao tác Sửa mang dấu có điều kiện +(Diem).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay ghi dấu (+) chung chung mà không chỉ định thuộc tính điều kiện +(Diem).",
      "trickWord": "Bẫy ký hiệu kiểm tra có điều kiện khi sửa thuộc tính tham gia ràng buộc",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục III.1 & V.1",
      "tip": "Sửa thuộc tính: Phải ghi rõ +(ThuộcTính) để hệ thống chỉ kiểm tra khi cột đó bị sửa!"
    }
  },
  {
    "id": "db-c4-d2-011",
    "question": "Loại Ràng buộc toàn vẹn nào liên quan trực tiếp đến tập các giá trị hợp lệ mà một thuộc tính có thể nhận được?",
    "options": [
      "Ràng buộc toàn vẹn về phụ thuộc tồn tại giữa hai quan hệ độc lập",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ dữ liệu",
      "Ràng buộc toàn vẹn liên bộ giữa các dòng dữ liệu khác nhau trong bảng",
      "Ràng buộc toàn vẹn về miền giá trị (Domain integrity constraint)"
    ],
    "answer": 3,
    "explanation": "RBTV về miền giá trị quy định các giá trị mà một thuộc tính A có thể nhận phải thuộc vào miền xác định dom(A).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-012",
    "question": "Trong bảng NHANVIEN(maNV, tenNV, luong, thuong), quy tắc: \"Tiền thưởng không được vượt quá 50% mức lương\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính (Inter-attribute constraint)",
      "Ràng buộc toàn vẹn về miền giá trị của từng cột số học riêng biệt",
      "Ràng buộc toàn vẹn liên bộ giữa các nhân viên trong cùng một phòng",
      "Ràng buộc toàn vẹn do chu trình đồ thị của các quan hệ tổ chức"
    ],
    "answer": 0,
    "explanation": "Quy tắc thuong <= 0.5 * luong là sự đối sánh giữa 2 thuộc tính trong CÙNG MỘT DÒNG của một nhân viên, do đó là RBTV liên thuộc tính.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-013",
    "question": "Ràng buộc quy định: \"Tổng số cán bộ của một khoa không được vượt quá 50 người\" trong bảng KHOA(makhoa, tenkhoa, soCB) thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính giữa tên khoa và số cán bộ",
      "Ràng buộc toàn vẹn về miền giá trị của thuộc tính số cán bộ soCB",
      "Ràng buộc toàn vẹn về phụ thuộc tồn tại đối với danh mục cán bộ",
      "Ràng buộc toàn vẹn do chu trình đồ thị của các đơn vị đào tạo"
    ],
    "answer": 1,
    "explanation": "Ràng buộc soCB <= 50 là điều kiện áp đặt trực tiếp lên miền giá trị hợp lệ của thuộc tính soCB (thuộc tập số nguyên từ 1 đến 50), do đó thuộc loại RBTV về miền giá trị.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-014",
    "question": "Khác biệt căn bản nhất giữa RBTV liên thuộc tính và RBTV liên bộ trong cùng một quan hệ là gì?",
    "options": [
      "Liên thuộc tính nằm trên nhiều bảng, liên bộ chỉ nằm trên một bảng",
      "Liên thuộc tính chỉ áp dụng cho số, liên bộ chỉ áp dụng cho chuỗi",
      "Liên thuộc tính xét trong cùng 1 bộ, liên bộ xét giữa các bộ khác nhau",
      "Liên thuộc tính không cần kiểm tra khi Thêm, liên bộ luôn kiểm tra"
    ],
    "answer": 2,
    "explanation": "Ranh giới cốt lõi: RBTV liên thuộc tính thể hiện mối liên hệ giữa các cột trong CÙNG MỘT BỘ (dòng); còn RBTV liên bộ thể hiện sự ràng buộc giữa CÁC BỘ KHÁC NHAU trong bảng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-015",
    "question": "Trong bảng MON_HOC(maMH, tenMH, soTietLT, soTietTH), quy tắc: \"soTietLT + soTietTH = 45\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn về thuộc tính tổng hợp từ các bảng kết quả thi",
      "Ràng buộc toàn vẹn về miền giá trị của thuộc tính số tiết lý thuyết",
      "Ràng buộc toàn vẹn liên bộ giữa các môn học khác nhau trong chương trình",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ MON_HOC"
    ],
    "answer": 3,
    "explanation": "Điều kiện soTietLT + soTietTH = 45 liên kết 2 thuộc tính trong cùng một dòng môn học, nên là RBTV liên thuộc tính.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-016",
    "question": "Phát biểu nào sau đây là NHẬN ĐỊNH SAI khi nói về Ràng buộc toàn vẹn miền giá trị?",
    "options": [
      "RBTV miền giá trị luôn đòi hỏi phải có sự so sánh giữa hai cột trong bảng",
      "RBTV miền giá trị chỉ kiểm tra tính hợp lệ của từng thuộc tính độc lập",
      "Kiểm tra kiểu dữ liệu số nguyên từ 0 đến 10 là một ví dụ về miền giá trị",
      "Trong Bảng Tầm Ảnh Hưởng, thao tác Xóa một dòng luôn mang dấu trừ (-)"
    ],
    "answer": 0,
    "explanation": "Nhận định A sai vì RBTV miền giá trị chỉ áp dụng trên từng thuộc tính độc lập. Nếu so sánh giữa hai cột trong bảng thì đó là RBTV liên thuộc tính!",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-017",
    "question": "Cho bảng HOADON(soHD, ngayHD, ngayGiao, trigia). Quy tắc nào sau đây là một ví dụ chuẩn về RBTV liên thuộc tính?",
    "options": [
      "Điều kiện kiểm tra mã hóa đơn soHD không được trùng lặp giữa các dòng",
      "Điều kiện logic trong cùng một hóa đơn: ngayGiao phải sau hoặc bằng ngayHD",
      "Điều kiện trị giá hóa đơn trigia bắt buộc phải là một số thực dương lớn hơn 0",
      "Mỗi số hóa đơn soHD trong bảng phải tồn tại trong danh mục đơn đặt hàng"
    ],
    "answer": 1,
    "explanation": "Quy tắc ngayGiao >= ngayHD so sánh 2 thuộc tính trong cùng một hóa đơn, đây là ví dụ chuẩn về RBTV liên thuộc tính. (soHD không trùng là liên bộ; trigia > 0 là miền giá trị; tồn tại trong đặt hàng là khóa ngoại).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-018",
    "question": "Tình huống: Cho quan hệ NHANVIEN(maNV, tenNV, luong, tamUng, conLai) với quy tắc: conLai = luong − tamUng. Về mặt tối ưu thiết kế CSDL, giải pháp chuẩn mực là gì?",
    "options": [
      "Nhân đôi thuộc tính conLai thành hai cột độc lập để tăng tốc độ truy vấn",
      "Bắt buộc giữ lại thuộc tính conLai và tạo thêm bảng phụ để lưu trữ lịch sử",
      "Loại bỏ thuộc tính conLai khỏi bảng vì có thể tính được từ luong và tamUng",
      "Chuyển đổi kiểu dữ liệu của cả ba thuộc tính sang kiểu chuỗi ký tự cố định"
    ],
    "answer": 2,
    "explanation": "Giáo trình Mục V.2 khẳng định: Nếu thuộc tính conLai tính toán được từ các thuộc tính khác trong cùng bảng (luong - tamUng), ta nên LOẠI BỎ thuộc tính này khỏi lược đồ để tránh dư thừa và dị thường khi cập nhật.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ thuộc tính nào có trong nghiệp vụ thì đều phải tạo thành cột trong bảng.",
      "trickWord": "Bẫy loại bỏ thuộc tính dư thừa có thể tính toán được trong cùng một bộ",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2",
      "tip": "Thuộc tính tính được từ các cột CÙNG BẢNG ➔ Loại bỏ khỏi bảng để tránh dư thừa (Normal form design)!"
    }
  },
  {
    "id": "db-c4-d2-019",
    "question": "Xét quy tắc: \"Trong cùng một phòng ban, không có hai nhân viên nào có cùng họ tên\". Đây là loại RBTV nào và biểu diễn logic vị từ như thế nào?",
    "options": [
      "RBTV khóa ngoại: NHANVIEN.Phong tham chiếu đến bảng danh mục họ tên nhân sự",
      "RBTV liên thuộc tính: ∀ t ∈ NHANVIEN: t.Phong ≠ t.Hoten trong cùng một dòng",
      "RBTV miền giá trị: ∀ t ∈ NHANVIEN: t.Hoten ∈ dom(Phong) với mọi nhân viên",
      "RBTV liên bộ: ∀ t1, t2 ∈ NHANVIEN: (t1.Phong = t2.Phong ∧ t1.Hoten = t2.Hoten) ⇒ t1 = t2"
    ],
    "answer": 3,
    "explanation": "Quy tắc cấm 2 người trong cùng phòng có trùng tên là sự so sánh giữa CÁC BỘ KHÁC NHAU trong cùng bảng NHANVIEN, do đó là RBTV liên bộ. Biểu thức: Nếu cùng phòng và cùng tên thì phải là cùng 1 người (t1 = t2).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thấy có cả 2 thuộc tính Phong và Hoten nên vội vã chọn liên thuộc tính.",
      "trickWord": "Bẫy nhầm lẫn giữa liên bộ nhiều thuộc tính và liên thuộc tính trong dòng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.3",
      "tip": "So sánh giữa 2 BỘ KHÁC NHAU (t1 và t2) ➔ 100% là LIÊN BỘ (dù biểu thức dùng 1 hay nhiều cột)!"
    }
  },
  {
    "id": "db-c4-d2-020",
    "question": "Trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính (Ví dụ: ngayHD ≤ ngayXuat trong HOADON): Thao tác XÓA (Delete) một hóa đơn mang dấu gì và vì sao?",
    "options": [
      "Mang dấu trừ (-) vì xóa nguyên một dòng thì không thể làm vi phạm quy tắc ngày",
      "Mang dấu cộng (+) vì khi xóa một hóa đơn thì các ngày xuất kho khác bị mồ côi",
      "Mang dấu +(ngayHD) vì hệ thống bắt buộc phải kiểm tra ngày lập trước khi xóa",
      "Mang dấu cộng (+) nếu hóa đơn đó có trị giá thanh toán vượt mức mười triệu"
    ],
    "answer": 0,
    "explanation": "RBTV liên thuộc tính chỉ kiểm tra mối quan hệ nội tại giữa các cột trong CÙNG MỘT DÒNG. Khi xóa toàn bộ dòng đó đi, dòng đó không còn tồn tại nên không thể vi phạm quy tắc. Do đó thao tác Xóa LUÔN MANG DẤU TRỪ (-).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bảng nghiệp vụ quan trọng thì xóa hóa đơn phải kiểm tra (+).",
      "trickWord": "Bẫy thao tác Xóa trong Bảng Tầm Ảnh Hưởng của RBTV liên thuộc tính",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.2",
      "tip": "RBTV liên thuộc tính (trong cùng dòng): XÓA dòng luôn luôn mang dấu TRỪ (-)! Chắc chắn không thể vi phạm!"
    }
  },
  {
    "id": "db-c4-d2-021",
    "question": "Ràng buộc toàn vẹn có bối cảnh là NHIỀU quan hệ bao gồm những phân loại chính nào theo giáo trình?",
    "options": [
      "Miền giá trị mở rộng, Liên thuộc tính nội bộ, Phụ thuộc hàm chuẩn và Độc lập dữ liệu logic phân tán",
      "Phụ thuộc tồn tại, Liên bộ liên quan hệ, Liên thuộc tính liên quan hệ, Thuộc tính tổng hợp và Chu trình",
      "Mã hóa mật khẩu người dùng, Phân quyền bảng dữ liệu, Sao lưu dự phòng và Nhật ký giao tác toàn hệ thống",
      "Bảo mật tầng mạng, Kiểm tra phần cứng máy chủ, Giải phóng bộ nhớ đệm và Đồng bộ hóa theo thời gian thực"
    ],
    "answer": 1,
    "explanation": "Giáo trình Mục VII (Sơ đồ tổng hợp): Bối cảnh nhiều quan hệ gồm 5 loại: 1) Phụ thuộc tồn tại; 2) Liên bộ liên quan hệ; 3) Liên thuộc tính liên quan hệ; 4) Thuộc tính tổng hợp; 5) Do chu trình trong đồ thị lược đồ.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-022",
    "question": "Trong CSDL HSSINHVIEN, điều kiện: \"Mỗi sinh viên trong bảng SINH_VIEN phải thuộc về một khoa có thật trong bảng KHOA\" là loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn liên thuộc tính giữa họ tên sinh viên và tên khoa",
      "Ràng buộc toàn vẹn về miền giá trị của mã khoa trong bảng sinh viên",
      "Ràng buộc toàn vẹn về phụ thuộc tồn tại (Ràng buộc khóa ngoại)",
      "Ràng buộc toàn vẹn do chu trình đồ thị của các khoa chuyên môn"
    ],
    "answer": 2,
    "explanation": "Sự tồn tại của sinh viên phụ thuộc vào sự tồn tại của khoa (SINH_VIEN.maKhoa tham chiếu KHOA.makhoa), đây là định nghĩa chuẩn của RBTV về phụ thuộc tồn tại (khóa ngoại).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-023",
    "question": "Dấu hiệu toán học thứ hai (Dấu hiệu 2) nhận biết phụ thuộc tồn tại của quan hệ R2 vào quan hệ R1 trong giáo trình là gì?",
    "options": [
      "Hai quan hệ R1 và R2 hoàn toàn không có bất kỳ thuộc tính chung nào",
      "Số lượng thuộc tính của quan hệ R2 bằng đúng số lượng thuộc tính quan hệ R1",
      "Tập khóa chính của R2 là tập con thực sự của tập khóa chính của quan hệ R1",
      "Khóa K1 của R1 xuất hiện như một thuộc tính thông thường trong R2 (K1 ⊆ R2)"
    ],
    "answer": 3,
    "explanation": "Dấu hiệu (2) trong Giáo trình Mục VI.1: Nếu K1 là khóa của R1 và K1 ⊆ R2 (K1 xuất hiện như thuộc tính thường trong R2) thì có phụ thuộc tồn tại của R2 vào R1 (K1 là khóa ngoại của R2).",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-024",
    "question": "Trong CSDL QLHANGHOA, quy tắc: \"Số tiền công nợ (congNo) của khách hàng bằng tổng tiền hóa đơn bán trừ tổng tiền phiếu thu\" thuộc loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn về thuộc tính tổng hợp (Aggregate / derived attribute)",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng một quan hệ KHACH",
      "Ràng buộc toàn vẹn về miền giá trị của số tiền công nợ khách hàng",
      "Ràng buộc toàn vẹn do chu trình đồ thị của các đơn đặt hàng"
    ],
    "answer": 0,
    "explanation": "Cột congNo nằm ở bảng KHACH nhưng được tính toán từ các thuộc tính của 2 bảng khác là HOA_DON và PHIEU_THU, nên thuộc loại RBTV về thuộc tính tổng hợp.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-025",
    "question": "Điền vào chỗ trống: \"Trong đồ thị lược đồ CSDL, nếu tồn tại một chu trình giữa các bảng dữ liệu thì giữa chúng bắt buộc phải có một ...(1)... để điều phối và kiểm soát tính ...(2)... của dữ liệu.\"",
    "options": [
      "chỉ mục phân cụm độc quyền / bảo mật đa tầng cho máy chủ",
      "ràng buộc toàn vẹn chu trình / nhất quán ngữ nghĩa nghiệp vụ",
      "bản sao lưu dữ liệu tạm / toàn vẹn bộ nhớ đệm hệ thống",
      "khóa chính tự tăng liên tục / độc lập vật lý của các bảng"
    ],
    "answer": 1,
    "explanation": "Khi đồ thị CSDL xuất hiện chu trình (cycle), giữa các bảng này bắt buộc phải có một ràng buộc toàn vẹn chu trình để đảm bảo tính nhất quán ngữ nghĩa của dữ liệu.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-026",
    "question": "Cho các nhận định sau về RBTV phụ thuộc tồn tại (Khóa ngoại):\n(I) Khóa ngoại liên kết hai quan hệ dựa trên sự phụ thuộc tồn tại.\n(II) Bảng con tham chiếu khóa ngoại không được phép chứa giá trị NULL nếu có NOT NULL.\n(III) Bảng con có thể chứa giá trị khóa ngoại mà bảng cha hoàn toàn chưa có.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có duy nhất nhận định (III) là nhận định đúng đắn theo nguyên lý tham chiếu",
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định hoàn toàn sai",
      "Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng"
    ],
    "answer": 2,
    "explanation": "Nhận định (I) và (II) đúng. Nhận định (III) sai vì bản chất của khóa ngoại là cấm bảng con chứa giá trị không tồn tại ở bảng cha.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-027",
    "question": "Trong CSDL QLHANGHOA, quy tắc: \"Một đơn đặt hàng chỉ được giải quyết trong một hóa đơn duy nhất\". Đây là loại RBTV nào?",
    "options": [
      "Ràng buộc toàn vẹn về thuộc tính tổng hợp của phiếu thanh toán",
      "Ràng buộc toàn vẹn về miền giá trị của mã số đơn đặt hàng soDH",
      "Ràng buộc toàn vẹn liên thuộc tính trong cùng bảng đơn đặt hàng",
      "Ràng buộc toàn vẹn liên bộ, liên quan hệ (giữa DAT_HANG và HOA_DON)"
    ],
    "answer": 3,
    "explanation": "Quy tắc này ràng buộc giữa các bộ của DAT_HANG và HOA_DON (cấm 1 soDH xuất hiện trên 2 dòng HOA_DON khác nhau), do đó thuộc loại RBTV liên bộ, liên quan hệ.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-028",
    "question": "Xét chu trình đồ thị giữa 3 bảng: DAT_HANG - HOA_DON - CTIET_HD. Nếu một công ty áp dụng chính sách: \"Mỗi hóa đơn phải giao đầy đủ 100% tất cả mặt hàng khách đã đặt\", thì hậu quả thực tế nào có thể xảy ra?",
    "options": [
      "Hóa đơn không thể xuất được nếu kho hàng bị tạm hết dù chỉ một mặt hàng duy nhất",
      "Toàn bộ dữ liệu của bảng đơn đặt hàng tự động bị chuyển sang trạng thái đã hủy",
      "Hệ thống tự động mua hàng từ nhà cung cấp bên ngoài để bù đắp vào kho hàng",
      "Không có hậu quả nào vì mọi hệ thống thương mại đều bắt buộc phải áp dụng chính sách này"
    ],
    "answer": 0,
    "explanation": "Chính sách (1) đòi hỏi phải giao đủ 100% mặt hàng trong đơn. Nếu kho thiếu 1 mặt hàng thì không thể xuất hóa đơn cho các mặt hàng còn lại, gây ách tắc giao hàng trong thực tế. Vì vậy CSDL QLHANGHOA chọn chính sách (2) linh hoạt hơn: không bắt buộc đủ nhưng không giao vượt.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ chính sách giao đủ 100% luôn là tối ưu nhất mà không thấy nhược điểm thực tế.",
      "trickWord": "Bẫy phân tích ưu nhược điểm của 3 chính sách chu trình giao hàng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.3",
      "tip": "Chính sách 1 (Giao đủ 100%): Thiếu 1 món là KẸT CẢ ĐƠN. Chính sách 2 (Không giao vượt): Thực tế và tối ưu nhất!"
    }
  },
  {
    "id": "db-c4-d2-029",
    "question": "Tình huống: Bảng KHACH có thuộc tính congNo tính từ HOA_DON và PHIEU_THU. Khi thực hiện XÓA một khách hàng ra khỏi bảng KHACH, Bảng Tầm Ảnh Hưởng quy định dấu gì?",
    "options": [
      "Mang dấu trừ (-) tuyệt đối vì xóa khách hàng thì công nợ tự động biến mất theo",
      "Mang dấu cộng (+) vì phải kiểm tra khách hàng đó đã thanh toán hết nợ (congNo = 0) chưa",
      "Mang dấu trừ (-) vì bảng KHACH là bảng chứa thuộc tính chứ không phải bảng nguồn",
      "Hệ thống tự động cấm xóa khách hàng trong mọi hoàn cảnh kể cả khi công nợ bằng 0"
    ],
    "answer": 1,
    "explanation": "Quy tắc quản lý kinh doanh nghiêm ngặt: Không thể tùy tiện xóa một khách hàng nếu khách hàng đó vẫn còn nợ tiền công ty (congNo > 0) hoặc công ty còn nợ tiền khách (congNo < 0). Do đó thao tác Xóa ở bảng KHACH bắt buộc phải kiểm tra mang dấu CỘNG (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ xóa ở bảng chứa thuộc tính suy diễn thì chỉ việc xóa dòng là xong (dấu -).",
      "trickWord": "Bẫy kiểm tra điều kiện công nợ khi xóa khách hàng trong Bảng Tầm Ảnh Hưởng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2.c",
      "tip": "Xóa khách hàng: BẮT BUỘC kiểm tra (+) để đảm bảo congNo = 0 mới cho phép xóa!"
    }
  },
  {
    "id": "db-c4-d2-030",
    "question": "Trong RBTV liên thuộc tính liên quan hệ (Ví dụ: HOA_DON.ngayHD ≥ DAT_HANG.ngayDH): Khi SỬA cột ngayDH ở bảng DAT_HANG, hệ thống có cần kiểm tra không?",
    "options": [
      "Chỉ kiểm tra khi người quản trị thực hiện sửa đổi cả mã số khách hàng đặt hàng",
      "Không cần kiểm tra (-) vì hóa đơn đã lập rồi thì ngày đặt hàng sửa đổi không ảnh hưởng",
      "Có kiểm tra +(ngayDH) vì nếu lùi ngày đặt hàng ra sau ngày lập hóa đơn sẽ gây vi phạm",
      "Mang dấu trừ (-) tuyệt đối vì bảng DAT_HANG là bảng gốc xuất hiện trước hóa đơn"
    ],
    "answer": 2,
    "explanation": "Ràng buộc đòi hỏi ngayHD >= ngayDH. Nếu ai đó sửa ngayDH ở bảng DAT_HANG thành một ngày lớn hơn ngayHD của hóa đơn tương ứng thì sẽ vi phạm ràng buộc (đặt hàng sau khi đã lập hóa đơn!). Do đó thao tác Sửa cột ngayDH bắt buộc phải kiểm tra: +(ngayDH).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ ngày đặt hàng đã qua rồi thì sửa thoải mái không ai kiểm tra.",
      "trickWord": "Bẫy Bảng Tầm Ảnh Hưởng khi sửa thuộc tính tham gia ràng buộc thời gian liên bảng",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2.b",
      "tip": "Sửa bất kỳ thuộc tính nào có mặt trong biểu thức (kể cả bảng đặt hàng) ➔ BẮT BUỘC mang dấu CỘNG (+)!"
    }
  },
  {
    "id": "db-c4-d2-031",
    "question": "Trong biểu diễn hình thức của RBTV bằng Logic vị từ bậc nhất, ký hiệu toán học \"∃\" mang ý nghĩa là gì?",
    "options": [
      "Toán tử phủ định logic (Logical negation, đảo ngược giá trị đúng sai)",
      "Lượng từ với mọi (Universal quantifier, áp dụng bắt buộc cho tất cả phần tử)",
      "Toán tử tương đương logic (Equivalence operator, hai vế có cùng giá trị chân lý)",
      "Lượng từ tồn tại (Existential quantifier, có ít nhất một phần tử thỏa mãn)"
    ],
    "answer": 3,
    "explanation": "Ký hiệu ∃ là lượng từ \"tồn tại\" (There exists), chỉ định phải có ít nhất một phần tử thỏa mãn điều kiện.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-032",
    "question": "Trong biểu thức Logic vị từ, toán tử kéo theo \"P ⇒ Q\" chỉ nhận giá trị SAI (False) trong trường hợp duy nhất nào?",
    "options": [
      "Khi mệnh đề P nhận giá trị Đúng (True) nhưng mệnh đề Q lại nhận giá trị Sai (False)",
      "Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Đúng (True) trong biểu thức",
      "Khi cả hai mệnh đề P và Q đều cùng nhận giá trị Sai (False) trong biểu thức",
      "Khi mệnh đề P nhận giá trị Sai (False) còn mệnh đề Q nhận giá trị Đúng (True)"
    ],
    "answer": 0,
    "explanation": "Theo bảng chân trị của logic mệnh đề: Phép kéo theo P ⇒ Q chỉ sai khi tiền đề P đúng mà kết luận Q sai (True ⇒ False là False). Các trường hợp còn lại đều Đúng.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-033",
    "question": "Trong Đồ án Đề tài: DETAI(MaDT, TenDT, Chunhiem, Kinhphi). Thuộc tính nào sau đây đóng vai trò là Khóa chính của bảng DETAI?",
    "options": [
      "Thuộc tính TenDT là khóa chính vì mỗi đề tài bắt buộc phải có tên riêng",
      "Thuộc tính MaDT là khóa chính phân biệt duy nhất từng đề tài nghiên cứu",
      "Thuộc tính Chunhiem là khóa chính đại diện cho giảng viên phụ trách đề tài",
      "Thuộc tính Kinhphi là khóa chính phân loại quy mô kinh phí của đề tài"
    ],
    "answer": 1,
    "explanation": "Mỗi đề tài có mã số duy nhất MaDT, đây là khóa chính của quan hệ DETAI.",
    "difficulty": "easy"
  },
  {
    "id": "db-c4-d2-034",
    "question": "Biểu thức Logic vị từ nào sau đây diễn đạt CHUẨN XÁC: \"Mọi sinh viên trong KET_QUA đều phải tồn tại trong bảng SINH_VIEN\" (Khóa ngoại)?",
    "options": [
      "∀ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq trùng mã với mọi sv)",
      "∃ kq ∈ KET_QUA, ∀ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (tồn tại kq ứng với mọi sv)",
      "∀ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV = sv.maSV (mọi kq đều có sv tương ứng)",
      "∃ kq ∈ KET_QUA, ∃ sv ∈ SINH_VIEN: kq.maSV ≠ sv.maSV (tồn tại cặp có mã khác nhau)"
    ],
    "answer": 2,
    "explanation": "Biểu diễn hình thức chuẩn của ràng buộc khóa ngoại (phụ thuộc tồn tại): Với mọi bộ kq trong KET_QUA, phải tồn tại một bộ sv trong SINH_VIEN sao cho kq.maSV = sv.maSV.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-035",
    "question": "Trong Đồ án Đề tài, bảng SV_DT có hai khóa ngoại MaSV và MaDT. Hai khóa ngoại này tham chiếu tương ứng đến những bảng nào?",
    "options": [
      "MaSV tham chiếu bảng DETAI, MaDT tham chiếu bảng SINHVIEN theo thứ tự đảo",
      "MaSV tham chiếu bảng KHOA, MaDT tham chiếu bảng MON_HOC trong hệ thống",
      "Cả hai khóa ngoại này đều cùng tham chiếu về bảng cha duy nhất là SINHVIEN",
      "MaSV tham chiếu bảng cha SINHVIEN, MaDT tham chiếu bảng cha DETAI"
    ],
    "answer": 3,
    "explanation": "Bảng kết hợp SV_DT có: MaSV là khóa ngoại tham chiếu SINHVIEN(MaSV); MaDT là khóa ngoại tham chiếu DETAI(MaDT).",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-036",
    "question": "Cho các nhận định sau về biểu diễn Logic vị từ của RBTV:\n(I) Biểu thức ∀t ∈ R: P(t) tương đương với phủ định ¬(∃t ∈ R: ¬P(t)).\n(II) Lượng từ với mọi đòi hỏi toàn bộ các dòng hiện có đều phải thỏa mãn điều kiện.\n(III) Nếu quan hệ R đang rỗng (không có dòng nào), biểu thức ∀t ∈ R: P(t) luôn luôn ĐÚNG.\nKhẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả ba nhận định (I), (II) và (III) đều là những nhận định hoàn toàn chính xác",
      "Chỉ có nhận định (I) và (II) đúng, nhận định (III) là nhận định sai lầm",
      "Chỉ có duy nhất nhận định (II) là nhận định đúng đắn theo quy chuẩn logic",
      "Nhận định (I) là nhận định sai, nhận định (II) và (III) là những nhận định đúng"
    ],
    "answer": 0,
    "explanation": "Cả 3 nhận định đều chuẩn mực theo logic toán học: 1) Luật De Morgan mở rộng; 2) Bản chất lượng từ ∀; 3) Mệnh đề với mọi trên tập rỗng (Vacuous truth) luôn nhận giá trị TRUE.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-037",
    "question": "Điền vào chỗ trống: \"Trong Logic vị từ, để biểu diễn tính toàn vẹn tham chiếu của khóa ngoại giữa quan hệ con R2 và quan hệ cha R1, ta sử dụng cặp lượng từ ...(1)... cho R2 và ...(2)... cho R1.\"",
    "options": [
      "∃ (tồn tại một bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)",
      "∀ (với mọi bộ thuộc R2) / ∃ (tồn tại ít nhất một bộ thuộc R1)",
      "∀ (với mọi bộ thuộc R2) / ∀ (với mọi bộ thuộc R1)",
      "∃ (tồn tại một bộ thuộc R2) / ∃ (tồn tại một bộ thuộc R1)"
    ],
    "answer": 1,
    "explanation": "Cấu trúc chuẩn của khóa ngoại trong logic vị từ: ∀ t2 ∈ R2, ∃ t1 ∈ R1: t2.FK = t1.PK.",
    "difficulty": "medium"
  },
  {
    "id": "db-c4-d2-038",
    "question": "Trong Đồ án Đề tài, quy tắc: \"Mỗi đề tài nghiên cứu chỉ được giao cho tối đa 3 sinh viên cùng thực hiện\". Khi SỬA cột MaDT trong bảng SV_DT, Bảng Tầm Ảnh Hưởng quy định dấu gì?",
    "options": [
      "Mang dấu trừ có điều kiện vì chỉ kiểm tra khi sinh viên đó có học lực yếu kém",
      "Mang dấu trừ (-) tuyệt đối vì sửa mã đề tài chỉ làm giảm bớt số người của đề tài cũ",
      "Mang dấu +(MaDT) vì việc đổi đề tài có thể làm đề tài mới vượt quá 3 sinh viên",
      "Hệ thống tự động từ chối thao tác sửa mã đề tài và bắt buộc phải xóa rồi tạo mới"
    ],
    "answer": 2,
    "explanation": "Quy tắc giới hạn số sinh viên tối đa cho một đề tài là 3. Khi sửa MaDT của một dòng trong SV_DT (chuyển sinh viên từ đề tài A sang đề tài B), đề tài B được cộng thêm 1 người và có nguy cơ vượt quá 3 người. Do đó bắt buộc phải kiểm tra: +(MaDT).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ sửa mã thì đề tài cũ bớt người nên an toàn (-), mà quên mất đề tài mới tăng người (+).",
      "trickWord": "Bẫy tăng số lượng ở đối tượng đích khi sửa thuộc tính phân nhóm",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.2 & VIII.1",
      "tip": "Sửa thuộc tính phân nhóm (MaDT, MaPhong...): Đối tượng đích TĂNG số lượng ➔ BẮT BUỘC mang dấu CỘNG (+)!"
    }
  },
  {
    "id": "db-c4-d2-039",
    "question": "Xét quy tắc: \"Năm sinh của sinh viên phải hợp lệ: Namsinh nằm trong khoảng từ 1980 đến năm hiện hành\" trong SINHVIEN. Biểu thức Logic vị từ nào dưới đây là CHUẨN XÁC NHẤT?",
    "options": [
      "∀ sv ∈ SINHVIEN: sv.Namsinh = 1980 ⇒ sv.Hocluc = N'Xuất sắc'",
      "∃ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∨ sv.Namsinh ≤ Year(GetDate())",
      "∀ sv1, sv2 ∈ SINHVIEN: sv1.Namsinh ≠ sv2.Namsinh ∧ sv1.Namsinh ≥ 1980",
      "∀ sv ∈ SINHVIEN: sv.Namsinh ≥ 1980 ∧ sv.Namsinh ≤ Year(GetDate())"
    ],
    "answer": 3,
    "explanation": "Ràng buộc miền giá trị áp dụng cho mọi sinh viên trong bảng SINHVIEN: ∀ sv ∈ SINHVIEN: sv.Namsinh >= 1980 ∧ sv.Namsinh <= Year(GetDate()).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm phép hội (∧) với phép tuyển (∨) khi thể hiện đoạn giá trị [A, B].",
      "trickWord": "Bẫy toán tử liên kết trong đoạn giá trị miền năm sinh (AND vs OR)",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục V.1 & VIII.1",
      "tip": "Nằm trong đoạn [A, B] ➔ BẮT BUỘC dùng phép HỘI (∧) cả hai cận: x >= A ∧ x <= B!"
    }
  },
  {
    "id": "db-c4-d2-040",
    "question": "Tình huống tổng hợp: Cho quy tắc: \"Chủ nhiệm đề tài (Chunhiem) trong bảng DETAI bắt buộc phải là một cán bộ thuộc một khoa có trong bảng KHOA\". Bảng Tầm Ảnh Hưởng của quy tắc này kiểm tra ở những thao tác nào?",
    "options": [
      "Thêm vào DETAI (+), Sửa Chunhiem ở DETAI (+), Xóa ở bảng KHOA (+), Sửa makhoa ở KHOA (+)",
      "Chỉ kiểm tra duy nhất khi Thêm một đề tài mới vào bảng DETAI trong hệ thống",
      "Chỉ kiểm tra khi Xóa một cán bộ khỏi danh mục và không cần kiểm tra bảng KHOA",
      "Kiểm tra tất cả các thao tác Thêm, Xóa, Sửa trên cả ba bảng SINHVIEN, DETAI, KHOA"
    ],
    "answer": 0,
    "explanation": "Đây là ràng buộc khóa ngoại (phụ thuộc tồn tại) giữa DETAI (bảng con) và KHOA (bảng cha). Do đó: 1) Bảng con DETAI: Thêm (+), Sửa Chunhiem (+), Xóa (-); 2) Bảng cha KHOA: Thêm (-), Xóa (+), Sửa makhoa (+).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bỏ sót các thao tác ở bảng cha (Xóa KHOA và Sửa makhoa).",
      "trickWord": "Bẫy Bảng Tầm Ảnh Hưởng đầy đủ hai chiều của ràng buộc khóa ngoại thực tế",
      "citation": "Giáo trình Hệ CSDL — Chương 4, Mục VI.1 & VIII.1",
      "tip": "Khóa ngoại hoàn chỉnh: Bảng con (Thêm +, Sửa +); Bảng cha (Xóa +, Sửa +)!"
    }
  }
];
