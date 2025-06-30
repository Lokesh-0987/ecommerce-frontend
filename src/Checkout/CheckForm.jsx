<<<<<<< HEAD
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckForm() {
	const { clearCart } = useCart();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		first: "",
		last: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		pincode: "",
		payment: "",
	});

	const handleChange = (e) => {
		const { id, value, name } = e.target;
		if (name === "payment") {
			setForm((prev) => ({ ...prev, payment: value }));
		} else {
			setForm((prev) => ({ ...prev, [id]: value }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		for (let key in form) {
			if (form[key] === "") {
				toast.error("Please fill out all fields.", {
					position: "top-center",
				});
				return;
			}
		}

		const orderId = "VED" + Math.floor(10000000 + Math.random() * 90000000);

		toast.success("Order confirmed!", {
			position: "top-center",
		});

		setTimeout(() => {
			clearCart();
			navigate("/confirm", {
				state: {
					orderId,
					paymentMethod: form.payment,
				},
			});
		}, 0);
	};

	return (
		<>
			<form className="border rounded p-4 shadow-sm" onSubmit={handleSubmit}>
				<div className="mb-4">
					<h4>Personal Information</h4>
					<div className="bg-light p-3 rounded">
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="first" className="form-label">
									First Name
								</label>
								<input
									type="text"
									id="first"
									onChange={handleChange}
									value={form.first}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="last" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									id="last"
									onChange={handleChange}
									value={form.last}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									id="email"
									onChange={handleChange}
									value={form.email}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="phone" className="form-label">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									onChange={handleChange}
									value={form.phone}
									className="form-control"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<div className="mb-4">
					<h4>Shipping Address</h4>
					<div className="bg-light p-3 rounded">
						<div className="mb-3">
							<label htmlFor="address" className="form-label">
								Address
							</label>
							<input
								type="text"
								id="address"
								onChange={handleChange}
								value={form.address}
								className="form-control"
								required
							/>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="city" className="form-label">
									City
								</label>
								<input
									type="text"
									id="city"
									onChange={handleChange}
									value={form.city}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="pincode" className="form-label">
									PIN Code
								</label>
								<input
									type="number"
									id="pincode"
									onChange={handleChange}
									value={form.pincode}
									className="form-control"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<div className="mb-4">
					<h4>Payment Method</h4>
					<div className="bg-light p-3 rounded">
						<div className="form-check mb-2">
							<input
								type="radio"
								id="cod"
								name="payment"
								className="form-check-input"
								value="Cash on Delivery"
								checked={form.payment === "Cash on Delivery"}
								onChange={handleChange}
							/>
							<label htmlFor="cod" className="form-check-label">
								Cash on Delivery
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								type="radio"
								id="cards"
								name="payment"
								className="form-check-input"
								value="Credit/Debit Card"
								checked={form.payment === "Credit/Debit Card"}
								onChange={handleChange}
							/>
							<label htmlFor="cards" className="form-check-label">
								Credit/Debit Card
							</label>
						</div>
						<div className="form-check">
							<input
								type="radio"
								id="upi"
								name="payment"
								className="form-check-input"
								value="UPI Payment"
								checked={form.payment === "UPI Payment"}
								onChange={handleChange}
							/>
							<label htmlFor="upi" className="form-check-label">
								UPI Payment
							</label>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<button type="submit" className="btn btn-primary w-100">
					Place Order
				</button>
			</form>
			<ToastContainer />
		</>
	);
}

export default CheckForm;
=======
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckForm() {
	const { clearCart } = useCart();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		first: "",
		last: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		pincode: "",
		payment: "",
	});

	const handleChange = (e) => {
		const { id, value, name } = e.target;
		if (name === "payment") {
			setForm((prev) => ({ ...prev, payment: value }));
		} else {
			setForm((prev) => ({ ...prev, [id]: value }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		for (let key in form) {
			if (form[key] === "") {
				toast.error("Please fill out all fields.", {
					position: "top-center",
				});
				return;
			}
		}

		const orderId = "VED" + Math.floor(10000000 + Math.random() * 90000000);

		toast.success("Order confirmed!", {
			position: "top-center",
		});

		setTimeout(() => {
			clearCart();
			navigate("/confirm", {
				state: {
					orderId,
					paymentMethod: form.payment,
				},
			});
		}, 0);
	};

	return (
		<>
			<form className="border rounded p-4 shadow-sm" onSubmit={handleSubmit}>
				<div className="mb-4">
					<h4>Personal Information</h4>
					<div className="bg-light p-3 rounded">
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="first" className="form-label">
									First Name
								</label>
								<input
									type="text"
									id="first"
									onChange={handleChange}
									value={form.first}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="last" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									id="last"
									onChange={handleChange}
									value={form.last}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									id="email"
									onChange={handleChange}
									value={form.email}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="phone" className="form-label">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									onChange={handleChange}
									value={form.phone}
									className="form-control"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<div className="mb-4">
					<h4>Shipping Address</h4>
					<div className="bg-light p-3 rounded">
						<div className="mb-3">
							<label htmlFor="address" className="form-label">
								Address
							</label>
							<input
								type="text"
								id="address"
								onChange={handleChange}
								value={form.address}
								className="form-control"
								required
							/>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="city" className="form-label">
									City
								</label>
								<input
									type="text"
									id="city"
									onChange={handleChange}
									value={form.city}
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="pincode" className="form-label">
									PIN Code
								</label>
								<input
									type="number"
									id="pincode"
									onChange={handleChange}
									value={form.pincode}
									className="form-control"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<div className="mb-4">
					<h4>Payment Method</h4>
					<div className="bg-light p-3 rounded">
						<div className="form-check mb-2">
							<input
								type="radio"
								id="cod"
								name="payment"
								className="form-check-input"
								value="Cash on Delivery"
								checked={form.payment === "Cash on Delivery"}
								onChange={handleChange}
							/>
							<label htmlFor="cod" className="form-check-label">
								Cash on Delivery
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								type="radio"
								id="cards"
								name="payment"
								className="form-check-input"
								value="Credit/Debit Card"
								checked={form.payment === "Credit/Debit Card"}
								onChange={handleChange}
							/>
							<label htmlFor="cards" className="form-check-label">
								Credit/Debit Card
							</label>
						</div>
						<div className="form-check">
							<input
								type="radio"
								id="upi"
								name="payment"
								className="form-check-input"
								value="UPI Payment"
								checked={form.payment === "UPI Payment"}
								onChange={handleChange}
							/>
							<label htmlFor="upi" className="form-check-label">
								UPI Payment
							</label>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<button type="submit" className="btn btn-primary w-100">
					Place Order
				</button>
			</form>
			<ToastContainer />
		</>
	);
}

export default CheckForm;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
