import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/60 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses />
    </main>
  );
}
