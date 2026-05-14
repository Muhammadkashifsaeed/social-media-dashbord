import React from 'react';
import { Plus } from 'lucide-react';

function StoryCard({ story, isAdd = false }) {
  if (isAdd) {
    return (
      <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 group-hover:border-primary transition-colors">
            <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary" />
          </div>
        </div>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Add Story</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
      <div className={`p-[3px] rounded-2xl ${story.watched ? 'bg-slate-200 dark:bg-slate-700' : 'bg-gradient-to-tr from-primary to-secondary'}`}>
        <div className="bg-white dark:bg-dark-bg p-[2px] rounded-[14px]">
          <img 
            src={story.avatar} 
            alt={story.username} 
            className="w-[58px] h-[58px] rounded-xl object-cover group-hover:scale-110 transition-transform"
          />
        </div>
      </div>
      <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate w-16 text-center">
        {story.username}
      </span>
    </div>
  );
}

export default StoryCard;
