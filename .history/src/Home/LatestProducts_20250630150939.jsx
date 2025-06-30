import { Link } from "react-router-dom";
import { products } from "../App";

function LatestProducts() {
	const categoriesShown = new Set();
	const filteredProducts = products.filter((product) => {
		if (!categoriesShown.has(product.category)) {
			categoriesShown.add(product.category);
			return true;
		}
		return false;
	});

	return (
		<section id="latestproducts" className="py-5 bg-white">
			<div className="container">
				<h2 className="mb-4 text-center">Latest Products</h2>
				<div className="row">
					{filteredProducts.map((product) => (
						<div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
							<div
								className="card shadow-sm h-100"
								style={{
									cursor: "pointer",
									height: "400px",
									overflow: "hidden",
									display: "flex",
									alignItems: "center",
									padding: "10px",
								}}>
								<img
									src={`/images/${product.id}-768.webp`}
									srcSet={`
    /images/${product.id}-480.webp 480w,
    /images/${product.id}-768.webp 768w,
    /images/${product.id}-1200.webp 1200w
  `}
									sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
									alt={product.name}
									loading="lazy"
									className="card-img-top"
									style={{
										objectFit: "cover",
										width: "100%",
										height: "480px",
									}}
								/>

								<div className="flex-grow-1">
									<h6 className="mb-1">{product.name}</h6>
									<p className="mb-0 text-muted" style={{ fontSize: "12px" }}>
										Rs. {product.price}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-4">
					<Link to="/products">
						<button id="btn-3" className="btn btn-outline-primary px-4 py-2">
							Explore All <i className="fas fa-arrow-right ms-2"></i>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default LatestProducts;
