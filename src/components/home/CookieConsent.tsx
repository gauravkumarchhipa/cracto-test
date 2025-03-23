'use client';

import { useState } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2">
      {/* Cookie Modal */}
      <div className="bg-white shadow-xl rounded-md p-4 w-80 text-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
        <p className="text-[#1d1c1d]">
          This website uses cookies to enhance user experience and to analyze performance and traffic on our website. 
          <a href="#" className="text-blue-600 underline ml-1">More Info</a>
        </p>
        <button
          className="mt-4 w-full bg-[#611f69] text-white text-sm font-semibold py-2 rounded hover:bg-[#4a154b]"
          onClick={() => setVisible(false)}
        >
          ACCEPT ALL COOKIES
        </button>
      </div>

      {/* Chat Teaser */}
      <div className="flex items-center bg-white shadow-md rounded-full px-3 py-2 w-max max-w-xs">
        <button className="text-xs text-gray-400 mr-2" onClick={() => setVisible(false)}>✕</button>
        <p className="text-sm text-[#1d1c1d]">Hey there 👋 Want to know something cool?</p>
        <div className="ml-3 w-8 h-8 bg-[#611f69] flex items-center justify-center rounded-full text-white">
          👋
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
