import ludonexShots from '../assets/ludonexShots.png';
import yeeshopShots from '../assets/yeeshopShots.png';
import magnetCrmShots from '../assets/magnetCrmShots.png';
import controlBiomedShots from '../assets/controlBiomedShots.png';
import uvGuardShots from '../assets/uvGuardShots.png';
import unibacContigoShots from '../assets/unibacContigoShots.png';
import midgarShots from '../assets/midjarShots.png';

export const projects = [
	{
		name: 'LudoNex',
		category: 'Informativa',
		categoryEn: 'Informational',
		description: 'Landing page para presentar una empresa desarrolladora de software.',
		descriptionEn: 'Landing page for presenting a software development company.',
		technologies: ['React', 'JavaScript', 'Git', 'GitHub'],
		image: ludonexShots,
		link: 'https://ludonex.com/',
		gradient: 'linear-gradient(90deg, rgb(141 0 139) 0%, rgb(213 46 236) 50%, rgb(231 103 255) 100%)'
	},
	{
		name: 'Yeeshop',
		category: 'Comercio electrónico',
		categoryEn: 'E-commerce',
		description: 'Tienda online de zapatos con catálogo por categorías y experiencia de compra adaptable.',
		descriptionEn: 'Online shoe store with a category-based catalog and responsive shopping experience.',
		technologies: ['Shopify', 'JavaScript', 'Figma'],
		image: yeeshopShots,
		link: 'https://yeeshopctg.com/',
		gradient: 'linear-gradient(90deg, rgb(15 23 42) 0%, rgb(30 41 59) 50%, rgb(51 65 85) 100%)'
	},
	{
		name: 'Magnet CRM',
		category: 'Gestión empresarial',
		categoryEn: 'Business management',
		description: 'CRM empresarial para gestionar clientes, cotizaciones, contratos, cuentas de cobro y seguimientos comerciales.',
		descriptionEn: 'Business CRM for managing clients, quotes, contracts, collection accounts, and sales follow-ups.',
		technologies: ['Node.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker', 'GitHub'],
		image: magnetCrmShots,
		link: 'http://smartcrm.branzontech.com:5013/auth/login',
		gradient: 'linear-gradient(90deg, rgb(45 28 48) 0%, rgb(72 43 76) 50%, rgb(94 55 99) 100%)'
	},
	{
		name: 'Control Biomed',
		category: 'Gestión médica',
		categoryEn: 'Medical management',
		description: 'Sistema para gestionar la entrega y devolución de equipos médicos, con auditoría y control de actas durante el proceso.',
		descriptionEn: 'System for managing medical equipment deliveries and returns, including auditing and document control throughout the process.',
		technologies: ['React.js', '.NET Core', 'Oracle', 'TypeScript', 'GitHub'],
		image: controlBiomedShots,
		link: 'https://www.moviredbiomed.online:8093/',
		gradient: 'linear-gradient(90deg, rgb(39 140 167) 0%, rgb(83 175 199) 50%, rgb(125 211 224) 100%)'
	},
	{
		name: 'UV Guard',
		category: 'Monitoreo IoT',
		categoryEn: 'IoT monitoring',
		description: 'Plataforma multitenant que monitorea sensores UV y envía alertas de protección cuando las lecturas superan el umbral seguro.',
		descriptionEn: 'Multi-tenant platform that monitors UV sensors and sends protection alerts when readings exceed the safe threshold.',
		technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Docker', 'AWS', 'GitHub', 'Codex'],
		image: uvGuardShots,
		link: 'https://uvguard.ludonex.com/',
		gradient: 'linear-gradient(90deg, rgb(30 64 175) 0%, rgb(37 99 235) 50%, rgb(79 70 229) 100%)'
	},
	{
		name: 'Portal Unibac Contigo',
		category: 'Educación y bienestar',
		categoryEn: 'Education and well-being',
		description: 'Portal administrativo y aplicación móvil para gestionar tutorías, salud mental, bienestar, convocatorias y servicios para estudiantes.',
		descriptionEn: 'Administrative portal and mobile app for managing tutoring, mental health, well-being, calls, and student services.',
		technologies: ['Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Supabase', 'GitHub', 'Codex', 'Jira'],
		image: unibacContigoShots,
		link: 'https://portal.unibaccontigo.com/login',
		gradient: 'linear-gradient(90deg, rgb(185 28 28) 0%, rgb(220 38 38) 50%, rgb(248 113 113) 100%)'
	},
	{
		name: 'Midgar',
		category: 'Comercio',
		categoryEn: 'Commerce',
		description: 'Punto de venta para administrar inventario, productos y facturación.',
		descriptionEn: 'Point-of-sale system for managing inventory, products, and billing.',
		technologies: ['React.js', 'Node.js', 'Git', 'GitHub'],
		image: midgarShots,
		link: 'https://midgar.artosh.dev/landing',
		gradient: 'linear-gradient(90deg, rgb(55 70 78) 0%, rgb(99 103 128) 50%, rgb(119 145 174) 100%)'
	}
] as const;
