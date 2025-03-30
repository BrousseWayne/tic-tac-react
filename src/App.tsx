import confetti from "canvas-confetti";

import "./App.css";

import { Board } from "./components/Board/Board";
import { TurnDisplay } from "./components/GameInfo/TurnDisplay";
import { Scoreboard } from "./components/GameInfo/Scoreboard";
import { useGameLogic } from "./game/hooks/useGameLogic";
import { GameControls } from "./components/GameInfo/GameControls";

function App() {
  const { squares, currentPlayer, scores, handleMove, resetGame } =
    useGameLogic();

  const onSquareClick = (index: number) => {
    const result = handleMove(index);
    if (result.gameStatus === "error") {
      return;
    }
    if (result.gameStatus === "win") {
      alert(`${result.winner} wins!`);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (result.gameStatus === "draw") {
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
