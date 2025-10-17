import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vr-cafe.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="demo"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Person in VR headset reading in a cozy café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-playfair text-balance">
            Where Books Come Alive
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-inter">
            VR storytelling + audiobook narration + immersive reading
            environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              size="lg"
              variant="secondary"
              className="bg-yellow-600/80 text-black border border-yellow-600 hover:bg-yellow-700 hover:text-white transition-smooth"
              onClick={() => scrollToSection("experience")}
            >
              Try Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
              onClick={() => scrollToSection("pricing")}
            >
              View Plans
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:text-white hover:bg-primary-foreground/10 transition-smooth"
              onClick={() => scrollToSection("franchise")}
            >
              Franchise With Us
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 font-inter">
            Available on major VR headsets, mobile & tablet.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float"></div>
      <div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-teal/20 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
