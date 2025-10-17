import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const cafePlans = [
    {
      name: "Hourly Access",
      price: "£1.99",
      period: "per hour",
      features: [
        "VR environment access",
        "Access basic immersive story",
        "Noise cancellation headphones",
        "Free guest Wi-Fi",
        "Device charging station access (shared)",
      ],
      highlight: false,
    },
    {
      name: "Weekly Plan",
      price: "£4.99",
      period: "per week",
      features: [
        "1 hour/day of VR access",
        "Full immersive library",
        "10% discount (on café purchases)",
        "Wi-Fi with priority speed (ideal for studying or syncing content)",
        "Charging ports at every table",
      ],
      highlight: true,
    },
    {
      name: "Monthly Plan",
      price: "£9.99",
      period: "per month",
      features: [
        "2 hours/day VR usage",
        "Unlimited Stories (Exclusive)",
        "15% discount (on café purchases)",
        "Complimentary beverages & snacks",
        "1 free event gift voucher",
        "High-speed Wi-Fi",
      ],
      highlight: false,
    },
  ];

  const onlinePlans = [
    {
      name: "Sample Online plan",
      price: "£0.99",
      period: "one-time access",
      features: [
        "1 immersive VR story (hand-picked)",
        "Mobile/tablet access",
        "No downloads or save progress",
        "Limited-time access (expires in 24–48 hours)",
      ],
      highlight: false,
    },
    {
      name: "Monthly Online Plan",
      price: "£8.99",
      period: "per month",
      features: [
        "All weekly features",
        "Early access to Exclusive titles",
        "Offline download (mobile/tablet)",
        "1 free premium event voucher",
        "Vote on upcoming story worlds",
        "Earn & redeem points for Rewards",
      ],
      highlight: true,
    },
    {
      name: "Weekly Online Plan",
      price: "£3.99",
      period: "per week",
      features: [
        "Unlimited immersive stories",
        "VR headset support (Meta Quest)",
        "Mobile + tablet compatible",
        "Spatial narration & progress sync",
        "1 free virtual community event",
        "Earn points by finishing stories",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Offline Pricing */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ZALA Café Access Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible in-store experiences for every reader — explore, connect,
            and enjoy immersive cafés
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cafePlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-scale-in ${
                plan.highlight
                  ? "border-2 border-accent shadow-2xl"
                  : "border-2 border-border hover:border-accent/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-serif text-2xl mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  size="lg"
                >
                  Activate at ZALA Café
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Online Pricing */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ZALA Online Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience immersive stories anytime, anywhere — perfect for global
            readers and VR explorers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {onlinePlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-scale-in ${
                plan.highlight
                  ? "border-2 border-accent shadow-2xl"
                  : "border-2 border-border hover:border-accent/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-serif text-2xl mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  size="lg"
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Event Ticket */}
        <div className="max-w-2xl mx-auto mt-20 ">
          <Card className="border-2 border-teal hover:border-teal/80 transition-all animate-fade-in-up">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Event Ticket
                </h3>
                <p className="text-muted-foreground">
                  Join special author sessions, book launches, and community
                  events
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="text-4xl font-bold text-teal">£3.99</div>
                <Button
                  variant="outline"
                  className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground"
                >
                  Book Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
