import React from 'react';
import logoImage from '../Images/logo.png'; // Import the logo image


const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logoImage} alt="Logo" className="logo-image" />




      <style>
                        {`

                        .splash-screen {
                            background-color: #071EC3; 
                            height: 100vh; 
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                            .logo-image {
                                width: 376px; 
                                height: auto;
                        }

            
                        `}
                    </style>
    </div>
  );
};

export default SplashScreen;