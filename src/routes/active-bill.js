import { BillListItem } from "../components/BillListItem";
import { BillDetails } from "../components/BillDetails";
import { UserWelcome } from "../components/UserWelcome";
import { countOrderItems } from "../components/utils";
import { useState, useEffect } from "react";
import { withLayout } from "../components/common/layout";
import { mockRecentBills, mockCurrentBill } from "../components/common/mocks";
import "./style.scss";

const ActiveBill = withLayout(() => {
  const [currentBill, setCurrentBill] = useState();
  const [bills, setBills] = useState(mockRecentBills.slice(0, 5));

  useEffect(() => {
    setCurrentBill({
      ...mockCurrentBill,
      orderItems: countOrderItems(mockCurrentBill.orderItems),
    });
  }, []);

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
