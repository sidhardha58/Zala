import { usePricing } from "@/hooks/usePricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const { pricing } = usePricing();
  const { currency: symbol, plans } = pricing;

  const mainPlans = [
    {
      name: "Zala Plus",
      price: `${symbol}${plans.plus}`,
      period: "per month",
      features: [
        "All Free features",
        "Access to all immersive stories",
        "Mobile + VR headset support",
        "Early access to new stories",
      ],
      highlight: false,
    },
    {
      name: "Zala Premium",
      price: `${symbol}${plans.premium}`,
      period: "per month",
      features: [
        "All Plus features",
        "Offline downloads",
        "Priority support",
        "Community voting access",
        "1 Event Ticket/month included",
      ],
      highlight: true,
    },
    {
      name: "Zala Creator",
      price: `${symbol}${plans.creator}`,
      originalPrice: `${symbol}${plans.creatorOriginal}`,
      period: "per month",
      features: [
        "All Premium features",
        "Publish your own stories",
        "Earn from community engagement",
        "Priority feature requests",
      ],
      highlight: false,
    },
  ];

  const freePlan = {
    name: "Zala Free",
    price: `${symbol}${plans.free}`,
    period: "Free forever (limited access)",
    features: [
      "Basic story access",
      "Mobile/tablet viewing",
      "No offline support",
    ],
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ZALA Online Subscription Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans to match your journey — whether you read, explore, or
            create.
          </p>
        </div>

        {/* Main Paid Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainPlans.map((plan, index) => (
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
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="font-serif text-2xl mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="ml-2 text-muted-foreground line-through text-lg">
                      {plan.originalPrice}
                    </span>
                  )}
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

        {/* Free Plan */}
        <div className="max-w-xl mx-auto mb-20">
          <Card className="border-2 border-muted hover:border-accent transition-all animate-fade-in-up">
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-serif text-2xl mb-4">
                {freePlan.name}
              </CardTitle>
              <div className="mb-2">
                <span className="text-4xl font-bold text-foreground">
                  {freePlan.price}
                </span>
              </div>
              <p className="text-muted-foreground">{freePlan.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {freePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Start Free
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Event Ticket Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-teal hover:border-teal/80 transition-all animate-fade-in-up">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Event Ticket
                </h3>
                <p className="text-muted-foreground">
                  Join special author sessions, book launches, and community
                  events.
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
