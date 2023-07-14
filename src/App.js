import './App.css';
import NavBar from './components/utility//NavBar';
import Footer from './components/utility/Footer';
import Home from "./pages/Home/homePage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllOffers from './pages/Offers/GetAllOffers';
// import SignUp from './pages/Auth/SignUp';
import FavouritePage from './pages/Favourite/FavouritePage';
import ShopingPage from './pages/ShopingPage/ShopingPage';
import SpecificProduct from "./pages/SpecificProductPAge/SpecificProduct"
import CategoryCardsDetails from './pages/DetailsCategoryPages/CategoryCardsDetails';
import AddProductPage from './pages/AddProduct/AddProductPage';
import LoginPage from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import UserProfilePage from './pages/User/UserProfilePage';
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
        <Route path="/product/:id" element={<SpecificProduct/>}></Route>
        <Route path="/categoryDetails" element={<CategoryCardsDetails/>}></Route>
        <Route path="/addProduct" element={<AddProductPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/user/profile" element={<UserProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
