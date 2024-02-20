// 17/366
// Area or Perimeter

const areaOrPerimeter = function (l, w) {
    // if (l === w) {
    //     return l * w;
    // } else {
    //     return (l + w) * 2
    // }

    return (l === w) ? l * w : (l + w) * 2;
};
console.log(areaOrPerimeter(2, 2));
