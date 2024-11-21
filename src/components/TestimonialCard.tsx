import { cn } from '@/lib/utils.ts';

type TestimonialCardProps = {
  authorName: string;
  handle: string;
  description: string;
  authorImage: string;
  className?: string;
};

const TestimonialCard = ({
  authorName,
  handle,
  description,
  authorImage,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-[340px] flex-col gap-4 rounded-lg bg-primary p-6 shadow',
        className,
      )}
    >
      <div className={'flex items-center gap-4 self-stretch'}>
        <div>
          <img
            className={'max-h-12 min-h-12 min-w-12 max-w-12 rounded-full'}
            src={authorImage}
            alt={authorName}
          />
        </div>
        <hgroup>
          <h2
            className={
              'break-words text-justify text-lg font-semibold tracking-wide text-primary-foreground'
            }
          >
            {authorName}
          </h2>
          <p
            className={
              'break-words text-sm font-normal text-secondary-foreground'
            }
          >
            {handle}
          </p>
        </hgroup>
      </div>
      <div>
        <p
          className={'text-base font-normal text-secondary-foreground'}
          lang={'en'}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default TestimonialCard;
