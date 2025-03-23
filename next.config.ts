import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

// パスを./i18nに変更
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  experimental: {
    // 開発中のキャッシュを無効化
    disableOptimizedLoading: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default withNextIntl(nextConfig);