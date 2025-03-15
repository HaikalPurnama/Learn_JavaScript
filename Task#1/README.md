# Task 1 - JavaScript
![Screenshot 2025-03-08 001645](https://github.com/user-attachments/assets/5bfd1fac-1a32-4d42-bdaa-446563d306bf)

This repository contains a collection of basic JavaScript exercises covering fundamental concepts such as mathematical operations, string manipulation, and date processing.

#### Exercise Overview

  1. Calculate the area of a rectangle
  2. Calculate the diameter, circumference, and area of a circle
  3. Find the third angle of a triangle given two angles
  4. Calculate the difference between two dates in days
  5. Display name initials in uppercase


## 1. Calculate the are of a rectangle

Code :

```
let length = 5;
let width = 3;
let area = length * width;
console.log(`Length: ${length} Width: ${width} -> Area = ${area}`);
```
Output :

> Length: 5 Width: 3 -> Area = 15

## 2. Calculate the Diameter, Circumference, and Area of circle

Code : 

```
let radius = 5;
let diameter = radius * 2;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * radius * radius;
console.log(`Radius: ${radius} -> Diameter = ${diameter}, Circumference = ${circumference.toFixed(4)}, Area = ${areaCircle.toFixed(3)}`);
```
Output :

> Radius: 5 -> Diameter = 10, Circumference = 31.4159, Area = 78.540

## 3. Find the third angle of a triangle given two angles

Code : 

```
let a = 80;
let b = 65;
let c = 180 - (a + b);
console.log(`Given angles: a = ${a}°, b = ${b}° → The third angle is: ${c}°`);
```
Output :

> Given angles: a = 80°, b = 65° → The third angle is: 35°

## 4. Calculate the difference between two dates in days

Code :
```
let date1 = new Date('2024-03-19');
let date2 = new Date('2024-03-21');
let difference = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(`Days difference between ${date1.toDateString()} and ${date2.toDateString()} → ${difference} days`);
```
Output :

> Days difference between Tue Mar 19 2024 and Thu Mar 21 2024 → 2 days

## 5. Display name initials in uppercase

Code :
```
let fullName = "John Doe";
let initials = fullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');

let FullName = "Haikal Purnama Saputra";
let Initials = FullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');
console.log(initials);
console.log(Initials);
```
Output :

> JD
>
> HPS
