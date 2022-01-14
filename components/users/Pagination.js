/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import PaginationDots from '../SVG/UserTable/PaginationDots';
import PaginationItem from './PaginationItem';

export default function Pagination({ active, pages }) {
  return (
    <div className="flex items-center justify-between -mr-2 md:mr-0">
      <div className="flex-1 flex items-center justify-between ">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm text-primary gap-1  items-center"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md    text-sm font-medium "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {active > 2 && (
              <>
                <PaginationItem>1</PaginationItem>
              </>
            )}
            {active > 3 && <PaginationDots />}
            {active > 1 && <PaginationItem>{active - 1}</PaginationItem>}
            <PaginationItem active>{active}</PaginationItem>
            {pages - active > 1 && (
              <PaginationItem>{active + 1}</PaginationItem>
            )}
            {pages - active > 2 && <PaginationDots />}

            {pages - active > 0 && (
              <>
                <PaginationItem>{pages}</PaginationItem>
              </>
            )}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md  text-sm font-medium "
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
