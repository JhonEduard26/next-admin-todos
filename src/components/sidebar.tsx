import Image from "next/image"
import { redirect } from "next/navigation"

import { auth, signOut } from "@/auth"
import LogoIcon from "@/icons/logo-icon"
import NavLinks from "./nav-links"
import ExitIcon from "@/icons/exit"

export default async function Sidebar() {
  const session = await auth()

  if (!session?.user) {
    redirect("/api/auth/signin")
  }

  const userRoles = session.user?.roles?.join(', ')
  const userImage = session.user?.image ?? "/default-profile-image.webp" 

  return (
    <aside className="absolute top-0 left-0 flex flex-col h-screen w-52 p-5 border border-gray-300 bg-white">
      <div className="flex items-center gap-x-2 mb-10">
        <LogoIcon className="text-white w-10 h-10" />
        <h2 className="font-semibold">To-Do App</h2>
      </div>
      <div className="flex flex-col items-center mb-10">
        <Image
          className="rounded-full mb-5 border-2 border-orange-500"
          src={userImage}
          alt="User profile image"
          width={112}
          height={112}
        />
        <p className="font-semibold text-center">{session.user.name}</p>
        <p className="text-sm text-gray-700 capitalize">{userRoles}</p>
      </div>
      <NavLinks />
      <div className="flex-1"></div>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button className="button" type="submit">
          <ExitIcon className="w-5 h-5" />
          <span>Sign out</span>
        </button>
      </form>
    </aside>
  )
}