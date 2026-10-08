import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Calendar,
  FileText,
  Brain,
  ClipboardList,
  Upload,
  Settings,
  Bell,
  Users,
  GraduationCap,
  LogOut
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'AI Chat', icon: MessageSquare, path: '/chat', badge: null },
  { label: 'My Subjects', icon: BookOpen, path: '/subjects' },
  { label: 'Timetable', icon: Calendar, path: '/timetable' },
  { label: 'Assignments', icon: ClipboardList, path: '/assignments' },
  { label: 'Ask My Notes', icon: Upload, path: '/notes' },
  { label: 'Quiz', icon: Brain, path: '/quiz' },
  { label: 'Study Planner', icon: FileText, path: '/planner' },
];

const secondaryItems = [
  { label: 'Notifications', icon: Bell, path: '/notifications', badge: 3 },
  { label: 'Community', icon: Users, path: '/community' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ isOpen, onClose, user }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 99,
            display: 'none',
          }}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <GraduationCap size={22} strokeWidth={2.5} />
          </div>
          <div className="sidebar-logo-text">
            Campus<span>Ai</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <div className="sidebar-section-title">Main Menu</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
              onClick={onClose}
            >
              <span className="sidebar-link-icon">
                <item.icon size={20} />
              </span>
              {item.label}
              {item.badge && <span className="badge">{item.badge}</span>}
            </NavLink>
          ))}

          <div className="sidebar-section-title" style={{ marginTop: '8px' }}>Others</div>
          {secondaryItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              <span className="sidebar-link-icon">
                <item.icon size={20} />
              </span>
              {item.label}
              {item.badge && <span className="badge">{item.badge}</span>}
            </NavLink>
          ))}
        </nav>

        {/* User Profile & Logout */}
        <div className="sidebar-footer">
          <div className="sidebar-user" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="sidebar-avatar">
                {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'OP'}
              </div>
              <div className="sidebar-user-info">
                <div className="sidebar-user-name">{user?.name || 'Om Panchal'}</div>
                <div className="sidebar-user-role">CSE • Semester 5</div>
              </div>
            </div>
            <button
              onClick={() => navigate('/login')}
              title="Sign Out"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
