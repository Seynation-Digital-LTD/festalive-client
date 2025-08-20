"use client";
import "../components/messages.css"; 
import { useState } from "react";
import { MessagesThread } from "./MessagesThread";

interface MessagePreview {
  id: number;
  sender: string;
  subject: string;
  snippet: string;
  date: string;
  unread?: boolean;
}

const mockMessages: MessagePreview[] = [
  {
    id: 1,
    sender: "Apolinary Theonest",
    subject: "VIP Section Inquiry",
    snippet: "Is the VIP section still available?",
    date: "Aug 20",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Doe",
    subject: "Refund Request",
    snippet: "Can I get a refund for Festival B?",
    date: "Aug 18",
  },
  {
    id: 3,
    sender: "John Smith",
    subject: "Showtime Question",
    snippet: "What time does the show start?",
    date: "Aug 15",
  },
];

export function MessagesTable() {
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

  return (
    <div className="messages-layout">
      {/* Inbox list */}
      <div className="messages-table">
        <h3>Inbox</h3>
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`message-preview ${
              msg.unread ? "unread" : ""
            } ${selectedMessageId === msg.id ? "active" : ""}`}
            onClick={() => setSelectedMessageId(msg.id)}
          >
            <div className="message-sender">{msg.sender}</div>
            <div className="message-subject">{msg.subject}</div>
            <div className="message-snippet">{msg.snippet}</div>
            <div className="message-date">{msg.date}</div>
          </div>
        ))}
      </div>

      {/* Thread */}
      {selectedMessageId ? (
        <MessagesThread messageId={selectedMessageId} />
      ) : (
        <div className="messages-thread">
          <div className="empty-thread">💬 Select a message from the inbox</div>
        </div>
      )}
    </div>
  );
}
