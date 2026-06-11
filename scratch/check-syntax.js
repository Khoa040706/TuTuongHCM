const fs = require('fs');
const path = require('path');
const vm = require('vm');

const files = [
  'js/data/chuong-mo-dau.js',
  'js/data/questions-mo-dau.js',
  'js/data/chuong-1.js',
  'js/components/theme.js',
  'js/components/sidebar.js',
  'js/components/content.js',
  'js/components/drawing.js',
  'js/components/toolbar.js',
  'js/components/quiz.js',
  'js/app.js'
];

let hasErrors = false;

console.log("=== BẮT ĐẦU KIỂM TRA CÚ PHÁP FILE JAVASCRIPT ===");

// Dummy global variables that would be present in the browser
const mockGlobals = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {}, querySelectorAll: () => [] }),
    createElement: () => ({ querySelectorAll: () => [] }),
    body: { appendChild: () => {}, classList: { remove: () => {}, add: () => {} } }
  },
  navigator: { serviceWorker: { register: () => Promise.resolve() } },
  localStorage: { getItem: () => null, setItem: () => {} },
  setInterval: () => 1,
  clearInterval: () => {},
  console: console,
  confirm: () => true,
  alert: () => {},
  chuongMoDau: {},
  chuong1: {},
  Theme: { init: () => {}, bindEvents: () => {}, renderToggle: () => '' },
  Sidebar: { bindEvents: () => {}, render: () => '', expandGroup: () => {} },
  ContentRenderer: { renderChapter: () => '' },
  HighlightManager: { init: () => {}, bindEvents: () => {}, applyAll: () => {}, clearAll: () => {} },
  DrawingManager: { init: () => {}, bindEvents: () => {}, clearAll: () => {}, setTool: () => {} },
  NoteToolbar: { render: () => {}, selectTool: () => {} },
  QuizComponent: {}
};

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Không tìm thấy file: ${file}`);
    hasErrors = true;
    return;
  }
  
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    const script = new vm.Script(code, { filename: file });
    // Run the script in a mock context to ensure no runtime syntax/immediate errors
    const context = vm.createContext(mockGlobals);
    script.runInContext(context);
    console.log(`✅ [CÚ PHÁP OK] ${file}`);
  } catch (err) {
    console.error(`❌ [LỖI CÚ PHÁP] trong ${file}:`, err.message);
    console.error(err.stack);
    hasErrors = true;
  }
});

console.log("\n=== KẾT QUẢ KIỂM TRA ===");
if (hasErrors) {
  console.error("❌ Phát hiện lỗi cú pháp trong các file! Vui lòng khắc phục.");
  process.exit(1);
} else {
  console.log("🎉 KHÔNG PHÁT HIỆN LỖI CÚ PHÁP! Tất cả các file đều hợp lệ.");
  process.exit(0);
}
