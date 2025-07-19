import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Navigation hook

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate(); // 👈 Setup navigation

  useEffect(() => {
    injectKeyframes();
    setTimeout(() => setLoaded(true), 300);
    setTimeout(() => setShowSubtitle(true), 2500);
    setTimeout(() => setMoveUp(true), 4000);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Title + Subtitle */}
        <div
          style={{
            ...styles.titleBlock,
            transform: moveUp ? 'translateY(-35%) scale(0.85)' : 'translateY(0) scale(1)',
            transition: 'transform 3s ease',
          }}
        >
          <div style={styles.titleWrapper}>
            <span style={{ ...styles.titleText, ...styles.shadowText }}>Reel Reverse.</span>
            <span
              style={{
                ...styles.titleText,
                ...styles.whiteFill,
                backgroundSize: loaded ? '100% 100%' : '0% 100%',
              }}
            >
              Reel Reverse.
            </span>
          </div>

          {/* Subtitle */}
          <p
            style={{
              ...styles.subtitle,
              opacity: showSubtitle ? 1 : 0,
              transform: showSubtitle ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 2s ease, transform 2s ease',
              transitionDelay: '0.5s',
            }}
          >
            | Your creative partner in edits, thumbnails, and design.
          </p>
        </div>

        {/* Get Started Button */}
        <div
          style={{
            ...styles.card,
            opacity: moveUp ? 1 : 0,
            transform: moveUp ? 'translateY(0)' : 'translateY(100px)',
            transition: 'opacity 2s ease, transform 2.5s ease',
            transitionDelay: '0.5s',
          }}
        >
          <button
            style={{
              ...styles.btn,
              ...(hovered ? styles.btnHover : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => navigate('/get-started')} // 👈 Navigate to landing page
          >
            Get Started {hovered && <span style={styles.icon}> :) </span>}
          </button>
          
          {/* Contact Link */}
          <div style={styles.contactLink}>
            <button
              style={styles.contactBtn}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// Styles
const styles = {
  container: {
    backgroundColor: '#000',
    height: '100vh',
    overflow: 'hidden',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  },
  wrapper: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '100vw',
    position: 'relative',
  },
  titleBlock: {
    zIndex: 2,
    willChange: 'transform',
  },
  titleWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: '10vw',
    lineHeight: 1,
    display: 'inline-block',
  },
  shadowText: {
    color: '#1a1a1a',
    textShadow:
      '1px 1px 2px rgba(255,255,255,0.05), -1px -1px 2px rgba(0,0,0,0.4), 0px 2px 6px rgba(0,0,0,0.7)',
  },
  whiteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(to right, white 0%, white 100%)',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    pointerEvents: 'none',
    transition: 'background-size 4.5s ease',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 'clamp(12px, 2vw, 16px)',
    marginTop: '1rem',
  },
  card: {},
  btn: {
    padding: '0.75rem 2rem',
    borderRadius: '25px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.58)',
  },
  btnHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)',
  },
  icon: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1',
    display: 'inline-block',
    marginLeft: '4px',
    transition: 'opacity 0.3s ease',
  },
  contactLink: {
    marginTop: '1rem',
  },
  contactBtn: {
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    color: '#ccc',
    border: '1px solid #333',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

// Keyframe injection
const injectKeyframes = () => {
  if (typeof document === 'undefined') return;
  const styleSheet = document.styleSheets[0];
  try {
    styleSheet.insertRule(`
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `, styleSheet.cssRules.length);
  } catch (e) {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
};
