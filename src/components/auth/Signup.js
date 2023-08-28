import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }

    return (
        <main >        
            <section style={mainContainer}>
                <div style = {subContainer}>
                    <div style={logoContainer}>
                        <h1>Palace and Chariots</h1>
                    </div>
                    <div style ={formContainer}>                  
                        <h1 style={title}> User Registration </h1>                                                                            
                        <form>                                                                                            
                            <div>
                                <label htmlFor="email-address" style = {label}>
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder=""  
                                    style = {inputField}                              
                                />
                            </div>
    
                            <div>
                                <label htmlFor="password" style = {label}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="" 
                                    style = {inputField}             
                                />
                            </div>      
                            <div>
                                <label htmlFor="password" style = {label}>
                                    Re-enter Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder=""  
                                    style = {inputField}            
                                />
                            </div>                                         
                            
                            <button
                                type="submit" 
                                onClick={onSubmit} 
                                style = {loginButton}                       
                            >  
                                Register                               
                            </button>
                                                                         
                        </form>
                       
                                          
                    </div>
                </div>
            </section>
        </main>
      )
    }
     
    export default Signup

    const logoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#071EC3',
    color: '#FFFFFF',
    borderRadius: '10px 0 0 10px',
    width: 198, 
    height: 418, 
    background: '#071EC3', 
    //borderTopLeftRadius: 10, 
    //borderTopRightRadius: 10

  };

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
    height: 418, 
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
    marginTop: 30,    
  };