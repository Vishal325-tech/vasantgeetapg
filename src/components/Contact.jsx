import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Clock, Calendar, Users, Mail, User } from 'lucide-react';


export default function Contact({ settings, prefillRoom }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredRoomType: prefillRoom || 'Single Sharing',
    expectedJoiningDate: '',
    numberOfPersons: 1,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Update room prefill if prop changes
  React.useEffect(() => {
    if (prefillRoom) {
      setFormData(prev => ({ ...prev, preferredRoomType: prefillRoom }));
    }
  }, [prefillRoom]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setStatus({ type: 'error', message: 'Please provide both your name and phone number.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const message = `*New PG Enquiry*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phoneNumber}\n*Email:* ${formData.email || 'N/A'}\n*Room Type:* ${formData.preferredRoomType}\n*Joining Date:* ${formData.expectedJoiningDate || 'Not specified'}\n*Persons:* ${formData.numberOfPersons}\n*Message:* ${formData.message || 'None'}`;
      
      const whatsappNumber = "918494865435";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      setStatus({
        type: 'success',
        message: 'Redirecting to WhatsApp to send your details...'
      });

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          preferredRoomType: 'Single Sharing',
          expectedJoiningDate: '',
          numberOfPersons: 1,
          message: ''
        });
        setStatus({ type: '', message: '' });
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please call us directly or message on WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  const phone = settings?.phone || '+91 8073762582';
  const whatsapp = settings?.whatsapp || '+91 8494865435';
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  const cleanWhatsapp = whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="contact" style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Send size={15} />
            Quick Reservation & Inquiry
          </div>
          <h2 className="section-title">Enquire or Book Your Visit</h2>
          <p className="section-subtitle">
            Send us your stay requirements or reach out directly via call or WhatsApp. We will confirm room availability and schedule your viewing immediately.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'flex-start' }} className="contact-grid">
          
          {/* Left Column: Form */}
          <div
            className="card-modern"
            style={{
              padding: '38px 32px',
              border: '1px solid var(--navy-200)',
              borderRadius: '24px'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
              Submit an Accommodation Enquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--navy-600)', marginBottom: '24px' }}>
              Fill in your details below and our management will get in touch with availability and assistance.
            </p>

            {status.message && (
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
                  border: status.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca',
                  color: status.type === 'success' ? '#15803d' : '#b91c1c',
                  fontSize: '0.92rem',
                  fontWeight: '500'
                }}
              >
                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Row 1: Name and Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: '10px',
                        border: '1px solid var(--navy-300)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <User size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g. 8494865435"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: '10px',
                        border: '1px solid var(--navy-300)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <Phone size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
                  </div>
                </div>
              </div>

              {/* Row 2: Email and Room Type */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. anand@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: '10px',
                        border: '1px solid var(--navy-300)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <Mail size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Preferred Room Type
                  </label>
                  <select
                    name="preferredRoomType"
                    value={formData.preferredRoomType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--navy-300)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Single Sharing">Single Sharing (Private Room)</option>
                    <option value="Double Sharing">Double Sharing (2 Sharing)</option>
                    <option value="Triple Sharing">Triple Sharing (3 Sharing)</option>
                    <option value="Mess Only">Mess / Meal Plan Only</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Joining Date & Number of Persons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Expected Joining Date
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="date"
                      name="expectedJoiningDate"
                      value={formData.expectedJoiningDate}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: '10px',
                        border: '1px solid var(--navy-300)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <Calendar size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                    Number of Persons
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      name="numberOfPersons"
                      value={formData.numberOfPersons}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: '10px',
                        border: '1px solid var(--navy-300)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <Users size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                  Specific Requirements / Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="e.g. UPSC preparation, seeking quiet floor, preferred joining around 1st of month..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--navy-300)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ padding: '14px', width: '100%', fontSize: '1rem', fontWeight: '700' }}
              >
                {loading ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                <Send size={18} />
              </button>

            </form>
          </div>

          {/* Right Column: Instant Contact Options (Call & WhatsApp) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Quick Contact Card */}
            <div
              style={{
                backgroundColor: 'var(--navy-900)',
                color: '#ffffff',
                borderRadius: '24px',
                padding: '36px 30px',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#fbbf24',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px'
                }}
              >
                Immediate Support
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '14px' }}>
                Need Quick Answers?
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '28px' }}>
                Reach our resident manager directly. We are happy to answer room questions, arrange property tours, and discuss meal options.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Call Button */}
                <a
                  href={`tel:${cleanPhone}`}
                  className="btn btn-call"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: '12px' }}
                >
                  <Phone size={20} />
                  <span>Call Us: {phone}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Hello VasantGeeta Management, I would like to enquire about PG accommodation & mess availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: '12px' }}
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp Us: {whatsapp}</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px', fontSize: '0.8rem', color: '#94a3b8' }}>
                <Clock size={15} />
                <span>Office Hours: 08:00 AM - 09:30 PM (7 Days a week)</span>
              </div>
            </div>

            {/* Scalable Platform Note */}
            <div
              style={{
                backgroundColor: 'var(--navy-50)',
                border: '1px solid var(--navy-200)',
                borderRadius: '18px',
                padding: '24px 22px'
              }}
            >
              <h4 style={{ fontSize: '1rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                Parent & Student Guidance
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--navy-600)', lineHeight: '1.5' }}>
                Parents are welcome to visit our premises and inspect hygiene, security measures, and room conditions prior to joining.
              </p>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

