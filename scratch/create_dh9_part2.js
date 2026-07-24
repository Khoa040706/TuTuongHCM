import fs from "fs";

// 40 questions for Fixed Exam Set 2 (Đại hội IX - 4/2001)
// 36 Inside (7 Easy, 18 Medium, 11 Hard) + 4 Outside
const questions = [
  // 1-7: Easy (7 questions)
  {
    id: "lsd-dh9-d2-001",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng đại diện cho bao nhiêu đảng viên cả nước?",
    options: [
      "Đại hội đại diện cho hơn 2,47 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho gần 2,13 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 2,10 triệu đảng viên trong cả nước.",
      "Đại hội đại diện cho hơn 1,90 triệu đảng viên trong cả nước."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IX đại diện cho hơn 2,47 triệu đảng viên cả nước."
  },
  {
    id: "lsd-dh9-d2-002",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Số lượng đại biểu chính thức dự Đại hội IX (4/2001) là bao nhiêu?",
    options: [
      "Đại hội có 1.168 đại biểu chính thức tham dự.",
      "Đại hội có 1.198 đại biểu chính thức tham dự.",
      "Đại hội có 1.176 đại biểu chính thức tham dự.",
      "Đại hội có 1.129 đại biểu chính thức tham dự."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Đại hội IX có 1.168 đại biểu chính thức dự họp."
  },
  {
    id: "lsd-dh9-d2-003",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Mục tiêu tổng quát của Chiến lược phát triển KT-XH 2001-2010 do ĐH IX thông qua là gì?",
    options: [
      "Đưa nước ta ra khỏi tình trạng kém phát triển, nâng cao rõ rệt đời sống nhân dân.",
      "Đưa nước ta trở thành quốc gia phát triển giàu có hàng đầu khu vực Châu Á.",
      "Hoàn thành triệt để quá trình đô thị hóa trên toàn bộ vùng nông thôn cả nước.",
      "Xóa bỏ hoàn toàn các thành phần kinh tế tư nhân để tập trung cho quốc doanh."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Mục tiêu Chiến lược 2001-2010: Đưa nước ta ra khỏi tình trạng kém phát triển, tạo nền tảng đến năm 2020 trở thành nước công nghiệp."
  },
  {
    id: "lsd-dh9-d2-004",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Thành phần kinh tế giữ vai trò nòng cốt định hướng phát triển ở nông thôn thời kỳ ĐH IX là gì?",
    options: [
      "Kinh tế tập thể cùng với kinh tế nhà nước giữ vai trò nền tảng.",
      "Kinh tế tư nhân và cá thể tiểu chủ giữ vai trò định hướng chính.",
      "Kinh tế tư bản tư nhân nước ngoài nắm vai trò nòng cốt nông nghiệp.",
      "Kinh tế trang trại tư nhân nắm quyền định hướng duy nhất ở nông thôn."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Kinh tế tập thể cùng với kinh tế nhà nước ngày càng trở thành nền tảng vững chắc của nền kinh tế."
  },
  {
    id: "lsd-dh9-d2-005",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Yếu tố được ĐH IX xác định là động lực chủ yếu để phát triển đất nước là gì?",
    options: [
      "Đại đoàn kết toàn dân tộc trên cơ sở liên minh công - nông - trí thức.",
      "Nguồn vốn hỗ trợ đầu tư trực tiếp của các tập đoàn đa quốc gia.",
      "Sự khai thác tối đa tài nguyên thô khoáng sản để xuất khẩu lấy tiền.",
      "Việc mở rộng diện tích đô thị hóa và xây dựng các khu công nghiệp."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Động lực chủ yếu phát triển đất nước là đại đoàn kết toàn dân tộc trên cơ sở liên minh công nhân với nông dân và trí thức."
  },
  {
    id: "lsd-dh9-d2-006",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Nghị quyết Trung ương 5 khóa IX (3/2002) ban hành nội dung quan trọng về kinh tế tư nhân là gì?",
    options: [
      "Khẳng định kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế.",
      "Hạn chế sự phát triển của kinh tế tư nhân để tập trung cho nhà nước.",
      "Bắt buộc tất cả các doanh nghiệp tư nhân phải cổ phần hóa thành nhà nước.",
      "Cấm đoán tư nhân tham gia vào các ngành nghề sản xuất xuất khẩu."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "NQTƯ 5 khóa IX khẳng định kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế nhiều thành phần."
  },
  {
    id: "lsd-dh9-d2-007",
    examSet: 2,
    sectionId: "dh-9-grp-1",
    subsectionId: "dh-9-sec-1",
    question: "Phương châm đối ngoại 'Là bạn, là đối tác tin cậy' tại ĐH IX thể hiện tinh thần gì?",
    options: [
      "Chủ động, tự tin, đa phương hóa, đa dạng hóa quan hệ đối ngoại.",
      "Chỉ mở rộng quan hệ với các quốc gia phát triển thuộc Châu Âu.",
      "Khép kín cửa bảo vệ kinh tế nội địa không hợp tác với quốc tế.",
      "Chỉ tham gia vào các tổ chức kinh tế khu vực Đông Nam Á ASEAN."
    ],
    answer: 0,
    difficulty: "easy",
    isOutside: false,
    explanation: "Chủ động và tích cực hội nhập kinh tế quốc tế, đa dạng hóa, đa phương hóa quan hệ đối ngoại."
  },

  // 8-25: Medium (18 questions)
  {
    id: "lsd-dh9-d2-008",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Số lượng ủy viên Ban Chấp hành Trung ương Đảng khóa IX (4/2001) được bầu là bao nhiêu?",
    options: [
      "Ban Chấp hành Trung ương Đảng khóa IX gồm 150 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa IX gồm 170 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa IX gồm 146 ủy viên chính thức.",
      "Ban Chấp hành Trung ương Đảng khóa IX gồm 180 ủy viên chính thức."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BCH Trung ương khóa IX gồm 150 ủy viên chính thức."
  },
  {
    id: "lsd-dh9-d2-009",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Đặc điểm cơ bản của nền kinh tế thị trường định hướng XHCN do ĐH IX xác định là gì?",
    options: [
      "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế, Nhà nước giữ chủ đạo.",
      "Chỉ có hai thành phần kinh tế quốc doanh và tập thể hoạt động sản xuất.",
      "Toàn bộ nền kinh tế do kinh tế tư nhân tự do thao túng điều tiết.",
      "Nhà nước quản lý bằng kế hoạch pháp lệnh trực tiếp phân phối tem phiếu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kinh tế thị trường định hướng XHCN có nhiều hình thức sở hữu, nhiều thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo."
  },
  {
    id: "lsd-dh9-d2-010",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Tầm quan trọng của việc gia nhập APEC (11/1998) đối với hội nhập quốc tế là gì?",
    options: [
      "Mở rộng thị trường xuất khẩu sang các nền kinh tế lớn Châu Á - Thái Bình Dương.",
      "Làm cho Việt Nam lệ thuộc hoàn toàn vào nguồn vốn viện trợ nước ngoài.",
      "Bắt buộc Việt Nam từ bỏ chủ quyền quốc gia về mặt an ninh quốc phòng.",
      "Chỉ nhằm mục đích giao lưu văn hóa nghệ thuật với các quốc gia thành viên."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Gia nhập APEC (11/1998) giúp Việt Nam kết nối kinh tế với các đối tác hàng đầu thế giới."
  },
  {
    id: "lsd-dh9-d2-011",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Hiệp định BTA Việt - Mỹ (7/2000) mang lại cơ hội lớn nào cho xuất khẩu Việt Nam?",
    options: [
      "Được hưởng thuế suất ưu đãi tối惠 quốc MFN tại thị trường tiêu dùng Hoa Kỳ.",
      "Được chính phủ Hoa Kỳ cấp vốn viện trợ không hoàn lại cho hạ tầng.",
      "Được phép tự do xuất khẩu các sản phẩm mà không cần kiểm định chất lượng.",
      "Miễn hoàn toàn các nghĩa vụ pháp lý đối với các doanh nghiệp nhập khẩu."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "BTA 2000 mở ra cơ hội lớn cho hàng hóa Việt Nam tiếp cận thị trường Mỹ với thuế suất MFN."
  },
  {
    id: "lsd-dh9-d2-012",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Nội dung chỉ đạo về xây dựng Nhà nước pháp quyền XHCN tại ĐH IX là gì?",
    options: [
      "Xây dựng Nhà nước của nhân dân, do nhân dân, vì nhân dân, quản lý bằng pháp luật.",
      "Tập trung quyền lực vào một số cá nhân quản lý mà không cần thông qua Quốc hội.",
      "Bãi bỏ toàn bộ hệ thống các cơ quan tư pháp và hệ thống tòa án nhân dân các cấp.",
      "Để cho các tập đoàn kinh tế tư nhân tự do ban hành các chính sách pháp luật."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng."
  },
  {
    id: "lsd-dh9-d2-013",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Định hướng phát triển giáo dục - đào tạo thời kỳ ĐH IX là gì?",
    options: [
      "Coi giáo dục là quốc sách hàng đầu, tăng quy mô gắn liền với nâng cao chất lượng.",
      "Thương mại hóa toàn bộ hệ thống trường học công lập để tự chủ tài chính hoàn toàn.",
      "Giảm dần tỷ lệ người dân biết chữ ở các vùng khu vực nông thôn khó khăn miền núi.",
      "Bãi bỏ việc dạy học các môn khoa học xã hội và nhân văn trong các trường học."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Giáo dục và đào tạo là quốc sách hàng đầu, nâng cao chất lượng toàn diện, phát triển nguồn nhân lực."
  },
  {
    id: "lsd-dh9-d2-014",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Mối quan hệ giữa đổi mới kinh tế và xây dựng hệ thống chính trị tại ĐH IX ra sao?",
    options: [
      "Đổi mới kinh tế là trọng tâm, xây dựng Đảng là then chốt, phát triển văn hóa là nền tảng.",
      "Chỉ tập trung đổi mới hệ thống chính trị mà xem nhẹ hoàn toàn các hoạt động kinh tế.",
      "Tách rời ba lĩnh vực kinh tế, chính trị và văn hóa xã hội thành các mảng độc lập.",
      "Dành toàn bộ nguồn lực quốc gia cho văn hóa bỏ qua hoàn toàn các nhiệm vụ kinh tế."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển kinh tế là trọng tâm, xây dựng Đảng là then chốt, phát triển văn hóa là nền tảng tinh thần."
  },
  {
    id: "lsd-dh9-d2-015",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Nghị quyết Trung ương 8 khóa IX (7/2003) đề ra quan điểm gì về đối tác và đối tượng?",
    options: [
      "Những ai tôn trọng độc lập chủ quyền, hợp tác bình đẳng là đối tác của ta.",
      "Tất cả các nước tư bản chủ nghĩa đều là đối tượng tác chiến của ta.",
      "Tất cả các nước xã hội chủ nghĩa đương nhiên là đối tác chiến lược toàn diện.",
      "Không phân biệt đối tác hay đối tượng trong chính sách an ninh quốc gia."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "NQTƯ 8 khóa IX: Nhìn nhận đối tác và đối tượng linh hoạt, dựa trên thái độ đối với độc lập chủ quyền và sự phát triển của Việt Nam."
  },
  {
    id: "lsd-dh9-d2-016",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Chủ trương đối với thành phần kinh tế có vốn đầu tư nước ngoài (FDI) tại ĐH IX là gì?",
    options: [
      "Khuyến khích phát triển, tạo điều kiện thuận lợi, là bộ phận của kinh tế Việt Nam.",
      "Hạn chế tối đa dòng vốn đầu tư FDI để bảo vệ triệt để các doanh nghiệp nhà nước.",
      "Cấm đoán hoàn toàn các doanh nghiệp FDI mua cổ phần của doanh nghiệp trong nước.",
      "Quốc hữu hóa các tài sản của tất cả các doanh nghiệp FDI sau 5 năm hoạt động."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kinh tế có vốn đầu tư nước ngoài là một bộ phận của nền kinh tế Việt Nam, được khuyến khích phát triển lâu dài."
  },
  {
    id: "lsd-dh9-d2-017",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Ý nghĩa của việc đẩy mạnh CNH-HĐH nông nghiệp và phát triển nông thôn tại ĐH IX là gì?",
    options: [
      "Cơ cấu lại nông nghiệp, nâng cao đời sống nông dân, phát triển kinh tế nông thôn.",
      "Xóa bỏ hoàn toàn diện tích gieo trồng lúa để xây dựng khu công nghiệp.",
      "Chuyển toàn bộ nông dân thành công nhân làm việc tại các thành phố lớn.",
      "Giải tán toàn bộ các trang trại nông nghiệp tư nhân ở các tỉnh miền Tây."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "CNH-HĐH nông nghiệp, nông thôn nhằm phát triển nông nghiệp toàn diện, xây dựng nông thôn mới, nâng cao đời sống nhân dân."
  },
  {
    id: "lsd-dh9-d2-018",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Định hướng phát triển hạ tầng giao thông và bưu chính viễn thông thời kỳ ĐH IX là gì?",
    options: [
      "Đi trước một bước, tạo tiền đề hạ tầng kỹ thuật hiện đại cho CNH-HĐH.",
      "Phụ thuộc hoàn toàn vào vốn vay của các tổ chức tài chính nước ngoài.",
      "Chỉ phát triển bưu chính viễn thông ở đô thị xem nhẹ vùng sâu vùng xa.",
      "Hạn chế việc mở rộng mạng lưới viễn thông để bảo đảm an ninh tuyệt đối."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát triển hạ tầng bưu chính viễn thông và giao thông vận tải đi trước một bước, tạo xung lực cho phát triển kinh tế."
  },
  {
    id: "lsd-dh9-d2-019",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Chủ trương bảo vệ môi trường và phát triển bền vững tại ĐH IX được đề ra ra sao?",
    options: [
      "Bảo vệ môi trường là nội dung cơ bản của phát triển bền vững, không đổi môi trường lấy GDP.",
      "Hy sinh môi trường sinh thái để thu hút tối đa các dự án đầu tư FDI bằng mọi giá.",
      "Để cho thị trường tự do tự điều tiết việc xử lý các loại chất thải công nghiệp.",
      "Chỉ chú trọng bảo vệ môi trường ở khu vực du lịch xem nhẹ các khu công nghiệp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Bảo vệ môi trường sinh thái là một trong những yêu cầu cốt lõi của phát triển bền vững thời kỳ CNH-HĐH."
  },
  {
    id: "lsd-dh9-d2-020",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Nhiệm vụ phòng chống tham nhũng, quan liêu được ĐH IX xác định thế nào?",
    options: [
      "Là nhiệm vụ trọng yếu, cấp bách, kiên quyết đẩy lùi tham nhũng trong bộ máy.",
      "Là công việc riêng của cơ quan công an không liên quan đến công tác xây dựng Đảng.",
      "Không cần thực hiện phòng chống tham nhũng vì đó là hiện tượng tự nhiên xã hội.",
      "Tránh né không chịu công khai các vụ án tham nhũng lớn để giữ gìn uy tín chung."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "ĐH IX coi chống tham nhũng, quan liêu, lãng phí là nhiệm vụ trọng yếu, liên quan đến sự sống còn của Đảng và chế độ."
  },
  {
    id: "lsd-dh9-d2-021",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Ý nghĩa của việc kết hợp phát triển kinh tế với củng cố quốc phòng an ninh thời kỳ ĐH IX là gì?",
    options: [
      "Kinh tế mạnh giúp củng cố quốc phòng, quốc phòng an ninh giữ vững hòa bình.",
      "Dành toàn bộ nguồn thu kinh tế để mua sắm vũ khí quân sự nước ngoài.",
      "Bỏ qua quốc phòng an ninh để dồn toàn bộ nguồn lực cho tăng trưởng.",
      "Tách rời nhiệm vụ kinh tế và quốc phòng thành hai quá trình độc lập."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Kết hợp chặt chẽ giữa phát triển kinh tế - xã hội với tăng cường quốc phòng - an ninh trong mọi quy hoạch."
  },
  {
    id: "lsd-dh9-d2-022",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Chính sách xã hội và giải quyết việc làm thời kỳ ĐH IX được thực hiện ra sao?",
    options: [
      "Khuyến khích tạo việc làm, đẩy mạnh xóa đói giảm nghèo, bảo đảm an sinh xã hội.",
      "Cắt giảm toàn bộ các chương trình mục tiêu quốc gia xóa đói giảm nghèo.",
      "Để người lao động tự xoay xở và không thực hiện bảo hiểm xã hội.",
      "Chỉ tập trung bảo trợ cho người dân ở thành thị xem nhẹ nông thôn."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Thực hiện tốt các chính sách xã hội, tạo việc làm, phát triển hệ thống an sinh xã hội đa dạng."
  },
  {
    id: "lsd-dh9-d2-023",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Thành tựu xuất khẩu gạo và nông sản giai đoạn ĐH IX là gì?",
    options: [
      "Tiếp tục giữ vững vị thế nước xuất khẩu gạo và nông sản hàng đầu thế giới.",
      "Trở lại tình trạng thiếu lương thực phải nhập khẩu gạo từ nước ngoài.",
      "Ngừng xuất khẩu nông sản để tập trung tiêu dùng nội địa hoàn toàn.",
      "Chuyển toàn bộ diện tích trồng nông sản sang làm khu du lịch."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Việt Nam tiếp tục khẳng định vị thế xuất khẩu hàng đầu thế giới về gạo, cà phê, hạt điều, thủy sản."
  },
  {
    id: "lsd-dh9-d2-024",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Vai trò của Mặt trận Tổ quốc và các đoàn thể nhân dân thời kỳ ĐH IX được nhấn mạnh là gì?",
    options: [
      "Tập hợp khối đại đoàn kết, giám sát xã hội, phản biện và tham gia xây dựng Đảng.",
      "Chỉ làm nhiệm vụ thi hành đầy đủ các mệnh lệnh từ các cơ quan nhà nước cấp trên.",
      "Giải tán toàn bộ các tổ chức đoàn thể để tinh giảm biên chế cán bộ hành chính.",
      "Chỉ hoạt động mang tính chất hình thức không tham gia vào bất kỳ quản lý nào."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Phát huy vai trò của Mặt trận Tổ quốc và các đoàn thể nhân dân trong đại đoàn kết và giám sát, phản biện xã hội."
  },
  {
    id: "lsd-dh9-d2-025",
    examSet: 2,
    sectionId: "dh-9-grp-2",
    subsectionId: "dh-9-sec-2",
    question: "Nguyên tắc quản lý giá cả và thị trường theo ĐH IX là gì?",
    options: [
      "Tôn trọng quy luật thị trường, Nhà nước điều tiết vĩ mô bình ổn giá các mặt hàng then chốt.",
      "Nhà nước áp đặt khung giá cố định trực tiếp cho tất cả các mặt hàng tiêu dùng xã hội.",
      "Để cho thị trường tự do tự quyết định giá cả mà tuyệt đối không có sự kiểm soát nào.",
      "Quay lại áp dụng cơ chế tem phiếu phân phối hàng hóa tiêu dùng như thời kỳ bao cấp."
    ],
    answer: 0,
    difficulty: "medium",
    isOutside: false,
    explanation: "Vận hành theo quy luật thị trường, tôn trọng nguyên tắc cung cầu, Nhà nước bình ổn giá vĩ mô khi cần thiết."
  },

  // 26-36: Hard (11 questions)
  {
    id: "lsd-dh9-d2-026",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Phân tích giá trị phương pháp luận của Chiến lược phát triển KT-XH 2001-2010?",
    options: [
      "Định hướng tầm nhìn dài hạn, kết hợp mục tiêu kinh tế với tiến bộ xã hội.",
      "Là bản quy hoạch ngắn hạn chỉ áp dụng trong phạm vi từng địa phương cụ thể.",
      "Bãi bỏ hoàn toàn toàn bộ các mục tiêu dài hạn đã ghi trong Cương lĩnh 1991.",
      "Nhằm mục đích thay thế hoàn toàn cho vai trò quản lý điều hành của Chính phủ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chiến lược 2001-2010 vạch ra lộ trình khoa học 10 năm đầu thế kỷ 21, kết hợp hài hòa giữa tăng trưởng và phát triển con người."
  },
  {
    id: "lsd-dh9-d2-027",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Tại sao ĐH IX coi CNH-HĐH gắn với phát triển kinh tế tri thức là xu thế tất yếu?",
    options: [
      "Để tranh thủ thời cơ cách mạng công nghệ, rút ngắn khoảng cách phát triển.",
      "Bởi vì kinh tế tri thức có thể thay thế hoàn toàn sản xuất nông nghiệp.",
      "Vì Việt Nam không có đủ lao động phổ thông cho ngành công nghiệp.",
      "Bởi vì các nước tư bản bắt buộc Việt Nam phải áp dụng kinh tế tri thức."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Kinh tế tri thức là xu thế toàn cầu; gắn CNH-HĐH với kinh tế tri thức giúp Việt Nam nhảy vọt về trình độ LLSX."
  },
  {
    id: "lsd-dh9-d2-028",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Phân tích ý nghĩa của việc sửa đổi Hiến pháp năm 1992 (vào năm 2001)?",
    options: [
      "Thể chế hóa đường lối ĐH IX, công nhận tính lâu dài của nền kinh tế nhiều thành phần.",
      "Bãi bỏ hoàn toàn toàn bộ chế độ sở hữu nhà nước về đất đai và tài nguyên quốc gia.",
      "Chuyển hẳn sang áp dụng mô hình thể chế chính trị đa đảng đối lập tư bản chủ nghĩa.",
      "Tập trung toàn bộ quyền lực quản lý kinh tế quốc gia vào các tập đoàn tư nhân."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Sửa đổi Hiến pháp 1992 (năm 2001) tạo cơ sở pháp lý vững chắc cho nền kinh tế thị trường định hướng XHCN."
  },
  {
    id: "lsd-dh9-d2-029",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Tại sao việc đẩy mạnh cổ phần hóa doanh nghiệp nhà nước tại ĐH IX là bước đi đúng đắn?",
    options: [
      "Nâng cao tính tự chủ, thu hút nguồn vốn xã hội và tăng hiệu quả kinh doanh.",
      "Để xóa bỏ hoàn toàn thành phần kinh tế nhà nước trong nền kinh tế.",
      "Nhằm mục đích chuyển giao tài sản nhà nước cho cá nhân quản lý.",
      "Để giảm bớt trách nhiệm quản lý vĩ mô của Nhà nước đối với thị trường."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Cổ phần hóa giúp nâng cao năng lực quản trị, khơi thông nguồn vốn và tăng sức cạnh tranh của doanh nghiệp."
  },
  {
    id: "lsd-dh9-d2-030",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Phân tích giá trị lý luận của việc xác định 8 đặc trưng của xã hội XHCN mà nhân dân ta xây dựng?",
    options: [
      "Phát triển và cụ thể hóa mô hình CNXH ở Việt Nam phù hợp với thực tiễn.",
      "Sao chép hoàn toàn mô hình xã hội chủ nghĩa của Liên Xô trước đây.",
      "Bãi bỏ các đặc trưng đã được ghi trong Cương lĩnh năm 1991.",
      "Chỉ chú trọng phát triển kinh tế mà bỏ qua các yếu tố văn hóa xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "8 đặc trưng xã hội XHCN là sự đúc kết lý luận sâu sắc của Đảng về con đường đi lên CNXH ở nước ta."
  },
  {
    id: "lsd-dh9-d2-031",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Ý nghĩa của việc kết hợp phát triển kinh tế với đảm bảo an sinh xã hội?",
    options: [
      "Đảm bảo tiến bộ công bằng xã hội ngay trong từng bước và từng chính sách.",
      "Hy sinh an sinh xã hội để dồn toàn bộ nguồn lực cho tăng trưởng GDP.",
      "Chỉ tập trung phát triển an sinh xã hội sau khi đã trở thành nước giàu.",
      "Để thị trường tự do điều tiết các chính sách trợ cấp xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Tăng trưởng kinh tế phải đi đôi với tiến bộ và công bằng xã hội, không chờ kinh tế phát triển cao rồi mới thực hiện."
  },
  {
    id: "lsd-dh9-d2-032",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Tại sao công tác vận động quần chúng tại ĐH IX được xem là nguồn gốc sức mạnh?",
    options: [
      "Dân là gốc, sự nghiệp Đổi mới là của dân, do dân và vì nhân dân.",
      "Vì nhân dân chỉ đóng vai trò thi hành các quyết định của Nhà nước.",
      "Để huy động tối đa nghĩa vụ thuế của dân mà không cần nâng đời sống.",
      "Nhằm mục đích thay thế cho vai trò lãnh đạo của các cấp ủy Đảng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Sức mạnh của Đảng là ở mối quan hệ mật thiết với nhân dân; dựa vào dân để xây dựng Đảng và phát triển đất nước."
  },
  {
    id: "lsd-dh9-d2-033",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Phân tích bài học giữ vững độc lập tự chủ trong quá trình hội nhập BTA và WTO?",
    options: [
      "Chủ động hội nhập nhưng không tự biến mình thành sân sau kinh tế nước ngoài.",
      "Chấp nhận mọi điều kiện áp đặt để được gia nhập các tổ chức kinh tế.",
      "Từ bỏ quyền tự chủ tài chính tiền tệ để thu hút vốn đầu tư nước ngoài.",
      "Đóng cửa thị trường nội địa không cho hàng hóa nước ngoài vào tiêu thụ."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Hội nhập là để phát triển, nhưng phải kiên quyết giữ vững độc lập, tự chủ và định hướng XHCN."
  },
  {
    id: "lsd-dh9-d2-034",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Ý nghĩa của cuộc vận động Xây dựng, chỉnh đốn Đảng theo tinh thần NQTƯ 6 (lần 2) khóa VIII kéo sang khóa IX?",
    options: [
      "Nâng cao bản lĩnh chính trị, quét sạch chủ nghĩa cá nhân, củng cố niềm tin.",
      "Giảm bớt số lượng đảng viên sinh hoạt ở các chi bộ vùng nông thôn miền núi.",
      "Bãi bỏ nguyên tắc tập trung dân chủ trong mọi sinh hoạt chi bộ địa phương.",
      "Giải tán các cơ quan kiểm tra giám sát chuyên trách của Đảng ở các cấp."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Chỉnh đốn Đảng giúp nâng cao sức chiến đấu, làm trong sạch đội ngũ cán bộ, củng cố mối quan hệ máu thịt với dân."
  },
  {
    id: "lsd-dh9-d2-035",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Tại sao việc kết hợp sức mạnh dân tộc và sức mạnh thời đại tại ĐH IX có ý nghĩa sống còn?",
    options: [
      "Tối đa hóa nội lực, tranh thủ triệt để ngoại lực để bứt phá phát triển.",
      "Ỷ lại hoàn toàn vào sức mạnh thời đại mà không cần phát huy nội lực.",
      "Chỉ dựa vào nội lực tuyệt đối không giao thương hợp tác quốc tế.",
      "Đánh đổi độc lập tự chủ để lấy nguồn tài chính hỗ trợ nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Nội lực là quyết định, ngoại lực là quan trọng; kết hợp nội lực và ngoại lực tạo nên sức mạnh tổng hợp quốc gia."
  },
  {
    id: "lsd-dh9-d2-036",
    examSet: 2,
    sectionId: "dh-9-grp-3",
    subsectionId: "dh-9-sec-3",
    question: "Nguyên nhân thành công của việc giữ vững ổn định chính trị xã hội thời kỳ ĐH IX là gì?",
    options: [
      "Đường lối đúng đắn, thế trận lòng dân vững chắc, củng cố quốc phòng an ninh.",
      "Do nền kinh tế không chịu tác động từ các khủng hoảng quốc tế.",
      "Do áp dụng chính sách đóng cửa biên giới tuyệt đối không giao lưu.",
      "Do Nhà nước dừng toàn bộ các dự án đầu tư để tập trung an ninh."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: false,
    explanation: "Ổn định chính trị - xã hội là tiền đề cho phát triển kinh tế; lòng dân yên đốn là gốc rễ của ổn định."
  },

  // 37-40: Outside (4 questions - Practical Application)
  {
    id: "lsd-dh9-d2-037",
    examSet: 2,
    sectionId: "dh-9-grp-4",
    subsectionId: "dh-9-sec-4",
    question: "Bài học về Chiến lược phát triển KT-XH 2001-2010 gợi mở gì cho việc lập kế hoạch cá nhân?",
    options: [
      "Đặt mục tiêu rõ ràng, có lộ trình từng bước và kiên trì thực hiện.",
      "Sống không cần mục tiêu hay kế hoạch dài hạn cho tương lai.",
      "Đặt mục tiêu quá cao vô lý mà không có giải pháp thực hiện thực tế.",
      "Thay đổi kế hoạch liên tục hàng ngày theo cảm xúc ngẫu hứng."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Mỗi cá nhân muốn thành công phải xây dựng cho mình một chiến lược phát triển bản thân dài hạn với lộ trình rõ ràng."
  },
  {
    id: "lsd-dh9-d2-038",
    examSet: 2,
    sectionId: "dh-9-grp-4",
    subsectionId: "dh-9-sec-4",
    question: "Từ bài học phát triển kinh tế tri thức tại ĐH IX, sinh viên cần rèn luyện năng lực gì?",
    options: [
      "Năng lực tự học, tư duy phản biện, làm chủ công nghệ số và sáng tạo.",
      "Học thuộc lòng thụ động mà không biết áp dụng thực tế công việc.",
      "Tránh né việc tiếp cận với các công nghệ và công cụ mới hiện đại.",
      "Rời bỏ việc học tập để tìm kiếm các công việc lao động phổ thông."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Kinh tế tri thức đòi hỏi người học phải nâng cao năng lực tự học suốt đời, sáng tạo và làm chủ công nghệ."
  },
  {
    id: "lsd-dh9-d2-039",
    examSet: 2,
    sectionId: "dh-9-grp-4",
    subsectionId: "dh-9-sec-4",
    question: "Ý nghĩa của tôn chỉ đối ngoại 'Đối tác tin cậy' áp dụng trong xây dựng thương hiệu cá nhân là gì?",
    options: [
      "Giữ lời hứa, làm việc chuyên nghiệp, có trách nhiệm và tôn trọng đối tác.",
      "Chỉ hứa hẹn để lấy lòng mà không thực hiện cam kết công việc.",
      "Đánh đổi đạo đức kinh doanh để thu lợi nhuận nhanh chóng trước mắt.",
      "Không hợp tác với ai chỉ làm việc một mình trong mọi dự án."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thương hiệu cá nhân uy tín được xây dựng trên sự tin cậy, trách nhiệm và tính chuyên nghiệp trong hợp tác."
  },
  {
    id: "lsd-dh9-d2-040",
    examSet: 2,
    sectionId: "dh-9-grp-4",
    subsectionId: "dh-9-sec-4",
    question: "Bài học về đại đoàn kết toàn dân tộc tại ĐH IX nhắc nhở thanh niên về tinh thần tập thể thế nào?",
    options: [
      "Gắn kết cộng đồng, tôn trọng sự khác biệt, cùng hướng tới mục tiêu chung.",
      "Gây chia rẽ nội bộ và phân biệt đối xử trong các hoạt động nhóm.",
      "Sống khép kín không tham gia vào bất kỳ hoạt động xã hội nào.",
      "Đặt cái tôi cá nhân lên trên lợi ích chung của tập thể và xã hội."
    ],
    answer: 0,
    difficulty: "hard",
    isOutside: true,
    explanation: "Thế hệ trẻ cần phát huy tinh thần đoàn kết, tinh thần đồng đội và trách nhiệm xã hội trong đại gia đình Việt Nam."
  }
];

// Check length difference (L_max - L_min <= 15)
let hasError = false;
questions.forEach((q, idx) => {
  const lengths = q.options.map(o => o.length);
  const maxL = Math.max(...lengths);
  const minL = Math.min(...lengths);
  const diff = maxL - minL;
  if (diff > 15) {
    console.error(`[ERROR] Question ${idx + 1} (${q.id}): diff = ${diff} (>15). Max: ${maxL}, Min: ${minL}`);
    hasError = true;
  }
});

if (!hasError) {
  console.log("✅ All 40 questions passed Option Length Balance (L_max - L_min <= 15)!");
  const fileContent = `/* ============================================================
   DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ĐỀ CHUẨN 2: ĐẠI HỘI IX (4/2001)
   Mã Bộ Đề: questions-lsd-dh9-part2.js
   Số lượng: 40 câu cố định (36 Inside + 4 Outside)
   ============================================================ */

export const questionsLsdDh9Part2 = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync("./data/questions-lsd-dh9-part2.js", fileContent, "utf8");
  console.log("Successfully generated data/questions-lsd-dh9-part2.js");
}
