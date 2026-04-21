"use client";

import { useState } from "react";

type Book = {
    title: string;
    author: string;
};

const books: Book[] = [
    {
        title: "The Sh*t They Never Taught You",
        author: "Adam Ashton & Adam Jones",
    },
    {
        title: "Think Straight",
        author: "Darius Foroux",
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
    },
    {
        title: "Three Men in a Boat",
        author: "Jerome K. Jerome",
    },
];

/* ---------------------------------------
   SAME DESIGN COVER (NO IMAGE)
--------------------------------------- */
const BookCover = ({ title }: { title: string }) => {
    return (
        <div
            className="
        relative h-full w-full overflow-hidden
        bg-gradient-to-br
        from-zinc-800 via-zinc-900 to-black
      "
        >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-white/5 blur-xl" />

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <p className="line-clamp-3 text-base sm:text-lg font-semibold leading-snug text-white">
                    {title}
                </p>

                <div className="mt-4 h-px w-14 bg-white/20" />

                <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-zinc-400">
                    Book Notes
                </p>
            </div>
        </div>
    );
};

/* ---------------------------------------
   BOOK CARD
--------------------------------------- */
const BookCard = ({ book }: { book: Book }) => {
    return (
        <div
            className="
        group relative overflow-hidden rounded-xl
        border border-gray-200 dark:border-zinc-800
        bg-white dark:bg-zinc-950

        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]
      "
        >
            {/* Taller Cover */}
            <div className="h-60 sm:h-64 w-full">
                <BookCover title={book.title} />
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="line-clamp-1 text-sm font-medium text-black dark:text-white">
                    {book.title}
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">
                    {book.author}
                </p>
            </div>
        </div>
    );
};

/* ---------------------------------------
   MAIN COMPONENT
--------------------------------------- */
export const Blogs = () => {
    const [expanded, setExpanded] = useState(false);

    const visibleBooks = expanded ? books : books.slice(0, 2);

    return (
        <div className="mb-16 w-full text-left">
            {/* Heading */}
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                The Books I've Read
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {visibleBooks.map((book) => (
                    <BookCard key={book.title} book={book} />
                ))}
            </div>

            {/* Show More */}
            {books.length > 4 && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="
              rounded-full border border-gray-200 dark:border-zinc-800
              bg-white dark:bg-zinc-950
              px-5 py-2 text-xs sm:text-sm font-medium
              tracking-wide text-gray-600 dark:text-zinc-300

              transition-all duration-300
              hover:scale-105 hover:text-black
              dark:hover:text-white
            "
                    >
                        {expanded ? "Show Less" : `Show More`}
                    </button>
                </div>
            )}
        </div>
    );
};