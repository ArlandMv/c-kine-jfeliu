import React from 'react';

const Hero = () => {
	return (
		<section id="1hero" class="py-16 bg-white">
			<div class="flex flex-col justify-between max-w-6xl mx-auto lg:flex-row sm:px-6 lg:px-8">
				<img
					class="lg:order-2 mx-5 bg-slate-500 rounded-lg lg:w-1/2 lg:mr-8"
					width="500"
					src="./assets/working-illustration.svg"
					alt=""
				/>

				<div class="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
					<h2 class="my-6 text-lg text-blue-500 tracking-widest font-medium title-font mb-1">
						KINESIOLOGO
					</h2>
					<h1 class=" text-5xl font-semibold text-gray-800">
						José Miguel <br /> Feliú Soto
					</h1>
					<p class="w-4/6 text-lg text-gray-600">
						Descripcion corta de lo que haces.
					</p>
					<div class="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row lg:px-0">
						<a
							href="#5contact"
							class="inline-flex items-center justify-center px-6 py-3 mx-auto text-lg font-medium text-white rounded-md lg:mx-0 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
							<span>Reservar Hora</span>
							<svg
								class="w-5 h-5 ml-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</a>
						<a
							href="#"
							class="inline-flex items-center justify-center px-6 py-3 mx-auto text-lg font-medium rounded-md lg:mx-0
          text-bg-indigo-600 bg-indigo-200 hover:bg-indigo-300 hover:text-indigo-700 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-indigo-600">
							Preguntas frecuentes
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
