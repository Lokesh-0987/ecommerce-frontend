<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";

function OrderSummary() {
	const { cart } = useCart();
	const navigate = useNavigate();

	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const taxRate = 0.18;
	const tax = subtotal * taxRate;
	const total = subtotal + tax;
	const handleProceed = () => {
		if (cart.length === 0) {
			toast.info("Your cart is empty. Redirecting to products...");
			setTimeout(() => {
				navigate("/products");
			}, 0);

			return;
		}

		navigate("/checkout");
	};

	const formatCurrency = (num) =>
		`Rs. ${num.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

	return (
		<div id="order-summary" className="border p-4 rounded shadow-sm">
			<h3 className="mb-4">Order Summary</h3>

			<div className="d-flex justify-content-between mb-2">
				<span>Subtotal:</span>
				<span>{formatCurrency(subtotal)}</span>
			</div>

			<div className="d-flex justify-content-between mb-2">
				<span>Shipping:</span>
				<span>Free</span>
			</div>

			<div className="d-flex justify-content-between mb-3">
				<span>Tax (18%):</span>
				<span>{formatCurrency(tax)}</span>
			</div>

			<hr />

			<h4 className="d-flex justify-content-between">
				Total: <span>{formatCurrency(total)}</span>
			</h4>

			<Link
				to="/checkout"
				onClick={handleProceed}
				id="btn-3"
				className="btn btn-primary w-100 mt-4">
				Proceed to Checkout
			</Link>
		</div>
	);
}

export default OrderSummary;
=======
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";

function OrderSummary() {
	const { cart } = useCart();
	const navigate = useNavigate();

	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const taxRate = 0.18;
	const tax = subtotal * taxRate;
	const total = subtotal + tax;
	const handleProceed = () => {
		if (cart.length === 0) {
			toast.info("Your cart is empty. Redirecting to products...");
			setTimeout(() => {
				navigate("/products");
			}, 0);

			return;
		}

		navigate("/checkout");
	};

	const formatCurrency = (num) =>
		`Rs. ${num.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

	return (
		<div id="order-summary" className="border p-4 rounded shadow-sm">
			<h3 className="mb-4">Order Summary</h3>

			<div className="d-flex justify-content-between mb-2">
				<span>Subtotal:</span>
				<span>{formatCurrency(subtotal)}</span>
			</div>

			<div className="d-flex justify-content-between mb-2">
				<span>Shipping:</span>
				<span>Free</span>
			</div>

			<div className="d-flex justify-content-between mb-3">
				<span>Tax (18%):</span>
				<span>{formatCurrency(tax)}</span>
			</div>

			<hr />

			<h4 className="d-flex justify-content-between">
				Total: <span>{formatCurrency(total)}</span>
			</h4>

			<Link
				to="/checkout"
				onClick={handleProceed}
				id="btn-3"
				className="btn btn-primary w-100 mt-4">
				Proceed to Checkout
			</Link>
		</div>
	);
}

export default OrderSummary;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
