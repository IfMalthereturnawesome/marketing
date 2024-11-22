import type { HeroSection } from '@/data/heroSectionData';
import { cn } from '@/lib/utils.ts';

type HeroSectionProps = HeroSection & {
	className?: string;
};

const HeroSection = ({ title, description, image, imageBig, className }: HeroSectionProps) => {
	return (
		<div
			className={`flex w-full flex-1 flex-col justify-center rounded-md bg-neutral-subtle shadow-sm md:py-2 md:shadow-md
				lg:shadow-lg`}
		>
			<section className={cn('flex flex-col items-start self-stretch px-3 md:px-4 lg:px-0', className)}>
				<div
					className={`flex flex-col items-center justify-center gap-12 self-stretch py-12 md:gap-8 md:py-16 lg:flex-row lg:p-24
						2xl:px-48 2xl:py-24`}
				>
					<div className={'flex flex-col gap-8 self-stretch md:gap-16 lg:justify-center'}>
						<hgroup
							className={
								'flex flex-col items-center justify-center gap-4 self-stretch md:items-start md:gap-6'
							}
						>
							<h1
								className={
									'self-stretch text-left text-4xl font-semibold text-primary-foreground md:text-5xl lg:text-6xl'
								}
							>
								{title}
							</h1>
							<p
								className={'self-stretch text-left text-lg font-normal text-secondary-foreground md:text-xl'}
							>
								{description}
							</p>
						</hgroup>
						<div
							className='flex w-full gap-4 self-stretch md:grid md:grid-cols-3 md:items-center md:gap-8 lg:flex lg:w-[383px]
								lg:items-start'
						>
							<a
								href='#'
								className={'w-full md:w-auto lg:w-full'}
							>
								<button
									className={`shadow-marketing flex w-full grow items-center justify-center rounded border-[0.5px] border-solid bg-white
										px-5 py-3 text-base font-medium text-primary-foreground transition-all duration-100 ease-in-out hover:border
										hover:bg-primary-hover focus:bg-primary-hover focus:shadow-[0px_0px_0px_4px_rgba(68,_76,_231,_0.12)]
										disabled:bg-disabled disabled:text-disabled-foreground md:gap-2.5 md:px-6 md:py-4 md:text-lg`}
									type={'button'}
								>
									Learn more
								</button>
							</a>
							<a
								href='#'
								className={'w-full md:w-auto lg:w-full'}
							>
								<button
									className={`shadow-marketing flex w-full grow items-center justify-center rounded border border-solid border-brand-primary
										bg-brand-primary px-5 py-3 text-base font-medium text-primary-inverted-foreground transition-all duration-100
										ease-in-out hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize
										focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled
										disabled:text-disabled-foreground md:gap-2.5 md:px-6 md:py-4 md:text-lg`}
									type={'button'}
								>
									See pricing
								</button>
							</a>
						</div>
					</div>
					<div className={'flex w-full items-center justify-center self-stretch rounded-lg'}>
						<img
							src={image}
							alt={'Prism image'}
							className={'flex items-center self-stretch object-cover md:hidden'}
						/>
						<img
							src={imageBig}
							alt={'Prism image'}
							className={'hidden items-center justify-center self-stretch object-cover md:flex'}
						/>
						{/*  Different images for different devices */}
					</div>
				</div>
			</section>
		</div>
	);
};
export default HeroSection;
