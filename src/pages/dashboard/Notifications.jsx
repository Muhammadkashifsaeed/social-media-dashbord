import React from 'react';
import { motion } from 'framer-motion';
import NotificationCard from '../../components/dashboard/NotificationCard';
import { notifications } from '../../data/dummyData';

function Notifications() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Notifications</h2>
        <button className="text-sm font-semibold text-primary hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <NotificationCard key={notif.id} notification={notif} />
        ))}
      </div>
    </motion.div>
  );
}

export default Notifications;
