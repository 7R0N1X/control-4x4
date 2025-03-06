export const formatDate = (date: string) => {
  const [day, month, year] = date.split("/");
  return new Date(`${year}-${month}-${day}`).toISOString().split("T")[0];
};
