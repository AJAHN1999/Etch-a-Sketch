function findNumbersDivisibleBy600InRange(start, end) {
    const results = [];
  
    // Loop through the specified range of numbers
    for (let i = start; i <= end; i++) {
      // Check if the number is divisible by 600
      if (i % 600 === 0) {
        results.push(i);
      }
    }
  
    return results;
  }
  
  // Specify the range (1 to 100)
  const startRange = 1;
  const endRange = 100;
  
  // Call the function and log the results
  const divisibleBy600NumbersInRange = findNumbersDivisibleBy600InRange(startRange, endRange);
  console.log(divisibleBy600NumbersInRange);
  