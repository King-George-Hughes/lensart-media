type DateFormatOptions = {
  day?: "numeric" | "2-digit";
  month?: "short" | "long" | "numeric" | "2-digit";
  year?: string;
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);

  const options: any = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
  // return date.toLocaleDateString("en-US", mergedOptions);
};

export { formatDate };
