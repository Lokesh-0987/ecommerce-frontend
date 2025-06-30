function Bottom() {
	return (
		<section id="footer" className="bg-dark text-light pt-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<img
							src="/Logo.png"
							loading="lazy"
							alt="Logo"
							style={{ width: "40px", height: "40px" }}
							className="mb-3"
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse
							eveniet reprehenderit debitis totam autem, ad velit quas sit
							aperiam officia, at et. Libero, nulla voluptatum voluptates culpa
							molestiae numquam?
						</p>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<h3 className="mb-3">Quick Links</h3>
						<ul className="list-unstyled">
							<li>
								<a href="/about" className="text-light">
									About
								</a>
							</li>
							<li>
								<a href="/products" className="text-light">
									Offers & Discounts
								</a>
							</li>
							<li>
								<a href="/products" className="text-light">
									Get Coupon
								</a>
							</li>
							<li>
								<a href="/contact" className="text-light">
									Contact us
								</a>
							</li>
						</ul>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<h3 className="mb-3">New Products</h3>
						<ul className="list-unstyled">
							<li>
								<a href="/products" className="text-light">
									Women Clothing
								</a>
							</li>
							<li>
								<a href="/products" className="text-light">
									Fashion Accessories
								</a>
							</li>
							<li>
								<a href="/products" className="text-light">
									Main Accessories
								</a>
							</li>
							<li>
								<a href="/products" className="text-light">
									Toys for Kids
								</a>
							</li>
						</ul>
					</div>

					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<h3 className="mb-3">Support</h3>
						<ul className="list-unstyled">
							<li>
								<a href="/contact" className="text-light">
									Frequently Asked Questions
								</a>
							</li>
							<li>
								<a href="/about" className="text-light">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="/about" className="text-light">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="/contact" className="text-light">
									Report a payment issue
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-center py-3 border-top border-secondary mt-4">
					<h6 className="mb-0">
						CopyRight© By Vedhika 2025. All rights reserved
					</h6>
				</div>
			</div>
		</section>
	);
}

export default Bottom;
