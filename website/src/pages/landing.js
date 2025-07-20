import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);

    // Scroll detection
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 100);

      // Check if services section is in view
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setServicesVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section 
        id="services-section"
        style={{
          ...styles.servicesSection,
          opacity: servicesVisible ? 1 : 0,
          transform: servicesVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div style={styles.servicesContainer}>
          <h2 style={styles.servicesTitle}>What We Do Best</h2>
          <p style={styles.servicesSubtitle}>
            From strategy to execution, our services are built to elevate your brand, engage<br />
            your audience, and drive measurable growth.
          </p>

          <div style={styles.servicesGrid}>
            {/* Data-Backed Strategy */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0"
            >
              <div style={styles.cardIcon}>
                <div style={styles.binocularsIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Data-Backed Strategy</h3>
              <p style={styles.cardDescription}>
                We craft marketing plans built on real insights, not guesswork.
              </p>
            </div>

            {/* Targeted Campaigns */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0.1"
            >
              <div style={styles.cardIcon}>
                <div style={styles.targetIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Targeted Campaigns</h3>
              <p style={styles.cardDescription}>
                Reach the right audience at the right time with campaigns that convert.
              </p>
            </div>

            {/* Social Media Management */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0.2"
            >
              <div style={styles.cardIcon}>
                <div style={styles.headphonesIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Social Media Management</h3>
              <p style={styles.cardDescription}>
                From content calendars to engagement boosts.
              </p>
            </div>

            {/* SEO & Content Marketing */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0.3"
            >
              <div style={styles.cardIcon}>
                <div style={styles.searchIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>SEO & Content Marketing</h3>
              <p style={styles.cardDescription}>
                Boost visibility and authority with content that delivers value.
              </p>
            </div>

            {/* Creative Branding */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0.4"
            >
              <div style={styles.cardIcon}>
                <div style={styles.sphereIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Creative Branding</h3>
              <p style={styles.cardDescription}>
                Develop a distinctive brand voice and identity.
              </p>
            </div>

            {/* Performance Analytics */}
            <div 
              style={{...styles.serviceCard, ...styles.compactCard}} 
              className="service-card"
              data-delay="0.5"
            >
              <div style={styles.cardIcon}>
                <div style={styles.chartIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Performance Analytics</h3>
              <p style={styles.cardDescription}>
                Track results in real-time and adapt fast.
              </p>
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
    backgroundColor: '#000000',
  },

  servicesContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },

  servicesTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#ffffff',
    letterSpacing: '-1px',
  },

  servicesSubtitle: {
    fontSize: '1rem',
    lineHeight: '1.6',
    textAlign: 'center',
    color: '#888888',
    marginBottom: '3rem',
    fontWeight: '300',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.2rem',
    maxWidth: '100%',
  },

  serviceCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  compactCard: {
    minHeight: '200px',
    maxHeight: '220px',
  },

  cardIcon: {
    width: '50px',
    height: '50px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.8rem',
    color: '#ffffff',
    lineHeight: '1.3',
  },

  cardDescription: {
    fontSize: '0.85rem',
    lineHeight: '1.4',
    color: '#cccccc',
    fontWeight: '200',
  },

  // Icons (simplified geometric shapes)
  binocularsIcon: {
    width: '35px',
    height: '22px',
    backgroundColor: '#666',
    borderRadius: '6px',
    position: 'relative',
  },

  targetIcon: {
    width: '35px',
    height: '35px',
    border: '2px solid #666',
    borderRadius: '50%',
    position: 'relative',
  },

  headphonesIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#666',
    borderRadius: '50% 50% 0 0',
  },

  searchIcon: {
    width: '32px',
    height: '32px',
    border: '2px solid #666',
    borderRadius: '50%',
    position: 'relative',
  },

  sphereIcon: {
    width: '35px',
    height: '35px',
    backgroundColor: '#666',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #666 0%, #444 100%)',
  },

  chartIcon: {
    width: '35px',
    height: '28px',
    backgroundColor: '#666',
    borderRadius: '50%',
    clipPath: 'polygon(0 100%, 25% 60%, 50% 80%, 75% 40%, 100% 60%, 100% 100%)',
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

    servicesGrid: {
      gridTemplateColumns: '1fr',
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
