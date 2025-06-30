import { useCart } from "../CartContext";

function Summary() {
	const { cart } = useCart();

	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const tax = subtotal * 0.18;
	const total = subtotal + tax;

	const format = (num) =>
		`Rs. ${num.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

	return (
		<>
			<h4 className="mb-4">Order Summary</h4>

			<div className="mb-4">
				{cart.map((item) => (
					<div className="card border mb-3" key={item.id}>
						<div className="row g-0 align-items-center">
							<div className="col-md-2">
								<img
									src={`/images/${item.image}`}
									className="img-fluid rounded-start m-3"
									alt={item.name}
								/>
							</div>
							<div className="col-md-10">
								<div className="card-body">
									<h5 className="card-title mb-1">{item.name}</h5>
									<p className="card-text mb-0">
										{item.quantity} × {format(item.price)}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<hr />

			<div className="mb-3">
				<div className="d-flex justify-content-between">
					<span>Subtotal:</span>
					<span>{format(subtotal)}</span>
				</div>
				<div className="d-flex justify-content-between">
					<span>Tax (18%):</span>
					<span>{format(tax)}</span>
				</div>
				<div className="d-flex justify-content-between">
					<span>Shipping:</span>
					<span>Free</span>
				</div>
				<hr />
				<div className="d-flex justify-content-between fw-bold">
					<span>Total:</span>
					<span>{format(total)}</span>
				</div>
			</div>
		</>
	);
}

export default Summary;
