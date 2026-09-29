import React from 'react';
import { Bed, Utensils, Users, ShieldCheck, ArrowRight, Phone, CheckCircle2, Sparkles, MapPin, Star } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Hero({ settings, onOpenEnquiry }) {
  const trustIndicators = [
    { icon: Bed, text: "Comfortable Rooms" },
    { icon: Utensils, text: "Hygienic Food" },
    { icon: Users, text: "Student-Friendly" },
    { icon: ShieldCheck, text: "Safe Environment" }
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        /* Full-bleed PG room illustration */
        backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#0f172a',
        padding: '90px 0 110px 0',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(236, 72, 153, 0.2)'
      }}
    >
      {/* ── Full overlay so text is always readable over the illustration ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          /* Left side: stronger overlay for text legibility
             Right side: lighter so the photo card pops */
          background: 'linear-gradient(105deg, rgba(253,242,248,0.93) 0%, rgba(255,247,237,0.82) 45%, rgba(252,231,243,0.55) 70%, rgba(244,114,182,0.18) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      {/* ── Pink shimmer top border ──────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ec4899, #f97316, #ec4899)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '60px', alignItems: 'center' }} className="hero-grid">

          {/* ── Left Column ──────────────────────────────────────────────── */}
          <div>
            {/* Top pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px 6px 8px',
                background: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(249,115,22,0.1))',
                border: '1px solid rgba(236,72,153,0.3)',
                borderRadius: '999px',
                color: '#be185d',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '26px',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #f59e0b',
                  backgroundColor: '#f5ebe1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img
                  src={logoImg}
                  alt="VasantGeeta"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <span>VasantGeeta Boys PG &amp; Mess • A Home Away From Home</span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                color: '#0f172a',
                marginBottom: '20px',
                letterSpacing: '-0.025em'
              }}
            >
              Comfortable Living.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #f97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Healthy Food.
              </span>{' '}
              Better Future.
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: '1.65',
                color: '#475569',
                marginBottom: '32px',
                maxWidth: '580px'
              }}
            >
              {settings?.heroSubheading ||
                'VasantGeeta provides comfortable boys PG accommodation and hygienic mess facilities, with a vision to build a complete student living and learning community.'}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
              <a
                href="#rooms"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(249, 115, 22, 0.38)',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(249,115,22,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(249,115,22,0.38)'; }}
              >
                View PG Rooms
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.8)',
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(236,72,153,0.25)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.6)'; e.currentTarget.style.background = 'rgba(252,231,243,0.9)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.8)'; }}
              >
                Contact Us
              </a>
              {settings?.phone && (
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 22px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 18px rgba(14, 165, 233, 0.3)',
                    transition: 'all 0.25s'
                  }}
                  title="Direct Call"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              )}
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                paddingTop: '24px',
                borderTop: '1px solid rgba(236, 72, 153, 0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px'
              }}
            >
              {trustIndicators.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      background: 'rgba(252, 231, 243, 0.6)',
                      padding: '8px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(236, 72, 153, 0.2)'
                    }}
                  >
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(249,115,22,0.15))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={14} style={{ color: '#ec4899' }} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Column: Vishal Photo Ad Card ───────────────────────── */}
          <div style={{ position: 'relative', paddingTop: '20px', paddingBottom: '28px' }}>

            {/* Floating Badge 1 (top-right) */}
            <div
              style={{
                position: 'absolute',
                top: '0px',
                right: '-10px',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '10px 16px',
                boxShadow: '0 10px 30px rgba(236, 72, 153, 0.15), 0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animation: 'floatBadge1 3.5s ease-in-out infinite'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Live Operations</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0f172a' }}>PG &amp; Mess Active</div>
              </div>
            </div>

            {/* Main Photo Card */}
            <div
              className="animate-float-y"
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -10px rgba(236, 72, 153, 0.22), 0 0 0 1px rgba(236,72,153,0.12)',
                background: 'linear-gradient(145deg, #fce7f3, #fff7ed)',
              }}
            >
              {/* Pink outer glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #ec4899, #f97316, #ec4899)',
                  zIndex: -1,
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 4s linear infinite, pinkRing 3s ease-in-out infinite'
                }}
              />

              {/* User Photo */}
              <img
                src={`${import.meta.env.BASE_URL}hero-img.jpg`}
                alt="VasantGeeta Mascot"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />

              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '55%',
                  background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 50%, transparent 100%)'
                }}
              />

              {/* Bottom info strip — Ad style */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '18px',
                  right: '18px',
                  color: '#fff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                  <MapPin size={14} style={{ color: '#f472b6' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f9a8d4', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Student Hub Location
                  </span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', lineHeight: 1.2, marginBottom: '4px' }}>
                  Sanitized, Peaceful &amp; Academic Friendly
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)' }}>
                  Single • Double • Triple Sharing with Nutritious Mess
                </div>

                {/* Star rating row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                  <span style={{ fontSize: '0.8rem', color: '#fde68a', fontWeight: '600', marginLeft: '4px' }}>5.0 Student Rating</span>
                </div>
              </div>

              {/* Pink shimmer top bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ec4899, #f97316, #ec4899)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite'
                }}
              />
            </div>

            {/* Floating Badge 2 (bottom-left) */}
            <div
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '-12px',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #bfdbfe',
                borderRadius: '16px',
                padding: '10px 16px',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animation: 'floatBadge2 4s ease-in-out infinite'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: '#d97706', textTransform: 'uppercase', fontWeight: '700' }}>Future Expansion</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0f172a' }}>Competitive Academy</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
        @keyframes floatBadge1 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes floatBadge2 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50%       { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes pinkRing {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
    </section>
  );
}
