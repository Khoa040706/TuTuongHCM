/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY CHUYÊN SÂU — CHƯƠNG 1 (BỘ ĐỀ 2)
   Môn học: Điện toán đám mây (Cloud Computing)
   Mã chương: cloud-ch1
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

export const questionsCloudCh1Trick2 = [
  {
    "id": "cloud-c1-d2-001",
    "chapterId": "cloud-ch1",
    "question": "Khi phân tích đặc tính 'On-demand self-service' theo chuẩn NIST SP 800-145, nhận định nào sau đây là SAI?",
    "options": [
      "Người dùng được tự do tiêu dùng tài nguyên vượt quá hạn mức tín dụng tài khoản.",
      "Khách hàng tự cấp phát mà không cần can thiệp con người từ nhà cung cấp.",
      "Tiến trình cấp phát tài nguyên tính toán diễn ra gần như tức thì qua cổng web.",
      "Khách hàng chủ động thay đổi năng lực lưu trữ và máy chủ theo nhu cầu thực tế."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Đặc tính On-demand self-service cho phép tự động cấp phát không cần nhân viên hỗ trợ, nhưng KHÔNG có nghĩa người dùng được tiêu dùng vượt hạn mức tín dụng hoặc quota an toàn do nhà cung cấp thiết lập.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ lầm tưởng tự phục vụ nghĩa là không bị bất kỳ giới hạn kiểm soát tài chính hoặc quota kỹ thuật nào.",
      "trickWord": "Bẫy ngụy biện tuyệt đối hóa: 'tự do tiêu dùng vượt quá hạn mức tín dụng'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (5 Đặc tính chuẩn NIST)",
      "tip": "Mọi hệ thống đám mây tự phục vụ đều gắn chặt với chính sách hạn mức quota và kiểm soát tín dụng thanh toán."
    }
  },
  {
    "id": "cloud-c1-d2-002",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là SAI về đặc tính 'Broad network access' trong kiến trúc đám mây chuẩn?",
    "options": [
      "Khả năng truy cập mạng rộng rãi thông qua các cơ chế truyền thông chuẩn hóa mạng.",
      "Dịch vụ đám mây bắt buộc phải yêu cầu thiết bị đầu cuối dùng phần cứng chuyên dụng.",
      "Hỗ trợ đa dạng nền tảng khách hàng không đồng nhất từ di động đến máy tính để bàn.",
      "Tài nguyên đám mây sẵn sàng phục vụ người dùng từ bất kỳ vị trí địa lý có mạng."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Broad network access yêu cầu khả dụng qua cơ chế chuẩn hóa (HTTP/HTTPS, REST) trên các thiết bị phổ thông (Thin/Thick client), TUYỆT ĐỐI KHÔNG bắt buộc thiết bị đầu cuối phải dùng phần cứng chuyên dụng.",
    "trickDetails": {
      "whyTrapped": "Học viên bị đánh lừa bởi thuật ngữ 'phần cứng chuyên dụng' tưởng như giúp bảo mật và tăng tốc truy cập.",
      "trickWord": "Bẫy từ khóa áp đặt: 'bắt buộc phải yêu cầu thiết bị đầu cuối dùng phần cứng chuyên dụng'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Đặc tính Broad Network Access)",
      "tip": "Broad network access nhấn mạnh tính tương thích cao với thiết bị phổ dụng qua giao thức mạng tiêu chuẩn."
    }
  },
  {
    "id": "cloud-c1-d2-003",
    "chapterId": "cloud-ch1",
    "question": "Khi khảo sát cơ chế 'Resource Pooling' (Gộp tài nguyên), khẳng định nào sau đây là SAI?",
    "options": [
      "Tài nguyên được cấp phát và tái cấp phát liên tục theo nhu cầu biến động thực tế.",
      "Mô hình phục vụ đa người thuê chia sẻ linh hoạt cùng một hạ tầng phần cứng gốc.",
      "Tài nguyên vật lý và ảo hóa phải tập trung duy nhất tại một trung tâm dữ liệu.",
      "Khách hàng thông thường không biết chính xác vị trí thực tế của máy chủ vật lý."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Resource Pooling có đặc trưng độc lập vị trí (Location Independence) và hạ tầng có thể phân tán trên nhiều trung tâm dữ liệu (Multi-datacenter) khác nhau, KHÔNG bắt buộc phải tập trung tại một trung tâm dữ liệu duy nhất.",
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm lẫn 'gộp tài nguyên' đồng nghĩa với việc gom toàn bộ máy móc vật lý vào cùng một vị trí địa lý.",
      "trickWord": "Bẫy giới hạn không gian: 'tập trung duy nhất tại một trung tâm dữ liệu'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Đặc tính Resource Pooling)",
      "tip": "Gộp tài nguyên là khái niệm luận lý (logical pooling); về mặt vật lý các cụm máy chủ hoàn toàn phân tán toàn cầu."
    }
  },
  {
    "id": "cloud-c1-d2-004",
    "chapterId": "cloud-ch1",
    "question": "Nhận định nào sau đây là SAI khi thảo luận về đặc tính 'Rapid Elasticity' (Co giãn nhanh chóng)?",
    "options": [
      "Khả năng co giãn cho phép hệ thống mở rộng và thu hẹp tài nguyên gần như tức thời.",
      "Tài nguyên cung cấp cho người dùng có cảm giác như vô hạn ở mọi thời điểm sử dụng.",
      "Tài nguyên mua sắm có thể với số lượng tùy ý tại bất kỳ thời điểm phát sinh tải.",
      "Tốc độ co giãn tự động có thể ngăn chặn triệt để mọi lỗi quá tải của ứng dụng lỗi."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Rapid Elasticity co giãn hạ tầng phần cứng/máy ảo, nhưng nếu mã nguồn ứng dụng bị lỗi deadlock, memory leak hoặc nghẽn cơ sở dữ liệu quan hệ thì việc co giãn hạ tầng KHÔNG THỂ ngăn chặn triệt để lỗi quá tải.",
    "trickDetails": {
      "whyTrapped": "Học sinh thường nghĩ có auto-scaling hạ tầng là ứng dụng sẽ 'bất tử' trước mọi loại lỗi phần mềm.",
      "trickWord": "Bẫy tuyệt đối hóa công năng: 'ngăn chặn triệt để mọi lỗi quá tải của ứng dụng lỗi'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Rapid Elasticity vs Application Performance)",
      "tip": "Hạ tầng đám mây co giãn chỉ cấp thêm tài nguyên tính toán, không thể sửa lỗi kiến trúc hoặc nghẽn thuật toán."
    }
  },
  {
    "id": "cloud-c1-d2-005",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là SAI về đặc tính 'Measured Service' (Đo lường dịch vụ định lượng)?",
    "options": [
      "Chỉ số đo lường tài nguyên chỉ giới hạn ở dung lượng lưu trữ cứng theo từng tháng.",
      "Hệ thống tự động kiểm soát và tối ưu hóa tài nguyên thông qua năng lực đo lường.",
      "Mức độ sử dụng tài nguyên có thể được theo dõi, kiểm soát và báo cáo minh bạch.",
      "Cung cấp tính minh bạch toàn diện cho cả nhà cung cấp lẫn người tiêu dùng dịch vụ."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Measured Service đo lường đa chiều: chu kỳ CPU, băng thông mạng (Inbound/Outbound), số lượng truy vấn API, thời gian chạy tiến trình, KHÔNG hề chỉ giới hạn ở dung lượng lưu trữ đĩa cứng.",
    "trickDetails": {
      "whyTrapped": "Người học hay nghĩ chi phí dịch vụ đám mây chỉ tính trên dung lượng ổ cứng lưu trữ.",
      "trickWord": "Bẫy thu hẹp phạm vi đo lường: 'chỉ giới hạn ở dung lượng lưu trữ cứng'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Measured Service)",
      "tip": "Đo lường dịch vụ đám mây bao gồm bộ tứ: CPU/RAM giờ, Storage GB/tháng, Network GB, và Request count."
    }
  },
  {
    "id": "cloud-c1-d2-006",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là SAI về mô hình triển khai 'Public Cloud' (Đám mây công cộng)?",
    "options": [
      "Hạ tầng đám mây được sở hữu và vận hành bởi một tổ chức cung cấp dịch vụ bên ngoài.",
      "Dữ liệu của các khách hàng đều bị công khai cho tất cả người dùng khác trên Internet.",
      "Dịch vụ được mở rộng rãi cho công chúng hoặc một nhóm ngành nghề công nghiệp lớn.",
      "Khách hàng được giải phóng hoàn toàn khỏi gánh nặng bảo trì cơ sở hạ tầng vật lý."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Public Cloud công cộng về mặt 'đối tượng tiếp cận dịch vụ', nhưng dữ liệu của mỗi khách hàng được mã hóa và cô lập logic an toàn tuyệt đối, KHÔNG hề bị công khai cho người dùng khác xem.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm lẫn chữ 'Public' (công cộng) là dữ liệu lưu trữ bên trong bị lộ công khai.",
      "trickWord": "Bẫy ngữ nghĩa từ vựng: 'dữ liệu của các khách hàng đều bị công khai'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Public Cloud)",
      "tip": "Public Cloud là công cộng quyền thuê dịch vụ, dữ liệu bên trong luôn được bảo vệ đa tầng và mã hóa nghiêm ngặt."
    }
  },
  {
    "id": "cloud-c1-d2-007",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là SAI khi nói về mô hình 'Private Cloud' (Đám mây riêng)?",
    "options": [
      "Hạ tầng được cấp phát phục vụ độc quyền cho một tổ chức duy nhất sử dụng nội bộ.",
      "Mô hình này có thể do chính tổ chức hoặc một bên thứ ba quản lý và vận hành ngoài.",
      "Private Cloud bắt buộc phải được đặt vật lý bên trong khuôn viên của tổ chức đó.",
      "Cung cấp quyền kiểm soát tối đa đối với các vấn đề bảo mật và tuân thủ dữ liệu."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Theo định nghĩa chuẩn NIST, Private Cloud có thể tồn tại On-premises (tại chỗ) HOẶC Off-premises (đặt tại trung tâm dữ liệu của bên thứ ba nhưng hạ tầng vật lý được dành riêng độc quyền), không bắt buộc phải đặt trong khuôn viên tổ chức.",
    "trickDetails": {
      "whyTrapped": "Nhiều người mặc định 'đám mây riêng' là phải tự mua máy chủ đặt tại phòng Server của trụ sở công ty.",
      "trickWord": "Bẫy vị trí lắp đặt cứng nhắc: 'bắt buộc phải được đặt vật lý bên trong khuôn viên'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Private Cloud)",
      "tip": "Private Cloud có 2 hình thức: On-premise Private Cloud và Hosted/Managed Private Cloud tại bên thứ ba."
    }
  },
  {
    "id": "cloud-c1-d2-008",
    "chapterId": "cloud-ch1",
    "question": "Nhận định nào sau đây là SAI về mô hình 'Community Cloud' (Đám mây cộng đồng)?",
    "options": [
      "Hạ tầng được chia sẻ giữa các tổ chức có cùng mối quan tâm về chính sách bảo mật.",
      "Giúp các tổ chức thành viên chia sẻ chi phí đầu tư ban đầu và gánh nặng bảo trì.",
      "Có thể được sở hữu và vận hành bởi một tổ chức trong nhóm hoặc bên thứ ba ngoài.",
      "Mô hình này luôn được tài trợ miễn phí và không phát sinh bất kỳ chi phí nào."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Community Cloud chia sẻ chi phí giữa các bên tham gia chứ KHÔNG HỀ miễn phí; các tổ chức thành viên phải cùng đóng góp ngân sách xây dựng, bảo trì và vận hành hệ thống.",
    "trickDetails": {
      "whyTrapped": "Thí sinh nghe chữ 'cộng đồng' thường suy diễn sang các dự án tình nguyện hoặc phần mềm miễn phí.",
      "trickWord": "Bẫy tài chính ảo tưởng: 'luôn được tài trợ miễn phí và không phát sinh chi phí'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Community Cloud)",
      "tip": "Community Cloud là giải pháp hợp tác kinh tế - công nghệ chia sẻ chi phí, không phải quỹ từ thiện miễn phí."
    }
  },
  {
    "id": "cloud-c1-d2-009",
    "chapterId": "cloud-ch1",
    "question": "Khi đánh giá về mô hình 'Hybrid Cloud' (Đám mây lai), nhận định nào sau đây là SAI?",
    "options": [
      "Chỉ đơn thuần là việc doanh nghiệp sử dụng đồng thời hai nhà cung cấp đám mây.",
      "Kết hợp hai hoặc nhiều mô hình đám mây riêng biệt duy trì tính độc lập duy nhất.",
      "Các đám mây liên kết chặt chẽ bằng công nghệ chuẩn hóa cho phép chuyển dữ liệu.",
      "Hỗ trợ tính năng Cloud Bursting khi nhu cầu tính toán cục bộ vượt ngưỡng năng lực."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Sử dụng đồng thời 2 Public Cloud độc lập gọi là Multi-cloud. Hybrid Cloud đòi hỏi sự tích hợp chặt chẽ giữa ít nhất 2 loại hình đám mây khác nhau (thường là Private Cloud + Public Cloud) với khả năng dịch chuyển tải (Workload portability).",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn tai hại giữa hai khái niệm kiến trúc: Hybrid Cloud (đám mây lai) và Multi-cloud (đa đám mây).",
      "trickWord": "Bẫy đánh đồng khái niệm: 'chỉ đơn thuần là việc sử dụng đồng thời hai nhà cung cấp'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Hybrid Cloud vs Multi-Cloud)",
      "tip": "Hybrid = Private + Public kết nối liền mạch; Multi-cloud = Dùng nhiều nhà cung cấp Public Cloud khác nhau."
    }
  },
  {
    "id": "cloud-c1-d2-010",
    "chapterId": "cloud-ch1",
    "question": "Trong mô hình dịch vụ IaaS, nhận định nào sau đây về trách nhiệm bảo mật là SAI?",
    "options": [
      "Nhà cung cấp đám mây chịu trách nhiệm bảo vệ toàn vẹn cơ sở hạ tầng vật lý.",
      "Nhà cung cấp đám mây tự động cập nhật bản vá lỗ hổng cho hệ điều hành máy ảo.",
      "Khách hàng hoàn toàn chịu trách nhiệm cấu hình tường lửa và mã hóa dữ liệu lưu.",
      "Khách hàng toàn quyền quản lý hệ thống phân quyền tài khoản người dùng nội bộ."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Trong mô hình IaaS (Shared Responsibility), nhà cung cấp chỉ quản lý từ lớp Hypervisor và hạ tầng vật lý trở xuống. Hệ điều hành khách (Guest OS) và bản vá bảo mật của máy ảo hoàn toàn do khách hàng tự quản lý.",
    "trickDetails": {
      "whyTrapped": "Người dùng IaaS hay tưởng lầm nhà cung cấp máy ảo sẽ chăm sóc luôn việc cập nhật Windows/Linux cho họ.",
      "trickWord": "Bẫy ranh giới trách nhiệm: 'tự động cập nhật bản vá lỗ hổng cho hệ điều hành'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.2 (Mô hình Trách nhiệm Chung IaaS)",
      "tip": "IaaS: Khách hàng quản lý từ Guest OS, Middleware đến App; Provider chỉ quản lý Hypervisor và Phần cứng."
    }
  },
  {
    "id": "cloud-c1-d2-011",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là SAI về mô hình dịch vụ Nền tảng (Platform as a Service - PaaS)?",
    "options": [
      "Khách hàng triển khai ứng dụng mà không cần quản lý hạ tầng phần cứng và OS ngầm.",
      "Nhà cung cấp quản lý môi trường thực thi runtime, middleware và dịch vụ cơ bản.",
      "Lập trình viên được can thiệp trực tiếp để tùy biến mã nguồn nhân kernel máy chủ.",
      "Giúp đội ngũ phát triển đẩy nhanh chu kỳ phát triển ứng dụng ra thị trường nhanh."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "PaaS trừu tượng hóa toàn bộ hệ điều hành và phần cứng bên dưới. Lập trình viên chỉ được quản trị code ứng dụng và cấu hình dữ liệu, TUYỆT ĐỐI KHÔNG được can thiệp vào nhân kernel hay driver phần cứng.",
    "trickDetails": {
      "whyTrapped": "Thí sinh lầm tưởng môi trường phát triển PaaS cho phép can thiệp sâu vào tầng hệ thống máy chủ.",
      "trickWord": "Bẫy phạm vi can thiệp: 'được can thiệp trực tiếp để tùy biến mã nguồn nhân kernel'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.2 (PaaS Scope & Boundaries)",
      "tip": "Trong PaaS, tầng OS và Kernel bị khóa hoàn toàn; khách hàng chỉ làm chủ Application và Data."
    }
  },
  {
    "id": "cloud-c1-d2-012",
    "chapterId": "cloud-ch1",
    "question": "Khi sử dụng Phần mềm như một Dịch vụ (SaaS), khẳng định nào sau đây là SAI?",
    "options": [
      "Ứng dụng hoàn chỉnh được cung cấp qua trình duyệt web hoặc giao diện lập trình.",
      "Người dùng chỉ quản lý các thiết lập người dùng và quyền truy cập ứng dụng cơ bản.",
      "Nhà cung cấp chịu trách nhiệm hoàn toàn việc nâng cấp phiên bản và vá bảo mật.",
      "Người dùng cuối phải tự cấu hình sao lưu định kỳ cho hạ tầng lưu trữ cơ sở dữ liệu."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Trong mô hình SaaS, nhà cung cấp chịu trách nhiệm toàn diện từ phần cứng, OS, ứng dụng đến sao lưu và phục hồi thảm họa cơ sở dữ liệu. Người dùng cuối không bao giờ phải tự cấu hình sao lưu hạ tầng database.",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng dùng phần mềm thì vẫn phải tự đi sao lưu ổ đĩa database của hệ thống nhà cung cấp.",
      "trickWord": "Bẫy áp đặt trách nhiệm SaaS: 'phải tự cấu hình sao lưu định kỳ cho hạ tầng'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.2 (SaaS Responsibility Matrix)",
      "tip": "SaaS là mô hình rảnh tay nhất cho khách hàng: Nhà cung cấp bao trọn gói từ A đến Z."
    }
  },
  {
    "id": "cloud-c1-d2-013",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG NHẤT về định nghĩa Điện toán đám mây theo chuẩn NIST?",
    "options": [
      "Mô hình cho phép truy cập mạng thuận tiện, theo nhu cầu vào nhóm tài nguyên chung.",
      "Hệ thống máy tính lớn tập trung được đặt tại trụ sở chính phủ để phân phối dịch vụ.",
      "Mạng lưới máy chủ phân tán toàn cầu bắt buộc phải cài đặt hệ điều hành mã nguồn mở.",
      "Phương pháp ảo hóa phần cứng duy nhất chỉ ứng dụng cho các doanh nghiệp quy mô lớn."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "NIST định nghĩa: 'Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources...'",
    "trickDetails": {
      "whyTrapped": "Các phương án B, C, D thêm vào các yếu tố cực đoan như 'đặt tại chính phủ', 'bắt buộc mã nguồn mở', 'chỉ cho doanh nghiệp lớn'.",
      "trickWord": "Bẫy cài cắm điều kiện hẹp loại trừ đáp án chuẩn học thuật.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Định nghĩa chuẩn NIST)",
      "tip": "Định nghĩa chuẩn của NIST luôn bao hàm: tiện lợi, theo nhu cầu, truy cập mạng, và nhóm tài nguyên dùng chung cấu hình được."
    }
  },
  {
    "id": "cloud-c1-d2-014",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về tầng ảo hóa Hypervisor Type 1 trong kiến trúc Cloud?",
    "options": [
      "Chạy như một phần mềm ứng dụng thông thường trên nền tảng hệ điều hành máy chủ gốc.",
      "Chạy trực tiếp trên phần cứng vật lý mà không thông qua hệ điều hành trung gian.",
      "Có hiệu năng xử lý luôn thấp hơn đáng kể so với kiến trúc phần mềm Hypervisor Type 2.",
      "Bắt buộc phải cài đặt trên hệ điều hành Windows Server mới có thể kích hoạt ảo hóa."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Hypervisor Type 1 (Bare-metal như VMware ESXi, KVM, Xen) chạy trực tiếp trên phần cứng máy chủ không cần Host OS, mang lại hiệu năng và độ ổn định cao nhất cho hạ tầng đám mây.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn định nghĩa giữa Hypervisor Type 1 (Bare-metal) và Type 2 (Hosted trên Host OS).",
      "trickWord": "Bẫy đảo lộn đặc tính kiến trúc Hypervisor Type 1 vs Type 2.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.1 (Kiến trúc Ảo hóa Máy chủ)",
      "tip": "Type 1 = Bare-metal (trên sắt/phần cứng); Type 2 = Hosted (trên hệ điều hành có sẵn)."
    }
  },
  {
    "id": "cloud-c1-d2-015",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về tính độc lập vị trí (Location Independence) của Cloud?",
    "options": [
      "Nhà cung cấp không bao giờ cho phép người dùng lựa chọn khu vực địa lý đặt dữ liệu.",
      "Khách hàng có thể chỉ định chính xác số hiệu thanh RAM và khe cắm vật lý trên phiến.",
      "Khách hàng có thể kiểm soát vị trí ở mức trừu tượng cao hơn như Quốc gia hoặc Vùng.",
      "Dữ liệu người dùng sẽ được luân chuyển ngẫu nhiên giữa các quốc gia mà không báo trước."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Location Independence nghĩa là khách hàng không biết vị trí vật lý cụ thể (rack, room), nhưng vẫn có thể chỉ định vị trí ở cấp độ trừu tượng cao hơn (Region, Country, Availability Zone) nhằm tuân thủ pháp lý.",
    "trickDetails": {
      "whyTrapped": "Học sinh tưởng 'độc lập vị trí' nghĩa là nhà cung cấp tự tiện vứt dữ liệu đi bất cứ nước nào không cho khách hàng biết.",
      "trickWord": "Bẫy hiểu sai mức độ trừu tượng của vị trí địa lý trong chuẩn NIST.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Resource Pooling & Location Independence)",
      "tip": "Độc lập vị trí: Ẩn chi tiết phòng máy cụ thể, nhưng công khai cấp độ Vùng (Region) và Khu vực sẵn sàng (AZ)."
    }
  },
  {
    "id": "cloud-c1-d2-016",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về mô hình kinh tế chuyển dịch từ CapEx sang OpEx của Cloud?",
    "options": [
      "Luôn đảm bảo tổng chi phí sở hữu dài hạn 10 năm của Cloud rẻ hơn tự xây dựng On-premise.",
      "Loại bỏ hoàn toàn tất cả các loại chi phí tài chính trong suốt vòng đời dự án công nghệ.",
      "Bắt buộc doanh nghiệp phải mua đứt toàn bộ thiết bị trung tâm dữ liệu ngay từ đầu kỳ.",
      "Giúp doanh nghiệp chuyển từ chi phí vốn đầu tư ban đầu sang chi phí vận hành linh hoạt."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Đám mây biến đổi CapEx (Capital Expenditure - mua sắm tài sản cố định ban đầu) thành OpEx (Operational Expenditure - chi trả theo nhu cầu sử dụng thực tế), giúp giảm rủi ro thanh khoản tài chính.",
    "trickDetails": {
      "whyTrapped": "Phương án D bẫy câu chữ 'luôn đảm bảo rẻ hơn'; thực tế chạy Cloud sai kiến trúc dài hạn có thể đắt hơn on-premise.",
      "trickWord": "Bẫy kinh tế đám mây: CapEx sang OpEx bản chất là quản lý dòng tiền và tính linh hoạt.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Mô hình Tài chính CapEx vs OpEx)",
      "tip": "CapEx = Mua trước khấu hao dần; OpEx = Tiêu đến đâu trả đến đó như hóa đơn tiền điện."
    }
  },
  {
    "id": "cloud-c1-d2-017",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là ĐÚNG khi nói về cơ chế Multi-tenancy (Đa người thuê)?",
    "options": [
      "Nhiều khách hàng dùng chung một hạ tầng nhưng dữ liệu và không gian được cô lập logic.",
      "Mỗi khách hàng được cấp riêng một tòa nhà trung tâm dữ liệu vật lý hoàn toàn cách biệt.",
      "Tất cả người dùng trên hệ thống đều có quyền truy cập vào cơ sở dữ liệu của nhau tùy ý.",
      "Multi-tenancy không cho phép các khách hàng thực hiện cấu hình giao diện cá nhân hóa."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Multi-tenancy là nền tảng cốt lõi của đám mây: chia sẻ hạ tầng vật lý và phiên bản ứng dụng duy nhất, nhưng đảm bảo phân tách và cô lập logic tuyệt đối về mặt dữ liệu và cấu hình cho từng khách hàng (Tenant).",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng dùng chung hạ tầng thì sẽ bị nhìn thấy dữ liệu của nhau hoặc không thể tùy biến giao diện.",
      "trickWord": "Bẫy bản chất Multi-tenancy: Chia sẻ tài nguyên vật lý - Cô lập không gian luận lý.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Multi-tenancy Architecture)",
      "tip": "Multi-tenant giống như các căn hộ độc lập trong một tòa chung cư cao cấp: chung móng cột nhưng khóa cửa riêng biệt."
    }
  },
  {
    "id": "cloud-c1-d2-018",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về cam kết chất lượng dịch vụ (SLA) trong Điện toán đám mây?",
    "options": [
      "Cam kết kỹ thuật tuyệt đối đảm bảo hệ thống không bao giờ xảy ra bất kỳ sự cố dừng nào.",
      "Hợp đồng pháp lý quy định mức độ sẵn sàng và bồi hoàn tài chính khi có sự cố vi phạm.",
      "Chỉ số duy nhất để đánh giá hiệu năng của hệ thống phần cứng đám mây lưu trữ máy chủ.",
      "Văn bản nội bộ giữa các lập trình viên không có giá trị ràng buộc trách nhiệm bồi thường."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "SLA (Service Level Agreement) là hợp đồng pháp lý chính thức quy định các chỉ số đo lường (ví dụ 99.9% hay 99.99% uptime) và mức bồi hoàn tín dụng (Service Credit) khi nhà cung cấp không đạt cam kết.",
    "trickDetails": {
      "whyTrapped": "Phương án B bẫy từ 'tuyệt đối không bao giờ dừng'; trên đời không có hệ thống nào cam kết 100% uptime không lỗi.",
      "trickWord": "Bẫy tính tuyệt đối của cam kết kỹ thuật SLA.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (SLA & High Availability)",
      "tip": "SLA gắn liền với số 9 độ sẵn sàng (High Availability) và điều khoản bồi hoàn tài chính khi sập dịch vụ."
    }
  },
  {
    "id": "cloud-c1-d2-019",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về vai trò của Cloud Controller trong kiến trúc đám mây?",
    "options": [
      "Là phần mềm diệt virus duy nhất được cài đặt trên từng máy tính của người dùng cuối.",
      "Thay thế hoàn toàn bộ định tuyến mạng vật lý của toàn bộ trung tâm dữ liệu viễn thông.",
      "Điều phối và chỉ đạo toàn bộ các nút tài nguyên tính toán, lưu trữ và mạng hạ tầng.",
      "Thiết bị phần cứng chuyên dụng chỉ dùng để lưu trữ mật khẩu đăng nhập của khách hàng."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Cloud Controller đóng vai trò 'bộ não' điều phối trung tâm của nền tảng quản lý đám mây, tiếp nhận yêu cầu từ người dùng để chỉ đạo phân bổ tài nguyên máy chủ, mạng và lưu trữ tương ứng.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm Cloud Controller là một con router mạng hoặc thiết bị phần cứng cắm tủ rack.",
      "trickWord": "Bẫy chức năng bộ não điều phối Cloud Controller trong CMP.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.1 (Kiến trúc nền tảng Cloud Controller)",
      "tip": "Cloud Controller là trung tâm điều phối tổng thể quản lý vòng đời tài nguyên đám mây."
    }
  },
  {
    "id": "cloud-c1-d2-020",
    "chapterId": "cloud-ch1",
    "question": "Nhận định nào sau đây là ĐÚNG về nền tảng đám mây mã nguồn mở OpenStack?",
    "options": [
      "Không có khả năng cung cấp giao diện lập trình ứng dụng REST API cho các nhà phát triển.",
      "Phần mềm đóng gói thương mại độc quyền do tập đoàn Microsoft trực tiếp phát triển bán.",
      "Chỉ hỗ trợ quản lý duy nhất hệ thống máy ảo dựa trên nền tảng công nghệ của VMware.",
      "Hệ sinh thái mã nguồn mở gồm nhiều dịch vụ module hóa điều khiển nhóm tài nguyên lớn."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "OpenStack là hệ sinh thái phần mềm mã nguồn mở tiêu biểu nhất để xây dựng IaaS, cấu thành từ nhiều dự án/module (Nova, Swift, Neutron, Keystone...) giao tiếp với nhau qua chuẩn REST API.",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng OpenStack là phần mềm thương mại hoặc chỉ hỗ trợ một loại ảo hóa duy nhất.",
      "trickWord": "Bẫy nguồn gốc và kiến trúc module mã nguồn mở của OpenStack.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.2 (OpenStack Ecosystem)",
      "tip": "OpenStack = Mã nguồn mở + Modular (Nova tính toán, Swift lưu trữ, Neutron mạng) + Chuẩn REST API."
    }
  },
  {
    "id": "cloud-c1-d2-021",
    "chapterId": "cloud-ch1",
    "question": "Phát biểu nào sau đây là ĐÚNG về giải pháp kết nối mạng trong mô hình Hybrid Cloud?",
    "options": [
      "Sử dụng kênh truyền riêng ảo VPN hoặc đường truyền trực tiếp chuyên dụng bảo mật cao.",
      "Bắt buộc phải mở thông toàn bộ mạng nội bộ ra Internet công cộng không cần mật khẩu.",
      "Chỉ có thể kết nối thông qua việc sao chép thủ công dữ liệu bằng ổ cứng di động cắm ngoài.",
      "Không thể thiết lập đồng bộ dữ liệu thời gian thực giữa đám mây riêng và đám mây công."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Hybrid Cloud kết nối an toàn giữa On-premise Data Center và Public Cloud thông qua IPSec VPN mã hóa hoặc đường truyền vật lý chuyên dụng riêng biệt (AWS Direct Connect, Azure ExpressRoute).",
    "trickDetails": {
      "whyTrapped": "Phương án B và C đưa ra các cách kết nối phi lý, phản khoa học bảo mật mạng doanh nghiệp.",
      "trickWord": "Bẫy phương thức bảo mật liên kết mạng giữa các đám mây trong mô hình Hybrid.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Hybrid Connectivity)",
      "tip": "Kết nối Hybrid Cloud luôn cần kênh truyền bảo mật cao: IPsec VPN hoặc Direct Connect/ExpressRoute."
    }
  },
  {
    "id": "cloud-c1-d2-022",
    "chapterId": "cloud-ch1",
    "question": "Khẳng định nào sau đây là ĐÚNG về mô hình thanh toán Pay-per-use trong Điện toán tiện ích?",
    "options": [
      "Khách hàng phải trả một khoản phí cố định hàng năm dù không kích hoạt sử dụng máy chủ.",
      "Chi phí thanh toán tỷ lệ thuận chính xác với khối lượng tài nguyên thực tế đã tiêu thụ.",
      "Không hỗ trợ việc hủy bỏ hay dừng thanh toán khi người dùng tắt máy chủ thử nghiệm đi.",
      "Chỉ áp dụng cho các doanh nghiệp cam kết thời gian sử dụng liên tục từ năm năm trở lên."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mô hình Pay-per-use (Utility Computing) tính phí tương tự dịch vụ điện thoại, điện nước: khách hàng chỉ thanh toán chính xác cho số giây/phút CPU, dung lượng GB lưu trữ và băng thông thực tế tiêu thụ.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn giữa hợp đồng thuê bao cứng định kỳ truyền thống và mô hình điện toán tiện ích đo lường thực tế.",
      "trickWord": "Bẫy bản chất thanh toán theo mức tiêu thụ của Utility Computing.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Utility Computing & Pay-per-use)",
      "tip": "Pay-as-you-go: Bật máy thì tính tiền, tắt máy giải phóng tài nguyên thì dừng tính tiền CPU/RAM."
    }
  },
  {
    "id": "cloud-c1-d2-023",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về 5 đặc tính chuẩn NIST:\n(I) On-demand self-service loại bỏ sự cần thiết của quản trị viên hệ thống khách hàng.\n(II) Broad network access yêu cầu dịch vụ đám mây phải truy cập được qua các giao thức mạng chuẩn.\n(III) Rapid elasticity cho phép tài nguyên tự động co giãn theo thời gian thực đáp ứng tải.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (I) SAI vì tự phục vụ là không cần nhân viên của NHÀ CUNG CẤP đám mây can thiệp, chứ khách hàng vẫn rất cần quản trị viên đám mây nội bộ để vận hành hệ thống. Mệnh đề (II) và (III) hoàn toàn đúng.",
    "trickDetails": {
      "whyTrapped": "Thí sinh nhầm 'không cần con người can thiệp' nghĩa là doanh nghiệp không cần tuyển kỹ sư quản trị nữa.",
      "trickWord": "Bẫy chủ thể quản trị trong On-demand self-service.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2",
      "tip": "Tự phục vụ loại bỏ người hỗ trợ của bên bán (Provider), bên mua (Client) vẫn cần nhân sự cấu hình."
    }
  },
  {
    "id": "cloud-c1-d2-024",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về ảo hóa máy chủ:\n(I) Ảo hóa là công nghệ nền tảng cốt lõi cho phép hiện thực hóa Resource Pooling.\n(II) Một máy chủ vật lý chỉ có thể cài đặt các máy ảo cùng chung một hệ điều hành.\n(III) Công nghệ máy ảo phân chia tài nguyên phần cứng thành nhiều môi trường độc lập.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ có duy nhất mệnh đề (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (III) là đúng về mặt kỹ thuật."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (II) SAI vì Hypervisor cho phép chạy đồng thời các máy ảo với các hệ điều hành hoàn toàn khác nhau (Windows, Linux, BSD) trên cùng một máy chủ vật lý. Mệnh đề (I) và (III) đúng.",
    "trickDetails": {
      "whyTrapped": "Tưởng rằng máy chủ đang chạy Linux thì máy ảo bên trong cũng bắt buộc phải chạy Linux.",
      "trickWord": "Bẫy tính đa dạng của Guest OS trên nền tảng ảo hóa Hypervisor.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.2 & II.1 (Ảo hóa phần cứng)",
      "tip": "Ảo hóa cho phép chạy song song máy ảo Windows Server và Linux Ubuntu trên cùng một phiến máy chủ vật lý."
    }
  },
  {
    "id": "cloud-c1-d2-025",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về Ma trận Trách nhiệm Chung (Shared Responsibility):\n(I) Trong mô hình IaaS, khách hàng chịu trách nhiệm bảo mật hệ điều hành máy ảo.\n(II) Trong mô hình SaaS, khách hàng chịu trách nhiệm bảo vệ hạ tầng vật lý máy chủ.\n(III) Trong mọi mô hình đám mây, khách hàng luôn chịu trách nhiệm về dữ liệu của mình.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ mệnh đề (I) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (II) SAI vì trong SaaS nhà cung cấp chịu trách nhiệm hoàn toàn về hạ tầng máy chủ vật lý. Mệnh đề (I) đúng (IaaS khách vá OS) và mệnh đề (III) đúng (Data luôn là trách nhiệm tối thượng của khách hàng trong mọi mô hình).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ lên SaaS thì nhà cung cấp chịu luôn trách nhiệm về dữ liệu rò rỉ do khách để lộ mật khẩu.",
      "trickWord": "Bẫy nguyên lý bất di bất dịch: Dữ liệu (Data) luôn thuộc trách nhiệm của khách hàng.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.2 (Ma trận Trách nhiệm Chung)",
      "tip": "Trong mọi mô hình (IaaS, PaaS, SaaS): Dữ liệu và Danh tính tài khoản người dùng LUÔN thuộc về khách hàng."
    }
  },
  {
    "id": "cloud-c1-d2-026",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về các mô hình triển khai đám mây:\n(I) Private Cloud mang lại quyền kiểm soát cao nhất nhưng đòi hỏi chi phí đầu tư lớn.\n(II) Public Cloud chia sẻ hạ tầng vật lý giúp tiết kiệm chi phí nhờ tính kinh tế quy mô.\n(III) Hybrid Cloud bắt buộc phải xóa bỏ toàn bộ hạ tầng On-premise hiện có của công ty.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI hoàn toàn vì Hybrid Cloud sinh ra để tận dụng và bảo vệ vốn đầu tư hạ tầng On-premise hiện có, kết hợp mở rộng với Public Cloud, chứ không bắt xóa bỏ. Mệnh đề (I) và (II) đúng.",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng chuyển sang đám mây lai là phải vứt bỏ toàn bộ máy chủ cũ trong phòng máy doanh nghiệp.",
      "trickWord": "Bẫy mục đích tồn tại của Hybrid Cloud: Tận dụng hạ tầng tại chỗ kết hợp đám mây công cộng.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Mô hình triển khai)",
      "tip": "Hybrid Cloud là cầu nối giúp bảo tồn vốn đầu tư hạ tầng tại chỗ và linh hoạt đón đầu công nghệ mới."
    }
  },
  {
    "id": "cloud-c1-d2-027",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về lịch sử phát triển Điện toán đám mây:\n(I) Thập niên 1960s đánh dấu sự xuất hiện của mô hình chia sẻ thời gian máy tính lớn.\n(II) Năm 1999, Salesforce tiên phong mô hình SaaS qua ứng dụng quản lý quan hệ khách hàng.\n(III) Năm 2006, Amazon chính thức cung cấp dịch vụ hạ tầng điện toán đám mây với EC2 và S3.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Cả 3 mốc lịch sử đều hoàn toàn chính xác theo giáo trình: 1960s (Timesharing mainframe), 1999 (Salesforce CRM mở đầu SaaS), 2006 (Amazon ra mắt AWS EC2, S3 và Apache Hadoop mở đầu Modern Cloud).",
    "trickDetails": {
      "whyTrapped": "Thí sinh hay nghi ngờ các con số năm lịch sử bị gài bẫy sai 1-2 năm (như 2006 vs 2002).",
      "trickWord": "Bẫy kiểm tra độ vững tâm về các cột mốc lịch sử kinh điển của Cloud Computing.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.2 (Lịch sử phát triển)",
      "tip": "Nhớ 3 mốc vàng: 1960s (Timesharing) - 1999 (Salesforce SaaS) - 2006 (Amazon EC2/S3 Modern Cloud)."
    }
  },
  {
    "id": "cloud-c1-d2-028",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về tác động tài chính của Điện toán đám mây:\n(I) CapEx đại diện cho chi phí mua sắm tài sản cố định cần phê duyệt ngân sách lớn.\n(II) OpEx cho phép doanh nghiệp chi trả theo chi phí hoạt động thực tế hàng tháng.\n(III) Chuyển đổi lên đám mây luôn đảm bảo cắt giảm 100% chi phí vận hành nhân sự IT.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI vì lên đám mây chỉ thay đổi bản chất công việc của nhân sự IT (từ lắp ráp cáp, sửa máy chủ vật lý sang kiến trúc Cloud, bảo mật, DevOps), chứ KHÔNG HỀ cắt giảm 100% nhân sự IT. Mệnh đề (I) và (II) đúng.",
    "trickDetails": {
      "whyTrapped": "Ảo tưởng rằng dùng Cloud là công ty không cần bất kỳ một nhân viên IT nào nữa.",
      "trickWord": "Bẫy ngụy biện cực đoan: 'cắt giảm 100% chi phí vận hành nhân sự IT'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Tác động kinh tế CapEx vs OpEx)",
      "tip": "Đám mây giải phóng kỹ sư IT khỏi việc gác phòng máy để tập trung sáng tạo giá trị nghiệp vụ số."
    }
  },
  {
    "id": "cloud-c1-d2-029",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về an toàn bảo mật trong mô hình Multi-tenancy:\n(I) Cơ chế cô lập logic giữa các tenant ngăn chặn việc truy cập dữ liệu trái phép.\n(II) Kẻ tấn công trên cùng máy chủ vật lý có thể khai thác lỗ hổng kênh kề (Side-channel).\n(III) Multi-tenancy chỉ áp dụng cho tầng ứng dụng SaaS chứ không thể dùng ở tầng IaaS.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI vì Multi-tenancy áp dụng ở MỌI TẦNG của đám mây: ở IaaS các VM của các khách hàng khác nhau chia sẻ chung CPU/RAM của cùng một host vật lý. Mệnh đề (I) và (II) đúng (lỗ hổng Spectre/Meltdown là ví dụ của Side-channel attack).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chỉ có phần mềm SaaS mới có khái niệm Multi-tenancy.",
      "trickWord": "Bẫy phạm vi áp dụng của nguyên lý Multi-tenancy trong toàn bộ kiến trúc Cloud.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 & II.3 (Multi-tenancy Security)",
      "tip": "Multi-tenant hiện diện từ IaaS (chung host vật lý) đến PaaS (chung container/runtime) và SaaS (chung database/app)."
    }
  },
  {
    "id": "cloud-c1-d2-030",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về kiến trúc phần mềm OpenStack:\n(I) Dịch vụ Nova chịu trách nhiệm quản lý vòng đời và cấp phát các máy ảo tính toán.\n(II) Dịch vụ Swift cung cấp giải pháp lưu trữ đối tượng phân tán có khả năng mở rộng cao.\n(III) Tất cả các module trong OpenStack bắt buộc phải chạy trên cùng một máy chủ đơn lẻ.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI vì OpenStack là hệ thống phân tán cao cấp, các dịch vụ (Nova, Swift, Neutron, Keystone...) được cài đặt phân tán trên hàng trăm cụm máy chủ chuyên biệt (Controller Nodes, Compute Nodes, Storage Nodes). Mệnh đề (I) và (II) đúng.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn kiến trúc triển khai thử nghiệm All-in-one với kiến trúc phân tán thực tế của OpenStack.",
      "trickWord": "Bẫy phân bố nút máy chủ: 'bắt buộc phải chạy trên cùng một máy chủ đơn lẻ'.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.2 (OpenStack Services: Nova, Swift)",
      "tip": "OpenStack là hệ thống vi dịch vụ phân tán qua API RESTful, mỗi module quản lý một phân hệ hạ tầng."
    }
  },
  {
    "id": "cloud-c1-d2-031",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về lưu trữ đám mây:\n(I) Block Storage thích hợp để định dạng hệ thống tệp và cài đặt hệ điều hành cho máy ảo.\n(II) Object Storage phù hợp nhất để lưu trữ tài liệu, video, hình ảnh với metadata mở rộng.\n(III) Object Storage cho phép sửa đổi trực tiếp từng byte dữ liệu mà không cần ghi đè file.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI vì Object Storage (như Amazon S3, OpenStack Swift) có tính chất bất biến (Immutable): khi cần sửa nội dung dù chỉ 1 byte thì bắt buộc phải tải lên ghi đè toàn bộ đối tượng (Whole object rewrite). Mệnh đề (I) và (II) đúng.",
    "trickDetails": {
      "whyTrapped": "Tưởng rằng Object Storage cũng có thể đọc/ghi ngẫu nhiên (random read/write) từng block như ổ đĩa cứng.",
      "trickWord": "Bẫy cơ chế ghi dữ liệu của Object Storage: Không hỗ trợ in-place modification.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.1 (Phân loại lưu trữ hạ tầng đám mây)",
      "tip": "Block Storage: Ghi sửa từng sector/block; Object Storage: Ghi cả đối tượng (Immutable file upload)."
    }
  },
  {
    "id": "cloud-c1-d2-032",
    "chapterId": "cloud-ch1",
    "question": "Cho 3 mệnh đề về chiến lược chuyển đổi hệ thống lên đám mây (Cloud Migration):\n(I) Rehosting (Lift-and-Shift) là sao chép nguyên trạng ứng dụng sang đám mây không đổi mã.\n(II) Refactoring đòi hỏi viết lại cấu trúc mã nguồn để tận dụng tối đa tính năng Cloud-native.\n(III) Rehosting luôn mang lại hiệu quả chi phí tối ưu hơn Refactoring về lâu dài.\nNhững mệnh đề nào ĐÚNG?",
    "options": [
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mệnh đề (III) SAI vì Lift-and-Shift bê nguyên kiến trúc cồng kềnh cũ lên máy ảo cloud thường gây lãng phí tài nguyên và chi phí vận hành đắt đỏ về lâu dài. Refactoring (tái cấu trúc Cloud-native, Serverless) mới mang lại hiệu quả chi phí dài hạn. Mệnh đề (I) và (II) đúng.",
    "trickDetails": {
      "whyTrapped": "Nhầm lẫn giữa chi phí chuyển đổi ban đầu thấp (Lift-and-Shift nhanh rẻ) với chi phí vận hành dài hạn.",
      "trickWord": "Bẫy so sánh kinh tế dài hạn giữa Rehosting và Refactoring.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Chiến lược di chuyển Cloud Migration)",
      "tip": "Lift-and-shift: Nhanh, rẻ lúc đầu nhưng tốn kém lúc sau; Refactor: Tốn công lúc đầu nhưng tối ưu mãi mãi."
    }
  },
  {
    "id": "cloud-c1-d2-033",
    "chapterId": "cloud-ch1",
    "question": "Một ngân hàng thương mại cần lưu trữ dữ liệu tài khoản giao dịch tuyệt mật tại trung tâm dữ liệu nội bộ tuân thủ luật, nhưng muốn dùng Public Cloud để phân tích dữ liệu lớn. Mô hình nào tối ưu nhất?",
    "options": [
      "Mô hình đám mây lai kết nối an toàn bảo mật giữa hạ tầng tại chỗ và đám mây công cộng.",
      "Chuyển toàn bộ dữ liệu giao dịch tài chính sang một nền tảng Public Cloud giá rẻ duy nhất.",
      "Xây dựng hệ thống chia sẻ cộng đồng miễn phí với các đối thủ cạnh tranh trên thị trường.",
      "Dừng hoàn toàn dự án phân tích dữ liệu lớn do đám mây không đáp ứng tiêu chuẩn an toàn."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Mô hình Hybrid Cloud là lựa chọn số 1 của các tổ chức tài chính/ngân hàng: giữ dữ liệu nhạy cảm ở Private Cloud/On-premises và đẩy dữ liệu đã ẩn danh lên Public Cloud để tận dụng năng lực phân tích tính toán khổng lồ.",
    "trickDetails": {
      "whyTrapped": "Phương án B vi phạm luật bảo vệ dữ liệu ngân hàng; phương án C và D không mang tính giải pháp thực tiễn.",
      "trickWord": "Bẫy kịch bản tuân thủ pháp lý tài chính kết hợp nhu cầu tính toán hiệu năng cao.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Kịch bản ứng dụng Hybrid Cloud)",
      "tip": "Dữ liệu nhạy cảm + Cần mở rộng tính toán = Lựa chọn mô hình Hybrid Cloud."
    }
  },
  {
    "id": "cloud-c1-d2-034",
    "chapterId": "cloud-ch1",
    "question": "Một startup thương mại điện tử triển khai chương trình khuyến mãi chớp nhoáng trong 2 giờ, lưu lượng tăng 40 lần rồi tụt dốc. Đặc tính nào của Cloud giúp họ không bị sập web và tối ưu chi phí?",
    "options": [
      "Truy cập mạng rộng rãi cho phép người dùng đăng nhập từ mọi loại trình duyệt trên mạng.",
      "Khả năng co giãn nhanh chóng tự động cấp phát và thu hồi tài nguyên theo lưu lượng tải.",
      "Định giá cố định theo năm giúp doanh nghiệp dự toán ngân sách tài chính chính xác tuyệt đối.",
      "Hạ tầng máy chủ chuyên dụng vật lý được lắp đặt cố định trước sự kiện hàng tháng trời."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Rapid Elasticity (kết hợp Auto-scaling và Pay-per-use) tự động bổ sung máy chủ tính toán khi lượng truy cập tăng vọt trong 2 giờ và tự động tắt đi khi hết giờ khuyến mãi, cứu hệ thống không bị nghẽn và không lãng phí tiền.",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể chọn Broad network access vì thấy có nhắc đến 'người mua hàng truy cập qua mạng'.",
      "trickWord": "Bẫy nhận diện đặc tính cốt lõi giải quyết bài toán biến động tải đột biến trong thời gian ngắn.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Rapid Elasticity in E-commerce)",
      "tip": "Tải tăng đột biến trong thời gian ngắn rồi tụt dốc = Đặc tính Rapid Elasticity (Co giãn nhanh chóng)."
    }
  },
  {
    "id": "cloud-c1-d2-035",
    "chapterId": "cloud-ch1",
    "question": "Một hệ thống bệnh viện lớn cần lưu trữ hàng triệu tệp tin ảnh chụp X-quang và MRI trong thời hạn 20 năm, hầu như không bao giờ đọc lại. Kiến trúc lưu trữ nào là giải pháp tiết kiệm ngân sách nhất?",
    "options": [
      "Lưu trữ trong bộ nhớ tạm thời của máy chủ để đảm bảo tốc độ phản hồi tính bằng micro-giây.",
      "Lưu trữ khối hiệu năng cao với ổ cứng thể rắn gắn trực tiếp vào các máy ảo tính toán.",
      "Lưu trữ đối tượng với tầng lưu trữ lưu trữ lạnh có chi phí duy trì hàng tháng cực thấp.",
      "In toàn bộ hình ảnh chẩn đoán ra đĩa quang để bảo quản thủ công trong kho lưu trữ hồ sơ."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Object Storage Cold/Archive Tier (như AWS Glacier, Azure Archive) được thiết kế đặc quyền cho dữ liệu lưu trữ dài hạn ít truy cập, chi phí chỉ bằng 1/10 so với lưu trữ tiêu chuẩn thông thường.",
    "trickDetails": {
      "whyTrapped": "Nghĩ đến việc dùng Block Storage SSD đắt đỏ gây cạn kiệt ngân sách bệnh viện khi dung lượng đạt hàng Petabyte.",
      "trickWord": "Bẫy lựa chọn kiến trúc lưu trữ: Dữ liệu dung lượng lớn, lưu lâu năm, hiếm khi đọc = Cold Object Storage.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.1 (Kiến trúc Lưu trữ dữ liệu)",
      "tip": "Lưu trữ lâu năm ít truy cập = Cold/Archive Object Storage; Tốc độ chạy OS/Database = High-performance Block Storage."
    }
  },
  {
    "id": "cloud-c1-d2-036",
    "chapterId": "cloud-ch1",
    "question": "Bốn tập đoàn dược phẩm cùng hợp tác nghiên cứu vắc-xin, cần chia sẻ chung một hệ thống mô phỏng dữ liệu phân tử với các tiêu chuẩn bảo mật y tế nghiêm ngặt. Họ nên xây dựng mô hình đám mây nào?",
    "options": [
      "Bắt buộc thuê toàn bộ hạ tầng độc quyền của một trường đại học công lập trong khu vực.",
      "Mô hình đám mây công cộng giá rẻ hoàn toàn mở cửa cho mọi người dùng tự do tham gia.",
      "Tự mỗi bên xây dựng hệ thống riêng biệt và chuyển giao kết quả qua thư điện tử đính kèm.",
      "Mô hình đám mây cộng đồng được chia sẻ độc quyền giữa các tổ chức có chung mối quan tâm."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Community Cloud là định nghĩa chuẩn xác nhất: được chia sẻ bởi nhiều tổ chức có cùng sứ mệnh, yêu cầu bảo mật và chính sách tuân thủ ngành đặc thù.",
    "trickDetails": {
      "whyTrapped": "Thí sinh có thể chọn Private Cloud nhưng quên mất ở đây có tới 4 tổ chức độc lập cùng dùng chung.",
      "trickWord": "Bẫy nhận diện mô hình Community Cloud: Nhiều tổ chức + Cùng sứ mệnh/chính sách chung.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Community Cloud Use-case)",
      "tip": "Nhiều tổ chức có chung mối quan tâm và tiêu chuẩn pháp lý = Community Cloud."
    }
  },
  {
    "id": "cloud-c1-d2-037",
    "chapterId": "cloud-ch1",
    "question": "Đội ngũ phát triển của một công ty khởi nghiệp muốn tập trung 100% thời gian viết mã nguồn, hoàn toàn không muốn quản trị hệ điều hành, cài đặt bản vá hay cấu hình mạng. Họ nên lựa chọn mô hình dịch vụ nào?",
    "options": [
      "Mô hình Nền tảng Dịch vụ cho phép bàn giao toàn bộ việc quản lý hạ tầng cho nhà cung cấp.",
      "Mô hình Hạ tầng Dịch vụ đòi hỏi tự tay cài đặt hệ điều hành và cấu hình tường lửa mạng.",
      "Thuê máy chủ vật lý chuyên dụng đặt tại trung tâm dữ liệu truyền thống tự quản trị lấy.",
      "Tự mua sắm máy chủ cũ để triển khai phòng máy tính nội bộ trong văn phòng làm việc."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "PaaS (Platform as a Service như Heroku, Google App Engine, AWS Elastic Beanstalk) giải phóng lập trình viên khỏi gánh nặng quản trị OS, Middleware và Mạng, cho phép 'chỉ việc viết code và deploy'.",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm giữa IaaS (vẫn phải quản lý OS) và PaaS (được giải phóng khỏi OS).",
      "trickWord": "Bẫy định vị nhu cầu: Chỉ viết mã nguồn, không quản trị OS = PaaS.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.2 (PaaS)",
      "tip": "Code only, No OS management = PaaS; Full OS Control = IaaS; Ready-to-use software = SaaS."
    }
  },
  {
    "id": "cloud-c1-d2-038",
    "chapterId": "cloud-ch1",
    "question": "Một công ty công nghệ gặp sự cố sét đánh làm ngắt điện toàn bộ một Trung tâm dữ liệu của Cloud Provider (Zone A). Kiến trúc thiết kế nào giúp ứng dụng của họ vẫn hoạt động bình thường không gián đoạn?",
    "options": [
      "Chỉ đặt toàn bộ các máy chủ tính toán trong cùng một cụm máy chủ tại một trung tâm dữ liệu.",
      "Triển khai đa vùng sẵn sàng với bộ cân bằng tải phân phối lưu lượng giữa nhiều trung tâm.",
      "Tắt toàn bộ hệ thống dự phòng để tiết kiệm tối đa ngân sách vận hành trong mùa sự cố.",
      "Lưu trữ bản sao lưu duy nhất trên máy tính xách tay của nhân viên quản trị hệ thống."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Kiến trúc Multi-AZ (Đa khu vực sẵn sàng) kết hợp Load Balancer tự động chuyển hướng lưu lượng truy cập sang Zone B khi Zone A gặp sự cố thảm họa vật lý, đảm bảo High Availability (tính sẵn sàng cao).",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ chỉ cần có 2 máy ảo là đủ an toàn, nhưng nếu 2 máy ảo cùng nằm trong 1 Zone thì sét đánh vẫn chết cả hai.",
      "trickWord": "Bẫy thiết kế kiến trúc phân tán Multi-AZ chống thảm họa vật lý trung tâm dữ liệu.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.1 (Trung tâm dữ liệu & Availability Zones)",
      "tip": "Chống sập do thảm họa cấp Datacenter = Thiết kế Multi-AZ (Đa vùng sẵn sàng)."
    }
  },
  {
    "id": "cloud-c1-d2-039",
    "chapterId": "cloud-ch1",
    "question": "Doanh nghiệp nhận hóa đơn Cloud tăng vọt do các kỹ sư quên tắt máy ảo GPU thử nghiệm ngoài giờ làm việc. Biện pháp quản trị nào giải quyết triệt để và tự động hóa vấn đề lãng phí này?",
    "options": [
      "Chuyển toàn bộ hệ thống sang sử dụng máy chủ vật lý mua đứt không cần kiểm soát tài chính.",
      "Cấm hoàn toàn các kỹ sư tiếp cận công nghệ đám mây để triệt tiêu mọi khoản chi phí mới.",
      "Thiết lập chính sách tự động tắt máy ngoài giờ và kích hoạt cảnh báo hạn mức ngân sách.",
      "Yêu cầu nhân viên kế toán túc trực tại văn phòng suốt đêm để bấm nút tắt máy thủ công."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Đặc tính Measured Service đi kèm các công cụ quản trị đám mây (Cloud Management Platform / FinOps) cho phép thiết lập tự động hóa: Scheduled auto-stop (lên lịch tắt máy) và Budget Alert (cảnh báo vượt ngưỡng chi tiêu).",
    "trickDetails": {
      "whyTrapped": "Phương án B, C, D là các biện pháp hành chính tiêu cực hoặc lạc hậu, không phù hợp văn hóa quản trị đám mây.",
      "trickWord": "Bẫy quản trị chi phí đám mây (Cloud Cost Optimization / FinOps).",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.1 (Công cụ quản lý đám mây)",
      "tip": "Quản trị chi phí Cloud thông minh: Tự động hóa lịch trình tài nguyên + Cảnh báo ngân sách tự động."
    }
  },
  {
    "id": "cloud-c1-d2-040",
    "chapterId": "cloud-ch1",
    "question": "Một cơ quan tình báo yêu cầu hệ thống máy chủ đám mây không được chia sẻ CPU vật lý với bất kỳ tổ chức nào khác trên thế giới. Dịch vụ đám mây nào trên Public Cloud đáp ứng yêu cầu này?",
    "options": [
      "Dịch vụ cơ sở dữ liệu phi quan hệ miễn phí do cộng đồng mạng đóng góp và duy trì ngoài.",
      "Dịch vụ máy ảo dùng chung nhiều người thuê thông thường với giá thành ưu đãi nhất mạng.",
      "Dịch vụ ứng dụng phần mềm dùng chung qua trình duyệt web trên nền tảng đám mây mở.",
      "Dịch vụ máy chủ lưu trữ chuyên dụng cô lập hoàn toàn phần cứng vật lý cho một khách hàng."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Dedicated Host / Dedicated Instance (Máy chủ chuyên dụng) trên Public Cloud phân bổ một máy chủ vật lý nguyên chiếc cho duy nhất một khách hàng, loại bỏ hoàn toàn việc dùng chung CPU/RAM (Multi-tenancy vật lý).",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng dùng Public Cloud thì bắt buộc phải chia sẻ CPU vật lý với người lạ.",
      "trickWord": "Bẫy giải pháp Dedicated Host giải quyết bài toán tuân thủ bảo mật khắt khe trên Public Cloud.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 & III.1 (Dedicated Cloud Resources)",
      "tip": "Không chia sẻ phần cứng vật lý trên Public Cloud = Dedicated Host / Bare Metal Cloud."
    }
  },
  {
    "id": "cloud-c1-d2-041",
    "chapterId": "cloud-ch1",
    "question": "Để giảm thiểu tối đa nguy cơ phụ thuộc vào một nhà cung cấp duy nhất (Vendor Lock-in) khi phát triển ứng dụng vi dịch vụ, doanh nghiệp nên ưu tiên áp dụng công nghệ nào?",
    "options": [
      "Đóng gói ứng dụng vào công nghệ Container chuẩn hóa có thể chạy trên mọi nền tảng đám mây.",
      "Sử dụng tối đa các dịch vụ cơ sở dữ liệu độc quyền khép kín của riêng một nhà cung cấp.",
      "Viết mã nguồn gắn chặt với các hàm giao tiếp phần cứng đặc thù của máy chủ trung tâm.",
      "Ký hợp đồng dịch vụ cam kết sử dụng độc quyền một nền tảng công nghệ trong suốt mười năm."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Container hóa (Docker, Kubernetes) đóng gói mã nguồn và mọi thư viện phụ thuộc thành một đơn vị tiêu chuẩn, cho phép di chuyển ứng dụng mượt mà giữa AWS, GCP, Azure hoặc On-premise mà không bị khóa chặt nhà cung cấp.",
    "trickDetails": {
      "whyTrapped": "Phương án B (dùng dịch vụ độc quyền) chính là nguyên nhân trực tiếp dẫn tới Vendor Lock-in.",
      "trickWord": "Bẫy chiến lược phòng chống hiện tượng Vendor Lock-in trong kỷ nguyên Cloud.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Thách thức Vendor Lock-in)",
      "tip": "Chống phụ thuộc nhà cung cấp (Vendor Lock-in) = Sử dụng Container (Docker/K8s) và chuẩn mã nguồn mở."
    }
  },
  {
    "id": "cloud-c1-d2-042",
    "chapterId": "cloud-ch1",
    "question": "Điểm khác biệt cốt lõi nhất giữa 'Elasticity' (Co giãn linh hoạt) và 'Scalability' (Khả năng mở rộng) là gì?",
    "options": [
      "Scalability chỉ liên quan đến việc thu hẹp tài nguyên khi hệ thống không còn người dùng.",
      "Elasticity là khả năng tự động thích ứng với biến động tải cả tăng và giảm theo thời gian.",
      "Elasticity đòi hỏi người quản trị phải can thiệp thủ công nâng cấp phần cứng định kỳ năm.",
      "Hai thuật ngữ này hoàn toàn đồng nghĩa và có thể thay thế cho nhau trong mọi văn cảnh."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Scalability là khả năng của hệ thống xử lý tải tăng dần trong tương lai (thường bằng quy hoạch mở rộng). Elasticity là khả năng tự động co giãn linh hoạt cả 2 chiều (tăng lên khi đông khách và CO LẠI khi vắng khách) theo thời gian thực.",
    "trickDetails": {
      "whyTrapped": "Học sinh thường coi Elasticity và Scalability là một, không nhận ra Elasticity nhấn mạnh cả chiều THU HẸP (Scale-in/down).",
      "trickWord": "Bẫy khác biệt bản chất: Elasticity = Co giãn 2 chiều tự động; Scalability = Năng lực chịu tải tăng dần.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Rapid Elasticity vs Scalability)",
      "tip": "Elasticity giống như dây chun: kéo giãn ra khi kéo và TỰ CO LẠI về hình dáng cũ khi buông tay."
    }
  },
  {
    "id": "cloud-c1-d2-043",
    "chapterId": "cloud-ch1",
    "question": "Sự khác biệt căn bản giữa công nghệ 'Virtualization' (Ảo hóa) và 'Cloud Computing' là gì?",
    "options": [
      "Điện toán đám mây chỉ là một tên gọi thương mại khác của cùng một phần mềm ảo hóa duy nhất.",
      "Ảo hóa cung cấp dịch vụ tự phục vụ theo nhu cầu còn điện toán đám mây thì hoàn toàn không.",
      "Ảo hóa là công nghệ kích hoạt phần mềm, còn đám mây là mô hình dịch vụ kinh doanh hoàn chỉnh.",
      "Ảo hóa bắt buộc phải kết nối Internet công cộng còn điện toán đám mây chỉ chạy mạng nội bộ."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Ảo hóa (Virtualization) là công nghệ phần mềm tạo ra máy ảo từ phần cứng vật lý. Điện toán đám mây là mô hình dịch vụ hoàn chỉnh tích hợp ảo hóa với tự phục vụ, đo lường chi phí, co giãn và quản lý tự động.",
    "trickDetails": {
      "whyTrapped": "Nhiều người đánh đồng cứ cài VMware hay VirtualBox lên máy tính là đã có 'Điện toán đám mây'.",
      "trickWord": "Bẫy ranh giới: Virtualization là công nghệ nền tảng (Enabler); Cloud là mô hình dịch vụ hoàn chỉnh (Model).",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Ảo hóa vs Điện toán đám mây)",
      "tip": "Ảo hóa + Tự phục vụ + Co giãn + Đo lường định lượng + Mạng rộng = Mới thành Điện toán đám mây."
    }
  },
  {
    "id": "cloud-c1-d2-044",
    "chapterId": "cloud-ch1",
    "question": "Khác biệt bản chất giữa 'Utility Computing' (Điện toán tiện ích) và 'Cloud Computing' là gì?",
    "options": [
      "Điện toán tiện ích là thuật ngữ lỗi thời hoàn toàn bị khai tử không còn giá trị nghiên cứu.",
      "Utility Computing đòi hỏi phải xây dựng các trung tâm dữ liệu ảo hóa trên quy mô toàn cầu.",
      "Cloud Computing không bao giờ áp dụng phương thức đo lường chi phí của Utility Computing.",
      "Utility Computing tập trung vào mô hình kinh doanh tính cước tương tự dịch vụ điện nước sạch."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Utility Computing là mô hình đóng gói và tính cước tài nguyên CNTT như dịch vụ công ích tiện ích (điện, nước, điện thoại - dùng bao nhiêu trả bấy nhiêu). Cloud Computing kế thừa và hiện thực hóa mô hình này bằng hạ tầng ảo hóa hiện đại.",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng Utility Computing là một loại phần cứng máy tính cụ thể thay vì một mô hình kinh doanh tài chính.",
      "trickWord": "Bẫy định vị: Utility Computing là mô hình kinh tế dịch vụ tiện ích.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.3 (Mô hình Điện toán tiện ích)",
      "tip": "Utility Computing là triết lý trả tiền như đồng hồ điện nước; Cloud là hệ thống công nghệ vận hành triết lý đó."
    }
  },
  {
    "id": "cloud-c1-d2-045",
    "chapterId": "cloud-ch1",
    "question": "Điểm phân biệt rõ nhất giữa 'Grid Computing' (Điện toán lưới) và 'Cloud Computing' là gì?",
    "options": [
      "Grid kết nối nhiều máy tính phân tán giải một bài toán lớn, Cloud tập trung vào chia sẻ dịch vụ.",
      "Grid chỉ cho phép chạy các phần mềm đồ họa còn Cloud chỉ dùng để sao lưu cơ sở dữ liệu lớn.",
      "Grid là hệ thống tập trung cao độ còn Cloud là mạng lưới phân tán không có máy chủ quản lý.",
      "Hai mô hình này hoàn toàn không có bất kỳ điểm tương đồng nào về việc tận dụng tài nguyên."
    ],
    "answer": 0,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Grid Computing liên kết sức mạnh tính toán phân tán của nhiều máy tính để giải quyết một tác vụ tính toán khổng lồ (Job-oriented). Cloud Computing cung cấp hạ tầng tài nguyên linh hoạt theo yêu cầu cho nhiều người dùng đa dạng (Service-oriented).",
    "trickDetails": {
      "whyTrapped": "Dễ nhầm lẫn vì cả hai đều gộp nhiều máy tính lại để xử lý tài nguyên.",
      "trickWord": "Bẫy mục đích kiến trúc: Grid Computing = Hướng tác vụ tính toán lớn; Cloud = Hướng dịch vụ đa năng.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục I.2 (Lịch sử Grid vs Cloud)",
      "tip": "Grid gom máy tính giải một siêu bài toán; Cloud chia máy tính thành muôn ngàn dịch vụ cho muôn người."
    }
  },
  {
    "id": "cloud-c1-d2-046",
    "chapterId": "cloud-ch1",
    "question": "Sự khác biệt căn bản giữa kiến trúc 'Multi-tenant' và kiến trúc 'Multi-instance' trong phần mềm là gì?",
    "options": [
      "Multi-tenant đòi hỏi mỗi khách hàng phải mua riêng một bản quyền phần mềm máy chủ độc lập.",
      "Multi-tenant chia sẻ chung phiên bản ứng dụng và database; Multi-instance tách riêng mỗi khách.",
      "Multi-instance luôn tiết kiệm chi phí bảo trì và nâng cấp hơn nhiều so với mô hình Multi-tenant.",
      "Hai kiến trúc này hoàn toàn đồng nhất về cách thức cô lập bộ nhớ và quản trị cơ sở dữ liệu."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Multi-tenant: Tất cả khách hàng dùng chung một phiên bản ứng dụng và một hệ cơ sở dữ liệu (tối ưu chi phí, nâng cấp đồng loạt). Multi-instance: Mỗi khách hàng được cấp một phiên bản ứng dụng và database riêng biệt (cô lập cao hơn nhưng tốn chi phí quản lý).",
    "trickDetails": {
      "whyTrapped": "Nghĩ rằng mọi hệ thống SaaS đều triển khai mã nguồn riêng cho từng khách hàng.",
      "trickWord": "Bẫy kiến trúc SaaS: Multi-tenant (Một bản chạy cho tất cả) vs Multi-instance (Mỗi người một bản).",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Kiến trúc Đa người thuê)",
      "tip": "Multi-tenant = 1 App + 1 DB phục vụ N khách; Multi-instance = N App riêng cho N khách."
    }
  },
  {
    "id": "cloud-c1-d2-047",
    "chapterId": "cloud-ch1",
    "question": "Điểm khác biệt cốt lõi giữa 'Vertical Scaling' (Mở rộng theo chiều dọc) và 'Horizontal Scaling' (Mở rộng theo chiều ngang) là gì?",
    "options": [
      "Scale Up không bao giờ gặp phải giới hạn vật lý tối đa của bo mạch chủ máy tính trung tâm.",
      "Scale Up bổ sung thêm máy chủ vào cụm; Scale Out thay đổi ổ cứng dung lượng lớn hơn cho máy.",
      "Scale Up nâng cấp cấu hình phần cứng một máy đơn lẻ; Scale Out bổ sung thêm nhiều máy chủ mới.",
      "Scale Out đòi hỏi bắt buộc phải tắt máy chủ chính để tháo lắp linh kiện phần cứng máy tính."
    ],
    "answer": 2,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Vertical Scaling (Scale Up): Tăng CPU/RAM trên một máy tính duy nhất (dễ bị giới hạn phần cứng và cần downtime). Horizontal Scaling (Scale Out): Thêm nhiều máy tính vào cụm chạy song song (mở rộng gần như vô hạn, không downtime).",
    "trickDetails": {
      "whyTrapped": "Bị đảo lộn chiều mở rộng giữa dọc (Up/Down) và ngang (Out/In).",
      "trickWord": "Bẫy hướng mở rộng: Vertical = Nâng cấp máy cũ; Horizontal = Thêm máy mới.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (Chiến lược mở rộng hệ thống)",
      "tip": "Scale Up = Nâng cấp xe máy thành ô tô; Scale Out = Mua thêm nhiều chiếc xe máy cùng chạy."
    }
  },
  {
    "id": "cloud-c1-d2-048",
    "chapterId": "cloud-ch1",
    "question": "Sự khác biệt giữa 'High Availability' (Tính sẵn sàng cao) và 'Fault Tolerance' (Khả năng chịu lỗi) là gì?",
    "options": [
      "Hai thuật ngữ này hoàn toàn đồng nghĩa và đều chỉ cam kết thời gian hoạt động đạt chuẩn 90%.",
      "High Availability loại bỏ hoàn toàn 100% mọi khả năng phần cứng máy chủ bị hỏng hóc vật lý.",
      "Fault Tolerance có chi phí triển khai và phần cứng dự phòng rẻ hơn nhiều so với hệ thống HA.",
      "Fault Tolerance đảm bảo hệ thống không gián đoạn dịch vụ; HA chấp nhận thời gian chuyển đổi nhỏ."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "Fault Tolerance (Chịu lỗi tuyệt đối) duy trì hệ thống chạy song song đồng thời, khi lỗi phần cứng thì dịch vụ không gián đoạn một mili-giây nào (cực đắt). High Availability (HA) chấp nhận mất vài giây đến vài phút để tự động chuyển mạch (Failover) sang máy dự phòng.",
    "trickDetails": {
      "whyTrapped": "Nhiều người nghĩ HA là không bao giờ bị ngừng dù chỉ một giây.",
      "trickWord": "Bẫy mức độ chấp nhận gián đoạn: HA = Gián đoạn tối thiểu; Fault Tolerance = Không gián đoạn (Zero downtime).",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục II.2 (High Availability vs Fault Tolerance)",
      "tip": "HA dùng cơ chế Failover chuyển mạch; Fault Tolerance chạy phần cứng dự phòng 1:1 đồng bộ từng chu kỳ clock."
    }
  },
  {
    "id": "cloud-c1-d2-049",
    "chapterId": "cloud-ch1",
    "question": "Phân biệt giữa hai chỉ số cốt lõi trong Phục hồi Thảm họa: 'RPO' (Recovery Point Objective) và 'RTO' (Recovery Time Objective)?",
    "options": [
      "RPO đo lường thời gian cần thiết để khởi động lại máy chủ; RTO đo lường dung lượng bộ nhớ RAM.",
      "RPO đo lường lượng dữ liệu có thể chấp nhận mất; RTO đo lường thời gian phục hồi hệ thống.",
      "RPO và RTO luôn có giá trị bằng không trong mọi hệ thống đám mây tiêu chuẩn thông thường.",
      "Hai chỉ số này chỉ áp dụng cho hệ thống máy chủ mạng cục bộ không dùng trên nền tảng đám mây."
    ],
    "answer": 1,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "RPO (Recovery Point Objective): Điểm thời gian phục hồi, đo lường lượng dữ liệu tối đa chấp nhận mất (tính bằng phút/giờ dữ liệu). RTO (Recovery Time Objective): Mục tiêu thời gian phục hồi, đo lường hệ thống mất bao lâu để mở lại phục vụ sau sự cố.",
    "trickDetails": {
      "whyTrapped": "Dễ bị đảo chéo định nghĩa giữa chữ Point (Thời điểm dữ liệu) và chữ Time (Thời gian chết hệ thống).",
      "trickWord": "Bẫy đảo nghĩa hai chỉ số kinh điển RPO (Dữ liệu mất) và RTO (Thời gian chờ).",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục IV.1 (Disaster Recovery RPO & RTO)",
      "tip": "RPO = Point (Mất bao nhiêu dữ liệu tính từ lần sao lưu cuối); RTO = Time (Mất bao lâu để hệ thống bật lại)."
    }
  },
  {
    "id": "cloud-c1-d2-050",
    "chapterId": "cloud-ch1",
    "question": "Điểm khác biệt cơ bản giữa dịch vụ đám mây công cộng thông thường và 'Virtual Private Cloud' (VPC) là gì?",
    "options": [
      "VPC không cho phép các máy chủ bên trong kết nối ra mạng Internet công cộng trong mọi ca.",
      "VPC yêu cầu doanh nghiệp phải mua quyền sở hữu toàn bộ tòa nhà trung tâm dữ liệu của hãng.",
      "VPC là dịch vụ miễn phí hoàn toàn không hỗ trợ thiết lập quy tắc tường lửa định tuyến mạng.",
      "VPC cung cấp một phân vùng mạng ảo cô lập độc lập của khách hàng bên trong Public Cloud."
    ],
    "answer": 3,
    "difficulty": "hard",
    "trickSet": 2,
    "explanation": "VPC (Virtual Private Cloud như AWS VPC, Google Cloud VPC) cho phép doanh nghiệp thiết lập một mạng ảo hoàn toàn cô lập logic bên trong Public Cloud, tự cấu hình dải IP (CIDR), Subnet, Route Table và Security Group.",
    "trickDetails": {
      "whyTrapped": "Thí sinh dễ nhầm VPC là một Private Cloud on-premise vật lý đặt tại văn phòng.",
      "trickWord": "Bẫy bản chất VPC: Phân vùng mạng ảo cô lập logic trong lòng đám mây công cộng.",
      "citation": "Giáo trình Điện toán đám mây — Chương 1, Mục III.1 (Virtual Private Cloud - VPC)",
      "tip": "VPC = Biến một góc của Public Cloud thành 'mạng riêng ảo' độc quyền dưới sự kiểm soát của doanh nghiệp."
    }
  }
];
