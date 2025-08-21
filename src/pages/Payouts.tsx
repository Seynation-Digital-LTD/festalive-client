"use client";
import { useState } from "react";
import { PayoutsTable } from "../components/PayoutsTable";
import { PayoutDetails } from "../components/PayoutDetails";
import "../globals.css";
import "../components/index.css";
import "../components/payouts.css";

const mockPayouts = [
  {
    id: 1,
    recipient: "Apolinary Theonest",
    event: "Festival A",
    amount: "$1,200",
    status: "Completed",
    date: "Aug 20",
    transactions: ["TXN12345", "TXN67890"],
  },
  {
    id: 2,
    recipient: "Jane Doe",
    event: "Concert B",
    amount: "$500",
    status: "Pending",
    date: "Aug 18",
    transactions: ["TXN54321"],
  },
  {
    id: 3,
    recipient: "John Smith",
    event: "Showtime X",
    amount: "$750",
    status: "Failed",
    date: "Aug 15",
    transactions: ["TXN11111", "TXN22222"],
  },
];

export default function Payouts() {
  const [selectedPayoutId, setSelectedPayoutId] = useState<number | null>(null);

  const selectedPayout = mockPayouts.find((p) => p.id === selectedPayoutId) || null;

  return (
    <div className="payouts-page">
      <div className="payouts-layout">
        {/* Sidebar (Payouts list) */}
        <PayoutsTable onSelectPayout={setSelectedPayoutId} />

        {/* Details panel */}
        <PayoutDetails payout={selectedPayout} />
      </div>
    </div>
  );
}
