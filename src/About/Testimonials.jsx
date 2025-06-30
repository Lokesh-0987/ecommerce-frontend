import React from "react";

function Testimonials() {
	const testimonials = [
		{
			name: "Jane Doe",
			image: "janedoe",
			text: `"Vedhika is one of the smoothest shopping sites I've used! The interface is clean, loading time is super fast, and I love how easy it is to find what I need. Logging in and managing my wishlist is seamless. I also appreciate the quick redirects and secure checkout. Highly recommended!"`,
		},
		{
			name: "John Smith",
			image: "johnsmith",
			text: `"Great experience overall! The website is very responsive and works well on my phone and laptop. I like how the product images load quickly, and the product details are clear. It would be nice to see more filter options, but everything else works flawlessly. Will definitely shop here again!"`,
		},
		{
			name: "Ayesha Khan",
			image: "ayeshakhan",
			text: `"Vedhika has made online shopping so enjoyable. I felt the design was very modern and user-friendly. The login/signup process was quick, and I liked the profile features like the wishlist and logout dropdown. The toast notifications were a nice touch. Everything felt polished and professional!"`,
		},
	];
	return (
		<div id="testimonials" className="container my-5">
			<h2 className="text-center mb-4">Customer Testimonials</h2>
			<div className="row g-4">
				{testimonials.map((t, index) => (
					<div className="col-12 col-md-6 col-lg-4" key={index}>
						<div className="card h-100 shadow text-center p-3">
							<img
								src={`/images/${t.image}-768.webp`}
								srcSet={`
    /images/${t.image}-480.webp 480w,
    /images/${t.image}-768.webp 768w,
    /images/${t.image}-1200.webp 1200w
  `}
								alt={t.name}
								className="rounded-circle mx-auto mb-3"
								loading="lazy"
								sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
								style={{ width: "100px", height: "100px", objectFit: "cover" }}
							/>
							<h5 className="mt-2 card-title">{t.name}</h5>
							<p
								className="text-muted small text-left"
								style={{ whiteSpace: "pre-line" }}>
								{t.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Testimonials;
