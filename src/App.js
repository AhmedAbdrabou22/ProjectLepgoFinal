import './App.css';
import NavBar from './components/utility//NavBar';
import Footer from './components/utility/Footer';
import Home from "./pages/Home/homePage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllOffers from './pages/Offers/GetAllOffers';
import SignUp from './pages/Auth/SignUp';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/allOffers" element={<GetAllOffers/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
