import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function ProfileImage({ userData }) {
  return (
    <Link to="/account" className="flex space-x-2 border-gray-500">
      <div className="h-6 w-6 rounded-full bg-gray-300">
        {userData && (
          <img
            src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}${userData.avatarUrl}`}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="h-6 w-6 rounded-full"
          />
        )}
      </div>
      <span className="font-medium">
        {userData
          ? `${userData.firstName} ${userData.lastName.charAt(0)}.`
          : "..."}
      </span>
    </Link>
  );
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setMenuOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/v1/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [token, location.pathname, navigate]);

  const navigation = [
    { name: "User Account", href: "/account" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact-us" },
  ];

  const isActive = (pathname, href) => pathname.startsWith(href);

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
        <div className="absolute top-0 right-0 bg-white shadow-lg pr-9 pt-12 pl-5 pb-5 z-40 md:hidden p-3">
          {token && (
            <div className="py-3 items-center mb-4 border-b">
              <div>
                <ProfileImage userData={userData} />
                <div className="pl-8">
                  <button
                    onClick={handleLogout}
                    className="text-xs text-slate-500 mt-1"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          )}

<ul className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`${
                    isActive(location.pathname, item.href)
                      ? "bg-slate-500 text-white"
                      : "text-gray-900"
                  } block px-3 py-2 rounded-md`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {!token && (
              <li>
                <Link
                  to="/login"
                  className={`${
                    isActive(location.pathname, "/login")
                      ? "bg-slate-500 text-white"
                      : "text-gray-900"
                  } block px-3 py-2 rounded-md`}
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 items-center">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`${
                  isActive(location.pathname, item.href)
                    ? "bg-slate-500 text-white"
                    : "text-gray-900"
                } px-3 py-2 rounded-md`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            {token ? (
              <div className="flex items-center space-x-2">
                <ProfileImage userData={userData} />
              </div>
            ) : (
              <Link
                to="/login"
                className={`${
                  isActive(location.pathname, "/login")
                    ? "bg-slate-500 text-white"
                    : "text-gray-900"
                } px-3 py-2 rounded-md`}
              >
                Log In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
