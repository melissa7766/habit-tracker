import { calcStreak } from "../utils";

export default function HabitRow({ habit, days, logs, today, onToggle, onRemove }) {
  const streak = calcStreak(habit.id, logs);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(7, 36px)", gap: 4, alignItems: "center", padding: "6px 0" }}>
      {/* Name + streak */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: "0.9rem" }}>{habit.name}</span>
        {streak > 1 && <span style={{ fontSize: "0.75rem", color: "green" }}>{streak}🔥</span>}
        <button
          onClick={() => onRemove(habit.id)}
          style={{ marginLeft: "auto", background: "none", border: "none", color: "red", cursor: "pointer" }}
        >
          ✕
        </button>
      </div>

      {/* Check cells */}
      {days.map(date => {
        const checked = !!logs[habit.id]?.[date];
        const isFuture = date > today;
        return (
          <button
            key={date}
            onClick={() => onToggle(habit.id, date)}
            disabled={isFuture}
            style={{
              width: 28,
              height: 28,
              borderRadius: 4,
              border: "1.5px solid",
              borderColor: checked ? "green" : "#ddd",
              background: checked ? "green" : "transparent",
              color: "white",
              cursor: isFuture ? "default" : "pointer",
              opacity: isFuture ? 0.3 : 1,
            }}
          >
            {checked ? "✓" : ""}
          </button>
        );
      })}
    </div>
  );
}