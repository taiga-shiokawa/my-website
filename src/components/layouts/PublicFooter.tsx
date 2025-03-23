import Link from "next/link"
import { Mail, Github  } from "lucide-react"

export default function PublicFooter() {
  return (
    <footer className="border-t border-t-[#e5e7eb] py-4 mt-auto mx-auto w-[768px] y-[104px] dark:bg-[#212737]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          Copyright © 2025 | All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/contact" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <Github  className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}