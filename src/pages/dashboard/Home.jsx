import React from 'react';
import { motion } from 'framer-motion';
import PostCard from '../../components/dashboard/PostCard';
import StoryCard from '../../components/dashboard/StoryCard';
import { stories, posts, currentUser } from '../../data/dummyData';
import { TrendingUp, Users, Calendar } from 'lucide-react';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Middle Content: Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stories Section */}
          <div className="card p-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-5">
              <StoryCard isAdd={true} />
              {stories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar: Suggestions & Trends */}
        <div className="hidden lg:block space-y-6">
          {/* Profile Quick View */}
          <div className="card p-6 text-center">
            <div className="relative inline-block mb-4">
              <img 
                src={currentUser.avatar} 
                className="w-20 h-20 rounded-2xl mx-auto border-4 border-white dark:border-dark-card shadow-lg"
                alt="Profile"
              />
            </div>
            <h3 className="text-lg font-bold dark:text-white">{currentUser.fullName}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">@{currentUser.username}</p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-dark-border pt-6">
              <div>
                <p className="text-sm font-bold dark:text-white">{currentUser.postsCount}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Posts</p>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">{currentUser.followers}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Followers</p>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">{currentUser.following}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Following</p>
              </div>
            </div>
          </div>

          {/* Trending Section */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2 dark:text-white">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trends for you
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { tag: "#ReactJS", posts: "125k posts" },
                { tag: "#TailwindCSS", posts: "85k posts" },
                { tag: "#Frontend", posts: "42k posts" },
                { tag: "#DesignInspiration", posts: "24k posts" },
              ].map((trend, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-sm font-bold dark:text-white group-hover:text-primary transition-colors">{trend.tag}</p>
                  <p className="text-xs text-slate-500">{trend.posts}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="card p-6">
             <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2 dark:text-white">
                <Users className="w-5 h-5 text-secondary" />
                Who to follow
              </h3>
            </div>
            <div className="space-y-4">
              {stories.slice(0, 3).map(user => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} className="w-8 h-8 rounded-lg" alt="" />
                    <p className="text-sm font-semibold dark:text-white">{user.username}</p>
                  </div>
                  <button className="text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
