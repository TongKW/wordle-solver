var freq_map = require('../data/freqmap.json');

/**
 * Return the probability of a word being the correct answer given a wordlist
 * @param {Array} wordlist    - Wordlist of available answers
 * @param {string} guess      - The guess word
 * return @param {float}      - The winning probability
 */
export default async function word_prob(wordlist, guess) {
  if (!wordlist.includes(guess)) return 0;
  const total = wordlist.reduce((partialSum, word) => partialSum + freq_map[word], 0);
  return freq_map[guess] / total;
}