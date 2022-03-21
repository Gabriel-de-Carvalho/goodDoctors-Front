import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DoctorPage from './components/DoctorPage/DoctorPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Search/>}/>
        <Route path="/doctors" exact element={<Listing/>} />  
        <Route path="/signup" exact element={<SignUp/>} />
        <Route path="/doctorPage" exact element={<DoctorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
