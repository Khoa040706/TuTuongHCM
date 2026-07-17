"use client";
import React, { useState } from "react";
import { BookOpen, Key, Hash, Code, ClipboardCheck, Sparkles } from "lucide-react";

export default function InteractiveRecapPanel() {
  const [activeTab, setActiveTab] = useState("foundations");

  const tabs = [
    {
      id: "foundations",
      label: "4 Nền Tảng",
      icon: <BookOpen size={14} />,
      title: "4 Nền tảng OOP cơ bản",
      content: (
        <div className="space-y-3.5">
          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            Lập trình hướng đối tượng dựa trên 4 cột trụ nền tảng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="text-[10px] font-black text-amber-700 uppercase block mb-1">1. Encapsulation (Đóng gói)</span>
              <p className="text-[10px] text-stone-500 leading-relaxed">
                Che giấu dữ liệu nội bộ (private attributes) và chỉ cung cấp dịch vụ thông qua các phương thức công khai (public getters/setters).
              </p>
            </div>
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="text-[10px] font-black text-stone-500 uppercase block mb-1">2. Inheritance (Kế thừa)</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">
                Cho phép lớp con kế thừa lại các thuộc tính và phương thức từ lớp cha (sẽ học chi tiết ở Bài 6).
              </p>
            </div>
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="text-[10px] font-black text-stone-500 uppercase block mb-1">3. Abstraction (Trừu tượng)</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">
                Tập trung vào các hành vi cốt lõi của đối tượng, che giấu đi sự phức tạp trong quá trình triển khai chi tiết.
              </p>
            </div>
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="text-[10px] font-black text-stone-500 uppercase block mb-1">4. Polymorphism (Đa hình)</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">
                Một hành vi có thể thể hiện dưới nhiều dạng khác nhau tùy thuộc vào đối tượng cụ thể đang thực thi hành vi đó.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "access",
      label: "Mức Truy Cập",
      icon: <Key size={14} />,
      title: "4 Mức truy cập (Access Modifiers)",
      content: (
        <div className="space-y-3.5">
          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            Tóm tắt phạm vi truy cập từ hẹp đến rộng:
          </p>
          <div className="overflow-x-auto border border-stone-200 rounded-xl">
            <table className="w-full text-[10px] text-left text-stone-600 font-sans border-collapse">
              <thead>
                <tr className="bg-stone-100 border-b border-stone-200">
                  <th className="p-2.5 font-black uppercase text-stone-500">Mức</th>
                  <th className="p-2.5 font-black uppercase text-stone-500">Ký hiệu UML</th>
                  <th className="p-2.5 font-black uppercase text-stone-500">Trong cùng Class</th>
                  <th className="p-2.5 font-black uppercase text-stone-500">Cùng Package</th>
                  <th className="p-2.5 font-black uppercase text-stone-500">Khác Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150">
                <tr>
                  <td className="p-2.5 font-bold text-rose-700">private</td>
                  <td className="p-2.5 font-mono font-bold">-</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-rose-500">Không</td>
                  <td className="p-2.5 text-rose-500">Không</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-stone-700">default</td>
                  <td className="p-2.5 font-mono text-stone-400">(Trống)</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-rose-500">Không</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-amber-700">protected</td>
                  <td className="p-2.5 font-mono font-bold">#</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-emerald-500 font-medium">Chỉ Lớp Con</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-emerald-700">public</td>
                  <td className="p-2.5 font-mono font-bold">+</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Có</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "this",
      label: "this & static",
      icon: <Hash size={14} />,
      title: "Từ khóa this và ngữ cảnh static",
      content: (
        <div className="space-y-3 font-medium text-xs text-stone-650 leading-relaxed">
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <strong>this:</strong> Tham chiếu ẩn trỏ tới đối tượng hiện hành. Bắt buộc dùng khi tham số trùng tên thuộc tính (shadowing) để tránh lỗi gán nhầm.
            </li>
            <li>
              <strong>this(...) trong Constructor:</strong> Dùng để gọi chéo giữa các constructor nạp chồng (overloaded). Bắt buộc phải là <strong>lệnh đầu tiên</strong> trong constructor.
            </li>
            <li>
              <strong>Cấm dùng this trong static context:</strong> Do phương thức <code>static</code> thuộc về Lớp (Class member) chứ không thuộc về bất kỳ đối tượng cụ thể nào, nên từ khóa <code>this</code> không tồn tại và không được phép sử dụng tại đây (gây lỗi biên dịch).
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "equality",
      label: "== vs equals()",
      icon: <Code size={14} />,
      title: "So sánh == vs equals() & toString()",
      content: (
        <div className="space-y-3 text-xs text-stone-650 leading-relaxed font-medium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="font-mono text-xs font-black text-amber-700 block mb-1">Toán tử ==</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">
                Chỉ thực hiện so sánh địa chỉ ô nhớ tham chiếu (Stack). Hai đối tượng độc lập có dữ liệu thuộc tính giống hệt nhau ở hai vùng nhớ khác nhau vẫn trả về kết quả <code>false</code>.
              </p>
            </div>
            <div className="border border-stone-200 p-3 rounded-xl bg-stone-50">
              <span className="font-mono text-xs font-black text-blue-700 block mb-1">Hàm equals(Object obj)</span>
              <p className="text-[10px] text-stone-550 leading-relaxed">
                Được thừa kế từ lớp cha tối cao <code>Object</code>. Khi ghi đè (overridden) đúng cách, hàm này sẽ so sánh trực tiếp các giá trị dữ liệu thuộc tính thực tế bên trong Heap.
              </p>
            </div>
          </div>
          <div className="mt-2.5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-[10px] text-stone-500 leading-relaxed">
            💡 <strong>toString() mặc định:</strong> Nếu không được ghi đè, hàm <code>toString()</code> sẽ in ra định danh đối tượng (OID) dạng: <code>ClassName@HashCode</code> thay vì in ra nội dung dữ liệu.
          </div>
        </div>
      )
    },
    {
      id: "uml",
      label: "Kí hiệu UML",
      icon: <ClipboardCheck size={14} />,
      title: "Tóm tắt Quy ước ký hiệu UML",
      content: (
        <div className="space-y-3 font-medium text-xs text-stone-650 leading-relaxed">
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <strong>Ký hiệu bảo mật:</strong> <code>+</code> chỉ <code>public</code>; <code>-</code> chỉ <code>private</code>; <code>#</code> chỉ <code>protected</code>.
            </li>
            <li>
              <strong>Biểu diễn static:</strong> Bất kỳ thuộc tính hoặc phương thức nào được <strong>gạch chân (underlined)</strong> đều là Class member (static).
            </li>
            <li>
              <strong>Đường nối sơ đồ:</strong>
              <br/>• Đường nét liền thường: Thể hiện quan hệ <code>instance-of</code> giữa Object và Class.
              <br/>• Mũi tên nét đứt (<code>---&gt;</code>): Thể hiện quan hệ phụ thuộc (Dependency Relationship) giữa Client Class và Service Class.
            </li>
          </ul>
        </div>
      )
    }
  ];

  const activeTabObj = tabs.find((t) => t.id === activeTab);

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none">
      
      {/* Visual Tab Row */}
      <div className="flex bg-stone-50 border border-stone-200 p-1.5 rounded-2xl gap-1 overflow-x-auto select-none mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#1e1d1a] text-amber-400 shadow-sm"
                : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Recap details panel */}
      {activeTabObj && (
        <div className="bg-stone-50/50 border border-stone-150 rounded-2xl p-5 shadow-xs animate-in fade-in duration-200">
          <h5 className="text-sm font-extrabold text-stone-900 mb-3.5 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-500" />
            <span>{activeTabObj.title}</span>
          </h5>
          <div>
            {activeTabObj.content}
          </div>
        </div>
      )}

    </div>
  );
}
