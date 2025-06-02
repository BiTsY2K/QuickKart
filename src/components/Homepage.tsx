"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  ChevronRight,
  Star,
  Package,
  Truck,
  RefreshCw,
  Shield,
  X,
  Menu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function EcommerceLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock product data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      category: "Men's Fashion",
      originalPrice: 999,
      salePrice: 599,
      discount: "40% OFF",
      rating: 4.3,
      reviewCount: 245,
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      category: "Men's Fashion",
      originalPrice: 1899,
      salePrice: 1299,
      discount: "32% OFF",
      rating: 4.5,
      reviewCount: 189,
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      name: "Floral Print Summer Dress",
      category: "Women's Fashion",
      originalPrice: 1499,
      salePrice: 849,
      discount: "43% OFF",
      rating: 4.2,
      reviewCount: 172,
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      name: "Athletic Running Shoes",
      category: "Footwear",
      originalPrice: 2999,
      salePrice: 1999,
      discount: "33% OFF",
      rating: 4.6,
      reviewCount: 320,
      image: "/api/placeholder/300/400"
    },
    {
      id: 5,
      name: "Formal Blazer Suit",
      category: "Men's Fashion",
      originalPrice: 4999,
      salePrice: 3499,
      discount: "30% OFF",
      rating: 4.4,
      reviewCount: 115,
      image: "/api/placeholder/300/400"
    },
    {
      id: 6,
      name: "Designer Handbag",
      category: "Accessories",
      originalPrice: 2499,
      salePrice: 1699,
      discount: "32% OFF",
      rating: 4.7,
      reviewCount: 203,
      image: "/api/placeholder/300/400"
    },
    {
      id: 7,
      name: "Smart Casual Watch",
      category: "Accessories",
      originalPrice: 3299,
      salePrice: 2499,
      discount: "24% OFF",
      rating: 4.8,
      reviewCount: 178,
      image: "/api/placeholder/300/400"
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      category: "Electronics",
      originalPrice: 1999,
      salePrice: 1299,
      discount: "35% OFF",
      rating: 4.4,
      reviewCount: 256,
      image: "/api/placeholder/300/400"
    }
  ];

  // Categories with icons
  const categories = [
    { name: "Men", icon: "/api/placeholder/60/60" },
    { name: "Women", icon: "/api/placeholder/60/60" },
    { name: "Kids", icon: "/api/placeholder/60/60" },
    { name: "Beauty", icon: "/api/placeholder/60/60" },
    { name: "Electronics", icon: "/api/placeholder/60/60" },
    { name: "Home", icon: "/api/placeholder/60/60" },
    { name: "Sports", icon: "/api/placeholder/60/60" },
    { name: "Footwear", icon: "/api/placeholder/60/60" },
    { name: "Accessories", icon: "/api/placeholder/60/60" },
    { name: "Luxury", icon: "/api/placeholder/60/60" }
  ];

  // Banner data
  const banners = [
    {
      title: "Summer Sale",
      subtitle: "Up to 70% Off",
      cta: "Shop Now",
      image: "/api/placeholder/1200/400"
    },
    {
      title: "New Arrivals",
      subtitle: "Check out the latest styles",
      cta: "Explore",
      image: "/api/placeholder/1200/400"
    },
    {
      title: "Premium Collection",
      subtitle: "Luxury brands at amazing prices",
      cta: "Discover",
      image: "/api/placeholder/1200/400"
    }
  ];

  // Format currency
  const formatPrice = (price: number) => {
    return `₹${price}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          Free shipping on orders above ₹999 | Extra 10% off on your first order
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo */}
              <div className="font-bold text-2xl text-blue-600">ShopEase</div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {["Men", "Women", "Kids", "Home & Living", "Beauty", "Studio"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-800 hover:text-blue-600 font-medium flex items-center"
                  >
                    {item} <ChevronDown size={16} className="ml-1" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-slate-100 rounded-md px-3 py-2 flex-1 max-w-md mx-4">
              <Search size={20} className="text-slate-500 mr-2" />
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden md:flex flex-col items-center text-slate-700 hover:text-blue-600">
                <User size={20} />
                <span className="text-xs mt-1">Profile</span>
              </a>
              <a href="#" className="hidden md:flex flex-col items-center text-slate-700 hover:text-blue-600">
                <Heart size={20} />
                <span className="text-xs mt-1">Wishlist</span>
              </a>
              <a href="#" className="flex flex-col items-center text-slate-700 hover:text-blue-600 relative">
                <ShoppingCart size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                <span className="text-xs mt-1">Bag</span>
              </a>
            </div>
          </div>

          {/* Mobile Search - Shown below header on mobile */}
          <div className="md:hidden pb-4">
            <div className="flex items-center bg-slate-100 rounded-md px-3 py-2">
              <Search size={18} className="text-slate-500 mr-2" />
              <Input
                type="text"
                placeholder="Search products"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col">
                {["Men", "Women", "Kids", "Home & Living", "Beauty", "Studio"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-3 border-b border-slate-100 text-slate-800 flex justify-between items-center"
                  >
                    {item}
                    <ChevronRight size={16} />
                  </a>
                ))}
              </nav>
              <div className="flex gap-4 py-4">
                <a href="#" className="flex items-center gap-2 text-slate-700">
                  <User size={18} />
                  <span>Profile</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-slate-700">
                  <Heart size={18} />
                  <span>Wishlist</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Carousel Section */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {banners.map((banner, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 bg-gradient-to-r from-black/70 to-transparent">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{banner.title}</h2>
                        <p className="text-xl md:text-2xl text-white mb-6">{banner.subtitle}</p>
                        <Button className="w-fit">{banner.cta}</Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {categories.map((category, index) => (
                <a href="#" key={index} className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 transition-transform group-hover:scale-105">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-center group-hover:text-blue-600 transition-colors">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Deals of the Day */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Deals of the Day</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto aspect-[3/4] object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-pink-600">{product.discount}</Badge>
                    <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm opacity-80 hover:opacity-100">
                      <Heart size={20} className="text-slate-600" />
                    </button>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-sm font-semibold text-slate-500 mb-1">{product.category}</div>
                    <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{formatPrice(product.salePrice)}</span>
                      <span className="text-slate-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                      <span className="text-green-600 text-sm font-medium">{product.discount}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">
                        <span>{product.rating}</span>
                        <Star size={12} className="ml-1 fill-green-800 text-green-800" />
                      </div>
                      <span className="text-xs text-slate-500 ml-2">({product.reviewCount})</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Summer Essentials",
                  description: "Beat the heat in style",
                  image: "/api/placeholder/400/250"
                },
                {
                  title: "Workwear Edit",
                  description: "Office-ready outfits",
                  image: "/api/placeholder/400/250"
                },
                {
                  title: "Weekend Casual",
                  description: "Relaxed styles for days off",
                  image: "/api/placeholder/400/250"
                }
              ].map((collection, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-auto aspect-[16/10] object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-1">{collection.title}</CardTitle>
                    <p className="text-slate-600 mb-3">{collection.description}</p>
                    <Button variant="outline" className="w-full">Explore Collection</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Brands Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Top Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[...Array(6)].map((_, index) => (
                <a href="#" key={index} className="bg-white rounded-md p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img
                    src={`/api/placeholder/${120}/${60}`}
                    alt={`Brand ${index + 1}`}
                    className="max-h-12 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Now Products */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredProducts.slice(4, 8).map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto aspect-[3/4] object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-pink-600">{product.discount}</Badge>
                    <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm opacity-80 hover:opacity-100">
                      <Heart size={20} className="text-slate-600" />
                    </button>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-sm font-semibold text-slate-500 mb-1">{product.category}</div>
                    <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{formatPrice(product.salePrice)}</span>
                      <span className="text-slate-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                      <span className="text-green-600 text-sm font-medium">{product.discount}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">
                        <span>{product.rating}</span>
                        <Star size={12} className="ml-1 fill-green-800 text-green-800" />
                      </div>
                      <span className="text-xs text-slate-500 ml-2">({product.reviewCount})</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/1200/300"
                alt="Special Offer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center px-8 md:px-16 bg-gradient-to-r from-black/60 to-transparent">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">FLASH SALE ALERT!</h2>
                  <p className="text-lg md:text-xl text-white mb-4">Extra 25% off on selected items. Limited time offer.</p>
                  <Button>Shop Sale</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Truck className="h-8 w-8 text-blue-600" />,
                  title: "Free Shipping",
                  description: "On orders above ₹999"
                },
                {
                  icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
                  title: "Easy Returns",
                  description: "30-day return policy"
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-600" />,
                  title: "Secure Payment",
                  description: "100% secure checkout"
                },
                {
                  icon: <Package className="h-8 w-8 text-blue-600" />,
                  title: "Premium Quality",
                  description: "Certified products"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-3">Subscribe to our Newsletter</h3>
              <p className="text-slate-600 mb-6">Get updates on new arrivals, special offers and more.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Online Shopping</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kids</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Living</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beauty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Customer Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">T&C</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Orders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Experience ShopEase App</h4>
              <p className="text-sm mb-4">Download our app for the best experience</p>
              <div className="flex flex-col gap-2">
                <a href="#">
                  <img src="/api/placeholder/140/42" alt="Get it on Play Store" className="h-10 w-auto" />
                </a>
                <a href="#">
                  <img src="/api/placeholder/140/42" alt="Download on App Store" className="h-10 w-auto" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Keep in Touch</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}