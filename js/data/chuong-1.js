/* ============================================================
   DỮ LIỆU: Chương 1
   Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh
   ============================================================ */

const chuong1 = {
  id: "chuong-1",
  title: "Chương I",
  subtitle: "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
  sections: [
    /* ============================
       I. CƠ SỞ HÌNH THÀNH TƯ TƯỞNG HỒ CHÍ MINH
       ============================ */
    {
      id: "co-so-hinh-thanh",
      roman: "I",
      title: "Cơ sở hình thành tư tưởng Hồ Chí Minh",
      subsections: [
        /* ----------------------------
           1. Cơ sở khách quan
           ---------------------------- */
        {
          id: "co-so-khach-quan",
          number: "1",
          title: "Cơ sở khách quan",
          parts: [
            /* a) Bối cảnh lịch sử hình thành tư tưởng Hồ Chí Minh */
            {
              id: "boi-canh-lich-su-a",
              label: "a",
              title: "Bối cảnh lịch sử hình thành tư tưởng Hồ Chí Minh",
              content: [
                /* 1. Bối cảnh lịch sử Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX */
                {
                  type: "label",
                  text: "1. Bối cảnh lịch sử Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Sự đầu hàng của triều đình phong kiến:</strong> Chính quyền triều Nguyễn từng bước khuất phục trước sự xâm lược của tư bản Pháp, lần lượt ký kết các hiệp ước đầu hàng và thừa nhận nền bảo hộ của thực dân Pháp trên toàn cõi Việt Nam.",
                    "<strong>Sự bế tắc của hệ tư tưởng phong kiến:</strong> Đến cuối thế kỷ XIX, các cuộc khởi nghĩa vũ trang dưới khẩu hiệu \"Cần Vương\" do các sĩ phu, văn thân lãnh đạo cuối cùng đều thất bại. Điều này chứng minh hệ tư tưởng phong kiến đã lỗi thời trước các nhiệm vụ lịch sử.",
                    "<strong>Sự chuyển dịch và phân hóa xã hội:</strong> Cuộc khai thác thuộc địa của thực dân Pháp đã làm xã hội Việt Nam biến chuyển sâu sắc. Các giai cấp và tầng lớp mới bắt đầu xuất hiện như giai cấp công nhân, tiểu tư sản và tư sản, tạo ra những tiền đề bên trong cho phong trào yêu nước giải phóng dân tộc đầu thế kỷ XX.",
                    "<strong>Sự du nhập của các trào lưu tư tưởng mới:</strong> Các \"tân thư\", \"tân văn\", \"tân báo\" cùng ảnh hưởng từ trào lưu cải cách ở Nhật Bản và Trung Quốc tràn vào Việt Nam, khiến phong trào yêu nước chuyển dịch sang xu hướng dân chủ tư sản.",
                    "<strong>Sự thất bại của các khuynh hướng cứu nước mới:</strong>"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "<strong>Phan Bội Châu:</strong> Phát huy truyền thống yêu nước nhưng chủ trương \"cầu ngoại viện\" (dựa vào Nhật) và dùng bạo lực để khôi phục độc lập nên đã thất bại.",
                    "<strong>Phan Châu Trinh:</strong> Chủ trương \"ỷ Pháp cầu tiến bộ\", khai thông dân trí, nâng cao dân khí để tính chuyện giải phóng, nhưng con đường cải cách này cũng không thành công.",
                    "<strong>Hoàng Hoa Thám:</strong> Lãnh đạo khởi nghĩa nông dân Yên Thế nhưng vẫn mang nặng \"cốt cách phong kiến\", chưa tìm thấy lối thoát rõ ràng và hướng đi đúng đắn."
                  ]
                },
                {
                  type: "key-point",
                  text: "<strong>Kết luận bối cảnh trong nước:</strong> Phong trào cứu nước của nhân dân ta muốn giành được thắng lợi đòi hỏi phải đi theo một con đường mới."
                },
                /* 2. Bối cảnh thời đại (Quốc tế) */
                {
                  type: "label",
                  text: "2. Bối cảnh thời đại (Quốc tế)"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Sự thống trị của chủ nghĩa đế quốc:</strong> Chủ nghĩa tư bản chuyển từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền, xác lập quyền thống trị trên phạm vi toàn thế giới. Chủ nghĩa đế quốc đã trở thành kẻ thù chung của tất cả các dân tộc thuộc địa.",
                    "<strong>Chế độ áp bức thuộc địa nặng nề:</strong> Tại các nước thuộc địa ở châu Á, châu Phi và Mỹ Latinh, thực dân Pháp và các nước đế quốc vừa duy trì sự bóc lột phong kiến có từ trước, vừa chồng lên đó sự bóc lột của tư bản chủ nghĩa. Về mặt xã hội, bên cạnh các giai cấp cơ bản cũ, đã xuất hiện thêm giai cấp công nhân và giai cấp tư sản.",
                    "<strong>Bước ngoặt từ Cách mạng Tháng Mười Nga (1917):</strong>"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "Cuộc đấu tranh sôi nổi của công nhân thế giới cuối thế kỷ XIX - đầu thế kỷ XX đã đỉnh cao hóa bằng Cách mạng Tháng Mười Nga năm 1917. Cuộc cách mạng này đánh đổ nhà nước tư sản, thiết lập chính quyền Xô viết và mở ra một thời kỳ mới trong lịch sử loài người.",
                    "Sự kiện này đã \"thức tỉnh các dân tộc châu Á\", nêu một tấm gương sáng về giải phóng các dân tộc bị áp bức, mở ra thời đại cách mạng chống đế quốc và giải phóng dân tộc. Nhiều dân tộc thuộc địa của đế quốc Nga đã giành được quyền tự quyết, hình thành nên các quốc gia độc lập và dẫn đến sự ra đời của Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô) vào năm 1922."
                  ]
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Sự kết nối của phong trào cách mạng thế giới:</strong> Sự ra đời của Quốc tế Cộng sản (tháng 3-1919) đã giúp phong trào công nhân ở các nước tư bản phương Tây và phong trào giải phóng dân tộc ở các nước thuộc địa phương Đông có quan hệ mật thiết với nhau hơn trong cuộc đấu tranh chống kẻ thù chung là chủ nghĩa đế quốc."
                  ]
                }
              ]
            },
            /* b) Những tiền đề tư tưởng - lý luận */
            {
              id: "tien-de-tu-tuong-ly-luan",
              label: "b",
              title: "Những tiền đề tư tưởng - lý luận",
              content: [
                /* 1. Giá trị truyền thống tốt đẹp của dân tộc Việt Nam */
                {
                  type: "label",
                  text: "1. Giá trị truyền thống tốt đẹp của dân tộc Việt Nam"
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Nền tảng xuất phát cốt lõi:</strong> Lịch sử dựng nước và giữ nước lâu đời đã hình thành nên các giá trị truyền thống đặc sắc, trở thành tiền đề lý luận đầu tiên, xuất phát hình thành tư tưởng Hồ Chí Minh.",
                    "<strong>Các phẩm chất cốt tủy:</strong> Tinh thần yêu nước, kiên cường, bất khuất; tinh thần tương thân tương ái, nhân nghĩa, cố kết cộng đồng; ý chí vươn lên vượt mọi thử thách; sự thông minh, tài sáng tạo, quý trọng hiền tài và khiêm tốn tiếp thu tinh hoa nhân loại.",
                    "<strong>Chủ nghĩa yêu nước là hạt nhân:</strong> Đây là tình cảm thiêng liêng nhất, là cội nguồn trí tuệ và chuẩn mực đạo đức của dân tộc, thúc giục Nguyễn Tất Thành ra đi tìm đường cứu nước. Khi ăn sâu vào tiềm thức, tinh thần này biến thành lực lượng vật chất to lớn để chiến đấu chống lại lũ bán nước và cướp nước."
                  ]
                },
                /* 2. Tinh hoa văn hóa nhân loại */
                {
                  type: "label",
                  text: "2. Tinh hoa văn hóa nhân loại"
                },
                {
                  type: "paragraph",
                  text: "Sự kết hợp biện chứng giữa truyền thống phương Đông và văn minh hiện đại phương Tây đã tạo nên nét đặc sắc trong tư tưởng, nhân cách và văn hóa của Người."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Văn hóa phương Đông:</strong>"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "<em>Nho giáo:</em> Người lọc lấy những gì tinh túy nhất như triết lý hành động, nhập thế, hành đạo, ước vọng về một xã hội bình trị, hòa mục; đề cao tu thân dưỡng tính, lễ giáo và truyền thống hiếu học.",
                    "<em>Phật giáo:</em> Tiếp thu sâu sắc tư tưởng vị tha, từ bi bác ái, cứu khổ cứu nạn, thương người như thể thương thân; lối sống trong sạch, giản dị, chăm làm việc thiện; tinh thần bình đẳng, dân chủ, chống phân biệt đẳng cấp và đề cao lao động.",
                    "<em>Chủ nghĩa Tam dân (Tôn Trung Sơn):</em> Tiếp thu vì tìm thấy những điều phù hợp với điều kiện nước ta như dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc."
                  ]
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Văn hóa phương Tây:</strong>"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "<em>Tư tưởng Khai sáng:</em> Người sớm làm quen với văn hóa Pháp, tìm hiểu các cuộc cách mạng ở Pháp, Mỹ và tiếp thu tư tưởng tự do, bình đẳng, bác ái của các nhà Khai sáng như Voltaire, Rousseau, Montesquieu.",
                    "<em>Các bản Tuyên ngôn tự do:</em> Tiếp thu các giá trị về quyền sống, quyền tự do, quyền mưu cầu hạnh phúc từ <em>Tuyên ngôn nhân quyền và dân quyền</em> của cách mạng Pháp và <em>Tuyên ngôn độc lập</em> năm 1776 của Mỹ."
                  ]
                },
                /* 3. Chủ nghĩa Mác - Lênin */
                {
                  type: "label",
                  text: "3. Chủ nghĩa Mác - Lênin"
                },
                {
                  type: "paragraph",
                  text: "Đây là tiền đề lý luận quan trọng nhất, đóng vai trò là cơ sở thế giới quan và phương pháp luận của tư tưởng Hồ Chí Minh."
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Bản lĩnh tiếp thu chủ động:</strong> Việc tiếp thu diễn ra trên nền tảng tri thức văn hóa tinh túy và vốn chính trị phong phú được tích lũy qua thực tiễn, giúp Người giữ vững tư duy độc lập, tự chủ và sáng tạo.",
                    "<strong>Hành trình từ cảm tính đến lý tính:</strong>"
                  ]
                },
                {
                  type: "sub-bullets",
                  items: [
                    "<em>Giai đoạn đầu (Cảm tính):</em> Người ủng hộ Cách mạng Tháng Mười Nga và tin theo Lênin ban đầu chỉ vì \"cảm tính tự nhiên\" do lòng yêu nước, vì Lênin và Quốc tế thứ ba bênh vực các dân tộc bị áp bức, lúc đó Người chưa hiểu rõ các khái niệm lý luận sâu xa.",
                    "<em>Giai đoạn sau (Lý tính):</em> Tháng 7-1920, khi đọc <em>Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa</em> của Lênin, Người đã vô cùng cảm động, sáng tỏ và tìm thấy con đường giải phóng dân tộc thực sự."
                  ]
                },
                {
                  type: "bullets",
                  items: [
                    "<strong>Vận dụng sáng tạo, tránh giáo điều:</strong> Người tiếp thu lý luận theo phương pháp mácxít biện chứng, nắm lấy cái tinh thần, bản chất để giải quyết các vấn đề thực tiễn của Việt Nam chứ không rập khuôn, sao chép máy móc sách vở. Người khẳng định chủ nghĩa Lênin là học thuyết \"chân chính nhất, chắc chắn nhất, cách mệnh nhất\" và việc vận dụng sáng tạo đã mang lại thắng lợi to lớn cho cách mạng nước nhà."
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
