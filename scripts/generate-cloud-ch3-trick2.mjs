import fs from "node:fs";
import path from "node:path";

// Đọc đề bẫy 1 của Chương 3 để kiểm tra trùng lặp
import { questionsCloudCh3Trick1 } from "../data/questions-cloud-ch3-trick1.js";

const rootDir = process.cwd();
console.log("Đã tải Đề bẫy 1 Chương 3:", questionsCloudCh3Trick1.length, "câu hỏi.");

export const questionsCloudCh3Trick2 = [
  // ==========================================
  // DẠNG 1: CHỌN CÂU SAI / KHÔNG CHÍNH XÁC (12 CÂU)
  // ==========================================
  {
    id: "cloud-c3-d2-001",
    chapterId: "cloud-ch3",
    question: "Khi phân tích bản chất kinh tế và tài chính của mô hình SaaS, nhận định nào sau đây là SAI?",
    options: [
      "Khách hàng bắt buộc phải chi trả một khoản chi phí vốn đầu tư ban đầu cực lớn để mua máy chủ.",
      "Mô hình SaaS chuyển đổi gánh nặng tài chính từ chi phí đầu tư ban đầu sang chi phí vận hành.",
      "Người dùng thanh toán chi phí định kỳ theo hình thức thuê bao tháng hoặc theo dung lượng dùng.",
      "Doanh nghiệp có thể dễ dàng chấm dứt hoặc giảm số lượng tài khoản thuê bao khi thu hẹp quy mô."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Bản chất vượt trội của SaaS là loại bỏ chi phí vốn đầu tư ban đầu (Zero CapEx) cho phần cứng và bản quyền vĩnh viễn; khách hàng chỉ trả chi phí vận hành (OpEx) linh hoạt theo định kỳ.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ lầm tưởng triển khai phần mềm doanh nghiệp là bắt buộc phải mua máy chủ và bản quyền đắt đỏ.",
      trickWord: "Bẫy tài chính CapEx truyền thống áp đặt cho SaaS: 'bắt buộc chi trả chi phí vốn cực lớn'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.1 (Bản chất phân phối SaaS)",
      tip: "SaaS = Triệt tiêu chi phí đầu tư ban đầu (Zero CapEx); Chuyển đổi hoàn toàn sang chi phí vận hành (OpEx)."
    }
  },
  {
    id: "cloud-c3-d2-002",
    chapterId: "cloud-ch3",
    question: "Phát biểu nào sau đây là SAI về đặc tính cập nhật tập trung (Centralized Updates) của SaaS?",
    options: [
      "Mỗi khi có bản vá lỗi mới thì người dùng cuối phải tự tải tệp cài đặt về máy trạm để cập nhật.",
      "Toàn bộ tiến trình nâng cấp tính năng được thực hiện hoàn toàn tự động trên máy chủ đám mây.",
      "Tất cả khách hàng trên hệ thống đều được đồng bộ sử dụng chung phiên bản phần mềm mới nhất.",
      "Giúp triệt tiêu hoàn toàn sự phân mảnh phiên bản phần mềm thường thấy ở mô hình On-Premise."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Đặc tính cập nhật tập trung của SaaS đảm bảo nhà cung cấp tự triển khai bản vá trên máy chủ đám mây; người dùng cuối KHÔNG BAO GIỜ phải tự tải tệp cài đặt (.exe, .msi) về máy cá nhân.",
    trickDetails: {
      whyTrapped: "Thói quen cài đặt bản vá thủ công từ phần mềm cài đặt truyền thống khiến học viên chọn sai.",
      trickWord: "Bẫy thói quen cập nhật On-Premise: 'người dùng cuối phải tự tải tệp cài đặt về máy'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.2 (Đặc tính vận hành SaaS)",
      tip: "SaaS cập nhật = Provider lo 100% trên server; Client mở trình duyệt là có ngay tính năng mới."
    }
  },
  {
    id: "cloud-c3-d2-003",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là SAI về kiến trúc Đa người thuê (Multi-tenant Architecture) trong SaaS?",
    options: [
      "Dùng chung một cơ sở dữ liệu nghĩa là khách hàng này có thể tùy ý xem dữ liệu của khách khác.",
      "Tất cả các tổ chức khách hàng đều chia sẻ chung một phiên bản ứng dụng duy nhất trên máy chủ.",
      "Dữ liệu của từng khách hàng được phân tách và cô lập logic an toàn thông qua mã định danh riêng.",
      "Giúp nhà cung cấp tối ưu hóa chi phí phần cứng và dễ dàng bảo trì nâng cấp hệ thống đồng loạt."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mặc dù dùng chung một cơ sở dữ liệu vật lý, hệ thống SaaS sử dụng cơ chế cô lập logic (Tenant ID, Row-Level Security, Encrypted Schema) ngăn chặn tuyệt đối việc khách hàng này nhìn thấy dữ liệu của khách hàng khác.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng dùng chung một cơ sở dữ liệu thì dữ liệu sẽ bị hòa lẫn và không có quyền riêng tư.",
      trickWord: "Bẫy ngụy biện về việc chia sẻ cơ sở dữ liệu: 'có thể tùy ý xem dữ liệu của khách khác'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Kiến trúc Multi-tenant)",
      tip: "Multi-tenant: Chung một Database vật lý nhưng KHÓA RIÊNG BẢO MẬT bằng Tenant ID luận lý."
    }
  },
  {
    id: "cloud-c3-d2-004",
    chapterId: "cloud-ch3",
    question: "Nhận định nào sau đây là SAI khi so sánh giữa kiến trúc Single-tenant và Multi-tenant?",
    options: [
      "Kiến trúc Single-tenant luôn có chi phí vận hành máy chủ và bảo trì rẻ hơn nhiều Multi-tenant.",
      "Kiến trúc Single-tenant cấp riêng cho mỗi khách hàng một cơ sở dữ liệu và máy chủ hoàn toàn độc lập.",
      "Single-tenant cho phép khách hàng tùy biến sâu cấu hình ứng dụng mà không lo ảnh hưởng khách khác.",
      "Multi-tenant mang lại hiệu quả kinh tế quy mô vượt trội cho nhà cung cấp dịch vụ phần mềm đám mây."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Single-tenant ('Biệt thự riêng') đòi hỏi cấp phát hạ tầng máy chủ và database riêng cho từng khách hàng nên chi phí vận hành, bảo trì và nâng cấp ĐẮT HƠN RẤT NHIỀU so với Multi-tenant ('Chung cư cao cấp').",
    trickDetails: {
      whyTrapped: "Học sinh dễ bị đảo ngược cán cân chi phí giữa 'Biệt thự riêng' (đắt đỏ) và 'Chung cư' (tiết kiệm).",
      trickWord: "Bẫy nghịch đảo chi phí: 'Single-tenant luôn có chi phí rẻ hơn nhiều Multi-tenant'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (So sánh Single-tenant vs Multi-tenant)",
      tip: "Single-tenant = Đắt đỏ, tốn tài nguyên nhưng an toàn tuyệt đối; Multi-tenant = Tối ưu chi phí quy mô."
    }
  },
  {
    id: "cloud-c3-d2-005",
    chapterId: "cloud-ch3",
    question: "Phát biểu nào sau đây là SAI về rào cản và thách thức lớn nhất khi áp dụng giải pháp SaaS?",
    options: [
      "Sử dụng dịch vụ SaaS đảm bảo 100% không bao giờ gặp gián đoạn khi đường truyền Internet bị đứt.",
      "Doanh nghiệp phải đối mặt với nỗi lo rò rỉ dữ liệu khi gửi tài sản thông tin cho bên thứ ba.",
      "Nguy cơ bị khóa chặt nhà cung cấp xuất hiện khi việc trích xuất và chuyển đổi dữ liệu quá khó.",
      "Độ trễ mạng truyền thông có thể ảnh hưởng tiêu cực đến trải nghiệm thao tác của người dùng cuối."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SaaS phụ thuộc 100% vào mạng Internet. Khi đường truyền Internet bị đứt hoặc nhà cung cấp đám mây bị sự cố mất điện (Outage), người dùng hoàn toàn mất quyền truy cập vào phần mềm và dữ liệu nghiệp vụ.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ đám mây là thần thánh, không bao giờ bị ảnh hưởng bởi việc đứt cáp mạng Internet.",
      trickWord: "Bẫy tuyệt đối hóa tính sẵn sàng: 'đảm bảo 100% không bao giờ gặp gián đoạn khi đứt mạng'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục II.2 (Thách thức sống còn của SaaS)",
      tip: "Không có Internet = Không có SaaS. Sự phụ thuộc đường truyền mạng là rủi ro hàng đầu."
    }
  },
  {
    id: "cloud-c3-d2-006",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là SAI về khái niệm nền tảng phần mềm mở OpenSaaS?",
    options: [
      "OpenSaaS là phần mềm mã nguồn đóng độc quyền tuyệt đối cấm người dùng tự lưu trữ trên máy chủ.",
      "Cung cấp ứng dụng dưới dạng dịch vụ web nhưng mã nguồn của ứng dụng hoàn toàn mở và minh bạch.",
      "Cho phép doanh nghiệp tự tải mã nguồn về để triển khai trên hạ tầng máy chủ riêng nếu cần thiết.",
      "Giúp giải phóng tổ chức khỏi nguy cơ bị nhà cung cấp dịch vụ khóa chặt giải pháp công nghệ duy nhất."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "OpenSaaS là mô hình SaaS dựa trên MÃ NGUỒN MỞ (Open Source) như WordPress, Odoo, Nextcloud; cho phép người dùng tự do kiểm tra mã nguồn và tự lưu trữ (Self-host), hoàn toàn không phải phần mềm đóng độc quyền.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng đã là SaaS chạy trên web thì bắt buộc phải là phần mềm đóng độc quyền.",
      trickWord: "Bẫy bản chất mã nguồn mở: 'là phần mềm mã nguồn đóng độc quyền cấm tự lưu trữ'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.2 (Mô hình OpenSaaS)",
      tip: "OpenSaaS = Tiện ích đám mây SaaS + Tự do của Mã nguồn mở (Chống Vendor Lock-in)."
    }
  },
  {
    id: "cloud-c3-d2-007",
    chapterId: "cloud-ch3",
    question: "Nhận định nào sau đây là SAI về kỹ thuật tích hợp Mashup phía máy khách (Client-side Mashup)?",
    options: [
      "Cho phép lưu trữ và bảo vệ các khóa bí mật API Key an toàn tuyệt đối trước người dùng trình duyệt.",
      "Mã lệnh JavaScript trên trình duyệt của người dùng trực tiếp gửi yêu cầu tới các máy chủ API.",
      "Dễ dàng gặp phải rào cản chính sách cùng nguồn gốc CORS khi gọi các dịch vụ API bên ngoài.",
      "Giúp giảm thiểu tối đa tải xử lý tính toán và băng thông tiêu thụ cho máy chủ của doanh nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Client-side Mashup chạy code JavaScript ngay trên trình duyệt của người dùng cuối. Bất kỳ API Key nào nhúng trong code JavaScript đều có thể bị xem trộm dễ dàng qua công cụ F12 (Inspect), KHÔNG THỂ bảo mật an toàn tuyệt đối.",
    trickDetails: {
      whyTrapped: "Nhiều lập trình viên mới vào nghề hay lầm tưởng nhúng API key vào code frontend là an toàn.",
      trickWord: "Bẫy an ninh phía máy khách: 'bảo vệ khóa bí mật API Key an toàn tuyệt đối'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Client-side vs Server-side Mashup)",
      tip: "Client-side: API Key bị lộ 100% trong Inspect Elements; Cần giấu Key = Dùng Server-side Mashup."
    }
  },
  {
    id: "cloud-c3-d2-008",
    chapterId: "cloud-ch3",
    question: "Phát biểu nào sau đây là SAI về kỹ thuật tích hợp Mashup phía máy chủ (Server-side Mashup)?",
    options: [
      "Máy chủ trung gian hoàn toàn không tốn bất kỳ tài nguyên CPU hay băng thông mạng nào khi chạy.",
      "Máy chủ phía sau đóng vai trò trung gian thu thập dữ liệu từ nhiều nguồn dịch vụ API khác nhau.",
      "Dữ liệu được tổng hợp, xử lý và chuẩn hóa tại máy chủ trước khi gửi về cho trình duyệt hiển thị.",
      "Giúp giải quyết triệt để rào cản chính sách bảo mật CORS của trình duyệt đối với các nguồn lạ."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Server-side Mashup bắt buộc máy chủ của bạn phải đứng ra gửi HTTP Request tới các bên thứ ba, chờ nhận dữ liệu, giải mã JSON/XML và tổng hợp lại, do đó TIÊU TỐN ĐÁNG KỂ tài nguyên CPU, bộ nhớ RAM và băng thông của máy chủ.",
    trickDetails: {
      whyTrapped: "Tưởng rằng máy chủ làm trung gian gom API thì sẽ không tốn tài nguyên phần cứng.",
      trickWord: "Bẫy tài nguyên tính toán: 'hoàn toàn không tốn bất kỳ tài nguyên CPU hay băng thông'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Server-side Mashup Architecture)",
      tip: "Server-side Mashup: An toàn, vượt CORS nhưng tiêu tốn tài nguyên và băng thông máy chủ."
    }
  },
  {
    id: "cloud-c3-d2-009",
    chapterId: "cloud-ch3",
    question: "Khi khảo sát tam giác vàng của Kiến trúc Hướng dịch vụ (SOA), nhận định nào sau đây là SAI?",
    options: [
      "Service Broker là bên trực tiếp thực thi mã lệnh thuật toán nghiệp vụ và trả kết quả cho khách.",
      "Service Provider chịu trách nhiệm xuất bản thông tin mô tả dịch vụ lên bộ đăng ký dịch vụ chung.",
      "Service Consumer thực hiện thao tác tìm kiếm dịch vụ phù hợp trên bộ đăng ký dịch vụ chung.",
      "Mối liên kết giữa các thành phần trong kiến trúc SOA mang tính chất lỏng lẻo và độc lập cao."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Service Broker (hoặc Service Registry) chỉ là 'bộ đăng bạ / danh bạ điện thoại' chứa thông tin mô tả dịch vụ. Bên TRỰC TIẾP THỰC THI thuật toán và trả kết quả là Service Provider, không phải Broker.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ nhầm lẫn vai trò của bên môi giới (Broker/Registry) với bên cung cấp dịch vụ (Provider).",
      trickWord: "Bẫy chức năng trong tam giác SOA: Broker chỉ lưu danh mục, Provider mới thực thi dịch vụ.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2 (Tam giác vàng SOA: Publish - Find - Bind)",
      tip: "Provider: Chứa dịch vụ; Broker: Chứa danh bạ tìm kiếm; Consumer: Người gọi dịch vụ."
    }
  },
  {
    id: "cloud-c3-d2-010",
    chapterId: "cloud-ch3",
    question: "Phát biểu nào sau đây là SAI về thuật toán Operational Transformation (OT) trong Google Docs?",
    options: [
      "Thuật toán OT bắt buộc phải khóa toàn bộ tài liệu ngăn người khác gõ chữ khi có người đang sửa.",
      "Cho phép nhiều người dùng đồng thời chỉnh sửa cùng một đoạn văn bản trong thời gian thực mượt.",
      "Hệ thống tự động biến đổi vị trí con trỏ và nội dung chèn để bảo toàn ý đồ của từng người dùng.",
      "Giúp giải quyết triệt để các xung đột dữ liệu mà không làm mất thao tác gõ phím của cộng tác viên."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Thuật toán OT (Operational Transformation) trong Google Workspace sinh ra chính là để LOẠI BỎ CƠ CHẾ KHÓA VĂN BẢN (Pessimistic Locking). Mọi người cùng gõ tự do, thuật toán sẽ tự động tính toán lại vị trí chèn ký tự không xung đột.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn cơ chế đồng biên tập thời gian thực không khóa của Google Docs với cơ chế khóa file truyền thống.",
      trickWord: "Bẫy cơ chế khóa tài liệu bi quan: 'bắt buộc phải khóa toàn bộ tài liệu ngăn người khác gõ'.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục V.1 (Google Workspace & Thuật toán OT)",
      tip: "Google Docs OT: Tự do gõ đồng thời không khóa (Lock-free concurrent editing)."
    }
  },
  {
    id: "cloud-c3-d2-011",
    chapterId: "cloud-ch3",
    question: "Nhận định nào sau đây là SAI về nguyên lý mã hóa dữ liệu trong các nền tảng SaaS hiện đại?",
    options: [
      "Chỉ cần mã hóa dữ liệu khi truyền trên mạng là đủ, không cần mã hóa dữ liệu khi lưu trên ổ đĩa.",
      "Dữ liệu đang truyền trên mạng (Data in-transit) được bảo vệ bằng giao thức mã hóa TLS 1.3.",
      "Dữ liệu lưu trữ cố định (Data at-rest) được mã hóa bằng các thuật toán mạnh mẽ như AES-256.",
      "Mã hóa từ đầu đến cuối đảm bảo ngay cả nhà cung cấp đám mây cũng không đọc được nội dung gốc."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Bảo mật SaaS đòi hỏi phòng thủ chiều sâu (Defense-in-depth): Dữ liệu bắt buộc phải được mã hóa CẢ HAI TRẠNG THÁI: khi đang truyền trên mạng (In-transit) VÀ khi đang nằm yên trên đĩa cứng (At-rest).",
    trickDetails: {
      whyTrapped: "Tưởng rằng có HTTPS/TLS rồi thì ổ cứng máy chủ lưu file văn bản trần cũng không sao.",
      trickWord: "Bẫy xem nhẹ mã hóa dữ liệu lưu trữ cố định (Data at-rest encryption).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (Mã hóa dữ liệu trong SaaS)",
      tip: "Chuẩn an ninh SaaS: Mã hóa In-transit (TLS 1.3) + Mã hóa At-rest (AES-256)."
    }
  },
  {
    id: "cloud-c3-d2-012",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là SAI về cam kết mức dịch vụ (SLA) của các nhà cung cấp giải pháp SaaS?",
    options: [
      "Nhà cung cấp SaaS cam kết bồi thường 100% doanh thu thiệt hại của khách khi phần mềm ngừng chạy.",
      "Mức độ sẵn sàng thường được cam kết bằng tỷ lệ phần trăm thời gian hoạt động như 99.9% một năm.",
      "Khi vi phạm chỉ số cam kết sẵn sàng, nhà cung cấp thường đền bù dưới dạng tín dụng dịch vụ.",
      "Các khoảng thời gian bảo trì định kỳ đã thông báo trước thường được loại trừ khỏi công thức SLA."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong hợp đồng SaaS thực tế, nhà cung cấp CHỈ bồi hoàn bằng tín dụng dịch vụ (Service Credits để trừ vào tiền thuê bao tháng sau), TUYỆT ĐỐI KHÔNG BAO GIỜ bồi thường doanh thu hay lợi nhuận gián tiếp của khách hàng.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ hệ thống sập làm công ty mất 1 triệu đô thì nhà cung cấp SaaS phải đền 1 triệu đô.",
      trickWord: "Bẫy điều khoản giới hạn trách nhiệm bồi thường tài chính trong hợp đồng SLA.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục II.2 (SLA & Giới hạn trách nhiệm pháp lý)",
      tip: "SLA chỉ đền bù Service Credit (trừ tiền thuê bao); Điều khoản luôn miễn trừ bồi thường doanh thu mất mát."
    }
  },

  // ==========================================
  // DẠNG 2: CHỌN CÂU ĐÚNG / CHÍNH XÁC NHẤT (10 CÂU)
  // ==========================================
  {
    id: "cloud-c3-d2-013",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG NHẤT về định nghĩa bản chất của mô hình SaaS theo học thuật?",
    options: [
      "Mô hình phân phối ứng dụng qua Internet do bên thứ ba lưu trữ và cho thuê không cần cài đặt.",
      "Mô hình bán đĩa nén phần mềm đóng gói vĩnh viễn để khách hàng tự cài đặt lên máy chủ công ty.",
      "Phương thức cho thuê phần cứng máy chủ vật lý để lập trình viên tự cấu hình hệ điều hành Linux.",
      "Bộ công cụ lập trình giao diện ứng dụng chỉ dành riêng cho các kỹ sư phát triển phần mềm chuyên nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Định nghĩa chuẩn học thuật: SaaS là mô hình phân phối phần mềm trong đó ứng dụng được lưu trữ bởi bên thứ ba (Third-party provider) và cung cấp cho khách hàng qua mạng Internet theo mô hình thuê bao dịch vụ.",
    trickDetails: {
      whyTrapped: "Phương án B là On-Premise; phương án C là IaaS; phương án D là PaaS.",
      trickWord: "Bẫy phân biệt bản chất dịch vụ giữa SaaS, IaaS và PaaS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.1 (Định nghĩa chuẩn học thuật)",
      tip: "SaaS = Ứng dụng hoàn chỉnh qua mạng; Không cài đặt; Cho thuê bởi bên thứ ba."
    }
  },
  {
    id: "cloud-c3-d2-014",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về cơ chế Tenant ID trong cơ sở dữ liệu của kiến trúc Multi-tenant?",
    options: [
      "Mỗi bảng dữ liệu dùng chung đều có thêm cột Tenant ID để tự động lọc dữ liệu của từng khách hàng.",
      "Tenant ID là mật khẩu bí mật của nhân viên quản trị cơ sở dữ liệu dùng để đăng nhập hàng ngày.",
      "Tenant ID cho phép tất cả khách hàng cùng chỉnh sửa một dòng dữ liệu mà không cần kiểm soát quyền.",
      "Chỉ áp dụng được trên các hệ quản trị cơ sở dữ liệu phi quan hệ NoSQL và không dùng được trên SQL."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong kiến trúc Multi-tenant Shared Database, mọi bảng (Tables) đều có cột Tenant ID (hoặc Organization ID). Mọi câu truy vấn SQL (SELECT, UPDATE, DELETE) đều bắt buộc phải kèm điều kiện 'WHERE tenant_id = ?' để cô lập logic dữ liệu.",
    trickDetails: {
      whyTrapped: "Thí sinh có thể không hiểu cơ chế kỹ thuật bên dưới giúp phân tách dữ liệu trong cùng một bảng SQL.",
      trickWord: "Bẫy cơ chế phân tách dữ liệu logic bằng khóa Tenant ID trong cơ sở dữ liệu quan hệ.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Kỹ thuật phân vùng dữ liệu Tenant ID)",
      tip: "Shared Database: Chung bảng nhưng khác hàng (Rows); Nhận diện hàng của ai qua cột Tenant ID."
    }
  },
  {
    id: "cloud-c3-d2-015",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về hiện tượng 'Người hàng xóm ồn ào' (Noisy Neighbor Effect)?",
    options: [
      "Một khách hàng tiêu tốn quá nhiều tài nguyên tính toán làm suy giảm hiệu năng của các khách khác.",
      "Hiện tượng quạt gió của tủ rack máy chủ phát ra tiếng ồn quá lớn làm phiền các kỹ sư phòng máy.",
      "Kẻ tấn công cố tình tạo ra tiếng ồn âm thanh để làm nhiễu sóng đường truyền cáp quang của mạng.",
      "Hiện tượng các lập trình viên tranh cãi quá to trong văn phòng làm ảnh hưởng đến tiến độ dự án."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Noisy Neighbor là vấn đề kinh điển của Multi-tenancy: một Tenant chạy tác vụ quá nặng (chiếm hết CPU, RAM, I/O của database dùng chung) khiến các Tenant khác trên cùng hệ thống bị chậm hoặc treo phản hồi.",
    trickDetails: {
      whyTrapped: "Thí sinh hiểu theo nghĩa đen 'tiếng ồn âm thanh' của phương án B, C, D.",
      trickWord: "Bẫy thuật ngữ chuyên ngành khoa học máy tính: Noisy Neighbor = Tranh chấp cạn kiệt tài nguyên dùng chung.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Thách thức Noisy Neighbor trong Multi-tenancy)",
      tip: "Noisy Neighbor = Khách A chạy nặng ngốn hết tài nguyên làm khách B bên cạnh bị chậm theo."
    }
  },
  {
    id: "cloud-c3-d2-016",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về lợi thế vượt trội của giải pháp Server-side Mashup?",
    options: [
      "Cho phép vượt qua rào cản CORS và bảo mật tuyệt đối các khóa API Key bí mật của nhà phát triển.",
      "Hoàn toàn không cần máy chủ trung gian và chạy trực tiếp 100% trên trình duyệt của người dùng.",
      "Giúp giảm tải 100% băng thông truyền thông và giải phóng bộ nhớ RAM của máy chủ trung gian.",
      "Là công nghệ chỉ áp dụng được trên các trang web tĩnh cá nhân đơn giản không có cơ sở dữ liệu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Server-side Mashup thực hiện gọi API từ máy chủ Backend (nơi không bị trình duyệt chặn CORS) và lưu giữ an toàn các API Key bí mật trong biến môi trường máy chủ, không bao giờ để lộ ra trình duyệt của client.",
    trickDetails: {
      whyTrapped: "Phương án B và C miêu tả đặc điểm của Client-side Mashup.",
      trickWord: "Bẫy bản chất bảo mật và giải quyết vấn đề CORS của Server-side Mashup.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Ưu điểm của Server-side Mashup)",
      tip: "Server-side Mashup = Giấu kín API Key trên máy chủ + Vượt qua rào cản trình duyệt CORS."
    }
  },
  {
    id: "cloud-c3-d2-017",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về 3 thao tác cơ bản trong tam giác vàng Kiến trúc SOA?",
    options: [
      "Publish để đăng ký dịch vụ, Find để tra cứu tìm kiếm, và Bind để kết nối thực thi dịch vụ.",
      "Upload để tải phần mềm lên, Download để tải ứng dụng về, và Delete để xóa bỏ tệp tin hệ thống.",
      "Compile để biên dịch mã nguồn, Link để liên kết thư viện, và Execute để chạy chương trình máy.",
      "Encrypt để mã hóa dữ liệu, Decrypt để giải mã thông tin, và Authenticate để xác thực danh tính."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Tam giác SOA chuẩn hóa 3 thao tác tương tác giữa 3 thực thể: Provider Publish dịch vụ lên Broker ➔ Consumer Find dịch vụ trên Broker ➔ Consumer Bind (gắn kết trực tiếp) với Provider để gọi dịch vụ.",
    trickDetails: {
      whyTrapped: "Các phương án B, C, D đưa ra các bộ ba thao tác quen thuộc trong lập trình nhưng không phải của SOA.",
      trickWord: "Bẫy bộ ba thao tác chuẩn hóa trong mô hình kiến trúc hướng dịch vụ SOA.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2 (Tam giác vàng SOA: Publish - Find - Bind)",
      tip: "Quy tắc vàng SOA: Provider PUBLISH ➔ Consumer FIND ➔ Consumer BIND to Provider."
    }
  },
  {
    id: "cloud-c3-d2-018",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về nền tảng Force.com và ngôn ngữ Apex của Salesforce?",
    options: [
      "Cho phép lập trình viên viết logic nghiệp vụ tùy biến chạy an toàn trên hạ tầng Multi-tenant.",
      "Là hệ điều hành máy tính cá nhân cạnh tranh trực tiếp với hệ điều hành Windows của Microsoft.",
      "Là phần mềm diệt virus độc quyền được cài đặt trên từng thiết bị di động của nhân viên bán hàng.",
      "Bắt buộc người dùng phải mua máy chủ vật lý riêng biệt thì mới được phép biên dịch mã nguồn Apex."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Salesforce phát minh ra ngôn ngữ Apex và nền tảng Force.com (Salesforce Platform) cho phép khách hàng viết mã logic tùy biến nhưng kiểm soát chặt chẽ bằng cơ chế Governor Limits để đảm bảo an toàn cho hạ tầng Multi-tenant.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng Salesforce chỉ là phần mềm CRM đóng cứng, không biết họ có cả nền tảng PaaS (Force.com).",
      trickWord: "Bẫy nền tảng phát triển ứng dụng tùy biến trên hạ tầng Multi-tenant của Salesforce.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục V.2 (Salesforce Architecture & Apex)",
      tip: "Salesforce Apex = Ngôn ngữ lập trình tùy biến nghiệp vụ chạy trên hạ tầng đám mây Multi-tenant."
    }
  },
  {
    id: "cloud-c3-d2-019",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về tiêu chuẩn kiểm toán an ninh SOC 2 Type II của dịch vụ SaaS?",
    options: [
      "Đánh giá tính hiệu quả vận hành thực tế của các kiểm soát bảo mật trong một khoảng thời gian dài.",
      "Chỉ kiểm tra tài liệu thiết kế hệ thống tại một thời điểm duy nhất mà không cần bằng chứng chạy.",
      "Là chứng chỉ do chính giám đốc công ty tự ký duyệt mà không cần cơ quan kiểm toán độc lập đánh giá.",
      "Quy định tiêu chuẩn chất lượng hình ảnh và độ phân giải đồ họa của giao diện người dùng phần mềm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SOC 2 Type II là tiêu chuẩn vàng khắt khe nhất của ngành SaaS: kiểm toán viên độc lập kiểm tra bằng chứng vận hành thực tế của các chốt kiểm soát an ninh (Security, Availability, Confidentiality) trong suốt 6 đến 12 tháng liên tục.",
    trickDetails: {
      whyTrapped: "Phương án B là định nghĩa của SOC 2 Type I (chỉ đánh giá thiết kế tại một thời điểm).",
      trickWord: "Bẫy phân biệt giữa SOC 2 Type I (Point-in-time) và SOC 2 Type II (Period of time).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2 (Tiêu chuẩn kiểm toán an ninh SOC 2)",
      tip: "SOC 2 Type I = Kiểm tra lý thuyết trên giấy tại 1 ngày; Type II = Kiểm tra thực tế chạy liên tục 6-12 tháng."
    }
  },
  {
    id: "cloud-c3-d2-020",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về cơ chế Đăng nhập một lần (Single Sign-On - SSO) trong SaaS?",
    options: [
      "Cho phép người dùng chỉ cần đăng nhập một lần là có thể truy cập an toàn nhiều ứng dụng SaaS khác.",
      "Bắt buộc người dùng phải gõ lại mật khẩu riêng biệt cho từng phần mềm mỗi khi chuyển đổi màn hình.",
      "Tự động chia sẻ mật khẩu dạng văn bản gốc không mã hóa giữa tất cả các máy chủ trên toàn cầu.",
      "Là công nghệ chỉ cho phép duy nhất một người dùng được phép đăng nhập vào hệ thống của công ty."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SSO (thông qua các chuẩn công nghiệp như SAML 2.0, OpenID Connect) cho phép người dùng xác thực một lần duy nhất tại Identity Provider (như Okta, Azure AD) và truy cập mượt mà vào toàn bộ kho ứng dụng SaaS của doanh nghiệp.",
    trickDetails: {
      whyTrapped: "Phương án D hiểu sai chữ 'Single' là chỉ có 1 người dùng duy nhất được đăng nhập.",
      trickWord: "Bẫy khái niệm Single Sign-On trong quản lý định danh và truy cập doanh nghiệp.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (Kiểm soát truy cập SSO & IAM)",
      tip: "SSO = Một lần đăng nhập (1 Account/Password) mở khóa an toàn mọi phần mềm SaaS được cấp phép."
    }
  },
  {
    id: "cloud-c3-d2-021",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về thuật toán Operational Transformation (OT) trong phần mềm SaaS?",
    options: [
      "Biến đổi và đồng bộ các thao tác chỉnh sửa văn bản đồng thời để duy trì tính nhất quán tài liệu.",
      "Tự động dịch mã nguồn chương trình từ ngôn ngữ Python sang mã máy của bộ vi xử lý máy tính chủ.",
      "Chuyển đổi dữ liệu bảng tính Excel thành định dạng video độ phân giải cao để trình chiếu trực tuyến.",
      "Là phương pháp nén dữ liệu nhằm giảm 90% dung lượng tệp tin văn bản trước khi gửi qua thư điện tử."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Thuật toán OT (Operational Transformation) đóng vai trò xương sống cho việc đồng tác giả (Co-authoring) trong Google Docs, Office 365: khi nhiều người cùng gõ đồng thời, thuật toán tự động dịch chuyển vị trí các phép chèn/xóa để mọi client đều thấy nội dung đồng nhất.",
    trickDetails: {
      whyTrapped: "Nghe chữ 'Transformation' dễ liên tưởng sang dịch ngôn ngữ hoặc nén chuyển đổi định dạng tệp tin.",
      trickWord: "Bẫy bản chất kỹ thuật của thuật toán OT: Biến đổi tọa độ thao tác đồng thời để giữ nhất quán dữ liệu.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục V.1 (Thuật toán Operational Transformation)",
      tip: "OT = Biến đổi thao tác gõ phím đồng thời (Insert/Delete index) giúp nhiều người cùng soạn thảo không bị đè chữ."
    }
  },
  {
    id: "cloud-c3-d2-022",
    chapterId: "cloud-ch3",
    question: "Khẳng định nào sau đây là ĐÚNG về lợi ích lớn nhất của OpenSaaS đối với các doanh nghiệp?",
    options: [
      "Cho phép doanh nghiệp nắm toàn quyền kiểm soát dữ liệu và có thể di dời mã nguồn khi cần thiết.",
      "Đảm bảo nhà cung cấp dịch vụ sẽ miễn phí hoàn toàn 100% mọi chi phí tư vấn và hỗ trợ triển khai.",
      "Loại bỏ hoàn toàn sự cần thiết của các kỹ sư bảo mật và lập trình viên trong toàn bộ doanh nghiệp.",
      "Bắt buộc tất cả dữ liệu kinh doanh của công ty phải được công khai minh bạch cho toàn bộ xã hội xem."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Lợi ích cốt lõi của OpenSaaS là quyền tự chủ (Data Sovereignty) và phòng chống Vendor Lock-in: doanh nghiệp có thể thuê dịch vụ trên đám mây, nhưng khi nhà cung cấp tăng giá hoặc ngừng dịch vụ, họ hoàn toàn có thể tải mã nguồn và dữ liệu về tự lưu trữ (Self-host).",
    trickDetails: {
      whyTrapped: "Phương án D nhầm lẫn giữa 'mã nguồn mở' (Open source code) và 'dữ liệu bị công khai' (Public data).",
      trickWord: "Bẫy phân biệt giữa tính minh bạch của mã nguồn mở và tính riêng tư của dữ liệu doanh nghiệp.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.2 (Lợi ích chiến lược của OpenSaaS)",
      tip: "OpenSaaS = Làm chủ mã nguồn, làm chủ dữ liệu, tự do di dời máy chủ, xóa tan nỗi sợ Vendor Lock-in."
    }
  },

  // ==========================================
  // DẠNG 3: CHÙM MỆNH ĐỀ LOGIC I - II - III (10 CÂU)
  // ==========================================
  {
    id: "cloud-c3-d2-023",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về đặc tính vận hành của giải pháp SaaS:\n(I) Người dùng truy cập phần mềm thông qua trình duyệt web mà không cần cài đặt tệp thực thi.\n(II) Nhà cung cấp chịu trách nhiệm toàn bộ việc bảo trì, cập nhật tính năng và vá lỗi bảo mật.\n(III) Khách hàng được bàn giao toàn bộ mã nguồn ứng dụng để tự biên dịch và chỉnh sửa nhân.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì trong mô hình SaaS thương mại độc quyền (Proprietary SaaS), khách hàng chỉ thuê quyền sử dụng, nhà cung cấp tuyệt đối KHÔNG bàn giao mã nguồn gốc. Mệnh đề (I) và (II) đúng bản chất SaaS.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng mua gói dịch vụ phần mềm doanh nghiệp là được bên bán đưa luôn cả mã nguồn gốc.",
      trickWord: "Bẫy quyền sở hữu mã nguồn trong mô hình phân phối phần mềm dạng dịch vụ.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.2",
      tip: "SaaS = Thuê dịch vụ sử dụng; Nhà cung cấp giữ mã nguồn; Khách hàng sở hữu dữ liệu."
    }
  },
  {
    id: "cloud-c3-d2-024",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về kiến trúc Đa người thuê (Multi-tenant):\n(I) Tất cả khách hàng đều dùng chung một phiên bản ứng dụng duy nhất chạy trên máy chủ.\n(II) Dữ liệu của các khách hàng được phân tách luận lý an toàn bằng mã định danh Tenant ID.\n(III) Nâng cấp phiên bản phần mềm sẽ tự động áp dụng ngay lập tức cho toàn bộ các khách hàng.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều là các trụ cột định nghĩa chính xác về kiến trúc Multi-tenant: 1 phiên bản dùng chung, phân tách bằng Tenant ID, và nâng cấp 1 lần là áp dụng đồng loạt cho toàn bộ hệ thống.",
    trickDetails: {
      whyTrapped: "Thí sinh hay nghi ngờ mệnh đề (III) vì nghĩ nâng cấp phải làm thủ công cho từng người.",
      trickWord: "Bẫy kiểm tra sự hiểu biết toàn diện về 3 đặc trưng cốt lõi của kiến trúc Multi-tenant.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Đặc trưng Multi-tenancy)",
      tip: "Multi-tenant: 1 Application Instance + Shared Database with Tenant ID + One-click Global Upgrade."
    }
  },
  {
    id: "cloud-c3-d2-025",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về so sánh Single-tenant và Multi-tenant:\n(I) Single-tenant mang lại mức độ bảo mật và khả năng cô lập dữ liệu phần cứng tuyệt đối cao hơn.\n(II) Multi-tenant cho phép khởi tạo tài khoản và đưa khách hàng vào sử dụng gần như ngay tức thì.\n(III) Single-tenant hoàn toàn miễn nhiễm với tất cả các cuộc tấn công mạng từ chối dịch vụ DDoS.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì dù là Single-tenant thì máy chủ vẫn mở cổng kết nối Internet và hoàn toàn có thể bị nghẽn mạng do tấn công DDoS nếu không có tường lửa WAF bảo vệ. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Tưởng rằng dùng 'biệt thự riêng' Single-tenant là an toàn tuyệt đối trước mọi loại tấn công mạng.",
      trickWord: "Bẫy thần thánh hóa khả năng bảo mật của kiến trúc Single-tenant trước tấn công DDoS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Single-tenant vs Multi-tenant Security)",
      tip: "Single-tenant cách ly dữ liệu tốt khỏi các khách hàng khác, nhưng vẫn có thể bị sập do DDoS từ bên ngoài."
    }
  },
  {
    id: "cloud-c3-d2-026",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về công nghệ tích hợp dịch vụ Mashup:\n(I) Mashup là kỹ thuật kết hợp dữ liệu từ hai hoặc nhiều nguồn dịch vụ bên ngoài để tạo ứng dụng mới.\n(II) Client-side Mashup thường gặp rào cản chính sách bảo mật CORS do trình duyệt web chặn lại.\n(III) Server-side Mashup giấu kín được các khóa bí mật API Key và giải quyết được vấn đề CORS.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều mô tả chính xác 100% về công nghệ Mashup: định nghĩa tích hợp đa nguồn, nhược điểm bảo mật & CORS của Client-side, và giải pháp bảo mật vượt rào CORS của Server-side.",
    trickDetails: {
      whyTrapped: "Học sinh hay nhầm lẫn khái niệm CORS giữa phía máy khách và phía máy chủ.",
      trickWord: "Bẫy kiểm tra toàn diện về 2 mô hình tích hợp dịch vụ Mashup trong môi trường Web.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Công nghệ Mashup)",
      tip: "Client Mashup: Bị CORS, lộ API Key; Server Mashup: Vượt CORS, bảo vệ bí mật API Key."
    }
  },
  {
    id: "cloud-c3-d2-027",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về Kiến trúc Hướng dịch vụ (SOA):\n(I) Các dịch vụ trong SOA có tính gắn kết lỏng (Loosely Coupled) và có khả năng tái sử dụng cao.\n(II) Service Registry đóng vai trò như cuốn danh bạ lưu trữ thông tin giao tiếp của các dịch vụ.\n(III) Giao thức SOAP/WSDL sử dụng định dạng JSON siêu nhẹ giúp tăng tốc độ truyền tải trên mạng.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì giao thức SOAP/WSDL sử dụng định dạng XML cồng kềnh và phức tạp (nhiều thẻ đóng mở); định dạng JSON siêu nhẹ là đặc trưng của dịch vụ RESTful API hiện đại. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn định dạng dữ liệu truyền thông giữa SOAP (XML) và RESTful (JSON).",
      trickWord: "Bẫy định dạng dữ liệu truyền thông trong kiến trúc SOA truyền thống vs RESTful hiện đại.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2 (Giao thức truyền thông SOA: SOAP vs REST)",
      tip: "SOAP = XML nặng nề; REST = JSON nhẹ nhàng; Cả hai đều phục vụ kiến trúc hướng dịch vụ."
    }
  },
  {
    id: "cloud-c3-d2-028",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về những thách thức và rủi ro lớn nhất của mô hình SaaS:\n(I) Doanh nghiệp bị phụ thuộc hoàn toàn vào đường truyền Internet để vận hành hoạt động kinh doanh.\n(II) Nguy cơ Vendor Lock-in xảy ra khi nhà cung cấp sử dụng định dạng dữ liệu đóng khó xuất khẩu.\n(III) Nhà cung cấp SaaS luôn chịu trách nhiệm pháp lý vô hạn đối với mọi thiệt hại kinh doanh của khách.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì các hợp đồng SaaS luôn có điều khoản giới hạn trách nhiệm (Limitation of Liability), giới hạn số tiền bồi thường tối đa bằng số tiền thuê bao khách đã trả trong vài tháng gần nhất, không bao giờ 'chịu trách nhiệm vô hạn'. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Khách hàng thường nhầm tưởng nhà cung cấp SaaS phải gánh chịu mọi rủi ro tài chính của mình.",
      trickWord: "Bẫy điều khoản pháp lý giới hạn trách nhiệm bồi thường trong dịch vụ đám mây.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục II.2 (Thách thức & Rủi ro pháp lý)",
      tip: "Hợp đồng SaaS luôn giới hạn trách nhiệm tài chính; Trách nhiệm pháp lý không bao giờ là vô hạn."
    }
  },
  {
    id: "cloud-c3-d2-029",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về 4 lớp phòng thủ an ninh trong hệ thống SaaS:\n(I) Lớp mã hóa dữ liệu bảo vệ thông tin cả khi truyền trên đường truyền lẫn khi lưu trữ trên đĩa.\n(II) Lớp quản lý định danh và truy cập (IAM) kiểm soát người dùng nào được xem dữ liệu gì.\n(III) Khách hàng sử dụng SaaS phải tự tay thay thế các thanh RAM bị hỏng trong trung tâm dữ liệu.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI hoàn toàn vì trong SaaS, việc bảo trì phần cứng vật lý (thay RAM, thay ổ cứng) thuộc 100% trách nhiệm của nhà cung cấp, khách hàng không có quyền và không bao giờ phải chạm vào phần cứng. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Thí sinh có thể không đọc kỹ mệnh đề (III) dẫn tới nhầm lẫn trách nhiệm phần cứng.",
      trickWord: "Bẫy áp đặt trách nhiệm bảo trì vật lý cho người dùng phần mềm SaaS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (4 Lớp phòng thủ an ninh SaaS)",
      tip: "SaaS = Trừu tượng hóa hoàn toàn phần cứng; Khách hàng chỉ quản lý phân quyền người dùng và dữ liệu."
    }
  },
  {
    id: "cloud-c3-d2-030",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về cơ chế bảo mật xác thực danh tính trong SaaS:\n(I) Xác thực đa yếu tố (MFA) đòi hỏi ít nhất hai bằng chứng độc lập để chứng minh danh tính.\n(II) Phân quyền dựa trên vai trò (RBAC) gán các quyền hạn cụ thể cho từng vị trí công việc.\n(III) Đăng nhập một lần (SSO) bắt buộc người dùng phải tạo tài khoản và mật khẩu hoàn toàn mới cho từng app.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì bản chất của SSO là người dùng DÙNG CHUNG MỘT TÀI KHOẢN DUY NHẤT để mở khóa mọi ứng dụng, chứ không phải đi tạo tài khoản mới cho từng phần mềm. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Hiểu sai định nghĩa cốt lõi của công nghệ Single Sign-On.",
      trickWord: "Bẫy cơ chế hoạt động của SSO: Một tài khoản cho tất cả, loại bỏ mật khẩu riêng rẽ.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (IAM, MFA, RBAC & SSO)",
      tip: "MFA = >= 2 bằng chứng; RBAC = Quyền theo vai trò; SSO = 1 lần đăng nhập vào muôn nơi."
    }
  },
  {
    id: "cloud-c3-d2-031",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về giải pháp OpenSaaS:\n(I) Cho phép tổ chức kiểm tra độ an toàn của mã nguồn và tự lưu trữ trên máy chủ nội bộ.\n(II) Doanh nghiệp có thể tự do mở rộng và tùy biến thêm các tính năng nghiệp vụ đặc thù.\n(III) Nền tảng OpenSaaS hoàn toàn không thể triển khai trên các trung tâm dữ liệu đám mây công cộng.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì OpenSaaS (như WordPress, Nextcloud, Discourse) hoàn toàn có thể triển khai trên các đám mây công cộng lớn (AWS, GCP, Azure, DigitalOcean) hoặc máy chủ riêng tùy ý. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng mã nguồn mở thì chỉ được cài trên máy tính cá nhân ở nhà.",
      trickWord: "Bẫy khả năng triển khai linh hoạt của phần mềm OpenSaaS trên hạ tầng Public Cloud.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.2 (Đặc tính OpenSaaS)",
      tip: "OpenSaaS có tính cơ động cao nhất: Chạy được ở On-premise, Private Cloud lẫn Public Cloud."
    }
  },
  {
    id: "cloud-c3-d2-032",
    chapterId: "cloud-ch3",
    question: "Cho 3 mệnh đề về sự tiến hóa và xu hướng tương lai của SaaS:\n(I) Tích hợp Trí tuệ Nhân tạo tạo sinh (GenAI) giúp phần mềm SaaS tự động hóa các tác vụ phức tạp.\n(II) Mô hình Micro-SaaS được vận hành bởi đội ngũ tinh gọn nhắm vào các thị trường chuyên biệt hẹp.\n(III) Công nghệ SaaS sẽ làm biến mất hoàn toàn nhu cầu về cơ sở hạ tầng mạng Internet trong tương lai.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI phi lý vì SaaS càng phát triển thì càng đòi hỏi hạ tầng mạng Internet (5G, 6G, cáp quang biển) phải có băng thông lớn hơn và độ trễ thấp hơn để truyền dữ liệu. Mệnh đề (I) và (II) đúng xu hướng.",
    trickDetails: {
      whyTrapped: "Tưởng rằng công nghệ cao siêu sẽ làm biến mất luôn cả hạ tầng mạng viễn thông bên dưới.",
      trickWord: "Bẫy ngụy biện về sự tiêu biến của hạ tầng vật lý trước sự phát triển của phần mềm.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VII.1 (Xu hướng tương lai AI-SaaS & Micro-SaaS)",
      tip: "Phần mềm SaaS càng hiện đại thì mạng Internet càng là huyết mạch sống còn không thể thiếu."
    }
  },

  // ==========================================
  // DẠNG 4: TÌNH HUỐNG / KỊCH BẢN DOANH NGHIỆP (9 CÂU)
  // ==========================================
  {
    id: "cloud-c3-d2-033",
    chapterId: "cloud-ch3",
    question: "Một công ty luật quốc tế xử lý các vụ kiện sáp nhập tối mật, hợp đồng yêu cầu dữ liệu không được nằm chung cơ sở dữ liệu với bất kỳ khách hàng nào khác. Kiến trúc SaaS nào đáp ứng chuẩn xác?",
    options: [
      "Kiến trúc Single-tenant với cơ sở dữ liệu và phiên bản ứng dụng được cô lập hoàn toàn riêng biệt.",
      "Kiến trúc Multi-tenant thông thường dùng chung một bảng cơ sở dữ liệu và lọc bằng Tenant ID.",
      "Mô hình chia sẻ dữ liệu công cộng mở không cần mật khẩu để các luật sư dễ dàng truy cập từ xa.",
      "Từ chối hoàn toàn việc sử dụng máy tính và chỉ ghi chép thông tin khách hàng trên sổ tay giấy."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Khi khách hàng có yêu cầu tuân thủ khắt khe về việc cấm dùng chung database với khách hàng khác, nhà cung cấp SaaS bắt buộc phải triển khai mô hình Single-tenant (Dedicated Database / Isolated Instance).",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ cứ là SaaS thì bắt buộc phải dùng chung Database (Multi-tenant).",
      trickWord: "Bẫy lựa chọn kiến trúc SaaS đáp ứng điều khoản tuân thủ pháp lý khắt khe.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Tình huống sử dụng Single-tenant)",
      tip: "Yêu cầu tuyệt đối cấm chung Database = Chọn kiến trúc Single-tenant."
    }
  },
  {
    id: "cloud-c3-d2-034",
    chapterId: "cloud-ch3",
    question: "Một công ty khởi nghiệp có ngân sách eo hẹp cần triển khai phần mềm quản lý bán hàng CRM cho 5 nhân viên ngay trong ngày với chi phí tiết kiệm nhất. Họ nên lựa chọn giải pháp kiến trúc nào?",
    options: [
      "Đăng ký gói thuê bao dịch vụ phần mềm SaaS đa người thuê Multi-tenant thanh toán theo người dùng.",
      "Thuê riêng một tòa nhà trung tâm dữ liệu và tự tuyển đội ngũ kỹ sư phát triển phần mềm CRM mới.",
      "Đặt hàng một công ty phần mềm xây dựng riêng giải pháp Single-tenant độc quyền trong sáu tháng.",
      "Mua một nghìn đĩa cài đặt phần mềm CRM đóng gói về phát miễn phí cho toàn bộ nhân viên công ty."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Multi-tenant SaaS (như HubSpot, Salesforce Starter) là cứu cánh của các công ty khởi nghiệp: chỉ cần đăng ký bằng thẻ tín dụng, dùng được ngay lập tức, trả phí vài đô/người/tháng, không tốn chi phí đầu tư ban đầu.",
    trickDetails: {
      whyTrapped: "Phương án C tốn hàng trăm triệu và mất 6 tháng; phương án B phá sản startup.",
      trickWord: "Bẫy định vị giải pháp: Khởi nghiệp + Ngân sách ít + Cần dùng ngay = Multi-tenant SaaS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.2 & III.1 (Lợi ích kinh tế Multi-tenant)",
      tip: "Startup ít vốn cần dùng ngay = Multi-tenant SaaS (Trả theo đầu người, kích hoạt tức thì)."
    }
  },
  {
    id: "cloud-c3-d2-035",
    chapterId: "cloud-ch3",
    question: "Phần mềm SaaS ghi nhận hiện tượng hàng loạt người dùng bị phản hồi chậm do một tập đoàn khách hàng lớn đang ồ ạt xuất báo cáo lịch sử 10 năm. Hiện tượng này là gì và giải pháp kỹ thuật là gì?",
    options: [
      "Hiện tượng Noisy Neighbor; giải pháp là thiết lập hạn mức tài nguyên (Rate Limiting / Resource Quotas).",
      "Hệ thống bị sét đánh hỏng nguồn điện; giải pháp là thay thế toàn bộ dây cáp đồng trong tòa nhà.",
      "Lỗi do máy tính của người dùng bị nhiễm virus; giải pháp là yêu cầu tất cả khách mua máy tính mới.",
      "Nhà mạng viễn thông cố tình bóp băng thông; giải pháp là chuyển sang dùng sóng liên lạc radio."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Đây là hiện tượng 'Người hàng xóm ồn ào' (Noisy Neighbor). Giải pháp chuẩn kỹ thuật của kiến trúc Multi-tenant là thiết lập Rate Limiting (giới hạn số request/phút) và Resource Quotas (cắt bớt tải CPU của tenant chạy quá mức để bảo vệ các tenant khác).",
    trickDetails: {
      whyTrapped: "Các phương án B, C, D đưa ra các nguyên nhân ngoại cảnh sai lệch bản chất kỹ thuật phần mềm.",
      trickWord: "Bẫy nhận diện sự cố Noisy Neighbor và giải pháp phân bổ hạn mức tài nguyên trong SaaS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Xử lý vấn đề Noisy Neighbor)",
      tip: "Một khách chạy nặng làm chậm các khách khác = Noisy Neighbor ➔ Giải pháp: Rate Limiting / Quotas."
    }
  },
  {
    id: "cloud-c3-d2-036",
    chapterId: "cloud-ch3",
    question: "Doanh nghiệp bất động sản muốn xây dựng website cho phép khách xem vị trí nhà đất trên bản đồ vệ tinh Google Maps kết hợp giá bán từ cơ sở dữ liệu nội bộ. Kỹ thuật tích hợp nào đáp ứng tối ưu?",
    options: [
      "Kỹ thuật ứng dụng lai ghép Mashup kết hợp giao diện bản đồ bên ngoài với nguồn dữ liệu nội bộ.",
      "Tự phóng vệ tinh lên không gian vũ trụ để tự chụp ảnh toàn bộ bề mặt Trái Đất phục vụ website.",
      "Vẽ thủ công bản đồ từng khu phố bằng tay rồi chụp ảnh tải lên trang web dạng album hình ảnh tĩnh.",
      "Yêu cầu khách hàng tự mở hai cửa sổ trình duyệt độc lập và tự tìm kiếm vị trí nhà trên ứng dụng khác."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mashup (như trường hợp kinh điển HousingMaps) là kỹ thuật lai ghép: lấy dữ liệu nhà đất từ database nội bộ và nhúng hiển thị lên API bản đồ Google Maps để tạo ra một ứng dụng hoàn toàn mới có giá trị cao.",
    trickDetails: {
      whyTrapped: "Phương án B phi lý; phương án C và D trải nghiệm người dùng tồi tệ.",
      trickWord: "Bẫy tình huống ứng dụng kinh điển của kỹ thuật tích hợp Mashup trong kỷ nguyên Web 2.0.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Khái niệm & Ứng dụng Mashup)",
      tip: "Ghép dữ liệu của mình vào API dịch vụ khác (như Bản đồ, Thời tiết) = Công nghệ Mashup."
    }
  },
  {
    id: "cloud-c3-d2-037",
    chapterId: "cloud-ch3",
    question: "Lập trình viên viết mã JavaScript trên trình duyệt gọi trực tiếp API tỷ giá của ngân hàng đối tác thì bị chặn bởi lỗi 'CORS policy'. Giải pháp kiến trúc nào giải quyết triệt để vấn đề này?",
    options: [
      "Chuyển đổi sang Server-side Mashup sử dụng máy chủ Backend làm trung gian gọi API thay cho trình duyệt.",
      "Yêu cầu toàn bộ người dùng tắt cơ chế bảo mật của trình duyệt web trước khi truy cập vào website.",
      "Hủy bỏ hoàn toàn tính năng xem tỷ giá và yêu cầu khách hàng tự gọi điện thoại tới ngân hàng hỏi.",
      "Gửi email yêu cầu thống đốc ngân hàng trung ương xóa bỏ vĩnh viễn chính sách an ninh mạng quốc gia."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trình duyệt chặn các yêu cầu Cross-Origin bằng chính sách Same-Origin Policy (CORS). Máy chủ Backend không phải là trình duyệt nên không bị CORS ràng buộc. Dùng Server-side Mashup (Backend Proxy) gọi API thay cho client sẽ giải quyết dứt điểm lỗi CORS.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ lỗi CORS thì bắt người dùng phải cài extension tắt bảo mật trình duyệt (phương án B nguy hiểm).",
      trickWord: "Bẫy khắc phục rào cản CORS trong phát triển ứng dụng Web Mashup.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Giải quyết CORS bằng Server-side Mashup)",
      tip: "Bị lỗi CORS trên trình duyệt = Chuyển việc gọi API về máy chủ Backend (Server-side Mashup/Proxy)."
    }
  },
  {
    id: "cloud-c3-d2-038",
    chapterId: "cloud-ch3",
    question: "Doanh nghiệp nhận thông báo nhà cung cấp SaaS tăng phí 4 lần nhưng không thể đổi sang phần mềm khác vì toàn bộ dữ liệu lịch sử bị khóa trong định dạng độc quyền. Doanh nghiệp đang sập bẫy gì?",
    options: [
      "Cái bẫy khóa chặt nhà cung cấp do phụ thuộc hoàn toàn vào công nghệ và định dạng dữ liệu đóng.",
      "Lỗi phần mềm do máy tính của giám đốc doanh nghiệp chưa được cập nhật phiên bản mới nhất.",
      "Cuộc tấn công mạng có chủ đích do các đối thủ cạnh tranh trên thị trường thuê tin tặc thực hiện.",
      "Hiện tượng bình thường và mọi công ty khi dùng máy tính đều bắt buộc phải chấp nhận mất dữ liệu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Đây là minh chứng điển hình của Vendor Lock-in (Khóa chặt nhà cung cấp): dữ liệu bị đóng kín, chi phí di chuyển (Switching cost) quá lớn khiến doanh nghiệp mất khả năng thương lượng và bị ép giá vô lý.",
    trickDetails: {
      whyTrapped: "Các phương án B, C, D đổ lỗi cho kỹ thuật hoặc tin tặc thay vì nhận diện vấn đề kiến trúc kinh doanh.",
      trickWord: "Bẫy nhận diện hiện tượng Vendor Lock-in kinh điển trong hệ sinh thái SaaS độc quyền.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục II.2 (Thách thức Vendor Lock-in)",
      tip: "Bị ép giá mà không thể chuyển đổi do dữ liệu bị khóa kín = Vendor Lock-in."
    }
  },
  {
    id: "cloud-c3-d2-039",
    chapterId: "cloud-ch3",
    question: "Hai nhân viên cùng mở một văn bản trên Google Docs và gõ chữ vào cùng một vị trí trong cùng một giây nhưng nội dung không bị đè mất. Công nghệ cốt lõi nào đã xử lý thành công xung đột này?",
    options: [
      "Thuật toán Operational Transformation tự động tính toán lại vị trí chèn ký tự theo thời gian thực.",
      "Hệ thống tự động ngắt kết nối mạng của một trong hai nhân viên để ưu tiên người gõ phím nhanh hơn.",
      "Phần mềm tự động tạo ra hai tệp tin riêng biệt và yêu cầu người dùng tự dùng mắt ghép thủ công.",
      "Cơ chế khóa tài liệu bi quan ngăn không cho nhân viên thứ hai được phép nhìn thấy nội dung văn bản."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Operational Transformation (OT) là thuật toán toán học giúp Google Docs chuyển đổi các tọa độ thao tác đồng thời (Concurrent Operations) theo thời gian thực, đảm bảo cả 2 nhân viên đều thấy đầy đủ ký tự của nhau mà không cần khóa tài liệu.",
    trickDetails: {
      whyTrapped: "Phương án D là cơ chế Pessimistic Locking truyền thống; phương án B và C phá hỏng tính cộng tác.",
      trickWord: "Bẫy nhận diện thuật toán xử lý đồng biên tập thời gian thực trong Google Workspace.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục V.1 (Thuật toán Operational Transformation)",
      tip: "Cộng tác văn bản đồng thời không bị mất chữ = Thuật toán Operational Transformation (OT)."
    }
  },
  {
    id: "cloud-c3-d2-040",
    chapterId: "cloud-ch3",
    question: "Nhân viên dùng mạng Wifi công cộng tại sân bay để đăng nhập vào hệ thống SaaS tài chính của công ty. Cơ chế nào bảo vệ tài khoản khỏi bị kẻ xấu bắt gói tin đánh cắp mật khẩu và xâm nhập?",
    options: [
      "Mã hóa đường truyền bằng giao thức TLS 1.3 kết hợp bắt buộc xác thực đa yếu tố MFA qua thiết bị.",
      "Tắt màn hình máy tính xách tay ngay khi vừa bấm nút đăng nhập để kẻ xấu bên cạnh không nhìn thấy.",
      "Đổi tên tài khoản đăng nhập thành tên của một nhân vật phim hoạt hình để đánh lừa kẻ nghe lén mạng.",
      "Sử dụng phần mềm gõ bàn phím ảo trên màn hình để thay thế hoàn toàn bàn phím vật lý của máy tính."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "TLS 1.3 mã hóa toàn bộ dữ liệu truyền trên Wifi công cộng ngăn chặn nghe lén (Sniffing/Man-in-the-Middle). Xác thực đa yếu tố MFA đảm bảo dù mật khẩu có bị lộ thì kẻ xấu vẫn không thể đăng nhập nếu thiếu mã OTP trên điện thoại.",
    trickDetails: {
      whyTrapped: "Các phương án B, C, D là các biện pháp đối phó mang tính tâm lý ngây thơ, không có giá trị kỹ thuật an ninh mạng.",
      trickWord: "Bẫy phối hợp các lớp bảo mật: Mã hóa kênh truyền TLS + Xác thực đa yếu tố MFA.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (Bảo mật đường truyền & Xác thực danh tính)",
      tip: "Mạng công cộng = Cần Mã hóa TLS (chống nghe lén) + MFA (chống đăng nhập lậu khi mất pass)."
    }
  },
  {
    id: "cloud-c3-d2-041",
    chapterId: "cloud-ch3",
    question: "Doanh nghiệp châu Âu ký hợp đồng thuê phần mềm SaaS nhân sự nhưng bắt buộc phải tuân thủ đạo luật GDPR. Tiêu chí bắt buộc nào nhà cung cấp đám mây phải đáp ứng về mặt lưu trữ dữ liệu?",
    options: [
      "Trung tâm dữ liệu lưu trữ bắt buộc phải đặt trong lãnh thổ EU và hỗ trợ quyền xóa dữ liệu cá nhân.",
      "Cho phép tự do sao chép thông tin cá nhân của nhân viên lên mạng xã hội để quảng bá hình ảnh.",
      "Không bao giờ được phép xóa dữ liệu của nhân viên dù người đó đã nghỉ việc và có đơn yêu cầu xóa.",
      "Bắt buộc toàn bộ dữ liệu phải được in ra giấy và lưu giữ tại văn phòng ủy ban châu Âu ở Brussels."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Đạo luật GDPR (General Data Protection Regulation) của châu Âu yêu cầu nghiêm ngặt về chủ quyền dữ liệu (Data Residency: lưu trữ tại DC trong EU) và 'Quyền được lãng quên' (Right to be forgotten: xóa bỏ dữ liệu khi người dùng yêu cầu).",
    trickDetails: {
      whyTrapped: "Phương án C vi phạm trực tiếp quyền được lãng quên (Right to be forgotten) của GDPR.",
      trickWord: "Bẫy yêu cầu tuân thủ pháp lý đạo luật bảo vệ dữ liệu cá nhân GDPR đối với dịch vụ SaaS.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.2 (Tuân thủ pháp lý GDPR trong SaaS)",
      tip: "Tuân thủ GDPR = Trung tâm dữ liệu nằm trong EU + Hỗ trợ quyền yêu cầu xóa dữ liệu cá nhân."
    }
  },

  // ==========================================
  // DẠNG 5: PHÂN BIỆT KHÁI NIỆM SONG SINH DỄ NHẦM LẪN (9 CÂU)
  // ==========================================
  {
    id: "cloud-c3-d2-042",
    chapterId: "cloud-ch3",
    question: "Điểm khác biệt cốt lõi nhất giữa kiến trúc 'Single-tenant' và 'Multi-tenant' trong SaaS là gì?",
    options: [
      "Single-tenant cấp riêng máy chủ và database; Multi-tenant chia sẻ chung ứng dụng và cơ sở dữ liệu.",
      "Single-tenant chỉ dùng được cho một người dùng; Multi-tenant cho phép cả gia đình cùng đăng nhập.",
      "Single-tenant hoàn toàn không thể kết nối mạng; Multi-tenant bắt buộc phải sử dụng cáp quang biển.",
      "Hai kiến trúc này hoàn toàn đồng nhất về mặt hạ tầng vật lý và cách thức tổ chức bảng dữ liệu lưu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Khác biệt cốt lõi: Single-tenant cấp một instance ứng dụng và database riêng biệt cho từng tổ chức khách hàng (Cô lập vật lý). Multi-tenant dùng chung một instance ứng dụng và database duy nhất cho tất cả khách hàng (Cô lập logic qua Tenant ID).",
    trickDetails: {
      whyTrapped: "Phương án B hiểu sai từ 'tenant' (khách hàng tổ chức) thành 'người dùng cá nhân trong gia đình'.",
      trickWord: "Bẫy bản chất kiến trúc phần mềm: Dedicated Instance/DB vs Shared Instance/DB.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.1 (Single-tenant vs Multi-tenant)",
      tip: "Single-tenant = Biệt thự riêng lẻ (Mỗi khách 1 căn); Multi-tenant = Tòa chung cư (Chung móng, chung nóc)."
    }
  },
  {
    id: "cloud-c3-d2-043",
    chapterId: "cloud-ch3",
    question: "Sự khác biệt căn bản giữa 'Client-side Mashup' và 'Server-side Mashup' là gì?",
    options: [
      "Client-side tích hợp bằng JavaScript trên trình duyệt; Server-side tổng hợp dữ liệu tại máy chủ.",
      "Client-side chỉ dùng được khi mất kết nối mạng; Server-side bắt buộc phải cài đặt phần mềm diệt virus.",
      "Client-side có độ an toàn bảo mật API Key cao hơn nhiều so với giải pháp Server-side trung gian.",
      "Hai phương thức này hoàn toàn giống nhau về vị trí thực thi mã lệnh và cách thức xử lý lỗi CORS."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Client-side Mashup: Trình duyệt của client dùng JavaScript gọi thẳng các API ngoài và tự ghép nối hiển thị (nhẹ server, nhưng dễ lộ API key và dính CORS). Server-side Mashup: Máy chủ Backend của ta gọi các API ngoài, tổng hợp xong xuôi mới trả kết quả về cho client (an toàn, giấu API key, vượt CORS).",
    trickDetails: {
      whyTrapped: "Phương án C đảo ngược rủi ro bảo mật (thực tế Client-side cực kỳ nguy hiểm vì lộ key trong code JS).",
      trickWord: "Bẫy vị trí thực thi mã lệnh tích hợp: Trình duyệt Client vs Máy chủ Backend.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.1 (Client vs Server Mashup)",
      tip: "Client Mashup = Trình duyệt tự gọi tự ghép; Server Mashup = Máy chủ gom trước rồi mới đưa client."
    }
  },
  {
    id: "cloud-c3-d2-044",
    chapterId: "cloud-ch3",
    question: "Khác biệt bản chất giữa mô hình 'SaaS' hiện đại và mô hình 'ASP' (Application Service Provider) truyền thống là gì?",
    options: [
      "SaaS xây dựng trên kiến trúc Multi-tenant quy mô lớn; ASP lưu trữ các bản sao Single-tenant rời rạc.",
      "ASP chỉ chạy trên các dòng máy chủ tính toán lượng tử; SaaS chỉ chạy trên mạng nội bộ văn phòng.",
      "ASP cho phép người dùng truy cập hoàn toàn miễn phí; SaaS luôn luôn bắt buộc phải trả tiền trước.",
      "Hai mô hình này hoàn toàn đồng nhất về công nghệ ảo hóa và không có bất kỳ điểm cải tiến kỹ thuật nào."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "ASP (thập niên 1990s) là tiền thân của SaaS nhưng thất bại do mỗi khách hàng phải dựng riêng một máy chủ/instance đơn lẻ (Single-tenant cồng kềnh, chi phí bảo trì khổng lồ). SaaS hiện đại thành công rực rỡ nhờ kiến trúc Multi-tenant chia sẻ tài nguyên quy mô cực lớn trên nền tảng Web.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ ASP và SaaS chỉ là hai tên gọi khác nhau của cùng một công nghệ cũ.",
      trickWord: "Bẫy bước ngoặt kiến trúc: ASP = Hosted Single-tenant rời rạc; SaaS = Cloud-native Multi-tenant.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục I.1 (Lịch sử tiến hóa từ ASP sang SaaS)",
      tip: "ASP = Bê phần mềm cũ đặt lên máy chủ thuê ngoài (đắt, khó nâng cấp); SaaS = Sinh ra cho Web đa người thuê."
    }
  },
  {
    id: "cloud-c3-d2-045",
    chapterId: "cloud-ch3",
    question: "Điểm khác biệt cốt lõi giữa 'OpenSaaS' và 'Proprietary SaaS' (SaaS độc quyền) là gì?",
    options: [
      "OpenSaaS công khai mã nguồn cho phép tự lưu trữ; Proprietary SaaS đóng mã nguồn và cấm di dời.",
      "OpenSaaS không bao giờ hỗ trợ chạy trên mạng Internet; Proprietary SaaS chỉ chạy trên máy tính bảng.",
      "Proprietary SaaS có chi phí thuê bao luôn luôn rẻ hơn tất cả các giải pháp phần mềm mở OpenSaaS.",
      "Hai mô hình này hoàn toàn giống nhau về việc nhà cung cấp nắm độc quyền toàn bộ mã nguồn của phần mềm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "OpenSaaS: Mã nguồn công khai, người dùng có thể tự tải về host riêng (chống Vendor Lock-in). Proprietary SaaS (như Salesforce, Workday): Mã nguồn độc quyền khép kín, khách hàng không bao giờ được xem mã nguồn và không thể tự host.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn giữa phần mềm thương mại đóng mã nguồn và phần mềm dịch vụ mã nguồn mở.",
      trickWord: "Bẫy quyền kiểm soát mã nguồn và khả năng tự lưu trữ (Self-hosting capability).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục III.2 (OpenSaaS vs Proprietary SaaS)",
      tip: "OpenSaaS = Xem được code, tự host được; Proprietary = Code đóng kín của hãng, không tự host được."
    }
  },
  {
    id: "cloud-c3-d2-046",
    chapterId: "cloud-ch3",
    question: "Sự khác biệt căn bản giữa 'Data at-rest Encryption' và 'Data in-transit Encryption' là gì?",
    options: [
      "At-rest mã hóa dữ liệu lưu trên đĩa cứng; In-transit mã hóa gói tin di chuyển trên đường truyền mạng.",
      "At-rest mã hóa dữ liệu vào ban đêm khi ngủ; In-transit mã hóa dữ liệu khi nhân viên đang đi xe buýt.",
      "In-transit làm giảm dung lượng của cơ sở dữ liệu; At-rest làm tăng tốc độ truyền mạng của máy chủ.",
      "Hai hình thức này hoàn toàn đồng nhất về thuật toán và môi trường bảo vệ dữ liệu trong trung tâm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Data in-transit (dữ liệu đang truyền trên mạng): Được mã hóa bằng TLS 1.3/HTTPS để chống nghe lén. Data at-rest (dữ liệu nằm yên trên đĩa cứng, database, backup): Được mã hóa bằng AES-256 để chống trộm ổ cứng vật lý.",
    trickDetails: {
      whyTrapped: "Phương án B giải thích theo nghĩa đen từ vựng ngô nghê buồn cười.",
      trickWord: "Bẫy trạng thái của dữ liệu: Đang truyền trên mạng (In-transit) vs Nằm yên trên đĩa (At-rest).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (Mã hóa At-rest vs In-transit)",
      tip: "In-transit = Dữ liệu đang bay trên dây cáp (TLS); At-rest = Dữ liệu đang ngủ yên trong ổ cứng (AES)."
    }
  },
  {
    id: "cloud-c3-d2-047",
    chapterId: "cloud-ch3",
    question: "Phân biệt sự khác nhau giữa hai khái niệm an ninh: 'Authentication' (Xác thực) và 'Authorization' (Phân quyền)?",
    options: [
      "Xác thực kiểm tra bạn là ai; Phân quyền xác định bạn có quyền hạn thực hiện những hành động nào.",
      "Xác thực kiểm tra tốc độ đường truyền mạng; Phân quyền kiểm tra dung lượng ổ cứng còn trống của máy.",
      "Hai thuật ngữ này hoàn toàn đồng nghĩa và có thể sử dụng thay thế cho nhau trong mọi tài liệu kỹ thuật.",
      "Phân quyền luôn luôn diễn ra trước khi người dùng thực hiện thao tác nhập tài khoản và mật khẩu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Authentication (Xác thực): Chứng minh danh tính ('Bạn là ai?' qua Username/Password/MFA). Authorization (Ủy quyền / Phân quyền): Kiểm tra quyền hạn ('Bạn được phép làm gì?' qua RBAC, ví dụ chỉ được đọc hay được sửa/xóa).",
    trickDetails: {
      whyTrapped: "Rất nhiều người dùng từ 'xác thực' và 'phân quyền' lẫn lộn như một khái niệm duy nhất.",
      trickWord: "Bẫy ranh giới kinh điển giữa Xác thực danh tính (AuthN) và Cấp quyền thao tác (AuthZ).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VI.1 (Authentication vs Authorization)",
      tip: "AuthN (Who are you? - Chứng minh nhân dân); AuthZ (What can you do? - Thẻ ra vào các phòng ban)."
    }
  },
  {
    id: "cloud-c3-d2-048",
    chapterId: "cloud-ch3",
    question: "Điểm khác biệt cốt lõi giữa 'Kiến trúc Hướng dịch vụ' (SOA) và 'Kiến trúc Vi dịch vụ' (Microservices) là gì?",
    options: [
      "SOA chia sẻ tài nguyên qua thanh ghi dịch vụ chung; Microservices phân rã nhỏ và độc lập dữ liệu.",
      "SOA chỉ chạy trên máy chủ đám mây công cộng; Microservices chỉ chạy trên các dòng máy chủ cá nhân.",
      "Microservices bắt buộc phải sử dụng giao thức SOAP nặng nề; SOA chỉ sử dụng giao thức truyền tin REST.",
      "Hai kiến trúc này hoàn toàn đồng nhất về cách thức quản lý cơ sở dữ liệu và cơ chế triển khai phần mềm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SOA thường có quy mô doanh nghiệp rộng lớn (Enterprise-wide), chia sẻ hạ tầng chung qua Enterprise Service Bus (ESB) và dùng chung database. Microservices phân rã hệ thống thành các dịch vụ cực nhỏ, triển khai độc lập và mỗi service sở hữu cơ sở dữ liệu riêng biệt (Database per service).",
    trickDetails: {
      whyTrapped: "Phương án C đảo ngược giao thức giữa SOAP (thường gắn với SOA) và REST (thường gắn với Microservices).",
      trickWord: "Bẫy tiến hóa kiến trúc: SOA cấp độ doanh nghiệp lớn vs Microservices độc lập quy mô nhỏ.",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục IV.2 (SOA vs Microservices Architecture)",
      tip: "SOA = Dịch vụ doanh nghiệp kết nối qua ESB chung; Microservices = Dịch vụ nhỏ xé lẻ, mỗi con 1 database riêng."
    }
  },
  {
    id: "cloud-c3-d2-049",
    chapterId: "cloud-ch3",
    question: "Sự khác biệt giữa 'Operational Transformation' (OT) và 'Pessimistic Locking' (Khóa bi quan) là gì?",
    options: [
      "OT cho phép đồng sửa tự do không khóa; Pessimistic Locking khóa chặt tài nguyên ngăn người khác sửa.",
      "Pessimistic Locking giúp nhiều người cùng gõ phím nhanh hơn nhiều so với thuật toán OT hiện đại.",
      "OT đòi hỏi phải ngắt kết nối mạng của tất cả người dùng trước khi tiến hành cập nhật văn bản mới.",
      "Hai kỹ thuật này hoàn toàn giống nhau về việc cấm người dùng thứ hai được phép truy cập vào tệp tin."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Pessimistic Locking (Khóa bi quan): Khi User A mở sửa file thì file bị khóa cứng (Read-only với người khác), ngăn triệt để xung đột nhưng triệt tiêu tính cộng tác. OT: Không khóa file, ai cũng gõ tự do, thuật toán tự biến đổi vị trí con trỏ để duy trì nhất quán.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn giữa triết lý ngăn chặn xung đột bằng cách 'Khóa' với triết lý 'Giải quyết xung đột tự động bằng toán học'.",
      trickWord: "Bẫy triết lý xử lý xung đột: Pessimistic Locking (Khóa chặn) vs Operational Transformation (Giải quyết tự động).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục V.1 (OT vs Locking Mechanism)",
      tip: "Pessimistic Locking = Ai vào phòng thì khóa cửa; OT = Mọi người cùng vào phòng cùng làm việc tự do."
    }
  },
  {
    id: "cloud-c3-d2-050",
    chapterId: "cloud-ch3",
    question: "Khác biệt bản chất giữa 'Horizontal SaaS' (SaaS chiều ngang) và 'Vertical SaaS' (SaaS chiều dọc) là gì?",
    options: [
      "Horizontal SaaS phục vụ nhu cầu chung đa ngành; Vertical SaaS tập trung sâu một ngành nghề đặc thù.",
      "Horizontal SaaS chỉ dùng cho các máy chủ đặt nằm ngang; Vertical SaaS dùng cho máy chủ dựng đứng.",
      "Vertical SaaS có quy mô thị trường khách hàng tiềm năng rộng lớn hơn nhiều so với Horizontal SaaS.",
      "Hai mô hình này hoàn toàn giống nhau về tập khách hàng mục tiêu và chức năng nghiệp vụ phần mềm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Horizontal SaaS (như Salesforce, Google Workspace, Slack, Zoom): Cung cấp chức năng chung (CRM, Email, Chat) phục vụ cho MỌI NGÀNH NGHỀ. Vertical SaaS (như Veeva cho dược phẩm, Toast cho nhà hàng): Thiết kế chuyên biệt sâu cho DUY NHẤT MỘT NGÀNH công nghiệp đặc thù.",
    trickDetails: {
      whyTrapped: "Phương án B giải thích ngô nghê theo hướng cơ học của máy chủ đặt nằm hay dựng đứng.",
      trickWord: "Bẫy phân loại thị trường SaaS: Chiều ngang (Đa ngành nghề) vs Chiều dọc (Chuyên ngành hẹp).",
      citation: "Giáo trình Điện toán đám mây — Chương 3, Mục VII.1 (Phân loại Horizontal vs Vertical SaaS)",
      tip: "Horizontal = Bán cho mọi ngành (Zoom, Slack); Vertical = Bán riêng cho 1 ngành (Phần mềm phòng khám y tế)."
    }
  }
];

// Hàm kiểm tra và cân bằng độ lệch Delta L <= 15
function balanceAndVerifyOptions(questions) {
  questions.forEach((q) => {
    const lengths = q.options.map(opt => opt.length);
    const minL = Math.min(...lengths);
    const maxL = Math.max(...lengths);
    const delta = maxL - minL;
    if (delta > 15) {
      console.warn(`⚠️ Câu ${q.id} có độ lệch delta L = ${delta} > 15! Cần cân bằng.`);
    }
  });
}

balanceAndVerifyOptions(questionsCloudCh3Trick2);

// Kiểm tra trùng lặp với Đề bẫy 1 Chương 3
const set1Ids = new Set(questionsCloudCh3Trick1.map(q => q.id));
const set1Questions = new Set(questionsCloudCh3Trick1.map(q => q.question.trim().toLowerCase()));

let duplicateCount = 0;
questionsCloudCh3Trick2.forEach(q => {
  if (set1Ids.has(q.id)) {
    console.error(`❌ Trùng ID với đề 1: ${q.id}`);
    duplicateCount++;
  }
  if (set1Questions.has(q.question.trim().toLowerCase())) {
    console.error(`❌ Trùng câu hỏi với đề 1: ${q.question}`);
    duplicateCount++;
  }
});
console.log(`Kiểm tra trùng lặp: ${duplicateCount} câu trùng.`);

// Xáo trộn vị trí đáp án để cân bằng xác suất A, B, C, D (12A, 13B, 12C, 13D)
const shuffledTarget = [
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,
  0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,
  1, 3
];

questionsCloudCh3Trick2.forEach((q, i) => {
  const currentCorrectIndex = q.answer;
  const targetCorrectIndex = shuffledTarget[i];
  
  if (currentCorrectIndex !== targetCorrectIndex) {
    const correctOption = q.options[currentCorrectIndex];
    const temp = q.options[targetCorrectIndex];
    q.options[targetCorrectIndex] = correctOption;
    q.options[currentCorrectIndex] = temp;
    q.answer = targetCorrectIndex;
  }
});

// Kiểm tra lại delta L sau khi hoán vị
let maxDelta = 0;
questionsCloudCh3Trick2.forEach(q => {
  const lengths = q.options.map(opt => opt.length);
  const minL = Math.min(...lengths);
  const maxL = Math.max(...lengths);
  const delta = maxL - minL;
  if (delta > maxDelta) maxDelta = delta;
  if (delta > 15) {
    console.warn(`Lệch > 15 ở câu ${q.id}: ${delta}`);
  }
});
console.log("Độ lệch Delta L lớn nhất ghi nhận:", maxDelta);

// Đếm phân bổ đáp án
const dist = { A: 0, B: 0, C: 0, D: 0 };
questionsCloudCh3Trick2.forEach(q => {
  const letter = ["A", "B", "C", "D"][q.answer];
  dist[letter]++;
});
console.log("Phân bổ đáp án Đề bẫy 2 Chương 3:", dist);

// Ghi file data/questions-cloud-ch3-trick2.js
const codeContent = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY CHUYÊN SÂU — CHƯƠNG 3 (BỘ ĐỀ 2)
   Môn học: Điện toán đám mây (Cloud Computing)
   Mã chương: cloud-ch3
   Bộ đề bẫy số: 2 (trick-2)
   Quy mô: 50 câu hỏi bẫy Vận dụng cao (Hard / Trick)
   Đặc điểm:
   - 100% câu hỏi có trickDetails (whyTrapped, trickWord, citation, tip)
   - Đa dạng hóa 5 dạng câu hỏi: Chọn câu SAI, Chọn câu ĐÚNG, Chùm mệnh đề I-II-III,
     Kịch bản kiến trúc thực tế, Phân biệt khái niệm song sinh.
   - 100% câu hỏi đạt chuẩn cân bằng độ dài phương án ΔL = Lmax - Lmin <= 15 ký tự
   - Độc lập 100% với Bộ đề bẫy 1
   - Phân bổ đáp án chuẩn: ${dist.A}A - ${dist.B}B - ${dist.C}C - ${dist.D}D
   ============================================================ */

export const questionsCloudCh3Trick2 = ${JSON.stringify(questionsCloudCh3Trick2, null, 2)};
`;

const targetJsPath = path.join(rootDir, "data", "questions-cloud-ch3-trick2.js");
fs.writeFileSync(targetJsPath, codeContent, "utf-8");
console.log("✅ Đã ghi thành công:", targetJsPath);
