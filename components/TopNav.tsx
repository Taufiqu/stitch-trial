import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-border-light bg-card-white sticky top-0 z-50">
      <NavLink to="/" className="flex items-center gap-3 group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">cardiology</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-text-main">Cardio<span className="text-primary">Predict</span></span>
      </NavLink>
      
      <div className="hidden md:flex items-center p-1.5 bg-accent-gray rounded-full border border-border-light">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isActive ? 'bg-white shadow-sm text-primary border border-border-light' : 'text-text-muted hover:text-primary'}`
          }
        >
          Analytics
        </NavLink>
        <NavLink 
          to="/prediction" 
          className={({ isActive }) => 
            `px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isActive ? 'bg-white shadow-sm text-primary border border-border-light' : 'text-text-muted hover:text-primary'}`
          }
        >
          Prediction
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isActive ? 'bg-white shadow-sm text-primary border border-border-light' : 'text-text-muted hover:text-primary'}`
          }
        >
          About
        </NavLink>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-text-muted hover:bg-accent-gray transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/30 flex items-center justify-center font-bold">
             DS
          </button>
        </div>
        <button className="md:hidden p-2 text-text-muted">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;