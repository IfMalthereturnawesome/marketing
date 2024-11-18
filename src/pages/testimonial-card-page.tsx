import TestimonialCard from '@/components/TestimonialCard';
import { testimonialCardData } from '@/data/testimonialCardData';

const TestimonialCardPage = () => {
  const { authorName, handle, description, authorImage } =
    testimonialCardData[0];

  return (
    <>
      <main
        className={
          'h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[200px]'
        }
      >
        <TestimonialCard
          authorImage={authorImage}
          authorName={authorName}
          handle={handle}
          description={description}
        />
      </main>
    </>
  );
};
export default TestimonialCardPage;
