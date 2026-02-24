  
  
 export const Recommendation = () =>{
    return (
    <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Recommendations by Clients
              </h2>
              <div className="space-y-8">
                {/* Roy Feldman Recommendation */}
                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-3">
                    <a
                      href="https://www.linkedin.com/in/royhax/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors"
                    >
                      Roy Feldman
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I've had the privilege to work with Aditya on several highly
                    technical cybersecurity R&D projects involving design and
                    implementation of defensive network components in Golang,
                    network protocol research and analysis. He is a bright young
                    engineer, extremely talented in hacking and cybersecurity,
                    with a natural curiosity and passion for hacking, and a gift
                    understanding how systems work, how to design and break
                    them. I am certain that he will succeed in any endeavor he
                    puts his mind to, in the realms of cybersecurity,
                    engineering and beyond! :)
                  </p>
                </div>

                {/* Tom Granot Recommendation */}
                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-3">
                    <a
                      href="https://www.linkedin.com/in/tomgranot/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors"
                    >
                      Tom Granot
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    It's not often that you get to talk to a person who is not
                    only hungry for mentorship, but comes out of the gate with
                    the attitude that enables him to learn so, so quickly on his
                    feet.
                    <br />
                    <br />
                    Aditya did research for highly technical content for me and
                    independently navigated difficult situations without a lot
                    of guidance. If you're looking for someone to research a
                    technical topic for your content work, Aditya is
                    disciplined, thorough and insistent on understanding things
                    in depth before giving a final output.
                    <br />
                    <br />
                    Keep on keeping on brother!
                  </p>
                </div>
              </div>
            </div>
    )
  }

