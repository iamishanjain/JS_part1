//trim method

//let firstName = "ishan jain";
//console.log(firstName);
//console.log(firstName.length);
//let newString = firstName.trim();
//console.log(newString);
//console.log(newString.length);

//slice method

//let newString = firstName.slice(0,6);
//console.log(newString);

//filter method

//const age = [12,18,120,21];
//const student = age.filter(age => age>18);

//console.log(student);

//map method

//const money = [20,30,40];
//const newmoney = money.map(money => '$' + money);
//console.log(newmoney);

//reduce method

//const age = [20,30,5,5];
//const total = age.reduce((accumulator, currentValue) => accumulator + currentValue);
//console.log(total);

//forEach method

//const hii = ['hey', 'hoo', 'hiii'];
//hii.forEach(hii => console.log(hii));

//ternary operator

//let age = 23;
//let firstName = "Ishan";
//const drink = firstName[0] >= "I" && age >= 17 ? "true" : "false";
//console.log(drink);

//nested if else Game

//let wNumber = 20;
//let userGuess = +prompt("Guess the Number");  //prompt will give output in string form so we will have to use + to convert it in number.

// if(userGuess === wNumber){
//    console.log("good");
// }
// else {
//    if(userGuess > wNumber){
//     console.log("big number");
// }
// else {

//     console.log("small number");
// }
// }

// let temp = 21;

// if(temp < 0){
//     console.log("extremely cold");
// }else if (temp< 16) {
//     console.log("nornal cold");
// }
// else if (temp <25) {
//     console.log("normal");
// }
// else if (temp > 30) {
//     console.log("liyttl e heat")
// }else{
//     console.log("very hot");
// }

//switch statement

// let day = 2;

// switch(day){
//     case 1: 
//     console.log("monday");
//     break;
//     case 2: 
//     console.log("tuesay");
//     break;

// }


//let num = 100;
// let total = 0;
// let i = 0;

// while (i < 11) {
//     total = total+i;
//     i++;
// }
// console.log(total);

// let total = (num*(num+1)/2);
// console.log(total);

//for loop
// let i, num = 10;
// for(i = 0; i<11; i++)
// {
//   total = (num*(num+1)/2);
// }
// console.log(total);

//array push

// let fruits = ["kiwi","grapes","apple"];
// // fruits.push("banana");
//  console.log(fruits);

//  let poppedFruit = fruits.pop();
//  console.log(fruits);
//  console.log("popped fruit si", poppedFruit);

//  fruits.unshift("banana");
//  fruits.unshift("myfruits");
//  console.log(fruits);
// fruits.shift("kiwi");
// console.log(fruits);

// Primitive data type

// let num1 = 5;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log(num1);
// console.log(num2);

// Reference data type

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// let array1 = ["item1", "item2"];
// // let array2 = array1.slice(0);
// //array2 = [].concat(array1);

// //new method
// //Spread Operator
// let array2=[...array1];
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// use of spread operator

// let name = ["ishan","pranay","shahid"];
// let fname = ["komal","juhi"];

// let allnames = [...name, ...fname];
// let morenames = ["hello", ...allnames];
// console.log(morenames);

// let name = ["ishan","pranay","shahid"];

// for(let i=0; i<name.length; i++){
//     console.log(i);
//     console.log(name[name.length-1]);
// }

// let name2= [];
// for(let i = 0; i<name.length; i++){
//     name2.push(name[i].toUpperCase());
// }
// console.log(name2);

// For of loop

// const names = ["ishan","pranay","shahid"];
// const names2 = [];
// for(let name of names ){
//     names2.push(name.toUpperCase());
// }
// console.log(names2);

// for in loop

// const names = ["ishan","pranay","shahid"];

// for(let index in names){
//     console.log(names[index]);
// }

// array destructuring

// const array = ["value1", "value2"];

// let [myarray1, myarray2] = array;

// console.log(myarray1);
// console.log(myarray2);

// when we want to insert value3 to myarray 2 we will use 2 commas

// const array = ["value1", "value2", "value3"];

// let [myarray1, , myarray2] = array;

// console.log(myarray1);
// console.log(myarray2);


// const array = ["value1", "value2", "value3", "value4"];

// let [myarray1, myarray2, ...myNewarray] = array;

// console.log(myarray1);
// console.log(myarray2);
// console.log(myNewarray);

