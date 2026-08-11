/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Shuffle,
  ArrowDown,
  Sparkles,
  Code2,
  BarChart3,
  Box,
  StepForward,
  StepBack,
  Bot
} from "lucide-react";

// Web Audio API Synthesizer - Mechanical Robot Arm & Piano Landing Tones
const playPianoTone = (val, soundEnabled) => {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const freq = 180 + (val / 99) * 700;
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (err) {
    // Ignore browser audio policy errors
  }
};

const playRobotArmSound = (soundEnabled) => {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(260, ctx.currentTime + 0.14);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.14);
  } catch (err) {
    // Ignore browser audio policy errors
  }
};

// Pure function to generate step-by-step trace for Insertion Sort with PERSISTENT ITEM IDs
function generateInsertionSortSteps(initialArray) {
  const items = initialArray.map((val, idx) => ({ id: `block-${idx}-${val}`, val }));
  const steps = [];
  const arr = [...items];
  const n = arr.length;
  let comparisons = 0;
  let shifts = 0;

  // Initial Step
  steps.push({
    items: arr.map((item) => ({ ...item })),
    keyId: null,
    keyVal: null,
    keyOriginalIdx: -1,
    comparingIds: [],
    shiftingIds: [],
    insertedId: null,
    insertedIdx: -1,
    sortedUntil: 0,
    phase: "INIT",
    status: `🤖 Cánh tay Robot Công Nghiệp 3D ở bên phải sẵn sàng! Khối a[0] = ${arr[0].val} thuộc vùng đã sắp xếp.`,
    activeLinePseudo: 1,
    activeLinePy: 1,
    activeLineJava: 1,
    comparisons: 0,
    shifts: 0,
    pass: 0
  });

  for (let i = 1; i < n; i++) {
    const keyItem = arr[i];
    const key = keyItem.val;
    let j = i - 1;

    // Phase 1: PICK_UP (Cánh tay Robot từ bên phải vươn ra gắp khối Cyan hạ xuống Bậc Dưới)
    steps.push({
      items: arr.map((item) => ({ ...item })),
      keyId: keyItem.id,
      keyVal: key,
      keyOriginalIdx: i,
      comparingIds: [keyItem.id],
      shiftingIds: [],
      insertedId: null,
      insertedIdx: -1,
      sortedUntil: i - 1,
      phase: "PICK_UP",
      status: `🤖 Lượt ${i}: Cánh tay Robot bên phải vươn ra gắp khối a[${i}] = ${key} (Cyan) hạ xuống Bậc Dưới phía trước.`,
      activeLinePseudo: 2,
      activeLinePy: 3,
      activeLineJava: 3,
      comparisons,
      shifts,
      pass: i
    });

    while (j >= 0) {
      comparisons++;
      const isGreater = arr[j].val > key;

      // Phase 2: SCAN_LEFT (Robot kéo khối Cyan trượt trên Bậc Dưới sang trái so sánh)
      steps.push({
        items: arr.map((item) => ({ ...item })),
        keyId: keyItem.id,
        keyVal: key,
        keyOriginalIdx: i,
        comparingIds: [arr[j].id],
        shiftingIds: [],
        insertedId: null,
        insertedIdx: -1,
        sortedUntil: i - 1,
        phase: "SCAN_LEFT",
        status: isGreater
          ? `⚡ So sánh khối Bậc Dưới (${key}) với khối Bậc Trên a[${j}] = ${arr[j].val} (Vàng Hổ Phách). Vì ${arr[j].val} > ${key} ➔ Khối a[${j}] trượt sang phải nhường chỗ!`
          : `✅ So sánh khối Bậc Dưới (${key}) với khối Bậc Trên a[${j}] = ${arr[j].val} (Vàng Hổ Phách). Vì ${arr[j].val} ≤ ${key} ➔ Đã tìm thấy vị trí chèn Bậc Trên [${j + 1}]!`,
        activeLinePseudo: 4,
        activeLinePy: 5,
        activeLineJava: 5,
        comparisons,
        shifts,
        pass: i
      });

      if (isGreater) {
        shifts++;
        const shiftedItem = arr[j];
        arr[j + 1] = arr[j];

        // Phase 3: SHIFT_RIGHT (Khối a[j] trượt sang phải trên Bậc Trên)
        steps.push({
          items: arr.map((item) => ({ ...item })),
          keyId: keyItem.id,
          keyVal: key,
          keyOriginalIdx: i,
          comparingIds: [],
          shiftingIds: [shiftedItem.id],
          insertedId: null,
          insertedIdx: -1,
          sortedUntil: i - 1,
          phase: "SHIFT_RIGHT",
          status: `➡️ Khối ${shiftedItem.val} trượt sang ô [${j + 1}] trên Bậc Trên. Cánh tay Robot tiếp tục kéo khối Cyan lướt sang trái...`,
          activeLinePseudo: 5,
          activeLinePy: 6,
          activeLineJava: 6,
          comparisons,
          shifts,
          pass: i
        });

        j--;
      } else {
        break;
      }
    }

    // Insert key at j + 1
    arr[j + 1] = keyItem;
    shifts++;

    // Phase 4: DROP_PLAY (Robot nhấc khối Cyan từ Bậc Dưới lên đặt vào Bậc Trên tại j+1)
    steps.push({
      items: arr.map((item) => ({ ...item })),
      keyId: null,
      keyVal: null,
      keyOriginalIdx: -1,
      comparingIds: [],
      shiftingIds: [],
      insertedId: keyItem.id,
      insertedIdx: j + 1,
      sortedUntil: i,
      phase: "DROP_PLAY",
      status: `🎶 Cánh tay Robot nhấc khối ${key} từ Bậc Dưới bước ngược lên đặt lại vào ô [${j + 1}] ở Bậc Trên!`,
      activeLinePseudo: 6,
      activeLinePy: 7,
      activeLineJava: 7,
      comparisons,
      shifts,
      pass: i
    });
  }

  // Final Step
  steps.push({
    items: arr.map((item) => ({ ...item })),
    keyId: null,
    keyVal: null,
    keyOriginalIdx: -1,
    comparingIds: [],
    shiftingIds: [],
    insertedId: null,
    insertedIdx: -1,
    sortedUntil: n - 1,
    phase: "FINISHED",
    status: `🎉 Hoàn thành Sắp xếp Chèn! Cánh tay Robot bên phải đã xếp hoàn hảo tất cả ${n} khối số.`,
    activeLinePseudo: 7,
    activeLinePy: 8,
    activeLineJava: 8,
    comparisons,
    shifts,
    pass: n - 1
  });

  return steps;
}

const PSEUDOCODE = [
  "procedure insertionSort(A: list of sortable items)",
  "  for i = 1 to length(A) - 1 do",
  "    key = A[i]",
  "    j = i - 1",
  "    while j >= 0 and A[j] > key do",
  "      A[j + 1] = A[j]",
  "      j = j - 1",
  "    end while",
  "    A[j + 1] = key",
  "  end for",
  "end procedure"
];

const PYTHON_CODE = [
  "def insertion_sort(arr):",
  "    n = len(arr)",
  "    for i in range(1, n):",
  "        key = arr[i]",
  "        j = i - 1",
  "        while j >= 0 and arr[j] > key:",
  "            arr[j + 1] = arr[j]",
  "            j -= 1",
  "        arr[j + 1] = key",
  "    return arr"
];

const JAVA_CODE = [
  "public class InsertionSort {",
  "    public static void insertionSort(int[] arr) {",
  "        int n = arr.length;",
  "        for (int i = 1; i < n; i++) {",
  "            int key = arr[i];",
  "            int j = i - 1;",
  "            while (j >= 0 && arr[j] > key) {",
  "                arr[j + 1] = arr[j];",
  "                j--;",
  "            }",
  "            arr[j + 1] = key;",
  "        }",
  "    }",
  "}"
];

export default function InsertionSortLab({ onBack }) {
  // State setup
  const [arraySize, setArraySize] = useState(8);
  const [initialArray, setInitialArray] = useState([5, 3, 7, 1, 4, 2, 8, 6]);
  const [manualInputText, setManualInputText] = useState("5, 3, 7, 1, 4, 2, 8, 6");
  const [manualInputError, setManualInputError] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Tier 1 Playback State
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);

  // Three.js Mount & Hover state
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const blockMeshesRef = useRef(new Map());
  const targetPositionsRef = useRef(new Map());

  // 3D Industrial Robot Arm References (Mounted on RIGHT SIDE)
  const robotArmRef = useRef({
    baseTurret: null,
    shoulderJoint: null,
    upperArmMesh: null,
    elbowJoint: null,
    forearmMesh: null,
    wristSwivel: null,
    gripperGroup: null
  });

  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tier 2 Code Reader State
  const [codeStep, setCodeStep] = useState(0);
  const [codeLang, setCodeLang] = useState("pseudocode");
  const [isCodePlaying, setIsCodePlaying] = useState(false);
  const [codeSpeed, setCodeSpeed] = useState(800);

  const timerRef = useRef(null);
  const codeTimerRef = useRef(null);

  // Auto-update manual input text
  useEffect(() => {
    setManualInputText(initialArray.join(", "));
  }, [initialArray]);

  // Generate trace steps
  const steps = useMemo(() => {
    return generateInsertionSortSteps(initialArray);
  }, [initialArray]);

  const step = steps[currentStep] || steps[0] || {};
  const isFinished = currentStep === steps.length - 1;

  // Sound trigger on step change
  useEffect(() => {
    if (step.keyVal !== null) {
      playRobotArmSound(soundEnabled);
    } else if (step.insertedIdx >= 0 && step.items[step.insertedIdx] !== undefined) {
      playPianoTone(step.items[step.insertedIdx].val, soundEnabled);
    }
  }, [currentStep, soundEnabled]);

  // Tier 1 Auto-play timer
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
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, steps.length, speed]);

  // Tier 2 Code Reader Auto-play timer
  useEffect(() => {
    if (isCodePlaying) {
      codeTimerRef.current = setInterval(() => {
        setCodeStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsCodePlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, codeSpeed);
    } else {
      clearInterval(codeTimerRef.current);
    }
    return () => clearInterval(codeTimerRef.current);
  }, [isCodePlaying, steps.length, codeSpeed]);

  // =========================================================================================
  // THREE.JS 3D SCENE SETUP WITH RIGHT-SIDE INDUSTRIAL ROBOT ARM & STEPPED STAIRCASE
  // =========================================================================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 780;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030712);
    sceneRef.current = scene;

    // 2. Camera (Nhìn nghiêng nhẹ từ trên xuống để quan sát Cánh Tay Robot bên phải & Bàn Bậc Thang)
    const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 2500);
    camera.position.set(0, 140, 720);
    camera.lookAt(0, -10, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.target.set(0, -10, 0);
    controls.update();
    controlsRef.current = controls;

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight.position.set(120, 280, 200);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    fillLight.position.set(-180, 120, 160);
    scene.add(fillLight);

    // 6. STEPPED STAIRCASE BÀN BẬC THANG 2 TẦNG
    const stairsGroup = new THREE.Group();
    scene.add(stairsGroup);

    // Upper Step Deck (Bậc Trên Phía Sau)
    const upperStepGeo = new THREE.BoxGeometry(540, 20, 90);
    const upperStepMat = new THREE.MeshPhysicalMaterial({
      color: 0x253042,
      roughness: 0.35,
      metalness: 0.15,
      clearcoat: 0.4
    });
    const upperStepMesh = new THREE.Mesh(upperStepGeo, upperStepMat);
    upperStepMesh.position.set(-20, 10, -45);
    upperStepMesh.receiveShadow = true;
    upperStepMesh.castShadow = true;
    stairsGroup.add(upperStepMesh);

    // Lower Step Deck (Bậc Dưới Phía Trước)
    const lowerStepGeo = new THREE.BoxGeometry(520, 16, 90);
    const lowerStepMat = new THREE.MeshStandardMaterial({ color: 0x141d29, roughness: 0.5 });
    const lowerStepMesh = new THREE.Mesh(lowerStepGeo, lowerStepMat);
    lowerStepMesh.position.set(-20, -50, 45);
    lowerStepMesh.receiveShadow = true;
    lowerStepMesh.castShadow = true;
    stairsGroup.add(lowerStepMesh);

    // Stair Riser Wall
    const riserGeo = new THREE.BoxGeometry(530, 50, 8);
    const riserMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 });
    const riserMesh = new THREE.Mesh(riserGeo, riserMat);
    riserMesh.position.set(-20, -20, 0);
    stairsGroup.add(riserMesh);

    // Watermark Text "algomaster.io" Texture on Riser Wall
    const createWatermarkTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      ctx.font = "900 42px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(71, 85, 105, 0.45)";
      ctx.fillText("algomaster.io", 256, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const wmTex = createWatermarkTexture();
    const wmGeo = new THREE.PlaneGeometry(200, 45);
    const wmMat = new THREE.MeshBasicMaterial({ map: wmTex, transparent: true });
    const wmMesh = new THREE.Mesh(wmGeo, wmMat);
    wmMesh.position.set(-20, -20, 5);
    stairsGroup.add(wmMesh);

    // =========================================================================================
    // BUILD 3D ARTICULATED INDUSTRIAL ROBOT ARM MOUNTED ON THE RIGHT SIDE
    // =========================================================================================
    const robotGroup = new THREE.Group();
    // Anchor Robot Base on the RIGHT SIDE: X = 300, Y = -55, Z = 0
    robotGroup.position.set(300, -55, 0);
    scene.add(robotGroup);

    // 1. Heavy Circular Steel Base Plate
    const basePlateGeo = new THREE.CylinderGeometry(36, 42, 16, 32);
    const basePlateMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const basePlateMesh = new THREE.Mesh(basePlateGeo, basePlateMat);
    basePlateMesh.position.set(0, 8, 0);
    robotGroup.add(basePlateMesh);

    // 2. Rotating Base Turret
    const turretGeo = new THREE.CylinderGeometry(24, 28, 30, 32);
    const turretMat = new THREE.MeshPhysicalMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2, clearcoat: 1.0 });
    const baseTurret = new THREE.Mesh(turretGeo, turretMat);
    baseTurret.position.set(0, 31, 0);
    robotGroup.add(baseTurret);

    // Cyan Glow Accent Ring on Turret
    const ringGeo = new THREE.TorusGeometry(26, 2.5, 16, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.set(0, 24, 0);
    robotGroup.add(ringMesh);

    // 3. Shoulder Joint
    const shoulderGeo = new THREE.SphereGeometry(15, 24, 24);
    const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.2 });
    const shoulderJoint = new THREE.Mesh(shoulderGeo, shoulderMat);
    shoulderJoint.position.set(0, 48, 0);
    robotGroup.add(shoulderJoint);

    // 4. Upper Arm Segment (Main Boom Link)
    const upperArmGeo = new THREE.CylinderGeometry(8, 10, 130, 24);
    const upperArmMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.7, roughness: 0.3 }); // Amber Industrial Robot Arm
    const upperArmMesh = new THREE.Mesh(upperArmGeo, upperArmMat);
    scene.add(upperArmMesh);

    // 5. Elbow Joint
    const elbowGeo = new THREE.SphereGeometry(12, 24, 24);
    const elbowJoint = new THREE.Mesh(elbowGeo, shoulderMat);
    scene.add(elbowJoint);

    // 6. Forearm Segment (Secondary Link)
    const forearmGeo = new THREE.CylinderGeometry(6, 8, 110, 24);
    const forearmMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 });
    const forearmMesh = new THREE.Mesh(forearmGeo, forearmMat);
    scene.add(forearmMesh);

    // 7. Wrist & End-Effector Gripper
    const gripperGroup = new THREE.Group();
    scene.add(gripperGroup);

    const wristGeo = new THREE.CylinderGeometry(10, 10, 14, 16);
    const wristMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 });
    const wristMesh = new THREE.Mesh(wristGeo, wristMat);
    wristMesh.position.set(0, 0, 0);
    gripperGroup.add(wristMesh);

    // Dual Hydraulic Gripper Fingers
    [-18, 18].forEach((gx) => {
      const fingerGeo = new THREE.BoxGeometry(6, 32, 8);
      const fingerMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8 });
      const fingerMesh = new THREE.Mesh(fingerGeo, fingerMat);
      fingerMesh.position.set(gx, -16, 0);
      gripperGroup.add(fingerMesh);
    });

    robotArmRef.current = {
      baseTurret,
      shoulderJoint,
      upperArmMesh,
      elbowJoint,
      forearmMesh,
      gripperGroup
    };

    // 7. Raycaster for Hover interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      raycaster.setFromCamera(mouse, camera);
      const meshes = Array.from(blockMeshesRef.current.values());
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        setHoveredBlock(intersects[0].object.userData);
      } else {
        setHoveredBlock(null);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    // 8. 60fps Dynamic Robot Arm Kinematics & Render Loop
    let animId;

    // Current smoothed gripper target position
    const currentGripperPos = new THREE.Vector3(300, 80, 0);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();

      // Smooth Block Position Lerp
      blockMeshesRef.current.forEach((mesh, id) => {
        const target = targetPositionsRef.current.get(id);
        if (target) {
          mesh.position.x += (target.x - mesh.position.x) * 0.14;
          mesh.position.y += (target.y - mesh.position.y) * 0.14;
          mesh.position.z += (target.z - mesh.position.z) * 0.14;

          const s = target.scale || 1.0;
          mesh.scale.x += (s - mesh.scale.x) * 0.15;
          mesh.scale.y += (s - mesh.scale.y) * 0.15;
          mesh.scale.z += (s - mesh.scale.z) * 0.15;
        }
      });

      // DYNAMIC 3D INDUSTRIAL ROBOT ARM KINEMATICS (TỪ BÊN PHẢI VƯƠN SANG TRÁI GẮP KHỐI)
      const activeKeyItem = step.items?.find((item) => item.id === step.keyId);
      let targetGrip = new THREE.Vector3(300, 80, 0); // Standby resting position on right side

      if (activeKeyItem) {
        const activeMesh = blockMeshesRef.current.get(activeKeyItem.id);
        if (activeMesh) {
          const blockTopY = activeMesh.position.y + activeMesh.geometry.parameters.height / 2;
          targetGrip.set(activeMesh.position.x, blockTopY + 16, activeMesh.position.z);
        }
      }

      // Smooth lerp Gripper to target
      currentGripperPos.lerp(targetGrip, 0.15);

      // Update Gripper Group Position
      if (robotArmRef.current.gripperGroup) {
        robotArmRef.current.gripperGroup.position.copy(currentGripperPos);
      }

      // Calculate Robot Arm Joint Segments (Base Shoulder: 300, -7, 0)
      const shoulderPos = new THREE.Vector3(300, -7, 0);
      const targetPos = currentGripperPos.clone();

      // Vector from Shoulder to Gripper Target
      const distVec = new THREE.Vector3().subVectors(targetPos, shoulderPos);
      const totalDist = distVec.length();

      // Midpoint Elbow Position (Arching upward gracefully)
      const elbowPos = new THREE.Vector3()
        .addVectors(shoulderPos, targetPos)
        .multiplyScalar(0.5);
      elbowPos.y += Math.max(40, 160 - totalDist * 0.2); // Midpoint arch elevation

      // Update Upper Arm Segment (Shoulder -> Elbow)
      if (robotArmRef.current.upperArmMesh) {
        const upperArm = robotArmRef.current.upperArmMesh;
        const upperDir = new THREE.Vector3().subVectors(elbowPos, shoulderPos);
        const upperLen = upperDir.length();

        upperArm.position.copy(shoulderPos).addScaledVector(upperDir, 0.5);
        upperArm.scale.set(1, upperLen / 130, 1);
        upperArm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upperDir.clone().normalize());
      }

      // Update Elbow Joint Position
      if (robotArmRef.current.elbowJoint) {
        robotArmRef.current.elbowJoint.position.copy(elbowPos);
      }

      // Update Forearm Segment (Elbow -> Gripper)
      if (robotArmRef.current.forearmMesh) {
        const forearm = robotArmRef.current.forearmMesh;
        const forearmDir = new THREE.Vector3().subVectors(targetPos, elbowPos);
        const forearmLen = forearmDir.length();

        forearm.position.copy(elbowPos).addScaledVector(forearmDir, 0.5);
        forearm.scale.set(1, forearmLen / 110, 1);
        forearm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), forearmDir.clone().normalize());
      }

      // Rotate Base Turret towards target
      if (robotArmRef.current.baseTurret) {
        const angle = Math.atan2(targetPos.z - shoulderPos.z, targetPos.x - shoulderPos.x);
        robotArmRef.current.baseTurret.rotation.y = -angle;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  // =========================================================================================
  // UPDATE 3D SLATE BLOCKS & STEPPED STAIRCASE MOTION
  // =========================================================================================
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !step.items) return;

    const n = step.items.length;
    const slotWidth = Math.min(52, 480 / n);
    const startX = -70 - ((n - 1) / 2) * slotWidth; // Centered on table

    // Helper: Texture Generator for Front Face Number
    const createFrontFaceTexture = (val, isKeyPicked, isComparing, isSorted) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      let hexBg = "#222f42";
      if (isKeyPicked) hexBg = "#06b6d4";
      else if (isComparing) hexBg = "#f59e0b";
      else if (isSorted) hexBg = "#1e3a5f";

      ctx.fillStyle = hexBg;
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 10;
      ctx.strokeRect(10, 10, 236, 236);

      ctx.font = "900 110px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(String(val), 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    // Helper: Texture Generator for Top Face Small Number
    const createTopFaceTexture = (val, isKeyPicked, isComparing, isSorted) => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");

      let hexBg = "#222f42";
      if (isKeyPicked) hexBg = "#06b6d4";
      else if (isComparing) hexBg = "#f59e0b";
      else if (isSorted) hexBg = "#1e3a5f";

      ctx.fillStyle = hexBg;
      ctx.fillRect(0, 0, 128, 128);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 6;
      ctx.strokeRect(6, 6, 116, 116);

      ctx.font = "900 48px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fillText(String(val), 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const currentStepIds = new Set();

    step.items.forEach((item, idx) => {
      currentStepIds.add(item.id);
      const isKeyPicked = step.phase !== "INIT" && step.phase !== "FINISHED" && item.id === step.keyId;
      const isComparing = step.comparingIds?.includes(item.id);
      const isShifting = step.shiftingIds?.includes(item.id);
      const isSorted = idx <= step.sortedUntil;
      const isInserted = item.id === step.insertedId;

      let targetX = startX + idx * slotWidth;

      const maxVal = Math.max(...initialArray, 8);
      const blockHeight = Math.max(26, Math.min(100, (item.val / maxVal) * 60 + 26));
      const blockWidth = 40;
      const blockDepth = 40;

      const upperStepSurfaceY = 20;
      const lowerStepSurfaceY = -42;

      let targetY = upperStepSurfaceY + blockHeight / 2;
      let targetZ = -45;
      let scale = 1.0;

      if (isKeyPicked) {
        targetY = lowerStepSurfaceY + blockHeight / 2;
        targetZ = 45;
        scale = 1.04;
      } else if (isComparing) {
        targetY = upperStepSurfaceY + blockHeight / 2 + 6;
        targetZ = -40;
        scale = 1.04;
      } else if (isShifting) {
        targetX += 8;
      } else if (isInserted) {
        targetZ = -40;
        scale = 1.04;
      }

      targetPositionsRef.current.set(item.id, { x: targetX, y: targetY, z: targetZ, scale });

      let blockHexColor = 0x222f42;
      if (isKeyPicked) {
        blockHexColor = 0x06b6d4;
      } else if (isComparing) {
        blockHexColor = 0xf59e0b;
      } else if (isInserted) {
        blockHexColor = 0x10b981;
      } else if (isSorted) {
        blockHexColor = 0x1e3a5f;
      }

      let mesh = blockMeshesRef.current.get(item.id);
      if (!mesh) {
        const blockGeo = new THREE.BoxGeometry(blockWidth, blockHeight, blockDepth);

        const bodyMat = new THREE.MeshPhysicalMaterial({
          color: blockHexColor,
          roughness: 0.35,
          metalness: 0.1,
          clearcoat: 0.5,
          emissive: isKeyPicked ? 0x06b6d4 : isComparing ? 0xf59e0b : 0x000000,
          emissiveIntensity: isKeyPicked ? 0.35 : isComparing ? 0.4 : 0.0
        });

        const frontTex = createFrontFaceTexture(item.val, isKeyPicked, isComparing, isSorted);
        const frontMat = new THREE.MeshStandardMaterial({ map: frontTex });

        const topTex = createTopFaceTexture(item.val, isKeyPicked, isComparing, isSorted);
        const topMat = new THREE.MeshStandardMaterial({ map: topTex });

        const materials = [bodyMat, bodyMat, topMat, bodyMat, frontMat, bodyMat];

        mesh = new THREE.Mesh(blockGeo, materials);
        mesh.position.set(targetX, targetY, targetZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = { id: item.id, val: item.val, isSorted };

        const edgesGeo = new THREE.EdgesGeometry(blockGeo);
        const edgesMat = new THREE.LineBasicMaterial({ color: 0x475569, linewidth: 1.5 });
        const edgesLine = new THREE.LineSegments(edgesGeo, edgesMat);
        mesh.add(edgesLine);

        scene.add(mesh);
        blockMeshesRef.current.set(item.id, mesh);
      } else {
        if (mesh.geometry.parameters.height !== blockHeight) {
          mesh.geometry.dispose();
          mesh.geometry = new THREE.BoxGeometry(blockWidth, blockHeight, blockDepth);

          const oldLine = mesh.children[0];
          if (oldLine) {
            mesh.remove(oldLine);
            if (oldLine.geometry) oldLine.geometry.dispose();
          }
          const edgesGeo = new THREE.EdgesGeometry(mesh.geometry);
          const edgesMat = new THREE.LineBasicMaterial({ color: 0x475569, linewidth: 1.5 });
          const edgesLine = new THREE.LineSegments(edgesGeo, edgesMat);
          mesh.add(edgesLine);
        }

        mesh.material[0].color.setHex(blockHexColor);
        mesh.material[0].emissive.setHex(isKeyPicked ? 0x06b6d4 : isComparing ? 0xf59e0b : 0x000000);
        mesh.material[0].emissiveIntensity = isKeyPicked ? 0.35 : isComparing ? 0.4 : 0.0;
        mesh.material[0].needsUpdate = true;

        const frontTex = createFrontFaceTexture(item.val, isKeyPicked, isComparing, isSorted);
        mesh.material[4].map = frontTex;
        mesh.material[4].needsUpdate = true;

        const topTex = createTopFaceTexture(item.val, isKeyPicked, isComparing, isSorted);
        mesh.material[2].map = topTex;
        mesh.material[2].needsUpdate = true;

        mesh.userData = { id: item.id, val: item.val, isSorted };
      }
    });

    // Cleanup unused meshes
    blockMeshesRef.current.forEach((mesh, id) => {
      if (!currentStepIds.has(id)) {
        scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        blockMeshesRef.current.delete(id);
        targetPositionsRef.current.delete(id);
      }
    });
  }, [step, initialArray]);

  // Handlers
  const handleRandomArray = () => {
    setIsPlaying(false);
    setIsCodePlaying(false);
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 9) + 1);
    setInitialArray(newArr);
    setCurrentStep(0);
    setCodeStep(0);
  };

  const handleReverseArray = () => {
    setIsPlaying(false);
    setIsCodePlaying(false);
    const sorted = [...initialArray].sort((a, b) => a - b).reverse();
    setInitialArray(sorted);
    setCurrentStep(0);
    setCodeStep(0);
  };

  const handleApplyManualInput = (e) => {
    e.preventDefault();
    setManualInputError("");
    if (!manualInputText.trim()) return;

    if (/[^0-9,\s]/.test(manualInputText)) {
      setManualInputError("Mảng chứa ký tự không hợp lệ! Vui lòng chỉ nhập số không âm (0 - 99), phân cách bằng dấu phẩy.");
      return;
    }

    const tokens = manualInputText.split(/[, \s]+/).filter(Boolean);
    const parsed = tokens.map(Number);

    const hasInvalidNumber = parsed.some((v) => isNaN(v) || v < 0 || v > 99);
    if (hasInvalidNumber) {
      setManualInputError("Số không hợp lệ! Giá trị mỗi phần tử phải nằm trong khoảng từ 0 đến 99.");
      return;
    }

    if (parsed.length < 3 || parsed.length > 14) {
      setManualInputError(`Số lượng phần tử phải từ 3 đến 14 (hiện có ${parsed.length} phần tử).`);
      return;
    }

    setManualInputError("");
    setIsPlaying(false);
    setIsCodePlaying(false);
    setArraySize(parsed.length);
    setInitialArray(parsed);
    setCurrentStep(0);
    setCodeStep(0);
  };

  const codeLines =
    codeLang === "python" ? PYTHON_CODE : codeLang === "java" ? JAVA_CODE : PSEUDOCODE;
  const codeStepObj = steps[codeStep] || steps[0] || {};
  const activeCodeLine =
    codeLang === "python"
      ? codeStepObj.activeLinePy
      : codeLang === "java"
      ? codeStepObj.activeLineJava
      : codeStepObj.activeLinePseudo;

  return (
    <div className="w-full min-h-screen bg-[#030712] text-slate-100 p-3 sm:p-5 md:p-6 font-sans space-y-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#09101d] via-[#030712] to-[#010308]">
      {/* HEADER TOOLBAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#091122]/90 backdrop-blur-md p-5 rounded-3xl border border-[#1e293b] shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-200 hover:text-white transition-all flex items-center gap-2 text-xs font-bold cursor-pointer shadow-md border border-[#334155] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>← Quay về Kho Mô Phỏng</span>
          </button>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-extrabold text-sky-400 uppercase tracking-widest bg-[#1e293b] border border-[#334155] px-3.5 py-1 rounded-full shadow-inner flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-amber-400" />
                <span>AlgoMaster 3D Industrial Robot Arm Workbench</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 font-mono uppercase">
              INSERTION SORT 3D — CÁNH TAY ROBOT CÔNG NGHIỆP
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
              Cánh Tay Robot Bên Phải Vươn Ra Gắp Khối Cyan | Bàn Bậc Thang 2 Tầng | Kiến Trúc 3 Tầng
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 ${
              soundEnabled
                ? "bg-[#1e293b] border-cyan-500/50 text-cyan-300"
                : "bg-[#1e293b]/50 border-[#334155] text-slate-500"
            }`}
            title="Bật/Tắt âm thanh hiệu ứng"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>
        </div>
      </div>

      {/* CONFIGURATION TOOLBAR */}
      <div className="bg-[#091122]/90 backdrop-blur-md p-5 rounded-3xl border border-[#1e293b] shadow-xl space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Slider */}
          <div className="md:col-span-6 flex items-center gap-3 bg-[#040711] px-4 py-2.5 rounded-2xl border border-[#1e293b]">
            <span className="text-xs font-bold text-slate-300 shrink-0">Kích thước mảng:</span>
            <input
              type="range"
              min="3"
              max="14"
              value={arraySize}
              onChange={(e) => {
                const sz = parseInt(e.target.value, 10);
                setArraySize(sz);
                const newArr = Array.from({ length: sz }, () => Math.floor(Math.random() * 9) + 1);
                setInitialArray(newArr);
                setCurrentStep(0);
                setCodeStep(0);
                setIsPlaying(false);
                setIsCodePlaying(false);
              }}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono font-extrabold text-cyan-400 shrink-0 bg-[#1e293b] px-2.5 py-0.5 rounded-lg border border-[#334155]">
              {arraySize}
            </span>
          </div>

          {/* Buttons */}
          <div className="md:col-span-6 flex items-center gap-2">
            <button
              onClick={handleRandomArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mảng Ngẫu Nhiên</span>
            </button>
            <button
              onClick={handleReverseArray}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            >
              <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
              <span>Mảng Ngược</span>
            </button>
          </div>
        </div>

        {/* Custom Input Form */}
        <div className="pt-2 border-t border-[#1e293b] space-y-1.5">
          <form onSubmit={handleApplyManualInput} className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 shrink-0">Mảng tùy chỉnh:</span>
            <input
              type="text"
              value={manualInputText}
              onChange={(e) => {
                setManualInputText(e.target.value);
                if (manualInputError) setManualInputError("");
              }}
              placeholder="Ví dụ: 5, 3, 7, 1, 4, 2, 8, 6..."
              className={`flex-1 px-4 py-2 rounded-2xl bg-[#040711] border text-xs font-mono font-semibold text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                manualInputError
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-[#1e293b] focus:border-cyan-400"
              }`}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md active:scale-95"
            >
              Áp Dụng
            </button>
          </form>
          {manualInputError && (
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-rose-400 pl-24 animate-fadeIn">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>{manualInputError}</span>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 1: SÂN KHẤU 3D CÁNH TAY ROBOT CÔNG NGHIỆP BÊN PHẢI & BÀN BẬC THANG */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122]/90 backdrop-blur-md rounded-3xl border border-[#1e293b] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e293b] pb-3">
          <div className="flex items-center gap-2 text-sm font-black uppercase text-sky-400 font-mono tracking-wider">
            <Box className="w-4 h-4 text-cyan-400" />
            <span>TẦNG 1: SÂN KHẤU THREE.JS 3D CÁNH TAY ROBOT CÔNG NGHIỆP BÊN PHẢI & BÀN BẬC THANG</span>
          </div>

          {/* FULL PLAYBACK CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Reset về đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep((prev) => Math.max(0, prev - 1));
              }}
              disabled={currentStep === 0}
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] disabled:opacity-40 text-slate-300 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
              title="Lùi 1 bước"
            >
              <StepBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? "Tạm Dừng" : "Phát 3D WebGL"}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
              }}
              disabled={isFinished}
              className="p-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] disabled:opacity-40 text-slate-300 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
              title="Tiến 1 bước"
            >
              <StepForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-[#040711] p-3.5 rounded-2xl border border-[#1e293b] flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
            <span>{step.status}</span>
          </div>
          <div className="text-[11px] font-mono font-bold text-slate-400 shrink-0 bg-[#1e293b] px-2.5 py-1 rounded-lg border border-[#334155]">
            Bước {currentStep + 1} / {steps.length}
          </div>
        </div>

        {/* THREE.JS 3D CANVAS MOUNT STAGE */}
        <div className="relative w-full h-[420px] rounded-2xl border border-[#1e293b] overflow-hidden bg-[#030712]">
          <div ref={mountRef} className="w-full h-full" />

          {/* Fixed Camera & Robot Arm Badge */}
          <div className="absolute bottom-3 left-3 pointer-events-none px-3 py-1.5 rounded-xl bg-[#091122]/90 border border-[#1e293b] text-slate-400 font-mono text-[10px] flex items-center gap-1.5 shadow-lg backdrop-blur-md">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>🤖 Cánh Tay Robot Công Nghiệp Bên Phải & Bàn Bậc Thang 2 Tầng</span>
          </div>

          {/* 3D HOVER TOOLTIP OVERLAY */}
          {hoveredBlock && (
            <div
              className="absolute z-50 pointer-events-none px-4 py-2.5 rounded-2xl bg-sky-950/95 border border-cyan-400 text-sky-100 font-mono text-xs shadow-xl backdrop-blur-md flex flex-col gap-1 transition-all duration-150"
              style={{
                left: `${Math.min(mousePos.x + 15, 600)}px`,
                top: `${Math.min(mousePos.y - 60, 340)}px`
              }}
            >
              <div className="flex items-center gap-2 font-black text-cyan-300 border-b border-cyan-500/40 pb-1">
                <Box className="w-3.5 h-3.5 text-cyan-400" />
                <span>Khối 3D [{hoveredBlock.val}]</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-[11px]">
                <span className="text-slate-400">Giá trị:</span>
                <span className="font-bold text-white">{hoveredBlock.val}</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-[11px]">
                <span className="text-slate-400">Trạng thái:</span>
                <span className="font-bold text-emerald-400">
                  {hoveredBlock.isSorted ? "Đã sắp xếp" : "Chưa sắp xếp"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 2: MÃ GIẢ FULL & TRÌNH ĐỌC MÃ NGUỒN THUẬT TOÁN (CHẠY ĐỘC LẬP) */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122]/90 backdrop-blur-md rounded-3xl border border-[#1e293b] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e293b] pb-3">
          <div className="flex items-center gap-2 text-sm font-black uppercase text-sky-400 font-mono tracking-wider">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>TẦNG 2: VS CODE IDE TERMINAL — TRÌNH ĐỌC MÃ NGUỒN (CHẠY ĐỘC LẬP)</span>
          </div>

          {/* Language Selector & Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#040711] p-1 rounded-2xl border border-[#1e293b]">
              {["pseudocode", "python", "java"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCodeLang(lang)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                    codeLang === lang
                      ? "bg-sky-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsCodePlaying(!isCodePlaying)}
              className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer transition-all active:scale-95"
            >
              {isCodePlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isCodePlaying ? "Tạm Dừng" : "Chạy Mã"}</span>
            </button>
          </div>
        </div>

        {/* IDE Terminal Code Display */}
        <div className="bg-[#030610] p-4 rounded-2xl border border-[#1e293b] font-mono text-xs overflow-x-auto space-y-1 shadow-inner">
          {codeLines.map((line, idx) => {
            const lineNum = idx + 1;
            const isActive = lineNum === activeCodeLine;

            return (
              <div
                key={idx}
                className={`flex items-center gap-4 px-3 py-1 rounded-xl transition-colors ${
                  isActive
                    ? "bg-sky-500/20 text-sky-200 border-l-4 border-sky-400 font-bold"
                    : "text-slate-400 hover:bg-[#091122]/50"
                }`}
              >
                <span className="w-6 text-right text-slate-600 shrink-0">{lineNum}</span>
                <pre className="whitespace-pre">{line}</pre>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================================= */}
      {/* TẦNG 3: BẢNG THÔNG SỐ THỰC THI & PHÂN TÍCH HIỆU NĂNG THUẬT TOÁN */}
      {/* ========================================================================================= */}
      <div className="w-full bg-[#091122]/90 backdrop-blur-md rounded-3xl border border-[#1e293b] shadow-2xl overflow-hidden flex flex-col p-4 space-y-4">
        <div className="flex items-center gap-2 text-sm font-black uppercase text-amber-400 font-mono tracking-wider border-b border-[#1e293b] pb-3">
          <BarChart3 className="w-4 h-4 text-amber-400" />
          <span>TẦNG 3: BẢNG THÔNG SỐ THỰC THI & PHÂN TÍCH HIỆU NĂNG THUẬT TOÁN</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-[#040711] p-4 rounded-2xl border border-[#1e293b] flex flex-col space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Số phép so sánh (Comparisons)
            </span>
            <span className="text-2xl font-black font-mono text-cyan-400">
              {step.comparisons || 0}
            </span>
          </div>

          <div className="bg-[#040711] p-4 rounded-2xl border border-[#1e293b] flex flex-col space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Số phép dịch/chèn (Shifts/Writes)
            </span>
            <span className="text-2xl font-black font-mono text-pink-400">
              {step.shifts || 0}
            </span>
          </div>

          <div className="bg-[#040711] p-4 rounded-2xl border border-[#1e293b] flex flex-col space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Độ phức tạp Thời gian
            </span>
            <span className="text-xl font-black font-mono text-purple-400">
              O(n²) <span className="text-xs font-normal text-slate-400">(Tốt nhất O(n))</span>
            </span>
          </div>

          <div className="bg-[#040711] p-4 rounded-2xl border border-[#1e2d4a] flex flex-col space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Độ phức tạp Không gian & Tính ổn định
            </span>
            <span className="text-xl font-black font-mono text-emerald-400">
              O(1) <span className="text-xs font-normal text-slate-400">(Stable Ổn định)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
