import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Layers, ArrowRight } from 'lucide-react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-dark-bg">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl shadow-primary/30 mb-6">
            <Layers className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold dark:text-white">Welcome Back</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Sign in to continue to NexSocial</p>
        </div>

        <div className="card p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold dark:text-slate-200">Password</label>
                <Link to="/forgot-password" className="text-xs text-primary font-bold hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                />
              </div>
            </div>

            <Link to="/" className="btn-primary w-full flex items-center justify-center gap-2 py-3">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Don't have an account? 
              <Link to="/signup" className="text-primary font-bold ml-1 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
