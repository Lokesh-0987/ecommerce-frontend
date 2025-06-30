function Features() {
	return (
		<section id="features" className="py-5 bg-light">
			<div className="container">
				<h2 className="mb-4 text-center">Our Features</h2>
				<div className="row">
					<div className="col-12 col-md-4 mb-4">
						<div className="card h-100 text-center shadow-sm">
							<img
								src="/images/fastdelivery.webp"
								className="card-img-top mx-auto"
								alt="Feature"
								style={{ width: "80px", height: "80px", marginTop: "20px" }}
							/>
							<div className="card-body">
								<h3 className="card-title">Fastest Delivery</h3>
								<p className="card-text">
									We ensure your orders reach you as quickly as possible. Most
									items are delivered within 2–5 business days. Our system
									processes your order instantly, and you’ll get live tracking
									updates so you always know where your order is. Speedy service
									without delays — that’s our promise.
								</p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-4 mb-4">
						<div className="card h-100 text-center shadow-sm">
							<img
								src="/images/freeshipping.webp"
								className="card-img-top mx-auto"
								alt="Feature"
								style={{ width: "80px", height: "80px", marginTop: "20px" }}
							/>
							<div className="card-body">
								<h3 className="card-title">Free Shipping</h3>
								<p className="card-text">
									No hidden charges — ever. Every order on our site includes
									free shipping, whether you're buying one item or many. We
									believe customers shouldn’t pay extra to receive their
									purchase. Shop with confidence knowing your total cost
									includes fast, reliable, and free delivery every time.
								</p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-4 mb-4">
						<div className="card h-100 text-center shadow-sm">
							<img
								src="/images/securepayments.webp"
								className="card-img-top mx-auto"
								alt="Feature"
								style={{ width: "80px", height: "80px", marginTop: "20px" }}
							/>
							<div className="card-body">
								<h3 className="card-title">Secure Payments</h3>
								<p className="card-text">
									Your safety is our priority. We support secure payments
									through UPI, Credit/Debit Cards, and Cash on Delivery. All
									online payments are encrypted and processed through trusted
									gateways. Shop with peace of mind — your personal and payment
									details are always safe and protected with us.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
