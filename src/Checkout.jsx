import CheckForm from "./Checkout/CheckForm";
import Summary from "./Checkout/Summary";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";
function Checkout() {
	return (
		<>
			<Header />
			<section className="container my-5">
				<h2 className="mb-4">Checkout</h2>
				<div className="row">
					<div className="col-lg-8">
						<CheckForm />
					</div>
					<div className="col-lg-4">
						<Summary />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}
export default Checkout;
