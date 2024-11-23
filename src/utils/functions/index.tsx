interface CurrencyTypes {
  iso: string;
  slug: "NGN" | "USD";
}

export const formatCurrency = (currencyType: CurrencyTypes | any) =>
  new Intl.NumberFormat(currencyType.iso, {
    style: "currency",
    currency: currencyType.slug,
  });
