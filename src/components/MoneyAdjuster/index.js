import { Price } from "../common/Price";
import "./style.scss";

export const MoneyAdjuster = ({
  profilePic = "",
  name = "Unknown",
  priceShare = 0,
  currency,
  totalBill,
  onChange,
  userId,
}) => {
  const onRangeChange = (val) => {
    onChange({
      value: val,
      userId,
    });
  };

  return (
    <div className="money-adjuster">
      <div className="money-adjuster__profile-pic">{profilePic}</div>

      <div className="money-adjuster__range">
        <div className="money-adjuster__range-details">
          <div className="money-adjuster__range-name">{name}</div>
          <div className="money-adjuster__range-price">
            <Price value={priceShare} currency={currency} />
          </div>
        </div>
        <input
          onChange={(evt) => onRangeChange(evt.target.value)}
          min={0}
          max={totalBill}
          value={priceShare}
          step={0.1}
          className="money-adjuster__range-input"
          type="range"
        />
      </div>
    </div>
  );
};
