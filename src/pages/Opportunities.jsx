import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function Opportunities() {
  const [activeCategories, setActiveCategories] = useState([]);

  const buttons = [
    { text: "All Issues" },
    { text: "Category 1" },
    { text: "Category 2" },
    { text: "Category 3" },
  ];

  const handleButtonClick = (buttonText) => {
    if (buttonText === "All Issues") {
      setActiveCategories([]);
    } else {
      setActiveCategories((prevCategories) =>
        prevCategories.includes(buttonText)
          ? prevCategories.filter((category) => category !== buttonText)
          : [...prevCategories, buttonText]
      );
    }
  };

  const opportunitiesList = [
    {
      id: 1,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: "url",
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 2,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: "url",
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 3,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: "url",
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 4,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: "url",
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
  ];

  return (
    <>
      <section className="bg-slate-200 text-center py-10">
        <div className="container items-center mx-auto max-w-5xl px-4 py-4">
          <input
            type="text"
            placeholder="Default Location"
            className="border rounded-full px-6 py-4 w-full md:w-1/2 mb-4"
          />
          <div>
            {buttons.map((button, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleButtonClick(button.text)}
                className={`font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 
                  ${
                    button.text === "All Issues" &&
                    activeCategories.length === 0
                      ? "text-white bg-slate-500 hover:bg-slate-400"
                      : activeCategories.includes(button.text)
                      ? "text-white bg-slate-500 hover:bg-slate-400"
                      : "hover:bg-slate-400 focus:ring-blue-300 border border-slate-400"
                  }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container flex mx-auto max-w-5xl px-4 py-6 justify-between items-start space-x-8">
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold">
              482 volunteers are needed
            </h2>
            <span className="text-slate-500">Showing 1-10</span>
          </div>

          {opportunitiesList.map((el, index) => (
            <div className="flex mb-8 border-b pb-8" key={index}>
              <div className="mr-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="border w-32 text-gray-300"
                >
                  <path
                    d="M0 0l200 200M0 200L200 0"
                    strokeWidth="1"
                    vector-effect="non-scaling-stroke"
                  ></path>
                </svg>
              </div>
              <div>
                <h4>
                  <a
                    href={`/opportunities/${el.id}`}
                    className="underline text-lg text-blue-500 hover:text-blue-400"
                  >
                    {el.title}
                  </a>
                </h4>
                <div className="text-sm text-slate-500">
                  <span>{el.date}, </span>
                  <span>{el.location}</span>
                </div>
                <p className="mb-2">{el.description}</p>
                <button className="font-medium rounded-full text-sm px-5 py-2.5 text-center bg-slate-200">
                  Details
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-slate-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/3">MAP</div>
      </div>
    </>
  );
}

export default Opportunities;
