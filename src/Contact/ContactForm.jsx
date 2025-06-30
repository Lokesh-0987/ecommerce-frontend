<<<<<<< HEAD
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.subject || !form.message) {
			toast.error("Please fill out all fields.", { position: "top-center" });
			return;
		}
		toast.success("Your response is submitted", {
			position: "top-center",
			autoClose: 2000,
		});

		setForm({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<>
			<div className="card p-4 shadow">
				<h2 className="mb-4">Get in Touch</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="form-control"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="form-control"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="subject" className="form-label">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							className="form-control"
							value={form.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">
							Message
						</label>
						<textarea
							id="message"
							className="form-control"
							rows="4"
							value={form.message}
							onChange={handleChange}
							required></textarea>
					</div>
					<button id="btn-3" type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
			<ToastContainer />
		</>
	);
}

export default ContactForm;
=======
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.subject || !form.message) {
			toast.error("Please fill out all fields.", { position: "top-center" });
			return;
		}
		toast.success("Your response is submitted", {
			position: "top-center",
			autoClose: 2000,
		});

		setForm({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<>
			<div className="card p-4 shadow">
				<h2 className="mb-4">Get in Touch</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="form-control"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="form-control"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="subject" className="form-label">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							className="form-control"
							value={form.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">
							Message
						</label>
						<textarea
							id="message"
							className="form-control"
							rows="4"
							value={form.message}
							onChange={handleChange}
							required></textarea>
					</div>
					<button id="btn-3" type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
			<ToastContainer />
		</>
	);
}

export default ContactForm;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
