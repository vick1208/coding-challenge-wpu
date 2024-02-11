// Day 12
// Array plus array


// function arrayPlusArray(arr1, arr2) {

//     let allSum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         allSum += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         allSum += arr2[i];
//     }

//     return allSum;


// }

// function arrayPlusArray(arr1, arr2) {

//     let allSum = 0;

//     for (let i = 0; i < arguments.length;i++){
//         for (let j = 0; j < arguments[i].length; j++) {
//             allSum += arguments[i][j];            
//         }
//     }

//     return allSum;


// }
function arrayPlusArray(arr1, arr2) {
    // gabungkan dengan concat dan gunakan reduce untuk menjumlahkan seluruh nilai array
    return arr1.concat(arr2).reduce((acc, curr) => acc + curr);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));




