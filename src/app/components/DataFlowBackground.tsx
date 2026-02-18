import { useEffect, useRef } from 'react';

interface Packet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function DataFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Create packets
    const packets: Packet[] = [];
    const packetCount = 50;

    for (let i = 0; i < packetCount; i++) {
      packets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update packets
      packets.forEach((packet) => {
        // Draw packet
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${packet.opacity})`;
        ctx.fill();

        // Draw glow
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${packet.opacity * 0.2})`;
        ctx.fill();

        // Update position
        packet.x += packet.vx;
        packet.y += packet.vy;

        // Wrap around edges
        if (packet.x < 0) packet.x = canvas.width;
        if (packet.x > canvas.width) packet.x = 0;
        if (packet.y < 0) packet.y = canvas.height;
        if (packet.y > canvas.height) packet.y = 0;

        // Draw connections between nearby packets
        packets.forEach((otherPacket) => {
          const dx = packet.x - otherPacket.x;
          const dy = packet.y - otherPacket.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(packet.x, packet.y);
            ctx.lineTo(otherPacket.x, otherPacket.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
      
      {/* Canvas for data packets */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Scanning beam */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(transparent 0%, rgba(59, 130, 246, 0.8) 50%, transparent 100%)',
          backgroundSize: '100% 400px',
          animation: 'scan 10s ease-in-out infinite',
        }}
      />

      {/* Corner circuit accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 50 L 30 50 L 30 30 L 50 30 L 50 0" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="0.5" fill="none"/>
          <circle cx="30" cy="50" r="2" fill="rgba(59, 130, 246, 0.8)"/>
          <circle cx="30" cy="30" r="2" fill="rgba(59, 130, 246, 0.8)"/>
          <circle cx="50" cy="30" r="2" fill="rgba(59, 130, 246, 0.8)"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 50 L 30 50 L 30 30 L 50 30 L 50 0" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="0.5" fill="none"/>
          <circle cx="30" cy="50" r="2" fill="rgba(59, 130, 246, 0.8)"/>
          <circle cx="30" cy="30" r="2" fill="rgba(59, 130, 246, 0.8)"/>
          <circle cx="50" cy="30" r="2" fill="rgba(59, 130, 246, 0.8)"/>
        </svg>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.05;
          }
          50% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}

