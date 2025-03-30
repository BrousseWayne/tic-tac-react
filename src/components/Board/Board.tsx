import Square from "../Square/Square";
import "./Board.css";

export const Board = ({
  squares,
  onSquareClick,
}: {
  squares: string[];
  onSquareClick: (index: number) => void;
}) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          disabled={value !== null}
        />
      ))}
    </div>
  );
};
