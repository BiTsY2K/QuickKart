import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { Product } from "./ProductListingPage";

export default function ProductCard({ product, viewMode }: {
  product: Product,
  viewMode: "GRID" | "LIST"
}) {
  // Render star ratings
  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} size={14} className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
    ));
  };
  return (
    <>
      {viewMode === "GRID" ? (
        /* Grid view product card */
        <Card className="group flex flex-col h-full gap-0 p-0 rounded-[2px] overflow-hidden">
          <div className="relative pt-[100%] overflow-hidden">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover transition-transform group-hover:scale-105" />
            {product.discountPrice && (<Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>)}
            {product.newArrival && (<Badge className="absolute top-2 left-2 bg-blue-500">New</Badge>)}
            {product.bestSeller && (<Badge className="absolute top-2 left-2 bg-amber-500">Best Seller</Badge>)}

            <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-10 transition-all">
              <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                <Button variant="default" className="w-full rounded-[2px] cursor-pointer" disabled={!product.inStock}>
                  <ShoppingCart className="h-4 w-4 mr-1" /> {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>

            <Button size="icon" variant="ghost"
              className="absolute top-2 right-2 h-7 w-7 rounded-full bg-white/80 hover:bg-white cursor-pointer"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <CardContent className="flex-1 p-2 pt-0 mt-2">
            <div className="qk_product_meta_info font-semibold mb-0.5">
              <h3 className="uppercase line-clamp-1 leading-5"><span className="">{product.brand}</span></h3>
              <Link href={`/product/${product.id}`} className="hover:underline">
                <h4 className="text-sm font-medium line-clamp-1 leading-5">{product.name}</h4>
              </Link>
            </div>

            <div className="flex items-center space-x-0.5 mt-1">
              {renderStarRating(product.rating)}
              <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
            </div>

            <div className="mt-2 flex flex-wrap items-end space-x-1">
              {product.discountPrice ? (
                <>
                  <span className="qk_price font-semibold">
                    {/* <span className="qk_offscreen">Rs {product.price}</span> */}
                    <span className="flex items-end text-lg leading-[1.31rem] space-x-0.5">
                      <span className="qk_price_symbol text-sm">Rs.</span>
                      <span className="qk_price_whole">{product.price}</span>
                    </span>
                  </span>
                  <div className="text-gray-500 text-sm space-x-0.5 inline-block">
                    <span className="">M.R.P.:</span>
                    <span className="line-through">Rs. {product.price}</span>
                  </div>
                  <span className="text-sm md:ml-1">({Math.round((product.discountPrice / product.price) * 100)}% off)</span>
                </>
              ) : (
                <>
                  <span className="qk_price font-semibold">
                    {/* <span className="qk_offscreen">Rs {product.price}</span> */}
                    <span className="flex items-end text-lg leading-[1.31rem] space-x-0.5">
                      <span className="qk_price_symbol text-sm">Rs.</span>
                      <span className="qk_price_whole">{product.price}</span>
                    </span>
                  </span>
                </>
              )}
            </div>

            {/* {product.freeShipping && (<p className="text-xs text-green-600 mt-1">Free Shipping</p>)} */}
            {/* {product.colors.length > 0 && (
                  <div className="flex items-center gap-1 mt-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="h-3 w-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                    {product.colors.length > 1 && (
                      <span className="text-xs text-gray-500">
                        +{product.colors.length - 1} more
                      </span>
                    )}
                  </div>
                )} */}
          </CardContent>
        </Card>
      ) : (
        /* List view product card */
        <Card className="h-full gap-0 p-1 rounded-[2px] overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-36 aspect-[3/4] bg-secondary">
              <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
            </div>

            <div className="flex flex-col flex-1 px-4 py-2">
              <div className="flex flex-col flex-1">
                {product.discountPrice && (<Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>)}
                {product.newArrival && (<Badge className="absolute top-2 left-2 bg-blue-500">New</Badge>)}
                {product.bestSeller && (<Badge className="absolute top-2 left-2 bg-amber-500">Best Seller</Badge>)}

                <div className="flex justify-between">
                  <div>
                    <div className="qk_product_meta_info font-semibold mb-0.5">
                      <h3 className="uppercase line-clamp-1 leading-5"><span className="">{product.brand}</span></h3>
                      <Link href={`/product/${product.id}`} className="hover:underline">
                        <h4 className="text-sm font-medium line-clamp-1 leading-5">{product.name}</h4>
                      </Link>
                    </div>
                    <div className="flex items-center gap-1 my-1">
                      {renderStarRating(product.rating)}
                      <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
                    </div>
                  </div>

                  <div className="text-right">
                    {product.discountPrice ? (
                      <>
                        <span className="qk_price font-semibold block">
                          {/* <span className="qk_offscreen">Rs {product.price}</span> */}
                          <span className="text-lg leading-[1.31rem] space-x-0.5">
                            <span className="qk_price_symbol text-sm">Rs.</span>
                            <span className="qk_price_whole">{product.price}</span>
                          </span>
                        </span>
                        <div className="text-gray-500 text-sm space-x-0.5 inline-block">
                          <span className="">M.R.P.:</span>
                          <span className="line-through">Rs. {product.price}</span>
                        </div>
                        <span className="text-sm ml-1">({Math.round((product.discountPrice / product.price) * 100)}% off)</span>
                      </>
                    ) : (
                      <>
                        <span className="qk_price font-semibold">
                          {/* <span className="qk_offscreen">Rs {product.price}</span> */}
                          <span className="flex items-end text-lg leading-[1.31rem] space-x-0.5">
                            <span className="qk_price_symbol text-sm">Rs.</span>
                            <span className="qk_price_whole">{product.price}</span>
                          </span>
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-1 mt-1">{product.description}</p>
              </div>

              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mt-3 gap-2">
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  {product.brand && (<Badge variant="outline" className="font-normal">{product.brand}</Badge>)}
                  {product.freeShipping && (<Badge variant="outline" className="bg-green-50 text-green-700 font-normal">Free Shipping</Badge>)}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <Button variant="outline" size="sm" className="h-8 !px-4 rounded-[2px] cursor-pointer"><Heart className="h-4 w-4 mr-1" />Wishlist</Button>
                  <Button size="sm" variant="default" className="h-8 !px-4 rounded-[2px] cursor-pointer" disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 mr-1" /> {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}