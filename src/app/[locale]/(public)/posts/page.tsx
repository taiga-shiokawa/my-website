import BlogList from '@/components/features/blog/BlogList'
import Link from 'next/link'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getPosts } from '@/lib/post'
import { Post } from '@/app/types/post'

export default async function PostsPage({ params }: { params: { locale: string } }) {
  // ページネーション用の状態管理（実際の実装では現在のページ番号と総ページ数を動的に設定する）
  const currentPage = 1
  const totalPages = 4
  const locale = params.locale

  const posts = await getPosts() as Post[]

  return (
    <div className="w-[768px] min-h-[600px] mx-auto dark:bg-[#212737]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-4">
        <Link href={`/${locale}`} className="text-gray-500 hover:text-[#027d9c]">Home</Link>
        <span className="text-gray-500">»</span>
        <span>Posts</span>
      </div>

      {locale === "en" &&
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
      }
      <h1 className="text-4xl font-bold mb-4">ブログ一覧</h1>

      <div className="relative mb-8">
        <h3 className='text-[16px]'>All the articles I've posted.</h3>
          <BlogList posts={posts} />
      </div>

      {/* Pagination */}
      {posts.length > 8 &&
      <div className="flex items-center justify-center space-x-4">
        <Link 
          href={currentPage > 1 ? `/posts?page=${currentPage - 1}` : '#'} 
          className={`flex items-center ${currentPage <= 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-[#027d9c]'}`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Prev</span>
        </Link>
        
        <div className="text-gray-300">
          {currentPage} / {totalPages}
        </div>
        
        <Link 
          href={currentPage < totalPages ? `/posts?page=${currentPage + 1}` : '#'} 
          className={`flex items-center ${currentPage >= totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-[#027d9c]'}`}
        >
          <span>Next</span>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    }
    </div>
  )
}