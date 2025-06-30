import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (err) {
			setError("Invalid email or password", err);
		}
	};

	return (
		<div className="login_field">
			<input
				className="login_input-textbox"
				id="user-email"
				type="email"
				name="email"
				autoComplete="off"
				placeholder=""
			/>
			<label className="login_label" htmlFor="user-email">
				Email
			</label>
			<svg
				className="login_field-check"
				width="16px"
				height="16px"
				aria-hidden="true">
				<use href="#check" />
			</svg>
			<div className="login_error">
				<svg
					className="login_error-icon"
					width="12px"
					height="12px"
					aria-hidden="true">
					<use href="#warning" />
				</svg>
				<span id="email-error" aria-live="assertive"></span>
			</div>
		</div>
	);
}
