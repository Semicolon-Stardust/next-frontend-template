import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageWrapperProps {
	src: string;
	alt: string;
	className?: string;
}

export default function ImageWrapper({
	src,
	alt,
	className,
}: ImageWrapperProps) {
	return (
		<div
			className={cn(
				'relative w-full h-[200px] md:h-[90vh] overflow-hidden shadow-lg rounded-2xl p-4 md:p-0',
				className
			)}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes="(max-width: 768px) 100vw, 90vh"
				style={{ objectFit: 'cover' }}
			/>
		</div>
	);
}
