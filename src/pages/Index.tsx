import Hero from "@/components/Hero";
import BranchesSection from "@/components/BranchesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BranchesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
