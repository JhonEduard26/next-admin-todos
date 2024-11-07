import { ItemCard } from "@/components/products/item-card"
import { Product, products } from "@/data/products"
import { cookies } from "next/headers"

export const metadata = {
  title: "Carrito",
  description: "Productos en el carrito",
}

interface ProductsInCart {
  product: Product
  quantity: number
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductsInCart[] = []

  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id)

    if (product) {
      productsInCart.push({ product, quantity: cart[id] })
    }
  }

  return productsInCart
}

export default async function CartPage() {
  const cookieStore = await cookies()

  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}')
  const productsInCart = getProductsInCart(cart)

  const totalToPay = productsInCart.reduce((acc, current) =>
    (current.product.price * current.quantity) + acc, 0
  )

  return (
    <>
      <h2 className="text-4xl ">Productos en el carrito</h2>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-5 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-2/3">
          {
            productsInCart.map(({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/3 p-5 rounded-lg border border-gray-300 bg-white">
          <h4 className="text-xl font-semibold mb-4">Total a pagar:</h4>
          <div className="">
            <p className="text-4xl font-semibold mb-2">$ {(totalToPay * 1.15).toFixed(2)}</p>
            <span>Impuestos ${(totalToPay * 0.15).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  )
}