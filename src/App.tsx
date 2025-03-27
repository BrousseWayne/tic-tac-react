import { useState } from "react";
import { Player, SquareProps } from "./type";
import selectColorCode from "./Helper";
import "./App.css";

const BOARD_SIZE = 9;

const players: Player[] = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];

function Square({ value, onClick, disabled }: SquareProps) {
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

function TurnInfo(props: { currentPlayer: number }) {
  return (
    <p className="playerTurn">
      This is:&nbsp;
      <span className={`player-${props.currentPlayer + 1}`}>
        {players[props.currentPlayer].name}
      </span>
      &nbsp;turn
    </p>
  );
}

function App() {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const nextTurn = () => {
    setCurrentPlayer((prev) => 1 - prev);
  };

  const handleClick = (index: number) => {
    if (squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = players[currentPlayer].symbol;
    setSquares(newSquares);
    nextTurn();
  };

  return (
    <>
      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            disabled={value !== null}
          />
        ))}
      </div>
      <TurnInfo currentPlayer={currentPlayer} />
    </>
  );
}

export default App;
