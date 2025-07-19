import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Services</a>
        </div>
        
        <div style={styles.logo}>WEN LAUNCH</div>
        
        <div style={styles.navRight}>
          <a href="#" style={styles.navLink}>Cases</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* Creative Studio Badge */}
      <div style={styles.creativeBadge}>
        <div style={styles.creativeText}>Creative</div>
        <div style={styles.studioText}>STUDIO</div>
      </div>

      {/* Arrow Icon */}
      <div style={styles.arrowIcon}>↗</div>

      {/* Main Content */}
      <main 
        style={{
          ...styles.mainContent,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <h1 style={styles.mainTitle}>
          WE ARE<br />
          FULL-SERVICE<br />
          <span style={styles.agencyText}>AGENCY</span>
        </h1>

        <div style={styles.description}>
          <p style={styles.descriptionText}>
            The first full-stack Web3<br />
            creative agency. Integrating AI<br />
            technology to deliver best-in-<br />
            class client experience.
          </p>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <div style={styles.scrollCircle}>
          <div style={styles.scrollArrow}>↓</div>
        </div>
        <div style={styles.scrollText}>SCROLL FOR MORE</div>
      </div>
    </div>
  );
};

export default Landing;

// ---------- Styles ----------
const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  // Navigation
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 3rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(26, 26, 26, 0.9)',
    backdropFilter: 'blur(10px)',
  },

  navLeft: {
    display: 'flex',
    gap: '2.5rem',
  },

  navRight: {
    display: 'flex',
    gap: '2.5rem',
  },

  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
    transition: 'opacity 0.3s ease',
    cursor: 'pointer',
  },

  logo: {
    fontSize: '1.1rem',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#ffffff',
  },

  // Creative Studio Badge
  creativeBadge: {
    position: 'fixed',
    bottom: '3rem',
    left: '3rem',
    zIndex: 100,
  },

  creativeText: {
    fontSize: '0.85rem',
    fontWeight: '300',
    letterSpacing: '1px',
    color: '#ffffff',
    marginBottom: '0.2rem',
  },

  studioText: {
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#ffffff',
  },

  // Arrow Icon
  arrowIcon: {
    position: 'fixed',
    top: '50%',
    right: '3rem',
    fontSize: '2rem',
    color: '#ffffff',
    transform: 'translateY(-50%)',
    zIndex: 100,
  },

  // Main Content
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    padding: '0 3rem',
    paddingTop: '6rem',
  },

  mainTitle: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: '700',
    lineHeight: '0.9',
    letterSpacing: '-2px',
    color: '#ffffff',
    margin: 0,
    flex: 1,
  },

  agencyText: {
    fontStyle: 'italic',
    fontWeight: '300',
  },

  description: {
    flex: '0 0 auto',
    marginLeft: '4rem',
    marginTop: '-2rem',
  },

  descriptionText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#cccccc',
    fontWeight: '300',
    letterSpacing: '0.3px',
    margin: 0,
  },

  // Scroll Indicator
  scrollIndicator: {
    position: 'fixed',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 100,
  },

  scrollCircle: {
    width: '60px',
    height: '60px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    position: 'relative',
  },

  scrollArrow: {
    fontSize: '1.2rem',
    color: '#ffffff',
  },

  scrollText: {
    fontSize: '0.7rem',
    letterSpacing: '2px',
    color: '#888888',
    fontWeight: '400',
    textAlign: 'center',
    transform: 'rotate(0deg)',
    writingMode: 'horizontal-tb',
  },

  // Responsive Design
  '@media (max-width: 768px)': {
    navbar: {
      padding: '1.5rem 2rem',
      flexDirection: 'column',
      gap: '1rem',
    },
    
    mainContent: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 2rem',
      paddingTop: '8rem',
    },
    
    description: {
      marginLeft: 0,
      marginTop: '3rem',
    },
    
    creativeBadge: {
      bottom: '2rem',
      left: '2rem',
    },
    
    arrowIcon: {
      right: '2rem',
    },
  },
};
