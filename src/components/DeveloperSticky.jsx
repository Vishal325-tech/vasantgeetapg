import React, { useState } from 'react';
import { Mail, MessageCircle, X, Code } from 'lucide-react';

export default function DeveloperSticky() {
  const [isOpen, setIsOpen] = useState(false);
  const developerImage = `${import.meta.env.BASE_URL}dev-profile.png`;

  return (
    <>
      {/* Sticky Tab */}
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#ea580c', // Bright orange to highlight
          color: 'white',
          padding: '10px 16px 10px 10px',
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '-4px 4px 15px rgba(0,0,0,0.2)',
          zIndex: 9999,
          transition: 'transform 0.3s ease, background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#c2410c';
          e.currentTarget.style.transform = 'translateY(-50%) translateX(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ea580c';
          e.currentTarget.style.transform = 'translateY(-50%) translateX(0)';
        }}
      >
        <img
          src={developerImage}
          alt="Vishal S H"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid white',
            flexShrink: 0
          }}
        />
        <div style={{ fontWeight: '600', fontSize: '0.85rem', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
          Developed by Vishal
        </div>
      </div>

      {/* Slide-out Panel */}
      <div
        style={{
          position: 'fixed',
          right: isOpen ? '0' : '-400px',
          top: '0',
          bottom: '0',
          width: '320px',
          backgroundColor: '#ffffff',
          boxShadow: '-5px 0 25px rgba(0,0,0,0.15)',
          zIndex: 10000,
          transition: 'right 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '100%', height: '320px', position: 'relative' }}>
          <img
            src={developerImage}
            alt="Vishal S H"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              borderRadius: '50%',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ textAlign: 'center', padding: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', margin: '0 0 5px 0' }}>Vishal S H</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#ea580c', fontWeight: '600', fontSize: '0.9rem', marginBottom: '25px' }}>
            <Code size={16} />
            Software Developer
          </div>

          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', marginBottom: '30px' }}>
            For website contact me. I build high-performance, modern, and beautiful web applications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a
              href="https://wa.me/919108531238?text=Hello%20Vishal%2C%20I%20came%20across%20the%20VasantGeeta%20website%20and%20I%20am%20interested%20in%20your%20web%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '12px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20bd5a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </a>

            <a
              href="mailto:vishalsh325@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '12px',
                backgroundColor: '#f1f5f9',
                color: '#334155',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                border: '1px solid #cbd5e1',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay when panel is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 9998,
            backdropFilter: 'blur(2px)'
          }}
        />
      )}
    </>
  );
}
