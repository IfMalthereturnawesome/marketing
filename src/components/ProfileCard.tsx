import { cn } from '@/lib/utils.ts';
import type { ProfileCard } from '@/data/profileCardData';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from '@remixicon/react';

type ProfileCardProps = ProfileCard & {
  className?: string;
};

const ProfileInfo = ({
  name,
  handle,
  description,
}: {
  name: string;
  handle: string;
  description: string;
}) => (
  <div className='flex flex-col items-center gap-6 self-stretch'>
    <hgroup className='flex flex-col items-center justify-center gap-1 self-stretch'>
      <h2 className='relative top-[1px] self-stretch text-center text-xl font-medium text-primary-foreground'>
        {name}
      </h2>
      <p className='text-center text-sm font-normal text-secondary-foreground'>
        {handle}
      </p>
    </hgroup>
    <p className='line-clamp-3 text-center text-base font-normal text-secondary-foreground'>
      {description}
    </p>
  </div>
);

const ContactButton = () => (
  <a href='#'>
    <button
      type='button'
      className='w-full rounded bg-brand-primary px-4 py-2.5 text-center text-base font-medium text-white hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled disabled:text-disabled-foreground'
    >
      Contact me
    </button>
  </a>
);

const SocialLinks = () => {
  const links = [
    { icon: RiGithubFill, label: 'GitHub' },
    { icon: RiLinkedinBoxFill, label: 'Linkedin' },
    { icon: RiInstagramFill, label: 'Instagram' },
    { icon: RiTwitterXFill, label: 'Twitter' },
  ];

  return (
    <menu className='flex justify-center gap-4 self-stretch text-brand-primary'>
      {links.map(({ icon: Icon, label }) => (
        <li key={label}>
          <a href='#' aria-label={label} className='flex items-center'>
            <button className='flex justify-center gap-2 rounded p-2 focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:bg-disabled disabled:text-disabled-foreground'>
              <Icon className='size-5' aria-hidden='true' />
            </button>
          </a>
        </li>
      ))}
    </menu>
  );
};

const ProfileCard = ({
  name,
  handle,
  description,
  image,
  className,
}: ProfileCardProps) => {
  return (
    <div
      className={cn(
        'shadow-marketing mx-auto flex w-[340px] flex-col items-center gap-10 rounded-lg bg-primary px-4 py-6',
        className,
      )}
    >
      <div className='flex flex-col items-center gap-6 self-stretch'>
        <img
          src={image}
          alt={name}
          className={'min-w-16 max-w-16 rounded-full object-cover'}
        />

        <ProfileInfo name={name} handle={handle} description={description} />
      </div>
      <div className='flex flex-col gap-6 self-stretch'>
        <ContactButton />
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
