import { useState, useEffect } from "react";
import { getLast7Days, today, calcStreak } from "./utils";
import AddHabitRow from "./components/AddHabitRow";
import GridHeader  from "./components/GridHeader";
import HabitRow    from "./components/HabitRow";

const DAYS = getLast7Days();
const TODAY = today();
const STORAGE_KEY = "habit-tracker";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs]     = useState({});
  const [input, setInput]   = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        setHabits(saved.habits ?? []);
        setLogs(saved.logs ?? {});
      }
    } catch (_) {}
  }, []); 

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ habits, logs }));
  }, [habits, logs]);                  // runs whenever habits or logs change

  // Actions
  const addHabit = () => {
    const name = input.trim();
    if (!name) return;
    const id = Date.now().toString();
    setHabits(prev => [...prev, { id, name }]);
    setInput("");
  };

  const removeHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
    setLogs(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const toggle = (habitId, date) => {
    if (date > TODAY) return;
    setLogs(prev => ({
      ...prev,
      [habitId]: {
        ...prev[habitId],
        [date]: !prev[habitId]?.[date],
      },
    }));
  };

  return (
    <div className="app-shell">
      <h1 className="app-title">Weekly Habits</h1>
      <AddHabitRow value={input} onChange={setInput} onAdd={addHabit} />
  
      {habits.length === 0 && (
        <p className="empty-state">No habits yet. Add one above.</p>
      )}

      {habits.length > 0 && <GridHeader days={DAYS} />}
  
      {habits.map(habit => (
        <HabitRow
          key={habit.id}
          habit={habit}
          days={DAYS}
          logs={logs}
          today={TODAY}
          onToggle={toggle}
          onRemove={removeHabit}
        />
      ))}
    </div>
  );
}