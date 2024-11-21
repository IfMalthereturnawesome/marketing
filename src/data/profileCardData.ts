export type ProfileCard = {
  id: string;
  name: string;
  handle: string;
  description: string;
  image: string;
};

export const profileCardData: ProfileCard[] = [
  {
    id: '1',
    name: 'Sarah Dole',
    handle: 'Front End Engineer @ Microsoft',
    description:
      'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.  ',
    image: '/images/profile.png',
  },
];
