import React, {useState, useEffect} from 'react';
import SplashScreen from './components/auth/SplashScreen';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import Admin from './components/Admin';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


 
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

  }, []);
 
  return (
    <Router>
                                   
            <Routes>                                                                        
              <Route path="/" element={loading ? <SplashScreen/> : <Login />}/>
               <Route path="/signup" element={<Signup/>}/>

               <Route path="/password-reset" element={<PasswordReset/>}/>
               <Route path= "/admin" element={<Admin/>}/>
            </Routes>                    
        
    </Router>
  );
}
 
export default App;