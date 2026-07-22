"use client";
import React from "react";
import { Globe, Users, ShieldCheck, Scale, Award } from "lucide-react";

export default function LsdGenevaAccords1954Matrix() {
  const delegations = [
    { country: "Việt Nam Dân chủ Cộng hòa", leader: "Phó Thủ tướng Phạm Văn Đồng", role: "Đoàn đại biểu đại diện dân tộc chiến thắng", status: "Trực tiếp đàm phán kiên trì" },
    { country: "Trung Quốc", leader: "Thủ tướng Chu Ân Lai (Zhou Enlai)", role: "Đoàn đại biểu phe XHCN", status: "Ủng hộ lập hòa bình Đông Dương" },
    { country: "Liên Xô", leader: "Ngoại trưởng Viacheslav Molotov", role: "Đoàn đại biểu phe XHCN (Đồng chủ tịch)", status: "Hỗ trợ pháp lý ngoại giao" },
    { country: "Pháp", leader: "Thủ tướng Mendès France / G. Bidault", role: "Đoàn đại biểu chính phủ Pháp", status: "Buộc phải ký Hiệp định rút quân" },
    { country: "Mỹ", leader: "Ngoại trưởng John Foster Dulles", role: "Đế quốc can thiệp", status: "Không ký nhưng cam kết tôn trọng" },
    { country: "Anh", leader: "Ngoại trưởng Anthony Eden", role: "Đoàn đại biểu (Đồng chủ tịch)", status: "Điều phối hội nghị" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/40 via-white to-blue-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Globe size={14} /> Thắng lợi ngoại giao lịch sử (21-7-1954)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hiệp Định Geneve 1954 Về Lập Lại Hòa Bình Ở Đông Dương
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Trải qua 75 ngày đêm đàm phán với 23 phiên họp cấp trưởng đoàn, văn bản pháp lý quốc tế đầu tiên công nhận quyền dân tộc cơ bản của 3 nước Đông Dương đã được ký kết.
        </p>
      </div>

      {/* Table Matrix of Delegations */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 shadow-md mb-8">
        <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Users size={18} className="text-amber-600" /> Ma Trận Các Đoàn Đại Biểu Tham Dự Hội Nghị Geneve
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-serif">
                <th className="p-3 border border-slate-200 dark:border-slate-700">Quốc gia / Đoàn</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Trưởng đoàn đại biểu</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">Vai trò / Lập trường</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {delegations.map((d, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-700 text-amber-900 dark:text-amber-300">
                    {d.country}
                  </td>
                  <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">
                    {d.leader}
                  </td>
                  <td className="p-3 border border-slate-200 dark:border-slate-700">
                    {d.role} ({d.status})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legal Significance Box */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-white/20 backdrop-blur-md shrink-0">
            <Award size={28} className="text-amber-300" />
          </div>
          <div>
            <h4 className="text-lg font-bold font-serif">Giá trị pháp lý quốc tế cốt lõi:</h4>
            <p className="text-xs md:text-sm text-blue-100 mt-0.5">
              Các nước cam kết tôn trọng các quyền dân tộc cơ bản: <strong>Độc lập, Chủ quyền, Thống nhất và Toàn vẹn lãnh thổ</strong> của Việt Nam, Lào và Campuchia. Chấm dứt hoàn toàn ách thống trị 80 năm của thực dân Pháp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
