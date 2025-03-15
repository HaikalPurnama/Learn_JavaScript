# Konversi Fahrenheit ke Celsius

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
