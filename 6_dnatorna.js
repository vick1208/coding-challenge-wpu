// function DNAtoRNA(dna) {

//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         rna += (dna[i]==='T') ? 'U': dna[i] ;
//     }
//     return rna;
// }
// function DNAtoRNA(dna) {

//     return dna.split('').
//     map((e) => (e === 'T' ? 'U':e)).
//     join('');
// }

const DNAtoRNA = (dna) => dna.replaceAll('T','U');

console.log(DNAtoRNA('TTTT'));