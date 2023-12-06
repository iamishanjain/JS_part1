const number = [2,3,4,5,6];

const square = function(number){
    return number*number;
}

const squareNumer = number.map(square);
console.log(squareNumer);