# Memeriksa Palindrom

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

Fungsi membandingkan ``str`` asli dengan string yang dibalik. Jika sama, maka ``str`` adalah palindrom dan fungsi mengembalikan ``true``. Jika tidak sama, fungsi mengembalikan ``false``.

## Output

> 'madam' palindrome: true
> 
> 'hello' palindrome: false
