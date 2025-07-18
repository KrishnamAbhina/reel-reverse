import React, { useState, useEffect } from 'react';

function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['Animation', 'Grid']);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  const contactMethods = [
    { id: 'email', label: 'Email', selected: true },
    { id: 'phone', label: 'Phone' },
    { id: 'discord', label: 'Discord' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'twitter', label: 'Twitter' },
    { id: 'instagram', label: 'Instagram' },
  ];

  const projectTypes = [
    { id: 'startup', label: 'Startup' },
    { id: 'agency', label: 'Agency' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const designStyles = [
    { id: 'minimal', label: 'Minimal' },
    { id: 'colorful', label: 'Colourful' },
    { id: 'dark', label: 'Dark' },
    { id: 'pastel', label: 'Pastel' },
  ];

  const services = [
    { id: 'animation', label: 'Animation' },
    { id: 'grid', label: 'Grid' },
    { id: 'typography', label: 'Typographic' },
    { id: 'illustrative', label: 'Illustrative' },
  ];

  const toggleTag = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const isSelected = (tagId) => selectedTags.includes(tagId);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Lightning Icon */}
        <div style={styles.iconWrapper}>
          <div style={styles.lightningIcon}>⚡</div>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {/* Main Title */}
          <h1 
            style={{
              ...styles.title,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Let's create something
            <br />
            godlike together
          </h1>

          {/* Contact Methods */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>How would you like to connect?</h3>
            <div style={styles.tagGrid}>
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  className="contact-tag"
                  style={{
                    ...styles.tag,
                    ...(method.selected || isSelected(method.id) ? styles.selectedTag : {}),
                  }}
                  onClick={() => toggleTag(method.id)}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Type */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>What type of project?</h3>
            <div style={styles.tagGrid}>
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  className="contact-tag"
                  style={{
                    ...styles.tag,
                    ...(isSelected(type.id) ? styles.selectedTag : {}),
                  }}
                  onClick={() => toggleTag(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Design Style */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Design style preference</h3>
            <div style={styles.tagGrid}>
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  className="contact-tag"
                  style={{
                    ...styles.tag,
                    ...(isSelected(style.id) ? styles.selectedTag : {}),
                  }}
                  onClick={() => toggleTag(style.id)}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Services needed</h3>
            <div style={styles.tagGrid}>
              {services.map((service) => (
                <button
                  key={service.id}
                  className="contact-tag"
                  style={{
                    ...styles.tag,
                    ...(isSelected(service.id) ? styles.selectedTag : {}),
                  }}
                  onClick={() => toggleTag(service.id)}
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div style={styles.actionSection}>
            <button 
              className="contact-button"
              style={styles.contactButton}
            >
              Start the conversation
            </button>
            <p style={styles.subtitle}>
              Ready to bring your vision to life? Let's discuss your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    color: 'white',
  },
  wrapper: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    gap: '4rem',
    alignItems: 'flex-start',
    paddingTop: '2rem',
  },
  iconWrapper: {
    flex: '0 0 auto',
    paddingTop: '1rem',
  },
  lightningIcon: {
    fontSize: '4rem',
    color: 'white',
    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    lineHeight: 1.2,
    marginBottom: '3rem',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '1rem',
    color: '#ccc',
  },
  tagGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  tag: {
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: '1px solid #333',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  selectedTag: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid white',
  },
  actionSection: {
    marginTop: '3rem',
    textAlign: 'center',
  },
  contactButton: {
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(255,255,255,0.3)',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#888',
    fontSize: '0.9rem',
    margin: 0,
  },
};

// Add hover effects
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .contact-tag:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255,255,255,0.1);
    }
    .contact-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255,255,255,0.4);
    }
  `;
  if (!document.head.querySelector('style[data-contact-styles]')) {
    style.setAttribute('data-contact-styles', 'true');
    document.head.appendChild(style);
  }
}

export default Contact;
