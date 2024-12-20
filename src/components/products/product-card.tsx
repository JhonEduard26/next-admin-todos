'use client'


import Image from "next/image"

import PlusIcon from "@/icons/plus"
import TrashIcon from "@/icons/trash"
import type { Product } from "@/data/products"
import Star from "@/components/products/star-svg"
import * as cartActions from "@/actions/cart-actions"
import { useRouter } from "next/navigation"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const router = useRouter()

  const onAddToCart = () => {
    cartActions.addProductToCart(product.id)
    router.refresh()
  }

  const onDeleteProduct = () => {
    cartActions.deleteProductToCart(product.id)
    router.refresh()
  }

  return (
    <div className="shadow rounded-lg max-w-sm bg-gray-800 border-gray-100">

      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={product.image}
          alt="product image" />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-white">
            {product.name}
          </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {
            Array.from({ length: product.rating }, (_, i) => (
              <Star key={i} />
            ))
          }

          {/* Rating Number */}
          <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
            {product.rating.toFixed(1)}
          </span>
        </div>


        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">${product.price}</span>

          <div className="flex">
            <button
              className="text-white mr-2 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={onAddToCart}  
            >
              <PlusIcon className="w-5 h-5" />
            </button>
            <button
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
              onClick={onDeleteProduct}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>

        </div>


      </div>
    </div>
  )
}