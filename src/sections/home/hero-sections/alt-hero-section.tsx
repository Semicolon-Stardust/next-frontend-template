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
		<section className="min-h-screen flex items-center bg-gray-100 dark:bg-gray-900">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="w-full h-full"
				plugins={[Autoplay({ delay: 5000 })]}
			>
				<CarouselContent className="md:w-full w-[90vw] h-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="w-full flex flex-col-reverse md:flex-row items-center justify-between"
						>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="flex flex-col justify-center items-center w-full md:w-1/2 text-black dark:text-white"
							>
								<h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-center">
									{item.heading}
								</h1>
								<p className="mb-6 text-xl md:text-3xl font-medium tracking-wide text-center">
									{item.paragraph}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg md:w-1/2"
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8 }}
									className="w-full h-full"
								>
									<ImageWrapper
										src={item.image}
										alt={item.altText}
									/>
								</motion.div>
							</motion.div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}
