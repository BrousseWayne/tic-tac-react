import { useState } from "react";
import { Player, SquareProps } from "./type";
import selectColorCode from "./Helper";

import "./App.css";

const BOARD_SIZE = 9;

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

function Square({ value, onClick, disabled }: SquareProps) {
  return (
    <button
      className={`square ${value ? `symbol-${value.toLowerCase()}` : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span key={value} className="symbol">
        {value}
      </span>
    </button>
  );
}

function TurnInfo(props: { currentPlayer: number }) {
  console.log(
    `symbol-${selectColorCode(players[props.currentPlayer]).toLowerCase()}`
  );
  return (
    <p className="playerTurn">
      This is:&nbsp;
      <span
        className={`symbol-${selectColorCode(
          players[props.currentPlayer]
        ).toLowerCase()}`}
      >
        {players[props.currentPlayer].name}
      </span>
      &nbsp; turn
    </p>
  );
}

function App() {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const nextTurn = () => {
    // player can be 0 or 1

    //checkVictoryCondition
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
      <TurnInfo currentPlayer={currentPlayer} />
    </>
  );
}

export default App;
