import WishListCard from "./WishList/WishListCard";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";

function WishList() {
	return (
		<>
			<Header />
			<section>
				<WishListCard />
			</section>
			<Bottom />
		</>
	);
}
export default WishList;
