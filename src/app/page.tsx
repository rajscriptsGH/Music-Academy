import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/60 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses />
      <WhyUs />
      <TestimonialCard />
    </main>
  );
}
