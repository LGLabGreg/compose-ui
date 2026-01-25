'use client'

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  getPageRange,
} from '@lglab/compose-ui/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function WithEllipsisExample() {
  const [currentPage, setCurrentPage] = useState(5)
  const totalPages = 20
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
      </PaginationContent>
    </PaginationRoot>
  )
}
