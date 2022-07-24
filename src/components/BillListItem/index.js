import { FaGem } from "react-icons/fa";
import "./style.css";

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
      {/* <img className='bill-list-item__image' src="https://cdn-icons-png.flaticon.com/512/4062/4062508.png"/> */}
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
