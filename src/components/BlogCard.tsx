import { cn } from '@/lib/utils.ts';
import type { BlogCard } from '@/data/blogCardData';
import { ArrowRightIcon } from 'lucide-react';

type BlogCardProps = BlogCard & {
  className?: string;
};

const BlogCard = ({
  title,
  description,
  category,
  image,
  className,
}: BlogCardProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-[340px] flex-col justify-center rounded-lg bg-primary shadow',
        className,
      )}
    >
      <div className={''}>
        <img
          src={image}
          alt={title}
          className={'h-72 w-full rounded-t-lg object-cover'}
        />
      </div>
      <div className={'flex flex-col gap-3 self-stretch px-4 py-6'}>
        <hgroup className={'flex flex-col gap-2'}>
          <div
            className={
              'w-fit rounded-full border border-success-border bg-success-subtle px-2 py-0.5'
            }
          >
            <h5 className={'text-sm font-normal text-success-foreground'}>
              {category}
            </h5>
          </div>

          <div>
            <h2 className={'text-lg font-semibold text-primary-foreground'}>
              {title}
            </h2>
          </div>
        </hgroup>
        <div className={'flex flex-col gap-6'}>
          <div>
            <p
              className={
                'line-clamp-3 text-base font-medium text-secondary-foreground'
              }
            >
              {description}
            </p>
          </div>
          <div className={'flex items-center'}>
            <a href='' className={'text-brand-foreground'}>
              <button
                type={'button'}
                className={
                  'flex items-center justify-around gap-1.5 px-0.5 text-base font-medium hover:text-brand-primary-emphasize focus:rounded focus:bg-white focus:text-brand-primary-emphasize focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:pointer-events-none disabled:text-disabled-foreground'
                }
              >
                Read more
                <ArrowRightIcon width={20} height={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
