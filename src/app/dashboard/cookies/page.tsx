import TabBar from "@/components/tab-bar"
import { cookies } from 'next/headers'

export const metadata = {
  title: "Cookies page",
  description: "Cookies page",
}

export default async function CookiesPage() {
  const cookieStore = await cookies()
  const cookieTab = cookieStore.get('selected-tab')?.value ?? '1'

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Tabs</h2>
      <div className="w-1/3 h-auto p-5 rounded-lg bg-white border border-gray-300">
        <TabBar currentTab={+cookieTab} />
      </div>
    </div>
  )
}