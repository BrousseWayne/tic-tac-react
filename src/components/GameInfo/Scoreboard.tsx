// import { PLAYERS } from "../../utils/constants";
// import "./Scoreboard.css";

import { PLAYERS } from "../../utils/constants";

// export function Scoreboard({
//   currentPlayer,
//   scores,
// }: {
//   currentPlayer: number;
//   scores: number[];
// }) {
//   return (
//     <div className="scoreboard">
//       {PLAYERS.map((player, index) => (
//         <>
//           <div
//             key={player.symbol}
//             className={`player-score ${
//               index === currentPlayer ? "active" : ""
//             }`}
//           >
//             <div className="player-name">{player.name}</div>
//             <div
//               className={`player-symbol symbol-${player.symbol.toLowerCase()}`}
//             >
//               {player.symbol}
//             </div>
//             <div className="player-points">{scores[index]}</div>
//           </div>
//           {index === 0 && <div className="scoreboard-vs">VS</div>}
//         </>
//       ))}
//     </div>
//   );
// }

// import { Player } from "../../types/gameTypes";
import "./Scoreboard.css";

type ScoreboardProps = {
  currentPlayer: number;
  scores: number[];
};

export const Scoreboard = ({ currentPlayer, scores }: ScoreboardProps) => (
  <div className="scoreboard">
    {PLAYERS.map((player, index) => (
      <div
        key={player.symbol}
        className={`score-card ${index === currentPlayer ? "active" : ""}`}
      >
        <div className="player-name">{player.name}</div>
        <div className={`player-symbol symbol-${player.symbol.toLowerCase()}`}>
          {player.symbol}
        </div>
        <div className="player-score">{scores[index]}</div>
      </div>
    ))}
  </div>
);
