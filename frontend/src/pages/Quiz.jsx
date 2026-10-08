import { useState } from 'react';
import Header from '../components/Header';
import { Brain, CheckCircle2, XCircle, RotateCcw, Trophy, ArrowRight } from 'lucide-react';

const quizQuestions = [
  {
    question: 'Which normal form removes partial dependency?',
    options: ['1NF', '2NF', '3NF', 'BCNF'],
    correct: 1,
    explanation: '2NF (Second Normal Form) removes partial dependencies. A relation must be in 1NF and every non-key attribute must be fully functionally dependent on the primary key.'
  },
  {
    question: 'Which layer of the OSI model is responsible for routing?',
    options: ['Data Link Layer', 'Transport Layer', 'Network Layer', 'Session Layer'],
    correct: 2,
    explanation: 'The Network Layer (Layer 3) is responsible for routing packets from source to destination across multiple networks.'
  },
  {
    question: 'What is a deadlock in Operating Systems?',
    options: [
      'A process waiting for I/O',
      'Two or more processes waiting for each other indefinitely',
      'A process using 100% CPU',
      'A scheduling algorithm'
    ],
    correct: 1,
    explanation: 'Deadlock occurs when two or more processes are blocked forever, each waiting for a resource held by another process in the set.'
  },
  {
    question: 'Which protocol operates at the Transport Layer?',
    options: ['HTTP', 'IP', 'TCP', 'ARP'],
    correct: 2,
    explanation: 'TCP (Transmission Control Protocol) operates at the Transport Layer (Layer 4) and provides reliable, connection-oriented data transfer.'
  },
  {
    question: 'What does ACID stand for in DBMS?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Addition, Consistency, Integrity, Data',
      'Atomicity, Concurrency, Isolation, Durability',
      'Availability, Consistency, Isolation, Data'
    ],
    correct: 0,
    explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability — the key properties that guarantee reliable database transactions.'
  },
];

const subjectOptions = [
  { name: 'DBMS', icon: '🗄️', color: '#8b5cf6' },
  { name: 'Computer Networks', icon: '🌐', color: '#3b82f6' },
  { name: 'Operating Systems', icon: '💻', color: '#f59e0b' },
  { name: 'AIML', icon: '🧠', color: '#ec4899' },
  { name: 'Numerical Methods', icon: '🔢', color: '#22c55e' },
  { name: 'Microprocessors', icon: '⚡', color: '#14b8a6' },
];

export default function Quiz({ onMenuClick }) {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === quizQuestions[currentQ].correct;
    if (correct) setScore(s => s + 1);
    setAnswers(prev => [...prev, { selected, correct }]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const q = quizQuestions[currentQ];
  const progress = ((currentQ + (answered ? 1 : 0)) / quizQuestions.length) * 100;
  const letters = ['A', 'B', 'C', 'D'];

  if (!started) {
    return (
      <div className="page-content">
        <Header title="AI Quiz Generator" subtitle="Test your knowledge with AI-generated quizzes" onMenuClick={onMenuClick} />
        <div className="card" style={{ maxWidth: '720px' }}>
          <div className="card-header">
            <div className="card-title">Select a Subject</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {subjectOptions.map((sub, i) => (
              <button
                key={i}
                onClick={() => setStarted(true)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '10px', padding: '24px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  background: 'var(--bg-card)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = sub.color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${sub.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '2rem' }}>{sub.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{sub.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="page-content">
        <Header title="Quiz Results" subtitle="Here's how you performed" onMenuClick={onMenuClick} />
        <div className="card" style={{ maxWidth: '520px' }}>
          <div className="score-display">
            <div className="score-circle" style={{ '--score-pct': `${pct}%` }}>
              <span className="score-value">{score}/{quizQuestions.length}</span>
              <span className="score-label">Correct</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px' }}>
              {pct >= 80 ? '🏆 Excellent!' : pct >= 60 ? '👍 Good Job!' : pct >= 40 ? '💪 Keep Practicing!' : '📚 Study More!'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              You scored {pct}% — {pct >= 60 ? 'Well done on this topic!' : 'Review the topics below for improvement.'}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-primary" onClick={handleRestart}>
                <RotateCcw size={16} /> Try Again
              </button>
              <button className="btn btn-secondary" onClick={handleRestart}>
                New Subject
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Header title="AI Quiz" subtitle={`Question ${currentQ + 1} of ${quizQuestions.length}`} onMenuClick={onMenuClick} />

      <div className="card quiz-container">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question-number">Question {currentQ + 1} of {quizQuestions.length}</div>
        <div className="quiz-question">{q.question}</div>

        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let className = 'quiz-option';
            if (selected === i && !answered) className += ' selected';
            if (answered && i === q.correct) className += ' correct';
            if (answered && selected === i && i !== q.correct) className += ' incorrect';
            return (
              <div key={i} className={className} onClick={() => handleSelect(i)}>
                <span className="quiz-option-letter">{letters[i]}</span>
                {opt}
                {answered && i === q.correct && <CheckCircle2 size={18} color="#22c55e" style={{ marginLeft: 'auto' }} />}
                {answered && selected === i && i !== q.correct && <XCircle size={18} color="#ef4444" style={{ marginLeft: 'auto' }} />}
              </div>
            );
          })}
        </div>

        {answered && (
          <div style={{
            marginTop: '20px', padding: '16px',
            background: 'rgba(200, 245, 66, 0.08)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--primary)',
            fontSize: '0.85rem', color: 'var(--text-secondary)',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>💡 Explanation:</strong> {q.explanation}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          {!answered ? (
            <button className="btn btn-primary" onClick={handleSubmit} disabled={selected === null}>
              Submit Answer
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>
              {currentQ < quizQuestions.length - 1 ? 'Next Question' : 'See Results'} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
