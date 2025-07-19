import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-20px) translateX(10px); }
        66% { transform: translateY(10px) translateX(-5px); }
      }
      
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(15px) translateX(-10px); }
        66% { transform: translateY(-10px) translateX(8px); }
      }
      
      @keyframes float3 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-15px) translateX(12px); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Background floating elements */}
      <div style={styles.floatingElement1}></div>
      <div style={styles.floatingElement2}></div>
      <div style={styles.floatingElement3}></div>
      <div style={styles.floatingElement4}></div>
      <div style={styles.floatingElement5}></div>
      
      {/* Glass texture overlay */}
      <div style={styles.glassTexture}></div>
      
      {/* Main glassmorphic card */}
      <div
        style={{
          ...styles.glassCard,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
          transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Inner glass reflection */}
        <div style={styles.glassReflection}></div>
        
        {/* Hero */}
        <div style={styles.hero}>
          <p style={styles.intro}>👋 My name is Abhina and I am a creative editor</p>

          <h1 style={styles.title}>
            Webdesigner <br />
            <span style={styles.outline}> & Video Editor</span>
          </h1>

          <p style={styles.location}>based in India.</p>

          <div style={styles.buttons}>
            <button style={styles.filledBtn}>You need a designer</button>
            <button style={styles.outlinedBtn}>You need a video editor</button>
          </div>
        </div>
        
        {/* Small info badge */}
        <div style={styles.infoBadge}>
          <div style={styles.badgeIcon}>🎨</div>
          <div>
            <div style={styles.badgeTitle}>Isolated Objects &</div>
            <div style={styles.badgeSubtitle}>Editable Colors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

// ---------- Styles ----------
const styles = {
  container: {
    background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Enhanced floating background elements
  floatingElement1: {
    position: 'absolute',
    top: '15%',
    right: '20%',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(3px)',
    zIndex: 0,
    animation: 'float1 6s ease-in-out infinite',
  },
  
  floatingElement2: {
    position: 'absolute',
    bottom: '25%',
    left: '15%',
    width: '120px',
    height: '120px',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(4px)',
    zIndex: 0,
    animation: 'float2 8s ease-in-out infinite',
  },
  
  floatingElement3: {
    position: 'absolute',
    top: '60%',
    right: '10%',
    width: '90px',
    height: '90px',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(5px)',
    zIndex: 0,
    animation: 'float3 7s ease-in-out infinite',
  },
  
  floatingElement4: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    width: '60px',
    height: '60px',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(2px)',
    zIndex: 0,
    animation: 'float1 5s ease-in-out infinite reverse',
  },
  
  floatingElement5: {
    position: 'absolute',
    bottom: '10%',
    right: '30%',
    width: '100px',
    height: '100px',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 80%)',
    borderRadius: '50%',
    filter: 'blur(6px)',
    zIndex: 0,
    animation: 'float2 9s ease-in-out infinite',
  },

  // Glass texture overlay
  glassTexture: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
      radial-gradient(circle at 40% 90%, rgba(255, 255, 255, 0.01) 0%, transparent 50%)
    `,
    zIndex: 0,
  },

  // Enhanced glassmorphic card (smaller)
  glassCard: {
    background: `
      linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)
    `,
    backdropFilter: 'blur(25px) saturate(180%)',
    WebkitBackdropFilter: 'blur(25px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '20px',
    padding: '2rem 1.8rem',
    maxWidth: '420px',
    width: '100%',
    position: 'relative',
    zIndex: 2,
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    overflow: 'hidden',
  },

  // Glass reflection effect
  glassReflection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
    borderRadius: '20px 20px 0 0',
    zIndex: -1,
  },

  hero: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  
  intro: {
    fontSize: '0.95rem',
    marginBottom: '1.2rem',
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '400',
    letterSpacing: '0.3px',
  },
  
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    lineHeight: '1.1',
    color: '#fff',
    marginBottom: '0.8rem',
    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
  },
  
  outline: {
    color: 'transparent',
    WebkitTextStroke: '1.8px rgba(255, 255, 255, 0.7)',
    background: 'none',
    WebkitBackgroundClip: 'initial',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))',
  },
  
  location: {
    fontSize: '0.95rem',
    marginTop: '0.8rem',
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: '2rem',
    letterSpacing: '0.3px',
  },
  
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.8rem',
    flexWrap: 'wrap',
  },
  
  filledBtn: {
    background: `
      linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%),
      linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)
    `,
    color: '#000',
    border: 'none',
    padding: '0.8rem 1.6rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.85rem',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `
      0 8px 25px rgba(255, 255, 255, 0.15),
      0 4px 10px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `,
    position: 'relative',
    overflow: 'hidden',
  },
  
  outlinedBtn: {
    background: `
      rgba(255, 255, 255, 0.08),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)
    `,
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '0.8rem 1.6rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.85rem',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `
      0 8px 25px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    position: 'relative',
    overflow: 'hidden',
  },
  
  // Enhanced info badge
  infoBadge: {
    position: 'absolute',
    bottom: '1.2rem',
    left: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: `
      rgba(255, 255, 255, 0.08),
      linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)
    `,
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    padding: '0.6rem 0.8rem',
    boxShadow: `
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
  },
  
  badgeIcon: {
    fontSize: '1rem',
    filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))',
  },
  
  badgeTitle: {
    fontSize: '0.7rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    lineHeight: '1.2',
    letterSpacing: '0.2px',
  },
  
  badgeSubtitle: {
    fontSize: '0.65rem',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: '1.2',
    letterSpacing: '0.2px',
  },
};
