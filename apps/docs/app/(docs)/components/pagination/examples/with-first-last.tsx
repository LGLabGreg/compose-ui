'use client'

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  getPageRange,
} from '@lglab/compose-ui/pagination'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useState } from 'react'

export default function WithFirstLastExample() {
  const [currentPage, setCurrentPage] = useState(10)
  const totalPages = 20
  const pages = getPageRange(currentPage, totalPages)

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            <ChevronsLeft className='size-4' />
            <span className='sr-only'>First</span>
          </PaginationFirst>
        </PaginationItem>

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
              <PaginationEllipsis />
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

        <PaginationItem>
          <PaginationLast
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <span className='sr-only'>Last</span>
            <ChevronsRight className='size-4' />
          </PaginationLast>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
