// Ngân hàng câu hỏi Bẫy tư duy - Chương 2: Hạ tầng và Công nghệ Điện toán đám mây
// Mã đề: cloud-c2-d1 | 50 câu Vận dụng cao | 100% có trickDetails | Delta L <= 15

export const questionsCloudCh2Trick1 = [
  {
    "id": "cloud-c2-d1-001",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-2-pod",
    "question": "Trật tự phân cấp cấu trúc phần cứng vật lý trong Data Center từ quy mô nhỏ đến lớn là gì?",
    "options": [
      "Server ➔ Giá đỡ (Rack) ➔ Cụm phân phối (PoD) ➔ Data Center",
      "Server ➔ Cụm phân phối (PoD) ➔ Giá đỡ (Rack) ➔ Data Center",
      "Data Center ➔ Cụm phân phối (PoD) ➔ Giá đỡ (Rack) ➔ Server",
      "Giá đỡ (Rack) ➔ Server ➔ Cụm phân phối (PoD) ➔ Data Center"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Cấu trúc chuẩn từ nhỏ đến lớn: Nhiều máy chủ (Server) nằm trong Rack ➔ Nhiều Rack kèm hệ thống hỗ trợ tạo thành PoD (Point of Delivery) ➔ Toàn bộ PoD tạo nên Data Center.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn trật tự giữa Rack (tủ đơn lẻ) và PoD (cụm gồm nhiều tủ rack kết hợp hạ tầng phụ trợ).",
      "trickWord": "Bẫy đảo vị trí giữa Rack và PoD trong cấu trúc phân cấp",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.2",
      "tip": "Nhớ thứ tự từ nhỏ đến lớn: Server ➔ Rack ➔ PoD ➔ Data Center."
    }
  },
  {
    "id": "cloud-c2-d1-002",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-2-pod",
    "question": "Bản chất kiến trúc của cụm PoD (Point of Delivery) trong trung tâm dữ liệu hiện đại là gì?",
    "options": [
      "Hệ điều hành quản trị tập trung toàn bộ máy ảo của khách hàng",
      "Tên gọi của thiết bị chuyển mạch mạng đặt trên nóc của mỗi rack",
      "Khối module hóa khép kín gồm nhiều rack kèm hệ thống hỗ trợ",
      "Hệ thống dây cáp quang kết nối các thành phố lớn trên thế giới"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Một PoD (Point of Delivery) là khối module hóa hoàn chỉnh gồm nhiều rack máy chủ kết hợp với trọn bộ hệ thống điện (PDS, UPS), làm mát (RowCool) và quản lý (DCIM) để nhân bản mở rộng nhanh chóng.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm PoD là tên một loại thiết bị chuyển mạch (switch) hoặc phần mềm hệ điều hành.",
      "trickWord": "Bẫy định nghĩa cụm PoD là khối module hóa phần cứng khép kín",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.2",
      "tip": "PoD = Khối module khép kín (nhiều rack + điện + làm mát + DCIM)."
    }
  },
  {
    "id": "cloud-c2-d1-003",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-2-pod",
    "question": "Tập hợp nào dưới đây phản ánh ĐẦY ĐỦ 5 hệ thống hỗ trợ tích hợp bên trong một cụm PoD tiêu chuẩn?",
    "options": [
      "Hệ thống PDS, màn hình tivi giám sát, máy lạnh dân dụng, tủ rack",
      "Hệ thống PDS, bộ lưu điện Modular UPS, DCIM, RowCool, vách ngăn",
      "Bộ phát WiFi tốc độ cao, máy phát điện chạy xăng, máy in, switch",
      "Bộ lưu điện ắc quy rời, hệ thống quạt trần, cáp đồng trục, switch"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "5 hệ thống hỗ trợ chuẩn trong PoD: Power Distribution System (PDS), Modular UPS, DCIM (InfraSuite Manager), RowCool và Cold/Hot Aisle Containment.",
    "trickDetails": {
      "whyTrapped": "Các phương án gây nhiễu đưa vào các thiết bị văn phòng thông thường (WiFi, máy in, quạt trần dân dụng).",
      "trickWord": "Bẫy 5 thành phần hạ tầng chuẩn công nghiệp của PoD",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.2",
      "tip": "PoD = PDS (điện) + UPS (dự phòng) + DCIM (quản lý) + RowCool (làm mát) + Containment (vách ngăn)."
    }
  },
  {
    "id": "cloud-c2-d1-004",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-1-definition-structure",
    "question": "Trong thiết kế phòng máy Data Center, các tủ rack tiêu chuẩn được bố trí như thế nào?",
    "options": [
      "Được đặt rải rác ngẫu nhiên tại các góc phòng để tản nhiệt đều",
      "Được xếp thành hình vòng tròn đồng tâm xung quanh máy điều hòa",
      "Được xếp chồng lên nhau thành nhiều tầng sát lên trần bê tông",
      "Được đặt cạnh nhau thành từng hàng thẳng để tối ưu luồng khí"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Các tủ rack tiêu chuẩn được đặt cạnh nhau thành từng hàng (rows) thẳng tắp để thuận tiện đi dây mạng, cấp nguồn điện và tạo hành lang dẫn luồng khí làm mát.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ đặt vòng tròn hay rải rác sẽ giúp tản nhiệt tốt hơn (thực tế làm rối loạn luồng khí).",
      "trickWord": "Bẫy cách sắp xếp các rack thành từng hàng (Rows)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.1",
      "tip": "Rack luôn xếp thành từng HÀNG (Rows) thẳng để tạo lối đi nóng/lạnh."
    }
  },
  {
    "id": "cloud-c2-d1-005",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-2-pod",
    "question": "Hệ thống Modular UPS trong cụm PoD đảm nhiệm vai trò kỹ thuật then chốt nào sau đây?",
    "options": [
      "Tự động nén dung lượng các tệp tin cơ sở dữ liệu trên máy chủ",
      "Tăng tốc độ xung nhịp xử lý dữ liệu cho các máy chủ tính toán",
      "Chuyển đổi tín hiệu mạng cáp đồng sang mạng cáp quang tốc độ cao",
      "Bảo vệ máy chủ trước sự cố mất điện lưới và sụt áp đột ngột"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Modular UPS (Uninterruptible Power Supply) là bộ lưu điện dự phòng bảo vệ máy chủ không bị tắt đột ngột khi điện lưới mất hoặc chập chờn, giúp hệ thống duy trì hoạt động liên tục.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm vai trò cấp nguồn dự phòng của UPS sang tính năng tăng tốc phần cứng hoặc xử lý dữ liệu.",
      "trickWord": "Bẫy vai trò lưu điện dự phòng của Modular UPS",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.2",
      "tip": "UPS = Lưu điện dự phòng chống sụt áp và mất điện lưới tức thì."
    }
  },
  {
    "id": "cloud-c2-d1-006",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s1",
    "subsectionId": "cloud-ch2-s1-2-pod",
    "question": "Phần mềm InfraSuite Manager (DCIM) trong hạ tầng Data Center thực hiện chức năng nào?",
    "options": [
      "Cài đặt hệ điều hành và phân chia dung lượng RAM cho người dùng",
      "Giám sát thời gian thực nhiệt độ độ ẩm dòng điện và lưu lượng gió",
      "Biên dịch mã nguồn phần mềm ứng dụng web của khách hàng tự động",
      "Thay thế hoàn toàn vai trò của các thiết bị tường lửa an ninh"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "DCIM (Data Center Infrastructure Management / InfraSuite Manager) là phần mềm giám sát môi trường vật lý (nhiệt độ, độ ẩm, điện năng, quạt gió) theo thời gian thực của Data Center.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm phần mềm DCIM quản lý hạ tầng vật lý với phần mềm Hypervisor quản lý máy ảo.",
      "trickWord": "Bẫy DCIM là phần mềm giám sát hạ tầng vật lý (môi trường, điện, nhiệt)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục I.2",
      "tip": "DCIM = Giám sát môi trường vật lý (nhiệt độ, độ ẩm, dòng điện)."
    }
  },
  {
    "id": "cloud-c2-d1-007",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-1-characteristics",
    "question": "Mối quan hệ đối ứng giữa điện năng tiêu thụ và nhiệt lượng tỏa ra trong Data Center là gì?",
    "options": [
      "Gần như toàn bộ điện năng tiêu thụ đều chuyển hóa thành nhiệt lượng",
      "Điện năng tiêu thụ được chuyển hóa hoàn toàn thành sóng điện từ",
      "Nhiệt lượng tỏa ra chỉ chiếm một phần rất nhỏ khoảng dưới năm phần trăm",
      "Chỉ các thiết bị lưu trữ ổ cứng mới tỏa nhiệt còn chip xử lý thì không"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong Data Center, gần như 100% điện năng cấp cho các chip bán dẫn và thiết bị điện tử đều chuyển hóa thành nhiệt lượng tỏa ra, khiến nhu cầu làm mát luôn tỷ lệ thuận với điện tiêu thụ.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ điện năng biến thành 'năng lượng tính toán' nên nhiệt tỏa ra rất ít (sai quy luật nhiệt động lực học).",
      "trickWord": "Bẫy điện năng chuyển hóa gần như hoàn toàn thành nhiệt lượng",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.1",
      "tip": "Điện cấp cho chip = Nhiệt tỏa ra môi trường (đối ứng 1-1)."
    }
  },
  {
    "id": "cloud-c2-d1-008",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-1-characteristics",
    "question": "Điều gì sẽ xảy ra với các máy chủ trong Data Center nếu toàn bộ hệ thống tản nhiệt bị ngừng trệ?",
    "options": [
      "Hệ điều hành sẽ tự động giải phóng toàn bộ dữ liệu trên đĩa cứng",
      "Máy chủ vẫn tiếp tục hoạt động ổn định trong nhiều tuần mà không sao",
      "Máy chủ sẽ tự ngắt chỉ sau vài phút do hiện tượng quá nhiệt an toàn",
      "Tốc độ xử lý của máy tính sẽ tăng đột biến gấp đôi so với ban đầu"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Nếu hệ thống làm mát sập, nhiệt độ phòng máy tăng vọt cực nhanh, các máy chủ sẽ tự động tắt nguồn chỉ sau vài phút do kích hoạt cơ chế bảo vệ quá nhiệt (Thermal Throttling / Thermal Shutdown).",
    "trickDetails": {
      "whyTrapped": "Dễ đánh giá thấp tầm quan trọng của hệ thống làm mát đối với sự sống còn của máy chủ.",
      "trickWord": "Bẫy tự ngắt chỉ sau vài phút do quá nhiệt (Thermal Shutdown)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.1",
      "tip": "Hệ thống làm mát quan trọng ngang hàng thiết bị tính toán; mất làm mát là sập máy chủ sau vài phút."
    }
  },
  {
    "id": "cloud-c2-d1-009",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-2-cooling-solutions",
    "question": "Độ cao tiêu chuẩn của cấu trúc Sàn nâng (Raised Floor) trong trung tâm dữ liệu là bao nhiêu?",
    "options": [
      "Khoảng từ năm đến mười centimet sát mặt sàn bê tông phòng máy chủ",
      "Khoảng từ một đến bốn feet tương đương ba mươi đến một trăm hai mươi cm",
      "Khoảng từ hai đến ba mét để con người có thể đi lại đứng thẳng thoải mái",
      "Không có độ cao tiêu chuẩn mà phụ thuộc hoàn toàn vào sở thích cá nhân"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Chiều cao chuẩn của sàn nâng (Raised Floor) là 1–4 feet (khoảng 30–120 cm) so với sàn bê tông cứng, đủ không gian đi dây cáp và dẫn luồng khí lạnh áp suất cao.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm sang độ cao chỉ vài cm hoặc tưởng sàn nâng phải cao như một tầng nhà (2-3m).",
      "trickWord": "Bẫy thông số chiều cao sàn nâng chuẩn 1–4 feet (30–120 cm)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.2",
      "tip": "Sàn nâng chuẩn = 1–4 feet (30–120 cm)."
    }
  },
  {
    "id": "cloud-c2-d1-010",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-2-cooling-solutions",
    "question": "Nguyên lý bố trí hành lang Lối đi lạnh (Cold Aisle) và Lối đi nóng (Hot Aisle) là gì?",
    "options": [
      "Mặt trước các rack đối diện nhau và mặt sau các rack đối diện nhau",
      "Mặt trước của rack này đối diện trực tiếp với mặt sau của rack kia",
      "Tất cả các rack đều quay mặt trước về hướng cửa chính của phòng máy",
      "Tất cả các rack đều quay mặt sau về phía các cửa sổ thông gió tự nhiên"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Xếp mặt trước đối diện nhau tạo Lối đi lạnh (Cold Aisle, 18–21°C); mặt sau đối diện nhau tạo Lối đi nóng (Hot Aisle, 30–35°C), ngăn khí nóng bị hút ngược vào mặt trước máy chủ.",
    "trickDetails": {
      "whyTrapped": "Rất nhiều người nhầm rằng mặt trước quay vào mặt sau (kiểu nối đuôi nhau), làm khí nóng xả thẳng vào mặt hút khí của máy chủ kế tiếp.",
      "trickWord": "Bẫy mặt trước đối diện mặt trước, mặt sau đối diện mặt sau",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.2",
      "tip": "Cold Aisle = Trước đối Trước; Hot Aisle = Sau đối Sau."
    }
  },
  {
    "id": "cloud-c2-d1-011",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-2-cooling-solutions",
    "question": "Chức năng kỹ thuật của ống thoát Chimney (ống khói) gắn trên đỉnh lối đi nóng là gì?",
    "options": [
      "Thoát nước ngưng tụ từ các máy điều hòa nhiệt độ ra ngoài tòa nhà",
      "Hút gió tự nhiên ngoài trời thổi trực tiếp vào tản nhiệt của máy chủ",
      "Dẫn khói chữa cháy tự động khi xảy ra sự cố chập điện trong phòng",
      "Hút luồng khí nóng đẩy thẳng lên trần kỹ thuật dẫn về giàn lạnh"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Ống Chimney có quạt hút đặt trên đỉnh lối đi nóng, gom toàn bộ luồng khí nóng nhiệt độ cao đẩy thẳng lên trần kỹ thuật để đưa về giàn lạnh làm mát tuần hoàn khép kín.",
    "trickDetails": {
      "whyTrapped": "Từ 'Chimney' (ống khói) khiến nhiều người nghĩ đến ống khói xả khí thải hoặc hút gió tự nhiên ngoài trời.",
      "trickWord": "Bẫy gom khí nóng đẩy lên trần kỹ thuật về giàn lạnh",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.2",
      "tip": "Chimney = Hút khí nóng từ Hot Aisle đẩy lên trần kỹ thuật."
    }
  },
  {
    "id": "cloud-c2-d1-012",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-3-lights-out",
    "question": "Mô hình 'Lights-Out Data Center' (Trung tâm dữ liệu không đèn) được định nghĩa chính xác là gì?",
    "options": [
      "Hệ thống máy chủ sử dụng bóng đèn huỳnh quang thế hệ mới tiết kiệm",
      "Trung tâm dữ liệu bị cúp điện hoàn toàn và tạm dừng hoạt động",
      "Phòng máy vận hành tự động tắt đèn và quản trị hoàn toàn từ xa",
      "Phòng máy chỉ mở cửa cho khách hàng tham quan vào các ngày nghỉ lễ"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Lights-Out Data Center là phòng máy vận hành tự động, tắt hết hệ thống chiếu sáng khi không có người, quản trị 100% qua mạng từ xa (Remote Management) để tiết kiệm năng lượng tối đa.",
    "trickDetails": {
      "whyTrapped": "Dễ hiểu sai từ 'Lights-Out' thành sự cố mất điện toàn trung tâm dữ liệu.",
      "trickWord": "Bẫy phòng máy tự động hóa tắt đèn, quản trị 100% từ xa",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.3",
      "tip": "Lights-Out DC = Tắt đèn + Không người bên trong + Quản trị từ xa 100%."
    }
  },
  {
    "id": "cloud-c2-d1-013",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s2",
    "subsectionId": "cloud-ch2-s2-3-lights-out",
    "question": "Đặc điểm nào dưới đây KHÔNG PHẢI là lợi ích của mô hình Lights-Out Data Center?",
    "options": [
      "Hạn chế rủi ro cấu hình sai hoặc cắm nhầm dây mạng do lỗi con người",
      "Giảm đáng kể chi phí nhân sự kỹ thuật túc trực bên trong phòng máy chủ",
      "Cho phép khách hàng tự do vào phòng máy kiểm tra thiết bị bất kỳ lúc nào",
      "Giảm thiểu nguy cơ bị tấn công vật lý vào các ổ cứng chứa dữ liệu mật"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Lights-Out Data Center khóa kín cửa phòng máy và cấm người ra vào tùy tiện. Do đó việc cho phép khách hàng tự do ra vào phòng máy là hoàn toàn sai trái.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không đọc kỹ từ phủ định 'KHÔNG PHẢI' và bỏ qua yếu tố an ninh hạn chế người ra vào.",
      "trickWord": "Bẫy phủ định tự do ra vào phòng máy",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục II.3",
      "tip": "Lights-Out DC KHÓA KÍN CỬA, tuyệt đối không cho tự do ra vào."
    }
  },
  {
    "id": "cloud-c2-d1-014",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-1-basics-traffic-flow",
    "question": "Thiết bị Top-of-Rack switch (ToR switch) được lắp đặt ở vị trí nào và đảm nhiệm vai trò gì?",
    "options": [
      "Đặt trên đỉnh mỗi rack kết nối toàn bộ máy chủ trong rack ra mạng ngoài",
      "Đặt dưới sàn nâng chịu trách nhiệm cấp nguồn điện xoay chiều máy chủ",
      "Đặt ngoài cổng vào tòa nhà Data Center để quét thẻ nhận diện nhân viên",
      "Đặt bên trong từng máy chủ vật lý để tăng tốc độ truy xuất của ổ cứng"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "ToR switch được gắn ngay trên đỉnh (Top) của mỗi tủ rack, kết nối mạng toàn bộ các máy chủ trong rack đó và đóng vai trò cổng ngõ giao tiếp nội bộ cũng như nối ra mạng ngoài.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm vị trí ToR switch ở dưới sàn nâng hoặc nhầm chức năng mạng sang chức năng cấp điện.",
      "trickWord": "Bẫy vị trí trên đỉnh rack kết nối mạng máy chủ (ToR)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.1",
      "tip": "Top-of-Rack = Switch đặt trên ĐỈNH mỗi rack kết nối mạng."
    }
  },
  {
    "id": "cloud-c2-d1-015",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-1-basics-traffic-flow",
    "question": "Việc trang bị Card mạng đa cổng (Multi-port NIC) cho máy chủ mang lại lợi ích kỹ thuật nào?",
    "options": [
      "Cho phép máy chủ tiếp tục chạy khi bị ngắt hoàn toàn nguồn điện lưới",
      "Tăng gấp đôi dung lượng bộ nhớ RAM khả dụng cho hệ điều hành khách",
      "Tự động chuyển đổi giao thức mạng IPv4 sang IPv6 mà không cần router",
      "Tăng băng thông truyền tải gấp K lần và dự phòng khi đứt cáp mạng"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Multi-port NIC gồm nhiều cổng mạng nối song song vào ToR switch, giúp tổng băng thông tăng gấp K lần và tạo cơ chế dự phòng chịu lỗi (Fault Tolerance) nếu một sợi cáp mạng bị đứt.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn giữa card mạng (NIC) với bộ nhớ RAM hoặc nguồn điện dự phòng.",
      "trickWord": "Bẫy tăng băng thông K lần và dự phòng đứt cáp mạng",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.1",
      "tip": "Multi-port NIC = Tăng băng thông K lần + Dự phòng đứt cáp mạng."
    }
  },
  {
    "id": "cloud-c2-d1-016",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-1-basics-traffic-flow",
    "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa lưu lượng North-South và East-West?",
    "options": [
      "North-South là lưu lượng giữa các rack nội bộ còn East-West ra Internet",
      "North-South là lưu lượng giữa Internet và DC còn East-West là nội bộ DC",
      "North-South chỉ lưu lượng ban ngày còn East-West chỉ lưu lượng ban đêm",
      "North-South là dữ liệu của hệ điều hành còn East-West là dữ liệu ứng dụng"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Lưu lượng North-South (Bắc - Nam) đi giữa mạng Internet bên ngoài và Data Center. Lưu lượng East-West (Đông - Tây) di chuyển ngang giữa các máy chủ, rack và pod trong nội bộ Data Center.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm ngược hướng giữa North-South (ngoài vào trong) và East-West (ngang nội bộ).",
      "trickWord": "Bẫy hướng lưu lượng North-South (ngoài vào) vs East-West (nội bộ)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.1",
      "tip": "North-South = Internet ↔ DC; East-West = Nội bộ giữa các Server/Rack."
    }
  },
  {
    "id": "cloud-c2-d1-017",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-1-basics-traffic-flow",
    "question": "Trong các trung tâm dữ liệu đám mây hiện đại, luồng lưu lượng nào chiếm tỷ trọng áp đảo?",
    "options": [
      "Lưu lượng nội bộ East-West chiếm khoảng bảy mươi đến tám mươi phần trăm",
      "Lưu lượng ra vào Internet North-South chiếm hơn chín mươi lăm phần trăm",
      "Lưu lượng sao lưu dự phòng ban đêm chiếm toàn bộ một trăm phần trăm mạng",
      "Hai luồng lưu lượng trên luôn luôn bằng nhau tuyệt đối ở mọi thời điểm"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Do kiến trúc Cloud chạy hàng nghìn microservices, đồng bộ CSDL và tính toán phân tán, lưu lượng nội bộ East-West chiếm áp đảo từ 70% đến 80% tổng lưu lượng Data Center.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ người dùng truy cập web từ Internet (North-South) mới là lưu lượng lớn nhất.",
      "trickWord": "Bẫy lưu lượng nội bộ East-West chiếm 70–80% áp đảo",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.1",
      "tip": "East-West (nội bộ) chiếm áp đảo 70-80% tổng lưu lượng Data Center."
    }
  },
  {
    "id": "cloud-c2-d1-018",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-2-topologies",
    "question": "Nhược điểm kỹ thuật nghiêm trọng nhất của mô hình tô-pô mạng Fat Tree là gì?",
    "options": [
      "Chi phí mua sắm dây cáp kết nối đắt đỏ hơn gấp mười lần mô hình khác",
      "Các liên kết cấp cao ở gốc rất dễ bị nghẽn mạng và là điểm lỗi đơn lẻ",
      "Không hỗ trợ truyền tải dữ liệu thông qua giao thức mạng tiêu chuẩn IP",
      "Bắt buộc toàn bộ các máy chủ phải tắt nguồn khi có một nút mạng bị hỏng"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Mô hình Fat Tree dạng cây phân cấp nên toàn bộ lưu lượng liên cụm dồn lên đỉnh gốc (root), gây nghẽn cổ chai (Bottleneck) nghiêm trọng và là điểm lỗi đơn lẻ (Single Point of Failure).",
    "trickDetails": {
      "whyTrapped": "Tên gọi 'Fat Tree' (cây béo) dễ gây ngộ nhận là đường truyền cực rộng không bao giờ bị nghẽn.",
      "trickWord": "Bẫy nghẽn cổ chai ở gốc và Single Point of Failure của Fat Tree",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.2",
      "tip": "Fat Tree = Dễ nghẽn ở nút gốc (root) + Có Single Point of Failure."
    }
  },
  {
    "id": "cloud-c2-d1-019",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-2-topologies",
    "question": "Công nghệ Link Aggregation (LAG) mang lại ưu điểm vượt trội nào cho hạ tầng mạng Data Center?",
    "options": [
      "Chuyển toàn bộ dữ liệu máy chủ lên các vệ tinh không gian quỹ đạo thấp",
      "Tự động phát hiện và loại bỏ các gói tin bị nhiễm mã độc nguy hiểm",
      "Gộp nhiều liên kết vật lý thành một liên kết logic tốc độ rất cao",
      "Loại bỏ hoàn toàn sự cần thiết của các thiết bị chuyển mạch mạng switch"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Link Aggregation (LAG) gộp nhiều đường truyền vật lý tốc độ thấp thành 1 đường logic tốc độ cao (ví dụ 10 đường 10Gbps thành 1 đường 100Gbps) bằng cấu hình phần cứng mà không phải thay cáp.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm LAG là công nghệ bảo mật tường lửa hoặc chia nhỏ đường truyền.",
      "trickWord": "Bẫy gộp nhiều liên kết vật lý thành một liên kết logic (LAG)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.2",
      "tip": "Link Aggregation = Gộp nhiều đường nhỏ thành 1 đường lớn."
    }
  },
  {
    "id": "cloud-c2-d1-020",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-2-topologies",
    "question": "Vì sao kiến trúc mạng Leaf-Spine đạt được Khả năng chịu lỗi (Fault Tolerance) vượt trội?",
    "options": [
      "Các switch Spine có thể tự nhân bản phần cứng khi phát hiện sự cố đứt",
      "Mỗi switch Leaf chỉ kết nối duy nhất vào một switch Spine trên cùng",
      "Hệ thống không sử dụng dây cáp mạng mà truyền tin qua sóng vô tuyến",
      "Mỗi switch Leaf kết nối tới tất cả Spine nên hỏng một Spine vẫn chạy"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong Leaf-Spine, MỖI switch Leaf kết nối tới TẤT CẢ các switch Spine. Nếu 1 switch Spine bị hỏng, lưu lượng lập tức được định tuyến qua các Spine còn lại mà không ngắt quãng hệ thống.",
    "trickDetails": {
      "whyTrapped": "Phương án B bẫy kết nối đơn điểm (kiểu cây truyền thống).",
      "trickWord": "Bẫy mỗi Leaf nối TẤT CẢ Spine loại bỏ Single Point of Failure",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.2",
      "tip": "Leaf-Spine = Mọi Leaf nối TẤT CẢ Spine ➔ Hỏng 1 Spine vẫn chạy bình thường."
    }
  },
  {
    "id": "cloud-c2-d1-021",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s3",
    "subsectionId": "cloud-ch2-s3-2-topologies",
    "question": "Thứ tự truyền gói tin trong mô hình mở rộng Super-Spine giữa các cụm PoD là gì?",
    "options": [
      "Super Spine ➔ Spine từng pod ➔ Leaf từng rack ➔ Server đích",
      "Server đích ➔ Super Spine ➔ Leaf từng rack ➔ Spine từng pod",
      "Leaf từng rack ➔ Super Spine ➔ Spine từng pod ➔ Server đích",
      "Spine từng pod ➔ Super Spine ➔ Server đích ➔ Leaf từng rack"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Đường truyền chuẩn từ tầng cao nhất xuống máy chủ: Super Spine (liên kết pod) ➔ Spine (trong từng pod) ➔ Leaf (trên từng rack) ➔ Server đích.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ đảo lộn thứ tự giữa tầng Super-Spine, Spine và Leaf.",
      "trickWord": "Bẫy thứ tự tầng mạng: Super Spine -> Spine -> Leaf -> Server",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục III.2",
      "tip": "Từ trên xuống: Super Spine ➔ Spine ➔ Leaf ➔ Server."
    }
  },
  {
    "id": "cloud-c2-d1-022",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Hạn chế nghiêm trọng nhất của giải pháp Lưu trữ cục bộ (Local Storage) trong Data Center là gì?",
    "options": [
      "Tốc độ đọc ghi của đĩa cứng vật lý chậm hơn tốc độ truyền qua mạng Internet",
      "Không thể lưu trữ các tệp tin hình ảnh có dung lượng lớn hơn mười megabyte",
      "Ổ cứng gắn chết vào rack nên khó quản lý quota và khó bảo trì khi hỏng",
      "Bắt buộc tất cả các máy chủ trong phòng máy phải dùng chung một ổ đĩa"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Lưu trữ cục bộ gắn trực tiếp vào máy chủ phân tán khắp hàng nghìn rack, rất khó áp đặt hạn mức (quota) cho từng máy ảo và khi ổ cứng hỏng nhân viên kỹ thuật phải chạy tới đúng rack vật lý để thay thế.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm sang các giới hạn định dạng tệp tin thay vì vấn đề kiến trúc phân tán và quản trị hạn mức.",
      "trickWord": "Bẫy hạn chế khó quản trị quota và khó bảo trì của Local Storage",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Local Storage = Gắn chết vào rack ➔ Khó chia quota + Hỏng phải mò đúng rack thay."
    }
  },
  {
    "id": "cloud-c2-d1-023",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Bản chất của công nghệ Ảo hóa lưu trữ (Storage Virtualization) được định nghĩa là gì?",
    "options": [
      "Nén toàn bộ dữ liệu trên đĩa cứng thành các tệp tin dạng đuôi mở rộng zip",
      "Tách rời lưu trữ vật lý khỏi vị trí rack tạo thành hồ chứa tập trung",
      "Xóa bỏ hoàn toàn việc sử dụng đĩa từ HDD và chỉ sử dụng bộ nhớ đệm RAM",
      "Chuyển đổi dữ liệu văn bản sang dạng mã nhị phân không thể đọc được"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Storage Virtualization là công nghệ trừu tượng hóa, tách rời lớp lưu trữ vật lý khỏi vị trí rack cụ thể, gom tất cả ổ cứng thành một Storage Pool tập trung để quản lý và cấp phát động.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm ảo hóa lưu trữ với nén tệp tin (compression) hoặc mã hóa dữ liệu.",
      "trickWord": "Bẫy tách rời lưu trữ vật lý khỏi vị trí rack (Storage Pool)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Storage Virtualization = Tách lưu trữ khỏi rack vật lý ➔ Storage Pool tập trung."
    }
  },
  {
    "id": "cloud-c2-d1-024",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Khái niệm 'Storage Pool' (Hồ chứa lưu trữ) trong ảo hóa lưu trữ mang ý nghĩa gì?",
    "options": [
      "Bể chứa nước làm mát đặt trên nóc trung tâm dữ liệu để phòng cháy chữa cháy",
      "Khu vực đặt các máy chủ lưu trữ ngập trong chất lỏng làm mát chuyên dụng",
      "Bộ nhớ đệm tạm thời của card mạng dùng để lưu các gói tin bị nghẽn",
      "Toàn bộ dung lượng đĩa từ nhiều nơi được gom chung thành một vùng duy nhất"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Storage Pool là một vùng lưu trữ logic khổng lồ thống nhất được gom lại từ hàng nghìn ổ cứng vật lý độc lập, cho phép phân bổ dung lượng linh hoạt cho các máy ảo mà không phụ thuộc vị trí phần cứng.",
    "trickDetails": {
      "whyTrapped": "Từ 'Pool' (hồ/bể) dễ bị suy diễn sang bể nước làm mát chất lỏng hoặc bộ đệm mạng.",
      "trickWord": "Bẫy gom dung lượng đĩa thành vùng lưu trữ logic thống nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Storage Pool = Gom hàng nghìn đĩa cứng thành 1 kho dung lượng logic chung."
    }
  },
  {
    "id": "cloud-c2-d1-025",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Khi một ổ đĩa vật lý bên trong Storage Pool bị sự cố hư hỏng, hệ thống sẽ phản ứng ra sao?",
    "options": [
      "Toàn bộ các máy ảo đang chạy trên hệ thống sẽ lập tức bị xóa sạch dữ liệu",
      "Tự động tái tạo dữ liệu từ các bản sao dự phòng mà máy ảo không bị ngắt",
      "Hệ thống tự động phát còi báo động và ngắt nguồn điện của toàn bộ tòa nhà",
      "Dữ liệu của khách hàng sẽ bị khóa vĩnh viễn không thể khôi phục lại được"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Nhờ cơ chế dự phòng và phân mảnh dữ liệu của Storage Virtualization, khi một ổ đĩa hỏng, hệ thống tự động tái tạo dữ liệu sang ổ đĩa khác từ các khối dữ liệu chẵn lẻ (parity/replication) mà máy ảo không bị gián đoạn.",
    "trickDetails": {
      "whyTrapped": "Người học hay lo sợ hỏng 1 đĩa là mất toàn bộ dữ liệu của máy ảo.",
      "trickWord": "Bẫy tự động tái tạo dữ liệu dự phòng không làm gián đoạn VM",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Ảo hóa lưu trữ = Có dự phòng ➔ Hỏng ổ tự phục hồi, VM chạy bình thường."
    }
  },
  {
    "id": "cloud-c2-d1-026",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Lợi thế lớn nhất của Storage Virtualization khi cần mở rộng dung lượng đĩa cho máy ảo là gì?",
    "options": [
      "Có thể tăng giảm dung lượng ổ đĩa ngay tức khắc qua phần mềm điều khiển",
      "Bắt buộc nhân viên kỹ thuật phải tắt máy chủ và cắm thêm ổ cứng mới vào",
      "Dung lượng ổ đĩa sẽ tự động tăng lên gấp mười lần mà không cần cấu hình",
      "Khách hàng phải tự mua thêm ổ đĩa ngoài cắm vào cổng USB của máy tính"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Với Storage Virtualization, quản trị viên có thể tăng hoặc giảm dung lượng đĩa (Resize Virtual Disk) của máy ảo ngay trên giao diện phần mềm chỉ trong vài giây mà không cần can thiệp phần cứng vật lý.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm sang quy trình truyền thống: muốn tăng đĩa phải tắt máy cắm ổ mới.",
      "trickWord": "Bẫy tăng giảm dung lượng ổ đĩa tức thì bằng phần mềm",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Ảo hóa lưu trữ = Mở rộng đĩa bằng cú click chuột, không cần đụng phần cứng."
    }
  },
  {
    "id": "cloud-c2-d1-027",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s4",
    "subsectionId": "cloud-ch2-s4-1-local-vs-virtualized",
    "question": "Phát biểu nào sau đây phản ánh ĐÚNG về việc áp dụng hạn mức (quota) trong Storage Virtualization?",
    "options": [
      "Hạn mức dung lượng chỉ có thể thiết lập cho các tập tin dạng văn bản",
      "Mọi máy ảo trên hệ thống bắt buộc phải dùng chung một dung lượng bằng nhau",
      "Không thể thiết lập hạn mức dung lượng do toàn bộ đĩa đã bị gom chung",
      "Cho phép linh hoạt giới hạn dung lượng tối đa cho từng máy ảo độc lập"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Storage Virtualization cho phép thiết lập và kiểm soát hạn mức (Quota Management) cực kỳ chi tiết cho từng máy ảo và từng khách hàng độc lập, tránh tình trạng một máy ảo chiếm dụng hết dung lượng chung.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ gom chung vào Storage Pool thì không thể chia quota riêng được.",
      "trickWord": "Bẫy kiểm soát hạn mức (Quota) độc lập cho từng máy ảo",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1",
      "tip": "Gom chung thành Pool nhưng phân chia Quota độc lập cho từng VM cực dễ."
    }
  },
  {
    "id": "cloud-c2-d1-028",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Nguyên lý vận hành cốt lõi của công nghệ Mô phỏng phần mềm (Software Emulation) là gì?",
    "options": [
      "Sửa đổi nhân hệ điều hành khách để thay thế bằng các lời gọi hàm hypercall",
      "Thực thi trực tiếp toàn bộ các chỉ lệnh CPU vật lý với tốc độ bản địa",
      "Đọc và thông dịch tuần tự từng chỉ lệnh phần cứng nên tốc độ rất chậm",
      "Sử dụng công nghệ mạch tích hợp chuyên dụng trên các dòng chip của Intel"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Software Emulation là phần mềm giả lập đọc và thông dịch tuần tự TỪNG LỆNH (instruction-by-instruction) của hệ điều hành khách, do đó chi phí phụ tải thông dịch rất lớn và tốc độ chậm nhất.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm Emulation với ảo hóa có hỗ trợ phần cứng (Full Virtualization).",
      "trickWord": "Bẫy thông dịch tuần tự từng lệnh (Software Emulation chậm nhất)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Emulation = Thông dịch từng lệnh ➔ Tốc độ chậm nhất, không dùng cho Cloud DC."
    }
  },
  {
    "id": "cloud-c2-d1-029",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Ứng dụng nào dưới đây là ví dụ điển hình nhất của công nghệ Software Emulation?",
    "options": [
      "BlueStacks (chạy Android trên Windows) và WINE (chạy Windows trên Linux)",
      "Hệ điều hành ảo hóa máy chủ doanh nghiệp VMware ESXi trên nền tảng x86",
      "Giải pháp ảo hóa máy tính lớn IBM System/370 trong trung tâm dữ liệu",
      "Bộ điều phối vùng ảo hóa vCloud Director của tập đoàn công nghệ VMware"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "BlueStacks (giả lập kiến trúc ARM của Android trên chip x86 của PC) và WINE là các ví dụ kinh điển của Software Emulation.",
    "trickDetails": {
      "whyTrapped": "Học sinh hay chọn VMware ESXi (Full Virtualization) vì nghĩ đó là phần mềm ảo hóa phổ biến.",
      "trickWord": "Bẫy ví dụ Software Emulation: BlueStacks và WINE",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "BlueStacks / WINE = Software Emulation."
    }
  },
  {
    "id": "cloud-c2-d1-030",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Đặc điểm mang tính BẮT BUỘC và là hạn chế chí tử của Para-virtualization (Ảo hóa bán phần) là gì?",
    "options": [
      "Phải cài đặt thêm một bộ vi xử lý CPU vật lý thứ hai trên bo mạch chủ",
      "Bắt buộc phải sửa đổi mã nguồn của hệ điều hành khách trước khi chạy",
      "Tốc độ thực thi chỉ lệnh CPU bị suy giảm hơn chín mươi phần trăm so với thật",
      "Chỉ cho phép chạy duy nhất một máy ảo trên toàn bộ cụm máy tính vật lý"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Hạn chế chí tử của Para-virtualization: Hệ điều hành khách (Guest OS) BẮT BUỘC PHẢI BỊ SỬA ĐỔI MÃ NGUỒN trước khi biên dịch để biết mình đang chạy trong môi trường ảo hóa và dùng hypercall.",
    "trickDetails": {
      "whyTrapped": "Đây là câu hỏi bẫy kinh điển nhất trong các đề thi ảo hóa.",
      "trickWord": "Bẫy BẮT BUỘC SỬA ĐỔI MÃ NGUỒN HỆ ĐIỀU HÀNH (Para-virtualization)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "'Para' = BẮT BUỘC PHẢI SỬA MÃ NGUỒN OS."
    }
  },
  {
    "id": "cloud-c2-d1-031",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Trong công nghệ Para-virtualization, cơ chế giao tiếp 'Hypercall' tương đương với khái niệm nào?",
    "options": [
      "Tương đương với việc khởi động lại toàn bộ máy tính vật lý khi bị lỗi",
      "Tương đương với cuộc gọi thoại qua giao thức VoIP trên mạng viễn thông",
      "Tương đương với việc gửi một tin nhắn văn bản ngắn SMS đến người quản trị",
      "Tương đương với lời gọi hệ thống System Call gửi trực tiếp đến Hypervisor"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Hypercall trong Para-virtualization hoạt động tương tự như một System Call: thay vì gọi xuống phần cứng, Guest OS gọi hàm trực tiếp lên Hypervisor để yêu cầu thực thi các tác vụ đặc quyền.",
    "trickDetails": {
      "whyTrapped": "Từ 'Call' dễ bị suy diễn sang cuộc gọi điện thoại VoIP hoặc tin nhắn SMS.",
      "trickWord": "Bẫy Hypercall tương đương System Call gửi tới Hypervisor",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Hypercall = Lời gọi hàm từ Guest OS lên Hypervisor (như System Call)."
    }
  },
  {
    "id": "cloud-c2-d1-032",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Vì sao công nghệ Para-virtualization KHÔNG THỂ áp dụng cho các phiên bản Windows thương mại đóng gói sẵn?",
    "options": [
      "Vì Windows chỉ có thể cài đặt được trên các máy tính để bàn văn phòng",
      "Vì hệ điều hành Windows không hỗ trợ kết nối vào mạng cáp quang Internet",
      "Vì Microsoft không công khai mã nguồn mở của Windows để chỉnh sửa",
      "Vì tập lệnh của Windows không tương thích với các dòng vi xử lý của Intel"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Para-virtualization đòi hỏi phải sửa mã nguồn hệ điều hành. Do Windows là phần mềm nguồn đóng độc quyền của Microsoft (Proprietary OS), người dùng không thể can thiệp mã nguồn để chạy Para-virtualization thuần túy.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là do lỗi phần cứng hoặc do Windows không hỗ trợ mạng.",
      "trickWord": "Bẫy Windows đóng mã nguồn không thể sửa cho Para-virtualization",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Windows nguồn đóng ➔ Không sửa được mã nguồn ➔ Không chạy Para-virtualization thuần túy."
    }
  },
  {
    "id": "cloud-c2-d1-033",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Công nghệ ảo hóa nào là NỀN TẢNG CỐT LÕI cho các máy ảo (VM) trong Cloud Data Center hiện đại?",
    "options": [
      "Para-virtualization (Ảo hóa bán phần bắt buộc chỉnh sửa mã nguồn OS)",
      "Software Emulation (Mô phỏng phần mềm thông dịch từng chỉ lệnh)",
      "Full Virtualization (Ảo hóa toàn phần có hỗ trợ phần cứng CPU)",
      "Network Virtualization (Ảo hóa đường truyền mạng bằng cáp quang ảo)"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Full Virtualization là chuẩn mực của Cloud Data Center: chạy trực tiếp trên phần cứng (với Intel VT-x/AMD-V), KHÔNG CẦN SỬA ĐỔI OS và KHÔNG TỐN CHI PHÍ MÔ PHỎNG.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay chọn Para-virtualization vì nghĩ nó nhẹ hơn, quên mất rào cản sửa mã nguồn OS.",
      "trickWord": "Bẫy Full Virtualization là nền tảng cốt lõi của Cloud Data Center",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Chuẩn mực máy ảo Cloud Data Center hiện đại = FULL VIRTUALIZATION."
    }
  },
  {
    "id": "cloud-c2-d1-034",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Hai tập lệnh mở rộng trên vi xử lý giúp kích hoạt công nghệ Full Virtualization là gì?",
    "options": [
      "Tập lệnh Intel VT-x của hãng Intel và tập lệnh AMD-V của hãng AMD",
      "Tập lệnh đồ họa DirectX của Microsoft và công nghệ CUDA của Nvidia",
      "Chuẩn giao tiếp ổ cứng SATA ba và chuẩn kết nối mạng không dây WiFi sáu",
      "Giao thức mã hóa mạng SSL và chuẩn xác thực người dùng hai bước OTP"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Intel VT-x (Intel Virtualization Technology) và AMD-V (AMD Virtualization) là 2 tập lệnh phần cứng tích hợp trong CPU hỗ trợ công nghệ Full Virtualization.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với các tập lệnh đồ họa (DirectX, CUDA) hoặc giao thức mạng (SSL, WiFi).",
      "trickWord": "Bẫy tập lệnh phần cứng Intel VT-x và AMD-V",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Hỗ trợ ảo hóa phần cứng CPU = Intel VT-x và AMD-V."
    }
  },
  {
    "id": "cloud-c2-d1-035",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s5",
    "subsectionId": "cloud-ch2-s5-1-types",
    "question": "Ưu điểm kép vượt trội nhất của Full Virtualization so với 2 công nghệ ảo hóa còn lại là gì?",
    "options": [
      "Hoàn toàn không tiêu tốn điện năng và không phát sinh nhiệt lượng khi chạy",
      "Không cần sửa đổi hệ điều hành và tránh được chi phí mô phỏng phần mềm",
      "Tự động tăng dung lượng bộ nhớ RAM vật lý trên máy chủ lên gấp mười lần",
      "Loại bỏ hoàn toàn sự cần thiết của hệ điều hành khách bên trong máy ảo"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Full Virtualization sở hữu ưu điểm kép: (1) KHÔNG CẦN SỬA ĐỔI MÃ NGUỒN OS (hơn Para-virtualization) và (2) TRÁNH ĐƯỢC CHI PHÍ MÔ PHỎNG PHẦN MỀM CHẬM CHẠP (hơn Software Emulation).",
    "trickDetails": {
      "whyTrapped": "Các phương án sai đưa ra các đặc tính viễn tưởng (không tốn điện, tự tăng RAM).",
      "trickWord": "Bẫy ưu điểm kép: Không sửa OS + Tránh chi phí mô phỏng",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục V.1",
      "tip": "Full Virtualization: Vừa không sửa OS, vừa chạy trực tiếp phần cứng cực nhanh."
    }
  },
  {
    "id": "cloud-c2-d1-036",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-1-privilege-levels",
    "question": "Ba mức đặc quyền phần cứng (Privilege Levels) trong kiến trúc CPU ảo hóa hiện đại là gì?",
    "options": [
      "Admin Mode (cao nhất) ➔ Guest Mode ➔ Application Mode (thấp nhất)",
      "User Mode (cao nhất) ➔ Kernel Mode ➔ Hypervisor Mode (thấp nhất)",
      "Kernel Mode (cao nhất) ➔ Hypervisor Mode ➔ User Mode (thấp nhất)",
      "Hypervisor Mode (cao nhất) ➔ Kernel Mode ➔ User Mode (thấp nhất)"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Thứ tự đặc quyền từ cao xuống thấp: (1) Hypervisor Mode (Root Ring 0, cao nhất) ➔ (2) Kernel Mode (Guest OS) ➔ (3) User Mode (Ứng dụng người dùng, thấp nhất).",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm Kernel Mode là cao nhất (trong kiến trúc không ảo hóa cũ thì Kernel là cao nhất).",
      "trickWord": "Bẫy thứ tự đặc quyền: Hypervisor Mode là cao nhất",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1",
      "tip": "Trong ảo hóa: Hypervisor Mode (trùm cuối) > Kernel Mode (Guest OS) > User Mode."
    }
  },
  {
    "id": "cloud-c2-d1-037",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-1-privilege-levels",
    "question": "Thành phần nào có thẩm quyền độc quyền trong việc tạo lập máy ảo và cấp phát bộ nhớ RAM vật lý?",
    "options": [
      "Hệ điều hành khách Guest OS chạy tại mức đặc quyền Kernel Mode",
      "Chỉ duy nhất Hypervisor chạy tại mức đặc quyền Hypervisor Mode",
      "Ứng dụng người dùng User Applications chạy tại mức đặc quyền User Mode",
      "Bộ định tuyến mạng Top-of-Rack switch đặt trên đỉnh giá đỡ máy chủ"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "CHỈ DUY NHẤT Hypervisor hoạt động tại mức đặc quyền tối cao Hypervisor Mode mới có quyền can thiệp phần cứng vật lý, tạo lập máy ảo và phân bổ dung lượng RAM vật lý.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là hệ điều hành khách (Guest OS) có thể tự cấp phát bộ nhớ RAM vật lý.",
      "trickWord": "Bẫy thẩm quyền độc quyền của Hypervisor",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1",
      "tip": "Chỉ Hypervisor mới có quyền đụng vào RAM và phần cứng vật lý thật."
    }
  },
  {
    "id": "cloud-c2-d1-038",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-1-privilege-levels",
    "question": "Cơ chế 'Trap-and-Emulate' trong ảo hóa CPU hoạt động ra sao khi Guest OS gửi chỉ lệnh đặc quyền?",
    "options": [
      "Máy chủ vật lý sẽ tự động khởi động lại để bảo vệ an toàn cho hệ thống",
      "Hệ thống sẽ lập tức xóa sổ máy ảo đó khỏi bộ nhớ do vi phạm bảo mật",
      "Chỉ lệnh sẽ được chuyển tiếp trực tiếp xuống thanh ghi phần cứng thực thi",
      "CPU kích hoạt ngắt bẫy Trap chuyển giao quyền cho Hypervisor giả lập"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Khi Guest OS cố thực hiện chỉ lệnh nhạy cảm đặc quyền, CPU vật lý sẽ chặn lại bằng ngắt 'Trap' (Bẫy), tước quyền thực thi và chuyển giao cho Hypervisor xử lý giả lập (Emulate) an toàn.",
    "trickDetails": {
      "whyTrapped": "Từ 'Trap' (bẫy) dễ bị suy diễn thành hành động trừng phạt, xóa máy ảo hoặc sập máy.",
      "trickWord": "Bẫy cơ chế Trap-and-Emulate (CPU ngắt Trap chuyển Hypervisor giả lập)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1",
      "tip": "Trap-and-Emulate = CPU chặn Trap ➔ Hypervisor giả lập an toàn."
    }
  },
  {
    "id": "cloud-c2-d1-039",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-2-virtual-io",
    "question": "Chuỗi quy trình chuyển tiếp I/O chuẩn mực trong kiến trúc Virtual I/O của máy ảo là gì?",
    "options": [
      "Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ DC Storage",
      "Guest OS ➔ DC Storage ➔ Hypervisor ➔ Device Controller ➔ Virtual I/O",
      "Hypervisor ➔ Guest OS ➔ Device Controller ➔ Virtual I/O ➔ DC Storage",
      "Virtual I/O ➔ Guest OS ➔ DC Storage ➔ Hypervisor ➔ Device Controller"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Đường ống chuẩn: Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ Data Center Storage (SAN/NAS).",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ đảo lộn thứ tự giữa Hypervisor, Virtual I/O và Device Controller.",
      "trickWord": "Bẫy chuỗi đường ống Virtual I/O 5 bước chuẩn mực",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2",
      "tip": "Guest OS ➔ Virtual I/O ➔ Hypervisor ➔ Device Controller ➔ Storage."
    }
  },
  {
    "id": "cloud-c2-d1-040",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-2-virtual-io",
    "question": "Đối với Hệ điều hành khách (Guest OS), các thiết bị phần cứng ảo hóa có đặc điểm gì?",
    "options": [
      "Chỉ có thể đọc được dữ liệu mà không bao giờ ghi được dữ liệu mới",
      "Luôn bị hệ điều hành khách nhận diện là thiết bị giả mạo và từ chối",
      "Không thể phân biệt được với các thiết bị phần cứng vật lý thật",
      "Bắt buộc người dùng phải nạp trình điều khiển driver thủ công hàng ngày"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong Virtual I/O, các thiết bị ảo được Hypervisor trừu tượng hóa chuẩn mực đến mức Guest OS hoàn toàn không thể phân biệt được chúng với thiết bị vật lý thật.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Guest OS luôn nhận diện được máy ảo và đòi hỏi driver riêng.",
      "trickWord": "Bẫy không thể phân biệt được với thiết bị vật lý thật",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2",
      "tip": "Dưới góc nhìn Guest OS: Thiết bị ảo giống hệt thiết bị vật lý thật 100%."
    }
  },
  {
    "id": "cloud-c2-d1-041",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-2-virtual-io",
    "question": "Vì sao Máy ảo được định nghĩa là một 'Đối tượng Kỹ thuật số' (Digital Object)?",
    "options": [
      "Vì máy ảo được tạo lập và quản trị hoàn toàn một trăm phần trăm bằng phần mềm",
      "Vì máy ảo được làm từ các linh kiện điện tử kỹ thuật số bán dẫn cao cấp",
      "Vì máy ảo chỉ có thể hiển thị dưới dạng các con số đếm trên màn hình máy tính",
      "Vì máy ảo bắt buộc phải có chứng chỉ chữ ký số điện tử của chính phủ cấp"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Máy ảo là Digital Object vì nó tồn tại và được quản lý 100% bằng phần mềm (dưới dạng các file cấu hình và file đĩa), cho phép đóng gói (Encapsulation), nhân bản (Cloning) và di chuyển (Migration) dễ dàng.",
    "trickDetails": {
      "whyTrapped": "Từ 'Digital Object' dễ bị liên tưởng sang chứng chỉ số hoặc linh kiện vi mạch điện tử.",
      "trickWord": "Bẫy máy ảo quản lý 100% bằng phần mềm (Digital Object)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2",
      "tip": "Digital Object = 100% phần mềm ➔ Đóng gói, nhân bản, di chuyển qua mạng như 1 file."
    }
  },
  {
    "id": "cloud-c2-d1-042",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-3-vm-migration",
    "question": "Tính năng then chốt của công nghệ 'Live VM Migration' (Di chuyển máy ảo trực tiếp) là gì?",
    "options": [
      "Di chuyển toàn bộ thùng máy tính vật lý sang phòng máy khác bằng xe đẩy chuyên dụng",
      "Di chuyển máy ảo đang chạy sang máy chủ khác với thời gian ngưng trệ tiệm cận không",
      "Tắt nguồn máy ảo và sao chép dữ liệu qua mạng kéo dài trong nhiều giờ đồng hồ",
      "Chuyển đổi ngôn ngữ hiển thị của hệ điều hành từ tiếng Anh sang tiếng Việt tức thì"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Live VM Migration cho phép chuyển nguyên vẹn một máy ảo ĐANG CHẠY sang máy chủ khác mà người dùng đang truy cập không hề cảm thấy bị gián đoạn (downtime < vài trăm mili-giây).",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với Cold Migration (tắt máy ảo rồi copy) hoặc di chuyển phần cứng vật lý.",
      "trickWord": "Bẫy di chuyển máy ảo ĐANG CHẠY với downtime tiệm cận 0",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.3",
      "tip": "Live Migration = VM đang chạy, người dùng không nhận ra bị chuyển máy chủ."
    }
  },
  {
    "id": "cloud-c2-d1-043",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-3-vm-migration",
    "question": "Trong Giai đoạn 1 (Pre-copy Phase) của Live VM Migration, trạng thái của máy ảo ra sao?",
    "options": [
      "Toàn bộ dữ liệu trong bộ nhớ RAM của máy ảo bị xóa sạch để chuẩn bị di chuyển",
      "Máy ảo bị đóng băng hoàn toàn và ngắt kết nối mạng ngay từ giây phút đầu tiên",
      "Máy ảo vẫn tiếp tục hoạt động và phục vụ người dùng bình thường trên máy gốc",
      "Máy ảo tự động khởi động lại ba lần liên tiếp để đồng bộ hóa địa chỉ MAC mạng"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong Pre-copy Phase, máy ảo VẪN TIẾP TỤC CHẠY và phục vụ người dùng bình thường, trong khi các trang nhớ RAM được sao chép nền qua máy chủ đích.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nghĩ bắt đầu migration là máy ảo phải bị ngưng hoạt động ngay.",
      "trickWord": "Bẫy Pre-copy Phase máy ảo VẪN CHẠY BÌNH THƯỜNG",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.3",
      "tip": "Giai đoạn Pre-copy: VM vẫn chạy bình thường, sao chép RAM chạy nền."
    }
  },
  {
    "id": "cloud-c2-d1-044",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-3-vm-migration",
    "question": "Khái niệm 'Dirty Pages' (Trang nhớ bẩn) trong quy trình Pre-copy được hiểu là gì?",
    "options": [
      "Các tập tin rác bị hệ điều hành bỏ rơi sau khi người dùng gỡ cài đặt phần mềm",
      "Các vùng nhớ bị nhiễm mã độc tống tiền ransomware trong quá trình hoạt động",
      "Các thanh ghi CPU bị lỗi vật lý không thể đọc được dữ liệu do quá nóng",
      "Các trang bộ nhớ bị người dùng ghi đè thay đổi trong lúc đang sao chép nền"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "'Dirty Pages' là các trang nhớ RAM bị sửa đổi/ghi đè trong khi hệ thống đang sao chép RAM sang máy đích. Do đó hệ thống phải tiếp tục lặp lại sao chép các trang bị bẩn này.",
    "trickDetails": {
      "whyTrapped": "Từ 'Dirty' (bẩn) dễ bị hiểu nhầm thành virus, mã độc hoặc rác phần mềm.",
      "trickWord": "Bẫy Dirty Pages là trang nhớ bị thay đổi trong lúc chép",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.3",
      "tip": "Dirty Pages = Trang RAM bị người dùng ghi mới trong lúc đang copy."
    }
  },
  {
    "id": "cloud-c2-d1-045",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-3-vm-migration",
    "question": "Hành động tạm ngưng máy ảo (Suspend VM) trong tích tắc dưới 0.5 giây diễn ra ở giai đoạn nào?",
    "options": [
      "Giai đoạn 1 – Pre-copy Phase ngay khi nhận lệnh yêu cầu di chuyển máy ảo",
      "Giai đoạn 2 – Stop-and-copy Phase để truyền nốt dirty pages và thanh ghi CPU",
      "Giai đoạn 3 – Post-copy Phase sau khi máy ảo đã sang máy chủ mới thành công",
      "Giai đoạn khởi tạo khi kỹ sư cắm cáp mạng vào máy chủ vật lý mới"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Việc tạm ngưng máy ảo (Suspend) chỉ diễn ra ở Giai đoạn 2 (Stop-and-copy Phase) trong tích tắc (<0.5 giây) để truyền nốt các dirty pages cuối cùng và trạng thái CPU registers.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm giai đoạn tạm ngưng là Pre-copy hoặc Post-copy.",
      "trickWord": "Bẫy tạm ngưng máy ảo ở Giai đoạn 2 (Stop-and-copy Phase)",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.3",
      "tip": "Tạm ngưng chép nốt dirty pages = Stop-and-copy Phase (<0.5 giây)."
    }
  },
  {
    "id": "cloud-c2-d1-046",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s6",
    "subsectionId": "cloud-ch2-s6-3-vm-migration",
    "question": "Giai đoạn 3 (Post-copy Phase) của Live VM Migration hoàn tất bằng các hành động nào?",
    "options": [
      "Khôi phục máy ảo trên máy đích cập nhật bảng định tuyến ARP và giải phóng RAM",
      "Tắt nguồn máy chủ đích và yêu cầu người dùng đăng nhập lại từ đầu vào hệ thống",
      "Chuyển toàn bộ dữ liệu máy chủ cũ sang lưu trữ trên băng từ ngoại tuyến chậm",
      "Xóa bỏ hoàn toàn địa chỉ IP của máy ảo và cấp phát một dải địa chỉ MAC mới"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Giai đoạn Post-copy: Host B khôi phục hoạt động của máy ảo (Unsuspend), cập nhật bảng địa chỉ ARP mạng để lưu lượng chuyển sang Host B, và Host A giải phóng tài nguyên RAM.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm là sau khi di chuyển phải đổi IP hoặc bắt người dùng đăng nhập lại.",
      "trickWord": "Bẫy Post-copy: Unsuspend + cập nhật ARP + giải phóng RAM máy cũ",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VI.3",
      "tip": "Post-copy: Chạy lại VM trên máy mới (Unsuspend) + Cập nhật ARP + Xóa RAM máy cũ."
    }
  },
  {
    "id": "cloud-c2-d1-047",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s7",
    "subsectionId": "cloud-ch2-s7-1-hosted-features",
    "question": "Điểm khác biệt kiến trúc căn bản giữa Type 1 (Bare-Metal) và Type 2 (Hosted Hypervisor) là gì?",
    "options": [
      "Type 1 bắt buộc phải có chuột bàn phím còn Type 2 chỉ điều khiển qua dòng lệnh",
      "Type 1 chỉ chạy được hệ điều hành Linux còn Type 2 chỉ chạy được Windows",
      "Type 1 dùng cho máy tính cá nhân còn Type 2 dùng cho các siêu trung tâm dữ liệu",
      "Type 1 chạy trực tiếp trên phần cứng còn Type 2 chạy trên một hệ điều hành chủ"
    ],
    "answer": 3,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Type 1 (Bare-Metal) cài đặt và chạy trực tiếp trên phần cứng vật lý (như ESXi). Type 2 (Hosted) là một ứng dụng phần mềm chạy trên một Hệ điều hành chủ (Host OS như VirtualBox trên Windows).",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm ngược vai trò sử dụng giữa Type 1 (Data Center) và Type 2 (PC cá nhân).",
      "trickWord": "Bẫy Type 1 trực tiếp phần cứng vs Type 2 chạy trên Host OS",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VII.1",
      "tip": "Type 1 = Bare-Metal (trực tiếp phần cứng); Type 2 = Hosted (chạy trên Host OS)."
    }
  },
  {
    "id": "cloud-c2-d1-048",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s7",
    "subsectionId": "cloud-ch2-s7-1-hosted-features",
    "question": "Chế độ mạng Bridged Network trong Hosted Hypervisor cung cấp đặc tính kết nối nào?",
    "options": [
      "Máy ảo buộc phải dùng chung một địa chỉ IP duy nhất của máy chủ vật lý",
      "Máy ảo hoàn toàn bị ngắt kết nối mạng không thể liên lạc với bất kỳ ai",
      "Máy ảo nhận địa chỉ IP độc lập cùng dải mạng cục bộ LAN với máy chủ vật lý",
      "Máy ảo chỉ có thể giao tiếp với các máy chủ đặt ngoài không gian vũ trụ"
    ],
    "answer": 2,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong chế độ Bridged, card mạng ảo của máy ảo hoạt động như một nút mạng độc lập cắm chung vào switch LAN với máy chủ vật lý và nhận địa chỉ IP riêng biệt cùng dải mạng.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm giữa Bridged (IP độc lập cùng dải LAN) với NAT (chia sẻ IP của Host để ra mạng).",
      "trickWord": "Bẫy Bridged Network nhận IP riêng cùng dải LAN",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VII.1",
      "tip": "Bridged = IP riêng cùng dải mạng LAN với Host; NAT = Dùng ké IP của Host."
    }
  },
  {
    "id": "cloud-c2-d1-049",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s7",
    "subsectionId": "cloud-ch2-s7-1-hosted-features",
    "question": "Đĩa cứng của máy ảo trong kiến trúc Hosted Hypervisor được lưu trữ dưới hình thức nào trên Host OS?",
    "options": [
      "Được đóng gói gọn thành một tập tin đơn lẻ như đuôi chấm vmdk hoặc vdi",
      "Bắt buộc phải chiếm trọn vẹn một ổ đĩa cứng vật lý riêng biệt cắm ngoài",
      "Được lưu trữ trực tiếp vào các thanh ghi của bộ nhớ đệm CPU máy tính",
      "Được phân tán ngẫu nhiên vào các thư mục hệ thống của hệ điều hành chủ"
    ],
    "answer": 0,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Trong Type 2 Hypervisor, toàn bộ ổ cứng ảo của máy ảo được đóng gói thành một file duy nhất (như .vmdk của VMware hoặc .vdi của VirtualBox) lưu trên hệ thống tệp của Host OS.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ ổ đĩa ảo phải là một phân vùng đĩa cứng vật lý (Partition) độc lập.",
      "trickWord": "Bẫy đĩa ảo là một file đơn lẻ (.vmdk / .vdi) trên Host OS",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VII.1",
      "tip": "Đĩa máy ảo Type 2 = 1 file duy nhất (.vmdk hoặc .vdi) trên máy chủ."
    }
  },
  {
    "id": "cloud-c2-d1-050",
    "trickSet": 1,
    "sectionId": "cloud-ch2-s7",
    "subsectionId": "cloud-ch2-s7-2-hosted-vs-multiboot",
    "question": "Khác biệt bản chất căn bản nhất giữa chế độ Khởi động kép (Multiboot) và Hosted Hypervisor là gì?",
    "options": [
      "Multiboot cho phép chạy song song năm hệ điều hành cùng lúc trên màn hình",
      "Multiboot chỉ chạy duy nhất một OS và bắt buộc khởi động lại máy khi muốn đổi",
      "Multiboot sử dụng phần mềm Hypervisor để chia sẻ tài nguyên bộ nhớ RAM",
      "Multiboot hỗ trợ copy văn bản hai chiều qua lại giữa các hệ điều hành tức thì"
    ],
    "answer": 1,
    "difficulty": "hard",
    "isTrick": true,
    "explanation": "Multiboot (Dual Boot) chỉ có thể chạy DUY NHẤT 1 HỆ ĐIỀU HÀNH tại một thời điểm trên phần cứng vật lý; muốn chuyển sang hệ điều hành khác BẮT BUỘC PHẢI KHỞI ĐỘNG LẠI MÁY (REBOOT). Hosted Hypervisor chạy đồng thời nhiều OS cùng lúc.",
    "trickDetails": {
      "whyTrapped": "Rất nhiều người nhầm tưởng Multiboot cũng là một dạng ảo hóa chạy song song nhiều OS.",
      "trickWord": "Bẫy Multiboot chỉ chạy 1 OS tại một thời điểm và BẮT BUỘC PHẢI REBOOT",
      "citation": "Giáo trình Điện toán đám mây — Chương 2, Mục VII.2",
      "tip": "Multiboot = 1 thời điểm chỉ chạy 1 OS + Muốn đổi PHẢI REBOOT máy."
    }
  }
];
