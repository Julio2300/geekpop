import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/Single";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ComicsPop from "./pages/ComicsPop";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/comics-pop" element={<ComicsPop />} />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </>
  );
};

export default App;