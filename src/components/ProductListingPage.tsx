// app/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Sliders, Search, Star, Filter, X, ChevronDown, Grid, List } from "lucide-react";
import CollectionSorterDropdown from "./collections/CollectionSorterDropdown";
import ProductCard from "./ProductCard";
import MobileFilters from "./ProductListingMobileFilters";
import ViewSwitcher from "./ViewSwitcher";
import MobileFilters__ from "./MobileFilter";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

// Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  imageUrl: string;
  category: string;
  subCategory?: string;
  brand: string;
  colors: string[];
  sizes?: string[];
  tags: string[];
  inStock: boolean;
  material?: string;
  freeShipping: boolean;
  newArrival: boolean;
  bestSeller: boolean;
}

interface FilterState {
  categories: string[];
  brands: string[];
  colors: string[];
  sizes: string[];
  materials: string[];
  priceRange: [number, number];
  rating: number | null;
  onSale: boolean;
  inStock: boolean;
  freeShipping: boolean;
  newArrivals: boolean;
  bestSellers: boolean;
  sortBy: string;
  search: string;
}

// Mock data
const categories = [
  { name: "Clothing", subcategories: ["T-shirts", "Shirts", "Pants", "Jackets", "Dresses"] },
  { name: "Footwear", subcategories: ["Sneakers", "Boots", "Sandals", "Formal Shoes"] },
  { name: "Accessories", subcategories: ["Bags", "Watches", "Belts", "Hats", "Jewelry"] }
];

const brands = ["Nike", "Adidas", "Zara", "H&M", "Levi's", "Puma", "Under Armour", "Gap"];
const colors = ["Black", "White", "Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Grey"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const materials = ["Cotton", "Polyester", "Leather", "Nylon", "Wool", "Denim"];

const ProductListingPage = () => {
  const searchParams = useSearchParams();

  const lockedItems = ["price", "colors"]; // Items you want to keep always open
  const [openItems, setOpenItems] = useState<string[]>(lockedItems);

  // States
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"GRID" | "LIST">("GRID");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    materials: [],
    priceRange: [0, 1000],
    rating: null,
    onSale: false,
    inStock: true,
    freeShipping: false,
    newArrivals: false,
    bestSellers: false,
    sortBy: "featured",
    search: "",
  });

  // Initial products per page
  const productsPerPage = viewMode === "GRID" ? 12 : 8;

  // Generate mock products
  useEffect(() => {
    const generateMockProducts = () => {
      const mockProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
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
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    };

    generateMockProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    let activeFiltersList: string[] = [];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter(product =>
        filters.categories.includes(product.category) ||
        filters.categories.includes(product.subCategory || "")
      );
      activeFiltersList.push(`Categories (${filters.categories.length})`);
    }

    // Price range filter
    result = result.filter(product => {
      const actualPrice = product.discountPrice ? product.price - product.discountPrice : product.price;
      return actualPrice >= filters.priceRange[0] && actualPrice <= filters.priceRange[1];
    }
    );

    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) {
      activeFiltersList.push(`Price: ₹${filters.priceRange[0]} - ₹${filters.priceRange[1]}`);
    }

    // Brand filter
    if (filters.brands.length > 0) {
      result = result.filter(product => filters.brands.includes(product.brand));
      activeFiltersList.push(`Brands (${filters.brands.length})`);
    }

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter(product =>
        product.colors.some(color => filters.colors.includes(color))
      );
      activeFiltersList.push(`Colors (${filters.colors.length})`);
    }

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter(product =>
        product.sizes?.some(size => filters.sizes.includes(size))
      );
      activeFiltersList.push(`Sizes (${filters.sizes.length})`);
    }

    // Material filter
    if (filters.materials.length > 0) {
      result = result.filter(product =>
        filters.materials.includes(product.material || "")
      );
      activeFiltersList.push(`Materials (${filters.materials.length})`);
    }

    // Rating filter
    if (filters.rating) {
      result = result.filter(product => product.rating >= filters.rating!);
      activeFiltersList.push(`Rating: ${filters.rating}★+`);
    }

    // On sale filter
    if (filters.onSale) {
      result = result.filter(product => product.discountPrice !== undefined);
      activeFiltersList.push("On Sale");
    }

    // In stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
      activeFiltersList.push("In Stock");
    }

    // Free shipping filter
    if (filters.freeShipping) {
      result = result.filter(product => product.freeShipping);
      activeFiltersList.push("Free Shipping");
    }

    // New arrivals filter
    if (filters.newArrivals) {
      result = result.filter(product => product.newArrival);
      activeFiltersList.push("New Arrivals");
    }

    // Best sellers filter
    if (filters.bestSellers) {
      result = result.filter(product => product.bestSeller);
      activeFiltersList.push("Best Sellers");
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          (product.subCategory && product.subCategory.toLowerCase().includes(searchTerm))
      );
      activeFiltersList.push(`Search: "${filters.search}"`);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "priceLow":
        result.sort((a, b) => {
          const priceA = a.discountPrice ? a.price - a.discountPrice : a.price;
          const priceB = b.discountPrice ? b.price - b.discountPrice : b.price;
          return priceA - priceB;
        });
        break;
      case "priceHigh":
        result.sort((a, b) => {
          const priceA = a.discountPrice ? a.price - a.discountPrice : a.price;
          const priceB = b.discountPrice ? b.price - b.discountPrice : b.price;
          return priceB - priceA;
        });
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
        break;
      case "popularity":
        // In a real app, this would be based on actual popularity metrics
        result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      // featured is default, no sorting needed
    }

    setFilteredProducts(result);
    setActiveFilters(activeFiltersList);

    // Reset to first page when filters change
    if (currentPage !== 1) setCurrentPage(1);

  }, [products, filters]);

  // Handle pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Handle filter changes
  const handleFilterChange = (
    category: keyof FilterState,
    value: any,
    isMultiple = false
  ) => {
    if (isMultiple) {
      // For checkboxes (toggle array values)
      setFilters(prev => {
        const currentValues = prev[category] as string[];

        // If value exists in array, remove it; otherwise, add it
        const updatedValues = currentValues.includes(value)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value];

        return { ...prev, [category]: updatedValues };
      });
    } else {
      // For single-value filters
      setFilters(prev => ({ ...prev, [category]: value }));
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      colors: [],
      sizes: [],
      materials: [],
      priceRange: [0, 1000],
      rating: null,
      onSale: false,
      inStock: true,
      freeShipping: false,
      newArrivals: false,
      bestSellers: false,
      sortBy: "featured",
      search: "",
    });
  };

  // Handle search form submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you might want to update the URL here
  };

  // Remove a specific filter
  const removeFilter = (filter: string) => {
    const filterType = filter.split(":")[0]?.trim();

    switch (filterType) {
      case "Categories":
        setFilters(prev => ({ ...prev, categories: [] }));
        break;
      case "Brands":
        setFilters(prev => ({ ...prev, brands: [] }));
        break;
      case "Colors":
        setFilters(prev => ({ ...prev, colors: [] }));
        break;
      case "Sizes":
        setFilters(prev => ({ ...prev, sizes: [] }));
        break;
      case "Materials":
        setFilters(prev => ({ ...prev, materials: [] }));
        break;
      case "Price":
        setFilters(prev => ({ ...prev, priceRange: [0, 1000] }));
        break;
      case "Rating":
        setFilters(prev => ({ ...prev, rating: null }));
        break;
      case "Search":
        setFilters(prev => ({ ...prev, search: "" }));
        break;
      case "On Sale":
        setFilters(prev => ({ ...prev, onSale: false }));
        break;
      case "In Stock":
        setFilters(prev => ({ ...prev, inStock: false }));
        break;
      case "Free Shipping":
        setFilters(prev => ({ ...prev, freeShipping: false }));
        break;
      case "New Arrivals":
        setFilters(prev => ({ ...prev, newArrivals: false }));
        break;
      case "Best Sellers":
        setFilters(prev => ({ ...prev, bestSellers: false }));
        break;
      default:
        // Handle specific filter removal based on exact match
        if (filter === "On Sale") {
          setFilters(prev => ({ ...prev, onSale: false }));
        } else if (filter === "In Stock") {
          setFilters(prev => ({ ...prev, inStock: false }));
        } else if (filter === "Free Shipping") {
          setFilters(prev => ({ ...prev, freeShipping: false }));
        } else if (filter === "New Arrivals") {
          setFilters(prev => ({ ...prev, newArrivals: false }));
        } else if (filter === "Best Sellers") {
          setFilters(prev => ({ ...prev, bestSellers: false }));
        }
    }
  };

  // Render star ratings
  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="container mx-auto px-1 md:px-4 py-8">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-sm font-bold">Shop Our Collection{" "}
          <span className="font-normal text-gray-400">(Showing {filteredProducts.length} products)</span>
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1">
          <p className="text-gray-500"></p>

          {/* Mobile filter button */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mr-2 md:hidden">
                  <Filter className="h-4 w-4 mr-1 rounded-[0.125rem]" />Filters ({activeFilters.length})
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full h-full">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-4">
                  <MobileFilters filters={filters} handleFilterChange={handleFilterChange} resetFilters={resetFilters}
                    categories={categories} brands={brands} colors={colors} sizes={sizes} materials={materials} />
                </div>

                <SheetFooter className="flex">
                  <SheetClose asChild><Button type="submit" variant={"outline"}>Close</Button></SheetClose>
                  <Button type="submit">APPLY</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Desktop filters sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-semibold uppercase">Filters</h2>
              {activeFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters}
                  className="text-xs text-destructive uppercase cursor-pointer hover:bg-transparent hover:text-destructive-foreground">
                  Clear All
                </Button>
              )}
            </div>

            {/* Search */}
            <div className="space-y-2">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </form>
            </div>

            <Accordion type="multiple" className="w-full" defaultValue={["price", "colors"]}
              value={openItems}
              onValueChange={(val) => {
                // Merge locked items back in if user tries to close them
                const next = Array.from(new Set([...val, ...lockedItems]));
                setOpenItems(next);
              }}
            >
              {/* Category filter */}
              <AccordionItem value="categories" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 px-1">
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category.name}`}
                            checked={filters.categories.includes(category.name)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleFilterChange("categories", category.name, true);
                              } else { setFilters(prev => ({ ...prev, categories: prev.categories.filter(c => c !== category.name) })) }
                            }}
                          />
                          <Label htmlFor={`category-${category.name}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name}
                          </Label>
                        </div>

                        <div className="ml-6 space-y-2">
                          {category.subcategories.map((sub) => (
                            <div key={sub} className="flex items-center space-x-2">
                              <Checkbox id={`subcategory-${sub}`} checked={filters.categories.includes(sub)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    handleFilterChange("categories", sub, true);
                                  } else { setFilters(prev => ({ ...prev, categories: prev.categories.filter(c => c !== sub) })) }
                                }}
                              />
                              <Label htmlFor={`subcategory-${sub}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {sub}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Price range filter */}
              <AccordionItem value="price" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Price Range
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-1 py-2">
                    <Slider max={1000} step={10}
                      defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                      value={[filters.priceRange[0], filters.priceRange[1]]}
                      onValueChange={(value) => handleFilterChange("priceRange", value)}
                      className="my-2 [&>span]:data-[orientation=horizontal]:h-1"
                    />
                    <div className="flex items-center justify-between text-sm mt-4 gap-2">
                      <div className="flex flex-1 items-center border rounded-[0.125rem]">
                        <span className="px-2.5 text-gray-500 border-r rounded-l-[2px]">₹</span>
                        <Input type="number" min={0} max={filters.priceRange[1]} value={filters.priceRange[0]}
                          className="w-full h-8 border-0 rounded-none rounded-r-md px-1"
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 0) handleFilterChange("priceRange", [value, filters.priceRange[1]]);
                          }}
                        />
                      </div>
                      <span> - </span>
                      <div className="flex flex-1 items-center border rounded-[0.125rem]">
                        <span className="px-2.5 text-gray-500 border-r rounded-l-[2px]">₹</span>
                        <Input type="number" min={filters.priceRange[0]} max={1000} value={filters.priceRange[1]}
                          className="w-full h-8 border-0 rounded-none rounded-r-md px-1"
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value <= 1000) handleFilterChange("priceRange", [filters.priceRange[0], value]);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Brand filter */}
              <AccordionItem value="brands" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Brands
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 px-1">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} checked={filters.brands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange("brands", brand, true);
                            } else { setFilters(prev => ({ ...prev, brands: prev.brands.filter(b => b !== brand) })) }
                          }}
                        />
                        <Label htmlFor={`brand-${brand}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Color filter */}
              <AccordionItem value="colors" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Colors
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 px-1">
                    {colors.map((color) => {
                      // Get CSS color value
                      const colorMap: Record<string, string> = {
                        Black: "#000000", White: "#FFFFFF", Blue: "#0066CC", Red: "#CC0000", Green: "#00CC00",
                        Yellow: "#FFCC00", Purple: "#6600CC", Brown: "#996633", Grey: "#999999",
                      };

                      return (
                        <div key={color} className="flex flex-col items-center gap-1"
                          onClick={() => {
                            if (filters.colors.includes(color)) {
                              setFilters(prev => ({ ...prev, colors: prev.colors.filter(c => c !== color) }));
                            } else { handleFilterChange("colors", color, true) }
                          }}
                        >
                          <div
                            className={`relative h-6 w-6 rounded-full cursor-pointer border-2 flex items-center justify-center
                              ${filters.colors.includes(color) ? "border-blue-500" : "border-gray-200"}`}
                            style={{ backgroundColor: colorMap[color] || color }}
                          >
                            {filters.colors.includes(color) && (
                              <div className="rounded-full bg-blue-500 border-2 border-white absolute bottom-0 right-0 h-3 w-3 translate-x-1/2" />
                            )}
                          </div>
                          <span className="text-[0.625rem]">{color}</span>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Size filter */}
              <AccordionItem value="sizes" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Sizes
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-3 gap-2 px-1">
                    {sizes.map((size) => (
                      <div key={size}
                        className={`h-10 w-full flex items-center justify-center rounded border-2 cursor-pointer 
                          ${filters.sizes.includes(size) ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
                        onClick={() => {
                          if (filters.sizes.includes(size)) {
                            setFilters(prev => ({ ...prev, sizes: prev.sizes.filter(s => s !== size) }));
                          } else { handleFilterChange("sizes", size, true) }
                        }}
                      >
                        <span className="text-sm font-medium">{size}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Material filter */}
              <AccordionItem value="materials" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Materials
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 px-1">
                    {materials.map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={`material-${material}`} checked={filters.materials.includes(material)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleFilterChange("materials", material, true);
                            } else { setFilters(prev => ({ ...prev, materials: prev.materials.filter(m => m !== material) })) }
                          }}
                        />
                        <Label htmlFor={`material-${material}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {material}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Rating filter */}
              <AccordionItem value="rating" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Rating
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 px-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating}
                        className={`flex items-center space-x-2 cursor-pointer rounded p-1 
                          ${filters.rating === rating ? "bg-blue-50" : ""}`}
                        onClick={() => {
                          if (filters.rating === rating) {
                            handleFilterChange("rating", null);
                          } else { handleFilterChange("rating", rating) }
                        }}
                      >
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={16} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="text-sm">& Up</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Other filters */}
              <AccordionItem value="other" className="border-b mb-1">
                <AccordionTrigger className="px-1 pt-2 pb-3 text-sm font-medium uppercase hover:no-underline cursor-pointer">
                  Other Filters
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 px-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-sale" checked={filters.onSale}
                        onCheckedChange={(checked) => handleFilterChange("onSale", !!checked)}
                      />
                      <Label htmlFor="filter-sale"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        On Sale
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-stock" checked={filters.inStock}
                        onCheckedChange={(checked) => handleFilterChange("inStock", !!checked)}
                      />
                      <Label htmlFor="filter-stock"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        In Stock
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-shipping" checked={filters.freeShipping}
                        onCheckedChange={(checked) => handleFilterChange("freeShipping", !!checked)}
                      />
                      <Label htmlFor="filter-shipping"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free Shipping
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-new" checked={filters.newArrivals}
                        onCheckedChange={(checked) => handleFilterChange("newArrivals", !!checked)}
                      />
                      <Label htmlFor="filter-new"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        New Arrivals
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-bestseller" checked={filters.bestSellers}
                        onCheckedChange={(checked) => handleFilterChange("bestSellers", !!checked)}
                      />
                      <Label
                        htmlFor="filter-bestseller"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Best Sellers
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="hidden md:flex flex-1">
            <div className="w-full"></div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} />
              <CollectionSorterDropdown />
            </div>
          </div>
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="activeFilters_text text-xs font-medium">Active Filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant={"outline"}
                  className="flex items-center leading-2 space-x-1 rounded-full py-1 hover:border-gray-400">
                  {filter}
                  <button onClick={() => removeFilter(filter)}
                    className="inline-flex items-center justify-center h-4 w-4 text-gray-400 rounded-full cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Product list Catalog */}
          <div className="mt-4">
            {isLoading ? (
              // Loading skeleton for product catalog // 
              <div className={`grid ${viewMode === "GRID" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1"} gap-0.5 md:gap-2`}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`${viewMode === "GRID" ? "h-80" : "h-40"} bg-gray-100 animate-pulse rounded-lg`}></div>
                ))}
              </div>
            ) : (currentProducts.length > 0 ? (
              // Products grid or list view //
              <div className={`grid ${viewMode === "GRID" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1"} gap-0.5 md:gap-2`}>
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              // No products found //
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria</p>
                <Button className="rounded-[0.125rem]" onClick={resetFilters}>Reset Filters</Button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => { if (currentPage > 1) handlePageChange(currentPage - 1); }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {totalPages > 5 && currentPage >= 4 && (
                  <>
                    <PaginationItem>
                      <PaginationLink className="cursor-pointer" onClick={() => handlePageChange(1)}>
                        {1}
                      </PaginationLink>
                    </PaginationItem>
                    {currentPage > 4 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
                  </>
                )}

                {/* Logic to show correct page numbers */}
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                  let pageNumber;

                  if (totalPages <= 5) {
                    pageNumber = index + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = index + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + index;
                  } else {
                    pageNumber = currentPage - 2 + index;
                  }

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {totalPages > 5 && currentPage <= (totalPages - 3) && (
                  <>
                    {currentPage < (totalPages - 3) && <PaginationItem><PaginationEllipsis /></PaginationItem>}
                    <PaginationItem>
                      <PaginationLink className="cursor-pointer" onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => { if (currentPage < totalPages) handlePageChange(currentPage + 1); }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProductListingPage;
