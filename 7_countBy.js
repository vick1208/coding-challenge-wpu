// function countBy(x, n) {
//     let z = [];

//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// function countBy(x,n){
//     return [...Array(n)].map((_, i) => (i + 1) * x);   
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);
console.log(countBy(2,8));