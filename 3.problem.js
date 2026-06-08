
const findTheLargestNumber = (array) => {
    let maxNum;
    const LargestNum = array.reduce((prev, curr) => {
        if (prev > curr) {
            return maxNum = prev
        }
        else {
            return maxNum = curr;
        }
    }, 0)
    return maxNum;

}
const result = findTheLargestNumber([2, 7, 9, 30, 40, 20,90,30])
console.log(result)