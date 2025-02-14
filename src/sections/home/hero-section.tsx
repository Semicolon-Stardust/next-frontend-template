'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function HeroSection() {
	const t = useTranslations('HomePage.heroSection');

	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center sm:px-12">
			<div className="relative z-10 mx-auto max-w-2xl">
				<h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
					{t('title')}
				</h1>
				<p className="mt-4 text-lg text-neutral-500 sm:text-xl">
					{t('description')}
				</p>
				<Button className="mt-6 px-6 py-3 text-lg">
					<Link href="#nav-cards">{t('cta')}</Link>
				</Button>
			</div>
			<BackgroundBeams />
		</section>
	);
}
