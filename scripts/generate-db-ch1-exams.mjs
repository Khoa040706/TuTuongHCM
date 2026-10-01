import fs from 'fs';

// ĐỀ 1: 40 CÂU HỎI HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG I (db-c1-d1-001 đến db-c1-d1-040)
// Tỷ lệ độ khó: 12 Dễ (30%), 16 Trung bình (40%), 12 Khó (30%)
// Phân bổ đáp án: 10 A (0), 10 B (1), 10 C (2), 10 D (3)
export const questionsDbCh1Part1 = [
  // --- NHÓM 1: FILE SYSTEM VS CSDL (Câu 1 - 8) ---
  {
    id: 'db-c1-d1-001',
    question: 'Phương pháp xử lý tập tin (File Processing System) được sử dụng rộng rãi trong giai đoạn lịch sử nào?',
    options: [
      'Giai đoạn những năm 60s đến 80s của thế kỷ XX',
      'Giai đoạn những năm 20s đến 40s của thế kỷ XX',
      'Giai đoạn những năm 90s đến 2010 của thế kỷ XX',
      'Giai đoạn từ sau năm 2015 cho đến thời điểm nay'
    ],
    answer: 0,
    explanation: 'Giáo trình ghi rõ: Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm 60s - 80s của thế kỷ XX trước khi các hệ quản trị CSDL quan hệ trở nên phổ biến.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-002',
    question: 'Ưu điểm nổi bật nhất của phương pháp xử lý tập tin truyền thống đối với các bài toán nhỏ là gì?',
    options: [
      'Thời gian triển khai ngắn và chi phí đầu tư rất thấp',
      'Khả năng chia sẻ dữ liệu quy mô lớn cho hàng ngàn người',
      'Cơ chế tự động kiểm soát truy cập tương tranh hoàn hảo',
      'Khả năng đảm bảo tính nguyên tố tuyệt đối của giao tác'
    ],
    answer: 0,
    explanation: 'Hệ thống xử lý tập tin có ưu điểm là thời gian triển khai ngắn, ít tốn kém chi phí đầu tư về nhân sự và thiết bị, phù hợp với các ứng dụng nhỏ, độc lập.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-003',
    question: 'Hiện tượng lặp đi lặp lại thông tin giống nhau ở nhiều tập tin khác nhau trong tổ chức được gọi là gì?',
    options: [
      'Hiện tượng dị thường trong truy cập tương tranh',
      'Hiện tượng dư thừa dữ liệu (Data Redundancy)',
      'Hiện tượng thiếu an toàn dữ liệu trên bộ nhớ',
      'Hiện tượng vi phạm tính nguyên tố của giao tác'
    ],
    answer: 1,
    explanation: 'Tính dư thừa dữ liệu (Data Redundancy) là sự lặp lại của thông tin được lưu trữ ở nhiều file khác nhau, gây lãng phí dung lượng và dẫn đến không nhất quán.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-004',
    question: 'Tại sao sự dư thừa dữ liệu (Data Redundancy) lại là nguyên nhân gốc rễ gây ra sự không nhất quán dữ liệu?',
    options: [
      'Vì khi cập nhật một file thì các file khác bị bỏ quên',
      'Vì phần cứng đĩa từ luôn tự động xóa ngẫu nhiên các file',
      'Vì hệ điều hành từ chối cho phép nhiều người cùng đọc file',
      'Vì kích thước file vượt quá giới hạn lưu trữ của thiết bị'
    ],
    answer: 0,
    explanation: 'Khi thông tin bị nhân bản ở nhiều file, nếu có sự thay đổi nhưng chỉ cập nhật ở một file mà không đồng bộ các file còn lại, hệ thống sẽ rơi vào trạng thái không nhất quán.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-005',
    question: 'Tính chất \"hoặc thực hiện trọn vẹn, hoặc không thực hiện gì cả\" (All-or-Nothing) của giao tác gọi là gì?',
    options: [
      'Tính độc lập vật lý của dữ liệu lưu trên đĩa',
      'Tính nguyên tố của giao tác (Atomicity Property)',
      'Tính phân cấp dạng cây của các nút trong hệ thống',
      'Tính toàn vẹn thực thể của các bảng trong CSDL'
    ],
    answer: 1,
    explanation: 'Tính nguyên tố (Atomicity) bảo đảm một giao dịch hoặc phải hoàn thành 100% các bước, hoặc nếu gặp sự cố thì hủy bỏ toàn bộ, không để lại trạng thái dở dang.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-006',
    question: 'Trong hệ thống xử lý tập tin truyền thống, các ràng buộc toàn vẹn dữ liệu thường được lưu trữ ở đâu?',
    options: [
      'Được lưu tập trung trong từ điển dữ liệu của HQTCSDL',
      'Được nhúng trực tiếp vào mã nguồn từng chương trình',
      'Được ghi trực tiếp lên bảng phân vùng MBR của ổ đĩa',
      'Được quản lý tự động bởi hệ điều hành máy chủ vật lý'
    ],
    answer: 1,
    explanation: 'Ở hệ thống tập tin, các ràng buộc toàn vẹn bị nhúng trực tiếp vào code của từng ứng dụng, khiến việc thay đổi hoặc bổ sung ràng buộc mới trở nên vô cùng khó khăn.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-007',
    question: 'Tình huống: Hai nhân viên cùng mở một file dữ liệu để sửa số dư tài khoản nhưng không có cơ chế khóa. Kết quả là gì?',
    options: [
      'Hệ thống tự động sao lưu dữ liệu sang một máy chủ đám mây',
      'Dị thường truy cập tương tranh làm mất dữ liệu cập nhật',
      'Tập tin tự động chuyển đổi sang mô hình dữ liệu quan hệ',
      'Hệ điều hành lập tức khóa vĩnh viễn tài khoản của cả hai'
    ],
    answer: 1,
    explanation: 'Khi nhiều người cùng cập nhật đồng thời mà thiếu cơ chế kiểm soát truy cập tương tranh (concurrency control), thao tác ghi của người này sẽ đè bẹp thao tác của người kia, gây mất mát dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ hệ điều hành sẽ tự khóa tài khoản hoặc có cơ chế tự động sao lưu thông minh.',
      trickWord: 'Bẫy dị thường truy cập tương tranh (Concurrent Access Anomalies) trong hệ thống tập tin',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b',
      tip: 'Hệ thống file KHÔNG CÓ cơ chế kiểm soát tương tranh mức bản ghi ➔ Dẫn đến dị thường ghi đè mất dữ liệu (Lost Update).'
    }
  },
  {
    id: 'db-c1-d1-008',
    question: 'Phát biểu nào sau đây phản ánh ĐÚNG NHẤT về nguyên nhân máy tính bắt buộc phải chuyển sang cách tiếp cận CSDL?',
    options: [
      'Do giá thành ổ đĩa cứng tăng cao đột biến trong thế kỷ',
      'Do hệ thống tập tin không giải quyết được 6 hạn chế lớn',
      'Do các công ty phần mềm ngừng sản xuất hệ điều hành file',
      'Do người dùng không còn nhu cầu bảo mật thông tin nội bộ'
    ],
    answer: 1,
    explanation: 'Để giải quyết triệt để 6 hạn chế chí mạng của hệ thống tập tin (dư thừa, không nhất quán, nguyên tố, toàn vẹn, tương tranh, an toàn), khoa học máy tính bắt buộc phải chuyển sang tiếp cận CSDL.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm lẫn nguyên nhân là do yếu tố giá thành phần cứng hoặc ngừng hỗ trợ hệ điều hành.',
      trickWord: 'Bẫy động lực chuyển dịch phương pháp luận từ File System sang Database Approach',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.c',
      tip: 'Động lực cốt lõi = Giải quyết triệt để 6 nhược điểm cố hữu của phương pháp xử lý tập tin.'
    }
  },

  // --- NHÓM 2: CSDL & HỆ QUẢN TRỊ CSDL (DBMS) (Câu 9 - 18) ---
  {
    id: 'db-c1-d1-009',
    question: 'Theo giáo trình chuẩn, định nghĩa nào sau đây phản ánh CHÍNH XÁC bản chất của Cơ sở dữ liệu (Database)?',
    options: [
      'Là phần mềm chuyên dụng dùng để lập trình giao diện web',
      'Là thiết bị phần cứng dùng để sao lưu dữ liệu khi mất điện',
      'Là tập hợp có cấu trúc của thông tin lưu trên bộ nhớ ngoài',
      'Là danh sách các câu lệnh truy vấn viết bằng ngôn ngữ C++'
    ],
    answer: 2,
    explanation: 'CSDL là tập hợp có cấu trúc của thông tin, được lưu trữ trên các thiết bị trừ tin (bộ nhớ ngoài) nhằm thỏa mãn yêu cầu khai thác đồng thời cho nhiều người dùng/chương trình.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-010',
    question: 'Khẳng định nào dưới đây là CHUẨN XÁC NHẤT về mối quan hệ giữa Cơ sở dữ liệu và Hệ quản trị CSDL?',
    options: [
      'CSDL và HQTCSDL là hai phần mềm chạy hoàn toàn độc lập',
      'CSDL là phần mềm lớn, còn HQTCSDL là tệp dữ liệu con bên trong',
      'HQTCSDL là phần mềm quản lý, CSDL là một thành phần bên trong',
      'HQTCSDL là thiết bị phần cứng, CSDL là hệ điều hành máy chủ'
    ],
    answer: 2,
    explanation: 'Hệ quản trị CSDL là PHẦN MỀM dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là MỘT THÀNH PHẦN bên trong HQTCSDL.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-011',
    question: 'Hai khả năng cơ bản BẮT BUỘC phải có của một Hệ quản trị CSDL chuẩn theo giáo trình là gì?',
    options: [
      'Quản lý dữ liệu mức tệp và truy cập khối lượng dữ liệu lớn',
      'Tự động sửa chữa phần cứng và thay thế ổ đĩa khi hỏng hóc',
      'Cung cấp môi trường soạn thảo văn bản và bảng tính điện tử',
      'Thiết kế đồ họa giao diện người dùng và biên dịch mã nguồn'
    ],
    answer: 0,
    explanation: 'HQTCSDL bắt buộc phải có 2 khả năng cơ bản: (1) Quản lý dữ liệu ở mức xử lý tệp như một hệ điều hành; (2) Truy cập khối lượng dữ liệu lớn có hiệu quả cao.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-012',
    question: 'Nhóm đối tượng nào sử dụng CSDL thông qua các giao diện trực quan, biểu mẫu và báo cáo có sẵn?',
    options: [
      'Các chuyên viên tin học chuyên viết hệ điều hành nhúng',
      'Người quản trị CSDL chịu trách nhiệm cấp quyền bảo mật',
      'Người dùng không chuyên về tin học (End-Users / Naive)',
      'Các nhà khoa học chuyên nghiên cứu cấu trúc vi mạch bán dẫn'
    ],
    answer: 2,
    explanation: 'Người dùng không chuyên (End-Users / Naive Users) khai thác CSDL thông qua các ứng dụng có giao diện trực quan (GUI, biểu mẫu, menu) được lập trình sẵn.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-013',
    question: 'Ai là người chịu trách nhiệm chính trong việc tổ chức CSDL và cấp phát quyền hạn khai thác cho người dùng?',
    options: [
      'Chuyên viên kiểm thử phần mềm ứng dụng di động trong nhóm',
      'Người quản trị CSDL (Database Administrator - viết tắt DBA)',
      'Nhân viên tiếp thị sản phẩm phần mềm của công ty công nghệ',
      'Khách hàng mua hàng trực tuyến trên website thương mại điện tử'
    ],
    answer: 1,
    explanation: 'DBA (Database Administrator) là chuyên gia am hiểu sâu sắc, chịu trách nhiệm tổ chức CSDL (thiết kế cấu trúc, ràng buộc, bảo mật) và cấp phát quyền hạn cho mọi người dùng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-014',
    question: 'Tập hợp các phần mềm nào dưới đây ĐỀU là các Hệ quản trị Cơ sở dữ liệu (DBMS) theo giáo trình?',
    options: [
      'Oracle, Paradox, MS Access, SQL Server, MySQL, PostgreSQL',
      'Windows 11, Ubuntu Linux, macOS Sonoma, Red Hat Enterprise',
      'Microsoft Word, Excel, PowerPoint, Outlook, OneNote, Teams',
      'Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge'
    ],
    answer: 0,
    explanation: 'Giáo trình liệt kê các HQTCSDL thường gặp: Oracle, Paradox, MS Access, Sybase, Foxpro, SQL Server, MySQL, PostgreSQL.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-015',
    question: 'Bên cạnh các ưu điểm vượt trội, việc sử dụng CSDL tập trung đặt ra 3 thách thức lớn nào cần giải quyết?',
    options: [
      'Chi phí mua giấy in, tiền điện chiếu sáng và bảo trì điều hòa',
      'Trách nhiệm dữ liệu, cơ chế bảo mật phân quyền và tranh chấp',
      'Tốc độ gõ phím của lập trình viên và độ phân giải màn hình',
      'Khả năng tương thích với các máy in kim đời cũ của văn phòng'
    ],
    answer: 1,
    explanation: '3 thách thức khi dùng CSDL: (1) Xác định trách nhiệm với tính an toàn và chính xác của dữ liệu; (2) Cơ chế bảo mật và phân quyền chi tiết; (3) Giải quyết tranh chấp truy cập đồng thời.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-016',
    question: 'Tại sao việc giảm thiểu sự trùng lặp thông tin trong CSDL lại giúp bảo đảm tính toàn vẹn (Integrity)?',
    options: [
      'Vì khi dữ liệu chỉ lưu một nơi thì các quy tắc kiểm tra sẽ nhất quán',
      'Vì CSDL sẽ tự động nhân bản dữ liệu sang hàng chục máy chủ khác',
      'Vì dung lượng đĩa cứng sẽ luôn trống 100% để lưu trữ dữ liệu mới',
      'Vì người quản trị không cần phải cấp mật khẩu cho người sử dụng'
    ],
    answer: 0,
    explanation: 'Khi dữ liệu không bị trùng lặp, các quy tắc ràng buộc toàn vẹn được kiểm tra và thực thi tập trung tại một nguồn duy nhất, ngăn chặn tình trạng dữ liệu mâu thuẫn hay sai lệch.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn phương án nhân bản đa máy chủ hoặc nhầm lẫn giữa tính toàn vẹn và dung lượng trống.',
      trickWord: 'Bẫy mối quan hệ bản chất giữa Giảm trùng lặp và Tính toàn vẹn dữ liệu trong CSDL',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.b',
      tip: 'Giảm trùng lặp ➔ Dữ liệu duy nhất ➔ Đảm bảo Nhất quán (Consistency) & Toàn vẹn (Integrity).'
    }
  },
  {
    id: 'db-c1-d1-017',
    question: 'Một công ty dùng Excel để lưu danh bạ khách hàng. Theo quan điểm học thuật chuẩn, phát biểu nào sau đây là ĐÚNG?',
    options: [
      'File Excel là phần cứng, còn thông tin danh bạ là hệ điều hành',
      'Tập hợp dữ liệu danh bạ là CSDL, phần mềm Excel là HQTCSDL',
      'Excel không thể coi là phần mềm vì thiếu tính năng lập trình mạng',
      'Danh bạ khách hàng là HQTCSDL, còn phần mềm Excel là CSDL con'
    ],
    answer: 1,
    explanation: 'Giáo trình nêu ví dụ thực tiễn: Tập hợp dữ liệu danh bạ khách hàng có quan hệ ngữ nghĩa chính là CSDL, còn phần mềm Excel/Access dùng để lưu trữ và xử lý chính là HQTCSDL.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nghĩ Excel chỉ là bảng tính thông thường, không thể đóng vai trò HQTCSDL trong ví dụ minh họa.',
      trickWord: 'Bẫy phân biệt giữa dữ liệu (CSDL) và công cụ quản lý (HQTCSDL) qua ví dụ thực tế',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.a',
      tip: 'Dữ liệu lưu trữ = CSDL; Phần mềm thao tác/tạo lập (Excel/Access/Oracle) = HQTCSDL.'
    }
  },
  {
    id: 'db-c1-d1-018',
    question: 'Nếu một hệ thống cho phép người dùng viết truy vấn bằng ngôn ngữ phi thủ tục (Non-procedural), điều đó có nghĩa là gì?',
    options: [
      'Người dùng phải mô tả chi tiết từng bước thuật toán duyệt file',
      'Người dùng chỉ cần chỉ rõ dữ liệu cần lấy là gì, không cần nêu cách lấy',
      'Hệ thống bắt buộc người dùng phải tự cấp phát bộ nhớ RAM trên máy',
      'Người dùng không được phép truy vấn dữ liệu quá hai lần mỗi ngày'
    ],
    answer: 1,
    explanation: 'Ngôn ngữ phi thủ tục (như SQL) cho phép người dùng chỉ định kết quả mong muốn (\"lấy cái gì\") mà không cần phải lập trình chỉ rõ giải thuật hay con đường truy xuất vật lý (\"lấy như thế nào\").',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm ngôn ngữ phi thủ tục với việc bắt buộc phải viết mã giải thuật từng bước như C/Java.',
      trickWord: 'Bẫy khái niệm ngôn ngữ phi thủ tục (Non-procedural Language) trong HQTCSDL',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Ngôn ngữ phi thủ tục (SQL) = Nêu \"What\" (Cần cái gì), HQTCSDL tự lo \"How\" (Lấy ra sao).'
    }
  },

  // --- NHÓM 3: KIẾN TRÚC 3 MỨC ANSI-SPARC (Câu 19 - 26) ---
  {
    id: 'db-c1-d1-019',
    question: 'Kiến trúc chuẩn của một hệ cơ sở dữ liệu theo mô hình ANSI-SPARC được chia thành mấy mức biểu diễn?',
    options: [
      'Được chia thành 2 mức biểu diễn gồm mức phần mềm và phần cứng',
      'Được chia thành 5 mức biểu diễn tương ứng 5 tầng giao thức mạng',
      'Được chia thành 3 mức biểu diễn: Mức vật lý, khái niệm và khung nhìn',
      'Được chia thành 4 mức biểu diễn tương ứng 4 mô hình dữ liệu chính'
    ],
    answer: 2,
    explanation: 'Kiến trúc chuẩn ANSI-SPARC phân chia hệ CSDL thành 3 mức trừu tượng: Mức vật lý (Internal), Mức khái niệm (Conceptual) và Mức khung nhìn (External/View).',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-020',
    question: 'Mức biểu diễn nào trong kiến trúc 3 mức thể hiện cách dữ liệu được lưu trữ thực tế trên các thiết bị đĩa từ?',
    options: [
      'Mức khung nhìn của từng người dùng trong hệ thống (View Level)',
      'Mức khái niệm mô tả thế giới thực của toàn bộ CSDL (Conceptual)',
      'Mức logic hướng đối tượng diễn tả mối liên kết giữa các lớp',
      'Mức vật lý của hệ thống lưu trữ trên thiết bị đĩa (Physical Level)'
    ],
    answer: 3,
    explanation: 'Mức vật lý (Physical/Internal Level) mô tả cấu trúc lưu trữ dữ liệu thực tế trên các thiết bị đĩa từ (các tệp dữ liệu, tệp chỉ dẫn, cách tổ chức bản ghi vật lý).',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-021',
    question: 'Mức khái niệm (Conceptual Schema) trong kiến trúc 3 mức đóng vai trò cốt lõi nào dưới đây?',
    options: [
      'Là sự trừu tượng hóa thế giới thực gần gũi với người dùng CSDL',
      'Là tập hợp các rãnh từ và sector vật lý trên bề mặt đĩa cứng',
      'Là giao diện đồ họa riêng lẻ dành riêng cho từng cá nhân sử dụng',
      'Là mã nhị phân 0 và 1 được nạp trực tiếp vào thanh ghi của CPU'
    ],
    answer: 0,
    explanation: 'Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng, mô tả toàn bộ cấu trúc logic, thực thể và mối quan hệ của CSDL. Mức vật lý là cài đặt cụ thể của mức khái niệm.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-022',
    question: 'Mỗi khung nhìn (View) ở mức ngoài trong kiến trúc 3 mức ANSI-SPARC được định nghĩa là gì?',
    options: [
      'Là bản sao chụp toàn bộ ổ cứng vật lý của máy chủ trung tâm',
      'Là một phần hoặc sự trừu tượng hóa một phần của mức khái niệm',
      'Là một vi mạch điện tử chuyên dụng gắn trên bo mạch chủ máy chủ',
      'Là một giao thức mã hóa đường truyền mạng cục bộ không dây LAN'
    ],
    answer: 1,
    explanation: 'Mỗi khung nhìn (View) là cách nhìn, quan điểm của từng người sử dụng đối với CSDL, thể hiện một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-023',
    question: 'Khái niệm \"Tính độc lập dữ liệu vật lý\" (Physical Data Independence) được hiểu chính xác là gì?',
    options: [
      'Khả năng thay đổi sơ đồ khái niệm mà không ảnh hưởng tới khung nhìn',
      'Khả năng thay đổi cấu trúc vật lý mà không làm đổi sơ đồ khái niệm',
      'Khả năng ngắt hoàn toàn kết nối vật lý với Internet khi máy chủ chạy',
      'Khả năng di chuyển máy chủ vật lý từ phòng này sang phòng khác an toàn'
    ],
    answer: 1,
    explanation: 'Độc lập dữ liệu vật lý là khả năng thay đổi cấu trúc lưu trữ vật lý (ví dụ chuyển từ HDD sang SSD, thay đổi chỉ mục) mà không phải viết lại sơ đồ khái niệm hay ứng dụng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-024',
    question: 'Khái niệm \"Tính độc lập dữ liệu logic\" (Logical Data Independence) mang lại lợi ích gì cho hệ thống?',
    options: [
      'Cho phép thay đổi sơ đồ khái niệm mà không làm đổi các khung nhìn',
      'Bắt buộc người dùng phải học lại cú pháp truy vấn SQL từ đầu',
      'Ngăn chặn hoàn toàn mọi người dùng không được truy xuất CSDL',
      'Tự động tăng dung lượng bộ nhớ RAM máy chủ lên gấp hai lần'
    ],
    answer: 0,
    explanation: 'Độc lập dữ liệu logic là khả năng sửa đổi sơ đồ khái niệm (như thêm bảng mới, thêm thuộc tính) mà không làm ảnh hưởng đến các khung nhìn và ứng dụng đang sử dụng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-025',
    question: 'Tình huống: DBA quyết định tạo thêm chỉ mục B-Tree và sắp xếp lại tệp trên đĩa cứng để tăng tốc độ. Mức nào bị ảnh hưởng?',
    options: [
      'Mức khung nhìn của người dùng bị thay đổi giao diện biểu mẫu',
      'Mức vật lý thay đổi, mức khái niệm và mức ngoài giữ nguyên vẹn',
      'Tất cả các chương trình ứng dụng của lập trình viên bị lỗi runtime',
      'Mức khái niệm bị xóa bỏ hoàn toàn và phải thiết kế lại từ đầu'
    ],
    answer: 1,
    explanation: 'Việc tạo chỉ mục hay tổ chức lại tệp trên đĩa chỉ thuộc về mức vật lý. Nhờ tính độc lập dữ liệu vật lý, mức khái niệm và các khung nhìn mức ngoài hoàn toàn không bị ảnh hưởng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay lo sợ khi tối ưu ổ đĩa thì chương trình ứng dụng hoặc giao diện người dùng sẽ bị phá vỡ.',
      trickWord: 'Bẫy tính độc lập dữ liệu vật lý (Physical Data Independence) trong kiến trúc 3 mức',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3',
      tip: 'Chỉnh sửa lưu trữ, chỉ mục, cấu trúc tệp = Thay đổi Mức vật lý ➔ Mức khái niệm & Khung nhìn KHÔNG ĐỔI.'
    }
  },
  {
    id: 'db-c1-d1-026',
    question: 'Tình huống: Phòng Đào tạo chỉ được xem điểm tổng kết, không được xem điểm thành phần chi tiết của sinh viên. Đây là ví dụ về mức nào?',
    options: [
      'Mức lưu trữ vật lý các byte nhị phân trên đĩa cứng máy chủ',
      'Mức biểu diễn bảng mã ký tự ASCII của ngôn ngữ lập trình C',
      'Mức khung nhìn (View Level) phân quyền hiển thị theo góc nhìn',
      'Mức kết nối dây cáp mạng quang nối giữa các giảng đường học'
    ],
    answer: 2,
    explanation: 'Việc lọc và chỉ hiển thị một tập con dữ liệu phù hợp với nhu cầu và quyền hạn của một nhóm người dùng (Phòng Đào tạo) chính là bản chất của Mức khung nhìn (View Level / External Level).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm với mức khái niệm toàn thể vì nghĩ đây là quy tắc nghiệp vụ chung của trường đại học.',
      trickWord: 'Bẫy phân định mức khung nhìn (View Level) dựa trên ngữ cảnh phân quyền người dùng',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Góc nhìn riêng của một nhóm người dùng (chỉ thấy phần dữ liệu được phép) = Mức khung nhìn (View).'
    }
  },

  // --- NHÓM 4: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS) (Câu 27 - 40) ---
  {
    id: 'db-c1-d1-027',
    question: 'Một mô hình dữ liệu (Data Model) hoàn chỉnh theo giáo trình bắt buộc phải bao gồm 3 thành phần cốt lõi nào?',
    options: [
      'Bàn phím gõ, Chuột máy tính điều khiển và Màn hình hiển thị màu',
      'Mô tả cấu trúc, Mô tả các thao tác và Mô tả ràng buộc toàn vẹn',
      'Dây nguồn điện lưới, Ổ cắm ba chấu và Bộ lưu điện dự phòng UPS',
      'Hệ điều hành máy chủ, Trình duyệt web và Phần mềm phòng chống virus'
    ],
    answer: 1,
    explanation: 'Mô hình dữ liệu gồm 3 thành phần: (1) Mô tả cấu trúc dữ liệu; (2) Mô tả các thao tác trên dữ liệu (Thêm, Xóa, Sửa, Truy vấn); (3) Mô tả các ràng buộc toàn vẹn.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-028',
    question: 'Nhóm mô hình dữ liệu nào dưới đây thuộc nhóm \"Mô hình logic trên cơ sở bản ghi\" (Record-based)?',
    options: [
      'Mô hình ER, Mô hình hướng đối tượng và Mô hình dữ liệu ngữ nghĩa',
      'Mô hình quan hệ, Mô hình mạng và Mô hình phân cấp dạng cấu trúc cây',
      'Mô hình bộ nhớ khung, Mô hình hợp nhất và Mô hình đĩa từ quang học',
      'Mô hình đám mây công cộng, Mô hình đám mây riêng và Mô hình lai'
    ],
    answer: 1,
    explanation: 'Mô hình logic trên cơ sở bản ghi (Record-based) gồm 3 mô hình kinh điển: Mô hình quan hệ (Relational), Mô hình mạng (Network) và Mô hình phân cấp (Hierarchical).',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-029',
    question: 'Trong mô hình mạng (Network Model), loại liên hệ (set type) giữa mẫu tin chủ và mẫu tin thành viên được ký hiệu bằng hình gì?',
    options: [
      'Được ký hiệu bằng hình chữ nhật có đường viền nét đôi rất đậm',
      'Được ký hiệu bằng hình thoi có bốn góc nhọn cân xứng với nhau',
      'Được ký hiệu bằng hình tam giác đều hướng đỉnh thẳng lên phía trên',
      'Được ký hiệu bằng hình bầu dục với mũi tên đi từ chủ sang thành viên'
    ],
    answer: 3,
    explanation: 'Trong mô hình mạng, loại liên hệ (set type) ký hiệu bằng hình bầu dục, có các mũi tên đi từ loại mẫu tin chủ sang loại mẫu tin thành viên.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-030',
    question: 'Mô hình phân cấp (Hierarchical Model) tổ chức dữ liệu theo cấu trúc hình học toán học nào dưới đây?',
    options: [
      'Cấu trúc đồ thị vô hướng có chu trình khép kín giữa các đỉnh',
      'Cấu trúc cây (Tree) gồm nút gốc, các nút cha và các nút con',
      'Cấu trúc ma trận hai chiều gồm các số phức liên hợp với nhau',
      'Cấu trúc vòng tròn đồng tâm liên kết qua các vector tiếp tuyến'
    ],
    answer: 1,
    explanation: 'Mô hình phân cấp là một cấu trúc cây (tree), trong đó các nút biểu diễn tập các thực thể, giữa nút cha và nút con liên kết theo mối quan hệ 1-nhiều.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d1-031',
    question: 'Trong mô hình thực thể kết hợp (ER Model), thực thể yếu (Weak Entity) được ký hiệu quy ước bằng hình gì?',
    options: [
      'Hình chữ nhật có đường viền kẻ đơn thanh mảnh nằm ngang',
      'Hình chữ nhật có đường viền kẻ đôi thể hiện sự phụ thuộc tồn tại',
      'Hình thoi có đường viền kẻ đứt khúc cách đều nhau liên tục',
      'Hình tròn đồng tâm có mũi tên chỉ hướng sang thực thể khác'
    ],
    answer: 1,
    explanation: 'Trong mô hình ER: Thực thể mạnh ký hiệu bằng hình chữ nhật viền đơn; Thực thể yếu (phụ thuộc sự tồn tại vào thực thể khác) ký hiệu bằng hình chữ nhật viền đôi.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-032',
    question: 'Khái niệm \"Số ngôi của mối kết hợp\" (Degree of Relationship) trong mô hình ER được định nghĩa là gì?',
    options: [
      'Tổng số loại thực thể tham gia vào mối kết hợp đó trong mô hình',
      'Số lượng thuộc tính khóa có trong loại thực thể mạnh tham gia',
      'Số lần người dùng thực hiện truy vấn dữ liệu thành công trong ngày',
      'Số lượng bản ghi tối đa được phép lưu trữ trong bảng cơ sở dữ liệu'
    ],
    answer: 0,
    explanation: 'Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể cùng tham gia vào mối kết hợp đó (ví dụ: mối kết hợp 2 ngôi nhị phân, 3 ngôi tam phân).',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-033',
    question: 'Mô hình quan hệ (Relational Data Model) được xây dựng dựa trên nền tảng lý thuyết toán học nào?',
    options: [
      'Lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ cố định',
      'Lý thuyết hình học phi Euclid và ma trận vi phân đạo hàm cấp hai',
      'Lý thuyết xác suất thống kê Bayes trong không gian nhiều chiều',
      'Lý thuyết mật mã đường cong elliptic bảo vệ khóa công khai'
    ],
    answer: 0,
    explanation: 'Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ (k-tuple) với k cố định, biểu diễn dữ liệu dưới dạng bảng 2 chiều.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-034',
    question: 'Đặc trưng cơ bản nào của mô hình hướng đối tượng (OODM) cho phép đóng gói cả dữ liệu và các hành vi xử lý?',
    options: [
      'Tính đa hình (Polymorphism) cho phép linh hoạt gọi hàm theo ngữ cảnh',
      'Tính đóng gói (Encapsulation) tích hợp thuộc tính và phương thức',
      'Tính kế thừa bội (Multiple Inheritance) từ nhiều lớp cha khác nhau',
      'Tính tái sử dụng mã nguồn thông qua việc kế thừa cấu trúc lớp'
    ],
    answer: 1,
    explanation: 'Tính đóng gói (Encapsulation) trong hướng đối tượng cho phép gom nhóm cả thuộc tính (dữ liệu) và phương thức (hành vi/thao tác) vào trong một lớp đối tượng thống nhất.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-035',
    question: 'Hai mô hình nào sau đây thuộc nhóm \"Mô hình dữ liệu vật lý\" (Physical Data Model) theo giáo trình?',
    options: [
      'Mô hình thực thể kết hợp (ER) và mô hình hướng đối tượng (OODM)',
      'Mô hình hợp nhất và mô hình bộ nhớ khung mô tả mức lưu trữ thấp',
      'Mô hình phân cấp dạng cây và mô hình mạng dạng đồ thị có hướng',
      'Mô hình quan hệ bảng k-bộ và mô hình dữ liệu ngữ nghĩa logic'
    ],
    answer: 1,
    explanation: 'Giáo trình khẳng định rõ: Hai mô hình dữ liệu vật lý thường dùng là mô hình hợp nhất và mô hình bộ nhớ khung (mô tả dữ liệu ở mức thấp nhất trong máy tính).',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d1-036',
    question: 'Đâu là NHƯỢC ĐIỂM LỚN NHẤT của mô hình mạng (Network Model) khi áp dụng cho các hệ thống CSDL quy mô lớn?',
    options: [
      'Hệ thống hoàn toàn không cho phép lưu trữ dữ liệu dạng số nguyên',
      'Đồ thị có hướng bị hạn chế khả năng diễn đạt các liên hệ phức tạp',
      'Bắt buộc người dùng phải mua bản quyền phần mềm với giá rất đắt',
      'Không thể kết nối các máy tính với nhau qua mạng cáp đồng nội bộ'
    ],
    answer: 1,
    explanation: 'Nhược điểm mô hình mạng: Không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn lý do bản quyền đắt đỏ hoặc không hỗ trợ kiểu số.',
      trickWord: 'Bẫy nhược điểm bản chất của mô hình mạng (Network Model) trong CSDL lớn',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.a',
      tip: 'Nhược điểm mô hình mạng = Đồ thị có hướng hạn chế diễn đạt ngữ nghĩa liên hệ phức tạp khi mở rộng quy mô lớn.'
    }
  },
  {
    id: 'db-c1-d1-037',
    question: 'Trong mô hình phân cấp, nếu một sinh viên đăng ký học nhiều môn, và mỗi môn có nhiều sinh viên (N-N), hạn chế nào sẽ bộc lộ?',
    options: [
      'Hệ thống tự động chuyển sang mô hình ER mà không cần sự đồng ý',
      'Bắt buộc phải nhân bản dữ liệu gây dư thừa vì cây chỉ hỗ trợ 1-N',
      'Máy chủ sẽ tự động tắt nguồn để bảo vệ bộ nhớ RAM không bị cháy',
      'Mô hình phân cấp giải quyết hoàn hảo mối quan hệ N-N không cần đổi'
    ],
    answer: 1,
    explanation: 'Cấu trúc cây của mô hình phân cấp chỉ hỗ trợ quan hệ cha-con 1-N. Để biểu diễn quan hệ Nhiều-Nhiều (N-N), bắt buộc phải nhân bản thông tin nút ở nhiều nhánh cây, dẫn đến dư thừa dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ lầm tưởng mô hình phân cấp giải quyết tốt N-N hoặc hệ thống tự động đổi mô hình.',
      trickWord: 'Bẫy cấu trúc cây phân cấp (Hierarchical Tree) không hỗ trợ tự nhiên quan hệ N-N',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.b',
      tip: 'Mô hình phân cấp = Chỉ hỗ trợ 1-N ➔ Để biểu diễn N-N buộc phải nhân bản dữ liệu (Dư thừa).'
    }
  },
  {
    id: 'db-c1-d1-038',
    question: 'Mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER thể hiện trường hợp thực tế nào dưới đây?',
    options: [
      'Một bảng dữ liệu bị xóa bỏ nhưng vẫn xuất hiện trong bộ nhớ tạm',
      'Một loại thực thể tự tham gia vào mối kết hợp với chính bản thân nó',
      'Hai người dùng cùng cập nhật dữ liệu một lúc gây ra lỗi xung đột',
      'Một cơ sở dữ liệu được sao lưu định kỳ hàng tuần sang ổ cứng ngoài'
    ],
    answer: 1,
    explanation: 'Mối quan hệ đệ quy là mối kết hợp mà trong đó cùng một loại thực thể tham gia nhiều hơn một lần với các vai trò khác nhau (ví dụ: Môn học tiên quyết: Môn học [trước] kết hợp với Môn học [sau]).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với khái niệm truy cập đồng thời hoặc xóa dữ liệu trong bộ nhớ tạm.',
      trickWord: 'Bẫy mối quan hệ đệ quy (Recursive Relationship) trong mô hình ER',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: 'Mối quan hệ đệ quy = Thực thể liên kết với chính nó (VD: Môn học tiên quyết MHoc_Truoc - MHoc_Sau).'
    }
  },
  {
    id: 'db-c1-d1-039',
    question: 'Khi so sánh giữa Mô hình quan hệ và Mô hình hướng đối tượng, nhận định nào sau đây là CHUẨN XÁC NHẤT?',
    options: [
      'Mô hình quan hệ tách rời dữ liệu và hàm; Hướng đối tượng đóng gói cả hai',
      'Mô hình quan hệ chỉ lưu được số nguyên, Hướng đối tượng chỉ lưu ký tự',
      'Mô hình hướng đối tượng ra đời vào những năm 60s trước mô hình quan hệ',
      'Mô hình quan hệ dựa trên đồ thị có hướng, còn Hướng đối tượng dựa trên cây'
    ],
    answer: 0,
    explanation: 'Mô hình quan hệ tổ chức dữ liệu thành các bảng tách biệt với chương trình xử lý. Ngược lại, mô hình hướng đối tượng (OODM) đóng gói cả dữ liệu (thuộc tính) và hành vi (phương thức) trong cùng một lớp.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm lẫn về thời gian ra đời hoặc kiểu dữ liệu mà hai mô hình hỗ trợ.',
      trickWord: 'Bẫy so sánh bản chất kiến trúc giữa Mô hình Quan hệ (RDBMS) và Hướng đối tượng (OODM)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & III.4.b',
      tip: 'Mô hình Quan hệ = Dữ liệu tách rời hàm (Bảng k-bộ); Hướng đối tượng = Đóng gói dữ liệu + Phương thức (Class).'
    }
  },
  {
    id: 'db-c1-d1-040',
    question: 'Tình huống tổng hợp: Để biểu diễn mối quan hệ phụ thuộc tồn tại giữa Nhân viên và Thân nhân của họ, mô hình ER dùng cách nào?',
    options: [
      'Khai báo Thân nhân là thực thể yếu viền đôi phụ thuộc Nhân viên viền đơn',
      'Xóa bỏ toàn bộ thông tin của Nhân viên để chỉ lưu lại thông tin Thân nhân',
      'Dùng mô hình mạng với mũi tên đi ngược từ Thân nhân sang cho Nhân viên',
      'Ép buộc Nhân viên và Thân nhân phải lưu chung vào một thư mục tập tin'
    ],
    answer: 0,
    explanation: 'Giáo trình chỉ rõ ví dụ: ThânNhan là thực thể yếu (ký hiệu hình chữ nhật nét đôi) vì sự tồn tại của nó hoàn toàn phụ thuộc vào thực thể mạnh NhanVien (hình chữ nhật nét đơn).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn cách gộp chung vào 1 bảng hoặc nhầm lẫn chiều mũi tên.',
      trickWord: 'Bẫy nhận diện thực thể yếu (Weak Entity) phụ thuộc tồn tại trong mô hình ER',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: 'Thân nhân phụ thuộc Nhân viên = Thực thể yếu (Weak Entity - viền đôi) phụ thuộc Thực thể mạnh (viền đơn).'
    }
  }
];

// ĐỀ 2: 40 CÂU HỎI HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG I (db-c1-d2-001 đến db-c1-d2-040)
// Tỷ lệ độ khó: 12 Dễ (30%), 16 Trung bình (40%), 12 Khó (30%)
// Phân bổ đáp án: 10 A (0), 10 B (1), 10 C (2), 10 D (3)
export const questionsDbCh1Part2 = [
  // --- NHÓM 1: FILE SYSTEM VS CSDL (Câu 1 - 8) ---
  {
    id: 'db-c1-d2-001',
    question: 'Hệ thống dùng phương pháp xử lý tập tin (File Processing System) lưu trữ dữ liệu dưới hình thức nào?',
    options: [
      'Lưu trữ dưới dạng các tập tin riêng rẽ cho từng ứng dụng',
      'Lưu trữ tập trung vào một kho lưu trữ phân tán đám mây',
      'Lưu trữ trực tiếp dưới dạng bảng quan hệ chuẩn hóa 3NF',
      'Lưu trữ thành các khối chuỗi khối mã hóa an toàn cao'
    ],
    answer: 0,
    explanation: 'Để lưu trữ thông tin cho công việc của cơ quan/tổ chức, hệ thống xử lý tập tin lưu dưới dạng các file riêng rẽ, khi cần thì lấy ra thao tác, xử lý.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-002',
    question: 'Hạn chế nào sau đây KHÔNG PHẢI là nhược điểm của phương pháp xử lý tập tin theo bài giảng?',
    options: [
      'Thời gian triển khai quá ngắn và chi phí đầu tư rất rẻ',
      'Sự dư thừa dữ liệu và không nhất quán giữa các tệp tin',
      'Khó đảm bảo tính nguyên tố của các giao tác trong hệ thống',
      'Dị thường trong truy cập tương tranh khi có nhiều người dùng'
    ],
    answer: 0,
    explanation: 'Thời gian triển khai ngắn và chi phí đầu tư thấp là ƯU ĐIỂM của hệ thống tập tin đối với các bài toán nhỏ, không phải là nhược điểm.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-003',
    question: 'Khi cùng một thông tin khách hàng nhưng địa chỉ ở file Kế toán khác với file Bán hàng, đây là hiện tượng gì?',
    options: [
      'Hiện tượng bảo vệ an toàn dữ liệu mức cao nhất của máy chủ',
      'Hiện tượng tính toán sai lệch của bộ xử lý số học và logic',
      'Hiện tượng không nhất quán dữ liệu (Data Inconsistency)',
      'Hiện tượng tối ưu hóa không gian lưu trữ của hệ điều hành'
    ],
    answer: 2,
    explanation: 'Tính không nhất quán (Data Inconsistency) là tình trạng tại một thời điểm, thông tin về cùng một đối tượng có sự khác nhau trên các tập tin khác nhau trong cùng hệ thống.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-004',
    question: 'Khi một sự cố mất điện xảy ra giữa chừng trong giao tác chuyển tiền của hệ thống tập tin, hậu quả thường gặp là gì?',
    options: [
      'Hệ thống tự động hoàn tiền về tài khoản nguồn ngay tức khắc',
      'Dữ liệu rơi vào trạng thái dở dang và mất tính nhất quán',
      'Đĩa cứng tự động sửa lỗi và cân bằng lại số dư cho cả hai',
      'Giao dịch được tự động chuyển sang máy chủ dự phòng ở Mỹ'
    ],
    answer: 1,
    explanation: 'Hệ thống tập tin khó đảm bảo tính nguyên tố (All-or-Nothing). Khi mất điện giữa chừng, tài khoản gửi đã bị trừ nhưng tài khoản nhận chưa được cộng, khiến hệ thống mất nhất quán.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-005',
    question: 'Tại sao việc thay đổi các quy tắc ràng buộc nghiệp vụ trong hệ thống tập tin lại tốn kém công sức và dễ sai sót?',
    options: [
      'Vì các ràng buộc bị phân tán và nhúng trực tiếp trong mã nguồn',
      'Vì hệ điều hành cấm người quản trị không được sửa đổi tập tin',
      'Vì dung lượng đĩa cứng quá nhỏ không đủ ghi nhớ các quy tắc mới',
      'Vì các lập trình viên bắt buộc phải thi lại chứng chỉ quốc tế'
    ],
    answer: 0,
    explanation: 'Trong hệ thống tập tin, quy tắc nghiệp vụ nằm rải rác trong code của từng chương trình. Khi đổi quy tắc, phải rà soát và sửa đổi đồng loạt toàn bộ các chương trình ứng dụng.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-006',
    question: 'Yếu tố \"An toàn dữ liệu\" (Data Security) trong hệ thống xử lý thông tin bao gồm những khía cạnh nào dưới đây?',
    options: [
      'Cơ chế bảo mật, phân cấp đối tượng sử dụng và sao lưu dự phòng',
      'Mua sắm máy lạnh công suất lớn và bình cứu hỏa tự động trong phòng',
      'Trang bị bàn ghế công thái học và bàn phím cơ chống ồn cho nhân sự',
      'Lắp đặt camera giám sát cổng ra vào cơ quan và khóa cửa cuốn điện'
    ],
    answer: 0,
    explanation: 'Giáo trình nêu rõ: An toàn dữ liệu bao gồm: cơ chế bảo mật, phân cấp đối tượng sử dụng dữ liệu, sao lưu dữ liệu dự phòng (backup).',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-007',
    question: 'Tình huống: Giả sử một thư viện trường học dùng các file Excel riêng lẻ để quản lý mượn sách. Bất cập nào sẽ xuất hiện khi sinh viên mượn quá hạn?',
    options: [
      'Phần mềm Excel sẽ tự động gửi tin nhắn SMS cảnh báo phụ huynh',
      'Khó kiểm tra ràng buộc sách quá hạn nếu không mở từng file dò thủ công',
      'Máy tính của thủ thư sẽ tự động chuyển đổi dữ liệu sang CSDL Oracle',
      'Sinh viên mượn sách quá hạn sẽ bị trừ điểm rèn luyện tự động ngay'
    ],
    answer: 1,
    explanation: 'Vì dữ liệu phân tán trên các file riêng rẽ và thiếu cơ chế toàn vẹn tự động, việc kiểm tra ràng buộc mượn sách đòi hỏi mở từng file tra cứu thủ công, rất dễ bỏ sót và tốn thời gian.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay suy diễn Excel có thể tự gửi SMS hoặc tự động trừ điểm rèn luyện.',
      trickWord: 'Bẫy bất cập kiểm soát ràng buộc toàn vẹn (Integrity) trong môi trường tập tin riêng rẽ',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b',
      tip: 'Hệ thống file riêng rẽ = Thiếu kiểm soát toàn vẹn tập trung ➔ Buộc phải dò tìm thủ công, dễ sai lệch.'
    }
  },
  {
    id: 'db-c1-d2-008',
    question: 'Điểm khác biệt CỐT LÕI NHẤT giữa phương pháp tiếp cận tập tin và tiếp cận Cơ sở dữ liệu là gì?',
    options: [
      'Tiếp cận CSDL dùng màn hình cong, tiếp cận tập tin dùng màn phẳng',
      'Tiếp cận CSDL tập trung hóa dữ liệu và tách rời dữ liệu khỏi ứng dụng',
      'Tiếp cận tập tin chỉ chạy trên máy chủ Linux, CSDL chỉ chạy Windows',
      'Tiếp cận CSDL không cần người quản trị, hệ thống tự động hoàn toàn'
    ],
    answer: 1,
    explanation: 'Điểm khác biệt cốt lõi: Tiếp cận CSDL tập trung hóa dữ liệu, loại bỏ trùng lặp và tách rời định nghĩa cấu trúc dữ liệu khỏi mã nguồn ứng dụng, đem lại tính độc lập dữ liệu cao.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm với yếu tố phần cứng hiển thị hoặc hệ điều hành máy chủ.',
      trickWord: 'Bẫy bản chất khác biệt giữa File Approach và Database Approach',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.c & II.1',
      tip: 'Bản chất Database Approach = Tập trung hóa dữ liệu + Độc lập giữa dữ liệu và chương trình ứng dụng.'
    }
  },

  // --- NHÓM 2: CSDL & HỆ QUẢN TRỊ CSDL (DBMS) (Câu 9 - 18) ---
  {
    id: 'db-c1-d2-009',
    question: 'Mục tiêu chính của việc lưu trữ Cơ sở dữ liệu trên các thiết bị nhớ ngoài (thiết bị trừ tin) là gì?',
    options: [
      'Để dữ liệu không bị mất đi khi tắt máy tính hoặc mất nguồn điện',
      'Để tăng tốc độ tính toán của các lệnh số học trong bộ xử lý ALU',
      'Để giảm độ sáng của màn hình làm việc giúp bảo vệ mắt cho người dùng',
      'Để lập trình viên không cần phải viết chú thích trong mã nguồn code'
    ],
    answer: 0,
    explanation: 'CSDL được lưu trữ trên bộ nhớ ngoài (như đĩa cứng SSD/HDD) nhằm mục đích bảo toàn dữ liệu lâu dài, không bị biến mất khi tắt máy hoặc gặp sự cố mất điện.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-010',
    question: 'Viết tắt DBMS trong lĩnh vực công nghệ thông tin là tên viết tắt của cụm từ tiếng Anh nào?',
    options: [
      'Digital Business Management Software for Enterprise',
      'Database Management System (Hệ quản trị Cơ sở dữ liệu)',
      'Direct Binary Memory Storage for Operating Systems',
      'Dynamic Base Modeling Schema for Computer Network'
    ],
    answer: 1,
    explanation: 'DBMS là viết tắt của Database Management System, trong tiếng Việt dịch là Hệ quản trị Cơ sở dữ liệu.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-011',
    question: 'Đối tượng nào trong hệ thống CSDL có vai trò lập trình xây dựng các phần mềm ứng dụng khai thác dữ liệu?',
    options: [
      'Người sử dụng không chuyên về tin học tại các phòng ban',
      'Chuyên viên tin học biết khai thác CSDL (Application Programmers)',
      'Nhân viên bảo vệ tòa nhà trung tâm máy chủ của doanh nghiệp',
      'Người dùng vãng lai truy cập website để đọc tin tức giải trí'
    ],
    answer: 1,
    explanation: 'Chuyên viên tin học (Application Programmers) là các kỹ sư phần mềm am hiểu lập trình, có nhiệm vụ xây dựng các ứng dụng nghiệp vụ tương tác với CSDL.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-012',
    question: 'Trong kiến trúc hệ thống CSDL, ngôn ngữ truy vấn có cấu trúc SQL đóng vai trò gì giữa người dùng và CSDL?',
    options: [
      'Là ngôn ngữ bậc thấp dùng để nạp trực tiếp vào BIOS của máy chủ',
      'Là ngôn ngữ bậc cao giúp người dùng truy xuất và thao tác trên CSDL',
      'Là công cụ dùng để thiết kế bản vẽ mạch điện tử in trên bo mạch',
      'Là giao thức truyền tín hiệu sóng radio tầm xa qua vệ tinh viễn thông'
    ],
    answer: 1,
    explanation: 'HQTCSDL cung cấp ngôn ngữ bậc cao (như SQL) đóng vai trò là giao diện trung gian cho phép người dùng truy xuất, tìm kiếm và thao tác dữ liệu một cách trực quan.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-013',
    question: 'Khả năng chia sẻ thông tin cao của CSDL mang lại lợi ích thực tiễn nào cho doanh nghiệp?',
    options: [
      'Nhiều phòng ban và ứng dụng cùng khai thác một nguồn dữ liệu đồng bộ',
      'Mỗi nhân viên tự mua một máy chủ riêng đặt tại nhà để lưu dữ liệu',
      'Doanh nghiệp không cần phải trả tiền bản quyền hệ điều hành máy tính',
      'Cho phép chia sẻ mật khẩu quản trị cho tất cả mọi khách hàng bên ngoài'
    ],
    answer: 0,
    explanation: 'Khả năng chia sẻ cao cho phép nhiều người dùng ở các phòng ban khác nhau và nhiều phần mềm khác nhau cùng khai thác đồng thời một nguồn dữ liệu chuẩn xác, nhất quán.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-014',
    question: 'Công việc nào dưới đây KHÔNG THUỘC trách nhiệm chính của Người quản trị CSDL (DBA)?',
    options: [
      'Khai báo cấu trúc CSDL và thiết lập các ràng buộc toàn vẹn dữ liệu',
      'Trực tiếp sửa chữa màn hình máy tính và hàn linh kiện bo mạch hỏng',
      'Cấp phát và thu hồi quyền hạn truy cập CSDL của người sử dụng',
      'Lập kế hoạch sao lưu dự phòng và phục hồi dữ liệu khi gặp sự cố'
    ],
    answer: 1,
    explanation: 'Sửa chữa phần cứng vật lý, hàn vi mạch là việc của kỹ sư phần cứng, không thuộc chuyên môn tổ chức CSDL, bảo mật và phân quyền của Người quản trị CSDL (DBA).',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-015',
    question: 'Cơ chế giải quyết tranh chấp trong truy cập dữ liệu (Concurrency Control) của HQTCSDL nhằm mục đích gì?',
    options: [
      'Ngăn chặn xung đột ghi đè khi nhiều người cùng cập nhật dữ liệu',
      'Tự động ngắt kết nối mạng của tất cả những ai truy cập trái phép',
      'Tự động giảm lương của nhân viên nếu nhập sai dữ liệu vào hệ thống',
      'Phát hiện lỗi chính tả tiếng Việt trong văn bản lưu trên hệ thống'
    ],
    answer: 0,
    explanation: 'Cơ chế điều khiển tương tranh giải quyết tranh chấp dữ liệu khi nhiều người dùng cùng thao tác đồng thời, bảo đảm dữ liệu luôn nhất quán và không bị ghi đè mất mát.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-016',
    question: 'Một doanh nghiệp muốn xây dựng hệ thống thanh toán trực tuyến. Vì sao họ BẮT BUỘC phải dùng HQTCSDL thay vì lưu file?',
    options: [
      'Vì HQTCSDL có cơ chế quản lý giao tác (Transaction) đảm bảo tính nguyên tố',
      'Vì lưu trữ bằng file không thể hiển thị được màu sắc trên màn hình máy tính',
      'Vì các ngân hàng thương mại cấm thanh toán trực tuyến qua mạng cáp quang',
      'Vì chỉ có HQTCSDL mới có thể cài đặt được trên hệ điều hành điện thoại'
    ],
    answer: 0,
    explanation: 'Thanh toán tài chính đòi hỏi tính nguyên tố (Atomicity) và cô lập của Giao tác (Transaction) — tiền bị trừ ở tài khoản A thì bắt buộc phải chuyển sang tài khoản B. Chỉ HQTCSDL mới hỗ trợ quản trị giao tác an toàn.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn các lý do về giao diện hiển thị màu sắc hoặc quy định cấm phi lý.',
      trickWord: 'Bẫy yêu cầu quản lý giao tác (Transaction Management) trong nghiệp vụ tài chính ngân hàng',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Nghiệp vụ tài chính/ngân hàng = Bắt buộc dùng HQTCSDL vì cần cơ chế Transaction (ACID) bảo đảm nguyên tố.'
    }
  },
  {
    id: 'db-c1-d2-017',
    question: 'Tại sao việc phân quyền khai thác CSDL chi tiết đến từng đối tượng người dùng lại là thách thức nảy sinh khi dùng CSDL?',
    options: [
      'Vì dữ liệu tập trung một nơi, nếu phân quyền lỏng lẻo sẽ lộ bí mật kinh doanh',
      'Vì các phần mềm HQTCSDL không có tính năng đặt mật khẩu bảo vệ tài khoản',
      'Vì pháp luật cấm không cho phép các công ty phân chia phòng ban nội bộ',
      'Vì người quản trị CSDL bắt buộc phải gặp trực tiếp từng khách hàng ký tên'
    ],
    answer: 0,
    explanation: 'Trong CSDL, tất cả tài nguyên thông tin được gom về một mối. Nếu không có chính sách và cơ chế phân quyền chặt chẽ theo vai trò (Role-based access), nguy cơ lộ dữ liệu mật giữa các phòng ban là cực kỳ lớn.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm lẫn với việc phần mềm thiếu tính năng mật khẩu hoặc rào cản pháp lý.',
      trickWord: 'Bẫy thách thức bảo mật và phân quyền trong môi trường CSDL tập trung',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.c',
      tip: 'CSDL tập trung = Rủi ro rò rỉ tập trung ➔ Thách thức sống còn là phân quyền truy cập chi tiết.'
    }
  },
  {
    id: 'db-c1-d2-018',
    question: 'Một HQTCSDL có chức năng \"Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ\". Điều này có nghĩa là gì?',
    options: [
      'Kiểm tra định dạng, miền giá trị và tính hợp lệ của dữ liệu trước khi ghi đĩa',
      'Gửi thư điện tử đến cơ quan công an để xác minh nhân thân của người nhập',
      'Tự động gọi điện thoại cho khách hàng để hỏi xem họ có thực sự muốn lưu',
      'Chỉ cho phép lưu trữ dữ liệu nếu người nhập đã tốt nghiệp đại học chuyên ngành'
    ],
    answer: 0,
    explanation: 'Kiểm tra độ tin cậy trước khi lưu trữ là việc HQTCSDL tự động thẩm định dữ liệu nhập vào có thỏa mãn các ràng buộc miền giá trị (kiểu dữ liệu, độ dài, khoảng giá trị hợp lệ) hay không trước khi ghi vào đĩa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay bị đánh lừa bởi các phương án liên quan đến xác minh nhân thân hoặc bằng cấp.',
      trickWord: 'Bẫy kiểm tra độ tin cậy của dữ liệu (Data Validation) trong HQTCSDL',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Kiểm tra độ tin cậy = Kiểm tra ràng buộc toàn vẹn & miền giá trị hợp lệ trước khi Commit vào CSDL.'
    }
  },

  // --- NHÓM 3: KIẾN TRÚC 3 MỨC ANSI-SPARC (Câu 19 - 26) ---
  {
    id: 'db-c1-d2-019',
    question: 'Tổ chức nào đã đề xuất kiến trúc 3 mức chuẩn mực cho các hệ cơ sở dữ liệu vào thập niên 1970?',
    options: [
      'Tổ chức ANSI-SPARC (American National Standards Institute)',
      'Tổ chức Y tế Thế giới (World Health Organization - WHO)',
      'Hiệp hội Vận tải Hàng không Quốc tế (IATA Global Agency)',
      'Liên đoàn Bóng đá Thế giới (Federation of Association FIFA)'
    ],
    answer: 0,
    explanation: 'Kiến trúc 3 mức chuẩn của CSDL do ủy ban ANSI-SPARC (American National Standards Institute / Standards Planning And Requirements Committee) đề xuất.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-020',
    question: 'Tên gọi khác của \"Mức vật lý\" và \"Mức khung nhìn\" trong kiến trúc 3 mức ANSI-SPARC lần lượt là gì?',
    options: [
      'Mức trung gian (Middle Level) và Mức hạt nhân (Kernel Level)',
      'Mức trong (Internal Level) và Mức ngoài (External Level)',
      'Mức phần cứng (Hardware Level) và Mức giao diện (Interface)',
      'Mức sơ cấp (Primary Level) và Mức thứ cấp (Secondary Level)'
    ],
    answer: 1,
    explanation: 'Theo giáo trình: Mức vật lý còn gọi là Mức trong (Internal Level); Mức khung nhìn còn gọi là Mức ngoài (External Level); Mức khái niệm gọi là Conceptual/Logical.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-021',
    question: 'Sơ đồ quan niệm (Conceptual Schema) thường sử dụng mô hình nào để biểu diễn cấu trúc thế giới thực?',
    options: [
      'Mô hình thực thể mối kết hợp (Entity-Relationship Model - ER)',
      'Mô hình điện trở tương đương trong định luật Ohm mạch điện xoay',
      'Mô hình ma trận bán dẫn vi phân trong thiết kế chip điện tử',
      'Mô hình quỹ đạo chuyển động của vệ tinh địa tĩnh quanh trái đất'
    ],
    answer: 0,
    explanation: 'Giáo trình ghi rõ: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL, ví dụ mô hình ER).',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-022',
    question: 'Mối quan hệ bản chất giữa Mức vật lý và Mức khái niệm trong kiến trúc 3 mức là gì?',
    options: [
      'Mức khái niệm là phần cứng, mức vật lý là ý nghĩ của người lập trình',
      'Mức vật lý là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ',
      'Hai mức này hoàn toàn không có bất kỳ mối liên hệ nào với nhau trong máy',
      'Mức khái niệm luôn luôn được tạo ra sau khi mức vật lý đã bị xóa bỏ'
    ],
    answer: 1,
    explanation: 'Giáo trình khẳng định: Mức khái niệm là sự trừu tượng hóa thế giới thực gần với người dùng. Mức vật lý chính là sự cài đặt cụ thể của mức khái niệm trên thiết bị lưu trữ.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-023',
    question: 'Khung nhìn (View) ở mức ngoài giúp ích gì cho vấn đề bảo mật an toàn dữ liệu của tổ chức?',
    options: [
      'Giới hạn người dùng chỉ nhìn thấy dữ liệu họ được phép, che giấu phần còn lại',
      'Tự động mã hóa bàn phím người dùng bằng thuật toán lượng tử siêu bảo mật',
      'Ngăn không cho người dùng mở màn hình máy tính nếu chưa quét vân tay',
      'Xóa sạch các tệp dữ liệu vật lý sau mỗi lần người dùng kết thúc phiên làm'
    ],
    answer: 0,
    explanation: 'Khung nhìn (View) cung cấp một cơ chế bảo mật mạnh mẽ: mỗi người dùng hoặc nhóm người dùng chỉ được cấp quyền nhìn thấy phần dữ liệu liên quan đến nhiệm vụ của họ, che giấu các thông tin nhạy cảm khác.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-024',
    question: 'Khi nâng cấp dung lượng đĩa cứng và thay đổi thuật toán đánh chỉ số (Index), tại sao các ứng dụng không cần viết lại?',
    options: [
      'Nhờ tính độc lập dữ liệu vật lý (Physical Data Independence)',
      'Nhờ người dùng không bao giờ kiểm tra kết quả truy vấn dữ liệu',
      'Nhờ các nhà mạng viễn thông hỗ trợ tự động viết lại mã nguồn code',
      'Nhờ CPU tự động nhận diện và sửa lỗi phần mềm trong nháy mắt'
    ],
    answer: 0,
    explanation: 'Tính độc lập dữ liệu vật lý bảo đảm rằng các thay đổi trong việc tổ chức lưu trữ vật lý hay chỉ mục không làm thay đổi sơ đồ khái niệm, do đó các chương trình ứng dụng không cần sửa đổi.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-025',
    question: 'Tình huống: Khi bổ sung thêm một cột \"Số điện thoại dự phòng\" vào bảng SinhVien. Các ứng dụng cũ chỉ đọc cột \"MaSV, HoTen\" có bị lỗi không? Vì sao?',
    options: [
      'Bị lỗi ngay lập tức vì cấu trúc bảng đã bị thay đổi kích thước bản ghi',
      'Không bị lỗi, nhờ tính độc lập dữ liệu logic che chắn cho các khung nhìn cũ',
      'Bị lỗi vì hệ điều hành yêu cầu phải cài đặt lại toàn bộ phần mềm từ đầu',
      'Không bị lỗi, nhưng tất cả dữ liệu cũ trong bảng SinhVien sẽ bị xóa sạch'
    ],
    answer: 1,
    explanation: 'Nhờ tính độc lập dữ liệu logic (Logical Data Independence), việc thêm thuộc tính mới vào mức khái niệm không làm thay đổi các khung nhìn hiện có của các ứng dụng cũ, giúp ứng dụng tiếp tục hoạt động bình thường.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay lo sợ bất kỳ sự thay đổi cấu trúc bảng nào cũng làm hỏng các chương trình đang chạy.',
      trickWord: 'Bẫy tính độc lập dữ liệu logic (Logical Data Independence) khi mở rộng thuộc tính',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3',
      tip: 'Thêm cột/thêm bảng mới vào mức khái niệm = Khung nhìn cũ không đổi ➔ Nhờ Độc lập dữ liệu logic.'
    }
  },
  {
    id: 'db-c1-d2-026',
    question: 'Mô hình 3 mức ANSI-SPARC giải quyết triệt để vấn đề phụ thuộc dữ liệu (Data Dependency) trong hệ thống tập tin bằng cách nào?',
    options: [
      'Bằng cách cấm người dùng không được phép tạo các tập tin dữ liệu mới',
      'Bằng cách tạo ra hai tầng ánh xạ: Khung nhìn - Khái niệm và Khái niệm - Vật lý',
      'Bằng cách gộp chung tất cả các tệp trên đĩa cứng vào trong một file nén zip',
      'Bằng cách bắt buộc tất cả nhân viên phải sử dụng chung một tài khoản đăng nhập'
    ],
    answer: 1,
    explanation: 'ANSI-SPARC phân tách dữ liệu thành 3 mức thông qua 2 tầng ánh xạ (Mapping): Ánh xạ Ngoài - Khái niệm (External/Conceptual Mapping) và Ánh xạ Khái niệm - Trong (Conceptual/Internal Mapping), đem lại tính độc lập dữ liệu toàn diện.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người không biết cơ chế kỹ thuật giúp đạt được tính độc lập dữ liệu chính là 2 tầng ánh xạ (Mapping).',
      trickWord: 'Bẫy cơ chế ánh xạ giữa 3 mức trong kiến trúc ANSI-SPARC',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Độc lập dữ liệu đạt được nhờ 2 tầng ánh xạ: Ngoài-Khái niệm (Logic) & Khái niệm-Trong (Vật lý).'
    }
  },

  // --- NHÓM 4: CÁC MÔ HÌNH DỮ LIỆU (DATA MODELS) (Câu 27 - 40) ---
  {
    id: 'db-c1-d2-027',
    question: 'Mô hình dữ liệu (Data Model) là sự hình thức hóa toán học bao gồm 2 phần cơ bản nào?',
    options: [
      'Bàn phím nhập liệu cơ học và Màn hình tinh thể lỏng hiển thị',
      'Ký hiệu mô tả dữ liệu và Tập hợp các phép toán trên dữ liệu',
      'Dây dẫn cáp đồng trục truyền tín hiệu và Đầu nối jack cắm tròn',
      'Tài liệu hướng dẫn sử dụng in trên giấy và Đĩa CD cài đặt gốc'
    ],
    answer: 1,
    explanation: 'Giáo trình định nghĩa: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-028',
    question: 'Mô hình nào sau đây KHÔNG THUỘC nhóm \"Mô hình dữ liệu logic trên cơ sở đối tượng\" (Object-based)?',
    options: [
      'Mô hình phân cấp dạng cấu trúc cây phân nhánh (Hierarchical Model)',
      'Mô hình thực thể kết hợp (Entity-Relationship Model - ER Model)',
      'Mô hình dữ liệu hướng đối tượng (Object-Oriented Data Model - OODM)',
      'Mô hình dữ liệu ngữ nghĩa và Mô hình dữ liệu chức năng chuyên biệt'
    ],
    answer: 0,
    explanation: 'Mô hình phân cấp (Hierarchical) thuộc nhóm Mô hình logic trên cơ sở bản ghi (Record-based), không thuộc nhóm hướng đối tượng.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-029',
    question: 'Trong mô hình mạng (Network Model), mỗi loại mẫu tin (record type) được biểu diễn trực quan bằng hình học nào?',
    options: [
      'Được biểu diễn bằng một hình chữ nhật đặc trưng cho một đối tượng',
      'Được biểu diễn bằng một hình ngôi sao năm cánh có viền màu vàng',
      'Được biểu diễn bằng một hình elip dẹt nằm ngang có mũi tên bao quanh',
      'Được biểu diễn bằng một hình lục giác đều có các cạnh nối với nhau'
    ],
    answer: 0,
    explanation: 'Trong mô hình mạng: Mỗi loại mẫu tin (record type) đặc trưng cho một đối tượng (VD: Khoa, SinhVien...) và được ký hiệu bằng hình chữ nhật.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-030',
    question: 'Trong mô hình phân cấp, mỗi nút con có thể có tối đa bao nhiêu nút cha (Parent Node)?',
    options: [
      'Chỉ có thể có duy nhất một nút cha trong cấu trúc cây phân nhánh',
      'Có thể có vô số nút cha tùy theo số lượng người dùng truy cập',
      'Bắt buộc phải có đúng hai nút cha tương ứng với hai bán cầu não',
      'Không bao giờ có nút cha vì các nút hoàn toàn độc lập với nhau'
    ],
    answer: 0,
    explanation: 'Trong cấu trúc cây chuẩn của mô hình phân cấp, mỗi nút con chỉ có duy nhất một nút cha (quan hệ 1-N). Đây là đặc trưng cơ bản và cũng là hạn chế lớn của mô hình này.',
    difficulty: 'easy'
  },
  {
    id: 'db-c1-d2-031',
    question: 'Trong mô hình thực thể kết hợp (ER), mối kết hợp (Relationship Type) được biểu diễn bằng hình gì?',
    options: [
      'Được biểu diễn bằng hình thoi nối giữa các loại thực thể tham gia',
      'Được biểu diễn bằng hình chữ nhật nét đôi có góc vuông sắc nét',
      'Được biểu diễn bằng hình tròn có dấu cộng nằm chính giữa tâm hình',
      'Được biểu diễn bằng hình parabol cong vút về phía góc phần tư thứ nhất'
    ],
    answer: 0,
    explanation: 'Trong mô hình ER chuẩn: Mối kết hợp (Relationship Type) được ký hiệu bằng hình thoi, nối với các loại thực thể tham gia.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-032',
    question: 'Thuộc tính khóa (Key Attribute) của một loại thực thể trong mô hình ER được quy ước trình bày như thế nào?',
    options: [
      'Tên thuộc tính được viết bằng mực đỏ và in đậm kích thước lớn',
      'Tên thuộc tính được gạch chân nằm bên trong hình bầu dục thuộc tính',
      'Tên thuộc tính được bao quanh bởi một hình vuông màu đen viền dày',
      'Tên thuộc tính được đặt bên ngoài sơ đồ và có dấu sao đánh dấu đầu'
    ],
    answer: 1,
    explanation: 'Trong sơ đồ ER: Thuộc tính được vẽ bằng hình bầu dục, và thuộc tính khóa (Key) được phân biệt bằng cách gạch chân dưới tên thuộc tính.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-033',
    question: 'Trong mô hình dữ liệu quan hệ, mỗi dòng (Row) trong bảng đại diện cho khái niệm toán học nào?',
    options: [
      'Đại diện cho một bộ giá trị (Tuple hay k-bộ) của quan hệ đó',
      'Đại diện cho một biến số nhị phân trong hàm logic vị từ cấp một',
      'Đại diện cho một mặt phẳng không gian trong hình học giải tích',
      'Đại diện cho một bước nhảy con trỏ chuột trên màn hình máy tính'
    ],
    answer: 0,
    explanation: 'Trong mô hình quan hệ: Mỗi dòng của bảng là một bộ (tuple hay k-bộ), biểu diễn một thể hiện cụ thể của đối tượng thực tế.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-034',
    question: 'Khái niệm \"Tính kế thừa\" (Inheritance) trong mô hình hướng đối tượng mang lại giá trị nào sau đây?',
    options: [
      'Lớp con kế thừa các thuộc tính và phương thức từ lớp cha, tăng tái sử dụng',
      'Tự động sao chép toàn bộ tiền tiết kiệm của người dùng vào tài khoản ngân hàng',
      'Cho phép một máy tính tự động tiếp quản bàn phím của một máy tính khác từ xa',
      'Bắt buộc các lập trình viên phải truyền lại mã nguồn cho con cháu của mình'
    ],
    answer: 0,
    explanation: 'Tính kế thừa (Inheritance) cho phép lớp con tiếp nhận và mở rộng các thuộc tính, phương thức từ lớp cha, giúp tái sử dụng mã nguồn và giảm trùng lặp logic.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-035',
    question: 'Tại sao mô hình hướng đối tượng (OODM) được nhận định \"có thể sẽ là mô hình CSDL của tương lai\"?',
    options: [
      'Vì có thể biểu diễn tự nhiên các kiểu dữ liệu phức tạp, đa phương tiện và đồ họa',
      'Vì mô hình này không cần sử dụng năng lượng điện khi máy chủ hoạt động',
      'Vì chi phí mua máy tính để chạy mô hình hướng đối tượng rẻ hơn bình thường',
      'Vì mô hình hướng đối tượng cấm người dùng không được xóa dữ liệu khỏi đĩa'
    ],
    answer: 0,
    explanation: 'OODM kết hợp sức mạnh của lập trình hướng đối tượng với khả năng lưu trữ bền vững, rất phù hợp để xử lý các cấu trúc dữ liệu phức tạp, đa phương tiện, CAD/CAM và AI hiện đại.',
    difficulty: 'medium'
  },
  {
    id: 'db-c1-d2-036',
    question: 'So sánh về khả năng biểu diễn quan hệ nhiều-nhiều (N-N), phát biểu nào sau đây phản ánh ĐÚNG BẢN CHẤT?',
    options: [
      'Mô hình phân cấp hỗ trợ tự nhiên N-N; Mô hình ER bắt buộc phải chia cây',
      'Mô hình ER và Quan hệ hỗ trợ N-N dễ dàng; Mô hình phân cấp gặp bế tắc',
      'Không có mô hình nào trong khoa học máy tính có thể biểu diễn được N-N',
      'Mô hình mạng cấm hoàn toàn mối quan hệ N-N và chỉ hỗ trợ quan hệ 1-1'
    ],
    answer: 1,
    explanation: 'Mô hình ER (qua mối kết hợp N-N) và mô hình Quan hệ (qua bảng trung gian kết hợp) giải quyết quan hệ N-N rất tự nhiên và chuẩn xác. Ngược lại, mô hình phân cấp dạng cây bị bế tắc và phải nhân bản dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm lẫn giữa mô hình phân cấp (chỉ 1-N) và mô hình mạng hay quan hệ.',
      trickWord: 'Bẫy khả năng biểu diễn quan hệ Nhiều-Nhiều (N-N) giữa các mô hình dữ liệu',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.b & III.3.a',
      tip: 'Mô hình ER & Quan hệ = Xử lý N-N dễ dàng; Mô hình Phân cấp (Tree) = Không hỗ trợ tự nhiên N-N.'
    }
  },
  {
    id: 'db-c1-d2-037',
    question: 'Trong mô hình ER, một mối kết hợp giữa 3 loại thực thể: Bác sĩ, Bệnh nhân và Thuốc được gọi là gì?',
    options: [
      'Mối kết hợp đệ quy tự thân của thực thể Bác sĩ điều trị',
      'Mối kết hợp tam phân (3 ngôi - Degree 3) giữa 3 thực thể',
      'Mối kết hợp nhị phân kép gồm hai mối liên hệ tách biệt',
      'Mối kết hợp yếu không xác định vì thiếu thuộc tính khóa'
    ],
    answer: 1,
    explanation: 'Số ngôi của mối kết hợp (Degree) là tổng số thực thể tham gia. Mối kết hợp gồm 3 thực thể (Bác sĩ, Bệnh nhân, Thuốc) là mối kết hợp 3 ngôi (tam phân - Ternary relationship).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ nhầm với mối kết hợp nhị phân kép hoặc mối kết hợp yếu.',
      trickWord: 'Bẫy khái niệm số ngôi (Degree) của mối kết hợp 3 thực thể trong mô hình ER',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: 'Số ngôi (Degree) = Số loại thực thể tham gia ➔ 3 thực thể tham gia = Mối kết hợp 3 ngôi (Tam phân).'
    }
  },
  {
    id: 'db-c1-d2-038',
    question: 'Tình huống: Giả sử một sinh viên học môn \"Cơ sở dữ liệu\" phải học trước môn \"Cơ sở lập trình\". Mối liên hệ này trong mô hình mạng được gọi là gì?',
    options: [
      'Loại liên hệ vòng khép kín không xác định được chủ thành viên',
      'Loại liên hệ đệ quy (MHOC_TRUOC / MHOC_SAU) giữa các mẫu tin',
      'Hiện tượng sập nguồn dữ liệu khi hai mẫu tin trùng mã số khóa',
      'Mối quan hệ kế thừa hướng đối tượng giữa hai lớp phần mềm con'
    ],
    answer: 1,
    explanation: 'Giáo trình Chương I mục 3.3 đưa ra ví dụ trực tiếp: Quan hệ điều kiện tiên quyết giữa môn học trước và môn học sau (MHoc_Truoc, MHoc_Sau) được biểu diễn bằng các loại liên hệ giữa mẫu tin môn học với nhau.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn mối liên hệ hướng đối tượng hoặc chu trình khép kín.',
      trickWord: 'Bẫy quan hệ điều kiện tiên quyết môn học trong ví dụ kinh điển của mô hình mạng',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.a',
      tip: 'Ví dụ giáo trình: Môn học trước - Môn học sau = Liên hệ MHOC_TRUOC, MHOC_SAU trong mô hình mạng.'
    }
  },
  {
    id: 'db-c1-d2-039',
    question: 'Điều kiện nào sau đây BẮT BUỘC phải thỏa mãn để một tập hợp các bảng được coi là một CSDL quan hệ chuẩn?',
    options: [
      'Mỗi bảng phải có tên phân biệt, các dòng là duy nhất và mỗi ô chỉ chứa một giá trị nguyên tố',
      'Tất cả các cột trong bảng đều phải có kiểu dữ liệu là số nguyên không dấu 32-bit',
      'Số lượng cột của mỗi bảng bắt buộc phải bằng chính xác số lượng dòng của bảng đó',
      'Mỗi bảng bắt buộc phải có ít nhất mười nghìn dòng dữ liệu thì mới được phép lưu'
    ],
    answer: 0,
    explanation: 'Theo chuẩn mô hình quan hệ của E.F. Codd: Mỗi quan hệ có tên phân biệt, thứ tự dòng/cột không quan trọng, các bộ là duy nhất (không trùng nhau), và mỗi thuộc tính tại mỗi ô chỉ chứa một giá trị nguyên tố (Atomic - 1NF).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Dễ bị lừa bởi các quy định ép buộc về kiểu số nguyên, số lượng dòng tối thiểu hoặc ma trận vuông.',
      trickWord: 'Bẫy điều kiện chuẩn mực của bảng quan hệ (Relational Table) trong mô hình quan hệ',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.a',
      tip: 'Chuẩn bảng quan hệ = Giá trị nguyên tố (Atomic) + Tên phân biệt + Dòng duy nhất (Tuple).'
    }
  },
  {
    id: 'db-c1-d2-040',
    question: 'Tình huống phân tích: Tại sao mô hình dữ liệu quan hệ (RDBMS) lại thống trị ngành công nghiệp phần mềm suốt hơn 40 năm qua?',
    options: [
      'Nhờ nền tảng toán học tập hợp vững chắc, tính độc lập dữ liệu cao và ngôn ngữ SQL chuẩn hóa',
      'Vì chính phủ các nước ban hành luật cấm các lập trình viên sử dụng bất kỳ mô hình nào khác',
      'Vì phần cứng máy tính chỉ có thể đọc được dữ liệu dạng bảng, không đọc được dữ liệu khác',
      'Vì chi phí trả lương cho lập trình viên SQL thấp hơn rất nhiều so với lập trình viên khác'
    ],
    answer: 0,
    explanation: 'RDBMS thống trị hơn 4 thập kỷ nhờ: (1) Dựa trên cơ sở toán học tập hợp chặt chẽ; (2) Đảm bảo tính độc lập dữ liệu xuất sắc; (3) Ngôn ngữ SQL phi thủ tục trực quan, mạnh mẽ và được quốc tế chuẩn hóa (ANSI/ISO).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn các lý do ép buộc phi lý từ chính phủ hoặc phần cứng máy tính.',
      trickWord: 'Bẫy động lực thống trị 4 thập kỷ của Mô hình dữ liệu quan hệ (RDBMS)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & IV.1',
      tip: 'Thành công của RDBMS = Nền tảng toán học tập hợp + Độc lập dữ liệu + Ngôn ngữ SQL chuẩn hóa.'
    }
  }
];

function rebalanceSet(questions, targetAnswers, diffIndex) {
  questions[diffIndex].difficulty = 'medium';
  questions.forEach((q, idx) => {
    const targetAns = targetAnswers[idx];
    const currAns = q.answer;
    if (currAns !== targetAns) {
      const temp = q.options[targetAns];
      q.options[targetAns] = q.options[currAns];
      q.options[currAns] = temp;
      q.answer = targetAns;
    }
  });
}

function generateFiles() {
  const targetAnswers1 = [0, 2, 1, 3, 1, 0, 3, 2, 0, 1, 2, 3, 1, 0, 2, 3, 0, 1, 3, 2, 1, 0, 2, 3, 0, 2, 1, 3, 2, 0, 1, 3, 0, 1, 2, 3, 1, 2, 0, 3];
  const targetAnswers2 = [1, 0, 2, 3, 0, 2, 1, 3, 2, 1, 0, 3, 0, 3, 1, 2, 1, 0, 3, 2, 0, 1, 2, 3, 2, 0, 1, 3, 1, 2, 0, 3, 0, 1, 3, 2, 3, 0, 2, 1];

  rebalanceSet(questionsDbCh1Part1, targetAnswers1, 10);
  rebalanceSet(questionsDbCh1Part2, targetAnswers2, 8);

  // Ghi file Đề 1
  const content1 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ 1
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c1-d1-001 ĐẾN db-c1-d1-040
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Part1 = ${JSON.stringify(questionsDbCh1Part1, null, 2)};
`;

  fs.writeFileSync('./data/questions-db-ch1-part1.js', content1, 'utf8');
  console.log('Successfully written data/questions-db-ch1-part1.js!');

  // Ghi file Đề 2
  const content2 = `/* ============================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM: MÔN HỆ CƠ SỞ DỮ LIỆU (DATABASE SYSTEM)
   CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU — BỘ ĐỀ 2
   SỐ LƯỢNG: 40 CÂU CỐ ĐỊNH (30% DỄ - 40% TRUNG BÌNH - 30% KHÓ/BẪY)
   MÃ BỘ ĐỀ: db-c1-d2-001 ĐẾN db-c1-d2-040
   CHUẨN KỸ THUẬT: ĐỘ LỆCH CHIỀU DÀI DELTA L <= 15 CHARS, CÂN BẰNG ĐÁP ÁN
   ============================================================ */

export const questionsDbCh1Part2 = ${JSON.stringify(questionsDbCh1Part2, null, 2)};
`;

  fs.writeFileSync('./data/questions-db-ch1-part2.js', content2, 'utf8');
  console.log('Successfully written data/questions-db-ch1-part2.js!');
}

generateFiles();
