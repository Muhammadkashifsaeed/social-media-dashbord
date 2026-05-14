import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  MessageSquare, 
  Bell, 
  Search, 
  Settings, 
  LogOut,
  Menu,
  X,
  Layers
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function Sidebar({ isOpen, toggleSidebar }) {
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Explore', icon: Search, path: '/explore' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside 
      className={twMerge(
        "fixed left-0 top-0 h-full bg-white dark:bg-dark-card border-r border-slate-200 dark:border-dark-border transition-all duration-300 z-50",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Layers className="text-white w-6 h-6" />
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold font-['Outfit'] gradient-text"
            >
              NexSocial
            </motion.span>
          )}
        </div>
      </div>

      {/* Nav Links */}
      <nav className="mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              twMerge(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary" 
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )
            }
          >
            <item.icon className="w-6 h-6 shrink-0" />
            {isOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium"
              >
                {item.name}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 w-full px-4">
        <button className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-500 transition-all duration-200 group">
          <LogOut className="w-6 h-6 shrink-0" />
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-medium"
            >
              Logout
            </motion.span>
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
