type SkillGroup = {
	title: string;
	titleEn: string;
	skills: Array<{ name: string; description: string; descriptionEn: string }>;
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Interfaces',
		titleEn: 'Interfaces',
		skills: [
			{ name: 'React', description: 'Biblioteca para construir interfaces', descriptionEn: 'Library for building user interfaces' },
			{ name: 'Angular', description: 'Framework para construir interfaces', descriptionEn: 'Framework for building user interfaces' },
			{ name: 'Astro', description: 'Framework usado para construir este portfolio', descriptionEn: 'Framework used to build this portfolio' }
		]
	},
	{
		title: 'Lenguaje y servidor',
		titleEn: 'Language and server',
		skills: [
			{ name: 'JavaScript', description: 'Lenguaje principal de desarrollo', descriptionEn: 'Primary development language' },
			{ name: 'Node.js', description: 'Entorno de ejecución para JavaScript', descriptionEn: 'JavaScript runtime environment' }
		]
	},
	{
		title: 'Infraestructura y estilos',
		titleEn: 'Infrastructure and styling',
		skills: [
			{ name: 'Tailwind CSS', description: 'Framework de utilidades CSS', descriptionEn: 'Utility-first CSS framework' },
			{ name: 'Docker', description: 'Contenedores y despliegues reproducibles', descriptionEn: 'Containers and reproducible deployments' },
			{ name: 'AWS', description: 'Servicios cloud para aplicaciones web', descriptionEn: 'Cloud services for web applications' }
		]
	}
];

export const portfolioProfile = {
	name: 'Douglas Guerrero',
	role: 'Software Engineer | Backend Developer | Java, Spring Boot, Node.js | Angular, Next.js | PostgreSQL, Docker & AWS',
	summary:
		'Ingeniero de software y desarrollador backend especializado en Java, Spring Boot y Node.js, con experiencia en Angular, Next.js, PostgreSQL, Docker y AWS.',
	technologies: skillGroups.flatMap((group) => group.skills),
	projects: [
		{
			name: 'LeerMangaOnline',
			category: 'Entretenimiento',
			description: 'Lector de mangas con obras traducidas a múltiples idiomas.',
			url: null
		},
		{
			name: 'LudoNex',
			category: 'Informativa',
			description: 'Landing page para presentar una empresa desarrolladora de software.',
			url: 'https://ludonex.onrender.com/'
		},
		{
			name: 'Midgar',
			category: 'Comercio',
			description: 'Punto de venta para administrar inventario, productos y facturación.',
			url: 'https://midgar.artosh.dev/landing'
		},
		{
			name: 'GestorGaming',
			category: 'Administrativa',
			description: 'Sistema para gestionar productos tecnológicos.',
			url: 'https://gestor-gaming-prods.onrender.com/'
		}
	],
	education: [
		{ institution: 'Universidad de Antioquia', credential: 'Habilidades de programación' },
		{ institution: 'SENA', credential: 'Técnico en sistemas' },
		{ institution: 'Udemy', credential: 'Experto en JavaScript' }
	],
	links: {
		linkedin: 'https://www.linkedin.com/in/douglas-ge/',
		github: 'https://github.com/douglasd11'
	}
} as const;

export const portfolioKnowledge = JSON.stringify(portfolioProfile, null, 2);
