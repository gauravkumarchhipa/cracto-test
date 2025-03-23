'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
  'fox.svg',
  'lonelyplanet.svg',
  'intuit.svg',
  'carvana.svg',
  'kiva.svg',
  'target.svg',
  'devacurl.svg',
];

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollLogos = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollLogos, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F4EDE4] py-8 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-16 animate-scroll whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={`/logos/${logo}`}
                alt={logo.replace('.svg', '')}
                width={100}
                height={40}
                className="h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
