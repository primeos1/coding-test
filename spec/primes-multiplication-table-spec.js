describe("Primes multiplcation table", function() {
  let primes = require('../src/primes-multiplication-table.js');


  describe("isPrime", function() {
  it("determines if a given integer is prime", function() {
    expect(primes.isPrime(0)).toBe(false);
    expect(primes.isPrime(1)).toBe(false);
    expect(primes.isPrime(2)).toBe(true);
    expect(primes.isPrime(3)).toBe(true);
    expect(primes.isPrime(4)).toBe(false);
    expect(primes.isPrime(13)).toBe(true);
    expect(primes.isPrime(99)).toBe(false);
    expect(primes.isPrime(105943)).toBe(true);
  });
  });

  describe("and generatePrimesArray", function() {
  it("generates an array of numbers found to be prime, up to n numbers", function() {
    expect(primes.generatePrimesArray(0)).toEqual([]);
    expect(primes.generatePrimesArray(1)).toEqual([2]);
    expect(primes.generatePrimesArray(2)).toEqual([2, 3]);
    expect(primes.generatePrimesArray(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    expect(primes.generatePrimesArray(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
                                                    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
  });

  describe("multiplyPrimes", function() {
  it("generates an array of arrays, corresponding to table rows", function() {
    expect(primes.multiplyPrimes([])).toEqual(null);
    expect(primes.multiplyPrimes([2])).toEqual([[null, 2], [2, 4]]);
    expect(primes.multiplyPrimes([2, 3])).toEqual([[null, 2, 3], [2, 4, 6], [3, 6, 9]]);
    expect(primes.multiplyPrimes([2, 3, 5, 7])).toEqual([[null, 2, 3, 5, 7], [2, 4, 6, 10, 14], [3, 6, 9, 15, 21], 
                                                      [5, 10, 15, 25, 35], [7, 14, 21, 35, 49]]);
    expect(primes.multiplyPrimes([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])[10][10]).toEqual(841);
  });
  });
});

