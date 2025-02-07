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
		<section className="flex min-h-screen items-center bg-gray-100 dark:bg-gray-900">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="h-full w-full"
				plugins={[Autoplay({ delay: 5000 })]}
			>
				<CarouselContent className="h-full w-[90vw] md:w-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="flex w-full flex-col-reverse items-center justify-between md:flex-row"
						>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="flex w-full flex-col items-center justify-center text-black md:w-1/2 dark:text-white"
							>
								<h1 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-6xl">
									{item.heading}
								</h1>
								<p className="mb-6 text-center text-xl font-medium tracking-wide md:text-3xl">
									{item.paragraph}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg md:w-1/2"
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8 }}
									className="h-full w-full"
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
