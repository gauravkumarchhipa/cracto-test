import AlertBanner from "@/components/home/AlertBanner";
import CookieConsent from "@/components/home/CookieConsent";
import FutureSection from "@/components/home/FutureSection";
import Hero from "@/components/home/HeroSection";
import LogoSlider from "@/components/home/LogoSLider";

export default function Home() {
  return (
    <main>
      <div>
        <AlertBanner />
        <Hero />
        <LogoSlider />
        <FutureSection />
        <CookieConsent />
      </div>
    </main>
  );
}
