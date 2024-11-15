import { Pagination } from "@/shared/ui/components";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/components";
import { useDiscounts } from "../../hooks/useDiscounts";

export const DiscountsPagination = () => {
  const {
    currentPage,
    nextPageHandler,
    prevPageHandler,
    totalPages,
    onPageChangeHandler,
  } = useDiscounts();

  const windowSize = 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={prevPageHandler}
            disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - windowSize &&
              pageNumber <= currentPage + windowSize)
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={pageNumber === currentPage}
                  onClick={() => onPageChangeHandler(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          } else if (
            pageNumber === currentPage - windowSize - 1 ||
            pageNumber === currentPage + windowSize + 1
          ) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
        })}
        <PaginationItem>
          <PaginationNext
            onClick={nextPageHandler}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
