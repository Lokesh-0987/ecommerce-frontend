import React, { useState, useEffect } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
// import "./login.css";

export default function Login() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerName, setRegisterName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			navigate("/");
		} catch (err) {
			setError("Login failed: " + err.message);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			navigate("/");
		} catch (err) {
			setError("Registration failed: " + err.message);
		}
	};

	useEffect(() => {
		const container = document.getElementById("container");
		if (container) {
			if (isSignUp) container.classList.add("right-panel-active");
			else container.classList.remove("right-panel-active");
		}
	}, [isSignUp]);

	return (
		<div className="container" id="login">
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
					<a href="#" className="forgot-password">
						Forgot Password?
					</a>
					<button type="submit" className="form-button">
						Login
					</button>
					<span>or login with social platforms</span>
					<div className="social-icons">
						<a href="#" className="social">
							<i className="fab fa-google"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-github"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</form>
			</div>

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
					<span>or register with social platforms</span>
					<div className="social-icons">
						<a href="#" className="social">
							<i className="fab fa-google"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-github"></i>
						</a>
						<a href="#" className="social">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</form>
			</div>

			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>Already have an account?</p>
						<button
							className="ghost"
							id="signIn"
							onClick={() => setIsSignUp(false)}>
							Login
						</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>Hello, Welcome!</h1>
						<p>Don't have an account?</p>
						<button
							className="ghost"
							id="signUp"
							onClick={() => setIsSignUp(true)}>
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
	);
}
