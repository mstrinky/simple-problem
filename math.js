// console.log('hello world');
const result = Math.pow(2,3);
console.log(result);

const myYear = 21;
const hisYear = 23;
const gap =Math.abs (myYear - hisYear);
// console.log (gap);
if(gap<=2){
    console.log('perfect match');
}
else{
    console.log('not perfect match');
}

const cgpa = 3.93;
const result2 = Math.round(cgpa);
console.log(result2);
const result3 = Math.ceil(cgpa);
console.log(result3);
const result4 = Math.floor(cgpa);
console.log(result4);

// random 
const math = Math.round(Math.random()*10);
console.log(math);