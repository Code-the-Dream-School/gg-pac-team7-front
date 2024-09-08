import React from 'react';

function MainPage() {
  return (
    <>
      <section>
        <div className="max-w-5xl px-4 py-8 mx-auto lg:flex lg:items-center lg:justify-between lg:py-8">
          <div className="mr-auto place-self-center lg:w-7/12">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Join Ecological Volunteer Programs
            </h1>
            <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Contribute to the preservation of our planet by participating in ecological volunteer programs. Whether you're passionate about reforestation, wildlife conservation, or cleaning up oceans, there's a program for you.
            </p>
            <div>
              <a
                href="/opportunities"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
              >
                Get Involved
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-5/12">
            <img
              src="./image2.jpg"
              alt="Ecological volunteer programs"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-5xl px-4 bg-gray">
      </div>
    </>
  );
}

export default MainPage;
