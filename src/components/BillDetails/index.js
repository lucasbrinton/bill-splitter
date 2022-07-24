import "./style.scss";
import BurgerIcon from "./burger.svg";
import { Link } from "react-router-dom";
import { BillTotal } from "../common/BillTotal";
import { themes } from "../common/themes";

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
        <div
          className="bill-details__restaurant-logo"
          src={restaurantLogo}
        ></div>
        <div className="bill-details__nav">
          <Link className="bill-details__nav-link" to="/split-bill">
            {">"}
          </Link>
        </div>
        <div className="bill-details__group-details">
          <div className="bill-details__group-picture"></div>
          <div className="bill-details__group-size">{groupSize}</div>
        </div>
      </div>
    </div>
  );
};
