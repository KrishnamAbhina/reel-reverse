import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
      }}
    >
      {/* Navbar */}
      
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
    </div>
  );
};

export default Landing;

// ---------- Styles ----------
const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', sans-serif",
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  dot: {
    color: '#ff007a',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.95rem',
  },
  emailBtn: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  hero: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  intro: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#aaa',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    color: '#fff',
  },
  outline: {
    color: 'transparent',
    WebkitTextStroke: '1.3px white',
  },
  location: {
    fontSize: '1rem',
    marginTop: '0.8rem',
    color: '#aaa',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  filledBtn: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '0.9rem 1.7rem',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  outlinedBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid white',
    padding: '0.9rem 1.7rem',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
};
