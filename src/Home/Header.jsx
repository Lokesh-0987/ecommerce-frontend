import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useWishList } from "../WishListContext";
import { useState } from "react";

function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};
	const { cart } = useCart();
	const { wishList } = useWishList();
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		if (searchTerm.trim() !== "") {
			navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
			setSearchTerm("");
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<header id="header" className="header bg-light shadow-sm">
			<div className="container-fluid">
				<div className="header__content d-flex flex-wrap align-items-center justify-content-between py-2">
					<Link to="/">
						<div className="header__logo d-flex align-items-center">
							<img
								src="/Logo.png"
								style={{ width: "40px", height: "40px" }}
								alt="logo"
								className="logo-image mr-2"
							/>
							<span className="h5 mb-0" style={{ marginRight: "250px" }}>
								Vedhika
							</span>
						</div>
					</Link>

					<nav className="header__nav d-none d-lg-block">
						<ul className="nav-list nav d-flex gap-3">
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/">
									<i className="fas fa-home mr-2"></i> Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/products">
									<i className="fas fa-box-open mr-2"></i> Products
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/about">
									<i className="fas fa-info-circle mr-2"></i> About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/contact">
									<i className="fas fa-envelope mr-2"></i> Contact
								</Link>
							</li>
						</ul>
					</nav>

					<div className="header__search d-none d-md-flex align-items-center ml-auto mr-3">
						<div className="search-container input-group">
							<input
								type="text"
								id="searchInput"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder="Search for products, brands and more..."
								className="form-control"
							/>
							<div className="input-group-append">
								<button
									id="searchBtn"
									className="btn btn-outline-secondary"
									onClick={handleSearch}>
									<i className="fas fa-search"></i>
								</button>
							</div>
						</div>
					</div>

					<button
						id="wishlistToggle"
						className="btn btn-outline-danger position-relative me-2">
						<Link className="text-dark text-decoration-none" to="/Wishlist">
							<div>
								<i className="fas fa-heart"></i>
								<span className="ml-1">Wishlist</span>
								<span
									id="wishlistCount"
									className="badge badge-pill badge-primary position-absolute top-0 start-100 translate-middle">
									{wishList.length}
								</span>
							</div>
						</Link>
					</button>

					<button
						id="cartToggle"
						className="btn btn-outline-primary position-relative">
						<Link className="text-dark text-decoration-none" to="/cart">
							<div>
								<i className="fas fa-shopping-cart"></i>
								<span className="cart-text ml-1">Cart</span>
								<span
									id="cartCount"
									className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">
									{cart.length}
								</span>
							</div>
						</Link>
					</button>

					<button
						id="mobileMenuToggle"
						onClick={toggleMobileMenu}
						className="mobile-menu-toggle d-lg-none btn btn-outline-secondary ml-2">
						<i className="fas fa-bars"></i>
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div
					className="mobile-menu bg-light position-fixed top-0 end-0 h-100 shadow"
					style={{
						width: "50vw",
						zIndex: 1050,
						transition: "transform 0.3s ease-in-out",
					}}>
					<button
						onClick={closeMobileMenu}
						className="btn btn-sm btn-outline-secondary m-3 float-end">
						<i className="fas fa-times"></i>
					</button>

					<ul className="nav flex-column p-4">
						<li className="nav-item mb-3">
							<Link
								to="/"
								className="nav-link text-dark"
								onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/products"
								className="nav-link text-dark"
								onClick={closeMobileMenu}>
								Products
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/about"
								className="nav-link text-dark"
								onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/contact"
								className="nav-link text-dark"
								onClick={closeMobileMenu}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
			{isMobileMenuOpen && (
				<div
					className="position-fixed top-0 start-0 w-100 h-100"
					style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1040 }}
					onClick={closeMobileMenu}
				/>
			)}
		</header>
	);
}

export default Header;
