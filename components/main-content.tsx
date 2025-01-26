import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function MainContent() {
  return (
    <div className="max-w-[400px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Software Developer</p>
          </div>
        </div>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>

      <Card className="bg-blue-50 p-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Total Hours</p>
            <p className="font-semibold">23h</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Daily Streak</p>
            <p className="font-semibold">182</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Friends</p>
            <p className="font-semibold">7</p>
          </div>
        </div>
      </Card>

      <div className="mb-6">
        <h3 className="font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <StatCard title="Udemy" hours="12h" isNew />
          <StatCard title="Coursera" hours="7h" />
          <StatCard title="YouTube" hours="2h" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Continue watching</h3>
        <div className="space-y-3">
          <CourseCard title="Intro to Cyber-security" author="Paul Newman" progress={70} />
          <CourseCard title="Intro to Polymer" author="Zahir Khan" progress={25} />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  hours,
  isNew,
}: {
  title: string
  hours: string
  isNew?: boolean
}) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="h-8 w-8 bg-gray-100 rounded-lg" />
        {isNew && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">NEW</span>}
      </div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="font-semibold">{hours}</p>
    </Card>
  )
}

function CourseCard({
  title,
  author,
  progress,
}: {
  title: string
  author: string
  progress: number
}) {
  return (
    <Card className="p-4">
      <div className="flex gap-3 mb-3">
        <div className="h-8 w-8 bg-gray-100 rounded-full" />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500">{author}</p>
        </div>
      </div>
      <Progress value={progress} className="h-1.5" />
    </Card>
  )
}

