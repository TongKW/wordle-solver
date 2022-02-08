import get_pattern from "./utils/get-pattern";
import guess from "./controller/guess"
import check_win from "./utils/check-win";
import filter_wordlist from "./utils/filter-wordlist";
import entropy from "./calculation/entropy";
import word_prob from "./utils/word-prob";

async function solve() {
  var total_wordlist = require('./data/wordlist.json');
  var wordlist = require('./data/wordlist.json');
  var guess_number = -1;
  // initial guess with "crane"
  var guess_word = "crane";
  var pattern = "AAAAA";
  
  await guess_round();

  while (!check_win()) {
    if (wordlist.length === 1) {
      guess(wordlist[0]);
      continue;
    }
    wordlist = filter_wordlist(wordlist, guess_word, pattern);
    console.log(wordlist);
    var top_score = 0;
    var top_word = "";
    for (var word of total_wordlist) {
      //var score = entropy(wordlist, word) + word_prob(wordlist, word);
      var score = entropy(wordlist, word)
      if (score > top_score) {
        top_score = score;
        top_word = word;   
      }
    }
    guess_word = top_word;
    await guess_round();
    //await new Promise(r => setTimeout(r, 250000));
  }

  async function guess_round() {
    guess_number += 1
    guess(guess_word);
    await new Promise(r => setTimeout(r, 2500));
    pattern = get_pattern(guess_number);
  }
}

solve()