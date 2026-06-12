const nums=14
const fizzBuzz=(num)=>{
const number = Number(num);

if(number%3 === 0 && number % 5 ===0){
    return 'The number is fizzBuzz'
}
if(number%3 ===0){
    return 'This number is Fizz'
}
if(number%5 === 0){
    return "This number is Buzz"
}
return 'Not fizzBuzz number '

}
const result = fizzBuzz(nums);
