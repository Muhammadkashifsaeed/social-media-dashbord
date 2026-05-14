import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal 
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(post.liked);
  const [isSaved, setIsSaved] = useState(post.saved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-6"
    >
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={post.user.avatar} 
            alt={post.user.username} 
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm dark:text-white hover:text-primary cursor-pointer transition-colors">
              {post.user.fullName}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{post.timestamp}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {post.caption}
        </p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt="Post" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike}
              className={twMerge(
                "flex items-center gap-1.5 text-sm transition-all group",
                isLiked ? "text-red-500" : "text-slate-500 dark:text-slate-400 hover:text-red-500"
              )}
            >
              <Heart className={twMerge("w-6 h-6", isLiked && "fill-current")} />
              <span className="font-medium">{likesCount}</span>
            </button>

            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">{post.comments}</span>
            </button>

            <button className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-secondary transition-all">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={twMerge(
              "text-sm transition-all",
              isSaved ? "text-primary" : "text-slate-500 dark:text-slate-400 hover:text-primary"
            )}
          >
            <Bookmark className={twMerge("w-6 h-6", isSaved && "fill-current")} />
          </button>
        </div>

        {/* Comment Input */}
        <div className="flex items-center gap-3">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
            className="w-8 h-8 rounded-lg"
            alt="Current User"
          />
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Add a comment..." 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 px-4 text-sm focus:ring-1 focus:ring-primary outline-none dark:text-white"
            />
            {commentText && (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary font-semibold text-sm">
                Post
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PostCard;
