import {
	RemixiconComponentType,
	RiDownload2Line,
	RiBrushLine,
	RiCopyrightLine,
	RiRefund2Line,
	RiTeamLine,
	RiRefreshLine,
} from '@remixicon/react';

export type FeatureSectionGrid = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	list: FeatureSectionGridList[];
};

export type FeatureSectionGridList = {
	id: string;
	icon: RemixiconComponentType;
	header: string;
	description: string;
};

export const featureSectionGridData: FeatureSectionGrid[] = [
	{
		id: '1',
		title: 'Easy access to top quality images',
		subtitle: 'Premium abstract images',
		description:
			'In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.',
		list: [
			{
				id: '1',
				icon: RiDownload2Line,
				header: 'Infinite Download',
				description:
					"Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
			},
			{
				id: '2',
				icon: RiBrushLine,
				header: 'Purely Handcrafted',
				description:
					'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
			},
			{
				id: '3',
				icon: RiCopyrightLine,
				header: 'All Are Under licensed',
				description:
					'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
			},
			{
				id: '4',
				icon: RiRefund2Line,
				header: 'Cancel Anytime',
				description: "Subscribe at your own pace, and cancel when you feel it's enough.",
			},
			{
				id: '5',
				icon: RiTeamLine,
				header: 'Empowering For Team',
				description: 'We support multiple seats at once, requiring only a single payment.',
			},
			{
				id: '6',
				icon: RiRefreshLine,
				header: 'No Limitations',
				description:
					'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
			},
		],
	},
];
