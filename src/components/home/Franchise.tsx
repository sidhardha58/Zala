import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Award, FileText, HeadphonesIcon } from "lucide-react";

const Franchise = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Turnkey Setup",
      description: "Complete VR hardware, content library, and branded space design included.",
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training program and ongoing operational support.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Resources",
      description: "Proven marketing materials, campaigns, and social media assets.",
    },
    {
      icon: Award,
      title: "Exclusive Territory",
      description: "Protected territory rights in your local market.",
    },
  ];

  return (
    <section id="franchise" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Franchise With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in bringing immersive reading experiences to communities worldwide. Be part of the literary revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Investment Details */}
          <Card className="p-8 shadow-medium border-border bg-card animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground font-playfair mb-6">
              Investment Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-foreground font-semibold">Franchise Fee:</span>
                <span className="text-accent font-bold">£10K–£13K</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-foreground font-semibold">Royalty:</span>
                <span className="text-accent font-bold">5–8%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-foreground font-semibold">Target Locations:</span>
                <span className="text-accent font-bold">10 by Year 2</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="text-foreground font-semibold">ROI Timeline:</span>
                <span className="text-muted-foreground">12-18 months</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              *Estimated figures. Actual returns may vary based on location and management.
            </p>
          </Card>

          {/* What's Included */}
          <Card className="p-8 shadow-medium border-border bg-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold text-foreground font-playfair mb-6">
              What's Included
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HeadphonesIcon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">VR Equipment</h4>
                  <p className="text-sm text-muted-foreground">
                    Latest VR headsets and hardware for 4-8 stations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Content Library</h4>
                  <p className="text-sm text-muted-foreground">
                    Full access to all ZALA experiences and regular updates
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Space Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete interior design and branding package
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated franchise manager and 24/7 technical support
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 border-border bg-card animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2 font-inter">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground font-inter">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="shadow-glow">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              <FileText className="w-4 h-4 mr-2" />
              Download Franchise Deck
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Questions? Contact our franchise team at{" "}
            <a href="mailto:franchise@zala.world" className="text-accent hover:underline">
              franchise@zala.world
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
