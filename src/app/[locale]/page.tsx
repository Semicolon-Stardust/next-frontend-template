import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function HomePage() {
	const t = useTranslations('HomePage');
	return (
		<div
			className={cn(
				'flex items-center justify-center min-h-screen',
				'bg-white dark:bg-gray-900/30',
				'text-black dark:text-white'
			)}
		>
			<div>
				<h1>{t('title')}</h1>
			</div>
		</div>
	);
}
