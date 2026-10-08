import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import {
  Send, Paperclip, Sparkles, BookOpen,
  GraduationCap, Brain, HelpCircle
} from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    type: 'ai',
    content: "Hello Om! 👋 I'm CampusAi, your AI-powered study assistant for GSFC University. I can help you with:\n\n• Academic subject questions (DBMS, CN, OS, etc.)\n• University & campus information\n• Assignment planning\n• Quiz generation\n• Study planning\n\nHow can I help you today?",
    source: null,
    time: '09:00 AM'
  }
];

const suggestions = [
  { icon: <BookOpen size={14} />, text: 'Explain normalization in DBMS' },
  { icon: <HelpCircle size={14} />, text: 'Where is the examination cell?' },
  { icon: <Brain size={14} />, text: 'Quiz me on Computer Networks' },
  { icon: <GraduationCap size={14} />, text: 'Create a study plan for OS exam' },
];

export default function Chat({ onMenuClick }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateAIResponse = (userMessage) => {
    setIsTyping(true);
    const lowerMsg = userMessage.toLowerCase().trim();

    // Out-of-scope keywords list (sports, entertainment, politics, general trivia, personal, non-academic)
    const outOfScopeKeywords = [
      'cricket', 'football', 'match', 'score', 'ipl', 'nba',
      'movie', 'actor', 'actress', 'cinema', 'bollywood', 'hollywood', 'song', 'music',
      'joke', 'funny', 'game', 'gaming', 'pubg', 'gta',
      'politics', 'election', 'minister', 'president', 'pm', 'modi', 'biden',
      'recipe', 'food', 'pizza', 'burger', 'restaurant', 'hotel',
      'weather', 'rain', 'temperature',
      'stock', 'crypto', 'bitcoin', 'share market',
      'car', 'bike', 'tesla', 'iphone', 'samsung',
      'who is taylor swift', 'who is elon musk', 'relationship', 'dating'
    ];

    // Academic / University keywords
    const academicKeywords = [
      'dbms', 'database', 'normalization', 'sql', 'table', 'er diagram', 'query',
      'cn', 'network', 'tcp', 'ip', 'socket', 'protocol', 'layer', 'osi',
      'os', 'operating system', 'process', 'scheduling', 'deadlock', 'thread', 'memory',
      'math', 'fourier', 'transform', 'calculus', 'matrix', 'derivative',
      'se', 'software', 'agile', 'sdlc', 'waterfall', 'git',
      'exam', 'examination', 'cell', 'result', 'grade', 'gpa', 'syllabus',
      'campus', 'gsfc', 'university', 'admin', 'hostel', 'canteen', 'library',
      'professor', 'teacher', 'faculty', 'timetable', 'assignment', 'quiz', 'study', 'planner', 'note'
    ];

    const isExplicitOutOfScope = outOfScopeKeywords.some(kw => lowerMsg.includes(kw));
    const isAcademic = academicKeywords.some(kw => lowerMsg.includes(kw));

    let response;

    if (isExplicitOutOfScope || (!isAcademic && (lowerMsg.startsWith('who is') || lowerMsg.startsWith('what is the capital') || lowerMsg.includes('joke') || lowerMsg.includes('weather')))) {
      response = {
        content: "⚠️ **Scope Restriction — Out of Knowledge Base**\n\nI am specialized strictly as the **GSFC University Academic & Campus AI Assistant**.\n\n📌 **Tagline:** *\"I have no knowledge or information regarding non-academic or external subjects outside your university curriculum and campus guidelines.\"*\n\n--- \n\n### 🎓 Questions I CAN Answer:\n• **Supported Subjects:** DBMS, Computer Networks, Operating Systems, Software Engineering, Maths III\n• **Campus Queries:** Exam cell location, syllabus, timetable, assignment deadlines\n• **Study Tools:** Interactive quizzes, study planners, & lecture notes summary",
        source: 'CampusAi Guardrails System'
      };
    } else if (lowerMsg.includes('normalization') || lowerMsg.includes('dbms') || lowerMsg.includes('normal form')) {
      response = {
        content: "**Normalization** is the process of organizing data in a database to reduce redundancy and improve data integrity.\n\nThe major normal forms include:\n\n**1NF (First Normal Form)**\n• Eliminate repeating groups\n• Each cell contains a single value\n\n**2NF (Second Normal Form)**\n• Must be in 1NF\n• Remove partial dependencies\n\n**3NF (Third Normal Form)**\n• Must be in 2NF\n• Remove transitive dependencies\n\n**BCNF (Boyce-Codd Normal Form)**\n• Stricter version of 3NF\n• Every determinant must be a candidate key",
        source: 'DBMS Unit 2 Notes — Page 14'
      };
    } else if (lowerMsg.includes('examination') || lowerMsg.includes('exam cell') || lowerMsg.includes('where')) {
      response = {
        content: "The **Examination Cell** is located on the **2nd Floor of the Administrative Block** at GSFC University.\n\n**📍 Location:** Admin Building, Room 205\n**🕐 Working Hours:** 10:00 AM - 5:00 PM (Mon-Fri)\n**📧 Email:** exam@gsfcuniversity.ac.in\n**📞 Contact:** +91-79-XXXX-XXXX\n\nThe examination cell handles:\n• Exam scheduling & hall tickets\n• Result processing\n• Re-evaluation requests\n• Supplementary exam registration",
        source: 'University Campus Information'
      };
    } else {
      response = {
        content: "That's an academic question! Let me look into the GSFC University course repository for you.\n\nBased on your Semester 5 curriculum:\n\nThis topic is covered in your course syllabus. I'd recommend reviewing your professor's lecture notes or uploaded reference documents for full details.\n\nWould you like me to generate a practice quiz or create a study schedule for this topic?",
        source: 'GSFC Academic Knowledge Base'
      };
    }

    setTimeout(() => {
      setIsTyping(false);
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'ai',
        content: response.content,
        source: response.source,
        time: timeStr
      }]);
    }, 1200 + Math.random() * 800);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      content: input.trim(),
      time: timeStr
    }]);

    simulateAIResponse(input.trim());
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  return (
    <div className="page-content" style={{ height: '100vh', display: 'flex', flexDirection: 'column', paddingBottom: 0 }}>
      <Header
        title="AI Chat"
        subtitle="Ask anything about your academics & university"
        onMenuClick={onMenuClick}
      />

      <div className="chat-container" style={{ flex: 1 }}>
        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.type}`}>
              <div className="chat-message-avatar">
                {msg.type === 'ai' ? '🎓' : 'OP'}
              </div>
              <div>
                <div className="chat-message-content">
                  {msg.content.split('\n').map((line, i) => (
                    <span key={i}>
                      {line.startsWith('**') && line.endsWith('**')
                        ? <strong>{line.replace(/\*\*/g, '')}</strong>
                        : line.startsWith('• ')
                        ? <span style={{ display: 'block', paddingLeft: '8px' }}>{line}</span>
                        : line
                      }
                      {i < msg.content.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
                {msg.source && (
                  <div className="chat-message-source">
                    📚 <strong>Source:</strong> {msg.source}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message ai">
              <div className="chat-message-avatar">🎓</div>
              <div className="typing-indicator">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="chat-suggestions">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="chat-suggestion"
                onClick={() => handleSuggestionClick(s.text)}
              >
                {s.icon} {s.text}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-area">
          <div className="chat-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask CampusAi anything about your academics..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="chat-input-actions">
              <button className="chat-input-btn">
                <Paperclip size={18} />
              </button>
              <button className="chat-input-btn">
                <Sparkles size={18} />
              </button>
            </div>
          </div>
          <button
            className="chat-send-btn"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
