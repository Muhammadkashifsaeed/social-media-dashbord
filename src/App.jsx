import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/dashboard/Home';
import Profile from './pages/dashboard/Profile';
import Messages from './pages/dashboard/Messages';
import Notifications from './pages/dashboard/Notifications';
import Explore from './pages/dashboard/Explore';
import Settings from './pages/dashboard/Settings';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';

// Components
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      {!isAuthPage && (
        <>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Navbar 
            toggleSidebar={toggleSidebar} 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            isSidebarOpen={isSidebarOpen}
          />
        </>
      )}
      
      <main className={`transition-all duration-300 ${!isAuthPage ? (isSidebarOpen ? 'pl-64 pt-20' : 'pl-20 pt-20') : ''}`}>
        <div className={!isAuthPage ? "p-6" : ""}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Dashboard Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/settings" element={<Settings />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Redirect to Home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
