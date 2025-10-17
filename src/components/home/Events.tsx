import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Author Evening with N.K. Jemisin",
      date: "March 15, 2025",
      time: "7:00 PM GMT",
      location: "Virtual + London Café",
      attendees: 45,
    },
    {
      title: "Greek Mythology Night",
      date: "March 22, 2025",
      time: "6:30 PM GMT",
      location: "Manchester Café",
      attendees: 32,
    },
    {
      title: "Student Reading Club",
      date: "March 28, 2025",
      time: "4:00 PM GMT",
      location: "All Locations",
      attendees: 68,
    },
  ];

  return (
    <section id="events" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Events & Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community for author events, book clubs, and special experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <Card
              key={event.title}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 border-border bg-background animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-accent mb-4">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground font-playfair mb-3">
                {event.title}
              </h3>
              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full border-border">
                RSVP Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Card className="p-8 shadow-medium border-border bg-card max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground font-playfair mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community on Discord and Instagram for daily book recommendations, event updates, and behind-the-scenes content.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="default">Join Discord</Button>
              <Button variant="outline" className="border-border">Follow on Instagram</Button>
            </div>
          </Card>
          <Button variant="link" className="text-accent">
            View full event calendar →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
