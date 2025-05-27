import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type HalftoneProps = {
  bgColor?: string;
  dotsColor?: string;
  textColor?: string;
  dotSpacing?: number;
  dotRadius?: number;
  influenceRadius?: number;
  maxScale?: number;
};

const HalftoneBackground: React.FC<HalftoneProps> = ({
  bgColor = "#000000",
  dotsColor = "#ffffff",
  textColor = "#ffffff",
  dotSpacing = 25,
  dotRadius = 2,
  influenceRadius = 100,
  maxScale = 3,
}) => {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMouse({ x: -9999, y: -9999 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxDist = Math.sqrt(cx * cx + cy * cy);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const scale =
            distance < influenceRadius
              ? maxScale - (distance / influenceRadius) * (maxScale - 1)
              : 1;

          const radius = dotRadius * scale;
          const dcx = x - cx;
          const dcy = y - cy;
          const distFromCenter = Math.sqrt(dcx * dcx + dcy * dcy);
          const vignetteAlpha = 1 - Math.min(distFromCenter / maxDist, 1);
          const adjustedAlpha = Math.pow(vignetteAlpha, 1);
  
          ctx.globalAlpha = adjustedAlpha;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = dotsColor;
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [mouse, dotSpacing, dotRadius, influenceRadius, maxScale, dotsColor]);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div ref={containerRef} className="relative w-full h-full">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          animate={{ opacity: isHovering ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 flex items-center justify-center h-full ">
          <motion.div
            className={`text-center text-${textColor} mix-blend-difference`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold dar:text-white text-white font-mono "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              HALFTONE
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Preview component for demonstration
const HalftonePreview = () => {
  return (
    <div className="w-full space-y-6">
      {/* Full interactive version */}
      <div className="w-full h-80 border rounded-lg overflow-hidden">
        <HalftoneBackground bgColor={"#000000"} dotsColor={"#fafafa"}/>
      </div>
    </div>
  );
};

export default HalftoneBackground;
export { HalftonePreview };
