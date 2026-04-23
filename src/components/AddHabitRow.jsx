export default function AddHabitRow({ value, onChange, onAdd }) {
    return (
      <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onAdd()}
          placeholder="Add a habit..."
          style={{ flex: 1, padding: "10px 14px", fontSize: "0.95rem" }}
        />
        <button onClick={onAdd} style={{ padding: "10px 20px" }}>
          + Add
        </button>
      </div>
    );
  }