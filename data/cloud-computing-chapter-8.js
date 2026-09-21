/* ============================================================
   GIÁO TRÌNH ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)
   Chương 8: Collaboration in a Cloud Environment (Cộng tác trong môi trường đám mây)
   Phiên bản Redesign Chuẩn StudyMaster: Bento Grid • Micro-content • Interactive Simulators
   ============================================================ */

export const cloudComputingChapter8 = {
  id: "cloud-ch8",
  title: "Chương 8",
  subtitle: "Collaboration in a Cloud Environment (Cộng tác trong môi trường đám mây)",
  sections: [
    /* ============================
       MỤC ★: OVERVIEW CHƯƠNG
       ============================ */
    {
      id: "cloud-ch8-s0",
      roman: "★",
      title: "Tổng quan chương: Bản đồ Hệ sinh thái Cộng tác Đám mây",
      subsections: [
        {
          id: "cloud-ch8-s0-overview",
          number: "0",
          title: "Bản đồ kiến thức & Radar kỹ năng Chương 8",
          parts: [
            {
              id: "cloud-ch8-s0-p1",
              label: "★",
              title: "Tổng quan tri thức toàn chương",
              content: [
                {
                  type: "cloud-chapter-hero",
                  chapterId: "cloud-ch8"
                },
                {
                  type: "cloud-collaboration-radar"
                },
                {
                  type: "highlight",
                  text: "Chương 8 nghiên cứu chuyên sâu về toàn diện các giải pháp Cộng tác trên nền tảng đám mây (Cloud Collaboration): từ nền tảng nhắn tin tức thời (Instant Messaging), hệ thống thoại và fax qua đám mây (Cloud Phone & Fax / VoIP), đến chia sẻ và đồng biên tập tài liệu thời gian thực (Document Sharing), blog doanh nghiệp Web 2.0, sàn giao dịch cộng tác (Collaboration Exchange), thuyết trình/giảng dạy từ xa (Virtual Presentations & Lectures), mạng xã hội nội bộ và phát sóng video trực tuyến (Streaming Video)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC I: TỔNG QUAN VỀ CLOUD COLLABORATION
       ============================ */
    {
      id: "cloud-ch8-s1",
      roman: "I",
      title: "Tổng quan về Cloud Collaboration",
      subsections: [
        {
          id: "cloud-ch8-s1-1-objectives",
          number: "1.1",
          title: "Mục tiêu chương & Chuẩn đầu ra",
          parts: [
            {
              id: "cloud-ch8-s1-1-p1",
              label: "1.1",
              title: "Mục tiêu bài giảng & Chuẩn đầu ra",
              content: [
                {
                  type: "paragraph",
                  text: "Trong kỷ nguyên số hóa và xu hướng làm việc linh hoạt (hybrid work), cộng tác trực tuyến đã trở thành năng lực cốt lõi của mọi tổ chức hiện đại."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Hiểu kiến thức cơ bản:</strong> Nắm vững định nghĩa, cơ chế và bản chất của <em>Cloud Collaboration</em>.",
                    "<strong>Nhận diện công cụ & nền tảng:</strong> Làm chủ các tools và platforms hỗ trợ cộng tác hiện đại trên nền tảng cloud.",
                    "<strong>Đánh giá lợi ích & thách thức:</strong> Phân tích sâu sắc các <em>benefits</em> (lợi ích) và <em>challenges</em> (thách thức về an ninh, phân quyền, tích hợp).",
                    "<strong>Tối ưu hóa vận hành:</strong> Biết các phương pháp tối ưu và thực hành tốt nhất (best practices) khi triển khai cộng tác trên cloud."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s1-2-definition",
          number: "1.2",
          title: "Cloud-based Collaboration là gì?",
          parts: [
            {
              id: "cloud-ch8-s1-2-p1",
              label: "1.2",
              title: "Định nghĩa & 3 Trụ cột Hành động",
              content: [
                {
                  type: "definition",
                  term: "Cloud-based Collaboration (Cộng tác trên nền tảng đám mây)",
                  definition: "Là việc sử dụng các công cụ, dịch vụ và nền tảng dựa trên điện toán đám mây để hỗ trợ các cá nhân và đội nhóm làm việc cùng nhau, chia sẻ thông tin và tương tác theo thời gian thực (real time) trên không gian số tập trung."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Working Together (Làm việc cùng nhau):</strong> Xóa bỏ khoảng cách vật lý, kết nối các cá nhân và phòng ban xuyên lục địa.",
                    "<strong>Sharing Information (Chia sẻ thông tin):</strong> Tạo môi trường trao đổi tài liệu, ý tưởng và dữ liệu tức thời trên 1 nguồn sự thật duy nhất (Single Source of Truth).",
                    "<strong>Real-time Interaction (Tương tác thời gian thực):</strong> Hỗ trợ phản hồi tức thì qua chat, video call, đồng biên tập và bảng trắng kỹ thuật số."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s1-3-scope",
          number: "1.3",
          title: "Các hoạt động cốt lõi của Cloud Collaboration",
          parts: [
            {
              id: "cloud-ch8-s1-3-p1",
              label: "1.3",
              title: "6 Lĩnh vực Hoạt động Chính",
              content: [
                {
                  type: "paragraph",
                  text: "Theo giáo trình chính khóa, Cloud Collaboration bao trùm 6 trụ cột hoạt động nghiệp vụ doanh nghiệp:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Document Sharing & Co-authoring:</strong> Chia sẻ và đồng biên tập văn bản, bảng tính, bài thuyết trình trực tuyến.",
                    "<strong>Communication:</strong> Nhắn tin tức thời (IM), gọi điện thoại Internet (VoIP), hội nghị truyền hình (Video Conferencing).",
                    "<strong>Project Management & Coordination:</strong> Quản lý tác vụ, phân công công việc, lịch làm việc chung và theo dõi tiến độ dự án.",
                    "<strong>File Storage & Synchronization:</strong> Lưu trữ đám mây, tự động đồng bộ hóa dữ liệu giữa các thiết bị cá nhân và máy chủ.",
                    "<strong>Knowledge Management:</strong> Xây dựng kho tri thức doanh nghiệp thông qua Enterprise Wiki và Corporate Blogs.",
                    "<strong>Online Training & Presentation:</strong> Tổ chức các buổi đào tạo trực tuyến, hội thảo web (Webinar) và truyền phát video nội bộ."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Bản chất vượt trội lớn nhất của Cloud-based Collaboration so với phương pháp cộng tác truyền thống (gửi file đính kèm qua email) là gì?",
                  options: [
                    "Mọi thành viên cùng thao tác trên một 'nguồn sự thật duy nhất' (Single Source of Truth) theo thời gian thực mà không bị phân mảnh phiên bản.",
                    "Dữ liệu được lưu cục bộ trên ổ cứng của từng cá nhân để đảm bảo an toàn tuyệt đối khi mất mạng.",
                    "Chỉ người tạo file mới có quyền xem nội dung, các thành viên khác phải xin cấp phép mỗi khi mở file.",
                    "Hệ thống tự động in tài liệu ra máy in giấy sau mỗi lần có người chỉnh sửa."
                  ],
                  answerIndex: 0,
                  explanation: "Cộng tác trên đám mây tập trung hóa tài liệu trên cloud server, tạo ra nguồn sự thật duy nhất, triệt tiêu hoàn toàn tình trạng gửi qua lại hàng chục bản copy (v1, v2_final, v3_final_final) gây sai lệch dữ liệu."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC II: HỆ THỐNG NHẮN TIN TỨC THỜI & HỘI NGHỊ TRỰC TUYẾN
       ============================ */
    {
      id: "cloud-ch8-s2",
      roman: "II",
      title: "Hệ thống Nhắn tin tức thời (IM) & Hội nghị trực tuyến",
      subsections: [
        {
          id: "cloud-ch8-s2-1-web-im",
          number: "2.1",
          title: "Hệ thống nhắn tin tức thời trên nền web (Web-based IM)",
          parts: [
            {
              id: "cloud-ch8-s2-1-p1",
              label: "2.1",
              title: "Tổng quan các giải pháp Nhắn tin & Hội nghị",
              content: [
                {
                  type: "collaboration-tools-bento-grid"
                },
                {
                  type: "definition",
                  term: "Web-based Instant Messaging (Web IM)",
                  definition: "Là dịch vụ tin nhắn tức thời hoạt động hoàn toàn trên trình duyệt web thông qua các giao thức HTTP/HTTPS và WebSockets, cho phép người dùng trao đổi tin nhắn văn bản, tệp tin và trạng thái mà không cần cài đặt phần mềm máy khách chuyên dụng."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Ưu điểm cốt lõi:</strong> Tiếp cận tức thì từ mọi thiết bị (Zero Client Footprint), phù hợp cho cả nhân viên nội bộ và đối tác khách mời vãng lai.",
                    "<strong>Cơ chế kỹ thuật:</strong> Kết nối liên tục thông qua WebSockets để truyền thông 2 chiều song công (Full-duplex) với độ trễ cực thấp.",
                    "<strong>Ví dụ điển hình:</strong> Slack Web App, Microsoft Teams trên trình duyệt, WhatsApp Web, Telegram Web."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s2-2-enterprise-im",
          number: "2.2",
          title: "Tin nhắn tức thời cấp doanh nghiệp (Enterprise IM)",
          parts: [
            {
              id: "cloud-ch8-s2-2-p1",
              label: "2.2",
              title: "Đặc tính An ninh & Tích hợp Doanh nghiệp",
              content: [
                {
                  type: "paragraph",
                  text: "Khác với các ứng dụng chat cá nhân (Consumer IM), <em>Enterprise IM</em> được thiết kế xoay quanh tính tuân thủ pháp lý và an toàn thông tin doanh nghiệp:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tích hợp Active Directory / LDAP:</strong> Tự động đồng bộ tài khoản nhân viên, phân quyền theo phòng ban và chức danh.",
                    "<strong>Mã hóa đầu cuối (E2EE) & Lưu vết kiểm toán:</strong> Mọi tin nhắn, file gửi và hành động xóa/sửa đều được ghi lại trong audit log phục vụ kiểm tra pháp lý.",
                    "<strong>Kênh làm việc theo chủ đề (Channels):</strong> Tách biệt luồng trao đổi theo dự án, chống trôi tin và thất lạc thông tin nghiệp vụ.",
                    "<strong>Tích hợp Bot & Tự động hóa:</strong> Kết nối thông báo tự động từ GitHub, Jira, CI/CD pipelines vào thẳng kênh chat."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s2-3-presence-security",
          number: "2.3",
          title: "Công nghệ hiện diện (Presence) và Bảo mật tin nhắn",
          parts: [
            {
              id: "cloud-ch8-s2-3-p1",
              label: "2.3",
              title: "Trạng thái Hiện diện & Lá chắn Mã hóa",
              content: [
                {
                  type: "definition",
                  term: "Presence Technology (Công nghệ hiện diện)",
                  definition: "Là tập hợp các giao thức mạng (như SIP/SIMPLE, XMPP) cho phép hệ thống nhận biết, cập nhật và hiển thị khả năng sẵn sàng giao tiếp của người dùng (Online, Busy, In a Meeting, Away, Offline) theo thời gian thực."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Đồng bộ lịch biểu:</strong> Trạng thái tự động chuyển sang 'Đang bận họp' khi phát hiện có lịch họp trên Google Calendar hoặc Microsoft Outlook.",
                    "<strong>Mã hóa khi lưu trữ và truyền tải:</strong> Sử dụng TLS 1.3 cho đường truyền và mã hóa AES-256 cho cơ sở dữ liệu tin nhắn lưu trên cloud.",
                    "<strong>Ngăn chặn rò rỉ dữ liệu (DLP):</strong> Tự động chặn việc sao chép hoặc gửi các chuỗi ký tự nhạy cảm (như số thẻ tín dụng, mật khẩu, căn cước công dân) qua tin nhắn."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s2-4-web-conference",
          number: "2.4",
          title: "Hội thảo trực tuyến (Web Conferencing) & Tính năng",
          parts: [
            {
              id: "cloud-ch8-s2-4-p1",
              label: "2.4",
              title: "Cơ chế Vận hành Hội thảo Web (Webinar)",
              content: [
                {
                  type: "paragraph",
                  text: "Hội thảo trực tuyến (Web Conferencing / Webinar) phục vụ mô hình truyền thông <strong>một-đến-nhiều (1-to-many)</strong> với quy mô từ hàng trăm đến hàng ngàn người tham dự:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Chia sẻ màn hình & Trình chiếu:</strong> Cho phép diễn giả chia sẻ toàn màn hình, cửa sổ ứng dụng hoặc bản trình chiếu slide với độ nét cao.",
                    "<strong>Công cụ tương tác tương hỗ:</strong> Tích hợp tính năng thăm dò ý kiến tức thời (Live Polls), hộp thư hỏi đáp có kiểm duyệt (Moderated Q&A), và giơ tay phát biểu.",
                    "<strong>Ghi hình đám mây (Cloud Recording):</strong> Tự động ghi lại toàn bộ buổi hội thảo và tạo liên kết phát lại (Playback) gửi cho người vắng mặt."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s2-5-video-conferencing",
          number: "2.5",
          title: "Hội nghị truyền hình độ nét cao (Video Conferencing)",
          parts: [
            {
              id: "cloud-ch8-s2-5-p1",
              label: "2.5",
              title: "Đàm thoại Video Đa điểm & Tối ưu Băng thông",
              content: [
                {
                  type: "paragraph",
                  text: "Hội nghị truyền hình đa điểm (Video Conferencing) phục vụ mô hình <strong>nhiều-đến-nhiều (many-to-many)</strong> đòi hỏi công nghệ xử lý âm thanh và hình ảnh khắt khe:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Công nghệ WebRTC:</strong> Cho phép truyền tải âm thanh, video thời gian thực trực tiếp giữa các trình duyệt mà không cần cài đặt plugin thứ ba.",
                    "<strong>Khử tiếng ồn & Tiếng vang (Echo Cancellation):</strong> Sử dụng thuật toán AI để lọc tạp âm môi trường (tiếng gõ phím, tiếng còi xe) và triệt tiêu tiếng vọng âm thanh.",
                    "<strong>Thích ứng băng thông động (Adaptive Bitrate):</strong> Tự động hạ độ phân giải video khi đường truyền mạng của một thành viên bị chậm, đảm bảo âm thanh không bị ngắt quãng."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Giao thức chuẩn mở được sử dụng phổ biến nhất hiện nay trong các trình duyệt hiện đại để thực hiện cuộc gọi video thời gian thực mà không cần cài thêm plugin là gì?",
                  options: [
                    "WebRTC (Web Real-Time Communication)",
                    "FTP (File Transfer Protocol)",
                    "SMTP (Simple Mail Transfer Protocol)",
                    "Telnet"
                  ],
                  answerIndex: 0,
                  explanation: "WebRTC là chuẩn mở do W3C và IETF hỗ trợ, cung cấp các API JavaScript để truyền audio, video và dữ liệu ngang hàng (P2P) thời gian thực trực tiếp trên trình duyệt."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC III: ĐIỆN THOẠI & FAX TRÊN NỀN TẢNG ĐÁM MÂY
       ============================ */
    {
      id: "cloud-ch8-s3",
      roman: "III",
      title: "Điện thoại & Fax trên nền tảng đám mây (Cloud Phone & Fax)",
      subsections: [
        {
          id: "cloud-ch8-s3-1-voip",
          number: "3.1",
          title: "VoIP (Voice over IP): Khái niệm & Cơ chế",
          parts: [
            {
              id: "cloud-ch8-s3-1-p1",
              label: "3.1",
              title: "Nguyên lý Số hóa Thoại qua Gói tin IP",
              content: [
                {
                  type: "definition",
                  term: "Voice over IP (VoIP)",
                  definition: "Là công nghệ chuyển đổi tín hiệu âm thanh tương tự (analog) thành các gói dữ liệu kỹ thuật số (digital packets) và truyền tải chúng qua mạng IP (như mạng Internet hoặc mạng cục bộ LAN) thay vì sử dụng mạng điện thoại chuyển mạch công cộng truyền thống (PSTN)."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bộ đôi giao thức cốt lõi:</strong> <code>SIP (Session Initiation Protocol)</code> chịu trách nhiệm báo hiệu và thiết lập cuộc gọi; <code>RTP (Real-time Transport Protocol)</code> chịu trách nhiệm vận chuyển gói tin âm thanh.",
                    "<strong>Chuyển mạch gói (Packet Switching):</strong> Khác với PSTN chiếm dụng toàn bộ đường dây, VoIP chia sẻ đường truyền mạng IP, giúp tận dụng tối đa băng thông sẵn có."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s3-2-cloud-pbx",
          number: "3.2",
          title: "Cloud PBX (Hosted PBX): Tổng đài ảo doanh nghiệp",
          parts: [
            {
              id: "cloud-ch8-s3-2-p1",
              label: "3.2",
              title: "Kiến trúc Tổng đài Đám mây & So sánh PSTN",
              content: [
                {
                  type: "cloud-voip-vs-pstn"
                },
                {
                  type: "definition",
                  term: "Cloud PBX (Private Branch Exchange trên Cloud)",
                  definition: "Là hệ thống tổng đài điện thoại nội bộ doanh nghiệp được đặt và vận hành hoàn toàn trên máy chủ của nhà cung cấp dịch vụ đám mây, thay thế hoàn toàn tủ tổng đài phần cứng đặt tại trụ sở văn phòng."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Tự động phân phối cuộc gọi (ACD):</strong> Phân bổ cuộc gọi của khách hàng đến đúng nhân viên trực theo kỹ năng hoặc theo vòng tròn (Round-robin).",
                    "<strong>Tương tác thoại tự động (IVR - Phím bấm tự động):</strong> Hướng dẫn khách hàng 'Nhấn phím 1 gặp phòng kinh doanh, phím 2 gặp phòng kỹ thuật'.",
                    "<strong>Hộp thư thoại gửi về Email (Voicemail to Email):</strong> Tự động ghi âm lời nhắn của khách và chuyển thành file âm thanh đính kèm gửi thẳng vào email của nhân viên phụ trách."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s3-3-internet-fax",
          number: "3.3",
          title: "Internet Fax (Cloud Fax / Online Fax)",
          parts: [
            {
              id: "cloud-ch8-s3-3-p1",
              label: "3.3",
              title: "Cơ chế Fax Không Giấy Tờ Qua Email",
              content: [
                {
                  type: "definition",
                  term: "Internet Fax (Cloud Fax)",
                  definition: "Là giải pháp gửi và nhận tài liệu fax thông qua mạng Internet và hộp thư điện tử (Email-to-Fax và Fax-to-Email) mà không cần đến máy fax phần cứng chuyên dụng, giấy in hoặc đường dây điện thoại tương tự cố định."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Quy trình gửi fax:</strong> Người dùng chỉ cần gửi email đính kèm tệp PDF tới địa chỉ dạng <code>[Số_Điện_Thoại]@faxprovider.com</code>, hệ thống cloud tự động chuyển đổi và gửi tới máy fax của người nhận.",
                    "<strong>Quy trình nhận fax:</strong> Khi có bản fax gửi tới số fax ảo của công ty, máy chủ cloud tự chuyển bản fax thành tệp PDF và forward thẳng vào hòm thư nội bộ.",
                    "<strong>Lợi ích vượt trội:</strong> Không bao giờ bị bận máy, không sợ kẹt giấy, bảo mật tài liệu mật tối đa (chỉ người có email mới xem được bản fax)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s3-4-economic-benefits",
          number: "3.4",
          title: "Lợi ích kinh tế & Vận hành của Cloud Voice",
          parts: [
            {
              id: "cloud-ch8-s3-4-p1",
              label: "3.4",
              title: "Cắt giảm Chi phí & Nâng cao Tính Linh hoạt",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Cắt giảm CapEx (Chi phí đầu tư ban đầu):</strong> Doanh nghiệp không cần mua tủ tổng đài đắt tiền, không tốn tiền đi dây cáp điện thoại khắp văn phòng.",
                    "<strong>Miễn phí gọi nội bộ liên chi nhánh:</strong> Các cuộc gọi giữa trụ sở chính tại Hà Nội và chi nhánh tại TP.HCM hoặc nước ngoài đều chạy qua mạng Internet nội bộ nên cước phí bằng 0.",
                    "<strong>Mở rộng quy mô tức thì:</strong> Khi tuyển thêm 50 nhân viên mới, chỉ cần vài cú click chuột trên web portal để cấp 50 số máy lẻ mới mà không cần kéo thêm dây."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Giao thức nào chịu trách nhiệm thiết lập, quản lý và kết thúc phiên gọi (Call Signaling) trong hệ thống thoại VoIP đám mây?",
                  options: [
                    "SIP (Session Initiation Protocol)",
                    "RTP (Real-time Transport Protocol)",
                    "SNMP (Simple Network Management Protocol)",
                    "ICMP (Internet Control Message Protocol)"
                  ],
                  answerIndex: 0,
                  explanation: "SIP là giao thức báo hiệu tầng ứng dụng dùng để thiết lập, hiệu chỉnh và giải phóng phiên truyền thông đa phương tiện. Trong khi đó, RTP mới là giao thức trực tiếp vận chuyển dữ liệu âm thanh."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC IV: CHIA SẺ VÀ ĐỒNG BIÊN TẬP TÀI LIỆU TRỰC TUYẾN
       ============================ */
    {
      id: "cloud-ch8-s4",
      roman: "IV",
      title: "Chia sẻ và Đồng biên tập tài liệu trực tuyến (Document Sharing)",
      subsections: [
        {
          id: "cloud-ch8-s4-1-doc-collab",
          number: "4.1",
          title: "Bản chất của Document Collaboration",
          parts: [
            {
              id: "cloud-ch8-s4-1-p1",
              label: "4.1",
              title: "Phòng Thí Nghiệm Đồng Biên Tập Thời Gian Thực",
              content: [
                {
                  type: "realtime-coauthoring-simulator"
                },
                {
                  type: "paragraph",
                  text: "Chia sẻ và đồng biên tập tài liệu trực tuyến là bước tiến mang tính cách mạng, chuyển đổi từ mô hình <em>'Chia sẻ tệp tĩnh'</em> sang mô hình <em>'Không gian làm việc đồng thời'</em>."
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s4-2-cloud-office-suites",
          number: "4.2",
          title: "Các bộ công cụ văn phòng đám mây (Cloud Office Suites)",
          parts: [
            {
              id: "cloud-ch8-s4-2-p1",
              label: "4.2",
              title: "Google Workspace vs Microsoft 365 Online",
              content: [
                {
                  type: "paragraph",
                  text: "Hai hệ sinh thái thống trị thị trường hiện nay đại diện cho 2 triết lý thiết kế đám mây điển hình:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Google Workspace (Docs, Sheets, Slides):</strong> Tiên phong với triết lý 'Cloud-Native', tối ưu 100% trên nền tảng web, tốc độ đồng bộ thời gian thực siêu mượt mà.",
                    "<strong>Microsoft 365 (Word, Excel, PowerPoint Online):</strong> Thế mạnh về tính năng văn phòng chuyên sâu, độ tương thích hoàn hảo với các macro/định dạng phức tạp của phần mềm desktop truyền thống.",
                    "<strong>Điểm chung:</strong> Đều hỗ trợ lưu trữ tự động (Auto-save) sau từng phím gõ, hiển thị vị trí con trỏ của từng người và tính năng gắn thẻ tag (Mention @name) để giao việc."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s4-3-version-control",
          number: "4.3",
          title: "Quản lý lịch sử phiên bản (Version Control & History)",
          parts: [
            {
              id: "cloud-ch8-s4-3-p1",
              label: "4.3",
              title: "Cơ chế Lưu vết & Khôi phục Phiên bản",
              content: [
                {
                  type: "definition",
                  term: "Cloud Version History (Lịch sử phiên bản đám mây)",
                  definition: "Là tính năng tự động ghi lại toàn bộ các lần thay đổi của tài liệu theo dòng thời gian, đánh dấu mã màu riêng biệt cho từng người chỉnh sửa, cho phép so sánh sự khác biệt và khôi phục về bất kỳ thời điểm nào trong quá khứ."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Triệt tiêu nỗi lo mất dữ liệu:</strong> Nếu một thành viên lỡ tay xóa nhầm nội dung quan trọng, quản trị viên chỉ mất 2 cú click chuột để khôi phục phiên bản trước đó.",
                    "<strong>Đặt tên mốc phiên bản (Named Versions):</strong> Cho phép đặt tên mốc như 'Bản duyệt Hội đồng Quản trị' hoặc 'Bản gửi Khách hàng' để dễ dàng truy vấn sau này."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s4-4-granular-permissions",
          number: "4.4",
          title: "Phân quyền truy cập chi tiết (Granular Permissions)",
          parts: [
            {
              id: "cloud-ch8-s4-4-p1",
              label: "4.4",
              title: "4 Cấp độ Quyền Hạn Cốt Lõi",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Owner (Chủ sở hữu):</strong> Toàn quyền kiểm soát tài liệu, có quyền xóa file, chuyển quyền sở hữu và cấu hình chính sách bảo mật.",
                    "<strong>Editor (Người chỉnh sửa):</strong> Có quyền gõ thêm nội dung, xóa văn bản, chấp nhận hoặc từ chối các đề xuất chỉnh sửa.",
                    "<strong>Commenter (Người nhận xét):</strong> Không được sửa trực tiếp vào văn bản gốc, chỉ có quyền bôi đen và để lại các ghi chú nhận xét hoặc đề xuất (Suggestions).",
                    "<strong>Viewer (Người chỉ xem):</strong> Chỉ có quyền đọc nội dung, có thể bị vô hiệu hóa quyền tải xuống (download), in ấn (print) hoặc sao chép (copy)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s4-5-security-compliance",
          number: "4.5",
          title: "Bảo mật & Ngăn ngừa rò rỉ dữ liệu (DLP & Compliance)",
          parts: [
            {
              id: "cloud-ch8-s4-5-p1",
              label: "4.5",
              title: "Lá chắn An toàn Thông tin Đám mây",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Chính sách DLP (Data Loss Prevention):</strong> Quét tự động nội dung tệp tin để phát hiện dữ liệu nhạy cảm, lập tức chặn chia sẻ ra ngoài tên miền nội bộ của công ty.",
                    "<strong>Liên kết chia sẻ có thời hạn (Expiring Links):</strong> Tự động thu hồi quyền truy cập của khách hàng sau 7 ngày hoặc 30 ngày.",
                    "<strong>Hình mờ bảo mật (Dynamic Watermark):</strong> Tự động in mờ email của người đang xem lên trang tài liệu để chống chụp ảnh màn hình làm rò rỉ bí mật kinh doanh."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Trong Google Docs hoặc Microsoft 365 Online, thuật toán nào chịu trách nhiệm giải quyết xung đột khi nhiều người cùng gõ chữ đồng thời vào một dòng văn bản?",
                  options: [
                    "Operational Transformation (OT) hoặc CRDT",
                    "Two-Phase Locking (2PL)",
                    "Round-Robin Scheduling",
                    "Dijkstra Algorithm"
                  ],
                  answerIndex: 0,
                  explanation: "Operational Transformation (OT) và CRDT là nền tảng thuật toán cốt lõi cho phép đồng bộ hóa dữ liệu cộng tác đồng thời thời gian thực mà không cần dùng đến kỹ thuật khóa tệp (File Locking)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC V: BLOG DOANH NGHIỆP, WIKI & COLLABORATION EXCHANGE
       ============================ */
    {
      id: "cloud-ch8-s5",
      roman: "V",
      title: "Blog doanh nghiệp, Wiki & Sàn giao dịch cộng tác",
      subsections: [
        {
          id: "cloud-ch8-s5-1-corporate-blogs",
          number: "5.1",
          title: "Blog doanh nghiệp (Corporate Blogs) trong kỷ nguyên Web 2.0",
          parts: [
            {
              id: "cloud-ch8-s5-1-p1",
              label: "5.1",
              title: "Kênh Truyền thông Đa chiều Doanh nghiệp",
              content: [
                {
                  type: "definition",
                  term: "Corporate Blog (Blog Doanh nghiệp)",
                  definition: "Là kênh xuất bản nội dung số trực tuyến được một tổ chức hoặc doanh nghiệp quản lý nhằm mục đích truyền thông chiến lược, phát động phong trào nội bộ hoặc tương tác với khách hàng thông qua các bài viết mang tính đối thoại thân mật."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Đặc trưng Web 2.0:</strong> Không phải thông cáo báo chí khô cứng 1 chiều, blog mở tính năng bình luận (Comments) để nhận phản hồi từ nhân viên và đối tác.",
                    "<strong>Internal Blog:</strong> Nơi ban giám đốc chia sẻ tầm nhìn, lắng nghe tâm tư nhân viên, kết nối văn hóa doanh nghiệp.",
                    "<strong>External Blog:</strong> Chia sẻ kiến thức chuyên môn, xây dựng thương hiệu uy tín và thu hút khách hàng tiềm năng."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s5-2-enterprise-wikis",
          number: "5.2",
          title: "Wiki doanh nghiệp (Enterprise Wikis): Nền tảng tri thức mở",
          parts: [
            {
              id: "cloud-ch8-s5-2-p1",
              label: "5.2",
              title: "Kho Tri Thức Tập Thể & Cơ chế Biên Tập Mở",
              content: [
                {
                  type: "definition",
                  term: "Enterprise Wiki (Wiki Doanh nghiệp)",
                  definition: "Là nền tảng website cộng tác mở cho phép bất kỳ nhân viên nào trong tổ chức cũng có thể tạo mới, chỉnh sửa, liên kết và bổ sung nội dung vào kho tri thức chung của công ty."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Triết lý 'Trí tuệ tập thể':</strong> Tri thức không nằm im trong đầu của một cá nhân mà được văn bản hóa thành tài sản chung của công ty.",
                    "<strong>Ứng dụng phổ biến:</strong> Tài liệu hóa quy trình vận hành chuẩn (SOP), tài liệu hướng dẫn kỹ thuật API, quy chế nội bộ và tài liệu onboarding người mới.",
                    "<strong>Sản phẩm tiêu biểu:</strong> Atlassian Confluence, Notion Enterprise, MediaWiki."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s5-3-collaboration-exchange",
          number: "5.3",
          title: "Sàn giao dịch cộng tác (Collaboration Exchange)",
          parts: [
            {
              id: "cloud-ch8-s5-3-p1",
              label: "5.3",
              title: "Nền tảng Kết nối Cung - Cầu Nguồn Lực Đám Mây",
              content: [
                {
                  type: "definition",
                  term: "Collaboration Exchange (Sàn giao dịch cộng tác)",
                  definition: "Là một thị trường điện tử dựa trên đám mây (Cloud Marketplace) kết nối các tổ chức, đối tác và chuyên gia lại với nhau nhằm chia sẻ tài nguyên, đấu thầu dịch vụ, phối hợp dự án và phân phối năng lực tính toán."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Giao dịch tài nguyên B2B:</strong> Các công ty có thể thuê ngoài năng lực chuyên môn hoặc tài nguyên máy móc trong chuỗi cung ứng đám mây.",
                    "<strong>Hợp đồng thông minh & Thanh toán tự động:</strong> Minh bạch hóa các mốc nghiệm thu công việc và thanh toán dựa trên kết quả bàn giao."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s5-4-knowledge-base",
          number: "5.4",
          title: "Cơ sở tri thức tập trung (Centralized Knowledge Base)",
          parts: [
            {
              id: "cloud-ch8-s5-4-p1",
              label: "5.4",
              title: "Hệ thống Quản trị Tri thức Tự Phục vụ",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Tìm kiếm ngữ nghĩa (Semantic Search):</strong> Sử dụng công cụ tìm kiếm thông minh giúp nhân viên tra cứu nhanh giải pháp cho các sự cố kỹ thuật thường gặp.",
                    "<strong>Giảm tải cho đội hỗ trợ (IT Helpdesk):</strong> Nhân viên tự tìm kiếm câu trả lời trong mục FAQ và Knowledge Base, giảm 40-50% số lượng ticket yêu cầu hỗ trợ."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s5-5-social-intranet",
          number: "5.5",
          title: "Mạng xã hội nội bộ doanh nghiệp (Social Intranet)",
          parts: [
            {
              id: "cloud-ch8-s5-5-p1",
              label: "5.5",
              title: "Tương tác Xã hội trong Không gian Doanh nghiệp",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Tương tác kiểu mạng xã hội:</strong> Cho phép Like, Share, Tag và bình luận dưới các thông báo quan trọng của công ty (như Yammer, Workplace, Lark).",
                    "<strong>Gắn kết nhân viên từ xa:</strong> Xây dựng các hội nhóm sở thích, phong trào thể thao, tạo cảm giác gắn bó dù nhân viên đang làm việc phân tán tại nhà."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Điểm khác biệt căn bản nhất giữa Enterprise Wiki và Corporate Blog là gì?",
                  options: [
                    "Wiki cho phép tập thể cùng chỉnh sửa và bổ sung nội dung; còn Blog mang tính xuất bản 1 chiều từ tác giả kèm phần bình luận phản hồi.",
                    "Wiki chỉ lưu trữ hình ảnh, còn Blog chỉ lưu trữ văn bản.",
                    "Wiki chỉ dùng được khi có mạng dây LAN, còn Blog dùng được trên đám mây.",
                    "Wiki đòi hỏi trả phí bản quyền hàng triệu USD, còn Blog luôn miễn phí."
                  ],
                  answerIndex: 0,
                  explanation: "Wiki được thiết kế theo cấu trúc tri thức mở để mọi thành viên cùng biên tập; trong khi Blog là công cụ xuất bản thông điệp theo dòng thời gian từ người viết tới độc giả."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VI: THUYẾT TRÌNH TRỰC TUYẾN, BÀI GIẢNG ẢO & STREAMING VIDEO
       ============================ */
    {
      id: "cloud-ch8-s6",
      roman: "VI",
      title: "Thuyết trình trực tuyến, Bài giảng ảo & Streaming Video",
      subsections: [
        {
          id: "cloud-ch8-s6-1-virtual-presentations",
          number: "6.1",
          title: "Thuyết trình trực tuyến (Virtual Presentations)",
          parts: [
            {
              id: "cloud-ch8-s6-1-p1",
              label: "6.1",
              title: "Thuyết trình Đám mây & Điều phối Tương tác",
              content: [
                {
                  type: "paragraph",
                  text: "Thuyết trình trực tuyến trên đám mây đã vượt xa việc chỉ 'chia sẻ màn hình PowerPoint':"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Đồng bộ trình chiếu đám mây:</strong> Khán giả xem trực tiếp từng slide theo sự điều khiển của diễn giả, không bị trễ hình ảnh hoặc mờ nét chữ.",
                    "<strong>Bút vẽ laser ảo & Chú thích trực tiếp:</strong> Diễn giả dùng bút vẽ ảo để khoanh tròn các số liệu quan trọng trên màn hình của tất cả người xem.",
                    "<strong>Bình chọn trực tiếp (Live Polling):</strong> Khán giả quét mã QR hoặc bấm nút trên màn hình để bỏ phiếu, kết quả biểu đồ cập nhật nhảy số theo thời gian thực."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s6-2-virtual-classrooms",
          number: "6.2",
          title: "Lớp học ảo & Đào tạo từ xa (Virtual Classrooms & Lectures)",
          parts: [
            {
              id: "cloud-ch8-s6-2-p1",
              label: "6.2",
              title: "Không gian Giáo dục Tương tác Đa phương tiện",
              content: [
                {
                  type: "definition",
                  term: "Virtual Classroom (Lớp học ảo)",
                  definition: "Là môi trường giảng dạy và học tập trực tuyến mô phỏng lớp học truyền thống, cung cấp đầy đủ các công cụ tương tác 2 chiều giữa giảng viên và học viên (như bảng trắng kỹ thuật số, chia nhóm thảo luận, giơ tay phát biểu và làm bài kiểm tra nhanh)."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Phòng thảo luận nhóm (Breakout Rooms):</strong> Giảng viên chia lớp học 100 sinh viên thành 20 phòng nhỏ 5 người để làm bài tập nhóm, sau đó tự động thu hồi về phòng lớn.",
                    "<strong>Bảng trắng chung (Digital Whiteboard):</strong> Cả lớp cùng vẽ sơ đồ tư duy, dán giấy ghi chú (Sticky notes) lên một không gian vẽ vô tận."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s6-3-enterprise-video-streaming",
          number: "6.3",
          title: "Truyền phát video doanh nghiệp (Enterprise Video Streaming)",
          parts: [
            {
              id: "cloud-ch8-s6-3-p1",
              label: "6.3",
              title: "Hạ tầng Phân phối Video Quy mô Lớn",
              content: [
                {
                  type: "paragraph",
                  text: "Truyền phát video doanh nghiệp (Enterprise Video Streaming) đòi hỏi mạng lưới phân phối nội dung (CDN) mạnh mẽ để tránh làm nghẽn mạng nội bộ công ty:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Hội nghị toàn thể công ty (Town Hall / All-Hands):</strong> Tổng giám đốc phát biểu trực tiếp tới hàng vạn nhân viên trên toàn cầu với chất lượng Full HD.",
                    "<strong>eCDN (Enterprise Content Delivery Network):</strong> Kỹ thuật lưu đệm video tại các máy chủ chi nhánh cục bộ, giúp 500 nhân viên cùng xem video đào tạo mà chỉ tốn 1 luồng băng thông Internet tải về."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s6-4-analytics-engagement",
          number: "6.4",
          title: "Phân tích mức độ tương tác (Analytics & Engagement Tracking)",
          parts: [
            {
              id: "cloud-ch8-s6-4-p1",
              label: "6.4",
              title: "Đo lường Hiệu quả Bài giảng & Sự Chú Ý",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Bản đồ nhiệt chú ý (Attention Heatmaps):</strong> Thống kê đoạn video nào học viên xem đi xem lại nhiều nhất hoặc đoạn nào bị tua qua nhiều nhất.",
                    "<strong>Báo cáo hoàn thành đào tạo:</strong> Tự động ghi nhận chứng chỉ khi nhân viên xem đủ 100% thời lượng và vượt qua bài trắc nghiệm cuối khóa."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s6-5-bandwidth-optimization",
          number: "6.5",
          title: "Tối ưu hóa băng thông & Mã hóa truyền phát (QoS & Codec)",
          parts: [
            {
              id: "cloud-ch8-s6-5-p1",
              label: "6.5",
              title: "Chuẩn Nén Video & Cơ chế Ưu tiên Gói tin",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Chuẩn nén thế hệ mới (H.265 / HEVC & AV1):</strong> Giảm 50% dung lượng băng thông yêu cầu so với chuẩn cũ H.264 nhưng vẫn giữ nguyên độ sắc nét.",
                    "<strong>Chất lượng dịch vụ QoS (Quality of Service):</strong> Cấu hình bộ định tuyến mạng ưu tiên các gói tin thoại và video đi trước các gói tin tải file thông thường, chống giật hình."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Giải pháp kỹ thuật mạng nào giúp hàng ngàn nhân viên tại cùng một tòa nhà văn phòng cùng xem một buổi truyền phát video trực tiếp (All-Hands) mà không làm sập đường truyền Internet của công ty?",
                  options: [
                    "eCDN (Enterprise Content Delivery Network) lưu đệm cục bộ",
                    "Cắt toàn bộ mạng Wi-Fi và chỉ dùng mạng 3G cá nhân",
                    "Chuyển toàn bộ video sang định dạng file văn bản TXT",
                    "Yêu cầu mỗi nhân viên tải video về máy tính trước 3 ngày"
                  ],
                  answerIndex: 0,
                  explanation: "eCDN hoạt động bằng cách tải 1 luồng video duy nhất từ Internet về máy chủ gateway cục bộ của công ty, sau đó phân phối lại nội bộ cho hàng ngàn nhân viên, tiết kiệm tới 90-95% băng thông Internet."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ============================
       MỤC VII: TỔNG KẾT & CHIẾN LƯỢC TRIỂN KHAI CỘNG TÁC ĐÁM MÂY
       ============================ */
    {
      id: "cloud-ch8-s7",
      roman: "VII",
      title: "Tổng kết & Chiến lược triển khai Cộng tác Đám mây",
      subsections: [
        {
          id: "cloud-ch8-s7-1-framework",
          number: "7.1",
          title: "Khung chiến lược triển khai văn hóa cộng tác (Adoption Framework)",
          parts: [
            {
              id: "cloud-ch8-s7-1-p1",
              label: "7.1",
              title: "Lộ Trình Chuyển Đổi Số Nơi Làm Việc",
              content: [
                {
                  type: "paragraph",
                  text: "Triển khai cộng tác đám mây thành công đòi hỏi sự phối hợp nhịp nhàng giữa 3 yếu tố: <strong>Con người (People) - Quy trình (Process) - Công nghệ (Technology)</strong>:"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bước 1 - Đánh giá nhu cầu:</strong> Khảo sát thói quen làm việc và các điểm nghẽn giao tiếp hiện tại của nhân viên.",
                    "<strong>Bước 2 - Lựa chọn nền tảng thống nhất:</strong> Tránh tình trạng phân mảnh (phòng này dùng Slack, phòng kia dùng Zalo, phòng nọ dùng Teams).",
                    "<strong>Bước 3 - Đào tạo & Thay đổi văn hóa:</strong> Hướng dẫn văn hóa ứng xử trực tuyến (Netiquette), cách đặt trạng thái presence và quy chuẩn lưu trữ file.",
                    "<strong>Bước 4 - Đo lường & Tối ưu:</strong> Theo dõi chỉ số áp dụng công cụ (Adoption Rate) và mức độ hài lòng của nhân viên."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s7-2-security-compliance-strategy",
          number: "7.2",
          title: "Chiến lược an ninh, tuân thủ & Quản trị rủi ro",
          parts: [
            {
              id: "cloud-ch8-s7-2-p1",
              label: "7.2",
              title: "Bảo Vệ Tài Sản Trí Tuệ Doanh Nghiệp",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Xác thực đa yếu tố bắt buộc (Enforced MFA):</strong> Lá chắn số 1 ngăn chặn 99.9% nguy cơ bị chiếm đoạt tài khoản làm việc.",
                    "<strong>Nguyên tắc đặc quyền tối thiểu (Principle of Least Privilege):</strong> Chỉ cấp quyền Xem (Viewer) cho người ngoài, không tùy tiện cấp quyền Chỉnh sửa (Editor).",
                    "<strong>Quản lý thiết bị di động (MDM - Mobile Device Management):</strong> Cho phép xóa dữ liệu công ty từ xa khi nhân viên bị mất điện thoại hoặc nghỉ việc."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s7-3-master-cheat-sheet",
          number: "7.3",
          title: "Master Cheat Sheet: Bảng ma trận so sánh toàn diện 8 trụ cột",
          parts: [
            {
              id: "cloud-ch8-s7-3-p1",
              label: "7.3",
              title: "Bảng Ma Trận Tổng Kết 8 Công Nghệ Cộng Tác",
              content: [
                {
                  type: "collaboration-master-summary-matrix"
                }
              ]
            }
          ]
        },
        {
          id: "cloud-ch8-s7-4-core-takeaways",
          number: "7.4",
          title: "Điểm chốt kiến thức cốt lõi & Sơ đồ ôn tập thần tốc",
          parts: [
            {
              id: "cloud-ch8-s7-4-p1",
              label: "7.4",
              title: "Tổng Kết Toàn Chương 8",
              content: [
                {
                  type: "conclusion",
                  title: "6 Bài học Xương máu về Cloud Collaboration cần khắc ghi:",
                  items: [
                    "1. Bản chất cốt lõi: Chuyển từ gửi file đính kèm rời rạc sang làm việc chung trên một nguồn sự thật duy nhất (Single Source of Truth).",
                    "2. VoIP & Cloud PBX: Sử dụng SIP (báo hiệu) và RTP (vận chuyển âm thanh) qua mạng IP, cắt giảm 60-80% chi phí viễn thông.",
                    "3. Đồng biên tập (Co-authoring): Operational Transformation (OT) và CRDT giúp nhiều người cùng gõ chữ mà không bị ghi đè hay mất dữ liệu.",
                    "4. Wiki vs Blog: Wiki là tri thức mở tập thể cùng chỉnh sửa; Blog là phát ngôn 1 chiều có phần bình luận phản hồi.",
                    "5. An ninh phân quyền: Luôn áp dụng 4 cấp độ Owner - Editor - Commenter - Viewer cùng chính sách ngăn chặn rò rỉ dữ liệu (DLP).",
                    "6. Tối ưu hạ tầng: Sử dụng eCDN và chuẩn nén video thế hệ mới để truyền phát video trực tuyến mà không nghẽn mạng công ty."
                  ]
                },
                {
                  type: "micro-quiz",
                  question: "Câu hỏi tổng kết: Mô hình làm việc cộng tác trên đám mây (Cloud Collaboration) chuyển đổi chi phí công nghệ thông tin của doanh nghiệp theo hình thức nào?",
                  options: [
                    "Chuyển từ chi phí đầu tư vốn lớn ban đầu (CapEx) sang chi phí vận hành định kỳ linh hoạt theo nhu cầu sử dụng thực tế (OpEx)",
                    "Chuyển toàn bộ hệ thống sang miễn phí 100% không bao giờ phải trả tiền",
                    "Bắt buộc doanh nghiệp phải mua thêm hàng trăm máy chủ vật lý đặt tại trụ sở văn phòng",
                    "Chuyển từ thanh toán trực tuyến sang chỉ thanh toán bằng tiền mặt trực tiếp"
                  ],
                  answerIndex: 0,
                  explanation: "Đám mây biến các hệ thống tổng đài, máy chủ email, lưu trữ tệp cồng kềnh (CapEx) thành dịch vụ tiện ích thanh toán theo thuê bao người dùng hàng tháng (OpEx), giúp tối ưu dòng tiền cho doanh nghiệp."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   DANH MỤC 12 THẺ FLASHCARDS SM-2 (CHƯƠNG 8)
   ============================================================ */
export const cloudChapter8Flashcards = [
  {
    id: "cloud_fc_13",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s1-2-definition",
    front: "Cloud-based Collaboration là gì và 3 trụ cột hành động cốt lõi của nó là gì?",
    back: "Là việc sử dụng công cụ và nền tảng đám mây để hỗ trợ cá nhân và đội nhóm làm việc cùng nhau theo thời gian thực. 3 trụ cột cốt lõi gồm: Working Together (Làm việc cùng nhau), Sharing Information (Chia sẻ thông tin), và Real-time Interaction (Tương tác thời gian thực).",
    tag: "Khái niệm",
    difficulty: "easy"
  },
  {
    id: "cloud_fc_14",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s2-1-web-im",
    front: "Web-based IM khác gì so với Enterprise IM?",
    back: "Web-based IM chạy trên trình duyệt (Zero-install, linh hoạt nhưng giới hạn sandbox); còn Enterprise IM (như Slack, Teams) có bảo mật đa tầng E2EE, phân quyền kênh, tích hợp SSO Active Directory và lưu trữ nhật ký kiểm toán (Audit Logs).",
    tag: "IM & Video",
    difficulty: "medium"
  },
  {
    id: "cloud_fc_15",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s2-3-presence-security",
    front: "Công nghệ hiện diện (Presence Technology) hoạt động ra sao và ứng dụng giao thức nào?",
    back: "Tự động phát hiện và hiển thị trạng thái sẵn sàng của người dùng (Online, Busy, Away, Offline), tự đồng bộ với lịch họp Calendar. Ứng dụng các giao thức tiêu chuẩn như SIP/SIMPLE và XMPP.",
    tag: "Presence",
    difficulty: "medium"
  },
  {
    id: "cloud_fc_16",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s2-4-web-conference",
    front: "Phân biệt giữa Web Conferencing (Webinar) và Video Conferencing thông thường?",
    back: "Web Conferencing phục vụ mô hình 1-nhiều (hội thảo lớn, chia sẻ slide, Q&A kiểm duyệt, ghi hình); còn Video Conferencing phục vụ mô hình nhiều-nhiều (đàm thoại video tương tác 2 chiều độ trễ siêu thấp giữa các thành viên).",
    tag: "Conferencing",
    difficulty: "medium"
  },
  {
    id: "cloud_fc_17",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s3-1-voip",
    front: "VoIP là gì và bộ đôi giao thức SIP - RTP đóng vai trò gì?",
    back: "VoIP số hóa giọng nói thành các gói tin IP truyền qua mạng Internet. SIP (Session Initiation Protocol) chịu trách nhiệm báo hiệu/thiết lập cuộc gọi; còn RTP (Real-time Transport Protocol) vận chuyển luồng gói tin âm thanh thực tế.",
    tag: "VoIP & Phone",
    difficulty: "hard"
  },
  {
    id: "cloud_fc_18",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s3-2-cloud-pbx",
    front: "Cloud PBX (Hosted PBX) mang lại những lợi ích vận hành nào so với tổng đài truyền thống?",
    back: "Loại bỏ chi phí mua tủ tổng đài phần cứng (giảm CapEx), hỗ trợ số máy lẻ di động mọi nơi (Mobility), tính năng phân bổ cuộc gọi thông minh (ACD), phím bấm tự động (IVR) và hộp thư thoại gửi qua email (Voicemail to Email).",
    tag: "Cloud PBX",
    difficulty: "easy"
  },
  {
    id: "cloud_fc_19",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s3-3-internet-fax",
    front: "Internet Fax (Cloud Fax) giải quyết các nhược điểm nào của máy fax truyền thống?",
    back: "Triệt tiêu nhu cầu máy fax vật lý, giấy in và mực in; cho phép gửi/nhận trực tiếp qua email dạng PDF (Email-to-Fax / Fax-to-Email); không bị kẹt giấy, không nghẽn đường dây và tăng cường bảo mật tài liệu.",
    tag: "Internet Fax",
    difficulty: "easy"
  },
  {
    id: "cloud_fc_20",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s4-1-doc-collab",
    front: "Giải pháp đồng biên tập đám mây giải quyết xung đột tài liệu bằng cơ chế nào thay thế File Locking?",
    back: "Thay vì khóa tệp không cho người khác sửa (File Locking), đám mây sử dụng thuật toán Operational Transformation (OT) hoặc CRDT để tự động hoán đổi và đồng bộ các thao tác gõ chữ cùng lúc mà không làm mất nội dung.",
    tag: "Document Sharing",
    difficulty: "hard"
  },
  {
    id: "cloud_fc_21",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s4-4-granular-permissions",
    front: "4 cấp độ phân quyền truy cập tài liệu phổ biến trên đám mây là gì?",
    back: "1. Owner (Toàn quyền, xóa file, phân quyền); 2. Editor (Chỉnh sửa nội dung trực tiếp); 3. Commenter (Chỉ nhận xét/góp ý); 4. Viewer (Chỉ xem, có thể chặn tải xuống và in ấn).",
    tag: "Phân quyền",
    difficulty: "medium"
  },
  {
    id: "cloud_fc_22",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s5-2-enterprise-wikis",
    front: "Enterprise Wiki đóng vai trò gì trong quản trị tri thức doanh nghiệp?",
    back: "Là nền tảng website cộng tác mở cho phép tập thể nhân viên cùng đóng góp, bổ sung và cập nhật tri thức (quy trình SOP, tài liệu kỹ thuật, onboarding), biến tri thức cá nhân thành tài sản số chung của công ty.",
    tag: "Wiki & Knowledge",
    difficulty: "easy"
  },
  {
    id: "cloud_fc_23",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s6-2-virtual-classrooms",
    front: "Virtual Classroom (Lớp học ảo) cung cấp những công cụ tương tác đặc thù nào?",
    back: "Bảng trắng kỹ thuật số (Digital Whiteboard), chia phòng thảo luận nhóm nhỏ (Breakout Rooms), thăm dò ý kiến tức thời (Live Polls), giơ tay phát biểu và kiểm soát quyền micro/camera của giảng viên.",
    tag: "Virtual Classroom",
    difficulty: "medium"
  },
  {
    id: "cloud_fc_24",
    chapterId: "cloud-ch8",
    subsectionId: "cloud-ch8-s7-1-framework",
    front: "3 trụ cột cần đồng bộ khi triển khai văn hóa cộng tác đám mây trong doanh nghiệp là gì?",
    back: "Con người (People - văn hóa, đào tạo), Quy trình (Process - quy chuẩn làm việc, phê duyệt) và Công nghệ (Technology - chọn nền tảng thống nhất, bảo mật MFA/DLP).",
    tag: "Chiến lược",
    difficulty: "hard"
  }
];

/* ============================================================
   TỪ ĐIỂN THUẬT NGỮ SONG NGỮ (CHƯƠNG 8)
   ============================================================ */
export const cloudChapter8Glossary = [
  {
    term: "Cloud Collaboration",
    viTerm: "Cộng tác trên nền tảng đám mây",
    definition: "Môi trường số nơi các cá nhân cùng làm việc, tương tác và chia sẻ tài nguyên thời gian thực trên đám mây.",
    category: "Khái niệm",
    chapterId: "cloud-ch8"
  },
  {
    term: "Web-based IM",
    viTerm: "Tin nhắn tức thời trên nền web",
    definition: "Dịch vụ chat chạy hoàn toàn trên trình duyệt thông qua HTTP/WebSockets mà không cần cài đặt phần mềm.",
    category: "Giao tiếp",
    chapterId: "cloud-ch8"
  },
  {
    term: "Enterprise IM",
    viTerm: "Tin nhắn doanh nghiệp",
    definition: "Hệ thống chat nội bộ chuyên nghiệp có tích hợp SSO, phân quyền kênh, bảo mật E2EE và lưu vết kiểm toán.",
    category: "Giao tiếp",
    chapterId: "cloud-ch8"
  },
  {
    term: "Presence Technology",
    viTerm: "Công nghệ hiện diện",
    definition: "Tính năng tự động nhận diện và hiển thị trạng thái sẵn sàng kết nối của người dùng theo thời gian thực.",
    category: "Mạng & Giao thức",
    chapterId: "cloud-ch8"
  },
  {
    term: "WebRTC",
    viTerm: "Truyền thông web thời gian thực",
    definition: "Chuẩn mở hỗ trợ truyền âm thanh, hình ảnh và dữ liệu ngang hàng trực tiếp giữa các trình duyệt web.",
    category: "Mạng & Giao thức",
    chapterId: "cloud-ch8"
  },
  {
    term: "VoIP (Voice over IP)",
    viTerm: "Thoại qua giao thức Internet",
    definition: "Công nghệ truyền tải giọng nói dưới dạng các gói tin số hóa qua mạng IP thay thế đường truyền PSTN.",
    category: "Hạ tầng",
    chapterId: "cloud-ch8"
  },
  {
    term: "SIP (Session Initiation Protocol)",
    viTerm: "Giao thức khởi tạo phiên",
    definition: "Giao thức báo hiệu tầng ứng dụng dùng để thiết lập, hiệu chỉnh và ngắt cuộc gọi đa phương tiện trong VoIP.",
    category: "Mạng & Giao thức",
    chapterId: "cloud-ch8"
  },
  {
    term: "Cloud PBX",
    viTerm: "Tổng đài ảo đám mây",
    definition: "Hệ thống tổng đài điện thoại nội bộ được lưu trữ và định tuyến hoàn toàn trên máy chủ của nhà cung cấp cloud.",
    category: "Hạ tầng",
    chapterId: "cloud-ch8"
  },
  {
    term: "Internet Fax",
    viTerm: "Fax qua mạng Internet",
    definition: "Dịch vụ gửi và nhận bản fax dưới dạng tệp tin điện tử (như PDF) qua hòm thư email không cần máy in.",
    category: "Ứng dụng",
    chapterId: "cloud-ch8"
  },
  {
    term: "Operational Transformation (OT)",
    viTerm: "Biến đổi thao tác",
    definition: "Thuật toán cốt lõi giải quyết xung đột khi nhiều người cùng gõ chữ đồng thời vào một tài liệu thời gian thực.",
    category: "Thuật toán",
    chapterId: "cloud-ch8"
  },
  {
    term: "File Locking",
    viTerm: "Khóa tệp",
    definition: "Cơ chế cổ điển chỉ cho phép 1 người được ghi vào tệp, khóa quyền chỉnh sửa của những người khác.",
    category: "Bảo mật",
    chapterId: "cloud-ch8"
  },
  {
    term: "Granular Permissions",
    viTerm: "Phân quyền chi tiết",
    definition: "Cơ chế thiết lập quyền hạn chính xác theo từng cấp độ (Owner, Editor, Commenter, Viewer) cho từng tài nguyên.",
    category: "Bảo mật",
    chapterId: "cloud-ch8"
  },
  {
    term: "Enterprise Wiki",
    viTerm: "Wiki doanh nghiệp",
    definition: "Kho tri thức mở nội bộ cho phép toàn bộ nhân viên cùng đóng góp, biên tập và liên kết tài liệu nghiệp vụ.",
    category: "Tri thức",
    chapterId: "cloud-ch8"
  },
  {
    term: "Virtual Classroom",
    viTerm: "Lớp học ảo",
    definition: "Không gian đào tạo trực tuyến tích hợp bảng trắng, chia phòng thảo luận và trắc nghiệm tương tác.",
    category: "Giáo dục",
    chapterId: "cloud-ch8"
  },
  {
    term: "eCDN",
    viTerm: "Mạng phân phối nội dung doanh nghiệp",
    definition: "Giải pháp lưu đệm video tại máy chủ gateway chi nhánh để tránh nghẽn băng thông Internet khi truyền phát trực tiếp.",
    category: "Hạ tầng",
    chapterId: "cloud-ch8"
  },
  {
    term: "Data Loss Prevention (DLP)",
    viTerm: "Ngăn chặn rò rỉ dữ liệu",
    definition: "Tập hợp các chính sách và công cụ phần mềm tự động phát hiện và chặn việc chia sẻ thông tin nhạy cảm ra ngoài.",
    category: "Bảo mật",
    chapterId: "cloud-ch8"
  }
];
