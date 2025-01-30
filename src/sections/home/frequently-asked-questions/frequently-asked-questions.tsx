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
		<section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
				className="w-full max-w-4xl p-6 md:p-10 rounded-2xl bg-white dark:bg-black shadow-2xl border border-gray-200 dark:border-gray-700"
			>
				<h2 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">
					{t('title')}
				</h2>
				<p className="text-center text-gray-600 dark:text-gray-300 mb-6">
					{t('description')}
				</p>
				<DynamicAccordion items={accordionItems} />
			</motion.div>
		</section>
	);
}
