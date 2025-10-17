import { Headphones, MonitorSmartphone, BookMarked } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: BookMarked,
      title: "VR Story Worlds",
      description:
        "Step inside your favorite books with fully immersive 3D environments that bring stories to life.",
    },
    {
      icon: Headphones,
      title: "Listen While You Explore",
      description:
        "Professional narration syncs perfectly with your VR experience for a multi-sensory journey.",
    },
    {
      icon: MonitorSmartphone,
      title: "Read Anywhere",
      description:
        "Access your library on VR headsets, mobile, or tablet. Your progress syncs seamlessly.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-card overflow-hidden">
      {/* 🔵 Background Logo Image */}
      <img
        src="/logo.png"
        alt="ZALA Logo Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] opacity-20 pointer-events-none z-0"
      />

      {/* 🔵 Foreground Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Quick Intro
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Experience Stories Like Never Before
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ZALA reimagines how stories are experienced. From timeless classics
            to modern fiction, mythology to memoirs. We transform books of all
            genres into immersive VR experiences. Step inside story worlds,
            listen to spatial audiobooks, and engage with literature like never
            before, all while enjoying the comfort of a book café or the
            convenience of your own device.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-inter">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
