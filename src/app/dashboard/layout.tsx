import LogoIcon from "@/icons/logo-icon";
import SearchIcon from "@/icons/search-icon";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <header className="flex justify-between items-center ml-52 px-4 py-2 bg-white">
        <h1 className="font-semibold text-xl">Dashboard</h1>
        <div
          className="inline-flex gap-x-2 justify-center items-center p-2 rounded-2xl border border-gray-300 focus-within:outline-2 focus-within:outline focus-within:outline-gray-500"
        >
          <label htmlFor="search">
            <SearchIcon className="ml-2" />
          </label>
          <div className="border-l border-gray-300 w-[1px] h-4"></div>
          <input
            className="outline-none text-sm"
            id="search"
            type="text"
            placeholder="Buscar aquí"
            autoComplete="off"
          />
        </div>
      </header>

      {/* Aside */}
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
        <div>
          <nav>
            <ul>
              <li className="mb-2">
                <a className="inline-block w-full px-4 py-2 rounded-md bg-red-500 text-white text-sm" href="/dashboard">Dashboard</a>
              </li>
              <li className="mb-2">
                <a className="inline-block w-full px-4 py-2 rounded-md bg-red-500 text-white text-sm" href="/dashboard/rest-todos">Rest todos</a>
              </li>
              <li className="mb-2">
                <a className="inline-block w-full px-4 py-2 rounded-md bg-red-500 text-white text-sm" href="#">Server actions</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="ml-52">
        {children}
      </div>
    </div>
  )
}