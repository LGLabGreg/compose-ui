'use client'

import {
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  usePagination,
} from '@lglab/compose-ui/pagination'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from 'lucide-react'
import { useState } from 'react'

export default function WithFirstLastExample() {
  const [currentPage, setCurrentPage] = useState(10)
  const totalPages = 20

  const {
    pages,
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext,
    goToFirst,
    goToLast,
    goToPage,
  } = usePagination({
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
  })

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst onClick={goToFirst} disabled={!canGoPrevious}>
            <ChevronsLeft className='size-4' />
          </PaginationFirst>
        </PaginationItem>

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

        <PaginationItem>
          <PaginationLast onClick={goToLast} disabled={!canGoNext}>
            <ChevronsRight className='size-4' />
          </PaginationLast>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
