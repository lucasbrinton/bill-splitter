import { Price } from "../Price";
import "./style.scss";
import { themes } from "../themes";

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
