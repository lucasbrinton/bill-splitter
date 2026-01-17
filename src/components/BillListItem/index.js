import { FaGem } from "react-icons/fa";
import "./style.css";

/**
 * BillListItem component displays a summary of a past bill.
 * Renders bill information including title, date, price, and group size.
 *
 * @param {Object} props - Component properties
 * @param {string} [props.title="Unknown bill"] - Bill or restaurant name
 * @param {string} [props.date="N/A"] - Date of the bill
 * @param {number} [props.price=0] - Total bill amount
 * @param {string} [props.currency="$"] - Currency symbol
 * @param {number} [props.groupSize=1] - Number of people in the group
 * @param {React.ComponentType} [props.Icon=FaGem] - Icon component to display
 * @returns {JSX.Element} Bill list item card
 */
export const BillListItem = ({
  title = "Unknown bill",
  date = "N/A",
  price = 0,
  currency = "$",
  groupSize = 1,
  Icon = FaGem,
}) => {
  return (
    <div className="bill-list-item">
      <div className="bill-list-item__image">
        <Icon size={36} color="gray" />
      </div>
      <div className="bill-list-item__bill-details">
        <div className="bill-list-item__title">{title}</div>
        <div className="bill-list-item__date">{date}</div>
      </div>
      <div className="bill-list-item__group-details">
        <div className="bill-list-item__price">
          {currency}
          {price}
        </div>
        <div className="bill-list-item__group-size">
          {groupSize} person{groupSize > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};
