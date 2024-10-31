import LogoIcon from "@/icons/logo-icon"
import NavLinks from "./nav-links"

export default function Sidebar() {
  return (
    <aside className="absolute top-0 left-0 h-screen w-52 p-5 border border-gray-300 bg-white">
      <div className="flex items-center gap-x-2 mb-10">
        <LogoIcon className="text-white w-10 h-10" />
        <h2 className="font-semibold">To-Do App</h2>
      </div>
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full w-28 h-28 mb-5"
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt="user"
        />
        <p className="font-semibold">John Doe</p>
        <p className="text-sm text-gray-700">Role</p>
      </div>
      <NavLinks />
    </aside>
  )
}