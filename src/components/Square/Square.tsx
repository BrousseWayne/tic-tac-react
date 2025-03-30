import "./Square.css";

type SquareProps = {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
};

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
