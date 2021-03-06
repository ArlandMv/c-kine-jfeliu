import React from 'react';

const Features = () => {
	return (
		<section
			id="3features"
			class="flex flex-col justify-center max-w-6xl px-4 pt-20 pb-24 mx-auto sm:px-6 lg:px-8">
			<div class="flex flex-col md:flex-row">
				<div class="flex flex-col flex-1 bg-white rounded-md px-2 items-center py-8 mx-4 text-center lg:items-start lg:text-left">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10 text-primary-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
					</svg>
					<h3 class="my-4 bold">característica de valor de tu servicio #1</h3>
					<p class="max-w-sm text-gray-500">Descripción</p>
				</div>
				<div class="flex flex-col flex-1 bg-white rounded-md px-2 items-center py-8 mx-4 text-center lg:items-start lg:text-left">
					<svg
						class="w-10 h-10 text-primary-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>

					<h3 class="my-4 bold uppercase">Vamos hasta tu hogar</h3>
					<p class="max-w-sm text-gray-500">
						Nuestro equipo de kinesiólogos se dirige a tu hogar ajustándonos a
						tus horarios.
					</p>
				</div>
				<div class="flex flex-col flex-1 bg-white rounded-md px-2 items-center py-8 mx-4 text-center lg:items-start lg:text-left">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10 text-primary-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
					</svg>
					<h3 class="my-4 bold uppercase">
						característica de valor de tu servicio #3
					</h3>
					<p class="max-w-sm text-gray-500"> Descripción </p>
				</div>
			</div>
		</section>
	);
};

export default Features;
