import React from "react";
import { ShoppingCart } from "lucide-react";
import Button from "../buttons";

/**
 * Product Card Component
 * @returns {JSX.Element}
 */
export function ProductCard() {
  return (
    <div className="w-fit md:w-1/5 bg-[#FDFDFD] hover:shadow-lg p-4 flex flex-col gap-2 rounded-md">
      {/* product name */}
      <h2 className="font-bold text-xl text-[#1E1E1E]">Fresh Pepper</h2>
      {/* star rating and rating number */}
      <div className="flex gap-2">
        <div>⭐⭐⭐⭐⭐</div>
        <span className="font-medium">5.0</span>
      </div>
      {/* product price */}
      <h3 className=" text-base text-[#2D4C2E]">$100.00</h3>
      <Button className="py-3 px-4">
        <ShoppingCart />
        Add to cart
      </Button>
    </div>
  );
}
