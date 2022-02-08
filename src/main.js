import get_result from "./controller/get_result";
import guess from "./controller/guess"

async function solve() {
    guess("crane");
    await new Promise(r => setTimeout(r, 2500));
    var answer = get_result(0);
    console.log(answer);
}

solve()