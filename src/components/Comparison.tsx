import React from 'react';
import { X, Check } from 'lucide-react';

export function Comparison() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Why choose <span className="italic text-black">us</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Music Libraries */}
          <div className="bg-gray-100 rounded-3xl p-8 border border-gray-300">
            <h3 className="text-2xl font-bold text-gray-600 mb-8 text-center">
              Other Music Libraries
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600 text-lg">Low quality music</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600 text-lg">Low Music Revenue</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600 text-lg">Outdated approach to composition</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600 text-lg">Expensive licensing agreements</span>
              </div>
            </div>
          </div>
          
          {/* Novial Music */}
          <div className="bg-gray-100 rounded-3xl p-8 border border-gray-400">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/39888c2f-22d0-4a95-85ae-dfa6dc1aae7b.png" 
                  alt="MediaTiger Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-black">
                  MediaTiger
                </h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-black text-lg">Professionally crafted tracks</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-black text-lg">Higher Music Revenue</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-black text-lg">Incorporation of modern composition</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-black text-lg">Free for Shorts and competitive licensing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}