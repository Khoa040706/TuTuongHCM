"use client";
import React from "react";
import { 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  HeartHandshake, 
  Key, 
  ShieldCheck, 
  Compass,
  Bookmark,
  Users,
  Award,
  Sun
} from "lucide-react";

export default function HcmUnityConditions() {
  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER CARD */}
      <div 
        style={{
          background: `linear-gradient(135deg, rgba(217, 119, 6, 0.09) 0%, rgba(202, 138, 4, 0.05) 50%, rgba(255, 255, 255, 0.98) 100%)`,
          borderColor: `rgba(217, 119, 6, 0.2)`
        }}
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 border shadow-[0_10px_30px_rgba(217,119,6,0.04)]"
      >
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Chương V — Mục I.3</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black font-playfair tracking-tight text-stone-900 leading-tight">
            3. ĐIỀU KIỆN ĐỂ XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
          </h3>

          <p className="text-xs md:text-sm font-semibold text-stone-600 max-w-3xl leading-relaxed">
            4 tiền đề cốt lõi: Lợi ích chung là điểm quy tụ &bull; Kế thừa truyền thống yêu nước &bull; Lòng khoan dung độ lượng &bull; Niềm tin vững chắc vào nhân dân.
          </p>
        </div>
      </div>

      {/* OVERVIEW 4 GOLDEN CONDITION CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            Điều kiện 1
          </span>
          <h5 className="font-bold text-xs md:text-sm text-stone-900">Lợi ích chung làm điểm quy tụ</h5>
          <p className="text-stone-600 text-[11.5px] leading-relaxed">
            Tôn trọng lợi ích khác biệt chính đáng, lấy lợi ích tối cao làm mẫu số chung.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-yellow-50/70 border border-yellow-200/80 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
            Điều kiện 2
          </span>
          <h5 className="font-bold text-xs md:text-sm text-stone-900">Kế thừa truyền thống dân tộc</h5>
          <p className="text-stone-600 text-[11.5px] leading-relaxed">
            Yêu nước, nhân nghĩa, đoàn kết ngàn năm — cội nguồn sức mạnh vô địch.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-orange-100 text-orange-800">
            Điều kiện 3
          </span>
          <h5 className="font-bold text-xs md:text-sm text-stone-900">Khoan dung, độ lượng</h5>
          <p className="text-stone-600 text-[11.5px] leading-relaxed">
            Trân trọng phần thiện nhỏ nhất, lấy tình thân ái cảm hóa người lầm đường.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            Điều kiện 4
          </span>
          <h5 className="font-bold text-xs md:text-sm text-stone-900">Niềm tin vào nhân dân</h5>
          <p className="text-stone-600 text-[11.5px] leading-relaxed">
            Yêu dân, tin dân, dựa vào dân — nước lấy dân làm gốc, chở/lật thuyền là dân.
          </p>
        </div>
      </div>

      {/* CHI TIẾT 4 ĐIỀU KIỆN (DEPTH CARDS) */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
        
        {/* ĐIỀU KIỆN 1 */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-base md:text-lg font-playfair">
            <Award className="w-5 h-5 shrink-0" />
            <h4>Một là, phải lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4">
            <p className="text-justify">
              • Phải chú trọng xử lý các mối quan hệ lợi ích rất đa dạng, phong phú trong xã hội Việt Nam.
            </p>
            <p className="text-justify italic font-semibold text-stone-900">
              - &ldquo;Chỉ có xử lý tốt quan hệ lợi ích, tìm ra điểm tương đồng, lợi ích chung thì mới đoàn kết được lực lượng.&rdquo;
            </p>
            <p className="text-justify">
              • <strong>Mục đích chung của Mặt trận</strong> được Hồ Chí Minh xác định cụ thể, phù hợp từng giai đoạn cách mạng, nhằm tập hợp tới mức cao nhất lực lượng dân tộc.
            </p>
            <p className="text-justify">
              • <strong>Đại đoàn kết phải xuất phát từ mục tiêu vì nước, vì dân</strong>, trên cơ sở <em>&ldquo;yêu nước, thương dân, chống áp bức, bất công, nghèo đói, lạc hậu.&rdquo;</em>
            </p>
            <p className="text-justify font-bold text-stone-900">
              • Người cho rằng: <em>&ldquo;Nếu nước được độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có ý nghĩa gì.&rdquo;</em>
            </p>
            <p className="text-justify">
              • <em>&ldquo;Đoàn kết phải lấy lợi ích tối cao của dân tộc, lợi ích căn bản của nhân dân lao động làm mục tiêu phấn đấu&rdquo;</em> &rarr; đây là <strong>nguyên tắc bất di bất dịch</strong>, là <strong>ngọn cờ đoàn kết</strong> và là <strong>mẫu số chung</strong> để quy tụ các tầng lớp, giai cấp, đảng phái, dân tộc, tôn giáo vào Mặt trận.
            </p>
          </div>
        </div>

        {/* ĐIỀU KIỆN 2 */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-base md:text-lg font-playfair">
            <Sun className="w-5 h-5 shrink-0" />
            <h4>Hai là, phải giữ thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4">
            <p className="text-justify">
              • Truyền thống này <strong>hình thành, củng cố và phát triển trong suốt quá trình dựng nước và giữ nước hàng ngàn năm</strong> của dân tộc.
            </p>
            <p className="text-justify">
              • Đã trở thành <strong>&ldquo;giá trị bền vững&rdquo;</strong>, thấm sâu vào tư tưởng, tình cảm, tâm hồn mỗi con người Việt Nam, được lưu truyền qua nhiều thế hệ.
            </p>
            <p className="text-justify font-bold text-stone-900">
              • Là <strong>&ldquo;cội nguồn sức mạnh vô địch&rdquo;</strong> để cả dân tộc chiến đấu và chiến thắng thiên tai, địch họa, làm cho đất nước được trường tồn, bản sắc dân tộc được giữ vững.
            </p>
          </div>
        </div>

        {/* ĐIỀU KIỆN 3 */}
        <div className="space-y-3 border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 text-orange-700 font-bold text-base md:text-lg font-playfair">
            <HeartHandshake className="w-5 h-5 shrink-0" />
            <h4>Ba là, phải có lòng khoan dung, độ lượng với con người.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4">
            <p className="text-justify">
              • Theo Hồ Chí Minh, <strong>trong mỗi cá nhân cũng như mỗi cộng đồng đều có những ưu điểm, khuyết điểm, mặt tốt, mặt xấu.</strong>
            </p>
            <p className="text-justify font-bold text-stone-900">
              • Vì lợi ích của cách mạng, cần phải <strong>&ldquo;có lòng khoan dung độ lượng, trân trọng phần thiện dù nhỏ nhất ở mỗi người&rdquo;</strong> &rarr; mới tập hợp, quy tụ rộng rãi mọi lực lượng.
            </p>
            <p className="text-justify">• Người dùng hình ảnh dân dã:</p>

            {/* Diamond Quote Năm ngón tay ngắn dài */}
            <div className="relative rounded-2xl p-5 md:p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/25 shadow-sm overflow-hidden my-3">
              <Quote className="absolute top-2 left-2 w-10 h-10 text-amber-800 opacity-10 pointer-events-none z-0" />
              <p className="relative z-10 pl-4 text-stone-900 font-bold italic text-sm md:text-base leading-relaxed text-justify">
                &ldquo;Năm ngón tay cùng có ngón ngắn ngón dài. Nhưng ngắn dài đều họp nhau lại nơi bàn tay... Ta phải khoan hồng đại độ. Ta phải nhận rằng đã là con Lạc cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc. Đối với những đồng bào lạc lối lầm đường, ta phải lấy tình thân ái mà cảm hóa họ. Có như thế mới thành đại đoàn kết, có đại đoàn kết thì tương lai chắc chắn sẽ vàng.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ĐIỀU KIỆN 4 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-base md:text-lg font-playfair">
            <Users className="w-5 h-5 shrink-0" />
            <h4>Bốn là, phải có niềm tin vào nhân dân.</h4>
          </div>

          <div className="space-y-2.5 text-stone-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4">
            <p className="text-justify font-bold text-stone-900">
              • Với Hồ Chí Minh: <em>&ldquo;Yêu dân, tin dân, dựa vào dân, sống, phấn đấu vì hạnh phúc của nhân dân&rdquo;</em> là <strong>nguyên tắc tối cao trong cuộc sống.</strong>
            </p>
            
            <div className="space-y-2 text-justify">
              <p>• Nguyên tắc này:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Vừa là sự tiếp nối truyền thống dân tộc: <strong>&ldquo;Nước lấy dân làm gốc&rdquo;</strong>, <strong>&ldquo;Chở thuyền và lật thuyền cũng là dân.&rdquo;</strong>
                </li>
                <li>
                  Vừa là sự quán triệt sâu sắc nguyên lý mácxít: <strong>&ldquo;Cách mạng là sự nghiệp của quần chúng.&rdquo;</strong>
                </li>
              </ul>
            </div>

            <p className="text-justify font-bold text-stone-900">
              • <strong>Dân là chủ thể vững chắc, đồng thời là nguồn sức mạnh vô địch của khối đại đoàn kết toàn dân tộc, quyết định thắng lợi của cách mạng.</strong>
            </p>
            <p className="text-justify">
              • Muốn thực hiện đại đoàn kết toàn dân, <strong>&ldquo;phải có niềm tin vào nhân dân.&rdquo;</strong>
            </p>
          </div>
        </div>

      </div>

      {/* KHUNG GHI NHỚ & TỪ KHÓA ÔN THI MỤC I.3 (LUÔN MỞ) */}
      <div className="bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-emerald-500/10 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
        
        <div className="flex items-center gap-2.5 text-amber-900 border-b border-amber-500/20 pb-3">
          <Bookmark className="w-5 h-5 text-amber-700" />
          <h5 className="font-black text-sm md:text-base uppercase tracking-wider">
            📌 GHI NHỚ TRỌNG TÂM MỤC I.3 (ÔN THI)
          </h5>
        </div>

        <ul className="space-y-3 text-stone-850 font-bold text-xs md:text-sm leading-relaxed text-justify">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>4 điều kiện: <strong>(1) Lợi ích chung là điểm quy tụ, (2) Kế thừa truyền thống yêu nước - nhân nghĩa - đoàn kết, (3) Lòng khoan dung độ lượng, (4) Niềm tin vào nhân dân.</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Câu nói kinh điển: <strong>&ldquo;Nước lấy dân làm gốc&rdquo;, &ldquo;Chở thuyền và lật thuyền cũng là dân.&rdquo;</strong></span>
          </li>
        </ul>

        <div className="pt-2 border-t border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <Key className="w-4 h-4 text-amber-700" />
            <span>🎯 TỪ KHÓA ÔN THI MỤC I.3:</span>
          </div>
          <p className="text-stone-800 text-xs md:text-sm font-semibold leading-relaxed text-justify italic">
            Lợi ích chung - Lợi ích riêng; ngọn cờ đoàn kết; mẫu số chung; truyền thống yêu nước - nhân nghĩa; khoan dung độ lượng; &ldquo;con Lạc cháu Hồng&rdquo;; niềm tin vào nhân dân; &ldquo;nước lấy dân làm gốc&rdquo;.
          </p>
        </div>

      </div>

    </div>
  );
}
