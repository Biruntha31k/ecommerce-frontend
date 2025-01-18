import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contactus';
import api from './services/api';
import UserProfile from './components/UserProfile';

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const products = [
    { id: 1, name: 'Ethnic 2-piece Kurti Set', category: 'Ethnic', price: 999, image: 'https://th.bing.com/th/id/OIP.3xxUduroFf9AZTNw-RwxPgHaLI?w=202&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 2, name: 'Purple Maxi with Dupatta', category: 'Ethnic', price: 839, image: 'https://th.bing.com/th/id/OIP.iIlXKxL9JSVeLVWXhBHXlgHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 3, name: 'Indigo Cotton Saree', category: 'Ethnic', price: 1799, image: 'https://th.bing.com/th/id/OIP.b9OQbRpTMIlY9cBZn2ZsvQHaJ4?w=202&h=270&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 4, name: 'Black Cotton Western Dress', category: 'Western', price: 549, image: 'https://th.bing.com/th/id/OIP.k47FWuPjPymu-LY92AY5mwHaLQ?w=202&h=308&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 5, name: 'Navy Western Gown', category: 'Western', price: 799, image: 'https://th.bing.com/th/id/OIP.H980ELWzqoKuhIN03e_N1gAAAA?w=202&h=319&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 6, name: 'Mustard Fit & Flare Dress', category: 'Ethnic', price: 750, image: 'https://th.bing.com/th/id/OIP.kmFKmA5IkxMsAVFq_gS1EQAAAA?w=202&h=300&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 7, name: 'Co-ord Set with Jacket', category: 'Ethnic', price: 1299, image: 'https://th.bing.com/th/id/OIP.d9VvKtV6xVf6-cJnAqp-WgHaLG?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 8, name: 'Tulip Sleeve Belted Pleated Midi', category: 'Western', price: 1029, image: 'https://th.bing.com/th/id/OIP.usTiEDLUUV8dOfjGQrpOjgAAAA?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 9, name: 'Refreshing Red Saree', category: 'Ethnic', price: 979, image: 'https://th.bing.com/th/id/OIP.ZrkoDZ-O-yQ0sYIS2PtDxwHaLI?w=202&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 10, name: 'Printed White Tees with Peach Pant', category: 'Western', price: 1199, image: 'https://th.bing.com/th/id/OIP.u1aCd48vOzvvq9MfYa8wlgHaLl?w=199&h=312&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 11, name: 'Two Piece Basic Outfit', category: 'Western', price: 1790, image: 'https://th.bing.com/th/id/OIP.XFUCIswCUl-Wx3ZEufsMAAHaKA?w=202&h=272&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 12, name: 'Office Formal White Shirt & Pant', category: 'Western', price: 699, image: 'https://th.bing.com/th/id/OIP.ek9uRvuIeQS4Tpj9bL_mrgHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 13, name: 'Olive Sports Suit', category: 'Sports', price: 1279, image: 'https://th.bing.com/th/id/OIP.fEcpsYa064bC8jNWKE0-ggHaLG?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 14, name: 'Leopard Shade Glasses', category: 'Addon', price: 1309, image: 'https://th.bing.com/th/id/OIP.jek0vR7GtnG9sJvzOaXvRQHaK5?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 15, name: 'Pink Flat Shoe', category: 'Addon', price: 829, image: 'https://th.bing.com/th/id/OIP.dn-QwMF9vCIb7n-rkpxKNAHaHa?w=147&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 16, name: 'Black & Sandal Wedges', category: 'Addon', price: 929, image: 'http://ts2.explicit.bing.net/th?id=OIP.9nxPhDQDKKXILgDR_H1sZgHaJ4&pid=15.1' },
    { id: 17, name: 'Ankle Strap Flat Sandal', category: 'Addon', price: 650, image: 'https://th.bing.com/th/id/OIP.shKSzoPdVwlGtxkoj4Eb2AHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
    { id: 18, name: 'Pearl Rose Gold Pendant', category: 'Addon', price: 350, image: 'https://th.bing.com/th/id/OIP.wmejaeY_m9D1NA7N4XvNzQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products products={products} selectedCategory={selectedCategory} />} />
            <Route path="/products/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <AboutUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;