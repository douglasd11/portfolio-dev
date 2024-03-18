import React, { useEffect, useRef, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {

	const [currentSlide, setCurrentSlide] = useState(1)

	const [filled, setFilled] = useState(0)
	const [timer, setTimer] = useState(0)


	useEffect(() => {
		setFilled(100)
		setTimer(6)
	}, [filled])


	const slideItems = [
		{nombre: 'Midgar', fecha: '2023', categoria: 'Comercio', imagen: './bannerMidgar.png', mini: './midgarMac.png', link: 'https://midgar.artosh.dev/landing', descripcion: 'Pos de venta para el inventario de productos y facturacion de las ventas'},
		{nombre: 'LeerMangaOnline', fecha: '2024', categoria: 'Entretenimiento', imagen: './bannerLMO.png', mini: './lmoMac.png', link: '#', descripcion: 'Lector de mangas con todo tipo de obras traducidas a muchos idiomas'},
		{nombre: 'LudoNex', fecha: '2024', categoria: 'Informativa', imagen: './bannerLudonex.png', mini: './ludonexMac.png', link: 'https://ludonex.onrender.com/', descripcion: 'Landing page para la presentacion de una empresa desarrolladora de sotfware'}
	]

	const updateCurrentSlide = (index) => {
		if (currentSlide !== index) {
			setCurrentSlide(index)

			setFilled(0)
			setTimer(0)
		}
	};

	const nextSlide = () => {
		if (currentSlide === 2) {
			setCurrentSlide(0)
		}
		else{
			setCurrentSlide(currentSlide+1)
		}
		setFilled(0)
		setTimer(0)
	};

	const beforeSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(2)
		}
		else{
			setCurrentSlide(currentSlide-1)
		}
		setFilled(0)
		setTimer(0)
	};

    return (
        <section className="flex flex-col items-center pb-20 bg-slate-200 max-md:pb-0">
			<div className="w-[1000px] relative max-xl:w-auto">
				<div className="flex overflow-hidden">
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						infiniteLoop
						showThumbs={false}
						useKeyboardArrows
						stopOnHover
						autoPlay
						interval={6000}
						swipeable
						emulateTouch
						selectedItem={currentSlide}
						onChange={updateCurrentSlide}
					>
						{
							slideItems.map((item) => {
								return (
									<div className="h-[400px] relative">
										<img className='max-sm:h-full max-sm:object-cover' src={item.imagen} alt="lmo"/>
										<div className="absolute inset-0 bg-black opacity-30"></div>
										<div className="flex flex-col text-white absolute bottom-16 left-16 text-left max-md:bottom-10 max-md:left-10">
											<p className="font-semibold">{item.categoria}</p>
											<p className="font-semibold">{item.fecha}</p>
											<h3 className="text-4xl pt-2 font-bold max-md:text-3xl">{item.nombre}</h3>
										</div>
										<a className="hidden bg-slate-400 absolute bottom-10 right-10 p-2 h-10 w-10 mt-3 bg-opacity-60 max-md:flex" href={slideItems[currentSlide].link} target='_blank'>
											<img className="" src="./ph_link-bold.png" alt="link"/>
										</a>
									</div>
								)
							})
						}
					</Carousel>
				</div>
				<div className="flex justify-between h-16 max-h-16">
					<div className="flex items-end gap-5 p-5 py-0 max-md:hidden">
						<p className="text-[14px] font-bold mb-[21px]">Detalles</p>
						<p className="text-[14px] font-semibold text-gray-500 max-w-72">{slideItems[currentSlide].descripcion}</p>
						<a className="bg-slate-700 p-2" href={slideItems[currentSlide].link} target='_blank'>
							<img src="./ph_link-bold.png" alt="link"/>
						</a>
					</div>

					<div className='flex flex-col max-md:w-full'>

						<div className="flex cursor-pointer max-md:hidden">
							<img className="h-24 min-h-24 w-40 -mt-8 z-10" alt="miniatura"
							src={currentSlide === 2 ? slideItems[0].mini : slideItems[currentSlide+1].mini}/>
							<div className="flex items-center justify-between w-56 max-w-56 px-5 bg-white cursor-pointer" onClick={nextSlide}>
								<div className="flex gap-3 font-semibold text-gray-500 text-base">
									{/* <p>0{currentSlide + 1}</p> */}
									<p>{currentSlide === 2 ? slideItems[0].nombre : slideItems[currentSlide+1].nombre}</p>
								</div>
								{/* <img src="./ep_arrow-bold.png" alt="siguiente"/> */}
							</div>
						</div>

						<div className='flex justify-between w-full h-full px-4 my-4 max-sm:px-6'>
							<div className='flex items-center gap-5 font-semibold'>
								<div>
									<p>0{currentSlide == 0 ? slideItems.length: currentSlide}</p>
								</div>
								<div>
									<div className='w-40 h-1 bg-slate-300'>
										<div style={{
											height: "100%",
											width: `${filled}%`,
											backgroundColor: "#a66cff",
											transition: `width ${timer}s linear`
										}}
										></div>
									</div>
								</div>
								<div>
									<p>0{currentSlide + 1}</p>
								</div>
							</div>
							<div className='flex items-center gap-8'>
								<div className='flex justify-center items-center cursor-pointer w-7 h-7 rounded-full hover:bg-slate-300 transition-all' onClick={beforeSlide}>
									<img className='scale-[-1]' src="./ep_arrow-bold.png" alt="arrow"/>
								</div>
								<div className='flex justify-center items-center cursor-pointer w-7 h-7 rounded-full hover:bg-slate-300 transition-all' onClick={nextSlide}>
									<img src="./ep_arrow-bold.png" alt="arrow"/>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
    )

}

export default Slider