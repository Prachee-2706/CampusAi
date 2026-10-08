import { Search, Bell, Menu } from 'lucide-react';

export default function Header({ onMenuClick, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <button
          className="header-icon-btn mobile-menu-btn"
          onClick={onMenuClick}
          style={{ display: 'none' }}
        >
          <Menu size={20} />
        </button>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="page-header-right">
        <div className="search-box">
          <Search size={16} className="search-box-icon" />
          <input type="text" placeholder="Search courses, topics..." />
        </div>
        <button className="header-icon-btn">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>
        <div className="header-avatar">OP</div>
      </div>
    </div>
  );
}
