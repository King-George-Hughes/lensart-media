"use client";

import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/axios-client";
import { useSearchParams } from "next/navigation";
import { ApiBlogResponse } from "@/lib/types";

export const apiBlog = "blogs";

export const useBlogs = () => {
  const searchParams = useSearchParams();

  // Pagination
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const getPage = page ? `?page=${page}` : "";

  let apiUrl = apiBlog + getPage;

  let query = axiosClient
    .get<ApiBlogResponse>(apiUrl)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  return useQuery({
    queryKey: [apiBlog, page],
    queryFn: () => query,
  });

  // return useQuery({
  //   queryKey: [apiBlog, page],
  //   queryFn: () =>
  //     axiosClient
  //       .get<ApiBlogResponse>(`/${apiBlog}`)
  //       .then(({ data }) => data)
  //       .catch((error) => console.log(error)),
  // });
};
