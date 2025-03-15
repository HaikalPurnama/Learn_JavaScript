function isEven(n){
    if (n % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
}

console.log(`10000 adalah bilangan ${isEven(1000)}`);
console.log(`10001 adalah bilangan ${isEven(1001)}`); 