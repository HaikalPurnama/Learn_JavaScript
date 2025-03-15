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
