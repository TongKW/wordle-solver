/**
 * Get the result of the i th guess
 * @param {int} i           - The number of guess, starting from 0
 * return @param {string}   - The result (eg. "AAPCA")
 *                            A => Absent; P => Present; C => Correct
 */
export default function get_result(i) {
  var board = document.querySelector("game-app").shadowRoot.querySelector("game-theme-manager").querySelector("#board");
  var tileList = board.children[i].shadowRoot.querySelector("div[class='row']").children;
  var result = "";
  for (var k = 0; k < 5; k++) {
    var eva = tileList[k].getAttribute("evaluation");
    if (eva === "present") result += "P";
    if (eva === "absent") result += "A";
    if (eva === "correct") result += "C";
  }
  return result;
}