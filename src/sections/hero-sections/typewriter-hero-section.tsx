'use client';

import { useTranslations } from 'next-intl';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { motion } from 'framer-motion';

export default function TypewriterHero() {
	const t = useTranslations('HeroSectionsPage.typewriterHero');

	// Define words with proper spacing
	const words = [
		{ text: t('texts.0') },
		{ text: t('texts.1') },
		{ text: t('texts.2') }
	];

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center text-center bg-black px-6 sm:px-12">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
				className="text-3xl py-4 font-bold text-white sm:text-5xl md:text-5xl"
			>
				{t('title')}
			</motion.h1>

			<TypewriterEffectSmooth
				words={words}
				className="mt-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl"
			/>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
				className="mt-4 text-base text-gray-400 sm:text-lg md:text-xl lg:text-2xl max-w-2xl"
			>
				{t('description')}
			</motion.p>

			<motion.button
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
				className="mt-6 rounded-full bg-white px-6 py-2 text-black text-sm sm:text-base md:text-lg transition hover:bg-gray-300"
			>
				{t('cta')}
			</motion.button>
		</div>
	);
}
