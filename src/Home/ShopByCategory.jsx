<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
function ShopByCategory() {
	const navigate = useNavigate();

	const handleCategoryClick = (category) => {
		navigate("/products", { state: { category } });
	};
	return (
		<section id="category" className="py-5 bg-light">
			<div className="container">
				<h2 className="mb-4 text-center">Shop By Categories</h2>
				<div className="row">
					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("electronics")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-laptop fa-3x mb-3 text-primary"></i>
								<h5 className="card-title">Electronics</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("clothing")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-tshirt fa-3x mb-3 text-success"></i>
								<h5 className="card-title">Clothing</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("furniture")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-couch fa-3x mb-3 text-warning"></i>
								<h5 className="card-title">Furniture</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("footwear")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-shoe-prints fa-3x mb-3 text-danger"></i>
								<h5 className="card-title">Footwear</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("books")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-book fa-3x mb-3 text-info"></i>
								<h5 className="card-title">Books</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("health")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-heartbeat fa-3x mb-3 text-danger"></i>
								<h5 className="card-title">Health</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShopByCategory;
=======
import { useNavigate } from "react-router-dom";
function ShopByCategory() {
	const navigate = useNavigate();

	const handleCategoryClick = (category) => {
		navigate("/products", { state: { category } });
	};
	return (
		<section id="category" className="py-5 bg-light">
			<div className="container">
				<h2 className="mb-4 text-center">Shop By Categories</h2>
				<div className="row">
					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("electronics")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-laptop fa-3x mb-3 text-primary"></i>
								<h5 className="card-title">Electronics</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("clothing")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-tshirt fa-3x mb-3 text-success"></i>
								<h5 className="card-title">Clothing</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("furniture")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-couch fa-3x mb-3 text-warning"></i>
								<h5 className="card-title">Furniture</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("footwear")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-shoe-prints fa-3x mb-3 text-danger"></i>
								<h5 className="card-title">Footwear</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("books")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-book fa-3x mb-3 text-info"></i>
								<h5 className="card-title">Books</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>

					<div
						className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
						style={{ cursor: "pointer" }}
						onClick={() => handleCategoryClick("health")}>
						<div className="card text-center h-100 shadow-sm">
							<div className="card-body">
								<i className="fas fa-heartbeat fa-3x mb-3 text-danger"></i>
								<h5 className="card-title">Health</h5>
								<p className="card-text">10 products</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShopByCategory;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
