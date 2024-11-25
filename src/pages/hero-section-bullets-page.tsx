import { heroSectionBulletsData } from '@/data/heroSectionBulletsData.ts';
import HeroSectionBullet from '@/components/HeroSectionBullet.tsx';

const HeroSectionBulletsPage = () => {
	return (
		<main className='page-background flex min-h-screen w-full flex-1 justify-center p-4'>
			{heroSectionBulletsData.map((hero) => (
				<HeroSectionBullet
					key={hero.id}
					{...hero}
				/>
			))}
		</main>
	);
};
export default HeroSectionBulletsPage;
