import { Plus } from 'lucide-react'

export default function StickyWall() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Social Media Note */}
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Social Media</h3>
        <ul className="space-y-2 text-gray-300">
          <li>- Plan social content</li>
          <li>- Build content calendar</li>
          <li>- Plan promotion and distribution</li>
        </ul>
      </div>

      {/* Content Strategy Note */}
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Content Strategy</h3>
        <p className="text-gray-300">
          Would need time to get insights (goals, personas, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.
        </p>
      </div>

      {/* Email A/B Tests Note */}
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Email A/B Tests</h3>
        <ul className="space-y-2 text-gray-300">
          <li>- Subject lines</li>
          <li>- Sender</li>
          <li>- CTA</li>
          <li>- Sending times</li>
        </ul>
      </div>

      {/* Banner Ads Note */}
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Banner Ads</h3>
        <p className="text-gray-300">Notes from the workshop:</p>
        <ul className="space-y-2 text-gray-300 mt-2">
          <li>- Sizing matters</li>
          <li>- Choose distinctive imagery</li>
          <li>- The landing page must match the display ad</li>
        </ul>
      </div>

      {/* Add New Note Button */}
      <button className="p-6 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
        <Plus className="h-8 w-8 text-gray-400" />
      </button>
    </div>
  )
}

