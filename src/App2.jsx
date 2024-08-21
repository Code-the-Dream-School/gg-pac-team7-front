import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  const navigation = [
    { name: "Opportunities", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Log In", href: "#" },
  ];

  const [activeCategories, setActiveCategories] = useState([]);

  const buttons = [
    { text: "All Issues" },
    { text: "Category 1" },
    { text: "Category 2" },
    { text: "Category 3" },
  ];

  const handleButtonClick = (buttonText) => {
    if (buttonText === "All Issues") {
      // Если нажали на "All Issues", сбрасываем все активные категории
      setActiveCategories([]);
    } else {
      // Иначе добавляем или убираем категорию из активных
      setActiveCategories((prevCategories) =>
        prevCategories.includes(buttonText)
          ? prevCategories.filter((category) => category !== buttonText)
          : [...prevCategories, buttonText]
      );
    }
  };

  const events = [
    {
      id: 1,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: 'url',
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 2,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: 'url',
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 3,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: 'url',
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
    {
      id: 4,
      title: "2024 Fun Sports Equipment Drive 4 Homeless",
      image: 'url',
      date: "Sep 16",
      location: "Los Angeles",
      description:
        "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
    },
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div className="container flex mx-auto max-w-5xl px-4 py-6 justify-between items-center">
          <div className="font-black text-xl">
            <a href="#" className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                />
              </svg>
              <span className="align-middle">VOLUNTEER</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none cursor-default"
              aria-label="Menu button"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                <path
                  d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main>
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
          {/* Основной контент */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold">
                482 volunteers are needed
              </h2>
              <span className="text-slate-500">Showing 1-10</span>
            </div>

            {events.map((event, index) => (
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
                      href={`/event/${event.id}`}
                      className="underline text-lg text-blue-500 hover:text-blue-400"
                    >
                      {event.title}
                    </a>
                  </h4>
                  <div className="text-sm text-slate-500">
                    <span>{event.date}, </span>
                    <span>{event.location}</span>
                  </div>
                  <p className="mb-2">{event.description}</p>
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
      </main>

      <footer>
        <div className="container mx-auto max-w-5xl px-4 py-8 text-center text-slate-400 text-sm">
          © 2024 VOLUNTEER Inc. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
