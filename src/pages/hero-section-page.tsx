import { HeroSectionData } from '@/data/heroSectionData.ts';
import HeroSection from '@/components/HeroSection.tsx';

const HeroSectionPage = () => {
	return (
		<>
			<main className={'page-background flex min-h-screen w-full flex-1 justify-center p-4'}>
				{HeroSectionData.map((hero) => (
					<HeroSection
						key={hero.id}
						{...hero}
					/>
				))}
			</main>
		</>
	);
};
export default HeroSectionPage;
