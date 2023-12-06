// function sayHello(){
//     console.log("hello");
// }

// sayHello();
// sayHello();

// function sumTwo(number1, number2){
//     return number1 + number2;
// }
// const value = sumTwo(4,5);
// console.log(value);
// console.log(sumTwo(4,5));

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4));

// short form of function
// isEven
//input : 1number
//output: true, flase

// function isEven(number){
//     return number%2 == 0;
// }
// console.log(isEven(5));

//function
//input: String
//output: FirstCharacter

// function FirstCharacter(anyString){
//     return anyString[0];
// }
// console.log(FirstCharacter("hello"));

//function
//input : array target(number)
//output : index of target if target present in array

// function findTarget(array, target){
//    for(i = 0; i<array.length; i++){
//     if(array[i] == target){
//         return i;
//     }
//    }
//    return -1;
// }
// const myArray = [1,3,5,7,9];
// const ans = findTarget(myArray, 7);
// console.log(ans);





// <---------------function expression------------------>

// const singHappy = function() {
//     console.log("happy");
// }
// singHappy();



//<------------- Arrow function-------------->

// const singHappy = () => {
//          console.log("happy");
//      }
//      singHappy()
//      singHappy()
//      singHappy()


// const isEven = (number) => {
//     return number%2 == 0;
// }
// console.log(isEven(5));

// const func = (anyString) =>{
//     return anyString[0];
// }
// console.log(func("hello"));


// const findTarget = (array, target) => {
//    for(i = 0; i<array.length; i++){
//     if(array[i] == target){
//         return i;
//     }
//    }
//    return -1;
// }
// const myArray = [1,3,5,7,9];
// const ans = findTarget(myArray, 9);
// console.log(ans);


// const isEven = (number) => number%2 === 0;   // writing arrow function in single line only we can remove paranthesis from parametr who are single.
// console.log(isEven(4));



// <--------------- function inside function ------------------->

// function start(){

//     const inside = () =>{
//         console.log("andar aa agye");
//     }
//     const add = (num1, num2) => num1+ num2;

//     console.log("andar");
//     inside();
//     console.log(add(4,5));
// }
// start();





// <--------------- Lexical Scope ------------------->

// function Lexical(){
//     let myVar = 20;
//   function myApp(){
//     let myVar = 1;
//     console.log("inside myApp", myVar);
//   }
//   myApp();
// }
// Lexical();


// function Lexical(){
//     let myVar = 20;
//   function myApp(){
//     // let myVar = 1;
//     console.log("inside myApp", myVar);
//   }
//   myApp();
// }
// Lexical();

// let myVar = 30;
// function Lexical(){
//     //let myVar = 20;
//   function myApp(){
//     //let myVar = 1;
//     console.log("inside myApp", myVar);
//   }
//   myApp();
// }
// Lexical();



// <---------- Block scope vs Funtion scope -----------> 

// let and const are block scope 
// var is function scope

// {
// let hello  = "hii";
// }
//   console.log(hello);  // cannot access hello

// {
// let hello = "hii";
// console.log(hello);
// }
// {
//   let hello = "hii 2";
//   console.log(hello);
// }                              because both blocks are diffeent  and same goes with const also.

// function myApp(){
//   if(true){
//     let firstName = "ishan";
//     console.log(firstName);
//   }
//   console.log(firstName);
// }
// myApp();

// function myApp(){
//   if(true){
//     var firstName = "ishan";
//     console.log(firstName);
//   }
//   console.log(firstName);
//   if(true){
//     console.log(firstName);
//   }
// }
// myApp();


// <------------ callback functions ------------>

// function myFunc2(){
//     console.log("inside myFunc2");
// }

// function myFunc(a){
//     a();
// }
// myFunc(myFunc2);

// function myFunc2(name){
//     console.log("inside myFunc2");
//     console.log('your name is ${name}')
// }

// function myFunc(callback){
//     console.log("heeyy inside func..");
//     callback();
// }
// myFunc(myFunc2);




// <------------ Function inside functions ------------>

// function myFunc(){
//     function Hello(){
//         console.log("hello");
//     }
//     return Hello;
// }
// const ans = myFunc();
// ans();


// function myFunc(){
//     function Hello(){
//         return "hello world";
//     }
//     return Hello;
// }
// const ans = myFunc();
// console.log(ans());





// <------------ This keyword ------------>

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();




// <------------ call,apply,bind keyword ------------>

// function about(hobby, favMusic){
//     console.log(this.firstName, this.age, hobby, favMusic);
// }
// const user1 = {
//     firstName: "ishan",
//     age: 7,
// }
// const user2 = {
//     firstName: "mohit",
//     age: 70,
// }

//user1.about.call(user2, "guitar", "heii"); //ham user2 mein bina about likh ehi user1 ke about ko use karke user2 mein use kar sakte hain with the help of call method kyuki isme this ki binding ho jaati hain jo bhi useer pan pass kare uske saath.

// about.apply(user1,["guitar", "hey"]); // in apply extra arguments can be passed in array

// const func = about.bind(user1, "guitar","heeeeee"); // in bind it returns function
// func();

//general mistake that occur
// const user1 = {
//     firstName: "ishan",
//     age: 7,
//     about : function (){
//         console.log(this.firstName, this.age);
//     }
//  }
// const myFunc = user1.about; // this is a comon mistake kyuki yaha par this bind nahi hua hain
// myFunc();

// const myFunc = user1.about.bind(user1); //ab yaha par this bind ho gaya hain
// myFunc();

// const userMethods = {
//     about : function(){
//         return this.firstName, this.age;
//     },
//     is18 : function(){
//         return this.age>=18;   
// }
// }
// function createUser (firstName, lastName, email, age, address, about)
// {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// };

// const hii = createUser("ishan","jain","h@gmail.com", "20", "singapore", "all good");
// const hii1 = createUser("ishan","jain","h@gmail.com", "21", "singapore", "all good");
// const hii2 = createUser("ishan","jain","h@gmail.com", "22", "singapore", "all good");
// const hii3 = createUser("mohit","jain","h@gmail.com", "23", "pore", "all good");
// console.log(hii.about());
// //console.log(hii1.about());
// //console.log(hii2.about());
// console.log(hii3.about());