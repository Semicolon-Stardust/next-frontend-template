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

export default function Hero() {
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
		<section className="relative w-full h-screen select-none">
			<Carousel
				opts={{ align: 'start', loop: true }}
				className="w-full h-full"
				plugins={[Autoplay({ delay: 2000 })]}
				setApi={setApi}
			>
				<CarouselContent className="h-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="relative w-full min-h-screen"
						>
							<Image
								src={item.image}
								alt={item.altText}
								fill
								style={{ objectFit: 'cover' }}
								priority
								loading="eager"
							/>
							<div className="absolute inset-0 w-full min-h-screen bg-[hsla(0, 0, 0, 0.5)] z-10"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-5 text-white md:ml-12 md:items-start">
								<h1 className="mb-2 text-4xl font-bold tracking-tight md:text-left md:text-6xl drop-shadow-lg">
									{item.heading}
								</h1>
								<p className="pt-5 mb-4 font-medium tracking-wide text-md md:text-left md:text-2xl">
									{item.paragraph}
								</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselDots numberOfSlides={carouselData.length} api={api} />
			</Carousel>
		</section>
	);
}
