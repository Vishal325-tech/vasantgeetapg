import React, { useState } from 'react';
import { Lock, Mail, Shield, AlertCircle, ArrowRight, X } from 'lucide-react';
import { api } from '../services/api';

export default function AdminLogin({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('admin@vasantgeetha.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await api.login(email, password);
      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3500,
        backgroundColor: 'rgba(15, 23, 42, 0.88)',
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
          maxWidth: '440px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '38px 32px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
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

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
            alt="Vasant Geeta"
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #eab308',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              backgroundColor: '#ffffff'
            }}
          />
        </div>

        <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-900)', marginBottom: '6px', fontWeight: '800', textAlign: 'center' }}>
          Management Portal Login
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--navy-600)', marginBottom: '22px', textAlign: 'center' }}>
          Secure administrative access for Vasant Geeta management.
        </p>

        {error && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              marginBottom: '18px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#b91c1c',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-800)', marginBottom: '6px' }}>
              Admin Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--navy-400)' }} />
            </div>
          </div>

          <div
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--navy-50)',
              borderRadius: '8px',
              fontSize: '0.78rem',
              color: 'var(--navy-600)',
              border: '1px solid var(--navy-200)'
            }}
          >
            <strong>Default Access:</strong> admin@vasantgeetha.com / admin123
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-navy"
            style={{ padding: '13px', width: '100%', fontSize: '0.95rem', fontWeight: '700', marginTop: '6px' }}
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
