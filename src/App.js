import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DoctorPage from './components/DoctorPage/DoctorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="doctors" element={<Listing/>} />  
        <Route path="signup" element={<SignUp/>} />
        <Route path="doctorPage" element={<DoctorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
