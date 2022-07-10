import React from 'react';

const Pricing = () => {
	return (
		<section id="4pricing" class="w-full">
			<div class="relative w-full h-full">
				<div class="max-w-6xl px-4 pb-16 mx-auto sm:px-6 md:px-8">
					<div class="relative z-30 mt-16 mb-8 text-center">
						<h2 class="mb-4 text-4xl font-medium">Simple pricing</h2>
						<p class="mb-8 text-gray-800 sm:mb-20">
							For a one-time purchase, you'll get access to lifetime releases of
							landing pages and components as we advance our theme.
						</p>
						<div class="space-y-8 md:space-y-0 md:flex md:justify-center md:space-x-10">
							<div class="flex-1 p-12 transition duration-100 ease-in-out bg-white border border-gray-100 rounded-md shadow-lg hover:-translate-y-2">
								<div>
									<h3 class="text-3xl font-bold">$5</h3>
									<p class="font-medium text-gray-600">Lifetime License</p>
								</div>
								<hr class="w-full mx-auto my-12 divider" />
								<ul class="space-y-3 text-gray-500">
									<li>For personal or commercial use</li>
									<li>Access to all updated and future releases</li>
									<li>Flexible and customizable</li>
									<li>Beautiful designs</li>
								</ul>
								<a
									href="https://flurly.com/p/tailmars"
									class="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
									Purchase Now
								</a>
							</div>
							<div class="relative flex-1 p-12 transition duration-100 ease-in-out transform border rounded-md shadow-lg md:scale-110 bg-indigo-50 border-indigo-500 hover:-translate-y-2">
								<div class="absolute top-0 px-3 py-1 text-sm tracking-tighter text-white uppercase -translate-y-1/2 rounded-full right-6 bg-indigo-600">
									Most popular
								</div>
								<div>
									<h3 class="text-3xl font-bold">$5</h3>
									<p class="font-medium text-gray-600">Lifetime License</p>
								</div>
								<hr class="w-full mx-auto my-12 divider" />
								<ul class="space-y-3 text-gray-500">
									<li>For personal or commercial use</li>
									<li>Access to all updated and future releases</li>
									<li>Flexible and customizable</li>
									<li>Beautiful designs</li>
								</ul>
								<a
									href="#"
									class="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
									Purchase Now
								</a>
							</div>
							<div class="flex-1 p-12 transition duration-100 ease-in-out bg-white border border-gray-100 rounded-md shadow-lg hover:-translate-y-2">
								<div>
									<h3 class="text-3xl font-bold">$5</h3>
									<p class="font-medium text-gray-600">Lifetime License</p>
								</div>
								<hr class="w-full mx-auto my-12 divider" />
								<ul class="space-y-3 text-gray-500">
									<li>For personal or commercial use</li>
									<li>Access to all updated and future releases</li>
									<li>Flexible and customizable</li>
									<li>Beautiful designs</li>
								</ul>
								<a
									href="#"
									class="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
									Purchase Now
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="absolute bottom-0 w-full h-1/2">
					<div class="w-full absolute top-0 transform -translate-y-1/2 skew-y-3 bg-white h-[6vw] z-10"></div>
					<div class="absolute top-0 z-0 w-full h-full bg-gray-700"></div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
