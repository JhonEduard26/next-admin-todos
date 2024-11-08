import { auth } from "@/auth"

export default async function DashboardPage() {
  const session = await auth()
  
  return (
    <div>
      <p>
        {JSON.stringify(session?.user, null, 2)}
      </p>
    </div>
  )
}