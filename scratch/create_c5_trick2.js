const fs = require('fs');

const blacklist = JSON.parse(fs.readFileSync('./scratch/q40_excluded_c5.json', 'utf8'));
const blacklistedQuestions = blacklist.map(b => b.question.trim().toLowerCase());

function checkOptionLengths(questions) {
  let maxDiff = 0;
  const violations = [];
  questions.forEach((q, i) => {
    const lengths = q.options.map(opt => opt.length);
    const minL = Math.min(...lengths);
    const maxL = Math.max(...lengths);
    const diff = maxL - minL;
    if (diff > maxDiff) maxDiff = diff;
    if (diff > 15) {
      violations.push({ index: i + 1, id: q.id, diff, lengths, options: q.options });
    }
  });
  return { maxDiff, violations };
}

function checkBlacklistOverlap(questions) {
  const overlaps = [];
  questions.forEach((q, i) => {
    const qText = q.question.trim().toLowerCase();
    blacklistedQuestions.forEach(bText => {
      if (qText === bText || (qText.length > 20 && bText.includes(qText))) {
        overlaps.push({ index: i + 1, id: q.id, question: q.question, match: bText });
      }
    });
  });
  return overlaps;
}

const trickSet2 = [
  // --- MỤC I. VAI TRÒ & TÍNH TẤT YẾU CỦA ĐOÀN KẾT QUỐC TẾ (12 CÂU) ---
  {
    id: "hcm-c5-tr2-001",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Khẳng định nào dưới đây phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về vai trò của Đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
    options: [
      "Là phương tiện ngoại giao tình thế ngắn hạn.",
      "Là nhân tố quyết định trực tiếp duy nhất thắng lợi.",
      "Là điều kiện quan trọng để kết hợp sức mạnh thời đại.",
      "Là chính sách phụ thuộc vào viện trợ tư bản."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đoàn kết quốc tế có vai trò vô cùng quan trọng: Giúp kết hợp sức mạnh dân tộc với sức mạnh thời đại để tạo nên sức mạnh tổng hợp cho cách mạng.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (nhân tố quyết định duy nhất) hoặc D (phụ thuộc tư bản).",
      trickWord: "Bẫy vai trò 'điều kiện quan trọng để kết hợp sức mạnh thời đại'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Đoàn kết quốc tế = Kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    }
  },
  {
    id: "hcm-c5-tr2-002",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Nhận định nào dưới đây KHÔNG ĐÚNG khi giải thích tính tất yếu của Đoàn kết quốc tế?",
    options: [
      "Cách mạng Việt Nam là bộ phận cách mạng thế giới.",
      "Thắng lợi cách mạng cần có sự ủng hộ quốc tế.",
      "Việt Nam có thể cô lập phát triển không cần ai.",
      "Đô hộ chủ nghĩa đế quốc có tính chất quốc tế."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh chỉ rõ chủ nghĩa đế quốc là một lực lượng quốc tế, cách mạng không thể đơn độc mở đường mà phải thực hiện đoàn kết quốc tế, tuyệt đối không 'cô lập phát triển'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là nhận định bi quan bế quan sai lầm.",
      trickWord: "Bẫy phủ định 'Việt Nam có thể cô lập phát triển không cần ai'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Chủ nghĩa đế quốc mang tính quốc tế -> Cách mạng phải đoàn kết quốc tế."
    }
  },
  {
    id: "hcm-c5-tr2-003",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào nhận định của Bác: 'Cách mạng An Nam là một bộ phận của [...]; Ai làm cách mạng trong thế giới đều là đồng chí'?",
    options: [
      "bộ phận của cách mạng thế giới",
      "bộ phận của phong trào khu vực",
      "bộ phận của chính quyền các nước",
      "bộ phận của Liên Hợp Quốc"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Trong Tác phẩm Đường Kách mệnh (1927), Bác xác định: Cách mạng Việt Nam là một bộ phận của cách mạng thế giới.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm cách mạng khu vực hay Liên Hợp Quốc.",
      trickWord: "Bẫy trích dẫn 'bộ phận của cách mạng thế giới'",
      citation: "Tác phẩm Đường Kách mệnh (1927) — Nguyễn Ái Quốc.",
      tip: "Ghi nhớ Đường Kách mệnh 1927: Cách mạng Việt Nam = Bộ phận cách mạng thế giới."
    }
  },
  {
    id: "hcm-c5-tr2-004",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Khái niệm 'Sức mạnh thời đại' trong tư tưởng Hồ Chí Minh bao hàm yếu tố cốt lõi nào?",
    options: [
      "Sức mạnh của phong trào cách mạng và tiến bộ thế giới.",
      "Sức mạnh quân sự của các nước tư bản phát triển.",
      "Sức mạnh của các tập đoàn tài chính đa quốc gia.",
      "Sức mạnh của thị trường hàng hóa tự do quốc tế."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Sức mạnh thời đại là sự tổng hợp sức mạnh của các dòng thác cách mạng thế giới: phong trào công nhân, phong trào giải phóng dân tộc và phong trào hòa bình dân chủ.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm với sức mạnh tư bản hay thị trường tự do.",
      trickWord: "Bẫy định nghĩa 'Sức mạnh của phong trào cách mạng thế giới'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Sức mạnh thời đại = Ba dòng thác cách mạng thế giới."
    }
  },
  {
    id: "hcm-c5-tr2-005",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT mối quan hệ giữa Sức mạnh dân tộc và Sức mạnh thời đại?",
    options: [
      "Sức mạnh dân tộc là gốc, quyết định việc tranh thủ.",
      "Sức mạnh thời đại thay thế hoàn toàn sức mạnh dân tộc.",
      "Sức mạnh dân tộc phụ thuộc hoàn toàn sức mạnh thời đại.",
      "Hai sức mạnh này tách rời hoàn toàn không liên quan."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh chỉ rõ nội lực (sức mạnh dân tộc) là quyết định nhất, ngoại lực (sức mạnh thời đại) chỉ phát huy tác dụng thông qua sức mạnh nội lực.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (thay thế) hay C (phụ thuộc hoàn toàn).",
      trickWord: "Bẫy mối quan hệ 'Sức mạnh dân tộc là gốc, quyết định'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Nội lực dân tộc = Gốc quyết định tranh thủ ngoại lực."
    }
  },
  {
    id: "hcm-c5-tr2-006",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG về mục đích đoàn kết quốc tế của Đảng ta theo Hồ Chí Minh?",
    options: [
      "Nhằm tạo môi trường quốc tế thuận lợi cho cách mạng.",
      "Nhằm tranh thủ sự ủng hộ rộng rãi của nhân dân thế giới.",
      "Nhằm can thiệp xâm lược lãnh thổ các quốc gia khác.",
      "Nhằm góp phần vào sự nghiệp hòa bình thế giới."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Việt Nam đoàn kết quốc tế vì hòa bình, độc lập và tiến bộ xã hội, kiên quyết chống lại tư tưởng 'xâm lược hay can thiệp nước khác'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là nhận định can thiệp xâm lược sai trái.",
      trickWord: "Bẫy phủ định 'Nhằm can thiệp xâm lược lãnh thổ các quốc gia khác'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Đoàn kết quốc tế = Vì hòa bình & Độc lập dân tộc."
    }
  },
  {
    id: "hcm-c5-tr2-007",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào khẩu hiệu đoàn kết của Nguyễn Ái Quốc: 'Lao động tất cả các nước [...]'?",
    options: [
      "đoàn kết lại",
      "đều là bạn bè",
      "hãy đấu tranh",
      "đều thành công"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Khẩu hiệu vô sản nổi tiếng được Nguyễn Ái Quốc giương cao từ những năm 1920: 'Lao động tất cả các nước đoàn kết lại!'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các cụm từ đồng nghĩa.",
      trickWord: "Bẫy trích dẫn cụm từ 'đoàn kết lại'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ khẩu hiệu vô sản: 'Lao động tất cả các nước ĐOÀN KẾT LẠI'."
    }
  },
  {
    id: "hcm-c5-tr2-008",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Luận điểm 'Cách mạng ở thuộc địa có thể giành thắng lợi trước cách mạng ở chính quốc' của Nguyễn Ái Quốc thể hiện điều gì?",
    options: [
      "Sự phát triển sáng tạo lý luận Mác-Lênin.",
      "Sự phủ nhận hoàn toàn vai trò giai cấp công nhân.",
      "Sự phụ thuộc vào quyết định của Quốc tế Cộng sản.",
      "Sự tách rời cách mạng thuộc địa với thế giới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đây là đóng góp lý luận xuất sắc của Nguyễn Ái Quốc vào kho tàng chủ nghĩa Mác-Lênin, khẳng định tính chủ động của cách mạng thuộc địa.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (phủ nhận công nhân) hay C (phụ thuộc).",
      trickWord: "Bẫy ý nghĩa 'Sự phát triển sáng tạo lý luận Mác-Lênin'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ luận điểm 1924: Thuộc địa có thể bứt phá thắng lợi trước chính quốc."
    }
  },
  {
    id: "hcm-c5-tr2-009",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về vai trò của Tinh thần Yêu nước trong gắn kết với Tinh thần Quốc tế?",
    options: [
      "Chủ nghĩa yêu nước chân chính thống nhất với quốc tế.",
      "Chủ nghĩa yêu nước đối lập với chủ nghĩa quốc tế.",
      "Chủ nghĩa quốc tế triệt tiêu chủ nghĩa yêu nước.",
      "Yêu nước chân chính là chủ nghĩa dân tộc vị kỷ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh khẳng định: Chủ nghĩa yêu nước chân chính hoàn toàn thống nhất với Chủ nghĩa quốc tế vô sản chân chính, kiên quyết chống chủ nghĩa vị kỷ.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (đối lập) hoặc D (vị kỷ).",
      trickWord: "Bẫy mối quan hệ 'yêu nước chân chính thống nhất với quốc tế'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Yêu nước chân chính = Thống nhất với Tinh thần Quốc tế."
    }
  },
  {
    id: "hcm-c5-tr2-010",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG khi nói về thái độ của Hồ Chí Minh đối với nhân dân tiến bộ ở các nước đi xâm lược (Pháp, Mỹ)?",
    options: [
      "Phân biệt rõ nhân dân tiến bộ và bọn phản động.",
      "Đoàn kết thân ái với nhân dân tiến bộ các nước.",
      "Coi toàn bộ nhân dân nước đi xâm lược là kẻ thù.",
      "Tranh thủ sự ủng hộ của phong trào chống chiến tranh."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh luôn phân biệt rạch ròi giữa nhân dân lao động Pháp, Mỹ yêu chuộng hòa bình với bọn đế quốc hiếu chiến, tuyệt đối không 'coi toàn bộ nhân dân họ là kẻ thù'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là nhận định vơ đũa cả nắm sai lầm.",
      trickWord: "Bẫy phủ định 'Coi toàn bộ nhân dân nước đi xâm lược là kẻ thù'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Phân biệt rõ Nhân dân tiến bộ (Bạn) vs Bọn xâm lược (Thù)."
    }
  },
  {
    id: "hcm-c5-tr2-011",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào khẳng định của Bác: 'Trúp-măng hay Ách-sơn không phải là nhân dân Mỹ. Nhân dân Mỹ [...]'?",
    options: [
      "nhân dân Mỹ là bạn của nhân dân ta",
      "nhân dân Mỹ là kẻ thù của nhân dân ta",
      "nhân dân Mỹ đứng ngoài cuộc chiến tranh",
      "nhân dân Mỹ không quan tâm thời sự"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Bác Hồ khẳng định tinh thần phân biệt đối ngoại sâu sắc: Giới cầm quyền hiếu chiến Mỹ không đại diện cho Nhân dân Mỹ; Nhân dân Mỹ yêu hòa bình là bạn của ta.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm kẻ thù hay không quan tâm.",
      trickWord: "Bẫy trích dẫn 'nhân dân Mỹ là bạn của nhân dân ta'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ: Bọn hiếu chiến = Thù. Nhân dân Mỹ tiến bộ = Bạn."
    }
  },
  {
    id: "hcm-c5-tr2-012",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "vai-tro-doan-ket-qt-sub",
    question: "Sự kiện Nguyễn Ái Quốc tham gia sáng lập Hội Liên hiệp các dân tộc thuộc địa tại Pari diễn ra vào năm nào?",
    options: [
      "Năm 1919.",
      "Năm 1921.",
      "Năm 1925.",
      "Năm 1930."
    ],
    answer: 1,
    difficulty: "hard",
    isTrick: true,
    explanation: "Năm 1921, Nguyễn Ái Quốc cùng một số nhà cách mạng các nước thuộc địa thành lập Hội Liên hiệp các dân tộc thuộc địa tại Pari để đoàn kết đấu tranh.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm với năm 1919 (gửi Yêu cầu) hay 1925 (Thanh niên).",
      trickWord: "Bẫy mốc lịch sử 'Năm 1921'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.1.",
      tip: "Ghi nhớ mốc 1921 = Thành lập Hội Liên hiệp các dân tộc thuộc địa."
    }
  },

  // --- MỤC II. LỰC LƯỢNG ĐOÀN KẾT QUỐC TẾ & TẦNG NẤC NGOẠI GIAO (13 CÂU) ---
  {
    id: "hcm-c5-tr2-013",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Khẳng định nào dưới đây phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về 3 lực lượng cốt lõi của Lực lượng đoàn kết quốc tế?",
    options: [
      "Phong trào CS, Phong trào GPDT, Phong trào Hòa bình.",
      "Các quốc gia tư bản, Các tổ chức tài chính, Các công ty.",
      "Quân đội đồng minh, Các tôn giáo, Các nhà đầu tư.",
      "Cơ quan Liên Hợp Quốc, Các tổ chức phi chính phủ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "3 lực lượng đoàn kết quốc tế gồm: Phong trào cộng sản và công nhân quốc tế; Phong trào giải phóng dân tộc; Phong trào hòa bình, dân chủ và tiến bộ thế giới.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các tập hợp tổ chức kinh tế hay tư bản.",
      trickWord: "Bẫy bộ 3 lực lượng 'Phong trào CS, Phong trào GPDT, Phong trào Hòa bình'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ 3 lực lượng quốc tế: Phong trào Cộng sản + GPDT + Hòa bình."
    }
  },
  {
    id: "hcm-c5-tr2-014",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Nhận định nào dưới đây KHÔNG ĐÚNG khi nói về Liên minh đoàn kết 3 nước Đông Dương (Việt Nam - Lào - Campuchia)?",
    options: [
      "Dựa trên cơ sở cùng chung kẻ thù xâm lược.",
      "Dựa trên nguyên tắc bình đẳng tôn trọng nhau.",
      "Việt Nam có quyền áp đặt quyết định lên hai nước.",
      "Giúp đỡ lẫn nhau để cùng giành độc lập."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh tôn trọng tuyệt đối độc lập của Lào và Campuchia trên tinh thần 'giúp bạn là tự giúp mình', kiên quyết không 'áp đặt quyết định'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là nhận định áp đặt sai trái.",
      trickWord: "Bẫy phủ định 'Việt Nam có quyền áp đặt quyết định lên hai nước'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ liên minh Đông Dương: Bình đẳng tôn trọng (Giúp bạn = Tự giúp mình)."
    }
  },
  {
    id: "hcm-c5-tr2-015",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào chỉ thị của Bác đối với bộ đội Việt Nam làm nhiệm vụ quốc tế tại Lào và Campuchia: '[...] là tự giúp mình'?",
    options: [
      "Giúp bạn",
      "Giúp dân",
      "Giúp quân",
      "Giúp nước"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Lời dạy bất hủ của Bác Hồ cho bộ đội tình nguyện làm nhiệm vụ quốc tế: 'Giúp bạn là tự giúp mình'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các từ giúp dân hay giúp nước.",
      trickWord: "Bẫy trích dẫn cụm từ 'Giúp bạn'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ lời dạy bộ đội tình nguyện: 'GIÚP BẠN là tự giúp mình'."
    }
  },
  {
    id: "hcm-c5-tr2-016",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Đối với phong trào giải phóng dân tộc ở Á - Phi - Mỹ La-tinh, Hồ Chí Minh chủ trương đoàn kết trên cơ sở nào?",
    options: [
      "Cùng chung số phận bị áp bức và mục tiêu độc lập.",
      "Cùng chung mức thu nhập phát triển kinh tế.",
      "Cùng chung ngôn ngữ và bản sắc văn hóa.",
      "Cùng chung vị trí địa lý cùng một châu lục."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đoàn kết với nhân dân Á - Phi - Mỹ La-tinh dựa trên cơ sở cùng chung nỗi đau bị chủ nghĩa thực dân bóc lột và cùng nguyện vọng giải phóng dân tộc.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm sang các yếu tố địa lý hay thu nhập.",
      trickWord: "Bẫy cơ sở đoàn kết 'Cùng chung số phận bị áp bức và mục tiêu độc lập'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ đoàn kết Á-Phi-Mỹ La-tinh = Cùng cảnh nghèo bị bóc lột & Cùng đánh thực dân."
    }
  },
  {
    id: "hcm-c5-tr2-017",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT thái độ của Hồ Chí Minh đối với các lực lượng yêu chuộng hòa bình thế giới?",
    options: [
      "Mở rộng mặt trận nhân dân thế giới chống chiến tranh.",
      "Chỉ tranh thủ các nước trong phe xã hội chủ nghĩa.",
      "Không cần liên kết với các phong trào hòa bình.",
      "Coi các phong trào hòa bình là lực lượng ảo."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh chủ trương xây dựng Mặt trận nhân dân thế giới rộng rãi đoàn kết với tất cả các lực lượng yêu chuộng hòa bình, công lý trên toàn cầu.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (chỉ tranh thủ phe XHCN) hoặc C/D (không liên kết).",
      trickWord: "Bẫy thái độ 'Mở rộng mặt trận nhân dân thế giới chống chiến tranh'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ: Xây dựng Mặt trận nhân dân thế giới chống chiến tranh xâm lược."
    }
  },
  {
    id: "hcm-c5-tr2-018",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG về chính sách đoàn kết với các nước Xã hội chủ nghĩa anh em theo Bác Hồ?",
    options: [
      "Đoàn kết trên nền tảng chủ nghĩa Mác-Lênin.",
      "Đoàn kết trên tinh thần quốc tế vô sản.",
      "Can thiệp vào công việc nội bộ của các nước.",
      "Tôn trọng độc lập chủ quyền của mỗi nước."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đoàn kết giữa các nước XHCN dựa trên nguyên tắc bình đẳng, tôn trọng độc lập chủ quyền của nhau, kiên quyết chống 'can thiệp công việc nội bộ'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là hành vi can thiệp sai trái.",
      trickWord: "Bẫy phủ định 'Can thiệp vào công việc nội bộ của các nước'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ: Đoàn kết phe XHCN = Bình đẳng + Tôn trọng độc lập nội bộ."
    }
  },
  {
    id: "hcm-c5-tr2-019",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào nhận định của Bác: 'Quan hệ giữa ba nước Việt Nam - Lào - Campuchia là quan hệ [...]'?",
    options: [
      "quan hệ môi hở răng lạnh, giúp đỡ lẫn nhau",
      "quan hệ phụ thuộc cấp trên cấp dưới",
      "quan hệ cạnh tranh kinh tế khu vực",
      "quan hệ tạm thời trong giai đoạn chiến đấu"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh miêu tả mối quan hệ đoàn kết chiến đấu 3 nước Đông Dương như 'môi hở răng lạnh', hoạn nạn có nhau.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các từ cấp trên cấp dưới hay cạnh tranh.",
      trickWord: "Bẫy trích dẫn 'môi hở răng lạnh, giúp đỡ lẫn nhau'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ quan hệ 3 nước Đông Dương = Môi hở răng lạnh."
    }
  },
  {
    id: "hcm-c5-tr2-020",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Mặt trận Nhân dân thế giới đoàn kết với Việt Nam chống Mỹ được thành lập rộng rãi trên thực tế đạt đỉnh cao vào thập niên nào?",
    options: [
      "Thập niên 1940.",
      "Thập niên 1950.",
      "Thập niên 1960 - 1970.",
      "Thập niên 1990."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Trong thập niên 1960 - 1970, phong trào Nhân dân thế giới ủng hộ Việt Nam kháng chiến chống Mỹ cứu nước phát triển mạnh mẽ chưa từng có.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm mốc thập niên 1940 hay 1950.",
      trickWord: "Bẫy mốc thời gian 'Thập niên 1960 - 1970'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ đỉnh cao Mặt trận nhân dân thế giới ủng hộ VN = Thập niên 1960-1970."
    }
  },
  {
    id: "hcm-c5-tr2-021",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về vai trò của Liên Xô và Trung Quốc đối với cách mạng Việt Nam theo Bác?",
    options: [
      "Là những người bạn chỗ dựa tin cậy lớn.",
      "Là những nước lãnh đạo bắt Việt Nam tuân lệnh.",
      "Là các quốc gia không có đóng góp gì.",
      "Là các đối thủ cạnh tranh ảnh hưởng."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh luôn đánh giá cao và biết ơn sự giúp đỡ to lớn của Liên Xô, Trung Quốc và các nước XHCN anh em như những chỗ dựa tin cậy.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (bắt tuân lệnh) hoặc C/D (không đóng góp/cạnh tranh).",
      trickWord: "Bẫy đánh giá 'Là những người bạn chỗ dựa tin cậy lớn'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ: Liên Xô, Trung Quốc = Chỗ dựa anh em tin cậy to lớn."
    }
  },
  {
    id: "hcm-c5-tr2-022",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG về tinh thần 'Đoàn kết quốc tế vô sản' trong tư tưởng Hồ Chí Minh?",
    options: [
      "Tôn trọng tính độc lập tự chủ của mỗi Đảng.",
      "Không can thiệp áp đặt mô hình cho nhau.",
      "Đảng lớn có quyền ra lệnh cho Đảng nhỏ.",
      "Đoàn kết trên cơ sở chủ nghĩa Mác-Lênin."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh khẳng định tất cả các Đảng Cộng sản đều bình đẳng, không có chuyện 'Đảng lớn có quyền ra lệnh cho Đảng nhỏ'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là tư tưởng cửa trên sai trái.",
      trickWord: "Bẫy phủ định 'Đảng lớn có quyền ra lệnh cho Đảng nhỏ'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ: Các Đảng Cộng sản bình đẳng (KHÔNG có Đảng cửa trên)."
    }
  },
  {
    id: "hcm-c5-tr2-023",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào di huấn của Bác trong Di chúc (1969) về phong trào cộng sản thế giới: 'Tôi mong rằng Đảng ta sẽ hết sức làm việc để phục hồi [...]'?",
    options: [
      "phục hồi sự đoàn kết giữa các Đảng anh em",
      "phục hồi nền kinh tế các nước bị tàn phá",
      "phục hồi các hiệp định hòa bình đã ký",
      "phục hồi các cơ quan Quốc tế Cộng sản"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Trong Di chúc (1969), Bác Hồ đau lòng trước sự bất hòa trong phe XHCN và di dặn Đảng ta phải hết sức làm việc để hàn gắn, phục hồi sự đoàn kết giữa các Đảng anh em.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm phục hồi kinh tế hay Quốc tế Cộng sản.",
      trickWord: "Bẫy trích dẫn 'phục hồi sự đoàn kết giữa các Đảng anh em'",
      citation: "Di chúc (1969) — Chủ tịch Hồ Chí Minh.",
      tip: "Ghi nhớ Di chúc 1969: Phục hồi sự đoàn kết giữa các Đảng anh em."
    }
  },
  {
    id: "hcm-c5-tr2-024",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "luc-luong-doan-ket-qt-sub",
    question: "Chính sách đối ngoại hòa bình, làm bạn với tất cả các nước thể hiện bản chất gì của Ngoại giao Hồ Chí Minh?",
    options: [
      "Bản chất nhân văn và yêu chuộng hòa bình.",
      "Bản chất cơ hội và thay đổi thất thường.",
      "Bản chất khuất phục перед các cường quốc.",
      "Bản chất đóng cửa không giao lưu quốc tế."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chính sách 'Làm bạn với tất cả các nước' thể hiện bản chất nhân văn, yêu chuộng hòa bình, tinh thần rộng mở của Ngoại giao Hồ Chí Minh.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (cơ hội) hoặc C (khuất phục).",
      trickWord: "Bẫy bản chất 'Bản chất nhân văn và yêu chuộng hòa bình'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.2.",
      tip: "Ghi nhớ Ngoại giao Bác Hồ = Nhân văn + Yêu chuộng hòa bình."
    }
  },

  // --- MỤC III. CÁC NGỌN CỜ & NGUYÊN TẮC ĐOÀN KẾT QUỐC TẾ (15 CÂU) ---
  {
    id: "hcm-c5-tr2-025",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Khẳng định nào dưới đây phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về Ngọn cờ đoàn kết đối với phong trào giải phóng dân tộc?",
    options: [
      "Ngọn cờ Độc lập, tự do và bình đẳng dân tộc.",
      "Ngọn cờ Chủ nghĩa quốc tế vô sản thuần túy.",
      "Ngọn cờ Cải cách kinh tế thị trường tự do.",
      "Ngọn cờ Tôn giáo đoàn kết hòa hợp thế giới."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đối với các dân tộc bị áp bức và phong trào giải phóng dân tộc, Hồ Chí Minh giương cao Ngọn cờ Độc lập, tự do và Quyền bình đẳng giữa các dân tộc.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm với ngọn cờ phong trào công nhân (Độc lập dân tộc gắn liền CNXH).",
      trickWord: "Bẫy ngọn cờ 'Độc lập, tự do và bình đẳng dân tộc'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ ngọn cờ GPDT = Độc lập, Tự do & Bình đẳng giữa các dân tộc."
    }
  },
  {
    id: "hcm-c5-tr2-026",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Nhận định nào dưới đây KHÔNG ĐÚNG khi nói về nguyên tắc 'Độc lập, tự chủ, tự lực cánh sinh' trong đoàn kết quốc tế?",
    options: [
      "Muốn người ta giúp thì phải tự giúp mình trước.",
      "Trông chờ ỷ lại hoàn toàn vào giúp đỡ ngoài.",
      "Tự lực cánh sinh là gốc của đoàn kết quốc tế.",
      "Đoàn kết quốc tế không làm mất đi tự chủ."
    ],
    answer: 1,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh kiên quyết chống tư tưởng 'trông chờ ỷ lại vào sự giúp đỡ của bên ngoài', khẳng định tự lực cánh sinh là nền tảng.",
    trickDetails: {
      whyTrapped: "Học sinh chọn B vì B là tư tưởng ỷ lại sai trái.",
      trickWord: "Bẫy phủ định 'Trông chờ ỷ lại hoàn toàn vào giúp đỡ ngoài'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: Tự lực cánh sinh = Gốc của Đoàn kết quốc tế (KHÔNG ỷ lại)."
    }
  },
  {
    id: "hcm-c5-tr2-027",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào khẳng định của Hồ Chí Minh: 'Một dân tộc không tự lực cánh sinh mà cứ chờ người khác giúp đỡ thì [...]'?",
    options: [
      "thì không đáng được độc lập",
      "thì sẽ nhanh chóng thành công",
      "thì sẽ được các nước khen ngợi",
      "thì sẽ nhận nhiều tiền viện trợ"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh cảnh báo nghiêm khắc: 'Một dân tộc không tự lực cánh sinh mà cứ chờ người khác giúp đỡ thì không đáng được độc lập'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các vế khen ngợi hay viện trợ.",
      trickWord: "Bẫy trích dẫn 'thì không đáng được độc lập'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: Cứ chờ giúp đỡ = 'KHÔNG ĐÁNG ĐƯỢC ĐỘC LẬP'."
    }
  },
  {
    id: "hcm-c5-tr2-028",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Ngọn cờ đoàn kết quốc tế đối với các lực lượng tiến bộ yêu chuộng hòa bình chống chiến tranh xâm lược là gì?",
    options: [
      "Hòa bình, trong tự do và công lý.",
      "Chủ nghĩa vô sản nguyên bản.",
      "Chủ nghĩa tự do thương mại.",
      "Bảo hộ sản xuất nội địa."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đối với lực lượng yêu chuộng hòa bình toàn thế giới, Hồ Chí Minh giương cao Ngọn cờ Hòa bình, công lý, chống chiến tranh xâm lược.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm với ngọn cờ vô sản hay thương mại.",
      trickWord: "Bẫy ngọn cờ 'Hòa bình, trong tự do và công lý'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ ngọn cờ yêu chuộng hòa bình = Hòa bình & Công lý."
    }
  },
  {
    id: "hcm-c5-tr2-029",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về nguyên tắc 'Đoàn kết trên cơ sở bình đẳng, bên cùng có lợi'?",
    options: [
      "Không bên nào áp đặt quyền lợi lên bên nào.",
      "Bên mạnh có quyền áp đặt bên yếu hơn.",
      "Việt Nam sẵn sàng chịu thiệt thòi mọi mặt.",
      "Tùy nghi vi phạm cam kết đối ngoại."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đoàn kết quốc tế phải dựa trên nguyên tắc bình đẳng, hai bên cùng có lợi, tôn trọng độc lập chủ quyền, kiên quyết chống áp đặt.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (bên mạnh áp đặt) hoặc C (chịu thiệt thòi).",
      trickWord: "Bẫy nguyên tắc 'Không bên nào áp đặt quyền lợi lên bên nào'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: Đoàn kết quốc tế = Bình đẳng + Hai bên cùng có lợi."
    }
  },
  {
    id: "hcm-c5-tr2-030",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG khi giải thích câu nói của Bác: 'Thực lực là cái chiêng, ngoại giao là cái tiếng'?",
    options: [
      "Thực lực có mạnh thì tiếng ngoại giao mới vang.",
      "Ngoại giao quyết định thay thế hoàn toàn thực lực.",
      "Thực lực nội tại là gốc rễ của hoạt động ngoại giao.",
      "Chiêng có to thì tiếng ngoại giao mới lớn được."
    ],
    answer: 1,
    difficulty: "hard",
    isTrick: true,
    explanation: "Câu nói 'Thực lực là cái chiêng, ngoại giao là cái tiếng' khẳng định thực lực (nội lực) là gốc, ngoại giao chỉ phát huy trên cơ sở thực lực, KHÔNG THỂ 'thay thế thực lực'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn B vì B là khẳng định ngoại giao thay thế thực lực sai trái.",
      trickWord: "Bẫy phủ định 'Ngoại giao quyết định thay thế hoàn toàn thực lực'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: Chiêng (Thực lực) mạnh -> Tiếng (Ngoại giao) mới vang."
    }
  },
  {
    id: "hcm-c5-tr2-031",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào quan điểm ngoại giao của Bác: 'Thực lực là cái chiêng, ngoại giao là [...]; Chiêng có to thì tiếng mới lớn'?",
    options: [
      "cái tiếng",
      "cái trống",
      "cái cờ",
      "cái loa"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hình ảnh so sánh ngoại giao nổi tiếng của Bác Hồ: 'Thực lực là cái chiêng, ngoại giao là cái tiếng. Chiêng có to thì tiếng mới lớn'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm cái trống hay cái loa.",
      trickWord: "Bẫy trích dẫn cụm từ 'cái tiếng'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ câu so sánh: Thực lực = Cái chiêng; Ngoại giao = Cái tiếng."
    }
  },
  {
    id: "hcm-c5-tr2-032",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Nguyên tắc 'Dĩ bất biến, ứng vạn biến' được Hồ Chí Minh dặn dặn ai trước khi sang Pháp đàm phán năm 1946?",
    options: [
      "Dặn dặn Cụ Huỳnh Thúc Kháng.",
      "Dặn dặn Đồng chí Phạm Văn Đồng.",
      "Dặn dặn Đồng chí Võ Nguyên Giáp.",
      "Dặn dặn Đồng chí Trường Chinh."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tháng 5/1946, trước khi sang Pháp dự Hội nghị Phông-tên-nơ-blô, Bác Hồ giao quyền Quyền Chủ tịch nước cho Cụ Huỳnh Thúc Kháng và dặn dặn 6 chữ vàng: 'Dĩ bất biến, ứng vạn biến'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm dặn dặn Phạm Văn Đồng hay Võ Nguyên Giáp.",
      trickWord: "Bẫy nhân vật lịch sử 'Cụ Huỳnh Thúc Kháng'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ dặn dặn 1946: 'Dĩ bất biến, ứng vạn biến' = Dặn Cụ Huỳnh Thúc Kháng."
    }
  },
  {
    id: "hcm-c5-tr2-033",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Trong phương châm 'Dĩ bất biến, ứng vạn biến', cái 'Bất biến' trong tư tưởng Hồ Chí Minh được hiểu là gì?",
    options: [
      "Độc lập dân tộc và Chủ quyền Tổ quốc.",
      "Các điều khoản hợp đồng kinh tế ký kết.",
      "Tên gọi của các bộ ngành chính phủ.",
      "Số lượng đại biểu Quốc hội các khóa."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cái 'Bất biến' (không bao giờ thay đổi hay nhân nhượng) chính là Độc lập dân tộc, Chủ quyền toàn vẹn lãnh thổ và Lợi ích tối cao của Tổ quốc.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm cái bất biến với các điều khoản kinh tế.",
      trickWord: "Bẫy khái niệm 'Độc lập dân tộc và Chủ quyền Tổ quốc'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: BẤT BIẾN = Độc lập dân tộc & Chủ quyền Tổ quốc."
    }
  },
  {
    id: "hcm-c5-tr2-034",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Nhận định nào KHÔNG ĐÚNG khi giải thích cái 'Vạn biến' trong phương châm 'Dĩ bất biến, ứng vạn biến'?",
    options: [
      "Sự linh hoạt về sách lược ngoại giao.",
      "Sự mềm dẻo ứng phó biến chuyển tình hình.",
      "Sự từ bỏ mục tiêu độc lập dân tộc.",
      "Sự đa dạng phương thức tập hợp lực lượng."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Cái 'Vạn biến' là linh hoạt về sách lược, phương pháp ứng phó, nhưng tuyệt đối không bao giờ 'từ bỏ mục tiêu độc lập dân tộc'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là sự phản bội mục tiêu sai trái.",
      trickWord: "Bẫy phủ định 'Sự từ bỏ mục tiêu độc lập dân tộc'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: VẠN BIẾN = Linh hoạt sách lược (KHÔNG từ bỏ Độc lập)."
    }
  },
  {
    id: "hcm-c5-tr2-035",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Điền cụm từ còn thiếu vào phương châm đối ngoại của Bác: 'Nguyên tắc thì phải [...], nhưng sách lược thì phải [...]'?",
    options: [
      "kiên định; linh hoạt",
      "linh hoạt; kiên định",
      "cứng nhắc; áp đặt",
      "thay đổi; cố định"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nghệ thuật ứng biến ngoại giao Hồ Chí Minh: Nguyên tắc chiến lược phải kiên định vững vàng, nhưng sách lược thực hiện phải cực kỳ linh hoạt dẻo dai.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm vế ngược 'linh hoạt; kiên định'.",
      trickWord: "Bẫy trích dẫn 'kiên định; linh hoạt'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ: Nguyên tắc = KIÊN ĐỊNH. Sách lược = LINH HOẠT."
    }
  },
  {
    id: "hcm-c5-tr2-036",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "nguyen-tac-doan-ket-qt-sub",
    question: "Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946) là ví dụ điển hình cho nghệ thuật ngoại giao nào của Bác Hồ?",
    options: [
      "Nghệ thuật Nhân nhượng có nguyên tắc.",
      "Nghệ thuật Đầu hàng khuất phục kẻ thù.",
      "Nghệ thuật Đóng cửa không đối thoại.",
      "Nghệ thuật Khiêu khích chiến tranh."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Việc ký Hiệp định Sơ bộ 6/3 và Tạm ước 14/9/1946 thể hiện nghệ thuật 'nhân nhượng có nguyên tắc' để hòa hoãn với Pháp, gạt bớt quân Tưởng, mua thời gian chuẩn bị kháng chiến.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (đầu hàng khuất phục) hay C (đóng cửa).",
      trickWord: "Bẫy nghệ thuật 'Nghệ thuật Nhân nhượng có nguyên tắc'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.3.",
      tip: "Ghi nhớ Hiệp định 1946 = Tạm hòa hoãn -> Nhân nhượng có nguyên tắc."
    }
  },

  // --- MỤC IV. NGOẠI GIAO HỒ CHÍ MINH & BÀI HỌC VẬN DỤNG HIỆN NAY (14 CÂU) ---
  {
    id: "hcm-c5-tr2-037",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Khẳng định nào dưới đây phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT trường phái ngoại giao của Việt Nam hiện nay tiếp nối tư tưởng Hồ Chí Minh?",
    options: [
      "Trường phái Ngoại giao Cây tre Việt Nam.",
      "Trường phái Ngoại giao Đóng cửa tự lực.",
      "Trường phái Ngoại giao Một chiều phụ thuộc.",
      "Trường phái Ngoại giao Cương cứng áp đặt."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảng ta xác định xây dựng trường phái 'Ngoại giao Cây tre Việt Nam': Gốc vững, thân chắc, cành uyển chuyển, vận dụng sáng tạo tư tưởng đối ngoại Hồ Chí Minh.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm sang các trường phái đóng cửa hay phụ thuộc.",
      trickWord: "Bẫy trường phái 'Ngoại giao Cây tre Việt Nam'",
      citation: "Văn kiện Đại hội XIII của Đảng & Hội nghị Đối ngoại toàn quốc.",
      tip: "Ghi nhớ Ngoại giao VN hiện nay = Ngoại giao Cây tre (Gốc vững, cành uyển chuyển)."
    }
  },
  {
    id: "hcm-c5-tr2-038",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Nhận định nào KHÔNG ĐÚNG về đường lối đối ngoại của Việt Nam trong thời kỳ hội nhập quốc tế hiện nay?",
    options: [
      "Độc lập, tự chủ, hòa bình, hợp tác phát triển.",
      "Đa phương hóa, đa dạng hóa quan hệ đối ngoại.",
      "Chọn bên và liên minh quân sự chống nước khác.",
      "Là bạn, là đối tác tin cậy của các nước."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Việt Nam nhất quán đường lối đối ngoại độc lập tự chủ, đa phương hóa đa dạng hóa, kiên quyết thực hiện chính sách '4 không', tuyệt đối không 'chọn bên hay liên minh chống nước khác'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là hành vi chọn bên sai trái.",
      trickWord: "Bẫy phủ định 'Chọn bên và liên minh quân sự chống nước khác'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Đường lối đối ngoại = Đa dạng hóa + KHÔNG chọn bên."
    }
  },
  {
    id: "hcm-c5-tr2-039",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Điền cụm từ còn thiếu vào đường lối đối ngoại Đổi mới: 'Việt Nam muốn là bạn, là đối tác tin cậy và là [...] trong cộng đồng quốc tế'?",
    options: [
      "thành viên có trách nhiệm",
      "thành viên lãnh đạo chủ chốt",
      "thành viên trung lập đứng ngoài",
      "thành viên nhận trợ cấp chính"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Khẳng định đường lối đối ngoại hiện nay: 'Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm thành viên lãnh đạo hay trung lập đứng ngoài.",
      trickWord: "Bẫy trích dẫn 'thành viên có trách nhiệm'",
      citation: "Văn kiện Đại hội XIII của Đảng.",
      tip: "Ghi nhớ: Là bạn + Đối tác tin cậy + Thành viên có trách nhiệm."
    }
  },
  {
    id: "hcm-c5-tr2-040",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Chính sách đối ngoại '4 không' của Việt Nam hiện nay có nguồn gốc sâu xa từ tư tưởng nào của Bác Hồ?",
    options: [
      "Tư tưởng Độc lập tự chủ, tự lực cánh sinh.",
      "Tư tưởng Bãi bỏ quân đội chính quy.",
      "Tư tưởng Đóng cửa không thương mại.",
      "Tư tưởng Phụ thuộc vào bảo hộ bên ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Chính sách '4 không' trong Quốc phòng (không liên minh quân sự, không cho đặt căn cứ, không đi với nước này chống nước khác, không dùng vũ lực) kế thừa trực tiếp tư tưởng độc lập, tự chủ, tự lực cánh sinh của Bác.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (bãi bỏ quân đội) hay D (phụ thuộc bảo hộ).",
      trickWord: "Bẫy tư tưởng gốc 'Tư tưởng Độc lập tự chủ, tự lực cánh sinh'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Chính sách quốc phòng '4 không' gốc từ TTHCM về Độc lập tự chủ."
    }
  },
  {
    id: "hcm-c5-tr2-041",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT bài học vận dụng Ngoại giao Hồ Chí Minh trong bảo vệ chủ quyền biển đảo hiện nay?",
    options: [
      "Kiên định mục tiêu chủ quyền, linh hoạt giải pháp.",
      "Từ bỏ chủ quyền biển đảo để giữ hòa bình.",
      "Dùng vũ lực quân sự tấn công trước.",
      "Phó mặc cho cơ quan tài phán nước ngoài."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Trong bảo vệ chủ quyền biển đảo: Nguyên tắc chủ quyền là 'Bất biến' (kiên định tuyệt đối), giải pháp đấu tranh hòa bình luật pháp là 'Vạn biến' (linh hoạt).",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (từ bỏ chủ quyền) hay C (tấn công vũ lực).",
      trickWord: "Bẫy phương châm 'Kiên định mục tiêu chủ quyền, linh hoạt giải pháp'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ bảo vệ biển đảo = Kiên định Chủ quyền + Linh hoạt Hòa bình."
    }
  },
  {
    id: "hcm-c5-tr2-042",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Nhận định nào KHÔNG ĐÚNG về vai trò của Ngoại giao nhân dân bên cạnh Ngoại giao Đảng và Ngoại giao Nhà nước?",
    options: [
      "Là một trong 3 trụ cột của nền đối ngoại hiện đại.",
      "Giúp thắt chặt tình hữu nghị giữa các dân tộc.",
      "Là hoạt động tự phát không cần theo đường lối.",
      "Tạo nền tảng xã hội thuận lợi cho quan hệ các nước."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Ngoại giao nhân dân là 1 trong 3 trụ cột đối ngoại, phải tuân thủ nghiêm ngặt đường lối đối ngoại của Đảng và Nhà nước, không bao giờ là 'hoạt động tự phát'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là nhận định tự phát sai trái.",
      trickWord: "Bẫy phủ định 'Là hoạt động tự phát không cần theo đường lối'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Ngoại giao nhân dân là 1 trong 3 trụ cột (KHÔNG tự phát)."
    }
  },
  {
    id: "hcm-c5-tr2-043",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Điền cụm từ còn thiếu vào dặn dặn của Bác về công tác ngoại giao: 'Phải nhìn xa thấy rộng, phải [...]'?",
    options: [
      "biết mình biết người, biết thời biết thế",
      "biết tận dụng mọi nguồn viện trợ kinh tế",
      "biết từ chối đàm phán khi gặp khó khăn",
      "biết áp đặt điều kiện lên phía đối tác"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nghệ thuật tri ỉ trong ngoại giao Bác Hồ: 'Phải nhìn xa thấy rộng, phải biết mình biết người, biết thời biết thế, biết dừng biết biến'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm các phương án gài từ từ chối hay áp đặt.",
      trickWord: "Bẫy trích dẫn 'biết mình biết người, biết thời biết thế'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ bộ 5 'Biết' ngoại giao: Biết mình - Biết người - Biết thời - Biết thế - Biết dừng."
    }
  },
  {
    id: "hcm-c5-tr2-044",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Khái niệm 'Ngoại giao tâm công' (đánh vào lòng người) trong tư tưởng Hồ Chí Minh thể hiện qua hành vi nào?",
    options: [
      "Dùng chính nghĩa và tình nhân văn để cảm hóa.",
      "Dùng tiền bạc đút lót mua chuộc chính khách.",
      "Dùng áp lực quân sự đe dọa quốc gia đối lập.",
      "Dùng tuyên truyền sai sự thật để gây chia rẽ."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "'Ngoại giao tâm công' của Bác là lấy chính nghĩa cách mạng, lẽ phải và tình cảm chân thành nhân văn để thuyết phục, cảm hóa lòng người.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (đút lót) hoặc C (đe dọa quân sự).",
      trickWord: "Bẫy khái niệm 'Dùng chính nghĩa và tình nhân văn để cảm hóa'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ Ngoại giao tâm công = Lấy CHÍNH NGHĨA & NHÂN VĂN cảm hóa."
    }
  },
  {
    id: "hcm-c5-tr2-045",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về vị thế của Việt Nam trên trường quốc tế hiện nay nhờ vận dụng tư tưởng đối ngoại Hồ Chí Minh?",
    options: [
      "Vị thế và uy tín quốc tế ngày càng nâng cao.",
      "Việt Nam bị cô lập hạn chế quan hệ ngoại giao.",
      "Việt Nam phụ thuộc tài chính vào các nước lớn.",
      "Việt Nam không tham gia tổ chức quốc tế nào."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay nhờ vận dụng sáng tạo tư tưởng đối ngoại Hồ Chí Minh.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (bị cô lập) hay C (phụ thuộc).",
      trickWord: "Bẫy đánh giá 'Vị thế và uy tín quốc tế ngày càng nâng cao'",
      citation: "Văn kiện Đại hội XIII của Đảng.",
      tip: "Ghi nhớ: Nhờ TTHCM đối ngoại -> Vị thế uy tín quốc tế ngày càng nâng cao."
    }
  },
  {
    id: "hcm-c5-tr2-046",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Nhận định nào KHÔNG ĐÚNG khi nói về nguyên tắc ứng xử đối ngoại trong tư tưởng Hồ Chí Minh?",
    options: [
      "Thêm bạn bớt thù.",
      "Chủ động, chân thành, tin cậy.",
      "Bội ước và lật lọng cam kết.",
      "Tôn trọng luật pháp quốc tế."
    ],
    answer: 2,
    difficulty: "hard",
    isTrick: true,
    explanation: "Hồ Chí Minh luôn giữ chữ Tín trong ngoại giao, kiên quyết bác bỏ thái độ 'bội ước, lật lọng cam kết'.",
    trickDetails: {
      whyTrapped: "Học sinh chọn C vì C là thái độ lật lọng bất tín sai trái.",
      trickWord: "Bẫy phủ định 'Bội ước và lật lọng cam kết'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Ngoại giao Bác Hồ = Giữ chữ TÍN + Thêm bạn bớt thù."
    }
  },
  {
    id: "hcm-c5-tr2-047",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Điền cụm từ còn thiếu vào phương châm đối ngoại của Bác: 'Muốn người ta giúp mình, thì trước hết mình phải [...]'?",
    options: [
      "phải tự giúp lấy mình trước",
      "phải vay tiền ngân hàng quốc tế",
      "phải ký các hợp đồng thương mại",
      "phải nhượng bộ đất đai lãnh thổ"
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Nguyên tắc tự lực tự cường trong đối ngoại: 'Muốn người ta giúp mình thì trước hết mình phải tự giúp lấy mình đã'.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm vay tiền hay nhượng bộ đất đai.",
      trickWord: "Bẫy trích dẫn 'phải tự giúp lấy mình trước'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Muốn người khác giúp = Phải TỰ GIÚP MÌNH trước."
    }
  },
  {
    id: "hcm-c5-tr2-048",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Việc Việt Nam đảm nhiệm thành công vai trò Ủy viên không thường trực Hội đồng Báo an Liên Hợp Quốc thể hiện điều gì?",
    options: [
      "Sự vận dụng thành công đường lối đối ngoại đa phương.",
      "Sự can thiệp sâu vào nội bộ các nước thành viên.",
      "Sự từ bỏ đường lối đối ngoại độc lập tự chủ.",
      "Sự phụ thuộc vào quyết định của các nước lớn."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đảm nhiệm xuất sắc các trọng trách quốc tế là minh chứng sinh động cho đường lối đối ngoại đa phương hóa, đa dạng hóa, chủ động hội nhập quốc tế.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (can thiệp nội bộ) hay C/D (từ bỏ độc lập/phụ thuộc).",
      trickWord: "Bẫy thành tựu 'Sự vận dụng thành công đường lối đối ngoại đa phương'",
      citation: "Văn kiện Đại hội XIII của Đảng.",
      tip: "Ghi nhớ thành tựu đối ngoại = Vận dụng đối ngoại đa phương hóa."
    }
  },
  {
    id: "hcm-c5-tr2-049",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Khẳng định nào phản ánh ĐÚNG VÀ ĐẦY ĐỦ NHẤT về mối quan hệ giữa Quốc phòng - An ninh và Đối ngoại hiện nay?",
    options: [
      "Đối ngoại bảo vệ Tổ quốc từ sớm, từ xa.",
      "Đối ngoại tách rời hoàn toàn với Quốc phòng.",
      "Đối ngoại chỉ triển khai khi có chiến tranh.",
      "Quốc phòng không hỗ trợ cho Đối ngoại."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Đối ngoại hiện đại kết hợp với Quốc phòng - An ninh thực hiện nhiệm vụ chiến lược: Bảo vệ Tổ quốc từ sớm, từ xa, giữ vững môi trường hòa bình.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B (tách rời) hay C (chỉ khi có chiến tranh).",
      trickWord: "Bẫy vai trò 'Đối ngoại bảo vệ Tổ quốc từ sớm, từ xa'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: Đối ngoại + Quốc phòng = Bảo vệ Tổ quốc TỪ SỚM, TỪ XA."
    }
  },
  {
    id: "hcm-c5-tr2-050",
    trickSet: 2,
    sectionId: "hcm-doan-ket-quoc-te-sec",
    subsectionId: "ngoai-giao-bai-hoc-sub",
    question: "Giá trị trường tồn của Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế đối với thế hệ trẻ Việt Nam hiện nay là gì?",
    options: [
      "Là ngọn đèn soi đường cho hội nhập quốc tế.",
      "Đã không còn giá trị trong thời đại toàn cầu hóa.",
      "Chỉ là tài liệu học tập lịch sử thời kỳ chống Pháp.",
      "Chỉ áp dụng cho các nhà ngoại giao chuyên nghiệp."
    ],
    answer: 0,
    difficulty: "hard",
    isTrick: true,
    explanation: "Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế mãi mãi là ngọn đèn soi đường, bồi dưỡng bản lĩnh, tinh thần chủ động cho thế hệ trẻ tự tin bước ra thế giới.",
    trickDetails: {
      whyTrapped: "Học sinh nhầm B/C cho rằng không còn giá trị hay chỉ thuộc về lịch sử.",
      trickWord: "Bẫy giá trị 'Là ngọn đèn soi đường cho hội nhập quốc tế'",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh — Chương V, Mục II.4.",
      tip: "Ghi nhớ: TTHCM về Đoàn kết quốc tế = Mãi mãi là ngọn đèn soi đường hội nhập."
    }
  }
];

const checkRes = checkOptionLengths(trickSet2);
console.log('TrickSet2 C5 max length diff:', checkRes.maxDiff);
console.log('TrickSet2 C5 violations count:', checkRes.violations.length);

const overlaps = checkBlacklistOverlap(trickSet2);
console.log('TrickSet2 C5 blacklist overlaps count:', overlaps.length);

if (checkRes.violations.length === 0 && overlaps.length === 0) {
  const fileContent = `/* ============================================================
   DỮ LIỆU ĐỀ BẪY 2 — CHƯƠNG V (50 CÂU HỎI BẪY VẬN DỤNG CAO 100% HARD)
   Chuyên đề: Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế
   ============================================================ */

export const trickSet2 = ${JSON.stringify(trickSet2, null, 2)};
`;
  fs.writeFileSync('./data/questions-chuong-5-trick2.js', fileContent, 'utf8');
  console.log('Successfully written data/questions-chuong-5-trick2.js!');
}
