'use client';

import { useState } from 'react';
import { CloseIcon } from "../icons/closeicon";

const AlertBanner = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={`flex items-center justify-between bg-[#1264A3] text-white px-6 py-3 rounded-full max-w-7xl mx-auto mt-4 ${
        !visible && "invisible"
      }`}
    >
      <p className="text-sm md:text-base">
        <span className="font-medium">Slack is your digital HQ.</span> Meet the
        new features keeping teams connected in a work-from-anywhere world.{" "}
        <a
          href="/login"
          className="underline font-semibold hover:text-[#cce7ff]"
        >
          Let’s go →
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="text-white text-lg ml-4 hover:text-gray-200"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default AlertBanner;
