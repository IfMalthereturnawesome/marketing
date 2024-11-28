import type { PricingSectionSingle } from '@/data/pricingSectionSingleData';
import { cn } from '@/lib/utils';

type PricingSectionSingleProps = PricingSectionSingle & {
	className?: string;
};

const PricingSectionSingle = ({
	title,
	subtitle,
	description,
	list,
	prices,
	className,
}: PricingSectionSingleProps) => {
	return (
		<div className='w-full rounded bg-primary shadow-sm md:rounded-md md:shadow-md lg:shadow-lg'>
			<div className='flex h-full flex-col items-center justify-center px-3 py-12 md:px-4 md:py-16 lg:p-24'>
				<section
					className={cn(
						'flex w-full flex-col items-center justify-center gap-12 md:gap-16',
						className,
					)}
				>
					<div className='text-center'>
						<hgroup className='flex flex-col gap-5 md:px-8 lg:px-40'>
							<div className='flex flex-col gap-3 md:px-10 lg:px-10'>
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
					<div className='flex w-full flex-col gap-8 lg:max-w-screen-xl lg:flex-row lg:items-start'>
						<div className='lg:flex lg:h-full lg:flex-1 lg:flex-col lg:justify-center'>
							{list.map((item) => (
								<div
									key={item.id}
									className='flex flex-col items-start gap-8 md:gap-16'
								>
									<h4 className='text-2xl font-semibold text-primary-foreground md:text-4xl'>
										{item.title}
									</h4>
									<ul className='flex w-full flex-col gap-5'>
										{item.list.map((item) => (
											<li
												key={item.id}
												className='flex w-full items-center gap-3 lg:px-3'
											>
												<div className='text rounded-full bg-indigo-50 text-indigo-500'>
													<item.icon size={24} />
												</div>
												<p className='text-lg font-normal text-secondary-foreground'>
													{item.header}
												</p>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className='flex md:w-full lg:w-[487px]'>
							{prices.map((price) => (
								<div
									className='flex flex-col items-center justify-center gap-8 self-stretch rounded-lg border p-8 shadow-lg
										md:w-full lg:w-full'
								>
									<div className='flex flex-col gap-2'>
										<div className='mx-auto w-fit rounded-full border border-green-200 bg-green-50 px-2.5 py-1'>
											<p className='text-center text-sm font-normal text-success-foreground'>
												{price.badgeTitle}
											</p>
										</div>
										<div className='mx-auto w-fit'>
											<h5 className='text-center text-5xl font-semibold text-primary-foreground lg:text-6xl'>
												{price.price}
											</h5>
										</div>
										<div className='mx-auto w-fit'>
											<p className='text-center text-sm font-normal text-secondary-foreground'>
												{price.priceDescription}
											</p>
										</div>
									</div>
									<div className='flex flex-col px-8'>
										<p className='text-center text-xl font-normal text-primary-foreground lg:whitespace-pre'>
											{price.description}
										</p>
									</div>
									<button
										type='button'
										className='w-full rounded bg-brand-foreground px-4 py-2.5 text-center text-base font-medium text-white
											hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize
											focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled
											disabled:text-disabled-foreground'
									>
										{price.buttonText}
									</button>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default PricingSectionSingle;
