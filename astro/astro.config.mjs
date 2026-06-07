// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), icon()],
	markdown: {
		rehypePlugins: [rehypeFigure],
	},
});
