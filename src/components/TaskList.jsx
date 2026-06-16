import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div>
      <div style={{ margin: "1rem 0", fontSize: "0.9rem", color: "gray" }}>
        ✅ {completedCount} of {tasks.length} tasks completed
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No tasks yet. Add one above!</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={onToggle} 
              onDelete={onDelete} 
              onEdit={onEdit} 
            />
          ))}
        </div>
      )}
    </div>
  );
}