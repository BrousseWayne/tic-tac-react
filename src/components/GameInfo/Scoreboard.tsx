import { Player } from "../../types/gameTypes";

export function Scoreboard({
  players,
  currentPlayer,
  scores,
}: {
  players: Player[];
  currentPlayer: number;
  scores: number[];
}) {
  return (
    <div className="scoreboard">
      {players.map((player, index) => (
        <>
          <div
            key={player.symbol}
            className={`player-score ${
              index === currentPlayer ? "active" : ""
            }`}
          >
            <div className="player-name">{player.name}</div>
            <div
              className={`player-symbol symbol-${player.symbol.toLowerCase()}`}
            >
              {player.symbol}
            </div>
            <div className="player-points">{scores[index]}</div>
          </div>
          {index === 0 && <div className="scoreboard-vs">VS</div>}
        </>
      ))}
    </div>
  );
}
