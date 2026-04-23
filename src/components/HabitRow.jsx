import { calcStreak } from "../utils";

export default function HabitRow({ habit, days, logs, today, onToggle, onRemove }) {
  const streak = calcStreak(habit.id, logs);

  return (
    <div className="habit-row">
      {/* Name + streak */}
      <div className="habit-info">
        <span className="habit-name">{habit.name}</span>
        {streak > 1 && <span className="habit-streak">{streak}✨</span>}
        <button
          onClick={() => onRemove(habit.id)}
          className="habit-remove"
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
            className="habit-check"
            style={{
              borderColor: checked ? "#b18bd0" : "#ddd",
              background: checked ? "#b18bd0" : "transparent",
              opacity: isFuture ? 0.3 : 1,
            }}
          >
            {checked ? "♡" : ""}
          </button>
        );
      })}
    </div>
  );
}