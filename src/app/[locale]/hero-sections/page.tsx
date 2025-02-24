import { useTranslations } from 'next-intl';
import AlternateHero from '@/sections/hero-sections/alt-hero-section';
import Hero from '@/sections/hero-sections/hero-section';
import TypewriterHero from '@/sections/hero-sections/typewriter-hero-section';

export default function HeroSectionsPage() {
	const t = useTranslations('HeroSectionsPage.sections');

	return (
		<div className="mt-10 space-y-12 px-6 py-16 sm:px-12">
			{/* Default Hero */}
			<div className="relative">
				<div className="absolute top-2 left-2 z-20 rounded bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
					{t('defaultHero')}
				</div>
				<Hero />
			</div>

			{/* Alternate Hero */}
			<div className="relative">
				<div className="absolute top-2 left-2 z-20 rounded bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
					{t('alternateHero')}
				</div>
				<AlternateHero />
			</div>

			{/* Typewriter Hero */}
			<div className="relative">
				<div className="absolute top-2 left-2 z-20 rounded bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
					{t('typewriterHero')}
				</div>
				<TypewriterHero />
			</div>
		</div>
	);
}
