import udeaShots from '../assets/udeaShots.png';
import senaShots from '../assets/senaShots.png';
import udemyShots from '../assets/udemyShots.png';

export const certificates = [
	{
		institution: 'Universidad de Antioquia',
		title: 'Habilidades de programación',
		titleEn: 'Programming skills',
		pdf: '/Certificado_ciclos_1-2-3.pdf',
		image: udeaShots,
		position: 'mt-16 max-xl:mt-0'
	},
	{
		institution: 'SENA',
		title: 'Técnico en sistemas',
		titleEn: 'Systems Technician',
		pdf: '/certificado-tecnico-sistemas.pdf',
		image: senaShots,
		position: 'max-sm:mt-16'
	},
	{
		institution: 'Udemy',
		title: 'Experto en JavaScript',
		titleEn: 'JavaScript Expert',
		pdf: '/Certificado_js.pdf',
		image: udemyShots,
		position: '-mt-16 max-xl:mt-16'
	}
] as const;
