import { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid var(--border)",
          background: "transparent",
          color: "inherit"
        }}
      />
      <button 
        type="submit" 
        style={{ padding: "10px 16px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        ➕ Add
      </button>
    </form>
  );
}