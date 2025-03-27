import { Player } from "./type";

function selectColorCode(player: Player) {
  return player.name === "Player 1"
    ? "highlight_Player_1"
    : "highlight_Player_2";
}

export default selectColorCode;
