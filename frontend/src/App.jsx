import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Subjects from './pages/Subjects';
import Timetable from './pages/Timetable';
import Assignments from './pages/Assignments';
import Notes from './pages/Notes';
import Quiz from './pages/Quiz';
import StudyPlanner from './pages/StudyPlanner';
import Login from './pages/Login';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Om Panchal', email: 'om.panchal@gsfc.edu.in' });
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <Login onLogin={(u) => setUser(u)} />;
  }

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-primary)', width: '100%' }}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} user={user} />
      <main className="main-content" style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/planner" element={<StudyPlanner />} />
          {/* Fallback route */}
          <Route path="*" element={<Dashboard user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
