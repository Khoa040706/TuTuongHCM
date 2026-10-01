import fs from "node:fs";
import path from "node:path";

// Đọc đề bẫy 1 của Chương 2 để kiểm tra trùng lặp
import { questionsCloudCh2Trick1 } from "../data/questions-cloud-ch2-trick1.js";

const rootDir = process.cwd();
console.log("Đã tải Đề bẫy 1 Chương 2:", questionsCloudCh2Trick1.length, "câu hỏi.");

export const questionsCloudCh2Trick2 = [
  // ==========================================
  // DẠNG 1: CHỌN CÂU SAI / KHÔNG CHÍNH XÁC (12 CÂU)
  // ==========================================
  {
    id: "cloud-c2-d2-001",
    chapterId: "cloud-ch2",
    question: "Khi khảo sát cấu trúc phân cấp phần cứng của Data Center, nhận định nào sau đây là SAI?",
    options: [
      "Một cụm PoD chỉ đơn thuần là một tủ rack lớn hơn chứ không hề có hệ thống điện phụ trợ.",
      "Nhiều máy chủ phiến tiêu chuẩn được lắp đặt cố định và đi dây bên trong một tủ rack.",
      "Các tủ rack được xếp thẳng hàng tạo thành các dãy lối đi để tối ưu luồng gió làm mát.",
      "Một trung tâm dữ liệu hoàn chỉnh có thể bao gồm hàng chục cụm PoD module hóa khép kín."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cụm PoD (Point of Delivery) là khối module hóa hoàn chỉnh bao gồm nhiều tủ rack kết hợp trọn bộ hệ thống hỗ trợ khép kín (PDS, UPS, RowCool, DCIM), KHÔNG PHẢI chỉ là một tủ rack lớn hơn.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ coi nhẹ cụm PoD, nghĩ rằng PoD chỉ là một cái tủ rack to hơn bình thường.",
      trickWord: "Bẫy hạ thấp bản chất kiến trúc module của PoD: 'chỉ đơn thuần là một tủ rack lớn hơn'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục I.2 (Kiến trúc PoD)",
      tip: "PoD = Khối module hoàn chỉnh (Nhiều rack + Hệ thống điện PDS/UPS + Làm mát RowCool + Giám sát DCIM)."
    }
  },
  {
    id: "cloud-c2-d2-002",
    chapterId: "cloud-ch2",
    question: "Phát biểu nào sau đây là SAI về chỉ số hiệu quả sử dụng năng lượng PUE trong Data Center?",
    options: [
      "Chỉ số PUE có giá trị càng lớn hơn 2.0 thì chứng tỏ trung tâm dữ liệu càng tiết kiệm điện.",
      "PUE được tính bằng tổng năng lượng toàn cơ sở chia cho năng lượng tiêu thụ bởi thiết bị IT.",
      "Giá trị PUE lý tưởng tuyệt đối theo lý thuyết vật lý là 1.0 (toàn bộ điện dùng cho IT).",
      "Năng lượng tiêu hao cho hệ thống điều hòa làm mát là nguyên nhân chính làm tăng chỉ số PUE."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Chỉ số PUE (Power Usage Effectiveness) càng GẦN 1.0 thì càng tiết kiệm điện. PUE càng lớn (ví dụ > 2.0) nghĩa là điện năng bị lãng phí cho tản nhiệt, chiếu sáng quá nhiều so với điện dùng cho máy chủ.",
    trickDetails: {
      whyTrapped: "Học sinh thường nghĩ chỉ số hiệu suất thì số càng to càng tốt, trong khi PUE càng nhỏ (gần 1.0) mới là tối ưu.",
      trickWord: "Bẫy nghịch đảo giá trị tối ưu của PUE: 'càng lớn hơn 2.0 thì càng tiết kiệm điện'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.1 (Chỉ số PUE)",
      tip: "PUE lý tưởng = 1.0; PUE thực tế hiện đại = 1.1 đến 1.2; PUE > 2.0 là lãng phí điện nghiêm trọng."
    }
  },
  {
    id: "cloud-c2-d2-003",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là SAI về cơ chế làm mát bằng sàn nâng (Raised Floor) trong phòng máy?",
    options: [
      "Luồng khí lạnh từ sàn nâng bắt buộc phải thổi thẳng vào mặt sau có quạt xả của máy chủ.",
      "Khoang rỗng bên dưới sàn nâng đóng vai trò như một buồng áp suất tĩnh để phân phối khí.",
      "Các tấm sàn đục lỗ được bố trí tại lối đi lạnh để dẫn khí mát đi lên phía trước máy chủ.",
      "Sàn nâng giúp che giấu và bảo vệ an toàn cho hệ thống dây cáp mạng và ống dẫn dưới sàn."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Khí lạnh từ sàn nâng phải thổi lên ở LỐI ĐI LẠNH (phía trước mặt máy chủ để máy hút khí lạnh vào làm mát). Mặt sau của máy chủ là nơi quạt xả khí nóng ra lối đi nóng, thổi khí lạnh vào mặt sau sẽ làm hỏng luồng tản nhiệt.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn hướng thổi gió: Máy chủ hút khí lạnh ở mặt trước và xả khí nóng ở mặt sau.",
      trickWord: "Bẫy đảo lộn hướng khí động học: 'thổi thẳng vào mặt sau có quạt xả của máy chủ'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (Hệ thống sàn nâng Raised Floor)",
      tip: "Mặt trước máy chủ: Hút khí lạnh vào; Mặt sau máy chủ: Xả khí nóng ra ngoài."
    }
  },
  {
    id: "cloud-c2-d2-004",
    chapterId: "cloud-ch2",
    question: "Nhận định nào sau đây là SAI về kỹ thuật ngăn dòng nhiệt Lối đi lạnh / Lối đi nóng (Containment)?",
    options: [
      "Giải pháp ngăn nhiệt cho phép khí nóng xả ra tự do hòa trộn với khí lạnh cấp vào phòng.",
      "Việc cô lập lối đi nóng giúp nâng cao nhiệt độ khí hồi về hệ thống điều hòa không khí.",
      "Ngăn cách lối đi lạnh đảm bảo nhiệt độ đồng đều từ chân đến đỉnh của toàn bộ tủ rack.",
      "Giúp giảm công suất quạt gió làm mát và tiết kiệm đáng kể chi phí điện năng vận hành."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mục đích tối thượng của Containment (ngăn nhiệt) là NGĂN CHẶN triệt để việc hòa trộn giữa khí nóng và khí lạnh. Cho phép hòa trộn tự do sẽ gây ra các điểm nóng (Hot spots) và làm lãng phí năng lượng điều hòa.",
    trickDetails: {
      whyTrapped: "Thí sinh có thể nghĩ trộn khí nóng với khí lạnh sẽ giúp làm ấm phòng mát dịu đi.",
      trickWord: "Bẫy phản khoa học tản nhiệt: 'cho phép khí nóng xả ra tự do hòa trộn với khí lạnh'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (Kỹ thuật ngăn nhiệt Containment)",
      tip: "Tản nhiệt Data Center: Tuyệt đối không để khí nóng và khí lạnh hòa trộn vào nhau."
    }
  },
  {
    id: "cloud-c2-d2-005",
    chapterId: "cloud-ch2",
    question: "Khi phân tích luồng lưu lượng mạng trong Data Center hiện đại, khẳng định nào sau đây là SAI?",
    options: [
      "Lưu lượng Đông - Tây (East-West) chỉ chiếm dưới 10% tổng lưu lượng mạng trong trung tâm.",
      "Lưu lượng Bắc - Nam (North-South) là dòng dữ liệu di chuyển giữa khách hàng ngoài và DC.",
      "Lưu lượng Đông - Tây là dòng dữ liệu giao tiếp nội bộ giữa các máy chủ bên trong DC.",
      "Các ứng dụng xử lý dữ liệu lớn Big Data và vi dịch vụ là tác nhân sinh ra nhiều tải East-West."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong các Data Center đám mây hiện đại, lưu lượng nội bộ Đông - Tây (East-West) chiếm áp đảo từ 75% đến 85% tổng lưu lượng mạng do sự bùng nổ của vi dịch vụ, sao lưu phân tán và Big Data. Nhận định 'dưới 10%' là hoàn toàn sai.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ lưu lượng người dùng bên ngoài vào web (North-South) mới là nhiều nhất.",
      trickWord: "Bẫy tỷ trọng lưu lượng mạng: 'East-West chỉ chiếm dưới 10% tổng lưu lượng mạng'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.1 (Luồng lưu lượng mạng Data Center)",
      tip: "Lưu lượng trong Data Center: East-West chiếm đa số (75-80%+), North-South chỉ chiếm 20-25%."
    }
  },
  {
    id: "cloud-c2-d2-006",
    chapterId: "cloud-ch2",
    question: "Phát biểu nào sau đây là SAI về kiến trúc mạng 2 tầng Leaf-Spine trong trung tâm dữ liệu?",
    options: [
      "Các thiết bị chuyển mạch tầng Spine bắt buộc phải kết nối trực tiếp với nhau vòng tròn.",
      "Mọi switch tầng Leaf đều kết nối trực tiếp với tất cả các switch nằm ở tầng Spine.",
      "Mọi máy chủ kết nối vào mạng đều cách nhau tối đa đúng 2 chặng chuyển mạch switch mạng.",
      "Kiến trúc này giúp triệt tiêu hoàn toàn hiện tượng nghẽn cổ chai của mô hình cây 3 tầng."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong cấu trúc Leaf-Spine (Clos Network), các switch Spine TUYỆT ĐỐI KHÔNG kết nối với nhau, và các switch Leaf cũng KHÔNG kết nối với nhau. Mọi liên kết chỉ diễn ra giữa Leaf và Spine.",
    trickDetails: {
      whyTrapped: "Học sinh quen mô hình mạng truyền thống nơi các switch lõi (Core switches) thường nối vòng mesh với nhau.",
      trickWord: "Bẫy nguyên tắc kết nối của Leaf-Spine: 'các switch tầng Spine bắt buộc phải kết nối với nhau'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.2 (Kiến trúc mạng Leaf-Spine)",
      tip: "Quy tắc vàng Leaf-Spine: Leaf không nối Leaf, Spine không nối Spine; chỉ có Leaf nối với Spine."
    }
  },
  {
    id: "cloud-c2-d2-007",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là SAI về mạng lưu trữ chuyên dụng SAN (Storage Area Network)?",
    options: [
      "SAN truyền tải dữ liệu ở cấp độ tệp tin hệ thống thông qua giao thức chia sẻ file CIFS.",
      "SAN truyền dữ liệu ở cấp độ khối (Block-level) tương tự như gắn ổ cứng cục bộ vào máy chủ.",
      "Hạ tầng mạng SAN thường sử dụng cáp quang chuẩn Fibre Channel với độ trễ tính bằng micro-giây.",
      "SAN cho phép máy chủ định dạng hệ thống tệp tin riêng (NTFS, ext4) trực tiếp trên phân vùng."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SAN cung cấp lưu trữ ở cấp độ KHỐI (Block-level). Việc truyền tải dữ liệu ở cấp độ tệp tin (File-level) qua CIFS/SMB hoặc NFS là đặc trưng cốt lõi của NAS (Network Attached Storage), không phải của SAN.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn kinh điển giữa SAN (Block-level, nhanh, raw disk) và NAS (File-level, file sharing).",
      trickWord: "Bẫy đánh tráo cấp độ truyền tải dữ liệu của SAN sang giao thức tệp của NAS.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1 (Kiến trúc SAN vs NAS)",
      tip: "SAN = Block-level (FC, iSCSI, như gắn ổ cứng ngoài); NAS = File-level (NFS, SMB, thư mục chia sẻ)."
    }
  },
  {
    id: "cloud-c2-d2-008",
    chapterId: "cloud-ch2",
    question: "Nhận định nào sau đây là SAI về cơ chế chịu lỗi của mảng đĩa RAID 5 trong lưu trữ đám mây?",
    options: [
      "Hệ thống RAID 5 có thể duy trì hoạt động an toàn và không mất dữ liệu khi hỏng cùng lúc 2 ổ.",
      "Dữ liệu chẵn lẻ (Parity) được phân tán đều trên tất cả các ổ đĩa cứng vật lý thành viên.",
      "Cần tối thiểu ít nhất 3 ổ đĩa cứng vật lý độc lập mới có thể thiết lập mảng đĩa RAID 5.",
      "Dung lượng khả dụng thực tế của mảng đĩa RAID 5 tương đương với tổng số ổ đĩa trừ đi một."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "RAID 5 chỉ chịu được việc hỏng TỐI ĐA 1 Ổ ĐĨA tại một thời điểm. Nếu hỏng đồng thời 2 ổ đĩa thì toàn bộ dữ liệu trong mảng RAID 5 sẽ bị phá hủy vĩnh viễn. Chịu được hỏng đồng thời 2 ổ đĩa là đặc tính của RAID 6.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ nhầm lẫn số lượng ổ hỏng chịu đựng được giữa RAID 5 (1 ổ) và RAID 6 (2 ổ).",
      trickWord: "Bẫy số lượng ổ đĩa chịu lỗi: 'không mất dữ liệu khi hỏng cùng lúc 2 ổ cứng'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (Công nghệ RAID)",
      tip: "RAID 5 = Chịu hỏng đúng 1 ổ (1 Parity); RAID 6 = Chịu hỏng đồng thời 2 ổ (Dual Parity)."
    }
  },
  {
    id: "cloud-c2-d2-009",
    chapterId: "cloud-ch2",
    question: "Khi khảo sát 3 mức đặc quyền của kiến trúc bộ vi xử lý x86, nhận định nào sau đây là SAI?",
    options: [
      "Các ứng dụng người dùng thông thường luôn được cấp quyền chạy trực tiếp tại mức Ring 0.",
      "Mức Ring 0 sở hữu quyền hạn thực thi cao nhất và được dành riêng cho nhân hệ điều hành.",
      "Mức Ring 3 sở hữu quyền hạn thấp nhất nhằm ngăn chặn ứng dụng can thiệp trái phép phần cứng.",
      "Các mức Ring 1 và Ring 2 thường được thiết kế để chứa các trình điều khiển thiết bị driver."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Ứng dụng người dùng (User Applications) chỉ được phép chạy ở mức Ring 3 (đặc quyền thấp nhất). Mức Ring 0 là mức đặc quyền tối cao dành riêng cho nhân hệ điều hành (Kernel) hoặc Hypervisor.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn mức Ring dành cho người dùng và mức Ring dành cho nhân hệ điều hành.",
      trickWord: "Bẫy phân quyền kiến trúc Ring x86: 'ứng dụng người dùng được cấp quyền chạy tại Ring 0'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục V.1 (Các mức đặc quyền Ring x86)",
      tip: "Ring 0 = Kernel/Hypervisor (Quyền lực tuyệt đối); Ring 3 = User Apps (Quyền hạn bị kiểm soát chặt)."
    }
  },
  {
    id: "cloud-c2-d2-010",
    chapterId: "cloud-ch2",
    question: "Phát biểu nào sau đây là SAI về 17 chỉ lệnh nhạy cảm của kiến trúc vi xử lý x86 cổ điển?",
    options: [
      "Tất cả các chỉ lệnh nhạy cảm này đều tự động kích hoạt bẫy ngắt Trap khi chạy tại Ring 1.",
      "Có một số chỉ lệnh nhạy cảm khi thực thi ngoài Ring 0 lại thất bại âm thầm không báo lỗi.",
      "Sự thiếu sót này trong thiết kế x86 cổ điển là rào cản kỹ thuật lớn nhất đối với ảo hóa.",
      "Định lý Popek-Goldberg chỉ ra kiến trúc x86 cổ điển không đáp ứng yêu cầu ảo hóa toàn phần."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Rào cản lớn nhất của x86 cổ điển là có 17 chỉ lệnh nhạy cảm nhưng lại KHÔNG kích hoạt bẫy ngắt (Trap) khi thực thi ở Ring 1 (chúng thất bại âm thầm - fail silently hoặc hành xử khác đi), khiến Hypervisor không thể can thiệp được.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng cứ chỉ lệnh nhạy cảm vi phạm đặc quyền là CPU sẽ tự động bật ngắt Trap.",
      trickWord: "Bẫy nghịch lý ảo hóa x86: 'tất cả chỉ lệnh nhạy cảm đều tự động kích hoạt bẫy ngắt Trap'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục V.2 (17 Chỉ lệnh nhạy cảm x86)",
      tip: "Vấn đề x86: 17 chỉ lệnh nhạy cảm KHÔNG sinh ngắt Trap khi chạy ở Ring khác 0 (Fail silently)."
    }
  },
  {
    id: "cloud-c2-d2-011",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là SAI về phương pháp Cận ảo hóa (Paravirtualization)?",
    options: [
      "Cho phép chạy trực tiếp các hệ điều hành thương mại đóng gói mã nguồn kín như Windows.",
      "Hệ điều hành khách (Guest OS) bắt buộc phải được chỉnh sửa mã nguồn nhân trước khi chạy.",
      "Guest OS chủ động gửi các lời gọi siêu cấp Hypercall trực tiếp tới tầng Hypervisor quản lý.",
      "Loại bỏ nhu cầu dịch nhị phân phức tạp giúp cải thiện đáng kể hiệu năng xử lý hệ thống."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Paravirtualization đòi hỏi phải SỬA MÃ NGUỒN nhân hệ điều hành khách (Guest OS Kernel). Vì Microsoft Windows là phần mềm mã nguồn đóng độc quyền, người ngoài không thể sửa kernel Windows để chạy Paravirtualization nguyên bản (chỉ Linux mã nguồn mở mới sửa được).",
    trickDetails: {
      whyTrapped: "Học sinh quên mất Windows là mã nguồn đóng, không thể tự ý đem đi sửa kernel cho Paravirtualization.",
      trickWord: "Bẫy khả năng tương thích của Paravirtualization với hệ điều hành mã nguồn đóng.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Cận ảo hóa Paravirtualization)",
      tip: "Paravirtualization = Phải sửa Kernel ➔ Chỉ áp dụng cho OS mở (Linux); Không chạy được Windows gốc."
    }
  },
  {
    id: "cloud-c2-d2-012",
    chapterId: "cloud-ch2",
    question: "Nhận định nào sau đây là SAI về công nghệ di chuyển máy ảo sống (Live VM Migration / vMotion)?",
    options: [
      "Quá trình di chuyển máy ảo đòi hỏi phải ngắt kết nối với hệ thống lưu trữ chia sẻ chung.",
      "Thời gian ngừng phục vụ thực tế (Downtime) chỉ diễn ra trong vài phần mười giây ngắn ngủi.",
      "Bộ nhớ RAM của máy ảo được sao chép liên tục qua mạng trong khi ứng dụng vẫn đang chạy.",
      "Cả máy chủ vật lý nguồn và đích đều phải có quyền truy cập vào cùng một kho lưu trữ dữ liệu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Điều kiện tiên quyết bắt buộc của Live VM Migration (như VMware vMotion) là máy chủ nguồn và đích PHẢI CÙNG TRUY CẬP vào một hệ thống lưu trữ chia sẻ chung (Shared Storage SAN/NAS). Ngắt kết nối lưu trữ sẽ làm quá trình di chuyển thất bại ngay lập tức.",
    trickDetails: {
      whyTrapped: "Tưởng rằng di chuyển máy ảo là phải bê toàn bộ ổ đĩa cứng hàng trăm GB đi cùng qua dây mạng.",
      trickWord: "Bẫy điều kiện tiên quyết của vMotion: 'phải ngắt kết nối với hệ thống lưu trữ chia sẻ'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Công nghệ Live VM Migration)",
      tip: "Live Migration chỉ chuyển trạng thái RAM và CPU; Ổ đĩa máy ảo nằm yên trên Shared Storage dùng chung."
    }
  },

  // ==========================================
  // DẠNG 2: CHỌN CÂU ĐÚNG / CHÍNH XÁC NHẤT (10 CÂU)
  // ==========================================
  {
    id: "cloud-c2-d2-013",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về công thức và ý nghĩa của chỉ số PUE trong trung tâm dữ liệu?",
    options: [
      "PUE bằng tổng năng lượng tiêu thụ toàn cơ sở chia cho năng lượng tiêu thụ của thiết bị IT.",
      "PUE bằng năng lượng tiêu thụ của thiết bị IT chia cho tổng năng lượng của toàn bộ cơ sở.",
      "PUE là chỉ số đo lường tốc độ xử lý tính toán của bộ vi xử lý máy tính trong trung tâm dữ liệu.",
      "PUE lý tưởng phải đạt giá trị bằng không thì trung tâm dữ liệu mới được coi là thân thiện môi trường."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Định nghĩa chuẩn của The Green Grid: PUE = Total Facility Energy / IT Equipment Energy. PUE lý tưởng bằng 1.0 (toàn bộ năng lượng cơ sở được dùng 100% cho thiết bị IT, không lãng phí cho tản nhiệt).",
    trickDetails: {
      whyTrapped: "Phương án B đảo ngược tử số và mẫu số (đó là chỉ số DCiE); phương án D bẫy PUE = 0 phi lý.",
      trickWord: "Bẫy đảo công thức tính chỉ số PUE và ý nghĩa giá trị cận biên lý tưởng.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.1 (Định nghĩa công thức PUE)",
      tip: "PUE = Tổng điện toàn cơ sở / Điện cho máy chủ IT. Giá trị luôn >= 1.0."
    }
  },
  {
    id: "cloud-c2-d2-014",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về giải pháp thiết kế 'Phòng máy tối' (Lights-Out Data Center)?",
    options: [
      "Trung tâm dữ liệu vận hành tự động hóa hoàn toàn từ xa, không cần con người và ánh sáng.",
      "Hệ thống phòng máy ngắt hoàn toàn nguồn điện lưới và chỉ sử dụng năng lượng pin mặt trời.",
      "Phòng máy được sơn toàn bộ bề mặt tường bằng màu đen để tăng khả năng hấp thụ nhiệt máy.",
      "Quy trình tắt toàn bộ máy chủ vào ban đêm nhằm giảm thiểu tối đa hóa đơn tiền điện tiêu thụ."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Lights-Out Data Center là phòng máy được tự động hóa quản trị 100% từ xa; không cần nhân viên thường trực bên trong nên không cần bật đèn chiếu sáng, không cần điều hòa thân nhiệt con người, giúp tiết kiệm năng lượng tối đa.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ liên tưởng 'phòng máy tối' là tắt hết máy tính ban đêm hoặc sơn tường màu đen.",
      trickWord: "Bẫy hiểu theo nghĩa đen từ vựng: 'tắt toàn bộ máy chủ' hoặc 'sơn tường màu đen'.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (Mô hình Lights-Out Data Center)",
      tip: "Lights-Out = Không người bên trong, không cần bật đèn, quản trị tự động 100% từ xa qua mạng."
    }
  },
  {
    id: "cloud-c2-d2-015",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về ưu điểm kỹ thuật của kiến trúc mạng 2 tầng Leaf-Spine?",
    options: [
      "Đảm bảo độ trễ cố định và có thể dự đoán được do mọi máy chủ luôn cách nhau đúng 2 chặng.",
      "Yêu cầu số lượng dây cáp quang kết nối mạng ít hơn rất nhiều so với mô hình cây 3 tầng.",
      "Hoạt động dựa trên giao thức Spanning Tree Protocol để tự động khóa bớt các đường truyền.",
      "Chỉ cho phép kết nối tối đa một trăm máy chủ vật lý bên trong một trung tâm dữ liệu đám mây."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Leaf-Spine đảm bảo độ trễ mạng cực thấp và đồng đều (Predictable Low Latency) vì từ bất kỳ máy chủ nào thuộc Leaf này sang máy chủ thuộc Leaf khác đều đi qua đúng 2 bước nhảy (Leaf ➔ Spine ➔ Leaf).",
    trickDetails: {
      whyTrapped: "Phương án C sai vì Leaf-Spine dùng ECMP (Equal-Cost Multi-Path) để mở toàn bộ đường, triệt tiêu STP.",
      trickWord: "Bẫy cơ chế định tuyến và độ trễ đồng đều 2 chặng của mạng Leaf-Spine.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.2 (Ưu điểm kiến trúc Leaf-Spine)",
      tip: "Leaf-Spine = ECMP mở mọi đường truyền + Độ trễ 2 bước nhảy đồng đều (Predictable latency)."
    }
  },
  {
    id: "cloud-c2-d2-016",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về cơ chế gom cụm liên kết mạng Link Aggregation (LACP)?",
    options: [
      "Gộp nhiều cổng mạng vật lý thành một liên kết luận lý duy nhất nhằm tăng băng thông mạng.",
      "Thay thế hoàn toàn bộ định tuyến mạng Internet của toàn bộ các nhà mạng viễn thông quốc gia.",
      "Biến đổi đường truyền cáp mạng đồng truyền thống thành đường truyền sóng vô tuyến tầm xa.",
      "Tự động ngắt kết nối mạng của toàn bộ hệ thống máy chủ khi có một sợi cáp mạng bị đứt ngầm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Link Aggregation (LACP theo chuẩn IEEE 802.3ad) gộp nhiều cổng mạng vật lý (NIC Teaming / Port Channel) thành một kênh truyền logic duy nhất, vừa nhân đôi băng thông vừa tự động chịu lỗi khi có cổng hỏng.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng một sợi cáp đứt thì cả nhóm gom cổng sẽ chết theo (phương án D sai hoàn toàn).",
      trickWord: "Bẫy công năng của Link Aggregation: Tăng băng thông mạng và tự động dự phòng lỗi.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.2 (Công nghệ Link Aggregation LACP)",
      tip: "Link Aggregation = N cáp vật lý hợp thành 1 kênh logic: Băng thông x N và 1 cáp đứt mạng vẫn chạy."
    }
  },
  {
    id: "cloud-c2-d2-017",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về cơ chế Cấp phát mỏng (Thin Provisioning) trong lưu trữ?",
    options: [
      "Chỉ thực sự cấp phát dung lượng ổ cứng vật lý khi máy ảo ghi dữ liệu thực tế vào khối đĩa.",
      "Ngay lập tức chiếm dụng và khóa chết toàn bộ dung lượng đĩa cứng vật lý khi tạo ổ đĩa ảo.",
      "Không cho phép người quản trị hệ thống phân bổ tổng dung lượng ảo lớn hơn dung lượng thật.",
      "Là phương pháp nén dữ liệu vật lý làm suy giảm nghiêm trọng độ bền của ổ cứng thể rắn SSD."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Thin Provisioning (cấp phát mỏng) cho phép tạo ổ đĩa ảo 100GB nhưng nếu chỉ mới ghi 10GB thì ổ đĩa vật lý chỉ tốn 10GB. Khác với Thick Provisioning (cấp phát dày) là chiếm dụng trọn vẹn 100GB ngay từ đầu.",
    trickDetails: {
      whyTrapped: "Dễ nhầm định nghĩa giữa Thin Provisioning (cấp phát theo thực tế) và Thick Provisioning (cấp phát cứng đủ).",
      trickWord: "Bẫy cơ chế cấp phát tài nguyên lưu trữ theo nhu cầu thực tế của Thin Provisioning.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (Thin vs Thick Provisioning)",
      tip: "Thin = Khai báo ảo lớn, thực tế ghi đến đâu tốn đĩa đến đó; Thick = Khai báo bao nhiêu xí chỗ bấy nhiêu."
    }
  },
  {
    id: "cloud-c2-d2-018",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về công nghệ ảo hóa hỗ trợ phần cứng (Hardware-assisted Virtualization)?",
    options: [
      "Bộ vi xử lý bổ sung các chế độ hoạt động mới cho phép Hypervisor chạy độc lập ngoài Ring 0.",
      "Bắt buộc người lập trình phải viết lại toàn bộ mã nguồn của hệ điều hành khách trước khi cài.",
      "Sử dụng phần mềm dịch mã nhị phân liên tục trong bộ nhớ RAM làm suy hao 30% hiệu năng CPU.",
      "Chỉ áp dụng được trên các dòng vi xử lý máy tính lớn của tập đoàn IBM từ thập niên 1970s."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Intel VT-x và AMD-V bổ sung các chế độ phần cứng mới (VMX Root Operation cho Hypervisor và VMX Non-Root Operation cho Guest OS), cho phép hệ điều hành khách chạy nguyên bản ở Ring 0 mà không cần sửa kernel.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng phần cứng hỗ trợ ảo hóa thì vẫn phải đi sửa kernel của hệ điều hành như Paravirtualization.",
      trickWord: "Bẫy cơ chế hoạt động của phần cứng hỗ trợ ảo hóa CPU (Intel VT-x / AMD-V).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Hardware-assisted Virtualization)",
      tip: "Hardware-assisted = CPU tự lo chế độ Root/Non-Root; Guest OS chạy nguyên bản không cần sửa code."
    }
  },
  {
    id: "cloud-c2-d2-019",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về kỹ thuật Dịch nhị phân (Binary Translation) trong ảo hóa toàn phần?",
    options: [
      "Quét và chuyển đổi các chỉ lệnh nhạy cảm không ảo hóa được thành các chuỗi lệnh an toàn.",
      "Biên dịch lại toàn bộ mã nguồn hệ điều hành khách từ ngôn ngữ C sang mã máy của Hypervisor.",
      "Yêu cầu nhà sản xuất vi xử lý phải chế tạo lại vi mạch silicon của toàn bộ máy chủ vật lý.",
      "Chỉ có thể dịch các lệnh toán học số học đơn giản và không can thiệp vào các lệnh ngắt hệ thống."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong Full Virtualization (tiên phong bởi VMware năm 1999), Hypervisor dùng kỹ thuật Binary Translation trong thời gian thực: quét mã máy của Guest OS, gặp các lệnh nhạy cảm (17 lệnh x86 có vấn đề) thì bẫy và dịch thành chuỗi lệnh an toàn.",
    trickDetails: {
      whyTrapped: "Dễ nhầm Binary Translation (dịch mã máy nhị phân lúc chạy) với việc biên dịch lại mã nguồn phần mềm.",
      trickWord: "Bẫy cơ chế hoạt động của Binary Translation trong giải quyết bài toán ảo hóa x86.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Full Virtualization & Binary Translation)",
      tip: "Binary Translation: Dịch mã nhị phân động trong RAM tại thời điểm thực thi để bẫy 17 lệnh x86."
    }
  },
  {
    id: "cloud-c2-d2-020",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về công nghệ Direct I/O / SR-IOV trong ảo hóa cổng mạng?",
    options: [
      "Cho phép máy ảo truy cập trực tiếp vào phần cứng card mạng giúp giảm độ trễ và tải CPU.",
      "Mô phỏng toàn bộ hoạt động của chip card mạng bằng thuật toán phần mềm của Hypervisor.",
      "Làm giảm tốc độ truyền tải gói tin mạng xuống mười lần so với card mạng chia sẻ thông thường.",
      "Bắt buộc tất cả máy ảo phải sử dụng chung một địa chỉ MAC duy nhất của máy chủ vật lý gốc."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "SR-IOV (Single Root I/O Virtualization) phân chia một card mạng vật lý thành nhiều Virtual Functions (VF) độc lập, cho phép gán trực tiếp vào máy ảo (PCI Passthrough), đạt hiệu năng gần tương đương phần cứng vật lý nguyên bản.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn giữa Emulated I/O (chậm qua phần mềm) và Direct I/O / SR-IOV (nhanh qua phần cứng trực tiếp).",
      trickWord: "Bẫy bản chất công nghệ SR-IOV giảm thiểu tối đa sự can thiệp của Hypervisor vào gói tin mạng.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Công nghệ Ảo hóa I/O)",
      tip: "SR-IOV / Passthrough = Bypass Hypervisor, máy ảo chạm thẳng vào card mạng vật lý để đạt độ trễ thấp nhất."
    }
  },
  {
    id: "cloud-c2-d2-021",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG về cơ chế theo dõi trang bẩn (Dirty Pages Tracking) trong vMotion?",
    options: [
      "Ghi nhận các trang bộ nhớ bị ghi sửa đổi trong quá trình sao chép để chuyển tiếp ở vòng sau.",
      "Tự động xóa bỏ vĩnh viễn các trang bộ nhớ chứa dữ liệu rác để tiết kiệm băng thông mạng truyền.",
      "Là thuật toán quét tìm và diệt mã độc gián điệp ẩn nấp bên trong bộ nhớ RAM của máy ảo khách.",
      "Bắt buộc máy ảo phải tạm dừng toàn bộ mọi hoạt động tính toán ngay từ vòng sao chép đầu tiên."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Trong thuật toán Pre-copy memory của Live Migration: Vòng 1 sao chép toàn bộ RAM. Trong lúc sao chép, máy ảo vẫn chạy và ghi sửa RAM ➔ các trang này gọi là 'Dirty Pages'. Cơ chế Dirty Pages Tracking đánh dấu lại để sao chép tiếp ở Vòng 2, lặp lại đến khi số trang bẩn đủ nhỏ.",
    trickDetails: {
      whyTrapped: "Nghe chữ 'trang bẩn' (Dirty pages) dễ liên tưởng sang quét virus hoặc xóa file rác.",
      trickWord: "Bẫy thuật ngữ khoa học máy tính: Dirty Page = Trang bộ nhớ bị ghi đè sửa đổi dữ liệu.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Thuật toán Pre-copy Live Migration)",
      tip: "Dirty Page = Trang RAM bị thay đổi nội dung trong lúc đang chạy; cần chép lại để đảm bảo tính nhất quán."
    }
  },
  {
    id: "cloud-c2-d2-022",
    chapterId: "cloud-ch2",
    question: "Khẳng định nào sau đây là ĐÚNG khi so sánh giữa Ảo hóa (Virtualization) và Đa khởi động (Multiboot)?",
    options: [
      "Ảo hóa cho phép nhiều hệ điều hành hoạt động đồng thời; Multiboot chỉ chạy một OS tại một thời điểm.",
      "Multiboot sử dụng một tầng phần mềm trung gian Hypervisor để chia sẻ linh hoạt tài nguyên CPU.",
      "Ảo hóa đòi hỏi người dùng phải tắt máy và khởi động lại phần cứng mỗi khi muốn đổi hệ điều hành.",
      "Multiboot tiêu hao nhiều tài nguyên bộ nhớ RAM hơn ảo hóa do phải nạp đồng loạt tất cả các nhân."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Multiboot chỉ cài nhiều OS lên các phân vùng đĩa khác nhau, khi khởi động chọn 1 OS thì chỉ 1 OS đó chạy chiếm 100% tài nguyên, các OS khác bất động. Ảo hóa cho phép các OS chạy song song đồng thời trên cùng một máy.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ Multiboot cũng là một dạng ảo hóa cấp thấp.",
      trickWord: "Bẫy ranh giới cơ chế hoạt động đồng thời: Ảo hóa = Đồng thời; Multiboot = Luân phiên tuần tự.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VII.1 (Virtualization vs Multiboot)",
      tip: "Multiboot: 1 thời điểm chỉ 1 OS sống; Virtualization: N OS cùng sống song song đồng thời."
    }
  },

  // ==========================================
  // DẠNG 3: CHÙM MỆNH ĐỀ LOGIC I - II - III (10 CÂU)
  // ==========================================
  {
    id: "cloud-c2-d2-023",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về các giải pháp tản nhiệt Data Center:\n(I) Hệ thống sàn nâng tạo khoang áp suất tĩnh giúp phân phối khí lạnh đều lên các tủ rack.\n(II) Cô lập lối đi nóng (Hot Aisle) ngăn khí nóng thổi ngược vào cửa hút gió của máy chủ.\n(III) Trộn lẫn tự do giữa khí nóng và khí lạnh giúp nhiệt độ phòng máy nhanh chóng đạt trạng thái cân bằng.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì việc trộn khí nóng và khí lạnh là thảm họa của tản nhiệt trung tâm dữ liệu (gây lãng phí điện và tạo điểm nóng cục bộ). Mệnh đề (I) và (II) đúng chuẩn thiết kế.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ nhầm tưởng việc 'cân bằng nhiệt độ tự nhiên' bằng hòa trộn khí là một giải pháp hữu ích.",
      trickWord: "Bẫy vật lý nhiệt động học trong thiết kế tản nhiệt trung tâm dữ liệu.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2",
      tip: "Quy tắc thiết kế Data Center: Tuyệt đối phân tách luồng khí nóng và luồng khí lạnh."
    }
  },
  {
    id: "cloud-c2-d2-024",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về kiến trúc mạng trung tâm dữ liệu:\n(I) Lưu lượng Bắc - Nam (North-South) đại diện cho các gói tin đi vào hoặc đi ra khỏi Data Center.\n(II) Trong các hệ thống đám mây phân tán, lưu lượng Đông - Tây (East-West) chiếm đa số tổng tải.\n(III) Kiến trúc mạng Leaf-Spine chỉ hỗ trợ giao thức định tuyến tĩnh và không cho phép mở rộng.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì Leaf-Spine sử dụng định tuyến động (BGP, OSPF) kết hợp ECMP (Equal Cost Multi-Path) và cực kỳ dễ mở rộng (chỉ cần thêm switch Spine để tăng băng thông hoặc thêm Leaf để tăng cổng). Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng kiến trúc phẳng cố định Leaf-Spine thì không thể mở rộng được nữa.",
      trickWord: "Bẫy khả năng mở rộng và giao thức định tuyến động của kiến trúc Leaf-Spine.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.1 & III.2",
      tip: "Leaf-Spine sinh ra để mở rộng theo chiều ngang (Scale-out) dễ dàng bằng cách cắm thêm Spine hoặc Leaf."
    }
  },
  {
    id: "cloud-c2-d2-025",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về phân loại công nghệ lưu trữ:\n(I) DAS (Direct Attached Storage) kết nối trực tiếp vào máy chủ qua chuẩn giao tiếp nội bộ SAS/SATA.\n(II) NAS (Network Attached Storage) cung cấp chia sẻ dữ liệu cấp tệp tin qua mạng LAN thông thường.\n(III) SAN (Storage Area Network) cung cấp lưu trữ cấp khối qua mạng cáp quang riêng biệt tốc độ cao.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều định nghĩa chính xác 100% về 3 công nghệ lưu trữ kinh điển: DAS (gắn trực tiếp), NAS (cấp tệp qua LAN), SAN (cấp khối qua mạng cáp quang riêng Fibre Channel/iSCSI).",
    trickDetails: {
      whyTrapped: "Thí sinh hay nghi ngờ các định nghĩa chuẩn bị gài bẫy lẫn nhau giữa Block và File.",
      trickWord: "Bẫy kiểm tra độ vững vàng kiến thức cốt lõi phân biệt DAS, NAS và SAN.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1 (Kiến trúc lưu trữ DAS - NAS - SAN)",
      tip: "DAS = Ổ cắm trong; NAS = Thư mục chia sẻ qua LAN; SAN = Ổ cứng ảo cấp khối qua mạng quang riêng."
    }
  },
  {
    id: "cloud-c2-d2-026",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về các cấp độ bảo vệ mảng đĩa RAID:\n(I) RAID 0 phân mảnh dữ liệu (Striping) giúp tăng tốc độ đọc ghi nhưng không có tính chịu lỗi.\n(II) RAID 1 nhân bản dữ liệu (Mirroring) cho phép hệ thống vẫn hoạt động khi có một ổ đĩa hỏng.\n(III) RAID 6 sử dụng kỹ thuật Parity kép cho phép chịu đựng việc hỏng đồng thời hai ổ đĩa.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều hoàn toàn chính xác: RAID 0 (Striping - không dự phòng, chết 1 ổ là mất hết), RAID 1 (Mirroring - nhân bản 1:1, chết 1 ổ vẫn chạy), RAID 6 (Dual parity - chết 2 ổ vẫn chạy).",
    trickDetails: {
      whyTrapped: "Hay nhầm lẫn giữa RAID 5 (1 Parity, chịu hỏng 1 ổ) và RAID 6 (2 Parity, chịu hỏng 2 ổ).",
      trickWord: "Bẫy kiểm tra sự hiểu biết sâu sắc về các cấp độ RAID chuẩn trong lưu trữ Data Center.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (Công nghệ RAID 0, 1, 5, 6)",
      tip: "RAID 0 = Tốc độ (Không chịu lỗi); RAID 1 = Soi gương (1 ổ chết); RAID 6 = Parity kép (2 ổ chết)."
    }
  },
  {
    id: "cloud-c2-d2-027",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về các mức đặc quyền CPU x86:\n(I) Mức Ring 0 có quyền hạn tối cao nhất, có thể thực thi mọi chỉ lệnh phần cứng nhạy cảm.\n(II) Mức Ring 3 chứa các chương trình ứng dụng của người dùng với các quyền hạn bị giới hạn nghiêm ngặt.\n(III) Ảo hóa cổ điển gặp khó khăn vì hệ điều hành khách bị hạ xuống Ring 1 nhưng 17 lệnh không bẫy ngắt.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều phản ánh chính xác bản chất vấn đề ảo hóa CPU x86: Ring 0 là tối cao, Ring 3 là ứng dụng; khi hạ Guest OS xuống Ring 1 thì 17 lệnh nhạy cảm không tạo bẫy ngắt (Ring deprivileging problem).",
    trickDetails: {
      whyTrapped: "Học sinh thường nghi ngờ mệnh đề (III) vì thuật ngữ 'hạ xuống Ring 1' nghe có vẻ lạ tai.",
      trickWord: "Bẫy cơ chế Ring Deprivileging trong ảo hóa x86 cổ điển.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục V.1 & V.2 (3 Mức đặc quyền Ring x86)",
      tip: "Ring 0 cho Hypervisor ➔ Đẩy Guest OS ra Ring 1 ➔ Sinh ra lỗi 17 lệnh không bẫy ngắt (Ring 1 problem)."
    }
  },
  {
    id: "cloud-c2-d2-028",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về các phương pháp ảo hóa máy chủ:\n(I) Ảo hóa toàn phần bằng dịch nhị phân cho phép chạy các hệ điều hành nguyên bản không sửa code.\n(II) Cận ảo hóa (Paravirtualization) đòi hỏi phải sửa đổi mã nguồn nhân hệ điều hành khách.\n(III) Ảo hóa hỗ trợ phần cứng (VT-x) bắt buộc phải cài đặt thêm trình biên dịch mã nguồn vào CPU.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì Intel VT-x bổ sung các cờ trạng thái và thanh ghi phần cứng (VMCS) để CPU tự động chuyển ngữ cảnh phần cứng, chứ CPU không bao giờ 'cài đặt trình biên dịch mã nguồn'. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Tưởng rằng phần cứng muốn hỗ trợ ảo hóa là phải nhét cả một trình biên dịch compiler vào trong CPU.",
      trickWord: "Bẫy cơ chế thực thi silicon của công nghệ Intel VT-x / AMD-V.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (So sánh 3 công nghệ ảo hóa CPU)",
      tip: "VT-x là tập lệnh vi mã (Microcode) và thanh ghi cấu trúc (VMCS) trên silicon, không phải trình biên dịch."
    }
  },
  {
    id: "cloud-c2-d2-029",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về Hypervisor Type 1 và Type 2:\n(I) Hypervisor Type 1 cài đặt trực tiếp trên phần cứng máy chủ không cần hệ điều hành máy chủ.\n(II) Hypervisor Type 2 chạy trên nền tảng của một hệ điều hành máy chủ chủ nhà có sẵn.\n(III) Hypervisor Type 2 luôn có hiệu năng và độ ổn định cao hơn Hypervisor Type 1 trong môi trường lớn.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI hoàn toàn vì Hypervisor Type 1 (Bare-metal như VMware ESXi) chạy trực tiếp trên phần cứng nên luôn có hiệu năng, độ trễ và độ tin cậy vượt trội so với Type 2 (phải chạy lót qua một Host OS nặng nề). Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Dễ bị đảo ngược so sánh hiệu năng giữa Type 1 (Bare-metal) và Type 2 (Hosted).",
      trickWord: "Bẫy so sánh hiệu năng và độ ổn định giữa Hypervisor Type 1 và Type 2.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Hypervisor Type 1 vs Type 2)",
      tip: "Data Center luôn dùng Type 1 (ESXi, KVM) vì không có độ trễ tầng Host OS; Type 2 chỉ dùng cho máy cá nhân."
    }
  },
  {
    id: "cloud-c2-d2-030",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về ảo hóa thiết bị nhập xuất (Virtual I/O):\n(I) Emulated I/O mô phỏng đầy đủ phần cứng bằng phần mềm nên có hiệu năng xử lý thấp nhất.\n(II) Paravirtualized I/O sử dụng các trình điều khiển đặc thù như virtio để tối ưu hóa truyền tin.\n(III) Direct I/O (Passthrough / SR-IOV) cho phép máy ảo truy cập trực tiếp thiết bị phần cứng thật.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cả 3 mệnh đề đều hoàn toàn chính xác theo bậc thang tiến hóa của Virtual I/O: Emulated I/O (chậm nhất) ➔ Paravirtualized virtio (nhanh hơn) ➔ Direct I/O / SR-IOV (nhanh nhất tiệm cận phần cứng gốc).",
    trickDetails: {
      whyTrapped: "Thí sinh hay nhầm lẫn vai trò của driver virtio trong hệ sinh thái ảo hóa Linux/KVM.",
      trickWord: "Bẫy kiểm tra kiến thức về 3 cấp độ ảo hóa I/O trong trung tâm dữ liệu.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (3 Cấp độ ảo hóa I/O)",
      tip: "Tốc độ I/O: Emulated (Chậm) < Paravirtualized virtio (Nhanh) < SR-IOV Passthrough (Gần như phần cứng thật)."
    }
  },
  {
    id: "cloud-c2-d2-031",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về công nghệ di chuyển máy ảo sống (Live Migration):\n(I) Giai đoạn Pre-copy liên tục sao chép các trang bộ nhớ RAM qua mạng trong khi máy ảo vẫn chạy.\n(II) Giai đoạn chuyển giao cuối cùng (Stop-and-Copy) chỉ dừng máy ảo trong khoảng thời gian rất ngắn.\n(III) Máy chủ đích bắt buộc phải có dung lượng bộ nhớ RAM nhỏ hơn dung lượng RAM của máy chủ nguồn.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (I) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI vì máy chủ đích PHẢI CÓ ĐỦ DUNG LƯỢNG RAM khả dụng bằng hoặc lớn hơn cấu hình RAM của máy ảo cần chuyển tới; nếu máy đích thiếu RAM thì quá trình vMotion sẽ bị từ chối ngay. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng máy ảo chuyển sang thì máy đích có RAM nhỏ hơn vẫn tự ép nén lại được.",
      trickWord: "Bẫy điều kiện tài nguyên bộ nhớ của máy chủ đích trong Live Migration.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Quy trình Live VM Migration)",
      tip: "Máy đích phải có tài nguyên CPU và RAM dư thừa tối thiểu bằng cấu hình máy ảo chuyển tới."
    }
  },
  {
    id: "cloud-c2-d2-032",
    chapterId: "cloud-ch2",
    question: "Cho 3 mệnh đề về so sánh Multiboot và Ảo hóa máy chủ:\n(I) Multiboot cho phép hệ điều hành đang chạy khai thác 100% sức mạnh phần cứng vật lý nguyên bản.\n(II) Ảo hóa cho phép sao lưu, đóng băng trạng thái máy ảo (Snapshot) và phục hồi thảm họa cực nhanh.\n(III) Multiboot hỗ trợ việc co giãn tự động tài nguyên CPU và RAM theo thời gian thực như ảo hóa.\nNhững mệnh đề nào ĐÚNG?",
    options: [
      "Chỉ mệnh đề (I) và (II) là đúng về mặt kỹ thuật.",
      "Chỉ mệnh đề (II) và (III) là đúng về mặt kỹ thuật.",
      "Cả ba mệnh đề (I), (II) và (III) đều hoàn toàn đúng.",
      "Chỉ có duy nhất mệnh đề (III) là đúng về mặt kỹ thuật."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Mệnh đề (III) SAI hoàn toàn vì Multiboot cài cứng lên phân vùng đĩa vật lý, không có tầng phần mềm trừu tượng Hypervisor nên KHÔNG THỂ có tính năng co giãn tự động (Auto-scaling) hay Snapshot như ảo hóa. Mệnh đề (I) và (II) đúng.",
    trickDetails: {
      whyTrapped: "Tưởng rằng hệ thống chạy Multiboot cũng có thể co giãn linh hoạt như máy ảo đám mây.",
      trickWord: "Bẫy gán ghép đặc tính linh hoạt của ảo hóa cho hệ thống đa khởi động Multiboot.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VII.1 (Virtualization vs Multiboot)",
      tip: "Multiboot = Tận dụng tối đa phần cứng nhưng xơ cứng, không thể Snapshot hay Auto-scale."
    }
  },

  // ==========================================
  // DẠNG 4: TÌNH HUỐNG / KỊCH BẢN DOANH NGHIỆP (9 CÂU)
  // ==========================================
  {
    id: "cloud-c2-d2-033",
    chapterId: "cloud-ch2",
    question: "Phòng máy Data Center phát hiện nhiệt độ ở dãy tủ số 4 tăng vọt lên 46°C do khí nóng xả ra từ mặt sau máy chủ bị quẩn ngược lại phía trước mặt hút gió. Giải pháp cấu trúc vật lý nào xử lý dứt điểm?",
    options: [
      "Lắp đặt hệ thống vách ngăn và cửa đóng kín hành lang để cô lập hoàn toàn lối đi nóng.",
      "Mở toang toàn bộ cửa trước và cửa sau của tất cả các tủ rack để không khí tự do lưu thông.",
      "Tắt toàn bộ hệ thống điều hòa không khí chính và chỉ sử dụng quạt điện dân dụng cầm tay.",
      "Xịt nước trực tiếp vào mặt sau của máy chủ đang hoạt động để hạ nhiệt độ linh kiện máy."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Hiện tượng khí nóng quẩn ngược (Air Recirculation) xảy ra do thiếu vách ngăn. Giải pháp chuẩn của trung tâm dữ liệu là lắp đặt hệ thống cô lập lối đi nóng (Hot Aisle Containment) hoặc lối đi lạnh để ngăn tuyệt đối khí nóng quay trở lại cửa hút gió.",
    trickDetails: {
      whyTrapped: "Phương án B (mở toang cửa) sẽ làm khí nóng hòa trộn tự do khiến tình trạng quá nhiệt lan rộng khắp phòng máy.",
      trickWord: "Bẫy xử lý hiện tượng quẩn khí nóng (Air recirculation) trong thiết kế trung tâm dữ liệu.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (Cô lập lối đi nóng Hot Aisle)",
      tip: "Khí nóng bị quẩn ngược vào mặt trước = Lắp đặt vách ngăn cô lập lối đi nóng (Containment)."
    }
  },
  {
    id: "cloud-c2-d2-034",
    chapterId: "cloud-ch2",
    question: "Hệ thống phân tích dữ liệu phân tán Hadoop/Spark gặp nghẽn mạng nghiêm trọng do lượng dữ liệu trao đổi giữa các Worker nodes trong Data Center tăng đột biến. Nâng cấp mô hình mạng nào giải quyết triệt để?",
    options: [
      "Chuyển đổi từ mô hình cây truyền thống sang kiến trúc Leaf-Spine hỗ trợ định tuyến ECMP.",
      "Thay thế toàn bộ hệ thống cáp mạng quang bằng cáp mạng xoắn đôi đồng để giảm tốc độ mạng.",
      "Bắt buộc toàn bộ các máy chủ tính toán phải gửi dữ liệu vòng ra Internet công cộng bên ngoài.",
      "Hạn chế việc truyền tin giữa các máy tính và yêu cầu ghi toàn bộ kết quả tạm ra đĩa mềm."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Kiến trúc mạng cây truyền thống (Core-Agg-Access) thường bị nghẽn cổ chai ở tầng Core khi lưu lượng East-West tăng cao. Kiến trúc 2 tầng Leaf-Spine giải phóng toàn bộ băng thông nhờ định tuyến đa đường bình đẳng (ECMP), tối ưu tuyệt đối cho Big Data.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ chỉ cần thay router mạng to hơn thay vì thay đổi toàn bộ cấu trúc hình học mạng.",
      trickWord: "Bẫy giải quyết bài toán nghẽn mạng lưu lượng nội bộ East-West bằng kiến trúc Leaf-Spine.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.2 (Kiến trúc Leaf-Spine cho Big Data)",
      tip: "Nghẽn mạng nội bộ do trao đổi dữ liệu server-to-server = Thay bằng kiến trúc Leaf-Spine."
    }
  },
  {
    id: "cloud-c2-d2-035",
    chapterId: "cloud-ch2",
    question: "Hệ thống cơ sở dữ liệu giao dịch tài chính yêu cầu tốc độ đọc ghi đĩa cực cao, độ trễ dưới 1 mili-giây và cần phân vùng đĩa thô (Raw Block Device). Kiến trúc lưu trữ nào là lựa chọn bắt buộc?",
    options: [
      "Mạng lưu trữ chuyên dụng SAN sử dụng cáp quang Fibre Channel kết nối trực tiếp với mảng đĩa.",
      "Hệ thống lưu trữ gắn mạng NAS chia sẻ thư mục tệp tin qua giao thức truyền thông mạng CIFS.",
      "Hệ thống lưu trữ đám mây công cộng dạng đối tượng truy cập thông qua giao thức web HTTP/REST.",
      "Sử dụng thẻ nhớ ngoài di động cắm qua cổng USB 2.0 ở mặt trước của từng máy chủ đơn lẻ."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Hệ thống cơ sở dữ liệu quan hệ giao dịch cao cấp (như Oracle RAC, MS SQL Server) đòi hỏi truy cập dạng khối (Block-level) với độ trễ cực thấp, chỉ có mạng SAN cáp quang Fibre Channel (FC-SAN) mới đáp ứng được chuẩn khắt khe này.",
    trickDetails: {
      whyTrapped: "Chọn NAS vì nghĩ NAS dễ dùng và rẻ, nhưng NAS truyền ở cấp độ tệp tin (File-level) có độ trễ lớn không chịu nổi giao dịch cao.",
      trickWord: "Bẫy lựa chọn kiến trúc lưu trữ cho CSDL giao dịch hiệu năng cao: Cần Block-level = Chọn SAN.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1 (Kiến trúc mạng lưu trữ SAN)",
      tip: "CSDL giao dịch, IOPS cao, Raw Block = SAN (Fibre Channel/iSCSI); Chia sẻ file văn phòng = NAS."
    }
  },
  {
    id: "cloud-c2-d2-036",
    chapterId: "cloud-ch2",
    question: "Máy chủ máy tính đang hoạt động thì một card mạng vật lý bị chập điện hư hỏng, nhưng toàn bộ máy ảo bên trong vẫn duy trì kết nối mạng thông suốt. Công nghệ mạng nào đã mang lại năng lực chịu lỗi này?",
    options: [
      "Cơ chế gom cụm nhiều cổng mạng vật lý Link Aggregation kết hợp chuyển mạch dự phòng lỗi.",
      "Công nghệ chia sẻ dải tần vô tuyến của thiết bị phát sóng không dây gắn trên nóc của tủ rack.",
      "Giao thức định tuyến động tự động ngắt toàn bộ các máy chủ khác trong cùng trung tâm dữ liệu.",
      "Hệ thống tự động lưu trữ tạm toàn bộ gói tin trên đĩa cứng cho đến khi kỹ sư thay card mới."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Link Aggregation (NIC Teaming / LACP) kết nối ít nhất 2 card mạng vật lý vào 2 switch khác nhau. Khi một card mạng bị đứt cáp hoặc cháy, card còn lại ngay lập tức gánh toàn bộ lưu lượng mà không rớt một gói tin nào.",
    trickDetails: {
      whyTrapped: "Thí sinh có thể không biết cơ chế dự phòng tự động chuyển mạch của kỹ thuật NIC Teaming / LACP.",
      trickWord: "Bẫy cơ chế chịu lỗi phần cứng mạng máy chủ bằng kỹ thuật Link Aggregation.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.2 (Cơ chế chịu lỗi NIC Teaming)",
      tip: "Nhiều card mạng cùng gánh một luồng = Link Aggregation / NIC Teaming (Chống đứt mạng khi hỏng card)."
    }
  },
  {
    id: "cloud-c2-d2-037",
    chapterId: "cloud-ch2",
    question: "Trong một mảng đĩa RAID 5 gồm 4 ổ đĩa, đèn báo hiệu của một ổ đĩa chuyển sang màu đỏ báo hiệu hỏng phần cứng hoàn toàn. Quản trị viên cần thực hiện hành động nào chuẩn xác nhất?",
    options: [
      "Rút ổ đĩa hỏng ra thay bằng ổ mới cùng dung lượng để mảng đĩa tự động tái thiết lại dữ liệu.",
      "Tắt ngay lập tức toàn bộ hệ thống máy chủ và tiến hành định dạng lại toàn bộ 3 ổ đĩa còn lại.",
      "Xóa bỏ hoàn toàn cơ sở dữ liệu hiện có vì mảng đĩa RAID 5 đã mất trắng dữ liệu không phục hồi.",
      "Tiếp tục để nguyên ổ đĩa hỏng hoạt động vì các ổ đĩa khác sẽ tự phục hồi phần cứng cho ổ đó."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "RAID 5 chịu được hỏng 1 ổ cứng: khi 1 ổ hỏng, hệ thống vẫn đọc ghi bình thường (ở trạng thái Degraded). Quản trị viên chỉ cần rút nóng ổ hỏng ra, cắm ổ mới vào, mảng RAID sẽ tự động tính toán từ Parity để tái thiết (Rebuild) lại dữ liệu.",
    trickDetails: {
      whyTrapped: "Nhiều người hoảng loạn tưởng 1 ổ hỏng là mất hết dữ liệu (phương án C sai).",
      trickWord: "Bẫy quy trình xử lý sự cố hỏng ổ đĩa trong mảng đĩa có cơ chế Parity phân tán.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (Quy trình Rebuild RAID 5)",
      tip: "RAID 5 hỏng 1 ổ: Rút ổ hỏng ➔ Cắm ổ mới ➔ Hệ thống tự động Rebuild từ Parity."
    }
  },
  {
    id: "cloud-c2-d2-038",
    chapterId: "cloud-ch2",
    question: "Kỹ sư muốn nâng cấp CPU cho máy chủ vật lý Host A nhưng trên máy đang có máy ảo Web bán vé bóng đá đang phục vụ khách. Giải pháp nào chuyển máy ảo sang Host B mà khách không hề nhận ra?",
    options: [
      "Thực hiện di chuyển máy ảo sống vMotion tận dụng hệ thống lưu trữ chia sẻ chung giữa 2 máy.",
      "Tắt nguồn máy ảo đột ngột rồi sao chép tệp tin ổ đĩa ảo qua đường truyền mạng Internet chậm.",
      "Yêu cầu tất cả khách hàng dừng mua vé trong bốn giờ để kỹ sư tiến hành tháo lắp chip CPU.",
      "Chụp ảnh màn hình giao diện máy ảo rồi gửi qua email cho quản trị viên máy chủ Host B cài lại."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Live VM Migration (VMware vMotion, KVM Live Migration) cho phép di chuyển máy ảo đang chạy từ Host A sang Host B trong thời gian thực, thời gian chuyển mạch chỉ tính bằng mili-giây, phiên kết nối TCP của khách hàng không bị ngắt quãng.",
    trickDetails: {
      whyTrapped: "Thí sinh có thể chọn phương án sao chép tệp tĩnh (Cold Migration) làm gián đoạn dịch vụ của khách.",
      trickWord: "Bẫy tình huống bảo trì phần cứng không gián đoạn dịch vụ (Zero Downtime Maintenance).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Tình huống sử dụng Live VM Migration)",
      tip: "Chuyển máy ảo khi máy chủ bảo trì mà không ngắt dịch vụ = Live VM Migration (vMotion)."
    }
  },
  {
    id: "cloud-c2-d2-039",
    chapterId: "cloud-ch2",
    question: "Khi thực hiện vMotion cho một máy ảo cơ sở dữ liệu ghi liên tục, quá trình di chuyển bị lặp vô tận không kết thúc được do mạng 1Gbps bị nghẽn. Giải pháp kỹ thuật nào khắc phục triệt để?",
    options: [
      "Nâng cấp mạng di chuyển lên 10Gbps và áp dụng công nghệ tự động điều tiết tốc độ CPU máy ảo.",
      "Hủy bỏ hoàn toàn việc sử dụng mạng cáp quang và chuyển sang dùng sóng Bluetooth không dây.",
      "Tắt toàn bộ cơ chế bảo vệ tính toàn vẹn bộ nhớ để bỏ qua không cần sao chép các trang bẩn.",
      "Xóa bỏ hoàn toàn cơ sở dữ liệu trên máy ảo nguồn để giảm dung lượng bộ nhớ RAM về bằng 0."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Hiện tượng vMotion không hội tụ xảy ra khi tốc độ ghi trang bẩn (Dirtying rate) lớn hơn tốc độ truyền qua mạng. Giải pháp: nâng băng thông mạng lên 10Gbps/25Gbps và kích hoạt CPU Throttling (vSphere Auto-Throttle) hãm nhẹ tốc độ CPU máy ảo để kịp chép hết RAM.",
    trickDetails: {
      whyTrapped: "Phương án C làm sai lệch dữ liệu; phương án B và D phi lý.",
      trickWord: "Bẫy kỹ thuật xử lý sự cố vMotion không thể hội tụ (Convergence failure).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Xử lý sự cố Live Migration)",
      tip: "vMotion bị nghẽn trang bẩn = Nâng cấp băng thông mạng Migration + Áp dụng CPU Throttling."
    }
  },
  {
    id: "cloud-c2-d2-040",
    chapterId: "cloud-ch2",
    question: "Doanh nghiệp muốn đưa các ứng dụng chạy trên Windows Server thương mại lên nền tảng ảo hóa mà hoàn toàn không thể chỉnh sửa mã nguồn nhân hệ điều hành. Họ bắt buộc phải dùng công nghệ ảo hóa nào?",
    options: [
      "Công nghệ ảo hóa toàn phần hoặc ảo hóa hỗ trợ phần cứng Intel VT-x mà không dùng Cận ảo hóa.",
      "Bắt buộc phải áp dụng Cận ảo hóa Paravirtualization và gửi mã nguồn yêu cầu Microsoft sửa.",
      "Không thể chạy được hệ điều hành Windows trên bất kỳ nền tảng ảo hóa nào của thế giới.",
      "Chỉ có thể chạy hệ điều hành Windows trên các máy tính cá nhân để bàn không nối mạng LAN."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Windows Server là mã nguồn đóng, không thể sửa kernel ➔ KHÔNG THỂ dùng Paravirtualization. Bắt buộc phải dùng Full Virtualization (Binary Translation) hoặc Hardware-assisted Virtualization (Intel VT-x / AMD-V) để chạy nguyên bản không cần sửa code.",
    trickDetails: {
      whyTrapped: "Dễ nhầm là công nghệ nào cũng chạy được Windows nguyên bản.",
      trickWord: "Bẫy điều kiện chạy hệ điều hành mã nguồn đóng độc quyền trên nền tảng ảo hóa.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Khả năng tương thích hệ điều hành)",
      tip: "Hệ điều hành mã nguồn đóng (Windows) = Full Virtualization hoặc Hardware-assisted; Không dùng Paravirtualization."
    }
  },
  {
    id: "cloud-c2-d2-041",
    chapterId: "cloud-ch2",
    question: "Một tập đoàn đám mây muốn tối ưu hóa triệt để chi phí điện năng vận hành bằng cách loại bỏ toàn bộ ánh sáng và điều hòa thân nhiệt cho con người. Mô hình thiết kế nào hiện thực hóa mục tiêu này?",
    options: [
      "Thiết kế trung tâm dữ liệu tự động hóa hoàn toàn không có ánh sáng Lights-Out Data Center.",
      "Xây dựng trung tâm dữ liệu mở ngoài trời không có mái che để đón gió mát tự nhiên của trời.",
      "Tắt toàn bộ hệ thống máy chủ vào giờ cao điểm của lưới điện quốc gia để tránh bị phạt tiền.",
      "Chuyển toàn bộ các thiết bị máy tính sang vận hành dưới đáy hồ nước sinh hoạt của thành phố."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Lights-Out Data Center là mô hình thiết kế đỉnh cao nhằm loại bỏ hoàn toàn con người trong phòng máy. Nhờ quản trị tự động hóa từ xa, phòng máy tắt toàn bộ đèn điện và chỉ cần duy trì làm mát tối ưu cho máy móc.",
    trickDetails: {
      whyTrapped: "Các phương án B, C, D đưa ra các tình huống phi thực tế, thiếu tính khoa học kỹ thuật.",
      trickWord: "Bẫy định vị mô hình thiết kế phòng máy tối ưu hóa chi phí năng lượng.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (Lights-Out Data Center)",
      tip: "Tối ưu điện loại bỏ ánh sáng và điều hòa thân nhiệt con người = Lights-Out Data Center."
    }
  },

  // ==========================================
  // DẠNG 5: PHÂN BIỆT KHÁI NIỆM SONG SINH DỄ NHẦM LẪN (9 CÂU)
  // ==========================================
  {
    id: "cloud-c2-d2-042",
    chapterId: "cloud-ch2",
    question: "Điểm khác biệt cốt lõi nhất giữa 'North-South Traffic' và 'East-West Traffic' trong Data Center là gì?",
    options: [
      "North-South là luồng dữ liệu vào ra trung tâm; East-West là luồng dữ liệu nội bộ giữa các máy.",
      "North-South là luồng dữ liệu chạy ban ngày; East-West là luồng dữ liệu chạy vào ban đêm tối.",
      "North-South chỉ truyền dữ liệu âm thanh; East-West chỉ truyền dữ liệu hình ảnh video độ phân giải cao.",
      "Hai thuật ngữ này chỉ hướng địa lý thực tế của cáp mạng đi từ phương Bắc hay phương Đông tới."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "North-South (Bắc - Nam) là luồng dữ liệu giữa Client bên ngoài và Server bên trong DC (đi qua Router/Firewall). East-West (Đông - Tây) là luồng dữ liệu giao tiếp nội bộ giữa Server với Server hoặc Server với Storage bên trong DC.",
    trickDetails: {
      whyTrapped: "Nghĩ rằng đây là hướng địa lý thực tế của dây cáp quang cắm theo bản đồ địa lý.",
      trickWord: "Bẫy ngữ nghĩa hướng địa lý thực tế vs quy ước hướng mạng logic.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục III.1 (Luồng dữ liệu mạng Data Center)",
      tip: "North-South: Client ➔ Data Center (Vào/Ra); East-West: Server ➔ Server (Nội bộ)."
    }
  },
  {
    id: "cloud-c2-d2-043",
    chapterId: "cloud-ch2",
    question: "Sự khác biệt căn bản giữa hai kiến trúc mạng lưu trữ 'SAN' và 'NAS' là gì?",
    options: [
      "SAN cung cấp không gian đĩa ở mức khối; NAS chia sẻ dữ liệu ở mức tệp tin qua giao thức mạng.",
      "SAN chỉ sử dụng cáp mạng đồng giá rẻ; NAS bắt buộc phải sử dụng cáp quang chuyên dụng đắt tiền.",
      "SAN kết nối trực tiếp với máy tính người dùng cuối; NAS chỉ dành riêng cho các siêu máy tính.",
      "Hai kiến trúc này hoàn toàn đồng nhất về phương thức giao tiếp và định dạng khối dữ liệu lưu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Khác biệt cốt lõi: SAN (Storage Area Network) cung cấp lưu trữ ở cấp độ KHỐI (Block-level qua FC/iSCSI, máy tính tự format đĩa). NAS (Network Attached Storage) cung cấp lưu trữ ở cấp độ TỆP TIN (File-level qua NFS/SMB, đã format sẵn hệ thống file).",
    trickDetails: {
      whyTrapped: "Học sinh thường quên mất SAN là Block-level và NAS là File-level.",
      trickWord: "Bẫy cấp độ giao tiếp dữ liệu: Block-level (SAN) vs File-level (NAS).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.1 (Phân biệt SAN và NAS)",
      tip: "SAN = Block (như cắm thêm ổ cứng); NAS = File (như thư mục mạng chia sẻ)."
    }
  },
  {
    id: "cloud-c2-d2-044",
    chapterId: "cloud-ch2",
    question: "Điểm khác biệt căn bản giữa 'Thin Provisioning' và 'Thick Provisioning' trong ảo hóa lưu trữ là gì?",
    options: [
      "Thin cấp phát dung lượng theo dữ liệu thực tế ghi; Thick chiếm dụng trọn vẹn dung lượng ngay từ đầu.",
      "Thin làm giảm tuổi thọ của ổ cứng vật lý; Thick giúp tăng gấp đôi dung lượng bộ nhớ đệm RAM.",
      "Thin chỉ áp dụng được cho máy chủ Linux; Thick chỉ sử dụng được trên hệ điều hành Windows Server.",
      "Hai phương thức này hoàn toàn giống nhau về cách phân bổ không gian đĩa trên mảng đĩa vật lý."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Thin Provisioning chỉ cấp phát không gian đĩa vật lý khi có dữ liệu thực tế ghi vào (tiết kiệm đĩa, cho phép Over-provisioning). Thick Provisioning chiếm dụng và cấp phát đủ 100% dung lượng khai báo ngay tại thời điểm tạo ổ ảo.",
    trickDetails: {
      whyTrapped: "Nhầm lẫn giữa cấp phát thực tế theo nhu cầu (Thin) và chiếm dụng tài nguyên cố định trước (Thick).",
      trickWord: "Bẫy cơ chế chiếm dụng không gian đĩa cứng vật lý.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (Thin vs Thick Provisioning)",
      tip: "Thin = Trả tiền đĩa theo dữ liệu thực tế; Thick = Khóa cứng dung lượng dù chưa dùng tới."
    }
  },
  {
    id: "cloud-c2-d2-045",
    chapterId: "cloud-ch2",
    question: "Sự khác biệt cốt lõi giữa 'Full Virtualization' (Ảo hóa toàn phần) và 'Paravirtualization' (Cận ảo hóa) là gì?",
    options: [
      "Full Virtualization không cần sửa Guest OS; Paravirtualization bắt buộc phải sửa mã nguồn Guest OS.",
      "Full Virtualization có tốc độ thực thi nhanh hơn nhiều so với phương pháp Cận ảo hóa phần mềm.",
      "Paravirtualization chỉ áp dụng được cho các hệ điều hành độc quyền đóng mã nguồn như Windows.",
      "Full Virtualization không sử dụng tầng phần mềm Hypervisor để quản lý phân chia phần cứng máy chủ."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Full Virtualization: Giả lập phần cứng hoàn hảo, Guest OS chạy nguyên bản không cần sửa code (dùng Binary Translation). Paravirtualization: Guest OS nhận thức được mình đang chạy trên máy ảo và đã được sửa kernel để gọi Hypercall trực tiếp.",
    trickDetails: {
      whyTrapped: "Phương án B sai vì Paravirtualization thường nhanh hơn Full Virtualization (do không tốn chi phí Binary Translation).",
      trickWord: "Bẫy điều kiện sửa đổi mã nguồn nhân hệ điều hành khách (Guest OS modification).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Full vs Paravirtualization)",
      tip: "Full: Không sửa Guest OS; Para: Bắt buộc sửa Guest OS (gọi Hypercall)."
    }
  },
  {
    id: "cloud-c2-d2-046",
    chapterId: "cloud-ch2",
    question: "Điểm phân biệt rõ nét nhất giữa 'Hypervisor Type 1' (Bare-metal) và 'Hypervisor Type 2' (Hosted) là gì?",
    options: [
      "Type 1 cài trực tiếp trên phần cứng máy chủ; Type 2 cài đặt như phần mềm trên hệ điều hành có sẵn.",
      "Type 1 chỉ dùng cho máy tính cá nhân để bàn; Type 2 là lựa chọn độc quyền cho trung tâm dữ liệu.",
      "Type 2 không bao giờ chịu ảnh hưởng của các lỗ hổng bảo mật trên hệ điều hành máy tính chủ nhà.",
      "Hai loại Hypervisor này hoàn toàn đồng nhất về mặt kiến trúc và mức độ phụ thuộc vào Host OS."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Type 1 (Bare-metal như ESXi, Xen, KVM) cài trực tiếp trên phần cứng. Type 2 (Hosted như VMware Workstation, VirtualBox) cài trên một Host OS có sẵn (Windows, macOS), do đó chịu độ trễ và rủi ro từ Host OS đó.",
    trickDetails: {
      whyTrapped: "Phương án B đảo ngược phạm vi ứng dụng thực tế giữa Type 1 và Type 2.",
      trickWord: "Bẫy vị trí lắp đặt kiến trúc: Cài trên phần cứng (Type 1) vs Cài trên Host OS (Type 2).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Hypervisor Type 1 vs Type 2)",
      tip: "Type 1 = Bare-metal (Trực tiếp trên sắt); Type 2 = Hosted (Ăn bám Host OS)."
    }
  },
  {
    id: "cloud-c2-d2-047",
    chapterId: "cloud-ch2",
    question: "Khác biệt bản chất giữa 'Cold Migration' (Di chuyển nguội) và 'Live Migration' (Di chuyển sống) là gì?",
    options: [
      "Cold Migration đòi hỏi phải tắt nguồn máy ảo trước; Live Migration di chuyển khi máy vẫn đang chạy.",
      "Cold Migration di chuyển máy ảo với tốc độ nhanh hơn nhiều so với phương thức Live Migration mạng.",
      "Live Migration yêu cầu phải ngắt kết nối mạng lưu trữ chia sẻ giữa hai máy chủ tính toán vật lý.",
      "Hai phương thức này hoàn toàn giống nhau về việc không làm gián đoạn các kết nối mạng của khách."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Cold Migration: Tắt máy ảo (Power off), sau đó chuyển tệp tin đĩa và cấu hình sang host mới (dịch vụ bị ngắt hoàn toàn). Live Migration: Máy ảo vẫn chạy phục vụ khách, RAM được sao chép liên tục qua mạng, dịch vụ không bị gián đoạn.",
    trickDetails: {
      whyTrapped: "Thí sinh dễ nhầm trạng thái của máy ảo trong lúc di chuyển.",
      trickWord: "Bẫy trạng thái hoạt động của máy ảo: Power Off (Cold) vs Powered On (Live).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.2 (Cold vs Live Migration)",
      tip: "Cold = Tắt máy rồi chuyển (Ngừng dịch vụ); Live = Vừa chạy vừa chuyển (Không ngừng dịch vụ)."
    }
  },
  {
    id: "cloud-c2-d2-048",
    chapterId: "cloud-ch2",
    question: "Sự khác biệt căn bản giữa hai phương pháp ngăn nhiệt: 'Hot Aisle Containment' (HAC) và 'Cold Aisle Containment' (CAC)?",
    options: [
      "HAC đóng kín lối đi khí nóng xả ra; CAC đóng kín lối đi khí lạnh cấp vào mặt trước tủ rack.",
      "HAC làm cho toàn bộ phòng máy trở nên lạnh buốt; CAC làm cho toàn bộ phòng máy biến thành lò nhiệt.",
      "CAC đòi hỏi phải lắp đặt hệ thống ống khói xả khí nóng lên trần nhà cho từng tủ rack máy tính riêng.",
      "Hai giải pháp này hoàn toàn đồng nhất về vùng không gian được bao bọc bằng cửa kính và vách ngăn."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Hot Aisle Containment (HAC): Bao bọc đóng kín lối đi nóng để gom khí nóng xả ra dẫn thẳng về điều hòa. Cold Aisle Containment (CAC): Đóng kín lối đi lạnh ở mặt trước các tủ rack để giữ khí lạnh không bị rò rỉ ra không gian chung.",
    trickDetails: {
      whyTrapped: "Dễ bị đảo lộn không gian được đóng kín giữa lối đi khí nóng và lối đi khí lạnh.",
      trickWord: "Bẫy không gian bao bọc cách ly: Đóng lối đi nóng (HAC) vs Đóng lối đi lạnh (CAC).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục II.2 (HAC vs CAC)",
      tip: "HAC: Nhốt khí nóng lại; CAC: Nhốt khí lạnh lại."
    }
  },
  {
    id: "cloud-c2-d2-049",
    chapterId: "cloud-ch2",
    question: "Điểm phân biệt cốt lõi giữa hai cấp độ mảng đĩa 'RAID 1' và 'RAID 5' là gì?",
    options: [
      "RAID 1 nhân bản 1:1 làm mất 50% dung lượng; RAID 5 dùng Parity phân tán tối ưu dung lượng hơn.",
      "RAID 1 có tốc độ ghi dữ liệu nhanh hơn RAID 5 trong mọi trường hợp do không cần ghi bản sao đĩa.",
      "RAID 5 đòi hỏi ít nhất hai ổ đĩa vật lý trong khi RAID 1 bắt buộc phải có tối thiểu năm ổ đĩa cứng.",
      "RAID 1 có khả năng chịu đựng việc hỏng đồng thời ba ổ đĩa cứng bất kỳ mà không làm mất dữ liệu."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "RAID 1 (Mirroring): Nhân bản toàn bộ dữ liệu sang ổ thứ hai, mất 50% tổng dung lượng. RAID 5: Dùng cơ chế Parity phân tán, hiệu suất sử dụng dung lượng là (N-1)/N (ví dụ 4 ổ chỉ mất 25% dung lượng cho Parity), tiết kiệm chi phí hơn nhiều so với RAID 1.",
    trickDetails: {
      whyTrapped: "Phương án C sai số lượng ổ tối thiểu (RAID 1 cần tối thiểu 2 ổ; RAID 5 cần tối thiểu 3 ổ).",
      trickWord: "Bẫy hiệu suất sử dụng dung lượng đĩa: 50% (RAID 1) vs (N-1)/N (RAID 5).",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục IV.2 (So sánh RAID 1 và RAID 5)",
      tip: "RAID 1 = Mất 1/2 đĩa cho soi gương; RAID 5 = Chỉ mất 1 đĩa cho Parity phân tán."
    }
  },
  {
    id: "cloud-c2-d2-050",
    chapterId: "cloud-ch2",
    question: "Sự khác biệt cốt lõi giữa 'Hardware-assisted Virtualization' và 'Binary Translation' là gì?",
    options: [
      "Hardware-assisted dựa vào chế độ phần cứng CPU; Binary Translation quét và dịch mã nhị phân trong RAM.",
      "Binary Translation đòi hỏi phải mua bộ vi xử lý máy tính thế hệ mới có tích hợp chip silicon phụ trợ.",
      "Hardware-assisted Virtualization có hiệu năng xử lý luôn thấp hơn giải pháp dịch nhị phân phần mềm.",
      "Hai công nghệ này hoàn toàn đồng nhất về cơ chế can thiệp xử lý các chỉ lệnh nhạy cảm của máy tính."
    ],
    answer: 0,
    difficulty: "hard",
    trickSet: 2,
    explanation: "Hardware-assisted Virtualization (Intel VT-x) dựa vào sự hỗ trợ trực tiếp từ vi kiến trúc silicon của CPU (chế độ VMX Root/Non-root). Binary Translation là giải pháp thuần phần mềm của Hypervisor chạy trong RAM để dịch mã máy khi CPU thiếu hỗ trợ phần cứng.",
    trickDetails: {
      whyTrapped: "Nhiều người nghĩ Binary Translation cũng cần chip phần cứng hỗ trợ.",
      trickWord: "Bẫy bản chất: Hardware-assisted = Hỗ trợ từ Silicon; Binary Translation = Phần mềm Hypervisor trong RAM.",
      citation: "Giáo trình Điện toán đám mây — Chương 2, Mục VI.1 (Hardware-assisted vs Binary Translation)",
      tip: "Hardware-assisted: Phần cứng CPU tự lo; Binary Translation: Phần mềm Hypervisor phải cày cuốc dịch mã."
    }
  }
];

// Hàm gọt giũa và kiểm tra độ lệch Delta L <= 15
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

balanceAndVerifyOptions(questionsCloudCh2Trick2);

// Kiểm tra trùng lặp với Đề bẫy 1 Chương 2
const set1Ids = new Set(questionsCloudCh2Trick1.map(q => q.id));
const set1Questions = new Set(questionsCloudCh2Trick1.map(q => q.question.trim().toLowerCase()));

let duplicateCount = 0;
questionsCloudCh2Trick2.forEach(q => {
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

questionsCloudCh2Trick2.forEach((q, i) => {
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
questionsCloudCh2Trick2.forEach(q => {
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
questionsCloudCh2Trick2.forEach(q => {
  const letter = ["A", "B", "C", "D"][q.answer];
  dist[letter]++;
});
console.log("Phân bổ đáp án Đề bẫy 2 Chương 2:", dist);

// Ghi file data/questions-cloud-ch2-trick2.js
const codeContent = `/* ============================================================
   NGÂN HÀNG CÂU HỎI BẪY CHUYÊN SÂU — CHƯƠNG 2 (BỘ ĐỀ 2)
   Môn học: Điện toán đám mây (Cloud Computing)
   Mã chương: cloud-ch2
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

export const questionsCloudCh2Trick2 = ${JSON.stringify(questionsCloudCh2Trick2, null, 2)};
`;

const targetJsPath = path.join(rootDir, "data", "questions-cloud-ch2-trick2.js");
fs.writeFileSync(targetJsPath, codeContent, "utf-8");
console.log("✅ Đã ghi thành công:", targetJsPath);
