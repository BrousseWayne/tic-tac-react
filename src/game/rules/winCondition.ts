import { gridToIndex, indexToGrid } from "../../utils/boardUtils";
import {
  BOARD_COL_SIZE,
  BOARD_ROW_SIZE,
  WIN_LINE_SIZE,
} from "../../utils/constants";

type Direction = [number, number];

const WIN_DIRECTIONS: [Direction, Direction][] = [
  [
    [0, 1],
    [0, -1],
  ], // Horizontal
  [
    [1, 0],
    [-1, 0],
  ], // Vertical
  [
    [1, 1],
    [-1, -1],
  ], // Diagonal (top-left to bottom-right)
  [
    [1, -1],
    [-1, 1],
  ], // Diagonal (top-right to bottom-left)
];

function countConsecutive(
  squares: string[],
  row: number,
  col: number,
  [dr, dc]: [number, number],
  player: string
): number {
  let count = 0;
  let r = row + dr;
  let c = col + dc;

  while (
    r >= 0 &&
    r < BOARD_ROW_SIZE &&
    c >= 0 &&
    c < BOARD_COL_SIZE &&
    squares[gridToIndex(r, c)] === player
  ) {
    count++;
    r += dr;
    c += dc;
  }

  return count;
}

export const checkWinCondition = (
  index: number,
  squares: string[]
): boolean => {
  const [row, col] = indexToGrid(index);
  const player = squares[index];

  for (const [dirA, dirB] of WIN_DIRECTIONS) {
    let count = 1;

    count += countConsecutive(squares, row, col, dirA, player);
    count += countConsecutive(squares, row, col, dirB, player);

    if (count >= WIN_LINE_SIZE) {
      return true;
    }
  }

  return false;
};
