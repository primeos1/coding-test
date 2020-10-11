// A program that prints out a multiplication table of the first 10 prime numbers.

module.exports = {

  // Store first n primes, use isPrime to determine if a given number is prime
  generatePrimesArray: function(n) {
    let primes = []
    let i = 0

    while (primes.length < n) {
      if (this.isPrime(i)) {
        primes.push(i);
      }

      i += 1;
    }

    return primes;
  },

  // Determine if a number is prime, called by generatePrimesList
  isPrime: function(number) {
    if (number <= 1) {
      return false;
    }
    
    const numberSqrt = Math.floor(Math.sqrt(number));
    let i = 2;
    while (i <= numberSqrt) {
      if (number % i === 0) {
        return false;
      }

      i += 1;
    }

    return true;
  },

  // Complete multiplication of primes to fill table
  multiplyPrimes: function(primesArray) {
    if (primesArray.length === 0) {
      return null;
    }

    let firstArray = [null].concat(primesArray);
    let multipliedPrimes = [firstArray];

    primesArray.forEach(function(prime) {
      let newRow = [prime];
      primesArray.forEach(function(primeToMultiplyBy) {
        newRow.push(prime * primeToMultiplyBy);
      });

      multipliedPrimes.push(newRow);
    });

    return multipliedPrimes;
  },

  // Display table with the values from multiplyPrimes()
  displayTable: function(arraysToPrint) {
    if (arraysToPrint === null) {
      console.log("Oops, you told me you wanted zero primes! So here's a nonexistent table.");
      return;
    }
    const arrayIdx = arraysToPrint.length - 1;
    const spacesRequired = arraysToPrint[arrayIdx][arrayIdx].toString().length + 1;

    arraysToPrint.forEach(function(array) {
      let rowString = '';
      array.forEach(function(product) {
        if (product === null) {
          rowString = rowString.concat(' '.repeat(spacesRequired));
        } else {
          productLength = product.toString().length;
          rowString = rowString.concat(' '.repeat(spacesRequired - productLength));
          rowString = rowString.concat(product.toString());
        }
      });

      console.log(rowString);
    });
  },

  makePrimesMultTable: function(n) {
    let primesList = this.generatePrimesArray(n);
    let multipliedPrimes = this.multiplyPrimes(primesList);
    this.displayTable(multipliedPrimes);
  }

}
