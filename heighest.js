function lowestInArray(numbers){
    let heighestNumber =numbers[0];
for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    console.log(element);
    if(element > heighestNumber){
        heighestNumber = element;
    }
}
return heighestNumber;
}
const heights = [167,190,120,165,137,265];
const heighest = lowestInArray(heights);
console.log('the heighest number is :',heighest);