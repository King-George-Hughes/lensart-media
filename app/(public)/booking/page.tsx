"use client";

import axiosClient from "@/services/axios-client";
import React, { useState } from "react";

const BookingPage = () => {
  const [data, setData] = useState();

  const allStocks = async () =>
    await axiosClient
      .get("/stock")
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));

  allStocks();

  return <div>BookingPage</div>;
};

export default BookingPage;
