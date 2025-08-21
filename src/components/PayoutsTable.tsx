"use client";
import "../components/payouts.css";

export interface PayoutPreview {
  id: number;
  recipient: string;
  event: string;
  amount: string;
  status: "Pending" | "Completed" | "Failed";
  date: string;
  transactions: string[]; // ✅ added
}

// ✅ mock data with transactions
export const mockPayouts: PayoutPreview[] = [
  {
    id: 1,
    recipient: "Apolinary Theonest",
    event: "Festival A",
    amount: "$1,200",
    status: "Completed",
    date: "Aug 20",
    transactions: ["Bank Transfer #1234", "Stripe Processing Fee -$20"],
  },
  {
    id: 2,
    recipient: "Jane Doe",
    event: "Concert B",
    amount: "$500",
    status: "Pending",
    date: "Aug 18",
    transactions: ["Awaiting bank confirmation"],
  },
  {
    id: 3,
    recipient: "John Smith",
    event: "Showtime X",
    amount: "$750",
    status: "Failed",
    date: "Aug 15",
    transactions: ["Bank Transfer Failed #5678", "Retry Scheduled"],
  },
];

export function PayoutsTable({
  onSelectPayout,
}: {
  onSelectPayout: (id: number) => void;
}) {
  return (
    <div className="payouts-table">
      <h3>Payouts</h3>
      {mockPayouts.map((payout) => (
        <div
          key={payout.id}
          className={`payout-preview ${payout.status.toLowerCase()}`}
          onClick={() => onSelectPayout(payout.id)}
        >
          <div className="payout-recipient">{payout.recipient}</div>
          <div className="payout-event">{payout.event}</div>
          <div className="payout-amount">{payout.amount}</div>
          <div className="payout-date">{payout.date}</div>
        </div>
      ))}
    </div>
  );
}
