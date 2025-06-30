import { CartProvider } from "./CartContext";
import { createRoot } from "react-dom/client";
import { WishListProvider } from "./WishListContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<CartProvider>
			<WishListProvider>
				<App />
			</WishListProvider>
		</CartProvider>
	</AuthProvider>
);
