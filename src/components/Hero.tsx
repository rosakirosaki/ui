import React from 'react';

export function Hero() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Solutions For Artists and Creators
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto">
          Multi-Solutions and Tools For Creators And Brands.
        </p>
        
        {/* Animated mouse scroll indicator */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-white text-sm mt-2 animate-pulse">Scroll down</p>
        </div>
      </div>

    </main>
  );
}