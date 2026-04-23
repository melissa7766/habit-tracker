export default function AddHabitRow({ value, onChange, onAdd }) {
    return (
      <div className="add-habit-row">
        <input
          className="add-habit-input"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onAdd()}
          placeholder="Add a habit..."
        />
        <button className="add-habit-button" onClick={onAdd} aria-label="Add habit">
          +
        </button>
      </div>
    );
  }