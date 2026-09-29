import React from 'react';
import { MapPin, Navigation, Phone, GraduationCap, Bus, Train, Compass, Landmark } from 'lucide-react';

export default function Location({ settings }) {
  const address = settings?.address || 'Plot No. 42, Vidya Nagar Student Enclave, Near City Central College (Editable in Admin)';
  const phone = settings?.phone || '+91 8073762582';
  const mapsEmbed = settings?.googleMapsEmbed || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.886047120786!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";

  const nearby = settings?.nearbyLocations || {
    colleges: "City Central Engineering College (350m), Government Degree College (700m)",
    busStops: "Main Bus Depot (200m), University Circle (450m)",
    railwayStation: "Central Railway Station (2.8km - 8 min ride)",
    keyLandmarks: "Public Central Study Library (250m), Hospital & ATMs (100m)"
  };

  const handleDirections = () => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="location" style={{ padding: '95px 0', backgroundColor: 'var(--navy-50)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={15} />
            Strategic Accessibility
          </div>
          <h2 className="section-title">Find VasantGeeta</h2>
          <p className="section-subtitle">
            Centrally situated in a calm, academic-oriented neighbourhood with quick walking access to colleges, study libraries, transit stops, and essential amenities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '35px', alignItems: 'stretch' }} className="location-grid">
          
          {/* Left Column: Address Details & Nearby Landmarks */}
          <div
            className="card-modern"
            style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ffffff'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(217, 119, 6, 0.12)',
                    color: 'var(--gold-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                    Premises Location
                  </h3>
                  <p style={{ color: 'var(--navy-700)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                    {address}
                  </p>
                </div>
              </div>

              {/* Nearby list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', margin: '28px 0' }}>
                
                {/* Colleges */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--navy-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0 }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-500)', textTransform: 'uppercase' }}>
                      Nearby Colleges & Institutes
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--navy-800)', fontWeight: '500', marginTop: '2px' }}>
                      {nearby.colleges}
                    </div>
                  </div>
                </div>

                {/* Bus Stops */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--navy-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0 }}>
                    <Bus size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-500)', textTransform: 'uppercase' }}>
                      Transit & Bus Stops
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--navy-800)', fontWeight: '500', marginTop: '2px' }}>
                      {nearby.busStops}
                    </div>
                  </div>
                </div>

                {/* Railway Station */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--navy-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0 }}>
                    <Train size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-500)', textTransform: 'uppercase' }}>
                      Railway Station Connectivity
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--navy-800)', fontWeight: '500', marginTop: '2px' }}>
                      {nearby.railwayStation}
                    </div>
                  </div>
                </div>

                {/* Key Landmarks */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--navy-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0 }}>
                    <Landmark size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-500)', textTransform: 'uppercase' }}>
                      Key Landmarks & Study Libraries
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--navy-800)', fontWeight: '500', marginTop: '2px' }}>
                      {nearby.keyLandmarks}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--navy-100)' }}>
              <button
                onClick={handleDirections}
                className="btn btn-primary"
                style={{ flex: '1 1 180px' }}
              >
                <Navigation size={18} />
                Get Directions
              </button>

              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="btn btn-call"
                style={{ flex: '1 1 150px' }}
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div
            className="card-modern"
            style={{
              minHeight: '380px',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--navy-200)',
              background: '#e2e8f0'
            }}
          >
            <iframe
              title="VasantGeeta Location Map"
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
