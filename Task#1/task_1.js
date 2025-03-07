//Calculate area of rectangle

let length = 5;
let width = 3;
let area = length * width;
console.log(`Length: ${length} Width: ${width} -> Area = ${area}`);


//Calculate Diameter, Circumference, and Area of a Circle
let radius = 5;
let diameter = radius * 2;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * radius * radius;
console.log(`Radius: ${radius} -> Diameter = ${diameter}, Circumference = ${circumference.toFixed(4)}, Area = ${areaCircle.toFixed(3)}`);


//Calculate the Third Angle of a Triangle
let a = 80;
let b = 65;
let c = 180 - (a + b);
console.log(`Given angles: a = ${a}°, b = ${b}° → The third angle is: ${c}°`);

//Calculate Difference Between Two Dates
let date1 = new Date('2024-03-19');
let date2 = new Date('2024-03-21');
let difference = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(`Days difference between ${date1.toDateString()} and ${date2.toDateString()} → ${difference} days`);


// Print Initials in Uppercase
let fullName = "John Doe";
let initials = fullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');

let FullName = "Haikal Purnama Saputra";
let Initials = FullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');
console.log(initials);
console.log(Initials);