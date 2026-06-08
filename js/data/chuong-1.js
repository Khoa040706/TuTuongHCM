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
            }
          ]
        }
      ]
    }
  ]
};
