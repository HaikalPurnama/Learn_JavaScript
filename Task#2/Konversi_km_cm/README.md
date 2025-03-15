# Konversi Kilometer ke Centimeter

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
