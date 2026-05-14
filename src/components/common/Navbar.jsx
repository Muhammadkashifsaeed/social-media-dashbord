import React from 'react';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  ChevronDown
} from 'lucide-react';
import { currentUser } from '../../data/dummyData';
import ThemeToggle from './ThemeToggle';

function Navbar({ toggleSidebar, isDarkMode, toggleDarkMode, isSidebarOpen }) {
  return (
    <header className={`fixed top-0 right-0 h-20 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-slate-200 dark:border-dark-border z-40 transition-all duration-300 ${isSidebarOpen ? 'left-64' : 'left-20'}`}>
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left: Search */}
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary transition-all duration-200 outline-none dark:text-white"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          <button className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-dark-card"></span>
          </button>

          <button className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white dark:border-dark-card"></span>
          </button>

          <div className="h-10 w-[1px] bg-slate-200 dark:bg-dark-border mx-2"></div>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold dark:text-white">{currentUser.fullName}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">@{currentUser.username}</p>
            </div>
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.fullName} 
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-dark-card rounded-full"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary transition-all" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

