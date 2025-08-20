"use client";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

interface PayoutDetailsProps {
  payout: {
    id: number;
    recipient: string;
    event: string;
    amount: string;
    date: string;
    status: "Completed" | "Pending" | "Failed";
    transactions: string[];
  } | null;
}

export function PayoutDetails({ payout }: PayoutDetailsProps) {
  if (!payout) {
    return <div className="empty-payout">💸 Select a payout to view details</div>;
  }

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Payout Receipt", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Receipt ID: #${payout.id}`, 20, 40);
    doc.text(`Recipient: ${payout.recipient}`, 20, 50);
    doc.text(`Event: ${payout.event}`, 20, 60);
    doc.text(`Amount: ${payout.amount}`, 20, 70);
    doc.text(`Date: ${payout.date}`, 20, 80);
    doc.text(`Status: ${payout.status}`, 20, 90);

    doc.text("Transactions:", 20, 110);
    payout.transactions.forEach((txn, idx) => {
      doc.text(`- ${txn}`, 30, 120 + idx * 10);
    });

    doc.save(`receipt-${payout.id}.pdf`);
  };

  return (
    <div className="payout-details">
      <h3>Payout Details</h3>
      <p><strong>Recipient:</strong> {payout.recipient}</p>
      <p><strong>Event:</strong> {payout.event}</p>
      <p><strong>Amount:</strong> {payout.amount}</p>
      <p><strong>Date:</strong> {payout.date}</p>
      <p><strong>Status:</strong> {payout.status}</p>

      <h4>Transactions</h4>
      <ul>
        {payout.transactions.map((txn, i) => (
          <li key={i}>{txn}</li>
        ))}
      </ul>

      {/* Download button */}
      <button className="download-btn" onClick={handleDownloadReceipt}>
        📄 Download Receipt
      </button>
    </div>
  );
}
