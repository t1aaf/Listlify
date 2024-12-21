'use client'

import { LogOut, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Sidebar() {
  const user = {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=40&width=40"
  }

  const notes = [
    { id: 1, title: 'Social Media' },
    { id: 2, title: 'Content Strategy' },
    { id: 3, title: 'Email A/B Tests' },
    { id: 4, title: 'Banner Ads' }
  ]

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-screen">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-gray-100">{user.name}</span>
            <span className="text-xs text-gray-400">{user.email}</span>
          </div>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-auto p-6">
        <h3 className="text-xs font-semibold text-gray-400 mb-4">YOUR NOTES</h3>
        <nav className="space-y-1">
          {notes.map((note) => (
            <a
              key={note.id}
              href="#"
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md group"
            >
              <span>{note.title}</span>
              <ChevronRight className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
      </div>

      {/* Sign Out Button */}
      <div className="p-6 border-t border-gray-700">
        <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md w-full">
          <LogOut className="h-4 w-4 mr-3" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  )
}

