import React from 'react';
import { Bed, Check, Sparkles, PhoneCall, Shield, ArrowRight, Info } from 'lucide-react';

export default function Rooms({ rooms, onOpenEnquiry }) {
  return (
    <section id="rooms" style={{ padding: '95px 0', backgroundColor: 'var(--navy-50)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Bed size={15} />
            Accommodation Options
          </div>
          <h2 className="section-title">Choose Your Stay</h2>
          <p className="section-subtitle">
            Thoughtfully planned living spaces with ergonomic study furnishings, high-speed fiber internet, and daily housekeeping for focused academics.
          </p>
        </div>

        {/* Rooms Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '32px' }}>
          {rooms && rooms.map((room) => {
            const isSingle = room.type.toLowerCase().includes('single');
            const isDouble = room.type.toLowerCase().includes('double');

            return (
              <div
                key={room.id}
                className="card-modern"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: isSingle ? '1.5px solid rgba(245, 158, 11, 0.4)' : '1px solid var(--navy-200)',
                  position: 'relative'
                }}
              >
                {/* Badge if present */}
                {room.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      zIndex: 3,
                      background: isSingle ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Sparkles size={12} />
                    {room.badge}
                  </div>
                )}

                {/* Room Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={room.image}
                    alt={room.type}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '14px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {room.status || 'Available'}
                  </div>
                </div>

                {/* Room Details */}
                <div style={{ padding: '28px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                      {room.type}
                    </h3>
                    
                    {room.tagline && (
                      <div style={{ fontSize: '0.88rem', color: 'var(--navy-600)', marginBottom: '14px', fontStyle: 'italic' }}>
                        {room.tagline}
                      </div>
                    )}

                    <p style={{ fontSize: '0.92rem', color: 'var(--navy-600)', lineHeight: '1.6', marginBottom: '20px' }}>
                      {room.description}
                    </p>

                    {/* Features list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                      {room.features && room.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.88rem', color: 'var(--navy-800)' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(245, 158, 11, 0.15)',
                              color: 'var(--gold-600)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Box - strictly adheres to rule */}
                  <div style={{ paddingTop: '18px', borderTop: '1px solid var(--navy-100)' }}>
                    <div
                      style={{
                        backgroundColor: '#fffbeb',
                        border: '1px solid #fde68a',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Info size={16} style={{ color: '#d97706', flexShrink: 0 }} />
                      <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#92400e' }}>
                        {room.priceDisplay || 'Price: Contact for current availability'}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry(room.type)}
                      className={isSingle ? "btn btn-primary" : "btn btn-navy"}
                      style={{ width: '100%', padding: '12px 20px', fontWeight: '700' }}
                    >
                      Enquire Now
                      <ArrowRight size={16} />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
