"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product } from '@/types/products';
import { Star } from 'lucide-react';
import { Button } from './ui/button';


export function ProductDetailsTabs({ product }: {
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
    <div className="mt-12">
      {/* Product Details Tabs */}
      <Tabs defaultValue="features">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 bg-blue-100 text-blue-600 rounded-full p-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="specs" className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
          <div className="border rounded-lg overflow-hidden">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="font-medium">{spec.name}</div>
                <div>{spec.value}</div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center mb-6">
            <h3 className="text-lg font-semibold mr-2">Customer Reviews</h3>
            <div className="flex items-center">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating.toFixed(1)} out of 5 ({product.reviews.length} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {product.reviews.map(review => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm font-medium">{review.author}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          <Button variant="outline" className="mt-6">
            Write a Review
          </Button>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
          <div className="space-y-4">
            <p>We offer free standard shipping on all orders over $50. For orders under $50, standard shipping is $4.99.</p>
            <p>Express shipping is available for $9.99 and typically arrives within 2-3 business days.</p>

            <h4 className="font-medium mt-6 mb-2">Shipping Times:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
            </ul>

            <h4 className="font-medium mt-6 mb-2">Return Policy:</h4>
            <p>We offer a 30-day return policy for all products. Items must be in their original condition with all packaging and accessories included.</p>
            <p>To initiate a return, please contact our customer service team with your order number and reason for return.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}