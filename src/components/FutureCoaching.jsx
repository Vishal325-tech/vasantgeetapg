import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Landmark,
  Compass,
  Train,
  Briefcase,
  BellRing,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Target
} from 'lucide-react';


export default function FutureCoaching({ settings }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({
    studentName: '',
    phoneNumber: '',
    email: '',
    examInterest: 'Banking Exams (IBPS / SBI)',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [leadStatus, setLeadStatus] = useState({ type: '', message: '' });

  const examCategories = [
    { title: "Banking Exams", exams: "IBPS PO / Clerk, SBI PO / Clerk, RRB Officer", icon: Landmark },
    { title: "SSC Examinations", exams: "SSC CGL, CHSL, CPO, MTS & GD Constable", icon: Target },
    { title: "Railway Exams", exams: "RRB NTPC, Group D, ALP, Technician", icon: Train },
    { title: "State Government Exams", exams: "State PSC (Group 1 & 2), Police SI & Constable", icon: Compass },
    { title: "UPSC Civil Services", exams: "Foundation Modules, Prelims GS & Current Affairs", icon: BookOpen },
    { title: "Other Competitive Exams", exams: "Insurance (LIC/NIACL), Defence (CDS/AFCAT)", icon: Briefcase }
  ];

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.studentName.trim() || !leadForm.phoneNumber.trim()) {
      setLeadStatus({ type: 'error', message: 'Name and phone number are required.' });
      return;
    }

    setSubmitting(true);
    setLeadStatus({ type: '', message: '' });

    try {
      // Frontend-only: simulate coaching lead submission (no backend required)
      console.log('Coaching lead submitted:', leadForm);
      await new Promise((r) => setTimeout(r, 800));
      setLeadStatus({
        type: 'success',
        message: 'Registration successful! You will be notified with priority updates and batch announcements.'
      });
      setLeadForm({
        studentName: '',
        phoneNumber: '',
        email: '',
        examInterest: 'Banking Exams (IBPS / SBI)',
        notes: ''
      });
      setTimeout(() => {
        setModalOpen(false);
        setLeadStatus({ type: '', message: '' });
      }, 3500);
    } catch (err) {
      console.error(err);
      setLeadStatus({
        type: 'error',
        message: 'Failed to register. Please try again or contact management.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="coaching"
      style={{
        padding: '100px 0',
        background: 'radial-gradient(ellipse at 50% 0%, #172554 0%, #0f172a 75%, #090e17 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Visual background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Prominent COMING SOON Banner */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 22px',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.3))',
              border: '1.5px solid #f59e0b',
              borderRadius: '999px',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.3)',
              color: '#fef08a',
              fontSize: '0.92rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <Clock size={16} />
            <span>COMING SOON • UNDER STRATEGIC PLANNING</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px', marginBottom: '45px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              color: '#ffffff',
              fontWeight: '800',
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}
          >
            {settings?.coachingHeading || 'Coming Soon: Vasant Geetha Competitive Academy'}
          </h2>

          <div
            style={{
              fontSize: '1.35rem',
              fontWeight: '700',
              color: '#fbbf24',
              marginBottom: '18px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {settings?.coachingSubheading || 'Stay. Study. Prepare. Succeed.'}
          </div>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1.08rem',
              lineHeight: '1.7',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            {settings?.coachingDescription ||
              '“Vasant Geetha plans to expand into competitive examination coaching, creating a complete environment where students can stay, study and prepare for their career goals.”'}
          </p>
        </div>

        {/* Important Disclaimer Card */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 45px auto',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#fbbf24',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Sparkles size={18} />
          </div>
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            <strong style={{ color: '#ffffff' }}>Notice to Aspirants:</strong> Coaching classes are currently in development phase and are not yet in session. Pre-register below to receive early-bird syllabus previews, batch dates, and reserved library seating.
          </div>
        </div>

        {/* Planned Exam Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}
        >
          {examCategories.map((exam, idx) => {
            const Icon = exam.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '24px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1))',
                      color: '#fbbf24',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.18rem', color: '#ffffff', fontWeight: '700' }}>
                    {exam.title}
                  </h4>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {exam.exams}
                </p>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#fbbf24', fontWeight: '700' }}>
                  <span>PLANNED CURRICULUM</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Action Box: Notify Me */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.9))',
            border: '1.5px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '24px',
            padding: '40px 32px',
            textAlign: 'center',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              boxShadow: '0 8px 20px rgba(217, 119, 6, 0.4)'
            }}
          >
            <BellRing size={28} />
          </div>

          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '10px' }}>
            Be the First to Know When Batches Launch
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '26px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Registered aspirants receive early batch timetables, introductory fee concessions, and first preference for combined PG + Coaching admissions.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-primary btn-lg"
            style={{ padding: '15px 36px', fontSize: '1.05rem', fontWeight: '700' }}
          >
            <BellRing size={20} />
            Notify Me When Coaching Starts
          </button>
        </div>

      </div>

      {/* Registration Modal */}
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
              maxWidth: '520px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              color: 'var(--navy-900)'
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
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-600)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
              <GraduationCap size={18} />
              <span>Coaching Interest Registration</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
              Stay Updated on Academy Launch
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--navy-600)', marginBottom: '22px' }}>
              We will notify you via SMS/WhatsApp as soon as examination batches, faculty panels, and registration dates are officially declared.
            </p>

            {leadStatus.message && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: leadStatus.type === 'success' ? '#f0fdf4' : '#fef2f2',
                  border: leadStatus.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca',
                  color: leadStatus.type === 'success' ? '#15803d' : '#b91c1c',
                  fontSize: '0.88rem'
                }}
              >
                {leadStatus.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{leadStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={leadForm.studentName}
                  onChange={(e) => setLeadForm({ ...leadForm, studentName: e.target.value })}
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
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 8494865435"
                  value={leadForm.phoneNumber}
                  onChange={(e) => setLeadForm({ ...leadForm, phoneNumber: e.target.value })}
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
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. student@gmail.com"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
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
                  Exam Interested In *
                </label>
                <select
                  value={leadForm.examInterest}
                  onChange={(e) => setLeadForm({ ...leadForm, examInterest: e.target.value })}
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
                  <option value="Banking Exams (IBPS / SBI PO & Clerk)">Banking Exams (IBPS / SBI PO & Clerk)</option>
                  <option value="SSC (CGL, CHSL, CPO, MTS)">SSC (CGL, CHSL, CPO, MTS)</option>
                  <option value="Railway Exams (RRB NTPC, Group D)">Railway Exams (RRB NTPC, Group D)</option>
                  <option value="State Government Exams (PSC, Police SI)">State Government Exams (PSC, Police SI)</option>
                  <option value="UPSC Civil Services Examination">UPSC Civil Services Examination</option>
                  <option value="Other Competitive Examinations">Other Competitive Examinations</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
                  Are you also interested in PG accommodation?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Yes, Single/Double Sharing room needed"
                  value={leadForm.notes}
                  onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
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

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ padding: '14px', fontSize: '1rem', fontWeight: '700', marginTop: '6px' }}
              >
                {submitting ? 'Registering...' : 'Register for Updates'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
