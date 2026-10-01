/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ BẪY 1
   SỐ LƯỢNG: 50 CÂU HỎI BẪY VẬN DỤNG CAO (100% HARD / BẪY TƯ DUY)
   MÃ BỘ ĐỀ: db-c1-t1-001 ĐẾN db-c1-t1-050
   CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Trick1 = [
  {
    "id": "db-c1-t1-001",
    "question": "Khẳng định nào sau đây là KHÔNG ĐÚNG khi đánh giá về hệ thống xử lý tập tin truyền thống (File Processing)?",
    "options": [
      "Hệ thống xử lý tập tin hoàn toàn không có bất kỳ một ưu điểm nào về mặt triển khai và chi phí",
      "Hệ thống xử lý tập tin có ưu điểm là thời gian triển khai ngắn cho những bài toán quy mô rất nhỏ",
      "Hệ thống xử lý tập tin có ưu điểm là ít tốn kém chi phí đầu tư ban đầu về nhân sự và thiết bị",
      "Hệ thống xử lý tập tin phù hợp với các ứng dụng mang tính độc lập và xử lý cục bộ của cá nhân"
    ],
    "answer": 0,
    "explanation": "Giáo trình chỉ rõ: Phương pháp xử lý tập tin vẫn có những ưu điểm rõ rệt: thời gian triển khai ngắn, chi phí đầu tư thấp, phù hợp với các bài toán nhỏ độc lập.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường mang định kiến File Processing hoàn toàn lỗi thời và không có bất kỳ ưu điểm nào.",
      "trickWord": "Bẫy từ ngữ phủ định tuyệt đối \"hoàn toàn không có bất kỳ ưu điểm nào\"",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.a",
      "tip": "Nhớ kỹ: Với bài toán nhỏ độc lập, File Processing vẫn có ưu điểm triển khai nhanh và chi phí thấp."
    }
  },
  {
    "id": "db-c1-t1-002",
    "question": "Sự khác biệt bản chất giữa hiện tượng \"Dư thừa dữ liệu\" và \"Không nhất quán dữ liệu\" trong hệ thống tập tin là gì?",
    "options": [
      "Dư thừa xuất hiện ở mức vật lý, còn không nhất quán chỉ xuất hiện trong ứng dụng của người dùng",
      "Dư thừa là sự lặp lại dữ liệu, còn không nhất quán là sự sai lệch dữ liệu giữa các tệp tin",
      "Dư thừa là do lỗi phần cứng máy tính, còn không nhất quán là do lỗi lập trình viên viết code",
      "Dư thừa là hậu quả tất yếu, còn không nhất quán là nguyên nhân trực tiếp làm hỏng cơ sở dữ liệu"
    ],
    "answer": 1,
    "explanation": "Dư thừa (Redundancy) là sự lặp lại thông tin ở nhiều file khác nhau; Không nhất quán (Inconsistency) là thông tin về cùng một đối tượng có giá trị khác nhau giữa các file tại cùng thời điểm. Dư thừa là nguyên nhân sinh ra không nhất quán.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn thứ tự nguyên nhân - kết quả giữa Dư thừa và Không nhất quán.",
      "trickWord": "Bẫy đảo ngược mối quan hệ nhân - quả giữa Data Redundancy và Data Inconsistency",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b",
      "tip": "Dư thừa (lặp lại) là NGUYÊN NHÂN, Không nhất quán (sai lệch giá trị) là HẬU QUẢ!"
    }
  },
  {
    "id": "db-c1-t1-003",
    "question": "Trong hệ thống xử lý tập tin, việc nhúng trực tiếp các ràng buộc toàn vẹn vào mã nguồn chương trình ứng dụng dẫn đến hệ lụy gì?",
    "options": [
      "Làm hỏng cấu trúc tệp tin trên ổ đĩa vật lý do mã nguồn bị phân mảnh trong bộ nhớ bán dẫn RAM",
      "Làm giảm tốc độ thực thi của CPU do chương trình phải xử lý thêm các dòng lệnh kiểm tra điều kiện",
      "Rất khó thay đổi đồng loạt các chương trình khi doanh nghiệp cập nhật thêm quy tắc quản lý mới",
      "Bắt buộc người dùng cuối phải có chứng chỉ chuyên gia quản trị cơ sở dữ liệu mới vận hành được"
    ],
    "answer": 2,
    "explanation": "Giáo trình nêu rõ nhược điểm về toàn vẹn (Integrity): Các ràng buộc bị nhúng cứng trong từng chương trình ứng dụng, nên khi có ràng buộc mới, rất khó thay đổi đồng loạt toàn bộ các chương trình.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ nhúng ràng buộc vào code giúp tăng tốc độ xử lý hoặc ảnh hưởng phần cứng.",
      "trickWord": "Bẫy nhận định hậu quả bảo trì phần mềm (software maintenance) vs hiệu năng phần cứng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.d",
      "tip": "Nhúng vào code = Cực kỳ khó bảo trì và cập nhật khi luật kinh doanh thay đổi."
    }
  },
  {
    "id": "db-c1-t1-004",
    "question": "Khi hệ thống gặp sự cố mất điện đột ngột trong lúc đang xử lý tập tin, nhược điểm chí mạng nào bộc lộ rõ nhất?",
    "options": [
      "Tự động sao lưu dữ liệu sang máy chủ dự phòng nhưng lại làm lộ toàn bộ mật khẩu người dùng",
      "Làm hỏng toàn bộ các linh kiện vi mạch điện tử và nguồn điện của hệ thống máy chủ trung tâm",
      "Làm xóa sạch vĩnh viễn hệ điều hành và toàn bộ các tệp tin cấu hình khởi động của máy tính",
      "Không đảm bảo tính nguyên tố của giao tác, khó đưa hệ thống về trạng thái nhất quán ban đầu"
    ],
    "answer": 3,
    "explanation": "Nhược điểm về tính nguyên tố (Atomicity): Tệp xử lý truyền thống khó đảm bảo tính chất \"hoặc thực hiện hoàn toàn, hoặc không thực hiện gì\", không thể tự động khôi phục về trạng thái nhất quán trước sự cố.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm giữa lỗi mức phần mềm (tính nguyên tố giao tác) với hỏng hóc vật lý phần cứng.",
      "trickWord": "Bẫy tính nguyên tố All-or-Nothing của Transaction trong RDBMS vs File System",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c",
      "tip": "Mất điện giữa chừng ➔ Vi phạm tính nguyên tố (Atomicity) ➔ Dữ liệu dở dang, không nhất quán."
    }
  },
  {
    "id": "db-c1-t1-005",
    "question": "Cho các nhận định về phương pháp xử lý tập tin (File Processing):\n(I) Thời gian sử dụng phổ biến là từ những năm 60s đến 80s.\n(II) Việc chia sẻ dữ liệu giữa các phòng ban diễn ra rất dễ dàng.\n(III) Truy cập tương tranh không có khóa dễ dẫn đến dị thường.\nTổ hợp đúng là:",
    "options": [
      "Nhận định (I) và nhận định (III) hoàn toàn đúng, nhận định (II) sai",
      "Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách",
      "Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai",
      "Nhận định (II) và nhận định (III) hoàn toàn đúng, nhận định (I) sai"
    ],
    "answer": 0,
    "explanation": "Giáo trình nêu rõ: Hệ thống tập tin thiếu khả năng chia sẻ thông tin giữa các hệ thống, khó mở rộng (II sai). (I) và (III) hoàn toàn đúng theo giáo trình.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ tập tin văn phòng chia sẻ qua mạng rất dễ dàng nên chọn (II) đúng.",
      "trickWord": "Bẫy khả năng chia sẻ dữ liệu: File Processing thực chất gây cô lập dữ liệu (data isolation)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & I.1.b",
      "tip": "Hệ thống tập tin KHÓ chia sẻ thông tin, trùng lặp và cô lập giữa các phòng ban."
    }
  },
  {
    "id": "db-c1-t1-006",
    "question": "Điền vào chỗ trống: \"Dị thường của truy cập tương tranh xảy ra khi nhiều người dùng cùng (...) dữ liệu đồng thời mà không có cơ chế kiểm soát chặt chẽ.\"",
    "options": [
      "Đọc và xem thông tin báo cáo định kỳ trên màn hình máy tính",
      "Cập nhật (ghi/sửa/xóa) trên cùng một nguồn tài nguyên dữ liệu",
      "Sao lưu dữ liệu dự phòng từ đĩa cứng sang băng từ lưu trữ ngoài",
      "In ấn danh sách khách hàng ra các trang giấy từ máy in văn phòng"
    ],
    "answer": 1,
    "explanation": "Truy cập tương tranh chỉ gây ra dị thường khi có thao tác CẬP NHẬT (Update/Write) đồng thời. Nếu tất cả người dùng chỉ ĐỌC (Read-only) thì không bao giờ xảy ra xung đột dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ cứ \"truy cập đồng thời\" là bị dị thường, quên mất chỉ CẬP NHẬT mới gây xung đột.",
      "trickWord": "Bẫy thao tác Ghi/Cập nhật (Update) vs thao tác Đọc thuần túy (Read-only)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e",
      "tip": "Đọc đồng thời không gây xung đột; CHỈ CẬP NHẬT ĐỒNG THỜI mới sinh dị thường!"
    }
  },
  {
    "id": "db-c1-t1-007",
    "question": "Nhận định nào sau đây là ĐÚNG khi nói về tính an toàn dữ liệu trong hệ thống xử lý tập tin?",
    "options": [
      "Dữ liệu luôn được sao lưu tức thời và tự động khôi phục hoàn chỉnh khi có sự cố cháy nổ đĩa",
      "Mặc định hệ điều hành luôn tự động mã hóa đường truyền và phân quyền chi tiết từng bản ghi",
      "Rất khó phân cấp quyền hạn chi tiết đến từng trường dữ liệu cho từng người dùng khác nhau",
      "Người quản trị có thể dễ dàng kiểm soát quyền đọc của từng dòng dữ liệu bằng lệnh của shell"
    ],
    "answer": 2,
    "explanation": "Giáo trình chỉ rõ: Hệ thống tập tin rất khó phân cấp đối tượng sử dụng dữ liệu chi tiết, cơ chế bảo mật yếu kém so với DBMS.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm quyền file của Hệ điều hành (Read/Write/Execute trên file) với quyền CSDL.",
      "trickWord": "Bẫy quyền mức Tệp tin của OS vs quyền mức Cột/Bản ghi của HQTCSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f",
      "tip": "OS chỉ phân quyền trên TỆP TIN, không thể phân quyền chi tiết tới từng CỘT hay từng DÒNG."
    }
  },
  {
    "id": "db-c1-t1-008",
    "question": "Hai nhân viên cùng mở tệp tin số dư tài khoản của khách hàng A (đang có 10 triệu). Cả hai cùng rút 5 triệu cùng lúc trên hệ thống tệp tin. Kết quả sai lệch điển hình là gì?",
    "options": [
      "Hệ thống tự động kích hoạt tính năng phục hồi điểm sao lưu và trả lại đúng 10 triệu ban đầu",
      "Tệp tin tự động bị mã hóa và hệ điều hành khóa vĩnh viễn tài khoản của cả hai nhân viên lại",
      "Số dư tài khoản bị trừ gấp đôi thành âm 10 triệu đồng do phần cứng máy tính bị xung đột lệnh",
      "Giao tác ghi đè làm mất mát thao tác cập nhật, số dư cuối cùng có thể vẫn còn 5 triệu thay vì 0"
    ],
    "answer": 3,
    "explanation": "Đây là tình huống kinh điển của hiện tượng \"Mất mát cập nhật\" (Lost Update Anomaly) do không có cơ chế khóa (locking) trong hệ thống tập tin: thao tác ghi của người sau đè lên người trước.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không hình dung được cơ chế Lost Update khi hai tiến trình cùng đọc 10tr và cùng trừ 5tr.",
      "trickWord": "Bẫy Lost Update Anomaly trong truy cập tương tranh đồng thời",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e",
      "tip": "Cùng đọc 10tr, A ghi 5tr, B ghi 5tr ➔ B ghi đè lên A ➔ Mất 1 lần trừ 5tr ➔ Số dư sai!"
    }
  },
  {
    "id": "db-c1-t1-009",
    "question": "Bẫy khái niệm: Lý do cơ bản nhất buộc khoa học máy tính phải chuyển từ cách tiếp cận tệp sang cách tiếp cận cơ sở dữ liệu là gì?",
    "options": [
      "Do nhu cầu xử lý dữ liệu lớn, đa người dùng đồng thời và cấu trúc liên kết dữ liệu phức tạp",
      "Do các nhà sản xuất đĩa từ bắt buộc ngừng hỗ trợ định dạng tệp tin nhị phân truyền thống",
      "Do các ngôn ngữ lập trình hướng đối tượng đời mới không còn các hàm mở và đọc tệp tin nữa",
      "Do dung lượng RAM của máy tính ngày càng lớn nên không cần lưu trữ tệp xuống đĩa cứng nữa"
    ],
    "answer": 0,
    "explanation": "Giáo trình nhấn mạnh: Khi bài toán nghiệp vụ có nhu cầu xử lý dữ liệu lớn, đa người dùng và liên kết phức tạp, hệ thống tập tin bộc lộ 6 nhược điểm chí mạng, buộc phải chuyển sang Database Approach.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bị phân tâm bởi các yếu tố công nghệ phần cứng RAM/Đĩa.",
      "trickWord": "Bẫy động lực chuyển dịch phương pháp luận: Dữ liệu lớn, Đa người dùng, Liên kết phức tạp",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.c",
      "tip": "Nhu cầu thực tiễn: Dữ liệu lớn + Đa người dùng + Quan hệ phức tạp ➔ Bắt buộc dùng CSDL!"
    }
  },
  {
    "id": "db-c1-t1-010",
    "question": "Điền thuật ngữ: \"Hiện tượng tại một thời điểm, thông tin về cùng một đối tượng có giá trị khác nhau trên các tập tin khác nhau được gọi là (...).\"",
    "options": [
      "Tính dư thừa dữ liệu không kiểm soát (Data Redundancy của hệ thống)",
      "Tính không nhất quán của dữ liệu (Data Inconsistency trong CSDL)",
      "Dị thường xóa thông tin do thiếu khóa (Deletion Anomaly của bảng)",
      "Tính toàn vẹn thực thể bị xâm phạm (Entity Integrity Violation)"
    ],
    "answer": 1,
    "explanation": "Định nghĩa chuẩn trong giáo trình: Tính không nhất quán (Data Inconsistency) là hiện tượng tại một thời điểm, thông tin về cùng một đối tượng khác nhau trên các tập tin khác nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm lẫn chọn \"Tính dư thừa dữ liệu\".",
      "trickWord": "Bẫy thuật ngữ: Thông tin KHÁC NHAU về cùng 1 đối tượng là Inconsistency, không phải Redundancy",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b",
      "tip": "Cùng 1 người mà nơi ghi Hà Nội, nơi ghi Sài Gòn ➔ KHÔNG NHẤT QUÁN (Inconsistency)!"
    }
  },
  {
    "id": "db-c1-t1-011",
    "question": "So sánh giữa tệp tin bảng tính Excel và một Hệ quản trị CSDL chuyên dụng, phát biểu nào sau đây mang tính ngụy biện SAI?",
    "options": [
      "Excel không có cơ chế khóa dòng và kiểm soát giao tác ACID chặt chẽ như các hệ quản trị CSDL",
      "Excel phù hợp với các bảng dữ liệu đơn lẻ, phân tích thống kê cá nhân và báo cáo dạng bảng biểu",
      "Excel có thể thay thế hoàn toàn DBMS vì hỗ trợ chia sẻ đồng thời hàng triệu người qua đám mây",
      "Excel dễ phát sinh dư thừa và không nhất quán khi dữ liệu phình to và có nhiều người chỉnh sửa"
    ],
    "answer": 2,
    "explanation": "Excel là phần mềm bảng tính, không phải DBMS chuyên dụng, không thể đảm bảo tính toàn vẹn, giao tác ACID và khóa tương tranh cho hàng triệu người dùng đồng thời.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thực tế nhiều doanh nghiệp dùng Excel chia sẻ trên Google Drive/OneDrive nên nhầm là thay thế được DBMS.",
      "trickWord": "Bẫy khả năng mở rộng và kiểm soát tương tranh: Spreadsheet vs Relational DBMS",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1 & II.4",
      "tip": "Excel không thể thay thế DBMS vì thiếu giao tác ACID, khóa tương tranh và toàn vẹn dữ liệu."
    }
  },
  {
    "id": "db-c1-t1-012",
    "question": "Cho 3 mệnh đề sau:\n(I) Tính toàn vẹn thể hiện dữ liệu phải chính xác, hợp lý và tuân thủ quy tắc quản lý.\n(II) Phương pháp tệp tin có tính an toàn dữ liệu cao hơn mô hình cơ sở dữ liệu.\n(III) Tính nguyên tố giao tác đòi hỏi thực hiện tất cả hoặc không làm gì.\nMệnh đề ĐÚNG là:",
    "options": [
      "Chỉ có mệnh đề (II) và mệnh đề (III) là chính xác, mệnh đề (I) là sai",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình",
      "Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai",
      "Chỉ có mệnh đề (I) và mệnh đề (III) là chính xác, mệnh đề (II) là sai"
    ],
    "answer": 3,
    "explanation": "(II) sai vì phương pháp tệp tin có tính an toàn dữ liệu rất thấp so với CSDL (thiếu phân quyền chi tiết, thiếu bảo mật đa tầng, khó backup khôi phục). (I) và (III) hoàn toàn đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh đọc lướt mệnh đề (II) thấy từ \"tính an toàn cao hơn\" dễ bị đánh lừa.",
      "trickWord": "Bẫy so sánh độ an toàn dữ liệu: File Processing có độ an toàn thấp hơn nhiều so với DBMS",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f",
      "tip": "Hệ thống tệp tin an toàn KÉM HƠN CSDL rất nhiều!"
    }
  },
  {
    "id": "db-c1-t1-013",
    "question": "Trong tình huống doanh nghiệp có 5 chi nhánh, mỗi chi nhánh lưu trữ 1 tệp khách hàng riêng. Khi một khách hàng đổi số điện thoại, hậu quả phổ biến nhất xảy ra là gì?",
    "options": [
      "Gây ra hiện tượng không nhất quán dữ liệu do chi nhánh này cập nhật nhưng chi nhánh khác thì không",
      "Làm hỏng ngay cấu trúc chỉ mục B-Tree của toàn bộ hệ điều hành mạng tại cả năm chi nhánh đó",
      "Toàn bộ thông tin các khách hàng khác trong danh sách đều bị xóa sạch do lỗi xung đột định dạng",
      "Hệ điều hành sẽ tự động gửi email cảnh báo và đồng bộ số điện thoại mới cho toàn bộ các file"
    ],
    "answer": 0,
    "explanation": "Đây là kịch bản điển hình của sự không nhất quán dữ liệu (Data Inconsistency) bắt nguồn từ việc lưu trữ phân tán, dư thừa thông tin trên các tệp tin độc lập.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ hệ thống tự động đồng bộ (bị ảnh hưởng bởi cloud ngày nay).",
      "trickWord": "Bẫy phân tán tệp tin độc lập không đồng bộ trong File Processing System",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b",
      "tip": "File riêng lẻ độc lập ➔ Cập nhật 1 nơi, nơi khác không biết ➔ Không nhất quán dữ liệu!"
    }
  },
  {
    "id": "db-c1-t1-014",
    "question": "Khái niệm \"Cơ sở dữ liệu\" (Database) được định nghĩa chuẩn xác trong giáo trình học thuật là gì?",
    "options": [
      "Là một phần mềm máy tính chuyên dụng dùng để soạn thảo văn bản và lập bảng biểu kế toán văn phòng",
      "Là tập hợp có cấu trúc của thông tin, thỏa mãn khai thác đồng thời cho nhiều người dùng/ứng dụng",
      "Là tập hợp các máy chủ phần cứng được kết nối với nhau thông qua hệ thống mạng cáp quang tốc độ cao",
      "Là hệ điều hành mã nguồn mở chuyên quản lý việc đọc ghi các khối bit nhị phân trên thiết bị ổ cứng"
    ],
    "answer": 1,
    "explanation": "Giáo trình định nghĩa: CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin nhằm thỏa mãn yêu cầu khai thác thông tin đồng thời cho nhiều người dùng hay nhiều chương trình ứng dụng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Học viên hay nhầm CSDL là một phần mềm (software) hoặc thiết bị máy chủ (hardware).",
      "trickWord": "Bẫy bản chất CSDL là DỮ LIỆU CÓ CẤU TRÚC, không phải phần mềm hay phần cứng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.a",
      "tip": "CSDL = Dữ liệu có cấu trúc (Data); HQTCSDL mới là phần mềm (Software)!"
    }
  },
  {
    "id": "db-c1-t1-015",
    "question": "Mối quan hệ chính xác giữa Cơ sở dữ liệu (Database) và Hệ quản trị CSDL (DBMS) là gì?",
    "options": [
      "Cơ sở dữ liệu và Hệ quản trị CSDL là hai thuật ngữ hoàn toàn đồng nghĩa và có thể thay thế nhau",
      "Cơ sở dữ liệu là phần mềm điều khiển, còn Hệ quản trị CSDL là tập hợp các tập tin lưu trữ",
      "Hệ quản trị CSDL là phần mềm điều khiển, còn Cơ sở dữ liệu là một thành phần bên trong nó",
      "Hệ quản trị CSDL là phần cứng máy chủ, còn Cơ sở dữ liệu là phần mềm tiện ích chạy trên máy đó"
    ],
    "answer": 2,
    "explanation": "Giáo trình ghi rõ: HQTCSDL là phần mềm dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là một thành phần bên trong HQTCSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Rất nhiều người coi Database và DBMS là một hoặc coi Database chứa DBMS.",
      "trickWord": "Bẫy quan hệ chứa: DBMS là phần mềm quản lý, CSDL là thành phần dữ liệu được quản lý",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.a",
      "tip": "DBMS = Cái tủ thông minh (Software); CSDL = Hồ sơ bên trong tủ (Data)!"
    }
  },
  {
    "id": "db-c1-t1-016",
    "question": "Hai khả năng cơ bản BẮT BUỘC của một Hệ quản trị CSDL theo chuẩn học thuật gồm những gì?",
    "options": [
      "Tự động sửa chữa các hỏng hóc vật lý của chip nhớ RAM và bảo dưỡng hệ thống tản nhiệt máy tính",
      "Tự động thiết kế giao diện đồ họa đẹp mắt và tự động viết mã nguồn các phần mềm ứng dụng di động",
      "Quản lý kết nối mạng Internet toàn cầu và cung cấp dịch vụ máy chủ phân giải tên miền hệ thống DNS",
      "Quản lý dữ liệu ở mức xử lý tệp như một OS và truy cập khối lượng dữ liệu lớn có hiệu quả cao"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.4.b ghi rõ: Hai khả năng cơ bản bắt buộc của DBMS: 1) Quản lý dữ liệu ở mức xử lý tệp như một hệ điều hành chuyên dụng; 2) Truy cập khối lượng dữ liệu lớn có hiệu quả cao.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ DBMS bắt buộc phải có tính năng viết code hoặc làm việc của mạng.",
      "trickWord": "Bẫy hai khả năng cơ bản bắt buộc chuẩn mực của DBMS theo giáo trình",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.b",
      "tip": "2 năng lực bắt buộc: Quản lý mức tệp như OS + Truy cập dữ liệu lớn hiệu quả cao."
    }
  },
  {
    "id": "db-c1-t1-017",
    "question": "Ai là người có thẩm quyền cao nhất trong việc tổ chức CSDL (khai báo cấu trúc, ràng buộc) và cấp phát quyền hạn khai thác?",
    "options": [
      "Người quản trị cơ sở dữ liệu chuyên nghiệp (Database Administrator - viết tắt là DBA)",
      "Chuyên viên tin học phụ trách viết mã nguồn chương trình ứng dụng (Application Programmer)",
      "Người sử dụng cuối không chuyên về tin học truy cập dữ liệu qua báo cáo (Naive End-User)",
      "Giám đốc điều hành doanh nghiệp trực tiếp đăng nhập bằng tài khoản dòng lệnh của hệ điều hành"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.2 ghi rõ: Người quản trị CSDL (DBA) là người tổ chức CSDL (khai báo cấu trúc, thiết lập ràng buộc, bảo mật) và là người cấp quyền hạn khai thác cho toàn bộ người dùng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn vai trò của Lập trình viên ứng dụng với Người quản trị DBA.",
      "trickWord": "Bẫy thẩm quyền tổ chức và phân quyền: DBA độc tôn, lập trình viên không có quyền cấp quyền",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.2.a",
      "tip": "Tổ chức CSDL + Khai báo ràng buộc + Cấp phát quyền = Thẩm quyền tối cao của DBA!"
    }
  },
  {
    "id": "db-c1-t1-018",
    "question": "Khẳng định nào sau đây là KHÔNG ĐÚNG về đối tượng Người sử dụng không chuyên (Naive End-Users)?",
    "options": [
      "Họ là những người dùng cuối không có kiến thức sâu về công nghệ thông tin và cơ sở dữ liệu",
      "Họ phải trực tiếp viết các câu truy vấn SQL lồng nhau phức tạp trên cửa sổ dòng lệnh đen trắng",
      "CSDL cần cung cấp cho họ các công cụ, giao diện trực quan như biểu mẫu và báo cáo định dạng",
      "Họ khai thác dữ liệu để phục vụ công việc hàng ngày như thu ngân, nhân viên bán hàng, tiếp tân"
    ],
    "answer": 1,
    "explanation": "Người dùng không chuyên (Naive/End users) không biết SQL, họ chỉ tương tác qua giao diện trực quan (GUI, Forms, Reports) do lập trình viên xây dựng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh đọc lướt không chú ý cụm từ \"phải trực tiếp viết truy vấn SQL lồng nhau\".",
      "trickWord": "Bẫy đối tượng người dùng: Naive Users KHÔNG viết SQL trên command line",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.2.a",
      "tip": "Naive Users chỉ dùng giao diện có sẵn, viết truy vấn SQL là việc của Programmers và DBA."
    }
  },
  {
    "id": "db-c1-t1-019",
    "question": "Khi chuyển sang sử dụng cách tiếp cận CSDL, thách thức lớn nào sau đây NẢY SINH mà hệ thống tập tin cục bộ ít gặp?",
    "options": [
      "Thời gian khởi động máy tính bị kéo dài do hệ điều hành phải nạp lại toàn bộ tệp nhị phân",
      "Chi phí mua ổ cứng lưu trữ tăng gấp hàng ngàn lần do cơ sở dữ liệu làm phình to dữ liệu gốc",
      "Tranh chấp truy cập tài nguyên đồng thời và đòi hỏi cơ chế bảo mật, phân quyền nghiêm ngặt",
      "Không thể kết nối máy in để in ra các báo cáo tổng kết doanh thu cho ban giám đốc công ty"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục II.1.c nêu 3 thách thức khi dùng CSDL: 1) Xác định rõ trách nhiệm an toàn/chính xác; 2) Cơ chế bảo mật và phân quyền; 3) Giải quyết tranh chấp truy cập đồng thời.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ CSDL tốn dung lượng ổ cứng hơn (thực tế CSDL giảm trùng lặp nên tiết kiệm đĩa).",
      "trickWord": "Bẫy các vấn đề thách thức khi tập trung hóa dữ liệu trong CSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.c",
      "tip": "Dùng CSDL: Tiết kiệm đĩa, nhưng nảy sinh Thách thức Tranh chấp đồng thời & Bảo mật!"
    }
  },
  {
    "id": "db-c1-t1-020",
    "question": "Tập hợp các phần mềm nào sau đây HOÀN TOÀN là các Hệ quản trị cơ sở dữ liệu (DBMS)?",
    "options": [
      "PostgreSQL, Mozilla Firefox, Python Runtime, GitHub và Node.js Engine",
      "Oracle, Microsoft Excel, Microsoft Word, Windows 11 và Linux Ubuntu",
      "MySQL, Apache Web Server, Adobe Photoshop, Docker và Google Chrome",
      "Oracle, Microsoft SQL Server, PostgreSQL, MySQL, Sybase và MS Access"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.4.a liệt kê các HQTCSDL thường gặp: Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL...",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người coi Excel là HQTCSDL hoặc nhầm lẫn giữa Web Server/Hệ điều hành với DBMS.",
      "trickWord": "Bẫy danh sách phần mềm DBMS chuẩn vs các phần mềm ứng dụng bảng tính/tiện ích",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.a",
      "tip": "Excel, Word, Windows, Photoshop KHÔNG PHẢI là DBMS!"
    }
  },
  {
    "id": "db-c1-t1-021",
    "question": "Ví dụ danh bạ điện thoại cá nhân (gồm Họ tên, Số điện thoại, Địa chỉ) được quản lý bằng phần mềm Access. Đâu là CSDL và đâu là HQTCSDL?",
    "options": [
      "Tập hợp dữ liệu họ tên/số điện thoại là CSDL, còn phần mềm Access chính là Hệ quản trị CSDL",
      "Phần mềm Access chính là CSDL, còn tập hợp dữ liệu họ tên/số điện thoại là Hệ quản trị CSDL",
      "Cả phần mềm Access và dữ liệu danh bạ đều được định nghĩa là Cơ sở dữ liệu của người dùng",
      "Cả phần mềm Access và dữ liệu danh bạ đều được định nghĩa là Hệ quản trị CSDL của máy tính"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.4.a nêu chính xác ví dụ này: Tập hợp dữ liệu có liên quan ngữ nghĩa với nhau chính là CSDL, còn phần mềm Access/Excel lưu trữ và quản lý nó chính là HQTCSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay gọi phần mềm Access là \"một cơ sở dữ liệu Access\".",
      "trickWord": "Bẫy phân biệt thực thể Dữ liệu (CSDL) vs Công cụ điều khiển (HQTCSDL)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.a",
      "tip": "Access = HQTCSDL; Nội dung các dòng danh bạ = CSDL."
    }
  },
  {
    "id": "db-c1-t1-022",
    "question": "Điền vào chỗ trống: \"Nhờ giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, CSDL bảo đảm được (...) và (...).\"",
    "options": [
      "Tốc độ quay của đĩa từ (rotation speed) và Dung lượng bộ nhớ đệm (cache size)",
      "Tính nhất quán (consistency) và Tính toàn vẹn của dữ liệu (integrity)",
      "Băng thông đường truyền mạng (bandwidth) và Khả năng chịu nhiệt của vi xử lý",
      "Khả năng phục hồi mật khẩu tự động và Tự động viết lại mã nguồn ứng dụng web"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.1.b nêu rõ: Giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, nhờ đó: Bảo đảm tính nhất quán (consistency) và Bảo đảm tính toàn vẹn của dữ liệu (integrity).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ bị cuốn vào các yếu tố hiệu năng phần cứng CPU/Đĩa.",
      "trickWord": "Bẫy hệ quả cốt lõi của giảm trùng lặp: Tính nhất quán + Tính toàn vẹn",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.b",
      "tip": "Giảm trùng lặp ➔ Đảm bảo NHẤT QUÁN + TOÀN VẸN!"
    }
  },
  {
    "id": "db-c1-t1-023",
    "question": "Cho 3 phát biểu về vai trò trong hệ CSDL:\n(I) Chuyên viên tin học là người viết các ứng dụng trên nền CSDL.\n(II) Người dùng cuối có quyền tạo và xóa các lược đồ quan hệ trong CSDL.\n(III) DBA là người chịu trách nhiệm tối cao về an toàn dữ liệu.\nTổ hợp ĐÚNG là:",
    "options": [
      "Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) đều sai",
      "Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình",
      "Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) hoàn toàn sai",
      "Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) hoàn toàn sai"
    ],
    "answer": 2,
    "explanation": "(II) sai vì người dùng cuối (End-users) không có quyền tạo/xóa bảng dữ liệu; quyền này thuộc về DBA. (I) và (III) hoàn toàn đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn quyền DDL (tạo/xóa bảng) với quyền thao tác dữ liệu.",
      "trickWord": "Bẫy phân quyền DDL: Người dùng cuối KHÔNG BAO GIỜ được phép tạo/xóa bảng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.2.a",
      "tip": "Tạo/xóa cấu trúc bảng = Việc của DBA; Người dùng cuối chỉ thao tác biểu mẫu/báo cáo."
    }
  },
  {
    "id": "db-c1-t1-024",
    "question": "Ngôn ngữ thao tác dữ liệu chuẩn mà các HQTCSDL hiện đại cung cấp cho người dùng có đặc tính nổi bật nào?",
    "options": [
      "Là ngôn ngữ lập trình kịch bản bắt buộc phải biên dịch ra mã máy trung gian",
      "Là ngôn ngữ máy mã nhị phân 0 và 1 để điều khiển trực tiếp đầu đọc đĩa từ",
      "Là hợp ngữ Assembly với các thanh ghi phần cứng và ngắt hệ thống chuyên dụng",
      "Là ngôn ngữ bậc cao phi thủ tục (Non-procedural Language như SQL chuẩn)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục II.4.b nêu rõ: HQTCSDL cung cấp ngôn ngữ bậc cao (thường là ngôn ngữ phi thủ tục - Non-procedural như SQL) giúp users truy xuất và thao tác CSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm SQL là ngôn ngữ thủ tục (Procedural) như C/Java.",
      "trickWord": "Bẫy phân loại ngôn ngữ: SQL là Non-procedural (Phi thủ tục: chỉ cần nói CẦN GÌ, không cần nói LÀM THẾ NÀO)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.b",
      "tip": "Ngôn ngữ chuẩn CSDL = Bậc cao PHI THỦ TỤC (Non-procedural / SQL)!"
    }
  },
  {
    "id": "db-c1-t1-025",
    "question": "Một công ty thương mại điện tử bị sập hệ thống khi có 100.000 khách hàng cùng bấm nút mua hàng trong sự kiện Flash Sale. Lỗi kỹ thuật này phản ánh việc DBMS chưa đáp ứng tốt yêu cầu nào?",
    "options": [
      "Khả năng kiểm soát truy cập tương tranh quy mô lớn và giải quyết tranh chấp tài nguyên",
      "Khả năng lưu trữ văn bản Unicode tiếng Việt có dấu trong các cột họ tên khách hàng",
      "Khả năng tạo ra các biểu đồ hình cột thống kê doanh số trực quan cho phòng kế toán",
      "Khả năng nén dung lượng hình ảnh đại diện của sản phẩm khi người dùng tải ảnh lên"
    ],
    "answer": 0,
    "explanation": "Sập hệ thống khi nhiều người dùng cùng truy cập/cập nhật đồng thời là vấn đề của Kiểm soát truy cập tương tranh (Concurrency Control) và giải quyết tranh chấp tài nguyên của DBMS.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh bị lôi cuốn bởi các tính năng phụ trợ như nén ảnh, hiển thị biểu đồ.",
      "trickWord": "Bẫy năng lực xử lý tương tranh đồng thời quy mô lớn của DBMS trong thực tế",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b",
      "tip": "Đông người truy cập đồng thời gây nghẽn/sập ➔ Vấn đề Truy cập tương tranh (Concurrency)!"
    }
  },
  {
    "id": "db-c1-t1-026",
    "question": "Khái niệm \"Mô hình dữ liệu\" (Data Model) theo quan điểm toán học chuẩn xác trong giáo trình gồm 2 phần nào?",
    "options": [
      "Bao gồm 2 phần: Bảng mạch điện tử phần cứng và Tốc độ xung nhịp của bộ vi xử lý",
      "Bao gồm 2 phần: Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu đó",
      "Bao gồm 2 phần: Cáp mạng truyền dẫn tín hiệu và Hệ điều hành máy chủ trung tâm",
      "Bao gồm 2 phần: Mật khẩu của người quản trị và Quyền truy cập các thư mục tệp"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục II.3.a định nghĩa: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý trên dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh thường chỉ nhớ phần mô tả dữ liệu mà quên mất phần \"Tập hợp các phép toán\".",
      "trickWord": "Bẫy định nghĩa toán học 2 thành phần của Data Model: Ký hiệu mô tả + Phép toán",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Data Model = Ký hiệu mô tả dữ liệu + Tập phép toán xử lý."
    }
  },
  {
    "id": "db-c1-t1-027",
    "question": "Thứ tự sắp xếp đúng của Kiến trúc 3 mức ANSI-SPARC theo chiều từ người dùng cuối đi sâu vào phần cứng lưu trữ là gì?",
    "options": [
      "Mức khái niệm (quan niệm) ➔ Mức khung nhìn (ngoài) ➔ Mức vật lý (trong)",
      "Mức vật lý (trong) ➔ Mức khái niệm (quan niệm) ➔ Mức khung nhìn (ngoài)",
      "Mức khung nhìn (ngoài) ➔ Mức khái niệm (quan niệm) ➔ Mức vật lý (trong)",
      "Mức khung nhìn (ngoài) ➔ Mức vật lý (trong) ➔ Mức khái niệm (quan niệm)"
    ],
    "answer": 2,
    "explanation": "Từ góc nhìn người dùng vào phần cứng: External/View Level (Mức ngoài) ➔ Conceptual Level (Mức khái niệm) ➔ Internal/Physical Level (Mức trong/vật lý).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm thứ tự giữa Mức ngoài và Mức khái niệm, hoặc đảo ngược trong - ngoài.",
      "trickWord": "Bẫy chiều nhìn kiến trúc 3 mức ANSI-SPARC: Từ người dùng (Ngoài) đến đĩa cứng (Trong)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a & II.3.b",
      "tip": "Người dùng ➔ Khung nhìn (View/Ngoài) ➔ Khái niệm (Conceptual) ➔ Vật lý (Physical/Trong)!"
    }
  },
  {
    "id": "db-c1-t1-028",
    "question": "Mức biểu diễn nào trong kiến trúc 3 mức là sự trừu tượng hóa toàn bộ thế giới thực của tổ chức và là DUY NHẤT trong một hệ CSDL?",
    "options": [
      "Mức ứng dụng di động (Mobile Application Level của các lập trình viên)",
      "Mức khung nhìn (View Level / External Schema dành riêng từng cá nhân)",
      "Mức vật lý (Physical Level / Internal Schema của thiết bị đĩa từ)",
      "Mức khái niệm (Conceptual Level / Logical Schema của toàn bộ hệ thống)"
    ],
    "answer": 3,
    "explanation": "Giáo trình nêu rõ: Mức khái niệm mô tả toàn bộ CSDL một cách trừu tượng gần với người dùng, và chỉ có DUY NHẤT một lược đồ khái niệm cho một CSDL. Ngược lại, mức khung nhìn có thể có NHIỀU khung nhìn khác nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ mỗi người dùng có 1 mức khái niệm riêng.",
      "trickWord": "Bẫy tính duy nhất: Mức khái niệm là DUY NHẤT; Mức khung nhìn là ĐA DẠNG",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Mức khái niệm = Duy nhất toàn hệ thống; Mức View = Nhiều góc nhìn riêng biệt!"
    }
  },
  {
    "id": "db-c1-t1-029",
    "question": "Khái niệm \"Mức khung nhìn\" (View Level / External Level) được định nghĩa chính xác là gì?",
    "options": [
      "Là cách nhìn, quan điểm riêng biệt của từng người sử dụng đối với CSDL mức khái niệm",
      "Là cấu trúc các sector, track và khối byte lưu trữ trực tiếp trên phiến đĩa cứng vật lý",
      "Là sơ đồ tổng thể toàn bộ các bảng, các khóa ngoại và ràng buộc của cả cơ quan tổ chức",
      "Là giao diện đồ họa hiển thị các biểu đồ hình tròn của phần mềm văn phòng Microsoft Word"
    ],
    "answer": 0,
    "explanation": "Giáo trình định nghĩa: Mức khung nhìn là cách nhìn, quan điểm của từng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm View là toàn bộ CSDL hoặc nhầm với giao diện GUI của Word.",
      "trickWord": "Bẫy góc nhìn cục bộ: View chỉ là một phần trừu tượng hóa của mức khái niệm",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "View Level = Góc nhìn riêng của từng người dùng trên một phần CSDL."
    }
  },
  {
    "id": "db-c1-t1-030",
    "question": "Bản chất của \"Tính độc lập dữ liệu vật lý\" (Physical Data Independence) trong hệ thống CSDL là gì?",
    "options": [
      "Khả năng tháo rời ổ cứng khỏi máy tính mà chương trình phần mềm vẫn tiếp tục chạy được",
      "Khả năng thay đổi cấu trúc lưu trữ vật lý mà không cần thay đổi lược đồ mức khái niệm",
      "Khả năng thay đổi các bảng ở mức khái niệm mà không cần viết lại các ứng dụng mức ngoài",
      "Khả năng chuyển đổi qua lại giữa hệ điều hành Windows và hệ điều hành máy Mac của Apple"
    ],
    "answer": 1,
    "explanation": "Độc lập dữ liệu vật lý: Khả năng sửa đổi lược đồ vật lý (chuyển đổi đĩa cứng, đổi cấu trúc file, thêm index) mà không làm thay đổi lược đồ mức khái niệm (và do đó không ảnh hưởng mức ngoài).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm Độc lập dữ liệu vật lý với Độc lập dữ liệu logic.",
      "trickWord": "Bẫy phân biệt Độc lập dữ liệu Vật lý vs Độc lập dữ liệu Logic",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Đổi đĩa/index không đổi Conceptual = Độc lập VẬT LÝ; Đổi Conceptual không đổi View = Độc lập LOGIC."
    }
  },
  {
    "id": "db-c1-t1-031",
    "question": "Người quản trị CSDL quyết định tạo thêm chỉ mục B-Tree trên cột MaSV để tăng tốc độ tìm kiếm. Mức nào trong kiến trúc 3 mức bị thay đổi trực tiếp?",
    "options": [
      "Mức khung nhìn (External Level làm thay đổi toàn bộ các form nhập liệu)",
      "Mức khái niệm (Conceptual Level làm thay đổi định nghĩa các bảng dữ liệu)",
      "Mức vật lý (Physical Level / Internal Level lưu trữ cấu trúc tệp chỉ mục)",
      "Cả ba mức vật lý, mức khái niệm và mức khung nhìn đều bị thay đổi đồng loạt"
    ],
    "answer": 2,
    "explanation": "Tạo thêm chỉ mục (Index) hoặc thay đổi cấu trúc tệp lưu trữ thuộc về Mức vật lý (Internal/Physical). Mức khái niệm và mức ngoài hoàn toàn không bị ảnh hưởng (minh chứng cho tính độc lập dữ liệu vật lý).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ tạo index làm thay đổi mức khái niệm hoặc tất cả các mức.",
      "trickWord": "Bẫy vị trí tác động của Index: Index thuần túy nằm ở mức Vật lý",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Chỉ mục (Index), băm (Hash), file đĩa = MỨC VẬT LÝ (Internal Level)!"
    }
  },
  {
    "id": "db-c1-t1-032",
    "question": "Khi phòng Đào tạo quyết định thêm cột \"NoiSinh\" vào bảng SinhVien ở mức khái niệm. Nhờ tính độc lập dữ liệu logic, điều gì sẽ xảy ra?",
    "options": [
      "Toàn bộ sinh viên trong trường bắt buộc phải thi lại từ đầu để hệ thống đồng bộ",
      "Tất cả các chương trình ứng dụng cũ đều bị lỗi biên dịch và bắt buộc phải xóa đi",
      "Hệ quản trị CSDL sẽ tự động định dạng lại toàn bộ ổ cứng máy chủ để dọn chỗ lưu",
      "Các ứng dụng tra cứu điểm cũ không sử dụng cột NoiSinh vẫn hoạt động bình thường"
    ],
    "answer": 3,
    "explanation": "Tính độc lập dữ liệu logic (Logical Data Independence) bảo vệ các chương trình ứng dụng mức ngoài: khi mở rộng lược đồ khái niệm (thêm cột, thêm bảng), các View cũ không dùng cột đó vẫn giữ nguyên tính đúng đắn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với lập trình tệp tin: thêm 1 trường vào struct là code cũ hỏng hết.",
      "trickWord": "Bẫy giá trị của Tính độc lập dữ liệu logic trong kiến trúc ANSI-SPARC",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Thêm cột mới ở Conceptual ➔ Ứng dụng cũ không dùng cột đó VẪN CHẠY BÌNH THƯỜNG!"
    }
  },
  {
    "id": "db-c1-t1-033",
    "question": "Khẳng định nào sau đây là ĐÚNG khi nói về mối quan hệ giữa Mức vật lý và Mức khái niệm?",
    "options": [
      "Mức vật lý chính là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ tin",
      "Mức khái niệm là sự cài đặt cụ thể của mức vật lý trong hệ điều hành máy tính",
      "Mức vật lý và mức khái niệm là hai khái niệm độc lập không hề có liên hệ gì với nhau",
      "Mức vật lý luôn luôn được định nghĩa trước khi người thiết kế xây dựng mức khái niệm"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục II.3.a ghi rõ: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức khái niệm để mô tả sơ đồ quan niệm. Mức vật lý là sự cài đặt cụ thể của mức khái niệm.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị nhầm thứ tự thiết kế: tưởng thiết kế file vật lý trước rồi mới đến khái niệm.",
      "trickWord": "Bẫy quan hệ cài đặt: Mức vật lý là sự CÀI ĐẶT CỤ THỂ của mức khái niệm",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Mức khái niệm (Thiết kế logic) ➔ Mức vật lý (Cài đặt lưu trữ cụ thể xuống đĩa)!"
    }
  },
  {
    "id": "db-c1-t1-034",
    "question": "Cho các nhận định về kiến trúc ba mức của hệ CSDL:\n(I) Mức khung nhìn còn được gọi là mức ngoài (External Level).\n(II) Mỗi hệ thống CSDL chỉ có thể có duy nhất một khung nhìn.\n(III) Mức vật lý mô tả cách lưu trữ dữ liệu thực tế trên đĩa.\nTổ hợp ĐÚNG là:",
    "options": [
      "Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách",
      "Nhận định (I) và nhận định (III) hoàn toàn đúng, nhận định (II) sai",
      "Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai",
      "Nhận định (II) và nhận định (III) hoàn toàn đúng, nhận định (I) sai"
    ],
    "answer": 1,
    "explanation": "(II) sai vì một hệ CSDL có thể có NHIỀU khung nhìn (External Views) cho các nhóm người dùng khác nhau. (I) và (III) hoàn toàn đúng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh đọc lướt nhận định (II) dễ tưởng mỗi CSDL chỉ có 1 View.",
      "trickWord": "Bẫy số lượng: 1 Conceptual Schema DUY NHẤT, nhưng CÓ NHIỀU External Views",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Có thể có VÔ SỐ khung nhìn (Views) cho từng người dùng, không bao giờ chỉ có duy nhất 1 View."
    }
  },
  {
    "id": "db-c1-t1-035",
    "question": "Điền vào chỗ trống: \"Sự trừu tượng hóa thế giới thực gần với người dùng CSDL được biểu diễn ở (...), còn các loại tệp giao dịch, tệp chỉ dẫn được biểu diễn ở (...).\"",
    "options": [
      "Mức khung nhìn (View) ... Mức khái niệm (Conceptual)",
      "Mức vật lý (Physical) ... Mức khái niệm (Conceptual)",
      "Mức khái niệm (Conceptual) ... Mức vật lý (Physical)",
      "Mức khái niệm (Conceptual) ... Mức khung nhìn (View)"
    ],
    "answer": 2,
    "explanation": "Giáo trình chỉ rõ: Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng. Mức vật lý chứa các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn...",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ điền ngược thứ tự giữa Khái niệm và Vật lý.",
      "trickWord": "Bẫy nội dung tương ứng của các mức trong kiến trúc 3 mức",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Trừu tượng hóa thế giới thực = Khái niệm; Tệp dữ liệu/giao dịch = Vật lý!"
    }
  },
  {
    "id": "db-c1-t1-036",
    "question": "Nhân viên thu ngân chỉ nhìn thấy thông tin hóa đơn và tổng tiền, không được phép nhìn thấy giá vốn sản phẩm. Kỹ thuật này thể hiện chức năng của mức nào?",
    "options": [
      "Mức hệ điều hành (Operating System Level kiểm soát cổng giao tiếp chuột)",
      "Mức vật lý (Physical Level giúp tối ưu hóa số vòng quay của đĩa cứng)",
      "Mức khái niệm (Conceptual Level giúp lưu trữ toàn bộ các bảng trong CSDL)",
      "Mức khung nhìn (View Level giúp bảo mật và trừu tượng hóa dữ liệu cục bộ)"
    ],
    "answer": 3,
    "explanation": "Giới hạn trường thông tin cho từng nhóm người dùng (che giấu giá vốn, chỉ hiển thị giá bán) là vai trò trực tiếp của Mức khung nhìn (View/External Level).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ bảo mật chỉ nằm ở hệ điều hành hoặc mức vật lý.",
      "trickWord": "Bẫy chức năng bảo mật phân quyền thông qua Khung nhìn (Views)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Che giấu cột nhạy cảm đối với người dùng cụ thể = MỨC KHUNG NHÌN (View)!"
    }
  },
  {
    "id": "db-c1-t1-037",
    "question": "Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về kiến trúc ba mức của hệ CSDL?",
    "options": [
      "Người sử dụng cuối luôn tương tác trực tiếp với các khối dữ liệu ở mức vật lý",
      "Kiến trúc ba mức giúp phân tách rõ ràng giữa việc sử dụng và việc cài đặt CSDL",
      "Nhờ kiến trúc ba mức, dữ liệu có được tính độc lập vật lý và độc lập logic cao",
      "Mỗi khung nhìn ở mức ngoài là một sự trừu tượng hóa của CSDL mức khái niệm"
    ],
    "answer": 0,
    "explanation": "Người dùng cuối KHÔNG BAO GIỜ tương tác trực tiếp với mức vật lý; họ tương tác thông qua mức ngoài (khung nhìn) và các ứng dụng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không để ý khẳng định sai \"tương tác trực tiếp với các khối dữ liệu vật lý\".",
      "trickWord": "Bẫy tương tác mức: Người dùng KHÔNG THỂ tương tác trực tiếp mức vật lý",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.b",
      "tip": "Người dùng chỉ nhìn thấy Khung nhìn ngoài, hoàn toàn bị che giấu mức vật lý."
    }
  },
  {
    "id": "db-c1-t1-038",
    "question": "Khoa học cơ sở dữ liệu phân chia các mô hình dữ liệu thành 3 nhóm lớn. Mô hình nào sau đây thuộc nhóm \"Mô hình logic trên cơ sở ĐỐI TƯỢNG\"?",
    "options": [
      "Mô hình quan hệ (Relational Model) và Mô hình phân cấp (Hierarchical Model)",
      "Mô hình thực thể mối quan hệ (ER Model) và Mô hình hướng đối tượng (OODM)",
      "Mô hình mạng (Network Model) và Mô hình cơ sở dữ liệu quan hệ (RDBMS)",
      "Mô hình hợp nhất (Unified Model) và Mô hình bộ nhớ khung (Frame Memory)"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.1.b phân loại 3 nhóm:\na) Logic trên cơ sở đối tượng: ER, OODM, Semantic, Functional.\nb) Logic trên cơ sở bản ghi: Relational, Network, Hierarchical.\nc) Vật lý: Mô hình hợp nhất, mô hình bộ nhớ khung.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm Mô hình quan hệ (Relational) vào nhóm hướng đối tượng.",
      "trickWord": "Bẫy phân loại 3 nhóm mô hình dữ liệu: Đối tượng vs Bản ghi vs Vật lý",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.1.b",
      "tip": "ER & OODM = Logic ĐỐI TƯỢNG; Quan hệ, Mạng, Phân cấp = Logic BẢN GHI!"
    }
  },
  {
    "id": "db-c1-t1-039",
    "question": "Nhóm \"Mô hình dữ liệu logic trên cơ sở BẢN GHI\" (Record-based logical model) bao gồm chính xác các mô hình nào?",
    "options": [
      "Mô hình hợp nhất, Mô hình bộ nhớ khung và Mô hình cơ sở dữ liệu ngữ nghĩa",
      "Mô hình thực thể kết hợp (ER), Mô hình hướng đối tượng và Mô hình mạng",
      "Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp",
      "Mô hình chức năng, Mô hình quan hệ thực thể và Mô hình hướng đối tượng"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.1.b: Mô hình logic trên cơ sở bản ghi gồm: Mô hình quan hệ, Mô hình mạng, Mô hình phân cấp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm ER Model vào nhóm bản ghi vì tưởng ER có chứa các bản ghi.",
      "trickWord": "Bẫy phân nhóm Record-based: Chỉ có Quan hệ, Mạng, Phân cấp",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.1.b",
      "tip": "Bản ghi (Record-based) = Quan hệ + Mạng + Phân cấp."
    }
  },
  {
    "id": "db-c1-t1-040",
    "question": "Trong Mô hình mạng (Network Model), phát biểu nào sau đây về \"Loại liên hệ\" (Set type) là HOÀN TOÀN ĐÚNG?",
    "options": [
      "Ký hiệu bằng hình thoi kép, mũi tên luôn luôn đi hai chiều qua lại đối xứng nhau",
      "Ký hiệu bằng hình chữ nhật, có các mũi tên đi từ Loại mẫu tin thành viên đến Chủ",
      "Ký hiệu bằng đường viền kẻ đôi, không có bất kỳ chiều mũi tên liên kết nào cả",
      "Ký hiệu bằng hình bầu dục, có các mũi tên đi từ Loại mẫu tin chủ đến Thành viên"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.2.a ghi rõ: Loại liên hệ ký hiệu bằng hình bầu dục, với các mũi tên đi từ loại mẫu tin chủ ➔ loại mẫu tin thành viên.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm chiều mũi tên đi từ Thành viên về Chủ.",
      "trickWord": "Bẫy hình dáng và chiều mũi tên trong Set Type của Network Model",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.a",
      "tip": "Hình bầu dục, mũi tên ĐI TỪ CHỦ ➔ THÀNH VIÊN!"
    }
  },
  {
    "id": "db-c1-t1-041",
    "question": "Nhược điểm lớn nhất khiến Mô hình mạng (Network Model) không thích hợp để biểu diễn các CSDL quy mô lớn là gì?",
    "options": [
      "Đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa khi liên hệ thực tế phức tạp",
      "Mô hình mạng không cho phép lưu trữ bất kỳ thuộc tính nào của mẫu tin thành viên",
      "Mô hình mạng bắt buộc phải sử dụng các máy tính có kết nối mạng cáp quang quốc tế",
      "Mô hình mạng chỉ cho phép một mẫu tin thành viên có tối đa một mẫu tin chủ duy nhất"
    ],
    "answer": 0,
    "explanation": "Giáo trình nhận xét mục III.2.a: Nhược điểm của mô hình mạng là không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm đặc điểm 1 chủ của mô hình phân cấp gán sang mô hình mạng.",
      "trickWord": "Bẫy nhược điểm đồ thị có hướng phức tạp của Network Model",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.a",
      "tip": "Đồ thị có hướng chằng chịt ➔ Hạn chế diễn đạt ngữ nghĩa CSDL quy mô lớn!"
    }
  },
  {
    "id": "db-c1-t1-042",
    "question": "Đặc trưng cấu trúc cốt lõi phân biệt Mô hình phân cấp (Hierarchical Model) với Mô hình mạng (Network Model) là gì?",
    "options": [
      "Mô hình phân cấp là cấu trúc Đồ thị (Graph), mỗi nút con có thể có vô số nút cha",
      "Mô hình phân cấp là cấu trúc Cây (Tree), mỗi nút con chỉ có đúng một nút cha",
      "Mô hình phân cấp lưu trữ dữ liệu dạng bảng phẳng hai chiều gồm cột và dòng dữ liệu",
      "Mô hình phân cấp cho phép kế thừa bội giữa các lớp đối tượng trong toàn hệ thống"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.2.b: Mô hình phân cấp là một CÂY (Tree), giữa nút cha và nút con liên hệ theo quan hệ 1-nhiều. Một nút con chỉ có duy nhất một nút cha. Mô hình mạng cho phép 1 thành viên có nhiều chủ (đồ thị).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn cấu trúc giữa Cây (1 cha) và Đồ thị (nhiều cha).",
      "trickWord": "Bẫy cấu trúc Cây vs Đồ thị: Phân cấp = Cây (1 cha duy nhất)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.b",
      "tip": "Phân cấp = CÂY ➔ Con chỉ có 1 CHA duy nhất!"
    }
  },
  {
    "id": "db-c1-t1-043",
    "question": "Hạn chế lớn nhất của Mô hình phân cấp trong việc mô hình hóa thực tế doanh nghiệp là gì?",
    "options": [
      "Không thể thực hiện các phép toán thêm mới và sửa đổi dữ liệu của các nút con",
      "Không hỗ trợ lưu trữ các trường dữ liệu kiểu số nguyên và kiểu chuỗi ký tự",
      "Rất khó khăn khi biểu diễn trực tiếp các mối quan hệ nhiều - nhiều (N - N)",
      "Bắt buộc toàn bộ các máy tính trong mạng phải chạy chung một hệ điều hành Unix"
    ],
    "answer": 2,
    "explanation": "Do ràng buộc cấu trúc cây (mỗi nút con chỉ có 1 nút cha duy nhất), mô hình phân cấp rất khó khăn khi mô hình hóa các mối liên kết Nhiều - Nhiều (N - N). Muốn biểu diễn phải nhân đôi dữ liệu gây dư thừa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh không liên hệ được giữa quy tắc \"1 nút cha\" với sự bất lực khi biểu diễn quan hệ N-N.",
      "trickWord": "Bẫy biểu diễn quan hệ Nhiều-Nhiều (N-N) trong Mô hình phân cấp",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.b",
      "tip": "Chỉ có 1 cha ➔ Không thể trực tiếp diễn đạt quan hệ Nhiều-Nhiều (N-N)!"
    }
  },
  {
    "id": "db-c1-t1-044",
    "question": "Trong Mô hình thực thể kết hợp (ER Model), sự khác biệt căn bản giữa \"Thực thể mạnh\" và \"Thực thể yếu\" là gì?",
    "options": [
      "Thực thể mạnh không bao giờ có thể tham gia vào bất kỳ mối kết hợp nào của sơ đồ",
      "Thực thể mạnh có ít thuộc tính hơn và luôn luôn ký hiệu bằng đường viền kẻ đôi",
      "Thực thể yếu là thực thể chứa khóa chính, còn thực thể mạnh chỉ chứa khóa ngoại",
      "Thực thể yếu phụ thuộc tồn tại vào thực thể khác, ký hiệu bằng đường viền kẻ đôi"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.3.a ghi rõ: Thực thể yếu (Weak Entity): sự tồn tại phụ thuộc vào thực thể khác (VD: ThanNhan phụ thuộc NhanVien), ký hiệu bằng đường viền kẻ đôi. Thực thể mạnh ký hiệu bằng đường viền kẻ đơn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm ký hiệu viền kẻ đôi cho thực thể mạnh hoặc nhầm bản chất khóa.",
      "trickWord": "Bẫy Thực thể yếu: Phụ thuộc tồn tại + Viền kẻ đôi (Double outline)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Yếu = Phụ thuộc tồn tại + Viền kẻ đôi!"
    }
  },
  {
    "id": "db-c1-t1-045",
    "question": "Thuật ngữ \"Số ngôi của mối kết hợp\" (Degree of Relationship) trong mô hình ER được định nghĩa chuẩn xác là gì?",
    "options": [
      "Là tổng số các loại thực thể cùng tham gia vào mối kết hợp đó trong sơ đồ ER",
      "Là số lượng các thuộc tính tối đa được phép khai báo bên trong mối kết hợp đó",
      "Là số lượng các bản ghi thực tế đang được lưu trữ bên trong cơ sở dữ liệu đĩa",
      "Là số lượng khóa chính của các thực thể tham gia vào mối kết hợp nhân đôi lên"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.3.a ghi rõ: Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể tham gia vào mối kết hợp đó (ví dụ: mối kết hợp 2 ngôi - Binary, 3 ngôi - Ternary).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm Degree (số ngôi) với Cardinality (bậc số lượng 1-1, 1-n, n-n) hoặc số thuộc tính.",
      "trickWord": "Bẫy số ngôi (Degree) vs Bậc số lượng (Cardinality)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Số ngôi (Degree) = Số lượng THỰC THỂ tham gia vào mối kết hợp!"
    }
  },
  {
    "id": "db-c1-t1-046",
    "question": "Mối kết hợp (Relationship) trong mô hình ER có thể có thuộc tính riêng của nó hay không?",
    "options": [
      "Không, tuyệt đối chỉ có các thực thể mới được phép khai báo các thuộc tính riêng",
      "Có, mối kết hợp hoàn toàn có thể có thuộc tính riêng mô tả cho sự liên kết đó",
      "Chỉ có mối kết hợp giữa hai thực thể yếu với nhau mới được phép có thuộc tính riêng",
      "Chỉ có mối kết hợp một ngôi đệ quy mới được phép khai báo duy nhất một thuộc tính"
    ],
    "answer": 1,
    "explanation": "Giáo trình mục III.3.a khẳng định rõ ràng: \"Mối kết hợp cũng có thể có thuộc tính riêng\" (ví dụ: mối kết hợp \"Hoc\" giữa SinhVien và MonHoc có thuộc tính riêng là DiemThi).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Rất nhiều học viên cho rằng chỉ Entity mới có attribute, còn Relationship chỉ là đường nối.",
      "trickWord": "Bẫy khẳng định tuyệt đối: Mối kết hợp HOÀN TOÀN CÓ THỂ có thuộc tính riêng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Quan hệ có thuộc tính riêng: Ví dụ SVien học MHoc có thuộc tính DIEM!"
    }
  },
  {
    "id": "db-c1-t1-047",
    "question": "Cơ sở lý thuyết toán học nền tảng của Mô hình dữ liệu quan hệ (Relational Model do E.F. Codd đề xuất 1970) là gì?",
    "options": [
      "Dựa trên lý thuyết giải tích hàm và chuỗi Fourier biến đổi tín hiệu liên tục",
      "Dựa trên lý thuyết đồ thị luồng mạng cực đại của Ford-Fulkerson trong toán rời rạc",
      "Dựa trên lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ toán học phẳng",
      "Dựa trên lý thuyết xác suất thống kê Bayes và mạng nơ-ron học sâu nhân tạo"
    ],
    "answer": 2,
    "explanation": "Giáo trình mục III.4.a nêu rõ: Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ với k cố định. Dữ liệu được tổ chức thành các bảng gồm thuộc tính và bộ.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn lý thuyết đồ thị (vốn thuộc về Network model).",
      "trickWord": "Bẫy nền tảng toán học của Codd: Lý thuyết tập hợp k-bộ (Set Theory of k-tuples)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.4.a",
      "tip": "Mô hình quan hệ = Lý thuyết tập hợp các k-bộ (Relational Set Theory)!"
    }
  },
  {
    "id": "db-c1-t1-048",
    "question": "Đặc trưng cơ bản nào sau đây là của Mô hình hướng đối tượng (OODM) mà Mô hình quan hệ truyền thống KHÔNG CÓ?",
    "options": [
      "Khả năng đảm bảo tính toàn vẹn của dữ liệu bằng các phép kiểm tra giá trị",
      "Khả năng định nghĩa các trường dữ liệu kiểu số nguyên và kiểu chuỗi ký tự",
      "Khả năng liên kết giữa các bảng thông qua giá trị khóa chính và khóa ngoại",
      "Tính đóng gói (Encapsulation đóng gói cả dữ liệu lẫn phương thức hành vi)"
    ],
    "answer": 3,
    "explanation": "Giáo trình mục III.4.b: Đặc trưng của tiếp cận hướng đối tượng là: Tính đóng gói (gộp dữ liệu và phương thức), Tính đa hình, Tính kế thừa/tái sử dụng. Mô hình quan hệ truyền thống chỉ lưu dữ liệu tĩnh, không đóng gói phương thức.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm các đặc tính chung của hệ thống dữ liệu như kiểu dữ liệu, khóa.",
      "trickWord": "Bẫy đặc trưng OODM: Encapsulation (dữ liệu + phương thức hành vi)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.4.b",
      "tip": "OODM khác RDBMS ở chỗ: Có đóng gói Phương thức (Methods) cùng Dữ liệu!"
    }
  },
  {
    "id": "db-c1-t1-049",
    "question": "Hai mô hình nào sau đây đại diện cho nhóm \"Mô hình dữ liệu VẬT LÝ\" (Physical Data Model)?",
    "options": [
      "Mô hình hợp nhất (Unified Model) và Mô hình bộ nhớ khung (Frame Memory Model)",
      "Mô hình thực thể kết hợp (ER Model) và Mô hình cơ sở dữ liệu quan hệ (RDBMS)",
      "Mô hình mạng (Network Model) và Mô hình dữ liệu phân cấp hình cây (Hierarchical)",
      "Mô hình hướng đối tượng (OODM) và Mô hình dữ liệu ngữ nghĩa (Semantic Model)"
    ],
    "answer": 0,
    "explanation": "Giáo trình mục III.1.b chỉ rõ: Nhóm mô hình dữ liệu vật lý mô tả dữ liệu ở mức thấp nhất trong máy tính. Hai mô hình vật lý thường dùng là: Mô hình hợp nhất và Mô hình bộ nhớ khung.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Rất nhiều học viên không chú ý đến 2 mô hình vật lý này vì nghĩ vật lý chỉ có đĩa cứng.",
      "trickWord": "Bẫy tên gọi 2 mô hình vật lý học thuật: Hợp nhất (Unified) & Bộ nhớ khung (Frame memory)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.1.b.c",
      "tip": "Mô hình vật lý = Mô hình hợp nhất + Mô hình bộ nhớ khung!"
    }
  },
  {
    "id": "db-c1-t1-050",
    "question": "Cho các mô hình: (1) Mô hình mạng, (2) Mô hình ER, (3) Mô hình quan hệ, (4) Mô hình phân cấp, (5) Mô hình OODM. Thứ tự xuất hiện mang tính lịch sử là gì?",
    "options": [
      "Mô hình OODM ➔ Mô hình phân cấp ➔ Mô hình quan hệ ➔ Mô hình mạng viễn thông",
      "Mô hình phân cấp / mạng ➔ Mô hình quan hệ (1970) ➔ Mô hình ER / OODM",
      "Mô hình ER ➔ Mô hình OODM ➔ Mô hình mạng ➔ Mô hình phân cấp ➔ Mô hình quan hệ",
      "Mô hình quan hệ ➔ Mô hình mạng ➔ Mô hình phân cấp ➔ Mô hình OODM ➔ Mô hình ER"
    ],
    "answer": 1,
    "explanation": "Thứ tự tiến hóa lịch sử: Mô hình phân cấp và mô hình mạng (thập niên 60) ➔ Mô hình quan hệ (Codd 1970) ➔ Mô hình ER (Chen 1976) và Mô hình hướng đối tượng OODM (thập niên 80-90 và tương lai).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ ER có từ đầu tiên hoặc nhầm OODM ra đời trước RDBMS.",
      "trickWord": "Bẫy dòng thời gian tiến hóa của 5 mô hình cơ sở dữ liệu kinh điển",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III & IV",
      "tip": "Tiến hóa: Phân cấp/Mạng (60s) ➔ Quan hệ (1970) ➔ ER (1976) ➔ OODM (80s-90s)!"
    }
  }
];
