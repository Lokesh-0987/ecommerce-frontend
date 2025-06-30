import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useWishList } from "../WishListContext";
import { toast } from "react-toastify";
import { auth } from "../firebase";

function AllProducts({ products }) {
	const { addToCart } = useCart();
	const { addToWishList } = useWishList();
	const navigate = useNavigate();

	const isLoggedIn = !!auth.currentUser;

	const handleAddToCart = (product) => {
		if (!isLoggedIn) {
			toast.error("Please login to add items to cart.");
			navigate("/login");
			return;
		}
		addToCart(product);
		toast.success("Product added to cart!");
	};

	const handleAddToWishlist = (product) => {
		if (!isLoggedIn) {
			toast.error("Please login to add items to wishlist.");
			navigate("/login");
			return;
		}
		addToWishList(product);
		toast.success("Product added to WishList!");
	};

	return (
		<div id="allProducts" className="col-12 col-lg-9 ps-lg-4 mb-4">
			<h2 className="mb-3">All Products</h2>
			<hr />

			<div className="row">
				{products.map((product) => {
					const fullStars = Math.floor(product.rating);
					const hasHalfStar = product.rating % 1 !== 0;
					const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

					return (
						<div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
							<div className="card h-100 shadow-sm">
								<Link to={`/product/${product.id}`}>
									<img
										src={`/images/${product.id}-768.webp`}
										srcSet={`
    /images/${product.id}-480.webp 480w,
    /images/${product.id}-768.webp 768w,
    /images/${product.id}-1200.webp 1200w
  `}
										sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
										alt={product.name}
										loading="lazy"
										className="card-img-top"
										style={{
											objectFit: "cover",
											width: "100%",
											height: "200px",
										}}
									/>
								</Link>
								<div className="card-body">
									<h5 className="card-title">{product.name}</h5>

									<div className="d-flex align-items-center mb-2">
										<div className="me-2 d-flex">
											{Array(fullStars)
												.fill()
												.map((_, i) => (
													<i
														key={`full-${i}`}
														className="fas fa-star"
														style={{ color: "#FFD700" }}></i>
												))}
											{hasHalfStar && (
												<i
													className="fas fa-star-half-alt"
													style={{ color: "#FFD700" }}></i>
											)}
											{Array(emptyStars)
												.fill()
												.map((_, i) => (
													<i
														key={`empty-${i}`}
														className="far fa-star"
														style={{ color: "#FFD700" }}></i>
												))}
										</div>
										<span className="text-muted small">
											{product.rating} ({product.reviews} reviews)
										</span>
									</div>

									<div className="mb-3 font-decrease">
										<span className="text-primary fw-bold me-2">
											Rs. {product.price}
										</span>
										<span className="text-muted text-decoration-line-through me-2">
											Rs. {product.original}
										</span>
										<span className="text-success discount">
											{product.discount} OFF
										</span>
									</div>

									<div className="d-flex flex-wrap gap-2">
										<button
											className="btn btn-outline-secondary btn-sm me-2"
											onClick={() => handleAddToCart(product)}>
											Add to cart
										</button>
										<button
											className="btn btn-sm btn-outline-secondary"
											onClick={() => handleAddToWishlist(product)}>
											<i className="far fa-heart"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AllProducts;
