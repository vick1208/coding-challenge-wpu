// 21/366
// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016


// function rentalCarCost(d) {
//     let discount = 0;

//     if (d >= 7) {
//         discount = 50;
//     } else if (d >= 3) {
//         discount = 20;
//     }

//     return d * 40 - discount;
// }
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

console.log(rentalCarCost(6))