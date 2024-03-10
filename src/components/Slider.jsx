import React, { useEffect, useRef, useState } from 'react'

const Slider = () => {

    const [isDrag, setIsDrag] = useState(false)
    // const [prMoveX, setPrMoveX] = useState(0)
	const [prPageX, setPrPageX] = useState(0)

    const [prPosition, setPrPosition] = useState(0)


    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDrag(true)
        setPrPageX(e.pageX || e.touches[0].pageX)
        // setPrPosition(sliderRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (isDrag) {
            if (sliderRef.current) {
                let positionDif = prPosition - ((e.pageX || e.touches[0].pageX) - prPageX) * 0.5;
				console.log(positionDif)
        		sliderRef.current.setAttribute("style", `transition: none; transform: translateX( ${positionDif}px );`)
				setPrPosition(positionDif)

                // sliderRef.current.scrollLeft = prScroll - positionDif*1.2;
                // setPrMoveX(e.pageX || e.touches[0].pageX)
            }
        }
        e.preventDefault();
    }

    const handleMouseUp = (e) => {
		console.log("mouse Up")
		// let positionDif = prMoveX - e.pageX;
        // sliderRef.current.setAttribute("style", `transition: none; transform: perspective(600px) rotateX(${ degx }deg) rotateY(${ degy }deg)`)

		console.log(sliderRef.current.style)
        setIsDrag(false)
    }

    return (
        <section className="flex flex-col items-center pb-20 bg-slate-200">
			<div className="w-[1000px] relative">
				<div className="flex overflow-hidden">
					<div className='flex'
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onTouchStart={handleMouseDown}
						onTouchMove={handleMouseMove}
						onTouchEnd={handleMouseUp}
						onMouseLeave={handleMouseUp}
						ref={sliderRef}>

						<div className="min-w-[1000px] h-[400px] relative">
							<img className="w-full h-full object-cover" src="./bannerLMO.png" alt="lmo"/>
							<div className="absolute inset-0 bg-black opacity-20"></div>
							<div className="text-white absolute bottom-12 left-12" >
								<p className="font-semibold">Entretenimiento</p>
								<p className="font-semibold">2024</p>
								<h3 className="text-3xl pt-2 font-bold">LeerMangaOnline</h3>
							</div>
						</div>

						<div className="min-w-[1000px] h-[400px] relative">
							<img className="w-full h-full object-cover" src="./bannerLMO.png" alt="lmo"/>
							<div className="absolute inset-0 bg-black opacity-20"></div>
							<div className="text-white absolute bottom-12 left-12" >
								<p className="font-semibold">Entretenimiento</p>
								<p className="font-semibold">2024</p>
								<h3 className="text-3xl pt-2 font-bold">LeerMangaOnline</h3>
							</div>
						</div>

						<div className="min-w-[1000px] h-[400px] relative">
							<img className="w-full h-full object-cover" src="./bannerLMO.png" alt="lmo"/>
							<div className="absolute inset-0 bg-black opacity-20"></div>
							<div className="text-white absolute bottom-12 left-12" >
								<p className="font-semibold">Entretenimiento</p>
								<p className="font-semibold">2024</p>
								<h3 className="text-3xl pt-2 font-bold">LeerMangaOnline</h3>
							</div>
						</div>
					</div>
					
				</div>
				<div className="flex justify-between h-16 max-h-16">
					<div className="flex items-end gap-5 p-5 py-0">
						<p className="text-[14px] font-bold mb-[21px]">Detalles</p>
						<p className="text-[14px] font-semibold text-gray-500 max-w-72">Lector de mangas con todo tipo de obras traducidas a muchos idiomas</p>
						<a className="bg-slate-700 p-2" href="#">
							<img src="./ph_link-bold.png" alt="link"/>
						</a>
					</div>

					<div className="flex cursor-pointer">
						<img className="h-24 min-h-24 w-40 -mt-8 z-10" src="./midgarMac.png" alt="midgar"/>
						<div className="flex items-center justify-between w-56 max-w-56 px-4 bg-white">
							<div className="flex gap-3 font-semibold text-gray-500">
								<p>02</p>
								<p>Midgar</p>
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