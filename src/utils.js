// Returns last 7 dates as strings: ["2026-04-17", ..., "2026-04-23"]
export function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().split("T")[0]);
    }
    return days;
  }
  
  // Today as a string
  export function today() {
    return new Date().toISOString().split("T")[0];
  }
  
  // "2026-04-23" → "We"
  export function shortDay(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-AU", { weekday: "short" }).slice(0, 2);
  }
  
  // Count consecutive days checked up to today
  export function calcStreak(habitId, logs) {
    let streak = 0;
    const d = new Date();
    while (true) {
      const key = d.toISOString().split("T")[0];
      if (logs[habitId]?.[key]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else break;
    }
    return streak;
  }