import type { FeatureSectionSideImage } from '@/data/featureSectionSideImageData';
import { cn } from '@/lib/utils.ts';

type FeatureSectionSideImageProps = FeatureSectionSideImage & {
	orientation?: 'left' | 'right';
	className?: string;
};

const FeatureSectionSideImage = ({
	title,
	description,
	subtitle,
	image,
	list,
	orientation,
	className,
}: FeatureSectionSideImageProps) => {
	return (
		<div
			id='Borders and rounding wrapper'
			className='w-full rounded bg-primary shadow-sm md:rounded-md md:shadow-md lg:shadow-lg'
		>
			<div
				className='flex h-full w-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center
					lg:justify-center lg:px-24 lg:py-24'
				id='Content wrapper'
			>
				<section
					className={cn('flex flex-col gap-12 md:gap-16', className)}
					id='Section Wrapper'
				>
					<div
						className='flex flex-col items-center justify-center text-center'
						id='Title, subtitler and description wrapper'
					>
						<hgroup className='flex flex-col gap-5 lg:px-40'>
							<div className='flex flex-col gap-3 lg:px-10'>
								<h4 className='text-base font-semibold text-brand-foreground'>{subtitle}</h4>
								<h1 className='text-3xl font-semibold text-primary-foreground md:text-5xl lg:whitespace-pre-line'>
									{title}
								</h1>
							</div>
							<div className='flex w-full justify-center self-stretch'>
								<p
									className={`${orientation === 'left' ? 'lg:whitespace-pre-line' : 'lg:whitespace-normal'} flex text-lg
										font-normal text-secondary-foreground md:whitespace-pre-line md:text-wrap md:text-center md:text-xl
										lg:whitespace-normal`}
								>
									{description}
								</p>
							</div>
						</hgroup>
					</div>
					<div
						id='List and Image wrapper'
						className='flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8'
					>
						<div
							id='List wrapper'
							className={`${orientation === 'left' ? 'order-1' : ''} lg:flex-1`}
						>
							<ul className='flex flex-col gap-10'>
								{list.map((item) => (
									<div
										key={item.id}
										className='w-full'
									>
										<li
											id={item.id}
											className='flex gap-4 md:gap-5'
										>
											<div className='shadow-marketing h-fit rounded-full bg-white p-3'>
												<item.icon
													size={24}
													className={'text-indigo-700'}
												/>
											</div>
											<div className='flex flex-col items-start justify-center gap-2 py-2.5'>
												<h3 className='text-lg font-semibold text-primary-foreground'>
													{item.header}
												</h3>
												<p className='text-base font-normal text-secondary-foreground'>
													{item.description}
												</p>
											</div>
										</li>
									</div>
								))}
							</ul>
						</div>
						<picture className='flex w-full lg:flex-1'>
							<source
								media='(min-width: 1440px)'
								srcSet={`/images/lg-${image}`}
								type='image/png'
								aria-label='feature-image'
							/>
							<source
								media='(min-width: 768px)'
								srcSet={`/images/md-${image}`}
								type='image/png'
								aria-label='feature-image'
							/>
							<source
								media='(min-width: 640px)'
								srcSet={`/images/sm-${image}`}
								type='image/png'
								aria-label='feature-image'
							/>
							<img
								src={`/images/sm-${image}`}
								alt='feature-image'
								className='flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
									lg:self-stretch 2xl:h-[450px]'
							/>
						</picture>
					</div>
				</section>
			</div>
		</div>
	);
};

export default FeatureSectionSideImage;
