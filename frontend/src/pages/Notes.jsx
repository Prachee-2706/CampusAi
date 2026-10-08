import { useState } from 'react';
import Header from '../components/Header';
import { FileText, Upload, Search, Download, Trash2, Tag, BookOpen, ExternalLink, Plus, CheckCircle2 } from 'lucide-react';

const initialNotes = [
  { id: 1, title: 'DBMS Unit 2 - Normalization & ER Models', subject: 'DBMS', date: 'Oct 6, 2026', size: '2.4 MB', type: 'PDF', tags: ['Database', 'Unit 2', 'Exam'] },
  { id: 2, title: 'Operating Systems - Process Scheduling Notes', subject: 'OS', date: 'Oct 4, 2026', size: '1.8 MB', type: 'PDF', tags: ['CPU Scheduling', 'Unit 1'] },
  { id: 3, title: 'Computer Networks - TCP/IP Protocol Suite Handout', subject: 'CN', date: 'Oct 2, 2026', size: '3.1 MB', type: 'DOCX', tags: ['Protocols', 'Unit 3'] },
  { id: 4, title: 'Mathematics III - Fourier Transform Quick Reference', subject: 'Maths', date: 'Sep 28, 2026', size: '950 KB', type: 'PDF', tags: ['Transforms', 'Formula Sheet'] },
  { id: 5, title: 'Software Engineering - Agile & Waterfall Comparison', subject: 'SE', date: 'Sep 25, 2026', size: '1.2 MB', type: 'PDF', tags: ['SDLC', 'Agile'] },
];

export default function Notes({ onMenuClick }) {
  const [notes, setNotes] = useState(initialNotes);
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [isUploading, setIsUploading] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('DBMS');

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase()) ||
                          note.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesSubject = selectedSubject === 'All' || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newNoteObj = {
      id: Date.now(),
      title: newTitle.trim(),
      subject: newSubject,
      date: 'Just now',
      size: '1.5 MB',
      type: 'PDF',
      tags: ['Uploaded', newSubject]
    };

    setNotes([newNoteObj, ...notes]);
    setNewTitle('');
    setIsUploading(false);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="page-content">
      <Header
        title="Study Notes & Documents"
        subtitle="Upload, manage and reference course material and syllabus PDFs"
        onMenuClick={onMenuClick}
      />

      {/* Action Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', flex: 1, maxWidth: '500px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              placeholder="Search notes, topics, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{
              padding: '10px 16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value="All">All Subjects</option>
            <option value="DBMS">DBMS</option>
            <option value="OS">OS</option>
            <option value="CN">Computer Networks</option>
            <option value="Maths">Mathematics III</option>
            <option value="SE">Software Eng.</option>
          </select>
        </div>

        <button
          onClick={() => setIsUploading(!isUploading)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'var(--primary)',
            color: 'var(--primary-text)',
            borderRadius: 'var(--radius-md)',
            fontWeight: '600',
            fontSize: '0.9rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Upload size={18} />
          {isUploading ? 'Cancel Upload' : 'Upload Document'}
        </button>
      </div>

      {/* Upload Form Modal / Drawer */}
      {isUploading && (
        <form onSubmit={handleAddNote} style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '14px', color: 'var(--text-primary)' }}>
            Upload New Document
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: '12px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Document Title (e.g. Unit 3 OS Notes)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              style={{
                padding: '10px 14px',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}
            />
            <select
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              style={{
                padding: '10px 14px',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}
            >
              <option value="DBMS">DBMS</option>
              <option value="OS">OS</option>
              <option value="CN">CN</option>
              <option value="Maths">Maths III</option>
              <option value="SE">SE</option>
            </select>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                background: 'var(--primary)',
                color: 'var(--primary-text)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Save Note
            </button>
          </div>
        </form>
      )}

      {/* Notes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredNotes.map(note => (
          <div key={note.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span className="badge" style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  background: 'var(--primary-light)', color: 'var(--primary)',
                  fontWeight: '600', padding: '4px 10px', borderRadius: 'var(--radius-sm)'
                }}>
                  <BookOpen size={12} /> {note.subject}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{note.size}</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: '1.4' }}>
                {note.title}
              </h3>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {note.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.75rem',
                    background: 'var(--border-light)',
                    color: 'var(--text-secondary)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{note.date}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{
                    padding: '6px 10px',
                    background: 'var(--border-light)',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'var(--primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                  title="View"
                >
                  <ExternalLink size={14} /> Open
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  style={{
                    padding: '6px 10px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'var(--status-error)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem'
                  }}
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
