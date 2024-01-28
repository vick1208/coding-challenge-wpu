function smash(words) {
    return words.join(' ');
}

// function smash(words) {
//     let ret = '';
//     for (let i = 0; i < words.length; i++) {
//         ret += words[i];
//         if (i != words.length - 1) {
//             ret += ' ';
//         }        
//     }
//     return ret;
// }

// const smash = (words) => words.join(' ');




console.log(smash(["this", "is", "a", "really", "long", "sentence"]));