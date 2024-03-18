// 23/366
// Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//     const res = [];
//     for (let i = 1; i <= n; i++) {
//         res.push(i);
//     }
//     return res;
// }

function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}

console.log(monkeyCount(10));
