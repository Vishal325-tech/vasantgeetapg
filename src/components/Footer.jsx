import React from 'react';
import { Shield, Phone, MessageSquare, Mail, MapPin, Sparkles, Heart, Code2 } from 'lucide-react';

export default function Footer({ settings, onOpenAdmin, onOpenEnquiry }) {
  const phone = settings?.phone || '+91 8494865435';
  const whatsapp = settings?.whatsapp || '+91 8494865435';
  const email = settings?.email || 'contact@vasantgeetha.com';
  const address = settings?.address || 'Plot No. 42, Vidya Nagar Student Enclave, Near City Central College';

  return (
    <footer
      style={{
        backgroundColor: 'var(--navy-950)',
        color: '#94a3b8',
        padding: '80px 0 35px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr 0.9fr 1.2fr', gap: '40px', marginBottom: '60px' }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2.5px solid #eab308',
                  boxShadow: '0 0 16px rgba(234, 179, 8, 0.4)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img
                  src="/logo.jpeg"
                  alt="Vasant Geeta Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em' }}>
                  {settings?.businessName || 'Vasant Geeta'}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {settings?.brandSubtitle || 'Boys PG & Mess • Hubballi'}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.65', marginBottom: '18px' }}>
              {settings?.brandSupporting || 'A place to stay today. A place to prepare for tomorrow.'}
            </p>

            <div
              style={{
                display: 'inline-block',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '6px 14px',
                borderRadius: '8px',
                color: '#fde68a',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}
            >
              Stay. Eat. Learn. Grow.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '18px' }}>
              Accommodation & Food
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#rooms" style={{ color: '#cbd5e1' }}>PG Rooms</a></li>
              <li><a href="#facilities" style={{ color: '#cbd5e1' }}>Amenities & Facilities</a></li>
              <li><a href="#mess" style={{ color: '#cbd5e1' }}>Hygienic Mess</a></li>
              <li><a href="#mess" style={{ color: '#cbd5e1' }}>Weekly Menu Schedule</a></li>
              <li><a href="#gallery" style={{ color: '#cbd5e1' }}>Photo Gallery</a></li>
            </ul>
          </div>

          {/* Vision & Expansion */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '18px' }}>
              Future Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <a href="#coaching" style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span>Competitive Academy</span>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(245, 158, 11, 0.2)', padding: '1px 5px', borderRadius: '4px' }}>SOON</span>
                </a>
              </li>
              <li><a href="#coaching" style={{ color: '#cbd5e1' }}>Banking, SSC & Railways</a></li>
              <li><a href="#coaching" style={{ color: '#cbd5e1' }}>State PSC & UPSC Guidance</a></li>
              <li><a href="#about" style={{ color: '#cbd5e1' }}>5-Phase Student Roadmap</a></li>
              <li><a href="#location" style={{ color: '#cbd5e1' }}>Campus Location Map</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '18px' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '3px' }} />
                <span>{address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: '#fbbf24', flexShrink: 0 }} />
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#ffffff' }}>{phone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={16} style={{ color: '#25d366', flexShrink: 0 }} />
                <a href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  {whatsapp} (WhatsApp)
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: '#fbbf24', flexShrink: 0 }} />
                <a href={`mailto:${email}`} style={{ color: '#cbd5e1' }}>{email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '25px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.82rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} Vasant Geeta. All Rights Reserved. BOYS PG & MESS — A Home Away From Home.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onOpenAdmin}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#94a3b8',
                fontSize: '0.82rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <Shield size={14} />
              <span>Admin Management Portal</span>
            </button>
          </div>

          {/* Developer Credit */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#94a3b8'
            }}
          >
            <Code2 size={14} style={{ color: '#f472b6' }} />
            <span>Developed by{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #ec4899, #f97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '800',
                  letterSpacing: '0.01em'
                }}
              >
                Vishal S H
              </span>
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
