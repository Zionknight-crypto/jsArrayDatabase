// My own database array version 1:

var headArray = ['First Name:', 'Last Name:', 'City:', 'Postal Code:'];
var firstArray = ['David', 'Hauser', 'Helsinki', '000'];
var secondArray = ['Michel', 'Zappa', 'Barcelona', '111'];
var thirdArray = ['Sara', 'Leskinen', 'London', '222'];
var forthArray = ['Kami', 'Cactus', 'Moscow', '333'];
const space = ' ';
var dataBaseArray = headArray + firstArray + secondArray + thirdArray + forthArray;
console.log('My Data Base Array'.toUpperCase());
console.log('');

var dataBaseArray = [
    ['First Name:', 'Last Name:', 'City:', 'Postal Code:'],
    ['David', 'Hauser', 'Helsinki', '000'],
    ['Michel', 'Zappa', 'Barcelona', '111'],
    ['Sara', 'Leskinen', 'London', '222'],
    ['Kami', 'Cactus', 'Moscow', '333']
];

//First Name
var d1 = dataBaseArray[0][0]; // heading
console.log(d1.toUpperCase());
console.log('');
var d2 = dataBaseArray[1][0]; //first name
console.log(d2);
var d3 = dataBaseArray[2][0]; // second name
console.log(d3);
var d4 = dataBaseArray[3][0]; // city
console.log(d4);
var d5 = dataBaseArray[4][0]; // postal code
console.log(d5);
console.log('');
var person1Info = [d1 + space + d2 + space + d3 + space + d4 + space + d5];
//console.log(person1Info);

//Last Name
var m1 = dataBaseArray[0][1]; // heading
console.log(m1.toUpperCase());
console.log('');
var m2 = dataBaseArray[1][1]; //first name
console.log(m2);
var m3 = dataBaseArray[2][1]; // second name
console.log(m3);
var m4 = dataBaseArray[3][1]; // city
console.log(m4);
var m5 = dataBaseArray[4][1]; // postal code
console.log(m5);
console.log('');
var person2Info = [m1 + space + m2 + space + m3 + space + m4 + space + m5];
//console.log(person2Info);

//City
var s1 = dataBaseArray[0][2]; // heading
console.log(s1.toUpperCase());
console.log('');
var s2 = dataBaseArray[1][2]; //first name
console.log(s2);
var s3 = dataBaseArray[2][2]; // second name
console.log(s3);
var s4 = dataBaseArray[3][2]; // city
console.log(s4);
var s5 = dataBaseArray[4][2]; // postal code
console.log(s5);
var person3Info = [s1 + space + s2 + space + s3 + space + s4 + space + s5];
//console.log(person3Info);

//Postal Code
console.log('');
var k1 = dataBaseArray[0][3]; // heading
console.log(k1.toUpperCase());
console.log('');
var k2 = dataBaseArray[1][3]; //first name
console.log(k2);
var k3 = dataBaseArray[2][3]; // second name
console.log(k3);
var k4 = dataBaseArray[3][3]; // city
console.log(k4);
var k5 = dataBaseArray[4][3]; // postal code
console.log(k5);
var person4Info = [k1 + space + k2 + space + k3 + space + k4 + space + k5];
//console.log(person4Info);
console.log('');

// Final Array view
allPersons = [person1Info + person2Info + person3Info + person4Info];
console.log(allPersons);