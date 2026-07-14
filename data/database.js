/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Hệ cơ sở dữ liệu
   ============================================================ */

export const databaseData = {
  id: "database",
  title: "Hệ cơ sở dữ liệu",
  subtitle: "Cơ sở dữ liệu quan hệ, thiết kế thực thể liên kết (ERD), chuẩn hóa dữ liệu và truy vấn SQL.",
  sections: [
    {
      id: "db-section-1",
      roman: "I",
      title: "Mô hình cơ sở dữ liệu quan hệ",
      subsections: [
        {
          id: "db-sub-1",
          number: "1",
          title: "Thiết kế lược đồ quan hệ và chuẩn hóa",
          parts: [
            {
              id: "db-part-1",
              label: "a",
              title: "Thực thể và liên kết (ERD)",
              content: [
                {
                  type: "paragraph",
                  text: "Sơ đồ thực thể liên kết (Entity-Relationship Diagram - ERD) mô tả cấu trúc logic của cơ sở dữ liệu thông qua các thực thể, thuộc tính và mối quan hệ (1-1, 1-N, N-N)."
                },
                {
                  type: "definition",
                  text: "Khóa chính (Primary Key) xác định duy nhất một bản ghi trong bảng. Khóa ngoại (Foreign Key) dùng để liên kết dữ liệu giữa hai bảng khác nhau và đảm bảo tính toàn vẹn tham chiếu."
                }
              ]
            },
            {
              id: "db-part-2",
              label: "b",
              title: "Các dạng chuẩn hóa dữ liệu (1NF, 2NF, 3NF)",
              content: [
                {
                  type: "paragraph",
                  text: "Chuẩn hóa cơ sở dữ liệu là quá trình tổ chức cấu trúc bảng nhằm giảm thiểu tối đa sự dư thừa dữ liệu và loại bỏ các dị thường (Insert/Update/Delete anomalies)."
                },
                {
                  type: "key-point",
                  text: "Dạng chuẩn 1 (1NF) yêu cầu mọi thuộc tính phải là nguyên tố (atomic). Dạng chuẩn 2 (2NF) yêu cầu không có phụ thuộc hàm bộ phận vào khóa chính. Dạng chuẩn 3 (3NF) loại bỏ các phụ thuộc bắc cầu."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "db-section-2",
      roman: "II",
      title: "Ngôn ngữ truy vấn có cấu trúc (SQL)",
      subsections: [
        {
          id: "db-sub-2",
          number: "1",
          title: "Thao tác dữ liệu cơ bản",
          parts: [
            {
              id: "db-part-3",
              label: "a",
              title: "Các nhóm lệnh SQL chính",
              content: [
                {
                  type: "paragraph",
                  text: "SQL được phân chia thành DDL (Data Definition Language: CREATE, DROP, ALTER) để định nghĩa cấu trúc và DML (Data Manipulation Language: SELECT, INSERT, UPDATE, DELETE) để quản lý dữ liệu."
                },
                {
                  type: "highlight",
                  text: "Truy vấn INNER JOIN trả về các hàng từ cả hai bảng nếu có một sự khớp dữ liệu giữa các thuộc tính liên kết, giúp kết nối thông tin phân tán hiệu quả."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
