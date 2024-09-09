import {useRef, useState, useEffect} from 'react';

function LogIn() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

useEffect(() => {
  userRef.current.focus();
}, [])

useEffect(() => {
 setErrMsg('');
}, [user,pwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user, pwd);
  setUser('');
  setPwd('');
}
  return (
  <>
  <section>
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
        <p>
          Need an Account?<br />
          <span className="line">
            {/*put router link here*/}
            <a href="#">Sign Up</a>
          </span>
        </p>
      </div>
    </section>
</>
 )
}

export default LogIn;
