import { Player } from "./type";

export default function selectColorCode(player: Player): string {
  return player.symbol === "X" ? "X" : "O";
}
