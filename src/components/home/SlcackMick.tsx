const SlackMock = () => {
    return (
      <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
        {/* Left Sidebar */}
        <div className="bg-black">Hello</div>
        <div className="flex">
          <div className="w-1/3 bg-[#350D36] text-white p-4">
            <h3 className="text-sm font-semibold mb-2">Channels</h3>
            <div className="bg-[#1264A3] px-2 py-1 rounded text-sm font-medium text-white">
              # project-unicorn
            </div>
          </div>

          {/* Right Content */}
          <div className="w-2/3 bg-white p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold text-[#1d1c1d]">
                # project-unicorn
              </h3>
              <div className="flex -space-x-2">
                {["🧑", "👩‍💻", "🧔", "👩‍🔬"].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full bg-gray-200 text-sm flex items-center justify-center border border-white"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 font-bold text-sm text-[#1d1c1d]">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center text-black text-xs">
                    👩
                  </div>
                  Zoe Maxwell
                </div>
                <p className="text-sm text-gray-700 ml-8">
                  Are we ready for launch?
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 font-bold text-sm text-[#1d1c1d]">
                  <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-black text-xs">
                    🧔
                  </div>
                  Matt Brewer
                </div>
                <p className="text-sm text-gray-700 ml-8">
                  Here&apos;s the run of show:
                </p>
                <div className="ml-8 mt-2 bg-gray-100 px-4 py-2 rounded-lg inline-block text-sm text-gray-500">
                  🔒 Access details hidden
                  <span className="ml-2 bg-white px-2 py-1 rounded-full shadow text-xs">
                    ⋯ 5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Emoji badges */}
          <span className="absolute top-[-10px] right-14 bg-white rounded-full px-3 py-1 text-sm shadow">
            👍 3
          </span>
          <span className="absolute bottom-16 left-[-10px] bg-white rounded-full px-3 py-1 text-sm shadow">
            🎉 5
          </span>
          <span className="absolute top-1/3 right-[-10px] bg-white rounded-full px-3 py-1 text-sm shadow z-10">
            💡 8
          </span>
        </div>
      </div>
    );
  };
  
  export default SlackMock;
  