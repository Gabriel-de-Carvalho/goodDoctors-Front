import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import SignUpPacient from './components/SignUp/SignUpPacient';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DoctorPage from './components/DoctorPage/DoctorPage';
import { UserContext, user } from './session/user-context';
import { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import UserView from './components/UserView/UserView';

function App() {
    const [userLogged, setUserLogged] = useState(user);
    const [isUserLogged, setIsUserLogged] = useState(false);
    
    function updateUser(user){
      if(!isUserLogged){
        setUserLogged(user)
        setIsUserLogged(true);
      } else {
        setUserLogged({})
        setIsUserLogged(false)
      }
    }

  return (
    <UserContext.Provider value={{user: userLogged, isLogged: isUserLogged, setUser: updateUser}}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Search/>}/>
        <Route path="/doctors" exact element={<Listing/>} />  
        <Route path="/signup" exact element={<SignUp/>} />
        <Route path="/signupPacient" exat element={<SignUpPacient/>}/>
        <Route path="/doctorPage" exact element={<DoctorPage/>}/>
        <Route path="/signIn" exact element={<SignIn/>}/>
        <Route path="/userView" exact element={<UserView/>}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
