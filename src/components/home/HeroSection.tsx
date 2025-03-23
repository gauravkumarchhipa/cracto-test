import { GoogleIcon } from "../icons/googleicon";
import SlackMock from "./SlcackMick";

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
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-[#611f69] text-white px-6 py-3 rounded font-semibold hover:bg-[#4a154b]">
              TRY FOR FREE
            </button>
            <div className="px-2 py-1.5 bg-[#4285F4] hover:bg-[#357ae8] rounded-sm">
              <button className="flex items-center bg-[#4285F4] hover:bg-[#357ae8] text-white font-medium rounded-md overflow-hidden">
                <div className="bg-white p-2 pl-3 pr-3 flex items-center justify-center">
                  <GoogleIcon className="w-5 h-5" />
                </div>
                <span className="px-4 py-2 text-sm">SIGN UP WITH GOOGLE</span>
              </button>
            </div>
          </div>
        </div>
        <SlackMock />
      </div>
    </section>
  );
}
