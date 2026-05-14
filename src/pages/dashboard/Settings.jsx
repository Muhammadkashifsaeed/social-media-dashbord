import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lock, 
  Bell, 
  Eye, 
  Smartphone, 
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Palette
} from 'lucide-react';

function Settings() {
  const sections = [
    {
      title: "Account",
      items: [
        { name: "Personal Information", icon: User, desc: "Name, email, phone number" },
        { name: "Password & Security", icon: Lock, desc: "Change password, 2FA" },
        { name: "Privacy & Visibility", icon: Eye, desc: "Control who sees your posts" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { name: "Notifications", icon: Bell, desc: "Push, email, and SMS" },
        { name: "Appearance", icon: Palette, desc: "Themes, font size" },
        { name: "Data & Storage", icon: Smartphone, desc: "Manage cache and usage" },
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", icon: HelpCircle, desc: "FAQs and troubleshooting" },
        { name: "Security Checkup", icon: ShieldCheck, desc: "Review your account security" },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold dark:text-white mb-8">Settings</h2>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">{section.title}</h3>
            <div className="card divide-y divide-slate-100 dark:divide-dark-border">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-white">{item.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-all group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 card border-red-100 dark:border-red-900/20 bg-red-50/50 dark:bg-red-900/5">
        <h4 className="font-bold text-red-600 mb-2">Danger Zone</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="text-sm font-bold text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 px-4 py-2 rounded-xl transition-all border border-red-200 dark:border-red-900/30">
          Delete Account
        </button>
      </div>
    </motion.div>
  );
}

export default Settings;
