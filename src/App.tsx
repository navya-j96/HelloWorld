import React from 'react';
import { Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <div className="max-w-3xl w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
        <div className="flex items-center justify-center mb-8">
          <Globe className="h-12 w-12 mr-4 text-white animate-pulse" />
          <h1 className="text-5xl font-bold tracking-tight">Hello World</h1>
        </div>
        
        <p className="text-xl text-center mb-8">
          Welcome to this beautifully designed React application
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "React",
              description: "A JavaScript library for building user interfaces"
            },
            {
              title: "Tailwind CSS",
              description: "A utility-first CSS framework for rapid UI development"
            },
            {
              title: "Vite",
              description: "Next generation frontend tooling with lightning-fast HMR"
            }
          ].map((item, index) => (
            <div key={index} className="p-5 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="relative h-64 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
            alt="Coding workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
              <p className="text-white/80">Edit src/App.tsx and save to reload</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-sm text-white/70">
        Created with React, Tailwind CSS, and Vite
      </footer>
    </div>
  );
}

export default App;
