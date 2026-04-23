import { shortDay, today } from "../utils";

export default function GridHeader({ days }) {
  const TODAY = today();
  return (
    <div className="grid-header-row">
      <span />
      {days.map(d => (
        <span
          key={d}
          className="grid-header-day"
          style={{ color: d === TODAY ? "#856088" : "#999" }}
        >
          {shortDay(d)}
        </span>
      ))}
    </div>
  );
}