/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Phân tích thiết kế và yêu cầu
   ============================================================ */

export const analysisDesignData = {
  id: "analysis-design",
  title: "Phân tích thiết kế và yêu cầu",
  subtitle: "Quy trình thu thập yêu cầu, định nghĩa sơ đồ UML và thiết kế kiến trúc hệ thống phần mềm.",
  sections: [
    {
      id: "ad-section-1",
      roman: "I",
      title: "Quy trình phân tích yêu cầu phần mềm",
      subsections: [
        {
          id: "ad-sub-1",
          number: "1",
          title: "Xác định và phân loại yêu cầu",
          parts: [
            {
              id: "ad-part-1",
              label: "a",
              title: "Khái niệm Yêu cầu (Requirement)",
              content: [
                {
                  type: "paragraph",
                  text: "Yêu cầu phần mềm là những tuyên bố mô tả những dịch vụ mà hệ thống phải cung cấp hoặc những ràng buộc đối với hoạt động của hệ thống."
                },
                {
                  type: "definition",
                  text: "Yêu cầu chức năng (Functional Requirements) mô tả những gì hệ thống PHẢI LÀM (ví dụ: đăng nhập, thanh toán). Yêu cầu phi chức năng (Non-functional Requirements) mô tả những ràng buộc chất lượng như bảo mật, tốc độ, tính khả dụng."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ad-section-2",
      roman: "II",
      title: "Mô hình hóa hệ thống bằng UML",
      subsections: [
        {
          id: "ad-sub-2",
          number: "1",
          title: "Thiết kế các biểu đồ UML chính",
          parts: [
            {
              id: "ad-part-2",
              label: "a",
              title: "Biểu đồ Use Case (Use Case Diagram)",
              content: [
                {
                  type: "paragraph",
                  text: "Biểu đồ Use Case giúp mô tả các chức năng của hệ thống dưới góc nhìn của người dùng ngoài (Actor) tương tác với hệ thống."
                },
                {
                  type: "key-point",
                  text: "Các thành phần chính gồm: Tác nhân (Actor), Ca sử dụng (Use Case), Ranh giới hệ thống (System Boundary) và các mối quan hệ (Include, Extend, Generalization)."
                }
              ]
            },
            {
              id: "ad-part-3",
              label: "b",
              title: "Biểu đồ Lớp (Class Diagram)",
              content: [
                {
                  type: "paragraph",
                  text: "Biểu đồ Lớp mô tả cấu trúc tĩnh của hệ thống bằng cách hiển thị các lớp, các thuộc tính, phương thức và mối quan hệ giữa chúng (Association, Aggregation, Composition, Inheritance)."
                },
                {
                  type: "highlight",
                  text: "Mối quan hệ Composition (Thành phần cấu thành) biểu thị vòng đời phụ thuộc hoàn toàn: nếu đối tượng cha bị hủy, đối tượng con cũng bị hủy theo."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
