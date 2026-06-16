import React from "react";
import * as s from "./Pagination.module.css";
import { Button } from "../index.js";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className={s.pagination}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={s.button}
      >
        {"\u2B9C"}
      </Button>

      <span className={s.info}>
        {currentPage} / {totalPages}
      </span>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={s.button}
      >
        {"\u2B9E"}
      </Button>
    </div>
  );
};
