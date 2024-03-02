// 19/366
// Sum Mixed Array

// function sumMix(x){
//     let total = 0;
//     for (let i = 0; i < x.length; i++) {
//         total += Number(x[i]);
//     }
//     return total
// }

const sumMix = (x) => { 
    return x.reduce((a,c)=>a + Number(c),0);
}


console.log(sumMix([9, 3, '7', '3']))