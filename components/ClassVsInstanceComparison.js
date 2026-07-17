"use client";
import React, { useState } from "react";
import { Layers, User, ToggleLeft, ToggleRight, Shield, Zap } from "lucide-react";

export default function ClassVsInstanceComparison() {
  const [activeTab, setActiveTab] = useState("attribute"); // 'attribute' or 'method'

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
            <span>⚖️ So Sánh: Class Member (Static) vs Instance Member</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Nhấp chuột để đối chiếu sự khác biệt cốt lõi giữa thành phần lớp và thành phần thực thể.
          </p>
        </div>
        
        {/* Toggle Tab Buttons */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0 self-stretch md:self-auto">
          <button
            onClick={() => setActiveTab("attribute")}
            className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "attribute"
                ? "bg-white text-amber-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Thuộc tính (Attribute)
          </button>
          <button
            onClick={() => setActiveTab("method")}
            className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "method"
                ? "bg-white text-amber-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Phương thức (Method)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* Left Card: Instance Member */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs transition-all hover:shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <User size={16} />
              </div>
              <div>
                <h5 className="text-xs font-black uppercase text-stone-400">Không dùng static</h5>
                <h4 className="text-sm font-extrabold text-stone-900">Instance Member (Thành phần thực thể)</h4>
              </div>
            </div>

            {activeTab === "attribute" ? (
              <div className="space-y-3">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Là thuộc tính thuộc về <strong>riêng từng đối tượng cụ thể</strong>. Mỗi khi sử dụng từ khóa <code className="bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">new</code> để tạo đối tượng, một ô nhớ riêng biệt sẽ được cấp phát trong RAM.
                </p>
                <div className="bg-blue-50/20 border border-blue-100 rounded-xl p-3 text-xs leading-relaxed text-blue-900">
                  <strong>💡 Ví dụ:</strong> Mỗi quả bóng <code>MyBall</code> có màu sắc (<code>colour</code>) và bán kính (<code>radius</code>) riêng của nó. Bóng A màu đỏ không ảnh hưởng bóng B màu xanh.
                </div>
                <pre className="bg-[#151413] text-stone-300 font-mono text-[11px] p-3 rounded-xl overflow-x-auto">
                  <span className="text-stone-500">// Khai báo trong lớp MyBall</span>{"\n"}
                  <span className="text-amber-500">private String</span> colour;{"\n"}
                  <span className="text-amber-500">private double</span> radius;
                </pre>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Là hành động được thực hiện bởi <strong>đối tượng cụ thể</strong>. Phương thức này có quyền truy cập trực tiếp vào cả thuộc tính instance và thuộc tính static.
                </p>
                <div className="bg-blue-50/20 border border-blue-100 rounded-xl p-3 text-xs leading-relaxed text-blue-900">
                  <strong>💡 Cách gọi:</strong> Bắt buộc phải gọi qua tên của đối tượng đã được khởi tạo.
                </div>
                <pre className="bg-[#151413] text-stone-300 font-mono text-[11px] p-3 rounded-xl overflow-x-auto">
                  MyBall ball = <span className="text-amber-500">new</span> MyBall();{"\n"}
                  String c = ball.<span className="text-sky-400 font-bold">getColour</span>(); <span className="text-stone-500">// ĐÚNG</span>{"\n"}
                  String err = MyBall.getColour(); <span className="text-rose-400">// LỖI BIÊN DỊCH</span>
                </pre>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-150 text-[10px] text-stone-500 flex items-center gap-1">
            <Zap size={12} className="text-blue-500" />
            <span>Mỗi đối tượng có một bản sao ô nhớ độc lập.</span>
          </div>
        </div>

        {/* Right Card: Class Member (Static) */}
        <div className="bg-amber-50/10 border border-amber-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs transition-all hover:shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Layers size={16} />
              </div>
              <div>
                <h5 className="text-xs font-black uppercase text-stone-400">Có từ khóa static</h5>
                <h4 className="text-sm font-extrabold text-stone-900">Class Member (Thành phần lớp)</h4>
              </div>
            </div>

            {activeTab === "attribute" ? (
              <div className="space-y-3">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Là thuộc tính thuộc về <strong>toàn bộ lớp</strong>. Tất cả các đối tượng được sinh ra từ lớp này đều <strong>dùng chung một ô nhớ duy nhất</strong>.
                </p>
                <div className="bg-amber-50/40 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-amber-900">
                  <strong>💡 Ví dụ:</strong> Thuộc tính <code>quantity</code> dùng để đếm số lượng bóng <code>MyBall</code> được sinh ra. Khi tạo thêm bóng, biến đếm chung này tăng lên.
                </div>
                <pre className="bg-[#151413] text-stone-300 font-mono text-[11px] p-3 rounded-xl overflow-x-auto">
                  <span className="text-stone-500">// Khai báo trong lớp MyBall</span>{"\n"}
                  <span className="text-amber-500">private static int</span> quantity = 0;
                </pre>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Là phương thức thuộc về toàn bộ lớp. Phương thức static <strong>chỉ được phép truy cập trực tiếp vào các thành phần static khác</strong>, không được truy cập thành phần instance.
                </p>
                <div className="bg-amber-50/40 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-amber-900">
                  <strong>💡 Cách gọi:</strong> Nên gọi trực tiếp thông qua tên lớp mà không cần khởi tạo đối tượng.
                </div>
                <pre className="bg-[#151413] text-stone-300 font-mono text-[11px] p-3 rounded-xl overflow-x-auto">
                  <span className="text-stone-500">// Gọi trực tiếp qua tên Lớp</span>{"\n"}
                  <span className="text-amber-500">int</span> q = MyBall.<span className="text-sky-400 font-bold">getQuantity</span>(); <span className="text-stone-500">// Khuyên dùng</span>{"\n"}
                  MyBall b = <span className="text-amber-500">new</span> MyBall();{"\n"}
                  <span className="text-amber-500">int</span> q2 = b.getQuantity(); <span className="text-stone-500">// Chạy được nhưng cảnh báo</span>
                </pre>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-150 text-[10px] text-stone-500 flex items-center gap-1">
            <Shield size={12} className="text-amber-600" />
            <span>Chỉ tồn tại một bản sao ô nhớ duy nhất dùng chung.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
