import Link from "next/link"
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
} from "lucide-react"

export function SideNav() {
  return (
    <nav className="w-[240px] bg-white border-r h-screen flex">
      <div className="w-[72px] flex flex-col items-center py-3 border-r">
        <NavItem icon={<Plus className="h-5 w-5" />} label="New" href="#" />
        <NavItem icon={<TrendingUp className="h-5 w-5" />} label="Top" href="#" />
        <NavItem icon={<Heart className="h-5 w-5" />} label="Saved" href="#" />
        {/* <NavItem icon={<Eye className="h-5 w-5" />} label="Views" href="#" isActive />
        <NavItem icon={<Pencil className="h-5 w-5" />} label="Edit" href="#" /> */}
        <NavItem icon={<History className="h-5 w-5" />} label="History" href="#" />
        <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Help" href="#" />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="py-3 px-2 space-y-2">
          <CategoryItem icon={<Smartphone className="h-6 w-6" />} label="Mobile App" className="bg-gray-100" />
          <CategoryItem icon={<LayoutDashboard className="h-6 w-6" />} label="Dashboard" />
        </div>
        <div className="flex-1 overflow-y-auto py-3 px-2">
          <div className="space-y-2">
            <CategoryItem icon={<Briefcase className="h-6 w-6" />} label="Portfolio" />
            <CategoryItem icon={<LayoutLanding className="h-6 w-6" />} label="Landing Page" />
            <ProjectItem dots={["bg-gray-300", "bg-blue-400", "bg-blue-500"]} stats="2282" time="1 yr" />
            <ProjectItem
              dots={["bg-gray-900", "bg-blue-400", "bg-blue-500"]}
              title="Electric City Nights"
              stats="2099"
              time="1 yr"
            />
            <ProjectItem dots={["bg-purple-400", "bg-purple-500", "bg-purple-600"]} />
            {/* Additional project items to demonstrate scrolling */}
            <ProjectItem
              dots={["bg-green-400", "bg-green-500", "bg-green-600"]}
              title="Nature Explorer"
              stats="1854"
              time="2 yrs"
            />
            <ProjectItem
              dots={["bg-red-400", "bg-red-500", "bg-red-600"]}
              title="Fitness Tracker"
              stats="1632"
              time="1 yr"
            />
            <ProjectItem
              dots={["bg-yellow-400", "bg-yellow-500", "bg-yellow-600"]}
              title="Recipe Book"
              stats="1421"
              time="6 mo"
            />
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
  dots = [],
  title,
  stats,
  time,
}: {
  dots: string[]
  title?: string
  stats?: string
  time?: string
}) {
  return (
    <div className="p-2 rounded-xl hover:bg-gray-50">
      <div className="flex gap-1 mb-1.5">
        {dots.map((color, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${color}`} />
        ))}
      </div>
      {title && <div className="text-xs text-gray-500 mb-1">{title}</div>}
      {stats && time && (
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <Heart className="h-2.5 w-2.5" />
          <span>{stats}</span>
          <span>{time}</span>
        </div>
      )}
    </div>
  )
}

