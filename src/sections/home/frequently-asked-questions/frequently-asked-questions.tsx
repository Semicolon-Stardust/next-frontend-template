'use client';

import { motion } from 'framer-motion';
import DynamicAccordion from '@/components/utils/dynamic-accordion';
import { useTranslations } from 'next-intl';

export default function FAQ() {
	const t = useTranslations('FrequentlyAskedQuestions');

	const accordionKeys = ['1', '2', '3'];
	const accordionItems = accordionKeys.map((key) => ({
		id: `questions.item-${key}`,
		title: t(`questions.${key}.question`),
		content: t(`questions.${key}.answer`),
	}));
	return (
		<section className="flex min-h-screen w-full items-center justify-center bg-white px-4 dark:bg-black">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
				className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl md:p-10 dark:border-gray-700 dark:bg-black"
			>
				<h2 className="mb-6 text-center text-4xl font-bold text-black dark:text-white">
					{t('title')}
				</h2>
				<p className="mb-6 text-center text-gray-600 dark:text-gray-300">
					{t('description')}
				</p>
				<DynamicAccordion items={accordionItems} />
			</motion.div>
		</section>
	);
}
