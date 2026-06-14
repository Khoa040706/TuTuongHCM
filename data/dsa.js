/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Cấu trúc dữ liệu và giải thuật
   ============================================================ */

export const dsaData = {
  id: "dsa",
  title: "Cấu trúc dữ liệu và giải thuật",
  subtitle: "Các cấu trúc dữ liệu kinh điển và kỹ thuật thiết kế giải thuật: Sắp xếp, Tìm kiếm, Đồ thị.",
  sections: [
    {
      id: "dsa-section-1",
      roman: "I",
      title: "Cấu trúc dữ liệu tuyến tính",
      subsections: [
        {
          id: "dsa-sub-1",
          number: "1",
          title: "Mảng và Danh sách liên kết (Linked List)",
          parts: [
            {
              id: "dsa-part-1",
              label: "a",
              title: "Danh sách liên kết đơn",
              content: [
                {
                  type: "paragraph",
                  text: "Danh sách liên kết đơn là một cấu trúc dữ liệu tuyến tính bao gồm các nút (Node), trong đó mỗi nút chứa dữ liệu của chính nó và một con trỏ (Next) trỏ đến nút kế tiếp trong danh sách."
                },
                {
                  type: "definition",
                  text: "Không giống như mảng sử dụng bộ nhớ liên tục, danh sách liên kết phân bố bộ nhớ động linh hoạt, cho phép chèn và xóa phần tử với độ phức tạp O(1) nếu đã biết vị trí."
                }
              ]
            },
            {
              id: "dsa-part-2",
              label: "b",
              title: "Ngăn xếp (Stack) và Hàng đợi (Queue)",
              content: [
                {
                  type: "paragraph",
                  text: "Stack hoạt động theo cơ chế LIFO (Last In First Out - Vào sau ra trước), còn Queue hoạt động theo cơ chế FIFO (First In First Out - Vào trước ra trước)."
                },
                {
                  type: "key-point",
                  text: "Stack thường dùng trong thuật toán đệ quy, phân tích biểu thức cú pháp. Queue dùng trong lập lịch tiến trình và thuật toán duyệt đồ thị BFS."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "dsa-section-2",
      roman: "II",
      title: "Thuật toán sắp xếp kinh điển",
      subsections: [
        {
          id: "dsa-sub-2",
          number: "1",
          title: "Thuật toán sắp xếp nhanh (Quick Sort)",
          parts: [
            {
              id: "dsa-part-3",
              label: "a",
              title: "Nguyên lý chia để trị",
              content: [
                {
                  type: "paragraph",
                  text: "Quick Sort chọn một phần tử làm chốt (Pivot) và phân chia mảng thành hai nửa: nửa nhỏ hơn pivot nằm bên trái, nửa lớn hơn nằm bên phải, sau đó đệ quy sắp xếp từng nửa."
                },
                {
                  type: "highlight",
                  text: "Độ phức tạp thời gian trung bình của Quick Sort là O(n log n). Trường hợp xấu nhất xảy ra khi pivot chọn trúng phần tử lớn nhất hoặc nhỏ nhất liên tục, dẫn đến độ phức tạp O(n²)."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
