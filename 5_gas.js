// Hari ke-5
// How many gas?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    return distanceToPump <= fuelLeft * mpg ;

  };

console.log(zeroFuel(150,25,2));

