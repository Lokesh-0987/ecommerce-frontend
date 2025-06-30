import { useWishList } from "../WishListContext";

import { useCart } from "../CartContext";
function WishList() {
	const { wishList, removeFromWishList } = useWishList();
	const { addToCart } = useCart();

	if (wishList.length === 0) {
		return (
			<div className="text-center mt-5">
				<h4>Your wishlist is empty.</h4>
			</div>
		);
	}

	return (
		<div className="container mt-4">
			<h2 className="mb-4">Your Wishlist</h2>
			<div className="row">
				{wishList.map((product) => {
					const fullStars = Math.floor(product.rating);
					const hasHalfStar = product.rating % 1 !== 0;
					const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

					return (
						<div key={product.id} className="col-12 col-sm-6 col-md-3 mb-4">
							<div className="card h-100 shadow-sm">
								<img
									src={`/images/${product.id}-768.webp`}
									srcSet={`
    /images/${product.id}-480.webp 480w,
    /images/${product.id}-768.webp 768w,
    /images/${product.id}-1200.webp 1200w
  `}
									className="card-img-top h-50"
									alt={product.name}
									loading="lazy"
									sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
									style={{ objectFit: "cover", height: "150px" }}
								/>

								<div className="card-body text-center">
									<h5 className="card-title">{product.name}</h5>

									<div className="d-flex justify-content-center align-items-center mb-2">
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

									<div className="mb-2">
										<span className="text-primary fw-bold me-2">
											Rs. {product.price}
										</span>
										<span className="text-muted text-decoration-line-through me-2">
											Rs. {product.original}
										</span>
										<span className="text-success">{product.discount} OFF</span>
									</div>

									<button
										className="btn btn-sm btn-primary mt-2"
										onClick={() => addToCart(product)}>
										Add to cart
									</button>
									<button
										className="btn btn-sm remove-wish btn-danger mt-2"
										onClick={() => removeFromWishList(product.id)}>
										Remove from Wishlist
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WishList;
