import { PLAYERS } from "../../utils/constants";
import "./TurnDisplay.css";

type TurnDisplayProps = {
  currentPlayer: number;
};

export const TurnDisplay = ({ currentPlayer }: TurnDisplayProps) => (
  <p className="turn-display">
    Current turn:{" "}
    <span className={`player-${currentPlayer + 1}`}>
      {PLAYERS[currentPlayer].name}
    </span>
  </p>
);
