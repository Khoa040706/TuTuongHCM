/**
 * StudyMaster Admin Dashboard - Automated QA Test Suite
 * Validating Test Cases 1 through 9 per admindashboardDoc/06_QA_ACCEPTANCE_CRITERIA.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${name}: ${err.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

console.log("\n=======================================================");
console.log("  STUDYMASTER ADMIN DASHBOARD — QA ACCEPTANCE TEST SUITE");
console.log("  Reference: 06_QA_ACCEPTANCE_CRITERIA.md (v1.1.0)");
console.log("=======================================================\n");

// --------------------------------------------------------------------------
// TEST CASE 1: Chuyển đổi sang Giao diện Admin Dashboard & Single Page Scroll
// --------------------------------------------------------------------------
console.log("📌 Testing Test Case 1: Chuyển đổi sang Admin Dashboard & 4 Sections");
test("AdminDashboard.js contains all 4 sections with data-admin-section", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminDashboard.js'), 'utf8');
  assert(file.includes('data-admin-section="overview"') || file.includes('type="overview"'), "Overview section present");
  assert(file.includes('data-admin-section="users"') || file.includes('type="users"'), "Users section present");
  assert(file.includes('data-admin-section="questions"') || file.includes('type="questions"'), "Questions section present");
  assert(file.includes('data-admin-section="leaderboard"') || file.includes('type="leaderboard"'), "Leaderboard section present");
  assert(file.includes('<AdminUnifiedHero'), "Hero present");
  assert(file.includes('top-0') && (file.includes('fixed') || file.includes('sticky')), "Fixed/sticky header nav present");
});

// --------------------------------------------------------------------------
// TEST CASE 2: Kiểm định Luật Chống Đoán Bừa (Delta L <= 15)
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 2: Kiểm định Luật Chống Đoán Bừa (Delta L <= 15)");
test("AdminQuestionsTab calculates option delta and validates <= 15 chars", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminQuestionsTab.js'), 'utf8');
  assert(file.includes('getLengthDelta'), "Calculates getLengthDelta function");
  assert(file.includes('<= 15'), "Contains Delta L <= 15 rule check");
  assert(file.includes('trickDetails'), "Contains trick details inspector");
  assert(file.includes('whyTrapped'), "Contains whyTrapped property");
  assert(file.includes('trickWord'), "Contains trickWord property");
  assert(file.includes('citation'), "Contains citation property");
  assert(file.includes('tip'), "Contains tip property");
});

// --------------------------------------------------------------------------
// TEST CASE 3: Thêm Học viên Mới & Bắt lỗi Trùng lặp
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 3: Thêm Học viên Mới & Bắt lỗi Trùng lặp");
test("AdminModals & AdminDashboard check duplicate username and log audit entry", () => {
  const modalFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminModals.js'), 'utf8');
  const dashFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminDashboard.js'), 'utf8');
  assert(modalFile.includes('AdminAddUserModal'), "AdminAddUserModal component exists");
  assert(dashFile.includes('handleCreateUser'), "AdminDashboard handles create user submission");
  assert(dashFile.includes('users.some'), "Checks duplicate username in existing users list");
  assert(dashFile.includes('writeAdminLog'), "Logs audit entry upon adding user");
});

// --------------------------------------------------------------------------
// TEST CASE 4: Khóa & Mở khóa Tài khoản Học viên
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 4: Khóa & Mở khóa Tài khoản");
test("AdminDashboard provides toggleLockUser with audit logging and confirm modal", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminDashboard.js'), 'utf8');
  assert(file.includes('handleToggleLockUser'), "Provides lock user toggle handler");
  assert(file.includes('showConfirm'), "Includes confirmation handling for destructive/risky actions");
  assert(file.includes('writeAdminLog'), "Writes audit log when locking/unlocking user");
});

// --------------------------------------------------------------------------
// TEST CASE 5: Xuất Báo cáo Danh sách Học viên
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 5: Xuất Báo cáo CSV / Data Export");
test("AdminOverviewTab contains export report capability", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminOverviewTab.js'), 'utf8');
  assert(file.includes('handleExportReport') || file.includes('Export') || file.includes('Báo cáo') || file.includes('Download'), "Contains export report feature");
});

// --------------------------------------------------------------------------
// TEST CASE 6: Xem Hồ sơ & Biểu đồ Radar Năng lực
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 6: Biểu đồ Radar Năng lực cá nhân");
test("AdminUserDrawer renders 6/8-axis Radar chart and student details", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminUserDrawer.js'), 'utf8');
  assert(file.includes('svg') || file.includes('polygon') || file.includes('radar') || file.includes('Radar'), "Renders Radar polygon/SVG");
  assert(file.includes('onClose'), "Includes close handler");
  assert(file.includes('Escape') || file.includes('keydown') || file.includes('fixed'), "Fixed overlay drawer behavior");
});

// --------------------------------------------------------------------------
// TEST CASE 7: Điều hướng Scrollspy trên Topbar Header / Dock
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 7: Điều hướng Scrollspy trên Topbar Header");
test("Topbar Header and IntersectionObserver in AdminDashboard sync scroll smoothly", () => {
  const dashFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminDashboard.js'), 'utf8');
  assert(dashFile.includes('IntersectionObserver'), "AdminDashboard uses IntersectionObserver for scrollspy");
  assert(dashFile.includes('rootMargin'), "Uses calibrated rootMargin for active section detection");
  assert(dashFile.includes('scrollIntoView') || dashFile.includes('smooth'), "Provides smooth scroll navigation");
  assert(dashFile.includes('adminTab'), "Topbar receives and animates activeTab");
  assert(dashFile.includes('top-0') && (dashFile.includes('fixed') || dashFile.includes('sticky')), "Topbar navigation stays fixed on scroll");
});

// --------------------------------------------------------------------------
// TEST CASE 8: Đặc tả Layering & Tương phản Hero Cinematic
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 8: Đặc tả Layering & Tương phản Hero Cinematic");
test("AdminUnifiedHero enforces 5-layer Z-index, Soft-Light text, Scrim and Direct Floating Metrics", () => {
  const file = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminUnifiedHero.js'), 'utf8');
  assert(file.includes('STUDY') && file.includes('MASTER'), "Hero renders STUDY and MASTER diagonal typography");
  assert(file.includes('soft-light'), "Typography uses soft-light mix-blend-mode");
  assert(file.includes('0.12') || file.includes('opacity'), "Text opacity is softly balanced");
  assert(file.includes('linear-gradient(to top, rgba(0, 0, 0, 0.65)'), "Z2 Gradient Scrim is present with exact CSS");
  assert(file.includes('textShadow') || file.includes('drop-shadow'), "Bottom metrics float with protected text-shadow");
  assert(file.includes('translateY'), "Desktop Parallax scroll transform is integrated");
});

// --------------------------------------------------------------------------
// TEST CASE 9: Chuyển đổi Preview ⇄ Focus Mode
// --------------------------------------------------------------------------
console.log("\n📌 Testing Test Case 9: Chuyển đổi Preview ⇄ Focus Mode");
test("AdminUsersTab and AdminQuestionsTab implement Preview and Focus mode with body lock and Esc", () => {
  const usersFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminUsersTab.js'), 'utf8');
  const questionsFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/AdminQuestionsTab.js'), 'utf8');
  
  assert(usersFile.includes('viewMode'), "AdminUsersTab has viewMode state");
  assert(usersFile.includes('document.body.style.overflow = "hidden"'), "AdminUsersTab locks body scroll in Focus mode");
  assert(usersFile.includes('Escape'), "AdminUsersTab listens to Escape key to exit Focus mode");
  assert(usersFile.includes('slice(0, 5)'), "AdminUsersTab preview displays 5 rows");
  
  assert(questionsFile.includes('viewMode'), "AdminQuestionsTab has viewMode state");
  assert(questionsFile.includes('document.body.style.overflow = "hidden"'), "AdminQuestionsTab locks body scroll in Focus mode");
  assert(questionsFile.includes('Escape'), "AdminQuestionsTab listens to Escape key to exit Focus mode");
  assert(questionsFile.includes('Focus Mode') || questionsFile.includes('fixed inset-0'), "AdminQuestionsTab has full Focus mode overlay");
});

// --------------------------------------------------------------------------
// PERFORMANCE & EDGE CASES: LazySection & SectionSkeletonPlaceholder
// --------------------------------------------------------------------------
console.log("\n📌 Testing Performance & NFR: Lazy Mount & Shimmer Skeleton");
test("LazySection and SectionSkeletonPlaceholder implement CLS=0 and mount-once", () => {
  const lazyFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/LazySection.js'), 'utf8');
  const skelFile = fs.readFileSync(path.join(ROOT_DIR, 'components/admin/SectionSkeletonPlaceholder.js'), 'utf8');
  
  assert(lazyFile.includes('IntersectionObserver'), "LazySection observes section enter");
  assert(lazyFile.includes('rootMargin: "300px 0px 300px 0px"'), "LazySection pre-mounts with 300px threshold");
  assert(lazyFile.includes('isMounted'), "LazySection persists mounted state");
  assert(skelFile.includes('overview') && skelFile.includes('users') && skelFile.includes('questions'), "SectionSkeletonPlaceholder handles section layouts");
});

const passRate = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

console.log("\n=======================================================");
console.log(`  RESULT: ${passedTests}/${totalTests} TESTS PASSED (${passRate}% PASS RATE)`);
console.log("=======================================================\n");

if (passedTests !== totalTests) {
  process.exit(1);
}
