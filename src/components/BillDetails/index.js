import { Link } from "react-router-dom";
import { BillTotal } from "../common/BillTotal";
import { themes } from "../common/themes";
import BurgerIcon from "./burger.svg";
import "./style.scss";

/**
 * BillDetails component displays comprehensive bill information.
 * Shows total price, order items breakdown, and navigation to bill splitting.
 *
 * @param {Object} props - Component properties
 * @param {number} props.price - Total bill amount
 * @param {string} props.currency - Currency symbol
 * @param {Object.<string, number>} [props.orderItems={}] - Map of item names to quantities
 * @param {string} [props.restaurantLogo=""] - URL or path to restaurant logo
 * @param {number} [props.groupSize=1] - Number of people in the group
 * @param {string} [props.theme=themes.LIGHT] - Visual theme for the component
 * @returns {JSX.Element} Detailed bill information card
 */
export const BillDetails = ({
  price,
  currency,
  orderItems = {},
  restaurantLogo = "",
  groupSize = 1,
  theme = themes.LIGHT,
}) => {
  return (
    <div className="bill-details">
      <img className="bill-details__image" src={BurgerIcon} alt="Burger" />
      <BillTotal theme={theme} price={price} currency={currency} />
      <div className="bill-details__order-items">
        {Object.keys(orderItems).map((productName, index) => (
          <div className="bill-details__order-item" key={index}>
            {orderItems[productName]} {productName}
          </div>
        ))}
      </div>

      <div className="bill-details__footer">
        <div className="bill-details__restaurant-logo" src={restaurantLogo} />
        <div className="bill-details__nav">
          <Link className="bill-details__nav-link" to="/split-bill">
            {">"}
          </Link>
        </div>
        <div className="bill-details__group-details">
          <div className="bill-details__group-picture" />
          <div className="bill-details__group-size">{groupSize}</div>
        </div>
      </div>
    </div>
  );
};
