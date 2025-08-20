"use client";
import "../components/messages.css"; 
import { useState, useEffect, useRef } from "react";

interface MessagesThreadProps {
  messageId: number;
}

interface Message {
  sender: string;
  text: string;
}

const mockConversations: Record<number, Message[]> = {
  1: [
    { sender: "Apolinary Theonest", text: "Is the VIP section still available?" },
    { sender: "You", text: "Yes, we have a few VIP tickets left." },
  ],
  2: [
    { sender: "Jane Doe", text: "Can I get a refund for Festival B?" },
    { sender: "You", text: "Yes, please share your order ID." },
  ],
  3: [
    { sender: "John Smith", text: "What time does the show start?" },
    { sender: "You", text: "The gates open at 7 PM." },
  ],
};

// Mock subject/sender info for header
const threadMeta: Record<number, { sender: string; subject: string }> = {
  1: { sender: "Apolinary Theonest", subject: "VIP Section Inquiry" },
  2: { sender: "Jane Doe", subject: "Refund Request" },
  3: { sender: "John Smith", subject: "Showtime Question" },
};

export function MessagesThread({ messageId }: MessagesThreadProps) {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load conversation when messageId changes
  useEffect(() => {
    setConversation(mockConversations[messageId] || []);
  }, [messageId]);

  // Auto scroll to bottom when conversation updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleSend = () => {
    if (!reply.trim()) return;

    const newMsg: Message = { sender: "You", text: reply };
    setConversation((prev) => [...prev, newMsg]);
    setReply("");
  };

  const meta = threadMeta[messageId];

  return (
    <div className="messages-thread">
      {/* Thread header (sticky top) */}
      <div className="thread-header">
        <div>{meta.sender}</div>
        <div style={{ fontSize: "0.85rem", color: "#555" }}>{meta.subject}</div>
      </div>

      {/* Messages list */}
      <div className="chat-messages">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "You" ? "sent" : "received"
            }`}
          >
            <p>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box (sticky bottom) */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={!reply.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}
