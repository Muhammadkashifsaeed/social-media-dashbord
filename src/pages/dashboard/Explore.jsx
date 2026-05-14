import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Music, Camera, Clapperboard, Hash, Heart, MessageCircle, Star } from 'lucide-react';
import { posts } from '../../data/dummyData';

function Explore() {
  const categories = [
    { name: 'For You', icon: Star, active: true },
    { name: 'Trending', icon: TrendingUp },
    { name: 'Music', icon: Music },
    { name: 'Photography', icon: Camera },
    { name: 'Videos', icon: Clapperboard },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto pb-10"
    >
      {/* Search Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Explore</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shrink-0 ${
                cat.active 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-white dark:bg-dark-card text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Featured Big Card */}
        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
            <span className="bg-primary/20 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">Trending Now</span>
            <h3 className="text-white text-2xl font-bold mb-2">Modern Abstract UI Patterns</h3>
            <p className="text-white/70 text-sm">Discover the latest trends in digital design and architecture.</p>
          </div>
        </div>

        {/* Regular Cards */}
        {[...posts, ...posts].map((post, i) => (
          <div key={i} className="aspect-square rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
               <div className="flex items-center gap-1 font-bold text-sm">
                 <Heart className="w-4 h-4 fill-current" />
                 {post.likes}
               </div>
               <div className="flex items-center gap-1 font-bold text-sm">
                 <MessageCircle className="w-4 h-4 fill-current" />
                 {post.comments}
               </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}



export default Explore;
