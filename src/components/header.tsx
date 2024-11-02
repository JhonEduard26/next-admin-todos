import CartIcon from "@/icons/cart"
import SearchIcon from "@/icons/search-icon"

export default function Header() {
  return (
    <header className="flex justify-between items-center ml-52 px-4 py-2 bg-white">
      <h1 className="font-semibold text-xl">Dashboard</h1>
      <div className="flex items-center gap-x-6">
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
        <div className="flex items-center gap-x-1 px-2 py-1 rounded-lg border border-gray-300">
          <span className="font-semibold text-sm">10</span>
          <CartIcon />
        </div>
      </div>
    </header>
  )
}