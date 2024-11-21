import ProfileCard from '@/components/ProfileCard.tsx';
import { profileCardData } from '@/data/profileCardData';

const ProfileCardPage = () => {
  return (
    <main className={'page-background min-h-[100vh] pt-[200px]'}>
      {profileCardData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </main>
  );
};
export default ProfileCardPage;
