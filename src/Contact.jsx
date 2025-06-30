import ContactForm from "./Contact/ContactForm";
import Info from "./Contact/Info";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";

function Contact() {
	return (
		<>
			<Header />
			<section className="container my-5">
				<div className="row">
					<div className="col-12 col-md-7">
						<ContactForm />
					</div>
					<div className="col-12 col-md-5">
						<Info />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}
export default Contact;
