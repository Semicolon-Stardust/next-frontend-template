'use client';

import { motion } from 'framer-motion';
import DynamicAccordion from '@/components/utils/dynamic-accordion';
import ImageWrapper from '@/components/utils/image-wrapper';
import { useTranslations } from 'next-intl';

interface FAQProps {
	reverse?: boolean;
}

export default function AlternateFAQ({ reverse = false }: FAQProps) {
	const t = useTranslations('FrequentlyAskedQuestions');

	const accordionKeys = ['1', '2', '3'];
	const accordionItems = accordionKeys.map((key) => ({
		id: `questions.item-${key}`,
		title: t(`questions.${key}.question`),
		content: t(`questions.${key}.answer`),
	}));

	return (
		<section className="w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
				className={`w-full max-w-6xl flex flex-col md:flex-row ${
					reverse ? 'md:flex-row-reverse' : 'md:flex-row'
				} items-center gap-12`}
			>
				{/* Image Section */}
				<div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] min-h-[320px] md:min-h-[420px] overflow-hidden shadow-lg rounded-2xl transition-all duration-300">
					<ImageWrapper
						src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="FAQs"
						className="rounded-2xl hover:scale-105 transition-transform duration-500"
					/>
				</div>

				{/* Accordion Section */}
				<motion.div
					initial={{ opacity: 0, x: reverse ? 50 : -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
					className="w-full md:w-1/2 p-6 md:p-10 rounded-2xl shadow-xl transition-all duration-300"
				>
					<h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
						{t('title')}
					</h2>
					<p className="text-gray-600 dark:text-gray-300 mb-6">
						{t('description')}
					</p>
					<DynamicAccordion items={accordionItems} />
				</motion.div>
			</motion.div>
		</section>
	);
}
