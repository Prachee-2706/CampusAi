import { useState } from 'react';
import Header from '../components/Header';
import { Plus, Filter, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const allAssignments = [
  { id: 1, title: 'ER Diagram Design', subject: 'DBMS', deadline: '09 Oct 2026, 10:30 AM', status: 'in-progress', desc: 'Design an ER diagram for a university management system', icon: '🗄️', color: '#8b5cf6' },
  { id: 2, title: 'TCP/IP Socket Programming', subject: 'Computer Networks', deadline: '12 Oct 2026, 12:45 PM', status: 'upcoming', desc: 'Implement a client-server chat application using sockets', icon: '🌐', color: '#3b82f6' },
  { id: 3, title: 'Process Scheduling Algorithms', subject: 'Operating Systems', deadline: '08 Oct 2026, 11:00 AM', status: 'completed', desc: 'Implement FCFS, SJF, and Round Robin scheduling', icon: '💻', color: '#f59e0b' },
  { id: 4, title: 'Normalization Practice', subject: 'DBMS', deadline: '15 Oct 2026, 09:00 AM', status: 'upcoming', desc: 'Convert given relations to 3NF and BCNF', icon: '🗄️', color: '#8b5cf6' },
  { id: 5, title: 'Subnetting Exercise', subject: 'Computer Networks', deadline: '07 Oct 2026, 03:00 PM', status: 'overdue', desc: 'Solve subnetting problems for Class B and C networks', icon: '🌐', color: '#3b82f6' },
  { id: 6, title: 'Linear Regression Implementation', subject: 'AIML', deadline: '18 Oct 2026, 11:30 AM', status: 'upcoming', desc: 'Implement linear regression using gradient descent', icon: '🧠', color: '#ec4899' },
  { id: 7, title: 'Newton-Raphson Method', subject: 'Numerical Methods', deadline: '10 Oct 2026, 02:00 PM', status: 'in-progress', desc: 'Implement and compare root-finding methods', icon: '🔢', color: '#22c55e' },
];

const statusConfig = {
  'all': { label: 'All', count: allAssignments.length },
  'in-progress': { label: 'In Progress', count: allAssignments.filter(a => a.status === 'in-progress').length },
  'upcoming': { label: 'Upcoming', count: allAssignments.filter(a => a.status === 'upcoming').length },
  'completed': { label: 'Completed', count: allAssignments.filter(a => a.status === 'completed').length },
  'overdue': { label: 'Overdue', count: allAssignments.filter(a => a.status === 'overdue').length },
};

const statusIcons = {
  'in-progress': <Clock size={16} />,
  'upcoming': <AlertCircle size={16} />,
  'completed': <CheckCircle2 size={16} />,
  'overdue': <AlertCircle size={16} />,
};

export default function Assignments({ onMenuClick }) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? allAssignments
    : allAssignments.filter(a => a.status === filter);

  return (
    <div className="page-content">
      <Header
        title="Assignments"
        subtitle="Track your academic assignments & deadlines"
        onMenuClick={onMenuClick}
      />

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total', value: allAssignments.length, icon: '📋', color: '#8b5cf6' },
          { label: 'In Progress', value: statusConfig['in-progress'].count, icon: '⏳', color: '#f59e0b' },
          { label: 'Completed', value: statusConfig['completed'].count, icon: '✅', color: '#22c55e' },
          { label: 'Overdue', value: statusConfig['overdue'].count, icon: '⚠️', color: '#ef4444' },
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

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {Object.entries(statusConfig).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontWeight: filter === key ? 600 : 500,
              fontSize: '0.82rem',
              background: filter === key ? 'var(--primary)' : 'var(--bg-card)',
              color: filter === key ? 'var(--primary-text)' : 'var(--text-secondary)',
              border: `1px solid ${filter === key ? 'var(--primary)' : 'var(--border-light)'}`,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {val.label} ({val.count})
          </button>
        ))}
      </div>

      {/* Assignment Cards */}
      <div style={{ display: 'grid', gap: '14px' }}>
        {filtered.map((a) => (
          <div className="card" key={a.id} style={{ padding: '20px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: 'var(--radius-md)',
                background: `${a.color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', flexShrink: 0,
              }}>
                {a.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{a.title}</h4>
                  <span style={{
                    padding: '3px 10px', borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem', fontWeight: 600,
                    background: `${a.color}12`, color: a.color,
                  }}>
                    {a.subject}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {a.desc}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={12} /> Deadline: {a.deadline}
                </p>
              </div>
              <span className={`assignment-status ${a.status}`}>
                {a.status === 'in-progress' ? 'In Progress' :
                 a.status === 'completed' ? 'Completed' :
                 a.status === 'overdue' ? 'Overdue' : 'Upcoming'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
