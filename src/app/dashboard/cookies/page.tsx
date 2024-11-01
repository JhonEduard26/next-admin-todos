import TabBar from "@/components/tab-bar"

export const metadata = {
  title: "Cookies page",
  description: "Cookies page",
}

export default function CookiesPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Tabs</h2>
      <div className="w-1/3 h-auto p-5 rounded-lg bg-white border border-gray-300">
        <TabBar />
      </div>
    </div>
  )
}