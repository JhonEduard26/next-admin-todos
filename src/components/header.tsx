import CartIcon from "@/icons/cart"
import SearchIcon from "@/icons/search-icon"
import { cookies } from "next/headers"
import Link from "next/link"

const getTotalItems = (cart: Record<string, number>): number => {
  let items = 0
  for (const key in cart) {
    items += cart[key]
  }

  return items
}

export default async function Header() {
  const cookieStore = await cookies()
  const cartCookie = JSON.parse(cookieStore.get('cart')?.value ?? '{}')

  const items = getTotalItems(cartCookie)


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
        <Link className="flex items-center gap-x-1 px-2 py-1 rounded-lg border border-gray-300" href="/dashboard/cart">
          {
            items > 0 && (
              <span className="font-semibold text-sm">{items}</span>
            )
          }
          <CartIcon className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
}