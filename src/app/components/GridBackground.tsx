export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />

      {/* Animated scanline */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(transparent 0%, rgba(59, 130, 246, 0.8) 50%, transparent 100%)',
          backgroundSize: '100% 200px',
          animation: 'scan 8s linear infinite',
        }}
      />

      {/* Circuit board image overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(figma:asset/da054986995365173243dc68b28ad0ee82553952.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />

      <style>{`
        @keyframes scan {
          0% {
            background-position: 0 -200px;
          }
          100% {
            background-position: 0 100%;
          }
        }
      `}</style>
    </div>
  );
}

