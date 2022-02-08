/**
 * Return the pattern given a correct answer and a guess
 * @param {string} answer   - The correct word
 * @param {string} guess    - The guess word
 * return @param {string}   - The pattern (eg. "AAPCA")
 *                            A => Absent; P => Present; C => Correct
 */
export default function check_pattern(guess, answer) {
  var pattern = "AAAAA";
  // Check for correctly placed characters
  for (var i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      pattern = replaceAt(pattern, 'C', i)
      answer = answer.replace(answer[i], ".");
    }
  }
  // Check for other present characters
  for (var i = 0; i < 5; i++) {
    if (answer.includes(guess[i])) {
      pattern = replaceAt(pattern, 'P', i)
      answer = answer.replace(guess[i], ".");
    }
  }
  return pattern;
}

/**
 * Replace a character of a string at a specific position
 * @param {string} string     - The input string
 * @param {string} sub        - The character to be replaced
 * @param {integer} position  - The position to be placed at
 * return @param {string}     - The modified string
 */
function replaceAt(string, sub, position) {
  if (!Number.isInteger(position)) return;
  if (position < 0 || position > string.length) return;
  if (typeof sub !== "string" && sub.length !== 1) return;
  return string.slice(0, position) + sub + string.slice(position + 1, string.length);
}

//var newStr = myStr.replace(/_/g, "-");