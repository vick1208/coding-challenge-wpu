// 26/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072
// Thinkful - Logic Drills: Traffic light

// function updateLight(current) {
//     return current === 'green'?'yellow':current === 'yellow'?'red':'green';
// }
// function updateLight(current) {
//     if (current === 'green') {
//         return 'yellow';
//     } else if(current === 'yellow'){
//         return 'red'
//     } else {
//         return 'green'
//     }
// }

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]

console.log(updateLight("yellow"));