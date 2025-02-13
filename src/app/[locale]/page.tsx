import { cn } from '@/lib/utils';
import HeroSection from '@/sections/home/hero-section';
import NavigationCardsSection from '@/sections/home/navigation-cards-section';

export default function HomePage() {
	return (
		<main
			className={cn(
				'flex flex-col gap-5',
				'bg-white dark:bg-gray-900/30',
				'text-black dark:text-white'
			)}
		>
			<HeroSection />
			<NavigationCardsSection />
		</main>
	);
}
