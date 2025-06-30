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
		<>
		<div class="login_field">
    <input class="login_input-textbox"
           id="user-email" type="email"
           name="email" autocomplete="off"
           placeholder="">
    <label class="login_label"
           for="user-email">Email</label>
    <svg class="login_field-check"
         width="16px" height="16px"
         aria-hidden="true">
        <use href="#check" />
    </svg>
    <div class="login_error">
        <svg class="login_error-icon"
             width="12px" height="12px"
             aria-hidden="true">
            <use href="#warning" />
        </svg>
        <span id="email-error"
              aria-live="assertive"></span>
    </div>
</div>
</>
	);
}
