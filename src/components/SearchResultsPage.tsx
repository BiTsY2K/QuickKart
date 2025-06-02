"use client"
// SearchResultsPage.tsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, SlidersHorizontal, ShoppingCart, Heart, Star } from 'lucide-react';

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  image: string;
  category: string;
  tags: string[];
}

interface SearchResultsPageProps {
  initialProducts: Product[];
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ initialProducts = [] }) => {
  // State
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('relevance');

  // Sample categories based on the products
  const categories = ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports'];

  // Sample data for demonstration
  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium wireless headphones with noise cancellation',
      price: 199.99,
      discountPrice: 149.99,
      rating: 4.5,
      image: '/api/placeholder/300/300',
      category: 'Electronics',
      tags: ['wireless', 'audio', 'headphones']
    },
    {
      id: '2',
      name: 'Cotton T-Shirt',
      description: 'Comfortable cotton t-shirt for everyday wear',
      price: 29.99,
      rating: 4.2,
      image: '/api/placeholder/300/300',
      category: 'Clothing',
      tags: ['cotton', 't-shirt', 'casual']
    },
    {
      id: '3',
      name: 'Smart Watch',
      description: 'Advanced smartwatch with health monitoring features',
      price: 299.99,
      discountPrice: 249.99,
      rating: 4.7,
      image: '/api/placeholder/300/300',
      category: 'Electronics',
      tags: ['smartwatch', 'fitness', 'tech']
    },
    {
      id: '4',
      name: 'Desk Lamp',
      description: 'Adjustable LED desk lamp with multiple brightness levels',
      price: 49.99,
      rating: 4.0,
      image: '/api/placeholder/300/300',
      category: 'Home',
      tags: ['lamp', 'lighting', 'desk']
    },
    {
      id: '5',
      name: 'Running Shoes',
      description: 'Lightweight running shoes with cushioned soles',
      price: 119.99,
      discountPrice: 89.99,
      rating: 4.8,
      image: '/api/placeholder/300/300',
      category: 'Sports',
      tags: ['shoes', 'running', 'athletic']
    },
    {
      id: '6',
      name: 'Moisturizing Cream',
      description: 'Hydrating face cream for all skin types',
      price: 24.99,
      rating: 4.3,
      image: '/api/placeholder/300/300',
      category: 'Beauty',
      tags: ['skincare', 'face', 'hydration']
    }
  ];

  // Use sample products if no initialProducts
  React.useEffect(() => {
    if (initialProducts.length === 0) {
      setProducts(sampleProducts);
    }
  }, []);

  // Handle search
  const handleSearch = () => {
    // In a real app, this would call an API with the search parameters
    console.log(`Searching for: ${searchQuery}`);

    // For demo: filter products based on search query
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setProducts(filtered);
  };

  // Handle category toggle
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortOption(value);

    // Sort products based on selected option
    let sortedProducts = [...products];
    switch (value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // relevance - no specific sort
        break;
    }

    setProducts(sortedProducts);
  };

  // Render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search header */}
      <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full"
            onClick={handleSearch}
          >
            <Search size={18} />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="whitespace-nowrap"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </Button>
          <Select value={sortOption} onValueChange={handleSortChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count and active filters */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">{products.length} results found</p>
        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="flex items-center gap-1">
                {category}
                <button
                  className="ml-1 hover:text-gray-600"
                  onClick={() => handleCategoryToggle(category)}
                >
                  ×
                </button>
              </Badge>
            ))}
            <Button
              variant="link"
              size="sm"
              className="text-xs"
              onClick={() => setSelectedCategories([])}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        {isFilterOpen && (
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-medium mb-4">Filters</h3>

              {/* Price range filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Price Range</h4>
                <Slider
                  defaultValue={[priceRange[0], priceRange[1]]}
                  max={1000}
                  step={10}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="ml-2 text-sm flex items-center"
                      >
                        {rating}+ <Star size={12} className="ml-1 fill-yellow-400 text-yellow-400" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="default" className="w-full">Apply</Button>
                <Button variant="outline" className="w-full">Reset</Button>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 rounded-full">
                    <Heart size={18} />
                  </Button>
                  {product.discountPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="mb-1">{renderRating(product.rating)}</div>
                  <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      {product.discountPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="font-bold">${product.discountPrice.toFixed(2)}</span>
                          <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="font-bold">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full">
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategories([]);
                  setPriceRange([0, 1000]);
                  setProducts(sampleProducts);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {products.length > 0 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export { SearchResultsPage };