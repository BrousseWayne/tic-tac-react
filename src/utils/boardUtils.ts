export function indexToGrid(index: number): [number, number] {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return [row, col];
}

export function gridToIndex(row: number, col: number): number {
  return row * 3 + col;
}
