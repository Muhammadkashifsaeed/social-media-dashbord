import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Layers, CheckCircle } from 'lucide-react';

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

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
          <h1 className="text-3xl font-bold dark:text-white">Reset Password</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">We'll send you a link to reset your password</p>
        </div>

        <div className="card p-8">
          {!submitted ? (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    required
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-3">
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-2">Check your email</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">We've sent a password reset link to your email address.</p>
              <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Didn't receive the email? Try again</button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border text-center">
            <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;
