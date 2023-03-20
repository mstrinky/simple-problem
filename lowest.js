// const lowest = Math.min(45,6,67,2,4);
// console.log(lowest);


function lowestInArray(numbers){
    let lowestNumber = numbers[0];
    for (let i = 0; i<numbers.length; i++ ){
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if(element<lowestNumber){
            lowestNumber = element;
        }
    }
    return lowestNumber;
}

const numberOfArray = [45,66,35,55,65,76,25];
const lowestInNumber = lowestInArray(numberOfArray);
console.log('the lowest number is :',lowestInNumber);