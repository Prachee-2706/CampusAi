import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {
  BookOpen, Clock, ClipboardList, Brain,
  ChevronRight, ChevronLeft, TrendingUp,
  MessageSquare, Sparkles, Calendar, Star,
  BarChart3, Plus
} from 'lucide-react';

const todayClasses = [
  { subject: 'Database Management', type: 'Lecture - Room 204', time: '09:00 AM', icon: '🗄️', color: '#8b5cf6' },
  { subject: 'Computer Networks', type: 'Lab 2 - Practical', time: '10:30 AM', icon: '🌐', color: '#3b82f6' },
  { subject: 'Operating Systems', type: 'Lecture - Room 301', time: '02:00 PM', icon: '💻', color: '#f59e0b' },
  { subject: 'AIML', type: 'Lecture - Room 105', time: '04:00 PM', icon: '🧠', color: '#ec4899' },
];

const assignments = [
  { title: 'ER Diagram Design', subject: 'DBMS', date: '09 Oct, 10:30 AM', status: 'in-progress', icon: '🗄️', color: '#8b5cf6' },
  { title: 'Socket Programming', subject: 'CN', date: '12 Oct, 12:45 PM', status: 'upcoming', icon: '🌐', color: '#3b82f6' },
  { title: 'Process Scheduling', subject: 'OS', date: '08 Oct, 11:00 AM', status: 'completed', icon: '💻', color: '#f59e0b' },
];

const subjects = [
  { name: 'DBMS', fullName: 'Database Management', lessons: 12, rating: 4.8, type: 'Core', icon: '🗄️', color: '#8b5cf6' },
  { name: 'CN', fullName: 'Computer Networks', lessons: 15, rating: 5.0, type: 'Core', icon: '🌐', color: '#3b82f6' },
  { name: 'OS', fullName: 'Operating Systems', lessons: 8, rating: 4.6, type: 'Core', icon: '💻', color: '#f59e0b' },
];

const weeklyHours = [
  { day: 'Su', hours: 1.5 },
  { day: 'Mo', hours: 3 },
  { day: 'Tu', hours: 2 },
  { day: 'We', hours: 4.5 },
  { day: 'Th', hours: 6.5 },
  { day: 'Fr', hours: 3.5 },
  { day: 'Sa', hours: 2 },
];

const calendarDays = (() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', empty: true });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      today: i === today.getDate(),
      hasEvent: [5, 12, 18, 25].includes(i),
    });
  }
  return days;
})();

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const courseProgress = [
  { name: 'DBMS', teacher: 'Dr. Sharma', remaining: '6h 45 min', progress: 45, color: '#8b5cf6', icon: '🗄️' },
  { name: 'Computer Networks', teacher: 'Prof. Patel', remaining: '18h 12 min', progress: 75, color: '#3b82f6', icon: '🌐' },
];

export default function Dashboard({ onMenuClick }) {
  const navigate = useNavigate();
  const now = new Date();
  const maxHours = Math.max(...weeklyHours.map(d => d.hours));

  return (
    <div className="page-content">
      <Header
        title={<>Welcome back, Om <span className="wave">👋</span></>}
        subtitle="CSE • Semester 5 — Let's continue learning!"
        onMenuClick={onMenuClick}
      />

      <div className="dashboard-grid">
        {/* Top Row: Subject Cards + Promo Banner */}
        <div className="dashboard-top-row">
          {subjects.map((subject, i) => (
            <div
              className="subject-card"
              key={i}
              onClick={() => navigate('/subjects')}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="subject-card-icon"
                style={{ background: `${subject.color}15` }}
              >
                {subject.icon}
              </div>
              <h4>{subject.fullName}</h4>
              <p>{subject.lessons} Lessons</p>
              <div className="subject-card-meta">
                <div className="subject-card-rating">
                  <Star size={14} fill="currentColor" /> {subject.rating}
                </div>
                <span className="subject-card-type">Type: {subject.type}</span>
              </div>
            </div>
          ))}

          {/* Promo Banner */}
          <div className="promo-banner">
            <h3>CampusAi</h3>
            <p>Your AI-powered study companion for GSFC University</p>
            <button className="promo-banner-btn" onClick={() => navigate('/chat')} style={{ cursor: 'pointer' }}>
              <Sparkles size={14} /> Ask AI Now
            </button>
          </div>
        </div>

        {/* Middle Row: Activity Chart + Schedule + Calendar */}
        <div className="dashboard-middle-row">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Hours Activity Chart */}
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="card-title">Hours Activity</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <TrendingUp size={14} color="#22c55e" />
                    <span style={{ fontSize: '0.78rem', color: '#22c55e', fontWeight: 600 }}>+3%</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>Increase than last week</span>
                  </div>
                </div>
                <div className="tabs">
                  <span className="tab active">Weekly</span>
                  <span className="tab">Monthly</span>
                </div>
              </div>

              {/* Bar Chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '180px', paddingTop: '20px' }}>
                {weeklyHours.map((item, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                      {item.hours === maxHours && (
                        <div style={{
                          position: 'absolute',
                          top: '-36px',
                          background: 'var(--sidebar-bg)',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                        }}>
                          🔥 {item.hours}h
                          <div style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: '50%',
                            transform: 'translateX(-50%) rotate(45deg)',
                            width: '8px',
                            height: '8px',
                            background: 'var(--sidebar-bg)',
                          }} />
                        </div>
                      )}
                      <div style={{
                        width: '100%',
                        maxWidth: '36px',
                        height: `${(item.hours / maxHours) * 140}px`,
                        background: item.hours === maxHours
                          ? 'var(--primary)'
                          : 'var(--sidebar-bg)',
                        borderRadius: '6px 6px 4px 4px',
                        transition: 'height 0.6s ease',
                        minHeight: '12px',
                      }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Daily Schedule</div>
                <span className="card-action" onClick={() => navigate('/timetable')} style={{ cursor: 'pointer' }}>View All <ChevronRight size={14} /></span>
              </div>
              <div className="schedule-list">
                {todayClasses.map((cls, i) => (
                  <div className="schedule-item" key={i} onClick={() => navigate('/timetable')} style={{ cursor: 'pointer' }}>
                    <div
                      className="schedule-item-icon"
                      style={{ background: `${cls.color}15` }}
                    >
                      {cls.icon}
                    </div>
                    <div className="schedule-item-info">
                      <h4>{cls.subject}</h4>
                      <p>{cls.type}</p>
                    </div>
                    <span className="schedule-item-time">{cls.time}</span>
                    <ChevronRight size={16} className="schedule-item-arrow" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calendar + Assignments */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Calendar */}
            <div className="card">
              <div className="calendar-widget">
                <div className="calendar-header">
                  <h4>{monthNames[now.getMonth()]}, {now.getFullYear()}</h4>
                  <div className="calendar-nav">
                    <button className="calendar-nav-btn"><ChevronLeft size={16} /></button>
                    <button className="calendar-nav-btn"><ChevronRight size={16} /></button>
                  </div>
                </div>
                <div className="calendar-grid">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <span className="calendar-day-name" key={i}>{d}</span>
                  ))}
                  {calendarDays.map((d, i) => (
                    <span
                      key={i}
                      className={`calendar-day ${d.today ? 'today' : ''} ${d.hasEvent ? 'has-event' : ''} ${d.empty ? 'empty' : ''}`}
                    >
                      {d.day}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Assignments */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Assignments</div>
                <button
                  className="card-action"
                  onClick={() => navigate('/assignments')}
                  style={{
                    width: '28px', height: '28px',
                    borderRadius: '50%', background: 'var(--primary)',
                    color: 'var(--primary-text)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', border: 'none'
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="assignment-list">
                {assignments.map((a, i) => (
                  <div className="assignment-item" key={i}>
                    <div
                      className="assignment-item-icon"
                      style={{ background: `${a.color}15` }}
                    >
                      {a.icon}
                    </div>
                    <div className="assignment-item-info">
                      <h4>{a.title}</h4>
                      <p>{a.date}</p>
                    </div>
                    <span className={`assignment-status ${a.status}`}>
                      {a.status === 'in-progress' ? 'In progress' :
                       a.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Course Progress */}
        <div className="dashboard-bottom-row">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Course You're Taking</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="tabs">
                  <span className="tab active">Active</span>
                  <span className="tab">Completed</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {courseProgress.map((course, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px', borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                    background: `${course.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', flexShrink: 0,
                  }}>
                    {course.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{course.name}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      👤 {course.teacher}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', marginRight: '16px' }}>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Remaining</p>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{course.remaining}</p>
                  </div>
                  {/* Progress Circle */}
                  <div className="progress-circle">
                    <svg width="44" height="44">
                      <circle className="progress-circle-bg" cx="22" cy="22" r="18" />
                      <circle
                        className="progress-circle-fill"
                        cx="22" cy="22" r="18"
                        stroke={course.color}
                        strokeDasharray={`${2 * Math.PI * 18}`}
                        strokeDashoffset={`${2 * Math.PI * 18 * (1 - course.progress / 100)}`}
                      />
                    </svg>
                    <span className="progress-circle-text">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Quick AI Actions</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { icon: <MessageSquare size={22} />, label: 'Ask AI', desc: 'Chat with CampusAi', color: '#8b5cf6', path: '/chat' },
                { icon: <Brain size={22} />, label: 'Take Quiz', desc: 'Test your knowledge', color: '#3b82f6', path: '/quiz' },
                { icon: <BookOpen size={22} />, label: 'Study Plan', desc: 'Create study schedule', color: '#f59e0b', path: '/planner' },
                { icon: <Calendar size={22} />, label: 'Timetable', desc: 'View your schedule', color: '#22c55e', path: '/timetable' },
              ].map((action, i) => (
                <div
                  key={i}
                  onClick={() => navigate(action.path)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: '10px', padding: '20px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = action.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 4px 12px ${action.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                    background: `${action.color}12`,
                    color: action.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {action.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 600 }}>{action.label}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{action.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
