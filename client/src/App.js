import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import {Switch, Route} from "react-router"
import Login from '../src/components/Login/Login';
import Signup from '../src/components/Login/Signup';
import PrivateRoutes from '../src/components/PrivateRoutes';
import Home from '../src/components/Home';
import UserContext from "./components/AccountContext";
import LoggedInHome from "./components/LoggedInHome";
import SavedAddress from "./components/SavedAddress";
import Loading from "./components/LoadingScreen";

function App() {
  console.log("APP COMPONENT")
  const [loading, setLoading] = useState(true);
  const removeLoadColor = () => {
    document.body.classList.remove('loadingscreen')
  }

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
          removeLoadColor()
      }, 5000);
  }, []);





  return (
    <>
      {loading ? (<Loading />) : 
    (<div>
        <UserContext>
              <Routes>
              <Route path="/register" element={<Signup />} />
              <Route path="/home" element={ <Home />}/> 
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoutes />} >
                <Route path="/loggedInHome" element={<LoggedInHome />} />
                <Route path="/savedAddresses" element={<SavedAddress />} />
              </Route>
            </Routes>
        </UserContext>
      </div>)
      }
    </>
  );
}
export default App;