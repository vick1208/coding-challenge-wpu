 // 2/366
// reversed sequence








// const revSeq = (n) => { 

//     const arr = [];

//     for(let i = n; i >= 1;i--){
//         arr.push(i);
//     }

//     return arr;
// };

const revSeq = (n) => [...Array(n)].map((el, i) => n - i);



console.log(revSeq(5));