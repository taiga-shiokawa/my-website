import React from 'react'
import Blog from './Blog'
import { Post } from '@/app/types/post'

export default function BlogList({ posts = [] }: { posts?: Post[] }) {
    // posts が undefined の場合でもエラーが発生しないようにチェック
    if (!posts || posts.length === 0) {
      return <div className="py-4">No posts found</div>;
    }
  return (
    <div>
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  )
}

