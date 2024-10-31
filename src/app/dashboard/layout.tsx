import Header from "@/components/header"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative">
      <Header />

      <Sidebar />
      
      <div className="ml-52 p-5">
        {children}
      </div>
    </div>
  )
}