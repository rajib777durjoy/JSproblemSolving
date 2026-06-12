const number = [20, 30, 40, 50, 50, 60, 60, 90, 33, 10]
const DuplicateNumberFind = (num) => {
    // console.log(num)
    let newArray = []
    const duplicate = num.map((current, index, array) => {

        // console.log(array.indexOf(array[index]),'cur:',index)
        if (array.indexOf(array[index]) === index) {
            return newArray.push(current)
        }
    })
    return newArray;
}
const result = DuplicateNumberFind(number);
