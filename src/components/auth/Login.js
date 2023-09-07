import React, {useState, Component} from 'react';
import ReactDOM from "react-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import logoImage from '../../images/logo.png'; // Import the logo image

 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/admin")
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = error.message;

            if (errorCode === "auth/user-not-found") {
                errorMessage = "User not found. Please check your email.";
              } else if (errorCode === "auth/wrong-password") {
                errorMessage = "Incorrect password. Please try again.";
              }
             else if (errorCode === "auth/too-many-requests") {
                errorMessage = "Too many failed login attempts. Please reset your password or try again later.";
              }

            setError(errorMessage);
        });
       
    }
 
    return(
        <>
            <main >        
                <section style={mainContainer}>
                    <div style = {subContainer}>
                    <div style={logoContainer}>
                        <img src={logoImage} alt="Logo" className="logo-image" />                    
                    </div>
                    <div style={formContainer}>                                            
                        <h1 style={title}> User Login </h1>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address" style = {label}>
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder=""
                                    onChange={(e)=>setEmail(e.target.value)}
                                    style = {inputField}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" style = {label}>
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder=""
                                    onChange={(e)=>setPassword(e.target.value)}
                                    style = {inputField}
                                />
                                                    {error && <div style={errorContainer}>{error}</div>}

                                <div style={{width: 110, height: 24, color: '#505050', fontSize: 12, fontWeight: '400', marginBottom:10,}}>Forgot Password?</div>
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}
                                    style = {loginButton}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                        <div style ={noAccount}>
                            <div style ={greyLine}></div>
                            <div style={{width: 110, height: 24, textAlign: 'center', color: '#505050', fontSize: 12, FontFamily: 'Titillium Web', fontWeight: '400', wordWrap: 'break-word', paddingTop: 5}}>No Account?</div>
                            <div style ={greyLine}></div> 
                        </div>         

                        <p className="text-sm text-white text-center">
                           
                            <NavLink to="/signup" style={registerButton}>
                                Register
                            </NavLink>
                        
                        </p>
                                                   
                    </div>

                    <style>
                        {`

                            .logo-image {
                            width: 138px; /* Set the width of the logo */
                            height: auto; /* Maintain aspect ratio */
                            }

            
                        `}
                    </style>

                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login

const logoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#071EC3',
    color: '#FFFFFF',
    borderRadius: '10px 0 0 10px',
    width: 198, 
    height: 483, 
    background: '#071EC3', 
    //borderTopLeftRadius: 10, 
    //borderTopRightRadius: 10

  };

  const errorContainer = {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  }

  const subContainer = {
    width: '53%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63%',
  };

  const mainContainer = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F4',
    
  };

  const formContainer = {
    backgroundColor: 'white',
    borderRadius: '0 10px 10px 0',
    paddingLeft: '5%',
    justifyContent: 'center',
    width: 422,
    height: 483, 
    background: 'white', 
    borderBottomRightRadius: 10, 
    borderTopRightRadius: 10, 
    border: '0.50px #CDCDCD solid'
    
  };
  
  const title = {
    FontFamily: 'Montserrat',
    color: '#071EC3',
    padding: '5% 0 2% 0',
    fontSize: 24, 
    fontWeight: '700', 
    wordWrap: 'break-word',
    textTransform: 'uppercase',
  };

  const label = {
    display: 'block',
    FontFamily: 'Montserrat',
    color: '#505050',
    paddingTop: 0,
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: '400', 
  };

  const inputField = {
    width: 325, 
    height: 39, 
    background: 'white', 
    borderRadius: 5, 
    border: '0.50px #CDCDCD solid',
    paddingLeft: 15, 
  };

  const loginButton = {
    width: 350, 
    height: 45, 
    background: '#071EC3', 
    borderRadius: 5, 
    border: '1.25px #D9D9D9 solid',
    color: '#FFFFFF',
    textAlign: 'center', 
    fontSize: 14, 
    display: 'block', 
    fontWeight: 'bold',
    
  };

  const noAccount = {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    marginBottom: -5,
  };

  const greyLine = {
    width: 106, 
    height: 0, 
    border: '0.50px #CDCDCD solid'
  };

  const registerButton = {
    width: 350, 
    height: 45, 
    background: '#fff', 
    borderRadius: 5, 
    color: '#071EC3',
    textAlign: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14, 
    display: 'flex', 
    border: '2px #071EC3 solid',
    fontWeight: 'bold',
    textDecoration: "none",

  }

  
