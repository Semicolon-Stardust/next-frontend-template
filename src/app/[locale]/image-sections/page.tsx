import {
	ImageSection,
	AlternateImageSection1,
	AlternateImageSection2,
} from '@/sections/image-sections/image-section';

export default function ImageSectionsPage() {
	return (
		<div className="space-y-12 px-6 py-16 sm:px-12">
			<ImageSection />
			<AlternateImageSection1 />
			<AlternateImageSection2 />
		</div>
	);
}
