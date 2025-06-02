'use client'

import { RiSearch2Line } from "react-icons/ri"
import { Input } from "./ui/input"

export function ProductSearchInputBar({ className }: {
  className?: string
}) {
  return (
    <div tabIndex={1} className={`group flex h-11 w-full items-center gap-2 pr-3 rounded border overflow-hidden transition-all duration-300 
      bg-white dark:bg-neutral-950 focus-within:border-gray-400 focus-within:ring-[0px] focus-within:ring-gray-400 ${className}`}>
      <Input type="text" placeholder="What are you looking for ..."
        className="block w-full h-full px-4 py-3 text-sm font-normal rounded-[3px] border-transparent focus:border-transparent
       disabled:bg-neutral-800 dark:bg-neutral-950  placeholder:text-neutral-500
        focus-visible:border-transparent focus-visible:ring-none focus-visible:ring-[0px]"
      />
      <RiSearch2Line className="text-2xl text-neutral-500" />
    </div>
  )
}