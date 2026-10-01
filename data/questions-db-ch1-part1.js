/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ 1
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c1-d1-001 ĐẾN db-c1-d1-040
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Part1 = [
  {
    "id": "db-c1-d1-001",
    "question": "Phương pháp xử lý tập tin (File Processing System) được sử dụng rộng rãi trong giai đoạn lịch sử nào?",
    "options": [
      "Giai đoạn những năm 60s đến 80s của thế kỷ XX",
      "Giai đoạn những năm 20s đến 40s của thế kỷ XX",
      "Giai đoạn những năm 90s đến 2010 của thế kỷ XX",
      "Giai đoạn từ sau năm 2015 cho đến thời điểm nay"
    ],
    "answer": 0,
    "explanation": "Giáo trình ghi rõ: Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm 60s - 80s của thế kỷ XX trước khi các hệ quản trị CSDL quan hệ trở nên phổ biến.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-002",
    "question": "Ưu điểm nổi bật nhất của phương pháp xử lý tập tin truyền thống đối với các bài toán nhỏ là gì?",
    "options": [
      "Cơ chế tự động kiểm soát truy cập tương tranh hoàn hảo",
      "Khả năng chia sẻ dữ liệu quy mô lớn cho hàng ngàn người",
      "Thời gian triển khai ngắn và chi phí đầu tư rất thấp",
      "Khả năng đảm bảo tính nguyên tố tuyệt đối của giao tác"
    ],
    "answer": 2,
    "explanation": "Hệ thống xử lý tập tin có ưu điểm là thời gian triển khai ngắn, ít tốn kém chi phí đầu tư về nhân sự và thiết bị, phù hợp với các ứng dụng nhỏ, độc lập.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-003",
    "question": "Hiện tượng lặp đi lặp lại thông tin giống nhau ở nhiều tập tin khác nhau trong tổ chức được gọi là gì?",
    "options": [
      "Hiện tượng dị thường trong truy cập tương tranh",
      "Hiện tượng dư thừa dữ liệu (Data Redundancy)",
      "Hiện tượng thiếu an toàn dữ liệu trên bộ nhớ",
      "Hiện tượng vi phạm tính nguyên tố của giao tác"
    ],
    "answer": 1,
    "explanation": "Tính dư thừa dữ liệu (Data Redundancy) là sự lặp lại của thông tin được lưu trữ ở nhiều file khác nhau, gây lãng phí dung lượng và dẫn đến không nhất quán.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-004",
    "question": "Tại sao sự dư thừa dữ liệu (Data Redundancy) lại là nguyên nhân gốc rễ gây ra sự không nhất quán dữ liệu?",
    "options": [
      "Vì kích thước file vượt quá giới hạn lưu trữ của thiết bị",
      "Vì phần cứng đĩa từ luôn tự động xóa ngẫu nhiên các file",
      "Vì hệ điều hành từ chối cho phép nhiều người cùng đọc file",
      "Vì khi cập nhật một file thì các file khác bị bỏ quên"
    ],
    "answer": 3,
    "explanation": "Khi thông tin bị nhân bản ở nhiều file, nếu có sự thay đổi nhưng chỉ cập nhật ở một file mà không đồng bộ các file còn lại, hệ thống sẽ rơi vào trạng thái không nhất quán.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-005",
    "question": "Tính chất \"hoặc thực hiện trọn vẹn, hoặc không thực hiện gì cả\" (All-or-Nothing) của giao tác gọi là gì?",
    "options": [
      "Tính độc lập vật lý của dữ liệu lưu trên đĩa",
      "Tính nguyên tố của giao tác (Atomicity Property)",
      "Tính phân cấp dạng cây của các nút trong hệ thống",
      "Tính toàn vẹn thực thể của các bảng trong CSDL"
    ],
    "answer": 1,
    "explanation": "Tính nguyên tố (Atomicity) bảo đảm một giao dịch hoặc phải hoàn thành 100% các bước, hoặc nếu gặp sự cố thì hủy bỏ toàn bộ, không để lại trạng thái dở dang.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-006",
    "question": "Trong hệ thống xử lý tập tin truyền thống, các ràng buộc toàn vẹn dữ liệu thường được lưu trữ ở đâu?",
    "options": [
      "Được nhúng trực tiếp vào mã nguồn từng chương trình",
      "Được lưu tập trung trong từ điển dữ liệu của HQTCSDL",
      "Được ghi trực tiếp lên bảng phân vùng MBR của ổ đĩa",
      "Được quản lý tự động bởi hệ điều hành máy chủ vật lý"
    ],
    "answer": 0,
    "explanation": "Ở hệ thống tập tin, các ràng buộc toàn vẹn bị nhúng trực tiếp vào code của từng ứng dụng, khiến việc thay đổi hoặc bổ sung ràng buộc mới trở nên vô cùng khó khăn.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-007",
    "question": "Tình huống: Hai nhân viên cùng mở một file dữ liệu để sửa số dư tài khoản nhưng không có cơ chế khóa. Kết quả là gì?",
    "options": [
      "Hệ thống tự động sao lưu dữ liệu sang một máy chủ đám mây",
      "Hệ điều hành lập tức khóa vĩnh viễn tài khoản của cả hai",
      "Tập tin tự động chuyển đổi sang mô hình dữ liệu quan hệ",
      "Dị thường truy cập tương tranh làm mất dữ liệu cập nhật"
    ],
    "answer": 3,
    "explanation": "Khi nhiều người cùng cập nhật đồng thời mà thiếu cơ chế kiểm soát truy cập tương tranh (concurrency control), thao tác ghi của người này sẽ đè bẹp thao tác của người kia, gây mất mát dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghĩ hệ điều hành sẽ tự khóa tài khoản hoặc có cơ chế tự động sao lưu thông minh.",
      "trickWord": "Bẫy dị thường truy cập tương tranh (Concurrent Access Anomalies) trong hệ thống tập tin",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.b",
      "tip": "Hệ thống file KHÔNG CÓ cơ chế kiểm soát tương tranh mức bản ghi ➔ Dẫn đến dị thường ghi đè mất dữ liệu (Lost Update)."
    }
  },
  {
    "id": "db-c1-d1-008",
    "question": "Phát biểu nào sau đây phản ánh ĐÚNG NHẤT về nguyên nhân máy tính bắt buộc phải chuyển sang cách tiếp cận CSDL?",
    "options": [
      "Do giá thành ổ đĩa cứng tăng cao đột biến trong thế kỷ",
      "Do các công ty phần mềm ngừng sản xuất hệ điều hành file",
      "Do hệ thống tập tin không giải quyết được 6 hạn chế lớn",
      "Do người dùng không còn nhu cầu bảo mật thông tin nội bộ"
    ],
    "answer": 2,
    "explanation": "Để giải quyết triệt để 6 hạn chế chí mạng của hệ thống tập tin (dư thừa, không nhất quán, nguyên tố, toàn vẹn, tương tranh, an toàn), khoa học máy tính bắt buộc phải chuyển sang tiếp cận CSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn nguyên nhân là do yếu tố giá thành phần cứng hoặc ngừng hỗ trợ hệ điều hành.",
      "trickWord": "Bẫy động lực chuyển dịch phương pháp luận từ File System sang Database Approach",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục I.1.c",
      "tip": "Động lực cốt lõi = Giải quyết triệt để 6 nhược điểm cố hữu của phương pháp xử lý tập tin."
    }
  },
  {
    "id": "db-c1-d1-009",
    "question": "Theo giáo trình chuẩn, định nghĩa nào sau đây phản ánh CHÍNH XÁC bản chất của Cơ sở dữ liệu (Database)?",
    "options": [
      "Là tập hợp có cấu trúc của thông tin lưu trên bộ nhớ ngoài",
      "Là thiết bị phần cứng dùng để sao lưu dữ liệu khi mất điện",
      "Là phần mềm chuyên dụng dùng để lập trình giao diện web",
      "Là danh sách các câu lệnh truy vấn viết bằng ngôn ngữ C++"
    ],
    "answer": 0,
    "explanation": "CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin (bộ nhớ ngoài) nhằm thỏa mãn yêu cầu khai thác đồng thời cho nhiều người dùng/chương trình.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-010",
    "question": "Khẳng định nào dưới đây là CHUẨN XÁC NHẤT về mối quan hệ giữa Cơ sở dữ liệu và Hệ quản trị CSDL?",
    "options": [
      "CSDL và HQTCSDL là hai phần mềm chạy hoàn toàn độc lập",
      "HQTCSDL là phần mềm quản lý, CSDL là một thành phần bên trong",
      "CSDL là phần mềm lớn, còn HQTCSDL là tệp dữ liệu con bên trong",
      "HQTCSDL là thiết bị phần cứng, CSDL là hệ điều hành máy chủ"
    ],
    "answer": 1,
    "explanation": "Hệ quản trị CSDL là PHẦN MỀM dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN bên trong HQTCSDL.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-011",
    "question": "Hai khả năng cơ bản BẮT BUỘC phải có của một Hệ quản trị CSDL chuẩn theo giáo trình là gì?",
    "options": [
      "Cung cấp môi trường soạn thảo văn bản và bảng tính điện tử",
      "Tự động sửa chữa phần cứng và thay thế ổ đĩa khi hỏng hóc",
      "Quản lý dữ liệu mức tệp và truy cập khối lượng dữ liệu lớn",
      "Thiết kế đồ họa giao diện người dùng và biên dịch mã nguồn"
    ],
    "answer": 2,
    "explanation": "HQTCSDL bắt buộc phải có 2 khả năng cơ bản: (1) Quản lý dữ liệu ở mức xử lý tệp như một hệ điều hành; (2) Truy cập khối lượng dữ liệu lớn có hiệu quả cao.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-012",
    "question": "Nhóm đối tượng nào sử dụng CSDL thông qua các giao diện trực quan, biểu mẫu và báo cáo có sẵn?",
    "options": [
      "Các chuyên viên tin học chuyên viết hệ điều hành nhúng",
      "Người quản trị CSDL chịu trách nhiệm cấp quyền bảo mật",
      "Các nhà khoa học chuyên nghiên cứu cấu trúc vi mạch bán dẫn",
      "Người dùng không chuyên về tin học (End-Users / Naive)"
    ],
    "answer": 3,
    "explanation": "Người dùng không chuyên (End-Users / Naive Users) khai thác CSDL thông qua các ứng dụng có giao diện trực quan (GUI, biểu mẫu, menu) được lập trình sẵn.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-013",
    "question": "Ai là người chịu trách nhiệm chính trong việc tổ chức CSDL và cấp phát quyền hạn khai thác cho người dùng?",
    "options": [
      "Chuyên viên kiểm thử phần mềm ứng dụng di động trong nhóm",
      "Người quản trị CSDL (Database Administrator - viết tắt DBA)",
      "Nhân viên tiếp thị sản phẩm phần mềm của công ty công nghệ",
      "Khách hàng mua hàng trực tuyến trên website thương mại điện tử"
    ],
    "answer": 1,
    "explanation": "DBA (Database Administrator) là chuyên gia am hiểu sâu sắc, chịu trách nhiệm tổ chức CSDL (thiết kế cấu trúc, ràng buộc, bảo mật) và cấp phát quyền hạn cho mọi người dùng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-014",
    "question": "Tập hợp các phần mềm nào dưới đây ĐỀU là các Hệ quản trị Cơ sở dữ liệu (DBMS) theo giáo trình?",
    "options": [
      "Oracle, Paradox, MS Access, SQL Server, MySQL, PostgreSQL",
      "Windows 11, Ubuntu Linux, macOS Sonoma, Red Hat Enterprise",
      "Microsoft Word, Excel, PowerPoint, Outlook, OneNote, Teams",
      "Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge"
    ],
    "answer": 0,
    "explanation": "Giáo trình liệt kê các HQTCSDL thường gặp: Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-015",
    "question": "Bên cạnh các ưu điểm vượt trội, việc sử dụng CSDL tập trung đặt ra 3 thách thức lớn nào cần giải quyết?",
    "options": [
      "Chi phí mua giấy in, tiền điện chiếu sáng và bảo trì điều hòa",
      "Tốc độ gõ phím của lập trình viên và độ phân giải màn hình",
      "Trách nhiệm dữ liệu, cơ chế bảo mật phân quyền và tranh chấp",
      "Khả năng tương thích với các máy in kim đời cũ của văn phòng"
    ],
    "answer": 2,
    "explanation": "3 thách thức khi dùng CSDL: (1) Xác định trách nhiệm với tính an toàn và chính xác của dữ liệu; (2) Cơ chế bảo mật và phân quyền chi tiết; (3) Giải quyết tranh chấp truy cập đồng thời.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-016",
    "question": "Tại sao việc giảm thiểu sự trùng lặp thông tin trong CSDL lại giúp bảo đảm tính toàn vẹn (Integrity)?",
    "options": [
      "Vì người quản trị không cần phải cấp mật khẩu cho người sử dụng",
      "Vì CSDL sẽ tự động nhân bản dữ liệu sang hàng chục máy chủ khác",
      "Vì dung lượng đĩa cứng sẽ luôn trống 100% để lưu trữ dữ liệu mới",
      "Vì khi dữ liệu chỉ lưu một nơi thì các quy tắc kiểm tra sẽ nhất quán"
    ],
    "answer": 3,
    "explanation": "Khi dữ liệu không bị trùng lặp, các quy tắc ràng buộc toàn vẹn được kiểm tra và thực thi tập trung tại một nguồn duy nhất, ngăn chặn tình trạng dữ liệu mâu thuẫn hay sai lệch.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn phương án nhân bản đa máy chủ hoặc nhầm lẫn giữa tính toàn vẹn và dung lượng trống.",
      "trickWord": "Bẫy mối quan hệ bản chất giữa Giảm trùng lặp và Tính toàn vẹn dữ liệu trong CSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.1.b",
      "tip": "Giảm trùng lặp ➔ Dữ liệu duy nhất ➔ Đảm bảo Nhất quán (Consistency) & Toàn vẹn (Integrity)."
    }
  },
  {
    "id": "db-c1-d1-017",
    "question": "Một công ty dùng Excel để lưu danh bạ khách hàng. Theo quan điểm học thuật chuẩn, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Tập hợp dữ liệu danh bạ là CSDL, phần mềm Excel là HQTCSDL",
      "File Excel là phần cứng, còn thông tin danh bạ là hệ điều hành",
      "Excel không thể coi là phần mềm vì thiếu tính năng lập trình mạng",
      "Danh bạ khách hàng là HQTCSDL, còn phần mềm Excel là CSDL con"
    ],
    "answer": 0,
    "explanation": "Giáo trình nêu ví dụ thực tiễn: Tập hợp dữ liệu danh bạ khách hàng có quan hệ ngữ nghĩa chính là CSDL, còn phần mềm Excel/Access dùng để lưu trữ và xử lý chính là HQTCSDL.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Excel chỉ là bảng tính thông thường, không thể đóng vai trò HQTCSDL trong ví dụ minh họa.",
      "trickWord": "Bẫy phân biệt giữa dữ liệu (CSDL) và công cụ quản lý (HQTCSDL) qua ví dụ thực tế",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.a",
      "tip": "Dữ liệu lưu trữ = CSDL; Phần mềm thao tác/tạo lập (Excel/Access/Oracle) = HQTCSDL."
    }
  },
  {
    "id": "db-c1-d1-018",
    "question": "Nếu một hệ thống cho phép người dùng viết truy vấn bằng ngôn ngữ phi thủ tục (Non-procedural), điều đó có nghĩa là gì?",
    "options": [
      "Người dùng phải mô tả chi tiết từng bước thuật toán duyệt file",
      "Người dùng chỉ cần chỉ rõ dữ liệu cần lấy là gì, không cần nêu cách lấy",
      "Hệ thống bắt buộc người dùng phải tự cấp phát bộ nhớ RAM trên máy",
      "Người dùng không được phép truy vấn dữ liệu quá hai lần mỗi ngày"
    ],
    "answer": 1,
    "explanation": "Ngôn ngữ phi thủ tục (như SQL) cho phép người dùng chỉ định kết quả mong muốn (\"lấy cái gì\") mà không cần phải lập trình chỉ rõ giải thuật hay con đường truy xuất vật lý (\"lấy như thế nào\").",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm ngôn ngữ phi thủ tục với việc bắt buộc phải viết mã giải thuật từng bước như C/Java.",
      "trickWord": "Bẫy khái niệm ngôn ngữ phi thủ tục (Non-procedural Language) trong HQTCSDL",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.4.b",
      "tip": "Ngôn ngữ phi thủ tục (SQL) = Nêu \"What\" (Cần cái gì), HQTCSDL tự lo \"How\" (Lấy ra sao)."
    }
  },
  {
    "id": "db-c1-d1-019",
    "question": "Kiến trúc chuẩn của một hệ cơ sở dữ liệu theo mô hình ANSI-SPARC được chia thành mấy mức biểu diễn?",
    "options": [
      "Được chia thành 2 mức biểu diễn gồm mức phần mềm và phần cứng",
      "Được chia thành 5 mức biểu diễn tương ứng 5 tầng giao thức mạng",
      "Được chia thành 4 mức biểu diễn tương ứng 4 mô hình dữ liệu chính",
      "Được chia thành 3 mức biểu diễn: Mức vật lý, khái niệm và khung nhìn"
    ],
    "answer": 3,
    "explanation": "Kiến trúc chuẩn ANSI-SPARC phân chia hệ CSDL thành 3 mức trừu tượng: Mức vật lý (Internal), Mức khái niệm (Conceptual) và Mức khung nhìn (External/View).",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-020",
    "question": "Mức biểu diễn nào trong kiến trúc 3 mức thể hiện cách dữ liệu được lưu trữ thực tế trên các thiết bị đĩa từ?",
    "options": [
      "Mức khung nhìn của từng người dùng trong hệ thống (View Level)",
      "Mức khái niệm mô tả thế giới thực của toàn bộ CSDL (Conceptual)",
      "Mức vật lý của hệ thống lưu trữ trên thiết bị đĩa (Physical Level)",
      "Mức logic hướng đối tượng diễn tả mối liên kết giữa các lớp"
    ],
    "answer": 2,
    "explanation": "Mức vật lý (Physical/Internal Level) mô tả cấu trúc lưu trữ dữ liệu thực tế trên các thiết bị đĩa từ (các tệp dữ liệu, tệp chỉ dẫn, cách tổ chức bản ghi vật lý).",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-021",
    "question": "Mức khái niệm (Conceptual Schema) trong kiến trúc 3 mức đóng vai trò cốt lõi nào dưới đây?",
    "options": [
      "Là tập hợp các rãnh từ và sector vật lý trên bề mặt đĩa cứng",
      "Là sự trừu tượng hóa thế giới thực gần gũi với người dùng CSDL",
      "Là giao diện đồ họa riêng lẻ dành riêng cho từng cá nhân sử dụng",
      "Là mã nhị phân 0 và 1 được nạp trực tiếp vào thanh ghi của CPU"
    ],
    "answer": 1,
    "explanation": "Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng, mô tả toàn bộ cấu trúc logic, thực thể và mối quan hệ của CSDL. Mức vật lý là cài đặt cụ thể của mức khái niệm.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-022",
    "question": "Mỗi khung nhìn (View) ở mức ngoài trong kiến trúc 3 mức ANSI-SPARC được định nghĩa là gì?",
    "options": [
      "Là một phần hoặc sự trừu tượng hóa một phần của mức khái niệm",
      "Là bản sao chụp toàn bộ ổ cứng vật lý của máy chủ trung tâm",
      "Là một vi mạch điện tử chuyên dụng gắn trên bo mạch chủ máy chủ",
      "Là một giao thức mã hóa đường truyền mạng cục bộ không dây LAN"
    ],
    "answer": 0,
    "explanation": "Mỗi khung nhìn (View) là cách nhìn, quan điểm của từng người sử dụng đối với CSDL, thể hiện một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-023",
    "question": "Khái niệm \"Tính độc lập dữ liệu vật lý\" (Physical Data Independence) được hiểu chính xác là gì?",
    "options": [
      "Khả năng thay đổi sơ đồ khái niệm mà không ảnh hưởng tới khung nhìn",
      "Khả năng ngắt hoàn toàn kết nối vật lý với Internet khi máy chủ chạy",
      "Khả năng thay đổi cấu trúc vật lý mà không làm đổi sơ đồ khái niệm",
      "Khả năng di chuyển máy chủ vật lý từ phòng này sang phòng khác an toàn"
    ],
    "answer": 2,
    "explanation": "Độc lập dữ liệu vật lý là khả năng thay đổi cấu trúc lưu trữ vật lý (ví dụ chuyển từ HDD sang SSD, thay đổi chỉ mục) mà không phải viết lại sơ đồ khái niệm hay ứng dụng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-024",
    "question": "Khái niệm \"Tính độc lập dữ liệu logic\" (Logical Data Independence) mang lại lợi ích gì cho hệ thống?",
    "options": [
      "Tự động tăng dung lượng bộ nhớ RAM máy chủ lên gấp hai lần",
      "Bắt buộc người dùng phải học lại cú pháp truy vấn SQL từ đầu",
      "Ngăn chặn hoàn toàn mọi người dùng không được truy xuất CSDL",
      "Cho phép thay đổi sơ đồ khái niệm mà không làm đổi các khung nhìn"
    ],
    "answer": 3,
    "explanation": "Độc lập dữ liệu logic là khả năng sửa đổi sơ đồ khái niệm (như thêm bảng mới, thêm thuộc tính) mà không làm ảnh hưởng đến các khung nhìn và ứng dụng đang sử dụng.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-025",
    "question": "Tình huống: DBA quyết định tạo thêm chỉ mục B-Tree và sắp xếp lại tệp trên đĩa cứng để tăng tốc độ. Mức nào bị ảnh hưởng?",
    "options": [
      "Mức vật lý thay đổi, mức khái niệm và mức ngoài giữ nguyên vẹn",
      "Mức khung nhìn của người dùng bị thay đổi giao diện biểu mẫu",
      "Tất cả các chương trình ứng dụng của lập trình viên bị lỗi runtime",
      "Mức khái niệm bị xóa bỏ hoàn toàn và phải thiết kế lại từ đầu"
    ],
    "answer": 0,
    "explanation": "Việc tạo chỉ mục hay tổ chức lại tệp trên đĩa chỉ thuộc về mức vật lý. Nhờ tính độc lập dữ liệu vật lý, mức khái niệm và các khung nhìn mức ngoài hoàn toàn không bị ảnh hưởng.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay lo sợ khi tối ưu ổ đĩa thì chương trình ứng dụng hoặc giao diện người dùng sẽ bị phá vỡ.",
      "trickWord": "Bẫy tính độc lập dữ liệu vật lý (Physical Data Independence) trong kiến trúc 3 mức",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3",
      "tip": "Chỉnh sửa lưu trữ, chỉ mục, cấu trúc tệp = Thay đổi Mức vật lý ➔ Mức khái niệm & Khung nhìn KHÔNG ĐỔI."
    }
  },
  {
    "id": "db-c1-d1-026",
    "question": "Tình huống: Phòng Đào tạo chỉ được xem điểm tổng kết, không được xem điểm thành phần chi tiết của sinh viên. Đây là ví dụ về mức nào?",
    "options": [
      "Mức lưu trữ vật lý các byte nhị phân trên đĩa cứng máy chủ",
      "Mức biểu diễn bảng mã ký tự ASCII của ngôn ngữ lập trình C",
      "Mức khung nhìn (View Level) phân quyền hiển thị theo góc nhìn",
      "Mức kết nối dây cáp mạng quang nối giữa các giảng đường học"
    ],
    "answer": 2,
    "explanation": "Việc lọc và chỉ hiển thị một tập con dữ liệu phù hợp với nhu cầu và quyền hạn của một nhóm người dùng (Phòng Đào tạo) chính là bản chất của Mức khung nhìn (View Level / External Level).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với mức khái niệm toàn thể vì nghĩ đây là quy tắc nghiệp vụ chung của trường đại học.",
      "trickWord": "Bẫy phân định mức khung nhìn (View Level) dựa trên ngữ cảnh phân quyền người dùng",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục II.3.a",
      "tip": "Góc nhìn riêng của một nhóm người dùng (chỉ thấy phần dữ liệu được phép) = Mức khung nhìn (View)."
    }
  },
  {
    "id": "db-c1-d1-027",
    "question": "Một mô hình dữ liệu (Data Model) hoàn chỉnh theo giáo trình bắt buộc phải bao gồm 3 thành phần cốt lõi nào?",
    "options": [
      "Bàn phím gõ, Chuột máy tính điều khiển và Màn hình hiển thị màu",
      "Mô tả cấu trúc, Mô tả các thao tác và Mô tả ràng buộc toàn vẹn",
      "Dây nguồn điện lưới, Ổ cắm ba chấu và Bộ lưu điện dự phòng UPS",
      "Hệ điều hành máy chủ, Trình duyệt web và Phần mềm phòng chống virus"
    ],
    "answer": 1,
    "explanation": "Mô hình dữ liệu gồm 3 thành phần: (1) Mô tả cấu trúc dữ liệu; (2) Mô tả các thao tác trên dữ liệu (Thêm, Xóa, Sửa, Truy vấn); (3) Mô tả các ràng buộc toàn vẹn.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-028",
    "question": "Nhóm mô hình dữ liệu nào dưới đây thuộc nhóm \"Mô hình logic trên cơ sở bản ghi\" (Record-based)?",
    "options": [
      "Mô hình ER, Mô hình hướng đối tượng và Mô hình dữ liệu ngữ nghĩa",
      "Mô hình đám mây công cộng, Mô hình đám mây riêng và Mô hình lai",
      "Mô hình bộ nhớ khung, Mô hình hợp nhất và Mô hình đĩa từ quang học",
      "Mô hình quan hệ, Mô hình mạng và Mô hình phân cấp dạng cấu trúc cây"
    ],
    "answer": 3,
    "explanation": "Mô hình logic trên cơ sở bản ghi (Record-based) gồm 3 mô hình kinh điển: Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp (Hierarchical).",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-029",
    "question": "Trong mô hình mạng (Network Model), loại liên hệ (set type) giữa mẫu tin chủ và mẫu tin thành viên được ký hiệu bằng hình gì?",
    "options": [
      "Được ký hiệu bằng hình chữ nhật có đường viền nét đôi rất đậm",
      "Được ký hiệu bằng hình thoi có bốn góc nhọn cân xứng với nhau",
      "Được ký hiệu bằng hình bầu dục với mũi tên đi từ chủ sang thành viên",
      "Được ký hiệu bằng hình tam giác đều hướng đỉnh thẳng lên phía trên"
    ],
    "answer": 2,
    "explanation": "Trong mô hình mạng, loại liên hệ (set type) ký hiệu bằng hình bầu dục, có các mũi tên đi từ loại mẫu tin chủ sang loại mẫu tin thành viên.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-030",
    "question": "Mô hình phân cấp (Hierarchical Model) tổ chức dữ liệu theo cấu trúc hình học toán học nào dưới đây?",
    "options": [
      "Cấu trúc cây (Tree) gồm nút gốc, các nút cha và các nút con",
      "Cấu trúc đồ thị vô hướng có chu trình khép kín giữa các đỉnh",
      "Cấu trúc ma trận hai chiều gồm các số phức liên hợp với nhau",
      "Cấu trúc vòng tròn đồng tâm liên kết qua các vector tiếp tuyến"
    ],
    "answer": 0,
    "explanation": "Mô hình phân cấp là một cấu trúc cây (tree), trong đó các nút biểu diễn tập các thực thể, giữa nút cha và nút con liên kết theo mối quan hệ 1-nhiều.",
    "difficulty": "easy"
  },
  {
    "id": "db-c1-d1-031",
    "question": "Trong mô hình thực thể kết hợp (ER Model), thực thể yếu (Weak Entity) được ký hiệu quy ước bằng hình gì?",
    "options": [
      "Hình chữ nhật có đường viền kẻ đơn thanh mảnh nằm ngang",
      "Hình chữ nhật có đường viền kẻ đôi thể hiện sự phụ thuộc tồn tại",
      "Hình thoi có đường viền kẻ đứt khúc cách đều nhau liên tục",
      "Hình tròn đồng tâm có mũi tên chỉ hướng sang thực thể khác"
    ],
    "answer": 1,
    "explanation": "Trong mô hình ER: Thực thể mạnh ký hiệu bằng hình chữ nhật viền đơn; Thực thể yếu (phụ thuộc sự tồn tại vào thực thể khác) ký hiệu bằng hình chữ nhật viền đôi.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-032",
    "question": "Khái niệm \"Số ngôi của mối kết hợp\" (Degree of Relationship) trong mô hình ER được định nghĩa là gì?",
    "options": [
      "Số lượng bản ghi tối đa được phép lưu trữ trong bảng cơ sở dữ liệu",
      "Số lượng thuộc tính khóa có trong loại thực thể mạnh tham gia",
      "Số lần người dùng thực hiện truy vấn dữ liệu thành công trong ngày",
      "Tổng số loại thực thể tham gia vào mối kết hợp đó trong mô hình"
    ],
    "answer": 3,
    "explanation": "Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể cùng tham gia vào mối kết hợp đó (ví dụ: mối kết hợp 2 ngôi nhị phân, 3 ngôi tam phân).",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-033",
    "question": "Mô hình quan hệ (Relational Data Model) được xây dựng dựa trên nền tảng lý thuyết toán học nào?",
    "options": [
      "Lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ cố định",
      "Lý thuyết hình học phi Euclid và ma trận vi phân đạo hàm cấp hai",
      "Lý thuyết xác suất thống kê Bayes trong không gian nhiều chiều",
      "Lý thuyết mật mã đường cong elliptic bảo vệ khóa công khai"
    ],
    "answer": 0,
    "explanation": "Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ (k-tuple) với k cố định, biểu diễn dữ liệu dưới dạng bảng 2 chiều.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-034",
    "question": "Đặc trưng cơ bản nào của mô hình hướng đối tượng (OODM) cho phép đóng gói cả dữ liệu và các hành vi xử lý?",
    "options": [
      "Tính đa hình (Polymorphism) cho phép linh hoạt gọi hàm theo ngữ cảnh",
      "Tính đóng gói (Encapsulation) tích hợp thuộc tính và phương thức",
      "Tính kế thừa bội (Multiple Inheritance) từ nhiều lớp cha khác nhau",
      "Tính tái sử dụng mã nguồn thông qua việc kế thừa cấu trúc lớp"
    ],
    "answer": 1,
    "explanation": "Tính đóng gói (Encapsulation) trong hướng đối tượng cho phép gom nhóm cả thuộc tính (dữ liệu) và phương thức (hành vi/thao tác) vào trong một lớp đối tượng thống nhất.",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-035",
    "question": "Hai mô hình nào sau đây thuộc nhóm \"Mô hình dữ liệu vật lý\" (Physical Data Model) theo giáo trình?",
    "options": [
      "Mô hình thực thể kết hợp (ER) và mô hình hướng đối tượng (OODM)",
      "Mô hình phân cấp dạng cây và mô hình mạng dạng đồ thị có hướng",
      "Mô hình hợp nhất và mô hình bộ nhớ khung mô tả mức lưu trữ thấp",
      "Mô hình quan hệ bảng k-bộ và mô hình dữ liệu ngữ nghĩa logic"
    ],
    "answer": 2,
    "explanation": "Giáo trình khẳng định rõ: Hai mô hình dữ liệu vật lý thường dùng là mô hình hợp nhất và mô hình bộ nhớ khung (mô tả dữ liệu ở mức thấp nhất trong máy tính).",
    "difficulty": "medium"
  },
  {
    "id": "db-c1-d1-036",
    "question": "Đâu là NHƯỢC ĐIỂM LỚN NHẤT của mô hình mạng (Network Model) khi áp dụng cho các hệ thống CSDL quy mô lớn?",
    "options": [
      "Hệ thống hoàn toàn không cho phép lưu trữ dữ liệu dạng số nguyên",
      "Không thể kết nối các máy tính với nhau qua mạng cáp đồng nội bộ",
      "Bắt buộc người dùng phải mua bản quyền phần mềm với giá rất đắt",
      "Đồ thị có hướng bị hạn chế khả năng diễn đạt các liên hệ phức tạp"
    ],
    "answer": 3,
    "explanation": "Nhược điểm mô hình mạng: Không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn lý do bản quyền đắt đỏ hoặc không hỗ trợ kiểu số.",
      "trickWord": "Bẫy nhược điểm bản chất của mô hình mạng (Network Model) trong CSDL lớn",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.a",
      "tip": "Nhược điểm mô hình mạng = Đồ thị có hướng hạn chế diễn đạt ngữ nghĩa liên hệ phức tạp khi mở rộng quy mô lớn."
    }
  },
  {
    "id": "db-c1-d1-037",
    "question": "Trong mô hình phân cấp, nếu một sinh viên đăng ký học nhiều môn, và mỗi môn có nhiều sinh viên (N-N), hạn chế nào sẽ bộc lộ?",
    "options": [
      "Hệ thống tự động chuyển sang mô hình ER mà không cần sự đồng ý",
      "Bắt buộc phải nhân bản dữ liệu gây dư thừa vì cây chỉ hỗ trợ 1-N",
      "Máy chủ sẽ tự động tắt nguồn để bảo vệ bộ nhớ RAM không bị cháy",
      "Mô hình phân cấp giải quyết hoàn hảo mối quan hệ N-N không cần đổi"
    ],
    "answer": 1,
    "explanation": "Cấu trúc cây của mô hình phân cấp chỉ hỗ trợ quan hệ cha-con 1-N. Để biểu diễn quan hệ Nhiều-Nhiều (N-N), bắt buộc phải nhân bản thông tin nút ở nhiều nhánh cây, dẫn đến dư thừa dữ liệu.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ lầm tưởng mô hình phân cấp giải quyết tốt N-N hoặc hệ thống tự động đổi mô hình.",
      "trickWord": "Bẫy cấu trúc cây phân cấp (Hierarchical Tree) không hỗ trợ tự nhiên quan hệ N-N",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.2.b",
      "tip": "Mô hình phân cấp = Chỉ hỗ trợ 1-N ➔ Để biểu diễn N-N buộc phải nhân bản dữ liệu (Dư thừa)."
    }
  },
  {
    "id": "db-c1-d1-038",
    "question": "Mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER thể hiện trường hợp thực tế nào dưới đây?",
    "options": [
      "Một bảng dữ liệu bị xóa bỏ nhưng vẫn xuất hiện trong bộ nhớ tạm",
      "Hai người dùng cùng cập nhật dữ liệu một lúc gây ra lỗi xung đột",
      "Một loại thực thể tự tham gia vào mối kết hợp với chính bản thân nó",
      "Một cơ sở dữ liệu được sao lưu định kỳ hàng tuần sang ổ cứng ngoài"
    ],
    "answer": 2,
    "explanation": "Mối quan hệ đệ quy là mối kết hợp mà trong đó cùng một loại thực thể tham gia nhiều hơn một lần với các vai trò khác nhau (ví dụ: Môn học tiên quyết: Môn học [trước] kết hợp với Môn học [sau]).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với khái niệm truy cập đồng thời hoặc xóa dữ liệu trong bộ nhớ tạm.",
      "trickWord": "Bẫy mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Mối quan hệ đệ quy = Thực thể liên kết với chính nó (VD: Môn học tiên quyết MHoc_Truoc - MHoc_Sau)."
    }
  },
  {
    "id": "db-c1-d1-039",
    "question": "Khi so sánh giữa Mô hình quan hệ và Mô hình hướng đối tượng, nhận định nào sau đây là CHUẨN XÁC NHẤT?",
    "options": [
      "Mô hình quan hệ tách rời dữ liệu và hàm; Hướng đối tượng đóng gói cả hai",
      "Mô hình quan hệ chỉ lưu được số nguyên, Hướng đối tượng chỉ lưu ký tự",
      "Mô hình hướng đối tượng ra đời vào những năm 60s trước mô hình quan hệ",
      "Mô hình quan hệ dựa trên đồ thị có hướng, còn Hướng đối tượng dựa trên cây"
    ],
    "answer": 0,
    "explanation": "Mô hình quan hệ tổ chức dữ liệu thành các bảng tách biệt với chương trình xử lý. Ngược lại, mô hình hướng đối tượng (OODM) đóng gói cả dữ liệu (thuộc tính) và hành vi (phương thức) trong cùng một lớp.",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn về thời gian ra đời hoặc kiểu dữ liệu mà hai mô hình hỗ trợ.",
      "trickWord": "Bẫy so sánh bản chất kiến trúc giữa Mô hình Quan hệ (RDBMS) và Hướng đối tượng (OODM)",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & III.4.b",
      "tip": "Mô hình Quan hệ = Dữ liệu tách rời hàm (Bảng k-bộ); Hướng đối tượng = Đóng gói dữ liệu + Phương thức (Class)."
    }
  },
  {
    "id": "db-c1-d1-040",
    "question": "Tình huống tổng hợp: Để biểu diễn mối quan hệ phụ thuộc tồn tại giữa Nhân viên và Thân nhân của họ, mô hình ER dùng cách nào?",
    "options": [
      "Ép buộc Nhân viên và Thân nhân phải lưu chung vào một thư mục tập tin",
      "Xóa bỏ toàn bộ thông tin của Nhân viên để chỉ lưu lại thông tin Thân nhân",
      "Dùng mô hình mạng với mũi tên đi ngược từ Thân nhân sang cho Nhân viên",
      "Khai báo Thân nhân là thực thể yếu viền đôi phụ thuộc Nhân viên viền đơn"
    ],
    "answer": 3,
    "explanation": "Giáo trình chỉ rõ ví dụ: ThânNhan là thực thể yếu (ký hiệu hình chữ nhật nét đôi) vì sự tồn tại của nó hoàn toàn phụ thuộc vào thực thể mạnh NhanVien (hình chữ nhật nét đơn).",
    "difficulty": "hard",
    "isTrick": true,
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn cách gộp chung vào 1 bảng hoặc nhầm lẫn chiều mũi tên.",
      "trickWord": "Bẫy nhận diện thực thể yếu (Weak Entity) phụ thuộc tồn tại trong mô hình ER",
      "citation": "Giáo trình Hệ CSDL — Chương 1, Mục III.3.a",
      "tip": "Thân nhân phụ thuộc Nhân viên = Thực thể yếu (Weak Entity - viền đôi) phụ thuộc Thực thể mạnh (viền đơn)."
    }
  }
];
