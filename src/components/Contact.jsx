import React from 'react';

const Contact = () => {
	return (
		<section id="5contact" class="w-full py-8 bg-gray-700">
			<div class="max-w-2xl px-4 mx-auto sm:px-6 md:px-8">
				<h2 class="mb-4 text-4xl font-medium text-center text-gray-100">
					Contact us
				</h2>
				<p class="mb-4 text-center text-gray-300">
					If there's something we can help you with, just let us know. We'll be
					more than happy to offer you our help
				</p>
				<form class="max-w-xl py-6 mx-auto">
					<div class="mb-4">
						<label for="name" class="text-gray-100">
							{' '}
							Name{' '}
						</label>
						<input
							type="text"
							name="name"
							id="name"
							class="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="Full Name"
						/>
					</div>
					<div class="mb-4">
						<label for="email" class="text-gray-100">
							{' '}
							Email{' '}
						</label>
						<input
							type="email"
							name="email"
							id="email"
							class="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="example@email.com"
						/>
					</div>
					<div class="mb-4">
						<label for="phone" class="text-gray-100">
							{' '}
							Phone{' '}
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							class="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="123-456-7890"
						/>
					</div>
					<div class="mb-8">
						<label for="message" class="text-gray-100">
							{' '}
							Message{' '}
						</label>
						<textarea
							name="message"
							id="message"
							class="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100"
							placeholder="Let us know how we can help you!"></textarea>
					</div>
					<button
						type="submit"
						class="flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-300 focus:border-gray-100">
						Send your message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
