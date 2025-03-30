import { SquareProps } from "../../types/gameTypes";
import "./Square.css";

export default function Square({ value, onClick, disabled }: SquareProps) {
  return (
    <button
      className={`square ${value ? `symbol-${value.toLowerCase()}` : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="symbol" key={value}>
        {value}
      </span>
    </button>
  );
}
