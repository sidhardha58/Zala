import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-playfair">ZALA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("library")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Library
            </button>
            <button
              onClick={() => scrollToSection("franchise")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Franchise
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
            >
              Contact
            </button>
            <Button variant="default" size="sm" onClick={() => scrollToSection("demo")}>
              Try Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("library")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                Library
              </button>
              <button
                onClick={() => scrollToSection("franchise")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                Franchise
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth text-left"
              >
                Contact
              </button>
              <Button variant="default" size="sm" onClick={() => scrollToSection("demo")}>
                Try Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
