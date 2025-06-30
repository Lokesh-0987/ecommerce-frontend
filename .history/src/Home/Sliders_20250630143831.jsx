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
								src="https://videos.openai.com/vg-assets/assets%2Ftask_01jys5b6s4fara1cc3jjygqk32%2F1751043726_img_0.webp?st=2025-06-27T15%3A48%3A45Z&se=2025-07-03T16%3A48%3A45Z&sks=b&skt=2025-06-27T15%3A48%3A45Z&ske=2025-07-03T16%3A48%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DZu3t3i0bVw1NCGKNV%2Ff0iLn9GeUBILuYSzQovFoCmg%3D&az=oaivgprodscus"
								className="d-block w-100 img-fluid"
								alt="Slide 1"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://videos.openai.com/vg-assets/assets%2Ftask_01jys829rff368g95k2cyxpzq2%2F1751046625_img_0.webp?st=2025-06-27T16%3A43%3A48Z&se=2025-07-03T17%3A43%3A48Z&sks=b&skt=2025-06-27T16%3A43%3A48Z&ske=2025-07-03T17%3A43%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=cO69H8773dtWU40iG184%2BO7qpdGgpUIF%2F104Y7u5y9Q%3D&az=oaivgprodscus"
								className="d-block w-100 img-fluid"
								alt="Slide 2"
								style={{ maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/images/slider3.webp"
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
