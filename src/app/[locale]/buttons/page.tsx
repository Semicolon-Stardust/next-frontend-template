'use client';

import { useTranslations } from 'next-intl';
import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

const buttonVariantsList: VariantProps<typeof buttonVariants>['variant'][] = [
	'default',
	'destructive',
	'outline',
	'secondary',
	'ghost',
	'link',
];

const buttonEffectsList: VariantProps<typeof buttonVariants>['effect'][] = [
	'expandIcon',
	'ringHover',
	'shine',
	'shineHover',
	'gooeyRight',
	'gooeyLeft',
	'underline',
	'hoverUnderline',
];

const buttonSizesList: VariantProps<typeof buttonVariants>['size'][] = [
	'default',
	'sm',
	'lg',
	'icon',
];

export default function ButtonsDemoPage() {
	const t = useTranslations('ButtonsDemo');

	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-12">
			<h2 className="text-center text-3xl font-bold text-black sm:text-4xl dark:text-white">
				{t('title')}
			</h2>
			<p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
				{t('description')}
			</p>

			{/* Variants Showcase */}
			<div className="mt-12">
				<h3 className="text-2xl font-semibold text-black dark:text-white">
					{t('variants.title')}
				</h3>
				<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
					{buttonVariantsList.map((variant) => (
						<Button key={variant} variant={variant}>
							{t(`variants.${variant}`)}
						</Button>
					))}
				</div>
			</div>

			{/* Effects Showcase */}
			<div className="mt-12">
				<h3 className="text-2xl font-semibold text-black dark:text-white">
					{t('effects.title')}
				</h3>
				<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{buttonEffectsList.map((effect) => (
						<Button key={effect} effect={effect}>
							{t(`effects.${effect}`)}
						</Button>
					))}
				</div>
			</div>

			{/* Sizes Showcase */}
			<div className="mt-12">
				<h3 className="text-2xl font-semibold text-black dark:text-white">
					{t('sizes.title')}
				</h3>
				<div className="mt-4 flex flex-wrap gap-4">
					{buttonSizesList.map((size) => (
						<Button key={size} size={size}>
							{t(`sizes.${size}`)}
						</Button>
					))}
				</div>
			</div>
		</section>
	);
}
