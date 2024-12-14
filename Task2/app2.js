function sumOfTwoLargest(strings) {
    // Check strings
    if(!Array.isArray(strings) || strings.length < 2) {
        return "Error";
    }
    // Find the largerst
    const max1 = Math.max(...strings);
    // Remover it from strings
    strings.splice(strings.indexOf(max1), 1);
    // Find the largerst again from strings
    const max2 = Math.max(...strings);
    return max2 + max1;
}

const numbers = [5];
const sum = sumOfTwoLargest(numbers);
console.log(sum);