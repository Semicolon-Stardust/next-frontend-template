'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function NavigationCardsSection() {
	const t = useTranslations('HomePage.navigation');
	const locale = useLocale();

	const sections = [
		{
			id: 'buttons',
			title: t('sections.buttons.title'),
			description: t('sections.buttons.description'),
			href: `/${locale}${t('sections.buttons.href')}`,
		},
		{
			id: 'heroSections',
			title: t('sections.heroSections.title'),
			description: t('sections.heroSections.description'),
			href: `/${locale}${t('sections.heroSections.href')}`,
		},
		{
			id: 'imageSections',
			title: t('sections.imageSections.title'),
			description: t('sections.imageSections.description'),
			href: `/${locale}${t('sections.imageSections.href')}`,
		},
		{
			id: 'miscSections',
			title: t('sections.miscSections.title'),
			description: t('sections.miscSections.description'),
			href: `/${locale}${t('sections.miscSections.href')}`,
		},
	];

	return (
		<section id='nav-cards' className="mx-auto w-full max-w-6xl mt-16 px-6 py-16 sm:px-12">
			<h2 className="text-center text-3xl font-bold text-black sm:text-4xl dark:text-white">
				{t('title')}
			</h2>
			<p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
				{t('description')}
			</p>

			{/* Grid of Clickable Component Sections */}
			<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{sections.map((section) => (
					<Link
						key={section.id}
						href={section.href}
						className="group block"
					>
						<div className="relative overflow-hidden rounded-xl border bg-gray-100 p-6 shadow-md transition hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
							{/* Label on Top Left */}
							<div className="absolute top-2 left-2 rounded bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
								{section.title}
							</div>

							{/* Section Details */}
							<h3 className="mt-6 text-xl font-semibold text-black dark:text-white">
								{section.title}
							</h3>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								{section.description}
							</p>
						</div>
					</Link>
				))}
			</div>

			{/* Instructions on How to Send Selection */}
			<div className="mx-auto mt-12 max-w-3xl text-center">
				<h3 className="text-3xl font-bold text-black sm:text-4xl dark:text-white">
					{t('howToSend.title')}
				</h3>
				<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
					{t('howToSend.description')}
				</p>
			</div>
		</section>
	);
}
