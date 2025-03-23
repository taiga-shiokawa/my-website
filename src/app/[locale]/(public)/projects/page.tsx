import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getProjects } from '@/lib/project'
import { Project } from '@/app/types/project'
import ProjectCard from '@/components/features/project/ProjectCard'

export default async function ProjectPage({ params }: { params: { locale: string } }) {
  const projects = await getProjects() as Project[]
  // ページネーション用の状態管理（実際の実装では現在のページ番号と総ページ数を動的に設定する）
  // ロケール付きのパスを生成する関数
  const currentPage = 1
  const totalPages = 4
  const locale = params.locale

  return (
    <div className="w-[768px] min-h-[600px] mx-auto dark:bg-[#212737]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-4">
        <Link href={`/${locale}`} className="text-gray-500 hover:text-[#027d9c]">Home</Link>
        <span className="text-gray-500">»</span>
        <span>Projects</span>
      </div>

      {locale === "en" &&
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
      }
      <h1 className="text-4xl font-bold mb-4">プロジェクト一覧</h1>
      
      {/* Project Card */}
      <div className="container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>

      {/* Pagination */}
      {projects.length > 6 && 
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
