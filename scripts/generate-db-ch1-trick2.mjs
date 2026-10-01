import fs from 'fs';

// ========================================================================
// NGÂN HÀNG ĐỀ THI BẪY 2: MÔN HỆ CƠ SỞ DỮ LIỆU - CHƯƠNG I
// CHƯƠNG I: TỔNG QUAN VÀ GIỚI THIỆU HỆ CƠ SỞ DỮ LIỆU
// BỘ ĐỀ BẪY 2: db-c1-t2-001 ĐẾN db-c1-t2-050 (50 CÂU BẪY 100% HARD)
// CÂN BẰNG ĐÁP ÁN: 12 A, 12 B, 13 C, 13 D (TARGET: 2,3,0,1,2,3,0,1...)
// CHUẨN KỸ THUẬT: DELTA L <= 15 CHARS, 100% TRICKDETAILS 4 TRƯỜNG
// ========================================================================

const targetAnswers2 = [
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3, // 1 - 10
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 11 - 20
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3, // 21 - 30
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, // 31 - 40
  2, 3, 0, 1, 2, 3, 0, 1, 2, 3  // 41 - 50 (12 A, 12 B, 13 C, 13 D)
];

export const rawQuestionsTrick2 = [
  // --- CỤM 1: BẪY FILE PROCESSING VS DATABASE APPROACH (Câu 1 - 13) ---
  {
    id: 'db-c1-t2-001',
    question: 'Khi phân tích về nhược điểm \"Dư thừa dữ liệu\" (Data Redundancy) trong hệ thống tập tin, khẳng định nào sau đây là SAI?',
    options: [
      'Dư thừa dữ liệu chỉ gây tốn dung lượng ổ đĩa chứ hoàn toàn không dẫn đến sai lệch thông tin',
      'Dư thừa dữ liệu gây lãng phí rất nhiều công sức khi nhân viên phải nhập liệu lặp đi lặp lại',
      'Dư thừa dữ liệu làm gia tăng chi phí lưu trữ phần cứng trên các ổ đĩa từ của trung tâm dữ liệu',
      'Dư thừa dữ liệu là nguyên nhân gốc rễ dẫn đến tình trạng dữ liệu không nhất quán trong hệ thống'
    ],
    answer: 0,
    explanation: 'Khẳng định "chỉ gây tốn dung lượng đĩa chứ không dẫn đến sai lệch thông tin" là hoàn toàn sai. Giáo trình chỉ rõ: Dư thừa dữ liệu dễ dẫn đến tình trạng dị thường (anomaly) và gây ra sự không nhất quán dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ dư thừa chỉ đơn thuần là tốn đĩa, xem nhẹ hậu quả sai lệch thông tin.',
      trickWord: 'Bẫy từ ngữ giảm thiểu hóa "chỉ gây tốn đĩa chứ hoàn toàn không dẫn đến sai lệch"',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.a',
      tip: 'Dư thừa dữ liệu KHÔNG CHỈ tốn đĩa mà là nguồn gốc gây ra SAI LỆCH và DỊ THƯỜNG!'
    }
  },
  {
    id: 'db-c1-t2-002',
    question: 'Tính chất \"All-or-Nothing\" trong giao tác cơ sở dữ liệu dùng để khắc phục nhược điểm chí mạng nào của hệ thống tập tin?',
    options: [
      'Khó khăn trong việc đảm bảo tính nguyên tố khi hệ thống gặp sự cố mất điện hay hỏng phần cứng',
      'Chi phí đầu tư mua sắm các thiết bị lưu trữ ban đầu cho phòng máy chủ của công ty quá tốn kém',
      'Khó khăn trong việc tìm kiếm nhân sự có trình độ lập trình hợp ngữ Assembly để bảo trì hệ thống',
      'Sự giới hạn về số lượng ký tự tối đa được phép đặt tên cho các thư mục con trong hệ điều hành'
    ],
    answer: 0,
    explanation: 'Tính chất \"All-or-Nothing\" (hoặc thực hiện toàn bộ, hoặc không thực hiện gì) chính là Tính nguyên tố (Atomicity), giúp khắc phục nhược điểm không thể phục hồi trạng thái nhất quán khi có sự cố của hệ thống tập tin.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm All-or-Nothing với tính toàn vẹn (Integrity) hoặc an toàn dữ liệu.',
      trickWord: 'Bẫy thuật ngữ All-or-Nothing chính là nguyên lý Atomicity (Tính nguyên tố)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c',
      tip: 'All-or-Nothing = Tính nguyên tố (Atomicity) = Giao tác hoàn tất 100% hoặc Rollback!'
    }
  },
  {
    id: 'db-c1-t2-003',
    question: 'Tại sao việc các ràng buộc toàn vẹn bị nhúng cứng vào từng chương trình trong hệ thống tập tin lại bị coi là nhược điểm chí mạng?',
    options: [
      'Vì khi quy tắc nghiệp vụ thay đổi, lập trình viên phải sửa đổi và kiểm thử lại toàn bộ các phần mềm',
      'Vì làm cho kích thước tệp tin thực thi (.exe) vượt quá giới hạn 64KB của bộ nhớ vi xử lý máy tính',
      'Vì hệ điều hành mạng sẽ tự động khóa quyền truy cập tệp tin khi phát hiện có nhiều câu lệnh IF...ELSE',
      'Vì người sử dụng cuối sẽ nhìn thấy toàn bộ mã nguồn lập trình và vô tình sửa đổi các thuật toán đó'
    ],
    answer: 0,
    explanation: 'Giáo trình nêu rõ: Khi các quy tắc ràng buộc nằm rải rác trong mã nguồn của nhiều chương trình khác nhau, nếu có ràng buộc mới hoặc thay đổi quy tắc quản lý, việc sửa đổi đồng loạt toàn bộ mã nguồn là cực kỳ khó khăn, tốn kém và dễ sót lỗi.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị đánh lạc hướng sang giới hạn bộ nhớ hoặc cơ chế khóa tệp của OS.',
      trickWord: 'Bẫy chi phí bảo trì và sửa đổi phần mềm khi nhúng cứng ràng buộc nghiệp vụ',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.d',
      tip: 'Nhúng ràng buộc vào code = Sửa luật kinh doanh phải sửa lại TOÀN BỘ ứng dụng!'
    }
  },
  {
    id: 'db-c1-t2-004',
    question: 'Điền thuật ngữ: \"Sự không đầy đủ của thông tin cần lưu trữ, thiếu cơ chế phân cấp người dùng và thiếu sao lưu dự phòng thể hiện (...).\"',
    options: [
      'Tính không toàn vẹn và kém an toàn dữ liệu trong hệ thống tập tin',
      'Dị thường xóa thông tin do thiếu trường khóa chính của bản ghi',
      'Hiện tượng bế tắc tranh chấp tài nguyên giữa các luồng xử lý CPU',
      'Sự vi phạm tính trừu tượng hóa mức khái niệm của lược đồ quan hệ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.1.b.f: Tính không toàn vẹn, an toàn dữ liệu thể hiện sự không đầy đủ của thông tin so với yêu cầu quản lý; an toàn dữ liệu bao gồm bảo mật, phân cấp người dùng và sao lưu dự phòng (backup).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn \"Dị thường xóa\" hoặc \"Vi phạm tính trừu tượng\".',
      trickWord: 'Bẫy định nghĩa mục f trong 6 nhược điểm của File Processing System',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.f',
      tip: 'Thiếu thông tin + Thiếu phân cấp + Thiếu backup = Không toàn vẹn & Kém an toàn!'
    }
  },
  {
    id: 'db-c1-t2-005',
    question: 'Cho 3 phát biểu về hệ thống xử lý tập tin:\n(I) Dư thừa dữ liệu là nguyên nhân trực tiếp dẫn tới không nhất quán.\n(II) Hệ thống tập tin xử lý giao tác ngân hàng an toàn hơn CSDL.\n(III) Tập tin phù hợp với bài toán nhỏ, chi phí đầu tư ban đầu thấp.\nTổ hợp ĐÚNG là:',
    options: [
      'Phát biểu (I) và (III) hoàn toàn đúng, phát biểu (II) sai hoàn toàn',
      'Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác giáo trình',
      'Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) là sai',
      'Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) sai hoàn toàn'
    ],
    answer: 0,
    explanation: '(II) sai vì hệ thống tập tin không có cơ chế giao tác ACID và khóa tương tranh, cực kỳ nguy hiểm nếu dùng cho giao tác ngân hàng. (I) và (III) đúng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh đọc nhanh tưởng hệ thống tập tin an toàn cho ngân hàng.',
      trickWord: 'Bẫy phát biểu sai hiển nhiên về độ an toàn của hệ thống tập tin trong ngân hàng',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & I.1.b',
      tip: 'Giao tác ngân hàng bắt buộc phải dùng CSDL với ACID, tuyệt đối không dùng tệp tin!'
    }
  },
  {
    id: 'db-c1-t2-006',
    question: 'Một hệ thống vé tàu hỏa lưu dữ liệu bằng các tệp tin Word/Excel riêng lẻ. Khi hai hành khách ở hai đại lý cùng đặt chỗ ngồi số 15A tại cùng một giây, hiện tượng xấu nhất xảy ra là gì?',
    options: [
      'Dị thường truy cập tương tranh dẫn đến bán trùng vé cùng một ghế cho cả hai hành khách khác nhau',
      'Hệ điều hành máy chủ sẽ tự động in thêm một ghế phụ bằng nhựa trên toa tàu thực tế cho khách ngồi',
      'Toàn bộ mạng lưới đường sắt quốc gia sẽ tự động ngừng hoạt động để kỹ thuật viên kiểm tra ray',
      'Hệ thống sẽ tự động chuyển đổi định dạng tệp tin Excel sang cơ sở dữ liệu quan hệ Oracle tức thì'
    ],
    answer: 0,
    explanation: 'Không có cơ chế khóa tương tranh (Concurrency Control), hai tiến trình cùng đọc ghế trống và cùng ghi nhận thành công, dẫn đến bán trùng ghế (Double Booking Anomaly).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh không hình dung được kịch bản Double Booking do thiếu Transaction Lock.',
      trickWord: 'Bẫy dị thường truy cập tương tranh đồng thời trong bài toán bán vé',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.e',
      tip: 'Không có khóa (Lock) ➔ 2 người cùng đặt 1 chỗ ➔ Trùng vé (Double Booking)!'
    }
  },
  {
    id: 'db-c1-t2-007',
    question: 'Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về việc chia sẻ dữ liệu trong phương pháp xử lý tập tin?',
    options: [
      'Dữ liệu trong các tập tin có thể được chia sẻ rất dễ dàng và linh hoạt giữa các phần mềm độc lập',
      'Dữ liệu thường bị cô lập bên trong các ứng dụng riêng biệt của từng phòng ban trong công ty',
      'Rất khó khăn khi cần kết xuất một báo cáo tổng hợp thông tin lấy từ nhiều tệp tin có định dạng khác nhau',
      'Khó mở rộng hoặc kết nối trao đổi dữ liệu tự động giữa hệ thống của cơ quan này với cơ quan khác'
    ],
    answer: 0,
    explanation: 'Giáo trình chỉ rõ: Phương pháp tập tin thiếu khả năng chia sẻ thông tin giữa các hệ thống, khó mở rộng hoặc kết nối với hệ thống khác. Khẳng định "chia sẻ rất dễ dàng" là sai.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh ngày nay quen gửi file qua email/chat nên tưởng tệp tin rất dễ chia sẻ.',
      trickWord: 'Bẫy ngụy biện về khả năng chia sẻ dữ liệu: Tệp tin gây cô lập dữ liệu (Data Isolation)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.c',
      tip: 'Phương pháp tệp tin: Dữ liệu bị CÔ LẬP, KHÓ chia sẻ giữa các chương trình độc lập.'
    }
  },
  {
    id: 'db-c1-t2-008',
    question: 'Điền thuật ngữ: \"Sự lặp đi lặp lại của thông tin được lưu trữ ở nhiều tập tin khác nhau trong cùng một tổ chức được gọi là (...).\"',
    options: [
      'Tính dư thừa dữ liệu (Data Redundancy gây lãng phí không gian lưu trữ)',
      'Tính không nhất quán dữ liệu (Data Inconsistency gây xung đột thông tin)',
      'Tính phân mảnh dữ liệu ngang (Horizontal Fragmentation của bảng phân tán)',
      'Tính toàn vẹn tham chiếu (Referential Integrity giữa khóa chính và khóa ngoại)'
    ],
    answer: 0,
    explanation: 'Định nghĩa chuẩn mục I.1.b.a: Tính dư thừa dữ liệu (Data Redundancy) là sự lặp đi lặp lại của thông tin được lưu trữ ở nhiều tập tin khác nhau trong cùng một tổ chức.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn nhầm \"Tính không nhất quán\".',
      trickWord: 'Bẫy phân biệt định nghĩa Redundancy (sự lặp lại) vs Inconsistency (sự sai lệch)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.a',
      tip: 'Lặp đi lặp lại ở nhiều nơi = DƯ THỪA (Data Redundancy)!'
    }
  },
  {
    id: 'db-c1-t2-009',
    question: 'Tại sao việc xóa một tập tin trong hệ thống xử lý tập tin có thể gây hậu quả nghiêm trọng cho các chương trình khác?',
    options: [
      'Vì các chương trình khác phụ thuộc vào cấu trúc tệp đó sẽ bị sập do không tìm thấy đường dẫn',
      'Vì hệ điều hành sẽ tự động định dạng lại toàn bộ ổ cứng khi có một tệp văn bản bị xóa đi',
      'Vì xóa tệp tin sẽ làm giảm điện áp hoạt động của bộ nguồn máy tính xuống mức nguy hiểm',
      'Vì người quản trị mạng sẽ bị tước quyền truy cập vào bảng điều khiển máy chủ vĩnh viễn'
    ],
    answer: 0,
    explanation: 'Trong hệ thống tập tin, sự phụ thuộc giữa chương trình và dữ liệu (Program-Data Dependence) rất chặt chẽ: mã nguồn nhúng cứng đường dẫn và định dạng tệp, khi tệp bị xóa hoặc đổi cấu trúc, chương trình sẽ lập tức báo lỗi và sập.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ đến các lỗi phần cứng hoặc hệ thống máy tính.',
      trickWord: 'Bẫy Program-Data Dependence (Sự phụ thuộc dữ liệu và chương trình)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b',
      tip: 'Phụ thuộc chương trình - dữ liệu: Đổi file hoặc xóa file ➔ Ứng dụng sập ngay!'
    }
  },
  {
    id: 'db-c1-t2-010',
    question: 'Bẫy nhận định: Trong các phát biểu sau đây về lịch sử phát triển của hệ thống thông tin, phát biểu nào là ĐÚNG?',
    options: [
      'Giai đoạn thập niên 60s đến 80s là thời kỳ phương pháp xử lý tập tin được sử dụng rộng rãi nhất',
      'Ngay từ thập niên 1940, các hệ quản trị cơ sở dữ liệu quan hệ SQL đã hoàn toàn thay thế tệp tin',
      'Đến nay, phương pháp xử lý tập tin đã bị cấm sử dụng hoàn toàn trong mọi ứng dụng tin học cá nhân',
      'Hệ cơ sở dữ liệu quan hệ ra đời vào thập niên 1920 cùng thời điểm phát minh ra bóng bán dẫn'
    ],
    answer: 0,
    explanation: 'Giáo trình mục I.1.a nêu rõ: Phương pháp xử lý tập tin được sử dụng rộng rãi trong suốt những năm 60s - 80s của thế kỷ XX trước khi các HQTCSDL quan hệ trở nên phổ biến.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn mốc thời gian sai như 1940 hay nghĩ tệp tin đã bị cấm hoàn toàn.',
      trickWord: 'Bẫy mốc lịch sử chuẩn mực: 60s - 80s của thế kỷ XX',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.a',
      tip: 'Xử lý tập tin phổ biến vào những năm 60s - 80s của thế kỷ 20.'
    }
  },
  {
    id: 'db-c1-t2-011',
    question: 'Một công ty chuyển từ hệ thống tệp tin sang CSDL quan hệ. Lợi ích trực tiếp lớn nhất về mặt \"Sử dụng tài nguyên\" là gì?',
    options: [
      'Tiết kiệm dung lượng lưu trữ đĩa cứng nhờ loại bỏ dữ liệu dư thừa và giảm chi phí bảo trì',
      'Giúp các màn hình máy tính của nhân viên tự động tăng độ phân giải lên chuẩn sắc nét 4K',
      'Giúp máy in văn phòng có thể in ấn với tốc độ nhanh gấp mười lần mà không lo bị kẹt giấy',
      'Giúp nhân viên không cần phải sử dụng bàn phím máy tính nữa mà điều khiển hoàn toàn bằng giọng nói'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.1.b ghi rõ về hiệu quả sử dụng thông tin: Tiết kiệm tài nguyên: Giảm thiểu dung lượng lưu trữ và chi phí bảo trì nhờ loại bỏ dữ liệu dư thừa.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh dễ bị phân tâm bởi các phương án công nghệ nghe hấp dẫn nhưng phi lý.',
      trickWord: 'Bẫy lợi ích tài nguyên thực tế: Giảm dung lượng đĩa + Giảm chi phí bảo trì',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.b',
      tip: 'Loại bỏ dư thừa ➔ Tiết kiệm dung lượng đĩa + Giảm chi phí bảo trì!'
    }
  },
  {
    id: 'db-c1-t2-012',
    question: 'Cho 3 mệnh đề về sự không nhất quán dữ liệu:\n(I) Phát sinh do cùng thông tin nhưng cập nhật ở tệp này mà quên tệp khác.\n(II) Luôn luôn có thể phát hiện và sửa chữa tự động bằng lệnh của DOS.\n(III) Gây ra các quyết định sai lầm trong quản lý và điều hành doanh nghiệp.\nMệnh đề ĐÚNG là:',
    options: [
      'Mệnh đề (I) và (III) hoàn toàn đúng, mệnh đề (II) hoàn toàn sai lệch',
      'Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình',
      'Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót',
      'Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: '(II) sai vì lệnh hệ điều hành (DOS/Windows) không thể hiểu được ngữ nghĩa dữ liệu để tự động sửa chữa sự không nhất quán giữa các tệp. (I) và (III) đúng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh tưởng lệnh hệ điều hành có thể tự động sửa lỗi logic dữ liệu.',
      trickWord: 'Bẫy nhận thức: OS không thể tự hiểu ngữ nghĩa để giải quyết Data Inconsistency',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b',
      tip: 'Hệ điều hành chỉ thấy các byte dữ liệu thô, không thể tự sửa dữ liệu không nhất quán.'
    }
  },
  {
    id: 'db-c1-t2-013',
    question: 'Tình huống: Một bảng điểm sinh viên được lưu ở 3 tệp riêng tại Khoa, Phòng Đào tạo và Phòng Công tác sinh viên. Khi sinh viên khiếu nại và được sửa điểm tại Khoa nhưng 2 phòng kia không sửa, hệ thống rơi vào trạng thái gì?',
    options: [
      'Trạng thái không nhất quán dữ liệu do cùng một sinh viên nhưng có 2 mức điểm khác nhau',
      'Trạng thái bế tắc chết (Deadlock) làm treo toàn bộ máy chủ của toàn bộ trường đại học',
      'Trạng thái an toàn tuyệt đối vì điểm gốc của sinh viên vẫn còn lưu tại phòng Đào tạo',
      'Trạng thái lỗi vật lý cung từ làm hỏng phiến đĩa từ lưu trữ tệp tin của phòng Đào tạo'
    ],
    answer: 0,
    explanation: 'Cùng một đối tượng (sinh viên và môn học) nhưng tại cùng thời điểm có các giá trị khác nhau giữa các tệp ➔ Định nghĩa chính xác của Không nhất quán dữ liệu (Data Inconsistency).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn Deadlock hoặc nhầm là an toàn do có bản sao lưu.',
      trickWord: 'Bẫy tình huống thực tế: Điểm số mâu thuẫn giữa các phòng ban = Data Inconsistency',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.b.b',
      tip: 'Mỗi phòng một điểm ➔ Không nhất quán dữ liệu (Data Inconsistency)!'
    }
  },

  // --- CỤM 2: BẪY CSDL, HQTCSDL (DBMS) & 3 NHÓM NGƯỜI DÙNG (Câu 14 - 25) ---
  {
    id: 'db-c1-t2-014',
    question: 'Đặc trưng nào sau đây KHÔNG PHẢI là ưu điểm của cách tiếp cận Cơ sở dữ liệu so với hệ thống tập tin?',
    options: [
      'Chi phí đầu tư ban đầu về phần cứng, phần mềm và đào tạo nhân sự luôn luôn rẻ hơn tệp tin',
      'Giảm thiểu tối đa sự trùng lặp thông tin, đảm bảo tính nhất quán và tính toàn vẹn của dữ liệu',
      'Dữ liệu có thể được truy xuất theo nhiều cách khác nhau, không bị ràng buộc bởi cấu trúc đơn lẻ',
      'Khả năng chia sẻ thông tin cao cho nhiều người dùng và nhiều ứng dụng cùng khai thác đồng thời'
    ],
    answer: 0,
    explanation: 'Chi phí đầu tư cho CSDL ban đầu (mua bản quyền DBMS, máy chủ cấu hình cao, đào tạo DBA) thường ĐẮT HƠN nhiều so với hệ thống tập tin. Nói "luôn rẻ hơn" là ngụy biện sai.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ CSDL hiện đại thì cái gì cũng tốt hơn kể cả chi phí ban đầu.',
      trickWord: 'Bẫy chi phí đầu tư ban đầu: CSDL đòi hỏi chi phí lớn hơn nhiều so với File System',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & II.1.b',
      tip: 'CSDL rất mạnh nhưng chi phí đầu tư ban đầu LỚN HƠN hệ thống tập tin.'
    }
  },
  {
    id: 'db-c1-t2-015',
    question: 'So sánh giữa CSDL và Hệ quản trị CSDL, phát biểu nào sau đây thể hiện ĐÚNG bản chất quan hệ bao hàm giữa chúng?',
    options: [
      'CSDL là tập hợp dữ liệu được quản lý, còn Hệ quản trị CSDL là hệ thống phần mềm quản lý',
      'Hệ quản trị CSDL là tập hợp các bảng dữ liệu, còn CSDL là phần mềm chứa các bảng đó',
      'CSDL là một ứng dụng di động, còn Hệ quản trị CSDL là máy chủ phần cứng đặt ở chi nhánh',
      'CSDL và Hệ quản trị CSDL hoàn toàn không có mối liên hệ bao hàm hay phụ thuộc nào cả'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.a nêu rõ: HQTCSDL là phần mềm dùng để tạo lập, quản lý và xử lý dữ liệu. CSDL là một thành phần bên trong HQTCSDL.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nói ngược: tưởng CSDL là phần mềm bao hàm HQTCSDL.',
      trickWord: 'Bẫy mối quan hệ bao hàm giữa Database và DBMS',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.a',
      tip: 'HQTCSDL là phần mềm quản lý; CSDL là dữ liệu nằm trong phần mềm đó.'
    }
  },
  {
    id: 'db-c1-t2-016',
    question: 'Nhiệm vụ nào sau đây KHÔNG THUỘC trách nhiệm của Người quản trị cơ sở dữ liệu (DBA)?',
    options: [
      'Trực tiếp ngồi nhập từng hóa đơn bán lẻ hàng ngày thay cho nhân viên thu ngân tại quầy',
      'Khai báo cấu trúc lược đồ bảng và thiết lập các ràng buộc toàn vẹn của cơ sở dữ liệu',
      'Cấp phát quyền hạn truy cập dữ liệu và quản lý các chính sách bảo mật của toàn hệ thống',
      'Thiết lập chính sách sao lưu dự phòng dữ liệu định kỳ và xử lý khắc phục khi gặp sự cố'
    ],
    answer: 0,
    explanation: 'Nhập hóa đơn bán lẻ hàng ngày là công việc của Người dùng cuối (Naive End-Users/Thu ngân), tuyệt đối không phải nhiệm vụ chuyên môn của người quản trị DBA.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị phân tâm giữa các thao tác dữ liệu nghiệp vụ hàng ngày với nhiệm vụ DBA.',
      trickWord: 'Bẫy phân định trách nhiệm: DBA làm việc ở mức hệ thống, không làm việc của End-user',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.2.a',
      tip: 'DBA: Tổ chức CSDL, bảo mật, phân quyền, backup; KHÔNG ngồi nhập hóa đơn!'
    }
  },
  {
    id: 'db-c1-t2-017',
    question: 'Chuyên viên tin học biết khai thác CSDL (Application Programmers) đóng vai trò then chốt nào trong hệ sinh thái CSDL?',
    options: [
      'Xây dựng các chương trình ứng dụng và giao diện phục vụ các nhu cầu nghiệp vụ của người dùng',
      'Chịu trách nhiệm bảo dưỡng các đường dây cáp mạng và thay thế các ổ cứng hỏng của máy chủ',
      'Cấp phát tài khoản đăng nhập máy chủ và quyết định thu hồi quyền hạn của người quản trị DBA',
      'Trực tiếp quyết định doanh thu bán hàng và ký duyệt báo cáo tài chính của hội đồng quản trị'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.2.a: Chuyên viên tin học (Programmers) hiểu biết về lập trình và cách khai thác CSDL, có nhiệm vụ xây dựng các ứng dụng phục vụ nhiều mục đích khác nhau trên nền tảng CSDL.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm vai trò lập trình viên với nhân viên bảo trì mạng hoặc DBA.',
      trickWord: 'Bẫy vai trò cốt lõi của Application Programmers: Viết phần mềm ứng dụng trên nền CSDL',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.2.a',
      tip: 'Lập trình viên = Xây dựng ứng dụng và giao diện khai thác CSDL cho người dùng cuối.'
    }
  },
  {
    id: 'db-c1-t2-018',
    question: 'Điền thuật ngữ: \"Trong các HQTCSDL, việc điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và khi có sự cố hệ thống được đảm bảo bởi chức năng (...).\"',
    options: [
      'Quản lý giao tác và an toàn dữ liệu của Hệ quản trị CSDL',
      'Tự động tăng xung nhịp xử lý của vi điều khiển trung tâm',
      'Mã hóa đường truyền cáp quang theo tiêu chuẩn quân sự',
      'Định dạng lại phiến đĩa từ theo chuẩn phân vùng của Linux'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.b nêu chức năng quản trị & điều khiển: \"Quản lý giao tác (transaction), phân quyền và an toàn dữ liệu... Điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và khi có sự cố hệ thống.\"',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn các thuật ngữ phần cứng vi điều khiển hoặc phân vùng đĩa.',
      trickWord: 'Bẫy chức năng quản lý giao tác (Transaction Management) của DBMS',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Toàn vẹn khi có sự cố + Điều khiển khớp = Chức năng Quản lý giao tác (Transaction)!'
    }
  },
  {
    id: 'db-c1-t2-019',
    question: 'Khi một bệnh viện lớn cần lưu trữ hồ sơ bệnh án của hàng triệu bệnh nhân, yếu tố nào chứng minh Excel KHÔNG THỂ thay thế DBMS?',
    options: [
      'Excel không có cơ chế phân quyền bảo mật nhiều tầng và không hỗ trợ giao tác ACID đồng thời',
      'Excel không cho phép in hồ sơ ra giấy nếu máy tính chưa được cài đặt phần mềm Adobe Acrobat',
      'Excel bắt buộc bác sĩ phải nhập tên thuốc bằng ngôn ngữ máy nhị phân 0 và 1 rất phức tạp',
      'Excel không thể lưu trữ các con số có giá trị lớn hơn một trăm ngàn trong các ô bảng tính'
    ],
    answer: 0,
    explanation: 'Hồ sơ bệnh án đòi hỏi tính bảo mật phân quyền nghiêm ngặt (bác sĩ khoa nào xem khoa đó) và tính toàn vẹn giao tác ACID (nhiều bác sĩ/y tá cùng cập nhật đồng thời). Excel hoàn toàn thiếu các cơ chế này.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn các lý do phi thực tế như giới hạn con số hoặc in ấn.',
      trickWord: 'Bẫy lý do Excel không thể dùng cho hệ thống lớn: Thiếu bảo mật đa tầng & ACID',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b',
      tip: 'Hệ thống lớn bắt buộc DBMS vì cần: Bảo mật đa tầng + Giao tác ACID đồng thời!'
    }
  },
  {
    id: 'db-c1-t2-020',
    question: 'Nhận định nào sau đây là ĐÚNG khi nói về chức năng \"Kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ\" của DBMS?',
    options: [
      'DBMS tự động kiểm tra các ràng buộc toàn vẹn hợp lệ trước khi chính thức ghi dữ liệu xuống đĩa',
      'DBMS sẽ tự động gọi điện thoại cho khách hàng để xác minh danh tính trước khi lưu thông tin',
      'DBMS bắt buộc phải gửi dữ liệu sang máy chủ của hãng Microsoft để kiểm tra chứng thực số',
      'DBMS sẽ từ chối lưu trữ mọi bản ghi nếu dung lượng ổ cứng của máy chủ còn trống dưới 90%'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.b: DBMS có chức năng kiểm tra độ tin cậy của dữ liệu trước khi lưu trữ, thể hiện qua việc kiểm tra các ràng buộc toàn vẹn (Integrity Constraints) như kiểu dữ liệu, khóa chính, khóa ngoại, miền giá trị.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm "kiểm tra độ tin cậy" với việc xác thực danh tính bên ngoài.',
      trickWord: 'Bẫy ngữ nghĩa "Kiểm tra độ tin cậy" chính là kiểm tra các ràng buộc toàn vẹn',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Kiểm tra độ tin cậy = Kiểm tra ràng buộc toàn vẹn (NOT NULL, CHECK, FK...) trước khi ghi!'
    }
  },
  {
    id: 'db-c1-t2-021',
    question: 'Bẫy ngụy biện: \"Một công ty chỉ có duy nhất 1 nhân viên văn phòng sử dụng máy tính độc lập để ghi chú chi tiêu cá nhân thì BẮT BUỘC phải cài đặt hệ quản trị Oracle quy mô lớn.\" Khẳng định này là:',
    options: [
      'Sai, vì với bài toán nhỏ độc lập, dùng tệp tin hoặc bảng tính đơn giản tiết kiệm và hiệu quả hơn',
      'Đúng, vì mọi bài toán liên quan đến con số trong xã hội đều bắt buộc phải sử dụng phần mềm Oracle',
      'Đúng, vì hệ thống xử lý tập tin đã bị pháp luật cấm lưu hành hoàn toàn trên thị trường từ năm 1990',
      'Sai, vì công ty bắt buộc phải thuê tối thiểu năm chuyên gia DBA túc trực mới được phép mở máy'
    ],
    answer: 0,
    explanation: 'Giáo trình khẳng định: Phương pháp tập tin phù hợp với các bài toán nhỏ độc lập vì thời gian triển khai ngắn, chi phí thấp. Áp dụng DBMS cồng kềnh cho việc đơn giản cá nhân là lãng phí và không phù hợp.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay bị định kiến CSDL luôn là lựa chọn bắt buộc cho mọi trường hợp.',
      trickWord: 'Bẫy áp dụng công nghệ thái quá: Bài toán nhỏ độc lập thì File Processing vẫn tối ưu',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục I.1.a & II.1.a',
      tip: 'Bài toán nhỏ, 1 người dùng ➔ File/Bảng tính đơn giản là tối ưu nhất, không cần DBMS!'
    }
  },
  {
    id: 'db-c1-t2-022',
    question: 'Cho các phát biểu về HQTCSDL:\n(I) CSDL là một thành phần con bên trong HQTCSDL.\n(II) Foxpro, MySQL, PostgreSQL đều là các HQTCSDL.\n(III) HQTCSDL cung cấp ngôn ngữ phi thủ tục như SQL.\nTổ hợp ĐÚNG là:',
    options: [
      'Cả ba phát biểu (I), (II) và (III) đều hoàn toàn chính xác theo giáo trình',
      'Chỉ có phát biểu (I) và (III) là đúng, phát biểu (II) hoàn toàn sai',
      'Chỉ có duy nhất phát biểu (III) là đúng, phát biểu (I) và (II) sai',
      'Phát biểu (II) và (III) hoàn toàn đúng, phát biểu (I) là sai'
    ],
    answer: 0,
    explanation: 'Cả 3 phát biểu đều trích xuất chuẩn xác từ giáo trình mục II.4.a và II.4.b.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ Foxpro là ngôn ngữ lập trình chứ không phải DBMS.',
      trickWord: 'Bẫy danh sách HQTCSDL lịch sử: Foxpro nằm trong danh mục giáo trình',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.a & II.4.b',
      tip: 'Cả 3 phát biểu đều đúng 100% chuẩn giáo trình!'
    }
  },
  {
    id: 'db-c1-t2-023',
    question: 'Hai khả năng cơ bản của DBMS được so sánh tương đương với thành phần nào trong hệ thống máy tính?',
    options: [
      'Quản lý dữ liệu ở mức xử lý tệp tương đương với một hệ điều hành chuyên dụng',
      'Khả năng tính toán dấu phẩy động tương đương với bộ xử lý đồ họa card màn hình',
      'Khả năng truyền nhận gói tin tương đương với card mạng không dây chuẩn Wi-Fi',
      'Khả năng làm mát dữ liệu tương đương với quạt tản nhiệt của thùng máy chủ'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.4.b ghi rõ: Khả năng quản lý dữ liệu ở mức xử lý tệp NHƯ MỘT HỆ ĐIỀU HÀNH CHUYÊN DỤNG.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với GPU hoặc card mạng.',
      trickWord: 'Bẫy so sánh năng lực DBMS: Như một hệ điều hành chuyên dụng (Specialized OS)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.4.b',
      tip: 'Quản lý tệp như một HỆ ĐIỀU HÀNH CHUYÊN DỤNG!'
    }
  },
  {
    id: 'db-c1-t2-024',
    question: 'Điền vào chỗ trống: \"Khả năng truy xuất dữ liệu theo nhiều cách khác nhau mà không bị gò bó bởi cấu trúc tệp đơn lẻ thể hiện tính (...) của CSDL.\"',
    options: [
      'Linh hoạt và khả năng chia sẻ thông tin cao giữa nhiều ứng dụng',
      'Bất biến tuyệt đối của cấu trúc phần cứng lưu trữ trên bo mạch',
      'Phụ thuộc chặt chẽ giữa mã nguồn phần mềm và vị trí vật lý đĩa',
      'Độc quyền truy cập của duy nhất một người sử dụng trong hệ thống'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.1.b: Dữ liệu có thể được truy xuất theo nhiều cách khác nhau, khả năng chia sẻ thông tin cao cho nhiều người dùng và ứng dụng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị lúng túng giữa tính linh hoạt và tính phụ thuộc.',
      trickWord: 'Bẫy ưu điểm về mặt truy xuất thông tin của CSDL',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.b',
      tip: 'Truy xuất theo nhiều cách khác nhau ➔ Tính linh hoạt và chia sẻ thông tin cao!'
    }
  },
  {
    id: 'db-c1-t2-025',
    question: 'Trong quy trình cấp phát quyền hạn, nếu DBA cấp quyền cho nhân viên A được sửa bảng Khách hàng nhưng cấm nhân viên B sửa, cơ chế nào của DBMS đảm bảo điều này?',
    options: [
      'Cơ chế bảo mật và phân quyền khai thác thông tin chi tiết của DBMS',
      'Cơ chế tự động ngắt kết nối chuột của máy tính nhân viên B khi thao tác',
      'Cơ chế giảm tốc độ quạt gió của CPU khi phát hiện nhân viên B đăng nhập',
      'Cơ chế xóa toàn bộ tệp tin cấu hình mạng của máy tính mà nhân viên B dùng'
    ],
    answer: 0,
    explanation: 'DBMS quản lý bảo mật và phân quyền (Authorization/Access Control) ở mức hạt nhân CSDL, kiểm tra từng câu lệnh trước khi thực thi.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị phân tâm bởi các phương án phần cứng phi lý.',
      trickWord: 'Bẫy cơ chế bảo mật phân quyền chi tiết (Access Control) của DBMS',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.1.c & II.4.b',
      tip: 'Cho A sửa, cấm B sửa = Cơ chế bảo mật và phân quyền của DBMS!'
    }
  },

  // --- CỤM 3: BẪY KIẾN TRÚC 3 MỨC ANSI-SPARC & TÍNH ĐỘC LẬP DỮ LIỆU (Câu 26 - 37) ---
  {
    id: 'db-c1-t2-026',
    question: 'Mô hình CSDL mức khái niệm (Conceptual Schema) còn được gọi phổ biến bằng thuật ngữ học thuật nào?',
    options: [
      'Sơ đồ quan niệm (mô hình quan niệm trừu tượng của toàn bộ hệ thống)',
      'Sơ đồ chỉ mục vật lý của các khối sector trên bề mặt phiến đĩa từ',
      'Sơ đồ giao diện đồ họa hiển thị màu sắc của các biểu mẫu nhập liệu',
      'Sơ đồ mạng nội bộ kết nối dây cáp giữa các máy tính trong công ty'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.a: HQTCSDL cung cấp khả năng định nghĩa dữ liệu ở mức này để mô tả sơ đồ quan niệm (thường gọi là mô hình CSDL).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm Sơ đồ quan niệm với Sơ đồ vật lý hoặc Sơ đồ mạng.',
      trickWord: 'Bẫy thuật ngữ đồng nghĩa: Conceptual Schema chính là Sơ đồ quan niệm',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Mức khái niệm (Conceptual) = Sơ đồ quan niệm (Conceptual Schema)!'
    }
  },
  {
    id: 'db-c1-t2-027',
    question: 'Khái niệm \"Tính độc lập dữ liệu logic\" (Logical Data Independence) đề cập đến khả năng nào sau đây?',
    options: [
      'Khả năng thay đổi lược đồ mức khái niệm mà không cần thay đổi các chương trình ứng dụng mức ngoài',
      'Khả năng thay đổi cấu trúc bảng đĩa cứng mà không cần khởi động lại nguồn điện của máy tính chủ',
      'Khả năng thay đổi ngôn ngữ lập trình từ C++ sang Java mà không cần sửa chữa bất kỳ dòng lệnh nào',
      'Khả năng thay đổi địa chỉ IP của máy chủ dữ liệu mà các máy in trong cơ quan vẫn in ấn bình thường'
    ],
    answer: 0,
    explanation: 'Độc lập dữ liệu logic là khả năng sửa đổi lược đồ mức khái niệm (ví dụ: thêm bảng, thêm cột không liên quan) mà không cần thay đổi các lược đồ mức ngoài (khung nhìn) và các chương trình ứng dụng hiện có.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh rất hay nhầm lẫn định nghĩa của Độc lập logic với Độc lập vật lý.',
      trickWord: 'Bẫy ranh giới: Độc lập logic là giữa Mức khái niệm và Mức ngoài/Ứng dụng',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Sửa Conceptual không đổi External/App = Độc lập dữ liệu LOGIC!'
    }
  },
  {
    id: 'db-c1-t2-028',
    question: 'Tệp chỉ dẫn (Index File) và Tệp giao dịch (Transaction Log) được xếp vào mức biểu diễn nào trong kiến trúc 3 mức ANSI-SPARC?',
    options: [
      'Mức vật lý (Physical Level / Internal Level quản lý cấu trúc lưu trữ)',
      'Mức khái niệm (Conceptual Level mô tả mối quan hệ giữa các thực thể)',
      'Mức khung nhìn (View Level hiển thị các cột dữ liệu cho người xem)',
      'Mức ứng dụng kinh doanh (Business Application Level của lập trình viên)'
    ],
    answer: 0,
    explanation: 'Giáo trình bảng mục II.3.a nêu rõ: Mức vật lý bao gồm các loại tệp dữ liệu, tệp giao dịch, tệp chỉ dẫn... theo cấu trúc nào đó trên thiết bị lưu trữ.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay xếp Tệp giao dịch vào mức khái niệm vì nghĩ giao dịch là nghiệp vụ.',
      trickWord: 'Bẫy vị trí lưu trữ tệp giao dịch và tệp chỉ dẫn: Thuần túy mức Vật lý',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Tệp chỉ dẫn (Index), Tệp giao dịch (Log) = MỨC VẬT LÝ!'
    }
  },
  {
    id: 'db-c1-t2-029',
    question: 'Sơ đồ luồng truy vấn chuẩn xác trong kiến trúc 3 mức ANSI-SPARC khi người dùng tương tác là gì?',
    options: [
      'User ➔ Khung nhìn (View) ➔ Lược đồ khái niệm (Conceptual) ➔ Lược đồ vật lý (Physical)',
      'User ➔ Lược đồ vật lý (Physical) ➔ Lược đồ khái niệm (Conceptual) ➔ Khung nhìn (View)',
      'User ➔ Lược đồ khái niệm (Conceptual) ➔ Khung nhìn (View) ➔ Lược đồ vật lý (Physical)',
      'User ➔ Khung nhìn (View) ➔ Lược đồ vật lý (Physical) ➔ Lược đồ khái niệm (Conceptual)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.b minh họa rõ: User 1 -> View 1 ┐\nUser 2 -> View 2 ├ -> CSDL mức khái niệm -> CSDL mức vật lý.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị nhầm lẫn thứ tự truy xuất giữa Khái niệm và Vật lý.',
      trickWord: 'Bẫy sơ đồ luồng kiến trúc 3 mức từ người dùng đến lưu trữ',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.b',
      tip: 'User ➔ View ➔ Conceptual ➔ Physical!'
    }
  },
  {
    id: 'db-c1-t2-030',
    question: 'Khi di chuyển toàn bộ dữ liệu CSDL từ ổ đĩa cơ HDD sang ổ đĩa bán dẫn SSD tốc độ cao, tính chất nào đảm bảo ứng dụng không phải viết lại mã nguồn?',
    options: [
      'Tính độc lập dữ liệu vật lý (Physical Data Independence)',
      'Tính độc lập dữ liệu logic (Logical Data Independence)',
      'Tính nguyên tố của giao tác thanh toán (Transaction Atomicity)',
      'Tính đa hình trong lập trình hướng đối tượng (Polymorphism)'
    ],
    answer: 0,
    explanation: 'Thay đổi phần cứng lưu trữ hoặc cấu trúc tệp đĩa mà không làm thay đổi lược đồ khái niệm và chương trình ứng dụng là giá trị cốt lõi của Tính độc lập dữ liệu vật lý.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nhầm sang Tính độc lập dữ liệu logic.',
      trickWord: 'Bẫy nhận diện Độc lập vật lý: Đổi HDD sang SSD hoàn toàn là mức vật lý',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Thay đổi ổ đĩa lưu trữ (HDD -> SSD) = Tính độc lập dữ liệu VẬT LÝ!'
    }
  },
  {
    id: 'db-c1-t2-031',
    question: 'Khẳng định nào sau đây là SAI khi nói về Mức khung nhìn (View Level)?',
    options: [
      'Mỗi khung nhìn bắt buộc phải chứa đầy đủ 100% tất cả các bảng và các cột của mức khái niệm',
      'Mỗi khung nhìn là một phần hoặc sự trừu tượng hóa một phần của CSDL mức khái niệm',
      'Mức khung nhìn cho phép che giấu những dữ liệu nhạy cảm đối với từng nhóm người dùng',
      'Một cơ sở dữ liệu có thể có nhiều khung nhìn khác nhau phục vụ các phòng ban khác nhau'
    ],
    answer: 0,
    explanation: 'Khẳng định "bắt buộc chứa đầy đủ 100% tất cả các bảng và cột" là SAI. Bản chất của View là chỉ trích xuất một phần hoặc trừu tượng hóa một phần dữ liệu cần thiết cho người dùng đó.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị bẫy bởi từ khẳng định tuyệt đối "bắt buộc phải chứa đầy đủ 100%".',
      trickWord: 'Bẫy từ ngữ tuyệt đối hóa: View KHÔNG BAO GIỜ bắt buộc phải chứa 100% dữ liệu',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Khung nhìn (View) chỉ là một phần (subset) của CSDL mức khái niệm.'
    }
  },
  {
    id: 'db-c1-t2-032',
    question: 'Cho 3 mệnh đề về kiến trúc 3 mức:\n(I) Mức khái niệm gần với người dùng hơn mức vật lý.\n(II) Mức vật lý là sự cài đặt cụ thể của mức khái niệm.\n(III) Mức khái niệm thay đổi thì mức vật lý bắt buộc phải bị xóa đi.\nMệnh đề ĐÚNG là:',
    options: [
      'Mệnh đề (I) và (II) hoàn toàn đúng, mệnh đề (III) hoàn toàn sai lệch',
      'Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn chính xác giáo trình',
      'Chỉ có duy nhất mệnh đề (I) là đúng, mệnh đề (II) và (III) là sai sót',
      'Mệnh đề (II) và (III) hoàn toàn đúng, mệnh đề (I) hoàn toàn sai lệch'
    ],
    answer: 0,
    explanation: '(III) sai vì khi sửa mức khái niệm, mức vật lý chỉ được cập nhật cấu trúc hoặc bảng dữ liệu tương ứng chứ không bị xóa đi. (I) và (II) đúng chuẩn giáo trình.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh đọc lướt mệnh đề (III) dễ tưởng thay đổi khái niệm là phải xóa sạch đĩa.',
      trickWord: 'Bẫy khẳng định cực đoan: Mức vật lý không bị xóa sạch khi sửa mức khái niệm',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Mức vật lý là cài đặt cụ thể của mức khái niệm; sửa khái niệm chỉ cập nhật ánh xạ.'
    }
  },
  {
    id: 'db-c1-t2-033',
    question: 'Mô hình dữ liệu thực thể liên kết (ER Model) thường được các kỹ sư sử dụng chủ yếu để thiết kế CSDL ở mức biểu diễn nào?',
    options: [
      'Mức khái niệm (Conceptual Level mô tả thực thể, mối quan hệ và thuộc tính)',
      'Mức vật lý (Physical Level mô tả vị trí các sector và cluster trên đĩa)',
      'Mức khung nhìn (View Level mô tả định dạng font chữ của các biểu mẫu)',
      'Mức vi mạch điện tử (Electronic Circuit Level của các chip bán dẫn nhớ)'
    ],
    answer: 0,
    explanation: 'Giáo trình bảng mục II.3.a ghi rõ: Mức khái niệm (mô hình ER): Sự trừu tượng hóa thế giới thực gần với người dùng CSDL... mô tả sơ đồ quan niệm.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm ER Model là mức ngoài hoặc mức vật lý.',
      trickWord: 'Bẫy vị trí ứng dụng của Mô hình ER: Chuẩn mực ở Mức Khái Niệm',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Mô hình ER = Công cụ thiết kế ở MỨC KHÁI NIỆM (Conceptual Level)!'
    }
  },
  {
    id: 'db-c1-t2-034',
    question: 'Điền thuật ngữ: \"Mô hình dữ liệu là sự hình thức hóa toán học, bao gồm (...) và (...).\"',
    options: [
      'Ký hiệu mô tả dữ liệu ... Tập hợp các phép toán trên dữ liệu đó',
      'Cấu trúc ổ đĩa cứng ... Băng thông mạng Internet của nhà cung cấp',
      'Tên người sử dụng ... Mật khẩu mã hóa MD5 của tài khoản quản trị',
      'Ngôn ngữ lập trình ... Trình biên dịch mã máy nhị phân hệ thống'
    ],
    answer: 0,
    explanation: 'Định nghĩa chuẩn mục II.3.a: Mô hình dữ liệu là sự hình thức hóa toán học, gồm 2 phần: 1) Ký hiệu mô tả dữ liệu; và 2) Tập hợp các phép toán diễn tả ràng buộc và các phép xử lý trên dữ liệu.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn các yếu tố phần cứng mạng hoặc mật khẩu.',
      trickWord: 'Bẫy định nghĩa 2 thành phần cốt lõi của Mô hình dữ liệu',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Mô hình dữ liệu = Ký hiệu mô tả + Tập phép toán!'
    }
  },
  {
    id: 'db-c1-t2-035',
    question: 'Nếu không có kiến trúc 3 mức ANSI-SPARC, mỗi khi người quản trị phân chia lại dữ liệu trên hai ổ cứng khác nhau thì điều gì sẽ xảy ra?',
    options: [
      'Toàn bộ các chương trình ứng dụng của công ty sẽ bị lỗi và phải viết lại toàn bộ mã nguồn',
      'Hệ thống mạng Internet toàn cầu sẽ bị ngắt kết nối trong suốt thời gian bảo trì phân chia đĩa',
      'Các bảng dữ liệu trong CSDL sẽ tự động biến thành các tệp văn bản thô không có cấu trúc',
      'Người quản trị sẽ không thể đăng nhập lại vào máy chủ nếu không có chữ ký của giám đốc'
    ],
    answer: 0,
    explanation: 'Thiếu tính độc lập dữ liệu vật lý (như trong hệ thống tập tin cũ), bất kỳ thay đổi nào ở mức đĩa cứng cũng buộc lập trình viên phải sửa đổi lại mã nguồn truy cập tệp trong chương trình ứng dụng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh không thấy được giá trị to lớn của tính độc lập dữ liệu nếu không có ANSI-SPARC.',
      trickWord: 'Bẫy hậu quả khi mất Tính độc lập dữ liệu vật lý',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: 'Không có ANSI-SPARC ➔ Đổi ổ cứng là phải viết lại toàn bộ phần mềm ứng dụng!'
    }
  },
  {
    id: 'db-c1-t2-036',
    question: 'Khẳng định nào sau đây là ĐÚNG khi so sánh số lượng giữa Lược đồ khái niệm và Lược đồ khung nhìn trong một hệ CSDL?',
    options: [
      'Lược đồ khái niệm là duy nhất, trong khi có thể có nhiều lược đồ khung nhìn khác nhau',
      'Lược đồ khung nhìn là duy nhất, trong khi có thể có nhiều lược đồ khái niệm song song',
      'Số lượng lược đồ khái niệm luôn luôn bằng chính xác số lượng lược đồ khung nhìn hiện có',
      'Mỗi hệ cơ sở dữ liệu bắt buộc chỉ có đúng duy nhất một lược đồ khái niệm và một khung nhìn'
    ],
    answer: 0,
    explanation: 'Giáo trình mục II.3.a khẳng định: Lược đồ khái niệm mô tả toàn bộ CSDL nên là DUY NHẤT. Lược đồ khung nhìn là cách nhìn riêng của từng người dùng nên CÓ THỂ CÓ NHIỀU.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Nhiều người nói ngược: cho rằng lược đồ khung nhìn là duy nhất.',
      trickWord: 'Bẫy số lượng: 1 Conceptual duy nhất vs N External Views',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a',
      tip: '1 Khái niệm (duy nhất) ➔ N Khung nhìn (đa dạng)!'
    }
  },
  {
    id: 'db-c1-t2-037',
    question: 'Ánh xạ (Mapping) giữa Mức khái niệm và Mức vật lý do thành phần nào trong hệ thống CSDL chịu trách nhiệm duy trì và thực thi?',
    options: [
      'Do Hệ quản trị cơ sở dữ liệu (DBMS) tự động quản lý và chuyển đổi khi truy xuất dữ liệu',
      'Do người sử dụng cuối (End-Users) phải tự tay gõ lệnh chuyển đổi thủ công mỗi khi mở máy',
      'Do nhà cung cấp dịch vụ mạng viễn thông quốc tế chịu trách nhiệm bảo đảm đường truyền',
      'Do hệ điều hành Windows tự động chuyển đổi thông qua trình điều khiển thiết bị máy in'
    ],
    answer: 0,
    explanation: 'DBMS chịu trách nhiệm duy trì ánh xạ Khái niệm - Vật lý (Conceptual-to-Internal Mapping) và Khung nhìn - Khái niệm (External-to-Conceptual Mapping), giúp người dùng không cần biết chi tiết lưu trữ vật lý.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nghĩ lập trình viên hoặc hệ điều hành phải tự tay quản lý ánh xạ này.',
      trickWord: 'Bẫy chủ thể quản lý Mapping: Chính là Hệ quản trị CSDL (DBMS)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục II.3.a & II.4.b',
      tip: 'Ánh xạ giữa các mức do chính HQTCSDL (DBMS) tự động đảm nhiệm!'
    }
  },

  // --- CỤM 4: BẪY PHÂN LOẠI & ĐỐI SÁNH 5 MÔ HÌNH DỮ LIỆU (Câu 38 - 50) ---
  {
    id: 'db-c1-t2-038',
    question: 'Khái niệm \"Loại mẫu tin\" (Record Type) trong Mô hình mạng (Network Model) được ký hiệu bằng hình vẽ chuẩn nào?',
    options: [
      'Ký hiệu bằng hình chữ nhật (mỗi loại mẫu tin đặc trưng cho một đối tượng riêng biệt)',
      'Ký hiệu bằng hình bầu dục (với các mũi tên đi từ chủ sang thành viên trong sơ đồ)',
      'Ký hiệu bằng hình thoi có viền kẻ đơn (đại diện cho các mối liên kết thực thể)',
      'Ký hiệu bằng hình tam giác đều ngược (đại diện cho quan hệ phân cấp cây thư mục)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.2.a: Mỗi loại mẫu tin được ký hiệu bằng HÌNH CHỮ NHẬT. Loại liên hệ (Set type) mới được ký hiệu bằng HÌNH BẦU DỤC.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm lẫn giữa ký hiệu Loại mẫu tin (chữ nhật) và Loại liên hệ (bầu dục).',
      trickWord: 'Bẫy hình học ký hiệu trong Mô hình mạng: Loại mẫu tin = Hình chữ nhật',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.a',
      tip: 'Mẫu tin = Hình chữ nhật; Liên hệ = Hình bầu dục!'
    }
  },
  {
    id: 'db-c1-t2-039',
    question: 'Khẳng định nào sau đây là KHÔNG ĐÚNG khi nói về Mô hình phân cấp (Hierarchical Model)?',
    options: [
      'Một nút con trong mô hình phân cấp có thể có cùng lúc nhiều nút cha khác nhau trong cây',
      'Mô hình dữ liệu phân cấp là một cấu trúc Cây (Tree) với các nút biểu diễn tập thực thể',
      'Giữa nút cha và nút con trong mô hình phân cấp liên hệ theo mối quan hệ một - nhiều (1 - n)',
      'Mô hình phân cấp rất khó khăn khi cần biểu diễn các mối quan hệ nhiều - nhiều trong thực tế'
    ],
    answer: 0,
    explanation: 'Khẳng định "nút con có thể có cùng lúc nhiều nút cha" là SAI HOÀN TOÀN. Định nghĩa cấu trúc cây của mô hình phân cấp: Mỗi nút con chỉ được phép có DUY NHẤT một nút cha.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh nhầm lẫn đặc tính nhiều cha của mô hình mạng gán cho mô hình phân cấp.',
      trickWord: 'Bẫy cấu trúc cây phân cấp: Nút con TUYỆT ĐỐI chỉ có 1 nút cha duy nhất',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.2.b',
      tip: 'Phân cấp = CÂY ➔ Nút con chỉ có DUY NHẤT 1 nút cha!'
    }
  },
  {
    id: 'db-c1-t2-040',
    question: 'Trong mô hình ER, một thực thể ThanNhan (thân nhân của nhân viên) chỉ có thể tồn tại trong CSDL nếu nhân viên đó tồn tại. ThanNhan được định nghĩa là gì?',
    options: [
      'Thực thể yếu (Weak Entity) và được ký hiệu bằng hình chữ nhật có đường viền kẻ đôi',
      'Thực thể mạnh (Strong Entity) và được ký hiệu bằng hình chữ nhật có đường viền kẻ đơn',
      'Mối kết hợp đệ quy (Recursive Relationship) và được ký hiệu bằng hình thoi đơn viền',
      'Thuộc tính đa trị (Multi-valued Attribute) và được ký hiệu bằng hình bầu dục đôi viền'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.3.a nêu chính xác ví dụ: Thực thể yếu (Weak Entity): sự tồn tại phụ thuộc vào thực thể khác (VD: ThanNhan phụ thuộc vào NhanVien). Ký hiệu: đường viền kẻ đôi.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm ThanNhan là thực thể mạnh hoặc là mối kết hợp.',
      trickWord: 'Bẫy thực thể yếu: Phụ thuộc tồn tại + Ký hiệu viền đôi (Double border)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: 'Thân nhân phụ thuộc nhân viên = THỰC THỂ YẾU (Viền kẻ đôi)!'
    }
  },
  {
    id: 'db-c1-t2-041',
    question: 'Một mô hình dữ liệu hoàn chỉnh bắt buộc phải bao gồm đầy đủ 3 thành phần cốt lõi nào theo giáo trình?',
    options: [
      'Mô tả cấu trúc của CSDL, Mô tả các thao tác trên dữ liệu, và Mô tả các ràng buộc toàn vẹn',
      'Mô tả cấu hình vi xử lý CPU, Mô tả dung lượng thanh nhớ RAM, và Mô tả tốc độ đường truyền',
      'Mô tả tài khoản người dùng, Mô tả mật khẩu mã hóa dữ liệu, và Mô tả địa chỉ cổng máy chủ',
      'Mô tả phiên bản hệ điều hành, Mô tả phần mềm diệt virus máy tính, và Mô tả lịch sao lưu đĩa'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.1.a nêu rõ 3 thành phần của một mô hình dữ liệu: 1) Mô tả cấu trúc của CSDL; 2) Mô tả các thao tác trên dữ liệu; 3) Mô tả các ràng buộc toàn vẹn.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh thường quên thành phần "Ràng buộc toàn vẹn" hoặc nhầm sang cấu hình phần cứng.',
      trickWord: 'Bẫy 3 thành phần cấu thành một Data Model: Cấu trúc + Thao tác + Ràng buộc',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.1.a',
      tip: '3 thành phần Data Model = Cấu trúc + Thao tác + Ràng buộc toàn vẹn!'
    }
  },
  {
    id: 'db-c1-t2-042',
    question: 'Thuật ngữ \"Tập k-bộ\" (Set of k-tuples) với k cố định là cơ sở toán học trực tiếp của mô hình dữ liệu nào?',
    options: [
      'Mô hình dữ liệu quan hệ (Relational Model do nhà khoa học E.F. Codd đề xuất)',
      'Mô hình cơ sở dữ liệu phân cấp hình cây (Hierarchical Data Model của IBM)',
      'Mô hình cơ sở dữ liệu mạng đồ thị có hướng (Network Model của CODASYL DBTG)',
      'Mô hình hướng đối tượng với các lớp đối tượng và đa hình (OODM System)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.4.a: Mô hình quan hệ dựa trên cơ sở khái niệm lý thuyết tập hợp của các quan hệ, tức là các tập k-bộ với k cố định (k là bậc/số thuộc tính).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh không nhớ thuật ngữ "k-bộ" tương ứng với dòng/bản ghi trong mô hình quan hệ.',
      trickWord: 'Bẫy thuật ngữ toán học k-bộ (k-tuples) = Mô hình Quan hệ',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.a',
      tip: 'Tập k-bộ (k-tuple) = Mô hình QUAN HỆ (Relational Model)!'
    }
  },
  {
    id: 'db-c1-t2-043',
    question: 'Trong mô hình hướng đối tượng (OODM), tính chất cho phép một lớp con kế thừa đặc tính từ NHIỀU lớp cha khác nhau được gọi là gì?',
    options: [
      'Kế thừa bội (Multiple Inheritance cho phép kế thừa thuộc tính và phương thức từ nhiều cha)',
      'Tính đóng gói dữ liệu (Encapsulation đóng gói dữ liệu và phương thức trong một lớp đối tượng)',
      'Tính đa hình theo ngữ cảnh (Polymorphism cho phép định nghĩa lại hành vi của phương thức)',
      'Tính toàn vẹn thực thể (Entity Integrity bảo đảm các đối tượng không bị trùng lặp định danh)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.4.b nêu rõ: Mô hình OODM sử dụng các khái niệm: Lớp (Class), đối tượng (Object), Sự kế thừa (Inheritance), KẾ THỪA BỘI (Multiple Inheritance).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay chọn Tính đóng gói hoặc Đa hình.',
      trickWord: 'Bẫy thuật ngữ Kế thừa bội (Multiple Inheritance) trong OODM',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.b',
      tip: 'Kế thừa từ nhiều lớp cha = KẾ THỪA BỘI (Multiple Inheritance)!'
    }
  },
  {
    id: 'db-c1-t2-044',
    question: 'Điền thuật ngữ: \"Mô hình dữ liệu ngữ nghĩa (Semantic Data Model) và Mô hình dữ liệu chức năng (Functional Data Model) được xếp vào nhóm (...).\"',
    options: [
      'Mô hình dữ liệu logic trên cơ sở đối tượng (Object-based logical model)',
      'Mô hình dữ liệu logic trên cơ sở bản ghi (Record-based logical model)',
      'Mô hình dữ liệu mức vật lý lưu trữ thấp nhất trong hệ thống máy tính',
      'Mô hình dữ liệu phân tán không đồng nhất trên các nút mạng viễn thông'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.1.b phân loại rõ: Nhóm mô hình logic trên cơ sở đối tượng gồm: ER Model, Mô hình hướng đối tượng, Mô hình dữ liệu ngữ nghĩa, Mô hình dữ liệu chức năng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh ít chú ý đến Semantic Model và Functional Model nên hay đoán mò vào nhóm bản ghi.',
      trickWord: 'Bẫy phân nhóm Semantic & Functional Data Model: Thuộc nhóm Logic ĐỐI TƯỢNG',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.1.b.a',
      tip: 'Semantic & Functional Model = Logic trên cơ sở ĐỐI TƯỢNG!'
    }
  },
  {
    id: 'db-c1-t2-045',
    question: 'Trong mô hình ER, một mối kết hợp giữa 3 loại thực thể: SinhVien, DeTai và GiaoVienHuongDan được gọi là mối kết hợp mấy ngôi?',
    options: [
      'Mối kết hợp ba ngôi (Ternary Relationship vì có đúng 3 loại thực thể tham gia)',
      'Mối kết hợp nhị phân hai ngôi (Binary Relationship vì chỉ có hai vai trò chính)',
      'Mối kết hợp đơn ngôi đệ quy (Unary Relationship vì cùng thuộc về trường đại học)',
      'Mối kết hợp đa cấp phân cấp (Hierarchical Relationship theo cấu trúc cây thư mục)'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.3.a: Số ngôi của mối kết hợp (Degree) là tổng số loại thực thể tham gia vào mối kết hợp. Có 3 thực thể tham gia ➔ Mối kết hợp 3 ngôi (Ternary).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm với mối kết hợp nhị phân (2 ngôi) thông thường.',
      trickWord: 'Bẫy xác định Số ngôi (Degree): Đếm số loại thực thể tham gia (3 thực thể = 3 ngôi)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: '3 thực thể cùng tham gia 1 mối kết hợp = Mối kết hợp 3 NGÔI (Ternary)!'
    }
  },
  {
    id: 'db-c1-t2-046',
    question: 'Khẳng định nào sau đây là KHÔNG ĐÚNG khi so sánh Mô hình quan hệ (Relational) và Mô hình hướng đối tượng (OODM)?',
    options: [
      'Mô hình quan hệ đóng gói chặt chẽ cả dữ liệu và các hàm phương thức bên trong các bảng',
      'Mô hình quan hệ lưu trữ dữ liệu dưới dạng các bảng hai chiều gồm các cột thuộc tính và các dòng bộ',
      'Mô hình hướng đối tượng hỗ trợ mạnh mẽ tính kế thừa và tái sử dụng mã nguồn phần mềm ứng dụng',
      'Mô hình hướng đối tượng có cấu trúc lớp đóng gói cả thuộc tính trạng thái và phương thức hành vi'
    ],
    answer: 0,
    explanation: 'Mô hình quan hệ truyền thống CHỈ LƯU TRỮ DỮ LIỆU TĨNH trong các bảng, hoàn toàn KHÔNG đóng gói phương thức hành vi (Methods). Khẳng định mô hình quan hệ đóng gói phương thức là SAI.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh đọc lướt không nhận ra sự ngụy biện khi gán tính Đóng gói phương thức cho Mô hình quan hệ.',
      trickWord: 'Bẫy đánh tráo khái niệm: Mô hình quan hệ KHÔNG CÓ Encapsulation của OOP',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.a & III.4.b',
      tip: 'Mô hình quan hệ: CHỈ DỮ LIỆU; Mô hình OODM: DỮ LIỆU + PHƯƠNG THỨC!'
    }
  },
  {
    id: 'db-c1-t2-047',
    question: 'Cho các nhận định về mô hình ER:\n(I) Thực thể yếu ký hiệu bằng đường viền kẻ đôi.\n(II) Giữa 2 thực thể chỉ có thể có tối đa một mối kết hợp duy nhất.\n(III) Mối kết hợp cũng có thể có thuộc tính riêng.\nTổ hợp ĐÚNG là:',
    options: [
      'Nhận định (I) và (III) hoàn toàn đúng, nhận định (II) là sai',
      'Cả ba nhận định (I), (II) và (III) đều hoàn toàn chính xác theo sách',
      'Chỉ có duy nhất nhận định (I) là đúng, nhận định (II) và (III) sai',
      'Nhận định (II) và (III) hoàn toàn đúng, nhận định (I) là sai'
    ],
    answer: 0,
    explanation: '(II) sai vì giáo trình mục III.3.a nêu rõ: Giữa 2 thực thể CÓ THỂ CÓ NHIỀU MỐI KẾT HỢP (ví dụ: NhanVien và PhongBan vừa có mối kết hợp \"LamViec\", vừa có mối kết hợp \"TruongPhong\"). (I) và (III) đúng.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Rất nhiều học viên lầm tưởng giữa 2 thực thể chỉ được phép nối 1 đường duy nhất.',
      trickWord: 'Bẫy số lượng mối kết hợp: Giữa 2 thực thể CÓ THỂ CÓ NHIỀU mối kết hợp khác nhau',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.3.a',
      tip: 'Giữa 2 thực thể có thể có NHIỀU mối kết hợp (ví dụ: Nhân viên Làm việc tại và Quản lý phòng)!'
    }
  },
  {
    id: 'db-c1-t2-048',
    question: 'Ví dụ: Lớp MonHoc có quan hệ đệ quy \"DieuKien\" (môn học trước / môn học sau) trong hướng tiếp cận OODM. Bản chất của quan hệ này là gì?',
    options: [
      'Mối liên hệ giữa các đối tượng trong cùng một lớp đối tượng MonHoc với nhau',
      'Mối liên hệ giữa một thực thể mạnh với một thực thể yếu trong mô hình ER',
      'Mối liên kết giữa một bảng cơ sở với một khung nhìn ảo ở mức ngoài của CSDL',
      'Mối liên kết giữa một tệp dữ liệu phẳng với một tệp chỉ dẫn ở mức vật lý'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.4.b ví dụ: Lớp MHoc có quan hệ đệ quy \"Mhoc truoc\" / \"Mhoc sau\" (Dieu kien - dieu kien tien quyet). Đây là mối liên hệ giữa các đối tượng trong CÙNG MỘT LỚP MonHoc (quan hệ phản xạ/đệ quy).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm quan hệ đệ quy với quan hệ giữa 2 lớp khác nhau.',
      trickWord: 'Bẫy quan hệ đệ quy (Recursive / Self-relationship) trong cùng một lớp',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.4.b',
      tip: 'Môn học trước / Môn học sau = Quan hệ đệ quy trong CÙNG 1 LỚP MonHoc!'
    }
  },
  {
    id: 'db-c1-t2-049',
    question: 'Hai mô hình nào sau đây thuộc nhóm \"Mô hình dữ liệu logic trên cơ sở BẢN GHI\" mà dữ liệu được tổ chức theo dạng đồ thị hoặc cây?',
    options: [
      'Mô hình mạng (Network Model - Đồ thị) và Mô hình phân cấp (Hierarchical Model - Cây)',
      'Mô hình thực thể mối quan hệ (ER Model) và Mô hình cơ sở dữ liệu hướng đối tượng (OODM)',
      'Mô hình hợp nhất vật lý (Unified Model) và Mô hình bộ nhớ khung lưu trữ trên phiến đĩa',
      'Mô hình quan hệ phẳng (Relational Model) và Mô hình cơ sở dữ liệu ngữ nghĩa logic đối tượng'
    ],
    answer: 0,
    explanation: 'Giáo trình mục III.1.b, III.2.a, III.2.b: Mô hình logic trên cơ sở bản ghi gồm Relational, Network và Hierarchical. Trong đó Network là dạng Đồ thị (Graph), Hierarchical là dạng Cây (Tree).',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh hay nhầm ER hoặc OODM vào nhóm này.',
      trickWord: 'Bẫy phân nhóm Record-based có cấu trúc Đồ thị (Network) và Cây (Hierarchical)',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Mục III.1.b & III.2',
      tip: 'Đồ thị = Mô hình Mạng; Cây = Mô hình Phân cấp (đều thuộc nhóm Bản ghi)!'
    }
  },
  {
    id: 'db-c1-t2-050',
    question: 'Tóm lược toàn bộ Chương I: Sự tiến hóa từ File Processing lên Database và từ Network/Hierarchical lên Relational Model thể hiện quy luật căn bản nào?',
    options: [
      'Tăng dần mức độ trừu tượng hóa, độc lập dữ liệu và đảm bảo tính nhất quán, an toàn thông tin',
      'Tăng dần sự phụ thuộc vật lý giữa mã nguồn phần mềm ứng dụng với các khối sector đĩa từ',
      'Giảm dần số lượng người dùng có thể cùng khai thác thông tin trên hệ thống máy tính công ty',
      'Bắt buộc lập trình viên phải viết mã lệnh bằng các ngôn ngữ cấp thấp khó bảo trì hơn trước'
    ],
    answer: 0,
    explanation: 'Sự tiến hóa của khoa học CSDL luôn hướng tới: Tăng tính trừu tượng hóa (che giấu phức tạp vật lý), Tăng tính độc lập dữ liệu (logic và vật lý), Giảm dư thừa, Đảm bảo tính nhất quán và An toàn thông tin cho đa người dùng đồng thời.',
    difficulty: 'hard',
    isTrick: true,
    trickDetails: {
      whyTrapped: 'Thí sinh bị lúng túng khi câu hỏi mang tính tổng quan triết lý khoa học máy tính.',
      trickWord: 'Bẫy quy luật tiến hóa cốt lõi: Tăng trừu tượng hóa + Tăng độc lập dữ liệu + Đảm bảo nhất quán',
      citation: 'Giáo trình Hệ CSDL — Chương 1, Toàn bộ chương & Mục IV.1',
      tip: 'Tiến hóa CSDL = TĂNG trừu tượng hóa + TĂNG độc lập dữ liệu + ĐẢM BẢO nhất quán!'
    }
  }
];

// Hàm kiểm tra độ lệch chiều dài giữa các options
function checkAndFixOptionLengths(questions) {
  questions.forEach((q, idx) => {
    let lengths = q.options.map(o => o.length);
    let minL = Math.min(...lengths);
    let maxL = Math.max(...lengths);
    let delta = maxL - minL;
    if (delta > 15) {
      console.warn(`[T2 Q${idx + 1}] Delta L = ${delta} > 15 chars: [${lengths.join(', ')}]`);
    }
  });
}

checkAndFixOptionLengths(rawQuestionsTrick2);

// Cân bằng vị trí đáp án đúng theo targetAnswers2 (12A, 12B, 13C, 13D)
export function getBalancedTrick2() {
  const balanced = JSON.parse(JSON.stringify(rawQuestionsTrick2));
  balanced.forEach((q, idx) => {
    const targetAns = targetAnswers2[idx];
    const currAns = q.answer;
    if (currAns !== targetAns) {
      const temp = q.options[targetAns];
      q.options[targetAns] = q.options[currAns];
      q.options[currAns] = temp;
      q.answer = targetAns;
    }
  });
  return balanced;
}
