import React from 'react';

const Services = () => {
	return (
		<section
			id="2service-about"
			class="flex flex-col max-w-5xl px-4 mx-auto mt-16 sm:px-8">
			<div class="flex flex-col flex-1 sm:flex-row sm:justify-between">
				<div class="flex flex-col items-start justify-center px-4 pb-8 sm:pr-0 sm:w-1/2 sm:order-2">
					<h3 class="mb-4 ml-2 text-4xl bold">
						Atención Kinesiológica Integral a Domicilio{' '}
					</h3>
					<p class="max-w-md ml-2 text-xl text-gray-600">
						(Texto argumentativo para vender tus sevicios.. ) Contactame para..
						blabla blablabla bla
						<br /> Si quieres saber mas de mi..
					</p>
					<a href="#" class="flex justify-center mt-4">
						<div class="relative ml-2 tracking-wider text-center duration-150 ease-in-out border-b-4 cursor-pointer text-indigo-600 border-indigo-600 hover:text-indigo-700 hover:border-indigo-700 transision-all hover:px-2 hover:ml-0">
							Conoceme mejor
						</div>
					</a>
				</div>
				<div class="flex flex-row justify-center w-full max-w-md gap-4 mx-auto sm:w-1/2 sm:mx-0">
					<div class="flex flex-col flex-1 gap-4 pt-12 sm:pt-24">
						<div class="w-full h-full aspect-w-1 aspect-h-1">
							<img
								src="https://source.unsplash.com/tNCH0sKSZbA"
								alt=""
								class="object-cover object-center rounded-md"
							/>
						</div>
						<div class="w-full h-full aspect-w-1 aspect-h-1">
							<img
								src="https://source.unsplash.com/YUu9UAcOKZ4"
								alt=""
								class="object-cover object-center rounded-md"
							/>
						</div>
					</div>
					<div class="flex flex-col flex-1 gap-4 pb-12 sm:pb-24">
						<div class="w-full h-full aspect-w-1 aspect-h-1">
							<img
								src="https://source.unsplash.com/m8uLhKTiL8Y"
								alt=""
								class="object-cover object-center rounded-md"
							/>
						</div>
						<div class="w-full h-full aspect-w-1 aspect-h-1">
							<img
								src="https://source.unsplash.com/DZ0WPLmvK_c"
								alt=""
								class="object-cover object-center rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
