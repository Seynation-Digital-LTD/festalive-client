"use client";
import { useState } from "react";
import { PayoutsTable } from "../components/PayoutsTable";
import { PayoutDetails } from "../components/PayoutDetails";
import "../globals.css";
import "../components/index.css";
import "../components/payouts.css";

export default function Payouts() {
  const [selectedPayoutId, setSelectedPayoutId] = useState<number | null>(null);

  return (
    <div className="payouts-page">
      <div className="payouts-layout">
        {/* Sidebar (Payouts list) */}
        <PayoutsTable onSelectPayout={setSelectedPayoutId} />

        {/* Details panel */}
        {selectedPayoutId ? (
          <PayoutDetails payoutId={selectedPayoutId} />
        ) : (
          <div className="empty-payout">
            <p>💸 Select a payout to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
