export type HeroSectionBullet = {
	id: string;
	title: string;
	image: string;
	bullets: string[];
};

export const heroSectionBulletsData: HeroSectionBullet[] = [
	{
		id: '1',
		title: 'Premium abstract images',
		image: '/images/prism-2.png',
		bullets: [
			'Minimum 5K image resolution',
			'Various format variants available',
			'Retina display support',
		],
	},
];
