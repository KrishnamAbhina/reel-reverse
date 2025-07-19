import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={styles.container}>
      {/* Background floating elements */}
      <div style={styles.floatingElement1}></div>
      <div style={styles.floatingElement2}></div>
      <div style={styles.floatingElement3}></div>
      
      {/* Main glassmorphic card */}
      <div
        style={{
          ...styles.glassCard,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
        }}
      >
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
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Floating background elements
  floatingElement1: {
    position: 'absolute',
    top: '10%',
    right: '15%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    borderRadius: '50%',
    filter: 'blur(2px)',
    zIndex: 0,
  },
  
  floatingElement2: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '150px',
    height: '150px',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
    borderRadius: '50%',
    filter: 'blur(3px)',
    zIndex: 0,
  },
  
  floatingElement3: {
    position: 'absolute',
    top: '60%',
    right: '5%',
    width: '120px',
    height: '120px',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
    borderRadius: '50%',
    filter: 'blur(4px)',
    zIndex: 0,
  },

  // Main glassmorphic card
  glassCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    maxWidth: '600px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 25px 45px rgba(0, 0, 0, 0.3)',
  },

  hero: {
    textAlign: 'center',
  },
  
  intro: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
  },
  
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    color: '#fff',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  outline: {
    color: 'transparent',
    WebkitTextStroke: '2px rgba(255, 255, 255, 0.6)',
    background: 'none',
    WebkitBackgroundClip: 'initial',
    WebkitTextFillColor: 'transparent',
  },
  
  location: {
    fontSize: '1.1rem',
    marginTop: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '2.5rem',
  },
  
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.2rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  
  filledBtn: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
    color: '#000',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
  },
  
  outlinedBtn: {
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  
  // Info badge at bottom
  infoBadge: {
    position: 'absolute',
    bottom: '1.5rem',
    left: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '0.8rem 1rem',
  },
  
  badgeIcon: {
    fontSize: '1.2rem',
  },
  
  badgeTitle: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    lineHeight: '1.2',
  },
  
  badgeSubtitle: {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.2',
  },
};
