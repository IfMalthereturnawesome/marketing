export type HeroSection = {
	id: string;
	title: string;
	description: string;
	image: string;
	imageBig?: string;
};

export const HeroSectionData: HeroSection[] = [
	{
		id: '1',
		title: 'Well crafted abstract images',
		description: 'High quality abstract images for your projects, wallpaper and presentations.',
		image: '/images/prism.png',
		imageBig: '/images/prism.png',
	},
];
