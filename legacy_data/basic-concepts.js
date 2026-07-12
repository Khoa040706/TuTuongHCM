/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Định nghĩa & Khái niệm cơ bản CNTT
   ============================================================ */

export const basicConceptsData = {
  id: "basic-concepts",
  title: "Định Nghĩa & Khái Niệm Cơ Bản",
  subtitle: "Tổng hợp các định nghĩa nền tảng về phần cứng, hệ điều hành, mạng và cơ sở dữ liệu.",
  sections: [
    {
      id: "concepts-section-co-ban",
      roman: "I",
      title: "Khái niệm Cơ bản",
      subsections: [
        {
          id: "concepts-sub-phan-cung",
          number: "1",
          title: "Phần cứng & Bộ nhớ",
          parts: [
            {
              id: "concepts-part-cpu",
              label: "a",
              title: "Bộ xử lý trung tâm (CPU)",
              content: [
                {
                  type: "paragraph",
                  text: "CPU (Central Processing Unit) đóng vai trò là não bộ của máy tính, chịu trách nhiệm thực thi các lệnh của chương trình bằng cách thực hiện các phép tính số học, logic, điều khiển và nhập/xuất cơ bản do hệ thống yêu cầu."
                },
                {
                  type: "definition",
                  text: "Hiệu năng của CPU thường được đo bằng xung nhịp (Clock Speed - GHz) và số nhân/luồng (Cores/Threads), quyết định khả năng xử lý đa nhiệm của máy tính."
                }
              ]
            },
            {
              id: "concepts-part-ram",
              label: "b",
              title: "Bộ nhớ truy cập ngẫu nhiên (RAM)",
              content: [
                {
                  type: "paragraph",
                  text: "RAM (Random Access Memory) là bộ nhớ lưu trữ tạm thời của máy tính, dùng để lưu các dữ liệu và chương trình đang được hệ điều hành và các ứng dụng sử dụng trong thời gian thực."
                },
                {
                  type: "highlight",
                  text: "RAM là bộ nhớ khả biến (volatile), nghĩa là mọi dữ liệu lưu trên RAM sẽ bị xóa sạch hoàn toàn khi máy tính bị mất điện hoặc tắt nguồn khởi động lại."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "concepts-section-big-o",
      roman: "II",
      title: "Độ phức tạp thuật toán (Big O Notation)",
      subsections: [
        {
          id: "concepts-sub-dinh-nghia-big-o",
          number: "1",
          title: "Khái niệm & Định nghĩa Big O",
          parts: [
            {
              id: "concepts-part-big-o-def",
              label: "a",
              title: "Định nghĩa Big O",
              content: [
                {
                  type: "paragraph",
                  text: "<b>Big O Notation</b> là ký hiệu toán học mô tả <b>tốc độ tăng trưởng</b> (growth rate) về thời gian chạy (Time Complexity) hoặc dung lượng bộ nhớ (Space Complexity) của một thuật toán khi kích thước đầu vào $n$ tiến tới vô cực."
                },
                {
                  type: "definition",
                  text: "Big O <b>không</b> đo thời gian chạy thực tế (giây, mili-giây) vì con số đó phụ thuộc vào cấu hình phần cứng, hệ điều hành hay ngôn ngữ lập trình. Thay vào đó, nó phản ánh <b>xu hướng biến đổi</b> của số lượng phép tính cơ bản."
                },
                {
                  type: "paragraph",
                  text: "Ví dụ trực quan: Giả sử một danh sách đầu vào tăng từ 1.000 lên 1.000.000 phần tử (gấp 1.000 lần), thời gian thực thi của thuật toán sẽ thay đổi thế nào?"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>O(1):</b> Thời gian chạy không đổi (vẫn chỉ mất 1 thao tác duy nhất).",
                    "<b>O(log n):</b> Thời gian chạy tăng cực kỳ ít (chỉ tăng thêm khoảng 10 bước tính).",
                    "<b>O(n):</b> Thời gian chạy tăng tuyến tính theo dữ liệu (tăng đúng 1.000 lần tương ứng).",
                    "<b>O(n²):</b> Thời gian chạy bùng nổ khủng khiếp (tăng 1.000.000 lần - máy tính có thể bị treo hoặc đơ)."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-bieu-do-tra-cuu",
          number: "2",
          title: "Biểu đồ & Bảng tra cứu",
          parts: [
            {
              id: "concepts-part-big-o-chart",
              label: "a",
              title: "Biểu đồ các mức Big O",
              content: [
                {
                  type: "paragraph",
                  text: "Đồ thị biểu diễn tốc độ tăng trưởng của các mức Big O. Đọc đồ thị từ dưới lên: mức dưới càng thấp càng tối ưu, mức trên càng cao càng nguy hiểm khi kích thước đầu vào lớn."
                },
                {
                  type: "big-o-curve-chart"
                },
                {
                  type: "highlight",
                  text: "Quy tắc so sánh hiệu năng (vàng): $O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)$"
                }
              ]
            },
            {
              id: "concepts-part-big-o-table",
              label: "b",
              title: "Bảng tra cứu nhanh",
              content: [
                {
                  type: "table",
                  headers: ["Ký hiệu Big O", "Tên gọi học thuật", "Ví dụ thuật toán điển hình", "Mức độ tăng trưởng khi dữ liệu n tăng 10 lần"],
                  rows: [
                    ["$O(1)$", "Hằng số (Constant)", "Truy cập phần tử mảng qua chỉ số, chèn/xóa trong HashMap", "Hoàn toàn không đổi ✔"],
                    ["$O(log n)$", "Logarit (Logarithmic)", "Tìm kiếm nhị phân (Binary Search), tìm kiếm trên cây nhị phân cân bằng", "Chỉ tăng thêm khoảng ~3 bước tính ✔"],
                    ["$O(n)$", "Tuyến tính (Linear)", "Tìm kiếm tuần tự (Linear Search), duyệt qua mảng 1 chiều", "Tăng đúng 10 lần ◓"],
                    ["$O(n log n)$", "Tuyến tính - Logarit", "Thuật toán sắp xếp nhanh (Quick Sort, Merge Sort, Heap Sort)", "Tăng khoảng ~33 lần ◑"],
                    ["$O(n^2)$", "Bậc hai (Quadratic)", "Thuật toán sắp xếp cơ bản (Bubble Sort, Selection Sort, Insertion Sort)", "Tăng vọt lên 100 lần ❌"],
                    ["$O(n^3)$", "Bậc ba (Cubic)", "Nhân hai ma trận bằng thuật toán ba vòng lặp lồng nhau truyền thống", "Tăng vọt lên 1.000 lần ❌❌"],
                    ["$O(2^n)$", "Hàm mũ (Exponential)", "Tính số Fibonacci bằng đệ quy ngây thơ, liệt kê tập con của tập hợp", "Tăng cực kỳ khủng khiếp (gấp $2^{10} = 1024$ lần) ❌❌❌"],
                    ["$O(n!)$", "Giai thừa (Factorial)", "Giải bài toán người bán hàng bằng cách vét cạn mọi hoán vị (TSP)", "Không thể thực thi trên thực tế khi $n > 20$ ☠"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-cach-tinh-step-by-step",
          number: "3",
          title: "Cách tính Big O - Từng bước",
          parts: [
            {
              id: "concepts-part-big-o-rules",
              label: "a",
              title: "Hai quy tắc đơn giản hóa toán học",
              content: [
                {
                  type: "paragraph",
                  text: "Khi tính toán Big O cho một chương trình thực tế, chúng ta áp dụng hai nguyên lý rút gọn sau:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Bỏ qua các hằng số số học",
                      bullets: [
                        "Thuật toán thực thi $5n$ bước có độ phức tạp là $O(n)$ thay vì $O(5n)$.",
                        "Thuật toán chỉ thực thi $3$ lệnh gán tĩnh có độ phức tạp là $O(1)$.",
                        "Thuật toán thực thi $7n^2$ bước có độ phức tạp là $O(n^2)$."
                      ]
                    },
                    {
                      number: "2",
                      title: "Chỉ giữ lại hạng tử có bậc lớn nhất",
                      bullets: [
                        "Độ phức tạp $O(n^2 + n + 1)$ được rút gọn thành $O(n^2)$.",
                        "Độ phức tạp $O(n log n + n)$ được rút gọn thành $O(n log n)$."
                      ]
                    }
                  ]
                },
                {
                  type: "highlight",
                  text: "Lý do khoa học: Khi kích thước dữ liệu $n$ tiến đến vô cực ($n \\to \\infty$), ảnh hưởng của hằng số và các số hạng bậc thấp trở nên vô cùng nhỏ bé, không còn tác động đến xu hướng tăng trưởng tổng thể."
                }
              ]
            },
            {
              id: "concepts-part-big-o-structures",
              label: "b",
              title: "Mối liên hệ giữa Cấu trúc Code và Big O",
              content: [
                {
                  type: "table",
                  headers: ["Cấu trúc mã nguồn", "Big O tương ứng", "Giải thích cơ chế"],
                  rows: [
                    ["Các lệnh tuần tự đơn (gán, so sánh, cộng trừ)", "$O(1)$", "Thực thi trong thời gian cố định, không phụ thuộc vào n."],
                    ["Một vòng lặp đơn chạy từ $1$ đến $n$", "$O(n)$", "Số phép tính tỉ lệ thuận tuyến tính với số vòng lặp n."],
                    ["Hai vòng lặp lồng nhau (mỗi vòng chạy n lần)", "$O(n^2)$", "Vòng ngoài chạy n lần, vòng trong chạy n lần $\\to n \\times n = n^2$."],
                    ["Ba vòng lặp lồng nhau (mỗi vòng chạy n lần)", "$O(n^3)$", "Thực hiện phép tính nhân ma trận $\\to n \\times n \\times n = n^3$."],
                    ["Chia đôi kích thước dữ liệu ở mỗi bước lặp", "$O(log n)$", "Kích thước bài toán giảm một nửa sau mỗi bước (như Binary Search)."],
                    ["Chia để trị kết hợp duyệt qua các tầng", "$O(n log n)$", "Chia đôi mảng đệ quy ($log n$ tầng) và trộn dữ liệu từng tầng ($n$ bước)."],
                    ["Hai vòng lặp chạy độc lập kế tiếp nhau", "$O(n)$", "Chi phí là $O(n) + O(n) = O(2n)$, rút gọn hằng số ta được $O(n)$."]
                  ]
                }
              ]
            },
            {
              id: "concepts-part-big-o-example-step",
              label: "c",
              title: "Ví dụ phân tích từng bước (Step-by-step)",
              content: [
                {
                  type: "paragraph",
                  text: "Hãy cùng phân tích độ phức tạp thời gian của đoạn mã nguồn sau:"
                },
                {
                  type: "code",
                  language: "python",
                  code: "n = len(arr)\ntotal = 0\n\n# Vòng lặp đơn thứ nhất\nfor x in arr:\n    total += x\n\n# Vòng lặp lồng nhau thứ hai\nfor i in range(n):\n    for j in range(n):\n        if arr[i] == arr[j]:\n            print(arr[i])"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Bước 1: Tính toán chi phí từng phần:</b><br/>" +
                    "• Hai lệnh khởi tạo <code>n = len(arr)</code> và <code>total = 0</code> tốn chi phí $O(1) + O(1) = O(1)$.<br/>" +
                    "• Vòng lặp đơn duyệt qua mảng <code>arr</code> chạy $n$ lần, tốn chi phí $O(n)$.<br/>" +
                    "• Vòng lặp lồng nhau hai tầng duyệt <code>i</code> từ $0$ đến $n-1$ và <code>j</code> từ $0$ đến $n-1$ tốn chi phí $n \\times n = O(n^2)$." +
                    "",
                    "<b>Bước 2: Cộng tổng chi phí:</b><br/>" +
                    "Tổng chi phí thực tế là: $T(n) = O(1) + O(n) + O(n^2)$." +
                    "",
                    "<b>Bước 3: Áp dụng quy tắc rút gọn:</b><br/>" +
                    "Chỉ giữ lại hạng tử có bậc lớn nhất là $n^2$, bỏ qua các phần tử nhỏ hơn.<br/>" +
                    "Kết luận: Độ phức tạp của đoạn mã nguồn trên là $O(n^2)$."
                  ]
                }
              ]
            },
            {
              id: "concepts-part-big-o-simulator",
              label: "d",
              title: "Giả lập trực quan: So sánh số phép tính theo n",
              content: [
                {
                  type: "paragraph",
                  text: "Để thấy rõ sự phân hóa khủng khiếp giữa các độ phức tạp, bạn hãy tương tác kéo thử thanh trượt điều chỉnh số phần tử $N$ bên dưới để xem sự biến đổi số phép tính mô phỏng tương ứng:"
                },
                {
                  type: "big-o-simulator"
                },
                {
                  type: "paragraph",
                  text: "<b>Bảng so sánh tĩnh chi tiết (Khi N tăng trưởng):</b>"
                },
                {
                  type: "table",
                  headers: ["Kích thước N", "Mức O(1)", "Mức O(log n)", "Mức O(n)", "Mức O(n log n)", "Mức O(n²)"],
                  rows: [
                    ["$10$ phần tử", "1 phép tính", "~3 phép tính", "10 phép tính", "~33 phép tính", "100 phép tính"],
                    ["$100$ phần tử", "1 phép tính", "~7 phép tính", "100 phép tính", "~700 phép tính", "10.000 phép tính"],
                    ["$1.000$ phần tử", "1 phép tính", "~10 phép tính", "1.000 phép tính", "~10.000 phép tính", "1.000.000 phép tính"],
                    ["$10.000$ phần tử", "1 phép tính", "~13 phép tính", "10.000 phép tính", "~130.000 phép tính", "100.000.000 phép tính"],
                    ["$1.000.000$ phần tử (1 Triệu)", "1 phép tính", "~20 phép tính", "1.000.000 phép tính", "~20.000.000 phép tính", "1.000.000.000.000 phép tính ($10^{12}$)"]
                  ]
                },
                {
                  type: "highlight",
                  text: "Mẹo nhớ thực tế: Khi dữ liệu $n = 1\\text{ triệu}$ dòng: Thuật toán $O(1)$ chỉ mất đúng 1 bước tính (tức thời), thuật toán $O(log n)$ chỉ mất khoảng 20 bước tính (tức thời), thuật toán $O(n)$ mất 1 triệu bước (dưới 1 giây). Tuy nhiên, thuật toán $O(n^2)$ cần tới $10^{12}$ bước! Nếu máy tính thực hiện 1 triệu phép tính trong 1 mili-giây, thuật toán $O(n^2)$ sẽ chạy ròng rã trong hơn 11 ngày liên tục! Máy tính sẽ lập tức báo lỗi đơ chương trình."
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-vi-du-code-ngon-ngu",
          number: "4",
          title: "Ví dụ Code minh họa",
          parts: [
            {
              id: "concepts-part-code-o1",
              label: "a",
              title: "1. Minh họa độ phức tạp O(1) - Truy cập chỉ số",
              content: [
                {
                  type: "paragraph",
                  text: "Thao tác lấy ra phần tử đầu tiên của một mảng. Dù mảng có kích thước nhỏ hay cực kỳ khổng lồ, CPU cũng chỉ thực hiện đúng 1 lệnh truy xuất địa chỉ trực tiếp."
                },
                {
                  type: "big-o-code-tabs",
                  java: "public static int getFirst(int[] arr) {\n    return arr[0]; // O(1) - Truy cập trực tiếp qua chỉ số\n}",
                  python: "def get_first(arr):\n    return arr[0] # O(1) - Truy cập trực tiếp qua chỉ số",
                  c: "int get_first(int* arr) {\n    return arr[0]; // O(1) - 1 thao tác truy cập địa chỉ duy nhất\n}"
                }
              ]
            },
            {
              id: "concepts-part-code-on",
              label: "b",
              title: "2. Minh họa độ phức tạp O(n) - Tìm kiếm tuyến tính",
              content: [
                {
                  type: "paragraph",
                  text: "Duyệt qua từng phần tử của mảng từ đầu đến cuối để tìm kiếm giá trị mục tiêu. Trường hợp xấu nhất (Worst-case) xảy ra khi phần tử đó nằm ở cuối mảng hoặc hoàn toàn không tồn tại, thuật toán phải chạy đủ $n$ lần lặp."
                },
                {
                  type: "big-o-code-tabs",
                  java: "public static int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] == target) {\n            return i; // Tìm thấy tại vị trí i\n        }\n    }\n    return -1; // Không tìm thấy\n}",
                  python: "def linear_search(arr, target):\n    for i, x in enumerate(arr):\n        if x == target:\n            return i # Tìm thấy\n    return -1 # Không tìm thấy",
                  c: "int linear_search(int* arr, int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) {\n            return i; // Tìm thấy\n        }\n    }\n    return -1; // Không tìm thấy\n}"
                }
              ]
            },
            {
              id: "concepts-part-code-ologn",
              label: "c",
              title: "3. Minh họa độ phức tạp O(log n) - Tìm kiếm nhị phân",
              content: [
                {
                  type: "paragraph",
                  text: "Tìm kiếm trên một mảng <b>đã được sắp xếp</b> trước. Tại mỗi bước lặp, thuật toán so sánh giá trị mục tiêu với phần tử ở chính giữa và loại bỏ ngay lập tức một nửa số lượng phần tử không khả thi."
                },
                {
                  type: "big-o-code-tabs",
                  java: "public static int binarySearch(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2; // Tìm điểm ở giữa\n        if (arr[mid] == target) {\n            return mid; // Tìm thấy mục tiêu\n        }\n        if (arr[mid] < target) {\n            left = mid + 1; // Tìm nửa bên phải\n        } else {\n            right = mid - 1; // Tìm nửa bên trái\n        }\n    }\n    return -1;\n}",
                  python: "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = left + (right - left) // 2 # Tìm điểm ở giữa\n        if arr[mid] == target:\n            return mid # Tìm thấy mục tiêu\n        elif arr[mid] < target:\n            left = mid + 1 # Tìm nửa bên phải\n        else:\n            right = mid - 1 # Tìm nửa bên trái\n    return -1",
                  c: "int binary_search(int* arr, int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) {\n            return mid;\n        }\n        if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return -1;\n}"
                }
              ]
            },
            {
              id: "concepts-part-code-on2",
              label: "d",
              title: "4. Minh họa độ phức tạp O(n²) - Sắp xếp nổi bọt",
              content: [
                {
                  type: "paragraph",
                  text: "Thuật toán Bubble Sort sử dụng hai vòng lặp lồng nhau để so sánh các cặp phần tử cạnh nhau và hoán đổi vị trí nếu chúng bị ngược thứ tự. Vòng lặp ngoài chạy $n$ lần, vòng lặp trong chạy tối đa $n-1$ lần."
                },
                {
                  type: "big-o-code-tabs",
                  java: "public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // Hoán đổi hai phần tử kế nhau\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}",
                  python: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                # Hoán đổi hai phần tử kế nhau\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]",
                  c: "void bubble_sort(int* arr, int n) {\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // Hoán đổi hai phần tử kế nhau\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}"
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-cac-hieu-lam",
          number: "5",
          title: "Các lỗi hiểu sai thường gặp",
          parts: [
            {
              id: "concepts-part-misunderstandings",
              label: "a",
              title: "Danh sách các quan niệm sai lầm phổ biến",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là những ngộ nhận kinh điển của sinh viên khi tự nghiên cứu về Big O Notation:"
                },
                {
                  type: "bullets",
                  items: [
                    "❌ <b>Nhầm lẫn #1: \"Big O chỉ biểu diễn cho trường hợp xấu nhất\".</b><br/><i>Thực tế:</i> Big O là một công cụ toán học đo tốc độ tăng trưởng của hàm số. Ta hoàn toàn có thể phân tích Big O của trường hợp tốt nhất (Best-case) hoặc trung bình (Average-case). Tuy nhiên trong kỹ nghệ phần mềm, lập trình viên thường chú tâm vào trường hợp xấu nhất để đảm bảo hệ thống không bị đổ vỡ khi tải cao.",
                    "❌ <b>Nhầm lẫn #2: \"Thuật toán O(n) luôn luôn chạy nhanh hơn thuật toán O(n²)\".</b><br/><i>Thực tế:</i> Nhận định này chỉ đúng khi dữ liệu đầu vào $n$ vượt quá một ngưỡng nhất định. Ví dụ, một thuật toán $O(n)$ có chi phí thực tế là $1000n$ phép tính, trong khi thuật toán $O(n^2)$ chỉ có chi phí $n^2$. Với $n = 5$ phần tử, thuật toán $O(n^2)$ chỉ tốn 25 phép tính, nhanh hơn rất nhiều so với 5.000 phép tính của thuật toán $O(n)$.",
                    "❌ <b>Nhầm lẫn #3: \"Big O đo trực tiếp thời gian chạy bằng giây hoặc mili-giây\".</b><br/><i>Thực tế:</i> Big O đo xu hướng tăng số lượng phép tính cơ bản độc lập với tốc độ phần cứng. Một chiếc máy chủ siêu máy tính chạy thuật toán $O(n^2)$ trên 1 triệu phần tử có thể tốn vài chục phút, chậm hơn nhiều so với một chiếc máy tính xách tay văn phòng bình thường chạy thuật toán $O(n)$ trên cùng tập dữ liệu.",
                    "❌ <b>Nhầm lẫn #4: \"Thuật toán có Big O tốt hơn thì luôn luôn nên dùng trong mọi trường hợp\".</b><br/><i>Thực tế:</i> Đôi khi thuật toán tối ưu Big O ($O(n log n)$ so với $O(n^2)$) lại cực kỳ phức tạp để lập trình, khó bảo trì, hoặc tốn quá nhiều bộ nhớ đệm phụ. Nếu kích thước dữ liệu thực tế luôn rất nhỏ ($n < 20$), ta nên chọn thuật toán có dòng mã nguồn trực quan, đơn giản, dễ đọc."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-space-complexity",
          number: "6",
          title: "Space Complexity - Big O cho bộ nhớ",
          parts: [
            {
              id: "concepts-part-space-def",
              label: "a",
              title: "Khái niệm Độ phức tạp Không gian",
              content: [
                {
                  type: "paragraph",
                  text: "Bên cạnh thời gian chạy, bộ nhớ RAM tiêu thụ cũng là một tài nguyên giới hạn. <b>Space Complexity</b> đo lượng bộ nhớ bổ sung (Memory Allocation) mà thuật toán yêu cầu cấp phát trong suốt quá trình chạy khi kích thước dữ liệu $n$ biến đổi."
                },
                {
                  type: "table",
                  headers: ["Tên thuật toán", "Độ phức tạp bộ nhớ", "Nguyên lý giải thích chi tiết"],
                  rows: [
                    ["Tìm kiếm tuyến tính / Nhị phân", "$O(1)$", "Chỉ khởi tạo một số ít biến điều khiển tĩnh (như <code>left</code>, <code>right</code>, <code>mid</code>). Không tạo thêm mảng phụ nhân bản dữ liệu đầu vào."],
                    ["Thuật toán sắp xếp Merge Sort", "$O(n)$", "Bắt buộc phải tạo ra một vùng nhớ đệm phụ có kích thước tuyến tính tương ứng với $n$ phần tử để thực hiện việc gộp (Merge) các mảng con."],
                    ["Tìm kiếm nhị phân bằng Đệ quy", "$O(log n)$", "Mỗi lời gọi đệ quy tự động đẩy một bản ghi hoạt động (Call Stack Frame) chứa thông tin đối số vào bộ nhớ Stack của hệ thống. Độ sâu stack tối đa là $log n$."],
                    ["Fibonacci Đệ quy ngây thơ", "$O(n)$", "Hệ thống phải duy trì cây đệ quy và lưu giữ Call Stack với độ sâu tuyến tính tối đa chạm ngưỡng $n$ trước khi bắt đầu quay lui (Backtrack)."]
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "concepts-section-pass-by-ref",
      roman: "III",
      title: "Tham trị vs Tham chiếu (Pass by Value & Pass by Reference)",
      subsections: [
        {
          id: "concepts-sub-dinh-nghia-pass-by-val-ref",
          number: "1",
          title: "Định nghĩa lý thuyết chuẩn",
          parts: [
            {
              id: "concepts-part-defs-pass-by-val-ref",
              label: "a",
              title: "Khái niệm Pass by Value & Pass by Reference",
              content: [
                {
                  type: "paragraph",
                  text: "Trong khoa học máy tính, cơ chế truyền tham số vào hàm quyết định việc dữ liệu được thao tác thế nào bên trong bộ nhớ RAM. Dưới đây là hai định nghĩa chuẩn lý thuyết:"
                },
                {
                  type: "highlight",
                  text: "💡 <b>Pass by Value (Truyền tham trị):</b> Hàm nhận một <b>BẢN SAO</b> của giá trị biến truyền vào. Mọi thay đổi biến đó trong hàm hoàn toàn không ảnh hưởng đến biến gốc bên ngoài.<br/><i>Áp dụng:</i> C (mặc định), Java (tất cả - kể cả đối tượng), Python (tất cả - theo cơ chế gán nhãn riêng)."
                },
                {
                  type: "highlight",
                  text: "🔗 <b>Pass by Reference (Truyền tham chiếu thực sự):</b> Hàm nhận một <b>BÍ DANH (ALIAS)</b> của biến gốc. Hai tên biến trỏ đến cùng một ô nhớ vật lý. Mọi thay đổi biến trong hàm sẽ tác động trực tiếp và tức thời vào biến gốc ngoài hàm.<br/><i>Áp dụng:</i> C++ với ký hiệu <code>int&amp; x</code>. Trình biên dịch tự động quản lý địa chỉ ở tầng dưới."
                }
              ]
            },
            {
              id: "concepts-part-overall-table-pass-by-val-ref",
              label: "b",
              title: "Bảng so sánh tổng quan",
              content: [
                {
                  type: "table",
                  headers: ["Đặc tính so sánh", "Pass by Value (Truyền tham trị)", "Pass by Reference (C++)"],
                  rows: [
                    ["<b>Hàm nhận cái gì?</b>", "Bản sao giá trị (hoặc bản sao địa chỉ)", "Bí danh (alias) của biến gốc - không copy"],
                    ["<b>Thay đổi biến gốc?</b>", "❌ Không thể", "✔ Có"],
                    ["<b>Bộ nhớ cấp phát thêm?</b>", "Tốn thêm bộ nhớ để chứa dữ liệu copy", "Không tốn thêm bộ nhớ ($O(1)$)"],
                    ["<b>Ví dụ ngôn ngữ điển hình</b>", "C, Java (tất cả), Python (tất cả)", "C++ với ký hiệu <code>int&amp; x</code>"],
                    ["<b>Java có cơ chế này không?</b>", "✔ Java chỉ có Pass by Value", "❌ Java KHÔNG có Pass by Reference"],
                    ["<b>Python có cơ chế này không?</b>", "Python dùng Pass by Object Reference cho TẤT CẢ", "❌ Python không phân biệt int/list khi truyền"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-misconceptions-pass-by-val-ref",
          number: "2",
          title: "Đính chính — 3 Lỗi học thuật thường gặp",
          parts: [
            {
              id: "concepts-part-misconceptions-content",
              label: "a",
              title: "Các quan niệm sai lầm phổ biến cần làm rõ",
              content: [
                {
                  type: "paragraph",
                  text: "Chủ đề Pass by Value và Pass by Reference rất dễ gây ngộ nhận do sự khác nhau về thuật ngữ giữa các tài liệu lập trình. Hãy đính chính 3 lỗi học thuật kinh điển sau:"
                },
                {
                  type: "highlight",
                  text: "<b>Lỗi 1: \"Python: số &rarr; Value, list &rarr; Reference\"</b><br/>" +
                    "❌ <b>SAI:</b> Python không phân biệt kiểu truyền tham số dựa trên kiểu dữ liệu (như int vs list).<br/>" +
                    "✔ <b>ĐÚNG:</b> Python dùng cơ chế <b>Pass by Object Reference</b> (hay <i>Pass by Assignment</i>) cho <b>TẤT CẢ</b> kiểu dữ liệu. " +
                    "Sự khác biệt phát sinh từ bản chất đối tượng: bất biến (immutable - int, str) hay khả biến (mutable - list, dict). Biến kiểu int ngoài hàm không đổi được vì int là bất biến, không phải vì nó được copy."
                },
                {
                  type: "highlight",
                  text: "<b>Lỗi 2: \"Java Object &rarr; Pass by Reference\"</b><br/>" +
                    "❌ <b>SAI:</b> Lập trình viên Java thường nghĩ khi truyền Object thì đó là Pass by Reference vì bên trong hàm có thể sửa nội dung Object gốc.<br/>" +
                    "✔ <b>ĐÚNG:</b> Java là <b>100% Pass by Value</b>. Khi truyền Object, Java copy 'giá trị của tham chiếu' (reference value) - tức là bản sao địa chỉ ô nhớ. Kỹ thuật này được gọi là <b>Pass by Value of Reference</b> (truyền tham trị đối với địa chỉ tham chiếu), không phải Pass by Reference thực sự."
                },
                {
                  type: "highlight",
                  text: "<b>Lỗi 3: \"Pass by Reference = truyền địa chỉ bộ nhớ\"</b><br/>" +
                    "❌ <b>SAI:</b> Định nghĩa này thường bị quy chụp chung từ ngôn ngữ C (truyền con trỏ).<br/>" +
                    "✔ <b>ĐÚNG:</b> Pass by Reference thực sự (như trong C++) sử dụng cơ chế <b>bí danh (alias)</b>. Khi truyền con trỏ trong C, bản chất compiler vẫn thực hiện <b>Pass by Value</b> (truyền bản sao của giá trị địa chỉ). C++ dùng ký hiệu <code>&amp;</code> (ví dụ: <code>int&amp; x</code>) mới là Pass by Reference thực sự (compiler tự quản lý địa chỉ, lập trình viên thao tác trực tiếp trên biến gốc)."
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-memory-stack-visualizer",
          number: "3",
          title: "Hoạt họa bộ nhớ: Stack Frame & Memory Diagram",
          parts: [
            {
              id: "concepts-part-visualizer-desc",
              label: "a",
              title: "Cơ chế xảy ra trong bộ nhớ máy tính",
              content: [
                {
                  type: "paragraph",
                  text: "Khi gọi hàm, hệ điều hành sẽ cấp phát một vùng nhớ gọi là <b>Stack Frame</b> cho hàm đó để chứa các đối số và biến cục bộ. Hãy sử dụng bộ giả lập tương tác dưới đây để quan sát từng bước dữ liệu được sao chép hoặc trỏ tham chiếu như thế nào:"
                },
                {
                  type: "pass-by-value-ref-visualizer"
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-languages-comparison",
          number: "4",
          title: "Mã nguồn minh họa: So sánh C | C++ | Java | Python",
          parts: [
            {
              id: "concepts-part-comparison-desc",
              label: "a",
              title: "Cách viết và cơ chế truyền tham số qua 4 ngôn ngữ",
              content: [
                {
                  type: "paragraph",
                  text: "Dưới đây là mã nguồn minh họa cùng một chức năng tăng giá trị và gán lại biến trên các ngôn ngữ khác nhau. Hãy click chọn ngôn ngữ để xem phân tích chi tiết:"
                },
                {
                  type: "pass-by-value-ref-code-tabs"
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-large-struct",
          number: "5",
          title: "Tầm quan trọng: Tại sao Pass by Reference quan trọng?",
          parts: [
            {
              id: "concepts-part-large-struct-desc",
              label: "a",
              title: "Hiệu năng khi truyền dữ liệu cấu trúc lớn (Struct/Object)",
              content: [
                {
                  type: "paragraph",
                  text: "Khi chúng ta truyền một Struct hoặc một Class có kích thước lớn vào hàm bằng <b>Pass by Value</b>, chương trình bắt buộc phải sao chép toàn bộ các bytes dữ liệu đó sang Stack Frame mới. Điều này gây tốn kém thời gian chạy và dung lượng bộ nhớ ($O(n)$ với $n$ là kích thước đối tượng)."
                },
                {
                  type: "code",
                  language: "c",
                  code: "// Giả sử cấu trúc Student chứa thông tin lớn\nstruct Student {\n    char name[1000]; // 1000 bytes\n    int scores[500]; // 2000 bytes\n    // Tổng cộng ~3000 bytes mỗi đối tượng Student\n};\n\n// ❌ TỒI: Pass by Value - copy toàn bộ 3000 bytes mỗi lần gọi hàm!\nvoid printInfo_slow(Student s) {\n    // ... đọc dữ liệu\n}\n\n// ✔ TỐT: Pass by Reference (C++) - chỉ truyền địa chỉ/bí danh (tốn 8 bytes)\n// const đảm bảo an toàn, hàm không được phép chỉnh sửa struct gốc ngoài ý muốn\nvoid printInfo_fast(const Student& s) {\n    // ... đọc dữ liệu\n}"
                },
                {
                  type: "highlight",
                  text: "<b>Phân tích hiệu năng:</b> Nếu cần xử lý danh sách $10.000$ sinh viên, hàm <code>printInfo_slow</code> sẽ phải nhân bản tổng cộng $30\\text{MB}$ dữ liệu thừa trong bộ nhớ. Trong khi đó, <code>printInfo_fast</code> dùng tham chiếu chỉ tốn khoảng $80\\text{KB}$ địa chỉ ô nhớ và tốc độ thực thi nhanh hơn hàng ngàn lần!"
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-java-traps-quiz",
          number: "6",
          title: "Câu hỏi phỏng vấn & Trắc nghiệm bẫy Java",
          parts: [
            {
              id: "concepts-part-quiz-desc",
              label: "a",
              title: "Bộ câu hỏi kiểm tra độ hiểu sâu (Đọc hiểu code - đoán kết quả)",
              content: [
                {
                  type: "paragraph",
                  text: "Ngôn ngữ Java nổi tiếng là nơi chứa nhiều bẫy phỏng vấn về cơ chế truyền tham số. Hãy kiểm tra kiến thức thực chiến của bạn bằng cách trả lời các câu hỏi trắc nghiệm dưới đây (hãy tự đoán kết quả trước khi click xem giải thích):"
                },
                {
                  type: "pass-by-value-ref-quiz"
                }
              ]
            }
          ]
        },
        {
          id: "concepts-sub-summary-points",
          number: "7",
          title: "Tóm tắt chuẩn — Nhớ 5 điều này",
          parts: [
            {
              id: "concepts-part-summary-bullets",
              label: "a",
              title: "5 Điểm cốt lõi cần ghi nhớ",
              content: [
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Python là Pass by Object Reference",
                      bullets: [
                        "Truyền tham chiếu đến đối tượng cho tất cả các kiểu.",
                        "Đối tượng bất biến (immutable - int, str) hoạt động giống Pass by Value vì không sửa được nội dung gốc.",
                        "Đối tượng khả biến (mutable - list, dict) hoạt động giống Pass by Reference vì có thể sửa trực tiếp nội dung gốc."
                      ]
                    },
                    {
                      number: "2",
                      title: "Java là 100% Pass by Value",
                      bullets: [
                        "Khi truyền đối tượng, Java truyền bản sao giá trị địa chỉ tham chiếu.",
                        "Không bao giờ có chuyện 'Java truyền tham chiếu' thực sự vì ta không thể gán lại biến gốc trỏ đi nơi khác từ trong hàm."
                      ]
                    },
                    {
                      number: "3",
                      title: "C không có Pass by Reference",
                      bullets: [
                        "C chỉ hỗ trợ truyền tham trị.",
                        "Việc truyền con trỏ (pointer) thực chất vẫn là truyền giá trị của con trỏ (truyền tham trị đối với địa chỉ)."
                      ]
                    },
                    {
                      number: "4",
                      title: "C++ có Pass by Reference thực sự",
                      bullets: [
                        "Ký hiệu <code>&amp;</code> tạo ra một bí danh thực sự cho biến gốc.",
                        "Lập trình viên viết mã nguồn thao tác trực tiếp trên tên biến mà không cần dùng ký tự trỏ địa chỉ <code>*</code> hay <code>&amp;</code> thủ công như trong C."
                      ]
                    },
                    {
                      number: "5",
                      title: "Tối ưu hóa hiệu năng bằng Reference",
                      bullets: [
                        "Sử dụng <code>const T&amp;</code> khi truyền các Struct/Class lớn trong C++ để đạt độ phức tạp không gian $O(1)$ thay vì $O(n)$ do sao chép dữ liệu."
                      ]
                    }
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
