// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	redirects: {
		'/': '/ru',
	},
	integrations: [
		starlight({
			title: 'PayziBot',
			defaultLocale: 'ru',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			social: [
				{ icon: 'discord', label: 'Add bot', href: 'https://discord.com/api/oauth2/authorize?client_id=576442351426207744&permissions=1411299798102&scope=bot' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/PayziBot/PayziBotDocs' }
			],
			editLink: {
				baseUrl: 'https://github.com/PayziBot/PayziBotDocs/edit/main/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
