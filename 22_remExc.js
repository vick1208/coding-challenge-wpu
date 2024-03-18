// 22/366
// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// function removeExclamationMarks(s) {
//     let result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== '!') {
//             result += s[i];
//         }
//     }
//     return result;

// }
// function removeExclamationMarks(s) {
//     return s.split("!").join("");
// }
function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
}

console.log(removeExclamationMarks("Hello!!!! World!!!!!!"));
