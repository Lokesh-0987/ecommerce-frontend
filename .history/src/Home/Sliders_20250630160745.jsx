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
								src="/images/slider1-768.webp"
								srcSet="
					/images/slider1-480.webp 480w,
          /images/slider1-768.webp 768w,
          /images/slider1-1200.webp 1200w"
								loading="lazy"
								className="d-block w-100 img-fluid"
								sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
								alt="Slide 1"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/images/slider2-768.webp"
								srcSet="
					/images/slider2-480.webp 480w,
          /images/slider2-768.webp 768w,
          /images/slider2-1200.webp 1200w"
								loading="lazy"
								sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
								className="d-block w-100 img-fluid"
								alt="Slide 2"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/images/slider3-768.webp"
								srcSet="
					/images/slider3-480.webp 480w,
          /images/slider3-768.webp 768w,
          /images/slider3-1200.webp 1200w"
								loading="lazy"
								sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
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
