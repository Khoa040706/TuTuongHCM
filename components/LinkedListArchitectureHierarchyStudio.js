"use client";

import React, { useState } from "react";
import {
  Layers,
  GitBranch,
  Cpu,
  TableProperties,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Box,
  KeyRound,
  ShieldCheck,
  Zap,
  HelpCircle,
  BookOpen,
  Info,
  ChevronRight,
  Clock,
  Compass,
  Repeat,
  ArrowLeftRight
} from "lucide-react";

export default function LinkedListArchitectureHierarchyStudio() {
  const [activeTab, setActiveTab] = useState("quick_defs"); // 'quick_defs' | 'oop_hierarchy' | 'memory_anatomy' | 'matrix_compare' | 'pointer_simulator'
  
  // Tab 3: Memory Anatomy Sub-State
  const [selectedMemoryView, setSelectedMemoryView] = useState("singly"); // 'singly' | 'doubly' | 'circular' | 'doubly_list'
  
  // Tab 5: Simulator Sub-State
  const [simOperation, setSimOperation] = useState("addLast_tailed"); // 'addLast_tailed' | 'addAfter_ell' | 'addLast_circular' | 'remove_doubly'
  const [simStep, setSimStep] = useState(0);

  // 1. Quick Definitions Data (9 Cốt Lõi Toàn Diện)
  const quickDefinitions = [
    {
      id: "list_node",
      name: "ListNode<E>",
      category: "Building Block (Nút đơn)",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      shortDef: "Viên gạch nút đơn sơ khai — chứa 1 ô dữ liệu `item` và 1 con trỏ `next` trỏ tới nút kế tiếp trong bộ nhớ Heap.",
      analogy: "Toa tàu 1 móc kéo phía sau 🚃➡️",
      fields: "E item, ListNode<E> next",
      icon: Box
    },
    {
      id: "dlist_node",
      name: "DListNode<E>",
      category: "Building Block (Nút đôi)",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      shortDef: "Viên gạch nút đôi nâng cao — chứa dữ liệu `item` cùng 2 con trỏ `prev` (trước) và `next` (sau), cho phép duyệt 2 chiều linh hoạt.",
      analogy: "Toa tàu 2 đầu kéo đối xứng ⬅️🚃➡️",
      fields: "E item, DListNode<E> prev, next",
      icon: Layers
    },
    {
      id: "list_interface",
      name: "ListInterface<E>",
      category: "ADT Contract (Hợp đồng tối thiểu)",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      shortDef: "Hợp đồng trừu tượng cơ bản — chỉ định nghĩa 6 thao tác thiết yếu tại đầu danh sách (isEmpty, size, addFirst, getFirst, removeFirst, print).",
      analogy: "Bản quy chuẩn khung tối thiểu 📜",
      fields: "Interface (0 thuộc tính lưu trữ)",
      icon: BookOpen
    },
    {
      id: "enhanced_interface",
      name: "EnhancedListInterface<E>",
      category: "ADT Contract (Hợp đồng mở rộng)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      shortDef: "Hợp đồng mở rộng — kế thừa ListInterface và bổ sung thêm khả năng tìm kiếm (`contains`), chèn/xóa ở giữa (`addAfter`, `removeAfter`, `remove`).",
      analogy: "Bản quy chuẩn đa năng toàn diện 📑✨",
      fields: "Interface (extends ListInterface)",
      icon: ShieldCheck
    },
    {
      id: "basic_ll",
      name: "BasicLinkedList<E>",
      category: "Class Cài Đặt (Cơ bản)",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      shortDef: "Danh sách liên kết cơ bản — hiện thực ListInterface, chỉ có con trỏ `head`, chỉ hỗ trợ thao tác nhanh O(1) ở đầu danh sách (lý tưởng cho Stack).",
      analogy: "Chuỗi liên kết đơn hướng đầu nguồn ⚓",
      fields: "ListNode<E> head, int num_nodes",
      icon: Cpu
    },
    {
      id: "enhanced_ll",
      name: "EnhancedLinkedList<E>",
      category: "Class Cài Đặt (Mở rộng)",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      shortDef: "Danh sách liên kết mở rộng — hiện thực EnhancedListInterface, chỉ có con trỏ `head`, hỗ trợ thêm chèn/xóa giữa danh sách có thứ tự.",
      analogy: "Chuỗi liên kết đơn có khả năng chèn giữa 🔗",
      fields: "ListNode<E> head, int num_nodes",
      icon: GitBranch
    },
    {
      id: "tailed_ll",
      name: "TailedLinkedList<E>",
      category: "Class Cài Đặt (Có đuôi)",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      shortDef: "Danh sách liên kết có đuôi — hiện thực EnhancedListInterface, có cả `head` và `tail`, tối ưu chèn cuối `addLast` đạt O(1) (chuẩn mực cho Queue).",
      analogy: "Chuỗi liên kết có neo giữ 2 đầu Head & Tail ⚓...🎯",
      fields: "ListNode<E> head, tail, int num_nodes",
      icon: Zap
    },
    {
      id: "circular_ll",
      name: "CircularLinkedList<E>",
      category: "Class Cài Đặt (Vòng tròn)",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      shortDef: "Danh sách liên kết vòng — nút đuôi trỏ ngược về nút đầu (`tail.next = head`), chỉ cần 1 con trỏ `tail` để quản lý cả đầu và đuôi trong O(1).",
      analogy: "Vòng tròn khép kín không điểm kết thúc 🔄",
      fields: "ListNode<E> tail, int num_nodes",
      icon: Repeat
    },
    {
      id: "doubly_ll",
      name: "DoublyLinkedList<E>",
      category: "Class Cài Đặt (Liên kết đôi)",
      badgeColor: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
      shortDef: "Danh sách liên kết đôi — xây dựng từ `DListNode`, mỗi nút có cả `prev` và `next`, cho phép xóa nút hiện tại O(1) và duyệt 2 chiều siêu tốc.",
      analogy: "Đường tàu 2 chiều song hành ⬅️🔗➡️",
      fields: "DListNode<E> head, tail, int num_nodes",
      icon: ArrowLeftRight
    }
  ];

  // 2. OOP Hierarchy & Contract Data
  const interfaceMethods = [
    { name: "isEmpty()", returnType: "boolean", inBasic: true, inEnhanced: true, purpose: "Kiểm tra danh sách có rỗng không (head == null hoặc num_nodes == 0)" },
    { name: "size()", returnType: "int", inBasic: true, inEnhanced: true, purpose: "Trả về tổng số node hiện có (num_nodes) trong thời gian O(1)" },
    { name: "getFirst()", returnType: "E", inBasic: true, inEnhanced: true, purpose: "Lấy giá trị phần tử tại node đầu tiên mà không xóa node (ném NoSuchElementException nếu rỗng)" },
    { name: "addFirst(E item)", returnType: "void", inBasic: true, inEnhanced: true, purpose: "Tạo node mới và chèn vào vị trí đầu tiên của danh sách trong O(1)" },
    { name: "removeFirst()", returnType: "E", inBasic: true, inEnhanced: true, purpose: "Xóa node đầu tiên, cập nhật head = head.getNext() và trả về giá trị item đã xóa O(1)" },
    { name: "print()", returnType: "void", inBasic: true, inEnhanced: true, purpose: "Duyệt tuần tự từ head đến cuối để in toàn bộ các giá trị ra console O(n)" },
    { name: "contains(E item)", returnType: "boolean", inBasic: false, inEnhanced: true, purpose: "⭐ Tìm kiếm xem item có tồn tại trong danh sách hay không O(n)" },
    { name: "addAfter(ListNode<E> current, E item)", returnType: "void", inBasic: false, inEnhanced: true, purpose: "⭐ Chèn một phần tử mới vào ngay sau node current chỉ định" },
    { name: "removeAfter(ListNode<E> current)", returnType: "E", inBasic: false, inEnhanced: true, purpose: "⭐ Xóa node nằm liền sau node current và trả về item của node đó" },
    { name: "remove(E item)", returnType: "E", inBasic: false, inEnhanced: true, purpose: "⭐ Tìm và xóa phần tử đầu tiên có giá trị khớp với item O(n)" }
  ];

  // 3. Matrix Comparison Data (5 Classes)
  const classComparison = [
    {
      feature: "Loại Node sử dụng",
      bll: "ListNode (1 chiều)",
      ell: "ListNode (1 chiều)",
      tll: "ListNode (1 chiều)",
      cll: "ListNode (1 chiều)",
      dll: "DListNode (2 chiều: prev & next)"
    },
    {
      feature: "Thuộc tính nội bộ (Fields)",
      bll: "head, num_nodes",
      ell: "head, num_nodes",
      tll: "head, tail, num_nodes",
      cll: "tail, num_nodes (head = tail.next)",
      dll: "head, tail, num_nodes"
    },
    {
      feature: "Đặc điểm nút cuối (Tail node)",
      bll: "tail.next = null",
      ell: "tail.next = null",
      tll: "tail.next = null",
      cll: "🔄 tail.next = head (Khép kín)",
      dll: "tail.next = null (và tail.prev)"
    },
    {
      feature: "addFirst(item)",
      bll: "O(1)",
      ell: "O(1)",
      tll: "O(1)",
      cll: "O(1) (Nối sau tail, giữ tail)",
      dll: "O(1) (Nối cả prev và next)"
    },
    {
      feature: "addLast(item)",
      bll: "O(n)",
      ell: "O(n)",
      tll: "⚡ O(1) (Nhờ con trỏ tail)",
      cll: "⚡ O(1) (Nối sau tail, dời tail)",
      dll: "⚡ O(1) (Nhờ con trỏ tail)"
    },
    {
      feature: "removeFirst()",
      bll: "O(1)",
      ell: "O(1)",
      tll: "O(1)",
      cll: "O(1) (Xóa node tail.next)",
      dll: "O(1)"
    },
    {
      feature: "removeLast()",
      bll: "O(n)",
      ell: "O(n)",
      tll: "⚠️ O(n) (Phải tìm node áp chót)",
      cll: "⚠️ O(n) (Phải tìm node áp chót)",
      dll: "⚡ O(1) (Lấy ngay tail.prev!)"
    },
    {
      feature: "remove(curr) (Xóa chính nó)",
      bll: "❌ O(n)",
      ell: "❌ O(n) (Chỉ có removeAfter)",
      tll: "❌ O(n) (Chỉ có removeAfter)",
      cll: "❌ O(n) (Chỉ có removeAfter)",
      dll: "⚡ O(1) (Nối curr.prev với curr.next)"
    },
    {
      feature: "Duyệt ngược từ cuối về đầu",
      bll: "❌ Không thể",
      ell: "❌ Không thể",
      tll: "❌ Không thể",
      cll: "❌ Không thể",
      dll: "✅ Rất dễ dàng (qua con trỏ prev)"
    },
    {
      feature: "Chi phí bộ nhớ mỗi node",
      bll: "1 Reference (4B/8B)",
      ell: "1 Reference (4B/8B)",
      tll: "1 Reference (4B/8B)",
      cll: "1 Reference (4B/8B)",
      dll: "2 References (8B/16B - Gấp đôi)"
    },
    {
      feature: "Ứng dụng kinh điển",
      bll: "Stack ADT (LIFO)",
      ell: "Sorted List",
      tll: "Queue ADT (FIFO)",
      cll: "Round-Robin CPU Scheduler, Playlist",
      dll: "Trình duyệt Web Back/Forward, Text Editor"
    }
  ];

  // 4. Simulator Step Data (4 Scenarios)
  const simulatorScenarios = {
    addLast_tailed: {
      title: "1. TailedLinkedList: addLast(30) — Tuyến Tính O(1)",
      description: "Thao tác chèn node mới vào cuối danh sách liên kết có đuôi (TailedLinkedList). Quan sát việc nối `tail.setNext(newNode)` và cập nhật `tail = newNode` kết thúc bằng `null` trong thời gian hằng số O(1).",
      steps: [
        {
          stepIndex: 0,
          stepName: "Trạng thái ban đầu",
          explanation: "Danh sách hiện có 2 node: [10] (head) -> [20] (tail) -> null. Chuẩn bị chèn node mới [30].",
          codeSnippet: "// Chuẩn bị chèn giá trị 30 vào cuối list\npublic void addLast(E item) {",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isTail: false, addr: "0x100" },
            { id: "n2", val: 20, next: null, isHead: false, isTail: true, addr: "0x200" }
          ],
          newNode: null,
          headPtr: "n1",
          tailPtr: "n2",
          numNodes: 2
        },
        {
          stepIndex: 1,
          stepName: "Bước 1: Cấp phát ô nhớ ListNode mới",
          explanation: "Khởi tạo đối tượng `newNode = new ListNode<E>(30, null)` tại địa chỉ Heap 0x300.",
          codeSnippet: "    ListNode<E> newNode = new ListNode<>(item, null);",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isTail: false, addr: "0x100" },
            { id: "n2", val: 20, next: null, isHead: false, isTail: true, addr: "0x200" }
          ],
          newNode: { id: "n3", val: 30, next: null, addr: "0x300", isCreated: true },
          headPtr: "n1",
          tailPtr: "n2",
          numNodes: 2
        },
        {
          stepIndex: 2,
          stepName: "Bước 2: Nối đuôi cũ sang node mới",
          explanation: "Kiểm tra `if (!isEmpty())`: Thực hiện `tail.setNext(newNode)` — node [20] trỏ tới [30].",
          codeSnippet: "    if (isEmpty()) {\n        head = tail = newNode;\n    } else {\n        tail.setNext(newNode); // Nối đuôi cũ sang node mới",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isTail: false, addr: "0x100" },
            { id: "n2", val: 20, next: "n3", isHead: false, isTail: true, addr: "0x200" },
            { id: "n3", val: 30, next: null, isHead: false, isTail: false, addr: "0x300" }
          ],
          newNode: null,
          headPtr: "n1",
          tailPtr: "n2",
          numNodes: 2
        },
        {
          stepIndex: 3,
          stepName: "Bước 3: Dời con trỏ tail và tăng num_nodes",
          explanation: "Cập nhật `tail = newNode` ([30]), tăng `num_nodes++` lên 3. Hoàn tất trong O(1)!",
          codeSnippet: "        tail = newNode;        // Dời con trỏ tail sang node mới\n    }\n    num_nodes++;\n}",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isTail: false, addr: "0x100" },
            { id: "n2", val: 20, next: "n3", isHead: false, isTail: false, addr: "0x200" },
            { id: "n3", val: 30, next: null, isHead: false, isTail: true, addr: "0x300" }
          ],
          newNode: null,
          headPtr: "n1",
          tailPtr: "n3",
          numNodes: 3
        }
      ]
    },
    addLast_circular: {
      title: "2. CircularLinkedList: addLast(40) — Vòng Tròn Khép Kín",
      description: "Thao tác chèn vào danh sách vòng tròn. Node mới được chèn sau `tail`, nối ngược về `head` (`newNode.next = tail.next`), sau đó dời `tail = newNode`.",
      steps: [
        {
          stepIndex: 0,
          stepName: "Trạng thái ban đầu (Vòng tròn)",
          explanation: "Danh sách vòng hiện có: [10] (head) -> [20] -> [30] (tail) -> trỏ ngược về [10]. Chuẩn bị chèn [40].",
          codeSnippet: "public void addLast(E item) {",
          nodes: [
            { id: "c1", val: 10, next: "c2", isHead: true, isTail: false, addr: "0x100" },
            { id: "c2", val: 20, next: "c3", isHead: false, isTail: false, addr: "0x200" },
            { id: "c3", val: 30, next: "c1 (Vòng lại Head)", isHead: false, isTail: true, addr: "0x300", isCircularBack: true }
          ],
          newNode: null,
          tailPtr: "c3",
          numNodes: 3
        },
        {
          stepIndex: 1,
          stepName: "Bước 1: Tạo newNode trỏ sẵn tới Head (tail.next)",
          explanation: "Tạo `newNode` chứa giá trị 40 và cho `newNode.next = tail.getNext()` (tức node [10]).",
          codeSnippet: "    ListNode<E> newNode = new ListNode<>(item, tail.getNext());",
          nodes: [
            { id: "c1", val: 10, next: "c2", isHead: true, isTail: false, addr: "0x100" },
            { id: "c2", val: 20, next: "c3", isHead: false, isTail: false, addr: "0x200" },
            { id: "c3", val: 30, next: "c1 (Vòng lại Head)", isHead: false, isTail: true, addr: "0x300", isCircularBack: true }
          ],
          newNode: { id: "c4", val: 40, next: "c1 (Trỏ sẵn tới Head)", addr: "0x400", isCreated: true },
          tailPtr: "c3",
          numNodes: 3
        },
        {
          stepIndex: 2,
          stepName: "Bước 2: Nối tail cũ sang newNode và dời tail",
          explanation: "Nối `tail.setNext(newNode)` ([30] trỏ tới [40]), sau đó dời `tail = newNode` ([40]). Danh sách khép kín hoàn hảo!",
          codeSnippet: "    tail.setNext(newNode);\n    tail = newNode; // Dời tail sang node mới\n    num_nodes++;\n}",
          nodes: [
            { id: "c1", val: 10, next: "c2", isHead: true, isTail: false, addr: "0x100" },
            { id: "c2", val: 20, next: "c3", isHead: false, isTail: false, addr: "0x200" },
            { id: "c3", val: 30, next: "c4", isHead: false, isTail: false, addr: "0x300" },
            { id: "c4", val: 40, next: "c1 (Vòng lại Head)", isHead: false, isTail: true, addr: "0x400", isCircularBack: true }
          ],
          newNode: null,
          tailPtr: "c4",
          numNodes: 4
        }
      ]
    },
    remove_doubly: {
      title: "3. DoublyLinkedList: remove(curr) — Xóa Trực Tiếp O(1)",
      description: "Thao tác xóa chính node `curr` trong danh sách liên kết đôi mà không cần duyệt tìm node trước. Nhờ có `prev` và `next`, chỉ cần nối `curr.prev.next = curr.next` và `curr.next.prev = curr.prev`.",
      steps: [
        {
          stepIndex: 0,
          stepName: "Trạng thái ban đầu (2 chiều)",
          explanation: "Danh sách đôi: [10] <-> [20] (curr cần xóa) <-> [30].",
          codeSnippet: "public void remove(DListNode<E> curr) {",
          nodes: [
            { id: "d1", val: 10, prev: null, next: "d2", isHead: true, addr: "0x100" },
            { id: "d2", val: 20, prev: "d1", next: "d3", isCurr: true, addr: "0x200" },
            { id: "d3", val: 30, prev: "d2", next: null, isTail: true, addr: "0x300" }
          ],
          numNodes: 3
        },
        {
          stepIndex: 1,
          stepName: "Bước 1: Bắc cầu nối qua mặt curr",
          explanation: "Gán `curr.prev.setNext(curr.getNext())` (node [10] trỏ next sang [30]) và `curr.next.setPrev(curr.getPrev())` (node [30] trỏ prev về [10]).",
          codeSnippet: "    curr.getPrev().setNext(curr.getNext());\n    curr.getNext().setPrev(curr.getPrev());",
          nodes: [
            { id: "d1", val: 10, prev: null, next: "d3 (Bắc cầu qua 20)", isHead: true, addr: "0x100" },
            { id: "d2", val: 20, prev: "d1", next: "d3", isCurr: true, isDeleted: true, addr: "0x200" },
            { id: "d3", val: 30, prev: "d1 (Bắc cầu về 10)", next: null, isTail: true, addr: "0x300" }
          ],
          numNodes: 3
        },
        {
          stepIndex: 2,
          stepName: "Bước 2: Cô lập curr và giảm num_nodes",
          explanation: "Hủy liên kết `curr.setNext(null); curr.setPrev(null);`, giảm `num_nodes--`. Node [20] được bộ gom rác Garbage Collector thu hồi. Hoàn tất O(1)!",
          codeSnippet: "    curr.setNext(null);\n    curr.setPrev(null);\n    num_nodes--;\n}",
          nodes: [
            { id: "d1", val: 10, prev: null, next: "d3", isHead: true, addr: "0x100" },
            { id: "d3", val: 30, prev: "d1", next: null, isTail: true, addr: "0x300" }
          ],
          numNodes: 2
        }
      ]
    },
    addAfter_ell: {
      title: "4. EnhancedLinkedList: addAfter(curr, 20) — Chèn Giữa Đơn",
      description: "Thao tác chèn node mới ngay sau node `curr` trong EnhancedLinkedList (danh sách đơn).",
      steps: [
        {
          stepIndex: 0,
          stepName: "Trạng thái ban đầu",
          explanation: "Danh sách đơn: [10] (head/curr) -> [30]. Muốn chèn [20] vào ngay sau [10].",
          codeSnippet: "public void addAfter(ListNode<E> current, E item) {",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isCurr: true, addr: "0x100" },
            { id: "n2", val: 30, next: null, isHead: false, isCurr: false, addr: "0x200" }
          ],
          newNode: null,
          headPtr: "n1",
          numNodes: 2
        },
        {
          stepIndex: 1,
          stepName: "Bước 1: Tạo node mới trỏ sẵn tới current.getNext()",
          explanation: "Tạo `newNode` chứa giá trị 20 và con trỏ `next` trỏ trực tiếp tới node [30] (tức `current.getNext()`).",
          codeSnippet: "    if (current != null) {\n        ListNode<E> newNode = new ListNode<>(item, current.getNext());",
          nodes: [
            { id: "n1", val: 10, next: "n2", isHead: true, isCurr: true, addr: "0x100" },
            { id: "n2", val: 30, next: null, isHead: false, isCurr: false, addr: "0x200" }
          ],
          newNode: { id: "n3", val: 20, next: "n2", addr: "0x300", isCreated: true },
          headPtr: "n1",
          numNodes: 2
        },
        {
          stepIndex: 2,
          stepName: "Bước 2: Trỏ lại current.setNext(newNode)",
          explanation: "Cập nhật `current.setNext(newNode)` để node [10] trỏ tới [20], sau đó [20] trỏ tới [30]. Tăng `num_nodes++` lên 3.",
          codeSnippet: "        current.setNext(newNode);\n        num_nodes++;\n    }\n}",
          nodes: [
            { id: "n1", val: 10, next: "n3", isHead: true, isCurr: true, addr: "0x100" },
            { id: "n3", val: 20, next: "n2", isHead: false, isCurr: false, addr: "0x300" },
            { id: "n2", val: 30, next: null, isHead: false, isCurr: false, addr: "0x200" }
          ],
          newNode: null,
          headPtr: "n1",
          numNodes: 3
        }
      ]
    }
  };

  const currentSim = simulatorScenarios[simOperation];
  const activeSimStep = currentSim.steps[simStep] || currentSim.steps[0];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 sm:p-8 text-slate-800 shadow-xl relative overflow-hidden font-sans">
      {/* Decorative Orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-200/25 blur-[90px]" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-blue-200/25 blur-[90px]" />

      {/* Main Studio Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/70 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800 border border-indigo-200 uppercase tracking-wider">
                DSA Architecture Master Studio
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                All 5 Variations Deep Dive
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Phân Biệt Toàn Diện 5 Biến Thể LinkedList (BLL • ELL • TLL • CLL • DLL)
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-indigo-900 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" />
          <span>JAVA OOP ARCHITECTURE: 100% CANONICAL</span>
        </div>
      </div>

      {/* Subtitle / Context Note */}
      <p className="relative z-10 mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
        Khám phá bản chất cốt lõi từ <strong>Viên gạch cấu tạo (`ListNode` / `DListNode`)</strong> đến <strong>Hợp đồng trừu tượng (`ListInterface` / `EnhancedListInterface`)</strong> và <strong>5 biến thể danh sách cụ thể (`BasicLinkedList`, `EnhancedLinkedList`, `TailedLinkedList`, `CircularLinkedList`, `DoublyLinkedList`)</strong> theo chuẩn giáo trình <em>Walls & Mirrors</em>.
      </p>

      {/* 5 Main Navigation Tabs */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {[
          { id: "quick_defs", label: "1. Đúc Kết 9 Định Nghĩa Ngắn", icon: Sparkles, color: "text-amber-600" },
          { id: "oop_hierarchy", label: "2. Cây Phả Hệ OOP & Interface", icon: GitBranch, color: "text-indigo-600" },
          { id: "memory_anatomy", label: "3. Giải Phẫu Ô Nhớ Heap", icon: Cpu, color: "text-purple-600" },
          { id: "matrix_compare", label: "4. Ma Trận So Sánh 5 Class", icon: TableProperties, color: "text-cyan-600" },
          { id: "pointer_simulator", label: "5. Mô Phỏng Con Trỏ Động", icon: Play, color: "text-emerald-600" }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-start rounded-2xl border p-3 text-left transition-all ${
                isActive
                  ? "border-indigo-500 bg-white shadow-md ring-2 ring-indigo-400/40 font-semibold"
                  : "border-slate-200 bg-slate-50/80 hover:bg-white text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <Icon className={`h-4 w-4 ${isActive ? tab.color : "text-slate-500"}`} />
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
              </div>
              <span className={`mt-2 text-xs font-bold ${isActive ? "text-indigo-950" : "text-slate-700"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ============================================================
          TAB 1: QUICK SHORT DEFINITIONS (9 ĐỊNH NGHĨA NGẮN GỌN)
          ============================================================ */}
      {activeTab === "quick_defs" && (
        <div className="relative z-10 mt-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>⭐ Bộ Thẻ Đúc Kết Cốt Lõi 9 Khái Niệm Trong 1-2 Dòng (Dễ Nhớ - Ôn Thi Nhanh)</span>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {quickDefinitions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-indigo-700 border border-slate-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-extrabold text-slate-900 font-mono">{item.name}</h4>
                          <span className={`inline-block rounded px-1.5 py-0.2 font-mono text-[9px] font-bold border ${item.badgeColor}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-700 leading-relaxed">
                      {item.shortDef}
                    </p>
                  </div>

                  <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-2.5 text-[11px]">
                    <div className="flex items-center gap-1.5 text-indigo-900 font-medium">
                      <span className="text-slate-400">Hình ảnh:</span>
                      <span>{item.analogy}</span>
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-200/60 overflow-x-auto">
                      <strong>Thuộc tính:</strong> {item.fields}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Cheat Rule Banner */}
          <div className="mt-4 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-blue-50 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-950 uppercase tracking-wider mb-2">
              <Compass className="h-4 w-4 text-indigo-600" />
              <span>Quy Tắc Vàng Phân Biệt Siêu Nhanh Trong Phòng Thi:</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs text-slate-700">
              <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                <strong className="text-indigo-900 block mb-1">1. ListNode vs DListNode:</strong>
                ListNode chỉ có 1 con trỏ <code>next</code> (4B). DListNode có cả <code>prev</code> và <code>next</code> (8B) để duyệt 2 chiều.
              </div>
              <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                <strong className="text-indigo-900 block mb-1">2. ELL vs DLL:</strong>
                ELL vẫn là danh sách đơn (chỉ có <code>head</code>). DLL là danh sách đôi (có <code>prev</code>), xóa node hiện tại $O(1)$!
              </div>
              <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                <strong className="text-indigo-900 block mb-1">3. TLL vs CLL:</strong>
                TLL là đường thẳng (`tail.next = null`). CLL là vòng tròn (`tail.next = head`), chỉ cần 1 con trỏ `tail` để quản lý cả 2 đầu!
              </div>
              <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                <strong className="text-indigo-900 block mb-1">4. Bẫy removeLast():</strong>
                BLL, ELL, TLL, CLL đều mất $O(n)$ khi removeLast. Duy nhất <strong>DoublyLinkedList</strong> đạt $O(1)$ nhờ con trỏ `prev`!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: OOP HIERARCHY & INTERFACE CONTRACTS
          ============================================================ */}
      {activeTab === "oop_hierarchy" && (
        <div className="relative z-10 mt-6 space-y-6">
          {/* Visual UML Hierarchy Tree */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Sơ Đồ Phả Hệ Lớp & Mối Quan Hệ (UML Architecture)</h3>
                <p className="text-xs text-slate-500">Mối quan hệ Hiện thực hóa (implements) và Chứa gộp (has-a composition)</p>
              </div>
              <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-700 border border-indigo-200">
                Abstraction & Information Hiding
              </span>
            </div>

            {/* Tree Graphical Representation */}
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {/* Level 1: Building Block */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                <div className="flex items-center gap-2 font-bold text-xs text-blue-950 uppercase tracking-wider">
                  <Box className="h-4 w-4 text-blue-600" />
                  <span>1. Building Blocks (Viên Gạch)</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-white p-3 border border-blue-200 shadow-sm font-mono text-xs">
                    <strong className="text-blue-900">class ListNode&lt;E&gt;</strong>
                    <div className="mt-1 text-[11px] text-slate-600 font-sans">
                      • <code>E item</code> (Dữ liệu)<br/>
                      • <code>ListNode&lt;E&gt; next</code> (Nút sau)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-purple-200 shadow-sm font-mono text-xs">
                    <strong className="text-purple-900">class DListNode&lt;E&gt;</strong>
                    <div className="mt-1 text-[11px] text-slate-600 font-sans">
                      • <code>E item</code><br/>
                      • <code>DListNode&lt;E&gt; prev, next</code> (2 chiều)
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-blue-900 font-medium italic">
                  ➡️ Các class LinkedList đều <strong>has-a (chứa)</strong> các nút này qua `head` / `tail`.
                </div>
              </div>

              {/* Level 2: Interfaces */}
              <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-4">
                <div className="flex items-center gap-2 font-bold text-xs text-cyan-950 uppercase tracking-wider">
                  <BookOpen className="h-4 w-4 text-cyan-600" />
                  <span>2. ADT Interfaces (Hợp Đồng)</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-white p-3 border border-cyan-300 shadow-sm font-mono text-xs">
                    <strong className="text-cyan-900">&lt;&lt;interface&gt;&gt; ListInterface&lt;E&gt;</strong>
                    <div className="mt-1 text-[11px] text-slate-600 font-sans">
                      6 phương thức cơ bản ở đầu: isEmpty, size, getFirst, addFirst, removeFirst, print.
                    </div>
                  </div>
                  <div className="text-center text-xs font-bold text-indigo-600">
                    ▲ extends (Kế thừa hợp đồng)
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-emerald-300 shadow-sm font-mono text-xs">
                    <strong className="text-emerald-900">&lt;&lt;interface&gt;&gt; EnhancedListInterface&lt;E&gt;</strong>
                    <div className="mt-1 text-[11px] text-slate-600 font-sans">
                      Kế thừa ListInterface + Bổ sung: contains, addAfter, removeAfter, remove.
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 3: Concrete Implementations */}
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4">
                <div className="flex items-center gap-2 font-bold text-xs text-indigo-950 uppercase tracking-wider">
                  <Cpu className="h-4 w-4 text-indigo-600" />
                  <span>3. 5 Concrete Classes</span>
                </div>
                <div className="mt-3 space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
                  <div className="rounded-lg bg-white p-2 border border-amber-300 shadow-sm text-xs">
                    <div className="font-mono font-bold text-amber-900">BasicLinkedList&lt;E&gt;</div>
                    <div className="text-[10px] text-slate-500">implements ListInterface | Fields: head</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-teal-300 shadow-sm text-xs">
                    <div className="font-mono font-bold text-teal-900">EnhancedLinkedList&lt;E&gt;</div>
                    <div className="text-[10px] text-slate-500">implements EnhancedListInterface | Fields: head</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-rose-300 shadow-sm text-xs">
                    <div className="font-mono font-bold text-rose-900">TailedLinkedList&lt;E&gt;</div>
                    <div className="text-[10px] text-slate-500">implements EnhancedListInterface | Fields: head, tail</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-indigo-300 shadow-sm text-xs">
                    <div className="font-mono font-bold text-indigo-900">CircularLinkedList&lt;E&gt;</div>
                    <div className="text-[10px] text-slate-500">Vòng tròn | Fields: tail (tail.next = head)</div>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-fuchsia-300 shadow-sm text-xs">
                    <div className="font-mono font-bold text-fuchsia-900">DoublyLinkedList&lt;E&gt;</div>
                    <div className="text-[10px] text-slate-500">DListNode 2 chiều | Fields: head, tail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interface Contract Methods Table */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Bảng So Sánh Hợp Đồng Phương Thức (Contract Comparison)</h3>
              <span className="text-xs text-slate-500 font-mono">ListInterface vs EnhancedListInterface</span>
            </div>

            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-indigo-950 font-mono border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">Chữ ký phương thức (Method Signature)</th>
                    <th className="p-2.5 text-center">ListInterface</th>
                    <th className="p-2.5 text-center">EnhancedListInterface</th>
                    <th className="p-2.5">Mục đích & Ý nghĩa nghiệp vụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {interfaceMethods.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-2.5 font-mono font-bold text-indigo-900">
                        {m.returnType} {m.name}
                      </td>
                      <td className="p-2.5 text-center">
                        {m.inBasic ? (
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-bold text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="h-3 w-3" /> Có
                          </span>
                        ) : (
                          <span className="text-slate-400 font-mono">—</span>
                        )}
                      </td>
                      <td className="p-2.5 text-center">
                        <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="h-3 w-3" /> Có
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-600">{m.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 3: MEMORY ANATOMY (GIẢI PHẪU Ô NHỚ HEAP)
          ============================================================ */}
      {activeTab === "memory_anatomy" && (
        <div className="relative z-10 mt-6 space-y-6">
          {/* Sub-selector 4 Memory Models */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Giải Phẫu Cấu Trúc Khối Ô Nhớ Trong Heap</h3>
              <p className="text-xs text-slate-500">So sánh cơ chế phân bổ byte và con trỏ giữa Nút đơn, Nút đôi, Danh sách vòng và Danh sách đôi</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "singly", label: "1. ListNode (Nút đơn)" },
                { id: "doubly", label: "2. DListNode (Nút đôi)" },
                { id: "circular", label: "3. Circular List (Vòng)" },
                { id: "doubly_list", label: "4. Doubly List (2 Chiều)" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedMemoryView(btn.id)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    selectedMemoryView === btn.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Memory Diagram */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Visual Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-slate-100 pb-2.5">
                <span>Mô Hình Vật Lý Trong Bộ Nhớ Heap</span>
                <span className="font-mono text-[10px] text-slate-500 uppercase">
                  {selectedMemoryView} architecture
                </span>
              </div>

              {selectedMemoryView === "singly" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border-2 border-blue-400 bg-blue-50/40 p-4 shadow-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-blue-900 font-bold mb-2">
                      <span>Địa chỉ Heap: @0x10A4</span>
                      <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded">ListNode&lt;Integer&gt;</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-blue-300 bg-white p-3 text-center">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Field 1: item</div>
                        <div className="text-lg font-extrabold text-blue-900 mt-1">42</div>
                        <div className="text-[9px] text-slate-500 font-mono mt-1">data</div>
                      </div>
                      <div className="rounded-xl border border-cyan-300 bg-cyan-50 p-3 text-center">
                        <div className="text-[10px] font-mono text-cyan-800 uppercase">Field 2: next</div>
                        <div className="text-xs font-extrabold text-cyan-900 mt-1 font-mono">@0x20F8 &rarr;</div>
                        <div className="text-[9px] text-cyan-700 font-mono mt-1">4B/8B reference</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-blue-950 block mb-1">💡 Đặc điểm kỹ thuật:</strong>
                    • Chỉ có <strong>1 con trỏ forward (`next`)</strong> trỏ tới node tiếp theo.<br/>
                    • Tiết kiệm bộ nhớ nhất (dùng cho BLL, ELL, TLL, CLL).
                  </div>
                </div>
              )}

              {selectedMemoryView === "doubly" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border-2 border-purple-400 bg-purple-50/40 p-4 shadow-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-purple-900 font-bold mb-2">
                      <span>Địa chỉ Heap: @0x20F8</span>
                      <span className="text-purple-700 bg-purple-100 px-2 py-0.5 rounded">DListNode&lt;Integer&gt;</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-xl border border-purple-300 bg-purple-50 p-2.5 text-center">
                        <div className="text-[10px] font-mono text-purple-800 uppercase">prev</div>
                        <div className="text-xs font-extrabold text-purple-900 mt-1 font-mono">&larr; @0x10A4</div>
                        <div className="text-[9px] text-purple-700 font-mono mt-1">4B ref</div>
                      </div>
                      <div className="rounded-xl border border-slate-300 bg-white p-2.5 text-center">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">item</div>
                        <div className="text-base font-extrabold text-slate-900 mt-1">99</div>
                        <div className="text-[9px] text-slate-500 font-mono mt-1">data</div>
                      </div>
                      <div className="rounded-xl border border-cyan-300 bg-cyan-50 p-2.5 text-center">
                        <div className="text-[10px] font-mono text-cyan-800 uppercase">next</div>
                        <div className="text-xs font-extrabold text-cyan-900 mt-1 font-mono">@0x30B2 &rarr;</div>
                        <div className="text-[9px] text-cyan-700 font-mono mt-1">4B ref</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-purple-950 block mb-1">💡 Đặc điểm kỹ thuật:</strong>
                    • Có <strong>2 con trỏ 2 chiều (`prev` & `next`)</strong>, cho phép xóa node hiện tại O(1).<br/>
                    • Tốn gấp đôi bộ nhớ cho con trỏ (dùng cho DoublyLinkedList).
                  </div>
                </div>
              )}

              {selectedMemoryView === "circular" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border-2 border-indigo-400 bg-indigo-50/40 p-4 shadow-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-indigo-900 font-bold mb-2">
                      <span>Cấu trúc Vòng Tròn Khép Kín (Circular Loop)</span>
                      <span className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">tail.next = head</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-xl border border-indigo-200 font-mono text-xs text-center">
                      <div className="p-2 rounded bg-blue-50 border border-blue-200">
                        <div className="text-[9px] text-blue-700 font-bold">HEAD (@0x100)</div>
                        <div className="font-extrabold text-blue-950 mt-0.5">[10 | &rarr;]</div>
                      </div>
                      <div className="text-indigo-400 font-bold">➔</div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="text-[9px] text-slate-500 font-bold">NODE (@0x200)</div>
                        <div className="font-extrabold text-slate-900 mt-0.5">[20 | &rarr;]</div>
                      </div>
                      <div className="text-indigo-400 font-bold">➔</div>
                      <div className="p-2 rounded bg-rose-50 border border-rose-200">
                        <div className="text-[9px] text-rose-700 font-bold">TAIL (@0x300)</div>
                        <div className="font-extrabold text-rose-950 mt-0.5">[30 | &rarr; 0x100]</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-indigo-50/80 p-3 border border-indigo-200 text-xs text-indigo-950 leading-relaxed">
                    <strong className="block mb-1 font-bold">🔄 Điểm mấu chốt của Circular List:</strong>
                    • Node cuối (`tail`) trỏ ngược về node đầu (`head` = `tail.next`). Không có giá trị `null`.<br/>
                    • <strong>Chỉ cần lưu 1 biến `tail`</strong>: truy cập đuôi qua `tail`, truy cập đầu qua `tail.next` đều là $O(1)$!
                  </div>
                </div>
              )}

              {selectedMemoryView === "doubly_list" && (
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border-2 border-fuchsia-400 bg-fuchsia-50/40 p-4 shadow-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-fuchsia-900 font-bold mb-2">
                      <span>Chuỗi Liên Kết Đôi (Doubly Linked Chain)</span>
                      <span className="text-fuchsia-700 bg-fuchsia-100 px-2 py-0.5 rounded">2-Way References</span>
                    </div>

                    <div className="flex items-center justify-between gap-1.5 p-3 bg-white rounded-xl border border-fuchsia-200 font-mono text-xs text-center">
                      <div className="p-2 rounded bg-blue-50 border border-blue-200">
                        <div className="text-[9px] text-blue-700 font-bold">HEAD</div>
                        <div className="text-[10px] text-slate-400">[null | 10 | &rarr;]</div>
                      </div>
                      <div className="text-fuchsia-500 font-bold text-xs">⇄</div>
                      <div className="p-2 rounded bg-purple-50 border border-purple-200">
                        <div className="text-[9px] text-purple-700 font-bold">NODE</div>
                        <div className="text-[10px] text-purple-950">[&larr; | 20 | &rarr;]</div>
                      </div>
                      <div className="text-fuchsia-500 font-bold text-xs">⇄</div>
                      <div className="p-2 rounded bg-rose-50 border border-rose-200">
                        <div className="text-[9px] text-rose-700 font-bold">TAIL</div>
                        <div className="text-[10px] text-slate-400">[&larr; | 30 | null]</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-fuchsia-50/80 p-3 border border-fuchsia-200 text-xs text-fuchsia-950 leading-relaxed">
                    <strong className="block mb-1 font-bold">⚡ Ưu thế vượt trội của Doubly List:</strong>
                    • Thao tác `removeLast()` đạt <strong>$O(1)$</strong> vì lấy được ngay `tail.prev` mà không cần duyệt từ `head`.<br/>
                    • Có thể xóa node bất kỳ trong $O(1)$ khi đã có tham chiếu con trỏ.
                  </div>
                </div>
              )}
            </div>

            {/* Code Studio Box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-slate-200">
                    {selectedMemoryView === "singly" && "ListNode.java (Singly Node)"}
                    {selectedMemoryView === "doubly" && "DListNode.java (Doubly Node)"}
                    {selectedMemoryView === "circular" && "CircularLinkedList.java (Trick 1 Con Trỏ Tail)"}
                    {selectedMemoryView === "doubly_list" && "DoublyLinkedList.java (2-Way Chain)"}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">JAVA SOURCE</span>
              </div>

              <pre className="mt-3 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto">
{selectedMemoryView === "singly" && `class ListNode <E> {
    private E item;
    private ListNode<E> next;

    public ListNode(E item, ListNode<E> next) {
        this.item = item;
        this.next = next;
    }
    public E getElement() { return item; }
    public ListNode<E> getNext() { return next; }
    public void setElement(E item) { this.item = item; }
    public void setNext(ListNode<E> next) { this.next = next; }
}`}
{selectedMemoryView === "doubly" && `class DListNode <E> {
    private E item;
    private DListNode<E> prev;
    private DListNode<E> next;

    public DListNode(E item, DListNode<E> p, DListNode<E> n) {
        this.item = item;
        this.prev = p;
        this.next = n;
    }
    public E getElement() { return item; }
    public DListNode<E> getPrev() { return prev; }
    public DListNode<E> getNext() { return next; }
    public void setPrev(DListNode<E> p) { this.prev = p; }
    public void setNext(DListNode<E> n) { this.next = n; }
}`}
{selectedMemoryView === "circular" && `class CircularLinkedList <E> {
    /* Kỹ thuật tối ưu: Chỉ cần 1 con trỏ tail */
    private ListNode<E> tail = null;
    private int num_nodes = 0;

    public E getFirst() { return tail.getNext().getElement(); } // head = tail.next
    public E getLast()  { return tail.getElement(); }

    public void addFirst(E item) {
        if (tail == null) {
            tail = new ListNode<>(item, null);
            tail.setNext(tail); // Tự trỏ vào chính nó
        } else {
            tail.setNext(new ListNode<>(item, tail.getNext()));
        }
        num_nodes++;
    }
}`}
{selectedMemoryView === "doubly_list" && `class DoublyLinkedList <E> {
    private DListNode<E> head = null;
    private DListNode<E> tail = null;
    private int num_nodes = 0;

    /* Xóa node curr trực tiếp trong O(1) */
    public void remove(DListNode<E> curr) {
        if (curr.getPrev() != null) curr.getPrev().setNext(curr.getNext());
        else head = curr.getNext();

        if (curr.getNext() != null) curr.getNext().setPrev(curr.getPrev());
        else tail = curr.getPrev();
        num_nodes--;
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 4: MATRIX COMPARISON 5 CLASSES
          ============================================================ */}
      {activeTab === "matrix_compare" && (
        <div className="relative z-10 mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Ma Trận Đối Đầu Toàn Diện 5 Biến Thể LinkedList</h3>
                <p className="text-xs text-slate-500">So sánh thuộc tính, cơ chế liên kết, độ phức tạp thời gian và ứng dụng thực tiễn</p>
              </div>
              <span className="rounded-md bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800 border border-amber-200">
                5-Variation Master Matrix
              </span>
            </div>

            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-indigo-950 font-mono border-b border-slate-200">
                  <tr>
                    <th className="p-3">Tiêu chí so sánh</th>
                    <th className="p-3 text-amber-900 bg-amber-50/60">Basic (BLL)</th>
                    <th className="p-3 text-teal-900 bg-teal-50/60">Enhanced (ELL)</th>
                    <th className="p-3 text-rose-900 bg-rose-50/60">Tailed (TLL)</th>
                    <th className="p-3 text-indigo-900 bg-indigo-50/60">Circular (CLL)</th>
                    <th className="p-3 text-fuchsia-900 bg-fuchsia-50/60">Doubly (DLL)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {classComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900 bg-slate-50/40">{row.feature}</td>
                      <td className="p-3 font-mono text-amber-900">{row.bll}</td>
                      <td className="p-3 font-mono text-teal-900">{row.ell}</td>
                      <td className="p-3 font-mono text-rose-900">{row.tll}</td>
                      <td className="p-3 font-mono text-indigo-900">{row.cll}</td>
                      <td className="p-3 font-mono text-fuchsia-900 font-semibold">{row.dll}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exam Gotcha Warning Box */}
          <div className="rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-amber-50 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider mb-2">
              <AlertTriangle className="h-4 w-4 text-rose-600" />
              <span>3 Bẫy Thi Trọng Tâm Cần Thuộc Lòng:</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 text-xs text-slate-700">
              <div className="rounded-xl bg-white p-3 border border-rose-200 shadow-sm">
                <strong className="text-rose-950 block mb-1">1. TLL vs removeLast():</strong>
                Dù TLL có con trỏ <code>tail</code>, <code>removeLast()</code> vẫn mất <strong>$O(n)$</strong> vì không có con trỏ trỏ ngược về node áp chót.
              </div>
              <div className="rounded-xl bg-white p-3 border border-rose-200 shadow-sm">
                <strong className="text-rose-950 block mb-1">2. CLL và vòng lặp vô tận:</strong>
                Trong danh sách vòng, không bao giờ kiểm tra <code>curr != null</code> vì sẽ bị lặp vô tận! Phải kiểm tra <code>curr == head</code>.
              </div>
              <div className="rounded-xl bg-white p-3 border border-rose-200 shadow-sm">
                <strong className="text-rose-950 block mb-1">3. Doubly List & O(1) Delete:</strong>
                Chỉ có <strong>DoublyLinkedList</strong> mới xóa được chính node `curr` trong <strong>$O(1)$</strong> mà không cần biết node phía trước!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: LIVE POINTER STEP SIMULATOR (4 SCENARIOS)
          ============================================================ */}
      {activeTab === "pointer_simulator" && (
        <div className="relative z-10 mt-6 space-y-6">
          {/* Scenario Selector & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "addLast_tailed", label: "1. TLL: addLast(30) O(1)" },
                { id: "addLast_circular", label: "2. CLL: addLast(40) Vòng" },
                { id: "remove_doubly", label: "3. DLL: remove(20) 2 Chiều O(1)" },
                { id: "addAfter_ell", label: "4. ELL: addAfter(curr, 20)" }
              ].map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSimOperation(sc.id);
                    setSimStep(0);
                  }}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    simOperation === sc.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </div>

            {/* Step Stepper Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSimStep((prev) => Math.max(0, prev - 1))}
                disabled={simStep === 0}
                className="flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 transition-all border border-slate-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Bước Trước
              </button>
              <span className="font-mono text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                Bước {simStep + 1} / {currentSim.steps.length}
              </span>
              <button
                onClick={() => setSimStep((prev) => Math.min(currentSim.steps.length - 1, prev + 1))}
                disabled={simStep === currentSim.steps.length - 1}
                className="flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-40 transition-all shadow-sm"
              >
                Bước Kế
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Operation Description */}
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
            <h4 className="text-sm font-bold text-indigo-950">{currentSim.title}</h4>
            <p className="mt-1 text-xs text-indigo-900/80 leading-relaxed">{currentSim.description}</p>
          </div>

          {/* Visual Simulation Canvas */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Visual Linked Nodes Render */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="font-bold text-xs text-slate-900">
                      {activeSimStep.stepName}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-slate-500">
                    num_nodes: <strong className="text-indigo-600">{activeSimStep.numNodes}</strong>
                  </div>
                </div>

                {/* Nodes Chain Visualizer */}
                <div className="mt-6 flex flex-wrap items-center gap-3 min-h-[120px] p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  {activeSimStep.nodes.map((node, idx) => (
                    <React.Fragment key={node.id}>
                      <div className={`relative flex flex-col items-center ${node.isDeleted ? "opacity-40 line-through" : ""}`}>
                        {/* Pointer Tags Top */}
                        <div className="flex gap-1 mb-1.5 min-h-[18px]">
                          {node.isHead && (
                            <span className="rounded bg-indigo-600 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                              HEAD ⬇️
                            </span>
                          )}
                          {node.isTail && (
                            <span className="rounded bg-rose-600 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                              TAIL ⬇️
                            </span>
                          )}
                          {node.isCurr && (
                            <span className="rounded bg-teal-600 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                              CURR ⬇️
                            </span>
                          )}
                        </div>

                        {/* Node Card */}
                        <div className={`flex items-center rounded-xl border-2 ${node.isDeleted ? "border-red-300 bg-red-50" : "border-indigo-400 bg-white"} shadow-sm overflow-hidden font-mono text-xs`}>
                          {node.prev !== undefined && (
                            <div className="px-2 py-2 text-[9px] text-purple-700 bg-purple-50 border-r border-purple-200">
                              {node.prev ? "&larr;" : "null"}
                            </div>
                          )}
                          <div className="bg-indigo-50 px-3 py-2 font-bold text-indigo-950 border-r border-indigo-200">
                            {node.val}
                          </div>
                          <div className="px-2 py-2 text-[10px] text-slate-400 bg-slate-50">
                            {node.next ? (node.isCircularBack ? "🔄 Head" : "next &rarr;") : "null"}
                          </div>
                        </div>

                        {/* Address Tag Bottom */}
                        <span className="mt-1 font-mono text-[9px] text-slate-400">{node.addr}</span>
                      </div>

                      {/* Arrow between nodes */}
                      {idx < activeSimStep.nodes.length - 1 && (
                        <div className="text-indigo-400 font-bold text-sm">
                          {node.prev !== undefined ? "⇄" : "➔"}
                        </div>
                      )}
                    </React.Fragment>
                  ))}

                  {/* Temporary Created NewNode */}
                  {activeSimStep.newNode && (
                    <div className="ml-3 p-2 rounded-xl border-2 border-dashed border-emerald-500 bg-emerald-50/60 animate-pulse">
                      <span className="block text-[9px] font-bold text-emerald-800 uppercase mb-1">
                        newNode (mới tạo)
                      </span>
                      <div className="flex items-center rounded-lg border border-emerald-400 bg-white font-mono text-xs">
                        <div className="bg-emerald-100 px-2.5 py-1.5 font-bold text-emerald-950">
                          {activeSimStep.newNode.val}
                        </div>
                        <div className="px-2 py-1.5 text-[9px] text-slate-400">
                          {activeSimStep.newNode.next ? (activeSimStep.newNode.next.includes("Head") ? "🔄 Head" : "next &rarr;") : "null"}
                        </div>
                      </div>
                      <span className="block text-center font-mono text-[9px] text-emerald-700 mt-0.5">
                        {activeSimStep.newNode.addr}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Note */}
              <div className="mt-4 rounded-xl bg-indigo-50/70 p-3.5 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                <span className="font-bold text-indigo-900">💡 Thao tác: </span>
                {activeSimStep.explanation}
              </div>
            </div>

            {/* Code Box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">
                      Mã Nguồn Đang Thực Thi
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400">LINE TRACE</span>
                </div>

                <pre className="mt-3 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {activeSimStep.codeSnippet}
                </pre>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                <span>Trạng thái: Hoàn tất bước {simStep + 1}/{currentSim.steps.length}</span>
                <button
                  onClick={() => setSimStep(0)}
                  className="flex items-center gap-1 text-xs text-indigo-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3 w-3" /> Reset mô phỏng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
