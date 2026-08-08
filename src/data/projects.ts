import lmoShots from '../assets/lmoShots.png';
import ludonexShots from '../assets/ludonexShots.png';
import midgarShots from '../assets/midjarShots.png';
import gestorGamingShots from '../assets/gestorgmShots.png';

export const projects = [
	{
		name: 'LeerMangaOnline',
		category: 'Entretenimiento',
		categoryEn: 'Entertainment',
		description: 'Lector de mangas con obras traducidas a múltiples idiomas.',
		descriptionEn: 'Manga reader featuring works translated into multiple languages.',
		image: lmoShots,
		link: null,
		gradient: 'linear-gradient(90deg, rgb(0 86 162) 0%, rgb(0 124 194) 50%, rgb(0 149 198) 100%)'
	},
	{
		name: 'LudoNex',
		category: 'Informativa',
		categoryEn: 'Informational',
		description: 'Landing page para presentar una empresa desarrolladora de software.',
		descriptionEn: 'Landing page for presenting a software development company.',
		image: ludonexShots,
		link: 'https://ludonex.onrender.com/',
		gradient: 'linear-gradient(90deg, rgb(141 0 139) 0%, rgb(213 46 236) 50%, rgb(231 103 255) 100%)'
	},
	{
		name: 'Midgar',
		category: 'Comercio',
		categoryEn: 'Commerce',
		description: 'Punto de venta para administrar inventario, productos y facturación.',
		descriptionEn: 'Point-of-sale system for managing inventory, products, and billing.',
		image: midgarShots,
		link: 'https://midgar.artosh.dev/landing',
		gradient: 'linear-gradient(90deg, rgb(55 70 78) 0%, rgb(99 103 128) 50%, rgb(119 145 174) 100%)'
	},
	{
		name: 'GestorGaming',
		category: 'Administrativa',
		categoryEn: 'Management',
		description: 'Sistema para gestionar productos tecnológicos.',
		descriptionEn: 'System for managing technology products.',
		image: gestorGamingShots,
		link: 'https://gestor-gaming-prods.onrender.com/',
		gradient: 'linear-gradient(90deg, rgb(168 30 54) 0%, rgb(244 63 94) 50%, rgb(254 142 161) 100%)'
	}
] as const;
