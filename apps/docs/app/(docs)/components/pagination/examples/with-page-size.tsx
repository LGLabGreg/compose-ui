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
import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lglab/compose-ui/select'
import { Check, ChevronLeft, ChevronRight, ChevronsUpDown, Ellipsis } from 'lucide-react'
import { useState } from 'react'

export default function WithPageSizeExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const totalItems = 235
  const totalPages = Math.ceil(totalItems / pageSize)

  const {
    pages,
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext,
    goToPage,
    pageSizeOptions,
    setPageSize: handleSetPageSize,
  } = usePagination({
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
    pageSize,
    onPageSizeChange: (size) => {
      setPageSize(size)
      setCurrentPage(1)
    },
  })

  const pageSizeItems = pageSizeOptions.map((size) => ({
    label: `${size} per page`,
    value: size,
  }))

  return (
    <div className='flex flex-wrap gap-2 items-center'>
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

      <SelectRoot
        value={pageSize}
        onValueChange={(value) => value && handleSetPageSize(value)}
        items={pageSizeItems}
      >
        <SelectTrigger aria-label='Select page size' className='min-w-32 min-h-8'>
          <SelectValue placeholder='Page size' />
          <SelectIcon>
            <ChevronsUpDown className='size-4' />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                {pageSizeItems.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{label}</SelectItemText>
                    <SelectItemIndicator>
                      <Check className='size-3.5' />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    </div>
  )
}
