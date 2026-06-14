/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Những định nghĩa và thuật toán cơ bản của CNTT
   ============================================================ */

export const basicItData = {
  id: "basic-it",
  title: "Những định nghĩa và thuật toán cơ bản của CNTT",
  subtitle: "Nền tảng khoa học máy tính: Hệ nhị phân, logic Boolean, cấu trúc máy tính và mạng cơ bản.",
  sections: [
    {
      id: "it-section-1",
      roman: "I",
      title: "Hệ thống nhị phân và Biểu diễn dữ liệu",
      subsections: [
        {
          id: "it-sub-1",
          number: "1",
          title: "Đơn vị thông tin cơ bản: Bit và Byte",
          parts: [
            {
              id: "it-part-1",
              label: "a",
              title: "Khái niệm Bit/Byte",
              content: [
                {
                  type: "paragraph",
                  text: "Bit (Binary Digit) là đơn vị thông tin nhỏ nhất trong máy tính, chỉ nhận một trong hai giá trị là 0 hoặc 1, tương ứng với hai trạng thái tắt/bật của bóng bán dẫn."
                },
                {
                  type: "definition",
                  text: "1 Byte = 8 Bit. Byte là đơn vị cơ bản được máy tính sử dụng để biểu diễn một ký tự (ví dụ ký tự chữ hoặc số theo bảng mã ASCII/Unicode)."
                }
              ]
            },
            {
              id: "it-part-2",
              label: "b",
              title: "Hệ cơ số nhị phân (Base-2)",
              content: [
                {
                  type: "paragraph",
                  text: "Mọi dữ liệu (hình ảnh, âm thanh, ký tự, chương trình) đều được số hóa thành chuỗi các bit nhị phân để bộ vi xử lý (CPU) tính toán."
                },
                {
                  type: "key-point",
                  text: "Ví dụ: Số 5 trong hệ thập phân tương ứng với chuỗi nhị phân 101."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "it-section-2",
      roman: "II",
      title: "Đại số logic và Cổng Logic",
      subsections: [
        {
          id: "it-sub-2",
          number: "1",
          title: "Đại số Boolean trong thiết kế mạch",
          parts: [
            {
              id: "it-part-3",
              label: "a",
              title: "Các phép toán logic cơ bản",
              content: [
                {
                  type: "paragraph",
                  text: "Đại số Boolean xử lý các biến logic chỉ có giá trị TRUE (1) hoặc FALSE (0) thông qua các cổng logic cơ bản: AND, OR, NOT, XOR."
                },
                {
                  type: "highlight",
                  text: "Cổng AND chỉ cho kết quả TRUE khi tất cả các đầu vào đều là TRUE. Cổng OR cho kết quả TRUE nếu có ít nhất một đầu vào là TRUE. Cổng NOT đảo ngược trạng thái đầu vào."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
