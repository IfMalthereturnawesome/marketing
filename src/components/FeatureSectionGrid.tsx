import { cn } from '@/lib/utils.ts';
import type { FeatureSectionGrid } from '@/data/featureSectionGridData.ts';

type FeatureSectionGridProps = FeatureSectionGrid & {
	className?: string;
};

const FeatureSectionGrid = ({
	title,
	subtitle,
	description,
	list,
	className,
}: FeatureSectionGridProps) => {
	return (
		<div className='w-full rounded bg-primary shadow-sm md:rounded-md md:shadow-md lg:shadow-lg'>
			<div className='flex h-full flex-col items-center justify-center px-3 py-12 md:px-4 md:py-16 lg:p-24'>
				<section
					className={cn('flex flex-col items-center justify-center gap-12 md:gap-16', className)}
				>
					<div className='text-center'>
						<hgroup className='flex flex-col gap-5 lg:px-40'>
							<div className='flex flex-col gap-3 lg:px-10'>
								<h4 className='text-base font-semibold text-brand-foreground'>{subtitle}</h4>
								<h1 className='text-3xl font-semibold text-primary-foreground md:text-5xl'>
									{title}
								</h1>
							</div>
							<p className='text-lg font-normal text-secondary-foreground md:text-xl'>
								{description}
							</p>
						</hgroup>
					</div>
					<div className='w-full'>
						<ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12'>
							{list.map((item) => (
								<li
									key={item.id}
									className='flex flex-col gap-5'
								>
									<div className='shadow-marketing mx-auto rounded-full bg-white p-3'>
										<item.icon
											size={24}
											className={'text-indigo-700'}
										/>
									</div>
									<div className='flex flex-col items-center gap-2 text-center'>
										<h4 className='text-xl font-semibold text-primary-foreground'>{item.header}</h4>
										<p className='text-base font-normal text-secondary-foreground'>
											{item.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default FeatureSectionGrid;
