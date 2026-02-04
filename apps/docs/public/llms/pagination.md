# Pagination

A composable pagination component for navigating through paginated content. Use with tables, search results, or any paginated data.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { // eslint-disable-next-line react-refresh/only-export-components
  usePagination, PaginationRoot, PaginationContent, PaginationItem, PaginationButton, PaginationPrevious, PaginationNext, PaginationFirst, PaginationLast, PaginationEllipsis } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
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
```

### With Ellipsis

```tsx
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

export default function WithEllipsisExample() {
  const [currentPage, setCurrentPage] = useState(5)
  const totalPages = 20

  const { pages, canGoPrevious, canGoNext, goToPrevious, goToNext, goToPage } =
    usePagination({
      currentPage,
      totalPages,
      onPageChange: setCurrentPage,
    })

  return (
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
  )
}
```

### With First/Last

```tsx
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
```

### Page Size

```tsx
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
```

### Sizes

```tsx
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
```

## Resources

