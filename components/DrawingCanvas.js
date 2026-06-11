/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useRef, useEffect, useState } from "react";

export default function DrawingCanvas({
  activeTool,
  activeColor,
  containerRef,
  onClearRef
}) {
  const canvasRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const isDrawingRef = useRef(false);
  const isErasingRef = useRef(false);
  const eraserRadius = 18;

  // Load drawings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("studymaster-drawings");
    if (saved) {
      try {
        setPaths(JSON.parse(saved));
      } catch (e) {
        console.error("Lỗi khi tải drawings:", e);
      }
    }
  }, []);

  // Save drawings when paths change
  const saveDrawings = (updatedPaths) => {
    localStorage.setItem("studymaster-drawings", JSON.stringify(updatedPaths));
  };

  // Expose clear functionality
  useEffect(() => {
    if (onClearRef) {
      onClearRef.current = () => {
        setPaths([]);
        localStorage.removeItem("studymaster-drawings");
      };
    }
  }, [onClearRef]);

  const pathsRef = useRef(paths);
  useEffect(() => {
    pathsRef.current = paths;
  }, [paths]);

  const drawPaths = (canvas, drawPathsList) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    drawPathsList.forEach((path) => {
      if (path.points.length === 0) return;

      ctx.beginPath();
      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.width || 3.5;

      const startX = path.points[0].x * canvas.width;
      const startY = path.points[0].y * canvas.height;
      ctx.moveTo(startX, startY);

      for (let i = 1; i < path.points.length; i++) {
        const px = path.points[i].x * canvas.width;
        const py = path.points[i].y * canvas.height;
        ctx.lineTo(px, py);
      }

      ctx.stroke();
    });
  };

  // Handle resizing of canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef?.current;
      if (!canvas || !container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.scrollHeight;

      drawPaths(canvas, pathsRef.current);
    };

    // Initial sizing and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Create a ResizeObserver to watch for element size changes inside the container
    // (e.g. window resize, text flow reflows) which will require resizing the canvas
    const observer = new ResizeObserver(handleResize);
    if (containerRef?.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [containerRef]);

  // Redraw when paths state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      drawPaths(canvas, paths);
    }
  }, [paths]);

  const getCoords = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top + window.scrollY - (rect.top + window.scrollY - canvas.offsetTop)
    };
  };

  const startDraw = (e) => {
    if (activeTool !== "pen" && activeTool !== "eraser") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const coords = getCoords(e, canvas);

    if (activeTool === "pen") {
      isDrawingRef.current = true;
      const newPath = {
        color: activeColor,
        width: 3.5,
        points: [
          {
            x: coords.x / canvas.width,
            y: coords.y / canvas.height
          }
        ]
      };

      const updated = [...paths, newPath];
      setPaths(updated);
      drawPaths(canvas, updated);
    } else if (activeTool === "eraser") {
      isErasingRef.current = true;
      eraseAt(coords.x, coords.y, canvas);
    }
  };

  const draw = (e) => {
    if (!isDrawingRef.current && !isErasingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const coords = getCoords(e, canvas);

    if (isDrawingRef.current) {
      const updated = [...paths];
      if (updated.length > 0) {
        const currentPath = updated[updated.length - 1];
        currentPath.points.push({
          x: coords.x / canvas.width,
          y: coords.y / canvas.height
        });
        setPaths(updated);
        drawPaths(canvas, updated);
      }
    } else if (isErasingRef.current) {
      eraseAt(coords.x, coords.y, canvas);
    }
  };

  const stopDraw = () => {
    if (isDrawingRef.current || isErasingRef.current) {
      isDrawingRef.current = false;
      isErasingRef.current = false;
      saveDrawings(paths);
    }
  };

  const eraseAt = (ex, ey, canvas) => {
    let pathRemoved = false;
    const updated = [...paths];

    // Scan backwards from the newest stroke
    for (let i = updated.length - 1; i >= 0; i--) {
      const path = updated[i];

      for (let j = 0; j < path.points.length; j++) {
        const px = path.points[j].x * canvas.width;
        const py = path.points[j].y * canvas.height;

        const dist = Math.sqrt((px - ex) ** 2 + (py - ey) ** 2);
        if (dist <= eraserRadius) {
          // Erase the entire stroke (Stroke Eraser)
          updated.splice(i, 1);
          pathRemoved = true;
          break;
        }
      }
      if (pathRemoved) break;
    }

    if (pathRemoved) {
      setPaths(updated);
      drawPaths(canvas, updated);
      saveDrawings(updated);
    }
  };

  const isInteractive = activeTool === "pen" || activeTool === "eraser";

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDraw}
      onMouseMove={draw}
      onMouseUp={stopDraw}
      onMouseLeave={stopDraw}
      onTouchStart={startDraw}
      onTouchMove={draw}
      onTouchEnd={stopDraw}
      className={`absolute top-0 left-0 w-full h-full z-20 ${
        isInteractive ? "pointer-events-auto cursor-crosshair" : "pointer-events-none"
      }`}
    />
  );
}
