import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useWishList } from "../WishListContext";
import { useState } from "react";
import { useAuth } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
	const { currentUser } = useAuth(); // your custom auth context
	const navigate = useNavigate();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const { cart } = useCart();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		if (searchTerm.trim() !== "") {
			navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
			setSearchTerm("");
		}
	};

	const handleLogout = async () => {
		await signOut(auth);
		setDropdownOpen(false);
		navigate("/");
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<header id="header" className="header bg-light shadow-sm">
			<div className="container-fluid">
				<div className="header__content d-flex flex-wrap align-items-center justify-content-between py-2">
					<Link to="/">
						<div className="header__logo d-flex align-items-center">
							<img
								src="/src/Logo.png"
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
								onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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
						id="cartToggle"
						className="btn btn-outline-primary position-relative me-2">
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

					{currentUser ? (
						<div className="position-relative ms-2">
							<div
								onClick={toggleDropdown}
								className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
								style={{
									width: "40px",
									height: "40px",
									cursor: "pointer",
									fontWeight: "bold",
									fontSize: "1rem",
								}}
								title={currentUser.displayName || currentUser.email}>
								{(currentUser.displayName
									? currentUser.displayName.charAt(0)
									: currentUser.email.charAt(0)
								).toUpperCase()}
							</div>

							{isDropdownOpen && (
								<div
									className="position-absolute bg-white border shadow-sm mt-2 py-2 rounded"
									style={{ minWidth: "120px", right: 0, zIndex: 2000 }}>
									<button
										className="dropdown-item btn btn-sm w-100 text-start"
										onClick={() => {
											setDropdownOpen(false);
											navigate("/wishlist");
										}}>
										Wishlist
									</button>
									<button
										className="dropdown-item btn btn-sm w-100 text-start text-danger"
										onClick={handleLogout}>
										Logout
									</button>
								</div>
							)}
						</div>
					) : (
						<button
							className="btn btn-outline-secondary btn-sm ms-2"
							onClick={() => navigate("/login")}>
							Login
						</button>
					)}

					<button
						id="mobileMenuToggle"
						onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
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
						onClick={() => setMobileMenuOpen(false)}
						className="btn btn-sm btn-outline-secondary m-3 float-end">
						<i className="fas fa-times"></i>
					</button>

					<ul className="nav flex-column p-4">
						<li className="nav-item mb-3">
							<Link
								to="/"
								className="nav-link text-dark"
								onClick={() => setMobileMenuOpen(false)}>
								Home
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/products"
								className="nav-link text-dark"
								onClick={() => setMobileMenuOpen(false)}>
								Products
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/about"
								className="nav-link text-dark"
								onClick={() => setMobileMenuOpen(false)}>
								About
							</Link>
						</li>
						<li className="nav-item mb-3">
							<Link
								to="/contact"
								className="nav-link text-dark"
								onClick={() => setMobileMenuOpen(false)}>
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
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}
		</header>
	);
}

export default Header;
