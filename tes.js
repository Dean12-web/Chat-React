function findMinMaxSum(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Calculate the sum of the first four elements for minimum value
    const minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);

    // Calculate the sum of the last four elements for maximum value
    const maxSum = arr.slice(1).reduce((acc, num) => acc + num, 0);

    // Print the results
    console.log(minSum, maxSum);
}

// Example usage:
const numbers = [1, 3, 5, 7, 9];
numbers.sort((a, b) => a - b)
const min = numbers.slice(0, 4).reduce((acc, num) => acc + num, 0)
const max = numbers.slice(1).reduce((acc, num) => acc + num, 0);

console.log(min, max)
// findMinMaxSum(numbers);
