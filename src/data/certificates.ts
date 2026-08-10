import universityCrest from '../assets/universidad-cartagena-escudo.webp';

export const certificates = [
	{
		institution: 'Universidad de Cartagena',
		title: 'Ingeniero de Sistemas',
		titleEn: 'Systems Engineer',
		type: 'Título profesional',
		typeEn: 'Professional degree',
		period: 'Ago 2018 – Nov 2025',
		periodEn: 'Aug 2018 – Nov 2025',
		logo: universityCrest,
		badge: 'UdeC',
		accent: '#f4b41a',
		pdf: '/diploma-ingeniero-sistemas-douglas-guerrero.pdf',
		featured: true
	},
	{
		institution: 'Universidad de Antioquia',
		title: 'Habilidades de programación',
		titleEn: 'Programming skills',
		type: 'Certificación',
		typeEn: 'Certificate',
		period: null,
		periodEn: null,
		logo: null,
		badge: 'UdeA',
		accent: '#22c55e',
		pdf: '/Certificado_ciclos_1-2-3.pdf',
		featured: false
	},
	{
		institution: 'SENA',
		title: 'Técnico en sistemas',
		titleEn: 'Systems Technician',
		type: 'Certificación técnica',
		typeEn: 'Technical certificate',
		period: null,
		periodEn: null,
		logo: null,
		badge: 'SENA',
		accent: '#16a34a',
		pdf: '/certificado-tecnico-sistemas.pdf',
		featured: false
	},
	{
		institution: 'Udemy',
		title: 'Experto en JavaScript',
		titleEn: 'JavaScript Expert',
		type: 'Certificación',
		typeEn: 'Certificate',
		period: null,
		periodEn: null,
		logo: null,
		badge: 'U',
		accent: '#a855f7',
		pdf: '/Certificado_js.pdf',
		featured: false
	}
] as const;
