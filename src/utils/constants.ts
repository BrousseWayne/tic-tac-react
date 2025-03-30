import { Player } from "../types/gameTypes";

export const BOARD_ROW_SIZE = 4;
export const BOARD_COL_SIZE = BOARD_ROW_SIZE;
export const WIN_LINE_SIZE = BOARD_ROW_SIZE;
export const BOARD_SIZE = BOARD_COL_SIZE * BOARD_ROW_SIZE;

export const PLAYERS: Player[] = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];
