import { createContext, useContext, useState } from "react";

const WishListContext = createContext();
export const WishListProvider = ({ children }) => {
	const [wishList, setWishList] = useState([]);
	const addToWishList = (product) => {
		setWishList((prevWishList) => {
			const exists = prevWishList.find((item) => item.id === product.id);
			if (exists) {
				return prevWishList.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevWishList, { ...product, quantity: 1 }];
			}
		});
	};
	const removeFromWishList = (productId) => {
		setWishList((prevWishList) =>
			prevWishList.filter((item) => item.id !== productId)
		);
	};
	const totalWishListQuantity = wishList.reduce(
		(acc, item) => acc + item.quantity,
		0
	);
	return (
		<WishListContext.Provider
			value={{
				wishList,
				addToWishList,
				removeFromWishList,
				totalWishListQuantity,
			}}>
			{children}
		</WishListContext.Provider>
	);
};

export const useWishList = () => useContext(WishListContext);
