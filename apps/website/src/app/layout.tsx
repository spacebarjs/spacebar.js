import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next/types';
import type { PropsWithChildren } from 'react';
import { Providers } from './providers';
import { DESCRIPTION } from '~/util/constants';
import { inter, jetBrainsMono } from '~/util/fonts';

import '@unocss/reset/tailwind-compat.css';
import '~/styles/unocss.css';
import '~/styles/cmdk.css';
import '~/styles/main.css';

export const metadata: Metadata = {
	title: 'spacebar.js',
	description: DESCRIPTION,
	viewport: {
		minimumScale: 1,
		initialScale: 1,
		width: 'device-width',
	},
	icons: {
		other: [
			{
				url: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
		apple: [
			'/apple-touch-icon.png',
			{
				url: '/safari-pinned-tab.svg',
				rel: 'mask-icon',
			},
		],
	},

	manifest: '/site.webmanifest',

	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f1f3f5' },
		{ media: '(prefers-color-scheme: dark)', color: '#181818' },
	],
	colorScheme: 'light dark',

	appleWebApp: {
		title: 'spacebar.js',
	},

	applicationName: 'spacebar.js',

	openGraph: {
		siteName: 'spacebar.js',
		type: 'website',
		title: 'spacebar.js',
		description: DESCRIPTION,
		images: 'https://spacebarjs.dev/api/open-graph.png',
	},

	twitter: {
		card: 'summary_large_image',
		creator: '@iCrawlToGo',
	},

	other: {
		'msapplication-TileColor': '#090a16',
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="dark:bg-dark-800 bg-light-600">
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	);
}
