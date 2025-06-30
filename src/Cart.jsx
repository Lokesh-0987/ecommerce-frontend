<<<<<<< HEAD
import OrderSummary from "./Cart/OrderSummary";
import ShoppingCart from "./Cart/ShoppingCart";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";

function Cart() {
	return (
		<>
			<Header />
			<section className="container mt-5">
				<h2 className="mb-4">Shopping Cart</h2>
				<div className="row">
					<div className="col-lg-8">
						<ShoppingCart />
					</div>
					<div className="col-lg-4">
						<OrderSummary />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}

export default Cart;
=======
import OrderSummary from "./Cart/OrderSummary";
import ShoppingCart from "./Cart/ShoppingCart";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";

function Cart() {
	return (
		<>
			<Header />
			<section className="container mt-5">
				<h2 className="mb-4">Shopping Cart</h2>
				<div className="row">
					<div className="col-lg-8">
						<ShoppingCart />
					</div>
					<div className="col-lg-4">
						<OrderSummary />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}

export default Cart;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
