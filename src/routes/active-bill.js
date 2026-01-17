import { useEffect, useState } from "react";
import { withLayout } from "../components/common/layout";
import { mockCurrentBill, mockRecentBills } from "../components/common/mocks";
import { BillDetails } from "../components/BillDetails";
import { BillListItem } from "../components/BillListItem";
import { UserWelcome } from "../components/UserWelcome";
import { countOrderItems } from "../components/utils";
import "./style.scss";

/**
 * ActiveBill page - Main dashboard showing current bill and recent history.
 *
 * Features:
 * - Displays current active bill with details
 * - Shows recent bills list (initially limited to 5)
 * - Expandable recent bills section
 * - User personalization with welcome message
 *
 * State Management:
 * - currentBill: Active bill being processed
 * - bills: List of recent bills to display
 *
 * @returns {JSX.Element} Active bill page wrapped in layout
 */
const ActiveBill = withLayout(() => {
  const [currentBill, setCurrentBill] = useState();
  const [bills, setBills] = useState(mockRecentBills.slice(0, 5));

  useEffect(() => {
    setCurrentBill({
      ...mockCurrentBill,
      orderItems: countOrderItems(mockCurrentBill.orderItems),
    });
  }, []);

  /**
   * Expands recent bills list to show all available bills.
   */
  const onSeeAll = () => {
    setBills(mockRecentBills);
  };

  return (
    <div className="active-bill">
      <UserWelcome name="Lucas" />
      <h1 className="active-bill__title">Split your bill</h1>
      <BillDetails {...currentBill} />

      <div className="active-bill__recent-bills-container">
        <h2 className="active-bill__recent-bills">Recent bills</h2>
        <button onClick={onSeeAll} className="active-bill__see-all-button">
          See all
        </button>
      </div>
      {bills.map((bill, index) => (
        <BillListItem key={index} {...bill} />
      ))}
    </div>
  );
});

export default ActiveBill;
