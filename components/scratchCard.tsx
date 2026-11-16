// Scratch Card interactive component with HTML Canvas for realistic scratch effect & confetti reveal
"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  startTransition,
  type CSSProperties,
} from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

interface ScratchCardProps {
  bottomImage?: { src: string; alt: string };
  backgroundColor?: string;
  useImage?: boolean;
  topText?: string;
  hoverText?: string;
  clickText?: string;
  textColor?: string;
  topLayerColor?: string;
  brushSize?: number;
  resetButtonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  font?: {
    fontSize?: string | number;
    fontFamily?: string;
    fontWeight?: string | number;
    fontStyle?: string;
  };
  buttonFont?: any;
  scratchMode?: "scratch" | "hover" | "click";
  borderRadius?: number;
  style?: CSSProperties;
  onScratchComplete?: () => void;
  minScratchPercentage?: number;
  logoSrc?: string;
}

/**
 * Scratch Card Component
 * Interactive luxury gold scratch card with Aeline logo that reveals content underneath & fires celebratory confetti
 */
export default function ScratchCard(props: ScratchCardProps) {
  const {
    bottomImage = {
      src: "/assets/img/1fd4a8c085f10113.webp",
      alt: "Revealed content",
    },
    backgroundColor = "#FFD700",
    useImage = true,
    topText = "Scratch me",
    hoverText = "Hover to reveal",
    clickText = "Click to reveal",
    textColor = "#78350F",
    topLayerColor = "#F59E0B",
    brushSize = 45,
    font = { fontSize: "20px", fontFamily: "inherit", fontWeight: "700" },
    scratchMode = "scratch",
    borderRadius = 20,
    style,
    onScratchComplete,
    minScratchPercentage = 70,
    logoSrc = "/assets/img/e71483bf6a2851df.svg",
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 380, height: 240 });
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [maskImageUrl, setMaskImageUrl] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [confettiFired, setConfettiFired] = useState(false);
  const [lastPosition, setLastPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Trigger confetti burst
  const fireConfetti = useCallback(() => {
    if (confettiFired) return;
    setConfettiFired(true);

    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 30,
      startVelocity: 60,
      colors: ["#FBBF24", "#F59E0B", "#D97706", "#FFFFFF"],
    });
    fire(0.2, {
      spread: 70,
      colors: ["#ffffff", "#ff6a00", "#ffb366"],
    });
    fire(0.35, {
      spread: 110,
      decay: 0.91,
      scalar: 0.9,
    });
    fire(0.1, {
      spread: 130,
      startVelocity: 30,
      colors: ["#FBBF24", "#ffffff"],
    });

    if (onScratchComplete) {
      onScratchComplete();
    }
  }, [confettiFired, onScratchComplete]);

  // Check scratch percentage
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || confettiFired) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const percentage = (transparentPixels / (pixels.length / 4)) * 100;
      if (percentage >= minScratchPercentage) {
        fireConfetti();
      }
    } catch (e) {
      // Ignore canvas errors
    }
  }, [confettiFired, fireConfetti, minScratchPercentage]);

  // Initialize luxury gold canvas surface
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Luxurious gold linear gradient
    const gradient = ctx.createLinearGradient(0, 0, canvasSize.width, canvasSize.height);
    gradient.addColorStop(0, "#D97706");
    gradient.addColorStop(0.25, "#FBBF24");
    gradient.addColorStop(0.5, "#FEF08A");
    gradient.addColorStop(0.75, "#F59E0B");
    gradient.addColorStop(1, "#B45309");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

    // Gold sparkle dust texture
    ctx.globalAlpha = 0.25;
    for (let i = 0; i < 220; i++) {
      ctx.fillStyle = Math.random() > 0.4 ? "#FFF" : "#78350F";
      ctx.fillRect(
        Math.random() * canvasSize.width,
        Math.random() * canvasSize.height,
        Math.random() * 3 + 1,
        Math.random() * 3 + 1
      );
    }
    ctx.globalAlpha = 1;

    if (typeof window !== "undefined") {
      try {
        const dataUrl = canvas.toDataURL();
        setMaskImageUrl(dataUrl);
        setIsInitialized(true);
      } catch (error) {
        console.warn("Failed to generate canvas data URL:", error);
        setMaskImageUrl("");
      }
    }
  }, [canvasSize]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setCanvasSize({ width: rect.width, height: rect.height });
        }
      }
    };

    updateSize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  useEffect(() => {
    initializeCanvas();
  }, [initializeCanvas]);

  const getCoordinates = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY;

    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  }, []);

  const scratch = useCallback(
    (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (lastPosition) {
        ctx.beginPath();
        ctx.moveTo(lastPosition.x, lastPosition.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
        ctx.fill();
      }

      setLastPosition({ x, y });

      if (typeof window !== "undefined") {
        try {
          const dataUrl = canvas.toDataURL();
          setMaskImageUrl(dataUrl);
        } catch (error) {
          console.warn("Failed to generate canvas data URL:", error);
        }
      }

      checkScratchPercentage();
    },
    [brushSize, lastPosition, checkScratchPercentage]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (scratchMode === "click") {
        startTransition(() => setIsRevealed(!isRevealed));
        fireConfetti();
        return;
      }

      if (scratchMode === "scratch") {
        startTransition(() => setIsScratching(true));
        const coords = getCoordinates(e.nativeEvent);
        if (coords) {
          scratch(coords.x, coords.y);
        }
      }
    },
    [scratchMode, isRevealed, getCoordinates, scratch, fireConfetti]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isScratching) return;
      const coords = getCoordinates(e);
      if (coords) {
        scratch(coords.x, coords.y);
      }
    },
    [isScratching, getCoordinates, scratch]
  );

  const handleMouseUp = useCallback(() => {
    startTransition(() => {
      setIsScratching(false);
      setLastPosition(null);
    });
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      startTransition(() => setIsScratching(true));

      const coords = getCoordinates(e.nativeEvent);
      if (coords) {
        scratch(coords.x, coords.y);
      }
    },
    [getCoordinates, scratch]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isScratching) return;
      e.preventDefault();
      const coords = getCoordinates(e);
      if (coords) {
        scratch(coords.x, coords.y);
      }
    },
    [isScratching, getCoordinates, scratch]
  );

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const handleGlobalTouchEnd = () => handleMouseUp();

    if (isScratching) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
      document.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [isScratching, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleMouseEnter = useCallback(() => {
    if (scratchMode === "hover") {
      startTransition(() => setIsHovering(true));
    }
  }, [scratchMode]);

  const handleMouseLeave = useCallback(() => {
    if (scratchMode === "hover") {
      startTransition(() => setIsHovering(false));
    }
  }, [scratchMode]);

  const getCanvasOpacity = () => {
    if (scratchMode === "hover") return isHovering ? 0 : 1;
    if (scratchMode === "click") return isRevealed ? 0 : 1;
    return 1;
  };

  const getTextOpacity = () => {
    if (scratchMode === "scratch") {
      return isInitialized && maskImageUrl ? 1 : 0;
    }
    return getCanvasOpacity();
  };

  return (
    <div
      style={{
        ...style,
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "260px",
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
        userSelect: "none",
        touchAction: "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="shadow-2xl border-2 border-amber-400/40"
    >
      {/* Bottom layer - revealed secret content */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: useImage ? "transparent" : backgroundColor,
          backgroundImage: useImage ? `url(${bottomImage.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-lime text-xs font-bold tracking-widest uppercase mb-1">
            OFFSHORE ACCESS UNLOCKED
          </span>
          <h4 className="text-white text-3xl font-extrabold tracking-tight">
            20% OFF AI CONSULTING
          </h4>
          <p className="text-amber-300 text-sm font-mono mt-2 bg-amber-950/70 px-4 py-1.5 rounded-full border border-amber-400/30">
            PROMO: AELINE-GOLD-2026
          </p>
        </div>
      </div>

      {/* Top layer - scratch canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: scratchMode === "scratch" ? "crosshair" : "pointer",
          zIndex: 1,
          opacity: getCanvasOpacity(),
          transition: scratchMode !== "scratch" ? "opacity 0.3s ease" : "none",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />

      {/* Text & Logo overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2,
          opacity: getTextOpacity(),
          transition: scratchMode !== "scratch" ? "opacity 0.3s ease" : "none",
          maskImage:
            scratchMode === "scratch" && maskImageUrl
              ? `url(${maskImageUrl})`
              : "none",
          WebkitMaskImage:
            scratchMode === "scratch" && maskImageUrl
              ? `url(${maskImageUrl})`
              : "none",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {/* Website Logo */}
        {logoSrc && (
          <div className="mb-3 drop-shadow-md">
            <Image
              src={logoSrc}
              alt="Aeline"
              width={130}
              height={42}
              className="object-contain brightness-0 invert drop-shadow-md"
            />
          </div>
        )}

        {/* Simple "Scratch me" text */}
        <span className="text-xl font-bold tracking-tight text-amber-950 uppercase bg-amber-300 px-4 py-1 rounded-full shadow-inner border border-amber-400/50">
          {topText}
        </span>
      </div>
    </div>
  );
}
