import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { GlobeEuropeAfricaIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Opportunities from "./pages/Opportunities";
import OpportunityDetails from "./pages/OpportunityDetails";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";

function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Opportunities", href: "/opportunities" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact-us" },
    { name: "Log In", href: "/login" },
  ];

  return (
    <>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon aria-hidden="true" className="relative h-6 w-6 z-50" />
          ) : (
            <Bars3Icon aria-hidden="true" className="relative h-6 w-6" />
          )}
        </button>
      </div>

      {/* Выпадающее меню */}
      {menuOpen && (
        <div className="absolute top-0 right-0 bg-white shadow-lg pr-9 z-40 md:hidden">
          <ul className="flex flex-col p-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`${
                    location.pathname.startsWith(item.href)
                      ? "bg-slate-500 text-white"
                      : "text-gray-900"
                  } block px-3 py-2 rounded-md`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`${
                  location.pathname.startsWith(item.href)
                    ? "bg-slate-500 text-white"
                    : "text-gray-900"
                } px-3 py-2 rounded-md`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="shadow">
          <div className="container flex mx-auto max-w-5xl px-4 py-6 justify-between items-center">
            <div className="font-black text-xl">
              <Link to="/" className="flex items-center space-x-1">
                <GlobeEuropeAfricaIcon aria-hidden="true" className="h-6 w-6" />
                <span className="align-middle">VOLUNTEER</span>
              </Link>
            </div>
            <Navigation />
          </div>
        </header>

        {/* Main */}
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/opportunities/:id" element={<OpportunityDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <div className="container mx-auto max-w-5xl px-4 py-8 text-center text-slate-400 text-sm">
            © 2024 VOLUNTEER Inc. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
