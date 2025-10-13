import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary font-playfair mb-4">ZALA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Where Books Come Alive. Reimagining the way the world experiences stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 font-inter">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("franchise")}
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  Franchise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  Events
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4 font-inter">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4 font-inter">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get new immersive worlds & events monthly
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-border text-sm"
              />
              <Button size="sm" className="flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ZALA. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <button className="text-muted-foreground hover:text-accent transition-smooth">
              EN
            </button>
            <span className="text-border">|</span>
            <a
              href="mailto:hello@zala.world"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              hello@zala.world
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
