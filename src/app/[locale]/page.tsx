import { cn } from '@/lib/utils';
import HeroCarousel from '@/sections/home/hero-section';

export default function HomePage() {
	return (
		<main
			className={cn(
				'flex flex-col',
				'bg-white dark:bg-gray-900/30',
				'text-black dark:text-white'
			)}
		>
			<HeroCarousel />
		</main>
	);
}
