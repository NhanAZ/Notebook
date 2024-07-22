// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Stardust',
	tagline: 'Trivial things like stardust 🌠',
	favicon: 'img/favicon.ico',

	url: 'https://nhanaz.io.vn',
	baseUrl: '/',

	organizationName: 'NhanAZ',
	projectName: 'Stardust',
	trailingSlash: false,

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'vi'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					editUrl:
						'https://github.com/NhanAZ/Stardust/tree/main/',
				},
				blog: {
					showReadingTime: true,
					editUrl:
						'https://github.com/NhanAZ/Stardust/tree/main/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Stardust',
				logo: {
					alt: 'Stardust Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Tutorial',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right'
					}
				],
			},
			footer: {
				style: 'dark',
				links: [
				],
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
