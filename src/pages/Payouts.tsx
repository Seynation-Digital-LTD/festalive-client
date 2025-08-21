"use client";
import { useState } from "react";
import { PayoutsTable, mockPayouts } from "../components/PayoutsTable";
import { PayoutDetails } from "../components/PayoutDetails";
import "../globals.css";
import "../components/index.css";
import "../components/payouts.css";

export default function Payouts() {
  const [selectedPayoutId, setSelectedPayoutId] = useState<number | null>(null);

  const selectedPayout = mockPayouts.find((p) => p.id === selectedPayoutId) || null;

  return (
    <div className="payouts-page">
      <div className="payouts-layout">
        {/* Sidebar (list) */}
        <PayoutsTable onSelectPayout={setSelectedPayoutId} />

        {/* Details */}
        {selectedPayout ? (
          <PayoutDetails payout={selectedPayout} />
        ) : (
          <div className="empty-payout">
            <p>💸 Select a payout to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
