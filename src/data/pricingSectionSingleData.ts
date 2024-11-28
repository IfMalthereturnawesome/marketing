import { RemixiconComponentType, RiCheckFill } from '@remixicon/react';

export type PricingSectionSingle = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	list: PricingSectionSingleList[];
	prices: PricingList[];
};

type PricingSectionSingleList = {
	id: string;
	title: string;
	list: {
		id: string;
		icon: RemixiconComponentType;
		header: string;
	}[];
};

type PricingList = {
	id: string;
	badgeTitle: string;
	price: string;
	priceDescription: string;
	description: string;
	buttonText: string;
};

export const pricingSectionSingleData: PricingSectionSingle[] = [
	{
		id: '1',
		title: 'Pay as you need',
		subtitle: 'One time purchase',
		description:
			'We offer one-time purchases with credits, for you to use as needed. Always active.',
		list: [
			{
				id: '1',
				title: 'Unlock creativity once, enjoy forever',
				list: [
					{
						id: '1',
						icon: RiCheckFill,
						header: '128 available credits for all images',
					},
					{
						id: '2',
						icon: RiCheckFill,
						header: 'Up to 3 users',
					},
					{
						id: '3',
						icon: RiCheckFill,
						header: '24 hour response time',
					},
					{
						id: '4',
						icon: RiCheckFill,
						header: 'Advanced analytics',
					},
				],
			},
		],
		prices: [
			{
				id: '1',
				badgeTitle: 'Popular',
				price: '$699',
				priceDescription: 'Prices in USD',
				description: 'Pay once, use it forever.\n No strings attached.',
				buttonText: 'Buy now',
			},
		],
	},
];
