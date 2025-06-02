'use client'

// ProductDetailPage.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
  Star, ChevronRight, ShoppingBag, Heart, Share2, Minus, Plus,
  Truck, RotateCcw, ShieldCheck,
  ScanBarcode,
} from 'lucide-react';

import Link from 'next/link';
import { ReviewsAndRating } from './ProductReviewsRating';
import { Product, ProductVariant } from '@/types/products';
import { Breadcrumb } from './Breadcrumb';

// Sample product data
const product: Product = {
  id: "prod-1234",
  title: "Premium Wireless Noise-Cancelling Headphones",
  description: "Experience crystal-clear audio with our latest noise-cancelling technology. These premium wireless headphones offer unparalleled sound quality and comfort for extended listening sessions.",
  features: [
    "Active Noise Cancellation",
    "40-hour battery life",
    "Quick charge capability (5 min charge = 2 hours playback)",
    "Premium memory foam ear cushions",
    "Voice assistant compatibility"
  ],
  images: [
    { id: "img-1", url: "https://m.media-amazon.com/images/I/61oqO1AMbdL._SX522_.jpg", alt: "" },
    { id: "img-2", url: "https://m.media-amazon.com/images/I/71joBKOGFBL._SL1500_.jpg", alt: "" },
    { id: "img-3", url: "https://m.media-amazon.com/images/I/81KwZzTIXJL._SL1500_.jpg", alt: "" },
    { id: "img-4", url: "https://m.media-amazon.com/images/I/71R4AzlTi+L._SL1500_.jpg", alt: "" },
    { id: "img-5", url: "https://m.media-amazon.com/images/I/81rVZu5JHUL._SL1500_.jpg", alt: "" },
    { id: "img-6", url: "https://m.media-amazon.com/images/I/71UnE5AArZL._SL1500_.jpg", alt: "" },
    { id: "img-7", url: "https://m.media-amazon.com/images/I/71xsREqXS+L._SL1500_.jpg", alt: "" },
  ],
  category: "Audio",
  brand: "SoundMaster",
  variants: [
    { id: "var-1", name: "Matte Black", price: 299.99, compareAtPrice: 349.99, inStock: true },
    { id: "var-2", name: "Pearl White", price: 299.99, compareAtPrice: 349.99, inStock: true },
    { id: "var-3", name: "Midnight Blue", price: 319.99, compareAtPrice: 369.99, inStock: false }
  ],
  specs: [
    { name: "Connectivity", value: "Bluetooth 5.2, 3.5mm audio jack" },
    { name: "Battery Life", value: "Up to 40 hours (ANC on)" },
    { name: "Driver Size", value: "40mm" },
    { name: "Frequency Response", value: "20Hz - 20kHz" },
    { name: "Weight", value: "250g" }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Alex Johnson",
      rating: 5,
      date: "2025-02-15",
      comment: "Best headphones I've ever owned. The noise cancellation is incredible!"
    },
    {
      id: "rev-2",
      author: "Sam Taylor",
      rating: 4,
      date: "2025-02-01",
      comment: "Great sound quality but I wish they were a bit lighter for long sessions."
    }
  ],
  rating: 4.5
};

const ProductDetailPage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string>(product.images[0].url);
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0].url);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs text-gray-500 mb-6">
        <span className="">Home</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="">{product.category}</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="font-medium text-gray-900">{product.title}</span>
      </div>


      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section*/}
          <div className='flex flex-1 space-x-1.5'>
            <div className="flex flex-col basis-1/12 space-1">
              {product.images.map(image => (
                <div key={image.id} tabIndex={1}
                  onMouseEnter={() => setHoveredImage(image.url)} onMouseLeave={() => setHoveredImage('')}
                  onClick={() => setSelectedImage(image.url)}
                  className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 
                    ${selectedImage === image.url ? 'border-blue-600' : 'border-transparent'}
                  `}
                >
                  <Image src={image.url} alt={image.alt} layout="fill" objectFit="cover" className="w-full h-full" />
                </div>
              ))}
            </div>

            <div className="flex flex-col basis-11/12 relative aspect-square overflow-hidden rounded-lg mb-4 bg-black">
              <Image src={hoveredImage || selectedImage} alt={product.title} layout="fill" objectFit="cover" className="w-full h-full" />
            </div>
          </div>
          {/* Product Information Section */}
          <div>
            <div className="mb-2 flex items-center">
              <Badge variant="outline" className="font-medium text-blue-600 mr-2">{product.brand}</Badge>
              <Badge variant="outline" className="font-medium">{product.category}</Badge>
            </div>

            <h1 className="text-2xl font-medium text-gray-900 mb-2">{product.title}</h1>
            <ReviewsAndRating product={product} />

            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-900 flex items-center">
                Rs. {selectedVariant.price.toFixed(2)}
                {selectedVariant.compareAtPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    Rs. {selectedVariant.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <div className="flex space-x-2 text-sm">
                {selectedVariant.compareAtPrice && (
                  <p className="text-green-600 font-medium">
                    Save Rs.{(selectedVariant.compareAtPrice - selectedVariant.price).toFixed(2)} ({Math.round((1 - selectedVariant.price / selectedVariant.compareAtPrice) * 100)}%)
                  </p>
                )}
                <p className="text-gray-900">Inclusive of all taxes</p>
              </div>
            </div>

            <p className="leading-5 text-gray-700 mb-6">{product.description}</p>

            <div className="flex justify-between items-end">
              {/* Variants */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Color: <span className='text-gray-900'>{selectedVariant.name}</span></h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(variant => (
                    <Button key={variant.id}
                      variant={selectedVariant.id === variant.id ? "default" : "outline"}
                      className={!variant.inStock ? "opacity-50 cursor-not-allowed" : ""}
                      onClick={() => variant.inStock && setSelectedVariant(variant)}
                      disabled={!variant.inStock}
                    >
                      {variant.name}
                      {!variant.inStock && " (Out of Stock)"}
                    </Button>
                  ))}
                </div>
              </div>
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className=""
                    onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}
                  >
                    <Minus className='' />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" className=""
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <Plus className='' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mb-8">
              {!selectedVariant.inStock ? (
                <div className="text-center">
                  <span className="text-sm text-destructive font-bold">Currently unavailable.</span> <br />
                  We don't know when or if this item will be back in stock.
                </div>
              ) : (
                <div className="shop_actions flex flex-col gap-3">
                  <Button variant={"secondary"} className="w-full py-6 cursor-pointer" disabled={!selectedVariant.inStock}>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    <span className="uppercase">
                      {selectedVariant.inStock ? "Add to Cart" : "Out of Stock"}
                    </span>
                  </Button>
                  <Button variant={"default"} className="w-full py-6 cursor-pointer" disabled={!selectedVariant.inStock}>
                    <ScanBarcode className="w-5 h-5 mr-2" />
                    <span className="uppercase">
                      {selectedVariant.inStock ? "Buy Now" : "Out of Stock"}
                    </span>
                  </Button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="py-6 cursor-pointer"><Heart className="w-5 h-5 mr-2" /><span className="">Add to Wishlist</span></Button>
                <Button variant="outline" className="py-6 cursor-pointer"><Share2 className="w-5 h-5 mr-2" /><span className="">Share</span></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping and Returns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Truck className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium">Free Shipping</h3>
            <p className="text-sm text-gray-500">On orders over $50</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <RotateCcw className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium">30-Day Returns</h3>
            <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium">2-Year Warranty</h3>
            <p className="text-sm text-gray-500">Full coverage</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailPage;