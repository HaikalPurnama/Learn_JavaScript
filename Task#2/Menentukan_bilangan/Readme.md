# Menentukan Bilangan Genap atau Ganjil

Program ini menentukan apakah suatu bilangan bulat adalah genap atau ganjil.

## Implementasi Code

```
function isEven(n){
    if (n % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
}

console.log(`10000 adalah bilangan ${isEven(1000)}`);
console.log(`10001 adalah bilangan ${isEven(1001)}`); 

```

## Penjelasan

Fungsi ``isEven`` menerima satu parameter, yaitu ``n``, yang merupakan bilangan bulat.

Fungsi menggunakan operator ``modulo %`` untuk mendapatkan sisa pembagian ``n`` dengan 2.

Jika sisa pembagian adalah 0, maka ``n`` adalah ``genap`` dan fungsi mengembalikan ``true``.

Jika sisa pembagian bukan 0, maka ``n`` adalah ``ganjil`` dan fungsi mengembalikan ``false``.

## Output

> 10000 adalah bilangan genap
>
> 10001 adalah bilangan ganjil
