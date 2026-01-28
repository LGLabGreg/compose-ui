'use client'

import {
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  usePagination,
} from '@lglab/compose-ui/pagination'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { useState } from 'react'

export default function DefaultExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const { pages, canGoPrevious, canGoNext, goToPrevious, goToNext, goToPage } =
    usePagination({
      currentPage,
      totalPages,
      onPageChange: setCurrentPage,
    })

  return (
    <PaginationRoot className='mx-auto'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={goToPrevious} disabled={!canGoPrevious}>
            <ChevronLeft className='size-4' />
          </PaginationPrevious>
        </PaginationItem>

        {pages.map((page, i) => (
          <PaginationItem key={i}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis>
                <Ellipsis className='size-4' />
              </PaginationEllipsis>
            ) : (
              <PaginationButton
                isActive={page === currentPage}
                onClick={() => goToPage(page)}
              >
                {page}
              </PaginationButton>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={goToNext} disabled={!canGoNext}>
            <ChevronRight className='size-4' />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
