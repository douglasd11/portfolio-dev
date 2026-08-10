export type SkillRoute = {
	labelEs: string;
	labelEn: string;
	color: string;
	stages: string[][];
};

export const skillRoutes: SkillRoute[] = [
	{
		labelEs: 'Plataforma empresarial Java',
		labelEn: 'Enterprise Java platform',
		color: '#38bdf8',
		stages: [
			['Java', 'Spring Boot', 'REST APIs', 'WebLogic'],
			['Angular', 'TypeScript'],
			['Oracle'],
			['Docker', 'Git', 'GitHub'],
			['Jira', 'Scrum']
		]
	},
	{
		labelEs: 'SaaS desplegado en cloud',
		labelEn: 'Cloud-deployed SaaS',
		color: '#f59e0b',
		stages: [
			['Node.js', 'REST APIs', 'WebSocket'],
			['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
			['PostgreSQL', 'MongoDB'],
			['Docker', 'AWS', 'GitHub'],
			['Jira', 'Codex']
		]
	},
	{
		labelEs: 'CRM corporativo',
		labelEn: 'Enterprise CRM',
		color: '#a78bfa',
		stages: [
			['.NET', 'REST APIs'],
			['React.js', 'TypeScript', 'Tailwind CSS'],
			['PostgreSQL', 'Oracle'],
			['Docker', 'GitHub'],
			['Jira', 'Scrum']
		]
	},
	{
		labelEs: 'Aplicación móvil conectada',
		labelEn: 'Connected mobile application',
		color: '#22c55e',
		stages: [
			['Node.js', 'REST APIs', 'WebSocket'],
			['React Native', 'Expo', 'TypeScript'],
			['PostgreSQL', 'MongoDB'],
			['AWS', 'GitHub'],
			['Trello', 'Scrum']
		]
	},
	{
		labelEs: 'Plataforma IoT en tiempo real',
		labelEn: 'Real-time IoT platform',
		color: '#fb7185',
		stages: [
			['Node.js', 'REST APIs', 'WebSocket'],
			['Next.js', 'React.js', 'TypeScript'],
			['PostgreSQL', 'MongoDB'],
			['Docker', 'AWS', 'GitHub'],
			['Arduino (C++)', 'Jira']
		]
	},
	{
		labelEs: 'Producto web moderno',
		labelEn: 'Modern web product',
		color: '#22d3ee',
		stages: [
			['Node.js', 'REST APIs'],
			['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
			['PostgreSQL'],
			['Docker', 'Git', 'GitHub'],
			['Codex', 'Claude Code', 'Scrum']
		]
	}
];
