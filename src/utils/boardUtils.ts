import { BOARD_COL_SIZE, BOARD_ROW_SIZE } from "./constants";

export function indexToGrid(index: number): [number, number] {
  const row = Math.floor(index / BOARD_ROW_SIZE);
  const col = index % BOARD_COL_SIZE;
  return [row, col];
}

export function gridToIndex(row: number, col: number): number {
  return row * BOARD_COL_SIZE + col;
}
