import { products } from "../App.js";
import { Link } from "react-router-dom";

function Related({ id, category }) {
	const relatedProducts = products.filter(
		(p) => p.category === category && p.id !== parseInt(id)
	);
	return (
		<div id="related" className="mb-5">
			<h2 className="mb-4">Related Products</h2>
			<div className="row">
				{relatedProducts.slice(0, 3).map((item) => (
					<div className="col-12 col-sm-6 col-md-4 mb-3" key={item.id}>
						<Link to={`/product/${item.id}`}>
							<div className="card h-150 shadow-sm">
								<img
									src={item.image}
									className="card-img-top"
									alt={item.name}
									style={{ objectFit: "cover", height: "350px" }}
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Related;
