/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY CHUYÊN SÂU — CHƯƠNG 4 (BỘ ĐỀ 2)
   Môn học: Điện toán đám mây (Cloud Computing)
   Mã chương: cloud-ch4
   Bộ đề bẫy số: 2 (trick-2)
   Quy mô: 50 câu hỏi bẫy Vận dụng cao (Hard / Trick)
   Đặc điểm:
   - 100% câu hỏi có trickDetails (whyTrapped, trickWord, citation, tip)
   - Đa dạng hóa 5 dạng câu hỏi: Chọn câu SAI, Chọn câu ĐÚNG, Chùm mệnh đề I-II-III,
     Kịch bản kiến trúc thực tế, Phân biệt khái niệm song sinh.
   - 100% câu hỏi đạt chuẩn cân bằng độ dài phương án ΔL = Lmax - Lmin <= 15 ký tự
   - Độc lập 100% với Bộ đề bẫy 1
   - Phân bổ đáp án chuẩn: 12A - 13B - 12C - 13D
   ============================================================ */

export const questionsCloudCh4Trick2 = [
  {
    "id": "cloud-c4-d2-001",
    "chapterId": "cloud-ch4",
    "question": "Khi nghiên cứu về ranh giới trách nhiệm chia sẻ trong mô hình PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Lập trình viên bắt buộc phải tự cấu hình, vá lỗi hạt nhân hệ điều hành và phân vùng ổ cứng máy chủ.",
      "Lập trình viên chỉ cần tập trung 100% thời gian quản lý mã nguồn ứng dụng và cấu trúc dữ liệu lưu trữ.",
      "Nhà cung cấp đám mây chịu trách nhiệm bảo trì toàn bộ hạ tầng vật lý, mạng truyền thông và hệ điều hành.",
      "Mọi vấn đề liên quan đến việc cập nhật bản vá bảo mật cho runtime và middleware do nhà cung cấp đảm nhận."
    ],
    "answer": 0,
    "explanation": "Trong mô hình PaaS, nhà phát triển CHỈ quản lý 2 tầng: Applications và Data. Tầng hệ điều hành (OS), runtime, middleware và phần cứng máy chủ hoàn toàn do nhà cung cấp dịch vụ quản lý và vá lỗi tự động.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn giữa PaaS với IaaS (nơi người dùng phải tự cài đặt và vá lỗi hệ điều hành).",
      "trickWord": "Bẫy ngụy biện lập trình viên phải tự cấu hình và vá lỗi hệ điều hành",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "PaaS = User CHỈ quản lý Applications + Data; Provider lo toàn bộ OS và hạ tầng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-002",
    "chapterId": "cloud-ch4",
    "question": "Theo chuẩn kiến trúc điện toán đám mây, nhận định nào sau đây về 4 thành phần kỹ thuật cơ bản của PaaS là SAI?",
    "options": [
      "Hệ điều hành cung cấp môi trường nền tảng để chạy các dịch vụ máy chủ và được nhà cung cấp vá tự động.",
      "Hệ thống quản trị cơ sở dữ liệu bắt buộc kỹ sư phần mềm phải tự mua sắm và lắp ráp ổ đĩa vật lý riêng.",
      "Môi trường phát triển bao gồm đầy đủ bộ SDK, trình biên dịch, công cụ gỡ lỗi và runtime đa ngôn ngữ.",
      "Máy chủ web xử lý yêu cầu mạng, tự động cấp phát chứng chỉ SSL/TLS và cân bằng tải giữa các bản sao."
    ],
    "answer": 1,
    "explanation": "Trong PaaS, Cơ sở dữ liệu (DBMS) được cấu hình và quản trị sẵn dưới dạng dịch vụ đám mây, tự động sao lưu và nhân bản; lập trình viên không bao giờ phải lắp ráp hay cấu hình ổ cứng vật lý.",
    "trickDetails": {
      "whyTrapped": "Dễ bị đánh lừa bởi quan niệm truyền thống về việc quản trị cơ sở dữ liệu tại chỗ (On-premise).",
      "trickWord": "Bẫy bắt buộc kỹ sư phần mềm phải tự mua sắm lắp ráp ổ đĩa vật lý",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "PaaS trừu tượng hóa phần cứng; Database là dịch vụ phần mềm dựng sẵn do nhà cung cấp cấp phát."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-003",
    "chapterId": "cloud-ch4",
    "question": "Khi phân tích nhóm lợi ích 'Tiết kiệm chi phí' của mô hình PaaS, khẳng định nào sau đây là SAI?",
    "options": [
      "Doanh nghiệp cắt giảm tối đa chi phí đầu tư ban đầu (CAPEX) cho phần cứng và bản quyền phần mềm.",
      "Mô hình thanh toán theo mức sử dụng thực tế (Pay-as-you-go) giúp tối ưu hóa chi phí vận hành (OPEX).",
      "PaaS giúp doanh nghiệp loại bỏ hoàn toàn 100% mọi khoản chi phí công nghệ thông tin định kỳ hàng tháng.",
      "Doanh nghiệp tiết kiệm ngân sách nhờ tinh giản bộ máy nhân sự chuyên trách quản trị hệ điều hành máy chủ."
    ],
    "answer": 2,
    "explanation": "PaaS chuyển đổi chi phí từ CAPEX sang OPEX chứ không loại bỏ hoàn toàn chi phí CNTT. Doanh nghiệp vẫn phải trả phí thuê bao hoặc phí tài nguyên điện toán thực dùng hàng tháng cho nhà cung cấp.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ bị bẫy bởi từ ngữ tuyệt đối hóa mang tính phi lý: 'loại bỏ hoàn toàn 100% mọi chi phí'.",
      "trickWord": "Bẫy từ ngữ tuyệt đối hóa 'loại bỏ hoàn toàn 100% chi phí CNTT định kỳ'",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1",
      "tip": "PaaS biến CAPEX thành OPEX linh hoạt, không có dịch vụ đám mây doanh nghiệp nào là miễn phí 100%."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-004",
    "chapterId": "cloud-ch4",
    "question": "Về rủi ro 'Khóa nhà cung cấp' (Vendor Lock-in) trong mô hình PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Vendor Lock-in xảy ra khi ứng dụng phụ thuộc chặt chẽ vào các API, SDK độc quyền của một nhà cung cấp.",
      "Chi phí chuyển đổi sang nền tảng khác rất tốn kém do phải viết lại mã nguồn và trả phí xuất dữ liệu lớn.",
      "Việc đóng gói ứng dụng bằng Docker và điều phối bằng Kubernetes giúp giảm thiểu đáng kể Vendor Lock-in.",
      "Mọi ứng dụng viết trên bất kỳ nền tảng PaaS nào cũng luôn di chuyển sang hãng khác mà không tốn công sức."
    ],
    "answer": 3,
    "explanation": "Chuyển đổi ứng dụng giữa các nền tảng PaaS độc quyền rất khó khăn và tốn kém do khác biệt về API, dịch vụ lưu trữ và cơ chế triển khai. Phát biểu cho rằng luôn di chuyển được mà không tốn công sức là hoàn toàn sai.",
    "trickDetails": {
      "whyTrapped": "Nhiều người lầm tưởng công nghệ đám mây đã đạt mức tương thích tự động tuyệt đối trên mọi nền tảng.",
      "trickWord": "Bẫy khẳng định luôn di chuyển được giữa các PaaS mà không tốn công sức",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "Vendor Lock-in là thách thức lớn nhất của PaaS độc quyền; muốn tránh phải dùng chuẩn mở như Kubernetes."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-005",
    "chapterId": "cloud-ch4",
    "question": "Khi khảo sát về nền tảng PaaS Red Hat OpenShift, nhận định nào sau đây là SAI?",
    "options": [
      "OpenShift là phần mềm đóng gói độc quyền của Red Hat và hoàn toàn không tương thích với Kubernetes.",
      "OpenShift được xây dựng trực tiếp trên nền tảng Docker và công nghệ điều phối container Kubernetes.",
      "Nền tảng này hỗ trợ triển khai đồng nhất ứng dụng trên cả môi trường Multi-cloud và Hybrid Cloud.",
      "OpenShift cung cấp quy trình CI/CD tích hợp sẵn giúp tự động hóa quá trình đóng gói và triển khai mã."
    ],
    "answer": 0,
    "explanation": "Red Hat OpenShift là nền tảng PaaS mã nguồn mở cấp doanh nghiệp được xây dựng TRỰC TIẾP trên nền tảng KUBERNETES và Docker, chứ không phải phần mềm đóng không tương thích.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ rõ cốt lõi công nghệ nền tảng của Red Hat OpenShift là Kubernetes.",
      "trickWord": "Bẫy OpenShift không tương thích với Kubernetes",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Gặp Red Hat OpenShift ➔ Nghĩ ngay đến KUBERNETES và mã nguồn mở cấp doanh nghiệp."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-006",
    "chapterId": "cloud-ch4",
    "question": "Về các tính năng cốt lõi của nền tảng Google App Engine (GAE), nhận định nào sau đây là SAI?",
    "options": [
      "GAE cung cấp khả năng tự động co giãn cực nhanh (Instant Auto-scaling) theo lưu lượng truy cập thực tế.",
      "GAE bắt buộc lập trình viên phải dừng hệ thống hàng giờ để bảo trì mỗi khi triển khai phiên bản code mới.",
      "Tính năng Traffic Splitting của GAE cho phép phân chia phần trăm người dùng phục vụ thử nghiệm A/B.",
      "GAE hỗ trợ quản lý đồng thời nhiều phiên bản ứng dụng khác nhau trên cùng một môi trường đám mây."
    ],
    "answer": 1,
    "explanation": "GAE hỗ trợ triển khai không thời gian chết (Zero-downtime deployment) và quản lý phiên bản linh hoạt; lập trình viên chuyển đổi phiên bản tức thì mà không cần dừng hệ thống hàng giờ.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ việc nâng cấp phần mềm phải gắn liền với thời gian chết (Downtime) bảo trì hệ thống.",
      "trickWord": "Bẫy bắt buộc phải dừng hệ thống hàng giờ để bảo trì mỗi khi cập nhật",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "PaaS hiện đại như GAE hỗ trợ Zero-Downtime Deployment và Traffic Splitting cực kỳ mượt mà."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-007",
    "chapterId": "cloud-ch4",
    "question": "Về ranh giới quyền kiểm soát hệ thống và bảo mật trong PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Dữ liệu và mã nguồn ứng dụng được lưu trữ trên môi trường đám mây công cộng dùng chung hạ tầng mạng.",
      "Doanh nghiệp bị hạn chế quyền kiểm soát đối với hạ tầng cơ sở và cấu hình an ninh tầng sâu của máy chủ.",
      "Lập trình viên được nhà cung cấp cấp quyền Root để tự do biên dịch lại nhân Linux Kernel của máy chủ.",
      "Việc đáp ứng các tiêu chuẩn bảo mật khắt khe như HIPAA hoặc GDPR đòi hỏi cấu hình kiểm soát chặt chẽ."
    ],
    "answer": 2,
    "explanation": "Trong mô hình PaaS, người dùng hoàn toàn KHÔNG có quyền truy cập root vào hệ điều hành bên dưới để sửa nhân kernel hay cấu hình mạng phần cứng. Khi cần quyền root, doanh nghiệp phải chọn IaaS.",
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn quyền quản trị ứng dụng với quyền can thiệp cấp hệ điều hành (Root OS / Kernel).",
      "trickWord": "Bẫy lập trình viên được cấp quyền Root biên dịch lại nhân Linux Kernel",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "PaaS = NO ROOT ACCESS vào hệ điều hành; muốn can thiệp nhân OS thì bắt buộc phải dùng IaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-008",
    "chapterId": "cloud-ch4",
    "question": "Khi nói về thành phần Máy chủ web (Web Server) tích hợp trong nền tảng PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Web Server tự động đảm nhận việc cấp phát và gia hạn chứng chỉ bảo mật số SSL/TLS cho tên miền.",
      "Hệ thống tích hợp sẵn cơ chế Reverse Proxy để định tuyến yêu cầu từ người dùng tới các container ứng dụng.",
      "Cơ chế cân bằng tải thông minh (Load Balancer) tự động phân phối đều lưu lượng giữa các bản sao chạy nền.",
      "Web Server trong PaaS chỉ hỗ trợ giao thức HTTP thô sơ và không có bất kỳ cơ chế bảo vệ lưu lượng nào."
    ],
    "answer": 3,
    "explanation": "Web Server trong PaaS là thành phần cực kỳ hiện đại, tích hợp Reverse Proxy, tự động cấp phát SSL/TLS và cân bằng tải thông minh; nhận định cho rằng nó chỉ hỗ trợ HTTP thô sơ là hoàn toàn sai.",
    "trickDetails": {
      "whyTrapped": "Dễ đánh giá thấp khả năng tự động hóa hạ tầng mạng của thành phần Web Server trong PaaS.",
      "trickWord": "Bẫy Web Server chỉ hỗ trợ HTTP thô sơ và không có cơ chế bảo vệ lưu lượng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "Web Server trong PaaS = Load Balancer + SSL/TLS tự động + Reverse Proxy hiện đại."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-009",
    "chapterId": "cloud-ch4",
    "question": "Trong khẩu quyết 6 chiều giá trị doanh nghiệp của PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Giá trị 'Rẻ hơn' đồng nghĩa với việc doanh nghiệp được miễn phí toàn bộ dung lượng truyền tải dữ liệu.",
      "Giá trị 'Nhanh hơn' thể hiện ở việc rút ngắn đáng kể thời gian đưa sản phẩm ra thị trường (Time-to-Market).",
      "Giá trị 'Linh hoạt hơn' mang lại khả năng tự động co giãn tài nguyên theo biến động người dùng thực tế.",
      "Giá trị 'Hợp tác hơn' giúp đội ngũ lập trình viên phân tán làm việc liền mạch qua quy trình DevOps chung."
    ],
    "answer": 0,
    "explanation": "'Rẻ hơn' trong PaaS có nghĩa là loại bỏ chi phí mua sắm hạ tầng ban đầu (CAPEX) và chuyển sang trả theo mức dùng thực tế (OPEX), chứ không phải được miễn phí toàn bộ băng thông truyền tải dữ liệu.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm 'tiết kiệm chi phí đầu tư' với việc 'miễn phí hoàn toàn dịch vụ'.",
      "trickWord": "Bẫy giá trị 'Rẻ hơn' đồng nghĩa với việc miễn phí toàn bộ dữ liệu",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục V.1",
      "tip": "6 giá trị: Nhanh hơn, Rẻ hơn, Linh hoạt hơn, Hợp tác hơn, An toàn hơn, Đổi mới hơn."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-010",
    "chapterId": "cloud-ch4",
    "question": "Về nền tảng IBM Cloud Foundry và các công nghệ tích hợp, nhận định nào sau đây là SAI?",
    "options": [
      "Nền tảng này dựa trên chuẩn công nghệ mã nguồn mở Cloud Foundry để quản lý vòng đời ứng dụng.",
      "IBM Cloud Foundry cấm kết nối với các dịch vụ trí tuệ nhân tạo IBM Watson AI và phân tích dữ liệu lớn.",
      "Môi trường này được tối ưu hóa đặc biệt cho các giải pháp cấp doanh nghiệp trong lĩnh vực tài chính.",
      "Hỗ trợ triển khai linh hoạt các ứng dụng đám mây phức tạp với độ tin cậy và khả năng mở rộng cao."
    ],
    "answer": 1,
    "explanation": "Ngược lại hoàn toàn, điểm nổi bật độc quyền của IBM Cloud Foundry là khả năng tích hợp sâu sắc với trí tuệ nhân tạo IBM Watson AI và các bộ công cụ phân tích Big Data hàng đầu của IBM.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ liên kết biểu tượng giữa IBM Cloud và trí tuệ nhân tạo Watson AI.",
      "trickWord": "Bẫy cấm kết nối với trí tuệ nhân tạo IBM Watson AI và dữ liệu lớn",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "IBM Cloud Foundry luôn gắn liền với từ khóa 'Watson AI' và 'Phân tích dữ liệu lớn ngành tài chính'."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-011",
    "chapterId": "cloud-ch4",
    "question": "Về thách thức tương thích khi di chuyển ứng dụng cũ (Legacy Applications) lên PaaS, nhận định nào sau đây là SAI?",
    "options": [
      "Các ứng dụng nguyên khối cũ thường phụ thuộc vào hệ thống tệp cục bộ nên rất khó đưa lên PaaS phi trạng thái.",
      "Ứng dụng cũ cần phải được tái cấu trúc mã nguồn (Code Refactoring) để phù hợp với môi trường container hóa.",
      "Mọi ứng dụng phần mềm viết cách đây 20 năm đều tự động chạy mượt mà trên PaaS mà không cần sửa đổi mã.",
      "Sự thiếu nhất quán giữa các tiêu chuẩn kỹ thuật giữa các hãng gây cản trở cho việc tích hợp hệ thống cũ."
    ],
    "answer": 2,
    "explanation": "Ứng dụng cũ (Legacy) thường được thiết kế theo kiến trúc nguyên khối, lưu trạng thái trên ổ đĩa cục bộ, nên KHÔNG THỂ tự động chạy trên PaaS hiện đại nếu không được viết lại hoặc tái cấu trúc mã nguồn.",
    "trickDetails": {
      "whyTrapped": "Dễ bị bẫy bởi tuyên bố thổi phồng về khả năng tương thích ngược của nền tảng đám mây.",
      "trickWord": "Bẫy mọi ứng dụng cũ đều tự động chạy mượt mà không cần sửa đổi mã",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "Legacy Apps lên PaaS là bài toán nan giải, bắt buộc phải Refactor hoặc chuyển sang IaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-012",
    "chapterId": "cloud-ch4",
    "question": "Khi phân biệt PaaS truyền thống với kiến trúc Serverless FaaS, nhận định nào sau đây là SAI?",
    "options": [
      "PaaS truyền thống duy trì ứng dụng chạy trên các instance thường trực kể cả khi không có lượt truy cập.",
      "Serverless FaaS chia nhỏ ứng dụng thành các hàm độc lập và chỉ thực thi khi có sự kiện kích hoạt đến.",
      "FaaS hỗ trợ cơ chế Scale-to-Zero giúp doanh nghiệp không phải trả tiền khi hệ thống hoàn toàn nhàn rỗi.",
      "FaaS bắt buộc máy chủ ảo phải chạy liên tục 24/7 và tính phí thuê bao cố định theo tháng như PaaS."
    ],
    "answer": 3,
    "explanation": "FaaS hoạt động hướng sự kiện (Event-driven) và tự động co giãn về 0 (Scale-to-Zero) khi không có yêu cầu, tính phí theo mili-giây thực thi chứ KHÔNG duy trì máy chủ chạy 24/7 cố định như PaaS truyền thống.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ đánh đồng cơ chế cấp phát tài nguyên thường trực của PaaS với mô hình FaaS.",
      "trickWord": "Bẫy FaaS bắt buộc máy chủ ảo phải chạy liên tục 24/7 tính phí cố định",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "FaaS = Event-driven + Scale-to-Zero + Millisecond billing; PaaS = Duy trì instance thường trực."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-013",
    "chapterId": "cloud-ch4",
    "question": "Theo mô hình phân chia trách nhiệm 9 tầng của điện toán đám mây, phát biểu nào sau đây là ĐÚNG về PaaS?",
    "options": [
      "Lập trình viên chỉ chịu trách nhiệm quản lý đúng 2 tầng trên cùng: Applications và Dữ liệu (Data).",
      "Lập trình viên chịu trách nhiệm bảo trì hệ điều hành máy chủ và thay thế các thanh RAM bị hỏng.",
      "Nhà cung cấp đám mây chịu trách nhiệm viết toàn bộ mã nguồn nghiệp vụ kinh doanh cho khách hàng.",
      "Lập trình viên hoàn toàn không quản lý bất kỳ tầng công nghệ nào tương tự như khách hàng dùng SaaS."
    ],
    "answer": 0,
    "explanation": "Ranh giới trách nhiệm PaaS chuẩn xác tuyệt đối: Khách hàng (Developer) quản lý 2 tầng: Applications và Data; Nhà cung cấp đám mây lo toàn bộ 7 tầng còn lại từ hạ tầng đến runtime.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu gán sai trách nhiệm phần cứng (của Provider) hoặc đánh đồng với SaaS.",
      "trickWord": "Chuẩn xác 2 tầng trách nhiệm duy nhất của Developer trên PaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "PaaS: Dev = 2 tầng (Apps + Data); Provider = 7 tầng bên dưới."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-014",
    "chapterId": "cloud-ch4",
    "question": "Về lịch sử tiến hóa Giai đoạn 1 (đầu những năm 2000) của mô hình PaaS, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Thị trường đã bị thống trị bởi các cụm Kubernetes khổng lồ chạy trên hàng trăm trung tâm dữ liệu.",
      "Heroku ra đời năm 2007 hỗ trợ ngôn ngữ Ruby và Google App Engine ra mắt năm 2008 hỗ trợ Python.",
      "Microsoft Azure đã hoàn thiện toàn bộ các tính năng AI phân tán và điều phối container cấp cao.",
      "Tất cả các nền tảng PaaS giai đoạn này đều hỗ trợ hoàn hảo cùng lúc trên 20 ngôn ngữ lập trình."
    ],
    "answer": 1,
    "explanation": "Giai đoạn 1 là thời kỳ sơ khai chứng minh khái niệm (Proof of Concept) với 2 cái tên khai sinh tiêu biểu: Heroku (2007, ban đầu chỉ chạy Ruby) và Google App Engine (2008, ban đầu chỉ chạy Python).",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhớ nhầm mốc thời gian của Kubernetes (Giai đoạn 4) hoặc Azure (Giai đoạn 2).",
      "trickWord": "Nhận diện đúng 2 đại diện tiên phong Heroku (2007) và GAE (2008)",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2",
      "tip": "Giai đoạn 1 = Heroku (2007, Ruby) + Google App Engine (2008, Python)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-015",
    "chapterId": "cloud-ch4",
    "question": "Về cơ chế Tự động co giãn tài nguyên (Auto-scaling) trong PaaS, phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Auto-scaling bắt buộc kỹ sư hệ thống phải trực đêm để điều chỉnh dung lượng máy chủ bằng tay.",
      "Hệ thống chỉ co giãn được dung lượng ổ đĩa lưu trữ chứ không thể tăng giảm số lượng bản sao ứng dụng.",
      "PaaS tự động giám sát tải và tăng giảm số lượng phiên bản ứng dụng theo lưu lượng truy cập thực tế.",
      "Mọi nền tảng PaaS đều giới hạn số lượng bản sao tối đa là 2 phiên bản cho mọi gói tài khoản trả phí."
    ],
    "answer": 2,
    "explanation": "Auto-scaling trong PaaS giám sát các chỉ số (CPU, số lượng request, độ trễ) và tự động nhân bản (Scale-out) hoặc thu hẹp (Scale-in) số lượng instance ứng dụng mà không cần con người can thiệp thủ công.",
    "trickDetails": {
      "whyTrapped": "Nhiều câu hỏi đánh lừa rằng Auto-scaling đòi hỏi can thiệp thủ công hoặc bị giới hạn ngặt nghèo.",
      "trickWord": "Bản chất tự động giám sát và co giãn phiên bản ứng dụng theo tải",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1",
      "tip": "Auto-scaling = Tự động hóa hoàn toàn theo nhu cầu thực tế (Elasticity)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-016",
    "chapterId": "cloud-ch4",
    "question": "Khảo sát về nền tảng Microsoft Azure App Service, nhận định nào sau đây là ĐÚNG?",
    "options": [
      "Nền tảng này nghiêm cấm việc kết nối với các công cụ quản lý mã nguồn GitHub và Azure DevOps.",
      "Azure App Service là giải pháp IaaS thuần túy chỉ cung cấp máy chủ vật lý chưa cài hệ điều hành.",
      "Chỉ hỗ trợ duy nhất một ngôn ngữ lập trình C# và không cho phép chạy các ngôn ngữ nguồn mở khác.",
      "Tích hợp sâu sắc với hệ sinh thái công nghệ Microsoft (.NET, Visual Studio, GitHub, Azure SQL)."
    ],
    "answer": 3,
    "explanation": "Azure App Service tích hợp mượt mà và sâu sắc với toàn bộ hệ sinh thái Microsoft (.NET, C#, Visual Studio, Azure SQL, Cosmos DB) cũng như hỗ trợ đầy đủ các ngôn ngữ nguồn mở như Node.js, Java, Python.",
    "trickDetails": {
      "whyTrapped": "Dễ bị bẫy bởi định kiến sai lầm rằng Azure chỉ chạy được C# hoặc không hỗ trợ GitHub.",
      "trickWord": "Sự tích hợp sâu sắc với hệ sinh thái Microsoft và công cụ phát triển hiện đại",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Azure App Service = Hệ sinh thái Microsoft (.NET, Visual Studio, GitHub Actions) + Đa ngôn ngữ."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-017",
    "chapterId": "cloud-ch4",
    "question": "Về giá trị chiến lược 'Nhanh hơn' (Fast Time-to-Market) của PaaS đối với doanh nghiệp, nhận định nào sau đây là ĐÚNG?",
    "options": [
      "Rút ngắn đáng kể thời gian từ ý tưởng đến sản phẩm thực tế nhờ loại bỏ công đoạn dựng hạ tầng máy chủ.",
      "Tăng tốc độ gõ bàn phím vật lý của lập trình viên lên gấp mười lần thông qua giao diện đám mây.",
      "Bắt buộc toàn bộ người dùng phải truy cập ứng dụng ở tốc độ mạng cố định do nhà cung cấp thiết lập.",
      "Loại bỏ hoàn toàn giai đoạn kiểm thử phần mềm giúp đưa sản phẩm lỗi ra thị trường ngay lập tức."
    ],
    "answer": 0,
    "explanation": "'Nhanh hơn' (Fast Time-to-Market) có ý nghĩa cốt lõi là giải phóng kỹ sư khỏi việc dựng máy chủ, mạng, cài OS, giúp xây dựng MVP và đưa sản phẩm đến tay khách hàng nhanh hơn nhiều tuần.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu diễn giải sai lệch một cách phi lý về tốc độ mạng hoặc bỏ qua kiểm thử.",
      "trickWord": "Rút ngắn thời gian từ ý tưởng đến sản phẩm nhờ loại bỏ khâu dựng hạ tầng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục V.1",
      "tip": "Nhanh hơn = Time-to-Market ngắn hơn, thử nghiệm MVP thần tốc."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-018",
    "chapterId": "cloud-ch4",
    "question": "Về vai trò của công nghệ Container hóa (Docker, Kubernetes) trong PaaS hiện đại, nhận định nào sau đây là ĐÚNG?",
    "options": [
      "Container hóa khiến ứng dụng trở nên nặng nề và tiêu tốn nhiều RAM hơn so với máy ảo truyền thống.",
      "Đóng gói ứng dụng thành các khối độc lập giúp chạy nhất quán và linh hoạt trên đa nền tảng đám mây.",
      "Kubernetes chỉ hoạt động được trên các máy tính để bàn cá nhân và không thể triển khai trên đám mây.",
      "Việc áp dụng container hóa bắt buộc lập trình viên phải từ bỏ toàn bộ các quy trình CI/CD tự động."
    ],
    "answer": 1,
    "explanation": "Container (Docker) đóng gói mã nguồn cùng mọi thư viện phụ thuộc, kết hợp điều phối Kubernetes giúp ứng dụng chạy nhất quán trên mọi môi trường từ Local, On-premise đến Multi-cloud.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nhầm container với máy ảo VM cồng kềnh hoặc nghĩ Kubernetes không hỗ trợ đám mây.",
      "trickWord": "Đóng gói ứng dụng thành khối độc lập chạy nhất quán trên đa đám mây",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2 & IV.1",
      "tip": "Container = Đóng gói độc lập, chạy nhất quán mọi nơi, cốt lõi của PaaS thế hệ mới."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-019",
    "chapterId": "cloud-ch4",
    "question": "Về cơ chế tính cước của mô hình Serverless FaaS (Function as a Service), phát biểu nào sau đây là ĐÚNG?",
    "options": [
      "Doanh nghiệp phải thanh toán chi phí cố định cho toàn bộ máy chủ vật lý bất kể có chạy mã hay không.",
      "Cước phí chỉ được tính theo từng năm dương lịch và không thể hủy bỏ hợp đồng trước thời hạn cam kết.",
      "Nhà cung cấp tính phí chi tiết đến từng mili-giây thời gian thực thi mã và số lượt sự kiện được kích hoạt.",
      "Khách hàng bắt buộc phải đặt cọc trước một khoản tiền bảo đảm hạ tầng trị giá hàng trăm nghìn USD."
    ],
    "answer": 2,
    "explanation": "Serverless FaaS định giá theo mô hình vi mô (Micro-billing): tính phí dựa trên số lần gọi hàm (Request count) và thời lượng CPU/RAM thực tế tiêu thụ làm tròn đến từng mili-giây (Millisecond billing).",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm với mô hình thuê bao máy chủ theo tháng/năm của IaaS hoặc PaaS truyền thống.",
      "trickWord": "Tính cước đến từng mili-giây thời gian thực thi mã và lượt gọi hàm",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "FaaS = Millisecond Billing (tính tiền theo mili-giây thực thi, nhàn rỗi = 0 đồng)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-020",
    "chapterId": "cloud-ch4",
    "question": "Về tiêu chí Trải nghiệm nhà phát triển (Developer Experience - DevEx) trong PaaS, nhận định nào sau đây là ĐÚNG?",
    "options": [
      "DevEx chỉ đo lường tốc độ kết nối của bàn phím chuột của lập trình viên với máy tính cá nhân.",
      "Một nền tảng PaaS có DevEx tốt sẽ bắt buộc lập trình viên phải học thuộc lòng hàng nghìn lệnh nhị phân.",
      "PaaS loại bỏ hoàn toàn các giao diện đồ họa web và chỉ cho phép cấu hình bằng cách gửi tin nhắn SMS.",
      "Cung cấp bộ công cụ dòng lệnh (CLI), Cloud IDE và tự động hóa quy trình triển khai thông qua lệnh git push."
    ],
    "answer": 3,
    "explanation": "PaaS hiện đại rất chú trọng DevEx: cung cấp CLI trực quan, Cloud IDE mượt mà, và cơ chế triển khai tự động chỉ bằng một lệnh 'git push' giúp kỹ sư phát triển sản phẩm với độ ma sát thấp nhất.",
    "trickDetails": {
      "whyTrapped": "Khái niệm DevEx hay bị hiểu sai thành phần cứng máy tính hoặc các giao thức kỳ dị.",
      "trickWord": "Bộ công cụ CLI, Cloud IDE và tự động hóa triển khai qua lệnh git push",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "DevEx = Trải nghiệm lập trình viên tối ưu (CLI, Git push deployment, Cloud IDE)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-021",
    "chapterId": "cloud-ch4",
    "question": "Động lực then chốt thúc đẩy sự bùng nổ của PaaS trong Giai đoạn 3 (đầu những năm 2010) là gì?",
    "options": [
      "Sự trỗi dậy của văn hóa DevOps, quy trình CI/CD tự động và các giải pháp điều phối container sơ khai.",
      "Sự xuất hiện của các loại màn hình máy tính có độ phân giải siêu nét giúp lập trình viên nhìn rõ code hơn.",
      "Sự suy giảm hoàn toàn nhu cầu sử dụng Internet trên các thiết bị di động thông minh của người dùng.",
      "Quy định của các tổ chức quốc tế cấm tất cả các doanh nghiệp không được phép xây dựng phòng máy chủ."
    ],
    "answer": 0,
    "explanation": "Giai đoạn 3 (đầu 2010s) đánh dấu sự hợp nhất của văn hóa DevOps, tự động hóa CI/CD và công nghệ container với các nền tảng như Cloud Foundry và Red Hat OpenShift thời kỳ đầu.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ bị phân tâm bởi các đáp án phi lý về màn hình máy tính hoặc quy định cấm đoán.",
      "trickWord": "Sự trỗi dậy của văn hóa DevOps, CI/CD tự động và container sơ khai",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2",
      "tip": "Giai đoạn 3 = DevOps + CI/CD + Cloud Foundry + OpenShift."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-022",
    "chapterId": "cloud-ch4",
    "question": "Cơ chế Buildpack trong các nền tảng PaaS hiện đại (như Heroku hay Cloud Foundry) đảm nhận nhiệm vụ gì?",
    "options": [
      "Tự động gửi email quảng cáo dịch vụ đến danh bạ khách hàng của doanh nghiệp theo định kỳ mỗi tuần.",
      "Tự động nhận diện ngôn ngữ lập trình, tải các thư viện phụ thuộc và đóng gói mã nguồn thành container.",
      "Tự động xóa bỏ các dòng mã nguồn mà hệ thống nghi ngờ là viết chưa đúng phong cách lập trình chuẩn.",
      "Tự động trừ tiền trực tiếp từ tài khoản ngân hàng của lập trình viên mỗi khi có lỗi cú pháp biên dịch."
    ],
    "answer": 1,
    "explanation": "Buildpack là công nghệ cốt lõi của PaaS: tự động phát hiện ngôn ngữ dự án (Node, Java, Python...), biên dịch mã, cài đặt dependencies và đóng gói thành một container image sẵn sàng chạy production.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không hiểu rõ thuật ngữ kỹ thuật Buildpack và dễ chọn nhầm hành vi xóa code hoặc quảng cáo.",
      "trickWord": "Tự động nhận diện ngôn ngữ lập trình và đóng gói mã thành container",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1 & IV.1",
      "tip": "Buildpack = Source code ➔ Detect runtime ➔ Install dependencies ➔ Runnable container."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-023",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về 4 thành phần kỹ thuật cơ bản của một nền tảng PaaS hoàn chỉnh:\nI. Hệ điều hành được nhà cung cấp đám mây tự động bảo trì và cập nhật bản vá bảo mật định kỳ.\nII. Máy chủ web tích hợp cơ chế cân bằng tải thông minh và tự động gia hạn chứng chỉ bảo mật SSL/TLS.\nIII. Hệ thống cơ sở dữ liệu được cấu hình sẵn và hỗ trợ cơ chế sao lưu dữ liệu tự động.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Cả 3 mệnh đề đều phản ánh chính xác các đặc tính kỹ thuật của 4 thành phần cốt lõi trong PaaS: OS được vá tự động, Web Server có Load Balancer & SSL, DBMS có auto-backup.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghi ngờ một trong 3 thành phần này không có tính năng tự động hóa.",
      "trickWord": "Cả 3 thành phần OS, Web Server, Database đều tích hợp tự động hóa cao",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "4 thành phần PaaS (OS, Dev Tools, DBMS, Web Server) đều do Provider tối ưu tự động."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-024",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau về ranh giới kiểm soát và bảo mật trong mô hình PaaS:\nI. Lập trình viên có toàn quyền Root truy cập nhân hệ điều hành để cài đặt driver mạng phần cứng tùy biến.\nII. Dữ liệu và mã nguồn ứng dụng lưu trên Public Cloud tiềm ẩn rủi ro về môi trường dùng chung tài nguyên.\nIII. Doanh nghiệp gặp thách thức lớn khi phải tuân thủ các quy định bảo mật dữ liệu khắt khe như HIPAA.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề II và III đúng."
    ],
    "answer": 3,
    "explanation": "Mệnh đề I sai vì PaaS KHÔNG cung cấp quyền Root truy cập nhân OS. Mệnh đề II và III đúng vì Public Cloud là môi trường dùng chung hạ tầng (Multi-tenant infra) và khó kiểm soát sâu để đạt chuẩn HIPAA/GDPR.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề I gài bẫy quyền Root OS rất tinh vi nhưng hoàn toàn trái ngược với bản chất PaaS.",
      "trickWord": "Mệnh đề I sai về quyền Root OS; II và III đúng về rủi ro bảo mật",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "PaaS loại trừ quyền Root OS; chỉ có II và III đúng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-025",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về tiến trình lịch sử 4 giai đoạn phát triển của PaaS:\nI. Giai đoạn 1 khởi đầu với các nền tảng tiên phong đơn ngôn ngữ như Heroku (Ruby) và GAE (Python).\nII. Giai đoạn 2 chứng kiến sự tham gia của các tập đoàn công nghệ lớn như Microsoft Azure và AWS.\nIII. Giai đoạn 4 mở rộng lên kiến trúc điều phối container dựa trên Kubernetes và giải pháp Multi-cloud.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 0,
    "explanation": "Cả 3 mệnh đề đều hoàn toàn chuẩn xác theo bài giảng: GĐ1 (2000s sơ khai, Heroku, GAE), GĐ2 (2010s ông lớn Azure, Beanstalk), GĐ4 (nay: Kubernetes, Multi-cloud, Serverless).",
    "trickDetails": {
      "whyTrapped": "Học viên hay nhầm lẫn thứ tự xuất hiện của các công nghệ giữa các giai đoạn.",
      "trickWord": "Cả 3 mệnh đề đều phản ánh chính xác tiến trình lịch sử 4 giai đoạn PaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2",
      "tip": "Tiến trình PaaS: Đơn ngôn ngữ ➔ Đa ngôn ngữ/Ông lớn ➔ DevOps/CI-CD ➔ Kubernetes/Multi-cloud."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-026",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau về quy trình triển khai tự động (One-Click Deployment) và CI/CD trên PaaS:\nI. Mã nguồn sau khi vượt qua các bài kiểm thử tự động sẽ được đóng gói và đưa thẳng lên môi trường live.\nII. Cơ chế Rolling Update hỗ trợ cập nhật phiên bản mới liên tục mà không gây gián đoạn dịch vụ.\nIII. Lập trình viên bắt buộc phải tự cấu hình thủ công từng cổng mạng và nạp từng tệp tin qua FTP.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 1,
    "explanation": "Mệnh đề I và II đúng (đặc trưng của One-Click Deploy và Zero-downtime Rolling Update). Mệnh đề III sai vì PaaS loại bỏ hoàn toàn các thao tác cấu hình cổng mạng và FTP thủ công thời kỳ cũ.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III mô tả quy trình nạp web thủ công truyền thống của Web Hosting thế hệ cũ.",
      "trickWord": "Mệnh đề III sai về việc nạp code qua FTP thủ công; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1",
      "tip": "PaaS = Tự động hóa CI/CD; FTP và mở port thủ công là công nghệ cổ lỗ sĩ."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-027",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về hiện tượng Khóa nhà cung cấp (Vendor Lock-in) trong mô hình PaaS:\nI. Nguy cơ phát sinh khi mã nguồn sử dụng quá nhiều các hàm thư viện SDK độc quyền của nhà cung cấp.\nII. Chi phí di dời ứng dụng sang nền tảng khác bao gồm chi phí viết lại mã và cước phí xuất dữ liệu.\nIII. Sử dụng công nghệ đóng gói Container tiêu chuẩn mở giúp giảm thiểu đáng kể mức độ Vendor Lock-in.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Cả 3 mệnh đề đều đúng: Vendor Lock-in sinh ra do SDK/API độc quyền, chi phí chuyển đổi gồm Refactoring code + Data Egress fee, và giải pháp phòng chống hữu hiệu nhất là dùng Container chuẩn mở.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chi phí chuyển đổi chỉ là tiền mạng chứ không bao gồm viết lại code.",
      "trickWord": "Cả 3 mệnh đề về nguyên nhân, chi phí và giải pháp Vendor Lock-in đều đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "Vendor Lock-in = SDK độc quyền + Data Egress; Giải pháp = Standard Containers (Docker/K8s)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-028",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau về 6 chiều giá trị chiến lược của PaaS đối với doanh nghiệp:\nI. Giá trị 'Linh hoạt hơn' thể hiện ở khả năng tự động co giãn tài nguyên theo mùa vụ và chiến dịch.\nII. Giá trị 'Hợp tác hơn' cung cấp không gian làm việc đám mây chuẩn hóa cho đội ngũ phân tán từ xa.\nIII. Giá trị 'An toàn hơn' đồng nghĩa với việc doanh nghiệp được miễn trừ mọi trách nhiệm pháp lý dữ liệu.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề II đúng.",
      "Chỉ có mệnh đề I và II đúng."
    ],
    "answer": 3,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì 'An toàn hơn' là kế thừa hạ tầng an ninh chuẩn quốc tế của nhà cung cấp, chứ doanh nghiệp vẫn phải chịu trách nhiệm pháp lý về dữ liệu (Data governance).",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III đánh lừa rằng an ninh mạng của Provider sẽ miễn trừ trách nhiệm pháp lý cho User.",
      "trickWord": "Mệnh đề III sai về miễn trừ trách nhiệm pháp lý dữ liệu; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục V.1",
      "tip": "An toàn hơn = Kế thừa tiêu chuẩn bảo mật ISO/SOC2; Dữ liệu vẫn là trách nhiệm của doanh nghiệp."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-029",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về các tính năng vượt trội của nền tảng Google App Engine (GAE):\nI. Khả năng tự động co giãn cực nhanh (Instant Auto-scaling) khi xuất hiện lượng tải đột biến.\nII. Tính năng Traffic Splitting giúp phân chia phần trăm lưu lượng để thử nghiệm tính năng mới A/B.\nIII. Cho phép quản trị đồng thời nhiều phiên bản ứng dụng trên cùng một môi trường dịch vụ đám mây.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 0,
    "explanation": "Cả 3 mệnh đề đều là các tính năng kỹ thuật nổi bật nhất của Google App Engine được nhấn mạnh trong bài giảng chính thức: Instant Auto-scaling, Traffic Splitting và Version Management.",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể không rõ GAE có tính năng Traffic Splitting và Version Management hay không.",
      "trickWord": "Cả 3 tính năng của GAE đều hoàn toàn chuẩn xác theo giáo trình",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Google App Engine = Instant Auto-scaling + Traffic Splitting (A/B testing) + Multi-version."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-030",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về kiến trúc Serverless FaaS (Function as a Service):\nI. Khả năng tự động co giãn về 0 (Scale-to-Zero) khi không có bất kỳ yêu cầu nào kích hoạt.\nII. Hiện tượng trễ khởi động lạnh (Cold Start) xảy ra khi phải khởi tạo container mới cho lệnh gọi đầu tiên.\nIII. FaaS là giải pháp tối ưu chi phí nhất cho các ứng dụng tính toán liên tục với tải lượng cực lớn 24/7.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề II và III đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng."
    ],
    "answer": 1,
    "explanation": "Mệnh đề I và II đúng (đặc trưng Scale-to-Zero và Cold Start của FaaS). Mệnh đề III sai vì nếu ứng dụng chạy liên tục 24/7 với tải cố định khổng lồ, FaaS sẽ đắt hơn rất nhiều so với thuê VM (IaaS) hoặc PaaS truyền thống.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III ngụy biện rằng FaaS luôn rẻ nhất cho mọi loại tải, kể cả tải liên tục 24/7.",
      "trickWord": "Mệnh đề III sai về tải liên tục 24/7; I và II đúng về đặc tính FaaS",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "Tải liên tục 24/7 ➔ Dùng VM/PaaS rẻ hơn FaaS; FaaS chỉ rẻ với tải đột biến, ngắt quãng."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-031",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về nền tảng PaaS Red Hat OpenShift:\nI. Được xây dựng trực tiếp trên nền tảng điều phối container nguồn mở Kubernetes và Docker.\nII. Cung cấp môi trường triển khai đồng nhất trên cả đám mây lai (Hybrid Cloud) và trung tâm dữ liệu riêng.\nIII. Bắt buộc lập trình viên phải sử dụng duy nhất hệ điều hành Windows Server cho các cụm máy chủ.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có mệnh đề I và II đúng.",
      "Chỉ có duy nhất mệnh đề II đúng."
    ],
    "answer": 2,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì Red Hat OpenShift là sản phẩm của Red Hat (nổi tiếng với Red Hat Enterprise Linux - RHEL), chạy trên nền tảng Linux là chủ đạo chứ không bắt buộc dùng Windows Server.",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III cài cắm chi tiết sai lệch về hệ điều hành Windows Server đối với một sản phẩm của Red Hat.",
      "trickWord": "Mệnh đề III sai về Windows Server; I và II đúng về OpenShift",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Red Hat OpenShift = Kubernetes + Docker + RHEL (Linux) + Hybrid Cloud."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-032",
    "chapterId": "cloud-ch4",
    "question": "Xét 3 mệnh đề sau đây về kiến trúc Microservices khi triển khai trên nền tảng PaaS:\nI. Ứng dụng được chia nhỏ thành các dịch vụ độc lập có phạm vi nghiệp vụ hẹp và chuyên biệt.\nII. Các dịch vụ giao tiếp với nhau chủ yếu thông qua các giao thức mạng nhẹ như RESTful API hoặc gRPC.\nIII. Tất cả các microservices bắt buộc phải viết bằng cùng một ngôn ngữ lập trình và chung một database duy nhất.\nTổ hợp khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Chỉ có mệnh đề I và III đúng.",
      "Cả 3 mệnh đề I, II và III đều đúng.",
      "Chỉ có duy nhất mệnh đề I đúng.",
      "Chỉ có mệnh đề I và II đúng."
    ],
    "answer": 3,
    "explanation": "Mệnh đề I và II đúng. Mệnh đề III sai vì ưu điểm vượt trội của Microservices là Polyglot: mỗi service có thể viết bằng một ngôn ngữ lập trình khác nhau và sở hữu cơ sở dữ liệu riêng biệt (Database-per-service).",
    "trickDetails": {
      "whyTrapped": "Mệnh đề III mô tả kiến trúc nguyên khối (Monolith) dùng chung DB và 1 ngôn ngữ.",
      "trickWord": "Mệnh đề III sai về ép buộc chung 1 ngôn ngữ và 1 database; I và II đúng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2 & VI.1",
      "tip": "Microservices = Polyglot (Đa ngôn ngữ) + Database-per-service + Loose coupling."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-033",
    "chapterId": "cloud-ch4",
    "question": "Một công ty công nghệ muốn tung ra giao diện thanh toán mới nhưng chỉ muốn thử nghiệm với 10% lượng người dùng thật để đo lường tỷ lệ chuyển đổi trước khi áp dụng đại trà. Nền tảng PaaS nào và tính năng gì giải quyết bài toán này tối ưu nhất?",
    "options": [
      "Sử dụng Google App Engine với tính năng Traffic Splitting để định tuyến 10% lưu lượng truy cập.",
      "Thuê thêm một máy chủ vật lý riêng biệt và bắt buộc người dùng nhập địa chỉ IP thủ công trên trình duyệt.",
      "Tắt toàn bộ hệ thống cũ và triển khai phiên bản mới trực tiếp vào ban ngày để quan sát phản ứng người dùng.",
      "Yêu cầu toàn bộ người dùng phải cài đặt lại ứng dụng di động mới để phân chia lưu lượng thử nghiệm."
    ],
    "answer": 0,
    "explanation": "Google App Engine có tính năng chuyên dụng Traffic Splitting: cho phép chia tỷ lệ phần trăm lưu lượng (ví dụ 90% version cũ - 10% version mới) dựa trên Cookie hoặc IP để thực hiện A/B Testing mượt mà.",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể không biết GAE có tính năng Traffic Splitting phục vụ đúng bài toán A/B Testing.",
      "trickWord": "Google App Engine và tính năng Traffic Splitting phân tách lưu lượng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Thử nghiệm A/B Testing với tỷ lệ phần trăm người dùng ➔ Google App Engine Traffic Splitting."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-034",
    "chapterId": "cloud-ch4",
    "question": "Một ngân hàng thương mại đa quốc gia muốn hiện đại hóa ứng dụng nhưng có yêu cầu bắt buộc: Ứng dụng phải có khả năng triển khai linh hoạt giữa trung tâm dữ liệu tại chỗ (On-premise) và các nhà cung cấp Public Cloud khác nhau nhằm tránh tuyệt đối Vendor Lock-in. Giải pháp PaaS nào là phù hợp nhất?",
    "options": [
      "Chọn dịch vụ PaaS độc quyền đóng kín của một nhà cung cấp đám mây công cộng nhỏ trong nước.",
      "Triển khai Red Hat OpenShift xây dựng trên nền tảng điều phối container Kubernetes chuẩn công nghiệp.",
      "Từ bỏ hoàn toàn công nghệ đám mây và quay lại sử dụng các máy chủ vật lý mainframe cổ điển thời xưa.",
      "Chỉ sử dụng các phần mềm SaaS có sẵn trên thị trường và chấp nhận phụ thuộc hoàn toàn vào bên thứ ba."
    ],
    "answer": 1,
    "explanation": "Red Hat OpenShift là nền tảng PaaS dựa trên Kubernetes, cung cấp giải pháp Hybrid Cloud và Multi-cloud nhất quán, cho phép ứng dụng chạy trên cả hạ tầng On-premise của ngân hàng lẫn các Public Cloud (AWS, Azure, Google Cloud).",
    "trickDetails": {
      "whyTrapped": "Thí sinh không gắn kết được yêu cầu Hybrid/Multi-cloud chống Lock-in với Red Hat OpenShift.",
      "trickWord": "Red Hat OpenShift trên nền tảng Kubernetes chuẩn công nghiệp",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Yêu cầu Hybrid Cloud / Multi-cloud + Tránh Vendor Lock-in ➔ Red Hat OpenShift (Kubernetes)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-035",
    "chapterId": "cloud-ch4",
    "question": "Một ứng dụng xử lý ảnh chân dung cần chuyển đổi định dạng ảnh mỗi khi người dùng tải ảnh đại diện lên trang cá nhân (trung bình chỉ có khoảng vài chục lượt tải mỗi ngày rải rác). Kiến trúc nào sau đây giúp công ty tiết kiệm chi phí vận hành tối đa?",
    "options": [
      "Thuê một cụm 4 máy chủ PaaS cỡ lớn chạy liên tục 24/7 để chờ sẵn người dùng tải ảnh lên.",
      "Mua một máy chủ vật lý đặt tại văn phòng và kéo đường truyền cáp quang chuyên dụng đắt đỏ.",
      "Sử dụng Serverless FaaS để kích hoạt hàm xử lý ảnh theo sự kiện và chỉ trả tiền cho vài giây thực thi.",
      "Bắt buộc người dùng phải tự cài đặt phần mềm chỉnh sửa ảnh chuyên nghiệp trên máy tính của họ."
    ],
    "answer": 2,
    "explanation": "Với tác vụ phát sinh ngắt quãng, không thường xuyên (vài chục lượt/ngày), Serverless FaaS (kích hoạt theo sự kiện tải ảnh) là tối ưu nhất vì nó Scale-to-Zero khi không dùng, chi phí gần như bằng 0 đồng.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ cứ triển khai ứng dụng là phải thuê máy chủ hoặc instance chạy 24/7.",
      "trickWord": "Serverless FaaS kích hoạt theo sự kiện tải ảnh và Scale-to-Zero",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "Tác vụ chạy ngắt quãng, ít lần/ngày ➔ Dùng Serverless FaaS (tiết kiệm chi phí nhàn rỗi)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-036",
    "chapterId": "cloud-ch4",
    "question": "Một viện nghiên cứu khoa học máy tính cần phát triển một giao thức truyền thông mạng tùy biến, đòi hỏi phải can thiệp trực tiếp vào mã nguồn nhân Linux Kernel và nạp các mô-đun trình điều khiển thiết bị phần cứng đặc thù. Vì sao nền tảng PaaS KHÔNG PHÙ HỢP cho dự án này?",
    "options": [
      "Vì các nền tảng PaaS không thể kết nối được với mạng Internet công cộng để truyền dữ liệu.",
      "Vì PaaS bắt buộc các nhà nghiên cứu phải trả tiền bằng vàng miếng thay vì sử dụng tiền tệ thông thường.",
      "Vì mọi nền tảng PaaS trên thế giới đều cấm các viện nghiên cứu khoa học đăng ký sử dụng tài khoản.",
      "Vì PaaS trừu tượng hóa và khóa chặt tầng hệ điều hành, không cấp quyền can thiệp cấp nhân Linux Kernel."
    ],
    "answer": 3,
    "explanation": "PaaS trừu tượng hóa hạ tầng và đóng gói tầng OS; nhà phát triển không có quyền truy cập root hay can thiệp nhân kernel. Để biên dịch lại kernel hoặc cài custom driver, dự án bắt buộc phải dùng IaaS.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu rất vô lý; cần nhận diện rào cản kỹ thuật cốt lõi: No Root / No Kernel tuning.",
      "trickWord": "PaaS trừu tượng hóa và khóa chặt tầng hệ điều hành, không cấp quyền nhân Kernel",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1 & III.1",
      "tip": "Cần can thiệp Linux Kernel / cài Hardware Driver ➔ KHÔNG dùng PaaS, BẮT BUỘC dùng IaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-037",
    "chapterId": "cloud-ch4",
    "question": "Một công ty thương mại điện tử chuẩn bị chiến dịch Ngày hội Mua sắm (Mega Sale) với dự báo lượng người dùng thanh toán sẽ tăng đột biến gấp 80 lần bình thường chỉ trong khung giờ từ 0h đến 2h sáng. Đặc tính kỹ thuật nào của PaaS bảo đảm hệ thống không bị sập nguồn?",
    "options": [
      "Khả năng Tự động co giãn (Auto-scaling) nhân bản nhanh các phiên bản ứng dụng theo lưu lượng tải.",
      "Khả năng tự động giảm độ phân giải hình ảnh sản phẩm xuống mức trắng đen để tiết kiệm băng thông.",
      "Khả năng chặn không cho người dùng đăng nhập vào hệ thống trong suốt khung giờ diễn ra chiến dịch.",
      "Khả năng tự động gửi tin nhắn báo bận đến tất cả khách hàng yêu cầu họ quay lại mua sắm vào ngày mai."
    ],
    "answer": 0,
    "explanation": "Cơ chế Auto-scaling của PaaS tự động phát hiện sự gia tăng lưu lượng đột biến và cấp phát thêm các container/instance ứng dụng (Scale-out) trong vài chục giây, bảo đảm hệ thống vận hành thông suốt.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu đưa ra các giải pháp tiêu cực như chặn người dùng hoặc làm mờ ảnh.",
      "trickWord": "Tự động co giãn (Auto-scaling) nhân bản phiên bản ứng dụng theo tải",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1",
      "tip": "Tải tăng đột biến trong khung giờ ngắn ➔ Trông cậy vào tính năng Auto-scaling của PaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-038",
    "chapterId": "cloud-ch4",
    "question": "Một tập đoàn tài chính lớn muốn xây dựng ứng dụng phát hiện gian lận giao dịch thẻ tín dụng theo thời gian thực kết hợp các thuật toán trí tuệ nhân tạo học sâu được huấn luyện sẵn. Nền tảng PaaS nào dưới đây mang lại lợi thế cạnh tranh vượt trội nhất cho dự án?",
    "options": [
      "Một nền tảng lưu trữ web mã nguồn mở đơn giản chỉ hỗ trợ các tệp tin HTML tĩnh không có cơ sở dữ liệu.",
      "IBM Cloud Foundry nhờ khả năng tích hợp độc quyền với hệ sinh thái trí tuệ nhân tạo IBM Watson AI.",
      "Tự mua ổ cứng về nhà tự cài đặt phần mềm và không kết nối bất kỳ dịch vụ đám mây thông minh nào.",
      "Thuê một máy chủ ảo IaaS trống rỗng và bắt đầu tự lập trình lại các mô hình AI từ con số không hoàn toàn."
    ],
    "answer": 1,
    "explanation": "IBM Cloud Foundry sở hữu lợi thế độc quyền nhờ tích hợp sẵn hệ sinh thái IBM Watson AI và các giải pháp phân tích dữ liệu chuyên sâu cho ngành tài chính - ngân hàng, giúp rút ngắn thời gian phát triển mô hình.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ thế mạnh độc quyền của IBM Cloud Foundry trong lĩnh vực AI & Tài chính.",
      "trickWord": "IBM Cloud Foundry tích hợp độc quyền hệ sinh thái IBM Watson AI",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "Ứng dụng tài chính ngân hàng + AI có sẵn ➔ Lợi thế tuyệt đối thuộc về IBM Cloud Foundry (Watson AI)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-039",
    "chapterId": "cloud-ch4",
    "question": "Một công ty bảo hiểm sở hữu một hệ thống phần mềm nghiệp vụ viết cách đây 18 năm chạy trên Windows Server 2003, phụ thuộc chặt chẽ vào các tệp tin DLL cục bộ và đường dẫn ổ đĩa cố định C:\\App. Khi ban giám đốc muốn đưa nguyên vẹn ứng dụng này lên PaaS hiện đại, đội ngũ kỹ thuật sẽ gặp phải trở ngại lớn nhất nào?",
    "options": [
      "Nhà cung cấp dịch vụ PaaS sẽ tính phí dịch vụ bằng tiền mặt thay vì cho phép chuyển khoản ngân hàng.",
      "Hệ thống PaaS sẽ tự động gửi mã nguồn của công ty bảo hiểm cho các đối thủ cạnh tranh trên thị trường.",
      "Vấn đề bất tương thích (Compatibility) do PaaS chạy môi trường container hóa phi trạng thái hiện đại.",
      "Các máy tính tại văn phòng của công ty bảo hiểm sẽ bị mất kết nối mạng Internet ngay khi ký hợp đồng."
    ],
    "answer": 2,
    "explanation": "Ứng dụng cũ (Legacy Monolith) phụ thuộc vào đường dẫn ổ đĩa tĩnh và DLL hệ điều hành cũ sẽ không thể tương thích với môi trường PaaS hiện đại (vốn dựa trên container phi trạng thái và hệ điều hành tiêu chuẩn mới).",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu phi lý; vấn đề cốt lõi ở đây là 'Legacy Compatibility Issue' của PaaS.",
      "trickWord": "Bất tương thích (Compatibility) do môi trường container phi trạng thái hiện đại",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "Legacy App cũ kỹ ➔ Gặp trở ngại bất tương thích (Compatibility) nghiêm trọng trên PaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-040",
    "chapterId": "cloud-ch4",
    "question": "Một công ty công nghệ có đội ngũ 30 lập trình viên làm việc phân tán tại 5 quốc gia khác nhau. Mỗi khi một thành viên viết mã xong trên máy tính cá nhân, họ muốn mã được tự động kiểm thử và triển khai lên môi trường thử nghiệm dùng chung chỉ trong 3 phút. Lợi ích PaaS nào đáp ứng trọn vẹn yêu cầu này?",
    "options": [
      "PaaS cung cấp bàn phím máy tính miễn phí cho toàn bộ nhân viên thông qua đường bưu điện quốc tế.",
      "PaaS giúp tăng tốc độ mạng cáp quang tại nhà riêng của từng lập trình viên lên mức không giới hạn.",
      "PaaS cho phép nhân viên không cần phải viết mã nguồn mà hệ thống sẽ tự động đoán ý định kinh doanh.",
      "Quy trình tự động hóa CI/CD tích hợp sẵn (như git push) và môi trường phát triển đám mây chuẩn hóa."
    ],
    "answer": 3,
    "explanation": "PaaS hỗ trợ xuất sắc mô hình làm việc nhóm phân tán nhờ tích hợp sẵn quy trình CI/CD và môi trường chuẩn hóa; lập trình viên chỉ cần 'git push', PaaS sẽ tự động build, test và deploy lên môi trường chung.",
    "trickDetails": {
      "whyTrapped": "Các phương án nhiễu hài hước; câu trả lời đúng nằm ở quy trình CI/CD tự động và môi trường chuẩn hóa.",
      "trickWord": "Quy trình CI/CD tích hợp sẵn và môi trường phát triển đám mây chuẩn hóa",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1 & V.1",
      "tip": "Làm việc nhóm từ xa + Deploy thần tốc ➔ Nhờ CI/CD tích hợp và môi trường đồng bộ của PaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-041",
    "chapterId": "cloud-ch4",
    "question": "Sau một đêm dài không có người truy cập, người dùng đầu tiên vào buổi sáng truy cập vào trang web chạy trên Serverless FaaS nhận thấy trang tải mất tới 3 giây, nhưng các lượt truy cập ngay sau đó chỉ mất 50 mili-giây. Hiện tượng kỹ thuật này trong kiến trúc FaaS được gọi là gì?",
    "options": [
      "Hiện tượng trễ khởi động lạnh (Cold Start latency) do hệ thống phải khởi tạo container thực thi mới.",
      "Hiện tượng đường truyền cáp quang biển bị đứt hoàn toàn vào ban đêm và mới được nối lại vào ban ngày.",
      "Hiện tượng máy chủ của nhà cung cấp bị đóng băng do nhiệt độ thời tiết ban đêm xuống quá thấp.",
      "Hiện tượng nhà cung cấp đám mây cố tình làm chậm tốc độ để ép khách hàng phải nâng cấp gói dịch vụ."
    ],
    "answer": 0,
    "explanation": "Cold Start là hiện tượng kinh điển của FaaS: Khi không có request trong thời gian dài (Scale-to-Zero), container thực thi bị giải phóng. Request đầu tiên buộc hệ thống phải kéo image và khởi động container mới, gây trễ.",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nắm được thuật ngữ chuyên môn 'Cold Start' trong kiến trúc Serverless FaaS.",
      "trickWord": "Hiện tượng trễ khởi động lạnh (Cold Start latency) khi khởi tạo container",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "Lượt truy cập đầu tiên sau thời gian nhàn rỗi bị chậm ➔ Chính là hiện tượng COLD START của FaaS."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-042",
    "chapterId": "cloud-ch4",
    "question": "Điểm khác biệt căn bản nhất giữa mô hình PaaS truyền thống và kiến trúc Serverless FaaS là gì?",
    "options": [
      "PaaS không kết nối mạng Internet, còn Serverless FaaS bắt buộc phải cắm dây cáp mạng trực tiếp.",
      "PaaS duy trì instance ứng dụng thường trực, còn FaaS chạy theo sự kiện và có thể co giãn về 0.",
      "PaaS bắt buộc mua máy chủ vật lý, còn Serverless FaaS cho phép người dùng sử dụng máy tính miễn phí.",
      "PaaS chỉ dành cho học sinh sinh viên, còn Serverless FaaS là giải pháp dành riêng cho các ngân hàng."
    ],
    "answer": 1,
    "explanation": "Khác biệt cốt lõi: PaaS truyền thống luôn duy trì ít nhất một instance chạy thường trực (vẫn tốn chi phí khi nhàn rỗi); Serverless FaaS hoạt động hướng sự kiện (Event-driven) và tự động Scale-to-Zero (0 đồng khi nhàn rỗi).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ PaaS và Serverless là cùng một bản chất vì đều không cần quản lý máy chủ.",
      "trickWord": "PaaS duy trì instance thường trực; FaaS chạy theo sự kiện và Scale-to-Zero",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục VI.1",
      "tip": "PaaS vs FaaS: Khác biệt nằm ở 'Duy trì thường trực' vs 'Event-driven & Scale-to-Zero'."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-043",
    "chapterId": "cloud-ch4",
    "question": "Trong quản trị tài chính đám mây, sự khác nhau giữa chi phí CAPEX và OPEX khi chuyển đổi lên PaaS là gì?",
    "options": [
      "CAPEX là chi phí thuê bao hàng tháng, còn OPEX là số tiền mua máy chủ vật lý đặt tại văn phòng.",
      "CAPEX là tiền trả cho nhân viên dọn dẹp, còn OPEX là tiền thanh toán tiền điện cho công ty điện lực.",
      "CAPEX là chi phí đầu tư mua sắm tài sản ban đầu, còn OPEX là chi phí vận hành chi trả định kỳ.",
      "CAPEX và OPEX là hai thuật ngữ hoàn toàn đồng nghĩa và chỉ dùng để chỉ các khoản tiền bị phạt thuế."
    ],
    "answer": 2,
    "explanation": "CAPEX (Capital Expenditure) là chi phí vốn đầu tư mua sắm tài sản cố định ban đầu (máy chủ, thiết bị mạng). OPEX (Operational Expenditure) là chi phí hoạt động, chi trả định kỳ theo nhu cầu thực tế.",
    "trickDetails": {
      "whyTrapped": "Thí sinh rất hay nhầm lẫn định nghĩa hoán đổi giữa CAPEX (đầu tư ban đầu) và OPEX (vận hành).",
      "trickWord": "CAPEX là chi phí đầu tư ban đầu; OPEX là chi phí vận hành định kỳ",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1 & V.1",
      "tip": "CAPEX = Mua đứt ban đầu (Server vật lý); OPEX = Thuê bao vận hành định kỳ (Cloud/PaaS)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-044",
    "chapterId": "cloud-ch4",
    "question": "Điểm khác biệt cốt lõi về nền tảng công nghệ cơ sở giữa Red Hat OpenShift và IBM Cloud Foundry là gì?",
    "options": [
      "OpenShift chạy trên máy chủ Windows, còn Cloud Foundry bắt buộc chạy trên hệ điều hành macOS.",
      "OpenShift là phần mềm thương mại đóng hoàn toàn, còn Cloud Foundry là dự án phần cứng máy tính.",
      "OpenShift chỉ lưu trữ hình ảnh, còn Cloud Foundry chỉ dùng để gửi thư điện tử giữa các nhân viên.",
      "OpenShift xây dựng trên nền Kubernetes, còn Cloud Foundry dựa trên chuẩn mở Cloud Foundry."
    ],
    "answer": 3,
    "explanation": "OpenShift được phát triển trực tiếp trên nền tảng điều phối container KUBERNETES và Docker; trong khi Cloud Foundry dựa trên kiến trúc chuẩn nguồn mở Cloud Foundry (dùng Diego/Garden containers).",
    "trickDetails": {
      "whyTrapped": "Thí sinh không nhớ nền tảng hạt nhân điều phối container của hai gã khổng lồ này.",
      "trickWord": "OpenShift dựa trên Kubernetes; Cloud Foundry dựa trên chuẩn Cloud Foundry",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục IV.1",
      "tip": "OpenShift = Kubernetes; Cloud Foundry = Cloud Foundry Foundation."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-045",
    "chapterId": "cloud-ch4",
    "question": "Trong quy trình CI/CD tích hợp của PaaS, sự khác biệt giữa Continuous Integration (CI) và Continuous Deployment (CD) là gì?",
    "options": [
      "CI tập trung vào tự động tích hợp và kiểm thử mã, còn CD tự động đưa mã ra môi trường chạy thực tế.",
      "CI là công đoạn viết mã bằng tay, còn CD là công đoạn in mã nguồn ra giấy để nộp cho người quản lý.",
      "CI chỉ dành cho các dự án phần mềm di động, còn CD là quy trình độc quyền của các trang web tin tức.",
      "CI là việc sao lưu cơ sở dữ liệu định kỳ, còn CD là việc cài đặt lại hệ điều hành sau mỗi sự cố."
    ],
    "answer": 0,
    "explanation": "CI (Continuous Integration) tự động hóa việc hợp nhất mã nguồn từ nhiều nhánh và chạy test; CD (Continuous Deployment) tự động hóa việc đưa sản phẩm đã vượt qua kiểm thử lên môi trường live (Production).",
    "trickDetails": {
      "whyTrapped": "Dễ đánh đồng CI và CD là một khối duy nhất mà không phân biệt được ranh giới kiểm thử vs triển khai.",
      "trickWord": "CI tự động tích hợp và kiểm thử; CD tự động đưa mã ra môi trường thực tế",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.2 & II.1",
      "tip": "CI = Build & Test tự động; CD = Deploy tự động ra môi trường Live."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-046",
    "chapterId": "cloud-ch4",
    "question": "Khác biệt mấu chốt về ranh giới quản lý giữa mô hình PaaS và mô hình IaaS là gì?",
    "options": [
      "Trên PaaS người dùng quản lý phần cứng vật lý, còn trên IaaS người dùng chỉ quản lý trình duyệt.",
      "Trên IaaS người dùng tự quản lý cả Hệ điều hành và Runtime, còn trên PaaS do nhà cung cấp đảm nhận.",
      "Trên IaaS người dùng không có bất kỳ quyền hạn nào, còn trên PaaS người dùng có toàn quyền Root.",
      "Hai mô hình này hoàn toàn giống nhau về mọi mặt và chỉ khác nhau ở tên gọi viết tắt bằng tiếng Anh."
    ],
    "answer": 1,
    "explanation": "Trong IaaS, người dùng phải tự cài đặt, cấu hình và vá lỗi Hệ điều hành (OS), Middleware và Runtime. Trong PaaS, toàn bộ các tầng này do nhà cung cấp quản lý, người dùng chỉ lo Applications và Data.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn ranh giới phân định: IaaS trao quyền kiểm soát OS; PaaS trừu tượng hóa OS.",
      "trickWord": "IaaS tự quản lý OS và Runtime; PaaS do nhà cung cấp đảm nhận hoàn toàn",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "IaaS = Thuê máy ảo (Tự lo OS, Runtime); PaaS = Thuê nền tảng (Provider lo OS, Runtime)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-047",
    "chapterId": "cloud-ch4",
    "question": "Khác biệt mấu chốt về đối tượng người dùng và ranh giới quản trị giữa PaaS và SaaS là gì?",
    "options": [
      "PaaS dành cho người dùng cuối văn phòng, còn SaaS là công cụ viết mã độc quyền của các kỹ sư mạng.",
      "PaaS chỉ chạy trên điện thoại bàn, còn SaaS bắt buộc phải cài đặt trên các máy chủ siêu máy tính.",
      "PaaS dành cho lập trình viên quản lý code và data, còn SaaS dành cho người dùng cuối dùng ứng dụng.",
      "Hai mô hình này hoàn toàn không có bất kỳ sự khác biệt nào trong thực tế triển khai doanh nghiệp."
    ],
    "answer": 2,
    "explanation": "PaaS phục vụ lập trình viên (Developers) để phát triển và quản lý mã nguồn (Apps) và dữ liệu (Data); SaaS phục vụ người dùng cuối (End-users) chỉ sử dụng ứng dụng hoàn thiện qua web/app mà không quản lý tầng nào.",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nhầm lẫn đối tượng phục vụ giữa kỹ sư phần mềm (PaaS) và người dùng cuối (SaaS).",
      "trickWord": "PaaS cho lập trình viên quản lý code; SaaS cho người dùng cuối dùng phần mềm",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục I.1",
      "tip": "PaaS = Developer tool (quản lý Code + Data); SaaS = End-user app (Zero management)."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-048",
    "chapterId": "cloud-ch4",
    "question": "Sự khác biệt căn bản giữa cơ chế Auto-scaling truyền thống trong PaaS và cơ chế Scale-to-Zero trong Serverless FaaS là gì?",
    "options": [
      "Auto-scaling trong PaaS không thể tăng tài nguyên, còn Scale-to-Zero chỉ có thể tăng mà không thể giảm.",
      "Auto-scaling chỉ hoạt động vào ban ngày, còn Scale-to-Zero chỉ hoạt động vào các ngày cuối tuần.",
      "Auto-scaling bắt buộc phải trả tiền bằng ngoại tệ, còn Scale-to-Zero hoàn toàn không tính cước dịch vụ.",
      "Auto-scaling luôn duy trì tối thiểu 1 instance chạy ngầm, còn Scale-to-Zero giải phóng hoàn toàn về 0."
    ],
    "answer": 3,
    "explanation": "Auto-scaling truyền thống (PaaS) thường giữ mức min-instance >= 1 để đảm bảo phản hồi tức thì (vẫn tốn tiền khi không có ai dùng); Scale-to-Zero (FaaS) tắt sạch mọi container khi không có request, không tốn 1 xu.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ Auto-scaling cũng có thể tự động tắt hoàn toàn máy chủ về 0 bản sao.",
      "trickWord": "Auto-scaling duy trì tối thiểu 1 bản sao; Scale-to-Zero giải phóng sạch về 0 bản sao",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1 & VI.1",
      "tip": "PaaS Auto-scaling: Min instance >= 1; FaaS Scale-to-Zero: Min instance = 0."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-049",
    "chapterId": "cloud-ch4",
    "question": "Khi so sánh nguy cơ Vendor Lock-in giữa tầng IaaS và tầng PaaS, nhận định nào sau đây là CHUẨN XÁC?",
    "options": [
      "Tầng IaaS có nguy cơ Lock-in cao hơn rất nhiều do máy ảo không thể xuất ra tệp tin hình ảnh chuẩn.",
      "Tầng PaaS có nguy cơ Lock-in nghiêm trọng hơn do mã nguồn bị gắn chặt vào API và SDK độc quyền.",
      "Cả hai mô hình IaaS và PaaS đều hoàn toàn không có bất kỳ rủi ro nào về việc khóa nhà cung cấp.",
      "Chỉ có các dịch vụ lưu trữ dữ liệu đám mây mới bị Lock-in còn các nền tảng tính toán thì không."
    ],
    "answer": 1,
    "explanation": "PaaS có mức độ Vendor Lock-in sâu sắc hơn IaaS rất nhiều vì ứng dụng phải gọi trực tiếp các thư viện SDK, dịch vụ database và giao thức triển khai độc quyền của hãng; trong khi IaaS chỉ là máy ảo chuẩn dễ di dời hơn.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nghĩ tầng nào cũng như nhau hoặc máy ảo IaaS khó di chuyển hơn mã nguồn.",
      "trickWord": "PaaS Lock-in nghiêm trọng hơn do gắn chặt vào API và SDK độc quyền của hãng",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục III.1",
      "tip": "IaaS = Rủi ro Lock-in thấp/vừa; PaaS = Rủi ro Lock-in CAO NHẤT do dính chặt API/SDK."
    },
    "difficulty": "hard",
    "isTrick": true
  },
  {
    "id": "cloud-c4-d2-050",
    "chapterId": "cloud-ch4",
    "question": "Trong thiết kế kiến trúc triển khai trên PaaS, sự khác nhau giữa Stateless Architecture và Stateful Architecture là gì?",
    "options": [
      "Stateless chỉ dùng cho các ứng dụng viết bằng Java, còn Stateful chỉ dùng cho các ứng dụng viết bằng PHP.",
      "Stateless bắt buộc phải lưu toàn bộ dữ liệu trên đĩa cứng cục bộ, còn Stateful lưu trên thanh RAM.",
      "Stateless chỉ hoạt động được trên các máy chủ có nối mạng LAN, còn Stateful hoạt động không cần mạng.",
      "Stateless không lưu trạng thái phiên trên instance để dễ co giãn, còn Stateful giữ dữ liệu tại chỗ."
    ],
    "answer": 3,
    "explanation": "Kiến trúc phi trạng thái (Stateless) không lưu session/dữ liệu trên đĩa cục bộ của instance (đẩy vào Redis/DB ngoài), giúp tự do co giãn thêm bớt instance; trong khi Stateful lưu dữ liệu tại chỗ, rất khó co giãn linh hoạt.",
    "trickDetails": {
      "whyTrapped": "Dễ bị bẫy bởi các phương án gán ghép sai lệch ngôn ngữ lập trình hoặc mạng LAN cục bộ.",
      "trickWord": "Stateless không lưu phiên trên instance để dễ co giãn; Stateful giữ dữ liệu tại chỗ",
      "citation": "Giáo trình Điện toán đám mây — Chương 4, Mục II.1 & VI.1",
      "tip": "PaaS Cloud-native bắt buộc phải là STATELESS để Auto-scaling mượt mà."
    },
    "difficulty": "hard",
    "isTrick": true
  }
];
