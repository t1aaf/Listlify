import Sidebar from '@/components/Sidebar'
import StickyWall from '@/components/StickyWalls'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-100 mb-8">Sticky Wall</h1>
          <StickyWall />
        </div>
      </main>
    </div>
  )
}