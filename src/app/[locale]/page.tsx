import { cn } from '@/lib/utils';
import AlternateHero from '@/sections/hero-sections/alt-hero-section';
import FAQ from '@/sections/frequently-asked-questions/frequently-asked-questions';
import Hero from '@/sections/hero-sections/hero-section';
import AlternateFAQ from '@/sections/frequently-asked-questions/alt-frequently-asked-questions';

export default function HomePage() {
	return (
		<main
			className={cn(
				'flex flex-col gap-5',
				'bg-white dark:bg-gray-900/30',
				'text-black dark:text-white'
			)}
		>
			<Hero />
			<AlternateHero />
			<FAQ />
			<AlternateFAQ />
		</main>
	);
}
