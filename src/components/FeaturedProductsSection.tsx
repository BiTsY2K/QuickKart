"use client";;
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "./ProductListingPage";
import ProductCard from "./ProductCard";
import Heading from "./shared_components/DecoratorDash";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Clothing", subcategories: ["T-shirts", "Shirts", "Pants", "Jackets", "Dresses"] },
  { name: "Footwear", subcategories: ["Sneakers", "Boots", "Sandals", "Formal Shoes"] },
  { name: "Accessories", subcategories: ["Bags", "Watches", "Belts", "Hats", "Jewelry"] }
];

const brands = ["Nike", "Adidas", "Zara", "H&M", "Levi's", "Puma", "Under Armour", "Gap"];
const colors = ["Black", "White", "Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Grey"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const materials = ["Cotton", "Polyester", "Leather", "Nylon", "Wool", "Denim"];

const SectionHeader = ({ children, headerTitle, headerDescription, className, ...props }: {
  children: string,
  headerTitle?: string,
  headerDescription?: string
  className?: string,
}) => {
  return (
    <Heading isSection {...props} className={cn("text-lg capitalize ", className)}>{children}</Heading>
  )
}


function FeaturedProductsSection({ title, description, children, className, ...props }: {
  children: React.ReactNode,
  title?: string,
  description?: string,
  className?: string
}) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const generateMockProducts = () => {
      const mockProducts: Product[] = Array.from({ length: 5 }, (_, i) => {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomSubCategory = randomCategory.subcategories[Math.floor(Math.random() * randomCategory.subcategories.length)];
        const randomPrice = Math.floor(Math.random() * 900) + 100;
        const hasDiscount = Math.random() > 0.7;

        return {
          id: `prod-${i + 1}`,
          name: `${brands[Math.floor(Math.random() * brands.length)]} ${randomSubCategory}`,
          description: `Premium quality ${randomSubCategory.toLowerCase()} made with the finest materials. Perfect for casual and formal occasions.`,
          price: randomPrice,
          discountPrice: hasDiscount ? Math.floor(randomPrice * 0.2) : undefined,
          rating: Math.floor(Math.random() * 5) + 1,
          imageUrl: `/api/placeholder/300/300`,
          category: randomCategory.name,
          subCategory: randomSubCategory,
          brand: brands[Math.floor(Math.random() * brands.length)],
          colors: [colors[Math.floor(Math.random() * colors.length)]],
          sizes: randomCategory.name === "Clothing" ? [sizes[Math.floor(Math.random() * sizes.length)]] : undefined,
          material: materials[Math.floor(Math.random() * materials.length)],
          tags: ["seasonal", Math.random() > 0.5 ? "trending" : "classic"],
          inStock: Math.random() > 0.2,
          freeShipping: Math.random() > 0.5,
          newArrival: Math.random() > 0.8,
          bestSeller: Math.random() > 0.8,
        };
      });

      setProducts(mockProducts);
    };

    generateMockProducts();
  }, []);

  return (
    <section className="__section_trendingProducts__ py-10">
      <div className="md:flex items-center justify-center">
        {/* <SectionHeader headerTitle={title} headerDescription={description} className="">{header}</SectionHeader> */}
        <Heading isSection {...props} className={cn("text-lg capitalize !mx-0 !mr-auto", className)}>{children}</Heading>
        <Button variant={"default"} size={"lg"}>SHOP NOW</Button>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4" gap-0.5 md:gap-2`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={"GRID"} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
