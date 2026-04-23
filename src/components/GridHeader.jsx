import { shortDay, today } from "../utils";

export default function GridHeader({ days }) {
  const TODAY = today();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(7, 36px)", gap: 4, marginBottom: 8 }}>
      <span />
      {days.map(d => (
        <span
          key={d}
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            color: d === TODAY ? "green" : "#999"
          }}
        >
          {shortDay(d)}
        </span>
      ))}
    </div>
  );
}