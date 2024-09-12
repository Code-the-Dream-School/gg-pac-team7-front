import { useRef, useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

function LogIn() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const isFormValid = email && password;

  useEffect(() => {
    userRef.current.focus();

    // Check if the user is already logged in (token exists in localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await axiosInstance.post(
        "/auth/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Extract the token from the response
      const token = response.data.token;

      // Store the JWT in local storage
      localStorage.setItem("token", token);

      // Update the login state
      setIsLoggedIn(true);

      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Credentials");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update login state
    window.location.reload(); // Optionally refresh the page
  };

  return (
    <ContentContainer heading={isLoggedIn ? "You are logged in!" : "Sign In"}>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      {/* If logged in, show the Logout button, otherwise show login form */}
      {isLoggedIn ? (
        <div>
          <p className="mt-6">
            <Button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-1 w-auto"
            >
              <ArrowLeftCircleIcon aria-hidden="true" className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="custom-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              required
              className="custom-input"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="custom-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Enter your password"
              className="custom-input"
            />
          </div>

          <div className="mt-6">
            <Button
              disabled={!isFormValid}
              type="submit"
            >
              <span>Sign In</span>
            </Button>
          </div>
        </form>
      )}

      {!isLoggedIn && (
        <p className="mt-6">
          Need an Account?
          <br />
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </p>
      )}
    </ContentContainer>
  );
}

export default LogIn;
