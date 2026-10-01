/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ 2
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c1-d2-001 ĐẾN db-c1-d2-040
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Part2 = [
  {
    "id": "db-c1-d2-001",
    "question": "Hệ thống dùng phương pháp xử lý tập tin (File Processing System) lưu trữ dữ liệu dưới hình thức nào?",
    "options": [
      "Lưu trữ tập trung vào một kho lưu trữ phân tán đám mây",
      "Lưu trữ dưới dạng các tập tin riêng rẽ cho từng ứng dụng",
      "Lưu trữ trực tiếp dưới dạng bảng quan hệ chuẩn hóa 3NF",
      "Lưu trữ thành các khối chuỗi khối mã hóa an toàn cao"
    ],
    "answer": 1,
    "explanation": "Để lưu trữ thông tin cho công việc của cơ quan/tổ chức, hệ thống xử lý tập tin lưu dưới dạng các file riêng rẽ, khi cần thì lấy ra thao tác, xử lý.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-002",
    "question": "Hạn chế nào sau đây KHÔNG PHẢI là nhược điểm của phương pháp xử lý tập tin theo bài giảng?",
    "options": [
      "Thời gian triển khai quá ngắn và chi phí đầu tư rất rẻ",
      "Sự dư thừa dữ liệu và không nhất quán giữa các tệp tin",
      "Khó đảm bảo tính nguyên tố của các giao tác trong hệ thống",
      "Dị thường trong truy cập tương tranh khi có nhiều người dùng"
    ],
    "answer": 0,
    "explanation": "Thời gian triển khai ngắn và chi phí đầu tư thấp là ƯU ĐIỂM của hệ thống tập tin đối với các bài toán nhỏ, không phải là nhược điểm.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-003",
    "question": "Khi cùng một thông tin khách hàng nhưng địa chỉ ở file Kế toán khác với file Bán hàng, đây là hiện tượng gì?",
    "options": [
      "Hiện tượng bảo vệ an toàn dữ liệu mức cao nhất của máy chủ",
      "Hiện tượng tính toán sai lệch của bộ xử lý số học và logic",
      "Hiện tượng không nhất quán dữ liệu (Data Inconsistency)",
      "Hiện tượng tối ưu hóa không gian lưu trữ của hệ điều hành"
    ],
    "answer": 2,
    "explanation": "Tính không nhất quán (Data Inconsistency) là tình trạng tại một thời điểm, thông tin về cùng một đối tượng có sự khác nhau trên các tập tin khác nhau trong cùng hệ thống.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-004",
    "question": "Khi một sự cố mất điện xảy ra giữa chừng trong giao tác chuyển tiền của hệ thống tập tin, hậu quả thường gặp là gì?",
    "options": [
      "Hệ thống tự động hoàn tiền về tài khoản nguồn ngay tức khắc",
      "Giao dịch được tự động chuyển sang máy chủ dự phòng ở Mỹ",
      "Đĩa cứng tự động sửa lỗi và cân bằng lại số dư cho cả hai",
      "Dữ liệu rơi vào trạng thái dở dang và mất tính nhất quán"
    ],
    "answer": 3,
    "explanation": "Hệ thống tập tin khó đảm bảo tính nguyên tố (All-or-Nothing). Khi mất điện giữa chừng, tài khoản gửi đã bị trừ nhưng tài khoản nhận chưa được cộng, khiến hệ thống mất nhất quán.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-005",
    "question": "Tại sao việc thay đổi các quy tắc ràng buộc nghiệp vụ trong hệ thống tập tin lại tốn kém công sức và dễ sai sót?",
    "options": [
      "Vì các ràng buộc bị phân tán và nhúng trực tiếp trong mã nguồn",
      "Vì hệ điều hành cấm người quản trị không được sửa đổi tập tin",
      "Vì dung lượng đĩa cứng quá nhỏ không đủ ghi nhớ các quy tắc mới",
      "Vì các lập trình viên bắt buộc phải thi lại chứng chỉ quốc tế"
    ],
    "answer": 0,
    "explanation": "Trong hệ thống tập tin, quy tắc nghiệp vụ nằm rải rác trong code của từng chương trình. Khi đổi quy tắc, phải rà soát và sửa đổi đồng loạt toàn bộ các chương trình ứng dụng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-006",
    "question": "Yếu tố \"An toàn dữ liệu\" (Data Security) trong hệ thống xử lý thông tin bao gồm những khía cạnh nào dưới đây?",
    "options": [
      "Trang bị bàn ghế công thái học và bàn phím cơ chống ồn cho nhân sự",
      "Mua sắm máy lạnh công suất lớn và bình cứu hỏa tự động trong phòng",
      "Cơ chế bảo mật, phân cấp đối tượng sử dụng và sao lưu dự phòng",
      "Lắp đặt camera giám sát cổng ra vào cơ quan và khóa cửa cuốn điện"
    ],
    "answer": 2,
    "explanation": "Giáo trình nêu rõ: An toàn dữ liệu bao gồm: cơ chế bảo mật, phân cấp đối tượng sử dụng dữ liệu, sao lưu dữ liệu dự phòng (backup).",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-007",
    "question": "Tình huống: Giả sử một thư viện trường học dùng các file Excel riêng lẻ để quản lý mượn sách. Bất cập nào sẽ xuất hiện khi sinh viên mượn quá hạn?",
    "options": [
      "Phần mềm Excel sẽ tự động gửi tin nhắn SMS cảnh báo phụ huynh",
      "Khó kiểm tra ràng buộc sách quá hạn nếu không mở từng file dò thủ công",
      "Máy tính của thủ thư sẽ tự động chuyển đổi dữ liệu sang CSDL Oracle",
      "Sinh viên mượn sách quá hạn sẽ bị trừ điểm rèn luyện tự động ngay"
    ],
    "answer": 1,
    "explanation": "Vì dữ liệu phân tán trên các file riêng rẽ và thiếu cơ chế toàn vẹn tự động, việc kiểm tra ràng buộc mượn sách đòi hỏi mở từng file tra cứu thủ công, rất dễ bỏ sót và tốn thời gian.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay suy diễn Excel có thể tự gửi SMS hoặc tự động trừ điểm rèn luyện.",
      "trickWord": "Bẫy bất cập kiểm soát ràng buộc toàn vẹn (Integrity) trong môi trường tập tin riêng rẽ",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b",
      "tip": "Hệ thống file riêng rẽ = Thiếu kiểm soát toàn vẹn tập trung ➔ Buộc phải dò tìm thủ công, dễ sai lệch."
    }
  },
  {
    "id": "db-c1-d2-008",
    "question": "Điểm khác biệt CỐT LÕI NHẤT giữa phương pháp tiếp cận tập tin và tiếp cận Cơ sở dữ liệu là gì?",
    "options": [
      "Tiếp cận CSDL dùng màn hình cong, tiếp cận tập tin dùng màn phẳng",
      "Tiếp cận CSDL không cần người quản trị, hệ thống tự động hoàn toàn",
      "Tiếp cận tập tin chỉ chạy trên máy chủ Linux, CSDL chỉ chạy Windows",
      "Tiếp cận CSDL tập trung hóa dữ liệu và tách rời dữ liệu khỏi ứng dụng"
    ],
    "answer": 3,
    "explanation": "Điểm khác biệt cốt lõi: Tiếp cận CSDL tập trung hóa dữ liệu, loại bỏ trùng lặp và tách rời định nghĩa cấu trúc dữ liệu khỏi mã nguồn ứng dụng, đem lại tính độc lập dữ liệu cao.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với yếu tố phần cứng hiển thị hoặc hệ điều hành máy chủ.",
      "trickWord": "Bẫy bản chất khác biệt giữa File Approach và Database Approach",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.c & II.1",
      "tip": "Bản chất Database Approach = Tập trung hóa dữ liệu + Độc lập giữa dữ liệu và chương trình ứng dụng."
    }
  },
  {
    "id": "db-c1-d2-009",
    "question": "Mục tiêu chính của việc lưu trữ Cơ sở dữ liệu trên các thiết bị nhớ ngoài (thiết bị trừ tin) là gì?",
    "options": [
      "Để giảm độ sáng của màn hình làm việc giúp bảo vệ mắt cho người dùng",
      "Để tăng tốc độ tính toán của các lệnh số học trong bộ xử lý ALU",
      "Để dữ liệu không bị mất đi khi tắt máy tính hoặc mất nguồn điện",
      "Để lập trình viên không cần phải viết chú thích trong mã nguồn code"
    ],
    "answer": 2,
    "explanation": "CSDL được lưu trữ trên bộ nhớ ngoài (như đĩa cứng SSD/HDD) nhằm mục đích bảo toàn dữ liệu lâu dài, không bị biến mất khi tắt máy hoặc gặp sự cố mất điện.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-010",
    "question": "Viết tắt DBMS trong lĩnh vực công nghệ thông tin là tên viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "Digital Business Management Software for Enterprise",
      "Database Management System (Hệ quản trị Cơ sở dữ liệu)",
      "Direct Binary Memory Storage for Operating Systems",
      "Dynamic Base Modeling Schema for Computer Network"
    ],
    "answer": 1,
    "explanation": "DBMS là viết tắt của Database Management System, trong tiếng Việt dịch là Hệ quản trị Cơ sở dữ liệu.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-011",
    "question": "Đối tượng nào trong hệ thống CSDL có vai trò lập trình xây dựng các phần mềm ứng dụng khai thác dữ liệu?",
    "options": [
      "Chuyên viên tin học biết khai thác CSDL (Application Programmers)",
      "Người sử dụng không chuyên về tin học tại các phòng ban",
      "Nhân viên bảo vệ tòa nhà trung tâm máy chủ của doanh nghiệp",
      "Người dùng vãng lai truy cập website để đọc tin tức giải trí"
    ],
    "answer": 0,
    "explanation": "Chuyên viên tin học (Application Programmers) là các kỹ sư phần mềm am hiểu lập trình, có nhiệm vụ xây dựng các ứng dụng nghiệp vụ tương tác với CSDL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-012",
    "question": "Trong kiến trúc hệ thống CSDL, ngôn ngữ truy vấn có cấu trúc SQL đóng vai trò gì giữa người dùng và CSDL?",
    "options": [
      "Là ngôn ngữ bậc thấp dùng để nạp trực tiếp vào BIOS của máy chủ",
      "Là giao thức truyền tín hiệu sóng radio tầm xa qua vệ tinh viễn thông",
      "Là công cụ dùng để thiết kế bản vẽ mạch điện tử in trên bo mạch",
      "Là ngôn ngữ bậc cao giúp người dùng truy xuất và thao tác trên CSDL"
    ],
    "answer": 3,
    "explanation": "HQTCSDL cung cấp ngôn ngữ bậc cao (như SQL) đóng vai trò là giao diện trung gian cho phép người dùng truy xuất, tìm kiếm và thao tác dữ liệu một cách trực quan.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-013",
    "question": "Khả năng chia sẻ thông tin cao của CSDL mang lại lợi ích thực tiễn nào cho doanh nghiệp?",
    "options": [
      "Nhiều phòng ban và ứng dụng cùng khai thác một nguồn dữ liệu đồng bộ",
      "Mỗi nhân viên tự mua một máy chủ riêng đặt tại nhà để lưu dữ liệu",
      "Doanh nghiệp không cần phải trả tiền bản quyền hệ điều hành máy tính",
      "Cho phép chia sẻ mật khẩu quản trị cho tất cả mọi khách hàng bên ngoài"
    ],
    "answer": 0,
    "explanation": "Khả năng chia sẻ cao cho phép nhiều người dùng ở các phòng ban khác nhau và nhiều phần mềm khác nhau cùng khai thác đồng thời một nguồn dữ liệu chuẩn xác, nhất quán.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-014",
    "question": "Công việc nào dưới đây KHÔNG THUỘC trách nhiệm chính của Người quản trị CSDL (DBA)?",
    "options": [
      "Khai báo cấu trúc CSDL và thiết lập các ràng buộc toàn vẹn dữ liệu",
      "Lập kế hoạch sao lưu dự phòng và phục hồi dữ liệu khi gặp sự cố",
      "Cấp phát và thu hồi quyền hạn truy cập CSDL của người sử dụng",
      "Trực tiếp sửa chữa màn hình máy tính và hàn linh kiện bo mạch hỏng"
    ],
    "answer": 3,
    "explanation": "Sửa chữa phần cứng vật lý, hàn vi mạch là việc của kỹ sư phần cứng, không thuộc chuyên môn tổ chức CSDL, bảo mật và phân quyền của Người quản trị CSDL (DBA).",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-015",
    "question": "Cơ chế giải quyết tranh chấp trong truy cập dữ liệu (Concurrency Control) của HQTCSDL nhằm mục đích gì?",
    "options": [
      "Tự động ngắt kết nối mạng của tất cả những ai truy cập trái phép",
      "Ngăn chặn xung đột ghi đè khi nhiều người cùng cập nhật dữ liệu",
      "Tự động giảm lương của nhân viên nếu nhập sai dữ liệu vào hệ thống",
      "Phát hiện lỗi chính tả tiếng Việt trong văn bản lưu trên hệ thống"
    ],
    "answer": 1,
    "explanation": "Cơ chế điều khiển tương tranh giải quyết tranh chấp dữ liệu khi nhiều người dùng cùng thao tác đồng thời, bảo đảm dữ liệu luôn nhất quán và không bị ghi đè mất mát.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-016",
    "question": "Một doanh nghiệp muốn xây dựng hệ thống thanh toán trực tuyến. Vì sao họ BẮT BUỘC phải dùng HQTCSDL thay vì lưu file?",
    "options": [
      "Vì các ngân hàng thương mại cấm thanh toán trực tuyến qua mạng cáp quang",
      "Vì lưu trữ bằng file không thể hiển thị được màu sắc trên màn hình máy tính",
      "Vì HQTCSDL có cơ chế quản lý giao tác (Transaction) đảm bảo tính nguyên tố",
      "Vì chỉ có HQTCSDL mới có thể cài đặt được trên hệ điều hành điện thoại"
    ],
    "answer": 2,
    "explanation": "Thanh toán tài chính đòi hỏi tính nguyên tố (Atomicity) và cô lập của Giao tác (Transaction) — tiền bị trừ ở tài khoản A thì bắt buộc phải chuyển sang tài khoản B. Chỉ HQTCSDL mới hỗ trợ quản trị giao tác an toàn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các lý do về giao diện hiển thị màu sắc hoặc quy định cấm phi lý.",
      "trickWord": "Bẫy yêu cầu quản lý giao tác (Transaction Management) trong nghiệp vụ tài chính ngân hàng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.b",
      "tip": "Nghiệp vụ tài chính/ngân hàng = Bắt buộc dùng HQTCSDL vì cần cơ chế Transaction (ACID) bảo đảm nguyên tố."
    }
  },
  {
    "id": "db-c1-d2-017",
    "question": "Tại sao việc phân quyền khai thác CSDL chi tiết đến từng đối tượng người dùng lại là thách thức nảy sinh khi dùng CSDL?",
    "options": [
      "Vì các phần mềm HQTCSDL không có tính năng đặt mật khẩu bảo vệ tài khoản",
      "Vì dữ liệu tập trung một nơi, nếu phân quyền lỏng lẻo sẽ lộ bí mật kinh doanh",
      "Vì pháp luật cấm không cho phép các công ty phân chia phòng ban nội bộ",
      "Vì người quản trị CSDL bắt buộc phải gặp trực tiếp từng khách hàng ký tên"
    ],
    "answer": 1,
    "explanation": "Trong CSDL, tất cả tài nguyên thông tin được gom về một mối. Nếu không có chính sách và cơ chế phân quyền chặt chẽ theo vai trò (Role-based access), nguy cơ lộ dữ liệu mật giữa các phòng ban là cực kỳ lớn.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn với việc phần mềm thiếu tính năng mật khẩu hoặc rào cản pháp lý.",
      "trickWord": "Bẫy thách thức bảo mật và phân quyền trong môi trường CSDL tập trung",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.c",
      "tip": "CSDL tập trung = Rủi ro rò rỉ tập trung ➔ Thách thức sống còn là phân quyền truy cập chi tiết."
    }
  },
  {
    "id": "db-c1-d2-018",
    "question": "Một HQTCSDL có chức năng \"Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ\". Điều này có nghĩa là gì?",
    "options": [
      "Kiểm tra định dạng, miền giá trị và tính hợp lệ của dữ liệu trước khi ghi đĩa",
      "Gửi thư điện tử đến cơ quan công an để xác minh nhân thân của người nhập",
      "Tự động gọi điện thoại cho khách hàng để hỏi xem họ có thực sự muốn lưu",
      "Chỉ cho phép lưu trữ dữ liệu nếu người nhập đã tốt nghiệp đại học chuyên ngành"
    ],
    "answer": 0,
    "explanation": "Kiểm tra độ tin cậy trước khi lưu trữ là việc HQTCSDL tự động thẩm định dữ liệu nhập vào có thỏa mãn các ràng buộc miền giá trị (kiểu dữ liệu, độ dài, khoảng giá trị hợp lệ) hay không trước khi ghi vào đĩa.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị đánh lừa bởi các phương án liên quan đến xác minh nhân thân hoặc bằng cấp.",
      "trickWord": "Bẫy kiểm tra độ tin cậy của dữ liệu (Data Validation) trong HQTCSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.b",
      "tip": "Kiểm tra độ tin cậy = Kiểm tra ràng buộc toàn vẹn & miền giá trị hợp lệ trước khi Commit vào CSDL."
    }
  },
  {
    "id": "db-c1-d2-019",
    "question": "Tổ chức nào đã đề xuất kiến trúc 3 mức chuẩn mực cho các hệ cơ sở dữ liệu vào thập niên 1970?",
    "options": [
      "Liên đoàn Bóng đá Thế giới (Federation of Association FIFA)",
      "Tổ chức Y tế Thế giới (World Health Organization - WHO)",
      "Hiệp hội Vận tải Hàng không Quốc tế (IATA Global Agency)",
      "Tổ chức ANSI-SPARC (American National Standards Institute)"
    ],
    "answer": 3,
    "explanation": "Kiến trúc 3 mức chuẩn của CSDL do ủy ban ANSI-SPARC (American National Standards Institute / Standards Planning And Requirements Committee) đề xuất.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-020",
    "question": "Tên gọi khác của \"Mức vật lý\" và \"Mức khung nhìn\" trong kiến trúc 3 mức ANSI-SPARC lần lượt là gì?",
    "options": [
      "Mức trung gian (Middle Level) và Mức hạt nhân (Kernel Level)",
      "Mức phần cứng (Hardware Level) và Mức giao diện (Interface)",
      "Mức trong (Internal Level) và Mức ngoài (External Level)",
      "Mức sơ cấp (Primary Level) và Mức thứ cấp (Secondary Level)"
    ],
    "answer": 2,
    "explanation": "Theo giáo trình: Mức vật lý còn gọi là Mức trong (Internal Level); Mức khung nhìn còn gọi là Mức ngoài (External Level); Mức khái niệm gọi là Conceptual/Logical.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-021",
    "question": "Sơ đồ quan niệm (Conceptual Schema) thường sử dụng mô hình nào để biểu diễn cấu trúc thế giới thực?",
    "options": [
      "Mô hình thực thể mối kết hợp (Entity-Relationship Model - ER)",
      "Mô hình điện trở tương đương trong định luật Ohm mạch điện xoay",
      "Mô hình ma trận bán dẫn vi phân trong thiết kế chip điện tử",
      "Mô hình quỹ đạo chuyển động của vệ tinh địa tĩnh quanh trái đất"
    ],
    "answer": 0,
    "explanation": "Giáo trình ghi rõ: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL, ví dụ mô hình ER).",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-022",
    "question": "Mối quan hệ bản chất giữa Mức vật lý và Mức khái niệm trong kiến trúc 3 mức là gì?",
    "options": [
      "Mức khái niệm là phần cứng, mức vật lý là ý nghĩ của người lập trình",
      "Mức vật lý là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ",
      "Hai mức này hoàn toàn không có bất kỳ mối liên hệ nào với nhau trong máy",
      "Mức khái niệm luôn luôn được tạo ra sau khi mức vật lý đã bị xóa bỏ"
    ],
    "answer": 1,
    "explanation": "Giáo trình khẳng định: Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng. Mức vật lý chính là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-023",
    "question": "Khung nhìn (View) ở mức ngoài giúp ích gì cho vấn đề bảo mật an toàn dữ liệu của tổ chức?",
    "options": [
      "Ngăn không cho người dùng mở màn hình máy tính nếu chưa quét vân tay",
      "Tự động mã hóa bàn phím người dùng bằng thuật toán lượng tử siêu bảo mật",
      "Giới hạn người dùng chỉ nhìn thấy dữ liệu họ được phép, che giấu phần còn lại",
      "Xóa sạch các tệp dữ liệu vật lý sau mỗi lần người dùng kết thúc phiên làm"
    ],
    "answer": 2,
    "explanation": "Khung nhìn (View) cung cấp một cơ chế bảo mật mạnh mẽ: mỗi người dùng hoặc nhóm người dùng chỉ được cấp quyền nhìn thấy phần dữ liệu liên quan đến nhiệm vụ của họ, che giấu các thông tin nhạy cảm khác.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-024",
    "question": "Khi nâng cấp dung lượng đĩa cứng và thay đổi thuật toán đánh chỉ số (Index), tại sao các ứng dụng không cần viết lại?",
    "options": [
      "Nhờ CPU tự động nhận diện và sửa lỗi phần mềm trong nháy mắt",
      "Nhờ người dùng không bao giờ kiểm tra kết quả truy vấn dữ liệu",
      "Nhờ các nhà mạng viễn thông hỗ trợ tự động viết lại mã nguồn code",
      "Nhờ tính độc lập dữ liệu vật lý (Physical Data Independence)"
    ],
    "answer": 3,
    "explanation": "Tính độc lập dữ liệu vật lý bảo đảm rằng các thay đổi trong việc tổ chức lưu trữ vật lý hay chỉ mục không làm thay đổi sơ đồ khái niệm, do đó các chương trình ứng dụng không cần sửa đổi.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-025",
    "question": "Tình huống: Khi bổ sung thêm một cột \"Số điện thoại dự phòng\" vào bảng SinhVien. Các ứng dụng cũ chỉ đọc cột \"MaSV, HoTen\" có bị lỗi không? Vì sao?",
    "options": [
      "Bị lỗi ngay lập tức vì cấu trúc bảng đã bị thay đổi kích thước bản ghi",
      "Bị lỗi vì hệ điều hành yêu cầu phải cài đặt lại toàn bộ phần mềm từ đầu",
      "Không bị lỗi, nhờ tính độc lập dữ liệu logic che chắn cho các khung nhìn cũ",
      "Không bị lỗi, nhưng tất cả dữ liệu cũ trong bảng SinhVien sẽ bị xóa sạch"
    ],
    "answer": 2,
    "explanation": "Nhờ tính độc lập dữ liệu logic (Logical Data Independence), việc thêm thuộc tính mới vào mức khái niệm không làm thay đổi các khung nhìn hiện có của các ứng dụng cũ, giúp ứng dụng tiếp tục hoạt động bình thường.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lo sợ bất kỳ sự thay đổi cấu trúc bảng nào cũng làm hỏng các chương trình đang chạy.",
      "trickWord": "Bẫy tính độc lập dữ liệu logic (Logical Data Independence) khi mở rộng thuộc tính",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3",
      "tip": "Thêm cột/thêm bảng mới vào mức khái niệm = Khung nhìn cũ không đổi ➔ Nhờ Độc lập dữ liệu logic."
    }
  },
  {
    "id": "db-c1-d2-026",
    "question": "Mô hình 3 mức ANSI-SPARC giải quyết triệt để vấn đề phụ thuộc dữ liệu (Data Dependency) trong hệ thống tập tin bằng cách nào?",
    "options": [
      "Bằng cách tạo ra hai tầng ánh xạ: Khung nhìn - Khái niệm và Khái niệm - Vật lý",
      "Bằng cách cấm người dùng không được phép tạo các tập tin dữ liệu mới",
      "Bằng cách gộp chung tất cả các tệp trên đĩa cứng vào trong một file nén zip",
      "Bằng cách bắt buộc tất cả nhân viên phải sử dụng chung một tài khoản đăng nhập"
    ],
    "answer": 0,
    "explanation": "ANSI-SPARC phân tách dữ liệu thành 3 mức thông qua 2 tầng ánh xạ (Mapping): Ánh xạ Ngoài - Khái niệm (External/Conceptual Mapping) và Ánh xạ Khái niệm - Trong (Conceptual/Internal Mapping), đem lại tính độc lập dữ liệu toàn diện.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người không biết cơ chế kỹ thuật giúp đạt được tính độc lập dữ liệu chính là 2 tầng ánh xạ (Mapping).",
      "trickWord": "Bẫy cơ chế ánh xạ giữa 3 mức trong kiến trúc ANSI-SPARC",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Độc lập dữ liệu đạt được nhờ 2 tầng ánh xạ: Ngoài-Khái niệm (Logic) & Khái niệm-Trong (Vật lý)."
    }
  },
  {
    "id": "db-c1-d2-027",
    "question": "Mô hình dữ liệu (Data Model) là sự hình thức hóa toán học bao gồm 2 phần cơ bản nào?",
    "options": [
      "Bàn phím nhập liệu cơ học và Màn hình tinh thể lỏng hiển thị",
      "Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu",
      "Dây dẫn cáp đồng trục truyền tín hiệu và Đầu nối jack cắm tròn",
      "Tài liệu hướng dẫn sử dụng in trên giấy và Đĩa CD cài đặt gốc"
    ],
    "answer": 1,
    "explanation": "Giáo trình định nghĩa: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-028",
    "question": "Mô hình nào sau đây KHÔNG THUỘC nhóm \"Mô hình dữ liệu logic trên cơ sở đối tượng\" (Object-based)?",
    "options": [
      "Mô hình dữ liệu ngữ nghĩa và Mô hình dữ liệu chức năng chuyên biệt",
      "Mô hình thực thể kết hợp (Entity-Relationship Model - ER Model)",
      "Mô hình dữ liệu hướng đối tượng (Object-Oriented Data Model - OODM)",
      "Mô hình phân cấp dạng cấu trúc cây phân nhánh (Hierarchical Model)"
    ],
    "answer": 3,
    "explanation": "Mô hình phân cấp (Hierarchical) thuộc nhóm Mô hình logic trên cơ sở bản ghi (Record-based), không thuộc nhóm hướng đối tượng.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-029",
    "question": "Trong mô hình mạng (Network Model), mỗi loại mẫu tin (record type) được biểu diễn trực quan bằng hình học nào?",
    "options": [
      "Được biểu diễn bằng một hình ngôi sao năm cánh có viền màu vàng",
      "Được biểu diễn bằng một hình chữ nhật đặc trưng cho một đối tượng",
      "Được biểu diễn bằng một hình elip dẹt nằm ngang có mũi tên bao quanh",
      "Được biểu diễn bằng một hình lục giác đều có các cạnh nối với nhau"
    ],
    "answer": 1,
    "explanation": "Trong mô hình mạng: Mỗi loại mẫu tin (record type) đặc trưng cho một đối tượng (VD: Khoa, SinhVien...) và được ký hiệu bằng hình chữ nhật.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-030",
    "question": "Trong mô hình phân cấp, mỗi nút con có thể có tối đa bao nhiêu nút cha (Parent Node)?",
    "options": [
      "Bắt buộc phải có đúng hai nút cha tương ứng với hai bán cầu não",
      "Có thể có vô số nút cha tùy theo số lượng người dùng truy cập",
      "Chỉ có thể có duy nhất một nút cha trong cấu trúc cây phân nhánh",
      "Không bao giờ có nút cha vì các nút hoàn toàn độc lập với nhau"
    ],
    "answer": 2,
    "explanation": "Trong cấu trúc cây chuẩn của mô hình phân cấp, mỗi nút con chỉ có duy nhất một nút cha (quan hệ 1-N). Đây là đặc trưng cơ bản và cũng là hạn chế lớn của mô hình này.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d2-031",
    "question": "Trong mô hình thực thể kết hợp (ER), mối kết hợp (Relationship Type) được biểu diễn bằng hình gì?",
    "options": [
      "Được biểu diễn bằng hình thoi nối giữa các loại thực thể tham gia",
      "Được biểu diễn bằng hình chữ nhật nét đôi có góc vuông sắc nét",
      "Được biểu diễn bằng hình tròn có dấu cộng nằm chính giữa tâm hình",
      "Được biểu diễn bằng hình parabol cong vút về phía góc phần tư thứ nhất"
    ],
    "answer": 0,
    "explanation": "Trong mô hình ER chuẩn: Mối kết hợp (Relationship Type) được ký hiệu bằng hình thoi, nối với các loại thực thể tham gia.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-032",
    "question": "Thuộc tính khóa (Key Attribute) của một loại thực thể trong mô hình ER được quy ước trình bày như thế nào?",
    "options": [
      "Tên thuộc tính được viết bằng mực đỏ và in đậm kích thước lớn",
      "Tên thuộc tính được đặt bên ngoài sơ đồ và có dấu sao đánh dấu đầu",
      "Tên thuộc tính được bao quanh bởi một hình vuông màu đen viền dày",
      "Tên thuộc tính được gạch chân nằm bên trong hình bầu dục thuộc tính"
    ],
    "answer": 3,
    "explanation": "Trong sơ đồ ER: Thuộc tính được vẽ bằng hình bầu dục, và thuộc tính khóa (Key) được phân biệt bằng cách gạch chân dưới tên thuộc tính.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-033",
    "question": "Trong mô hình dữ liệu quan hệ, mỗi dòng (Row) trong bảng đại diện cho khái niệm toán học nào?",
    "options": [
      "Đại diện cho một bộ giá trị (Tuple hay k-bộ) của quan hệ đó",
      "Đại diện cho một biến số nhị phân trong hàm logic vị từ cấp một",
      "Đại diện cho một mặt phẳng không gian trong hình học giải tích",
      "Đại diện cho một bước nhảy con trỏ chuột trên màn hình máy tính"
    ],
    "answer": 0,
    "explanation": "Trong mô hình quan hệ: Mỗi dòng của bảng là một bộ (tuple hay k-bộ), biểu diễn một thể hiện cụ thể của đối tượng thực tế.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-034",
    "question": "Khái niệm \"Tính kế thừa\" (Inheritance) trong mô hình hướng đối tượng mang lại giá trị nào sau đây?",
    "options": [
      "Tự động sao chép toàn bộ tiền tiết kiệm của người dùng vào tài khoản ngân hàng",
      "Lớp con kế thừa các thuộc tính và phương thức từ lớp cha, tăng tái sử dụng",
      "Cho phép một máy tính tự động tiếp quản bàn phím của một máy tính khác từ xa",
      "Bắt buộc các lập trình viên phải truyền lại mã nguồn cho con cháu của mình"
    ],
    "answer": 1,
    "explanation": "Tính kế thừa (Inheritance) cho phép lớp con tiếp nhận và mở rộng các thuộc tính, phương thức từ lớp cha, giúp tái sử dụng mã nguồn và giảm trùng lặp logic.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-035",
    "question": "Tại sao mô hình hướng đối tượng (OODM) được nhận định \"có thể sẽ là mô hình CSDL của tương lai\"?",
    "options": [
      "Vì mô hình hướng đối tượng cấm người dùng không được xóa dữ liệu khỏi đĩa",
      "Vì mô hình này không cần sử dụng năng lượng điện khi máy chủ hoạt động",
      "Vì chi phí mua máy tính để chạy mô hình hướng đối tượng rẻ hơn bình thường",
      "Vì có thể biểu diễn tự nhiên các kiểu dữ liệu phức tạp, đa phương tiện và đồ họa"
    ],
    "answer": 3,
    "explanation": "OODM kết hợp sức mạnh của lập trình hướng đối tượng với khả năng lưu trữ bền vững, rất phù hợp để xử lý các cấu trúc dữ liệu phức tạp, đa phương tiện, CAD/CAM và AI hiện đại.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d2-036",
    "question": "So sánh về khả năng biểu diễn quan hệ nhiều-nhiều (N-N), phát biểu nào sau đây phản ánh ĐÚNG BẢN CHẤT?",
    "options": [
      "Mô hình phân cấp hỗ trợ tự nhiên N-N; Mô hình ER bắt buộc phải chia cây",
      "Không có mô hình nào trong khoa học máy tính có thể biểu diễn được N-N",
      "Mô hình ER và Quan hệ hỗ trợ N-N dễ dàng; Mô hình phân cấp gặp bế tắc",
      "Mô hình mạng cấm hoàn toàn mối quan hệ N-N và chỉ hỗ trợ quan hệ 1-1"
    ],
    "answer": 2,
    "explanation": "Mô hình ER (qua mối kết hợp N-N) và mô hình Quan hệ (qua bảng trung gian kết hợp) giải quyết quan hệ N-N rất tự nhiên và chuẩn xác. Ngược lại, mô hình phân cấp dạng cây bị bế tắc và phải nhân bản dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa mô hình phân cấp (chỉ 1-N) và mô hình mạng hay quan hệ.",
      "trickWord": "Bẫy khả năng biểu diễn quan hệ Nhiều-Nhiều (N-N) giữa các mô hình dữ liệu",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.b & III.3.a",
      "tip": "Mô hình ER & Quan hệ = Xử lý N-N dễ dàng; Mô hình Phân cấp (Tree) = Không hỗ trợ tự nhiên N-N."
    }
  },
  {
    "id": "db-c1-d2-037",
    "question": "Trong mô hình ER, một mối kết hợp giữa 3 loại thực thể: Bác sĩ, Bệnh nhân và Thuốc được gọi là gì?",
    "options": [
      "Mối kết hợp đệ quy tự thân của thực thể Bác sĩ điều trị",
      "Mối kết hợp yếu không xác định vì thiếu thuộc tính khóa",
      "Mối kết hợp nhị phân kép gồm hai mối liên hệ tách biệt",
      "Mối kết hợp tam phân (3 ngôi - Degree 3) giữa 3 thực thể"
    ],
    "answer": 3,
    "explanation": "Số ngôi của mối kết hợp (Degree) là tổng số thực thể tham gia. Mối kết hợp gồm 3 thực thể (Bác sĩ, Bệnh nhân, Thuốc) là mối kết hợp 3 ngôi (tam phân - Ternary relationship).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với mối kết hợp nhị phân kép hoặc mối kết hợp yếu.",
      "trickWord": "Bẫy khái niệm số ngôi (Degree) của mối kết hợp 3 thực thể trong mô hình ER",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Số ngôi (Degree) = Số loại thực thể tham gia ➔ 3 thực thể tham gia = Mối kết hợp 3 ngôi (Tam phân)."
    }
  },
  {
    "id": "db-c1-d2-038",
    "question": "Tình huống: Giả sử một sinh viên học môn \"Cơ sở dữ liệu\" phải học trước môn \"Cơ sở lập trình\". Mối liên hệ này trong mô hình mạng được gọi là gì?",
    "options": [
      "Loại liên hệ đệ quy (MHOC_TRUOC / MHOC_SAU) giữa các mẫu tin",
      "Loại liên hệ vòng khép kín không xác định được chủ thành viên",
      "Hiện tượng sập nguồn dữ liệu khi hai mẫu tin trùng mã số khóa",
      "Mối quan hệ kế thừa hướng đối tượng giữa hai lớp phần mềm con"
    ],
    "answer": 0,
    "explanation": "Giáo trình Chương I mục 3.3 đưa ra ví dụ trực tiếp: Quan hệ điều kiện tiên quyết giữa môn học trước và môn học sau (MHoc_Truoc, MHoc_Sau) được biểu diễn bằng các loại liên hệ giữa mẫu tin môn học với nhau.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn mối liên hệ hướng đối tượng hoặc chu trình khép kín.",
      "trickWord": "Bẫy quan hệ điều kiện tiên quyết môn học trong ví dụ kinh điển của mô hình mạng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.a",
      "tip": "Ví dụ giáo trình: Môn học trước - Môn học sau = Liên hệ MHOC_TRUOC, MHOC_SAU trong mô hình mạng."
    }
  },
  {
    "id": "db-c1-d2-039",
    "question": "Điều kiện nào sau đây BẮT BUỘC phải thỏa mãn để một tập hợp các bảng được coi là một CSDL quan hệ chuẩn?",
    "options": [
      "Số lượng cột của mỗi bảng bắt buộc phải bằng chính xác số lượng dòng của bảng đó",
      "Tất cả các cột trong bảng đều phải có kiểu dữ liệu là số nguyên không dấu 32-bit",
      "Mỗi bảng phải có tên phân biệt, các dòng là duy nhất và mỗi ô chỉ chứa một giá trị nguyên tố",
      "Mỗi bảng bắt buộc phải có ít nhất mười nghìn dòng dữ liệu thì mới được phép lưu"
    ],
    "answer": 2,
    "explanation": "Theo chuẩn mô hình quan hệ của E.F. Codd: Mỗi quan hệ có tên phân biệt, thứ tự dòng/cột không quan trọng, các bộ là duy nhất (không trùng nhau), và mỗi thuộc tính tại mỗi ô chỉ chứa một giá trị nguyên tố (Atomic - 1NF).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ bị lừa bởi các quy định ép buộc về kiểu số nguyên, số lượng dòng tối thiểu hoặc ma trận vuông.",
      "trickWord": "Bẫy điều kiện chuẩn mực của bảng quan hệ (Relational Table) trong mô hình quan hệ",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.4.a",
      "tip": "Chuẩn bảng quan hệ = Giá trị nguyên tố (Atomic) + Tên phân biệt + Dòng duy nhất (Tuple)."
    }
  },
  {
    "id": "db-c1-d2-040",
    "question": "Tình huống phân tích: Tại sao mô hình dữ liệu quan hệ (RDBMS) lại thống trị ngành công nghiệp phần mềm suốt hơn 40 năm qua?",
    "options": [
      "Vì chính phủ các nước ban hành luật cấm các lập trình viên sử dụng bất kỳ mô hình nào khác",
      "Nhờ nền tảng toán học tập hợp vững chắc, tính độc lập dữ liệu cao và ngôn ngữ SQL chuẩn hóa",
      "Vì phần cứng máy tính chỉ có thể đọc được dữ liệu dạng bảng, không đọc được dữ liệu khác",
      "Vì chi phí trả lương cho lập trình viên SQL thấp hơn rất nhiều so với lập trình viên khác"
    ],
    "answer": 1,
    "explanation": "RDBMS thống trị hơn 4 thập kỷ nhờ: (1) Dựa trên cơ sở toán học tập hợp chặt chẽ; (2) Đảm bảo tính độc lập dữ liệu xuất sắc; (3) Ngôn ngữ SQL phi thủ tục trực quan, mạnh mẽ và được quốc tế chuẩn hóa (ANSI/ISO).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các lý do ép buộc phi lý từ chính phủ hoặc phần cứng máy tính.",
      "trickWord": "Bẫy động lực thống trị 4 thập kỷ của Mô hình dữ liệu quan hệ (RDBMS)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & IV.1",
      "tip": "Thành công của RDBMS = Nền tảng toán học tập hợp + Độc lập dữ liệu + Ngôn ngữ SQL chuẩn hóa."
    }
  }
];
