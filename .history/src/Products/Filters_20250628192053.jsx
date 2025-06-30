import { useState } from "react";

function Filters({ applyFilters, clearFilters }) {
	const [selectedCategory, setSelectedCategory] = useState("All Categories");
	const [priceRange, setPriceRange] = useState(200000);
	const [sortBy, setSortBy] = useState("");

	const handleApplyFilters = () => {
		applyFilters({
			category: selectedCategory,
			priceRange: priceRange,
			sortBy: sortBy,
		});
	};

	const handleClearFilters = () => {
		setSelectedCategory("All Categories");
		setPriceRange(200000);
		setSortBy("");
		clearFilters();
	};

	const categories = [
		"All Categories",
		"Electronics",
		"Clothing",
		"Furniture",
		"Footwear",
		"Books",
		"Health",
	];

	return (
		<div id="filters" className="col-12 col-lg-3 mb-4 pe-lg-4">
			<div className="card shadow-sm">
				<div className="card-body">
					<h3 className="card-title">Filters</h3>
					<hr />

					<div className="mb-4">
						<h5>Category</h5>
						{categories.map((category, index) => (
							<div className="form-check" key={index}>
								<input
									type="radio"
									id={category.toLowerCase().replace(" ", "-")}
									className="form-check-input"
									name="category"
									checked={selectedCategory === category.toLowerCase()}
									onChange={() => setSelectedCategory(category.toLowerCase())}
								/>
								<label
									htmlFor={category.toLowerCase().replace(" ", "-")}
									className="form-check-label">
									{category}
								</label>
							</div>
						))}
					</div>

					<div className="mb-4">
						<h5>Price Range: ₹{priceRange}</h5>
						<input
							type="range"
							className="form-range w-100"
							min="0"
							max="200000"
							step="100"
							id="price-range"
							value={priceRange}
							onChange={(e) => setPriceRange(Number(e.target.value))}
						/>
						<label htmlFor="price-range" className="form-text">
							Adjust price range
						</label>
					</div>

					<div className="mb-4">
						<h5>Sort By</h5>
						<select
							className="form-control"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}>
							<option value="">Default</option>
							<option value="loh">Price: Low to High</option>
							<option value="hol">Price: High to Low</option>
							<option value="rating">Rating</option>
							<option value="discount">Discount</option>
						</select>
					</div>

					<div className="d-flex gap-2">
						<button
							className="btn mt-3 p-2 flex-fill"
							onClick={handleApplyFilters}>
							Apply Filters
						</button>
						<button
							id="filters"
							className="btn mt-3 p-2 flex-fill"
							onClick={handleClearFilters}>
							Clear Filters
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filters;
