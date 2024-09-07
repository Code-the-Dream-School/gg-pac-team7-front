import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-0 right-0 bg-white shadow-lg pr-9 pt-9 z-40 md:hidden">
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

export default Navigation;
