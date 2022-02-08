import get_pattern from "./get-pattern";

export default function check_win() {
  for (var i = 0; i < 6; i++) {
    if (get_pattern(i) === "CCCCC") return true;
  }
  return false;
}