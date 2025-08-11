
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import TestimonialSlider from "@/components/testomonial";
import WhyChooseSection from "@/components/whyChoseUs";
import ServicesSection from "@/components/serviceSection";
import Globe from "@/components/global";
import ProjectShowcase from "@/components/projectShowcase";
import HeroSection from "@/components/heroSection";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <Globe/>
      <WhyChooseSection />
      <ProjectShowcase />
      <FAQSection />
      <TestimonialSlider />
      <ContactSection/>
      <Footer/>
    </div>
  );
}
