import React from 'react';

const BankCard = () => {
  return (
    <div className="w-full max-w-4xl p-8 bg-white">
      <div className="flex items-center space-x-4">
        {/* 10% Element */}
        <div className="relative">
          <span className="text-8xl font-bold text-yellow-400">1</span>
          <div className="inline-flex relative">
            <span className="text-8xl font-bold text-yellow-400">0</span>
            <div className="absolute -right-8 top-4 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-black font-bold text-xl">%</span>
            </div>
          </div>
        </div>
        
        {/* Card */}
        <div className="relative w-96 h-56 bg-gradient-to-br from-lime-300 to-lime-500 rounded-2xl shadow-xl">
          {/* Chip */}
          <div className="absolute top-16 left-8 w-12 h-10 bg-gray-300 rounded-md"></div>
          
          {/* Bank Logo */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="font-bold text-black">F</span>
          </div>
          
          <span className="absolute bottom-4 left-8 text-sm text-white">BLACK</span>
        </div>
        
        {/* Category Icons */}
        <div className="flex space-x-2">
          <div className="flex flex-col items-center">
            <div className="stack">
              <div className="w-8 h-1 bg-gray-300 rounded-full mb-0.5"></div>
              <div className="w-8 h-1 bg-gray-300 rounded-full mb-0.5"></div>
              <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex mt-2 space-x-1">
              <div className="w-6 h-6 rounded-full bg-purple-600"></div>
              <div className="w-6 h-6 rounded-full bg-teal-400"></div>
              <div className="w-6 h-6 rounded-full bg-orange-400"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-pink-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
