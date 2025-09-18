import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
