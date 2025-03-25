import { useState } from "react";
import "./App.css";

const BOARD_SIZE = 9;

type Player = { name: "Player 1" | "Player 2"; symbol: "X" | "O" };

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState<string[]>(Array(BOARD_SIZE).fill(""));
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
      newSquares[index] = players[currentPlayer].symbol;
      nextTurn();
      return newSquares;
    });
  };
  return (
    <>
      {squares.map((value, index) => {
        console.log(value, index);
        <Square key={index} value={value} onClick={() => handleClick(index)} />;
      })}
      {/* <Square value={value} onClick={() => handleClick(index)} />; */}
      <p className="playerTurn">this is: {players[currentPlayer].name}</p>
    </>
  );
}

export default App;
