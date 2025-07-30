import FeaturesCourses from "@/components/FeaturesCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurInstructors from "@/components/OurInstructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/60 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses />
      <WhyUs />
      <TestimonialCard />
      <UpcomingWebinar />
      <OurInstructors />
      <Footer />
    </main>
  );
}
