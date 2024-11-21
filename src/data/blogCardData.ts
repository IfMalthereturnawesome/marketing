export type BlogCard = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

export const blogCardData: BlogCard[] = [
  {
    id: '1',
    title: 'Top 5 Living Room Inspirations',
    description:
      'Curated vibrants colors for your living, make it pop & calm in the same time.',
    category: 'Interior',
    image: '/images/spacejoy-living-room-inspirations.jpg',
  },
];

export default blogCardData;
