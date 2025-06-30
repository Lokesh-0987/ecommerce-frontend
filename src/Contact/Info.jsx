function Info() {
	return (
		<div className="card p-4 shadow h-100">
			<h3 className="mb-3">Contact Information</h3>
			<div>
				<h5>Address</h5>
				<p>123 Business Street, Tech City, TC 12345</p>

				<h5>Phone</h5>
				<p>+91 1234567890</p>

				<h5>Email</h5>
				<p>vedhikashopping@gmail.com</p>

				<div className="mb-2">
					<h5>Follow Us</h5>
					<div id="icons" className="d-flex flex-row mt-3">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							className="text-decoration-none me-4 p-2"
							style={{ color: "#1877F2" }}
							title="Facebook">
							<i className="fab fa-facebook fa-2x"></i>
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							className="text-decoration-none me-4 p-2"
							style={{ color: "#E4405F" }}
							title="Instagram">
							<i className="fab fa-instagram fa-2x"></i>
						</a>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							className="text-decoration-none me-4 p-2"
							style={{ color: "#0A66C2" }}
							title="LinkedIn">
							<i className="fab fa-linkedin fa-2x"></i>
						</a>
						<a
							href="https://github.com/"
							target="_blank"
							className="text-decoration-none p-2"
							style={{ color: "#171515" }}
							title="GitHub">
							<i className="fab fa-github fa-2x"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Info;
