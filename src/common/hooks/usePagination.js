import { useCallback, useState } from "react";

export const usePagination = (initialPage = 1, itemsPerPage) => {
  const [page, setPage] = useState(initialPage);
  const skip = (page - 1) * itemsPerPage;

  const getTotalPages = useCallback(
    (totalItems) => {
      return Math.ceil(totalItems / itemsPerPage);
    },
    [itemsPerPage],
  );

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return {
    page,
    skip,
    handlePageChange,
    getTotalPages,
  };
};
