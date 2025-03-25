import { useState } from "react";
import "./App.css";

const BOARD_SIZE = 9;

type PlayerTurn = {
  value: "Player 1" | "Player 2";
};

function PlayerTurnInfo({ value }: PlayerTurn) {
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>();

  console.log(value);
  // setPlayerTurn(value);
  return <p className="playerTurn"> This is: {value}</p>;
}

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

class EventEmitter {
  private events: Map<string, (() => void)[]>;
}

function App() {
  const [squares, setSquares] = useState<string[]>(Array(BOARD_SIZE));
  console.log(squares);

  const handleClick = (index) => {
    setSquares((prev) => {
      const newSquares = [...prev];
      newSquares[index] = "O";
      return newSquares;
    });
  };
  return (
    <>
      {squares.map((value, index) => {
        // <Square key={value} value={value} onClick={() => handleClick(index)} />;
      })}
      <PlayerTurnInfo value={"Player 2"} />;
    </>
  );
}

export default App;
