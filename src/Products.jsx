import AllProducts from "./Products/AllProducts";
import Filters from "./Products/Filters";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";
import { useState, useEffect } from "react";
import { products as allProducts } from "../src/App";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Products() {
	const location = useLocation();
	const categoryFromState = location.state?.category;

	useEffect(() => {
		if (categoryFromState) {
			setFilters((prev) => ({
				...prev,
				category:
					categoryFromState.charAt(0).toUpperCase() +
					categoryFromState.slice(1),
			}));
		}
	}, [categoryFromState]);

	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get("search")?.toLowerCase() || "";

	const [filters, setFilters] = useState({
		category: "All Categories",
		priceRange: 200000,
		sortBy: "",
	});

	const applyFilters = (newFilters) => {
		setFilters(newFilters);
	};

	const clearFilters = () => {
		setFilters({
			category: "All Categories",
			priceRange: 200000,
			sortBy: "",
		});
		searchParams.delete("search");
		setSearchParams(searchParams);
	};

	let filteredProducts = allProducts
		.filter((product) => {
			const inCategory =
				filters.category === "All Categories" ||
				product.category.toLowerCase() === filters.category.toLowerCase();

			const inPriceRange = product.price <= filters.priceRange;

			return inCategory && inPriceRange;
		})
		.filter((product) => {
			return (
				product.name.toLowerCase().includes(searchTerm) ||
				product.category.toLowerCase().includes(searchTerm) ||
				product.description?.toLowerCase().includes(searchTerm)
			);
		});

	if (filters.sortBy === "loh") {
		filteredProducts.sort((a, b) => a.price - b.price);
	} else if (filters.sortBy === "hol") {
		filteredProducts.sort((a, b) => b.price - a.price);
	} else if (filters.sortBy === "rating") {
		filteredProducts.sort((a, b) => b.rating - a.rating);
	} else if (filters.sortBy === "discount") {
		filteredProducts.sort((a, b) => {
			const getPercent = (discountStr) =>
				parseInt(discountStr.replace("%", "").replace(" OFF", ""));
			return getPercent(b.discount) - getPercent(a.discount);
		});
	}

	return (
		<>
			<Header />
			<section id="products" className="container mt-5">
				<div className="row">
					<Filters applyFilters={applyFilters} clearFilters={clearFilters} />
					<AllProducts products={filteredProducts} />
				</div>
			</section>
			<Bottom />
		</>
	);
}

export default Products;
