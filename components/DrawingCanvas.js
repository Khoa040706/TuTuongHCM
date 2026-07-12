/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useRef, useEffect, useState } from "react";

export default function DrawingCanvas({
  activeTool,
  activeColor,
  containerRef,
  onClearRef,
  drawingKey = "studymaster-drawings"
}) {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isDrawingRef = useRef(false);
  const isErasingRef = useRef(false);
  const eraserRadius = 18;

  // Load drawings from localStorage on mount or key change
  useEffect(() => {
    const saved = localStorage.getItem(drawingKey);
    if (saved) {
      try {
        setPaths(JSON.parse(saved));
      } catch (e) {
        console.error("Lỗi khi tải drawings:", e);
        setPaths([]);
      }
    } else {
      setPaths([]);
    }
  }, [drawingKey]);

  // Save drawings to localStorage
  const saveDrawings = (updatedPaths) => {
    localStorage.setItem(drawingKey, JSON.stringify(updatedPaths));
  };

  // Keep a ref to paths for synchronous reading in event handlers
  const pathsRef = useRef(paths);

  // Helper to update state and ref synchronously
  const updatePaths = (nextVal) => {
    setPaths((prev) => {
      const next = typeof nextVal === "function" ? nextVal(prev) : nextVal;
      pathsRef.current = next;
      return next;
    });
  };

  // Expose clear functionality to parent
  useEffect(() => {
    if (onClearRef) {
      onClearRef.current = () => {
        updatePaths([]);
        localStorage.removeItem(drawingKey);
      };
    }
  }, [onClearRef, drawingKey]);

  // Track container dimensions using ResizeObserver
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef?.current;
      if (!container) return;
      setDimensions({
        width: container.clientWidth,
        height: container.scrollHeight
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(handleResize);
    if (containerRef?.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [containerRef]);

  // Convert mouse/touch event coordinates relative to the SVG element
  const getCoords = (e, svgElement) => {
    const rect = svgElement.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDraw = (e) => {
    if (activeTool !== "pen" && activeTool !== "eraser") return;
    const svgElement = svgRef.current;
    if (!svgElement || dimensions.width === 0 || dimensions.height === 0) return;

    const coords = getCoords(e, svgElement);

    if (activeTool === "pen") {
      isDrawingRef.current = true;
      const newPath = {
        color: activeColor,
        width: 3.5,
        points: [
          {
            x: coords.x / dimensions.width,
            y: coords.y / dimensions.height
          }
        ]
      };
      updatePaths((prev) => [...prev, newPath]);
    } else if (activeTool === "eraser") {
      isErasingRef.current = true;
      eraseAt(coords.x, coords.y);
    }
  };

  const draw = (e) => {
    if (!isDrawingRef.current && !isErasingRef.current) return;
    const svgElement = svgRef.current;
    if (!svgElement || dimensions.width === 0 || dimensions.height === 0) return;

    const coords = getCoords(e, svgElement);

    if (isDrawingRef.current) {
      updatePaths((prevPaths) => {
        if (prevPaths.length === 0) return prevPaths;
        const updated = [...prevPaths];
        const lastPath = updated[updated.length - 1];
        
        const updatedLastPath = {
          ...lastPath,
          points: [
            ...lastPath.points,
            {
              x: coords.x / dimensions.width,
              y: coords.y / dimensions.height
            }
          ]
        };
        updated[updated.length - 1] = updatedLastPath;
        return updated;
      });
    } else if (isErasingRef.current) {
      eraseAt(coords.x, coords.y);
    }
  };

  const stopDraw = () => {
    if (isDrawingRef.current || isErasingRef.current) {
      isDrawingRef.current = false;
      isErasingRef.current = false;
      saveDrawings(pathsRef.current);
    }
  };

  const eraseAt = (ex, ey) => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return;

    updatePaths((prevPaths) => {
      let pathRemoved = false;
      const updated = [...prevPaths];

      // Scan backwards from the newest stroke
      for (let i = updated.length - 1; i >= 0; i--) {
        const path = updated[i];

        for (let j = 0; j < path.points.length; j++) {
          const px = path.points[j].x * width;
          const py = path.points[j].y * height;

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
        return updated;
      }
      return prevPaths;
    });
  };

  const isInteractive = activeTool === "pen" || activeTool === "eraser";

  return (
    <svg
      ref={svgRef}
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
      style={{
        pointerEvents: isInteractive ? "auto" : "none",
        minHeight: "100%",
        background: "transparent"
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && paths.map((path, idx) => {
        if (path.points.length === 0) return null;

        // Construct SVG Path definition (d attribute)
        let d = "";
        path.points.forEach((pt, pIdx) => {
          const px = pt.x * dimensions.width;
          const py = pt.y * dimensions.height;
          if (pIdx === 0) {
            d += `M ${px} ${py}`;
          } else {
            d += ` L ${px} ${py}`;
          }
        });

        return (
          <path
            key={idx}
            d={d}
            stroke={path.color}
            strokeWidth={path.width || 3.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}
