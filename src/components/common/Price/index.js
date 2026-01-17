import { formatPrice } from "../../utils";

/**
 * Price component for displaying formatted currency values.
 * Provides consistent price formatting across the application.
 *
 * @param {Object} props - Component properties
 * @param {number} [props.value=0] - The numeric price value
 * @param {string} [props.currency="$"] - Currency symbol to display
 * @param {number} [props.decimals=2] - Number of decimal places (currently unused but kept for API compatibility)
 * @returns {JSX.Element} Formatted price display
 */
export const Price = ({ value = 0, currency = "$", decimals = 2 }) => (
  <div>
    {currency}
    {formatPrice(value)}
  </div>
);
