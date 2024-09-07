import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import "./Register.css"
import axios from '../api/axios';

const USER_REGEX = /^[a-zA-Z]{3,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/auth/register';

function Register () {
    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFirstName(USER_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLastName(USER_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        const isPwdValid = PWD_REGEX.test(pwd);
        setValidPwd(isPwdValid);
        setValidMatch(isPwdValid && pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {  
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPwd('');
            setMatchPwd(''); 
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }


  // Dynamic instruction text based on input focus and validation
  const getInstruction = () => {
    if (firstNameFocus && firstName && !validFirstName) {
      return 'First Name: 3 to 20 letters.';
    }
    if (lastNameFocus && lastName && !validLastName) {
      return 'Last Name: 3 to 20 letters.';
    }
    if (emailFocus && email && !validEmail) {
      return 'Email: Enter a valid email address in the format: example@domain.com.';
    }
    if (pwdFocus && !validPwd) {
      return `Password: 8 to 24 characters. Must include uppercase and lowercase letters, a number, and a special character. Allowed special characters: ! @ # $ %`;
    }
    if (matchFocus && !validMatch) {
      return 'Confirm Password: Must match the first password input field.';
    }
    return ''; // Default: no instructions if none apply
  };

    return (
        <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Log In</a>
                    </p>
                </section>
            ) : (
                <section>
                    {errMsg && (
                        <p ref={errRef} className="errmsg" aria-live="assertive">
                            {errMsg}
                        </p>
                    )}    
                    
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="firstname">
                                First Name: 
                                <span className={validFirstName ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validFirstName || !firstName ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                aria-invalid={validFirstName ? "false" : "true"}
                                aria-describedby="instruction"
                                onFocus={() => setFirstNameFocus(true)}
                                onBlur={() => setFirstNameFocus(false)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="lastname">
                                Last Name: 
                                <span className={validLastName ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validLastName || !lastName ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                autoComplete="off"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                aria-invalid={validLastName ? "false" : "true"}
                                aria-describedby="instruction"
                                onFocus={() => setLastNameFocus(true)}
                                onBlur={() => setLastNameFocus(false)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">
                                Email Address: 
                                <span className={validEmail ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="instruction"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">
                                Password: 
                                <span className={validPwd ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="instruction"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirm_pwd">
                                Confirm Password: 
                                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="instruction"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                        </div>



                        <button disabled={!validFirstName || !validLastName || !validEmail || !validPwd || !validMatch ? true : false}>Sign Up</button>
                   
                        {/* Instructions */}
                        {getInstruction() && (
                            <p id="instruction" className="instructions">
                                <FontAwesomeIcon icon={faInfoCircle} /> {getInstruction()}
                            </p>
                        )}

                    </form>

                    <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="/login">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

await axios.post(REGISTER_URL, {
    "firstName": "Kate",
    "lastName": "Connor",
    "email": "connor95@mail.com",
    "password": "12345",
    "avatarUrl": ""
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

export default Register;