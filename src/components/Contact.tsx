import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Briefcase, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // ✅ Replaced brand icons

const Contact = () => {
  return (
    <section id="contact" className=" px-4 bg-card relative overflow-hidden">
      {/* ✅ ZALA Logo Background */}
      <img
        src="/logo.png"
        alt="ZALA Logo Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] opacity-40 pointer-events-none z-0"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium border-border bg-card animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground font-playfair mb-6">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  I'm interested in
                </label>
                <select
                  id="interest"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option>Demo Request</option>
                  <option>Franchise Opportunity</option>
                  <option>Press Inquiry</option>
                  <option>General Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full shadow-soft">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info Cards */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Email Card */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 font-inter">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground mb-2 text-sm">
                    General inquiries and support
                  </p>
                  <a
                    href="mailto:hello@zala.world"
                    className="text-accent hover:underline font-medium"
                  >
                    hello@zala.world
                  </a>
                </div>
              </div>
            </Card>

            {/* Careers Card */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 font-inter">
                    Careers
                  </h4>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Join our team and help shape the future of reading
                  </p>
                  <Button variant="link" className="text-accent p-0 h-auto">
                    View open positions →
                  </Button>
                </div>
              </div>
            </Card>

            {/* Visit Us Card */}
            <Card className="border-2 border-border hover:border-accent transition-colors">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    Edinburgh, Scotland, UK
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Socials Card */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <h4 className="font-bold text-foreground mb-4 font-inter">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
