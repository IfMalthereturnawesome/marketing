import PricingSectionSingle from '@/components/PricingSectionSingle.tsx';
import { pricingSectionSingleData } from '@/data/pricingSectionSingleData.ts';

const PricingSectionSinglePage = () => {
	return (
		<main className='page-background flex min-h-screen w-full flex-1 justify-center p-4'>
			<PricingSectionSingle {...pricingSectionSingleData[0]} />
		</main>
	);
};
export default PricingSectionSinglePage;
