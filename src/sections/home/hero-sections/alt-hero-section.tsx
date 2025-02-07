'use client';

import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import ImageWrapper from '@/components/utils/image-wrapper';

export default function AlternateHero() {
	const t = useTranslations('HomePage.heroSection.carousel');
	const slideKeys = ['1', '2', '3'];
	const carouselData = slideKeys.map((key) => ({
		image: t(`${key}.image`),
		altText: t(`${key}.altText`),
		heading: t(`${key}.heading`),
		paragraph: t(`${key}.paragraph`),
	}));

	return (
		<section className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="w-full"
				plugins={[Autoplay({ delay: 5000 })]}
			>
				<CarouselContent className="w-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8"
						>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="text-black dark:text-white"
							>
								<h1 className="text-4xl font-bold mb-4">{item.heading}</h1>
								<p className="text-xl">{item.paragraph}</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="relative h-96 overflow-hidden rounded-2xl shadow-lg"
							>
								<ImageWrapper src={item.image} alt={item.altText} />
							</motion.div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}
