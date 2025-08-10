// app/page.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Subscription from "@/components/subscription";
import ClientComments from "@/components/ClientComments";
import BlogSection from "@/components/blog-pages";


 function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <section>
        <div
          id="docsTabsOverview"
          role="tabpanel"
          className="mb-8 hidden px-4 opacity-100 transition-opacity data-[te-tab-active]:flex"
          aria-labelledby="docs-tab-overview-tab"
          data-te-tab-active=""
        >
          <div className="flex w-full flex-col pr-4">
            <main>
              {/* SVG backgrounds */}
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute top-[60px] hidden h-[580px] w-[calc(100%-1rem)] max-w-full transition-opacity duration-300 dark:opacity-0 lg:block"
              >
                <defs>
                  <linearGradient id="sw-gradient-light" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="hsl(209, 92.2%, 92.1%)" offset="0" />
                    <stop stopColor="hsl(209, 92.2%, 99.1%)" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#sw-gradient-light)"
                  d="M-.664 3.46S405.288 15.475 461.728 21.285c139.309 14.34 210.54 54.801 239.328 76.361 55 41.192 96.211 118.611 156.689 147.51C885.704 258.516 980.334 280.547 1048.511 268.826 1121.622 256.256 1199.864 226.267 1214.176 220.176 1241.273 208.643 1280.201 191.509 1343.494 179.436c90.8310000000001-17.325 96.01 16.663 96.009 3.768C1439.502 161.288 1440 0 1440 0h-80c-80 0-240 0-4e2.0S640 0 480 0 160 0 80 0H0L-.664 3.46z"
                />
              </svg>
              <svg
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute top-[60px] hidden h-[580px] w-full max-w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
              >
                <defs>
                  <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="hsl(240, 4%, 28%)" offset="0" />
                    <stop stopColor="hsl(0, 0%, 15%)" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#sw-gradient-dark)"
                  d="M-.664 3.46S405.288 15.475 461.728 21.285c139.309 14.34 210.54 54.801 239.328 76.361 55 41.192 96.211 118.611 156.689 147.51C885.704 258.516 980.334 280.547 1048.511 268.826 1121.622 256.256 1199.864 226.267 1214.176 220.176 1241.273 208.643 1280.201 191.509 1343.494 179.436c90.8310000000001-17.325 96.01 16.663 96.009 3.768C1439.502 161.288 1440 0 1440 0h-80c-80 0-240 0-4e2.0S640 0 480 0 160 0 80 0H0L-.664 3.46z"
                />
              </svg>

              {/* Main content */}
              <section className="mx-auto mb-[64px] mt-12 pb-[64px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
                <div className="grid grid-cols-1 items-center pt-6 lg:grid-cols-12">
                  <div className="relative mx-3 text-center lg:col-span-5 lg:text-left">
                    <div className="mt-15">
                      <h1 className="mb-8 mt-0 text-4xl font-bold font-[Orbitron]">
                        Top Quality<br />
                        <span className="">Modern <span className="text-blue-600">Blog</span> Pages</span>
                      </h1>
                      <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Shadecn, Next.js components recreated with Tailwind CSS and React, but with better
                        design and more functionalities
                      </p>
                      <div>
                        <ol className="text-md mb-10 text-start sm:ml-0 ml-4 text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                            <span className="mr-2 text-xl font-bold inline-block pb-1 align-middle text-primary dark:text-primary-400">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                            500+ UI components
                          </li>
                          <li className="mb-4">
                            <span className="mr-2 inline-block pb-1 align-middle text-primary dark:text-primary-400">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                            Super simple, 1 minute installation
                          </li>
                          <li className="mb-4">
                            <span className="mr-2 inline-block pb-1 align-middle text-primary dark:text-primary-400">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                            Easy theming and customization
                          </li>
                          <li className="mb-4">
                            <span className="mr-2 inline-block pb-1 align-middle text-primary dark:text-primary-400">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                            Free hosting
                          </li>
                        </ol>
                        <div className="flex items-center justify-center lg:justify-start">
                          <button id="my-button"
                           
                          >
                            Get started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image section */}
                  <div className="relative mx-3 mt-5 flex justify-center lg:col-span-7 lg:mt-0">
                    <picture>
                      <source srcSet="https://tecdn.b-cdn.net/img/home/main.webp" type="image/webp" />
                      <img
                        src="https://tecdn.b-cdn.net/img/home/main.png"
                        className="absolute left-0 top-0 w-full max-w-full h-auto px-4 transition-opacity duration-500 dark:opacity-0"
                        alt="TE light main components preview"
                      />
                    </picture>
                    <picture>
                      <source srcSet="https://tecdn.b-cdn.net/img/homepage/main-dark.webp" type="image/webp" />
                      <img
                        src="https://tecdn.b-cdn.net/img/homepage/main-dark.png"
                        className="w-full max-w-full h-auto px-4 sm:mt-9 mt-0 opacity-0 transition-opacity duration-500 dark:opacity-100"
                        alt="TE dark main components preview"
                      />
                    </picture>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      <Subscription/>
      <ClientComments/>
      <BlogSection/>
    </div>
  );
}

export default Home;
