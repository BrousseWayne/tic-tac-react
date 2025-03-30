import { players } from "../../game/utils/constants";

export default function TurnDisplay(props: { currentPlayer: number }) {
  return (
    <p className="playerTurn">
      This is:&nbsp;
      <span className={`player-${props.currentPlayer + 1}`}>
        {players[props.currentPlayer].name}
      </span>
      &nbsp;turn
    </p>
  );
}
