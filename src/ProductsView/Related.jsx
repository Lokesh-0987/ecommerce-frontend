<<<<<<< HEAD
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
									src={`/images/${item.id}-768.webp`}
									srcSet={`
    /images/${item.id}-480.webp 480w,
    /images/${item.id}-768.webp 768w,
    /images/${item.id}-1200.webp 1200w
  `}
									className="card-img-top"
									alt={item.name}
									loading="lazy"
									sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
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
=======
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
									src={`/images/${item.id}-768.webp`}
									srcSet={`
    /images/${item.id}-480.webp 480w,
    /images/${item.id}-768.webp 768w,
    /images/${item.id}-1200.webp 1200w
  `}
									className="card-img-top"
									alt={item.name}
									loading="lazy"
									sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
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
>>>>>>> 948b88f (Add .env setup and update .gitignore)
