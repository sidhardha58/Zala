import { Card } from "@/components/ui/card";
import { Target, Lightbulb, BookOpenCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-card overflow-hidden">
      {/* 🔵 Background logo - full page faint logo */}
      <img
        src="/favicon.png" // Change to /abt.png if needed
        alt="Background logo"
        className="absolute inset-0 mx-auto top-1/2 -translate-y-1/2 w-[1100px] opacity-100 pointer-events-none z-0"
      />

      {/* 🔵 Content (individually boxed) */}
      <div className="relative z-10 container mx-auto max-w-5xl space-y-8">
        {/* Section Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            About ZALA
          </h2>
        </div>

        {/* 🔶 Mission + Vision Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 ">
          {/* 🔶 Mission Box */}
          <Card className="p-6 md:p-8 shadow-soft border-2 border-border hover:border-accent bg-white/90 backdrop-blur-md transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <Target className="w-12  h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-playfair mb-0">
                  Our Mission
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  To reimagine the way the world experiences books. We believe
                  that stories have the power to transform lives, and technology
                  should enhance, not replace that magic.
                </p>
              </div>
            </div>
          </Card>

          {/* 🔶 Vision Box */}
          <Card
            className="p-6 md:p-8 shadow-soft border-2 border-border hover:border-accent bg-white/90 backdrop-blur-md transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <Lightbulb className="w-12 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-playfair mb-0">
                  Our Vision
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  A future where storytelling blends immersive technology and
                  literature. Where readers don't just consume books, they live,
                  feel, and carry them in their hearts.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* 🔶 Why VR Box */}
        <Card
          className="p-6 md:p-8 shadow-soft border-2 border-border hover:border-accent bg-white/90 backdrop-blur-md transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-3xl font-bold text-foreground font-playfair mb-6">
            Why VR for Books?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 font-inter">
                Embodied Immersion
              </h4>
              <p className="text-sm text-muted-foreground font-inter">
                Feel like you're actually inside the story, engaging all your
                senses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 font-inter">
                Improved Retention
              </h4>
              <p className="text-sm text-muted-foreground font-inter">
                Studies show VR experiences create stronger, longer-lasting
                memories.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 font-inter">
                Accessible Narration
              </h4>
              <p className="text-sm text-muted-foreground font-inter">
                Perfect for visual learners, busy readers, and accessibility
                needs.
              </p>
            </div>
          </div>
        </Card>

        {/* 🔶 Social Impact Box */}
        <Card
          className="p-6 md:p-8 shadow-soft border-2 border-border hover:border-accent bg-white/90 backdrop-blur-md transition-all duration-300 text-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
              <BookOpenCheck className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground font-playfair mb-2">
            Beyond Entertainment
          </h3>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            ZALA believes in the power of stories to heal, educate, and inspire.
            By making literature more engaging through VR, we hope to promote
            literacy, especially among young readers, while providing an escape
            that supports mental wellness through the therapeutic power of
            storytelling.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
