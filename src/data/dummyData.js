export const currentUser = {
  id: 1,
  username: "johndoe",
  fullName: "John Doe",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
  bio: "Frontend Developer & UI/UX enthusiast. Love coding and design!",
  followers: "12.5k",
  following: "450",
  postsCount: "128"
};

export const stories = [
  { id: 1, username: "Alice", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice", watched: false },
  { id: 2, username: "Bob", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", watched: true },
  { id: 3, username: "Charlie", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie", watched: false },
  { id: 4, username: "David", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", watched: false },
  { id: 5, username: "Eve", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eve", watched: true },
  { id: 6, username: "Frank", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank", watched: false },
  { id: 7, username: "Grace", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace", watched: false },
];

export const posts = [
  {
    id: 1,
    user: {
      username: "sarah_design",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      fullName: "Sarah Jenkins"
    },
    timestamp: "2 hours ago",
    caption: "Just finished my new project! What do you guys think? 🎨✨",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    likes: 1240,
    comments: 85,
    liked: true,
    saved: false
  },
  {
    id: 2,
    user: {
      username: "mike_codes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      fullName: "Michael Chen"
    },
    timestamp: "5 hours ago",
    caption: "Coding late tonight. React + Tailwind is just 🔥 #webdev #coding",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    likes: 850,
    comments: 42,
    liked: false,
    saved: true
  },
  {
    id: 3,
    user: {
      username: "travel_world",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Travel",
      fullName: "Travel Explorer"
    },
    timestamp: "1 day ago",
    caption: "The views here are absolutely breathtaking! 🏔️✈️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    likes: 3200,
    comments: 156,
    liked: false,
    saved: false
  }
];

export const notifications = [
  { id: 1, type: "like", user: "Alice", content: "liked your post", time: "5m ago" },
  { id: 2, type: "follow", user: "Bob", content: "started following you", time: "1h ago" },
  { id: 3, type: "comment", user: "Charlie", content: "commented: 'Looks amazing!'", time: "3h ago" },
  { id: 4, type: "message", user: "David", content: "sent you a message", time: "5h ago" },
];

export const chatUsers = [
  { id: 1, name: "Alice Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice", lastMsg: "Hey, how are you?", time: "10:30 AM", online: true },
  { id: 2, name: "Bob Smith", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", lastMsg: "Check out this link", time: "Yesterday", online: false },
  { id: 3, name: "Charlie Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie", lastMsg: "See you tomorrow!", time: "Monday", online: true },
];

export const messages = [
  { id: 1, senderId: 1, text: "Hey! How's it going?", time: "10:00 AM" },
  { id: 2, senderId: "me", text: "I'm doing great, thanks! You?", time: "10:02 AM" },
  { id: 3, senderId: 1, text: "Working on a new project. It's quite challenging but fun!", time: "10:05 AM" },
  { id: 4, senderId: "me", text: "That sounds awesome! Can't wait to see it.", time: "10:07 AM" },
];
