import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#F4EDE4] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Slack is where the future works
          </h1>
          <p className="text-lg text-[#1d1c1d] mb-6">
            Transform the way you work with one place for everyone and everything you need to get stuff done.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-[#611f69] text-white px-6 py-3 rounded font-semibold hover:bg-[#4a154b]">
              TRY FOR FREE
            </button>
            <button className="flex items-center border border-gray-300 px-6 py-3 rounded bg-white hover:bg-gray-100">
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              <span className="text-sm font-medium text-[#1d1c1d]">SIGN UP WITH GOOGLE</span>
            </button>
          </div>
        </div>

        {/* Right Image (mocked) */}
        <div className="relative w-full max-w-xl">
          <Image
            src="/slack-ui-mock.png"
            alt="Slack UI"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {/* Emoji badges */}
          <span className="absolute top-[-10px] right-14 bg-white rounded-full px-3 py-1 text-sm shadow">👍 3</span>
          <span className="absolute bottom-16 left-[-10px] bg-white rounded-full px-3 py-1 text-sm shadow">🎉 5</span>
          <span className="absolute top-1/3 right-[-10px] bg-white rounded-full px-3 py-1 text-sm shadow">💡 8</span>
        </div>
      </div>
    </section>
  );
}
