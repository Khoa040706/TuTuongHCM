/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Lập trình hướng đối tượng (OOP)
   ============================================================ */

export const oopData = {
  id: "oop",
  title: "Lập trình hướng đối tượng (OOP)",
  subtitle: "Khóa học cốt lõi về các nguyên lý hướng đối tượng: Lớp, Đối tượng, Đóng gói, Kế thừa, Đa hình.",
  sections: [
    {
      id: "oop-section-1",
      roman: "I",
      title: "Khái niệm Lớp và Đối tượng",
      subsections: [
        {
          id: "oop-sub-1",
          number: "1",
          title: "Định nghĩa về Lớp (Class)",
          parts: [
            {
              id: "oop-part-1",
              label: "a",
              title: "Khái niệm khuôn mẫu",
              content: [
                {
                  type: "paragraph",
                  text: "Lớp (Class) là một khuôn mẫu hoặc bản thiết kế (blueprint) định nghĩa các thuộc tính và hành vi chung cho một tập hợp các đối tượng cùng loại."
                },
                {
                  type: "key-point",
                  text: "Lớp định nghĩa cấu trúc dữ liệu và các hành vi (hàm) mà các đối tượng của lớp đó sẽ sở hữu."
                },
                {
                  type: "quote",
                  text: "Class giống như bản thiết kế ngôi nhà trên giấy của kiến trúc sư.",
                  source: "Lý thuyết OOP cơ bản"
                }
              ]
            },
            {
              id: "oop-part-2",
              label: "b",
              title: "Thành viên của Lớp",
              content: [
                {
                  type: "paragraph",
                  text: "Các thành viên trong lớp thường bao gồm thuộc tính (attributes/fields) đại diện cho dữ liệu và phương thức (methods) đại diện cho hành vi."
                },
                {
                  type: "definition",
                  text: "Thuộc tính quyết định trạng thái của đối tượng, còn phương thức quyết định năng lực hành động của đối tượng đó."
                }
              ]
            }
          ]
        },
        {
          id: "oop-sub-2",
          number: "2",
          title: "Khái niệm về Đối tượng (Object)",
          parts: [
            {
              id: "oop-part-3",
              label: "a",
              title: "Thực thể cụ thể",
              content: [
                {
                  type: "paragraph",
                  text: "Đối tượng (Object) là một thực hiện (instance) cụ thể được tạo ra từ một Lớp. Nó chiếm vùng nhớ thực tế và lưu trữ giá trị cụ thể cho các thuộc tính đã khai báo."
                },
                {
                  type: "highlight",
                  text: "Nếu Class là bản vẽ ngôi nhà, thì Object chính là ngôi nhà gạch đá cụ thể được xây dựng nên trên thực tế."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "oop-section-2",
      roman: "II",
      title: "Bốn tính chất cốt lõi của OOP",
      subsections: [
        {
          id: "oop-sub-3",
          number: "1",
          title: "Chi tiết các nguyên lý cơ bản",
          parts: [
            {
              id: "oop-part-4",
              label: "a",
              title: "Các trụ cột của lập trình hướng đối tượng",
              content: [
                {
                  type: "paragraph",
                  text: "Lập trình hướng đối tượng được xây dựng vững chắc dựa trên 4 trụ cột lý thuyết kinh điển sau:"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Tính đóng gói (Encapsulation)</b>: Che giấu thông tin chi tiết bên trong đối tượng thông qua phạm vi truy cập (private/protected) và chỉ cung cấp các giao tiếp công khai (getters/setters).",
                    "<b>Tính kế thừa (Inheritance)</b>: Cho phép một lớp con (subclass) thừa hưởng và mở rộng các đặc tính, phương thức của lớp cha (superclass) nhằm tái sử dụng mã nguồn.",
                    "<b>Tính đa hình (Polymorphism)</b>: Một phương thức có thể có nhiều biểu hiện khác nhau trên các đối tượng khác nhau (thông qua Overriding hoặc Overloading).",
                    "<b>Tính trừu tượng (Abstraction)</b>: Tập trung vào giao diện bên ngoài của đối tượng (đối tượng làm gì) hơn là cách thức triển khai cụ thể bên trong (đối tượng làm thế nào)."
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
