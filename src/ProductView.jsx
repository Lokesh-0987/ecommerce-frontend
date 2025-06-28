import Header from "./Home/Header";
import Bottom from "./Home/Bottom";
import Details from "./ProductsView/Details";
import Related from "./ProductsView/Related";
import { useParams } from "react-router-dom";
import { products } from "./App";
import { useEffect, useState } from "react";

function ProductView() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const found = products.find((p) => p.id === parseInt(id));
		setProduct(found);
	}, [id]);

	if (!product) return <h2>Product not found</h2>;

	return (
		<>
			<Header />
			<section id="productview" className="container mt-5">
				<Details id={id} />
				<Related id={id} category={product.category} />
			</section>
			<Bottom />
		</>
	);
}

export default ProductView;
