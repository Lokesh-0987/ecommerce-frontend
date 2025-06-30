<<<<<<< HEAD
import AboutImage from "./About/AboutImage";
import Description from "./About/Description";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";
import Testimonials from "./About/Testimonials";

function About() {
	return (
		<>
			<Header />
			<section>
				<div className="container my-5">
					<div className="row align-items-center">
						<AboutImage />
						<Description />
						<Testimonials />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}
export default About;
=======
import AboutImage from "./About/AboutImage";
import Description from "./About/Description";
import Bottom from "./Home/Bottom";
import Header from "./Home/Header";
import Testimonials from "./About/Testimonials";

function About() {
	return (
		<>
			<Header />
			<section>
				<div className="container my-5">
					<div className="row align-items-center">
						<AboutImage />
						<Description />
						<Testimonials />
					</div>
				</div>
			</section>
			<Bottom />
		</>
	);
}
export default About;
>>>>>>> 948b88f (Add .env setup and update .gitignore)
