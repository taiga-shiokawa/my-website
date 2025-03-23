"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export default function SearchPage({ params }: { params: { locale: string } }) {
  const [searchQuery, setSearchQuery] = useState('')
  const locale = params.locale

  return (
    <div className="w-[768px] min-h-[510px] mx-auto dark:bg-[#212737]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-4">
        <Link href={`/${locale}`} className="text-gray-500 hover:text-[#027d9c]">Home</Link>
        <span className="text-gray-500">»</span>
        <span>Search</span>
      </div>

      {/* Search Title */}
      <h1 className="text-4xl font-bold mb-4">Search</h1>
      
      {/* Search Description */}
      <p className="text-gray-500 italic mb-6">Search any article...</p>
      
      {/* Search Input */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="pl-10 py-3 pr-4 w-full rounded border border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#027d9c] focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Search Results would go here */}
      {/* This will be empty initially and populate when a search is performed */}
    </div>
  )
}