const str='hello world'
const reverseString=(str)=>{
let prevStr=''
const arrayStr= Array.from(str);
arrayStr.forEach(e=>{
 prevStr = e + prevStr;
})
return prevStr;
}
const result = reverseString(str); 