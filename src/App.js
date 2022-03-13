import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="doctors" element={<Listing/>} />  
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
