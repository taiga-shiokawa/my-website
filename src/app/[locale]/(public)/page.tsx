import HomePageClient from '@/components/HomePageClient';
import { getPosts } from '@/lib/post'

export default async function HomePage() {
  const posts = await getPosts();
  
  return <HomePageClient posts={posts} />;
}