import React, { useEffect, useRef, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Slider = () => {

	const [currentSlide, setCurrentSlide] = useState(1);

	const slideItems = [
		{nombre: 'Midgar', fecha: '2023', categoria: 'Comercio', imagen: './bannerMidgar.png', mini: './midgarMac.png', link: 'https://midgar.artosh.dev/landing', descripcion: 'Pos de venta para el inventario de productos y facturacion de las ventas'},
		{nombre: 'LeerMangaOnline', fecha: '2024', categoria: 'Entretenimiento', imagen: './bannerLMO.png', mini: './lmoMac.png', link: '#', descripcion: 'Lector de mangas con todo tipo de obras traducidas a muchos idiomas'},
		{nombre: 'LudoNex', fecha: '2024', categoria: 'Informativa', imagen: './bannerLudonex.png', mini: './ludonexMac.png', link: 'https://ludonex.onrender.com/', descripcion: 'Landing page para la presentacion de una empresa desarrolladora de sotfware'}
	]

	const updateCurrentSlide = (index) => {
		if (currentSlide !== index) {
			setCurrentSlide(index)
		}
	};

	const nextSlide = () => {
		if (currentSlide === 2) {
			setCurrentSlide(0)
		}
		else{
			setCurrentSlide(currentSlide+1)
		}
	};



    return (
        <section className="flex flex-col items-center pb-20 bg-slate-200">
			<div className="w-[1000px] relative">
				<div className="flex overflow-hidden">
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						infiniteLoop
						showThumbs={false}
						useKeyboardArrows
						stopOnHover
						swipeable
						emulateTouch
						selectedItem={currentSlide}
						onChange={updateCurrentSlide}
					>
						{
							slideItems.map((item) => {
								return (
									<div className="h-[400px] relative">
										<img src={item.imagen} alt="lmo"/>
										<div className="absolute inset-0 bg-black opacity-20"></div>
										<div className="text-white absolute bottom-12 left-12 text-left">
											<p className="font-semibold">{item.categoria}</p>
											<p className="font-semibold">{item.fecha}</p>
											<h3 className="text-3xl pt-2 font-bold">{item.nombre}</h3>
										</div>
									</div>
								)
							})
						}
					</Carousel>
				</div>
				<div className="flex justify-between h-16 max-h-16">
					<div className="flex items-end gap-5 p-5 py-0">
						<p className="text-[14px] font-bold mb-[21px]">Detalles</p>
						<p className="text-[14px] font-semibold text-gray-500 max-w-72">{slideItems[currentSlide].descripcion}</p>
						<a className="bg-slate-700 p-2" href={slideItems[currentSlide].link} target='_blank'>
							<img src="./ph_link-bold.png" alt="link"/>
						</a>
					</div>

					<div className="flex cursor-pointer">
						<img className="h-24 min-h-24 w-40 -mt-8 z-10" alt="miniatura"
						 src={currentSlide === 2 ? slideItems[0].mini : slideItems[currentSlide+1].mini}/>
						<div className="flex items-center justify-between w-56 max-w-56 px-4 bg-white cursor-pointer" onClick={nextSlide}>
							<div className="flex gap-3 font-semibold text-gray-500">
								<p>0{currentSlide + 1}</p>
								<p>{currentSlide === 2 ? slideItems[0].nombre : slideItems[currentSlide+1].nombre}</p>
							</div>
							<img src="./ep_arrow-bold.png" alt="siguiente"/>
						</div>
					</div>
				</div>
			</div>
		</section>
    )

}

export default Slider