function Description() {
	return (
		<div id="about-desc" className="col-md-8">
			<h2 className="fw-bold mb-3">About Us</h2>
			<p className="text-muted">
				Vedhika is a modern and user-friendly e-commerce website designed to offer a seamless shopping experience for users. Built with the latest technologies like React, Vite, and Firebase, Vedhika provides a fast, responsive, and secure platform for customers to explore and purchase a wide range of products. With a clean and intuitive interface, users can easily browse categories, view product details, and manage their carts. The website includes authentication features powered by Firebase, allowing users to sign up, log in, and access personalized options such as wishlist management and order tracking, ensuring a secure and customized shopping journey.
			</p>
			<p className="text-muted">
				Vedhika focuses on performance, accessibility, and user engagement. All product images are optimized for faster loading with lazy loading and WebP support, and the UI is fully responsive for mobile and desktop users alike. Key features include a dynamic product listing, a protected user dashboard, and real-time interaction through toast notifications.
			</p>

			<div id="desc-features" className="d-flex gap-3 mt-4 flex-wrap">
				<div className="border p-3 rounded text-center flex-fill m-2 bg-light">
					<strong>Secure Shopping</strong>
				</div>
				<div className="border p-3 rounded text-center flex-fill m-2 bg-light">
					<strong>Fast Delivery</strong>
				</div>
				<div className="border p-3 rounded text-center flex-fill m-2 bg-light">
					<strong>24/7 Support</strong>
				</div>
			</div>
		</div>
	);
}
export default Description;
