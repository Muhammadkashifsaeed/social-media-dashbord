import React from 'react';
import { Heart, UserPlus, MessageCircle, Star } from 'lucide-react';

function NotificationCard({ notification }) {
  const getIcon = (type) => {
    switch (type) {
      case 'like': return <Heart className="w-5 h-5 text-red-500 fill-current" />;
      case 'follow': return <UserPlus className="w-5 h-5 text-primary" />;
      case 'comment': return <MessageCircle className="w-5 h-5 text-secondary" />;
      case 'message': return <MessageCircle className="w-5 h-5 text-green-500" />;
      default: return <Star className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'like': return 'bg-red-100 dark:bg-red-900/20';
      case 'follow': return 'bg-blue-100 dark:bg-blue-900/20';
      default: return 'bg-purple-100 dark:bg-purple-900/20';
    }
  };

  return (
    <div className="card p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${getBgColor(notification.type)}`}>
        {getIcon(notification.type)}
      </div>
      <div className="flex-1">
        <p className="text-sm dark:text-slate-200">
          <span className="font-bold dark:text-white">{notification.user}</span> {notification.content}
        </p>
        <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
      </div>
      {notification.type === 'follow' && (
        <button className="btn-primary py-1.5 px-4 text-xs">Follow Back</button>
      )}
    </div>
  );
}

export default NotificationCard;
