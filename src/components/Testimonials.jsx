import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, User, Send, AlertCircle, X, ShieldAlert } from 'lucide-react';


export default function Testimonials({ reviews, onReviewSubmitted }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: 'Resident Student',
    rating: 5,
    review: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.review.trim()) {
      setStatus({ type: 'error', message: 'Name and review text are required.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Frontend-only: simulate review submission (no backend required)
      console.log('Review submitted:', reviewForm);
      await new Promise((r) => setTimeout(r, 800));
      setStatus({
        type: 'success',
        message: 'Thank you! Your review has been submitted for management verification.'
      });
      setReviewForm({ name: '', role: 'Resident Student', rating: 5, review: '' });
      if (onReviewSubmitted) onReviewSubmitted();
      setTimeout(() => {
        setModalOpen(false);
        setStatus({ type: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to submit review. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ padding: '95px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={15} />
            Student Experiences
          </div>
          <h2 className="section-title">What Residents Say</h2>
          <p className="section-subtitle">
            Authentic feedback from students and working professionals staying at VasantGeeta.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {reviews && reviews.map((item) => (
            <div
              key={item.id}
              className="card-modern"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--navy-200)',
                borderRadius: '20px',
                position: 'relative'
              }}
            >
              <div>
                {/* Sample Testimonial / Verified Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  {item.isSample ? (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: '#fef3c7',
                        color: '#b45309',
                        border: '1px solid #fde68a',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ShieldAlert size={12} />
                      Sample Testimonial
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: '#dcfce7',
                        color: '#15803d',
                        border: '1px solid #bbf7d0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={12} />
                      Verified Resident Review
                    </span>
                  )}

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p style={{ color: 'var(--navy-700)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '22px', fontStyle: 'italic' }}>
                  “{item.review}”
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--navy-100)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--navy-100)',
                    color: 'var(--navy-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '1rem'
                  }}
                >
                  {item.name ? item.name.charAt(0) : 'S'}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', color: 'var(--navy-900)', fontWeight: '700' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: 'var(--navy-500)' }}>
                    {item.role || 'Resident Student'} • {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-outline"
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <MessageSquareQuote size={18} />
            Are You a Current or Past Resident? Share Feedback
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              maxWidth: '500px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
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

            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
              Share Your Experience
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--navy-600)', marginBottom: '20px' }}>
              Your feedback helps fellow aspirants choose the right PG accommodation. Submitted reviews are moderated prior to public posting.
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
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh K."
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
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
                  Your Course / Preparation Goal
                </label>
                <input
                  type="text"
                  placeholder="e.g. Banking Exam Aspirant, Tech Graduate"
                  value={reviewForm.role}
                  onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
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
                  Rating (1 to 5 Stars)
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setReviewForm({ ...reviewForm, rating: num })}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '8px',
                        background: reviewForm.rating >= num ? '#fef3c7' : 'var(--navy-100)',
                        border: reviewForm.rating >= num ? '1px solid #f59e0b' : '1px solid var(--navy-200)',
                        color: reviewForm.rating >= num ? '#b45309' : 'var(--navy-600)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontWeight: '700'
                      }}
                    >
                      <Star size={14} fill={reviewForm.rating >= num ? "#f59e0b" : "none"} />
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                  Your Review *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Describe room comfort, cleanliness, mess food quality, study environment..."
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
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
                disabled={submitting}
                className="btn btn-navy"
                style={{ padding: '13px', fontSize: '0.98rem', fontWeight: '700' }}
              >
                {submitting ? 'Submitting...' : 'Submit for Moderation'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}

