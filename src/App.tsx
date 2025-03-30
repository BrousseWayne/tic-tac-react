import confetti from "canvas-confetti";

import "./App.css";

import { Board } from "./components/board/Board";
import { TurnDisplay } from "./components/game-ui/TurnDisplay";
import { Scoreboard } from "./components/game-ui/Scoreboard";
import { useGameLogic } from "./game/hooks/useGameLogic";
import { GameControls } from "./components/game-ui/GameControls";

function App() {
  const { squares, currentPlayer, scores, handleMove, resetGame } =
    useGameLogic();

  const onSquareClick = (index: number) => {
    const gameState = handleMove(index);
    if (gameState.gameStatus === "error") {
      return;
    }
    if (gameState.gameStatus === "win") {
      alert(`${gameState.winner} wins!`);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (gameState.gameStatus === "draw") {
      alert("DRAW");
    }
  };

  return (
    <>
      <Board squares={squares} onSquareClick={onSquareClick} />
      <TurnDisplay currentPlayer={currentPlayer} />
      <GameControls onReset={resetGame} />
      <Scoreboard currentPlayer={currentPlayer} scores={scores}></Scoreboard>
    </>
  );
}

export default App;
