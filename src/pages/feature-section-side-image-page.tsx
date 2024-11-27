import FeatureSectionSideImage from '@/components/FeatureSectionSideImage.tsx';
import { featureSectionSideImageData } from '@/data/featureSectionSideImageData.ts';

type FeatureSectionSideImagePageProps = {
	orientation: 'left' | 'right';
};

const FeatureSectionSideImagePage = ({ orientation }: FeatureSectionSideImagePageProps) => {
	const featureData =
		orientation === 'left' ? featureSectionSideImageData[1] : featureSectionSideImageData[0];

	return (
		<main className='page-background flex min-h-screen w-full flex-1 justify-center p-4'>
			<FeatureSectionSideImage
				orientation={orientation}
				{...featureData}
			/>
		</main>
	);
};
export default FeatureSectionSideImagePage;
