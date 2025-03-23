"use client"

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Globe, MoonIcon, SearchIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams, usePathname } from "next/navigation"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
  
export default function PublicHeader() {
    const params = useParams();
    const pathname = usePathname();
    const locale = params.locale as string || 'ja'; // 現在のロケールを取得
    
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // ダークモード関連の処理（変更なし）
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
        setIsDarkMode(initialDarkMode);
        
        if (initialDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        
        if (!isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
    };

    // ロケール付きのパスを生成する関数
    const getLocalizedPath = (path: string) => {
        return `/${locale}${path}`;
    };

    // 現在のパスを別のロケールに切り替える関数
    const getPathInLocale = (newLocale: string) => {
        // ルートパス（/ja や /en）の場合
        if (pathname === `/${locale}`) {
            return `/${newLocale}`;
        }
        
        // それ以外のパスの場合、現在のlocaleを新しいlocaleに置き換える
        const currentPath = pathname.replace(`/${locale}`, '');
        return `/${newLocale}${currentPath}`;
    };

    const isActiveLink = (path: string) => {
        const localizedPath = getLocalizedPath(path);

        // パスが一致する場合
        if (pathname === localizedPath) {
            return true;
        }

        // `/posts` などのパス内に現在のパスが含まれている場合（サブページでもアクティブにする場合）
        // 例：現在のパスが `/ja/posts/some-post` の場合、`/posts` リンクをアクティブにする
        if (path !== '/' && pathname.startsWith(localizedPath)) {
            return true;
        }

        return false;
    };

    // リンクのスタイルを動的に生成する関数
    const getLinkStyle = (path: string) => {
        const baseStyle = "text-sm";
        const hoverStyle = "hover:text-[#027d9c]";
        const activeStyle = "text-[#027d9c]";
        
        return `${baseStyle} ${hoverStyle} ${isActiveLink(path) ? activeStyle : ''}`;
    };
    

    return (
        <div className="w-[768px] y-[104px] mx-auto dark:bg-[#212737]">
            <header className="border-b border-b-[#e5e7eb] w-full mx-auto">
                <div className="container mx-auto py-4 flex items-center justify-between">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <Link href={`/${locale}`} className="text-[24px] hover:text-[#027d9c]">
                                Taiga With...
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <nav className="flex items-center gap-8">
                        <Link href={getLocalizedPath("/projects")} className={getLinkStyle("/projects")}>Projects</Link>
                        <Link href={getLocalizedPath("/posts")} className={getLinkStyle("/posts")}>Posts</Link>
                        <Link href={getLocalizedPath("/tags")} className={getLinkStyle("/tags")}>Tags</Link>
                        <Link href={getLocalizedPath("/about")} className={getLinkStyle("/about")}>About</Link>
                        <Link href={getLocalizedPath("/search")} aria-label="Search" className="hover:text-[#027d9c]">
                            <SearchIcon className="h-5 w-5" />
                        </Link>
                        
                        {/* 言語切り替えドロップダウン */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#027d9c] dark:hover:text-[#58a6ff]">
                                <Globe className="h-5 w-5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link href={getPathInLocale('ja')} className={locale === 'ja' ? 'font-bold' : ''}>
                                        日本語
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={getPathInLocale('en')} className={locale === 'en' ? 'font-bold' : ''}>
                                        English
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        
                        {/* ダークモードトグル */}
                        <button
                            aria-label="Toggle dark mode"
                            onClick={toggleDarkMode}
                            className="text-gray-700 dark:text-gray-300 hover:text-[#027d9c] dark:hover:text-[#58a6ff]"
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
}