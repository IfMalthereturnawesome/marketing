import ProfileCard from '@/components/ProfileCard.tsx';
import { profileCardData } from '@/data/profileCardData';

const ProfileCardPage = () => {
  return (
    <main
      className={
        'min-h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[200px]'
      }
    >
      {profileCardData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </main>
  );
};
export default ProfileCardPage;
