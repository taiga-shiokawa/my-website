"use client"

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BlogList from '@/components/features/blog/BlogList';
import { Post } from '@/app/types/post';

// postsをpropsとして受け取る
export default function HomePageClient({ posts }: { posts: Post[] }) {
  // useTranslationsフックを使用して現在のロケールの翻訳を取得
  const t = useTranslations('HomePage');
  
  return (
    <>
    <div className="flex flex-col mx-auto min-h-[470px] w-[768px] y-[104px] dark:bg-[#212737]">
      {/* Profile Image */}
      <div className="mx-auto mt-[50px] mb-[15px] w-[200px] h-[200px] rounded-full overflow-hidden">
      <Image
        src="/S__185925634.jpg"
        width={500}
        height={500}
        alt={t('profileImageAlt')}
      />
      </div>
      
      {/* Title */}
      <h1 className="text-[48px] text-center mb-[15px] font-bold mt-4">Hello, I'm Taiga</h1>
      
      {/* Description */}
      <div className='w-[768px] y-[104px] mx-auto'>
        <p className="w-[768px] y-[104px] text-starttext-[16px] mt-4 text-#333">
          {t('description')}
        </p>
      </div>
    </div>

    <div className='border-t border-t-[#e5e7eb] py-4 mx-auto mt-[30px] w-[768px] y-[104px] dark:bg-[#212737]'>
      {/* Blog Component */}
      <h3 className='text-[24px]'>{t('featuredTitle')}</h3>
      <BlogList posts={posts} />
    </div>
    <div className='border-t border-t-[#e5e7eb] py-4 mx-auto mt-[30px] w-[768px] y-[104px] dark:bg-[#212737]'>
      {/* Blog Component */}
      <h3 className='text-[24px]'>{t('projectTitle')}</h3>
    </div>
    </>
  );
}