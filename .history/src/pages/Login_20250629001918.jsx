import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "../firebase"; // Adjust if needed

export default function Login() {
	const [isSignup, setIsSignup] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (isSignup) {
			if (password !== confirmPassword) {
				return setError("Passwords do not match");
			}
			if (password.length < 8) {
				return setError("Password too weak (minimum 8 characters)");
			}
			try {
				const userCred = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				await updateProfile(userCred.user, {
					displayName: name,
				});
				navigate("/");
			} catch (err) {
				setError(err.message);
			}
		} else {
			try {
				await signInWithEmailAndPassword(auth, email, password);
				navigate("/");
			} catch (err) {
				setError("Invalid email or password");
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{isSignup && (
				<div className="login_field">
					<input
						className="login_input-textbox"
						id="full-name"
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete="off"
						placeholder=""
						required
					/>
					<label className="login_label" htmlFor="full-name">
						Full Name
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
						<span aria-live="assertive">{error && " "}</span>
					</div>
				</div>
			)}

			<div className="login_field">
				<input
					className="login_input-textbox"
					id="user-email"
					type="email"
					name="email"
					autoComplete="off"
					placeholder=""
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
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
					<span id="email-error" aria-live="assertive">
						{error && " "}
					</span>
				</div>
			</div>

			<div className="login_field">
				<input
					className="login_input-textbox"
					id="user-password"
					type="password"
					name="password"
					autoComplete="off"
					placeholder=""
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<label className="login_label" htmlFor="user-password">
					Password
				</label>
				<svg
					className="login_field-check"
					width="16px"
					height="16px"
					aria-hidden="true">
					<use href="#check" />
				</svg>
			</div>

			{isSignup && (
				<div className="login_field">
					<input
						className="login_input-textbox"
						id="confirm-password"
						type="password"
						name="confirmPassword"
						autoComplete="off"
						placeholder=""
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					<label className="login_label" htmlFor="confirm-password">
						Confirm Password
					</label>
					<svg
						className="login_field-check"
						width="16px"
						height="16px"
						aria-hidden="true">
						<use href="#check" />
					</svg>
				</div>
			)}

			{error && <p className="text-danger">{error}</p>}

			<button type="submit">{isSignup ? "Sign Up" : "Login"}</button>

			<p className="mt-3">
				{isSignup ? (
					<>
						Already have an account?{" "}
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setIsSignup(false);
							}}>
							Login
						</a>
					</>
				) : (
					<>
						Don’t have an account?{" "}
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setIsSignup(true);
							}}>
							Sign Up
						</a>
						<br />
						<a href="#">Forgot Password?</a>
					</>
				)}
			</p>
		</form>
	);
}
