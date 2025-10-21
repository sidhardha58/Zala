import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "./UserButton";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Used for navigating to "/" and scrolling on load
  const scrollToOrNavigate = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ZALA Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-primary font-playfair"
            >
              ZALA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "about",
              "experience",
              "pricing",
              "library",
              "franchise",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToOrNavigate(section)}
                className="text-sm font-medium text-foreground hover:text-accent transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <UserButton />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {[
                "about",
                "experience",
                "pricing",
                "library",
                "franchise",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToOrNavigate(section)}
                  className="text-sm font-medium text-foreground hover:text-accent transition text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate("/user/profile")}
              >
                View Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
