import { Price } from "../common/Price";
import "./style.scss";

/**
 * MoneyAdjuster component provides an interactive slider for adjusting individual bill contributions.
 * Allows users to customize how much each person pays using a range input.
 *
 * @param {Object} props - Component properties
 * @param {string} [props.profilePic=""] - URL to user's profile picture
 * @param {string} [props.name="Unknown"] - Name of the person
 * @param {number} [props.priceShare=0] - Current amount this person is contributing
 * @param {string} props.currency - Currency symbol
 * @param {number} props.totalBill - Maximum value for the slider (total bill amount)
 * @param {Function} props.onChange - Callback when slider value changes
 * @param {string} props.userId - Unique identifier for this participant
 * @returns {JSX.Element} Money adjustment slider component
 */
export const MoneyAdjuster = ({
  profilePic = "",
  name = "Unknown",
  priceShare = 0,
  currency,
  totalBill,
  onChange,
  userId,
}) => {
  /**
   * Handles range input changes and propagates the new value.
   * @param {string} val - New value from the range input
   */
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
