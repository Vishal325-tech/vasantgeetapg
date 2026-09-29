import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq({ faqs }) {
  const [openId, setOpenId] = useState(faqs?.[0]?.id || 'faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section style={{ padding: '95px 0', backgroundColor: 'var(--navy-50)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={15} />
            Common Inquiries
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find immediate answers regarding room amenities, mess schedule, check-in requirements, and upcoming coaching classes.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs && faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: isOpen ? '1.5px solid var(--navy-300)' : '1px solid var(--navy-200)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: isOpen ? 'var(--navy-900)' : 'var(--navy-800)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--navy-900)' : 'var(--navy-100)',
                      color: isOpen ? '#ffffff' : 'var(--navy-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--navy-600)',
                      fontSize: '0.94rem',
                      lineHeight: '1.65',
                      borderTop: '1px solid var(--navy-100)',
                      paddingTop: '16px',
                      animation: 'fadeIn 0.2s ease'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
