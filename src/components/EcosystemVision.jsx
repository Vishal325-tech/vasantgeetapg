import React from 'react';
import { Home, Utensils, BookOpen, GraduationCap, Award, ArrowDown, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function EcosystemVision() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Boys PG Accommodation",
      subtitle: "Comfortable Student Living",
      status: "Active & Operational",
      statusType: "active",
      icon: Home,
      desc: "Providing hygienic, spacious single, double, and triple sharing rooms equipped with ergonomic study desks, 24/7 power backup, and fiber internet."
    },
    {
      phase: "Phase 2",
      title: "Hygienic In-House Mess",
      subtitle: "Nutritious & Homely Food",
      status: "Active & Operational",
      statusType: "active",
      icon: Utensils,
      desc: "Spotless kitchen delivering 3 wholesome daily meals with balanced nutritional profiles to fuel long hours of mental focus and physical health."
    },
    {
      phase: "Phase 3",
      title: "Dedicated Study Environment",
      subtitle: "Silent Reading & Preparation Spaces",
      status: "In Progress",
      statusType: "progress",
      icon: BookOpen,
      desc: "Creating zero-distraction reading zones, student discussion lounges, digital reference stations, and a curated library of competitive exam books."
    },
    {
      phase: "Phase 4",
      title: "Competitive Examination Academy",
      subtitle: "Specialized Guidance & Mentorship",
      status: "Coming Soon",
      statusType: "upcoming",
      icon: GraduationCap,
      desc: "Introducing expert faculties, curated test series, mock exams, and structured coaching for Banking, SSC, Railway, State PSC, and UPSC aspirants."
    },
    {
      phase: "Phase 5",
      title: "Complete Student Community",
      subtitle: "Stay + Food + Study + Coaching + Career Guidance",
      status: "Ultimate Vision",
      statusType: "vision",
      icon: Award,
      desc: "A singular, premier destination where students join with ambition, receive seamless living support, master exams, and launch rewarding careers."
    }
  ];

  return (
    <section style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <TrendingUp size={15} />
            Institutional Strategic Roadmap
          </div>
          <h2 className="section-title">The Student Ecosystem Vision</h2>
          <p className="section-subtitle">
            VasantGeeta is thoughtfully engineered from day one to evolve from exceptional accommodation into an integrated student living and competitive learning powerhouse.
          </p>
        </div>

        {/* Visual Roadmap Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          
          {/* Central connecting line for desktop */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '40px',
              width: '4px',
              background: 'linear-gradient(to bottom, #10b981 0%, #10b981 40%, #f59e0b 70%, #6366f1 100%)',
              borderRadius: '999px'
            }}
            className="roadmap-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {phases.map((p, idx) => {
              const Icon = p.icon;
              const isActive = p.statusType === 'active';
              const isProgress = p.statusType === 'progress';
              const isUpcoming = p.statusType === 'upcoming';
              const isVision = p.statusType === 'vision';

              const badgeBg = isActive ? '#dcfce7' : isProgress ? '#dbeafe' : isUpcoming ? '#fef3c7' : '#ede9fe';
              const badgeColor = isActive ? '#15803d' : isProgress ? '#1d4ed8' : isUpcoming ? '#b45309' : '#6d28d9';
              const iconBg = isActive ? 'linear-gradient(135deg, #10b981, #059669)' : isProgress ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : isUpcoming ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, #8b5cf6, #6d28d9)';

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                    position: 'relative'
                  }}
                  className="roadmap-step"
                >
                  {/* Icon Node */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      background: iconBg,
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      flexShrink: 0,
                      zIndex: 2,
                      border: '4px solid #ffffff'
                    }}
                  >
                    <Icon size={28} />
                    <span style={{ fontSize: '0.68rem', fontWeight: '800', marginTop: '2px', textTransform: 'uppercase' }}>
                      {p.phase}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className="card-modern"
                    style={{
                      flexGrow: 1,
                      padding: '28px 30px',
                      borderLeft: isVision ? '4px solid #8b5cf6' : isUpcoming ? '4px solid #f59e0b' : isActive ? '4px solid #10b981' : '4px solid #3b82f6'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          background: badgeBg,
                          color: badgeColor,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {p.status}
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-500)' }}>
                        {p.subtitle}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
                      {p.title}
                    </h3>

                    <p style={{ color: 'var(--navy-600)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .roadmap-line {
            display: none !important;
          }
          .roadmap-step {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}

