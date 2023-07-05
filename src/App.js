import './App.css';
import NavBar from './components/utility//NavBar';
import Footer from './components/utility/Footer';
import Home from "./pages/Home/homePage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllOffers from './pages/Offers/GetAllOffers';
import SignUp from './pages/Auth/SignUp';
import FavouritePage from './pages/Favourite/FavouritePage';
import ShopingPage from './pages/ShopingPage/ShopingPage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/allOffers" element={<GetAllOffers/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/favourite" element={<FavouritePage/>}></Route>
        <Route path="/shoping" element={<ShopingPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
