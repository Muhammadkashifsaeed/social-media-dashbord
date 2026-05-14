import React from 'react';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm active:scale-95"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 animate-in fade-in zoom-in duration-300" />
      ) : (
        <Moon className="w-5 h-5 animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
