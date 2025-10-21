import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Briefcase, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import API from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "General Support",
    message: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/user/profile");
        const { username, email } = res.data.profile;
        setUser({ username, email });
        setForm((prev) => ({
          ...prev,
          name: username,
          email: email,
        }));
      } catch (error) {
        // User not logged in — leave blank
      }
    };
    fetchUser();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.post("/feedback", form);
      toast({ title: "Message sent successfully!" });
      setForm((prev) => ({
        ...prev,
        interest: "General Support",
        message: "",
      }));
    } catch (error) {
      toast({ title: "Failed to send message", variant: "destructive" });
    }
  };

  return (
    <section
      id="contact"
      className="px-4 bg-card relative overflow-hidden mb-2"
    >
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  readOnly={!!user}
                  placeholder="Your name"
                  className={`bg-background border-border ${
                    user ? "text-muted-foreground cursor-not-allowed" : ""
                  }`}
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
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  readOnly={!!user}
                  placeholder="your@email.com"
                  className={`bg-background border-border ${
                    user ? "text-muted-foreground cursor-not-allowed" : ""
                  }`}
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
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer transition-colors"
                >
                  <option disabled value="">
                    -- Please select an option --
                  </option>
                  <option>Demo Request</option>
                  <option>Franchise / Licensing Opportunity</option>
                  <option>Press & Media</option>
                  <option>Technical Support</option>
                  <option>Partnership Inquiry</option>
                  <option>General Feedback & Suggestions</option>
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
                  value={form.message}
                  onChange={handleChange}
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
                    bookscomealive.zala@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Team Invitation Card */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 font-inter">
                    Join Our Team
                  </h4>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Are you a storyteller, developer, or creative who shares our
                    vision? Let’s build the future together.
                  </p>
                  <a
                    href="/team"
                    className="text-accent hover:underline font-medium text-sm"
                  >
                    Meet our Team →
                  </a>
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
                  href="https://www.linkedin.com/in/zala-where-books-comes-alive-089a24389/"
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
