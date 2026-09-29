import React from 'react';
import { Home, Utensils, GraduationCap, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About({ onOpenEnquiry, onOpenCoaching }) {
  const pillars = [
    {
      icon: Home,
      title: "Stay",
      badge: "Current Service",
      badgeColor: "emerald",
      desc: "Comfortable boys PG accommodation engineered for academic productivity, privacy, and peaceful rest.",
      features: ["Single, Double & Triple Sharing", "Study Tables & Bookshelves", "24/7 Power Backup & Wi-Fi", "Daily Sanitized Housekeeping"]
    },
    {
      icon: Utensils,
      title: "Food",
      badge: "Current Service",
      badgeColor: "emerald",
      desc: "Fresh and hygienic daily meals prepared in our spotless in-house mess with nutritious rotating menus.",
      features: ["Breakfast, Lunch & Dinner", "Freshly Cooked Homely Taste", "Filtered Drinking Water", "Weekly Special Weekend Treats"]
    },
    {
      icon: GraduationCap,
      title: "Future Learning",
      badge: "Coming Soon",
      badgeColor: "amber",
      desc: "Competitive coaching and study support planned for the future, building an all-in-one student success hub.",
      features: ["Banking, SSC & Railways Coaching", "State PSC & UPSC Mentorship", "Quiet Reading / Library Space", "Career Guidance Sessions"]
    }
  ];

  return (
    <section id="about" style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HeartHandshake size={15} />
            About Vasant Geeta
          </div>
          <h2 className="section-title">More Than Just a PG</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem' }}>
            “Vasant Geeta is designed to provide students and working professionals with a comfortable, clean and student-friendly place to stay. Along with accommodation, we provide hygienic and nutritious mess facilities.”
          </p>
        </div>

        {/* Vision Narrative Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '36px 40px',
            marginBottom: '50px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.3)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-40px',
              bottom: '-40px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'center' }} className="vision-box">
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#fbbf24',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px'
                }}
              >
                <ShieldCheck size={16} />
                Long-Term Institutional Vision
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '14px', fontWeight: '700' }}>
                Building a Complete Student Ecosystem
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.02rem', fontStyle: 'italic' }}>
                “Our long-term vision is to create a complete student ecosystem by introducing competitive examination coaching, study facilities and career-oriented learning programs.”
              </p>
            </div>

            <div style={{ textAlign: 'right' }} className="vision-actions">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  textAlign: 'left',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  maxWidth: '380px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2.5px solid #f59e0b',
                    boxShadow: '0 0 14px rgba(245, 158, 11, 0.45)',
                    flexShrink: 0,
                    backgroundColor: '#ffffff'
                  }}
                >
                  <img
                    src="/logo.jpeg"
                    alt="Vasant Geeta Seal"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.04em' }}>
                    Brand Philosophy
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fde68a', margin: '3px 0' }}>
                    Stay • Eat • Study • Grow
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                    A Home Away From Home
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isComingSoon = item.badgeColor === 'amber';
            return (
              <div
                key={idx}
                className="card-modern"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isComingSoon ? '4px solid #f59e0b' : '4px solid #2563eb'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '14px',
                        background: isComingSoon ? 'rgba(245, 158, 11, 0.12)' : 'rgba(37, 99, 235, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isComingSoon ? '#d97706' : '#2563eb'
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: isComingSoon ? '#fef3c7' : '#dcfce7',
                        color: isComingSoon ? '#b45309' : '#15803d',
                        border: isComingSoon ? '1px solid #fde68a' : '1px solid #bbf7d0'
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--navy-900)' }}>
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--navy-600)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '22px' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--navy-700)' }}>
                        <CheckCircle size={16} style={{ color: isComingSoon ? '#d97706' : '#2563eb', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {isComingSoon ? (
                    <button
                      onClick={onOpenCoaching}
                      className="btn btn-outline"
                      style={{ width: '100%', borderColor: '#f59e0b', color: '#b45309', fontWeight: '600' }}
                    >
                      View Academy Vision
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenEnquiry(item.title === 'Stay' ? 'General PG Stay' : 'Mess & Meals')}
                      className="btn btn-navy"
                      style={{ width: '100%' }}
                    >
                      Enquire for {item.title}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .vision-box {
            grid-template-columns: 1fr !important;
          }
          .vision-actions {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}

