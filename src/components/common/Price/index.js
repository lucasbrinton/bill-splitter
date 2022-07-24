import { formatPrice } from "../../utils";

export const Price = ({ value = 0, currency = "$", decimals = 2 }) => (
  <div>
    {currency}
    {formatPrice(value)}
  </div>
);
