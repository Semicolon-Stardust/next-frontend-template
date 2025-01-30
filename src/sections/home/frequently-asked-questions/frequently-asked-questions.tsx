'use client';

import { motion } from 'framer-motion';
import DynamicAccordion from '@/components/utils/dynamic-accordion';

interface AccordionData {
    id: string;
    title: string;
    content: string;
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

export default function FAQ() {
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
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    Find answers to the most commonly asked questions about our platform.
                </p>
                <DynamicAccordion items={accordionItems} />
            </motion.div>
        </section>
    );
}
