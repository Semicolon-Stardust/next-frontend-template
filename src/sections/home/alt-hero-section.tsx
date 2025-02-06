'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { CarouselDots } from '@/components/ui/carousel-dots';
import { type CarouselApi } from '@/components/ui/carousel';

export default function AlternateHero() {
	const t = useTranslations('HomePage.heroSection.carousel');
	const slideKeys = ['1', '2', '3'];
	const carouselData = slideKeys.map((key) => ({
		image: t(`${key}.image`),
		altText: t(`${key}.altText`),
		heading: t(`${key}.heading`),
		paragraph: t(`${key}.paragraph`),
	}));
	const [api, setApi] = useState<CarouselApi>();

	return (
		<section className="flex h-[100vh] w-full select-none items-center">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="flex h-full w-full items-center justify-between"
				plugins={[Autoplay({ delay: 2000 })]}
				setApi={setApi}
			>
				<CarouselContent className="h-full w-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="grid h-full w-full grid-cols-2 sm:grid-cols-1"
						>
							<div className="flex h-full w-1/2 flex-col items-center justify-center text-black dark:text-white">
								<h1 className="mb-2 text-left text-4xl font-bold tracking-tight md:text-6xl">
									{item.heading}
								</h1>
								<p className="text-md mb-4 pt-5 text-left font-medium tracking-wide md:text-2xl">
									{item.paragraph}
								</p>
							</div>

							<div className="flex min-h-screen w-1/2 items-center justify-center">
								<Image
									src={item.image}
									alt={item.altText}
									width={800}
									height={600}
									style={{
										objectFit: 'cover',
										width: '100%',
										height: '100%',
									}}
									priority
									loading="eager"
									className="rounded-lg"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselDots numberOfSlides={carouselData.length} api={api} />
			</Carousel>
		</section>
	);
}
