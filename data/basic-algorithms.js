/* ============================================================
   DỮ LIỆU CƠ BẢN: Môn Thuật toán & Giải thuật kinh điển
   ============================================================ */

export const basicAlgorithmsData = {
  id: "basic-algorithms",
  title: "Thuật toán",
  subtitle: "Nền tảng về các thuật toán kinh điển trong khoa học máy tính: Sắp xếp và Tìm đường đi.",
  sections: [
    {
      id: "algo-section-thuat-toan-sap-xep",
      roman: "I",
      title: "Thuật toán Sắp xếp",
      subsections: [
        {
          id: "algo-sub-bubble-sort",
          number: "A",
          title: "Sắp xếp nổi bọt (Bubble Sort)",
          parts: [
            {
              id: "it-part-bubble-sort",
              label: "",
              title: "",
              content: [
                {
                  type: "label",
                  text: "Mô tả bài toán"
                },
                {
                  type: "paragraph",
                  text: "Cho một danh sách hoặc một mảng gồm n phần tử chưa được sắp xếp. Bài toán yêu cầu sắp xếp các phần tử này theo một thứ tự xác định—thường là tăng dần hoặc giảm dần—bằng cách thay đổi trực tiếp vị trí của chúng ngay trên mảng hiện tại mà không sử dụng mảng phụ."
                },
                {
                  type: "label",
                  text: "Ý tưởng"
                },
                {
                  type: "paragraph",
                  text: "Thuật toán Bubble Sort hoạt động dựa trên nguyên lý so sánh liên tiếp các cặp phần tử kế nhau. Nếu hai phần tử đứng sai thứ tự mong muốn, thuật toán sẽ thực hiện hoán đổi vị trí của chúng. Qua mỗi lượt duyệt đầy đủ từ đầu đến cuối mảng, phần tử lớn nhất chưa được sắp xếp sẽ dần dần \"nổi\" về phía cuối mảng giống như các bọt khí nổi lên mặt nước."
                },
                {
                  type: "label",
                  text: "Thuật toán"
                },
                {
                  type: "paragraph",
                  text: "Các bước thực hiện chi tiết của thuật toán Bubble Sort (phiên bản đã tối ưu):"
                },
                {
                  type: "numbered-list",
                  items: [
                    "Bắt đầu từ đầu mảng, so sánh phần tử hiện tại <code>A[i]</code> với phần tử kế tiếp <code>A[i + 1]</code>.",
                    "Nếu <code>A[i] &gt; A[i + 1]</code>, thực hiện hoán đổi hai phần tử này và đánh dấu bằng cờ hiệu rằng đã có hoán đổi xảy ra trong lượt duyệt này.",
                    "Di chuyển sang cặp tiếp theo và lặp lại bước so sánh cho đến cuối phạm vi chưa sắp xếp. Khi kết thúc lượt duyệt, phần tử lớn nhất sẽ được cố định ở cuối mảng.",
                    "Thu hẹp phạm vi duyệt cho lượt tiếp theo bằng cách bỏ qua phần tử vừa được cố định.",
                    "Nếu hoàn thành một lượt duyệt đầy đủ mà không phát sinh bất kỳ phép hoán đổi nào, điều đó có nghĩa là mảng đã hoàn toàn ổn định và được sắp xếp. Thuật toán sẽ dừng lại ngay lập tức."
                  ]
                },
                {
                  type: "label",
                  text: "Minh họa từng bước"
                },
                {
                  type: "paragraph",
                  text: "Sắp xếp mảng sau theo thứ tự tăng dần: [5, 1, 4, 2, 8]."
                },
                {
                  type: "bubble-sort-visualizer"
                },
                {
                  type: "bullets",
                  items: [
                    "<b>Lượt duyệt 1:</b><br/>" +
                    "• So sánh 5 và 1: 5 &gt; 1 → Hoán đổi → [1, 5, 4, 2, 8]<br/>" +
                    "• So sánh 5 và 4: 5 &gt; 4 → Hoán đổi → [1, 4, 5, 2, 8]<br/>" +
                    "• So sánh 5 và 2: 5 &gt; 2 → Hoán đổi → [1, 4, 2, 5, 8]<br/>" +
                    "• So sánh 5 và 8: 5 &lt; 8 → Giữ nguyên → [1, 4, 2, 5, 8]<br/>" +
                    "<i>(Kết thúc lượt 1, số 8 là phần tử lớn nhất đã nằm đúng vị trí cuối cùng).</i>",
                    
                    "<b>Lượt duyệt 2:</b> (Chỉ duyệt trong phạm vi chưa sắp xếp [1, 4, 2, 5])<br/>" +
                    "• So sánh 1 và 4: 1 &lt; 4 → Giữ nguyên → [1, 4, 2, 5, 8]<br/>" +
                    "• So sánh 4 và 2: 4 &gt; 2 → Hoán đổi → [1, 2, 4, 5, 8]<br/>" +
                    "• So sánh 4 và 5: 4 &lt; 5 → Giữ nguyên → [1, 2, 4, 5, 8]<br/>" +
                    "<i>(Kết thúc lượt 2, số 5 đã nằm đúng vị trí kế cuối).</i>",
                    
                    "<b>Lượt duyệt 3:</b> (Chỉ duyệt trong phạm vi chưa sắp xếp [1, 2, 4])<br/>" +
                    "• So sánh 1 và 2: 1 &lt; 2 → Giữ nguyên → [1, 2, 4, 5, 8]<br/>" +
                    "• So sánh 2 và 4: 2 &lt; 4 → Giữ nguyên → [1, 2, 4, 5, 8]<br/>" +
                    "<i>(Mảng đã được sắp xếp nhưng thuật toán cần chạy lượt 4 để xác nhận không còn hoán đổi).</i>",
                    
                    "<b>Lượt duyệt 4:</b><br/>" +
                    "• Duyệt qua mảng, không phát sinh bất kỳ phép hoán đổi nào → Thuật toán kết thúc."
                  ]
                },
                {
                  type: "label",
                  text: "Pseudocode"
                },
                {
                  type: "paragraph",
                  text: "Mã giả của thuật toán Bubble Sort tích hợp cờ hiệu dừng sớm:"
                },
                {
                  type: "code",
                  language: "pseudocode",
                  code: "procedure bubbleSort(A : list of sortable items)\n    n := length(A)\n    repeat\n        swapped := false\n        for i := 1 to n - 1 inclusive do\n            if A[i - 1] > A[i] then\n                swap(A[i - 1], A[i])\n                swapped := true\n            end if\n        end for\n        n := n - 1\n    until not swapped\nend procedure"
                },
                {
                  type: "label",
                  text: "Code Java"
                },
                {
                  type: "paragraph",
                  text: "Triển khai thuật toán Bubble Sort tối ưu bằng Java:"
                },
                {
                  type: "code",
                  language: "java",
                  code: "public class BubbleSort {\n    public static void sort(int[] arr) {\n        int n = arr.length;\n        boolean swapped;\n        for (int i = 0; i < n - 1; i++) {\n            swapped = false;\n            // Vòng lặp trong chỉ chạy qua các phần tử chưa được sắp xếp cố định\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    // Hoán đổi hai phần tử kế nhau\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                    swapped = true;\n                } \n            }\n            // Nếu không có hoán đổi nào xảy ra ở lượt duyệt này, dừng thuật toán sớm\n            if (!swapped) {\n                break;\n            }\n        }\n    }\n}"
                },
                {
                  type: "label",
                  text: "Độ phức tạp Big O"
                },
                {
                  type: "table",
                  headers: ["Trường hợp", "Độ phức tạp", "Ghi chú"],
                  rows: [
                    ["Tốt nhất", "O(n)", "Mảng đã được sắp xếp hoàn hảo từ trước."],
                    ["Trung bình", "O(n²)", "Các phần tử phân bố ngẫu nhiên."],
                    ["Xấu nhất", "O(n²)", "Mảng bị sắp xếp ngược hoàn toàn so với mục tiêu."],
                    ["Bộ nhớ phụ", "O(1)", "Sắp xếp trực tiếp trên mảng hiện tại (in-place)."]
                  ]
                },
                {
                  type: "label",
                  text: "Các lỗi thường gặp"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Bỏ quên cờ hiệu tối ưu hóa (`swapped`)",
                      bullets: [
                        "Nếu bỏ qua việc kiểm tra xem có phát sinh hoán đổi hay không, thuật toán sẽ luôn chạy đủ n-1 lượt duyệt bất kể mảng đã được sắp xếp xong từ trước, làm mất đi hiệu năng tối ưu O(n) trong trường hợp tốt nhất."
                      ]
                    },
                    {
                      number: "2",
                      title: "Lỗi vượt quá chỉ số mảng (`ArrayIndexOutOfBoundsException`)",
                      bullets: [
                        "Lỗi này thường xảy ra khi viết vòng lặp trong chạy đến <code>j &lt; n</code> nhưng lại thực hiện phép so sánh <code>arr[j] &gt; arr[j + 1]</code>. Chỉ số <code>j + 1</code> ở cuối mảng sẽ vượt qua ranh giới cho phép.",
                        "Vòng lặp trong cần được giới hạn chính xác là <code>j &lt; n - i - 1</code>."
                      ]
                    },
                    {
                      number: "3",
                      title: "Lỗi làm mất tính ổn định (Stability)",
                      bullets: [
                        "Khi thực hiện so sánh, nếu sử dụng toán tử <code>&gt;=</code> (lớn hơn hoặc bằng) thay vì <code>&gt;</code> (lớn hơn), thuật toán sẽ tráo đổi vị trí của cả hai phần tử có giá trị bằng nhau. Điều này phá vỡ tính ổn định của giải thuật."
                      ]
                    },
                    {
                      number: "4",
                      title: "Bỏ qua hiệu ứng \"Rùa\" (Turtles)",
                      bullets: [
                        "Các phần tử có giá trị nhỏ nằm ở cuối mảng (được gọi là \"rùa\") di chuyển về đầu mảng cực kỳ chậm, mỗi lượt duyệt chỉ dịch chuyển sang trái được đúng 1 vị trí.",
                        "Sự tồn tại của dù chỉ một phần tử \"rùa\" sẽ kéo lùi hiệu năng thực tế của thuật toán về mức O(n²)."
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "algo-sub-quick-sort",
          number: "B",
          title: "Sắp xếp nhanh (Quick Sort)",
          parts: [
            {
              id: "algo-part-quick-sort",
              label: "",
              title: "",
              content: [
                {
                  type: "label",
                  text: "Mô tả thuật toán & Kỹ thuật"
                },
                {
                  type: "paragraph",
                  text: "Thuật toán Sắp xếp nhanh (Quick Sort) được phát minh bởi nhà khoa học máy tính Tony Hoare vào năm 1959. Đây là một thuật toán sắp xếp dựa trên nguyên lý Chia để trị (Divide and Conquer). Nhờ hiệu năng thực tế cực kỳ cao và tính chất sắp xếp trực tiếp trên mảng hiện tại (in-place) rất tiết kiệm bộ nhớ và thân thiện với bộ nhớ đệm (Cache-friendly), Quick Sort được sử dụng làm lõi trong hàm sắp xếp của hầu hết các ngôn ngữ lập trình hiện đại."
                },
                {
                  type: "label",
                  text: "Bảng đối sánh các thuật toán sắp xếp kinh điển"
                },
                {
                  type: "table",
                  headers: ["Thuật toán", "Tốt nhất", "Trung bình", "Xấu nhất", "Bộ nhớ phụ", "Ổn định (Stable)"],
                  rows: [
                    ["Quick Sort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n²)$", "$O(\\log n)$", "Không"],
                    ["Merge Sort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n)$", "Có"],
                    ["Heap Sort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n \\log n)$", "$O(1)$", "Không"],
                    ["Bubble Sort", "$O(n)$", "$O(n²)$", "$O(n²)$", "$O(1)$", "Có"],
                    ["Selection Sort", "$O(n²)$", "$O(n²)$", "$O(n²)$", "$O(1)$", "Không"],
                    ["Insertion Sort", "$O(n)$", "$O(n²)$", "$O(n²)$", "$O(1)$", "Có"]
                  ]
                },
                {
                  type: "label",
                  text: "Ý tưởng cốt lõi (Divide and Conquer)"
                },
                {
                  type: "paragraph",
                  text: "Hoạt động cốt lõi của Quick Sort dịch chuyển gánh nặng sang giai đoạn phân hoạch (Partitioning) tiền kỳ, thay vì giai đoạn hợp nhất hậu kỳ như Merge Sort. Quy trình gồm 3 bước:"
                },
                {
                  type: "numbered-list",
                  items: [
                    "<b>Chọn chốt (Pivot):</b> Chọn một phần tử bất kỳ trong mảng để làm mốc phân hoạch (có thể chọn phần tử đầu, phần tử cuối, phần tử ở giữa hoặc ngẫu nhiên).",
                    "<b>Phân hoạch (Partition):</b> Dịch chuyển các phần tử nhỏ hơn hoặc bằng chốt ($A[j] \\le pivot$) về bên trái chốt, và các phần tử lớn hơn chốt về bên phải chốt. Chốt được đặt vào đúng vị trí cuối cùng của nó trong mảng đã sắp xếp.",
                    "<b>Đệ quy (Recursion):</b> Lặp lại hai bước trên cho hai mảng con bên trái và bên phải phần tử chốt một cách độc lập cho đến khi kích thước mảng con giảm về 0 hoặc 1."
                  ]
                },
                {
                  type: "quick-sort-flowchart"
                },
                {
                  type: "label",
                  text: "Các lược đồ phân hoạch phổ biến"
                },
                {
                  type: "paragraph",
                  text: "Có hai cách thiết kế bước phân hoạch (Partitioning) nổi tiếng nhất là Lược đồ phân hoạch Lomuto và Lược đồ phân hoạch Hoare:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Lược đồ phân hoạch Lomuto",
                      bullets: [
                        "<b>Nguyên lý hoạt động:</b> Chọn phần tử cuối cùng làm chốt ($pivot = A[hi]$). Sử dụng hai con trỏ: con trỏ quét $j$ chạy từ $lo$ đến $hi - 1$ và con trỏ ranh giới $i$ (khởi tạo bằng $lo - 1$).",
                        "Nếu phần tử hiện tại $A[j]$ nhỏ hơn hoặc bằng chốt ($A[j] \\le pivot$), con trỏ $i$ sẽ tăng lên 1 và ta hoán đổi phần tử $A[i]$ với $A[j]$. Sau khi quét xong, hoán đổi phần tử chốt $A[hi]$ với $A[i + 1]$ để chốt về đúng vị trí trung tâm.",
                        "<b>Hạn chế:</b> Lomuto thực hiện số lượng phép hoán đổi (swap) nhiều hơn đáng kể so với Hoare khi gặp mảng có nhiều phần tử trùng lặp."
                      ]
                    },
                    {
                      number: "2",
                      title: "Lược đồ phân hoạch Hoare",
                      bullets: [
                        "<b>Nguyên lý hoạt động:</b> Thường chọn phần tử ở giữa làm chốt ($pivot = A[(lo + hi) / 2]$). Sử dụng hai con trỏ di chuyển ngược chiều nhau từ hai đầu: $i$ đi từ trái qua và $j$ đi từ phải lại.",
                        "Con trỏ $i$ tăng dần cho đến khi tìm thấy một phần tử lớn hơn hoặc bằng chốt ($A[i] \\ge pivot$). Con trỏ $j$ giảm dần cho đến khi tìm thấy phần tử nhỏ hơn hoặc bằng chốt ($A[j] \\le pivot$). Nếu hai con trỏ chưa gặp nhau ($i < j$), ta hoán đổi $A[i]$ và $A[j]$ rồi tiếp tục quét.",
                        "Khi $i \\ge j$, thuật toán trả về chỉ số $j$ làm ranh giới phân hoạch. Lưu ý: Lược đồ Hoare chia mảng thành hai nửa là $[lo \\dots j]$ và $[j + 1 \\dots hi]$, và chốt không nhất thiết phải nằm ở đúng vị trí cuối cùng của nó ngay sau lượt phân hoạch đầu tiên.",
                        "<b>Ưu điểm:</b> Số lần hoán đổi ít hơn Lomuto khoảng 3 lần trong thực tế, hoạt động cực kỳ hiệu quả ngay cả khi mảng chứa nhiều giá trị trùng lặp."
                      ]
                    }
                  ]
                },
                {
                  type: "label",
                  text: "1. Minh họa Phân hoạch Lomuto"
                },
                {
                  type: "paragraph",
                  text: "Dưới đây là mô phỏng từng bước phân hoạch mảng $A = [7, 2, 1, 6, 8, 5, 3, 4]$ sử dụng lược đồ Lomuto với phần tử chốt ở cuối mảng ($pivot = 4$):"
                },
                {
                  type: "quick-sort-visualizer",
                  mode: "partition"
                },
                {
                  type: "label",
                  text: "2. Minh họa Sắp xếp Toàn bộ (Quick Sort)"
                },
                {
                  type: "paragraph",
                  text: "Dưới đây là mô phỏng từng bước đệ quy của thuật toán Quick Sort để sắp xếp hoàn chỉnh mảng $A = [7, 2, 1, 6, 8, 5, 3, 4]$ thành mảng đã sắp xếp $[1, 2, 3, 4, 5, 6, 7, 8]$:"
                },
                {
                  type: "quick-sort-visualizer",
                  mode: "full"
                },
                {
                  type: "label",
                  text: "Mã giả Thuật toán (Pseudocode)"
                },
                {
                  type: "paragraph",
                  text: "Dưới đây là mã giả hoàn chỉnh cho thuật toán Quick Sort sử dụng cả hai lược đồ phân hoạch Lomuto và Hoare:"
                },
                {
                  type: "code",
                  language: "pseudocode",
                  code: "// ==========================================================\n// 1. Hiện thực Quick Sort với Phân hoạch Lomuto\n// ==========================================================\nprocedure quickSortLomuto(A : list of sortable items, lo : integer, hi : integer)\n    if lo < hi and lo >= 0 then\n        p := partitionLomuto(A, lo, hi)\n        quickSortLomuto(A, lo, p - 1)\n        quickSortLomuto(A, p + 1, hi)\n    end if\nend procedure\n\nfunction partitionLomuto(A : list of sortable items, lo : integer, hi : integer) : integer\n    pivot := A[hi]\n    i := lo - 1\n    for j := lo to hi - 1 do\n        if A[j] <= pivot then\n            i := i + 1\n            swap A[i] with A[j]\n        end if\n    end for\n    swap A[i + 1] with A[hi]\n    return i + 1\nend function\n\n// ==========================================================\n// 2. Hiện thực Quick Sort với Phân hoạch Hoare\n// ==========================================================\nprocedure quickSortHoare(A : list of sortable items, lo : integer, hi : integer)\n    if lo < hi and lo >= 0 then\n        p := partitionHoare(A, lo, hi)\n        quickSortHoare(A, lo, p)\n        quickSortHoare(A, p + 1, hi)\n    end if\nend procedure\n\nfunction partitionHoare(A : list of sortable items, lo : integer, hi : integer) : integer\n    pivot := A[lo + (hi - lo) / 2]\n    i := lo - 1\n    j := hi + 1\n    while true do\n        repeat\n            i := i + 1\n        until A[i] >= pivot\n        \n        repeat\n            j := j - 1\n        until A[j] <= pivot\n        \n        if i >= j then\n            return j\n        end if\n        swap A[i] with A[j]\n    end while\nend function"
                },
                {
                  type: "label",
                  text: "Hiện thực Thuật toán bằng Ngôn ngữ Java"
                },
                {
                  type: "paragraph",
                  text: "Nhằm tối ưu hóa hiệu năng trong môi trường sản xuất thực tế và loại bỏ nguy cơ tràn bộ nhớ đệm ngăn xếp (StackOverflowError) khi xử lý các tập dữ liệu cực lớn, lập trình viên có thể lựa chọn triển khai đệ quy truyền thống hoặc khử đệ quy bằng cách tự quản lý ngăn xếp trên bộ nhớ Heap."
                },
                {
                  type: "label",
                  text: "1. Hiện thực Đệ quy Truyền thống (Recursive Implementation)"
                },
                {
                  type: "code",
                  language: "java",
                  code: "public class QuickSortRecursive {\n    public static void sort(int[] arr) {\n        if (arr == null || arr.length <= 1) {\n            return;\n        }\n        quickSort(arr, 0, arr.length - 1);\n    }\n\n    private static void quickSort(int[] arr, int lo, int hi) {\n        if (lo < hi) {\n            // Sử dụng phân hoạch Lomuto làm mặc định\n            int pivotIndex = partition(arr, lo, hi);\n            quickSort(arr, lo, pivotIndex - 1);\n            quickSort(arr, pivotIndex + 1, hi);\n        }\n    }\n\n    private static int partition(int[] arr, int lo, int hi) {\n        int pivot = arr[hi];\n        int i = lo - 1;\n        for (int j = lo; j < hi; j++) {\n            if (arr[j] <= pivot) {\n                i++;\n                swap(arr, i, j);\n            }\n        }\n        swap(arr, i + 1, hi);\n        return i + 1;\n    }\n\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}"
                },
                {
                  type: "label",
                  text: "2. Hiện thực Khử Đệ quy bằng Ngăn xếp Thủ công (Iterative Implementation)"
                },
                {
                  type: "code",
                  language: "java",
                  code: "import java.util.Stack;\n\npublic class QuickSortIterative {\n    public static void sort(int[] arr) {\n        if (arr == null || arr.length <= 1) {\n            return;\n        }\n        quickSort(arr);\n    }\n\n    private static void quickSort(int[] arr) {\n        // Ngăn xếp chứa các cặp chỉ số biên [lo, hi] dưới dạng mảng 2 phần tử\n        Stack<int[]> stack = new Stack<>();\n        \n        // Đẩy phạm vi ban đầu của toàn bộ mảng vào ngăn xếp\n        stack.push(new int[]{0, arr.length - 1});\n        \n        while (!stack.isEmpty()) {\n            int[] range = stack.pop();\n            int lo = range[0];\n            int hi = range[1];\n            \n            if (lo >= hi) {\n                continue;\n            }\n            \n            int pivotIndex = partition(arr, lo, hi);\n            \n            // Đẩy phân mảng con bên trái vào ngăn xếp trước\n            stack.push(new int[]{lo, pivotIndex - 1});\n            // Đẩy phân mảng con bên phải vào ngăn xếp sau\n            stack.push(new int[]{pivotIndex + 1, hi});\n        }\n    }\n\n    private static int partition(int[] arr, int lo, int hi) {\n        int pivot = arr[hi];\n        int i = lo - 1;\n        for (int j = lo; j < hi; j++) {\n            if (arr[j] <= pivot) {\n                i++;\n                swap(arr, i, j);\n            }\n        }\n        swap(arr, i + 1, hi);\n        return i + 1;\n    }\n\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}"
                },
                {
                  type: "label",
                  text: "Phân tích Độ phức tạp Tiệm cận Big O"
                },
                {
                  type: "paragraph",
                  text: "Thời gian chạy thực tế của Quick Sort phụ thuộc trực tiếp vào mức độ cân bằng của các phân đoạn mảng sau mỗi bước phân hoạch."
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Trường hợp Tốt nhất (Best Case): $O(n \\log n)$",
                      bullets: [
                        "Trường hợp này xảy ra khi bước phân hoạch luôn chọn được một phần tử chốt lý tưởng nằm ở chính giữa mảng (trung vị), chia mảng thành hai phần có kích thước xấp xỉ bằng nhau là $n/2$.",
                        "Phương trình đệ quy mô tả hiệu năng lúc này là: $T(n) = 2T(n/2) + \\Theta(n)$. Áp dụng Định lý Thạc sĩ (Master Theorem), nghiệm của phương trình này đạt mức tối ưu tiệm cận là $T(n) = \\Theta(n \\log n)$."
                      ]
                    },
                    {
                      number: "2",
                      title: "Trường hợp Trung bình (Average Case): $O(n \\log n)$",
                      bullets: [
                        "Trong thực tế, phép chọn chốt ngẫu nhiên hiếm khi tạo ra tỷ lệ chia đôi hoàn hảo $1 : 1$. Tuy nhiên, các phân tích toán học chỉ ra rằng ngay cả khi tỷ lệ chia mảng bị lệch nghiêm trọng ở mức $9 : 1$ hay $99 : 1$, cây đệ quy vẫn duy trì cấu trúc logarithmic với chiều sâu tối đa ở mức $O(\\log n)$.",
                        "Tổng số phép so sánh trung bình trên tất cả các hoán vị đầu vào của mảng có kích thước $n$ đạt giá trị: $C(n) \\approx 2n \\ln n \\approx 1.39n \\log_2 n$. Do đó, độ phức tạp thời gian trung bình của Quick Sort luôn được đảm bảo ở mức tối ưu là $O(n \\log n)$."
                      ]
                    },
                    {
                      number: "3",
                      title: "Trường hợp Xấu nhất (Worst Case): $O(n²)$",
                      bullets: [
                        "Trường hợp tệ nhất xảy ra khi phần tử chốt được chọn liên tục rơi vào các giá trị cực trị (phần tử lớn nhất hoặc nhỏ nhất) của phân đoạn mảng. Điều này thường xuất hiện khi áp dụng giải thuật Quick Sort với cách chọn chốt ở biên mảng lên một dãy số đã được sắp xếp sẵn hoặc sắp xếp ngược.",
                        "Khi đó, mảng bị phân rã hoàn toàn mất cân bằng: một nửa mảng con có kích thước $0$ và nửa còn lại có kích thước $n - 1$. Phương trình đệ quy mô tả hành vi này là: $T(n) = T(n-1) + \\Theta(n)$.",
                        "Kết quả giải phương trình cho thấy số phép so sánh tăng vọt lên mức bình phương $\\frac{n(n-1)}{2}$, khiến thuật toán bị suy biến hiệu năng thành $O(n²)$ tương tự các thuật toán sắp xếp thô sơ."
                      ]
                    },
                    {
                      number: "4",
                      title: "Độ phức tạp Không gian (Space Complexity)",
                      bullets: [
                        "Quick Sort là thuật toán sắp xếp tại chỗ (in-place) với lượng bộ nhớ phụ trợ cho các biến hoán đổi là hằng số $O(1)$. Tuy nhiên, thuật toán vẫn cần không gian lưu trữ cho cấu trúc ngăn xếp cuộc gọi để phục vụ tiến trình đệ quy.",
                        "<b>Trường hợp trung bình và tốt nhất:</b> Chiều sâu tối đa của cây đệ quy cân bằng là $O(\\log n)$, dẫn đến độ phức tạp không gian phụ trợ tương ứng là $O(\\log n)$.",
                        "<b>Trường hợp tệ nhất:</b> Do cây đệ quy bị lệch hoàn toàn thành dạng tuyến tính, chiều sâu ngăn xếp có thể đạt mức tối đa $O(n)$, đòi hỏi lượng tài nguyên bộ nhớ lớn và dễ gây nguy cơ tràn ngăn xếp hệ thống."
                      ]
                    }
                  ]
                },
                {
                  type: "label",
                  text: "Các lỗi Thường gặp khi Triển khai và Hiện thực"
                },
                {
                  type: "paragraph",
                  text: "Quick Sort chứa đựng nhiều chi tiết logic tinh tế, khiến lập trình viên rất dễ mắc phải các sai sót nghiêm trọng làm giảm hiệu năng hệ thống hoặc gây lỗi chương trình:"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Phân sai phạm vi phân mảng trong các lời gọi đệ quy",
                      bullets: [
                        "Một lỗi phổ biến là không loại trừ phần tử chốt đã được định vị chính xác ra khỏi các bước đệ quy tiếp theo, hoặc áp dụng sai biên của lược đồ phân hoạch.",
                        "<b>Hệ quả:</b> Việc gọi đệ quy nhầm phạm vi dạng <code>quickSort(A, lo, pivot)</code> trong lược đồ Lomuto có thể dẫn đến việc mảng con không bao giờ co lại khi phần tử chốt là phần tử cực trị, gây ra vòng lặp đệ quy vô hạn và lỗi tràn ngăn xếp (<code>StackOverflowError</code>)."
                      ]
                    },
                    {
                      number: "2",
                      title: "Sự cố \"Mất cân bằng cực hạn\" khi gặp mảng chứa các khóa trùng lặp",
                      bullets: [
                        "Một lỗi thiết kế nghiêm trọng trong hàm phân hoạch là không dừng các con trỏ quét khi gặp các phần tử có giá trị bằng với chốt. Lập trình viên thường có xu hướng bỏ qua phép so sánh bằng để tránh các phép hoán đổi được cho là \"không cần thiết\".",
                        "<b>Hệ quả:</b> Khi xử lý một mảng chứa toàn bộ các phần tử giống nhau (ví dụ: chuỗi ký tự \"AAAAA\"), việc không dừng con trỏ ở các phần tử bằng chốt sẽ khiến toàn bộ các phần tử dồn về một phía của phân hoạch. Điều này đưa tỷ lệ phân rã về mức mất cân bằng cực hạn $n : 0$, làm suy biến thời gian chạy của thuật toán thành $O(n²)$ và tràn ngăn xếp hệ thống."
                      ]
                    },
                    {
                      number: "3",
                      title: "Lỗi vượt quá biên mảng (Array Index Out of Bounds)",
                      bullets: [
                        "Trong lược đồ phân hoạch Hoare, việc thiết lập các điều kiện dừng của vòng lặp <code>while</code> mà không kiểm tra chặt chẽ ranh giới con trỏ có thể khiến các chỉ số quét chạy vượt ra khỏi phạm vi hợp lệ của mảng.",
                        "<b>Hệ quả:</b> Khi phần tử chốt được chọn là phần tử nhỏ nhất hoặc lớn nhất của mảng, nếu không có cơ chế tự động dừng khi con trỏ chạm biên $lo$ hoặc $hi$, chương trình sẽ ngay lập tức ném ra lỗi ngoại lệ truy cập bộ nhớ bất hợp pháp."
                      ]
                    },
                    {
                      number: "4",
                      title: "Chọn chốt thiếu chiến lược trên dữ liệu có cấu trúc sẵn",
                      bullets: [
                        "Việc sử dụng các vị trí cố định như phần tử đầu tiên hoặc phần tử cuối cùng để làm chốt là sai lầm kinh điển nhất.",
                        "<b>Hệ quả:</b> Làm cho giải thuật cực kỳ dễ bị tổn thương bởi các bộ dữ liệu đầu vào đã được sắp xếp sẵn hoặc có tính tuần hoàn, đưa hiệu năng thực tế của hệ thống về mức tệ nhất $O(n²)$."
                      ]
                    }
                  ]
                },
                {
                  type: "label",
                  text: "Tối ưu hóa Nâng cao và Tương tác Kiến trúc Phần cứng"
                },
                {
                  type: "paragraph",
                  text: "Để vượt qua các giới hạn vật lý của hệ thống máy tính hiện đại, thuật toán Quick Sort trong thực tế đã được phát triển vượt bậc thông qua các kỹ thuật tối ưu hóa phần mềm và tận dụng đặc tính phần cứng."
                },
                {
                  type: "label",
                  text: "Kỹ thuật Tối ưu hóa Nâng cao"
                },
                {
                  type: "numbered-group",
                  items: [
                    {
                      number: "1",
                      title: "Sắp xếp chốt kép (Dual-Pivot Quick Sort)",
                      bullets: [
                        "Thay vì chỉ sử dụng một phần tử chốt duy nhất để chia mảng thành hai phân đoạn, thuật toán chọn hai phần tử chốt $P_1$ và $P_2$ (với điều kiện $P_1 \\le P_2$) để phân hoạch mảng thành ba vùng riêng biệt: Vùng nhỏ hơn $P_1$, vùng nằm giữa $P_1$ và $P_2$, và vùng lớn hơn $P_2$.",
                        "Phương pháp này giúp tăng tốc độ thu hẹp phạm vi sắp xếp đáng kể và đã được lựa chọn làm giải thuật sắp xếp mặc định cho các kiểu dữ liệu nguyên bản trong thư viện Java phát triển bởi Oracle."
                      ]
                    },
                    {
                      number: "2",
                      title: "Chiến lược Sắp xếp hỗn hợp (Hybrid Sorting)",
                      bullets: [
                        "Nhằm triệt tiêu chi phí quản lý đệ quy đắt đỏ khi kích thước mảng con trở nên quá nhỏ, các thư viện chuẩn hiện đại kết hợp Quick Sort với Insertion Sort. Khi kích thước mảng con giảm xuống dưới một ngưỡng giới hạn nhất định (thường là từ $10$ đến $27$ phần tử), thuật toán ngắt đệ quy và chuyển quyền xử lý sang cho Insertion Sort.",
                        "Do mảng con lúc này đã gần như được sắp xếp hoàn chỉnh qua các bước phân hoạch trước đó, Insertion Sort sẽ hoạt động cực kỳ hiệu quả với thời gian tiệm cận tuyến tính $O(n)$."
                      ]
                    }
                  ]
                },
                {
                  type: "label",
                  text: "Tương tác Vi kiến trúc và Phần cứng CPU"
                },
                {
                  type: "paragraph",
                  text: "Hiệu năng thực tế của thuật toán trên các dòng vi xử lý hiện đại chịu ảnh hưởng lớn bởi cơ chế hoạt động của bộ nhớ đệm (Cache) và bộ dự đoán nhánh (Branch Predictor)."
                },
                {
                  type: "table",
                  headers: ["Đặc tính phần cứng", "Thuật toán Quick Sort", "Thuật toán Merge Sort"],
                  rows: [
                    ["Dự đoán Nhánh (Branch Prediction)", "Lỗi dự đoán nhánh cao ($6.7\\%$ do xác suất phân hoạch rẽ nhánh ngẫu nhiên là $50/50$)", "Dự đoán nhánh tốt hơn nhiều (logic gộp tuần tự cố định)"],
                    ["Hiệu quả bộ nhớ đệm (L1/L2 Cache)", "Thân thiện tối đa (truy cập tuần tự, tối ưu hóa nạp trước phần cứng)", "Lỗi Cache L1 cực cao ($8.1\\%$ do cần cấp phát và đọc ghi mảng phụ)"]
                  ]
                },
                {
                  type: "paragraph",
                  text: "Trong quá trình phân hoạch, Quick Sort liên tục thực hiện phép so sánh điều kiện ngẫu nhiên <code>if (arr[j] &lt;= pivot)</code>. Đối với dữ liệu đầu vào có tính ngẫu nhiên cao, xác suất xảy ra rẽ nhánh đúng hoặc sai là tương đương nhau ($50\\%$). Điều này gây khó khăn cho bộ dự đoán nhánh của CPU, dẫn đến tỷ lệ dự đoán nhánh sai (branch misprediction rate) thực tế của Quick Sort lên tới khoảng $6.7\\%$. Mỗi lần dự đoán sai nhánh buộc CPU phải hủy bỏ toàn bộ đường ống lệnh đang thực thi suy đoán (speculative pipeline flush), gây lãng phí từ $10$ đến $15$ chu kỳ xử lý của vi xử lý."
                },
                {
                  type: "paragraph",
                  text: "Tuy nhiên, Quick Sort bù đắp lại điểm yếu trên bằng khả năng khai thác tối đa tính địa phương của dữ liệu (locality of reference). Do hoạt động duyệt mảng của các con trỏ diễn ra tuần tự và liên tục trên các ô nhớ liền kề, phần cứng CPU có thể dễ dàng kích hoạt tính năng nạp trước dữ liệu (hardware prefetching) để đưa sẵn dữ liệu từ RAM vào bộ nhớ đệm L1 và L2 trước khi thuật toán yêu cầu."
                },
                {
                  type: "paragraph",
                  text: "Đặc tính này hoàn toàn trái ngược với các ứng dụng đồ họa kỹ thuật số như thuật toán quét dòng tô màu đa giác (Scanline Polygon Fill Algorithm). Trong ứng dụng đồ họa này, danh sách các giao điểm của đường quét với các cạnh đa giác (Active Edge Table - AET) liên tục thay đổi vị trí thứ tự khi đường quét tịnh tiến theo trục $y$. Tuy nhiên, do các giao điểm này chỉ thay đổi thứ tự cục bộ rất nhỏ (chỉ có hai phần tử kề nhau hoán đổi vị trí tại các điểm giao cắt của hai cạnh đa giác), mảng giao điểm luôn ở trạng thái gần như đã được sắp xếp hoàn hảo. Trong ngữ cảnh đặc thù này, Bubble Sort với khả năng tối ưu hóa đạt độ phức tạp tuyến tính $O(n)$ đối với mảng gần như đã sắp xếp lại trở thành sự lựa chọn tối ưu hơn hẳn so với Quick Sort, vốn có chi phí thiết lập phân hoạch đệ quy quá lớn cho các tập dữ liệu cực nhỏ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "algo-section-thuat-toan-tim-duong-di",
      roman: "II",
      title: "Thuật toán Tìm đường đi",
      subsections: [
        {
          id: "algo-sub-dijkstra",
          number: "A",
          title: "Thuật toán Dijkstra",
          parts: [
            {
              id: "algo-part-dijkstra",
              label: "",
              title: "",
              content: [
                {
                  type: "paragraph",
                  text: "[Nhập tài liệu/nội dung thuật toán Dijkstra vào đây]"
                }
              ]
            }
          ]
        },
        {
          id: "algo-sub-bfs-dfs",
          number: "B",
          title: "Tìm kiếm BFS và DFS",
          parts: [
            {
              id: "algo-part-bfs-dfs",
              label: "",
              title: "",
              content: [
                {
                  type: "paragraph",
                  text: "[Nhập tài liệu/nội dung BFS/DFS vào đây]"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
