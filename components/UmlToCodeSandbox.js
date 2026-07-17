"use client";
import React, { useState } from "react";

export default function UmlToCodeSandbox() {
  const [selectedElement, setSelectedElement] = useState("class"); // class, attr_id, attr_name, constr, get_name, set_name

  const elementsInfo = {
    class: {
      title: "Định nghĩa Class (Tên lớp)",
      uml: "Student",
      javaCode: "public class Student {",
      rule: "Tên lớp trong UML (Student) ánh xạ 1-1 thành tên lớp trong Java. Trong Java, ta thêm từ khóa public class để chỉ định đây là một lớp công khai."
    },
    attr_id: {
      title: "Thuộc tính id (Mã số)",
      uml: "- id: int",
      javaCode: "private int id;",
      rule: "Ký tự trừ '-' trong UML biểu thị thuộc tính private (riêng tư, chỉ nội bộ lớp truy cập). Chú ý sự đảo vị trí kiểu dữ liệu: UML viết 'id: int', Java viết 'int id;'."
    },
    attr_name: {
      title: "Thuộc tính name (Họ tên)",
      uml: "- name: String",
      javaCode: "private String name;",
      rule: "Ký tự '-' dịch thành private. Kiểu đối tượng String trong Java viết hoa chữ cái đầu. UML viết 'name: String', Java viết 'String name;'."
    },
    constr: {
      title: "Constructor (Hàm khởi tạo)",
      uml: "+ Student(id: int, name: String)",
      javaCode: "public Student(int id, String name) {\n    this.id = id;\n    this.name = name;\n}",
      rule: "Ký tự cộng '+' trong UML biểu thị public (công khai). Constructor là hàm trùng tên lớp, không ghi kiểu trả về. Dùng từ khóa 'this' để gán giá trị tham số vào thuộc tính của đối tượng."
    },
    get_name: {
      title: "Getter getName (Lấy tên)",
      uml: "+ getName(): String",
      javaCode: "public String getName() {\n    return name;\n}",
      rule: "Ký tự '+' dịch thành public. Kiểu trả về ở cuối dòng của UML ': String' được đảo lên đầu phương thức trong Java: 'public String getName()'."
    },
    set_name: {
      title: "Setter setName (Gán tên)",
      uml: "+ setName(name: String): void",
      javaCode: "public void setName(String name) {\n    this.name = name;\n}",
      rule: "Phương thức không trả về kết quả trong UML có kiểu ': void', được ánh xạ thành kiểu trả về 'void' trong Java. Hàm nhận tham số đầu vào là String name."
    }
  };

  const current = elementsInfo[selectedElement];

  const getCodeLineStyle = (key) => {
    if (selectedElement === key) {
      return "bg-emerald-500/20 border-l-4 border-emerald-500 pl-2 py-0.5 font-bold text-white transition-all";
    }
    return "text-stone-400 pl-3 py-0.5";
  };

  const getUmlLineStyle = (key) => {
    if (selectedElement === key) {
      return "bg-amber-500/20 border border-amber-500 rounded px-1.5 py-0.5 text-amber-250 font-bold transition-all";
    }
    return "hover:bg-stone-850 px-1.5 py-0.5 rounded cursor-pointer transition-colors";
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          📐 Trình Ánh Xạ Sơ Đồ UML Sang Mã Nguồn Java
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhấp vào bất kỳ thành phần nào của Sơ đồ lớp UML ở bảng trái để xem cách nó được biên dịch sang mã nguồn Java tương ứng ở bảng phải.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Interactive UML Box (5 cols) */}
        <div className="lg:col-span-5 bg-[#151413] border border-stone-850 rounded-2xl p-5 text-stone-300 flex flex-col justify-between shadow-md select-none">
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-4">Sơ đồ lớp UML Class Diagram</div>
            
            {/* The UML Box */}
            <div className="border border-stone-750 bg-[#1e1d1a] rounded-xl overflow-hidden w-full max-w-[320px] mx-auto text-xs font-mono">
              
              {/* Class Name Compartment */}
              <div
                onClick={() => setSelectedElement("class")}
                className={`p-3 text-center border-b border-stone-750 font-bold text-sm ${getUmlLineStyle("class")}`}
              >
                Student
              </div>

              {/* Attributes Compartment */}
              <div className="p-3 border-b border-stone-750 flex flex-col gap-1 text-stone-350">
                <div onClick={() => setSelectedElement("attr_id")} className={getUmlLineStyle("attr_id")}>
                  - id: int
                </div>
                <div onClick={() => setSelectedElement("attr_name")} className={getUmlLineStyle("attr_name")}>
                  - name: String
                </div>
              </div>

              {/* Methods Compartment */}
              <div className="p-3 flex flex-col gap-1 text-stone-350">
                <div onClick={() => setSelectedElement("constr")} className={getUmlLineStyle("constr")}>
                  + Student(id: int, name: String)
                </div>
                <div onClick={() => setSelectedElement("get_name")} className={getUmlLineStyle("get_name")}>
                  + getName(): String
                </div>
                <div onClick={() => setSelectedElement("set_name")} className={getUmlLineStyle("set_name")}>
                  + setName(name: String): void
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-stone-500 mt-4 border-t border-stone-850 pt-2 text-center">
            Mẹo: Ký hiệu <span className="text-rose-400 font-bold">-</span> là private, <span className="text-emerald-400 font-bold">+</span> là public.
          </div>
        </div>

        {/* Right Side: Java Code Block & Rule Commentary (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Java Source code */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-[11px] shadow-md leading-relaxed">
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">Mã nguồn Java (Student.java)</div>
            
            <div className="space-y-0.5">
              <div className={getCodeLineStyle("class")}>public class Student &#123;</div>
              
              {/* Attributes */}
              <div className={getCodeLineStyle("attr_id")}>&nbsp;&nbsp;&nbsp;&nbsp;private int id;</div>
              <div className={getCodeLineStyle("attr_name")}>&nbsp;&nbsp;&nbsp;&nbsp;private String name;</div>
              <div className="text-stone-600">&nbsp;&nbsp;&nbsp;&nbsp;// ...</div>

              {/* Constructor */}
              <div className={selectedElement === "constr" ? "bg-emerald-500/20 border-l-4 border-emerald-500 pl-2 font-bold text-white transition-all py-0.5" : "text-stone-400 pl-3 py-0.5"}>
                &nbsp;&nbsp;&nbsp;&nbsp;public Student(int id, String name) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.id = id;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </div>

              {/* Getter */}
              <div className={selectedElement === "get_name" ? "bg-emerald-500/20 border-l-4 border-emerald-500 pl-2 font-bold text-white transition-all py-0.5" : "text-stone-400 pl-3 py-0.5"}>
                &nbsp;&nbsp;&nbsp;&nbsp;public String getName() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return name;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </div>

              {/* Setter */}
              <div className={selectedElement === "set_name" ? "bg-emerald-500/20 border-l-4 border-emerald-500 pl-2 font-bold text-white transition-all py-0.5" : "text-stone-400 pl-3 py-0.5"}>
                &nbsp;&nbsp;&nbsp;&nbsp;public void setName(String name) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </div>

              <div>&#125;</div>
            </div>
          </div>

          {/* Explanation banner */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm text-xs leading-relaxed text-stone-750">
            <span className="font-extrabold text-stone-850 block mb-1">
              ✏️ Quy ước chuyển đổi: <span className="text-amber-700 font-bold">{current.title}</span>
            </span>
            <p className="mb-2">
              UML: <code className="bg-stone-100 px-1 py-0.5 rounded text-rose-700 font-bold">{current.uml}</code> ➔ Java: <code className="bg-stone-100 px-1 py-0.5 rounded text-emerald-700 font-bold">{current.javaCode.split("\n")[0]}</code>
            </p>
            <div className="text-stone-600 border-t pt-2 mt-2">
              {current.rule}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
