import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/signIn/Signin";
import Navbar from "./componantes/navbar/Navbar";
import Footer from "./componantes/footer/Footer";
import TokenSales from "./pages/token-sales/TokenSales";
import Comunity from "./pages/comunity/Comunity";
import Contact from "./componantes/contact/Contact";
import News from "./componantes/news/News";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true, // ✅ العنصر يظهر فقط مرة لما يدخل الشاشة
        });
    });
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Signin sign={"login"} />} />
                <Route path="/signup" element={<Signin sign={"signup"} />} />
                <Route path="/sales" element={<TokenSales />} />
                <Route path="/comunity" element={<Comunity />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<News />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
