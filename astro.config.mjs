// @ts-check
import { defineConfig } from 'astro/config';
import Icons from 'starlight-plugin-icons'
import UnoCSS from 'unocss/astro'

export default defineConfig({
	redirects: {
		'/': '/ru',
	},
	integrations: [
		UnoCSS(),
		Icons({
			sidebar: true,
			codeblock: true,
			extractSafelist: true,
			starlight: {
				title: 'PayziBot',
				favicon: '/favicon.ico',
				customCss: ['./src/styles/custom.css'],
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
						label: 'Команды',
						items: [
							{ icon: "i-material-symbols:stadia-controller-sharp", label: 'Игры', slug: 'commands/games' },
							{ icon: "i-material-symbols:shield-spark-outline-rounded", label: 'Модерация', slug: 'commands/moderation' },
							{ icon: "i-material-symbols:rocket-launch-outline-rounded", label: 'Система уровней', slug: 'commands/levels' },
							{ icon: "i-material-symbols:featured-seasonal-and-gifts-rounded", label: 'Розыгрыши', slug: 'commands/giveaways' },
							{ icon: "i-material-symbols:settings-rounded", label: 'Настройки', slug: 'commands/settings' },
						],
					},
					{
						label: 'Reference',
						// @ts-expect-error — несовпадение типов между starlight-plugin-icons и @astrojs/starlight
						items: [{ autogenerate: { directory: 'reference' } }],
					},
				],
			}
		}),
	],
});
