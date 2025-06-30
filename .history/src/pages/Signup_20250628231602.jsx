import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) return setError("Passwords do not match");
		if (password.length < 8) return setError("Password too weak");

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
		await updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	return (
		<form onSubmit={handleSignup}>
			<input
				type="text"
				placeholder="Full Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Confirm Password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				required
			/>
			{error && <p>{error}</p>}
			<button type="submit">Sign Up</button>
			<p>
				Already have an account? <a href="/login">Login</a>
			</p>
		</form>
	);
}
