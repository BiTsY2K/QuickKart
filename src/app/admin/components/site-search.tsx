"use client";

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button';

import { useSearch_context } from '@/contexts/search-context-provider';
import { SearchIcon } from 'lucide-react';
import { SearchCommand } from './site-command';

interface SearchProps {
  type?: React.HTMLInputTypeAttribute
  className?: string
  placeholder?: string
}

export function Search({ className = '', placeholder = 'Search' }: SearchProps) {
  const { setOpen } = useSearch_context();
  return (
    <>
      <Button
        variant='outline'
        className={cn(`relative h-8 w-full flex-1 justify-start rounded-md text-sm font-normal
        bg-muted/25 text-muted-foreground hover:bg-muted/50 shadow-none 
        sm:pr-12 md:w-40 md:flex-none lg:w-56 xl:w-64`,
          className
        )}
        onClick={() => setOpen(true)}
      >
        <SearchIcon aria-hidden='true' className='absolute top-1/2 left-1.5 -translate-y-1/2' />
        <span className='ml-3'>{placeholder}</span>
        <kbd className='bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex'>
          <span className='text-xs'>Ctrl/⌘</span>K
        </kbd>
      </Button>
    </>
  )
}
