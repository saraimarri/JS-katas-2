

//Sum Arrays
//--------------------------------------------------------------

function SumArray(arr){
let sum=0;

for (a of arr)
sum +=a;
return sum;
}

console.log(SumArray([1,5.2,4,0,-1])); //Output: 9.2
console.log(SumArray([])); //Output: 0
console.log(SumArray([-2.398]));  //Output: -2.398

//OR--------------------------------------------------------------

function SumArray(arr){

let sum=0;

//Wenn das Array leer ist, wird 0 zurückgegeben
for (i=0 ; i< arr.length; i++){
    sum += arr[i];
}
return sum ;
}
console.log(SumArray([1,5.2,4,0,-1]));
console.log(SumArray([]));
console.log(SumArray([-2.398]));


//Counting sheep
//--------------------------------------------------------------

function countSheeps(ArrofSheep) {// sheeps
  if (ArrofSheep === 0 || ArrofSheep === undefined) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < ArrofSheep.length; i++) {
    if (ArrofSheep[i] === true) {

      count++;
    }
  }
  return count;
}

console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,
  false,true,true,true,true,true,false,false,true,true]));



//Opposite number
//--------------------------------------------------------------

function OppositeNumber(Number) {
  return Number * -1;
}

console.log(OppositeNumber(1))
console.log(OppositeNumber(14))

console.log(OppositeNumber(-34))


//Sum of positive
//--------------------------------------------------------------
function positiveSum(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++)
{
 if (Math.sign(arr[i]) === 1){
  sum += arr[i];
 }
}
return sum;
}

console.log(positiveSum[1,-4,7,12]);

//Return Negative
//--------------------------------------------------------------

function makeNegative(num){
let newNum= num  ;


if (newNum > 0) {
  return newNum * -1;
} else {

return newNum;

}
}


console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12




//Reversed String
//--------------------------------------------------------------


function ReversedString(str){
return str.split("").reverse().join("");

}

console.log(ReversedString("world"));
console.log(ReversedString("word")); 




function sheep(countSheeps){
  if (countSheeps === null  || countSheeps===undefined ){
return 0;
  }

let sum=0;

for (let i= 0; i<countSheeps.length ; i++){

if (countSheeps[i] === true) {

sum++;
}
}
 return sum;

}

console.log(sheep([ true,true,true,false,true,true,true,true,true,false,true,false,true,false,
  false,true,true,true,true,true,false,false,true,true]))





  //Opposite Number
//--------------------------------------------------------------

  function OppositeNumber(num){

      return  num * -1; 

  }

console.log(OppositeNumber(1));
console.log(OppositeNumber(14));
console.log(OppositeNumber(-34));
console.log(OppositeNumber());


//MakeNegative
//--------------------------------------------------------------

function MakeNegative(num){

if (num <= 0){
return num;
}
else return   num * -1 ;

}


console.log(MakeNegative(1));
console.log(MakeNegative(-5));
console.log(MakeNegative(0));
console.log(MakeNegative());


//ReversedString
//--------------------------------------------------------------

function ReversedString(str){

return str.split("").reverse().join("");

}


console.log(ReversedString("world"));
console.log(ReversedString("word"));



//VowelCount
//--------------------------------------------------------------


function VowelCount(str){

let count = 0;

const vowel = ["a","e","i","o","u"];

for (i = 0 ; i < str.length ; i++)
if (vowel.includes(str[i])){

  count++;
}

return count;
}

console.log(VowelCount("abcdefjkrstuiov"));






















