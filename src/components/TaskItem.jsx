import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="task-item-animated">
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)} 
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ flex: 1, padding: "4px", background: "transparent", color: "inherit", border: "1px solid #3b82f6", borderRadius: "4px" }}
          />
        ) : (
          <span style={{ 
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.4 : 1,
            color: task.completed ? "gray" : "inherit",
            transition: "all 0.3s ease",
            display: "inline-block"
          }}>
            {task.text}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: "6px" }}>
        {isEditing ? (
          <button onClick={handleSave} style={{ background: "#10b981", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer" }}>💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)} style={{ background: "#f59e0b", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer" }}>✏️</button>
        )}
        <button onClick={() => onDelete(task.id)} style={{ background: "#ef4444", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer" }}>🗑️</button>
      </div>
    </div>
  );
}