"use client";
import "../components/messages.css"

interface MessagePreview {
  id: number;
  sender: string;
  subject: string;
  lastMessage: string;
  date: string;
  unread: boolean;
}

interface MessagesTableProps {
  onSelectMessage: (id: number) => void;
}

const sampleMessages: MessagePreview[] = [
  {
    id: 1,
    sender: "Apolinary Theonest",
    subject: "Concert Tickets",
    lastMessage: "Is the VIP section still available?",
    date: "2025-08-18",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Doe",
    subject: "Refund Request",
    lastMessage: "Can I get a refund for Festival B?",
    date: "2025-08-17",
    unread: false,
  },
  {
    id: 3,
    sender: "John Smith",
    subject: "Event Info",
    lastMessage: "What time does the show start?",
    date: "2025-08-16",
    unread: true,
  },
];

export function MessagesTable({ onSelectMessage }: MessagesTableProps) {
  return (
    <div className="messages-table">
      <h3>Inbox</h3>
      <ul>
        {sampleMessages.map((msg) => (
          <li
            key={msg.id}
            className={`message-preview ${msg.unread ? "unread" : ""}`}
            onClick={() => onSelectMessage(msg.id)}
          >
            <div className="message-sender">{msg.sender}</div>
            <div className="message-subject">{msg.subject}</div>
            <div className="message-snippet">{msg.lastMessage}</div>
            <div className="message-date">{msg.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
