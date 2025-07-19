import React, { useState, useEffect } from 'react';

function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    thoughts: ''
  });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
    injectStyles();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>WWprod.</div>
          <nav style={styles.nav}>
            <a href="#" style={styles.navLink}>About us</a>
            <a href="#" style={styles.navLink}>Contacts</a>
            <a href="#" style={styles.navLink}>Our products</a>
          </nav>
          <div style={styles.hamburger}>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </div>
        </div>
      </header>

      {/* Rainbow Arc Top */}
      <div className="rainbow-arc-top"></div>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.contentWrapper}>
          {/* Left Column - Form */}
          <div 
            style={{
              ...styles.leftColumn,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  className="futuristic-input"
                />
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  className="futuristic-input"
                />
              </div>
              
              <div style={styles.inputGroup}>
                <textarea
                  name="thoughts"
                  placeholder="Share your thoughts"
                  value={formData.thoughts}
                  onChange={handleInputChange}
                  style={{...styles.input, ...styles.textarea}}
                  className="futuristic-input"
                  rows="4"
                />
              </div>
              
              <button 
                type="submit" 
                style={styles.submitButton}
                className="neon-button"
              >
                SHARE YOUR FEEDBACK
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div 
            style={{
              ...styles.rightColumn,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(30px)',
            }}
          >
            <div style={styles.contactInfo}>
              <h1 style={styles.contactTitle} className="glitch-text">
                Contact
                <span style={styles.contactUs}>Us</span>
              </h1>
              
              <p style={styles.contactDescription}>
                It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Rainbow Arc Bottom */}
      <div className="rainbow-arc-bottom"></div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <span style={styles.footerLabel}>CALL US</span>
            <span style={styles.footerValue}>+909-909-9009</span>
          </div>
          <div style={styles.footerSection}>
            <span style={styles.footerLabel}>HERE'S OUR ADDRESS</span>
            <span style={styles.footerValue}>Jameson Sparkle St. 25/A, Los Angeles, US</span>
          </div>
          <div style={styles.footerSection}>
            <span style={styles.footerLabel}>SEND US EMAIL</span>
            <span style={styles.footerValue}>we.love.you@mail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    padding: '1rem 0',
    borderBottom: '1px solid #333',
    position: 'relative',
    zIndex: 10,
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
  },
  hamburgerLine: {
    width: '24px',
    height: '2px',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 0',
    position: 'relative',
    zIndex: 5,
  },
  contentWrapper: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  leftColumn: {
    transition: 'opacity 1s ease, transform 1s ease',
  },
  rightColumn: {
    transition: 'opacity 1s ease, transform 1s ease',
    transitionDelay: '0.2s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '1rem 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #333',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    resize: 'vertical',
    minHeight: '100px',
    paddingTop: '1rem',
  },
  submitButton: {
    padding: '1rem 2rem',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '1rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  contactInfo: {
    textAlign: 'left',
  },
  contactTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    lineHeight: 1.2,
  },
  contactUs: {
    color: '#4a9eff',
    display: 'block',
  },
  contactDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#ccc',
    maxWidth: '400px',
  },
  footer: {
    borderTop: '1px solid #333',
    padding: '2rem 0',
    marginTop: 'auto',
    position: 'relative',
    zIndex: 10,
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  footerLabel: {
    fontSize: '0.7rem',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  footerValue: {
    fontSize: '0.9rem',
    color: 'white',
  },
};

// Inject advanced CSS styles
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    /* Rainbow Arc Styles */
    .rainbow-arc-top, .rainbow-arc-bottom {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 100px;
      background: linear-gradient(90deg, 
        #ff6b6b 0%, 
        #feca57 25%, 
        #48dbfb 50%, 
        #ff9ff3 75%, 
        #54a0ff 100%);
      border-radius: 50%;
      opacity: 0.7;
      filter: blur(1px);
    }
    
    .rainbow-arc-top {
      top: -50px;
      clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
    
    .rainbow-arc-bottom {
      bottom: -50px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    /* Futuristic Input Styles */
    .futuristic-input::placeholder {
      color: #666;
    }
    
    .futuristic-input:focus {
      border-bottom-color: #4a9eff !important;
      box-shadow: 0 1px 0 0 #4a9eff;
    }

    /* Neon Button Effect */
    .neon-button {
      background: linear-gradient(135deg, 
        rgba(255, 107, 107, 0.2) 0%, 
        rgba(74, 158, 255, 0.2) 100%) !important;
      border: 2px solid transparent !important;
      background-clip: padding-box !important;
      box-shadow: 
        0 0 0 2px transparent,
        inset 0 0 0 1px rgba(255, 255, 255, 0.1),
        0 0 20px rgba(74, 158, 255, 0.3) !important;
    }
    
    .neon-button:hover {
      box-shadow: 
        0 0 0 2px rgba(255, 107, 107, 0.5),
        inset 0 0 0 1px rgba(255, 255, 255, 0.2),
        0 0 30px rgba(74, 158, 255, 0.5),
        0 0 40px rgba(255, 107, 107, 0.3) !important;
      transform: translateY(-2px) !important;
    }

    /* Glitch Text Effect */
    .glitch-text {
      position: relative;
      color: white;
    }
    
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .glitch-text::before {
      color: #ff6b6b;
      transform: translate(-2px, -2px);
      opacity: 0.8;
      z-index: -1;
    }
    
    .glitch-text::after {
      color: #4a9eff;
      transform: translate(2px, 2px);
      opacity: 0.8;
      z-index: -2;
    }

    /* Hover Effects */
    nav a:hover {
      color: #4a9eff !important;
    }
    
    .hamburger:hover .hamburger-line {
      background-color: #4a9eff !important;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .contentWrapper {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .footerContent {
        grid-template-columns: 1fr !important;
        text-align: center;
      }
      
      .nav {
        display: none;
      }
    }
  `;
  
  if (!document.head.querySelector('style[data-contact-futuristic]')) {
    styleSheet.setAttribute('data-contact-futuristic', 'true');
    document.head.appendChild(styleSheet);
  }
};

export default Contact;
