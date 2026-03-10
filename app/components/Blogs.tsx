const data = [
    {
        title: "The Sh*t They Never Taught You",
        author: "Adam Ashton and Adam Jones",
        image: "https://covers.openlibrary.org/b/isbn/9780648943617-L.jpg",
    },
    {
        title: "Think Straight",
        author: "Darius Foroux",
        image: "https://covers.openlibrary.org/b/isbn/9781980351184-L.jpg",
    }
]
export const Blogs = () => {
    return (
        <>
            <div className="mb-16 w-full text-left">
                <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Writings & Blogs
                </h2>

                {/* Dev Section */}
                <div className="mb-8">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                        Dev
                    </h3>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {data.map((book) => (
                            <div
                                key={book.title}
                                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 transition hover:shadow-md"
                            >
                                <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="h-full w-full object-fit transition group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-3 flex flex-col gap-1">
                                    <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                                        {book.title}
                                    </span>

                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {book.author}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Casual Reads */}
                <div className="mb-4">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                        Casual Reads
                    </h3>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {[
                            {
                                title: "Three Men in a Boat",
                                author: "Jerome K. Jerome",
                                image: "https://covers.openlibrary.org/b/isbn/9780140621334-L.jpg",
                            },
                            {
                                title: "The Lean Startup",
                                author: "Eric Ries",
                                image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
                            }
                        ].map((book) => (
                            <div
                                key={book.title}
                                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 transition hover:shadow-md"
                            >
                                <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="h-full w-full object-cover transition group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-3 flex flex-col gap-1">
                                    <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                                        {book.title}
                                    </span>

                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {book.author}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}