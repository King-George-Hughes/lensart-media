"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  count: number;
  perPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({ count, perPage = 6 }) => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / perPage);

  const updateSearchParams = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  const nextPage = () => {
    window.scrollTo(0, 0);
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    updateSearchParams(next);
  };

  const prevPage = () => {
    window.scrollTo(0, 0);
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    updateSearchParams(prev);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="mt-5 flex w-full items-center justify-between px-2 py-5">
      <div className="hidden md:block">
        <p>
          Showing <strong>{(currentPage - 1) * perPage + 1}</strong> to{" "}
          <strong>
            {currentPage === pageCount ? count : currentPage * perPage}
          </strong>{" "}
          out of <strong>{count}</strong> results
        </p>
      </div>

      <div className="flex w-full items-center justify-between gap-3 md:w-fit md:justify-normal">
        <button
          className={`${
            currentPage === 1 ? "bg-neutral-100" : "bg-neutral-800 text-white"
          } inline-flex items-center rounded-sm px-3 py-2 font-bold`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft /> Prev
        </button>
        <button
          className={`${
            currentPage === pageCount
              ? "bg-neutral-100"
              : "bg-neutral-800 text-white"
          } inline-flex items-center rounded-sm px-3 py-2 font-bold`}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
