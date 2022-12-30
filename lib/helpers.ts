import { ProductInt } from "../components/ProductCard";

export const formatByType = (num: number, format: string): string => {
  if (!format) {
    return String(num);
  }

  return (
    `${format === "money" ? "$" : ""}` +
    num.toLocaleString("es-ES", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
};

export const orderByClosestPrice = (array: ProductInt[], price: number): ProductInt[] =>
  array.sort((a, b) => Math.abs(a.price - price) - Math.abs(b.price - price));
