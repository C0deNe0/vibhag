export const Blogs = ()=>{
    return (
        <>
        
        
        <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Writings & Blogs
              </h2>
              <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I host my thoughts on{" "}
                <a
                  href="https://medium.com/@access.naveenhiremath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white underline underline-offset-4 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Medium
                </a>{" "}
                rather than building a custom site. Instead of overengineering
                and reinventing the wheel, I prefer leveraging a mature platform
                that lets me focus on what matters: sharing insights on AI
                systems, product strategy, and technical architecture.
              </p>
            </div>

            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Library
              </h2>

              {/* Dev Subsection */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Dev
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Linux Kernel Development",
                      author: "Robert Love",
                    },
                    {
                      title: "Hacking: The Art of Exploitation",
                      author: "Jon Erickson",
                    },
                    {
                      title: "Linux in a Nutshell",
                      author:
                        "Ellen Siever, Stephen Figgins, Robert Love, and Arnold Robbins",
                    },
                    {
                      title: "Linux Kernel in a Nutshell",
                      author: "Greg Kroah-Hartman",
                    },
                    {
                      title: "The Art of Electronics",
                      author: "Paul Horowitz and Winfield Hill",
                    },
                    { title: "Nmap Cookbook", author: "Nicholas Marsh" },
                  ].map((book) => (
                    <div
                      key={book.title}
                      className="group flex flex-col gap-1 transition-all"
                    >
                      <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                        {book.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Casual Reads Subsection */}
              <div className="mb-4">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Casual Reads
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Hooked: How to Build Habit-Forming Products",
                      author: "Nir Eyal",
                    },
                    { title: "The Lean Startup", author: "Eric Ries" },
                    { title: "Zero to One", author: "Peter Thiel" },
                    {
                      title: "The Almanack of Naval Ravikant",
                      author: "Eric Jorgenson",
                    },
                    { title: "Deep Work", author: "Cal Newport" },
                    {
                      title: "The Anthology of Balaji Srinivasan",
                      author: "Eric Jorgenson",
                    },
                  ].map((book) => (
                    <div
                      key={book.title}
                      className="group flex flex-col gap-1 transition-all"
                    >
                      <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                        {book.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs italic text-gray-400 dark:text-gray-500">
                *and many more, these are just one of my best reads
              </p>
            </div>
            </>
    )
}