import { gridToIndex, indexToGrid } from "../../utils/boardUtils";

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
    r < 3 &&
    c >= 0 &&
    c < 3 &&
    squares[gridToIndex(r, c)] === player
  ) {
    count++;
    r += dr;
    c += dc;
  }

  return count;
}

export default function checkWinCondition(
  index: number,
  squares: string[]
): boolean {
  const [row, col] = indexToGrid(index);
  const player = squares[index];

  for (const [dirA, dirB] of WIN_DIRECTIONS) {
    let count = 1;

    count += countConsecutive(squares, row, col, dirA, player);
    count += countConsecutive(squares, row, col, dirB, player);

    if (count >= 3) {
      return true;
    }
  }

  return false;
}
