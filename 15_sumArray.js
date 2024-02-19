// 15/366
// Sum without highest and lowest number


// function sumArray(array) {
//     if (array === null || array.length <= 2) return 0;
//     const sortedArr = array.sort((a, b) => a - b);
//     let res = 0;
//     for (let i = 1; i < sortedArr.length - 1; i++) {
//         res += sortedArr[i];
//     }
//     return res;
// }
function sumArray(array) {
    if (array === null || array.length <= 2) return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr);
}

console.log(sumArray([0, 1, 6, 10, 10]));
