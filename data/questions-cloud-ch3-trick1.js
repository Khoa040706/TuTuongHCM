// Ngân hàng câu hỏi Bẫy tư duy - Chương 3: Software as a Service (SaaS)
// Mã đề: cloud-c3-d1 | 50 câu Vận dụng cao | 100% có trickDetails | Delta L <= 15

export const questionsCloudCh3Trick1 = [
  {
    "id": "cloud-c3-d1-001",
    "question": "Theo chuẩn học thuật điện toán đám mây, bản chất cốt lõi của mô hình Software as a Service (SaaS) là gì?",
    "options": [
      "Mô hình thuê phần mềm qua mạng do bên thứ ba lưu trữ và bảo trì",
      "Mô hình mua quyền sở hữu vĩnh viễn mã nguồn đóng gói của phần mềm",
      "Mô hình thuê máy chủ vật lý riêng biệt để tự biên dịch phần mềm",
      "Mô hình cung cấp môi trường lập trình cho kỹ sư phát triển phần mềm"
    ],
    "answer": 0,
    "explanation": "SaaS là mô hình phân phối phần mềm trong đó nhà cung cấp bên thứ ba lưu trữ ứng dụng trên hạ tầng của họ và cung cấp cho khách hàng qua mạng Internet theo mô hình thuê bao dịch vụ.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa SaaS (thuê phần mềm ứng dụng) với IaaS (thuê máy chủ) hoặc PaaS (môi trường lập trình).",
      "trickWord": "Bẫy bản chất cốt lõi của SaaS là thuê phần mềm qua mạng",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.1",
      "tip": "SaaS = Thuê phần mềm qua mạng (End-user sử dụng, zero installation)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-002",
    "question": "Đặc tính nào dưới đây là MỘT TRONG 4 ĐẶC TÍNH KỸ THUẬT CỐT LÕI của dịch vụ SaaS theo giáo trình?",
    "options": [
      "Khách hàng phải tự cấu hình hệ điều hành và phân vùng ổ cứng máy chủ",
      "Bắt buộc người dùng tải tệp cài đặt thực thi về máy tính cá nhân",
      "Cập nhật và bảo trì hoàn toàn tập trung từ phía nhà cung cấp",
      "Chỉ cho phép một người dùng duy nhất đăng nhập trong một phiên làm việc"
    ],
    "answer": 2,
    "explanation": "4 đặc tính cốt lõi của SaaS trong giáo trình gồm: Truy cập qua Internet, Không cài đặt cục bộ, Nhà cung cấp tự quản lý và bảo trì tập trung, Mô hình định giá đăng ký linh hoạt.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là người dùng phải tự tải bản vá lỗi về cài đặt thủ công như phần mềm truyền thống.",
      "trickWord": "Bẫy đặc tính bảo trì tập trung tự động từ phía Provider",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.2",
      "tip": "SaaS = Provider quản lý và cập nhật tập trung, client không cần bảo trì."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-003",
    "question": "Khi nhà cung cấp SaaS nâng cấp phiên bản ứng dụng lên bản mới nhất, hành động nào diễn ra ở phía người dùng?",
    "options": [
      "Phải tải bản vá lỗi dạng tệp tin thực thi (.exe) về cài lại máy trạm",
      "Không cần thao tác gì, hệ thống tự động cập nhật ngay trên đám mây",
      "Phải khởi động lại toàn bộ máy chủ và biên dịch lại mã nguồn từ đầu",
      "Phải mua thêm một đĩa bản quyền mới thì mới được phép cập nhật hệ thống"
    ],
    "answer": 1,
    "explanation": "Đặc tính Auto-update của SaaS đảm bảo mọi bản nâng cấp tính năng và vá lỗi bảo mật đều được nhà cung cấp triển khai tự động trên máy chủ đám mây mà không đòi hỏi thao tác từ người dùng.",
    "trickDetails": {
      "whyTrapped": "Thí sinh quen với thói quen cập nhật của phần mềm Desktop cài đặt On-Premise (phải tải patch .exe hoặc mua đĩa nâng cấp).",
      "trickWord": "Bẫy cơ chế Automatic Updates tự động 100% trên Cloud",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.2 & II.1",
      "tip": "SaaS nâng cấp = Không cần tải gì, mở trình duyệt là có bản mới nhất."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-004",
    "question": "Về mặt tài chính doanh nghiệp, việc chuyển đổi từ phần mềm On-Premise sang SaaS mang lại lợi thế kế toán gì?",
    "options": [
      "Bắt buộc doanh nghiệp phải chi trả 100% toàn bộ chi phí sử dụng 10 năm liền",
      "Chuyển từ chi phí vận hành (OPEX) sang chi phí vốn đầu tư tài sản (CAPEX)",
      "Loại bỏ hoàn toàn chi phí bảo trì mạng và không cần trả tiền dịch vụ nào",
      "Chuyển từ chi phí vốn đầu tư tài sản (CAPEX) sang chi phí vận hành (OPEX)"
    ],
    "answer": 3,
    "explanation": "SaaS giúp doanh nghiệp chuyển đổi từ CAPEX (Capital Expenditure - chi phí vốn đầu tư mua sắm tài sản cố định đắt đỏ ban đầu) sang OPEX (Operational Expenditure - chi phí hoạt động vận hành thanh toán linh hoạt theo kỳ).",
    "trickDetails": {
      "whyTrapped": "Học viên rất hay bị bẫy đảo ngược giữa hai khái niệm tài chính CAPEX và OPEX.",
      "trickWord": "Bẫy đảo ngữ giữa CAPEX (vốn đầu tư) và OPEX (chi phí vận hành)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.1",
      "tip": "SaaS = Chuyển từ CAPEX (mua tài sản lớn) sang OPEX (thuê bao định kỳ)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-005",
    "question": "Trong tháp dịch vụ Cloud (IaaS - PaaS - SaaS), người dùng SaaS có quyền kiểm soát tầng kỹ thuật nào dưới đây?",
    "options": [
      "Kiểm soát mã nguồn lõi của hệ thống và bộ nhớ ảo của máy chủ vật lý",
      "Kiểm soát toàn bộ hệ điều hành, trình điều khiển và phần cứng máy chủ",
      "Kiểm soát việc phân chia tài nguyên mạng ảo và cấu hình cổng tường lửa",
      "Chỉ kiểm soát dữ liệu người dùng và cấu hình ứng dụng ở mức giao diện"
    ],
    "answer": 3,
    "explanation": "Trong mô hình SaaS, nhà cung cấp quản lý toàn bộ các tầng từ Networking, Storage, Servers, Virtualization, OS, Middleware đến Runtime. Khách hàng chỉ sở hữu dữ liệu của mình và được cấu hình tùy chọn người dùng.",
    "trickDetails": {
      "whyTrapped": "Nhiều người lầm tưởng khách hàng doanh nghiệp được quyền can thiệp vào hệ điều hành hoặc mã nguồn máy chủ trong SaaS.",
      "trickWord": "Bẫy phạm vi kiểm soát trách nhiệm của người dùng trong mô hình SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.1",
      "tip": "SaaS = Người dùng chỉ kiểm soát Dữ liệu (Data) và Cấu hình giao diện người dùng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-006",
    "question": "Yêu cầu kỹ thuật tối thiểu đối với thiết bị đầu cuối của người dùng khi truy cập một dịch vụ SaaS tiêu chuẩn là gì?",
    "options": [
      "Phải trang bị máy tính chuyên dụng có gắn card đồ họa dung lượng rất cao",
      "Chỉ cần thiết bị có trình duyệt web tiêu chuẩn và có kết nối Internet",
      "Phải cài đặt hệ điều hành máy chủ và cấu hình mạng nội bộ riêng biệt",
      "Bắt buộc cắm trực tiếp dây cáp quang vào máy chủ chính của nhà cung cấp"
    ],
    "answer": 1,
    "explanation": "SaaS hoạt động trên nền tảng Web tiêu chuẩn (Zero local installation / Browser-based), cho phép truy cập linh hoạt từ mọi thiết bị (máy tính, máy tính bảng, điện thoại) chỉ cần có trình duyệt và mạng Internet.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là ứng dụng doanh nghiệp phức tạp đòi hỏi máy trạm cấu hình đồ họa khủng hoặc card mạng đắt tiền.",
      "trickWord": "Bẫy yêu cầu thiết bị đầu cuối tối thiểu của mô hình SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.2",
      "tip": "SaaS = Zero install, chỉ cần Browser + Internet là truy cập được."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-007",
    "question": "Hình thức thanh toán phổ biến và đặc trưng nhất của các dịch vụ SaaS hiện đại là gì?",
    "options": [
      "Thanh toán theo mô hình đăng ký định kỳ (Subscription) hoặc mức dùng thực tế",
      "Mua bản quyền vĩnh viễn một lần duy nhất kèm phí chuyển giao mã nguồn gốc",
      "Đặt cọc toàn bộ giá trị phần cứng máy chủ trong thời hạn 10 năm liên tiếp",
      "Trao đổi bằng cổ phần doanh nghiệp thay cho toàn bộ phí sử dụng hàng tháng"
    ],
    "answer": 0,
    "explanation": "Mô hình giá của SaaS là Subscription-based (theo tháng/năm/người dùng) hoặc Pay-as-you-go (trả theo mức tiêu thụ thực tế), khác biệt hoàn toàn với Perpetual License (bản quyền vĩnh viễn) của phần mềm truyền thống.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với hình thức mua đứt phần mềm vĩnh viễn (Perpetual License) của các thời kỳ trước.",
      "trickWord": "Bẫy hình thức định giá đăng ký định kỳ linh hoạt của SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục I.2",
      "tip": "SaaS = Subscription (Đăng ký định kỳ) hoặc Pay-as-you-go, không mua đứt vĩnh viễn."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-008",
    "question": "Thuật ngữ \"Vendor Lock-in\" trong mô hình SaaS mô tả rủi ro tiêu cực nào đối với khách hàng doanh nghiệp?",
    "options": [
      "Nhà cung cấp ép buộc khách hàng phải mua thêm phần cứng chuyên dụng độc quyền",
      "Doanh nghiệp bị khóa tài khoản ngay lập tức khi nhà cung cấp bảo trì máy",
      "Khó khăn, tốn kém chi phí khi muốn chuyển dữ liệu sang nhà cung cấp khác",
      "Khách hàng không thể thay đổi mật khẩu truy cập của nhân viên trong công ty"
    ],
    "answer": 2,
    "explanation": "Vendor Lock-in là tình trạng khách hàng bị ràng buộc chặt chẽ vào một nhà cung cấp do định dạng dữ liệu độc quyền, giao diện lập trình riêng biệt hoặc chi phí chuyển đổi (Switching Costs) quá cao.",
    "trickDetails": {
      "whyTrapped": "Từ \"Lock-in\" khiến nhiều người hiểu lầm là bị khóa tài khoản người dùng hoặc bị ép mua phần cứng.",
      "trickWord": "Bẫy ngữ nghĩa của thuật ngữ Vendor Lock-in (Khóa chặt nhà cung cấp)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.2",
      "tip": "Vendor Lock-in = Khó khăn và tốn kém khi muốn di chuyển dữ liệu sang nhà cung cấp khác."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-009",
    "question": "Hạn chế bản chất lớn nhất của mô hình SaaS khi xảy ra sự cố đứt kết nối mạng Internet diện rộng là gì?",
    "options": [
      "Toàn bộ dữ liệu doanh nghiệp lưu trữ trên đám mây sẽ bị xóa vĩnh viễn ngay",
      "Người dùng hoàn toàn không thể truy cập hoặc bị gián đoạn xử lý ứng dụng",
      "Phần cứng máy tính của người dùng tại văn phòng sẽ bị hỏng hóc vật lý nặng",
      "Hệ điều hành của máy tính trạm tự động khóa màn hình và không mở lại được"
    ],
    "answer": 1,
    "explanation": "SaaS phụ thuộc tuyệt đối vào kết nối Internet (Internet dependency). Khi mất mạng, người dùng không thể gửi request đến máy chủ đám mây, gây ngưng trệ toàn bộ quy trình nghiệp vụ trừ một số tính năng lưu tạm cục bộ có hạn.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ mất mạng sẽ làm mất dữ liệu trên đám mây hoặc làm hỏng phần cứng máy tính.",
      "trickWord": "Bẫy sự phụ thuộc sống còn vào kết nối mạng Internet của SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.2",
      "tip": "Mất Internet = Mất quyền truy cập ứng dụng SaaS (dữ liệu trên cloud vẫn an toàn)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-010",
    "question": "Mối lo ngại lớn nhất về mặt pháp lý và an ninh thông tin khi doanh nghiệp đưa dữ liệu lên SaaS là gì?",
    "options": [
      "Mất quyền kiểm soát vị trí vật lý và chủ quyền dữ liệu (Data Sovereignty)",
      "Không thể in dữ liệu ra giấy để lưu trữ trong kho lưu trữ của công ty mình",
      "Bắt buộc phải công khai toàn bộ tài chính doanh nghiệp lên mạng xã hội lớn",
      "Dữ liệu tự động bị gửi sang tất cả các công ty đối thủ cạnh tranh trực tiếp"
    ],
    "answer": 0,
    "explanation": "Chủ quyền dữ liệu (Data Sovereignty) là vấn đề pháp lý lớn: Khi dữ liệu đặt trên máy chủ của bên thứ ba ở quốc gia khác, dữ liệu sẽ phải tuân theo luật pháp của quốc gia sở tại, làm mất quyền kiểm soát vật lý trực tiếp của doanh nghiệp.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các lý do phi thực tế hoặc nhầm lẫn giữa việc mất quyền kiểm soát với rò rỉ dữ liệu cho đối thủ.",
      "trickWord": "Bẫy vấn đề an ninh và Chủ quyền dữ liệu (Data Sovereignty)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.2",
      "tip": "Mối lo pháp lý SaaS = Mất kiểm soát vị trí vật lý và Data Sovereignty."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-011",
    "question": "Xét về bài toán Tổng chi phí sở hữu (TCO) trong dài hạn, nhược điểm tài chính tiềm ẩn của SaaS là gì?",
    "options": [
      "Phí dịch vụ tăng gấp đôi sau mỗi tuần sử dụng bất kể số lượng tài khoản đăng ký",
      "Chi phí đầu tư ban đầu luôn đắt đỏ hơn việc tự xây dựng trung tâm dữ liệu",
      "Doanh nghiệp phải trả thêm tiền điện làm mát cho trung tâm dữ liệu nhà cung cấp",
      "Tổng chi phí thuê bao tích lũy nhiều năm có thể cao hơn mua phần mềm vĩnh viễn"
    ],
    "answer": 3,
    "explanation": "Dù SaaS giảm mạnh chi phí ban đầu, nhưng xét trong chu kỳ dài hạn (5-10 năm), tổng số tiền thuê bao định kỳ (Subscription) cộng dồn cho hàng nghìn nhân viên có thể vượt qua chi phí mua bản quyền vĩnh viễn và tự vận hành.",
    "trickDetails": {
      "whyTrapped": "Dễ tuyệt đối hóa quan niệm \"SaaS luôn rẻ hơn trong mọi trường hợp\", bỏ qua bài toán TCO dài hạn.",
      "trickWord": "Bẫy bài toán Tổng chi phí sở hữu (TCO) dài hạn của SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.2",
      "tip": "Dài hạn (5-10 năm): Phí thuê bao tích lũy có thể đắt hơn mua bản quyền vĩnh viễn."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-012",
    "question": "Khả năng co giãn và mở rộng (Scalability) của SaaS mang lại lợi thế vận hành nào cho doanh nghiệp phát triển nóng?",
    "options": [
      "Bắt buộc công ty phải tuyển dụng thêm đội ngũ kỹ sư phần cứng để lắp máy chủ",
      "Tự động gửi thêm các máy tính xách tay mới về văn phòng cho nhân viên sử dụng",
      "Dễ dàng bổ sung thêm tài khoản người dùng mới chỉ bằng vài thao tác quản trị",
      "Giảm tốc độ xử lý của toàn bộ hệ thống xuống để tiết kiệm điện năng tiêu thụ"
    ],
    "answer": 2,
    "explanation": "Khả năng Scalability của SaaS cho phép doanh nghiệp thêm hoặc bớt số lượng người dùng (User licenses) ngay tức thì trên trang quản trị mà không cần mua thêm máy chủ vật lý hay nâng cấp hạ tầng.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn giữa mở rộng giấy phép tài khoản phần mềm với việc mua sắm trang thiết bị phần cứng máy tính.",
      "trickWord": "Bẫy ưu điểm Scalability mở rộng linh hoạt theo số lượng tài khoản",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.1",
      "tip": "Scalability của SaaS = Thêm/bớt user license tức thì trên portal, không lo phần cứng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-013",
    "question": "Khi nhà cung cấp SaaS tự ý cập nhật giao diện và tính năng mới, rủi ro nào có thể phát sinh cho doanh nghiệp?",
    "options": [
      "Xóa sạch toàn bộ hợp đồng kinh tế đã ký kết của công ty khỏi hệ thống đám mây",
      "Làm máy tính cá nhân của toàn bộ nhân viên bị nhiễm phần mềm độc hại nguy hiểm",
      "Làm gián đoạn quy trình làm việc quen thuộc và tốn thời gian đào tạo lại nhân sự",
      "Khiến doanh nghiệp bị phạt vi phạm hành chính vì không dùng phiên bản phần mềm cũ"
    ],
    "answer": 2,
    "explanation": "Mặc dù Auto-update là ưu điểm, nhưng việc thay đổi giao diện hoặc logic nút bấm đột ngột từ phía nhà cung cấp có thể làm gián đoạn thói quen vận hành của nhân viên, gây lỗi tác nghiệp và phát sinh chi phí đào tạo lại.",
    "trickDetails": {
      "whyTrapped": "Thí sinh thường chỉ nhìn thấy mặt tích cực của Auto-update mà không nhận diện mặt trái về quản trị thay đổi (Change management).",
      "trickWord": "Bẫy mặt trái của tính năng tự động cập nhật ngoài ý muốn trong SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.2",
      "tip": "Mặt trái Auto-update = Đổi giao diện đột ngột ➔ Gián đoạn thao tác và tốn công đào tạo lại."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-014",
    "question": "Đặc điểm nào dưới đây là lợi thế cạnh tranh vượt trội của SaaS văn phòng so với ứng dụng desktop truyền thống?",
    "options": [
      "Nhiều người dùng có thể cùng mở, chỉnh sửa một tài liệu theo thời gian thực",
      "Mỗi người dùng phải lưu tài liệu vào USB rồi sao chép thủ công cho người khác",
      "Không cho phép bất kỳ ai xem tài liệu nếu người tạo ra nó chưa tắt máy tính",
      "Chỉ cho phép mở tài liệu vào giờ hành chính và khóa truy cập vào ban đêm"
    ],
    "answer": 0,
    "explanation": "Khả năng cộng tác thời gian thực (Real-time collaboration) như trong Google Docs hay Office 365 cho phép hàng chục người cùng làm việc trên một tài liệu mà không xảy ra xung đột phiên bản hay phải gửi file đính kèm qua email.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với cách làm việc truyền thống (lưu file cục bộ, gửi đính kèm, khóa file khi có người khác mở).",
      "trickWord": "Bẫy lợi thế cộng tác thời gian thực (Real-time Collaboration) của SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục II.1",
      "tip": "SaaS văn phòng = Đồng chỉnh sửa thời gian thực (Real-time collaboration)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-015",
    "question": "Hình ảnh ẩn dụ \"Tòa chung cư\" và \"Căn biệt thự riêng\" lần lượt đại diện cho hai kiến trúc SaaS nào?",
    "options": [
      "Hybrid Cloud (Chung cư dùng chung hạ tầng) và Public Cloud (Biệt thự riêng biệt)",
      "Single-tenant (Chung cư dùng chung hạ tầng) và Multi-tenant (Biệt thự riêng biệt)",
      "OpenSaaS (Chung cư dùng chung hạ tầng) và Private Cloud (Biệt thự riêng biệt)",
      "Multi-tenant (Chung cư dùng chung hạ tầng) và Single-tenant (Biệt thự riêng biệt)"
    ],
    "answer": 3,
    "explanation": "Multi-tenant giống tòa chung cư: nhiều khách thuê dùng chung hạ tầng móng, điện nước (DB, App server) nhưng có chìa khóa căn hộ riêng (Tenant_ID). Single-tenant giống biệt thự riêng: độc lập hoàn toàn từ kết cấu đến nội thất.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị bẫy đảo ngược thứ tự giữa Multi-tenant và Single-tenant.",
      "trickWord": "Bẫy đảo vị trí ẩn dụ Chung cư (Multi) vs Biệt thự (Single)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.1",
      "tip": "Chung cư = Multi-tenant (chung hạ tầng); Biệt thự = Single-tenant (riêng biệt)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-016",
    "question": "Trong cơ sở dữ liệu dùng chung (Shared Database) của Multi-tenant SaaS, dữ liệu các công ty được phân tách bằng gì?",
    "options": [
      "Các ổ đĩa cứng vật lý tách biệt được sản xuất riêng cho từng công ty khách hàng",
      "Cột định danh duy nhất (Tenant_ID) được tự động thêm vào mọi truy vấn cơ sở dữ liệu",
      "Hệ thống tường lửa phần cứng cắm trực tiếp vào từng cổng mạng của máy tính trạm",
      "Tên đăng nhập và mật khẩu cá nhân của từng nhân viên lưu trong tệp tin văn bản"
    ],
    "answer": 1,
    "explanation": "Trong Shared Database, Shared Schema, toàn bộ dữ liệu của tất cả người thuê được lưu chung trong các bảng dữ liệu và phân biệt logic nhờ trường khóa Tenant_ID gắn liền với mọi câu lệnh truy vấn WHERE Tenant_ID = ...",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ hệ thống đám mây phân chia ổ đĩa cứng vật lý riêng cho từng khách hàng nhỏ lẻ.",
      "trickWord": "Bẫy cơ chế phân tách dữ liệu logic bằng Tenant_ID trong Shared DB",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.1",
      "tip": "Shared Database = Dùng chung bảng, phân tách bằng cột Tenant_ID ở tầng logic."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-017",
    "question": "Hiện tượng \"Noisy Neighbor\" (Hàng xóm ồn ào) trong kiến trúc Multi-tenant SaaS được hiểu chính xác là gì?",
    "options": [
      "Một người thuê tiêu thụ quá nhiều tài nguyên làm suy giảm hiệu năng của người khác",
      "Tiếng ồn phát ra từ hệ thống quạt làm mát của các tủ rack trong trung tâm dữ liệu",
      "Nhân viên của hai công ty khách hàng trò chuyện quá to qua hệ thống tổng đài mạng",
      "Sự xung đột sóng vô tuyến không dây giữa các thiết bị phát Wi-Fi tại văn phòng làm việc"
    ],
    "answer": 0,
    "explanation": "Noisy Neighbor là hiện tượng trong môi trường đa người thuê (Multi-tenant), khi một khách hàng chạy tác vụ đột biến ngốn cạn CPU, RAM hoặc I/O ổ đĩa, làm chậm trễ hiệu năng của các khách hàng khác đang dùng chung hạ tầng.",
    "trickDetails": {
      "whyTrapped": "Dễ suy diễn theo nghĩa đen vật lý (tiếng ồn cơ học của quạt gió hoặc tiếng người nói chuyện).",
      "trickWord": "Bẫy nghĩa đen của thuật ngữ hiện tượng Noisy Neighbor",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.2",
      "tip": "Noisy Neighbor = Một tenant chiếm dụng CPU/RAM làm chậm các tenant khác."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-018",
    "question": "Mô hình CSDL nào trong Multi-tenant mang lại sự cân bằng tối ưu giữa chi phí phần cứng và mức độ cô lập dữ liệu?",
    "options": [
      "Dùng chung cơ sở dữ liệu và dùng chung toàn bộ lược đồ (Shared DB, Shared Schema)",
      "Dùng chung cơ sở dữ liệu nhưng tách biệt lược đồ bảng (Shared DB, Separate Schema)",
      "Tách biệt hoàn toàn cơ sở dữ liệu vật lý riêng cho từng khách (Separate Database)",
      "Lưu trữ toàn bộ dữ liệu của tất cả khách hàng vào một tệp tin văn bản dạng phẳng"
    ],
    "answer": 1,
    "explanation": "Mô hình Shared Database, Separate Schema là điểm cân bằng lý tưởng: các tenant chia sẻ chung máy chủ CSDL để tiết kiệm chi phí phần cứng, nhưng mỗi tenant có một schema/bảng riêng rẽ để đảm bảo cô lập dữ liệu an toàn.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn mô hình cực đoan (Shared/Shared rẻ nhất nhưng bảo mật kém nhất, hoặc Separate DB đắt đỏ nhất).",
      "trickWord": "Bẫy điểm cân bằng kiến trúc CSDL Shared DB, Separate Schema",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 & III.2",
      "tip": "Cân bằng tối ưu chi phí & cô lập = Shared Database, Separate Schema."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-019",
    "question": "Về khả năng tùy biến (Customization), điểm hạn chế cốt tử của kiến trúc Multi-tenant SaaS là gì?",
    "options": [
      "Nhà cung cấp bắt buộc mọi khách hàng phải sử dụng chung một mật khẩu truy cập hệ thống",
      "Khách hàng hoàn toàn không được đổi hình nền và không được đổi ảnh đại diện tài khoản",
      "Khách hàng không được phép sửa mã nguồn lõi mà chỉ được cấu hình giao diện và quy trình",
      "Không thể thêm mới bất kỳ trường dữ liệu nào vào biểu mẫu nhập liệu của người dùng"
    ],
    "answer": 2,
    "explanation": "Trong Multi-tenant, tất cả khách hàng chạy chung một phiên bản mã nguồn (Single Codebase). Do đó, khách hàng chỉ có thể cấu hình (Configuration) qua metadata chứ tuyệt đối không được sửa đổi mã nguồn phần mềm gốc.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn giữa Tùy biến mã nguồn (Code Customization - chỉ có ở Single-tenant) và Cấu hình tham số (Configuration - có ở Multi-tenant).",
      "trickWord": "Bẫy ranh giới giữa Tùy biến mã nguồn lõi và Cấu hình giao diện",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.2",
      "tip": "Multi-tenant = Chỉ cấu hình (Configuration), không sửa mã nguồn gốc."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-020",
    "question": "Lý do vì sao các ngân hàng và tổ chức tài chính lớn thường ưu tiên lựa chọn mô hình Single-tenant SaaS?",
    "options": [
      "Nhà cung cấp Single-tenant cam kết bảo hiểm 100% tài sản tài chính cho ngân hàng đó",
      "Chi phí thuê dịch vụ hàng tháng của Single-tenant luôn rẻ hơn rất nhiều so với Multi",
      "Single-tenant không cần máy chủ hoạt động mà chạy trực tiếp trên bộ nhớ máy tính trạm",
      "Yêu cầu cô lập dữ liệu mức vật lý cao nhất và tuân thủ các quy định bảo mật khắt khe"
    ],
    "answer": 3,
    "explanation": "Các tổ chức tài chính chịu sự giám sát nghiêm ngặt của pháp luật (PCI-DSS, Basel) yêu cầu cô lập dữ liệu tuyệt đối (Zero risk of cross-tenant data leak), do đó họ sẵn sàng trả chi phí cao cho Single-tenant để có CSDL và máy chủ riêng biệt.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là Single-tenant có giá rẻ hơn hoặc có những cam kết bảo hiểm phi thực tế.",
      "trickWord": "Bẫy động lực lựa chọn Single-tenant của khối Tài chính - Ngân hàng",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.2",
      "tip": "Ngân hàng / Y tế = Chọn Single-tenant vì cần bảo mật và cô lập dữ liệu tuyệt đối."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-021",
    "question": "Thách thức lớn nhất đối với nhà cung cấp khi tiến hành nâng cấp phần mềm trong hệ thống Single-tenant là gì?",
    "options": [
      "Phải thực hiện quy trình nâng cấp và kiểm thử lặp lại riêng lẻ cho từng khách hàng",
      "Chỉ cần cập nhật một lần duy nhất tại máy chủ trung tâm là xong toàn bộ hệ thống",
      "Bắt buộc phải xóa sạch toàn bộ cơ sở dữ liệu cũ thì mới cài đặt được phiên bản mới",
      "Toàn bộ khách hàng sẽ tự động bị ngắt kết nối mạng Internet trong vòng ba tháng liền"
    ],
    "answer": 0,
    "explanation": "Với Single-tenant, mỗi khách hàng là một phiên bản độc lập (thậm chí có sửa mã nguồn riêng), nên nhà cung cấp phải lên lịch, kiểm thử tương thích và nâng cấp thủ công từng máy chủ của từng khách hàng, tốn rất nhiều công sức.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn với ưu điểm cập nhật tập trung một lần cho tất cả của mô hình Multi-tenant.",
      "trickWord": "Bẫy thách thức nâng cấp phần mềm riêng lẻ trong Single-tenant",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.2",
      "tip": "Nâng cấp Single-tenant = Phải làm riêng lẻ cho từng khách hàng (rất tốn công)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-022",
    "question": "Hiệu quả kinh tế nhờ quy mô (Economies of Scale) của kiến trúc Multi-tenant được thể hiện rõ nhất ở điểm nào?",
    "options": [
      "Doanh thu của nhà cung cấp bị giảm sút nghiêm trọng do phải chia tiền cho khách hàng",
      "Mỗi khách hàng phải tự mua riêng một máy chủ vật lý mới và gửi vào trung tâm dữ liệu",
      "Chi phí vận hành, bảo trì và bản quyền máy chủ được chia đều cho hàng nghìn người thuê",
      "Hệ thống tự động phát phiếu giảm giá mua hàng siêu thị định kỳ cho nhân viên công ty"
    ],
    "answer": 2,
    "explanation": "Economies of Scale trong Multi-tenant thể hiện ở chỗ: chi phí mua phần cứng máy chủ, hệ thống làm mát, bảo mật và nhân sự vận hành được phân bổ đều cho hàng nghìn khách hàng, giúp giảm chi phí trên mỗi đơn vị người dùng xuống mức cực thấp.",
    "trickDetails": {
      "whyTrapped": "Nhiều người không hiểu rõ khái niệm kinh tế quy mô trong điện toán đám mây.",
      "trickWord": "Bẫy bản chất hiệu quả kinh tế theo quy mô (Economies of Scale)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục III.2",
      "tip": "Economies of Scale = Dùng chung hạ tầng ➔ Chia nhỏ chi phí cho hàng nghìn người thuê."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-023",
    "question": "Theo định nghĩa chuẩn trong giáo trình, khái niệm \"OpenSaaS\" được hiểu chính xác là gì?",
    "options": [
      "Phần mềm SaaS cho phép tất cả mọi người trên thế giới xem lén dữ liệu của nhau",
      "Dịch vụ SaaS được xây dựng và vận hành trên nền tảng các công nghệ mã nguồn mở",
      "Ứng dụng đám mây miễn phí 100% không bao giờ thu bất kỳ khoản phí vận hành nào",
      "Dịch vụ máy chủ vật lý chỉ dành riêng cho các cơ quan nhà nước và tổ chức phi lợi nhuận"
    ],
    "answer": 1,
    "explanation": "OpenSaaS (Open Source Software as a Service) là ứng dụng SaaS được xây dựng hoàn toàn dựa trên các công nghệ mã nguồn mở, kết hợp ưu thế tiện dụng của đám mây và tính minh bạch của mã nguồn mở.",
    "trickDetails": {
      "whyTrapped": "Từ \"Open\" dễ bị suy diễn sai thành mở toang dữ liệu bí mật cho công chúng hoặc miễn phí toàn bộ.",
      "trickWord": "Bẫy định nghĩa bản chất công nghệ của mô hình OpenSaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1",
      "tip": "OpenSaaS = SaaS xây dựng trên nền tảng các công nghệ Mã nguồn mở (Open Source)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-024",
    "question": "3 Tầng công nghệ mở cấu thành nên OpenSaaS Stack theo tài liệu bài giảng bao gồm các thành phần nào?",
    "options": [
      "Nhân viên vận hành mở (Open Staff), Văn phòng mở (Open Office), Cửa ra vào mở (Open Door)",
      "Cáp mạng quang mở (Open Cable), Card đồ họa mở (Open GPU), Chuột máy tính mở (Open Mouse)",
      "Màn hình hiển thị mở (Open Screen), Bàn phím gõ mở (Open Key), Loa phát thanh mở (Open Audio)",
      "Ngôn ngữ lập trình mở (Open Language), Hệ điều hành mở (Open OS), Cơ sở dữ liệu mở (Open DB)"
    ],
    "answer": 3,
    "explanation": "3 Tầng công nghệ mở của OpenSaaS chuẩn giáo trình: (1) Ngôn ngữ lập trình mở (PHP, Python, Java, JS), (2) Hệ điều hành mở (Linux), (3) Cơ sở dữ liệu mở (MySQL, PostgreSQL, MariaDB).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn các tầng phần mềm với các thiết bị ngoại vi phần cứng.",
      "trickWord": "Bẫy 3 Tầng công nghệ mở cấu thành OpenSaaS Stack",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1",
      "tip": "3 tầng OpenSaaS: Open Language + Open OS (Linux) + Open Database (MySQL/PostgreSQL)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-025",
    "question": "Lợi thế chiến lược lớn nhất mà giải pháp OpenSaaS mang lại cho doanh nghiệp là gì?",
    "options": [
      "Không cần có nhân sự am hiểu kỹ thuật CNTT mà hệ thống vẫn tự động vận hành hoàn hảo",
      "Nắm quyền kiểm soát mã nguồn và có thể chuyển đổi hệ thống, tránh hoàn toàn Vendor Lock-in",
      "Được nhà cung cấp cam kết đền bù thiệt hại tài chính không giới hạn nếu xảy ra sự cố",
      "Loại bỏ hoàn toàn yêu cầu phải trả tiền điện và tiền đường truyền mạng hàng tháng"
    ],
    "answer": 1,
    "explanation": "Lợi thế lớn nhất của OpenSaaS là Doanh nghiệp làm chủ mã nguồn và dữ liệu mở (Open Data), có thể tự chuyển đổi sang nhà cung cấp khác hoặc đem về tự host, tránh hoàn toàn rủi ro Vendor Lock-in độc quyền.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là OpenSaaS không cần nhân sự kỹ thuật quản trị hoặc được bảo hiểm không giới hạn.",
      "trickWord": "Bẫy lợi thế cốt lõi chống Vendor Lock-in của mô hình OpenSaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2",
      "tip": "OpenSaaS = Tự chủ mã nguồn + Không bị Vendor Lock-in."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-026",
    "question": "Một quan niệm SAI LẦM phổ biến của người quản lý khi tiếp cận mô hình OpenSaaS là gì?",
    "options": [
      "Nghĩ rằng OpenSaaS hoàn toàn miễn phí và không tốn bất kỳ chi phí hạ tầng hay nhân sự nào",
      "Hiểu rằng OpenSaaS giúp doanh nghiệp linh hoạt trong việc chỉnh sửa tính năng theo nhu cầu",
      "Biết rằng OpenSaaS có thể triển khai trên hạ tầng đám mây công cộng hoặc máy chủ riêng",
      "Nhận thức rõ việc phải chủ động cập nhật các bản vá lỗi bảo mật định kỳ cho phần mềm"
    ],
    "answer": 0,
    "explanation": "Mã nguồn mở miễn phí bản quyền phần mềm nhưng vận hành OpenSaaS vẫn tốn tiền thuê máy chủ đám mây (Cloud hosting), tiền lưu trữ, chi phí mạng và đặc biệt là chi phí lương cho kỹ sư CNTT bảo trì.",
    "trickDetails": {
      "whyTrapped": "Từ \"Mã nguồn mở\" hay bị đánh đồng ngây thơ với việc \"miễn phí 100% mọi chi phí\".",
      "trickWord": "Bẫy ngộ nhận OpenSaaS là miễn phí hoàn toàn không tốn chi phí vận hành",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2",
      "tip": "OpenSaaS: Miễn phí bản quyền code NHƯNG vẫn tốn tiền hạ tầng máy chủ và nhân sự."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-027",
    "question": "Thách thức lớn nhất đối với một doanh nghiệp khi tự triển khai và vận hành OpenSaaS là gì?",
    "options": [
      "Bắt buộc phải trả tiền bản quyền phần mềm đóng gói cho các tập đoàn công nghệ lớn",
      "Không thể cài đặt phần mềm lên hệ điều hành Linux phổ biến trong các trung tâm dữ liệu",
      "Bị cấm hoàn toàn việc kết nối với mạng Internet công cộng theo luật sở hữu trí tuệ",
      "Hạn chế về hỗ trợ kỹ thuật chính thức và đòi hỏi đội ngũ nội bộ có chuyên môn cao"
    ],
    "answer": 3,
    "explanation": "2 nhược điểm/thách thức lớn của OpenSaaS trong giáo trình: Hỗ trợ kỹ thuật hạn chế (không có đường dây nóng 24/7 từ hãng lớn) và Rủi ro bảo mật nếu đội ngũ nội bộ không kịp thời vá các lỗ hổng đã công bố.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay tưởng mã nguồn mở bị hạn chế về hệ điều hành hoặc bị cấm kết nối mạng.",
      "trickWord": "Bẫy 2 thách thức lớn của OpenSaaS: Hỗ trợ kỹ thuật và Chuyên môn nội bộ",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2",
      "tip": "Thách thức OpenSaaS = Hạn chế hỗ trợ chính thức + Cần kỹ sư nội bộ giỏi để tự vá lỗi."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-028",
    "question": "Tập hợp nào dưới đây phản ánh ĐÚNG 3 nền tảng OpenSaaS tiêu biểu được nêu rõ trong bài giảng?",
    "options": [
      "Adobe Photoshop (Chỉnh sửa ảnh), Illustrator (Vẽ vector đồ họa), Premiere (Dựng video)",
      "Microsoft Word (Soạn thảo văn bản), Excel (Bảng tính dữ liệu), PowerPoint (Trình chiếu)",
      "WordPress.com (CMS nội dung), Magento (Thương mại điện tử), Moodle (Quản lý học tập LMS)",
      "Oracle Database (Cơ sở dữ liệu), SAP ERP (Hệ thống doanh nghiệp), IBM WebSphere (Máy chủ)"
    ],
    "answer": 2,
    "explanation": "3 điển hình OpenSaaS chuẩn bài giảng: (1) WordPress.com (Blog & Web CMS), (2) Magento (E-commerce Platform), (3) Moodle (Learning Management System - LMS).",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn với các bộ phần mềm đóng gói thương mại độc quyền nổi tiếng của Microsoft, Adobe hoặc SAP.",
      "trickWord": "Bẫy nhận diện 3 nền tảng OpenSaaS chuẩn giáo trình",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2",
      "tip": "3 nền tảng OpenSaaS giáo trình = WordPress.com + Magento + Moodle."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-029",
    "question": "Khi một doanh nghiệp muốn di chuyển (Migrate) từ OpenSaaS về máy chủ nội bộ (On-Premise), họ có lợi thế gì?",
    "options": [
      "Dễ dàng xuất toàn bộ mã nguồn và cơ sở dữ liệu mở để triển khai lại mà không bị ngăn cản",
      "Được nhà cung cấp tặng miễn phí toàn bộ dàn máy chủ vật lý đang lưu trữ dữ liệu đó",
      "Không cần cài đặt lại cơ sở dữ liệu mà dữ liệu tự truyền qua không khí về trụ sở công ty",
      "Tốc độ xử lý của phần mềm sẽ tự động tăng lên gấp mười lần mà không cần cấu hình thêm"
    ],
    "answer": 0,
    "explanation": "Do OpenSaaS dùng công nghệ mở (mã nguồn mở và chuẩn CSDL mở như MySQL/PostgreSQL), doanh nghiệp hoàn toàn tự do xuất dữ liệu và sao chép mã nguồn về tự host mà không gặp rào cản độc quyền nào.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các phương án phi lý như được tặng máy chủ vật lý hoặc tự truyền qua không khí.",
      "trickWord": "Bẫy khả năng tự do di chuyển (Data & Code Portability) của OpenSaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2",
      "tip": "OpenSaaS = Toàn quyền trích xuất mã nguồn và dữ liệu về tự host bất cứ lúc nào."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-030",
    "question": "Định nghĩa chuẩn học thuật của công nghệ Mashup trong điện toán đám mây là gì?",
    "options": [
      "Kỹ thuật nén nhiều tệp tin video và âm thanh lại thành một định dạng duy nhất trên đĩa cứng",
      "Quá trình tích hợp nhiều dịch vụ và dữ liệu từ nhiều nguồn để tạo ra ứng dụng mới hoàn chỉnh",
      "Phương pháp trộn nhiều loại dây cáp mạng vật lý lại với nhau để tăng băng thông truyền dẫn",
      "Phần mềm chuyên dụng dùng để diệt trừ tất cả các loại virus máy tính lây lan qua đường mạng"
    ],
    "answer": 1,
    "explanation": "Mashup là kỹ thuật kết hợp dữ liệu, chức năng hoặc dịch vụ từ hai hay nhiều nguồn khác nhau (thông qua API) để tạo ra một ứng dụng hoặc dịch vụ mới độc đáo và giàu tính năng.",
    "trickDetails": {
      "whyTrapped": "Thuật ngữ \"Mashup\" xuất phát từ việc trộn bài hát trong âm nhạc, dễ bị nhầm sang kỹ thuật nén âm thanh hoặc trộn cáp mạng.",
      "trickWord": "Bẫy định nghĩa chuẩn công nghệ tích hợp dịch vụ Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.1",
      "tip": "Mashup = Tích hợp nhiều API/dịch vụ từ các nguồn khác nhau thành 1 ứng dụng mới."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-031",
    "question": "Đặc điểm vận hành cốt lõi của phương pháp Web-based Mashup (Client-side) là gì?",
    "options": [
      "Chỉ hoạt động được khi máy tính của người dùng được ngắt kết nối hoàn toàn khỏi Internet",
      "Máy chủ của nhà cung cấp tự gom dữ liệu, xử lý hoàn tất rồi mới gửi giao diện về máy trạm",
      "Bắt buộc người dùng phải cài đặt thêm phần mềm máy chủ chuyên dụng lên máy tính cá nhân",
      "Trình duyệt người dùng (qua JavaScript) trực tiếp gọi các API và kết hợp hiển thị nội dung"
    ],
    "answer": 3,
    "explanation": "Trong Web-based Mashup (Client-side), trình duyệt web của người dùng thực thi các đoạn mã kịch bản (JavaScript) để gửi yêu cầu trực tiếp đến các API bên ngoài và tổng hợp kết quả hiển thị ngay trên trang web.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa Web-based (trình duyệt thực hiện) và Server-based (máy chủ thực hiện).",
      "trickWord": "Bẫy cơ chế xử lý Client-side tại trình duyệt của Web-based Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.1",
      "tip": "Web-based Mashup = Trình duyệt (Client JS) tự gọi API và ghép nội dung hiển thị."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-032",
    "question": "Ưu điểm vượt trội của phương pháp Server-based Mashup so với Web-based Mashup là gì?",
    "options": [
      "Không tốn chi phí đầu tư hạ tầng máy chủ và bất kỳ ai cũng có thể tự xây dựng được ngay",
      "Hoàn toàn không cần máy chủ xử lý mà dựa hoàn toàn vào bộ vi xử lý của điện thoại di động",
      "Quản lý dữ liệu tốt hơn, hiệu năng xử lý cao hơn và bảo vệ an toàn tuyệt đối các khóa API",
      "Không bị ảnh hưởng nếu các API của bên thứ ba bị sập hoặc thay đổi cấu trúc dữ liệu trả về"
    ],
    "answer": 2,
    "explanation": "Server-based Mashup xử lý tích hợp tại Backend nên bảo vệ được bí mật API keys, kiểm soát dữ liệu chặt chẽ, tối ưu bộ nhớ đệm (caching) và cho hiệu năng cao hơn mà không phụ thuộc vào sức mạnh của trình duyệt người dùng.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là Server-based không tốn chi phí máy chủ hoặc không bị phụ thuộc vào API bên thứ ba.",
      "trickWord": "Bẫy ưu điểm vượt trội về an ninh và hiệu năng của Server-based Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.1",
      "tip": "Server-based Mashup = Máy chủ xử lý ➔ Bảo vệ API Key + Hiệu năng cao + Kiểm soát dữ liệu tốt."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-033",
    "question": "Về mặt an ninh mạng, rủi ro lớn nhất khi sử dụng Web-based Mashup là gì?",
    "options": [
      "Bàn phím của máy tính người dùng sẽ bị vô hiệu hóa chức năng nhập liệu các ký tự số học",
      "Máy chủ trung tâm của nhà cung cấp đám mây sẽ tự động bị nhiễm mã độc tống tiền nguy hiểm",
      "Khóa bảo mật (API Key) và logic tích hợp bị lộ công khai trên mã nguồn chạy ở trình duyệt",
      "Trình duyệt web sẽ tự động xóa sạch toàn bộ lịch sử duyệt web và các dấu trang đã lưu trữ"
    ],
    "answer": 2,
    "explanation": "Vì toàn bộ mã JavaScript chạy công khai trên trình duyệt của người dùng, nên các mã định danh bí mật, API key và logic nghiệp vụ tích hợp đều có thể bị xem trộm và khai thác trái phép qua công cụ F12 (Inspect).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các nguy cơ virus máy chủ hoặc hỏng bàn phím thay vì nguy cơ lộ API Key trên mã Client.",
      "trickWord": "Bẫy rủi ro lộ bí mật API Key và Token trên Client-side Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.2",
      "tip": "Rủi ro Web-based Mashup = Lộ API Key trên mã nguồn JavaScript của trình duyệt."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-034",
    "question": "Ứng dụng gọi xe GoRide kết hợp Google Maps, OpenWeatherMap và VNPay là ví dụ điển hình cho công nghệ gì?",
    "options": [
      "Công nghệ tích hợp dịch vụ Mashup nhằm tạo ra ứng dụng tổng hợp giá trị gia tăng mới",
      "Mô hình mạng ngang hàng phân tán (P2P) dùng để chia sẻ các tệp tin âm nhạc dung lượng lớn",
      "Kiến trúc hệ thống máy tính lớn Mainframe truyền thống không kết nối với mạng Internet",
      "Phần mềm diệt mã độc chạy độc lập trên máy tính trạm mà không cần kết nối dữ liệu máy chủ"
    ],
    "answer": 0,
    "explanation": "GoRide là ví dụ kinh điển trong giáo trình về công nghệ Mashup: kết hợp Google Maps (bản đồ định vị), OpenWeatherMap (dữ liệu thời tiết) và VNPay (cổng thanh toán) thành một ứng dụng dịch vụ hoàn chỉnh.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là mô hình mạng ngang hàng P2P hoặc phần mềm đơn lẻ cài cục bộ.",
      "trickWord": "Bẫy trường hợp điển hình ứng dụng GoRide sử dụng công nghệ Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.1",
      "tip": "GoRide kết hợp Bản đồ + Thời tiết + Thanh toán = Ví dụ điển hình của Mashup."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-035",
    "question": "Theo tài liệu bài giảng, hai công cụ chuẩn hóa hỗ trợ xây dựng ứng dụng Mashup là gì?",
    "options": [
      "Bộ đôi phần mềm đồ họa Adobe Photoshop và ứng dụng chỉnh sửa âm thanh Audacity",
      "Ngôn ngữ đặc tả EMML (Enterprise Mashup Markup Language) và nền tảng OpenMashup",
      "Hệ điều hành Windows 11 và bộ công cụ văn phòng Microsoft Office phiên bản 365",
      "Trình duyệt web Google Chrome và công cụ tìm kiếm dữ liệu trực tuyến Bing Search"
    ],
    "answer": 1,
    "explanation": "Giáo trình nêu rõ 2 công cụ/chuẩn hỗ trợ Mashup: EMML (Enterprise Mashup Markup Language - ngôn ngữ đánh dấu dạng XML để đặc tả luồng Mashup) và nền tảng OpenMashup.",
    "trickDetails": {
      "whyTrapped": "Thí sinh ít chú ý đến tên chuẩn học thuật EMML và OpenMashup mà hay chọn các phần mềm văn phòng quen thuộc.",
      "trickWord": "Bẫy 2 công cụ hỗ trợ Mashup chuẩn hóa: EMML và OpenMashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.2",
      "tip": "Công cụ Mashup trong giáo trình = EMML + OpenMashup."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-036",
    "question": "Thách thức kỹ thuật nào dưới đây là MỐI NGUY HIỂM TIỀM ẨN LỚN NHẤT đối với ứng dụng Mashup?",
    "options": [
      "Không thể hiển thị hình ảnh đồ họa màu sắc mà chỉ xuất ra các dòng văn bản đơn sắc cũ",
      "Dung lượng bộ nhớ RAM của máy chủ đám mây bị tiêu hao hết ngay sau một phút khởi động",
      "Người dùng bắt buộc phải biết lập trình ngôn ngữ máy thì mới có thể sử dụng được ứng dụng",
      "Sự cố sập dịch vụ hoặc thay đổi cấu trúc API từ bên thứ ba sẽ làm hỏng ứng dụng tích hợp"
    ],
    "answer": 3,
    "explanation": "Vì Mashup phụ thuộc hoàn toàn vào các API bên ngoài, nếu đối tác thứ ba bất ngờ thay đổi cấu trúc dữ liệu JSON/XML, thay đổi URL endpoint hoặc ngừng cung cấp dịch vụ, ứng dụng Mashup sẽ sụp đổ ngay lập tức.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là ứng dụng Mashup làm tràn bộ nhớ RAM hoặc người dùng phải biết lập trình máy.",
      "trickWord": "Bẫy sự phụ thuộc sinh tử vào tính ổn định của API bên thứ ba trong Mashup",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục V.2",
      "tip": "Nguy cơ lớn nhất của Mashup = Bên thứ ba đổi API hoặc sập dịch vụ làm hỏng ứng dụng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-037",
    "question": "Tập hợp nào dưới đây phản ánh ĐẦY ĐỦ 3 đặc điểm cốt lõi của Kiến trúc Hướng Dịch vụ (SOA)?",
    "options": [
      "Tính độc quyền mã nguồn, Giao tiếp ngoại tuyến, Khả năng khóa chặt phần cứng",
      "Tính module hóa (Modularity), Giao tiếp qua mạng, Khả năng tích hợp mạnh mẽ",
      "Tính đơn khối nguyên khối, Giao tiếp nội bộ, Khả năng cách ly mạng hoàn toàn",
      "Tính tự do không kiểm soát, Giao tiếp thủ công, Khả năng triệt tiêu liên kết"
    ],
    "answer": 1,
    "explanation": "3 đặc điểm kiến trúc cốt lõi của SOA trong giáo trình gồm: (1) Tính module hóa (Modularity), (2) Giao tiếp qua mạng (Network communication), (3) Khả năng tích hợp mạnh mẽ (Integration capability).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các đặc tính của kiến trúc phần mềm nguyên khối Monolithic (nguyên khối, cục bộ).",
      "trickWord": "Bẫy 3 đặc tính cốt lõi của Service-Oriented Architecture (SOA)",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1",
      "tip": "3 đặc điểm SOA = Modularity (Module hóa) + Network Communication + Integration Capability."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-038",
    "question": "Nguyên lý \"Ràng buộc lỏng lẻo\" (Loose Coupling) trong kiến trúc SOA mang lại lợi ích kỹ thuật cốt lõi gì?",
    "options": [
      "Bắt buộc các máy chủ cung cấp dịch vụ phải được đặt chung trong cùng một phòng máy tính",
      "Mọi dịch vụ bắt buộc phải được viết bằng cùng một ngôn ngữ lập trình duy nhất trên đời",
      "Nếu một dịch vụ gặp lỗi thì toàn bộ hệ thống ứng dụng sẽ tự động ngừng hoạt động ngay",
      "Các dịch vụ giao tiếp qua chuẩn chung, thay đổi nội bộ bên này không làm sập bên khác"
    ],
    "answer": 3,
    "explanation": "Loose Coupling đảm bảo các dịch vụ hoàn toàn độc lập về công nghệ triển khai, ngôn ngữ lập trình và hệ điều hành. Chúng chỉ giao tiếp qua hợp đồng giao diện chuẩn (Interface Contract), giúp giảm thiểu sự phụ thuộc chéo.",
    "trickDetails": {
      "whyTrapped": "Học viên dễ nhầm với nguyên lý Ràng buộc chặt (Tight Coupling) - bắt buộc cùng ngôn ngữ và phụ thuộc cứng.",
      "trickWord": "Bẫy bản chất nguyên lý Ràng buộc lỏng lẻo (Loose Coupling) trong SOA",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1",
      "tip": "Loose Coupling = Giao tiếp qua giao diện chuẩn, độc lập công nghệ, sửa bên này không ảnh hưởng bên kia."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-039",
    "question": "3 thành phần cấu tạo nên \"Tam giác tương tác SOA\" kinh điển trong giáo trình bao gồm những ai?",
    "options": [
      "Service Provider (Nhà cung cấp), Service Broker (Môi giới), Service Consumer (Tiêu thụ)",
      "Cloud Hardware (Phần cứng), Cloud Operator (Vận hành), Cloud Security (Bảo mật mạng)",
      "Database Admin (Quản trị DB), System Admin (Quản trị hệ thống), End-user (Người dùng)",
      "Software Coder (Lập trình viên), Software Tester (Kiểm thử viên), Project Manager (PM)"
    ],
    "answer": 0,
    "explanation": "Tam giác tương tác chuẩn của SOA gồm đúng 3 vai trò: Service Provider (bên tạo và cung cấp dịch vụ), Service Broker / Registry (bên lưu danh mục đăng bạ dịch vụ) và Service Consumer / Requestor (bên tìm và sử dụng dịch vụ).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm với vai trò các chức danh nhân sự trong dự án phần mềm hoặc các tầng hạ tầng.",
      "trickWord": "Bẫy 3 vai trò cấu thành Tam giác tương tác SOA chuẩn học thuật",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2",
      "tip": "Tam giác SOA = Service Provider (Cung cấp) + Service Broker (Môi giới) + Service Consumer (Tiêu thụ)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-040",
    "question": "Thứ tự thực hiện chuẩn xác của 3 thao tác cơ bản trong Tam giác tương tác SOA là gì?",
    "options": [
      "Bind (Liên kết thực thi) ➔ Find (Người dùng tìm kiếm) ➔ Publish (Nhà cung cấp xuất bản)",
      "Find (Người dùng tìm kiếm) ➔ Publish (Nhà cung cấp xuất bản) ➔ Bind (Liên kết thực thi)",
      "Publish (Nhà cung cấp xuất bản) ➔ Find (Người dùng tìm kiếm) ➔ Bind (Liên kết thực thi)",
      "Publish (Nhà cung cấp xuất bản) ➔ Bind (Liên kết thực thi) ➔ Find (Người dùng tìm kiếm)"
    ],
    "answer": 2,
    "explanation": "Quy trình hoạt động tuần tự trong tam giác SOA: (1) Provider gọi thao tác Publish để đăng ký dịch vụ lên Broker ➔ (2) Consumer gọi thao tác Find để tìm dịch vụ trên Broker ➔ (3) Consumer gọi thao tác Bind để liên kết và thực thi trực tiếp với Provider.",
    "trickDetails": {
      "whyTrapped": "Bẫy đảo lộn trật tự logic: Chưa có dịch vụ đã đi tìm (Find trước Publish) hoặc chưa tìm thấy đã kết nối (Bind trước Find).",
      "trickWord": "Bẫy trật tự logic tuần tự của 3 thao tác Publish -> Find -> Bind trong SOA",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2",
      "tip": "Trật tự SOA: Publish (Đăng bán) ➔ Find (Tìm mua) ➔ Bind (Ký hợp đồng & Thực thi)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-041",
    "question": "Trong tam giác SOA, vai trò kỹ thuật chính của thành phần Service Broker (hoặc Service Registry) là gì?",
    "options": [
      "Đóng vai trò danh bạ trung gian lưu trữ thông tin và đặc tả dịch vụ để người dùng tra cứu",
      "Trực tiếp thực thi mã nguồn thuật toán và lưu trữ toàn bộ cơ sở dữ liệu của ứng dụng đó",
      "Thu phí trung gian bằng tiền mặt từ người dùng trước khi cho phép họ bật máy tính lên xem",
      "Cung cấp đường truyền cáp quang vật lý kết nối từ nhà khách hàng đến trung tâm dữ liệu"
    ],
    "answer": 0,
    "explanation": "Service Broker (hoặc Service Registry, chuẩn UDDI) là cuốn danh bạ điện tử chứa thông tin mô tả kỹ thuật (thường qua tài liệu WSDL) về các dịch vụ đã xuất bản, giúp Consumer dễ dàng tìm kiếm và lấy địa chỉ endpoint để kết nối.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm Service Broker trực tiếp xử lý dữ liệu và thực thi logic của dịch vụ.",
      "trickWord": "Bẫy vai trò danh bạ trung gian lưu trữ đặc tả của Service Broker",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2",
      "tip": "Service Broker = Cuốn danh bạ tra cứu dịch vụ, không trực tiếp chạy mã nguồn."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-042",
    "question": "Hai hệ sinh thái đám mây tiêu biểu nhất áp dụng kiến trúc SOA ở quy mô khổng lồ được nêu trong bài giảng là gì?",
    "options": [
      "Mạng xã hội Facebook và ứng dụng chia sẻ hình ảnh Instagram",
      "Amazon Web Services (AWS) và nền tảng đám mây Microsoft Azure",
      "Hệ điều hành Windows XP và trình duyệt cổ điển Internet Explorer",
      "Bộ công cụ văn phòng LibreOffice và trình đọc văn bản Adobe Reader"
    ],
    "answer": 1,
    "explanation": "AWS và Microsoft Azure là hai ví dụ minh họa kinh điển trong giáo trình về việc triển khai kiến trúc SOA trên quy mô toàn cầu, cung cấp hàng trăm dịch vụ chuyên biệt giao tiếp lỏng lẻo với nhau qua API chuẩn.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các ứng dụng mạng xã hội hoặc phần mềm văn phòng độc lập cục bộ.",
      "trickWord": "Bẫy 2 ví dụ minh họa thực tiễn chuẩn giáo trình của kiến trúc SOA",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2",
      "tip": "2 ví dụ thực tiễn SOA quy mô toàn cầu trong bài giảng = AWS và Microsoft Azure."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-043",
    "question": "Đánh đổi kỹ thuật (Trade-off) lớn nhất khi một doanh nghiệp áp dụng kiến trúc SOA phân tán là gì?",
    "options": [
      "Bắt buộc toàn bộ hệ thống phần mềm phải dừng hoạt động nếu thêm một dịch vụ mới vào cụm",
      "Không thể mở rộng quy mô hệ thống khi lượng người dùng đăng ký dịch vụ tăng đột biến lên",
      "Tăng độ phức tạp quản trị hệ thống và phát sinh độ trễ truyền thông liên dịch vụ qua mạng",
      "Làm mất hoàn toàn khả năng tái sử dụng các đoạn mã nguồn và thành phần logic nghiệp vụ"
    ],
    "answer": 2,
    "explanation": "Mặc dù SOA tăng tính module và tái sử dụng, nhưng nhược điểm bản chất là độ phức tạp quản trị hệ thống tăng vọt, và việc các dịch vụ liên tục gọi nhau qua mạng sẽ sinh ra độ trễ (Network latency overhead) lớn hơn nhiều so với gọi hàm nội bộ.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn sai các đặc tính mà SOA giải quyết rất tốt như tính mở rộng hay tính tái sử dụng.",
      "trickWord": "Bẫy nhược điểm về độ phức tạp quản trị và độ trễ mạng trong SOA",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1",
      "tip": "Đánh đổi SOA = Độ phức tạp quản trị cao + Độ trễ truyền thông mạng giữa các dịch vụ."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-044",
    "question": "Salesforce được tôn vinh là ngọn cờ đầu của ngành công nghiệp SaaS nhờ sự kiện lịch sử đột phá nào?",
    "options": [
      "Sản xuất thành công dòng vi xử lý máy tính tốc độ cao cạnh tranh với tập đoàn Intel",
      "Phát minh ra máy tính lớn Mainframe đầu tiên trên thế giới phục vụ quân đội Hoa Kỳ",
      "Công ty đầu tiên thương mại hóa thành công hệ điều hành mã nguồn đóng cho máy tính bàn",
      "Tiên phong khẩu hiệu \"No Software\" (1999) và cung cấp phần mềm CRM qua trình duyệt web"
    ],
    "answer": 3,
    "explanation": "Năm 1999, cựu giám đốc điều hành Oracle - Marc Benioff thành lập Salesforce với khẩu hiệu lịch sử \"The End of Software / No Software\", mở ra kỷ nguyên cung cấp phần mềm quản trị quan hệ khách hàng (CRM) hoàn toàn qua trình duyệt web.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm Salesforce là hãng sản xuất vi xử lý phần cứng hoặc hệ điều hành desktop.",
      "trickWord": "Bẫy sự kiện lịch sử và khẩu hiệu No Software của Salesforce năm 1999",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.1",
      "tip": "Salesforce = Tiên phong khẩu hiệu No Software (1999), đưa CRM lên nền web."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-045",
    "question": "Đặc điểm kiến trúc nổi bật nhất của bộ ứng dụng Google Workspace (Docs, Sheets, Drive) là gì?",
    "options": [
      "Bắt buộc người dùng phải cài đặt phần mềm nặng hàng chục Gigabyte vào ổ cứng máy tính cá nhân",
      "Khả năng đồng bộ hóa tức thời và hỗ trợ nhiều người cùng cộng tác trên một tài liệu trực tuyến",
      "Mỗi người dùng phải lưu trữ tài liệu trên một đĩa mềm riêng biệt rồi gửi bưu điện cho nhau",
      "Chỉ cho phép một người xem tài liệu tại một thời điểm và khóa hoàn toàn các tài khoản khác"
    ],
    "answer": 1,
    "explanation": "Google Workspace (tiền thân là Google Apps) là điển hình kinh điển của SaaS hợp tác văn phòng trực tuyến, cho phép hàng triệu người dùng soạn thảo văn bản, bảng tính với khả năng tự động lưu và đồng bộ tức thời trên trình duyệt web.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn với các bộ phần mềm Office đóng gói truyền thống đòi hỏi dung lượng ổ cứng lớn.",
      "trickWord": "Bẫy đặc trưng kiến trúc cộng tác trực tuyến của Google Workspace",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.1",
      "tip": "Google Workspace = Điển hình SaaS văn phòng, đồng bộ tức thời, cộng tác thời gian thực."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-046",
    "question": "Tập hợp nào dưới đây phản ánh ĐẦY ĐỦ 4 biện pháp kỹ thuật bảo mật cốt lõi trong SaaS theo giáo trình?",
    "options": [
      "Mã hóa dữ liệu, Quản lý truy cập IAM/MFA, Cô lập dữ liệu người thuê, Tuân thủ tiêu chuẩn và SLA",
      "Cài phần mềm diệt virus máy trạm, Rút dây mạng khi không dùng, Đặt mật khẩu ngắn, Tắt máy tính",
      "Mua thêm bảo hiểm cháy nổ, Thuê bảo vệ trực cổng, Lắp thêm camera phòng máy, Khóa cửa sổ lại",
      "In toàn bộ dữ liệu ra giấy, Cất giữ trong két sắt, Không chia sẻ cho nhân viên, Xóa sạch tệp"
    ],
    "answer": 0,
    "explanation": "4 biện pháp an ninh cốt lõi trong giáo trình gồm: (1) Data Encryption (Mã hóa lưu trữ & đường truyền), (2) Identity & Access Management (IAM, MFA, SSO), (3) Tenant Isolation (Cô lập dữ liệu người thuê), (4) Compliance & SLA (Tuân thủ ISO 27001, SOC 2, GDPR).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn các biện pháp an ninh vật lý phòng máy hoặc an ninh máy trạm cá nhân thông thường.",
      "trickWord": "Bẫy 4 biện pháp kỹ thuật bảo mật cốt lõi trong SaaS chuẩn giáo trình",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.2",
      "tip": "4 biện pháp bảo mật SaaS = Mã hóa + IAM/MFA + Cô lập dữ liệu + Tuân thủ tiêu chuẩn/SLA."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-047",
    "question": "Hai thách thức bảo mật lớn nhất (Security Challenges) trong SaaS được nêu rõ trong bài giảng là gì?",
    "options": [
      "Nhiệt độ phòng làm việc của nhân viên quá lạnh và Hiện tượng mất sóng điện thoại di động tạm thời",
      "Chi phí mua dây điện kết nối máy chủ và Tiền lương trả cho nhân viên vệ sinh quét dọn phòng máy",
      "Nguy cơ bị mất trộm màn hình máy tính tại văn phòng và Hỏng bàn phím do gõ văn bản quá nhiều lần",
      "Quản lý dữ liệu phân tán trên đám mây (Cloud Data Management) và Kiểm soát truy cập (Access Control)"
    ],
    "answer": 3,
    "explanation": "Bài giảng chỉ rõ 2 thách thức bảo mật lớn khi triển khai SaaS: (1) Cloud Data Management (quản lý, giám sát và đảm bảo toàn vẹn dữ liệu phân tán trên nhiều trung tâm dữ liệu) và (2) Access Control (kiểm soát đặc quyền và cấp quyền người dùng chính xác).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay bị xao nhãng bởi các vấn đề chi phí linh tinh hoặc sự cố thiết bị ngoại vi.",
      "trickWord": "Bẫy 2 thách thức an ninh lớn nhất trong SaaS: Cloud Data Management & Access Control",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.2",
      "tip": "2 thách thức bảo mật SaaS = Quản lý dữ liệu đám mây (Data Management) + Kiểm soát truy cập (Access Control)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-048",
    "question": "Xu hướng hội tụ của Trí tuệ Nhân tạo (AI & Machine Learning) trong các dịch vụ SaaS tương lai mang lại giá trị gì?",
    "options": [
      "Tự động xóa bỏ tất cả các điều khoản trong hợp đồng kinh tế nếu doanh nghiệp không có lãi cao",
      "Thay thế hoàn toàn 100% tất cả người lao động trên toàn cầu bằng các robot cơ khí tự hành độc lập",
      "Tự động hóa quy trình nghiệp vụ thông minh, phân tích dự đoán và cá nhân hóa trải nghiệm khách hàng",
      "Bắt buộc người dùng phải nạp tiền xu vào khe máy tính thì mới cho phép khởi chạy ứng dụng phần mềm"
    ],
    "answer": 2,
    "explanation": "AI-driven SaaS tích hợp các mô hình học máy trực tiếp vào luồng nghiệp vụ để phân tích dự đoán hành vi khách hàng, tự động hóa xử lý văn bản, phát hiện bất thường và đưa ra gợi ý thông minh thời gian thực.",
    "trickDetails": {
      "whyTrapped": "Dễ bị bẫy bởi các quan điểm viễn tưởng thái quá (thay thế 100% loài người) hoặc cơ chế thu phí phi lý.",
      "trickWord": "Bẫy giá trị cốt lõi của xu hướng tích hợp AI/Machine Learning trong SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.3",
      "tip": "AI trong SaaS = Tự động hóa thông minh + Phân tích dự đoán (Predictive Analytics) + Cá nhân hóa."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-049",
    "question": "Sự kết hợp giữa Internet vạn vật (IoT) và mô hình SaaS mở ra tiềm năng ứng dụng đột phá nào?",
    "options": [
      "Tiếp nhận, xử lý và phân tích tức thời luồng dữ liệu khổng lồ từ hàng triệu thiết bị cảm biến thông minh",
      "Tự động biến tất cả các đồ gia dụng cơ khí trong gia đình thành các siêu máy tính để bàn thế hệ mới",
      "Làm giảm tốc độ truyền tải thông tin của các vệ tinh viễn thông bay trên quỹ đạo thấp của Trái Đất",
      "Buộc người dùng phải mang tất cả các thiết bị điện tử đến trung tâm dữ liệu để cắm sạc điện thoại"
    ],
    "answer": 0,
    "explanation": "IoT-enabled SaaS cho phép các nền tảng đám mây thu thập, phân tích và trực quan hóa luồng dữ liệu vi mô thời gian thực từ hàng triệu cảm biến trong các nhà máy thông minh, chuỗi cung ứng lạnh và thành phố thông minh.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ IoT là biến đồ gia dụng thành siêu máy tính thay vì tập trung vào năng lực xử lý luồng dữ liệu cảm biến.",
      "trickWord": "Bẫy tiềm năng xử lý dữ liệu cảm biến thời gian thực của IoT trong SaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.3",
      "tip": "IoT + SaaS = Nền tảng tiếp nhận và phân tích tức thời luồng dữ liệu hàng triệu cảm biến."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c3-d1-050",
    "question": "Công nghệ Chuỗi khối (Blockchain) được dự báo sẽ giải quyết bài toán cốt tử nào cho các dịch vụ SaaS tương lai?",
    "options": [
      "Tự động biến toàn bộ dữ liệu văn bản của khách hàng thành các đồng tiền mã hóa để đem đi bán đấu giá",
      "Tăng cường tính minh bạch, bất biến của dữ liệu giao dịch và tự động hóa qua hợp đồng thông minh",
      "Giúp người dùng không cần trả tiền thuê bao dịch vụ hàng tháng mà nhà cung cấp vẫn phải phục vụ mãi",
      "Làm cho máy chủ đám mây không cần sử dụng nguồn điện lưới mà tự phát sinh ra năng lượng hoạt động"
    ],
    "answer": 1,
    "explanation": "Blockchain mang lại sổ cái phân tán bất biến (Immutable ledger) và hợp đồng thông minh (Smart contracts), giúp các nền tảng SaaS xác thực giao dịch minh bạch, chống gian lận dữ liệu và tự động kích hoạt điều khoản hợp đồng SLA.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay liên tưởng Blockchain chỉ với việc đầu cơ tiền ảo hoặc nghĩ rằng blockchain giúp xài dịch vụ miễn phí.",
      "trickWord": "Bẫy giá trị của công nghệ Blockchain trong việc đảm bảo tính bất biến và minh bạch",
      "citation": "Giáo trình Điện toán đám mây — Chương 3, Mục VII.3",
      "tip": "Blockchain trong SaaS = Minh bạch, bất biến dữ liệu giao dịch + Smart Contracts tự động hóa."
    },
    "difficulty": "hard",
    "isTrick": true
  }
];
