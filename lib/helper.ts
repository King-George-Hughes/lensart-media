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

const imageQualityReducer = (url: string) => {
  const splitUrl = url.split("/upload/");
  return `${splitUrl[0]}/upload/w_800,q_80/${splitUrl[1]}`;
};

export { formatDate, imageQualityReducer };
