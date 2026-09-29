import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Phone, Mail, User, Calendar, Users } from 'lucide-react';


export default function EnquiryModal({ isOpen, onClose, defaultRoomType }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredRoomType: defaultRoomType || 'Single Sharing',
    expectedJoiningDate: '',
    numberOfPersons: 1,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (defaultRoomType) {
      setFormData(prev => ({ ...prev, preferredRoomType: defaultRoomType }));
    }
  }, [defaultRoomType]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setStatus({ type: 'error', message: 'Name and phone number are required.' });
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
        onClose();
        setStatus({ type: '', message: '' });
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Something went wrong. Please call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '540px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px 30px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--navy-100)',
            color: 'var(--navy-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
            alt="Vasant Geeta"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #eab308',
              backgroundColor: '#ffffff',
              flexShrink: 0
            }}
          />
          <div>
            <div style={{ color: 'var(--gold-600)', fontWeight: '700', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Official Booking & Admission
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', margin: '2px 0 0 0', fontWeight: '800' }}>
              Enquire for Vasant Geeta Stay
            </h3>
          </div>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--navy-600)', marginBottom: '20px' }}>
          Selected Preference: <strong>{formData.preferredRoomType}</strong>
        </p>

        {status.message && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
              border: status.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca',
              color: status.type === 'success' ? '#15803d' : '#b91c1c',
              fontSize: '0.88rem'
            }}
          >
            {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="e.g. Suresh Kumar"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--navy-300)',
                fontSize: '0.92rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                placeholder="e.g. 8494865435"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--navy-300)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. suresh@gmail.com"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--navy-300)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                Room Category
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
                <option value="Single Sharing">Single Sharing</option>
                <option value="Double Sharing">Double Sharing</option>
                <option value="Triple Sharing">Triple Sharing</option>
                <option value="Mess Only">Mess / Meal Plan Only</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                No. of Persons
              </label>
              <input
                type="number"
                min="1"
                max="10"
                name="numberOfPersons"
                value={formData.numberOfPersons}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--navy-300)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
              Expected Joining Date
            </label>
            <input
              type="date"
              name="expectedJoiningDate"
              value={formData.expectedJoiningDate}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--navy-300)',
                fontSize: '0.92rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
              Note / Requirements
            </label>
            <textarea
              rows="2"
              name="message"
              placeholder="e.g. Need study desk with good light, joining with college friend"
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
            style={{ padding: '14px', fontSize: '1rem', fontWeight: '700', marginTop: '6px' }}
          >
            {loading ? 'Submitting...' : 'Submit Enquiry'}
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
