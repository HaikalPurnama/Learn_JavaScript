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