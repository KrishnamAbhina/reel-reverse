import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollText, setShowScrollText] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCompactNavbar, setIsCompactNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      const scrollingUp = currentScrollY < lastScrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
      
      // Hide scroll text when user scrolls down more than 100px
      setShowScrollText(currentScrollY < 100);
      
      // Navbar visibility logic - always compact now
      if (currentScrollY < 50) {
        // At the top - show compact navbar
        setShowNavbar(true);
        setIsCompactNavbar(true);
      } else if (scrollingDown && currentScrollY > 150) {
        // Scrolling down past threshold - hide navbar
        setShowNavbar(false);
      } else if (scrollingUp && currentScrollY > 50) {
        // Scrolling up but not at top - show compact navbar
        setShowNavbar(true);
        setIsCompactNavbar(true);
      }
      
      setIsScrollingUp(scrollingUp);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [lastScrollY]);

  // Calculate animation values based on scroll
  const cardsVisible = scrollY > 300;
  const footerVisible = scrollY > 800;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <a href="#" style={styles.navLink} className="nav-link">About</a>
          <a href="#" style={styles.navLink} className="nav-link">Services</a>
        </div>
        
        <div style={styles.logo}>REEL REVERSE</div>
        
        <div style={styles.navRight}>
          <a href="#" style={styles.navLink} className="nav-link">Cases</a>
          <a href="#" style={styles.navLink} className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Thin line below navbar */}
      <div style={styles.navbarLine}></div>

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
            "Reel Reverse bridges the gap<br />
            between creators searching for <br />
            talent-and freelancers searching<br />
            for their next big break."
          </p>
        </div>
      </main>

      {/* Divider line below title */}
      <div style={styles.titleDivider}></div>

      {/* What We Do Best Section */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          <div style={styles.servicesMainLayout}>
            {/* Left side - Title */}
            <div style={styles.servicesHeaderSide}>
              <h2 
                style={{
                  ...styles.servicesTitle,
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                WHAT WE DO
              </h2>
            </div>

            {/* Right side - Grid */}
            <div style={styles.servicesGridContainer}>
              <div style={styles.servicesGrid}>
                {/* Branding */}
                <div 
                  style={{
                    ...styles.serviceCard,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(-100px)',
                    transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
                  }} 
                  className="service-card"
                >
                  <div style={styles.serviceIcon}>
                    <div style={styles.brandingIcon}></div>
                  </div>
                  <div style={styles.serviceContent}>
                    <h3 style={styles.serviceTitle}>BRANDING</h3>
                    <p style={styles.serviceDescription}>
                      We craft compelling brand identities that leave a lasting impression.
                    </p>
                  </div>
                </div>

                {/* Design */}
                <div 
                  style={{
                    ...styles.serviceCard,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(100px)',
                    transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
                  }} 
                  className="service-card"
                >
                  <div style={styles.serviceIcon}>
                    <div style={styles.designIcon}></div>
                  </div>
                  <div style={styles.serviceContent}>
                    <h3 style={styles.serviceTitle}>DESIGN</h3>
                    <p style={styles.serviceDescription}>
                      Innovative and aesthetic designs that bring your ideas to life.
                    </p>
                  </div>
                </div>

                {/* Video */}
                <div 
                  style={{
                    ...styles.serviceCard,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(-80px)',
                    transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
                  }} 
                  className="service-card"
                >
                  <div style={styles.serviceIcon}>
                    <div style={styles.videoIcon}></div>
                  </div>
                  <div style={styles.serviceContent}>
                    <h3 style={styles.serviceTitle}>VIDEO</h3>
                    <p style={styles.serviceDescription}>
                      Captivating visual storytelling that engages and resonates with your audience.
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div 
                  style={{
                    ...styles.serviceCard,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(80px)',
                    transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s',
                  }} 
                  className="service-card"
                >
                  <div style={styles.serviceIcon}>
                    <div style={styles.contentIcon}></div>
                  </div>
                  <div style={styles.serviceContent}>
                    <h3 style={styles.serviceTitle}>CONTENT</h3>
                    <p style={styles.serviceDescription}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div 
        style={{
          ...styles.scrollIndicator,
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateX(-50%) translateY(20px)' : 'translateX(-50%) translateY(0)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <div style={styles.scrollText}>SCROLL FOR MORE</div>
      </div>
    </div>
  );
};

export default Landing;

// ---------- Styles ----------
const styles = {
  container: {
    backgroundColor: '#000000ff',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
    position: 'relative',
    overflow: 'auto',
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
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(10px)',
  },

  // Thin line below navbar
  navbarLine: {
    position: 'fixed',
    bottom: '26.5rem',
    left: 0,
    right: 0,
    height: '0.5px',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    zIndex: 40,
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
    position: 'relative',
    color: 'white',
    textDecoration: 'none',
    paddingBottom: '1px',
    fontSize: '0.95rem',
    fontWeight: 300,
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },

  logo: {
    fontSize: '1.1rem',
    fontWeight: '400',
    letterSpacing: '2px',
    color: '#ffffffff',
  },

  // Main Content
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    padding: '0 3rem',
    paddingTop: '1.2rem',
  },

  mainTitle: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: '50',
    lineHeight: '0.9',
    letterSpacing: '-2px',
    color: '#ffffff',
    marginTop: '0.2rem',
    marginBottom:'0.2rem',
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
  },

  agencyText: {
    fontStyle: 'italic',
    fontWeight: '100',
    color:'#ffffffff'
  },

  description: {
    flex: '0 0 auto',
    marginLeft: '4rem',
    marginTop: '0rem',
  },

  descriptionText: {
    fontSize: '0.9rem',
    lineHeight: '1.3',
    fontWeight: '300',
    letterSpacing: '2px',
    margin: 0,
    color: '#888888',
  },

  // Divider line below title
  titleDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: '2rem',
    marginBottom: '4rem',
  },

  // Services Section
  servicesSection: {
    padding: '4rem 3rem',
    background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
  },

  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  servicesMainLayout: {
    display: 'flex',
    gap: '4rem',
  },

  servicesHeaderSide: {
    flex: '0 0 300px', // Fixed width for the title
  },

  servicesGridContainer: {
    flex: '1', // Takes remaining space
  },

  servicesTitle: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: '1rem',
    color: '#ffffff',
    letterSpacing: '2px',
    lineHeight: '1.1',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  serviceCard: {
    backgroundColor: 'transparent',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '3rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
  },

  serviceIcon: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  serviceContent: {
    flex: 1,
  },

  serviceTitle: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#ffffff',
    letterSpacing: '1px',
  },

  serviceDescription: {
    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
    lineHeight: '1.6',
    color: '#cccccc',
    fontWeight: '300',
  },

  // Service Icons
  brandingIcon: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    position: 'relative',
  },

  designIcon: {
    width: '40px',
    height: '40px',
    position: 'relative',
    border: '2px solid rgba(255, 255, 255, 0.6)',
    transform: 'rotate(45deg)',
  },

  videoIcon: {
    width: '40px',
    height: '40px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '50%',
  },

  contentIcon: {
    width: '40px',
    height: '40px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    transform: 'rotate(45deg)',
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
    pointerEvents: 'none',
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
    
    servicesSection: {
      padding: '2rem 1.5rem',
    },

    servicesMainLayout: {
      flexDirection: 'column',
    },

    servicesHeaderSide: {
      flex: 'none',
      textAlign: 'center',
      marginBottom: '2rem',
    },

    servicesGridContainer: {
      flex: 'none',
    },

    servicesGrid: {
      gridTemplateColumns: '1fr',
      gap: '0',
    },

    serviceCard: {
      borderRight: 'none',
      padding: '2rem 1.5rem',
      flexDirection: 'column',
      textAlign: 'center',
      gap: '1rem',
    },
  },
};

// Add hover effects and staggered animations with CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link:hover {
      color: #888888 !important;
      transition: color 0.3s ease !important;
    }
    
    .service-card:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 10px 30px rgba(56, 50, 50, 0.47) !important;
    }

    .service-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .service-card.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .service-card[data-delay="0.1"] { transition-delay: 0.1s; }
    .service-card[data-delay="0.2"] { transition-delay: 0.2s; }
    .service-card[data-delay="0.3"] { transition-delay: 0.3s; }
    .service-card[data-delay="0.4"] { transition-delay: 0.4s; }
    .service-card[data-delay="0.5"] { transition-delay: 0.5s; }
  `;
  document.head.appendChild(style);

  // Animate cards when services section becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.service-card');
        setTimeout(() => {
          cards.forEach((card) => {
            card.classList.add('animate');
          });
        }, 200);
      }
    });
  }, { threshold: 0.2 });

  // Start observing when DOM is ready
  setTimeout(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      observer.observe(servicesSection);
    }
  }, 100);
}
