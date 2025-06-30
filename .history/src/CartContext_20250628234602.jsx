import React, { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const storedCart = localStorage.getItem("cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);
	const addToCart = (product) => {
		setCart((prevCart) => {
			const exists = prevCart.find((item) => item.id === product.id);
			if (exists) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
	};
	const handleAddToCart = (product) => {
		if (!currentUser) {
			toast.warning("Please login to add items to cart");
			navigate("/login");
			return;
		}

		// Proceed to add to cart
		addToCart(product);
	};
	const removeFromCart = (productId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	};
	const updateQuantity = (productId, change) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === productId
					? {
							...item,
							quantity: Math.min(10, Math.max(1, item.quantity + change)),
					  }
					: item
			)
		);
	};
	const clearCart = () => setCart([]);
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};
