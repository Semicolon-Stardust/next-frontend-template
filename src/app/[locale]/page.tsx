import { cn } from '@/lib/utils';
import Hero from '@/sections/home/hero-section';

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
		</main>
	);
}
