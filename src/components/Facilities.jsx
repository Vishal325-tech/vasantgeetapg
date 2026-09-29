import React from 'react';
import {
  Bed,
  BookOpen,
  Wifi,
  Bath,
  Droplets,
  Zap,
  Sparkles,
  ShieldCheck,
  Utensils,
  Car,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const iconMap = {
  Bed: Bed,
  BookOpen: BookOpen,
  Wifi: Wifi,
  Bath: Bath,
  Droplets: Droplets,
  Zap: Zap,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Utensils: Utensils,
  Car: Car,
  CheckCircle: CheckCircle
};

export default function Facilities({ facilities }) {
  // Only display facilities confirmed by admin
  const activeFacilities = (facilities || []).filter(f => f.isConfirmed);

  return (
    <section id="facilities" style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={15} />
            Verified Amenities
          </div>
          <h2 className="section-title">Everything You Need to Live & Study Well</h2>
          <p className="section-subtitle">
            All amenities at VasantGeeta are actively maintained and confirmed for resident comfort, safety, and focused preparation.
          </p>
        </div>

        {/* Facilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '22px'
          }}
        >
          {activeFacilities.map((fac) => {
            const IconComponent = iconMap[fac.icon] || CheckCircle;

            return (
              <div
                key={fac.id}
                className="card-modern"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  border: '1px solid var(--navy-100)',
                  borderRadius: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(15, 23, 42, 0.04)',
                    color: 'var(--navy-900)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    transition: 'all 0.3s'
                  }}
                >
                  <IconComponent size={24} style={{ color: 'var(--gold-600)' }} />
                </div>

                <h3 style={{ fontSize: '1.08rem', color: 'var(--navy-900)', marginBottom: '8px', fontWeight: '700' }}>
                  {fac.name}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--navy-600)', lineHeight: '1.5' }}>
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note on admin confirmed facilities */}
        <div
          style={{
            marginTop: '35px',
            textAlign: 'center',
            fontSize: '0.82rem',
            color: 'var(--navy-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <ShieldCheck size={16} style={{ color: '#10b981' }} />
          <span>Only verified facilities are published. Management ensures 100% operational standards daily.</span>
        </div>

      </div>
    </section>
  );
}

