import { useState } from 'react';
import Header from '../components/Header';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const timetableData = {
  Monday: [
    { time: '09:00 - 10:00', subject: 'Database Management Systems', room: 'Room 204', type: 'Lecture', color: '#8b5cf6', icon: '🗄️' },
    { time: '10:00 - 11:00', subject: 'Computer Networks', room: 'Lab 2', type: 'Practical', color: '#3b82f6', icon: '🌐' },
    { time: '11:15 - 12:15', subject: 'Operating Systems', room: 'Room 301', type: 'Lecture', color: '#f59e0b', icon: '💻' },
    { time: '02:00 - 03:00', subject: 'Numerical Methods', room: 'Room 102', type: 'Lecture', color: '#22c55e', icon: '🔢' },
    { time: '03:00 - 04:00', subject: 'AIML', room: 'Room 105', type: 'Lecture', color: '#ec4899', icon: '🧠' },
  ],
  Tuesday: [
    { time: '09:00 - 10:00', subject: 'Computer Networks', room: 'Room 302', type: 'Lecture', color: '#3b82f6', icon: '🌐' },
    { time: '10:00 - 12:00', subject: 'DBMS Lab', room: 'Lab 3', type: 'Practical', color: '#8b5cf6', icon: '🗄️' },
    { time: '02:00 - 03:00', subject: 'Microprocessors', room: 'Room 201', type: 'Lecture', color: '#14b8a6', icon: '⚡' },
    { time: '03:00 - 04:00', subject: 'AIML', room: 'Room 105', type: 'Lecture', color: '#ec4899', icon: '🧠' },
  ],
  Wednesday: [
    { time: '09:00 - 10:00', subject: 'Operating Systems', room: 'Room 301', type: 'Lecture', color: '#f59e0b', icon: '💻' },
    { time: '10:00 - 11:00', subject: 'Numerical Methods', room: 'Room 102', type: 'Lecture', color: '#22c55e', icon: '🔢' },
    { time: '11:15 - 01:15', subject: 'CN Lab', room: 'Lab 2', type: 'Practical', color: '#3b82f6', icon: '🌐' },
    { time: '02:00 - 03:00', subject: 'DBMS', room: 'Room 204', type: 'Lecture', color: '#8b5cf6', icon: '🗄️' },
  ],
  Thursday: [
    { time: '09:00 - 10:00', subject: 'Microprocessors', room: 'Room 201', type: 'Lecture', color: '#14b8a6', icon: '⚡' },
    { time: '10:00 - 12:00', subject: 'OS Lab', room: 'Lab 1', type: 'Practical', color: '#f59e0b', icon: '💻' },
    { time: '02:00 - 03:00', subject: 'AIML', room: 'Lab 4', type: 'Practical', color: '#ec4899', icon: '🧠' },
    { time: '03:00 - 04:00', subject: 'Numerical Methods', room: 'Room 102', type: 'Lecture', color: '#22c55e', icon: '🔢' },
  ],
  Friday: [
    { time: '09:00 - 10:00', subject: 'DBMS', room: 'Room 204', type: 'Lecture', color: '#8b5cf6', icon: '🗄️' },
    { time: '10:00 - 11:00', subject: 'Computer Networks', room: 'Room 302', type: 'Lecture', color: '#3b82f6', icon: '🌐' },
    { time: '11:15 - 12:15', subject: 'Microprocessors', room: 'Room 201', type: 'Lecture', color: '#14b8a6', icon: '⚡' },
    { time: '02:00 - 04:00', subject: 'Microprocessors Lab', room: 'Lab 5', type: 'Practical', color: '#14b8a6', icon: '⚡' },
  ],
  Saturday: [
    { time: '09:00 - 10:00', subject: 'Operating Systems', room: 'Room 301', type: 'Lecture', color: '#f59e0b', icon: '💻' },
    { time: '10:00 - 11:00', subject: 'AIML', room: 'Room 105', type: 'Lecture', color: '#ec4899', icon: '🧠' },
  ],
};

export default function Timetable({ onMenuClick }) {
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(days[today === 0 ? 0 : today - 1] || 'Monday');
  const slots = timetableData[selectedDay] || [];

  return (
    <div className="page-content">
      <Header
        title="Timetable"
        subtitle="Your weekly class schedule"
        onMenuClick={onMenuClick}
      />

      {/* Day Tabs */}
      <div style={{
        display: 'flex', gap: '8px', marginBottom: '24px',
        overflowX: 'auto', paddingBottom: '4px'
      }}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-full)',
              fontWeight: selectedDay === day ? 700 : 500,
              fontSize: '0.85rem',
              background: selectedDay === day ? 'var(--primary)' : 'var(--bg-card)',
              color: selectedDay === day ? 'var(--primary-text)' : 'var(--text-secondary)',
              border: `1px solid ${selectedDay === day ? 'var(--primary)' : 'var(--border-light)'}`,
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Timetable Slots */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">{selectedDay}'s Schedule</div>
            <div className="card-subtitle">{slots.length} classes scheduled</div>
          </div>
        </div>
        <div className="timetable-grid">
          {slots.map((slot, i) => (
            <div className="timetable-slot" key={i}>
              <div className="timetable-time">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} />
                  {slot.time}
                </div>
              </div>
              <div className="timetable-divider" style={{ background: slot.color }} />
              <div style={{
                width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
                background: `${slot.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', flexShrink: 0,
              }}>
                {slot.icon}
              </div>
              <div className="timetable-subject">
                <h4>{slot.subject}</h4>
                <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> {slot.room}
                </p>
              </div>
              <span style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                fontWeight: 600,
                background: slot.type === 'Practical' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                color: slot.type === 'Practical' ? '#3b82f6' : '#8b5cf6',
              }}>
                {slot.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
