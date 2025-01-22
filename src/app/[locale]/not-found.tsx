'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: -50 },
	visible: { opacity: 1, y: 0 },
};

const svgVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 2, duration: 0.5 } },
};

export default function NotFoundPage() {
	const t = useTranslations('NotFoundPage');

	return (
		<motion.div
			className={cn(
				'flex flex-col items-center justify-center min-h-screen bg-gray-100/30 dark:bg-gray-900/30 p-4 sm:p-8'
			)}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div className={cn('mt-8')} variants={svgVariants}>
				<svg
					width="150px"
					height="150px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="sm:w-200 sm:h-200"
				>
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
						fill="currentColor"
						className="dark:fill-white"
					/>
				</svg>
			</motion.div>
			<motion.h1
				className={cn(
					'text-4xl sm:text-6xl font-bold text-black dark:text-white mb-4 text-center'
				)}
				variants={itemVariants}
			>
				{t('title')}
			</motion.h1>
			<motion.p
				className={cn(
					'text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center'
				)}
				variants={itemVariants}
			>
				{t('description')}
			</motion.p>
			<motion.div
				className={cn(
					'flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'
				)}
				variants={itemVariants}
			>
				<Button
					variant="default"
					effect="expandIcon"
					iconPlacement="left"
					icon={ArrowLeft}
				>
					<Link href="/">{t('homeLink')}</Link>
				</Button>
				<Button variant="default" effect="shineHover">
					<Link href="/about">{t('aboutLink')}</Link>
				</Button>
				<Button
					variant="default"
					effect="expandIcon"
					iconPlacement="right"
					icon={ArrowRight}
				>
					<Link href="/contact">{t('contactLink')}</Link>
				</Button>
			</motion.div>
		</motion.div>
	);
}
