'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel';
import { CarouselDots } from '@/components/ui/carousel-dots';
import { type CarouselApi } from '@/components/ui/carousel';

export default function HeroCarousel() {
	const t = useTranslations('HomePage');
	const carouselData = Object.values(t('heroSection.carousel'));
	const [api, setApi] = useState<CarouselApi>();

	return (
		<section className="relative w-full" style={{ height: '90vh' }}>
			<Carousel
				className="h-full w-full"
				plugins={[Autoplay({ delay: 2000 })]}
				setApi={setApi}
			>
				<CarouselContent className="h-full">
					{carouselData.map((item, index) => (
						<CarouselItem
							key={index}
							className="relative h-full min-h-[90vh] w-full"
						>
							<Image
								src={item.image}
								alt={item.altText}
								fill
								className="object-cover"
								priority
								loading="eager"
							/>
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-gray-300 md:ml-12 md:items-start">
								<h1 className="mb-2 text-center text-3xl font-bold tracking-wide md:text-left md:text-5xl">
									{item.heading}
								</h1>
								<p className="text-md mb-4 pt-5 text-center font-light tracking-wide md:text-left md:text-xl">
									{item.paragraph}
								</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 opacity-50" />
				<CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 opacity-50" />
				<CarouselDots numberOfSlides={carouselData.length} api={api} />
			</Carousel>
		</section>
	);
}
