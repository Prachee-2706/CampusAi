import { useState } from 'react';
import Header from '../components/Header';
import { Calendar, Clock, BookOpen, CheckCircle2, Circle, Target } from 'lucide-react';

const samplePlan = [
  {
    day: 'Day 1 — Oct 8',
    focus: 'Foundations',
    completed: true,
    tasks: [
      { text: 'Relational Model & Keys', done: true },
      { text: 'ER Diagrams', done: true },
      { text: 'SQL Basics (DDL, DML)', done: true },
    ]
  },
  {
    day: 'Day 2 — Oct 9',
    focus: 'Core Concepts',
    completed: false,
    tasks: [
      { text: 'Joins (Inner, Outer, Cross)', done: true },
      { text: 'Normalization (1NF, 2NF, 3NF)', done: false },
      { text: 'BCNF & Decomposition', done: false },
    ]
  },
  {
    day: 'Day 3 — Oct 10',
    focus: 'Transactions & Concurrency',
    completed: false,
    tasks: [
      { text: 'Transactions & ACID Properties', done: false },
      { text: 'Concurrency Control', done: false },
      { text: 'Deadlock Handling', done: false },
    ]
  },
  {
    day: 'Day 4 — Oct 11',
    focus: 'Advanced Topics',
    completed: false,
    tasks: [
      { text: 'Indexing (B-tree, Hashing)', done: false },
      { text: 'Query Processing', done: false },
      { text: 'Previous Year Questions', done: false },
    ]
  },
  {
    day: 'Day 5 — Oct 12',
    focus: 'Revision & Practice',
    completed: false,
    tasks: [
      { text: 'Complete Revision', done: false },
      { text: 'Mock Test / Quiz', done: false },
      { text: 'Weak Topics Revision', done: false },
    ]
  },
];

export default function StudyPlanner({ onMenuClick }) {
  const [plan, setPlan] = useState(samplePlan);
  const [showForm, setShowForm] = useState(false);

  const totalTasks = plan.reduce((sum, d) => sum + d.tasks.length, 0);
  const doneTasks = plan.reduce((sum, d) => sum + d.tasks.filter(t => t.done).length, 0);
  const progress = Math.round((doneTasks / totalTasks) * 100);

  const toggleTask = (dayIdx, taskIdx) => {
    setPlan(prev => prev.map((d, di) =>
      di === dayIdx
        ? {
            ...d,
            tasks: d.tasks.map((t, ti) =>
              ti === taskIdx ? { ...t, done: !t.done } : t
            )
          }
        : d
    ));
  };

  return (
    <div className="page-content">
      <Header
        title="Study Planner"
        subtitle="AI-generated personalized study schedules"
        onMenuClick={onMenuClick}
      />

      {/* Plan Info Card */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: 'var(--radius-md)',
            background: 'rgba(139, 92, 246, 0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', flexShrink: 0,
          }}>
            🗄️
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>DBMS Exam Preparation</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              5 days • 2 hours/day • Exam: Oct 12, 2026
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Progress</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: progress >= 50 ? '#22c55e' : '#f59e0b' }}>
                {progress}%
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Tasks</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                {doneTasks}/{totalTasks}
              </p>
            </div>
          </div>
        </div>
        {/* Progress Bar */}
        <div style={{
          width: '100%', height: '6px', marginTop: '16px',
          background: 'var(--border-light)',
          borderRadius: 'var(--radius-full)', overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: 'linear-gradient(90deg, var(--primary), #22c55e)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.4s ease',
          }} />
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Study Timeline</div>
        </div>
        <div className="study-plan-timeline">
          {plan.map((day, dayIdx) => {
            const dayDone = day.tasks.every(t => t.done);
            return (
              <div className={`study-plan-day ${dayDone ? 'completed' : ''}`} key={dayIdx}>
                <h4>
                  {day.day}
                  <span style={{
                    marginLeft: '10px', padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem', fontWeight: 600,
                    background: dayDone ? 'rgba(34,197,94,0.1)' : 'rgba(139,92,246,0.08)',
                    color: dayDone ? '#22c55e' : '#8b5cf6',
                  }}>
                    {day.focus}
                  </span>
                </h4>
                <div className="study-plan-tasks">
                  {day.tasks.map((task, taskIdx) => (
                    <div
                      key={taskIdx}
                      className={`study-plan-task ${task.done ? 'done' : ''}`}
                      onClick={() => toggleTask(dayIdx, taskIdx)}
                      style={{ cursor: 'pointer' }}
                    >
                      {task.done
                        ? <CheckCircle2 size={16} color="#22c55e" />
                        : <Circle size={16} color="var(--text-tertiary)" />
                      }
                      {task.text}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
