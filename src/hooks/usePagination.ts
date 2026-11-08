import { useMemo, useState, useCallback } from 'react';

interface UsePaginationOptions<T> {
  data: T[];
  pageSize?: number;
  initialPage?: number;
}

export function usePagination<T>({
  data,
  pageSize = 6,
  initialPage = 1,
}: UsePaginationOptions<T>) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

  // Auto-clamp page if data length changes
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedItems = useMemo(() => {
    const startIndex = (validPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, validPage, pageSize]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (validPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (validPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const resetPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage: validPage,
    totalPages,
    totalItems: data.length,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    resetPage,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1,
    startIndex: data.length === 0 ? 0 : (validPage - 1) * pageSize + 1,
    endIndex: Math.min(validPage * pageSize, data.length),
  };
}
