/**
 * Make a guess by clicking the corresponding characters of the word input
 * @param {string} word - The input word
 */
export default function guess(word) {
  var keyboard = document.querySelector("game-app").shadowRoot.querySelector("game-theme-manager").querySelector("game-keyboard").shadowRoot;
  for (var i = 0; i < word.length; i++) {
    var temp_char = word.charAt(i);
    keyboard.querySelector(`button[data-key='${temp_char}']`).click();
  }
  keyboard.querySelector("button[data-key='↵']").click();
}