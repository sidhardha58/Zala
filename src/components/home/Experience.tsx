import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Mic, Calendar, Laptop, Clock } from "lucide-react";
import book from "@/assets/book.png";
import god1 from "@/assets/god1.jpg";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Experience ZALA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore features designed to make every story unforgettable
          </p>
        </div>

        {/* Featured Experience */}
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Card className="overflow-hidden shadow-medium border-border">
            <div className="grid md:grid-cols-2 items-stretch gap-6">
              <div className="relative h-full">
                <img
                  src={book}
                  alt="Demo Forest VR scene"
                  className="w-full  max-h-[420px] object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="p-6 md:p-8 bg-card flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground font-playfair mb-4">
                  Whisper's Between Pages
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  Step into the ZALA Café and discover a mysterious book that
                  pulls you through worlds both real and imagined. From a
                  forgotten attic to a silent forest, from old wooden bench to
                  quiet café mornings — live a poetic journey where memory and
                  reality blur together.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    Literary Fiction
                  </span>
                  <span className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full">
                    Immersive
                  </span>
                  <span className="px-3 py-1 bg-secondary/70 text-secondary-foreground text-sm rounded-full">
                    ~5 min
                  </span>
                </div>

                {/* Button */}
                <Button variant="default" className="shadow-soft">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Featured Experience */}
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Card className="overflow-hidden shadow-medium border-border">
            <div className="grid md:grid-cols-2 items-stretch gap-6">
              <div className="relative h-full">
                <img
                  src={god1}
                  alt="Demo Forest VR scene"
                  className="w-full  max-h-[420px] object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="p-6 md:p-8 bg-card flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground font-playfair mb-4">
                  Birth of the Gods
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  Descend into the dawn of existence and witness the first myths
                  of creation. From the boundless void of Chaos to the rise of
                  Gaia and Uranus, experience the birth of Titans in an
                  awe-inspiring VR journey where myth and cosmos collide.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    Greek Mythology
                  </span>
                  <span className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full">
                    Immersive
                  </span>
                  <span className="px-3 py-1 bg-secondary/70 text-secondary-foreground text-sm rounded-full">
                    ~15 min
                  </span>
                </div>

                {/* Button */}
                <Button variant="default" className="shadow-soft">
                  <Clock className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className="p-6 shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in bg-card"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 font-inter">
              VR Environments
            </h4>
            <p className="text-sm text-muted-foreground font-inter">
              Explore interactive 3D worlds built for classic and contemporary
              books.
            </p>
          </Card>

          <Card
            className="p-6 shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in bg-card"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 font-inter">
              Audio Narration
            </h4>
            <p className="text-sm text-muted-foreground font-inter">
              Professional voice actors bring characters to life with emotion
              and depth.
            </p>
          </Card>

          <Card
            className="p-6 shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in bg-card"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 font-inter">
              Multi-Platform
            </h4>
            <p className="text-sm text-muted-foreground font-inter">
              Access on Meta Quest, Pico, mobile devices, and tablets.
            </p>
          </Card>

          <Card
            className="p-6 shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl animate-scale-in bg-card"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 font-inter">
              Live Events
            </h4>
            <p className="text-sm text-muted-foreground font-inter">
              Join author sessions, book club discussions, and exclusive
              launches.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
