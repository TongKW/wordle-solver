import check_pattern from "./check-pattern";

/**
 * Check the result given a correct answer and a guess
 * @param {Array} wordlist  - The wordlist
 * @param {string} guess    - The guess word
 * @param {string} pattern  - The pattern correnspoding to the guess word
 * return @param {string}   - The filtered wordlist containing all possible answers
 */
export default function filter_wordlist(wordlist, guess, pattern) {
  return wordlist.filter(word => pattern === check_pattern(guess, word));
}