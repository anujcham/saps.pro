"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  pulseSpeed: number;
  color: string;
}

export function HeroCyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Create energetic cyber particles
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const colors = ["#00f0ff", "#38bdf8", "#00ff9d", "#67e8f9"];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Floating volumetric glow orbs
    const orbs = [
      { x: width * 0.25, y: height * 0.35, vx: 0.2, vy: 0.15, r: 240, color: "rgba(0, 240, 255, 0.09)" },
      { x: width * 0.75, y: height * 0.55, vx: -0.18, vy: -0.12, r: 280, color: "rgba(0, 255, 157, 0.07)" },
      { x: width * 0.5, y: height * 0.8, vx: 0.12, vy: -0.2, r: 200, color: "rgba(56, 189, 248, 0.08)" },
    ];

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render floating volumetric atmospheric orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        const radial = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        radial.addColorStop(0, orb.color);
        radial.addColorStop(1, "transparent");

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw cyber connection web
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap boundaries
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse interactive repel/attract
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= dxMouse * force * 0.03;
          p1.y -= dyMouse * force * 0.03;
        }

        // Pulse alpha
        const pulse = Math.sin(time + i) * 0.25;
        const currentAlpha = Math.max(0.1, Math.min(1, p1.alpha + pulse));

        // Connect nearby particles with digital energy streams
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.22 * currentAlpha;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Space Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(7,16,36,0.95)_0%,#050811_85%)]" />

      {/* Cyber Mesh Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />

      {/* Subtle Digital Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,8,17,0.7)_85%,#050811_100%)]" />
    </div>
  );
}

