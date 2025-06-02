import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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


interface MobileFiltersProps {
  filters: FilterState;
  handleFilterChange: (category: keyof FilterState, value: any, isMultiple?: boolean) => void;
  resetFilters: () => void;
  categories: { name: string; subcategories: string[] }[];
  brands: string[];
  colors: string[];
  sizes: string[];
  materials: string[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  filters, handleFilterChange, resetFilters, categories, brands, colors, sizes, materials,
}) => {
  return (
    <div className="h-full w-full space-y-6">
      {/* <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>Reset All</Button>
      </div> */}

      {/* Search */}
      {/* <div className="space-y-2">
        <Label htmlFor="mobile-search" className="text-sm font-medium">Search</Label>
        <Input id="mobile-search" type="text" placeholder="Search products..." value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div> */}

      <Tabs orientation={"vertical"} defaultValue="categories" className="h-full w-full max-w-4xl flex flex-row gap-4">
        <TabsList className="min-w-28 h-full flex flex-col text-sm font-medium text-left rounded-[0.125rem] ">
          <TabsTrigger value="categories" className="w-full items-start justify-start">Categories</TabsTrigger>
          <TabsTrigger value="priceRange" className="w-full items-start justify-start">Price Range</TabsTrigger>
          <TabsTrigger value="brands" className="w-full items-start justify-start">Brands</TabsTrigger>
          <TabsTrigger value="color" className="w-full items-start justify-start">Colors</TabsTrigger>
          <TabsTrigger value="sizes" className="w-full items-start justify-start">Sizes</TabsTrigger>
          <TabsTrigger value="materials" className="w-full items-start justify-start">Materials</TabsTrigger>
        </TabsList>

        <div className="flex-1">
          <TabsContent value="categories" className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id={`mob-category-${category.name}`}
                    checked={filters.categories.includes(category.name)}
                    onCheckedChange={(checked) => { }}
                  />
                  <Label htmlFor={`mob-category-${category.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </Label>
                </div>

                <div className="ml-6 space-y-2">
                  {category.subcategories.map((sub) => (
                    <div key={sub} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mob-subcategory-${sub}`}
                        checked={filters.categories.includes(sub)}
                        onCheckedChange={(checked) => {

                        }}
                      />
                      <Label
                        htmlFor={`mob-subcategory-${sub}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {sub}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Price Range - Tabs Content*/}
          <TabsContent value="priceRange" className="space-y-4">
            <Slider max={1000} step={10} className="my-6"
              value={[filters.priceRange[0], filters.priceRange[1]]}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
            />
            <div className="flex items-center justify-between text-sm mt-4">
              <div className="px-1 py-2">
                <div className="flex items-center border rounded-md">
                  <span className="px-2 bg-gray-50 text-gray-500 border-r rounded-l-md">$</span>
                  <Input
                    type="number"
                    min={0}
                    max={filters.priceRange[1]}
                    value={filters.priceRange[0]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value) && value >= 0) {
                        handleFilterChange("priceRange", [value, filters.priceRange[1]]);
                      }
                    }}
                    className="w-16 h-8 border-0 rounded-none rounded-r-md"
                  />
                </div>
                <span>to</span>
                <div className="flex items-center border rounded-md">
                  <span className="px-2 bg-gray-50 text-gray-500 border-r rounded-l-md">$</span>
                  <Input
                    type="number"
                    min={filters.priceRange[0]}
                    max={1000}
                    value={filters.priceRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value) && value <= 1000) {
                        handleFilterChange("priceRange", [filters.priceRange[0], value]);
                      }
                    }}
                    className="w-16 h-8 border-0 rounded-none rounded-r-md"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Brands - Tabs Content*/}
          <TabsContent value="brands" className="space-y-4">
            <div className="space-y-2 px-1">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-brand-${brand}`} checked={filters.brands.includes(brand)}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        handleFilterChange("brands", filters.brands.filter((b: string) => b !== brand), false);
                      } else { handleFilterChange("brands", brand, true); }
                    }}
                  />
                  <Label htmlFor={`mobile-brand-${brand}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Colors - Tabs Content*/}
          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-4 gap-2 px-1">
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
                        handleFilterChange("colors", filters.colors.filter((c: string) => c !== color), false);
                      } else { handleFilterChange("colors", color, true); }
                    }}
                  >
                    <div style={{ backgroundColor: colorMap[color] || color }}
                      className={`h-8 w-8 rounded-full cursor-pointer border-2 ${filters.colors.includes(color)
                        ? "border-blue-500" : "border-gray-200"} flex items-center justify-center`}
                    >
                      {filters.colors.includes(color) && (
                        <div className="h-4 w-4 rounded-full bg-blue-500 border-2 border-white" />
                      )}
                    </div>
                    <span className="text-xs">{color}</span>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Sizes - Tabs Content*/}
          <TabsContent value="sizes" className="space-y-4">
            <div className="grid grid-cols-3 gap-2 px-1">
              {sizes.map((size) => (
                <div key={size}
                  className={`h-10 border rounded-md flex items-center justify-center cursor-pointer ${filters.sizes.includes(size)
                    ? "border-blue-500 bg-blue-50 text-blue-800" : "border-gray-200 hover:border-gray-300"}`}
                  onClick={() => {
                    if (filters.sizes.includes(size)) {
                      handleFilterChange("sizes", filters.sizes.filter((s: string) => s !== size), false);
                    } else { handleFilterChange("sizes", size, true); }
                  }}
                >
                  <span className="text-sm font-medium">{size}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Materials - Tabs Content*/}
          <TabsContent value="materials" className="space-y-4">
            {materials.map((material) => (
              <div key={material} className="flex items-center space-x-2">
                <Checkbox
                  id={`mobile-material-${material}`}
                  checked={filters.materials.includes(material)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleFilterChange("materials", material, true);
                    } else {
                      handleFilterChange(
                        "materials",
                        filters.materials.filter((m: string) => m !== material),
                        false
                      );
                    }
                  }}
                />
                <Label
                  htmlFor={`mobile-material-${material}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {material}
                </Label>
              </div>
            ))}
          </TabsContent>

          {/* Additonal Filters - Tabs Content*/}
          <TabsContent value="materials" className="space-y-4">
            <div className="space-y-3 px-1">
              {/* Rating */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Rating</Label>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`mobile-rating-${rating}`} checked={filters.rating === rating}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("rating", rating);
                          } else { handleFilterChange("rating", null); }
                        }}
                      />
                      <Label htmlFor={`mobile-rating-${rating}`} className="text-sm leading-none flex items-center">
                        {rating}★ & Up
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other filters */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile-on-sale" checked={filters.onSale}
                    onCheckedChange={(checked) => { handleFilterChange("onSale", !!checked); }}
                  />
                  <Label htmlFor="mobile-on-sale" className="text-sm leading-none">On Sale</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile-in-stock" checked={filters.inStock}
                    onCheckedChange={(checked) => { handleFilterChange("inStock", !!checked); }}
                  />
                  <Label htmlFor="mobile-in-stock" className="text-sm leading-none">In Stock</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile-free-shipping" checked={filters.freeShipping}
                    onCheckedChange={(checked) => { handleFilterChange("freeShipping", !!checked); }}
                  />
                  <Label htmlFor="mobile-free-shipping" className="text-sm leading-none">Free Shipping</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile-new-arrivals" checked={filters.newArrivals}
                    onCheckedChange={(checked) => { handleFilterChange("newArrivals", !!checked); }}
                  />
                  <Label htmlFor="mobile-new-arrivals" className="text-sm leading-none">New Arrivals</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mobile-best-sellers" checked={filters.bestSellers}
                    onCheckedChange={(checked) => { handleFilterChange("bestSellers", !!checked); }}
                  />
                  <Label htmlFor="mobile-best-sellers" className="text-sm leading-none">Best Sellers</Label>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default MobileFilters;