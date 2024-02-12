// 8/366
// Count sheep


var countSheep = function (num){
    // let res = '';

    // for(let i = 1; i <= num;i++){
    //     res += `${i} sheep...`;
    // }
    // return res;

    return [...Array(num)].map((_, i)=>`${i+1} sheep...`).join('');
  }

  console.log(countSheep(3))