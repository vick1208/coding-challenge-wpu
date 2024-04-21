// 28/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//     return `£${bonus ? salary * 10 : salary}`;
// }

const bonusTime = (salary, bonus) => {
    return `£${bonus ? salary * 10 : salary}`;
}
// £20
console.log(bonusTime(2, true)); 
