import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ConPage() {
	const location = useLocation();
	const { orderId, paymentMethod } = location.state || {};

	return (
		<div className="container py-5">
			<div className="text-center mb-4">
				<h2 className="fw-bold">Order Confirmed</h2>
				<p className="text-muted">
					Thank you for your purchase. Successfully Placed.
				</p>
			</div>

			<div className="border p-4 rounded mb-4 bg-light">
				<p className="mb-2 text-center">
					<b>Order Number:</b> <span className="text-primary">{orderId}</span>
				</p>
				<p className="mb-2 text-center">
					<b>Estimated Delivery:</b> <span>3-5 business days</span>
				</p>
				<p className="mb-0 text-center">
					<b>Payment Method:</b> <span>{paymentMethod}</span>
				</p>
			</div>

			<div className="d-flex justify-content-center gap-3">
				<Link to="/products" className="btn btn-primary m-3 p-3">
					Continue Shopping
				</Link>
			</div>
		</div>
	);
}

export default ConPage;
