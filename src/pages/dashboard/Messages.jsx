import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Search, 
  Phone, 
  Video, 
  Info, 
  MoreVertical,
  Paperclip,
  Smile
} from 'lucide-react';
import { chatUsers, messages as initialMessages } from '../../data/dummyData';

function Messages() {
  const [selectedUser, setSelectedUser] = useState(chatUsers[0]);
  const [msgInput, setMsgInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    
    const newMsg = {
      id: messages.length + 1,
      senderId: "me",
      text: msgInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setMsgInput("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto h-[calc(100vh-140px)] flex gap-6"
    >
      {/* Users List */}
      <div className="w-80 card flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-100 dark:border-dark-border">
          <h2 className="text-xl font-bold dark:text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search chat..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary outline-none dark:text-white"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {chatUsers.map(user => (
            <div 
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedUser.id === user.id ? 'bg-primary/10 text-primary' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <div className="relative shrink-0">
                <img src={user.avatar} className="w-12 h-12 rounded-xl object-cover" alt="" />
                {user.online && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-dark-card rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className={`text-sm font-bold truncate ${selectedUser.id === user.id ? 'text-primary' : 'dark:text-white'}`}>{user.name}</h4>
                  <span className="text-[10px] text-slate-400">{user.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{user.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 card flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-100 dark:border-dark-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={selectedUser.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
            <div>
              <h4 className="font-bold dark:text-white leading-tight">{selectedUser.name}</h4>
              <p className="text-[10px] text-green-500 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Phone className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Video className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Info className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${msg.senderId === 'me' ? 'bg-primary text-white rounded-tr-none' : 'bg-slate-100 dark:bg-slate-800 dark:text-white rounded-tl-none'}`}>
                {msg.text}
                <p className={`text-[10px] mt-1 opacity-70 ${msg.senderId === 'me' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 dark:border-dark-border flex items-center gap-3">
          <button type="button" className="p-2 text-slate-400 hover:text-primary transition-colors"><Paperclip className="w-5 h-5" /></button>
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 px-4 pr-10 text-sm focus:ring-1 focus:ring-primary outline-none dark:text-white"
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"><Smile className="w-5 h-5" /></button>
          </div>
          <button type="submit" className="p-2.5 bg-primary text-white rounded-xl hover:opacity-90 transition-all">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Messages;
