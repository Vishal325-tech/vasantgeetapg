import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, Maximize2, Tag } from 'lucide-react';

export default function Gallery({ gallery }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Rooms', 'Mess', 'Facilities', 'Common Areas'];

  const filteredGallery = activeFilter === 'All'
    ? (gallery || [])
    : (gallery || []).filter(item => item.category === activeFilter);

  return (
    <section id="gallery" style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={15} />
            Visual Tour
          </div>
          <h2 className="section-title">Explore Vasant Geetha</h2>
          <p className="section-subtitle">
            Take a transparent visual tour of our clean student bedrooms, study desks, hygienic kitchen, dining space, and surrounding community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '38px'
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: isSelected ? '700' : '600',
                  background: isSelected ? 'var(--navy-900)' : 'var(--navy-100)',
                  color: isSelected ? '#ffffff' : 'var(--navy-700)',
                  border: isSelected ? '1px solid var(--navy-900)' : '1px solid transparent',
                  transition: 'all 0.2s',
                  boxShadow: isSelected ? '0 4px 10px rgba(15, 23, 42, 0.2)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="card-modern"
              style={{
                position: 'relative',
                height: '240px',
                cursor: 'pointer',
                borderRadius: '16px'
              }}
              onClick={() => setActiveImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '18px',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: '#fbbf24',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '700', marginTop: '2px' }}>
                      {item.title}
                    </h4>
                  </div>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setActiveImage(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                background: 'var(--navy-900)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <X size={20} />
              </button>

              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  backgroundColor: '#0a0f1d'
                }}
              />

              <div style={{ padding: '22px 28px', color: '#ffffff' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fbbf24', textTransform: 'uppercase' }}>
                  {activeImage.category}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '4px 0 8px 0' }}>
                  {activeImage.title}
                </h3>
                {activeImage.description && (
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
                    {activeImage.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

