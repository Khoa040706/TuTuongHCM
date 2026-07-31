"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Plus,
  Trash2,
  Search,
  Shuffle,
  GitBranch,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowDown,
  ArrowRight,
  Maximize2,
  Info,
  Sliders,
  Award
} from "lucide-react";

// ==========================================
// 1. BST DATA STRUCTURE & LAYOUT ENGINE
// ==========================================

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.id = `node-${value}-${Math.random().toString(36).substring(2, 7)}`;
  }
}

// Deep clone tree
function cloneTree(node) {
  if (!node) return null;
  const newNode = new TreeNode(node.value);
  newNode.id = node.id;
  newNode.left = cloneTree(node.left);
  newNode.right = cloneTree(node.right);
  return newNode;
}

// Insert into BST
function insertBst(root, value) {
  if (!root) return new TreeNode(value);
  if (value < root.value) {
    root.left = insertBst(root.left, value);
  } else if (value > root.value) {
    root.right = insertBst(root.right, value);
  }
  return root;
}

// Find min node
function findMinNode(node) {
  while (node && node.left) node = node.left;
  return node;
}

// Delete from BST
function deleteBst(root, value) {
  if (!root) return null;
  if (value < root.value) {
    root.left = deleteBst(root.left, value);
  } else if (value > root.value) {
    root.right = deleteBst(root.right, value);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    const temp = findMinNode(root.right);
    root.value = temp.value;
    root.right = deleteBst(root.right, temp.value);
  }
  return root;
}

// Calculate height of node
function getNodeHeight(node) {
  if (!node) return 0;
  return 1 + Math.max(getNodeHeight(node.left), getNodeHeight(node.right));
}

// Calculate Layout Coordinates (x, y) for each node using Inorder & Depth
function computeTreeLayout(root, canvasWidth = 800, canvasHeight = 400) {
  if (!root) return { layoutNodes: [], layoutEdges: [], maxDepth: 0 };

  const nodes = [];
  const edges = [];
  let inorderIndex = 0;

  // Step 1: Inorder traversal to assign X index & depth
  function traverse(node, depth = 0, parentId = null) {
    if (!node) return;

    if (node.left) traverse(node.left, depth + 1, node.id);

    const xIdx = inorderIndex++;
    nodes.push({
      id: node.id,
      value: node.value,
      depth,
      xIdx,
      parentId,
      height: getNodeHeight(node),
    });

    if (node.right) traverse(node.right, depth + 1, node.id);
  }

  traverse(root);

  const totalNodes = nodes.length;
  const maxDepth = Math.max(...nodes.map((n) => n.depth), 0);

  // Step 2: Map xIdx and depth to pixel coordinates
  const paddingX = 50;
  const paddingY = 60;
  const availableWidth = Math.max(canvasWidth - paddingX * 2, 300);
  const availableHeight = Math.max(canvasHeight - paddingY * 2, 250);

  const xStep = totalNodes > 1 ? availableWidth / (totalNodes - 1) : availableWidth / 2;
  const yStep = maxDepth > 0 ? Math.min(availableHeight / maxDepth, 75) : 75;

  const nodeMap = {};
  nodes.forEach((n) => {
    const x = Math.round(paddingX + n.xIdx * xStep);
    const y = Math.round(paddingY + n.depth * yStep);
    nodeMap[n.id] = { ...n, x, y };
  });

  // Step 3: Create edge connections
  nodes.forEach((n) => {
    if (n.parentId && nodeMap[n.parentId]) {
      edges.push({
        from: n.parentId,
        to: n.id,
        fromX: nodeMap[n.parentId].x,
        fromY: nodeMap[n.parentId].y,
        toX: nodeMap[n].id ? nodeMap[n.id].x : 0,
        toY: nodeMap[n].id ? nodeMap[n.id].y : 0,
      });
    }
  });

  return {
    layoutNodes: Object.values(nodeMap),
    layoutEdges: edges,
    maxDepth,
  };
}

// Default initial tree
function createDefaultTree() {
  let root = null;
  const initialValues = [50, 30, 70, 20, 40, 60, 80, 10, 35, 65, 90];
  initialValues.forEach((val) => {
    root = insertBst(root, val);
  });
  return root;
}

// ==========================================
// 2. PSEUDOCODE DEFINITIONS
// ==========================================

const OPERATION_PSEUDOCODES = {
  insert: [
    { line: 1, text: "procedure INSERT(root, value)" },
    { line: 2, text: "  if root is null then" },
    { line: 3, text: "    return create_node(value)" },
    { line: 4, text: "  if value < root.value then" },
    { line: 5, text: "    root.left = INSERT(root.left, value)" },
    { line: 6, text: "  else if value > root.value then" },
    { line: 7, text: "    root.right = INSERT(root.right, value)" },
    { line: 8, text: "  end if" },
    { line: 9, text: "  return root" },
  ],
  search: [
    { line: 1, text: "procedure SEARCH(root, target)" },
    { line: 2, text: "  if root is null or root.value == target then" },
    { line: 3, text: "    return root" },
    { line: 4, text: "  if target < root.value then" },
    { line: 5, text: "    return SEARCH(root.left, target)" },
    { line: 6, text: "  else" },
    { line: 7, text: "    return SEARCH(root.right, target)" },
    { line: 8, text: "  end if" },
    { line: 9, text: "end procedure" },
  ],
  delete: [
    { line: 1, text: "procedure DELETE(root, value)" },
    { line: 2, text: "  if root is null then return null" },
    { line: 3, text: "  if value < root.value then root.left = DELETE(root.left, value)" },
    { line: 4, text: "  else if value > root.value then root.right = DELETE(root.right, value)" },
    { line: 5, text: "  else // Đã tìm thấy nút cần xóa" },
    { line: 6, text: "    if root.left is null then return root.right" },
    { line: 7, text: "    if root.right is null then return root.left" },
    { line: 8, text: "    succ = FIND_MIN(root.right) // Nút nhỏ nhất cây phải" },
    { line: 9, text: "    root.value = succ.value" },
    { line: 10, text: "    root.right = DELETE(root.right, succ.value)" },
    { line: 11, text: "  end if" },
    { line: 12, text: "  return root" },
  ],
  traversal: [
    { line: 1, text: "procedure TRAVERSE(root, type)" },
    { line: 2, text: "  if root is null then return" },
    { line: 3, text: "  if Preorder: VISIT(root)" },
    { line: 4, text: "  TRAVERSE(root.left, type)" },
    { line: 5, text: "  if Inorder: VISIT(root)" },
    { line: 6, text: "  TRAVERSE(root.right, type)" },
    { line: 7, text: "  if Postorder: VISIT(root)" },
  ],
  minmax: [
    { line: 1, text: "procedure FIND_MIN_MAX(root, mode)" },
    { line: 2, text: "  curr = root" },
    { line: 3, text: "  while curr.left (nếu Min) hoặc curr.right (nếu Max) do" },
    { line: 4, text: "    curr = curr.left hoặc curr.right" },
    { line: 5, text: "  return curr.value" },
  ],
  height: [
    { line: 1, text: "function HEIGHT(root)" },
    { line: 2, text: "  if root is null then return 0" },
    { line: 3, text: "  leftHeight = HEIGHT(root.left)" },
    { line: 4, text: "  rightHeight = HEIGHT(root.right)" },
    { line: 5, text: "  return 1 + max(leftHeight, rightHeight)" },
  ],
};

// ==========================================
// 3. STEP GENERATORS
// ==========================================

function generateInsertSteps(root, value) {
  const steps = [];
  const logs = [];

  function helper(node, val, path = []) {
    if (!node) {
      steps.push({
        activeLine: 3,
        status: `Cây con rỗng! Tạo node mới mang giá trị [${val}] và gắn vào đây.`,
        currentNodeId: null,
        visitedPath: [...path],
        foundNodeId: null,
        newNodeValue: val,
        logs: [...logs, `✅ Đã chèn thành công node [${val}] into BST!`],
      });
      return;
    }

    path.push(node.id);

    if (val === node.value) {
      logs.push(`⚠️ Giá trị [${val}] đã tồn tại trong BST (không chèn trùng).`);
      steps.push({
        activeLine: 2,
        status: `Giá trị [${val}] đã có tại node hiện tại. BST không lưu giá trị trùng lặp.`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: node.id,
        logs: [...logs],
      });
      return;
    }

    if (val < node.value) {
      logs.push(`So sánh ${val} < ${node.value} ➔ Rẽ TRÁI ⬅️`);
      steps.push({
        activeLine: 4,
        status: `So sánh: ${val} < ${node.value} ➔ Rẽ sang cây con TRÁI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: null,
        logs: [...logs],
      });
      helper(node.left, val, path);
    } else {
      logs.push(`So sánh ${val} > ${node.value} ➔ Rẽ PHẢI ➡️`);
      steps.push({
        activeLine: 6,
        status: `So sánh: ${val} > ${node.value} ➔ Rẽ sang cây con PHẢI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: null,
        logs: [...logs],
      });
      helper(node.right, val, path);
    }
  }

  if (!root) {
    steps.push({
      activeLine: 3,
      status: `Cây BST rỗng! Tạo node đầu tiên (Gốc) có giá trị [${value}].`,
      currentNodeId: null,
      visitedPath: [],
      foundNodeId: null,
      newNodeValue: value,
      logs: [`Gốc mới [${value}]`],
    });
  } else {
    helper(root, value, []);
  }

  return steps;
}

function generateSearchSteps(root, target) {
  const steps = [];
  const logs = [];

  function helper(node, val, path = []) {
    if (!node) {
      logs.push(`❌ Không tìm thấy [${val}] trong BST!`);
      steps.push({
        activeLine: 2,
        status: `Đã duyệt tới nhánh rỗng. Không tìm thấy giá trị [${val}] trong cây!`,
        currentNodeId: null,
        visitedPath: [...path],
        foundNodeId: null,
        notFound: true,
        logs: [...logs],
      });
      return;
    }

    path.push(node.id);

    if (node.value === val) {
      logs.push(`🎉 ĐÃ TÌM THẤY [${val}] tại node!`);
      steps.push({
        activeLine: 3,
        status: `🎉 ĐÃ TÌM THẤY! Node [${val}] khớp chính xác với giá trị cần tìm.`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: node.id,
        logs: [...logs],
        isCompleted: true,
      });
      return;
    }

    if (val < node.value) {
      logs.push(`So sánh ${val} < ${node.value} ➔ Rẽ TRÁI ⬅️`);
      steps.push({
        activeLine: 4,
        status: `So sánh ${val} < ${node.value} ➔ Rẽ sang cây con TRÁI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: null,
        logs: [...logs],
      });
      helper(node.left, val, path);
    } else {
      logs.push(`So sánh ${val} > ${node.value} ➔ Rẽ PHẢI ➡️`);
      steps.push({
        activeLine: 6,
        status: `So sánh ${val} > ${node.value} ➔ Rẽ sang cây con PHẢI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        foundNodeId: null,
        logs: [...logs],
      });
      helper(node.right, val, path);
    }
  }

  if (!root) {
    steps.push({
      activeLine: 2,
      status: `Cây BST rỗng. Không có node nào để tìm kiếm!`,
      currentNodeId: null,
      visitedPath: [],
      foundNodeId: null,
      notFound: true,
      logs: ["Cây rỗng"],
    });
  } else {
    helper(root, target, []);
  }

  return steps;
}

function generateDeleteSteps(root, target) {
  const steps = [];
  const logs = [];

  function helper(node, val, path = []) {
    if (!node) {
      logs.push(`❌ Không tìm thấy node [${val}] để xóa.`);
      steps.push({
        activeLine: 2,
        status: `Không tìm thấy giá trị [${val}] trong cây BST để thực hiện phép xóa.`,
        currentNodeId: null,
        visitedPath: [...path],
        logs: [...logs],
      });
      return;
    }

    path.push(node.id);

    if (val < node.value) {
      logs.push(`So sánh ${val} < ${node.value} ➔ Rẽ TRÁI ⬅️`);
      steps.push({
        activeLine: 3,
        status: `Tìm node cần xóa: ${val} < ${node.value} ➔ Rẽ sang trái.`,
        currentNodeId: node.id,
        visitedPath: [...path],
        logs: [...logs],
      });
      helper(node.left, val, path);
    } else if (val > node.value) {
      logs.push(`So sánh ${val} > ${node.value} ➔ Rẽ PHẢI ➡️`);
      steps.push({
        activeLine: 4,
        status: `Tìm node cần xóa: ${val} > ${node.value} ➔ Rẽ sang phải.`,
        currentNodeId: node.id,
        visitedPath: [...path],
        logs: [...logs],
      });
      helper(node.right, val, path);
    } else {
      // Found node to delete
      logs.push(`🎯 Đã tìm thấy node [${node.value}] cần xóa!`);

      // Case 1: Leaf node (no children)
      if (!node.left && !node.right) {
        logs.push(`TH1: Node [${node.value}] là node lá (không có con). Xóa trực tiếp.`);
        steps.push({
          activeLine: 6,
          status: `Trường hợp 1: Node [${node.value}] là Node Lá (0 con). Xóa ngay khỏi cây.`,
          currentNodeId: node.id,
          deletingNodeId: node.id,
          visitedPath: [...path],
          logs: [...logs],
          isCompleted: true,
        });
      }
      // Case 2: Only 1 child
      else if (!node.left || !node.right) {
        const childVal = node.left ? node.left.value : node.right.value;
        logs.push(`TH2: Node [${node.value}] có 1 con ([${childVal}]). Thay thế bằng con.`);
        steps.push({
          activeLine: 6,
          status: `Trường hợp 2: Node [${node.value}] có 1 con. Nối node con [${childVal}] thay thế vị trí node bị xóa.`,
          currentNodeId: node.id,
          deletingNodeId: node.id,
          visitedPath: [...path],
          logs: [...logs],
          isCompleted: true,
        });
      }
      // Case 3: 2 children
      else {
        const succ = findMinNode(node.right);
        logs.push(
          `TH3: Node [${node.value}] có 2 con. Tìm Inorder Successor = [${succ.value}] (nhỏ nhất bên phải).`
        );
        steps.push({
          activeLine: 8,
          status: `Trường hợp 3: Node [${node.value}] có 2 con. Tìm node nhỏ nhất bên nhánh PHẢI là [${succ.value}] (Inorder Successor).`,
          currentNodeId: node.id,
          successorId: succ.id,
          visitedPath: [...path],
          logs: [...logs],
        });
        steps.push({
          activeLine: 9,
          status: `Thay giá trị của node [${node.value}] bằng giá trị [${succ.value}], sau đó đệ quy xóa node [${succ.value}].`,
          currentNodeId: node.id,
          successorId: succ.id,
          visitedPath: [...path],
          logs: [...logs, `Ghi đè giá trị [${succ.value}] vào node [${node.value}]`],
          isCompleted: true,
        });
      }
    }
  }

  if (root) helper(root, target, []);
  return steps;
}

function generateTraversalSteps(root, type = "inorder") {
  const steps = [];
  const result = [];
  const path = [];

  function traverse(node) {
    if (!node) return;

    // PREORDER: Visit root first
    if (type === "preorder") {
      result.push(node.value);
      path.push(node.id);
      steps.push({
        activeLine: 3,
        status: `[Preorder - Thăm Gốc trước]: Thăm node [${node.value}]. Kết quả hiện tại: [${result.join(", ")}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });
    }

    // Go Left
    if (node.left) {
      steps.push({
        activeLine: 4,
        status: `Đi xuống nhánh TRÁI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });
      traverse(node.left);
    }

    // INORDER: Visit root in middle
    if (type === "inorder") {
      result.push(node.value);
      path.push(node.id);
      steps.push({
        activeLine: 5,
        status: `[Inorder - Gốc ở giữa]: Thăm node [${node.value}]. Kết quả hiện tại: [${result.join(", ")}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });
    }

    // Go Right
    if (node.right) {
      steps.push({
        activeLine: 6,
        status: `Đi xuống nhánh PHẢI của node [${node.value}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });
      traverse(node.right);
    }

    // POSTORDER: Visit root last
    if (type === "postorder") {
      result.push(node.value);
      path.push(node.id);
      steps.push({
        activeLine: 7,
        status: `[Postorder - Thăm Gốc sau cùng]: Thăm node [${node.value}]. Kết quả hiện tại: [${result.join(", ")}].`,
        currentNodeId: node.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });
    }
  }

  // Level-order (BFS style)
  if (type === "levelorder") {
    const queue = [root];
    while (queue.length > 0) {
      const curr = queue.shift();
      if (!curr) continue;
      result.push(curr.value);
      path.push(curr.id);

      steps.push({
        activeLine: 5,
        status: `[Level-order - Duyệt theo tầng]: Thăm node [${curr.value}]. Kết quả hiện tại: [${result.join(", ")}].`,
        currentNodeId: curr.id,
        visitedPath: [...path],
        traversalResult: [...result],
      });

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  } else {
    if (root) traverse(root);
  }

  steps.push({
    activeLine: 1,
    status: `🎉 Hoàn tất duyệt cây kiểu [${type.toUpperCase()}]! Danh sách các giá trị: [${result.join(", ")}].`,
    currentNodeId: null,
    visitedPath: [...path],
    traversalResult: [...result],
    isCompleted: true,
  });

  return steps;
}

function generateMinMaxSteps(root, mode = "min") {
  const steps = [];
  const path = [];
  let curr = root;

  if (!curr) return steps;

  steps.push({
    activeLine: 2,
    status: `Khởi đầu tìm kiếm [${mode.toUpperCase()}] từ Node Gốc [${curr.value}].`,
    currentNodeId: curr.id,
    visitedPath: [curr.id],
  });

  while (mode === "min" ? curr.left : curr.right) {
    path.push(curr.id);
    curr = mode === "min" ? curr.left : curr.right;

    steps.push({
      activeLine: 4,
      status: `Rẽ sang nhánh [${mode === "min" ? "TRÁI" : "PHẢI"}] để tìm giá trị ${mode === "min" ? "nhỏ hơn" : "lớn hơn"}: [${curr.value}].`,
      currentNodeId: curr.id,
      visitedPath: [...path, curr.id],
    });
  }

  steps.push({
    activeLine: 5,
    status: `🎉 Giá trị [${mode.toUpperCase()}] của cây BST là: [${curr.value}] (Không thể rẽ thêm nữa).`,
    currentNodeId: curr.id,
    foundNodeId: curr.id,
    visitedPath: [...path, curr.id],
    isCompleted: true,
  });

  return steps;
}

function generateHeightSteps(root) {
  const steps = [];
  if (!root) return steps;

  function calcHeight(node) {
    if (!node) return 0;
    const hL = calcHeight(node.left);
    const hR = calcHeight(node.right);
    const h = 1 + Math.max(hL, hR);

    steps.push({
      activeLine: 5,
      status: `Node [${node.value}]: Chiều cao cây con Trái=${hL}, Phải=${hR} ➔ Chiều cao Node = 1 + max(${hL}, ${hR}) = ${h}.`,
      currentNodeId: node.id,
      visitedPath: [node.id],
      nodeHeight: h,
    });
    return h;
  }

  const totalH = calcHeight(root);
  steps.push({
    activeLine: 5,
    status: `🎉 Chiều cao toàn bộ cây BST (độ sâu lớn nhất) là: ${totalH}.`,
    currentNodeId: root.id,
    foundNodeId: root.id,
    visitedPath: [root.id],
    isCompleted: true,
  });

  return steps;
}

// ==========================================
// 4. MAIN BST LAB COMPONENT
// ==========================================

export default function BstLab({ onBack }) {
  // Tree State
  const [tree, setTree] = useState(createDefaultTree);
  const [operation, setOperation] = useState("insert"); // 'insert' | 'search' | 'delete' | 'traversal' | 'minmax' | 'height'
  const [inputValue, setInputValue] = useState("");
  const [batchInput, setBatchInput] = useState("");
  const [traversalType, setTraversalType] = useState("inorder");
  const [showAnnotations, setShowAnnotations] = useState(true); // show height & depth badges

  // Animation Engine
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  const timerRef = useRef(null);

  // Compute Layout for SVG
  const { layoutNodes, layoutEdges, maxDepth } = useMemo(() => {
    return computeTreeLayout(tree, 860, 420);
  }, [tree]);

  // Statistics
  const treeStats = useMemo(() => {
    const total = layoutNodes.length;
    const height = getNodeHeight(tree);
    const minNode = tree ? findMinNode(tree) : null;
    let maxNode = tree;
    while (maxNode && maxNode.right) maxNode = maxNode.right;

    return {
      total,
      height,
      min: minNode ? minNode.value : "—",
      max: maxNode ? maxNode.value : "—",
    };
  }, [tree, layoutNodes]);

  // Handlers for Operations
  const handleExecuteOperation = (overrideOp = null, overrideVal = null) => {
    const op = overrideOp || operation;
    const val = overrideVal !== null ? overrideVal : Number(inputValue);

    let generated = [];

    if (op === "insert") {
      if (isNaN(val) || val <= 0 || val > 999) return;
      generated = generateInsertSteps(tree, val);
      // Actually insert into tree state
      const newTree = insertBst(cloneTree(tree), val);
      setTree(newTree);
      setInputValue("");
    } else if (op === "search") {
      if (isNaN(val)) return;
      generated = generateSearchSteps(tree, val);
    } else if (op === "delete") {
      if (isNaN(val)) return;
      generated = generateDeleteSteps(tree, val);
      // Delete from tree after step generation completes or init step
      const newTree = deleteBst(cloneTree(tree), val);
      setTree(newTree);
      setInputValue("");
    } else if (op === "traversal") {
      generated = generateTraversalSteps(tree, traversalType);
    } else if (op === "minmax") {
      generated = generateMinMaxSteps(tree, inputValue === "max" ? "max" : "min");
    } else if (op === "height") {
      generated = generateHeightSteps(tree);
    }

    setSteps(generated);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleBatchInsert = () => {
    if (!batchInput.trim()) return;
    const values = batchInput
      .split(/[,;\s]+/)
      .map(Number)
      .filter((v) => !isNaN(v) && v > 0 && v <= 999);

    let current = cloneTree(tree);
    values.forEach((v) => {
      current = insertBst(current, v);
    });
    setTree(current);
    setBatchInput("");

    // Generate steps for the last inserted value
    if (values.length > 0) {
      const lastVal = values[values.length - 1];
      const generated = generateInsertSteps(current, lastVal);
      setSteps(generated);
      setCurrentStep(0);
    }
  };

  const handleRandomTree = () => {
    let root = null;
    const count = 9 + Math.floor(Math.random() * 6);
    const used = new Set();
    while (used.size < count) {
      const r = Math.floor(Math.random() * 90) + 10;
      if (!used.has(r)) {
        used.add(r);
        root = insertBst(root, r);
      }
    }
    setTree(root);
    setSteps([]);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleResetTree = () => {
    setTree(null);
    setSteps([]);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed, steps.length]);

  // Controls Handlers
  const handleTogglePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleStepBack = () => {
    setIsPlaying(false);
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSkipToEnd = () => {
    setIsPlaying(false);
    setCurrentStep(steps.length - 1);
  };

  const currentStepData = steps[currentStep] || {};
  const currentPseudocode = OPERATION_PSEUDOCODES[operation] || OPERATION_PSEUDOCODES.insert;

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pb-12">
      {/* TIER 1: HEADER & OPERATION CONFIGURATION BAR */}
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <GitBranch className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Mô Phỏng Cây Tìm Kiếm Nhị Phân (Binary Search Tree - BST)
                </h1>
                <p className="text-xs text-slate-500 font-mono">
                  Trái &lt; Gốc &lt; Phải • Phép toán Insert/Search/Delete • Traversal • O(log n)
                </p>
              </div>
            </div>
          </div>

          {/* Preset / Reset Tree Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomTree}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
              <span>Cây ngẫu nhiên</span>
            </button>
            <button
              onClick={handleResetTree}
              className="px-3.5 py-2 bg-slate-100 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa toàn bộ cây</span>
            </button>
          </div>
        </div>

        {/* Operation Selection Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Phép toán:
            </span>

            {[
              { id: "insert", label: "Chèn (Insert)", icon: Plus },
              { id: "search", label: "Tìm kiếm (Search)", icon: Search },
              { id: "delete", label: "Xóa (Delete)", icon: Trash2 },
              { id: "traversal", label: "Duyệt (Traversal)", icon: Layers },
              { id: "minmax", label: "Min / Max", icon: Award },
              { id: "height", label: "Chiều cao (Height)", icon: Sliders },
            ].map((op) => {
              const Icon = op.icon;
              const isActive = operation === op.id;
              return (
                <button
                  key={op.id}
                  onClick={() => {
                    setOperation(op.id);
                    setSteps([]);
                    setCurrentStep(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{op.label}</span>
                </button>
              );
            })}
          </div>

          {/* Annotations Toggle */}
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors">
            <input
              type="checkbox"
              checked={showAnnotations}
              onChange={(e) => setShowAnnotations(e.target.checked)}
              className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
            />
            <span>Hiển thị Chiều cao (h) & Độ sâu (d)</span>
          </label>
        </div>

        {/* Dynamic Controls based on selected Operation */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          {operation === "insert" || operation === "search" || operation === "delete" ? (
            <div className="flex flex-wrap items-center gap-4 w-full justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-700">Giá trị Node (1-999):</span>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleExecuteOperation()}
                  placeholder="Ví dụ: 42"
                  className="w-28 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={() => handleExecuteOperation()}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Thực hiện {operation.toUpperCase()}
                </button>
              </div>

              {operation === "insert" && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600">Nhập hàng loạt:</span>
                  <input
                    type="text"
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleBatchInsert()}
                    placeholder="50, 30, 70, 20"
                    className="w-44 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={handleBatchInsert}
                    className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Chèn tất cả
                  </button>
                </div>
              )}
            </div>
          ) : operation === "traversal" ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-700">Kiểu Duyệt Cây:</span>
                <select
                  value={traversalType}
                  onChange={(e) => setTraversalType(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="inorder">Inorder (Trái ➔ Gốc ➔ Phải)</option>
                  <option value="preorder">Preorder (Gốc ➔ Trái ➔ Phải)</option>
                  <option value="postorder">Postorder (Trái ➔ Phải ➔ Gốc)</option>
                  <option value="levelorder">Level-order (Duyệt theo tầng)</option>
                </select>
                <button
                  onClick={() => handleExecuteOperation("traversal")}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Chạy Duyệt Cây
                </button>
              </div>
            </div>
          ) : operation === "minmax" ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Tìm giá trị:</span>
              <button
                onClick={() => {
                  setInputValue("min");
                  handleExecuteOperation("minmax");
                }}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Tìm MIN (Nhỏ nhất)
              </button>
              <button
                onClick={() => {
                  setInputValue("max");
                  handleExecuteOperation("minmax");
                }}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Tìm MAX (Lớn nhất)
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Độ sâu / Chiều cao cây:</span>
              <button
                onClick={() => handleExecuteOperation("height")}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Tính Chiều Cao Cây
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TIER 2: FULL-WIDTH TREE CANVAS & PLAYBACK TOOLBAR (LIGHT MODE) */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
        {/* Canvas Header Bar */}
        <div className="px-6 py-4 bg-slate-100/90 text-slate-800 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              <span>Canvas Cây Nhị Phân (BST)</span>
            </span>

            <span className="text-xs text-slate-500 font-mono">
              Bước {currentStep + 1} / {steps.length || 1}
            </span>
          </div>

          {/* Active Pseudocode Line Badge */}
          <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 max-w-xl overflow-hidden shadow-sm">
            <span className="text-[11px] font-mono text-slate-400 shrink-0">💻 Code:</span>
            <span className="text-xs font-mono font-semibold text-cyan-300 truncate">
              {currentPseudocode.find((p) => p.line === currentStepData.activeLine)?.text ||
                "Sẵn sàng..."}
            </span>
          </div>
        </div>

        {/* Visual Workspace Canvas (Light Pastel Background) */}
        <div className="relative w-full h-[440px] bg-slate-50 overflow-hidden flex items-center justify-center select-none border-b border-slate-200/60">
          {/* Light Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {tree ? (
            <svg className="w-full h-full relative z-10">
              {/* Render Edges */}
              {layoutEdges.map((edge, idx) => {
                const isPath =
                  currentStepData.visitedPath?.includes(edge.from) &&
                  currentStepData.visitedPath?.includes(edge.to);

                return (
                  <g key={idx}>
                    <path
                      d={`M ${edge.fromX} ${edge.fromY} Q ${(edge.fromX + edge.toX) / 2} ${
                        (edge.fromY + edge.toY) / 2
                      } ${edge.toX} ${edge.toY}`}
                      fill="none"
                      stroke={isPath ? "#6366f1" : "#cbd5e1"}
                      strokeWidth={isPath ? "3.5" : "2"}
                      strokeDasharray={isPath ? "none" : "none"}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Render Nodes */}
              {layoutNodes.map((node) => {
                const isCurrent = currentStepData.currentNodeId === node.id;
                const isVisited = currentStepData.visitedPath?.includes(node.id);
                const isFound = currentStepData.foundNodeId === node.id;
                const isDeleting = currentStepData.deletingNodeId === node.id;
                const isSuccessor = currentStepData.successorId === node.id;
                const isNewNode = currentStepData.newNodeValue === node.value;

                // Color Palette
                let circleFill = "#ffffff";
                let circleStroke = "#94a3b8";
                let textColor = "#1e293b";
                let glowEffect = "";

                if (isFound) {
                  circleFill = "#10b981"; // emerald-500
                  circleStroke = "#047857";
                  textColor = "#ffffff";
                  glowEffect = "drop-shadow(0 0 16px rgba(16, 185, 129, 0.8))";
                } else if (isCurrent) {
                  circleFill = "#fbbf24"; // amber-400
                  circleStroke = "#d97706";
                  textColor = "#78350f";
                  glowEffect = "drop-shadow(0 0 16px rgba(251, 191, 36, 0.8))";
                } else if (isDeleting) {
                  circleFill = "#ef4444"; // red-500
                  circleStroke = "#b91c1c";
                  textColor = "#ffffff";
                } else if (isSuccessor) {
                  circleFill = "#8b5cf6"; // violet-500
                  circleStroke = "#6d28d9";
                  textColor = "#ffffff";
                } else if (isVisited) {
                  circleFill = "#6366f1"; // indigo-500
                  circleStroke = "#4338ca";
                  textColor = "#ffffff";
                }

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="transition-all duration-300"
                    style={{ filter: glowEffect }}
                  >
                    {/* Active pulse ring */}
                    {isCurrent && (
                      <circle
                        r="28"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Node Circle */}
                    <circle
                      r="22"
                      fill={circleFill}
                      stroke={circleStroke}
                      strokeWidth="2.5"
                      className="shadow-sm transition-all duration-300"
                    />

                    {/* Node Value Text */}
                    <text
                      textAnchor="middle"
                      dy="4"
                      fill={textColor}
                      fontSize="13"
                      fontWeight="extrabold"
                      fontFamily="monospace"
                    >
                      {node.value}
                    </text>

                    {/* Annotations (Height & Depth Badges) */}
                    {showAnnotations && (
                      <g transform="translate(0, 36)">
                        <rect
                          x="-22"
                          y="-9"
                          width="44"
                          height="16"
                          rx="8"
                          fill="#ffffff"
                          stroke="#e2e8f0"
                          strokeWidth="1"
                          className="shadow-2xs"
                        />
                        <text
                          textAnchor="middle"
                          dy="3"
                          fill="#64748b"
                          fontSize="9"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          h={node.height} d={node.depth}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          ) : (
            <div className="text-center p-8">
              <div className="p-4 bg-slate-100 text-slate-400 rounded-full inline-block mb-3">
                <GitBranch className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-slate-600">Cây nhị phân đang rỗng</p>
              <p className="text-xs text-slate-400 mt-1">
                Hãy nhập giá trị ở thanh công cụ phía trên để bắt đầu chèn node!
              </p>
            </div>
          )}
        </div>

        {/* Step Explanation Status Banner */}
        <div className="px-6 py-3 bg-indigo-50/70 border-t border-indigo-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium text-indigo-950">
              {currentStepData.status || "Sẵn sàng thực thi phép toán trên BST."}
            </p>
          </div>

          {currentStepData.isCompleted && (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Hoàn tất {operation.toUpperCase()}!
            </span>
          )}
        </div>

        {/* Playback Controls Toolbar */}
        <div className="px-6 py-3.5 bg-slate-50 text-slate-700 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Khởi tạo lại"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleStepBack}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Lùi lại 1 bước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Chạy tự động</span>
                </>
              )}
            </button>
            <button
              onClick={handleStepForward}
              disabled={currentStep >= steps.length - 1}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Tất cả bước tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSkipToEnd}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title="Nhảy đến kết thúc"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Tốc độ:</span>
            <input
              type="range"
              min="200"
              max="1500"
              step="100"
              value={1700 - speed}
              onChange={(e) => setSpeed(1700 - Number(e.target.value))}
              className="w-32 accent-indigo-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-indigo-600 w-12 text-right">
              {speed}ms
            </span>
          </div>
        </div>
      </div>

      {/* TIER 3: BOTTOM SPLIT GRID (COMPARISON LOG & STATS VS PSEUDOCODE PANEL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (6 Cols): LOG & TREE METRICS */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* Comparison Log Panel */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Nhật ký so sánh (Comparison Log)
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {currentStepData.logs?.length || 0} bước so sánh
              </span>
            </div>

            <div className="w-full min-h-[90px] max-h-[140px] p-3 bg-slate-50 rounded-2xl border border-slate-200 overflow-y-auto flex flex-col gap-1.5 font-mono text-xs text-slate-700">
              {currentStepData.logs?.length > 0 ? (
                currentStepData.logs.map((logStr, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 shrink-0">#{i + 1}</span>
                    <span>{logStr}</span>
                  </div>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">
                  (Nhấn chạy một phép toán để xem nhật ký so sánh)
                </span>
              )}
            </div>
          </div>

          {/* Traversal Output & Tree Stats */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Thống kê & Kết quả Cây BST
                </h3>
              </div>
            </div>

            {/* Traversal Result Array (if applicable) */}
            {currentStepData.traversalResult && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="text-xs font-bold text-emerald-800 block mb-1.5">
                  Kết quả duyệt [{traversalType.toUpperCase()}]:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {currentStepData.traversalResult.map((val, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white text-emerald-900 border border-emerald-300 rounded-lg text-xs font-mono font-bold"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tree Stats Grid */}
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="text-[10px] font-mono text-slate-500 block">Tổng Node</span>
                <span className="text-xs font-mono font-bold text-indigo-600">
                  {treeStats.total} / 31
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="text-[10px] font-mono text-slate-500 block">Chiều cao (h)</span>
                <span className="text-xs font-mono font-bold text-indigo-600">
                  {treeStats.height}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="text-[10px] font-mono text-slate-500 block">Node MIN</span>
                <span className="text-xs font-mono font-bold text-emerald-600">
                  {treeStats.min}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="text-[10px] font-mono text-slate-500 block">Node MAX</span>
                <span className="text-xs font-mono font-bold text-rose-600">
                  {treeStats.max}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (6 Cols): PSEUDOCODE HIGHLIGHT PANEL (DARK MODE ONLY) */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Mã Giả [{operation.toUpperCase()}]
                </h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                Pseudocode
              </span>
            </div>

            {/* Line-by-Line Pseudocode Rendering */}
            <div className="flex flex-col gap-1 font-mono text-xs">
              {currentPseudocode.map((item) => {
                const isActive = item.line === currentStepData.activeLine;
                return (
                  <div
                    key={item.line}
                    className={`px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-indigo-600/90 text-white font-extrabold border-l-4 border-cyan-400 scale-[1.02] shadow-md"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 w-4 text-right">
                        {item.line}
                      </span>
                      <span>{item.text}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider animate-pulse">
                        Đang chạy
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Theoretical Complexity Summary Badge */}
          <div className="mt-6 border-t border-slate-800 pt-4 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Độ phức tạp trung bình:</span>
              <span className="text-cyan-400 font-bold">O(log n)</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] block">Trường hợp xấu nhất (Lệch):</span>
              <span className="text-rose-400 font-bold">O(n)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
