'use client'

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const sortByFilterOptions = [
  { key: 1, label: 'Featured', value: 'Featured' },
  { key: 2, label: 'Recommended', value: 'Recommended' },
  { key: 3, label: 'Price: Low to High', value: 'PriceLowToHigh' },
  { key: 4, label: 'Price: High to Low', value: 'PriceHighToLow' },
  { key: 5, label: 'Best Selling', value: 'BestSelling' },
  { key: 6, label: 'Better Discount', value: 'BetterDiscount' },
  { key: 7, label: 'Avg. Customer Review', value: 'AvgCustomerReviews' },
  { key: 8, label: 'Alphabetically A-Z', value: 'Alphabetically_A-Z' },
  { key: 9, label: 'Alphabetically Z-A', value: 'Alphabetically_Z-A' },
];


const CollectionSorterDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortByFilterValue, setSortByFilterValue] = useState<string>(sortByFilterOptions[0].value);

  // const handleFilterChange = (category: keyof FilterState, value: any, isMultiple = false) => {
  //   if (isMultiple) {
  //     // For checkboxes (toggle array values)
  //     setFilters(prev => {
  //       const currentValues = prev[category] as string[];

  //       // If value exists in array, remove it; otherwise, add it
  //       const updatedValues = currentValues.includes(value)
  //         ? currentValues.filter(item => item !== value)
  //         : [...currentValues, value];

  //       return { ...prev, [category]: updatedValues };
  //     });
  //   } else {
  //     // For single-value filters
  //     setFilters(prev => ({ ...prev, [category]: value }));
  //   }
  // };

  return (
    <section className="hidden lg:block">
      <div className="flex items-center justify-end gap-6">
        {/* Sort-By Dropdown */}
        <div className="min-w-64 h-9 flex items-center border border-gray-300 rounded-[2px]">
          <Select open={isOpen} onOpenChange={setIsOpen} value={sortByFilterValue} onValueChange={(value) => setSortByFilterValue(value)}>
            <SelectTrigger className="min-w-full flex flex-1 px-3.5 h-auto font-medium shadow-none focus-visible:ring-0 border-0">
              <div className="space-x-1">
                <div className="text-sm font-normal inline-block">Sort by<span className='ml-0.5'>:</span></div>
                <SelectValue placeholder="" />
              </div>
            </SelectTrigger>
            <SelectContent className="w-64 -mt-1 -mx-[0.062rem] rounded-[2px] rounded-ss-none rounded-se-none">
              {sortByFilterOptions.map((option) => (
                <SelectItem key={`sortBy_${option.value}`} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default CollectionSorterDropdown;
