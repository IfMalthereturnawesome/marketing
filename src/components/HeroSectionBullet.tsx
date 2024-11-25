import type { HeroSectionBullet } from '@/data/heroSectionBulletsData';
import { cn } from '@/lib/utils.ts';
import { RiCheckFill } from '@remixicon/react';

type HeroSectionBulletProps = HeroSectionBullet & {
	className?: string;
};

const HeroSectionBullet = ({ title, image, bullets, className }: HeroSectionBulletProps) => {
	return (
		<div className='flex w-full rounded bg-primary shadow-sm md:rounded-md md:py-2 md:shadow-md lg:shadow-lg'>
			<div className='flex w-full justify-center px-4 py-12 md:py-16 lg:p-24 2xl:px-40'>
				<section
					className={cn(
						'flex w-full flex-col items-center justify-center gap-12 self-stretch lg:flex-row lg:gap-8 2xl:gap-12',
						className,
					)}
				>
					<div className='flex w-full flex-col gap-8 md:gap-16 lg:w-2/3 lg:items-start'>
						<header className='flex justify-start'>
							<h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl'>{title}</h1>
						</header>
						<div className='w-full'>
							<ul className='flex w-full flex-col gap-6 self-stretch'>
								{bullets.map((bullet) => (
									<div>
										<li
											key={bullet}
											className='flex items-center gap-3 text-lg font-normal text-secondary-foreground'
										>
											<RiCheckFill
												className={
													'inline-flex size-6 rounded-full bg-brand-subtle fill-indigo-500'
												}
											/>
											<span>{bullet}</span>
										</li>
									</div>
								))}
							</ul>
						</div>
						<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:w-4/5 lg:grid-cols-2 lg:gap-8'>
							<a
								href='#'
								className={'w-full md:order-2 lg:col-span-1 lg:flex-1'}
							>
								<button
									className={`shadow-marketing flex w-full grow items-center justify-center rounded border border-solid
										border-brand-primary bg-brand-primary px-5 py-3 text-base font-medium
										text-primary-inverted-foreground transition-all duration-100 ease-in-out
										hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize
										focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled
										disabled:text-disabled-foreground md:gap-2.5 md:px-6 md:py-4 md:text-lg`}
									type={'button'}
								>
									See pricing
								</button>
							</a>
							<a
								href='#'
								className={'w-full lg:col-span-1 lg:flex-1'}
							>
								<button
									className={`shadow-marketing flex w-full grow items-center justify-center rounded border-[0.5px] border-solid
										bg-white px-5 py-3 text-base font-medium text-primary-foreground transition-all duration-100
										ease-in-out hover:border hover:bg-primary-hover focus:bg-primary-hover
										focus:shadow-[0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled
										disabled:text-disabled-foreground md:gap-2.5 md:px-6 md:py-4 md:text-lg`}
									type={'button'}
								>
									Learn more
								</button>
							</a>
						</div>
					</div>
					<div className={'grid w-full grid-cols-6 lg:grid-cols-7'}>
						<img
							src={image}
							alt={title}
							className={`col-span-6 flex h-[264px] w-full justify-center rounded-lg object-cover md:h-[526px] md:rounded-2xl
								lg:col-span-7 2xl:h-[750px]`}
						/>
					</div>
				</section>
			</div>
		</div>
	);
};
export default HeroSectionBullet;
