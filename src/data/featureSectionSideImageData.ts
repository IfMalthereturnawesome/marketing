import {
	RiHdLine,
	RiWaterPercentLine,
	RiRainbowLine,
	RiRocket2Line,
	RiP2pLine,
	RiCopyrightLine,
	RemixiconComponentType,
} from '@remixicon/react';

export type FeatureSectionSideImage = {
	id: string;
	title: string;
	description: string;
	subtitle: string;
	image: string;

	list: FeatureSectionList[];
};

type FeatureSectionList = {
	id: string;
	icon: RemixiconComponentType;
	header: string;
	description: string;
};

export const featureSectionSideImageData: FeatureSectionSideImage[] = [
	{
		id: '1',
		title: 'For designers, by designers',
		subtitle: 'High quality images',
		description:
			'Unleash boundless creativity with a large repository\n of images optimized for designers',
		image: `for-designers.png`,

		list: [
			{
				id: '1',
				icon: RiHdLine,
				header: '5K resolution support',
				description:
					'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
			},
			{
				id: '2',
				icon: RiWaterPercentLine,
				header: 'From water to glass',
				description:
					'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
			},
			{
				id: '3',
				icon: RiRainbowLine,
				header: 'Portrait or landscape',
				description:
					"Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
			},
		],
	},
	{
		id: '2',
		title: 'Convenience and licensing\n that empowers',
		subtitle: 'Best-in-class support',
		description:
			"In a world where storytelling constantly evolves,\n don't let licensing and poor support hold you down.",
		image: 'licensing-that-empowers.png',
		list: [
			{
				id: '1',
				icon: RiRocket2Line,
				header: 'Faster downloads',
				description:
					'Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience',
			},
			{
				id: '2',
				icon: RiP2pLine,
				header: 'Convenience for teams',
				description:
					'Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.',
			},
			{
				id: '3',
				icon: RiCopyrightLine,
				header: 'Royalty-free licensing',
				description:
					'Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.',
			},
		],
	},
];
