import { certificates } from './certificates';
import { projects } from './projects';
import { skillRoutes } from './skillRoutes';

type SkillGroup = {
	title: string;
	titleEn: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Backend',
		titleEn: 'Backend',
		skills: [
			'Java', 'Spring Boot', 'Node.js', '.NET', 'PHP', 'REST APIs', 'WebSocket', 'WebLogic'
		]
	},
	{
		title: 'Frontend y mobile',
		titleEn: 'Frontend and mobile',
		skills: [
			'Angular', 'Next.js', 'React.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'React Native', 'Expo'
		]
	},
	{
		title: 'Bases de datos',
		titleEn: 'Databases',
		skills: [
			'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'
		]
	},
	{
		title: 'DevOps y cloud',
		titleEn: 'DevOps and cloud',
		skills: [
			'Docker', 'AWS', 'Git', 'GitHub'
		]
	},
	{
		title: 'Herramientas y otros',
		titleEn: 'Tools and other',
		skills: [
			'Jira', 'Trello', 'Scrum', 'Codex', 'Claude Code', 'Arduino (C++)'
		]
	}
];

export const professionalExperience = [
	{
		organization: 'Freelance',
		role: 'Desarrollador Full Stack',
		period: '2026 - Actualidad',
		periodEn: '2026 - Present',
		achievements: [
			'Desarrollo de soluciones web e IoT con Node.js, Next.js, Docker y AWS.',
			'Lideró el desarrollo de una plataforma para la Universidad de Bellas Artes orientada a la gestión de solicitudes de bienestar y tutorías.',
			'Desarrolló un sistema IoT para monitoreo de radiación UV, captura de señales de sensores y generación de alertas preventivas para usuarios finales.',
			'Utilizó Codex como agente de desarrollo para refactorización, análisis de errores y aceleración del flujo de trabajo.'
		],
		technologies: ['Node.js', 'Next.js', 'JavaScript', 'TypeScript', 'Docker', 'AWS', 'Codex']
	},
	{
		organization: 'BranzonTech',
		role: 'Desarrollador Full Stack',
		period: 'Junio 2025 - Enero 2026',
		periodEn: 'June 2025 - January 2026',
		achievements: [
			'Diseñó y desarrolló backend, base de datos y frontend para un CRM completo, incluyendo su despliegue.',
			'Estandarizó despliegues con Docker y gestionó procesos de respaldo y continuidad para PostgreSQL.',
			'Brindó soporte a una aplicación de gestión de implementos médicos, optimizando peticiones y resolviendo incidentes.',
			'Colaboró con equipos multidisciplinarios para integrar frontend, backend y procesos del producto.'
		],
		technologies: ['Node.js', 'TypeScript', 'React.js', '.NET', 'Docker', 'PostgreSQL'],
		toolsMentionedInCv: ['Trello', 'Claude Code', 'Microsoft Copilot']
	},
	{
		organization: 'Seguros SURA',
		role: 'Desarrollador Analista Backend Java',
		period: 'Enero 2025 - Junio 2025',
		periodEn: 'January 2025 - June 2025',
		achievements: [
			'Realizó soporte y mantenimiento backend en aplicaciones de salud con Java y Spring Boot, resolviendo incidentes y ajustes técnicos.',
			'Implementó ajustes en lógica de negocio, validaciones y servicios desplegados en entornos WebLogic.',
			'Desarrolló y ajustó componentes frontend con Angular para mejorar flujos e interfaces de usuario.',
			'Apoyó la gestión de brechas de seguridad mediante validación, priorización y corrección de hallazgos.'
		],
		technologies: ['Java', 'Spring Boot', 'Angular', 'WebLogic', 'Scrum'],
		toolsMentionedInCv: ['Microsoft Copilot', 'modelos GPT']
	},
	{
		organization: 'Ludonex',
		role: 'Desarrollador Full Stack / Líder de Proyecto',
		period: 'Mayo 2024 - Diciembre 2024',
		periodEn: 'May 2024 - December 2024',
		achievements: [
			'Participó en desarrollo full stack, cubriendo frontend y backend de proyectos web.',
			'Definió arquitectura de software, selección de tecnologías y lineamientos de desarrollo ágil.',
			'Implementó soluciones web con tecnologías modernas y control de versiones.'
		],
		technologies: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git']
	}
] as const;

export const portfolioProfile = {
	lastUpdated: '2026-08-10',
	identity: {
		name: 'Douglas Guerrero',
		headline: 'Ingeniero de Sistemas | Desarrollador Full Stack',
		role: 'Fullstack Developer | Backend Developer | Java, Spring Boot, Node.js | Angular, Next.js | PostgreSQL, Docker & AWS',
		location: 'Cartagena, Bolívar, Colombia',
		ageShownOnWebsite: 25,
		experienceSummary: 'Más de 3 años construyendo aplicaciones web y empresariales.',
		interests: ['Montar bicicleta', 'Hacer ejercicio']
	},
	professionalSummary: 'Ingeniero de Sistemas y Desarrollador Full Stack con más de 3 años de experiencia en desarrollo web y aplicaciones empresariales. Perfil enfocado en backend con Java, Spring Boot, Node.js y bases de datos, complementado con frontend en Angular, React.js y TypeScript. Experiencia en aplicaciones de salud, gestión de clientes CRM, WebLogic, Docker, PostgreSQL, soporte de incidentes y metodologías ágiles Scrum.',
	publicContact: {
		email: 'dguerreroe921@gmail.com',
		phoneFromPublicCv: '(+57) 312 296 8628',
		linkedin: 'https://www.linkedin.com/in/douglas-ge/',
		github: 'https://github.com/douglasd11',
		portfolioListedInCv: 'douglasguerrero.ludonex.com'
	},
	currentTechnicalSkills: skillGroups,
	skillCombinationsShownOnWebsite: skillRoutes.map(({ labelEs, labelEn, stages }) => ({ labelEs, labelEn, stages })),
	professionalExperience,
	projects: projects.map((project) => ({
		name: project.name,
		category: project.category,
		categoryEn: project.categoryEn,
		description: project.description,
		descriptionEn: project.descriptionEn,
		technologies: [...project.technologies],
		url: project.link
	})),
	educationAndCertifications: certificates.map((certificate) => ({
		institution: certificate.institution,
		title: certificate.title,
		titleEn: certificate.titleEn,
		type: certificate.type,
		typeEn: certificate.typeEn,
		period: certificate.period,
		periodEn: certificate.periodEn,
		document: certificate.pdf
	})),
	educationDetails: [
		{
			institution: 'Universidad de Cartagena',
			credential: 'Ingeniero de Sistemas',
			period: 'Ago 2018 - Nov 2025',
			note: 'El portfolio utiliza las fechas verificadas solicitadas por Douglas; el CV resume el periodo como 2019 - 2025.'
		},
		{
			institution: 'Universidad de Antioquia',
			credential: 'Habilidades en Programación',
			period: 'Septiembre 2021 - Diciembre 2021'
		}
	],
	coursesMentionedInCv: [
		'Metodología ágil Scrum - SENA',
		'Técnico de Sistemas - SENA',
		'Curso de React.js - Udemy',
		'Curso de Desarrollo Web CSS - Udemy'
	],
	cvTechnicalSkillsAsWritten: {
		backend: ['Java', 'Spring Boot', 'Node.js', '.NET', 'PHP', 'REST APIs', 'WebSocket'],
		frontend: ['Angular', 'Next.js', 'React.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS'],
		databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
		devOpsAndTools: ['Docker', 'Git', 'GitHub', 'Jira', 'Codex', 'Microsoft Copilot', 'Claude Code'],
		mobileAndOther: ['React Native', 'Expo', 'Arduino (C++)', 'Chrome Extensions']
	},
	websiteContent: {
		languages: ['Español', 'Inglés'],
		pages: ['Inicio', 'Proyectos', 'Resume'],
		home: [
			'Presentación profesional, ubicación, edad, experiencia e intereses personales.',
			'Asistente de IA de propósito general con información verificada de Douglas.',
			'Habilidades técnicas agrupadas y combinaciones visuales de stacks.',
			'Accesos a proyectos, LinkedIn, descarga del CV y Resume.'
		],
		projectsPage: 'Muestra todos los proyectos actuales en slider o cuadrícula, abre detalles en un modal y contiene la sección de formación y certificaciones.',
		resumePage: 'Presenta el resumen profesional y permite abrir o descargar el CV en PDF.',
		resumePdf: '/CV_Douglas_Guerrero_ATS.pdf'
	},
	removedOrOutdatedPortfolioItems: [
		'LeerMangaOnline y GestorGaming fueron eliminados del portfolio actual y no deben presentarse como proyectos vigentes.',
		'El enlace vigente de LudoNex es https://ludonex.com/.'
	]
} as const;

export const portfolioKnowledge = JSON.stringify(portfolioProfile, null, 2);
