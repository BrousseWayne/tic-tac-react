import { useState } from "react";
import { BOARD_SIZE, PLAYERS } from "../../utils/constants";
import { GameStatus } from "../../types/gameTypes";
import { checkWinCondition } from "../rules/winCondition";

export const useGameLogic = () => {
  const [squares, setSquares] = useState<string[]>(
    Array(BOARD_SIZE).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [scores, setScores] = useState([0, 0]);

  const resetGame = () => {
    setSquares(Array(BOARD_SIZE).fill(null));
    setCurrentPlayer(0);
    setGameStatus("playing");
  };

  const handleMove = (index: number) => {
    if (gameStatus !== "playing" || squares[index]) {
      return { gameStatus: "error", winner: "" };
    }

    const newSquares = [...squares];
    newSquares[index] = PLAYERS[currentPlayer].symbol;
    setSquares(newSquares);

    if (checkWinCondition(index, newSquares)) {
      setGameStatus("win");
      setScores((prev) => {
        const newScores = [...prev];
        newScores[currentPlayer] += 1;
        return newScores;
      });
      return { gameStatus: "win", winner: PLAYERS[currentPlayer].name };
    }

    if (newSquares.every(Boolean)) {
      setGameStatus("draw");
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
