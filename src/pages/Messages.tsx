"use client";
import { useState } from "react";
import { MessagesTable } from "../components/MessagesTable";
import { MessagesThread } from "../components/MessagesThread";
import "../globals.css";
import "../components/index.css";
import "../components/messages.css"; 

export default function Messages() {
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

  return (
    <div className="messages-page">
      <div className="messages-layout">
        {/* Sidebar (Inbox list) */}
        <MessagesTable onSelectMessage={setSelectedMessageId} selectedMessageId={selectedMessageId} />

        {/* Thread (Conversation view) */}
        <div className="messages-thread">
          {selectedMessageId ? (
            <MessagesThread messageId={selectedMessageId} />
          ) : (
            <div className="empty-thread">💬 Select a conversation to view messages</div>
          )}
        </div>
      </div>
    </div>
  );
}
