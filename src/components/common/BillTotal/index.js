import { Price } from "../Price";
import { themes } from "../themes";
import "./style.scss";

/**
 * BillTotal component displays the total bill amount with theming support.
 * Supports light and dark themes for different UI contexts.
 *
 * @param {Object} props - Component properties
 * @param {number} props.price - The total bill amount
 * @param {string} props.currency - Currency symbol for the price
 * @param {string} [props.theme=themes.LIGHT] - Visual theme (light or dark)
 * @returns {JSX.Element} Styled total bill display
 */
export const BillTotal = ({ price, currency, theme = themes.LIGHT }) => {
  return (
    <div className={`bill-total --${theme}`}>
      <div className="bill-total__total-bill">Total Bill</div>
      <div className="bill-total__price">
        <Price value={price} currency={currency} />
      </div>
    </div>
  );
};
