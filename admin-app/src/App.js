import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashoboard";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Order from "./pages/Order";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import ProductList from "./pages/ProductList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="add-blog-category" element={<AddBlogCategory />} />
            <Route path="blog-cat-list" element={<BlogCatList />} />
            <Route path="orders" element={<Order />} />
            <Route path="customers" element={<Customers />} />
            <Route path="add-color" element={<AddColor />} />
            <Route path="color-list" element={<ColorList />} />

            <Route path="add-category" element={<AddCategory />} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="add-brand" element={<AddBrand />} />
            <Route path="brand-list" element={<BrandList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
