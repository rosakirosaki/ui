import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-4">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/39888c2f-22d0-4a95-85ae-dfa6dc1aae7b.png" 
            alt="MusicLib Logo" 
            className="h-12 w-12 rounded-lg"
          />
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm text-black hover:text-black transition-colors">Home</a>
          <a href="#case-studies" className="text-sm text-black hover:text-black transition-colors">Creators</a>
          <a href="#partnership" className="text-sm text-black hover:text-black transition-colors">Benefits</a>
        </nav>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}