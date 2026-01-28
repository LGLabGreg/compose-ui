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

export default function SizesExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const { pages, canGoPrevious, canGoNext, goToPrevious, goToNext, goToPage } =
    usePagination({
      currentPage,
      totalPages,
      onPageChange: setCurrentPage,
    })

  return (
    <div className='flex flex-col gap-6 items-center'>
      <PaginationRoot>
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

      <PaginationRoot>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              size='icon'
              onClick={goToPrevious}
              disabled={!canGoPrevious}
            >
              <ChevronLeft className='size-4' />
            </PaginationPrevious>
          </PaginationItem>

          {pages.map((page, i) => (
            <PaginationItem key={i}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis size='icon'>
                  <Ellipsis className='size-4' />
                </PaginationEllipsis>
              ) : (
                <PaginationButton
                  size='icon'
                  isActive={page === currentPage}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </PaginationButton>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext size='icon' onClick={goToNext} disabled={!canGoNext}>
              <ChevronRight className='size-4' />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>

      <PaginationRoot>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              size='icon-lg'
              onClick={goToPrevious}
              disabled={!canGoPrevious}
            >
              <ChevronLeft className='size-4' />
            </PaginationPrevious>
          </PaginationItem>

          {pages.map((page, i) => (
            <PaginationItem key={i}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis size='icon-lg'>
                  <Ellipsis className='size-4' />
                </PaginationEllipsis>
              ) : (
                <PaginationButton
                  size='icon-lg'
                  isActive={page === currentPage}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </PaginationButton>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext size='icon-lg' onClick={goToNext} disabled={!canGoNext}>
              <ChevronRight className='size-4' />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
