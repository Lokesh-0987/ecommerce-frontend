import Header from "./Home/Header";
import Sliders from "./Home/Sliders";
import ShopByCategory from "./Home/ShopByCategory";
import LatestProducts from "./Home/LatestProducts";
import Features from "./Home/Features";
import Bottom from "./Home/Bottom";

function Home() {
	return (
		<>
			<Header />
			<Sliders />
			<ShopByCategory />
			<LatestProducts />
			<Features />
			<Bottom />
		</>
	);
}

export default Home;
