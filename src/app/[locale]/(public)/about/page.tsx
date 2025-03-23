"use client";

import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const params = useParams();
  const locale = params.locale as string;
  
  // ロケール付きのパスを生成する関数
  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };
  
  return (
    <div className="w-[768px] min-h-[510px] mx-auto dark:bg-[#212737]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-4">
      <Link href={`/${locale}`} className="text-gray-500 hover:text-[#027d9c]">Home</Link>
        <span className="text-gray-500">»</span>
        <span>About</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      
      {/* About Content */}
      <div className="relative mb-12">
        <h3 className='text-[16px]'>{t('paragraph1')}</h3>
        <h3 className='text-[16px]'>{t('paragraph2')}</h3>
        <h3 className='text-[16px]'>{t('paragraph3')}</h3>
        <h3 className='text-[16px]'>{t('paragraph4')}</h3>
        <h3 className='text-[16px]'>{t('paragraph5')}</h3>
        <h3 className='text-[16px]'>
          {t('paragraph6')}
          <Link href={getLocalizedPath("/contact")} className="text-[#027d9c] hover:underline">
            {t('contactLink')}
          </Link>
        </h3>
      </div>
    </div>
  )
}