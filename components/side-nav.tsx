'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Smartphone,
  LayoutDashboard,
  Briefcase,
  LayoutTemplateIcon as LayoutLanding,
  Plus,
  TrendingUp,
  Heart,
  Eye,
  Pencil,
  History,
  MessageSquare,
  ThumbsUp,
} from "lucide-react"

export function SideNav() {
  const pathname = usePathname()
  
  return (
    <nav className="w-[240px] bg-white border-r h-screen flex">
      <div className="w-[72px] flex flex-col items-center py-3 border-r">
        <NavItem 
          icon={<Plus className="h-5 w-5" />} 
          label="New" 
          href="/dashboard/new" 
          isActive={pathname === '/dashboard/new'} 
        />
        <NavItem 
          icon={<TrendingUp className="h-5 w-5" />} 
          label="Top" 
          href="/dashboard/top"
          isActive={pathname === '/dashboard/top'} 
        />
        <NavItem 
          icon={<Heart className="h-5 w-5" />} 
          label="Saved" 
          href="/dashboard/saved"
          isActive={pathname === '/dashboard/saved'} 
        />
        <NavItem 
          icon={<History className="h-5 w-5" />} 
          label="History" 
          href="/dashboard/history"
          isActive={pathname === '/dashboard/history'} 
        />
        <NavItem 
          icon={<MessageSquare className="h-5 w-5" />} 
          label="Help" 
          href="/dashboard/help"
          isActive={pathname === '/dashboard/help'} 
        />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto py-3 px-2 [&::-webkit-scrollbar]:hidden">
          <div className="space-y-2">
            <ProjectItem title="简历推荐" likes={256} />
            <ProjectItem title="简历推荐" likes={128} />
            <ProjectItem title="简历推荐" likes={96} />
            <ProjectItem title="简历推荐" likes={64} />
            <ProjectItem title="简历推荐" likes={48} />
            <ProjectItem title="简历推荐" likes={32} />
            <ProjectItem title="简历推荐" likes={24} />
            <ProjectItem title="简历推荐" likes={16} />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  icon,
  label,
  href,
  isActive,
}: {
  icon: React.ReactNode
  label: string
  href: string
  isActive?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs mb-2 w-14 h-14 ${
        isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className="mt-1 text-[10px]">{label}</span>
    </Link>
  )
}

function CategoryItem({
  icon,
  label,
  className = "",
}: {
  icon: React.ReactNode
  label: string
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 p-2 rounded-xl ${className}`}>
      {icon}
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  )
}

function ProjectItem({
  title = "简历标题",
  time = "最后更新时间",
  imageUrl = "/placeholder-resume.jpg",
  likes = 128,
}: {
  title?: string
  time?: string
  imageUrl?: string
  likes?: number
}) {
  return (
    <div className="p-2 rounded-xl hover:bg-gray-50 cursor-pointer">
      <div className="relative w-full h-32 mb-2 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {/* 如果没有图片则显示预览图标 */}
            <Eye className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-700 mb-1">{title}</div>
      <div className="flex items-center text-gray-400">
        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
        <span className="text-xs">{likes}</span>
      </div>
    </div>
  )
}

