import React from "react";

function Testimonials() {
	const testimonials = [
		{
			name: "Jane Doe",
			image: "vite.svg",
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque et urna a nisi convallis placerat. 
      Curabitur ut turpis vel nulla dapibus eleifend. 
      Duis eu justo nec sapien fermentum vestibulum. 
      Praesent nec velit a nisl dignissim feugiat. 
      Integer vel nibh a ligula consequat iaculis. 
      Sed aliquam justo ut nunc posuere cursus. 
      Phasellus nec eros id diam varius dapibus. 
      Nullam nec magna in ex luctus pharetra. 
      Vivamus et nisi non elit finibus faucibus.`,
		},
		{
			name: "John Smith",
			image: "vite.svg",
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Reprehenderit, autem fugiat? Suscipit, voluptatum alias. 
      Est provident perferendis at officia. 
      Obcaecati, modi reprehenderit. Quia mollitia rerum. 
      Tempore aliquid molestiae sit in! 
      Autem sapiente quibusdam voluptas officia dolore velit. 
      Totam, quam aliquam. Eveniet magnam! 
      Iusto repellendus sit temporibus?`,
		},
		{
			name: "Ayesha Khan",
			image: "vite.svg",
			text: `Quisquam dolore expedita nobis optio! 
      Facilis explicabo, pariatur deserunt voluptas mollitia dignissimos? 
      Eveniet ullam nostrum libero illum dolorem voluptatum aliquid. 
      Harum consequatur optio culpa doloremque. 
      Maxime veniam accusamus assumenda tempora. 
      Qui laborum perspiciatis tempore. 
      Voluptatum, porro. Adipisci, id reprehenderit. 
      Tempora labore ea necessitatibus doloribus.`,
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
								src={t.image}
								alt={t.name}
								className="rounded-circle mx-auto mb-3"
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
