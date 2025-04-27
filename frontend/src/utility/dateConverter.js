const dateConverter = (dateString) => {
  if(!dateString) return "";
  const date = new Date(dateString);
  const day = date.getDate();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  // GET MONTH
  const month = date.toLocaleString("en-US", { month: "short" });

  // GET YEAR
  const year = date.getFullYear();

  // CREATE CONVERTED DATE
  const formattedDate = `${dayWithSuffix} ${month}, ${year}`;

  //RETURN CONVERTED DATE
  return formattedDate;
};

export default dateConverter;
