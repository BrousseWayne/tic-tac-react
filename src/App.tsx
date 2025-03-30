import { useState } from "react";
import confetti from "canvas-confetti";

import "./App.css";
import "./ResetButton.css";
import "./ScoreBoard.css";
import checkWinCondition from "./gameLogic";
import { Board } from "./components/Board/Board";
import TurnDisplay from "./components/GameInfo/TurnDisplay";
import { Scoreboard } from "./components/GameInfo/Scoreboard";

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

  const onSquareClick = (index: number) => {
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
      <Board squares={squares} onSquareClick={onSquareClick} />
      <TurnDisplay currentPlayer={currentPlayer} />
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
