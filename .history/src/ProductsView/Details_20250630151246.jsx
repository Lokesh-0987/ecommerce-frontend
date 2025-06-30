import { products } from "../App.js";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";
import { useWishList } from "../WishListContext";
import { Link } from "react-router-dom";

function Details({ id }) {
	const { addToWishList } = useWishList();
	const { addToCart } = useCart();
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) return <h2>Product not found</h2>;

	const fullStars = Math.floor(product.rating);
	const hasHalfStar = product.rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	return (
		<div className="row mb-5">
			<div className="col-md-6 text-center">
				<img
					src={`/images/${product.id}-768.webp`}
					srcSet={`
    /images/${product.id}-480.webp 480w,
    /images/${product.id}-768.webp 768w,
    /images/${product.id}-1200.webp 1200w
  `}
					alt={product.name}
					className="img-fluid rounded"
				/>
			</div>

			<div className="col-md-6">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/">Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/products">Products</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							{product.name}
						</li>
					</ol>
				</nav>

				<h1 className="mb-3">{product.name}</h1>

				<div className="mb-2 d-flex align-items-center">
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

				<div className="mb-3">
					<span className="text-primary fw-bold me-2">Rs. {product.price}</span>
					<span className="text-muted text-decoration-line-through me-2">
						Rs. {product.original}
					</span>
					<span className="text-success discount">{product.discount} OFF</span>
				</div>

				<p className="mb-4">{product.description}</p>

				<div className="d-flex flex-wrap gap-2">
					<button
						className="btn btn-primary"
						onClick={() => {
							addToCart(product);
							toast.success("Product added to cart!");
						}}>
						Add to Cart
					</button>
					<button
						className="btn btn-primary"
						onClick={() => {
							addToWishList(product);
							toast.success("Product added to WishList!");
						}}>
						<i className="far fa-heart"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Details;
