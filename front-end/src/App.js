import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Compareproduct from "././pages/Product/CompareProduct";
import SingleProduct from "././pages/Product/SingleProduct";
import Wishlist from "././pages/Wishlist/Wishlist";
import Login from "././componets/Auth/Login";
import ForgotPassword from "././componets/Auth/ForgotPassword";
import Signup from "./componets/Auth/Signup";
import ResetPassword from "./componets/Auth/ResetPassword";
import Ourstore from "./pages/Ourstore/Ourstore";
import Blogcontent from "././componets/Blogs/Blogcontent";
import SingleBlog from "././componets/Blogs/SingleBlog";
import Layout from "./componets/layout/Layout";
import Error from "./pages/Error";
import PrivacyPolicy from "./pages/CommonPages/PrivacyPolicy";
import Refound from "./pages/CommonPages/Refound";
import ShippingPolicy from "./pages/CommonPages/ShippingPolicy";
import TramAndConditions from "./pages/CommonPages/TramAndConditions";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Cart/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ourstore" element={<Ourstore />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="blog" element={<Blogcontent />} />
          <Route path="single-blog/:id" element={<SingleBlog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compare-product" element={<Compareproduct />} />
          <Route path="wish-list" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refound" element={<Refound />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="tram-conditions" element={<TramAndConditions />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
