function isEven(n){
    if (n % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
}

console.log(isEven(1000));
console.log(isEven(10001)); 