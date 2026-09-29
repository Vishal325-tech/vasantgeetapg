import React from 'react';
import { Bed, Utensils, BookOpen, Users, GraduationCap, Layers, CheckCircle2 } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      icon: Bed,
      title: "Comfortable Stay",
      desc: "Designed for students' daily needs with quality bedding, private storage, uninterrupted electricity, and daily maintenance."
    },
    {
      icon: Utensils,
      title: "Healthy Food",
      desc: "Focus on hygienic and nutritious meals prepared daily with filtered water and balanced wholesome ingredients."
    },
    {
      icon: BookOpen,
      title: "Study Friendly",
      desc: "A peaceful environment for academic preparation featuring dedicated study desks, good lighting, and reliable high-speed Wi-Fi."
    },
    {
      icon: Users,
      title: "Student Community",
      desc: "Build connections with other students pursuing higher education, shared academic goals, and mutual encouragement."
    },
    {
      icon: GraduationCap,
      title: "Future Learning",
      desc: "Competitive coaching planned for future expansion, providing aspirants structured mentorship right where they reside."
    },
    {
      icon: Layers,
      title: "One Student Ecosystem",
      desc: "Accommodation, food, and learning thoughtfully planned under one trustworthy brand so students can focus on excellence."
    }
  ];

  return (
    <section style={{ padding: '95px 0', backgroundColor: 'var(--navy-50)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CheckCircle2 size={15} />
            The Vasant Geetha Advantage
          </div>
          <h2 className="section-title">Why Choose Vasant Geetha</h2>
          <p className="section-subtitle">
            We provide a transparent, dependable living and learning setup built with student priorities at the center.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}
        >
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="card-modern"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1px solid var(--navy-200)',
                  borderRadius: '20px'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(15, 23, 42, 0.04)',
                    color: 'var(--navy-900)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    border: '1px solid rgba(15, 23, 42, 0.08)'
                  }}
                >
                  <Icon size={26} style={{ color: 'var(--gold-600)' }} />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-900)', marginBottom: '10px', fontWeight: '700' }}>
                  {pt.title}
                </h3>

                <p style={{ color: 'var(--navy-600)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
