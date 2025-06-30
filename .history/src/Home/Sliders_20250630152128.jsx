function Sliders() {
	return (
		<section id="hero" className="py-4 bg-light">
			<div className="container">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel">
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="/images/slider1.webp"
								className="d-block w-100 img-fluid"
								alt="Slide 1"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/images/slider2.webp"
								className="d-block w-100 img-fluid"
								alt="Slide 2"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/images/slider3-768.webp"
								srcSet=
								className="d-block w-100 img-fluid"
								alt="Slide 3"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
					</div>

					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Sliders;
