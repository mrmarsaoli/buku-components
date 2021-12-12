import React from 'react'

interface PaginationProps {
  /**
   * Total of records
   */
  total: number
  /**
   * Current active page
   */
  current?: number
  /**
   * Total items per page
   */
  itemPerPage?: number
  /**
   * Range between current active page to elipsis
   */
  rangeToElipsis?: number
  /**
   * Overwrite active text color
   */
  activeTextColor?: string
  /**
   * Overwrite active background color
   */
  activeBackgroundColor?: string
  /**
   * Hide/show arrow
   */
  arrow?: boolean
  /**
   * Optional event on page select
   */
  onSelect?: (current: number) => void
}

export const Pagination = ({
  total,
  current = 1,
  itemPerPage = 10,
  rangeToElipsis = 2,
  activeTextColor,
  activeBackgroundColor,
  arrow = true,
  onSelect
}: PaginationProps) => {
  const numberOfPages = Math.ceil(total / itemPerPage)

  const onPageSelect = (pageNumber: number) => {
    if (pageNumber === current) return

    if (onSelect) onSelect(pageNumber)
  }

  const pages = getPages(current, numberOfPages, rangeToElipsis)

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px">
        {arrow && (
          <li>
            <a
              role="button"
              className="block bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3"
              onClick={() => {
                if (current !== 1) onPageSelect(current - 1)
              }}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        )}
        {pages.map((item, index) => (
          <li key={index}>
            <a
              role="button"
              className={`no-underline block bg-white border border-gray-300 text-gray-500 leading-tight py-2 px-3 ${
                item === current
                  ? 'text-primary hover:bg-green-10 hover:text-green-60'
                  : 'hover:bg-gray-100 hover:text-gray-700'
              }`}
              style={
                item === current
                  ? {
                      color: activeTextColor,
                      backgroundColor: activeBackgroundColor
                    }
                  : {}
              }
              onClick={() => {
                if (typeof item === 'number') onPageSelect(item)
              }}
            >
              {item}
            </a>
          </li>
        ))}
        {arrow && (
          <li>
            <a
              role="button"
              className="block bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3"
              onClick={() => {
                if (current !== numberOfPages) onPageSelect(current + 1)
              }}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

const getPages = (
  current: number,
  numberOfPages: number,
  rangeToElipsis: number
) => {
  const left = current - rangeToElipsis
  const right = current + rangeToElipsis
  const pages = []
  const pagesWithDots = []

  for (let i = 1; i <= numberOfPages; i++) {
    if (i === 1 || i === numberOfPages || (i >= left && i <= right)) {
      pages.push(i)
    }
  }

  let prevNode

  for (const page of pages) {
    if (prevNode) {
      if (page - prevNode === 2) {
        pagesWithDots.push(prevNode + 1)
      } else if (page - prevNode !== 1) {
        pagesWithDots.push('...')
      }
    }

    pagesWithDots.push(page)
    prevNode = page
  }

  return pagesWithDots
}
