/**
 * Get the pattern of the i th guess
 * @param {int} i           - The number of guess, starting from 0
 * return @param {string}   - The pattern (eg. "AAPCA")
 *                            A => Absent; P => Present; C => Correct
 */
export default function get_pattern(i) {
  var board = document.querySelector("game-app").shadowRoot.querySelector("game-theme-manager").querySelector("#board");
  var tileList = board.children[i].shadowRoot.querySelector("div[class='row']").children;
  var pattern = "";
  for (var k = 0; k < 5; k++) {
    var eva = tileList[k].getAttribute("evaluation");
    if (eva === "present") pattern += "P";
    if (eva === "absent") pattern += "A";
    if (eva === "correct") pattern += "C";
  }
  return pattern;
}