type Player = { name: "Player 1" | "Player 2"; symbol: "X" | "O" };

type SquareProps = {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
};

export type { Player, SquareProps };
