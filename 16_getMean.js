// 16/366
// get Mean of an array



function getAverage(marks) {

    return Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length);
}
// function getAverage(marks) {

//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     return Math.floor(sum / marks.length);

// }

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));