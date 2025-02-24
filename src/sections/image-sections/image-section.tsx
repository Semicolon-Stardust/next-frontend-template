'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Default Image Section
export function ImageSection() {
	const t = useTranslations('ImageSections.dummy');

	return (
		<section className="mt-10 flex flex-col items-center justify-center gap-8 px-6 py-16 sm:px-12 md:flex-row">
			{/* Image */}
			<div className="relative w-full md:w-1/2">
				<Image
					src={t('image')}
					alt={t('heading')}
					width={800}
					height={500}
					className="rounded-lg object-cover shadow-lg"
				/>
			</div>

			{/* Content */}
			<div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
				<h2 className="text-3xl font-bold text-black sm:text-4xl dark:text-white">
					{t('heading')}
				</h2>
				<p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
					{t('subtitle')}
				</p>
				<p className="mt-4 text-gray-500 dark:text-gray-400">
					{t('description')}
				</p>
			</div>
		</section>
	);
}

// Alternate Image Section (Image on Right)
export function AlternateImageSection1() {
	const t = useTranslations('ImageSections.dummy');

	return (
		<section className="mt-10 flex flex-col-reverse items-center justify-center gap-8 px-6 py-16 sm:px-12 md:flex-row">
			{/* Content */}
			<div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
				<h2 className="text-3xl font-bold text-black sm:text-4xl dark:text-white">
					{t('heading')}
				</h2>
				<p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
					{t('subtitle')}
				</p>
				<p className="mt-4 text-gray-500 dark:text-gray-400">
					{t('description')}
				</p>
			</div>

			{/* Image */}
			<div className="relative w-full md:w-1/2">
				<Image
					src={t('image')}
					alt={t('heading')}
					width={800}
					height={500}
					className="rounded-lg object-cover shadow-lg"
				/>
			</div>
		</section>
	);
}

// Alternate Image Section (Overlay Effect)
export function AlternateImageSection2() {
	const t = useTranslations('ImageSections.dummy');

	return (
		<section className="relative mt-10 flex h-[500px] w-full items-center justify-center overflow-hidden px-6 sm:px-12">
			{/* Background Image */}
			<Image
				src={t('image')}
				alt={t('heading')}
				fill
				className="absolute inset-0 h-full w-full object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content in Center */}
			<div className="relative z-10 flex max-w-2xl flex-col items-center text-center text-white">
				<h2 className="text-3xl font-bold sm:text-4xl">
					{t('heading')}
				</h2>
				<p className="mt-2 text-lg sm:text-xl">{t('subtitle')}</p>
				<p className="mt-4 text-gray-300">{t('description')}</p>
			</div>
		</section>
	);
}
