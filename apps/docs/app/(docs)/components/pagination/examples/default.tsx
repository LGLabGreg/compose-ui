'use client'

import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  getPageRange,
} from '@lglab/compose-ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function DefaultExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  const pages = getPageRange(currentPage, totalPages)

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className='size-4' />
            <span className='sr-only'>Previous</span>
          </PaginationPrevious>
        </PaginationItem>

        {pages.map((page, i) => (
          <PaginationItem key={i}>
            {page === 'ellipsis' ? (
              <span className='flex h-9 w-9 items-center justify-center'>...</span>
            ) : (
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <span className='sr-only'>Next</span>
            <ChevronRight className='size-4' />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
