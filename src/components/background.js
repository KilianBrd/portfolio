import React from "react";

const Background = () => {
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
  };

  const gradientStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%)",
  };

  const textureStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.1) 0%, transparent 50%)
    `,
  };

  const ambientLightStyle = {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)",
    animation: "rotate 30s linear infinite",
    pointerEvents: "none",
  };

  const gridStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    pointerEvents: "none",
  };

  const particlePositions = [
    { top: "20%", left: "10%", size: 4, delay: "0s" },
    { top: "60%", left: "90%", size: 6, delay: "-5s" },
    { top: "80%", left: "20%", size: 3, delay: "-10s" },
    { top: "30%", left: "70%", size: 5, delay: "-15s" },
    { top: "10%", left: "50%", size: 2, delay: "-8s" },
  ];

  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div style={backgroundStyle}>
        {/* Fond dégradé principal */}
        <div style={gradientStyle} />

        {/* Effet de texture */}
        <div style={textureStyle} />

        {/* Éclairage ambiant */}
        <div style={ambientLightStyle} />

        {/* Grille */}
        <div style={gridStyle} />

        {/* Particules */}
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              top: particle.top,
              left: particle.left,
              animation: `float 20s infinite linear`,
              animationDelay: particle.delay,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
