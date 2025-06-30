<<<<<<< HEAD
import React, { useState } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerName, setRegisterName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [error] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			navigate("/");
		} catch (err) {
			if (err.code === "auth/user-not-found") {
				toast.error("User not found. Please register first.");
			} else if (err.code === "auth/wrong-password") {
				toast.error("Incorrect password. Reset it if you've forgotten.");
			} else {
				toast.error("User not found. Please register first.");
			}
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			await updateProfile(userCredential.user, {
				displayName: registerName,
			});
			navigate("/");
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				toast.error("Already a user. Please login.");
			} else {
				toast.error("Registration failed: " + err.message);
			}
		}
	};

	const handleForgotPassword = async () => {
		if (!loginEmail) {
			toast.info("Please enter your email to reset password.");
			return;
		}
		try {
			await sendPasswordResetEmail(auth, loginEmail);
			toast.success("Password reset email sent. Check your inbox.");
		} catch (err) {
			toast.error("Error sending reset email: " + err.message);
		}
	};

	return (
		<div id="login">
			<div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
				{/* Sign In Form */}
				<div className="form-container sign-in-container">
					<form onSubmit={handleLogin}>
						<h1>Login</h1>
						<div className="input-group">
							<input
								type="email"
								placeholder="Email"
								value={loginEmail}
								onChange={(e) => setLoginEmail(e.target.value)}
								required
							/>
							<i className="fas fa-user"></i>
						</div>
						<div className="input-group">
							<input
								type="password"
								placeholder="Password"
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
								required
							/>
							<i className="fas fa-lock"></i>
						</div>
						<a
							href="#"
							className="forgot-password"
							onClick={handleForgotPassword}>
							Forgot Password?
						</a>
						<button type="submit" className="form-button">
							Login
						</button>
					</form>
				</div>

				{/* Sign Up Form */}
				<div className="form-container sign-up-container">
					<form onSubmit={handleRegister}>
						<h1>Registration</h1>
						<div className="input-group">
							<input
								type="text"
								placeholder="Username"
								value={registerName}
								onChange={(e) => setRegisterName(e.target.value)}
								required
							/>
							<i className="fas fa-user"></i>
						</div>
						<div className="input-group">
							<input
								type="email"
								placeholder="Email"
								value={registerEmail}
								onChange={(e) => setRegisterEmail(e.target.value)}
								required
							/>
							<i className="fas fa-envelope"></i>
						</div>
						<div className="input-group">
							<input
								type="password"
								placeholder="Password"
								value={registerPassword}
								onChange={(e) => setRegisterPassword(e.target.value)}
								required
							/>
							<i className="fas fa-lock"></i>
						</div>
						<button type="submit" className="form-button">
							Register
						</button>
					</form>
				</div>

				{/* Overlay Panel */}
				<div className="overlay-container">
					<div className="overlay">
						{/* Left side for Register -> go to Login */}
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>Already have an account?</p>
							<button
								className="ghost"
								onClick={() => setIsSignUp((prev) => !prev)}>
								Login
							</button>
						</div>

						{/* Right side for Login -> go to Register */}
						<div className="overlay-panel overlay-right">
							<h1>Hello, Welcome!</h1>
							<p>Don't have an account?</p>
							<button
								className="ghost"
								onClick={() => setIsSignUp((prev) => !prev)}>
								Register
							</button>
						</div>
					</div>
				</div>

				{error && (
					<div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
						{error}
					</div>
				)}
			</div>
		</div>
	);
}
=======
import React, { useState } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerName, setRegisterName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [error] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			navigate("/");
		} catch (err) {
			if (err.code === "auth/user-not-found") {
				toast.error("User not found. Please register first.");
			} else if (err.code === "auth/wrong-password") {
				toast.error("Incorrect password. Reset it if you've forgotten.");
			} else {
				toast.error("User not found. Please register first.");
			}
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			await updateProfile(userCredential.user, {
				displayName: registerName,
			});
			navigate("/");
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				toast.error("Already a user. Please login.");
			} else {
				toast.error("Registration failed: " + err.message);
			}
		}
	};

	const handleForgotPassword = async () => {
		if (!loginEmail) {
			toast.info("Please enter your email to reset password.");
			return;
		}
		try {
			await sendPasswordResetEmail(auth, loginEmail);
			toast.success("Password reset email sent. Check your inbox.");
		} catch (err) {
			toast.error("Error sending reset email: " + err.message);
		}
	};

	return (
		<div id="login">
			<div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
				{/* Sign In Form */}
				<div className="form-container sign-in-container">
					<form onSubmit={handleLogin}>
						<h1>Login</h1>
						<div className="input-group">
							<input
								type="email"
								placeholder="Email"
								value={loginEmail}
								onChange={(e) => setLoginEmail(e.target.value)}
								required
							/>
							<i className="fas fa-user"></i>
						</div>
						<div className="input-group">
							<input
								type="password"
								placeholder="Password"
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
								required
							/>
							<i className="fas fa-lock"></i>
						</div>
						<a
							href="#"
							className="forgot-password"
							onClick={handleForgotPassword}>
							Forgot Password?
						</a>
						<button type="submit" className="form-button">
							Login
						</button>
					</form>
				</div>

				{/* Sign Up Form */}
				<div className="form-container sign-up-container">
					<form onSubmit={handleRegister}>
						<h1>Registration</h1>
						<div className="input-group">
							<input
								type="text"
								placeholder="Username"
								value={registerName}
								onChange={(e) => setRegisterName(e.target.value)}
								required
							/>
							<i className="fas fa-user"></i>
						</div>
						<div className="input-group">
							<input
								type="email"
								placeholder="Email"
								value={registerEmail}
								onChange={(e) => setRegisterEmail(e.target.value)}
								required
							/>
							<i className="fas fa-envelope"></i>
						</div>
						<div className="input-group">
							<input
								type="password"
								placeholder="Password"
								value={registerPassword}
								onChange={(e) => setRegisterPassword(e.target.value)}
								required
							/>
							<i className="fas fa-lock"></i>
						</div>
						<button type="submit" className="form-button">
							Register
						</button>
					</form>
				</div>

				{/* Overlay Panel */}
				<div className="overlay-container">
					<div className="overlay">
						{/* Left side for Register -> go to Login */}
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>Already have an account?</p>
							<button
								className="ghost"
								onClick={() => setIsSignUp((prev) => !prev)}>
								Login
							</button>
						</div>

						{/* Right side for Login -> go to Register */}
						<div className="overlay-panel overlay-right">
							<h1>Hello, Welcome!</h1>
							<p>Don't have an account?</p>
							<button
								className="ghost"
								onClick={() => setIsSignUp((prev) => !prev)}>
								Register
							</button>
						</div>
					</div>
				</div>

				{error && (
					<div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
						{error}
					</div>
				)}
			</div>
		</div>
	);
}
>>>>>>> 948b88f (Add .env setup and update .gitignore)
