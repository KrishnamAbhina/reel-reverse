import React, { useState, useEffect } from 'react';

function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
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
      <div style={styles.content}>
        {/* Left Side - Large Typography */}
        <div 
          style={{
            ...styles.leftSide,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
          }}
        >
          <div style={styles.decorativeElement}>
            <div style={styles.circle}></div>
            <div style={styles.line}></div>
          </div>
          
          <h1 style={styles.mainTitle}>
            LET'S<br />
            GET IN<br />
            TOUCH
          </h1>
        </div>

        {/* Right Side - Contact Form */}
        <div 
          style={{
            ...styles.rightSide,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(50px)',
          }}
        >
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>FULL NAME</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={styles.input}
                  className="minimal-input"
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  className="minimal-input"
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  className="minimal-input"
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{...styles.input, ...styles.textarea}}
                  className="minimal-input"
                  rows="4"
                />
              </div>
            </div>

            <div style={styles.submitSection}>
              <button 
                type="submit" 
                style={styles.submitButton}
                className="arrow-button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Information */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>LEDVOLD</h4>
            <p style={styles.footerText}>
              300 E MAPLE WALK<br />
              LEDUXGATE PIE 026<br />
              780 199 8944
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>SPRUCE GROVE</h4>
            <p style={styles.footerText}>
              203 CHURCHILL ROAD<br />
              SPRUCE GROVE AB T7X 3X4<br />
              780 962 3411
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    padding: '4rem 2rem',
    gap: '4rem',
    alignItems: 'center',
  },
  leftSide: {
    position: 'relative',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  rightSide: {
    transition: 'opacity 1s ease, transform 1s ease',
    transitionDelay: '0.2s',
  },
  decorativeElement: {
    position: 'absolute',
    top: '-2rem',
    right: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  circle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'white',
  },
  line: {
    width: '120px',
    height: '2px',
    backgroundColor: 'white',
    transform: 'rotate(45deg)',
  },
  mainTitle: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: '300',
    lineHeight: '0.9',
    letterSpacing: '-0.02em',
    margin: 0,
    textTransform: 'uppercase',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '400',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#cccccc',
  },
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #333333',
    color: 'white',
    fontSize: '1rem',
    padding: '0.75rem 0',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
  },
  textarea: {
    resize: 'vertical',
    minHeight: '100px',
    fontFamily: 'inherit',
  },
  submitSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '2rem',
  },
  submitButton: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  footer: {
    borderTop: '1px solid #333333',
    padding: '2rem 0',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: 0,
  },
  footerText: {
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#cccccc',
    margin: 0,
  },
};

// Inject minimal CSS styles
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    /* Input Focus States */
    .minimal-input:focus {
      border-bottom-color: white !important;
      outline: none;
    }
    
    .minimal-input::placeholder {
      color: #666666;
    }

    /* Button Hover Effect */
    .arrow-button:hover {
      background-color: white !important;
      color: black !important;
      transform: scale(1.05);
    }

    /* Single column layout for specific inputs */
    .form-row:nth-child(1),
    .form-row:nth-child(3) {
      grid-template-columns: 1fr !important;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .content {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
        padding: 2rem 1rem !important;
      }
      
      .decorativeElement {
        top: -1rem !important;
        right: 1rem !important;
      }
      
      .circle {
        width: 40px !important;
        height: 40px !important;
      }
      
      .line {
        width: 80px !important;
      }
      
      .formRow {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
      
      .footerContent {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
    }

    @media (max-width: 480px) {
      .mainTitle {
        font-size: 2.5rem !important;
      }
    }
  `;
  
  if (!document.head.querySelector('style[data-contact-minimal]')) {
    styleSheet.setAttribute('data-contact-minimal', 'true');
    document.head.appendChild(styleSheet);
  }
};

export default Contact;
