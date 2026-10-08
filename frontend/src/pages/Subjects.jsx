import { useState } from 'react';
import Header from '../components/Header';
import { Star, BookOpen, ChevronRight, BarChart3 } from 'lucide-react';

const subjectsData = [
  { name: 'Database Management Systems', code: 'DBMS', icon: '🗄️', color: '#8b5cf6', units: 5, progress: 45, rating: 4.8, teacher: 'Dr. Sharma', type: 'Core' },
  { name: 'Computer Networks', code: 'CN', icon: '🌐', color: '#3b82f6', units: 4, progress: 75, rating: 5.0, teacher: 'Prof. Patel', type: 'Core' },
  { name: 'Operating Systems', code: 'OS', icon: '💻', color: '#f59e0b', units: 5, progress: 30, rating: 4.6, teacher: 'Dr. Mehta', type: 'Core' },
  { name: 'Microprocessors', code: 'MP', icon: '⚡', color: '#14b8a6', units: 4, progress: 60, rating: 4.3, teacher: 'Prof. Joshi', type: 'Core' },
  { name: 'Numerical Methods', code: 'NM', icon: '🔢', color: '#22c55e', units: 5, progress: 20, rating: 4.1, teacher: 'Dr. Desai', type: 'Elective' },
  { name: 'AI & Machine Learning', code: 'AIML', icon: '🧠', color: '#ec4899', units: 4, progress: 55, rating: 4.9, teacher: 'Dr. Kumar', type: 'Core' },
];

export default function Subjects({ onMenuClick }) {
  return (
    <div className="page-content">
      <Header
        title="My Subjects"
        subtitle="Semester 5 — Computer Science & Engineering"
        onMenuClick={onMenuClick}
      />

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {[
          { label: 'Total Subjects', value: '6', icon: '📚', color: '#8b5cf6' },
          { label: 'Core Subjects', value: '5', icon: '🎯', color: '#3b82f6' },
          { label: 'Avg Progress', value: '48%', icon: '📊', color: '#22c55e' },
        ].map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-card-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-card-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subject Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
        {subjectsData.map((subject, i) => (
          <div className="card" key={i} style={{ padding: '24px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: 'var(--radius-md)',
                background: `${subject.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', flexShrink: 0,
              }}>
                {subject.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>{subject.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {subject.code} • {subject.units} Units • 👤 {subject.teacher}
                </p>
              </div>
              <span style={{
                padding: '4px 12px', borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem', fontWeight: 600,
                background: subject.type === 'Core' ? 'rgba(139,92,246,0.1)' : 'rgba(34,197,94,0.1)',
                color: subject.type === 'Core' ? '#8b5cf6' : '#22c55e',
              }}>
                {subject.type}
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Progress</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: subject.color }}>{subject.progress}%</span>
              </div>
              <div style={{
                width: '100%', height: '6px',
                background: 'var(--border-light)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${subject.progress}%`,
                  height: '100%',
                  background: subject.color,
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 0.6s ease',
                }} />
              </div>
            </div>

            {/* Footer */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: '14px', borderTop: '1px solid var(--border-light)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600 }}>
                <Star size={14} fill="currentColor" /> {subject.rating}
              </div>
              <span className="card-action">
                View Details <ChevronRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
