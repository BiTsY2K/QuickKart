import React, { useState, useEffect } from "react";
import { Search, X, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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

const MobileFilters__: React.FC<MobileFiltersProps> = ({
  filters,
  handleFilterChange,
  resetFilters,
  categories,
  brands,
  colors,
  sizes,
  materials,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileFilters__;