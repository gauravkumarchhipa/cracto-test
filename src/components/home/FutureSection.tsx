const FutureSection = () => {
  return (
    <section className="bg-[#F4EDE4] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2">
          <div className="aspect-video w-full rounded-md overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video link
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="text-[#1d1c1d] mb-6">
            We’ve seen what the future can be. Now it’s time to decide what it
            will be.
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
