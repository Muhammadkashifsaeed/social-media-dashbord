import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Layers, ArrowRight } from 'lucide-react';

function Signup() {
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
          <h1 className="text-3xl font-bold dark:text-white">Create Account</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Join our community today</p>
        </div>

        <div className="card p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                />
              </div>
            </div>

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
              <label className="text-sm font-semibold mb-2 block dark:text-slate-200">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>
              </p>
            </div>

            <Link to="/" className="btn-primary w-full flex items-center justify-center gap-2 py-3 mt-4">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account? 
              <Link to="/login" className="text-primary font-bold ml-1 hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
