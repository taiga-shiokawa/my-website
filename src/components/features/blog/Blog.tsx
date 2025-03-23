import Link from 'next/link'
import React from 'react'
import { Post } from '@/app/types/post'

export default function Blog({ post }: { post: Post }) {

  return (
    <div>
      <div className='flex flex-col my-[20px]'>
        <Link href={`/posts/${post.id}`} className='text-[#027d9c]'>
          {post.title}
        </Link>
        <time className='text-sm'>{new Date(post.createdAt).toLocaleDateString()}</time>
        <p>{post.content}</p>
      </div>
    </div>
  )
}
