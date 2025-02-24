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
	const t = useTranslations('HeroSectionsPage.carousel');
	const slideKeys = ['1', '2', '3'];
	const carouselData = slideKeys.map((key) => ({
		image: t(`${key}.image`),
		altText: t(`${key}.altText`),
		heading: t(`${key}.heading`),
		paragraph: t(`${key}.paragraph`),
	}));

	return (
		<section className="flex min-h-screen items-center bg-gray-100 dark:bg-gray-950">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="w-full"
				plugins={[Autoplay({ delay: 5000 })]}
			>
				<CarouselContent className="w-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2"
						>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="text-black dark:text-white"
							>
								<h1 className="mb-4 text-4xl font-bold">
									{item.heading}
								</h1>
								<p className="text-xl">{item.paragraph}</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="relative h-96 overflow-hidden rounded-2xl shadow-lg"
							>
								<ImageWrapper
									src={item.image}
									alt={item.altText}
								/>
							</motion.div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}
