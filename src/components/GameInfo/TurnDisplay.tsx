import { PLAYERS } from "../../game/utils/constants";
import "./TurnDisplay.css";

export default function TurnDisplay(props: { currentPlayer: number }) {
  return (
    <p className="playerTurn">
      This is:&nbsp;
      <span className={`player-${props.currentPlayer + 1}`}>
        {PLAYERS[props.currentPlayer].name}
      </span>
      &nbsp;turn
    </p>
  );
}
