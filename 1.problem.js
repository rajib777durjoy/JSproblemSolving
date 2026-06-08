
const swapTwoVariable=(a,b)=>{
[a,b]=[b,a]
return {a,b}
}
const run =swapTwoVariable(5,10)
console.log(run)