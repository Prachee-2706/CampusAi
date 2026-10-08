import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Lock, Mail, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('om.panchal@gsfc.edu.in');
  const [password, setPassword] = useState('student123');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) {
        onLogin({ email, role, name: role === 'student' ? 'Om Panchal' : 'Dr. Sharma' });
      }
      navigate('/');
    }, 800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 20%, #F5EBE0 0%, #FAF7F2 80%)',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#FFFFFF',
        border: '1px solid #E7E0D5',
        borderRadius: '24px',
        padding: '36px 32px',
        boxShadow: '0 20px 40px rgba(45, 41, 38, 0.08), 0 0 30px rgba(201, 100, 66, 0.08)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Logo & Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #C96442 0%, #B25333 100%)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 8px 20px rgba(201, 100, 66, 0.3)',
            marginBottom: '16px'
          }}>
            <GraduationCap size={32} />
          </div>
          <h1 style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#2D2926',
            margin: '0 0 6px 0',
            letterSpacing: '-0.01em'
          }}>
            Campus<span style={{ color: '#C96442' }}>Ai</span>
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#60574D', margin: 0 }}>
            GSFC University Academic Portal
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div style={{
          display: 'flex',
          background: '#F2EBE0',
          padding: '4px',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid #E7E0D5'
        }}>
          <button
            type="button"
            onClick={() => setRole('student')}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: role === 'student' ? '#C96442' : 'transparent',
              color: role === 'student' ? '#fff' : '#60574D',
              boxShadow: role === 'student' ? '0 2px 8px rgba(201, 100, 66, 0.3)' : 'none'
            }}
          >
            🎓 Student Portal
          </button>
          <button
            type="button"
            onClick={() => setRole('faculty')}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: role === 'faculty' ? '#C96442' : 'transparent',
              color: role === 'faculty' ? '#fff' : '#60574D',
              boxShadow: role === 'faculty' ? '0 2px 8px rgba(201, 100, 66, 0.3)' : 'none'
            }}
          >
            👨‍🏫 Faculty Portal
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            padding: '12px 16px',
            background: 'rgba(220, 38, 38, 0.08)',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            borderRadius: '10px',
            color: '#dc2626',
            fontSize: '0.85rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#2D2926', marginBottom: '6px' }}>
              {role === 'student' ? 'Student Email / Enrollment No.' : 'Faculty Email'}
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#918679' }} />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'student' ? 'student@gsfc.edu.in' : 'faculty@gsfc.edu.in'}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  background: '#FAF7F2',
                  border: '1px solid #E7E0D5',
                  borderRadius: '10px',
                  color: '#2D2926',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C96442'}
                onBlur={(e) => e.target.style.borderColor = '#E7E0D5'}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: '600', color: '#2D2926' }}>
                Password
              </label>
              <a href="#forgot" style={{ fontSize: '0.78rem', color: '#C96442', textDecoration: 'none' }}>
                Forgot Password?
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#918679' }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  background: '#FAF7F2',
                  border: '1px solid #E7E0D5',
                  borderRadius: '10px',
                  color: '#2D2926',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C96442'}
                onBlur={(e) => e.target.style.borderColor = '#E7E0D5'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', color: '#60574D' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={{ accentColor: '#C96442', width: '16px', height: '16px', borderRadius: '4px' }}
              />
              Remember me
            </label>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.78rem' }}>
              <ShieldCheck size={14} /> 256-Bit SSL Secured
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #C96442 0%, #B25333 100%)',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(201, 100, 66, 0.3)',
              transition: 'all 0.2s ease',
              marginTop: '6px'
            }}
          >
            {isLoading ? 'Signing In...' : (
              <>
                Sign In to CampusAi <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Box */}
        <div style={{
          marginTop: '28px',
          padding: '14px',
          background: 'rgba(201, 100, 66, 0.08)',
          border: '1px dashed rgba(201, 100, 66, 0.3)',
          borderRadius: '12px',
          fontSize: '0.78rem',
          color: '#60574D'
        }}>
          <div style={{ fontWeight: '600', color: '#C96442', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} /> Demo Quick Access:
          </div>
          <div>Default Student: <strong>om.panchal@gsfc.edu.in</strong></div>
          <div>Password: <strong>student123</strong></div>
        </div>
      </div>
    </div>
  );
}
