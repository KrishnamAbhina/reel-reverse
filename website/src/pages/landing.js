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
  const cardsVisible = scrollY > 200;
  const processVisible = scrollY > 600;
  const footerVisible = scrollY > 1000;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav 
        style={{
          ...styles.navbar,
          ...styles.compactNavbar,
          opacity: showNavbar ? 1 : 0,
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, padding 0.3s ease-out, backdrop-filter 0.3s ease-out',
        }}
      >
        {!isMobile ? (
          <>
            <div style={styles.navLeft}>
              <a href="#" style={{...styles.navLink, ...styles.compactNavLink}} className="nav-link">About</a>
              <a href="#" style={{...styles.navLink, ...styles.compactNavLink}} className="nav-link">Services</a>
            </div>
            
            <div style={{...styles.logo, ...styles.compactLogo}}>REEL REVERSE</div>
            
            <div style={styles.navRight}>
              <a href="#" style={{...styles.navLink, ...styles.compactNavLink}} className="nav-link">Cases</a>
              <a href="#" style={{...styles.navLink, ...styles.compactNavLink}} className="nav-link">Contact</a>
            </div>
          </>
        ) : (
          <>
            <div style={{...styles.logo, ...styles.compactLogo}}>REEL REVERSE</div>
            <div style={styles.hamburger} onClick={toggleMobileMenu}>
              <div style={{...styles.hamburgerLine, transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></div>
              <div style={{...styles.hamburgerLine, opacity: isMobileMenuOpen ? 0 : 1}}></div>
              <div style={{...styles.hamburgerLine, transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'}}></div>
            </div>
          </>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          style={{
            ...styles.mobileMenu,
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          }}
        >
          <a href="#" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Cases</a>
          <a href="#" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

     
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

      {/* What We Do Section */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          {/* Title at top */}
          <div style={styles.servicesHeader}>
            <h2 
              style={{
                ...styles.servicesTitle,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              what we do /
            </h2>
          </div>

          {/* 2x2 Grid below title */}
          <div style={styles.servicesGrid}>
            {/* Branding */}
            <div 
              style={{
                ...styles.serviceCard,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
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
                transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
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
                transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
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
                transform: cardsVisible ? 'translateY(0)' : 'translateY(50px)',
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
      </section>

      {/* Proven Process for Success Section - Timeline */}
      <section style={styles.processSection}>
        <div style={styles.processContainer}>
          <div 
            style={{
              ...styles.processHeader,
              opacity: processVisible ? 1 : 0,
              transform: processVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h2 style={styles.processTitle}>Proven process for success</h2>
            <p style={styles.processSubtitle}>We help you on every step of the journey</p>
          </div>

          <div style={styles.timelineContainer}>
            {/* Timeline line */}
            <div style={styles.timelineLine}></div>

            {/* Step 01 */}
            <div 
              style={{
                ...styles.timelineStep,
                ...styles.timelineStepLeft,
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
              }}
            >
              <div style={styles.timelineContent}>
                <div style={styles.stepNumber}>01</div>
                <h3 style={styles.stepTitle}>Contact me</h3>
                <p style={styles.stepDescription}>
                  Donec accumsan sagittis magna, vel dapibus magna molestie ut. Nulla non mi tellus sagittis.
                </p>
              </div>
              <div style={styles.timelineDot}></div>
            </div>

            {/* Step 02 */}
            <div 
              style={{
                ...styles.timelineStep,
                ...styles.timelineStepRight,
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
              }}
            >
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.stepNumber}>02</div>
                <h3 style={styles.stepTitle}>Research</h3>
                <p style={styles.stepDescription}>
                  Donec accumsan sagittis magna, vel dapibus magna molestie ut. Nulla non mi tellus sagittis.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div 
              style={{
                ...styles.timelineStep,
                ...styles.timelineStepLeft,
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
              }}
            >
              <div style={styles.timelineContent}>
                <div style={styles.stepNumber}>03</div>
                <h3 style={styles.stepTitle}>Work</h3>
                <p style={styles.stepDescription}>
                  Donec accumsan sagittis magna, vel dapibus magna molestie ut. Nulla non mi tellus sagittis.
                </p>
              </div>
              <div style={styles.timelineDot}></div>
            </div>

            {/* Step 04 */}
            <div 
              style={{
                ...styles.timelineStep,
                ...styles.timelineStepRight,
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
              }}
            >
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.stepNumber}>04</div>
                <h3 style={styles.stepTitle}>Test & results</h3>
                <p style={styles.stepDescription}>
                  Donec accumsan sagittis magna, vel dapibus magna molestie ut. Nulla non mi tellus sagittis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          ...styles.footer,
          opacity: footerVisible ? 1 : 0,
          transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>REEL REVERSE</h3>
            <p style={styles.footerDescription}>
              Bridging the gap between creators and talent, one project at a time.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Services</h4>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>Strategy</li>
              <li style={styles.footerListItem}>Campaigns</li>
              <li style={styles.footerListItem}>Social Media</li>
              <li style={styles.footerListItem}>Analytics</li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Company</h4>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>About</li>
              <li style={styles.footerListItem}>Cases</li>
              <li style={styles.footerListItem}>Contact</li>
              <li style={styles.footerListItem}>Careers</li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Connect</h4>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>Instagram</li>
              <li style={styles.footerListItem}>9849772570</li>
              <li style={styles.footerListItem}>krishnamabhina@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.footerCopyright}>
            © 2024 Reel Reverse. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll Indicator */}
      <div 
        style={{
          ...styles.scrollIndicator,
          opacity: showScrollText ? 1 : 0,
          transform: showScrollText ? 'translateY(0)' : 'translateY(20px)',
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
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
    position: 'relative',
    overflowX: 'hidden',
    width: '100%',
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
    width: '100%',
    boxSizing: 'border-box',
  },

  compactNavbar: {
    padding: '1rem 3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
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

  compactNavLink: {
    fontSize: '0.85rem',
    letterSpacing: '0.3px',
  },

  logo: {
    fontSize: '1.1rem',
    fontWeight: '400',
    letterSpacing: '2px',
    color: '#ffffffff',
    transition: 'all 0.3s ease',
  },

  compactLogo: {
    fontSize: '0.95rem',
    letterSpacing: '1.5px',
  },

  // Mobile Navigation
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '4px',
  },

  hamburgerLine: {
    width: '25px',
    height: '2px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
  },

  mobileMenu: {
    position: 'fixed',
    top: '4rem',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.98)',
    backdropFilter: 'blur(20px)',
    zIndex: 99,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transition: 'all 0.3s ease-out',
    width: '100%',
    boxSizing: 'border-box',
  },

  mobileNavLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '300',
    letterSpacing: '1px',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'color 0.3s ease',
  },

  // Main Content
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '0 3rem',
    paddingTop: '4rem',
    width: '100%',
    boxSizing: 'border-box',
  },

  mainTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 6rem)',
    fontWeight: '50',
    lineHeight: '0.9',
    letterSpacing: '-2px',
    color: '#ffffff',
    marginTop: '0.2rem',
    marginBottom: '0',
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
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
    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
    lineHeight: '1.3',
    fontWeight: '300',
    letterSpacing: '2px',
    margin: 0,
    color: '#888888',
  },

  // Services Section
  servicesSection: {
    padding: '4rem 3rem',
    background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },

  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },

  servicesHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },

  servicesTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 3rem)',
    fontWeight: '10',
    lineHeight: '0.9',
    letterSpacing: '-2px',
    color: '#ffffff',
    marginTop: '0.2rem',
    marginBottom:'0.2rem',
    marginLeft: 0,
    marginRight: 0,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },

  serviceCard: {
    backgroundColor: 'transparent',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
    minHeight: 'auto',
  },

  serviceIcon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  serviceContent: {
    flex: 1,
    minWidth: 0,
  },

  serviceTitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    fontWeight: '400',
    marginBottom: '0.8rem',
    marginTop: '0',
    color: '#ffffff',
    letterSpacing: '1px',
  },

  serviceDescription: {
    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
    fontWeight: '300',
    letterSpacing: '0.1em',
    color: '#cccccc82',
    lineHeight: 1.4,
    marginBottom: '0',
  },

  // Service Icons
  brandingIcon: {
    width: '24px',
    height: '24px',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    position: 'relative',
  },

  designIcon: {
    width: '24px',
    height: '24px',
    position: 'relative',
    border: '2px solid rgba(255, 255, 255, 0.6)',
    transform: 'rotate(45deg)',
  },

  videoIcon: {
    width: '24px',
    height: '24px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '50%',
  },

  contentIcon: {
    width: '24px',
    height: '24px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    transform: 'rotate(45deg)',
  },

  // Process Section - Timeline
  processSection: {
    padding: '6rem 3rem',
    background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },

  processContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    width: '100%',
  },

  processHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },

  processTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '1rem',
    letterSpacing: '1px',
  },

  processSubtitle: {
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    color: '#888888',
    fontWeight: '300',
    letterSpacing: '0.5px',
  },

  // Timeline styles
  timelineContainer: {
    position: 'relative',
    width: '100%',
  },

  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },

  timelineStep: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4rem',
    width: '100%',
  },

  timelineStepLeft: {
    justifyContent: 'flex-end',
  },

  timelineStepRight: {
    justifyContent: 'flex-start',
  },

  timelineContent: {
    width: '45%',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  timelineDot: {
    width: '16px',
    height: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    border: '3px solid #000000',
  },

  stepNumber: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '0.5rem',
    lineHeight: '1',
  },

  stepTitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: '1rem',
    letterSpacing: '0.5px',
  },

  stepDescription: {
    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
    color: '#888888',
    lineHeight: '1.5',
    fontWeight: '300',
  },

  // Footer
  footer: {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
    padding: '4rem 3rem 2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
  },

  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
    width: '100%',
  },

  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: 0,
  },

  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },

  footerSubtitle: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },

  footerDescription: {
    fontSize: '0.9rem',
    color: '#888888',
    lineHeight: '1.5',
  },

  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  footerListItem: {
    fontSize: '0.9rem',
    color: '#cccccc',
    cursor: 'pointer',
    transition: 'color 0.3s ease, transform 0.3s ease',
    padding: '0.25rem 0',
  },

  footerBottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
    width: '100%',
  },

  footerCopyright: {
    fontSize: '0.8rem',
    color: '#666666',
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
    container: {
      overflowX: 'hidden',
      width: '100vw',
    },

    compactNavbar: {
      padding: '1rem 1.5rem',
    },
    
    // Main content mobile
    mainContent: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 1.5rem',
      paddingTop: '6rem',
      height: 'auto',
      minHeight: '80vh',
      gap: '2rem',
    },

    mainTitle: {
      fontSize: 'clamp(2rem, 12vw, 3rem)',
      marginBottom: '1rem',
    },
    
    description: {
      marginLeft: 0,
      marginTop: 0,
      width: '100%',
    },

    descriptionText: {
      fontSize: 'clamp(0.9rem, 4vw, 1rem)',
    },
    
    // Services section mobile
    servicesSection: {
      padding: '3rem 1.5rem',
    },

    servicesGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0',
      maxWidth: '100%',
    },

    serviceCard: {
      padding: '1.5rem 1rem',
      gap: '0.8rem',
    },

    serviceTitle: {
      fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
      marginBottom: '0.5rem',
    },

    serviceDescription: {
      fontSize: 'clamp(0.75rem, 3.5vw, 0.85rem)',
    },

    serviceIcon: {
      width: '20px',
      height: '20px',
    },

    brandingIcon: {
      width: '20px',
      height: '20px',
    },

    designIcon: {
      width: '20px',
      height: '20px',
    },

    videoIcon: {
      width: '20px',
      height: '20px',
    },

    contentIcon: {
      width: '20px',
      height: '20px',
    },

    // Process section mobile - 2x2 grid
    processSection: {
      padding: '3rem 1.5rem',
    },

    timelineContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      position: 'static',
    },

    timelineLine: {
      display: 'none',
    },

    timelineStep: {
      position: 'static',
      display: 'block',
      marginBottom: '0',
      width: '100%',
    },

    timelineStepLeft: {
      justifyContent: 'center',
    },

    timelineStepRight: {
      justifyContent: 'center',
    },

    timelineContent: {
      width: '100%',
      padding: '1.5rem',
      textAlign: 'center',
    },

    timelineDot: {
      display: 'none',
    },

    stepNumber: {
      fontSize: 'clamp(1.2rem, 6vw, 1.5rem)',
    },

    stepTitle: {
      fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
    },

    stepDescription: {
      fontSize: 'clamp(0.75rem, 3.5vw, 0.85rem)',
    },

    // Footer mobile
    footer: {
      padding: '3rem 1.5rem 2rem',
    },

    footerContent: {
      gridTemplateColumns: '1fr',
      gap: '2.5rem',
    },

    footerTitle: {
      fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
    },

    footerSubtitle: {
      fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
    },

    footerDescription: {
      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    },

    footerListItem: {
      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    },

    scrollIndicator: {
      bottom: '2rem',
    },
  },

  // Extra small mobile
  '@media (max-width: 480px)': {
    compactNavbar: {
      padding: '1rem',
    },

    mainContent: {
      padding: '0 1rem',
      paddingTop: '5rem',
    },

    servicesSection: {
      padding: '2rem 1rem',
    },

    processSection: {
      padding: '2rem 1rem',
    },

    footer: {
      padding: '2rem 1rem 1.5rem',
    },

    timelineContainer: {
      gap: '0.5rem',
    },

    timelineContent: {
      padding: '1rem',
    },
  },
};

// Add hover effects with CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link:hover {
      color: #888888 !important;
      transition: color 0.3s ease !important;
    }
    
    .service-card:hover {
      transform: translateY(-8px) !important;
      box-shadow: 0 15px 40px rgba(56, 50, 50, 0.6) !important;
    }

    @media (hover: hover) {
      .footer li:hover {
        color: #ffffff !important;
        transform: translateX(5px) !important;
      }
    }

    @media (max-width: 768px) {
      .service-card:hover {
        transform: none !important;
        box-shadow: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}
