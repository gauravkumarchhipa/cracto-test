'use client';

import { useEffect, useRef } from 'react';

const logos = [
  { name: "fox", color: "#270860" },
  { name: "lonelyplanet", color: "#5b19d7" },
  { name: "intuit", color: "#8e67d6" },
  { name: "carvana", color: "#d0942d" },
  { name: "kiva", color: "#ae0d0d" },
  { name: "target", color: "#f80b0b" },
  { name: "devacurl", color: "#99c213" },
  { name: "fox", color: "#270860" },
  { name: "lonelyplanet", color: "#5b19d7" },
  { name: "intuit", color: "#8e67d6" },
  { name: "carvana", color: "#d0942d" },
  { name: "kiva", color: "#ae0d0d" },
  { name: "target", color: "#f80b0b" },
  { name: "devacurl", color: "#99c213" },
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
    <div className="bg-[#F4EDE4] py-8 overflow-hidden ">
      <div className="w-full overflow-hidden max-w-7xl mx-auto flex">
        <div
          ref={sliderRef}
          className="flex gap-16 animate-scroll whitespace-nowrap"
        >
          {logos?.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className={`text-[${logo?.color}] text-3xl`}>
                {logo?.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
