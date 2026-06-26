/* ============================================================
   DỮ LIỆU: Chương mở đầu môn Lịch sử Đảng Cộng sản Việt Nam
   Đối tượng, chức năng, nhiệm vụ, nội dung và phương pháp
   ============================================================ */

export const lichSuDangMoDau = {
  id: "lich-su-dang-mo-dau",
  title: "Chương nhập môn",
  subtitle: "Đối tượng, chức năng, nhiệm vụ, nội dung và phương pháp nghiên cứu, học tập Lịch sử Đảng Cộng sản Việt Nam",
  sections: [
    /* ============================
       PHẦN MỞ ĐẦU
       ============================ */
    {
      id: "lsd-mo-dau-sec-intro",
      roman: "",
      title: "Phần mở đầu",
      subsections: [
        /* 1. Giới thiệu chung về Đảng Cộng sản Việt Nam */
        {
          id: "lsd-mo-dau-sub-1",
          number: "1",
          title: "Giới thiệu chung về Đảng Cộng sản Việt Nam",
          parts: [
            {
              id: "lsd-mo-dau-part-1-1",
              label: "a",
              title: "Sáng lập và vị thế cách mạng",
              content: [
                {
                  type: "paragraph",
                  text: "Đảng Cộng sản Việt Nam do <strong>Chủ tịch Hồ Chí Minh sáng lập vào ngày 3-2-1930</strong>. Lịch sử của Đảng luôn hòa quyện cùng lịch sử dân tộc, đóng vai trò quyết định lãnh đạo cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác."
                },
                {
                  type: "highlight",
                  text: "⭐ Mốc son lịch sử: Ngày 3-2-1930 | Người sáng lập: Nguyễn Ái Quốc (Hồ Chí Minh)"
                }
              ]
            },
            {
              id: "lsd-mo-dau-part-1-2",
              label: "b",
              title: "Bản chất giai cấp và xã hội của Đảng",
              content: [
                {
                  type: "definition",
                  text: "Đảng là <strong>đội tiên phong của giai cấp công nhân</strong>, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam; đại biểu trung thành lợi ích của giai cấp công nhân, nhân dân lao động và của cả dân tộc."
                }
              ]
            },
            {
              id: "lsd-mo-dau-part-1-3",
              label: "c",
              title: "Nền tảng tư tưởng và nguyên tắc tổ chức",
              content: [
                {
                  type: "bullets",
                  items: [
                    "<strong>Nền tảng tư tưởng:</strong> Đảng lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho mọi hành động cách mạng.",
                    "<strong>Nguyên tắc tổ chức cơ bản:</strong> Đảng lấy tập trung dân chủ làm nguyên tắc tổ chức cơ bản, bảo đảm sự thống nhất ý chí và hành động."
                  ]
                }
              ]
            }
          ]
        },
        /* 2. Quá trình hình thành và phát triển của khoa học Lịch sử Đảng */
        {
          id: "lsd-mo-dau-sub-2",
          number: "2",
          title: "Quá trình hình thành và phát triển của khoa học Lịch sử Đảng",
          parts: [
            {
              id: "lsd-mo-dau-part-2-1",
              label: "a",
              title: "Vị trí khoa học Lịch sử Đảng",
              content: [
                {
                  type: "paragraph",
                  text: "Lịch sử Đảng Cộng sản Việt Nam là một chuyên ngành, một bộ phận hợp thành của khoa học lịch sử nói chung, được nghiên cứu và đúc kết từ rất sớm nhằm phục vụ công tác chính trị, tư tưởng và giáo dục truyền thống."
                }
              ]
            },
            {
              id: "lsd-mo-dau-part-2-2",
              label: "b",
              title: "Tiến trình phát triển khoa học Lịch sử Đảng",
              content: [
                {
                  type: "lsd-history-timeline"
                }
              ]
            }
          ]
        },
        /* 3. Đặc điểm của giáo trình hiện nay */
        {
          id: "lsd-mo-dau-sub-3",
          number: "3",
          title: "Đặc điểm của giáo trình hiện nay",
          parts: [
            {
              id: "lsd-mo-dau-part-3-1",
              label: "a",
              title: "Tính kế thừa và định hướng đổi mới",
              content: [
                {
                  type: "conclusion",
                  text: "Giáo trình hiện tại là sự <strong>kế thừa và phát triển</strong> các giáo trình trước đây. Nội dung được cập nhật liên tục để phù hợp với yêu cầu đổi mới căn bản, toàn diện giáo dục và đào tạo theo quan điểm chỉ đạo của Đảng."
                }
              ]
            }
          ]
        }
      ]
    },
    /* ============================
       I. ĐỐI TƯỢNG NGHIÊN CỨU CỦA MÔN HỌC LỊCH SỬ ĐẢNG CỘNG SÀN VIỆT NAM
       ============================ */
    {
      id: "lsd-mo-dau-sec-1",
      roman: "I",
      title: "Đối tượng nghiên cứu của môn học Lịch sử Đảng Cộng sản Việt Nam",
      subsections: [
        {
          id: "lsd-mo-dau-sub-1-1",
          number: "1",
          title: "Đối tượng nghiên cứu cốt lõi",
          parts: [
            {
              id: "lsd-mo-dau-part-1-1-1",
              label: "a",
              title: "Khái niệm chung",
              content: [
                {
                  type: "paragraph",
                  text: "Đối tượng nghiên cứu cốt lõi của khoa học Lịch sử Đảng là sự ra đời, phát triển và hoạt động lãnh đạo của Đảng qua các thời kỳ lịch sử. Nội dung này được cụ thể hóa qua 4 yếu tố trọng tâm sau:"
                },
                {
                  type: "lsd-object-explorer"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
