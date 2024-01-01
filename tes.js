const arr = [2, 7, 11, 15]
const value = 20
function pairIndex(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return "<no way>"
}

// console.log(pairIndex(arr, value))

function wordBreakBruteForce(input, dictionary) {
    let result = '';

    function generateCombinations(start, currentCombination) {
        if (start === input.length) {
            result += "'" + currentCombination.join("', '") + "' ";
            return;
        }

        for (let end = start + 1; end <= input.length; end++) {
            const word = input.substring(start, end);
            if (dictionary.includes(word)) {
                generateCombinations(end, [...currentCombination, word]);
            }
        }
    }

    generateCombinations(0, []);
    return result.trim();
}

// Test case
// const inputString = "programmerit";
// const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];
// const output = wordBreakBruteForce(inputString, dictionary);
// // console.log("Input:", inputString);
// console.log(output);
// Output: 'pro', 'gram', 'program'


function findMaxProfit(prices) {
    if (prices.length < 2) {
        return "Not enough days to make a transaction";
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        // Update minimum price if a lower price is found
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            // Calculate the potential profit if selling at the current price
            const potentialProfit = currentPrice - minPrice;

            // Update maxProfit if the potential profit is greater
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }

    if (maxProfit === 0) {
        return "The price consistently goes down, no profit can be made";
    }

    return maxProfit;
}

// Test cases
const prices1 = [10, 15, 8, 7, 14];
console.log("Input:", prices1);
console.log("Output:", findMaxProfit(prices1)); // Output: 19

const prices2 = [100, 90, 80, 70];
console.log("Input:", prices2);
console.log("Output:", findMaxProfit(prices2)); // Output: The price consistently goes down, no profit can be made
