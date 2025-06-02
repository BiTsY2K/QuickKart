"use client"

import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <div className="flex items-center text-xs text-gray-500 mb-6">
      <span className="">Home</span>
      <ChevronRight className="w-4 h-4 mx-1" />
      <span className="">Audio</span>
      <ChevronRight className="w-4 h-4 mx-1" />
      <span className="font-medium text-gray-900">{"Premium Wireless Noise-Cancelling HeadPhones"}</span>
    </div>
  )
}