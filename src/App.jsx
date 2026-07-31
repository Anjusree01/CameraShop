import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Logout from "./pages/Logout";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Header 
        search={search}
        setSearch={setSearch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Navbar 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Routes>
        <Route path="/" element={<Home search={search}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop search={search} />}/>
        <Route path="/cart"element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
        <Route path="/wishlist"element={ <ProtectedRoute><Wishlist /></ProtectedRoute>}/>
        <Route path="/profile"element={<Profile />}/>
        <Route path="/orders"element={<ProtectedRoute><Orders /></ProtectedRoute>}/>
        <Route path="/checkout"element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
        <Route path="/order-success"element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>}/>
        <Route path="/logout"element={<Logout />}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;