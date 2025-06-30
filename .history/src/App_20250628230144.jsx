import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductView from "./ProductView";
import Cart from "./Cart";
import WishList from "./WishList";
import Checkout from "./Checkout";
import Confirm from "./Confirm";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";

function App() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Router>
				<ScrollToTop />
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar
					newestOnTop
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:id" element={<ProductView />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/WishList" element={<WishList />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/confirm" element={<Confirm />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>

			{showScrollTop && (
				<button
					onClick={scrollToTop}
					className="btn btn-primary position-fixed"
					style={{
						bottom: "20px",
						right: "20px",
						zIndex: 1050,
						borderRadius: "50%",
						width: "45px",
						height: "45px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
					}}>
					<i className="fas fa-arrow-up"></i>
				</button>
			)}
		</>
	);
}

export default App;
