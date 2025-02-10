import { SideNav } from "@/components/side-nav"
import { MainContent } from "@/components/main-content"

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideNav />
      {/* <main className="flex-1 p-6">
        <MainContent />
      </main> */}
    </div>
  )
}

