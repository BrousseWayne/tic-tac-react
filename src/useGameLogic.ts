import { useState } from "react";
import { BOARD_SIZE, PLAYERS } from "./game/utils/constants";
import checkWinCondition from "./gameLogic";

export const useGameLogic = () => {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState([0, 0]);

  const resetGame = () => {
    setSquares(Array(BOARD_SIZE).fill(null));
    setCurrentPlayer(0);
    setGameOver(false);
  };

  const handleMove = (index: number) => {
    if (gameOver || squares[index]) {
      return { gameStatus: "", winner: "" };
    }

    const newSquares = [...squares];
    newSquares[index] = PLAYERS[currentPlayer].symbol;
    setSquares(newSquares);

    if (checkWinCondition(index, newSquares)) {
      setGameOver(true);
      setScores((prev) => {
        const newScores = [...prev];
        newScores[currentPlayer] += 1;
        return newScores;
      });
      return { gameStatus: "win", winner: PLAYERS[currentPlayer].name };
    }

    if (newSquares.every(Boolean)) {
      setGameOver(true);
      return { gameStatus: "draw", winner: "none" };
    }

    setCurrentPlayer((prev) => 1 - prev);
    return { gameStatus: "continue", winner: "none" };
  };

  return {
    squares,
    currentPlayer,
    scores,
    handleMove,
    resetGame,
  };
};
