import { CartProvider } from "./CartContext";
import { createRoot } from "react-dom/client";
import { WishListProvider } from "./WishListContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<CartProvider>
		<WishListProvider>
			<App />
		</WishListProvider>
	</CartProvider>
);
