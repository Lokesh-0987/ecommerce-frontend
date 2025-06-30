import { useCart } from "../CartContext";

function ShoppingCart() {
	const { cart, removeFromCart, updateQuantity } = useCart();

	if (cart.length === 0) {
		return (
			<div className="text-center mt-5">
				<h4>Your cart is empty.</h4>
			</div>
		);
	}

	return (
		<div>
			{cart.map((product) => (
				<div
					id="shopping-cart"
					className="d-flex mb-4 border p-3 rounded"
					key={product.id}>
					<img
						src={`/images/${product.id}-768.webp`}
						srcSet={`/images/${product.id}-480.webp 480w,
						/images/${product.id}-768.webp 768w,
						/images/${product.id}-1200.webp 1200w,`}
						alt={product.name}
						loading="lazy"
						className="img-thumbnail m-3"
						style={{ width: "120px" }}
					/>

					<div className="ms-3 flex-grow-1">
						<h5>{product.name}</h5>
						<p className="text-muted">Rs. {product.price} each</p>

						<div className="d-flex align-items-center mb-2">
							<button
								className="btn btn-outline-secondary btn-sm"
								onClick={() => updateQuantity(product.id, -1)}
								disabled={product.quantity <= 1}>
								-
							</button>
							<input
								type="number"
								className="form-control mx-2"
								style={{ width: "60px" }}
								value={product.quantity}
								readOnly
							/>
							<button
								className="btn btn-outline-secondary btn-sm"
								onClick={() => updateQuantity(product.id, 1)}
								disabled={product.quantity >= 10}>
								+
							</button>
						</div>

						<div className="d-flex justify-content-between align-items-end">
							<span className="fw-bold ms-auto me-3">
								Rs. {product.quantity * product.price}
							</span>
							<button
								id="btn-4"
								className="btn btn-danger btn-sm"
								onClick={() => removeFromCart(product.id)}>
								Remove
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShoppingCart;
