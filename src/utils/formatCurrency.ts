export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("es-EC", { minimumFractionDigits: 2 });
};
