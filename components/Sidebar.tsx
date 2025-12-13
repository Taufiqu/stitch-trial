import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/' },
    { label: 'Patients', icon: 'groups', path: '/prediction' }, // Linking to prediction for demo flow
    { label: 'Analytics', icon: 'bar_chart', path: '/prediction' },
    { label: 'Risk Factor', icon: 'monitor_heart', path: '/prediction' },
  ];

  return (
    <aside className="w-20 lg:w-72 flex-shrink-0 flex flex-col justify-between border-r border-border-light bg-card-white p-4 transition-all duration-300 h-screen sticky top-0">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="size-10 rounded-full bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
            <span className="material-symbols-outlined text-white font-bold text-2xl">cardiology</span>
          </div>
          <div className="hidden lg:flex flex-col">
            <h1 className="text-primary text-lg font-bold leading-tight tracking-tight">CardioAnalytics</h1>
            <p className="text-text-muted text-xs">Medical Admin</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-full transition-colors group ${
                  isActive 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'hover:bg-accent-gray'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`material-symbols-outlined ${isActive ? 'text-primary' : 'text-text-muted group-hover:text-primary'}`}>
                    {item.icon}
                  </span>
                  <span className={`hidden lg:block font-medium text-sm ${isActive ? 'text-primary' : 'text-text-muted group-hover:text-primary'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <NavLink to="/about" className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-accent-gray group transition-colors">
            <span className="material-symbols-outlined text-text-muted group-hover:text-primary">settings</span>
            <span className="hidden lg:block text-text-muted font-medium text-sm group-hover:text-primary">Settings</span>
        </NavLink>
        
        <div className="hidden lg:flex items-center gap-3 px-4 py-4 mt-4 border-t border-border-light">
          <div 
            className="size-10 rounded-full bg-cover bg-center shadow-sm" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAixctrJGjlrRfa3G2sbFdlW1-IC0PFNesrpV2urjIPoRMSbi-NWNVSkPgAEt1EV4VamOcQOQEq6SabAUmEppsxQOJJmJLSFkePgWidNJaJUIYmdw0Npg8ZeCeRrHYxFF4XDN4mzjIeaS5rZPhBRr3QBHtFBbHlYjZXYTVm2tiUYjbtlxZIz8m9GVaS0OiiLn141FW0dUVXuw6lU-fukAZN9IlgoVKPPhkj7Ocklc3mCY8O6U5hPWxP9UIOpyZqm4I3f4hc7rSGaL95')" }}
          ></div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-text-main">Dr. Sarah Chen</p>
            <p className="text-xs text-text-muted">Cardiologist</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;