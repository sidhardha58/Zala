import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Pricing from "@/components/home/Pricing";
import Library from "@/components/home/Library";
import Franchise from "@/components/home/Franchise";
import Events from "@/components/home/Events";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Experience />
      <Pricing />
      <Library />
      <Franchise />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
