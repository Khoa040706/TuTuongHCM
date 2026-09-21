export const ATM_SWIMLANES = Object.freeze([
  { id: "customer", label: "Customer", x: 0, width: 300 },
  { id: "terminal", label: "ATM Terminal", x: 300, width: 300 },
  { id: "bank", label: "Bank Host Server", x: 600, width: 300 },
]);

export const ATM_ACTIVITY_NODES = Object.freeze([
  { id: "start", type: "initial", lane: "customer", x: 120, y: 48, label: "Bắt đầu" },
  { id: "insert-card", type: "action", lane: "customer", x: 120, y: 98, label: "Đưa thẻ vào máy" },
  { id: "enter-pin", type: "action", lane: "customer", x: 120, y: 158, label: "Nhập mã PIN" },
  { id: "read-card", type: "action", lane: "terminal", x: 440, y: 158, label: "Đọc thẻ và PIN" },
  { id: "verify-pin", type: "action", lane: "bank", x: 750, y: 158, label: "Xác minh PIN" },
  { id: "valid-pin", type: "decision", lane: "bank", x: 750, y: 220, label: "PIN hợp lệ?" },
  { id: "select-amount", type: "action", lane: "customer", x: 120, y: 284, label: "Chọn số tiền" },
  { id: "check-balance", type: "action", lane: "bank", x: 750, y: 284, label: "Kiểm tra số dư" },
  { id: "enough-balance", type: "decision", lane: "bank", x: 750, y: 348, label: "Đủ số dư?" },
  { id: "fork", type: "fork", lane: "terminal", x: 440, y: 405, label: "Tách luồng" },
  { id: "dispense", type: "action", lane: "terminal", x: 370, y: 450, label: "Phát tiền" },
  { id: "eject", type: "action", lane: "terminal", x: 520, y: 450, label: "Trả thẻ" },
  { id: "join", type: "join", lane: "terminal", x: 440, y: 492, label: "Nhập luồng" },
  { id: "end", type: "final", lane: "customer", x: 120, y: 492, label: "Kết thúc" },
]);

export const ATM_ACTIVITY_EDGES = Object.freeze([
  { id: "start-insert", from: "start", to: "insert-card", d: "M120 57 V76", main: true },
  { id: "insert-enter", from: "insert-card", to: "enter-pin", d: "M120 120 V136", main: true },
  { id: "enter-read", from: "enter-pin", to: "read-card", d: "M210 158 H350", main: true },
  { id: "read-verify", from: "read-card", to: "verify-pin", d: "M530 158 H660", main: true },
  { id: "verify-decision", from: "verify-pin", to: "valid-pin", d: "M750 180 V198", main: true },
  { id: "pin-yes", from: "valid-pin", to: "select-amount", d: "M750 242 V254 H120 V262", guard: "Y", main: true },
  { id: "pin-no", from: "valid-pin", to: "enter-pin", d: "M728 220 H620 V248 H120 V180", guard: "N", main: false },
  { id: "amount-balance", from: "select-amount", to: "check-balance", d: "M210 284 H660", main: true },
  { id: "balance-decision", from: "check-balance", to: "enough-balance", d: "M750 306 V326", main: true },
  { id: "balance-yes", from: "enough-balance", to: "fork", d: "M750 370 V390 H440 V399", guard: "Y", main: true },
  { id: "balance-no", from: "enough-balance", to: "select-amount", d: "M728 348 H620 V382 H120 V306", guard: "N", main: false },
  { id: "fork-dispense", from: "fork", to: "dispense", d: "M370 409 V428", main: true },
  { id: "fork-eject", from: "fork", to: "eject", d: "M510 409 V428", main: true },
  { id: "dispense-join", from: "dispense", to: "join", d: "M370 472 V486", main: true },
  { id: "eject-join", from: "eject", to: "join", d: "M520 472 V486", main: true },
  { id: "join-end", from: "join", to: "end", d: "M335 496 H142", main: true },
]);

export const ATM_GUARDS = Object.freeze([
  { id: "valid-pin-label", x: 610, y: 207, text: "[Valid PIN?]" },
  { id: "balance-label", x: 580, y: 335, text: "[Balance ≥ Amount?]" },
]);
