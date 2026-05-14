import React from 'react';
import { motion } from 'framer-motion';
import { 
  Edit3, 
  MapPin, 
  Link as LinkIcon, 
  Calendar,
  Grid,
  Bookmark,
  Users,
  Heart,
  MessageCircle
} from 'lucide-react';
import { currentUser, posts } from '../../data/dummyData';

function Profile() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto pb-10"
    >
      {/* Header Card */}
      <div className="card overflow-hidden mb-6">
        {/* Cover */}
        <div className="h-48 sm:h-64 relative">
          <img src={currentUser.cover} className="w-full h-full object-cover" alt="Cover" />
          <button className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-xl transition-all">
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-12 sm:-mt-16 mb-4">
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-4 border-white dark:border-dark-card shadow-xl"
                alt="Profile"
              />
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white dark:border-dark-card rounded-full"></div>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold dark:text-white">{currentUser.fullName}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">@{currentUser.username}</p>
            <p className="text-slate-700 dark:text-slate-300 max-w-lg leading-relaxed mb-6">
              {currentUser.bio}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                New York, USA
              </div>
              <div className="flex items-center gap-1.5">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-primary hover:underline">johndoe.dev</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Joined March 2024
              </div>
            </div>

            <div className="flex gap-8 mt-6 pt-6 border-t border-slate-100 dark:border-dark-border">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg dark:text-white">{currentUser.postsCount}</span>
                <span className="text-slate-500 text-sm">Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg dark:text-white">{currentUser.followers}</span>
                <span className="text-slate-500 text-sm">Followers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg dark:text-white">{currentUser.following}</span>
                <span className="text-slate-500 text-sm">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-slate-200 dark:border-dark-border mb-6">
        <button className="pb-4 px-2 font-semibold text-primary border-b-2 border-primary flex items-center gap-2">
          <Grid className="w-4 h-4" />
          Posts
        </button>
        <button className="pb-4 px-2 font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex items-center gap-2">
          <Bookmark className="w-4 h-4" />
          Saved
        </button>
        <button className="pb-4 px-2 font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex items-center gap-2">
          <Users className="w-4 h-4" />
          Tagged
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative">
            <img 
              src={post.image} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              alt="" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
              <div className="flex items-center gap-1.5">
                <Heart className="w-5 h-5 fill-current" />
                {post.likes}
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-5 h-5 fill-current" />
                {post.comments}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Profile;
