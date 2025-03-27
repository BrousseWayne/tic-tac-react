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

function Square({ player, onClick, disabled }: SquareProps) {
  return (
    <button className="square" onClick={onClick} disabled={disabled}>
      <span className={selectColorCode(player)}>{player.symbol}</span>
    </button>
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
              player={players[currentPlayer]}
              onClick={() => handleClick(index)}
              disabled={value !== null}
            />
          );
        })}
      </div>
      {squares.map}
      <p className="playerTurn">
        This is:&nbsp;
        <span className={selectColorCode(players[currentPlayer])}>
          {players[currentPlayer].name}
        </span>
        &nbsp; turn
      </p>
    </>
  );
}

export default App;
