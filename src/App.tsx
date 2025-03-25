import { useState } from "react";
import "./App.css";

const BOARD_SIZE = 9;

type Player = { name: "Player 1" | "Player 2"; symbol: "X" | "O" };

type SquareProps = {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
};

function Square({ value, onClick, disabled }: SquareProps) {
  return (
    <button className="square" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const players: Player[] = [
    {
      name: "Player 1",
      symbol: "X",
    },
    {
      name: "Player 2",
      symbol: "O",
    },
  ];

  const nextTurn = () => {
    setCurrentPlayer(1 - currentPlayer);
  };

  const handleClick = (index: number) => {
    setSquares((prev) => {
      const newSquares = [...prev];
      if (!newSquares[index]) {
        newSquares[index] = players[currentPlayer].symbol;
      }
      nextTurn();
      return newSquares;
    });
  };
  return (
    <>
      <div className="board">
        {squares.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
              disabled={value !== null}
            />
          );
        })}
      </div>

      <p className="playerTurn">this is: {players[currentPlayer].name}</p>
    </>
  );
}

export default App;
