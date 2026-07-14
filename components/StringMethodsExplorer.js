"use client";
import React, { useState, useMemo } from "react";

export default function StringMethodsExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMethodId, setSelectedMethodId] = useState("length");
  
  // Interactive inputs for the live playground
  const [mainStr, setMainStr] = useState("  Lập Trình Java OOP  ");
  const [paramIndex, setParamIndex] = useState(2);
  const [paramBegin, setParamBegin] = useState(2);
  const [paramEnd, setParamEnd] = useState(12);
  const [paramSubStr, setParamSubStr] = useState("Java");
  const [paramOldStr, setParamOldStr] = useState("Java");
  const [paramNewStr, setParamNewStr] = useState("Python");
  const [paramOtherStr, setParamOtherStr] = useState("  Lập Trình Java OOP  ");
  const [paramRegex, setParamRegex] = useState("\\s+");

  // Detailed data for all 17 methods
  const methodsData = useMemo(() => [
    {
      id: "length",
      group: "Kích thước & Truy cập",
      signature: "public int length()",
      desc: "Trả về độ dài (số lượng ký tự) của chuỗi, bao gồm tất cả các ký tự khoảng trắng, chữ số, chữ cái và ký tự đặc biệt.",
      inputs: [],
      output: {
        type: "int",
        desc: "Số lượng ký tự chứa trong đối tượng chuỗi hiện tại."
      },
      gotcha: "<strong>Cạm bẫy dễ sai:</strong> Rất nhiều học sinh nhầm lẫn giữa thuộc tính <code>length</code> (không có dấu ngoặc tròn) của mảng (Array) và phương thức <code>length()</code> (có dấu ngoặc tròn) của chuỗi (String). Ví dụ: <code>arr.length</code> vs <code>str.length()</code>.",
      demoCode: (s) => `String s = "${s}";\nint len = s.length();\nSystem.out.println(len); // Kết quả: ${s.length}\nSystem.out.println(s);   // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.length()`,
          output: s.length.toString(),
          type: "int"
        };
      }
    },
    {
      id: "charAt",
      group: "Kích thước & Truy cập",
      signature: "public char charAt(int index)",
      desc: "Trả về ký tự nằm tại vị trí chỉ số (index) được chỉ định. Vị trí đầu tiên của chuỗi được đánh số chỉ mục là 0.",
      inputs: [
        { name: "index", type: "int", desc: "Chỉ số của ký tự muốn truy xuất (từ 0 đến length() - 1)." }
      ],
      output: {
        type: "char",
        desc: "Ký tự tại vị trí tương ứng trong chuỗi."
      },
      demoCode: (s) => {
        const idx = Math.min(Math.max(0, paramIndex), s.length - 1);
        return `String s = "${s}";\nchar c = s.charAt(${idx});\nSystem.out.println(c); // Kết quả: '${s.charAt(idx)}'\nSystem.out.println(s);   // Chuỗi gốc không đổi!`;
      },
      eval: (s) => {
        const idx = Math.min(Math.max(0, paramIndex), s.length - 1);
        return {
          syntax: `s.charAt(${idx})`,
          output: `'${s.charAt(idx)}'`,
          type: "char"
        };
      }
    },
    {
      id: "indexOf",
      group: "Tìm kiếm",
      signature: "public int indexOf(String str)",
      desc: "Tìm kiếm vị trí xuất hiện đầu tiên của một chuỗi con chỉ định. Bắt đầu tìm kiếm từ trái sang phải.",
      inputs: [
        { name: "str", type: "String", desc: "Chuỗi con cần tìm kiếm vị trí chỉ số." }
      ],
      output: {
        type: "int",
        desc: "Chỉ số bắt đầu của chuỗi con tìm thấy đầu tiên, hoặc -1 nếu không tồn tại chuỗi con trong chuỗi gốc."
      },
      demoCode: (s) => `String s = "${s}";\nint idx = s.indexOf("${paramSubStr}");\nSystem.out.println(idx); // Kết quả: ${s.indexOf(paramSubStr)}\nSystem.out.println(s);   // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.indexOf("${paramSubStr}")`,
          output: s.indexOf(paramSubStr).toString(),
          type: "int"
        };
      }
    },
    {
      id: "lastIndexOf",
      group: "Tìm kiếm",
      signature: "public int lastIndexOf(String str)",
      desc: "Tìm kiếm vị trí xuất hiện cuối cùng của một chuỗi con chỉ định trong chuỗi gốc (tìm từ phải qua trái).",
      inputs: [
        { name: "str", type: "String", desc: "Chuỗi con cần tìm kiếm vị trí chỉ số." }
      ],
      output: {
        type: "int",
        desc: "Chỉ số bắt đầu của chuỗi con tìm thấy ở lần xuất hiện cuối cùng, hoặc -1 nếu không tồn tại."
      },
      demoCode: (s) => `String s = "${s}";\nint idx = s.lastIndexOf("${paramSubStr}");\nSystem.out.println(idx); // Kết quả: ${s.lastIndexOf(paramSubStr)}\nSystem.out.println(s);   // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.lastIndexOf("${paramSubStr}")`,
          output: s.lastIndexOf(paramSubStr).toString(),
          type: "int"
        };
      }
    },
    {
      id: "substring",
      group: "Trích xuất chuỗi",
      signature: "public String substring(int beginIndex, int endIndex)",
      desc: "Trích xuất một chuỗi con từ chuỗi gốc, bắt đầu từ chỉ số beginIndex đến trước chỉ số endIndex.",
      inputs: [
        { name: "beginIndex", type: "int", desc: "Chỉ số bắt đầu trích xuất (lấy cả ký tự tại đây)." },
        { name: "endIndex", type: "int", desc: "Chỉ số kết thúc trích xuất (không lấy ký tự tại đây)." }
      ],
      output: {
        type: "String",
        desc: "Đối tượng chuỗi con mới được trích xuất."
      },
      demoCode: (s) => {
        const beg = Math.min(Math.max(0, paramBegin), s.length);
        const end = Math.min(Math.max(beg, paramEnd), s.length);
        return `String s = "${s}";\nString sub = s.substring(${beg}, ${end});\nSystem.out.println(sub); // Kết quả: "${s.substring(beg, end)}"\nSystem.out.println(s);   // Chuỗi gốc không đổi!`;
      },
      eval: (s) => {
        const beg = Math.min(Math.max(0, paramBegin), s.length);
        const end = Math.min(Math.max(beg, paramEnd), s.length);
        return {
          syntax: `s.substring(${beg}, ${end})`,
          output: `"${s.substring(beg, end)}"`,
          type: "String"
        };
      }
    },
    {
      id: "trim",
      group: "Biến đổi chuỗi",
      signature: "public String trim()",
      desc: "Loại bỏ toàn bộ các ký tự khoảng trắng thừa xuất hiện ở đầu chuỗi và ở cuối chuỗi.",
      inputs: [],
      output: {
        type: "String",
        desc: "Chuỗi mới đã loại bỏ khoảng trắng thừa hai đầu."
      },
      gotcha: "<strong>Lưu ý:</strong> Phương thức này <strong>chỉ</strong> xóa khoảng trắng ở đầu và cuối chuỗi. Các khoảng trắng ở giữa các từ trong chuỗi sẽ <strong>không bao giờ</strong> bị ảnh hưởng hay biến mất.",
      demoCode: (s) => `String s = "${s}";\nString clean = s.trim();\nSystem.out.println(clean); // Kết quả: "${s.trim()}"\nSystem.out.println(s);     // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.trim()`,
          output: `"${s.trim()}"`,
          type: "String"
        };
      }
    },
    {
      id: "toUpperCase",
      group: "Biến đổi chuỗi",
      signature: "public String toUpperCase()",
      desc: "Chuyển đổi toàn bộ tất cả ký tự viết thường trong chuỗi thành ký tự viết hoa.",
      inputs: [],
      output: {
        type: "String",
        desc: "Chuỗi mới được viết hoa toàn bộ."
      },
      gotcha: "<strong>Lưu ý tính bất biến:</strong> Lệnh <code>s.toUpperCase()</code> trả về một chuỗi mới. Bản thân chuỗi gốc <code>s</code> hoàn toàn không bị biến đổi chữ hoa sau khi chạy lệnh này.",
      demoCode: (s) => `String s = "${s}";\nString upper = s.toUpperCase();\nSystem.out.println(upper); // Kết quả: "${s.toUpperCase()}"\nSystem.out.println(s);     // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.toUpperCase()`,
          output: `"${s.toUpperCase()}"`,
          type: "String"
        };
      }
    },
    {
      id: "toLowerCase",
      group: "Biến đổi chuỗi",
      signature: "public String toLowerCase()",
      desc: "Chuyển đổi toàn bộ tất cả ký tự viết hoa trong chuỗi thành ký tự viết thường.",
      inputs: [],
      output: {
        type: "String",
        desc: "Chuỗi mới được viết thường toàn bộ."
      },
      gotcha: "<strong>Lưu ý:</strong> Tương tự như <code>toUpperCase()</code>, chuỗi gốc vẫn được giữ nguyên dạng bất biến ban đầu trong bộ nhớ RAM.",
      demoCode: (s) => `String s = "${s}";\nString lower = s.toLowerCase();\nSystem.out.println(lower); // Kết quả: "${s.toLowerCase()}"\nSystem.out.println(s);     // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.toLowerCase()`,
          output: `"${s.toLowerCase()}"`,
          type: "String"
        };
      }
    },
    {
      id: "replace",
      group: "Biến đổi chuỗi",
      signature: "public String replace(CharSequence target, CharSequence replacement)",
      desc: "Tìm kiếm toàn bộ các chuỗi con khớp với target trong chuỗi và thay thế toàn bộ bằng chuỗi replacement mới.",
      inputs: [
        { name: "target", type: "CharSequence", desc: "Chuỗi cũ hoặc ký tự mục tiêu cần thay thế." },
        { name: "replacement", type: "CharSequence", desc: "Chuỗi mới hoặc ký tự thay thế vào." }
      ],
      output: {
        type: "String",
        desc: "Chuỗi mới sau khi đã thay thế toàn bộ."
      },
      demoCode: (s) => `String s = "${s}";\nString rep = s.replace("${paramOldStr}", "${paramNewStr}");\nSystem.out.println(rep); // Kết quả: "${s.replace(paramOldStr, paramNewStr)}"\nSystem.out.println(s);   // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.replace("${paramOldStr}", "${paramNewStr}")`,
          output: `"${s.replace(paramOldStr, paramNewStr)}"`,
          type: "String"
        };
      }
    },
    {
      id: "equals",
      group: "So sánh chuỗi",
      signature: "public boolean equals(Object anObject)",
      desc: "So sánh nội dung của hai đối tượng chuỗi xem có khớp nhau hoàn toàn từng ký tự hay không (phân biệt viết hoa/viết thường).",
      inputs: [
        { name: "anObject", type: "Object", desc: "Đối tượng chuỗi khác dùng để đối chiếu so sánh." }
      ],
      output: {
        type: "boolean",
        desc: "true nếu nội dung ký tự trùng khớp hoàn toàn, ngược lại là false."
      },
      demoCode: (s) => `String s = "${s}";\nString other = "${paramOtherStr}";\nboolean eq = s.equals(other);\nSystem.out.println(eq); // Kết quả: ${s === paramOtherStr}\nSystem.out.println(s == other); // So sánh địa chỉ ➔ false!`,
      eval: (s) => {
        return {
          syntax: `s.equals("${paramOtherStr}")`,
          output: (s === paramOtherStr).toString(),
          type: "boolean"
        };
      }
    },
    {
      id: "equalsIgnoreCase",
      group: "So sánh chuỗi",
      signature: "public boolean equalsIgnoreCase(String anotherString)",
      desc: "So sánh nội dung của hai đối tượng chuỗi xem có trùng khớp nhau hay không mà bỏ qua sự khác biệt chữ hoa/thường.",
      inputs: [
        { name: "anotherString", type: "String", desc: "Chuỗi khác dùng để đối chiếu so sánh." }
      ],
      output: {
        type: "boolean",
        desc: "true nếu trùng khớp bỏ qua hoa thường, ngược lại là false."
      },
      demoCode: (s) => `String s = "${s}";\nString other = "${paramOtherStr}";\nboolean eq = s.equalsIgnoreCase(other);\nSystem.out.println(eq); // Kết quả: ${s.toLowerCase() === paramOtherStr.toLowerCase()}`,
      eval: (s) => {
        return {
          syntax: `s.equalsIgnoreCase("${paramOtherStr}")`,
          output: (s.toLowerCase() === paramOtherStr.toLowerCase()).toString(),
          type: "boolean"
        };
      }
    },
    {
      id: "compareTo",
      group: "So sánh chuỗi",
      signature: "public int compareTo(String anotherString)",
      desc: "So sánh hai chuỗi theo thứ tự từ điển alphabet. Dựa trên giá trị Unicode của từng ký tự.",
      inputs: [
        { name: "anotherString", type: "String", desc: "Chuỗi khác dùng để so sánh." }
      ],
      output: {
        type: "int",
        desc: "Số nguyên âm nếu s đứng trước, 0 nếu hai chuỗi bằng nhau, số nguyên dương nếu s đứng sau."
      },
      demoCode: (s) => `String s = "${s}";\nString other = "${paramOtherStr}";\nint comp = s.compareTo(other);\nSystem.out.println(comp); // Kết quả: ${s.localeCompare(paramOtherStr) < 0 ? -1 : s.localeCompare(paramOtherStr) > 0 ? 1 : 0}`,
      eval: (s) => {
        const val = s.localeCompare(paramOtherStr);
        const displayVal = val < 0 ? "-1" : val > 0 ? "1" : "0";
        return {
          syntax: `s.compareTo("${paramOtherStr}")`,
          output: displayVal,
          type: "int"
        };
      }
    },
    {
      id: "concat",
      group: "Nối chuỗi",
      signature: "public String concat(String str)",
      desc: "Nối thêm chuỗi str được truyền vào phía sau đuôi của chuỗi gốc hiện tại.",
      inputs: [
        { name: "str", type: "String", desc: "Chuỗi muốn nối thêm vào cuối." }
      ],
      output: {
        type: "String",
        desc: "Chuỗi ghép nối mới được tạo thành."
      },
      demoCode: (s) => `String s = "${s}";\nString joined = s.concat("${paramOtherStr}");\nSystem.out.println(joined); // Kết quả: "${s.concat(paramOtherStr)}"\nSystem.out.println(s);      // Chuỗi gốc không đổi!`,
      eval: (s) => {
        return {
          syntax: `s.concat("${paramOtherStr}")`,
          output: `"${s.concat(paramOtherStr)}"`,
          type: "String"
        };
      }
    },
    {
      id: "split",
      group: "Trích xuất chuỗi",
      signature: "public String[] split(String regex)",
      desc: "Tách chuỗi gốc thành một mảng các chuỗi con dựa trên ký tự phân tách biểu thức chính quy (regex) được truyền vào.",
      inputs: [
        { name: "regex", type: "String", desc: "Biểu thức chính quy phân tách các ký tự." }
      ],
      output: {
        type: "String[]",
        desc: "Mảng chứa các chuỗi con sau khi phân tách."
      },
      demoCode: (s) => {
        let r = paramRegex === "\\s+" ? /\s+/ : paramRegex;
        const arr = s.split(r).filter(w => w.length > 0);
        return `String s = "${s}";\nString[] words = s.split("${paramRegex}");\nSystem.out.println(Arrays.toString(words)); \n// Kết quả: ${JSON.stringify(arr)}`;
      },
      eval: (s) => {
        let r = paramRegex === "\\s+" ? /\s+/ : paramRegex;
        const arr = s.split(r).filter(w => w.length > 0);
        return {
          syntax: `s.split("${paramRegex}")`,
          output: JSON.stringify(arr),
          type: "String[]"
        };
      }
    },
    {
      id: "contains",
      group: "Tìm kiếm",
      signature: "public boolean contains(CharSequence s)",
      desc: "Kiểm tra xem chuỗi gốc có chứa bất kỳ chuỗi con chỉ định s hay không.",
      inputs: [
        { name: "s", type: "CharSequence", desc: "Chuỗi con muốn kiểm tra sự xuất hiện." }
      ],
      output: {
        type: "boolean",
        desc: "true nếu chuỗi gốc có chứa chuỗi con s, ngược lại trả về false."
      },
      demoCode: (s) => `String s = "${s}";\nboolean hasSub = s.contains("${paramSubStr}");\nSystem.out.println(hasSub); // Kết quả: ${s.includes(paramSubStr)}`,
      eval: (s) => {
        return {
          syntax: `s.contains("${paramSubStr}")`,
          output: s.includes(paramSubStr).toString(),
          type: "boolean"
        };
      }
    },
    {
      id: "startsWith",
      group: "Tìm kiếm",
      signature: "public boolean startsWith(String prefix)",
      desc: "Kiểm tra xem chuỗi gốc có bắt đầu bằng tiền tố prefix chỉ định hay không.",
      inputs: [
        { name: "prefix", type: "String", desc: "Tiền tố cần kiểm tra." }
      ],
      output: {
        type: "boolean",
        desc: "true nếu chuỗi bắt đầu bằng prefix, ngược lại trả về false."
      },
      demoCode: (s) => `String s = "${s}";\nboolean starts = s.startsWith("${paramSubStr}");\nSystem.out.println(starts); // Kết quả: ${s.startsWith(paramSubStr)}`,
      eval: (s) => {
        return {
          syntax: `s.startsWith("${paramSubStr}")`,
          output: s.startsWith(paramSubStr).toString(),
          type: "boolean"
        };
      }
    },
    {
      id: "toCharArray",
      group: "Biến đổi chuỗi",
      signature: "public char[] toCharArray()",
      desc: "Chuyển đổi toàn bộ chuỗi String hiện tại thành một mảng ký tự char[] mới chứa đầy đủ ký tự của chuỗi.",
      inputs: [],
      output: {
        type: "char[]",
        desc: "Mảng các ký tự tương ứng được cấp phát mới."
      },
      gotcha: "<strong>Lưu ý an toàn:</strong> Mảng ký tự trả về là một đối tượng mảng độc lập được cấp phát mới trên Heap. Mọi sửa đổi phần tử trên mảng này <strong>không ảnh hưởng ngược lại</strong> chuỗi gốc <code>s</code>.",
      demoCode: (s) => `String s = "${s}";\nchar[] chars = s.toCharArray();\nSystem.out.println(Arrays.toString(chars)); \n// Kết quả: ${JSON.stringify(s.split(""))}`,
      eval: (s) => {
        return {
          syntax: `s.toCharArray()`,
          output: JSON.stringify(s.split("")),
          type: "char[]"
        };
      }
    }
  ], [mainStr, paramIndex, paramBegin, paramEnd, paramSubStr, paramOldStr, paramNewStr, paramOtherStr, paramRegex]);

  // Selected Method details
  const currentMethod = useMemo(() => {
    return methodsData.find((m) => m.id === selectedMethodId) || methodsData[0];
  }, [methodsData, selectedMethodId]);

  // Group methods for organized sidebar display
  const groupedMethods = useMemo(() => {
    const groups = {};
    methodsData.forEach((m) => {
      if (!groups[m.group]) {
        groups[m.group] = [];
      }
      groups[m.group].push(m);
    });
    return groups;
  }, [methodsData]);

  // Filtered methods based on search term
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return groupedMethods;
    
    const term = searchTerm.toLowerCase();
    const result = {};
    
    Object.entries(groupedMethods).forEach(([groupName, list]) => {
      const matched = list.filter(m => 
        m.id.toLowerCase().includes(term)
      );
      if (matched.length > 0) {
        result[groupName] = matched;
      }
    });
    
    return result;
  }, [groupedMethods, searchTerm]);

  // Current live playground values
  const { syntax, output, type } = useMemo(() => {
    return currentMethod.eval(mainStr);
  }, [currentMethod, mainStr]);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Header Block */}
      <div className="border-b border-stone-200 pb-4 mb-6">
        <h3 className="text-lg md:text-xl font-black text-stone-900 flex items-center gap-2">
          📚 Trung Tâm Tra Cứu & Thực Nghiệm Phương Thức String
        </h3>
        <p className="text-xs text-stone-550 mt-1">
          Học chi tiết chữ ký hàm, mô tả tham số đầu vào (Input), kết quả trả về (Output), cạm bẫy thi trắc nghiệm và thử nghiệm chạy code trực tiếp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Search & Methods List Sidebar (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Search Input */}
          <div className="bg-white border border-stone-200 p-3 rounded-2xl shadow-sm">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Tìm kiếm phương thức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-xl text-xs font-medium focus:border-amber-500 focus:outline-none bg-stone-50 text-stone-750"
              />
              <span className="absolute left-3.5 top-2.5 text-stone-400 text-xs"></span>
            </div>
          </div>

          {/* Methods List Grouped */}
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-4 flex-1 overflow-y-auto max-h-[520px] space-y-4">
            {Object.keys(filteredGroups).length > 0 ? (
              Object.entries(filteredGroups).map(([groupName, list]) => (
                <div key={groupName} className="space-y-1.5">
                  <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest pl-1 mb-1">
                    {groupName}
                  </div>
                  <div className="space-y-1">
                    {list.map((m) => {
                      const isActive = m.id === selectedMethodId;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setSelectedMethodId(m.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl border text-xs transition-all cursor-pointer flex flex-col gap-0.5 ${
                            isActive
                              ? "border-amber-500 bg-amber-50/15 text-amber-900 font-bold"
                              : "border-stone-100 hover:bg-stone-50 hover:border-stone-200 text-stone-650"
                          }`}
                        >
                          <span className="font-mono text-xs">{m.id}()</span>
                          <span className={`text-[9px] font-normal truncate max-w-full ${isActive ? "text-amber-700/80" : "text-stone-400"}`}>
                            {m.signature}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-stone-400 text-xs italic">
                Không tìm thấy phương thức phù hợp
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Detailed Explorer & Playground (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-5 bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
          
          {/* Method Title & Signature */}
          <div className="border-b border-stone-100 pb-3">
            <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
              {currentMethod.group}
            </span>
            <h4 className="text-base font-extrabold text-stone-900 mt-2 font-mono">
              s.{currentMethod.id}()
            </h4>
            <div className="bg-stone-900 border border-stone-850 p-2.5 rounded-xl text-amber-400 font-mono text-xs mt-2 overflow-x-auto shadow-inner">
              {currentMethod.signature}
            </div>
          </div>

          {/* Definition */}
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-1.5">Mô tả chức năng</div>
            <p className="text-xs leading-relaxed text-stone-700">
              {currentMethod.desc}
            </p>
          </div>

          {/* Input & Output Parameters table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Input params */}
            <div className="border border-stone-150 rounded-xl p-3.5 bg-stone-50/50">
              <div className="text-[9px] font-black text-stone-450 uppercase tracking-wider mb-2">Tham số đầu vào (Input)</div>
              {currentMethod.inputs.length > 0 ? (
                <div className="space-y-2">
                  {currentMethod.inputs.map((inp, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="font-mono font-bold text-stone-800">
                        <code>{inp.type}</code> <span className="text-amber-700">{inp.name}</span>
                      </div>
                      <div className="text-[10px] text-stone-500 mt-0.5">{inp.desc}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-stone-400 italic">Không yêu cầu tham số đầu vào.</span>
              )}
            </div>

            {/* Output */}
            <div className="border border-stone-150 rounded-xl p-3.5 bg-stone-50/50 flex flex-col justify-between">
              <div>
                <div className="text-[9px] font-black text-stone-450 uppercase tracking-wider mb-2">Giá trị trả về (Output)</div>
                <div className="text-xs">
                  <div className="font-mono font-bold text-stone-800">
                    Kiểu trả về: <code className="text-emerald-600 font-black">{currentMethod.output.type}</code>
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">{currentMethod.output.desc}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Traps Box / Gotchas */}
          <div className="bg-rose-50/30 border border-rose-150 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
            <span dangerouslySetInnerHTML={{ __html: currentMethod.gotcha }} />
          </div>

          {/* Interactive Playground Runner section */}
          <div className="border-t border-stone-150 pt-4 mt-1 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Trình chạy thử code mẫu tương tác</div>
              <span className="text-[9px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse">Live Compiler Simulator</span>
            </div>

            {/* Main String Input & Param inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200 shadow-inner">
              
              {/* Main String s */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-stone-550 font-bold">Chuỗi gốc s =</label>
                <input
                  type="text"
                  value={mainStr}
                  onChange={(e) => setMainStr(e.target.value)}
                  className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                />
              </div>

              {/* Dynamic parameter settings depending on selected method */}
              <div className="flex flex-col gap-1.5 justify-center">
                
                {/* charAt param */}
                {selectedMethodId === "charAt" && (
                  <>
                    <label className="text-[10px] text-stone-550 font-bold">Tham số index =</label>
                    <input
                      type="number"
                      min="0"
                      max={mainStr.length - 1}
                      value={paramIndex}
                      onChange={(e) => setParamIndex(Math.min(Math.max(0, parseInt(e.target.value) || 0), mainStr.length - 1))}
                      className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                    />
                  </>
                )}

                {/* substring params */}
                {selectedMethodId === "substring" && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] text-stone-550 font-bold">beginIndex =</label>
                      <input
                        type="number"
                        min="0"
                        max={mainStr.length}
                        value={paramBegin}
                        onChange={(e) => setParamBegin(Math.min(Math.max(0, parseInt(e.target.value) || 0), mainStr.length))}
                        className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] text-stone-550 font-bold">endIndex =</label>
                      <input
                        type="number"
                        min="0"
                        max={mainStr.length}
                        value={paramEnd}
                        onChange={(e) => setParamEnd(Math.min(Math.max(0, parseInt(e.target.value) || 0), mainStr.length))}
                        className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                      />
                    </div>
                  </div>
                )}

                {/* indexOf / lastIndexOf / contains / startsWith params */}
                {["indexOf", "lastIndexOf", "contains", "startsWith"].includes(selectedMethodId) && (
                  <>
                    <label className="text-[10px] text-stone-550 font-bold">Tham số str =</label>
                    <input
                      type="text"
                      value={paramSubStr}
                      onChange={(e) => setParamSubStr(e.target.value)}
                      className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                    />
                  </>
                )}

                {/* replace params */}
                {selectedMethodId === "replace" && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] text-stone-550 font-bold">target =</label>
                      <input
                        type="text"
                        value={paramOldStr}
                        onChange={(e) => setParamOldStr(e.target.value)}
                        className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] text-stone-550 font-bold">replacement =</label>
                      <input
                        type="text"
                        value={paramNewStr}
                        onChange={(e) => setParamNewStr(e.target.value)}
                        className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                      />
                    </div>
                  </div>
                )}

                {/* equals / equalsIgnoreCase / compareTo params */}
                {["equals", "equalsIgnoreCase", "compareTo"].includes(selectedMethodId) && (
                  <>
                    <label className="text-[10px] text-stone-550 font-bold">Tham số chuỗi so sánh =</label>
                    <input
                      type="text"
                      value={paramOtherStr}
                      onChange={(e) => setParamOtherStr(e.target.value)}
                      className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                    />
                  </>
                )}

                {/* concat params */}
                {selectedMethodId === "concat" && (
                  <>
                    <label className="text-[10px] text-stone-550 font-bold">Tham số chuỗi cần nối =</label>
                    <input
                      type="text"
                      value={paramOtherStr}
                      onChange={(e) => setParamOtherStr(e.target.value)}
                      className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                    />
                  </>
                )}

                {/* split params */}
                {selectedMethodId === "split" && (
                  <>
                    <label className="text-[10px] text-stone-550 font-bold">Tham số regex =</label>
                    <input
                      type="text"
                      value={paramRegex}
                      onChange={(e) => setParamRegex(e.target.value)}
                      className="px-3 py-1.5 border border-stone-250 rounded-lg font-mono text-xs focus:border-amber-500 focus:outline-none bg-white text-stone-800"
                    />
                  </>
                )}

                {/* No param methods */}
                {["length", "trim", "toUpperCase", "toLowerCase", "toCharArray"].includes(selectedMethodId) && (
                  <span className="text-xs text-stone-400 italic">Không có tham số để cấu hình</span>
                )}

              </div>

            </div>

            {/* Code Box & Output Console */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Java Code block */}
              <div className="bg-[#1e1d1a] border border-[#2a2926] p-4 rounded-xl text-white font-mono text-xs shadow-inner">
                <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-2 font-sans">Mã nguồn Java mô phỏng</div>
                <pre className="whitespace-pre-wrap">{currentMethod.demoCode(mainStr)}</pre>
              </div>

              {/* Console Output */}
              <div className="bg-stone-900 border border-stone-850 p-4 rounded-xl text-white font-mono text-xs flex flex-col justify-between">
                <div>
                  <div className="text-[9px] text-stone-450 uppercase font-black tracking-wider mb-2 font-sans flex justify-between">
                    <span>Màn hình Console</span>
                    <span className="text-emerald-400 font-bold text-[8px] bg-emerald-450/10 px-1 rounded uppercase tracking-wider">{type}</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded border border-stone-800 text-emerald-400 break-all min-h-[50px] flex items-center shadow-inner font-bold">
                    {output}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-800 text-[10px] text-stone-450 leading-relaxed font-sans">
                  <strong>💡 Chứng minh tính Immutable:</strong> Mặc dù chạy phương thức trả về kết quả mới là <code className="text-emerald-400 font-mono font-bold">{output}</code>, nhưng chuỗi gốc <code>s</code> trong bộ nhớ vẫn là nguyên vẹn <code className="text-amber-400 font-mono font-bold">"{mainStr}"</code>.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
