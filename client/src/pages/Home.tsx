import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import CoursesSection from "@/components/CoursesSection";
import LearningAtmosphereSection from "@/components/LearningAtmosphereSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LocationMapSection from "@/components/LocationMapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/*
 * Design Philosophy: "Royal Academy" — Neo-Classical Thai Institution
 * Color: Deep Navy (#0D1B3E) + Champagne Gold (#D4AF37) + Ivory (#FFFFF0)
 * Typography: Noto Serif Thai (headings) + Noto Sans Thai (body)
 * Layout: Full-width cinematic sections with card-based grids
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <CoursesSection />
      <LearningAtmosphereSection />
      <InstructorSection />
      <TestimonialsSection />
      <FacilitiesSection />
      <LocationMapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
