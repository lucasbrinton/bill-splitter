import { withLayout } from "../components/common/layout";
import { MoneyAdjuster } from "../components/MoneyAdjuster";
import { Price } from "../components/common/Price";
import { useEffect, useState } from "react";
import { BillTotal } from "../components/common/BillTotal";
import { Link } from "react-router-dom";
import { mockCurrentBill } from "../components/common/mocks";
import { themes } from "../components/common/themes";
import "./style.scss";

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

const getParticipantById = (id) =>
  mockParticipants.filter((p) => p.id === id)[0] ?? {};

const SplitBill = withLayout(() => {
  const [tip, setTip] = useState(0);
  const [balance, setBalance] = useState(0);
  const [equalShare, setEqualShare] = useState(0);
  const [missingCash, setMissingCash] = useState(0);
  const [participantsBalance, setParticipantsBalance] = useState({});
  const [participants] = useState(mockParticipants);
  const [totalBill] = useState(mockCurrentBill.price);

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
  }, []);

  useEffect(() => {
    // calc new balance
    let newTotalBalance = 0;
    Object.keys(participantsBalance).forEach(
      (userId) => (newTotalBalance += participantsBalance[userId])
    );
    setBalance(newTotalBalance);

    // calc missing cash
    const newMissingCash = totalBill - newTotalBalance;
    setMissingCash(newMissingCash < 0 ? 0 : newMissingCash);

    // calc total tip
    const newTotalTip = newTotalBalance - totalBill;
    setTip(newTotalTip < 0 ? 0 : newTotalTip);
  }, [participantsBalance, totalBill]);

  const adjustBalance = ({ value, userId }) => {
    const newParticipantsBalance = { ...participantsBalance };
    newParticipantsBalance[userId] = parseFloat(value);
    setParticipantsBalance(newParticipantsBalance);
  };

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
