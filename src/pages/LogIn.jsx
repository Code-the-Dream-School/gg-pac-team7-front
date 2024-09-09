import { useRef, useState, useEffect } from 'react';
import axiosInstance from '../api/axios';

function LogIn() {
  const userRef = useRef();
  const errRef = useRef();

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    userRef.current.focus();

    // Check if the user is already logged in (token exists in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  // Email validation using a regex
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  // Password validation using a regex
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await axiosInstance.post('/auth/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      // Extract the token from the response
      const token = response.data.token;

      // Store the JWT in local storage
      localStorage.setItem('token', token);

      // Update the login state
      setIsLoggedIn(true);

      setEmail('');
      setPassword('');

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 401) {
        setErrMsg('Invalid Credentials');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Update login state
    window.location.reload(); // Optionally refresh the page
  };

  return (
    <>
      <section>
        <div className="container mx-auto max-w-3xl px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

          {/* If logged in, show the Logout button, otherwise show login form */}
          {isLoggedIn ? (
            <div>
              <p>You are logged in!</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              {!validEmail && email && (
                <p className="text-red-500">Please enter a valid email address</p>
              )}

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {!validPassword && password && (
                <p className="text-red-500">Password must be at least 6 characters</p>
              )}

              {/* Disable button if inputs are invalid */}
              <button disabled={!validEmail || !validPassword}>
                Sign In
              </button>
            </form>
          )}

          {!isLoggedIn && (
            <p>
              Need an Account?<br />
              <span className="line">
                <a href="/register">Sign Up</a>
              </span>
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default LogIn;