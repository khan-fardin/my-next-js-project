import Link from "next/link";
import React from "react";

const Home = () => {
  const featuredBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to BookNest
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Discover your next favorite read from our curated collection of books.
        </p>
        <Link href='/products' className="bg-accent text-accent-content px-6 py-3 rounded-xl hover:bg-secondary shadow-lg transition">
          Browse Books
        </Link>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredBooks.map((book, idx) => (
            <div
              key={idx}
              className="bg-primary-content rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="object-cover w-[200px]"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {book.title}
                </h3>
                <p className="text-gray-600">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
