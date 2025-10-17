import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Library = () => {
  const categories = [
    "All",
    "Greek Mythology",
    "Classics",
    "Sci-Fi",
    "Romance & Drama",
    "Fiction",
    "Mystery & Thriller",
    "Author Picks",
    "Trending Now",
  ];

  const statuses = ["All", "Completed", "Under Progress", "Upcoming"];

  const books = [
    {
      title: "Whisper's Between Pages",
      category: "Fiction",
      author: "ZALA",
      runtime: "~5 min",
      status: "Completed",
    },
    {
      title: "Birth of the Gods",
      category: "Greek Mythology",
      author: "Hesiod",
      runtime: "~15 min",
      status: "Under Progress",
    },
    {
      title: "The Raven",
      category: "Mystery & Thriller",
      author: "Edgar Allan Poe",
      runtime: "12 min",
      status: "Upcoming",
    },
    {
      title: "Frankenstein (Ch. 1–3 Excerpt)",
      category: "Sci-Fi",
      author: "Mary Shelley",
      runtime: "25 min",
      status: "Upcoming",
    },
    {
      title: "The Yellow Wallpaper",
      category: "Fiction",
      author: "Charlotte Perkins Gilman",
      runtime: "35 min",
      status: "Upcoming",
    },
    {
      title: "The Tale of Princess Kaguya",
      category: "Romance & Drama",
      author: "Anonymous (Japanese Folklore)",
      runtime: "18 min",
      status: "Upcoming",
    },
    {
      title: "Journey to the Moon",
      category: "Sci-Fi",
      author: "Cyrano de Bergerac",
      runtime: "30 min",
      status: "Upcoming",
    },
    {
      title: "Metamorphoses: Echo & Narcissus",
      category: "Author Picks",
      author: "Ovid",
      runtime: "20 min",
      status: "Upcoming",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || book.category === activeCategory;

    const matchesStatus =
      activeStatus === "All" || book.status === activeStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <section
      id="library"
      className="py-20 px-4 bg-card relative overflow-hidden"
    >
      {/* ZALA Logo Background */}
      <img
        src="/logo.png"
        alt="ZALA Logo Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] opacity-40 pointer-events-none z-0"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-6">
            Your Favorite Books, Like You've Never Seen Them
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our growing library of immersive story experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Search + Reset */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search books, authors, or narrators..."
                className="pl-10 bg-background border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="border-border"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setActiveStatus("All");
              }}
            >
              Clear Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="mb-4">
            <h2 className="text-base font-semibold text-muted-foreground mb-2">
              Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border text-sm transition-smooth ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-background border-border hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filters */}
          <div>
            <h2 className="text-base font-semibold text-muted-foreground mb-2">
              Status
            </h2>
            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`px-4 py-2 rounded-full border text-sm transition-smooth ${
                    activeStatus === status
                      ? "bg-yellow-600 text-white border-yellow-600"
                      : "bg-background border-border hover:bg-yellow-600 hover:text-white hover:border-yellow-600"
                  }`}
                  onClick={() => setActiveStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Card
                key={book.title}
                className="p-6 flex flex-col justify-between shadow-soft border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-black text-accent text-xs rounded-full">
                      {book.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-playfair mb-2">
                    {book.title}
                  </h3>

                  <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold">Author:</span>{" "}
                      {book.author}
                    </p>
                    <p>
                      <span className="font-semibold">Runtime:</span>{" "}
                      {book.runtime}
                    </p>
                  </div>
                </div>

                {/* Status label */}
                <div
                  className={`w-full text-center py-2 rounded-md font-semibold border-2 border-gray-300 hover:cursor-pointer
                    ${
                      book.status === "Completed"
                        ? "bg-yellow-600 text-white"
                        : book.status === "Under Progress"
                        ? "bg-blue-900 text-white"
                        : "bg-white text-gray-600"
                    }`}
                >
                  {book.status}
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">
              No books found. Try adjusting your search or filters.
            </p>
          )}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            More titles added monthly. Vote for your favorites in our community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Library;
