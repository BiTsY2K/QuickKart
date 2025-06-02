"use client"

import { Product } from "@/types/products";
import { Star } from "lucide-react";
import Link from "next/link";

export function ReviewsAndRating({ product }: {
  product: Product
}) {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={`ratingStar${i}`} className={`w-4 h-4 
        ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      `} />
    ));
  };

  return (
    <div className="flex items-center mb-4">
      <div className="flex mr-2">{renderStars(product.rating)}</div>
      <span className="text-sm text-gray-500">
        <Link href={"/"} className="mb-1">{product.reviews.length} reviews</Link>
      </span>
    </div>
  )
}