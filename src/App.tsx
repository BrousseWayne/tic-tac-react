import { useState } from "react";
import { Player, SquareProps } from "./type";
import confetti from "canvas-confetti";

import "./App.css";
import "./ResetButton.css";
import "./ScoreBoard.css";
import checkWinCondition from "./gameLogic";

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

function Scoreboard({
  players,
  currentPlayer,
  scores,
}: {
  players: Player[];
  currentPlayer: number;
  scores: number[];
}) {
  return (
    <div className="scoreboard">
      {players.map((player, index) => (
        <>
          <div
            key={player.symbol}
            className={`player-score ${
              index === currentPlayer ? "active" : ""
            }`}
          >
            <div className="player-name">{player.name}</div>
            <div
              className={`player-symbol symbol-${player.symbol.toLowerCase()}`}
            >
              {player.symbol}
            </div>
            <div className="player-points">{scores[index]}</div>
          </div>
          {index === 0 && <div className="scoreboard-vs">VS</div>}
        </>
      ))}
    </div>
  );
}

function App() {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [scores, setScores] = useState([0, 0]);

  const nextTurn = () => {
    setCurrentPlayer((prev) => 1 - prev);
  };

  const handleGameEnd = (winType: string) => {
    setGameOver(true);
    if (winType === "player") {
      setScores((prev) => {
        const newScores = [...prev];
        newScores[currentPlayer] += 1;
        return newScores;
      });
    }
  };

  const handleClick = (index: number) => {
    if (gameOver || squares[index]) {
      return;
    }

    const currentSymbol = players[currentPlayer].symbol;

    const newSquares = [...squares];
    newSquares[index] = currentSymbol;
    setSquares(newSquares);

    if (checkWinCondition(index, newSquares)) {
      alert(`${players[currentPlayer].name} wins!`);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      handleGameEnd("player");
    } else if (newSquares.every(Boolean)) {
      alert(`DRAW`);
      handleGameEnd("draw");
    } else {
      nextTurn();
    }
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
      <div className="reset-container">
        <button
          className="reset-btn"
          onClick={() => {
            setSquares(Array(9).fill(null));
            setCurrentPlayer(0);
            setGameOver(false);
          }}
        >
          ↻ New Game
        </button>
      </div>
      <Scoreboard
        currentPlayer={currentPlayer}
        players={players}
        scores={scores}
      ></Scoreboard>
    </>
  );
}

export default App;
