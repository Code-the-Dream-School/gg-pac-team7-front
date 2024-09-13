import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Opportunities from "./pages/Opportunities";
import OpportunityDetails from "./pages/OpportunityDetails";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import Register from './pages/Register';
import Documentation from "./pages/Documentation";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="shadow">
          <div className="container flex mx-auto max-w-5xl px-4 py-6 justify-between items-center">
            <div className="text-2xl">
              <Link to="/" className="flex items-center space-x-1">
                <GlobeEuropeAfricaIcon aria-hidden="true" className="h-6 w-6" />
                <span className="align-middle">
                  <span className="text-green-800 font-black">ECO</span>
                  <span className="font-extrabold">.LOGIC</span>
                </span>
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
            <Route path="/register" element={<Register />} />
            {/* TODO: Comment out "/documentation" route before deploying */}
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/account" element={<UserAccount />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <div className="container mx-auto max-w-5xl px-4 py-8 text-center text-slate-400 text-sm">
            © 2024 ECO.LOGIC. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
