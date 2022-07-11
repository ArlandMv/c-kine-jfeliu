import React from 'react';

const Contact = () => {
	return (
		<section id="5contact" className="w-full py-8 bg-gray-700">
			<div className="max-w-2xl px-4 mx-auto sm:px-6 md:px-8">
				<h2 className="mb-4 text-4xl font-medium text-center text-gray-100">
					Contact us
				</h2>
				<p className="mb-4 text-center text-gray-300">
					If there's something we can help you with, just let us know. We'll be
					more than happy to offer you our help
				</p>
				<form
					name="contact"
					method="POST"
					netlify
					onSubmit="submit"
					data-netlify-honeypot="important"
					className="max-w-xl py-6 mx-auto">
					{/* <!-- action="/success/" success.html --> */}
					<input className="d-none" name="important" />
					<input
						type="hidden"
						className="d-none"
						name="subject"
						value="Formulario de Contacto from jose-feliu.netlify.app "
					/>
					<div className="mb-4">
						<label for="name" className="text-gray-100">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="Full Name"
						/>
					</div>
					<div className="mb-4">
						<label for="email" className="text-gray-100">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="example@email.com"
						/>
					</div>
					<div className="mb-4">
						<label for="phone" className="text-gray-100">
							Phone
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="123-456-7890"
						/>
					</div>
					<div className="mb-8">
						<label for="message" className="text-gray-100">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="Let us know how we can help you!"></textarea>
					</div>
					<button
						type="submit"
						className="flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100">
						Send your message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
