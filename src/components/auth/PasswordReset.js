import React, {useState} from 'react';

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      // Send an API request to reset the user's password
      // ...
  
      setLoading(false);
    };
  
    return (
        <main >        
        <section style={mainContainer}>
            <div style = {subContainer}>
            <div style={logoContainer}>
                <h1>Palace and Chariots</h1>
            </div>
            <div style={formContainer}>                                            
                <h1 style={title}> Reset Password </h1> 
                <p style={{width: 325, color: '#505050', fontSize: 14, FontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>
                To reset password, provide your email address to receive  your password reset url
                </p>  
                <div style={{width: 325, height: 0, border: '0.50px #CDCDCD solid', margin: '10px 0 0 0',}}></div>

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
                        <button                                    
                            style = {loginButton}                                        
                        >      
                            Send reset link                                                                  
                        </button>
                    </div>                               
                </form>                             
            </div>
            </div>
        </section>
    </main>
    );
  };

export default PasswordReset

const logoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#071EC3',
    color: '#FFFFFF',
    borderRadius: '10px 0 0 10px',
    width: 198, 
    height: 367, 
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
    height: 367, 
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
    paddingTop: 20,
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
    marginTop: 20, 
    
  };