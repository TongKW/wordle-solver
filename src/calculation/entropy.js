import check_pattern from "../utils/check-pattern";

var freq_map = require('../data/freqmap.json');

/**
 * Return the entropy of a guess given a word list of available answers
 * Used to determine an optimized choice of guess
 * @param {Array} wordlist    - Wordlist of available answers
 * @param {string} guess      - The guess word
 * return @param {float}      - The calculated entropy
 */
export default function entropy(wordlist, guess) {
  var total_prob = 0;
  var result = 0;
  var prob_map = {};
  for (var word of wordlist) {
    var pattern = check_pattern(guess, word);
    if (pattern in prob_map) {
      prob_map[pattern] += freq_map[word];
      //prob_map[pattern] += 1;
    } else {
      prob_map[pattern] = freq_map[word];
      //prob_map[pattern] = 1;
    }
    total_prob += freq_map[word];
  }
  for (var pattern of Object.keys(prob_map)) {
    var normal_prob = prob_map[pattern] / total_prob;
    result += normal_prob * Math.log2(1 / normal_prob);
  }
  return result;
}