# Task#2 - JavaScript

![Screenshot 2025-03-14 153525](https://github.com/user-attachments/assets/7a61c9f4-8977-4123-bc68-d43a1fc01a34)

#### Exercise Overview

  1. Konversi Fahrenheit ke Celsius
  2. Konversi Centimeter ke Kilometer atau Sebaliknya
  3. Menentukan Bilangan Genap atau Ganjil
  4. Menghapus Kemunculan Pertama String Pencarian
  5. Memeriksa Palindrom

# 1. Konversi Fahrenheit ke Celsius

Program ini menerima suhu dalam Fahrenheit sebagai input dan mengonversinya ke Celsius menggunakan rumus

> Celcius = (fahrenheit - 32) * 5 / 9;

## Implementasi Code

```

 let fahrenheit = 50;
  let celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit} derajat Fahrenheit sama dengan ${celsius} derajat Celsius`);

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
```

## Penjelasan

Fungsi ``fahrenheitToCelsius`` menerima satu parameter, yaitu ``fahrenheit``, yang merupakan suhu dalam derajat Fahrenheit.

Fungsi ini menggunakan rumus konversi ``(Fahrenheit - 32) * 5 / 9`` untuk menghitung suhu dalam derajat Celsius.

Hasil perhitungan langsung dikembalikan oleh fungsi.

## Output

> 50 derajat Fahrenheit sama dengan 10 derajat Celsius


# 2. Konversi Kilometer ke Centimeter

Program ini mengonversi antara centimeter dan kilometer berdasarkan input satuan yang diberikan

## Implementasi Code

```
function convertDistance(value, unit) {
    if (unit === 'cm') {
        return `${value / 100000} km`;
    } else if (unit === 'km') {
        return `${value * 100000} cm`;
    }else {
        return "unit tidak valid";
    }
}


//Implementasi
console.log(convertDistance(100000, 'cm'));
console.log(convertDistance(1, 'km'));
```

## Penjelasan

Fungsi ``convertCmKm`` menerima dua parameter: ``value`` (nilai yang akan dikonversi) dan ``unit`` (satuan awal, 'cm' atau 'km').

Fungsi menggunakan percabangan ``if-else if-else`` untuk menentukan jenis konversi yang akan dilakukan.

Jika ``unit`` adalah 'cm', maka nilai dibagi 100000 untuk mendapatkan kilometer.

Jika ``unit`` adalah 'km', maka nilai dikalikan 100000 untuk mendapatkan centimeter.

Jika ``unit`` bukan 'cm' atau 'km', fungsi mengembalikan pesan "Satuan tidak valid".

## Output

> 1 km
> 100000 cm


# 3. Menentukan Bilangan Genap atau Ganjil

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


# 4. Menghapus Kemunculan Pertama String Pencarian

Program ini menghapus kemunculan pertama dari string pencarian dalam string yang diberikan.

## Implementasi Code

```
  function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + searchStr.length);
    } else {
      return str;
    }
  }
  
  const str = "Haikal Purnama";
  const searchStr = "ika";
  const result = removeFirstOccurrence(str, searchStr);
  console.log(`String sebelum penghapusan: ${str}`);
  console.log(`String setelah penghapusan: ${result}`);

```

## Penjelasan

Fungsi ``removeFirstOccurrence`` menerima dua parameter: ``str`` (string asli) dan ``searchStr`` (string yang akan dihapus).

Fungsi menggunakan metode ``indexOf()`` untuk menemukan indeks kemunculan pertama ``searchStr`` dalam ``str``.

Jika ``searchStr`` ditemukan, fungsi menggunakan ``slice()`` untuk membuat string baru tanpa ``searchStr``.

Jika ``searchStr`` tidak ditemukan, fungsi mengembalikan ``str`` asli.

## Output

> String sebelum penghapusan: Haikal Purnama
>
> String setelah penghapusan: Hal Purnama


# 5. Memeriksa Palindrom

Program ini memeriksa apakah suatu string adalah palindrom (dibaca sama dari depan dan belakang).

## Implementasi Code

```
function isPalindrome(str){
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

let str = "madam";
let result = isPalindrome(str);
console.log(`'${str}' palindrome: ${result}`);

str = "hello";
result = isPalindrome(str);
console.log(`'${str}' palindrome: ${result}`);

```
Fungsi ``isPalindrome`` menerima satu parameter yaitu ``str``, yang merupakan string yang akan diperiksa.

Fungsi mengubah ``str`` menjadi huruf kecil menggunakan ``toLowerCase()`` untuk mengabaikan perbedaan huruf besar/kecil.

Fungsi membalikkan ``str`` menggunakan ``split('').reverse().join('').``

Fungsi membandingkan ``str`` asli dengan string yang dibalik. Jika sama, maka ``str`` adalah palindrom dan fungsi mengembalikan ``true``. 

Jika tidak sama, fungsi mengembalikan ``false``.

## Output

> 'madam' palindrome: true
> 
> 'hello' palindrome: false
