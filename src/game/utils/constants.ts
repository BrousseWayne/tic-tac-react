import { Player } from "../../types/gameTypes";

export const BOARD_ROW_SIZE = 3;
export const BOARD_COL_SIZE = 3;
export const WIN_LINE_SIZE = 3;
export const BOARD_SIZE = BOARD_COL_SIZE * BOARD_ROW_SIZE;

export const PLAYERS: Player[] = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];
