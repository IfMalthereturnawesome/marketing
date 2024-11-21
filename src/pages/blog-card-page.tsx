import BlogCard from '@/components/BlogCard.tsx';
import { blogCardData } from '@/data/blogCardData';

const BlogCardPage = () => {
  return (
    <main
      className={
        'min-h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[120px]'
      }
    >
      {blogCardData.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
};

export default BlogCardPage;
