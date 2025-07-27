import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/60 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses />
      <WhyUs />
    </main>
  );
}
