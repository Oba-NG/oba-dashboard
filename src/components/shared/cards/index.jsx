import React from "react";
import { ShoppingCart } from "lucide-react";
import Button from "../buttons";
import { useCart } from "@/context/cart";

/**
 * Product Card Component
 * @returns {JSX.Element}
 */
export function ProductCard({ name, price, rating, image }) {
  const { cartCount, setCartCount } = useCart();

  return (
    <div className="bg-[#FDFDFD] border border-[#E5E5E5] hover:shadow-lg hover:border-(--oba-green) p-4 flex flex-col gap-4 rounded-2xl">
      {/* product image */}
      <img
        src={image}
        alt={name}
        className="aspect-square object-cover rounded-xl"
      />
      {/* product name */}
      <h2 className="font-bold text-2xl text-[#1E1E1E]">{name}</h2>
      {/* star rating and rating number */}
      <div className="flex gap-2">
        <div>⭐⭐⭐⭐⭐</div>
        <span className="font-medium">{rating}</span>
      </div>
      {/* product price */}
      <h3 className="text-(--oba-dark-green) text-xl font-bold">${price}</h3>
      <Button onClick={() => setCartCount(cartCount + 1)} className="py-3 px-4">
        <ShoppingCart />
        Add to cart
      </Button>
    </div>
  );
}
