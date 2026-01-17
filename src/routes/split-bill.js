import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BillTotal } from "../components/common/BillTotal";
import { withLayout } from "../components/common/layout";
import { mockCurrentBill } from "../components/common/mocks";
import { Price } from "../components/common/Price";
import { themes } from "../components/common/themes";
import { MoneyAdjuster } from "../components/MoneyAdjuster";
import "./style.scss";

/**
 * Mock participant data for bill splitting.
 * In a production app, this would come from a database or API.
 */
const mockParticipants = [
  {
    name: "Lucas Brinton",
    picture: "lucas.jpg",
    id: "lb",
  },
  {
    name: "Evaleen Brinton",
    picture: "lucas.jpg",
    id: "eb",
  },
  {
    name: "Jonas Brinton",
    picture: "lucas.jpg",
    id: "jb",
  },
];

/**
 * Retrieves participant information by ID.
 * @param {string} id - Participant's unique identifier
 * @returns {Object} Participant object or empty object if not found
 */
const getParticipantById = (id) =>
  mockParticipants.find((p) => p.id === id) ?? {};

/**
 * SplitBill page - Interactive bill splitting calculator.
 *
 * Features:
 * - Automatic equal splitting
 * - Manual adjustment per participant via sliders
 * - Real-time balance calculation
 * - Tip and missing cash tracking
 * - Visual feedback on payment status
 *
 * State Management:
 * - tip: Extra amount being paid (balance - totalBill)
 * - balance: Current total of all participant contributions
 * - equalShare: Calculated equal share per person
 * - missingCash: Amount still needed to cover the bill
 * - participantsBalance: Map of userId to their contribution amount
 *
 * @returns {JSX.Element} Bill splitting interface wrapped in layout
 */
const SplitBill = withLayout(() => {
  const [tip, setTip] = useState(0);
  const [balance, setBalance] = useState(0);
  const [equalShare, setEqualShare] = useState(0);
  const [missingCash, setMissingCash] = useState(0);
  const [participantsBalance, setParticipantsBalance] = useState({});
  const [participants] = useState(mockParticipants);
  const [totalBill] = useState(mockCurrentBill.price);

  // Initialize equal split on mount
  useEffect(() => {
    const balance = {};
    const share = Math.ceil(totalBill / participants.length ?? 1);
    const newBalance = participants.length * share;
    participants.forEach((p) => {
      balance[p.id] = share;
    });
    setParticipantsBalance(balance);
    setBalance(newBalance);
    setTip(newBalance - totalBill);
    setEqualShare(share);
  }, [totalBill, participants]);

  // Recalculate totals when individual balances change
  useEffect(() => {
    // Calculate new total balance
    let newTotalBalance = 0;
    Object.keys(participantsBalance).forEach(
      (userId) => (newTotalBalance += participantsBalance[userId])
    );
    setBalance(newTotalBalance);

    // Calculate missing cash (only show if positive)
    const newMissingCash = totalBill - newTotalBalance;
    setMissingCash(newMissingCash < 0 ? 0 : newMissingCash);

    // Calculate total tip (only show if positive)
    const newTotalTip = newTotalBalance - totalBill;
    setTip(newTotalTip < 0 ? 0 : newTotalTip);
  }, [participantsBalance, totalBill]);

  /**
   * Updates a participant's contribution amount.
   * @param {Object} params - Update parameters
   * @param {string|number} params.value - New contribution value
   * @param {string} params.userId - ID of participant to update
   */
  const adjustBalance = ({ value, userId }) => {
    const newParticipantsBalance = { ...participantsBalance };
    newParticipantsBalance[userId] = parseFloat(value);
    setParticipantsBalance(newParticipantsBalance);
  };

  /**
   * Resets all participants to equal share amounts.
   */
  const onSplitEqual = () => {
    const newBalance = {};
    Object.keys(participantsBalance).forEach(
      (userId) => (newBalance[userId] = equalShare)
    );
    setParticipantsBalance(newBalance);
  };

  return (
    <div className="split-bill">
      <div className="split-bill__nav-bar">
        <Link className="split-bill__nav-link" to="/active-bill">
          {"<"}
        </Link>
      </div>
      <BillTotal theme={themes.DARK} price={totalBill} />
      <div className="split-bill__bill-info">
        <h2>
          Balance <Price value={balance} />
        </h2>
        {missingCash > 0 ? (
          <h2>
            Missing <Price value={missingCash} />
          </h2>
        ) : (
          <h2>
            Tip <Price value={tip} />
          </h2>
        )}
      </div>
      {Object.keys(participantsBalance).map((id) => {
        return (
          <MoneyAdjuster
            userId={id}
            onChange={adjustBalance}
            key={id}
            name={getParticipantById(id).name}
            priceShare={participantsBalance[id]}
            totalBill={totalBill}
          />
        );
      })}
      <button className="button-box" onClick={onSplitEqual}>
        Split equal
      </button>
    </div>
  );
});

export default SplitBill;
