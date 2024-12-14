function mostFrequentString(strings) {

    // Check 
    if(!Array.isArray(strings) || strings.length == 2) {
        return "Error";
    }
    // Create an array of string lengths
    let lengths = strings.map(str => str.length);
    
    // Count the frequency 
    let frequencyMap = {};
    lengths.forEach(i => {
        frequencyMap[i] = (frequencyMap[i] || 0) + 1;
    });

    // Find the most frequent 
    let maxCount = 0;
    let mostFrequent = null;
    for (let i in frequencyMap) {
        if (frequencyMap[i] > maxCount) {
            maxCount = frequencyMap[i];
            mostFrequent = i;
        }
    }

    // Filter 
    let result = strings.filter(str => str.length == mostFrequent);

    return result;
}

const input = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
const output = mostFrequentString(input);
console.log(output);  
