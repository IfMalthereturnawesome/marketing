import FeatureSectionGrid from '@/components/FeatureSectionGrid';
import { featureSectionGridData } from '@/data/featureSectionGridData';

const FeatureSectionGridPage = () => {
	return (
		<main className='page-background flex min-h-screen w-full flex-1 justify-center p-4'>
			<FeatureSectionGrid
				key={featureSectionGridData[0].id}
				{...featureSectionGridData[0]}
			/>
		</main>
	);
};
export default FeatureSectionGridPage;
