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
          <a href="#" style={styles.navLink} className="nav-link">About</a>
          <a href="#" style={styles.navLink} className="nav-link">Services</a>
        </div>
        
        <div style={styles.logo}>.REEL REVERSE.</div>
        
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
          <h2 style={styles.servicesTitle}>What We Do Best</h2>
          <p style={styles.servicesSubtitle}>
            From strategy to execution, our services are built to elevate your brand, engage<br />
            your audience, and drive measurable growth.
          </p>

          <div style={styles.servicesGrid}>
            {/* Data-Backed Strategy */}
            <div style={{...styles.serviceCard, ...styles.largeCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.binocularsIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Data-Backed<br />Strategy</h3>
              <p style={styles.cardDescription}>
                We craft marketing plans built on real insights,<br />
                not guesswork—so every move has purpose.
              </p>
            </div>

            {/* Targeted Campaigns */}
            <div style={{...styles.serviceCard, ...styles.mediumCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.targetIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Targeted<br />Campaigns</h3>
              <p style={styles.cardDescription}>
                Reach the right audience at the right time<br />
                with campaigns that convert across every<br />
                platform.
              </p>
            </div>

            {/* Social Media Management */}
            <div style={{...styles.serviceCard, ...styles.smallCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.headphonesIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Social Media<br />Management</h3>
              <p style={styles.cardDescription}>
                From content<br />
                calendars to<br />
                engagement boosts.
              </p>
            </div>

            {/* SEO & Content Marketing */}
            <div style={{...styles.serviceCard, ...styles.smallCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.searchIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>SEO & Content<br />Marketing</h3>
              <p style={styles.cardDescription}>
                Boost visibility and authority<br />
                with content that informs,<br />
                resonates, and delivers<br />
                long-term value.
              </p>
            </div>

            {/* Creative Branding */}
            <div style={{...styles.serviceCard, ...styles.mediumCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.sphereIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Creative<br />Branding</h3>
              <p style={styles.cardDescription}>
                Develop a distinctive brand voice,<br />
                messaging, and brand identity that<br />
                speaks your language.
              </p>
            </div>

            {/* Performance Analytics */}
            <div style={{...styles.serviceCard, ...styles.smallCard}} className="service-card">
              <div style={styles.cardIcon}>
                <div style={styles.chartIcon}></div>
              </div>
              <h3 style={styles.cardTitle}>Performance Analytics</h3>
              <p style={styles.cardDescription}>
                Track results in real-time and adapt fast—<br />
                because great marketing never stands still.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
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
    top: '6rem',
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 99,
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
    paddingBottom: '2px',
    fontSize: '0.95rem',
    fontWeight: 400,
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },

  logo: {
    fontSize: '1.1rem',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#ffffff',
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
    maxWidth: '1200px',
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
    marginBottom: '4rem',
    fontWeight: '300',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    gridAutoRows: 'minmax(200px, auto)',
  },

  serviceCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  largeCard: {
    gridColumn: 'span 1',
    gridRow: 'span 2',
  },

  mediumCard: {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },

  smallCard: {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },

  cardIcon: {
    width: '60px',
    height: '60px',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#ffffff',
    lineHeight: '1.2',
  },

  cardDescription: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#cccccc',
    fontWeight: '300',
  },

  // Icons (simplified geometric shapes)
  binocularsIcon: {
    width: '40px',
    height: '25px',
    backgroundColor: '#666',
    borderRadius: '8px',
    position: 'relative',
  },

  targetIcon: {
    width: '40px',
    height: '40px',
    border: '3px solid #666',
    borderRadius: '50%',
    position: 'relative',
  },

  headphonesIcon: {
    width: '35px',
    height: '35px',
    backgroundColor: '#666',
    borderRadius: '50% 50% 0 0',
  },

  searchIcon: {
    width: '35px',
    height: '35px',
    border: '3px solid #666',
    borderRadius: '50%',
    position: 'relative',
  },

  sphereIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#666',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #666 0%, #444 100%)',
  },

  chartIcon: {
    width: '40px',
    height: '30px',
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

    largeCard: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
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
      transform: translateY(-5px) !important;
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1) !important;
    }
  `;
  document.head.appendChild(style);
}
