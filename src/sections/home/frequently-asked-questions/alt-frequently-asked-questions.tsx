'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import DynamicAccordion from '@/components/utils/dynamic-accordion';

interface AccordionData {
	id: string;
	title: string;
	content: string;
}

interface FAQProps {
	reverse?: boolean;
}

const accordionItems: AccordionData[] = [
	{
		id: 'item-1',
		title: 'What is Next.js?',
		content: 'Next.js is a React framework for production.',
	},
	{
		id: 'item-2',
		title: 'What is Tailwind CSS?',
		content: 'Tailwind CSS is a utility-first CSS framework.',
	},
	{
		id: 'item-3',
		title: 'What is shadcn UI?',
		content: 'shadcn UI is a collection of re-usable components.',
	},
];

export default function AlternateFAQ({ reverse = false }: FAQProps) {
	return (
		<section className="w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
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
				<div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] min-h-[300px] md:min-h-[400px] overflow-hidden shadow-lg rounded-2xl" style={{ height: '400px' }}>
					<Image
						src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="FAQs"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{ objectFit: 'cover' }}
						className="rounded-2xl"
					/>
				</div>

				{/* Accordion Section */}
				<div className="w-full md:w-1/2 p-6 md:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
					<h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
						Frequently Asked Questions
					</h2>
					<p className="text-gray-600 dark:text-gray-300 mb-6">
						Find answers to the most commonly asked questions about
						our platform.
					</p>
					<DynamicAccordion items={accordionItems} />
				</div>
			</motion.div>
		</section>
	);
}
