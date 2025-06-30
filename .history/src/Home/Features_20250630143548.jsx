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
								src="https://videos.openai.com/vg-assets/assets%2Ftask_01jyse1spwe2b8cbs00rf5sjbx%2F1751052820_img_0.webp?st=2025-06-27T18%3A03%3A24Z&se=2025-07-03T19%3A03%3A24Z&sks=b&skt=2025-06-27T18%3A03%3A24Z&ske=2025-07-03T19%3A03%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Ynb%2FRljheKje1J5r3f8Lj1aHPra5mCcXjKkXdgQsXHM%3D&az=oaivgprodscus"
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
