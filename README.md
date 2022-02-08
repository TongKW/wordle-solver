# wordle-solver
Javascript program that automatically solves Wordle based on information entropy.
## Demo
![](https://github.com/TongKW/wordle-solver/blob/main/Demo.gif)
## How to use
1. Git clone this project and run "npm run build"
2. Go to https://www.powerlanguage.co.uk/wordle/
3. Open console
4. Copy the content in dist/bundle.js to the console and run

## Credit
Thanks to 3Blue1Brown's video, Solving Wordle using information theory
https://www.youtube.com/watch?v=v68zYyaEmEA

## Remark
There is still some features haven't implemented:
  - consider the cost of guessing at certain round.
  - applying sigmoid function to the word frequency map
