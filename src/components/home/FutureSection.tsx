import Image from 'next/image';

const FutureSection = () => {
  return (
    <section className="bg-[#F4EDE4] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/future-board.png"
            alt="Future Demo"
            width={600}
            height={400}
            className="rounded-md"
          />
          {/* Play button overlay */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00B8F0] w-12 h-12 rounded-md text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
            ▶
          </button>
          <span className="absolute bottom-4 right-4 bg-[#00B8F0] text-white text-sm px-2 py-1 rounded">
            FUTURE
          </span>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="text-[#1d1c1d] mb-6">
            We’ve seen what the future can be. Now it’s time to decide what it will be.
          </p>
          <button className="px-6 py-2 border border-[#611f69] text-[#611f69] rounded font-medium hover:bg-[#f1e4f4]">
            WATCH VIDEO
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
