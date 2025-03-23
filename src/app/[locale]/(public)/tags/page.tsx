import Link from 'next/link'
import React from 'react'

// カスタム点線用のスタイル
const dotted = {
  backgroundImage: 'linear-gradient(to right, rgb(107 114 128) 11%, rgba(255,255,255,0) 0%)',
  backgroundPosition: 'bottom',
  backgroundSize: '4px 1px',
  backgroundRepeat: 'repeat-x',
  paddingBottom: '2px',
}

export default async function TagsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale

  const tags = [
    { name: 'authentication', count: 5 },
    { name: 'cli', count: 3 },
    { name: 'fundamentals', count: 8 },
    { name: 'game', count: 2 },
    { name: 'gin', count: 4 },
    { name: 'go', count: 7 },
    { name: 'golang', count: 12 },
    { name: 'jwt', count: 6 },
    { name: 'middleware', count: 4 },
    { name: 'rest-api', count: 9 },
    { name: 'sql', count: 5 },
    { name: 'swagger', count: 3 }
  ];

  return (
    <div className="w-[768px] min-h-[510px] mx-auto dark:bg-[#212737]">
      <div className="flex items-center gap-2 py-4">
        <Link href={`/${locale}`} className="text-gray-500 hover:text-[#027d9c]">Home</Link>
        <span className="text-gray-500">»</span>
        <span>Tags</span>
      </div>

      {locale === "en" &&
        <h1 className="text-4xl font-bold mb-4">Tags</h1>
      }
      <h1 className="text-4xl font-bold mb-4">タグ</h1>
      
      <div className="relative mb-12">
        <h3 className='text-[16px]'>All the tags used in projects and posts.</h3>
      </div>

      {/* All Tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {tags.map((tag) => (
          <Link 
            key={tag.name}
            href={`/${locale}/tags/${tag.name}`}
            className="inline-flex items-center px-4 py-2 text-[#027d9c] dark:bg-[#1e2231] dark:text-white dark:hover:bg-[#2d3346] rounded-md transition-colors"
          >
            <span className="font-mono mr-1 text-[20px]">#</span>
            <span className="mr-1 font-mono text-lg" style={dotted}>{tag.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
