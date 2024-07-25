"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { Button } from "../ui/button";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    router.push("?" + params.toString());
  };

  return (
    <div className="mt-5 flex w-full items-center justify-between gap-4">
      <p className="text-nowrap">
        page <span className="font-semibold">{currentPage}</span> out{" "}
        <span className="font-semibold">{pageCount}</span>
        {/* of{" "}
        <span className="font-semibold">{itemCount}</span> */}
      </p>
      <div className="flex items-center gap-3">
        {/* <Button
          color="gray"
          variant={"default"}
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <RxDoubleArrowLeft />
        </Button> */}
        <Button
          color="gray"
          variant={"default"}
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <BiChevronLeft size={20} />
        </Button>

        <Button
          color="gray"
          variant={"default"}
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <BiChevronRight size={20} />
        </Button>
        {/* <Button
          color="gray"
          variant={"default"}
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <RxDoubleArrowRight />
        </Button> */}
      </div>
    </div>
  );
};

export default Pagination;
