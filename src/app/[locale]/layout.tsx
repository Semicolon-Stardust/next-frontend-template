import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	preload: true,
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	preload: true,
});

export const metadata: Metadata = {
	title: 'Nextjs Frontend Template',
	description:
		'This is a Nextjs frontend template with TypeScript and Tailwind CSS for rapid development of web applications and websites with a modern frontend stack and best practices.',
	other: {
		'apple-mobile-web-app-title': 'DAYA - Component Catalogue',
	},
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const { locale } = await params;

	setRequestLocale(locale);

	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta
					name="apple-mobile-web-app-title"
					content="DAYA - Component Catalogue"
				/>
			</head>
			<body
				suppressHydrationWarning
				className={cn(
					geistSans.variable,
					geistMono.variable,
					'antialiased'
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
