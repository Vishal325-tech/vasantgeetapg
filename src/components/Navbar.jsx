import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Shield, Moon, Sun } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar({ settings, onOpenEnquiry, onOpenAdmin, onOpenCoaching }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference on mount
    const savedTheme = localStorage.getItem('vg_theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vg_theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vg_theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    let ticking = false;
    let prevScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 15;
          if (isScrolled !== prevScrolled) {
            prevScrolled = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Mess', href: '#mess' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'Coaching', href: '#coaching' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phone = settings?.phone || '+91 8073762582';
  const cleanPhone = phone.replace(/[^0-9+]/g, '');

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          willChange: 'background-color, box-shadow, border-bottom',
          transition: 'background-color 0.25s ease, box-shadow 0.25s ease, border-bottom 0.25s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px'
          }}
        >
          {/* Logo Area */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid #f59e0b',
                boxShadow: '0 3px 12px rgba(245, 158, 11, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5ebe1',
                flexShrink: 0
              }}
            >
              <img
                src={logoImg}
                alt="VasantGeeta Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Blinking food icon */}
                <span
                  className="food-blink"
                  style={{ fontSize: '1.25rem', lineHeight: 1 }}
                  role="img"
                  aria-label="food"
                >
                  🍽️
                </span>
                <span
                  className="brand-wave-text"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.38rem',
                    fontWeight: '800',
                    letterSpacing: '0.05em',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                    background: 'linear-gradient(90deg, #0f172a 0%, #0f172a 30%, #f59e0b 45%, #ea580c 55%, #0f172a 65%, #0f172a 100%)',
                    backgroundSize: '280% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'brandWave 15s ease-in-out infinite'
                  }}
                >
                  {settings?.businessName || 'VasantGeeta'}
                </span>
              </div>
              <span
                className="brand-subtitle-glow"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap'
                }}
              >
                Boys PG &amp; Mess
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px' // Middle space to every button
            }}
            className="hide-on-mobile"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ea580c'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hide-on-mobile">
            <button
              onClick={toggleDarkMode}
              className="no-invert"
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: '#f59e0b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href={`tel:${cleanPhone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                whiteSpace: 'nowrap'
              }}
            >
              <div style={{
                backgroundColor: '#3b82f6',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)'
              }}>
                <Phone size={14} color="#fff" />
              </div>
              {phone}
            </a>
            
            <button
              onClick={onOpenEnquiry}
              style={{
                backgroundColor: '#c2410c',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.05rem',
                cursor: 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(194, 65, 12, 0.25)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9a3412'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c2410c'}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="show-on-mobile"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px', // below header
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            zIndex: 999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflowY: 'auto',
            borderTop: '1px solid #e2e8f0'
          }}
          className="show-on-mobile"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: '600',
                padding: '12px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                style={{
                  backgroundColor: '#f59e0b',
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}
              >
                Enquire Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#94a3b8',
                  border: '1px solid #94a3b8',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Shield size={18} /> Admin Login
              </button>
          </div>
        </div>
      )}
      
      {/* Hide/Show classes styling in case it's not in index.css */}
      <style>{`
        @media (max-width: 992px) {
          .hide-on-mobile { display: none !important; }
        }
        @media (min-width: 993px) {
          .show-on-mobile { display: none !important; }
        }

        /* ── Very slow elegant wave ── */
        @keyframes brandWave {
          0%   { background-position: 200% center; }
          50%  { background-position: -100% center; }
          100% { background-position: 200% center; }
        }

        /* ── Blinking food emoji ── */
        .food-blink {
          animation: foodBlink 2.5s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes foodBlink {
          0%, 45%, 55%, 100% { opacity: 1; transform: scale(1); }
          50%                 { opacity: 0.15; transform: scale(0.85); }
        }

        /* ── Subtitle pulse glow (very slow, professional) ── */
        .brand-subtitle-glow {
          animation: subtitlePulse 15s ease-in-out infinite;
        }
        @keyframes subtitlePulse {
          0%, 100% { color: #d97706; text-shadow: 0 0 0px rgba(217,119,6,0); }
          40%       { color: #1d4ed8; text-shadow: 0 0 6px rgba(29,78,216,0.4); }
          60%       { color: #b45309; text-shadow: 0 0 8px rgba(180,83,9,0.4); }
        }
      `}</style>
    </>
  );
}
